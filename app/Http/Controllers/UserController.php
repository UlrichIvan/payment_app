<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $products = Product::all()->map(function ($product): array {
            return [
                'id' => $product->id,
                'name' => $product->name,
                'price' => $product->price,
                'description' => $product->description,
                'image' => Storage::url($product->image)
            ];
        });
        return Inertia::render("Welcome", compact("products"));
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route("login");
    }

    public function showProduct(Product $product)
    {
        $product->image = Storage::url($product->image);
        return Inertia::render("ProductDetails", [
            "product" =>  $product->load('reviews'),
            'average' => $product->average_rating,
        ]);
    }
}
