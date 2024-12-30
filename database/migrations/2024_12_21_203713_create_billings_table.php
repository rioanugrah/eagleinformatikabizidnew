<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('billings', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->integer('user_id');
            $table->uuid('invoice_id');
            $table->string('billing_code');
            $table->string('billing_references');
            $table->text('billing_buyer');
            $table->text('billing_link_payment');
            $table->string('tax');
            $table->string('admin_fee');
            $table->string('sub_total');
            $table->string('status',100);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('billings');
    }
};
