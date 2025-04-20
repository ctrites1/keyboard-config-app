<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Keyboard extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description', 'form_factor', 'num_keys',
    ];

    public function keymaps(): HasMany
    {
        return $this->hasMany(Keymap::class);
    }

    public function scopeByFormFactor($query, $formFactor)
    {
        return $query->where('form_factor', $formFactor);
    }
}
