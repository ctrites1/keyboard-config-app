<?php

namespace App\Http\Controllers;

use App\Models\Keyboard;
use App\Models\Keymap;
use App\Services\ZmkKeymapGenerator;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KeymapController extends Controller
{
    protected $keymapGenerator;

    public function __construct(ZmkKeymapGenerator $keymapGenerator)
    {
        $this->keymapGenerator = $keymapGenerator;
    }

    public function index()
    {
        $keymaps = Keymap::where('user_id', auth()->id())->get();

        return Inertia::render('Keymaps/Index', [
            'keymaps' => $keymaps,
        ]);
    }

    public function create()
    {
        $keyboards = Keyboard::all();

        return Inertia::render('Keymaps/Create', [
            'keyboards' => $keyboards,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'keyboard_id' => 'required|exists:keyboards,id',
            'layout_json' => 'required|json',
        ]);

        try {
            $keymap = Keymap::create([
                'name' => $validated['name'],
                'keyboard_id' => $validated['keyboard_id'],
                'user_id' => auth()->id(),
                'layout_json' => json_decode($validated['layout_json'], true),
            ]);

            return redirect()->route('keymaps.show', $keymap->id)
                ->with('success', 'Keymap created successfully!');
        } catch (\Exception $e) {
            \Log::error('Keymap creation error: '.$e->getMessage());

            return redirect()->back()
                ->with('error', 'There was a problemo creating your keymap: '.$e->getMessage())
                ->withInput();
        }

    }

    public function show(Keymap $keymap)
    {
        if ($keymap->user_id !== auth()->id()) {
            abort(403);
        }

        $keymap->load('keyboard');

        return Inertia::render('Keymaps/Show', [
            'keymap' => $keymap,
        ]);
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
