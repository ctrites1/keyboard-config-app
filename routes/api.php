<?php

use App\Http\Controllers\KeymapController;
use Illuminate\Support\Facades\Route;


Route::post('generate-keymap', [KeymapController::class, 'generate']);

