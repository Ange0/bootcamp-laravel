<?php

namespace App\Models;

use App\Events\ChirpCreatedEvent;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chirp extends Model
{
    use HasFactory;

    protected $fillable = ['message'];

    protected $dispatchesEvents = [
        'created' => ChirpCreatedEvent::class
    ];

    public function user() {
        return $this->belongsTo(user::class);
    }
}
