<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/login', function () {
    return Inertia::render('login');
})->name('login');

Route::get('/users', function () {
    return Inertia::render('users/index');
})->name('users');

Route::get('/users/create', function () {
    return Inertia::render('users/create');
})->name('users.create');

Route::get('/users/{id}', function () {
    return Inertia::render('users/update');
})->name('users.update');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
