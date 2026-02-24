<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;
    public $fillable = [
        "name",
        "price",
        "description"
    ];
    public $hidden = [
        "created_at",
        "updated_at"
    ];
    public $casts = [
        "created_at" => "datetime",
        "updated_at" => "datetime"
    ];

    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class);
    }

    protected $appends = ['average_rating'];

    public function getAverageRatingAttribute()
    {
        return (float) $this->reviews()->avg('rating');
    }
}
