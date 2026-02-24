<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CartController extends Controller
{
    public function index()
    {
        $cart = Session::get('cart', []);
        $cartItems = [];
        $total = 0;

        foreach ($cart as $id => $details) {
            $total += $details['price'] * $details['quantity'];
            $cartItems[] = [
                'id' => $id,
                'name' => $details['name'],
                'price' => $details['price'],
                'quantity' => $details['quantity'],
                'image' => $details['image'],
            ];
        }

        return Inertia::render('Cart/Index', [
            "cartItems" => [
                'items' => $cartItems,
                'total' => $total
            ]
        ]);
    }
    public function add(Product $product)
    {
        try {
            $cart = Session::get('cart', []);
            if (isset($cart[$product->id])) {
                $cart[$product->id]['quantity']++;
            } else {
                $cart[$product->id] = [
                    "name" => $product->name,
                    "price" => $product->price,
                    "image" => Storage::url($product->image),
                    "quantity" => 1,
                ];
            }
            Session::put('cart', $cart);
            return back()->with("success", "product ajouter avec success");
        } catch (\Throwable $e) {
            return back()->with("message", "une erreur est survenue,veuillez reéssayez s'il vous plait");
        }
    }
    public function delete(Product $product)
    {
        try {
            $cart = Session::get('cart', []);
            $cart = collect($cart)->filter(fn($_, $key) => $key != $product->id);
            Session::put('cart', $cart);
        } catch (\Throwable $e) {
            return back()->with("message", "une erreur est survenue,veuillez reéssayez s'il vous plait");
        }
    }
}
