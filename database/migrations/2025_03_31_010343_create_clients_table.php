<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
           
            $table->unsignedBigInteger('service_id');
            $table->foreign('service_id')
            ->references('id')
            ->on('services')
            ->onDelete('cascade');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
            $table->string('address');
            $table->string('client_name');
            $table->string('client_last_name');
            $table->string('phone');
            $table->string('email')->unique();
            $table->string('car_brand');
            $table->string('car_model');
            $table->string('register')->unique();;
            $table->string('vehicle_identification_number')->unique();
            $table->date('start_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};
