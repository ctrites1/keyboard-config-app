<?php

namespace App\Http\Controllers;

use App\Models\Keyboard;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KeyboardController extends Controller
{
    /**
     * Display a listing of all keyboards.
     */
    public function index(Request $request)
    {
        $formFactor = $request->query('form_factor');

        $keyboards = $formFactor ? Keyboard::byFormFactor($formFactor)->get() : Keyboard::all();

        $formFactors = Keyboard::select('form_factor')->distinct()->pluck('form_factor');

        return Inertia::render('Keyboards/Index', [
            'keyboards' => $keyboards,
            'formFactors' => $formFactors,
            'currentFilter' => $formFactor,
        ]);
    }

    /**
     * Display a single keyboard.
     */
    public function show(Keyboard $keyboard)
    {
        return Inertia::render('Keyboards/Show', [
            'keyboard' => $keyboard,
        ]);
    }
}
