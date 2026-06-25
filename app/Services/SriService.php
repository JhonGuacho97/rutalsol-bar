<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class SriService
{
public function searchByIdentificationSRI(string $identification)
{
    $length = mb_strlen($identification);

    if ($length === 13) {
        $tipoIdentificacion = 'R';
    } elseif ($length === 10) {
        $tipoIdentificacion = 'C';
    } else {
        abort(422, 'Identificación inválida. Debe ser cédula (10 dígitos) o RUC (13 dígitos).');
    }

    $url = 'https://srienlinea.sri.gob.ec/sri-catastro-sujeto-servicio-internet/rest/Persona/obtenerPorTipoIdentificacion';

    try {
        $response = Http::timeout(10)
            ->retry(2, 500)
            ->get($url, [
                'numeroIdentificacion' => $identification,
                'tipoIdentificacion'   => $tipoIdentificacion,
            ]);
    } catch (\Exception $e) {
        \Log::error('SRI connection error: ' . $e->getMessage());
        abort(503, 'No se pudo conectar con el servicio del SRI. Intenta nuevamente.');
    }

    if ($response->failed()) {
        abort($response->status(), 'Error al conectar con el servicio externo del SRI.');
    }

    $data = $response->json();

    \Log::info('SRI response', $data ?? []);

    if (empty($data['nombreCompleto'])) {
        abort(404, 'No encontrado en los registros del SRI.');
    }

    return [
        'name' => trim($data['nombreCompleto']),
    ];
}
}