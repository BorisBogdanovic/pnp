<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Igor',
            'last_name' => 'Pejic',
            'email' => 'admin@gmail.com',  
            'password' => Hash::make('igor123'),  
            'is_admin' => true,  
            'phone' => '1234567890',  
            'profile_image' => 'storage/images/profile.png',
            'status_id' => 1, 
            'city_id'=> 1
        ]);
    }
}
