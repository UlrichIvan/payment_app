<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::middleware("guest")->group(function () {
    // login
    Route::get("/", [AuthController::class, "index"])->name("login");
    Route::post("/", [AuthController::class, "login"]);
    // signup
    Route::get("/signup", [AuthController::class, "indexSignup"])->name("signup");
    Route::post("/signup", [AuthController::class, "signup"]);
});

Route::middleware("auth")->group(function () {
    // welcome
    Route::get("/welcome", [UserController::class, "index"])->name("welcome");
    // logout
    Route::post("/logout", [UserController::class, "logout"])->name("logout");
    // details of product
    Route::get("/products/{product}", [UserController::class, "showProduct"])
        ->whereNumber("product")
        ->name("show.product");
});
