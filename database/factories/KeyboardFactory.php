<?php

namespace Database\Factories;

use App\Models\Keyboard;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Keyboard>
 */
class KeyboardFactory extends Factory
{
    protected $model = Keyboard::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $formFactors = ['40%', '60%', '65%', '75%', 'TKL', 'Full-size', 'Split', 'Ortholinear'];

        return [
            'name' => fake()->words(3, true).' Keyboard',
            'description' => fake()->paragraph(),
            'form_factor' => fake()->randomElement($formFactors),
            'num_keys' => fake()->numberBetween(30, 104),
        ];
    }

    /**
     * Indicate that the keyboard is a split keyboard.
     */
    public function split(): static
    {
        return $this->state(fn (array $attributes) => [
            'form_factor' => 'Split',
            'num_keys' => fake()->numberBetween(30, 50),
        ]);
    }
}
