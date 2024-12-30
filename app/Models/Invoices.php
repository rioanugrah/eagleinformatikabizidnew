<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Invoices extends Model
{
    use SoftDeletes, HasFactory;
    public $table = 'invoices';
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $dates = ['deleted_at'];

    public $fillable = [
        'id',
        'user_id',
        'no_invoice',
        'sub_amount',
        'status',
        // 'item',
        // 'quantity',
        // 'amount',
    ];

    public function invoice_details()
    {
        return $this->hasMany(\App\Models\InvoicesDetail::class, 'invoice_id','id')->orderBy('created_at','desc');
    }

    public function billing() {
        return $this->belongsTo(\App\Models\Billings::class, 'id', 'invoice_id');
    }
}
