<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Invite;
use App\Http\Requests\FiterUserRequest;
use App\Http\Requests\EditUserRequest;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getAllUsers(FiterUserRequest $request) 
{

    
    $users = User::where('is_admin', 0)  
        ->orderBy('name', 'ASC');

    if ($request->has('status')) {
        $users->where('status_id', $request->status);
    }

    if ($request->has('city')) {
        $users->where('city_id', $request->city); 
    }

    if ($request->has('search')) {
        $users->where(function($query) use ($request) {
            $query->where('name', 'LIKE', '%' . $request->search . '%')
                  ->orWhere('last_name', 'LIKE', '%' . $request->search . '%');
        });
        

    }

    return response()->json($users->paginate(12));
}

public function deleteUser(User $user)
{
    Invite::where('email',$user->email)->delete();
    
    $user->delete();

    return response()->json([
        'status' => true,
        'message' => 'User successfully deleted'
    ]);
}

public function editUser( EditUserRequest $request)
{

    $user = Auth::user();
    $user->update($request->all());

   

    return response()->json([
        'status' => true,
        'data' => $user,
        'message' => 'The user has been updated successfully'
    ]);
}

}


        