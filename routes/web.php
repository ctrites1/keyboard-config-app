<?php

use App\Http\Controllers\KeyboardController;
use App\Http\Controllers\KeymapController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/keyboard', [KeyboardController::class, 'index'])->name('keyboards.index');
Route::get('/keyboards/{keyboard}', [KeyboardController::class, 'show'])->name('keyboards.show');

Route::middleware('auth')->group(function () {
    Route::get('/keymaps', [KeymapController::class, 'index'])->name('keymaps.index');
    Route::get('/keymaps/create', [KeymapController::class, 'create'])->name('keymaps.create');
    Route::post('/keymaps/', [KeymapController::class, 'store'])->name('keymaps.store');
    Route::get('/keymaps/{keymap}', [KeymapController::class, 'show'])->name('keymaps.show');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
