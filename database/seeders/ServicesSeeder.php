<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Service;

class ServicesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $list = [
            ['name' => 'Paket Srbija', 'price' => 5500],
            ['name' => 'Paket Evropa', 'price' => 7500],
            ['name' => 'Paket Super', 'price' => 10000],
            ['name' => 'Paket Grad', 'price' => 4000],
        ];

        foreach ($list as $a) {
            Service::create([  
                'name' => $a['name'],  
                'price' => $a['price']
            ]);
        }
    }
}
