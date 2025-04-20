<?php

namespace Database\Seeders;

use App\Models\Keyboard;
use Illuminate\Database\Seeder;

class KeyboardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Keyboard::factory(5)->create();

        Keyboard::create([
            'name' => 'Cradio',
            'description' => 'A compact 34-key split keyboard designed by by DaveMcW, also known as the Ferris Sweep.',
            'form_factor' => 'Split',
            'num_keys' => 34,
        ]);
    }
}
