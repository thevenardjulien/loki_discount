<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->engine('InnoDB');
            $table->id();
            $table->string('title');
            $table->string('slug');
            $table->text('description');
            $table->string('image');
            $table->integer('price');
            $table->enum('condition', ['used', 'good', 'excellent', 'new']);
            $table->boolean('is_sold');
            $table->foreignId('seller_id')->constrained('users')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
