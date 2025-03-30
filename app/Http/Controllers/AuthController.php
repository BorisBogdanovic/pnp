<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\MailInviteRequest;
use App\Http\Requests\RegisterUserRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Invite;
use App\Models\City;
use App\Models\Status;
use Illuminate\Support\Facades\Mail;
use App\Mail\InvitationEmail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class AuthController extends Controller
{
    public function Login(LoginUserRequest $request){


        if (Auth::attempt($request->only('email', 'password'))) {

            $user = User::where('email', $request->email)->first();
           

        if ($user->status_id === 1) {  
            return response()->json([
                'status' => true,
                'message' => 'Welcome ' . $user->name . ' ' . $user->last_name,
                'data' => $user,
                'token' =>  $user->createToken('API token')->plainTextToken,
            ], 200);
        }
        return response()->json([
            'message' => 'Your account is not active. Please contact support.',
        ], 403);  
    } else {
       return response()->json([
            'message' => 'The provided credentials are incorrect.',
        ], 401);  
    }
}

public function logout()
{

    Auth::user()->currentAccessToken()->delete();

    return response()->json([
        'Message' => 'The user has been successfully logged out'
    ], 200);

}

public function sendInvite(MailInviteRequest $request) {
    
    $token = Str::random(30);


    $invite = Invite::create([
        'email' => \request('email'),
        'name' => \request('name'),
        'last_name' => \request('last_name'),
        'phone' => \request('phone'),
        'token' => $token,
        ]);

    $user = User::create([
        'email' => $invite->email,
        'password' => Hash::make(Str::random(10)),
        'name' => $invite->name,
        'last_name' => $invite->last_name,
        'phone' => (Str::startsWith($invite->phone, '+381') ? '' : '+381') . ltrim(trim($invite->phone), '0'),
        'profile_image' => 'storage/images/profile.png',
        'status_id' => 2,
        'is_admin' => false
        ]);

    

    $email = $invite->email;
    
    $url = 'http://localhost:5173/registracija/' . $email . '/' . $token . '/' . $user->name . '/' . $user->last_name;
    Mail::to($invite->email)->send(new InvitationEmail($url ,$invite->email, $invite));


    return response()->json([
        'message' => 'Invitation sent',
        'status' => 'true',
        'data' => $invite,
        'User' => $user,
        'Token' => $user->createToken('API token')->plainTextToken,
    ]);
}


public function checkInviteToken($token)
{
    $invite = Invite::where('token', $token)->first();
if (!$invite) {
        return response()->json([
            'message' => 'Invalid or expired token',
            'status' => false
        ], 404);
    }
return response()->json([
        'message' => 'Token is valid',
        'status' => true,
        'data' => $invite
    ]);
}

public function register(RegisterUserRequest $request, $token)
{
    $invite = Invite::where('token', $token)->first();

    if (!$invite) {
        return response()->json(['error' => 'Poziv nije pronađen ili je istekao'], 404);
    }

    
    $user = User::where('email', $invite->email)->first();

    if (!$user) {
        return response()->json(['error' => 'Korisnik nije pronađen'], 404);
    }

    
    $user->update([
        'password' => Hash::make($request->password),
        'status_id' => 1, 
        'profile_image' => 'storage/images/profile.png',
        'city_id' => $request->city
    ]);

    
    $invite->delete();

    return response()->json([
        'message' => 'Registracija uspešna',
        'user' => $user
    ], 200);
}

public function statuses(){
    $countries = Status::all();

        return response()->json([
            'status' => true,
            'message' => 'all statuses',
            'data' => $countries
        ]);
}

public function cities(){
    $countries = City::all();

        return response()->json([
            'status' => true,
            'message' => 'all cities',
            'data' => $countries
        ]);
}




}
