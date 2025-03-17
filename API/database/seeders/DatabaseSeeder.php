<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(RoleSeeder::class);

        $admin = User::create([
            'name' => 'admin',
            'email' => 'admin@example.com',
            'password' => bcrypt('password'),
            'birthdate' => '1990-01-01',
            'phone' => '+33123456789',
            'rating' => 5,
        ]);

        $user = User::create([
            'name' => 'user',
            'email' => 'user@example.com',
            'password' => bcrypt('password'),
            'birthdate' => '1992-01-01',
            'phone' => '+33123456788',
            'rating' => 4,
        ]);

        $admin->assignRole('admin');
        $user->assignRole('user');

        $this->call(ProductSeeder::class);
    }
}
