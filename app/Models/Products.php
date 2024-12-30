<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Products extends Model
{
    use SoftDeletes, HasFactory;
    public $table = 'products';
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $dates = ['deleted_at'];

    public $fillable = [
        'id',
        'categories_id',
        'product_code',
        'product_description',
        'product_name',
        'product_price',
        'product_profit_price',
        'product_periode',
        'product_stock',
        'status',
    ];

    public function category()
    {
        return $this->belongsTo(\App\Models\Categories::class, 'categories_id', 'id');
    }

}
