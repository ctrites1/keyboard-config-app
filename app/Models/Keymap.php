<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Keymap extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'keyboard_id',
        'user_id',
        'layout_json',
    ];

    protected $casts = [
        'layout_json' => 'json',
    ];

    public function keyboard(): BelongsTo
    {
        return $this->belongsTo(Keyboard::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
