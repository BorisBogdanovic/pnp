<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
    protected $fillable = [
        'service_id',       
        'user_id',          
        'address',          
        'phone',            
        'email',            
        'car_brand',        
        'car_model',        
        'register',         
        'vehicle_identification_number',  
        'start_date',   
        'client_name' ,
        'client_last_name' 
    ];



    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
