<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\PaymentController;
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
    // add,show,delete product from cart
    Route::get("/show/cart", [CartController::class, "index"])->name("show.cart");
    Route::delete("/delete/cart/{product}", [CartController::class, "delete"])
        ->whereNumber("product")
        ->name("delete.product");
    Route::post("/add/cart/{product}", [CartController::class, "add"])
        ->whereNumber("product")
        ->name("add.product");
    // payment with stripe
    Route::get("/payment/success", [PaymentController::class, "checkoutSuccess"])->name("checkout.success");
    Route::get("/payment/failed", [PaymentController::class, "checkoutFailed"])->name("checkout.failed");

    Route::post("/payment", [PaymentController::class, "checkout"])->name("checkout");
});
