<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('electronic_invoices', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('sale_id');
            $table->foreign('sale_id')
                ->references('id')
                ->on('sales')
                ->onUpdate('cascade')
                ->onDelete('cascade');

            // Tipo: '01' factura, '05' nota débito
            $table->string('tipo_comprobante', 2)->default('01');

            // Clave de acceso de 49 dígitos — única por comprobante
            $table->string('clave_acceso', 49)->unique();

            // Lo devuelve el SRI al autorizar (igual a clave_acceso en offline)
            $table->string('numero_autorizacion', 49)->nullable();

            // 9 dígitos con ceros a la izquierda: '000000001'
            $table->string('secuencial', 9);

            // Estado del comprobante según el SRI
            $table->enum('estado', [
                'PENDIENTE',
                'RECIBIDA',
                'AUTORIZADA',
                'NO_AUTORIZADA',
                'DEVUELTA',
            ])->default('PENDIENTE');

            // XML firmado con XAdES-BES (se guarda para reenvíos)
            $table->longText('xml_firmado')->nullable();

            // XML que devuelve el SRI al autorizar
            $table->longText('xml_autorizado')->nullable();

            // Fecha y hora de autorización del SRI
            $table->timestamp('fecha_autorizacion')->nullable();

            // Errores o advertencias que devuelve el SRI (array JSON)
            $table->json('mensajes_sri')->nullable();

            // Contador de intentos de autorización (para reintentos)
            $table->unsignedTinyInteger('intentos')->default(0);

            $table->timestamps();

            // Índices para consultas frecuentes
            $table->index('estado');
            $table->index('tipo_comprobante');
            $table->index(['sale_id', 'tipo_comprobante']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('electronic_invoices');
    }
};