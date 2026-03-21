<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FieldReport extends Model
{
    protected $fillable = [
        'incident_type',
        'severity',
        'barangay',
        'description',
        'radius',
        'latitude',
        'longitude',
        'photo_path',
        'reported_by',
        'is_synced',
    ];

    protected $casts = [
        'is_synced' => 'boolean',
        'latitude' => 'decimal:8',
        'longitude' => 'decimal:8',
    ];
}