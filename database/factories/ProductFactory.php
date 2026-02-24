<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $produits = [
            'iphone' => "images/jpg/iphone.jpg",
            'ordinateur' => "images/png/ordinateur.png",
            'casque' => "images/png/casque.png",
            'clavier' => "images/png/clavier.png",
            'souris' => "images/jpg/souris.jpg"
        ];
        $name =  $this->faker->randomElement(array_keys($produits));
        return [
            'name' => $name . ' ' . $this->faker->word(),
            'price' => $this->faker->randomFloat(2, 10, 1000),
            'description' => $this->faker->sentence(),
            "image" => $produits[$name]
        ];
    }
}
