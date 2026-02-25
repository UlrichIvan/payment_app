<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function index()
    {
        return Inertia::render("Login");
    }
    public function login(LoginRequest $request)
    {
        $valided = $request->validated();

        if (Auth::attempt($valided)) {
            return redirect()->route("welcome");
        } else {
            return back()->with("message", "email ou mot de passe invalide");
        }
    }

    public function  indexSignup()
    {
        return Inertia::render("Signup");
    }
    public function signup(SignupRequest $request)
    {
        try {

            $valided = $request->validated();

            $user = User::where("email", $valided["email"])->first();

            if ($user) {
                return back()->with("success", "un compte avec cette email existe dèja");
            }

            User::create($valided);
            return redirect()->route("login")->with("success", "compte créer avec success");
        } catch (\Throwable $e) {
            return back()->with("message", "une erreur est survenue, veuillez réessayer s'il vous plait");
        }
    }
}
