<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CartItems extends Model
{
    use SoftDeletes, HasFactory;
    public $table = 'cart_items';
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $dates = ['deleted_at'];

    public $fillable = [
        'id',
        'cart_id',
        'product_id',
        'price',
        'quantity',
    ];

    public function product()
    {
        return $this->belongsTo(\App\Models\Products::class, 'product_id', 'id');
    }
}
