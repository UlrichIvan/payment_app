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
        $produits = ['Smartphone', 'Ordinateur Portable', 'Casque Audio', 'Clavier Mécanique', 'Souris Gamer'];
        return [
            'name' => $this->faker->randomElement($produits) . ' ' . $this->faker->word(),
            'price' => $this->faker->randomFloat(2, 10, 1000),
            'description' => $this->faker->sentence()
        ];
    }
}
