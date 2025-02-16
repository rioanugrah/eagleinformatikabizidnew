<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Payments extends Model
{
    use SoftDeletes;

    public $table = 'payments';
    protected $primaryKey = 'id';
    public $incrementing = false;

    protected $dates = ['deleted_at'];

    public $fillable = [
        'id',
        'order_id',
        'billing_code',
        'billing_references',
        'billing_buyer',
        'total',
        'status',
    ];

    // public function verifikasi_tiket()
    // {
    //     return $this->belongsTo(\App\Models\VerifikasiTiket::class, 'id', 'transaction_id');
    // }

    // public function users()
    // {
    //     return $this->belongsTo(\App\Models\User::class, 'user', 'generate');
    // }

}
