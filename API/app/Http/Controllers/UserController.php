<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Log;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        $users->transform(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'birthday' => $user->birthday,
                'phone' => $user->phone,
                'address' => $user->address,
                'city' => $user->city,
                'state' => $user->state,
                'country' => $user->country,
                'zip' => $user->zip,
                'created_at' => $user->created_at,
                'role' => $user->getRoleNames(),
            ];
        });

        return response()->json($users, 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'birthday' => 'required|date',
            'phone' => 'required|string|max:255',
        ]);

        $user = User::create($validated);

        $user->assignRole($request->role);

        return response()->json($user, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(String $id)
    {
        $user = User::find($id);
        if ($user) {
            return response()->json(['user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'birthday' => $user->birthday,
                'phone' => $user->phone,
                'role' => $user->getRoleNames(),
            ]], 200);
        } else {
            return response()->json(['message' => 'User not found'], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, String $id)
    {

        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        Log::info($request->all());
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'password' => 'required|string|min:8',
            'birthday' => 'required|date',
            'phone' => 'required|string|max:255',
            'role' => 'required|string|max:255',
        ]);

        $user->update([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']),
            'birthday' => $validated['birthday'],
            'phone' => $validated['phone'],
        ]);

        $user->assignRole($validated['role']);

        return response()->json($user, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(String $id)
    {
        $user = User::find($id);
        if ($user) {
            $user->delete();
            $users = User::all();
            return response()->json(['message' => 'User deleted successfully', 'users' => $users], 200);
        } else {
            return response()->json(['message' => 'User not found'], 404);
        }
    }
}
