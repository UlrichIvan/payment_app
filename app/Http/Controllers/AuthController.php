<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
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
            dd($valided);
        } else {
            return back()->with("message", "email ou mot de passe invalide");
        }
    }
}
