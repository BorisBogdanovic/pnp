<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('login', [\App\Http\Controllers\AuthController::class, 'Login']);
Route::get('statuses', [\App\Http\Controllers\AuthController::class, 'statuses']);
Route::get('cities', [\App\Http\Controllers\AuthController::class, 'cities']);
Route::get('/check-invite/{token}', [\App\Http\Controllers\AuthController::class, 'checkInviteToken']);
Route::patch('register/{token}', [\App\Http\Controllers\AuthController::class, 'register']);

Route::post('logout', [\App\Http\Controllers\AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::get('users', [\App\Http\Controllers\UserController::class, 'getAllUsers'])->middleware('auth:sanctum');
Route::post('invite-user', [\App\Http\Controllers\AuthController::class, 'sendInvite'])->middleware('auth:sanctum');

Route::delete('user/{user}', [\App\Http\Controllers\UserController::class, 'deleteUser'])->middleware('auth:sanctum');




