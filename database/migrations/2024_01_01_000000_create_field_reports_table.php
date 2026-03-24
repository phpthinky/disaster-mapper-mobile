<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('field_reports', function (Blueprint $table) {
            $table->id();
            $table->string('incident_type');
            $table->enum('severity', ['Minor', 'Major', 'Critical']);
            $table->string('barangay');
            $table->text('description');
            $table->string('radius')->nullable();
            $table->decimal('latitude', 10, 8)->nullable();
            $table->decimal('longitude', 11, 8)->nullable();
            $table->string('photo_path')->nullable();
            $table->string('reported_by')->nullable();
            $table->boolean('is_synced')->default(false);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('field_reports');
    }
};
