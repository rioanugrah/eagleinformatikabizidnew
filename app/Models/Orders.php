<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Orders extends Model
{
    use SoftDeletes;

    public $table = 'orders';
    protected $primaryKey = 'id';
    public $incrementing = false;

    protected $dates = ['deleted_at'];

    public $fillable = [
        'id',
        'user_id',
        'order_code',
        'tax',
        'admin_fee',
        'total',
        'status',
    ];

    public function payment()
    {
        return $this->belongsTo(\App\Models\Payments::class, 'id', 'order_id');
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
