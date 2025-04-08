<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\User;
use App\Models\Service;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ClientFactory extends Factory
{
    protected $model = Client::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'service_id' => $this->faker->numberBetween(1, 4), 
            'user_id' => User::inRandomOrder()->first()->id,
            'address' => $this->faker->address(),
            'client_name'=> $this->faker->firstName,
            'client_last_name'=> $this->faker->lastName,
            'phone' => $this->faker->phoneNumber(),
            'email' => $this->faker->unique()->safeEmail(),
            'car_brand' => $this->faker->company(), 
            'car_model' => $this->faker->word(), 
            'register' => strtoupper($this->faker->bothify('??-###-??')), 
            'vehicle_identification_number' => strtoupper($this->faker->bothify('1HGCM82633A######')),
            'start_date' => $this->faker->date(),
        ];
    }
}
