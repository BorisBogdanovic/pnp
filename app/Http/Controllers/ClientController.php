<?php

namespace App\Http\Controllers;

use App\Models\Client;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ClientController extends Controller
{

    
    public function getAllClients()
    {
        if (Auth::user()->is_admin === true) {
            $clients = Client::with('user:id,name,last_name','service:id,name')->paginate(10);
        } else {
            $clients = Client::with('user:id,name,last_name','service:id,name')
                ->where('user_id', Auth::id())
                ->paginate(10);
        }
    
        return response()->json([
            'status' => true,
            'data' => $clients,
            'message' => 'Clients retrieved successfully'
        ]);
    }
    
}
