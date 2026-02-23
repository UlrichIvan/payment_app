<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::middleware("guest")->group(function () {
    // login
    Route::get("/", [AuthController::class, "index"])->name("login");
    Route::post("/", [AuthController::class, "login"]);
    // signup
    Route::get("/signup", [AuthController::class, "indexSignup"])->name("signup");
    Route::post("/signup", [AuthController::class, "signup"]);
});
