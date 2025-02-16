<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class OrderItems extends Model
{
    use SoftDeletes;

    public $table = 'order_items';
    protected $primaryKey = 'id';
    public $incrementing = false;

    protected $dates = ['deleted_at'];

    public $fillable = [
        'id',
        'order_id',
        'product_id',
        'price',
        'quantity',
    ];

    public function product()
    {
        return $this->belongsTo(\App\Models\Products::class, 'product_id', 'id');
    }
    // public function verifikasi_tiket()
    // {
    //     return $this->belongsTo(\App\Models\VerifikasiTiket::class, 'id', 'transaction_id');
    // }

    // public function users()
    // {
    //     return $this->belongsTo(\App\Models\User::class, 'user', 'generate');
    // }

}
