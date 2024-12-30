<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('product_active', function (Blueprint $table) {
            $table->uuid()->primary();
            $table->integer('user_id');
            $table->uuid('product_id');
            $table->string('status',100);
            $table->timestamps();
            $table->softDeletes();

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('product_active');
    }
};
