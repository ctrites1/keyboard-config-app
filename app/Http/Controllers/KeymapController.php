<?php

namespace App\Http\Controllers;

use App\Http\Services\ZmkKeymapGenerator;

class KeymapController extends Controller
{
    protected $keymapGenerator;

    public function __construct(ZmkKeymapGenerator $keymapGenerator)
    {
        $this->keymapGenerator = $keymapGenerator;
    }
}
