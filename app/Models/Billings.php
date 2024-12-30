<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Billings extends Model
{
    use SoftDeletes, HasFactory;
    public $table = 'billings';
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $dates = ['deleted_at'];

    public $fillable = [
        'id',
        'user_id',
        'invoice_id',
        'billing_code',
        'billing_references',
        'billing_buyer',
        'billing_link_payment',
        'tax',
        'admin_fee',
        'sub_total',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(\App\Models\User::class, 'user_id', 'id');
    }

    public function invoice()
    {
        return $this->belongsTo(\App\Models\Invoices::class, 'id', 'invoice_id');
    }
}
