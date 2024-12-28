<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->integer('categories_id');
            $table->string('product_code');
            $table->text('product_description');
            $table->string('product_name');
            $table->string('product_price');
            $table->string('product_profit_price');
            $table->string('product_stock');
            $table->string('status',100);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
