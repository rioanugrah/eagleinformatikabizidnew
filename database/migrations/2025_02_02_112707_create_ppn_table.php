<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('ppn', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('ppn_name');
            $table->float('ppn_nominal',4);
            $table->string('status',10);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('ppn');
    }
};
