<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class InvoicesDetail extends Model
{
    use SoftDeletes, HasFactory;
    public $table = 'invoices_detail';
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $dates = ['deleted_at'];

    public $fillable = [
        'id',
        'invoice_id',
        'item',
        'quantity',
        'amount',
    ];
}
