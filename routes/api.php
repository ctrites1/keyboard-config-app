<?php

use App\Http\Controllers\KeymapController;
use Illuminate\Support\Facades\Route;


Route::post('generate-keymap', [KeymapController::class, 'generate']);
/*
* curl -X POST -H "Content-Type: application/json" \ -H "Accept: application/json" \ -d @keymap_request.json \
* http://127.0.0.1:8000/api/generate-keymap
*/
