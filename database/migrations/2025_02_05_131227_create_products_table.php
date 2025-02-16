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
            $table->uuid('category_id');
            $table->string('product_code');
            $table->string('slug');
            $table->string('title');
            $table->text('picture');
            $table->text('description');
            $table->string('price');
            $table->integer('quantity');
            $table->text('tag');
            $table->enum('is_product_digital',['Y','N']);
            $table->text('files')->nullable();
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
