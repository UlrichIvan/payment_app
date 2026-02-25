<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class PaymentController extends Controller
{
    public function checkout(Request $request)
    {
        try {
            $cart = Session::get('cart', []);
            $amount = 0;

            foreach ($cart as $details) {
                $amount += $details['price'] * $details['quantity'];
            }

            if (empty($cart)) {
                return back()->with('message', 'Votre panier est vide.');
            }
            $checkout = $request->user()->checkoutCharge(
                $amount * 100,
                'payement des frais de votre commande',
                1,
                [
                    'success_url' => route('checkout.success'),
                    'cancel_url' => route('checkout.failed'),
                ]
            );
            return Inertia::location($checkout->url);
        } catch (\Throwable $e) {
            return back()->with("message", "Le payement de votre pack a echoué");
        }
    }

    public function checkoutSuccess()
    {
        Session::put("cart", []);
        return redirect()->route("show.cart")->with("success", "Payement de votre pack produit(s) effectué avec succès");
    }
    public function checkoutFailed()
    {
        return redirect()->route("show.cart")->with("message", "Le payement de votre pack produit(s) a échoué");
    }
}
