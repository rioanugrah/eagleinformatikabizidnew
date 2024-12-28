<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Categories extends Model
{
    use SoftDeletes, HasFactory;
    public $table = 'categories';
    protected $dates = ['deleted_at'];

    public $fillable = [
        'id',
        'name',
        'status',
    ];
}
