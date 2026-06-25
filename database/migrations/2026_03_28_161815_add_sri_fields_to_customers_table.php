<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('customers', function (Blueprint $table) {
            // '04'=RUC '05'=cédula '06'=pasaporte '07'=consumidor final
            $table->string('tipo_identificacion', 2)->nullable()->after('identification');
            $table->boolean('es_consumidor_final')->default(false)->after('tipo_identificacion');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('customers', function (Blueprint $table) {
            $table->dropColumn(['tipo_identificacion', 'es_consumidor_final']);
        });
    }
};
