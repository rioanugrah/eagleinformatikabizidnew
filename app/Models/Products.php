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
        'category_id',
        'product_code',
        'slug',
        'title',
        'picture',
        'description',
        'price',
        'quantity',
        'tag',
        'is_product_digital',
        'files',
        'status',
    ];

    public function category()
    {
        return $this->belongsTo(\App\Models\Categories::class, 'category_id', 'id');
    }

}
