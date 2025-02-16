<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Carts extends Model
{
    use SoftDeletes, HasFactory;
    public $table = 'carts';
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $dates = ['deleted_at'];

    public $fillable = [
        'id',
        'user_id',
        'tax',
        'total',
        'status',
    ];

    public function cartItems()
    {
        return $this->hasMany(\App\Models\CartItems::class, 'cart_id', 'id');
    }
}
