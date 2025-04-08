<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    
    protected $table = 'services'; // Naziv tabele u bazi

    protected $fillable = [
        'name',
        'price',
    ];
    public $timestamps = false;

    public function clients()
    {
        return $this->hasMany(Client::class);
    }
}
