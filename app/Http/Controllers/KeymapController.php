<?php

namespace App\Http\Controllers;

use App\Http\Services\ZmkKeymapGenerator;
use Illuminate\Http\Request;

class KeymapController extends Controller
{
    protected $keymapGenerator;

    public function __construct(ZmkKeymapGenerator $keymapGenerator)
    {
        $this->keymapGenerator = $keymapGenerator;
    }

    public function generateKeymap(Request $request)
    {
        $validated = $request->validate([
            'keyboard' => 'required|string',
            'layout' => 'required|array',
        ]);

        try {
            $keymap = $this->keymapGenerator->generate($request->all());

            return response()->json([
                'success' => true,
                'keymap' => $keymap,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 500);
        }
    }
}
