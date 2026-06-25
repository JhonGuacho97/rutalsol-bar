<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class SriService
{
    public function searchByIdentificationSRI(string $identification)
    {
        $length = mb_strlen($identification);

        if (!in_array($length, [10, 13])) {
            abort(422, 'Identificación inválida. Debe ser cédula (10 dígitos) o RUC (13 dígitos).');
        }

        $data = $this->consultarApi($identification);

        return $length === 13
            ? $this->mapRuc($data)
            : $this->mapCedula($data);
    }

    private function consultarApi(string $identification): array
    {
        $token = config('services.apiconsult.token');
        $url = 'https://apiconsult.zampisoft.com/api/consultar';

        try {
            $response = Http::timeout(10)
                ->retry(2, 500)
                ->get($url, [
                    'token'          => $token,
                    'identificacion' => $identification,
                    'full'           => 'true',
                ]);
        } catch (\Exception $e) {
            \Log::error('ApiConsult connection error: ' . $e->getMessage());
            abort(503, 'No se pudo conectar con el servicio de identificación. Intenta nuevamente.');
        }

        if ($response->failed()) {
            $this->handleApiError($response);
        }

        $data = $response->json();

        \Log::info('ApiConsult response', $data ?? []);

        if (empty($data['success'])) {
            abort(404, 'No encontrado en los registros.');
        }

        return $data;
    }

    private function mapCedula(array $data): array
    {
        $persona = $data['persona'] ?? $data;

        $nombre = $persona['nombre'] ?? null;

        if (empty($nombre)) {
            abort(404, 'No encontrado en los registros.');
        }

        return [
            'name'    => trim($nombre),
            'email'   => $persona['email'] ?? null,
            'phone'   => $persona['celular'] ?? null,
            'address' => $this->resolveAddress($persona),
            'city'    => $this->resolveCity($persona),
            'country' => 'ECUADOR',
        ];
    }

    private function mapRuc(array $data): array
    {
        $razonSocial = $data['razonSocial'] ?? null;

        if (empty($razonSocial)) {
            abort(404, 'No encontrado en los registros.');
        }

        $matriz = collect($data['establecimientos'] ?? [])
            ->firstWhere('matriz', 'SI');

        $direccionCompleta = $matriz['direccionCompleta']
            ?? ($data['establecimientos'][0]['direccionCompleta'] ?? null);

        return [
            'name'    => trim($razonSocial),
            'email'   => null,
            'phone'   => null,
            'address' => $direccionCompleta ? str_replace('/', ', ', $direccionCompleta) : null,
            'city'    => $this->resolveCityFromDireccionCompleta($direccionCompleta),
            'country' => 'ECUADOR',
        ];
    }

    private function resolveAddress(array $persona): ?string
    {
        if (!empty($persona['direccion']['calle'])) {
            return $persona['direccion']['calle'];
        }
        if (!empty($persona['direccion']['domicilio'])) {
            return $persona['direccion']['domicilio'];
        }
        if (!empty($persona['calleDomicilio'])) {
            return trim($persona['calleDomicilio']);
        }
        if (!empty($persona['lugarDomicilio'])) {
            return str_replace('/', ', ', $persona['lugarDomicilio']);
        }

        return null;
    }

    private function resolveCity(array $persona): ?string
    {
        if (!empty($persona['direccion']['canton'])) {
            return $persona['direccion']['canton'];
        }
        if (!empty($persona['lugarDomicilio'])) {
            $partes = explode('/', $persona['lugarDomicilio']);
            return trim($partes[1] ?? $partes[0] ?? '');
        }

        return null;
    }

    private function resolveCityFromDireccionCompleta(?string $direccionCompleta): ?string
    {
        if (empty($direccionCompleta)) {
            return null;
        }

        // Formato: "PICHINCHA/QUITO/LA FLORIDA AV. ..."
        $partes = explode('/', $direccionCompleta);

        return trim($partes[1] ?? $partes[0] ?? '');
    }

    private function handleApiError($response)
    {
        $status = $response->status();

        \Log::error('ApiConsult API error', [
            'status' => $status,
            'body'   => $response->json() ?? $response->body(),
        ]);

        $messages = [
            400 => 'Identificación inválida o datos incompletos en la consulta.',
            401 => 'Token de autenticación incorrecto. Contacta al administrador del sistema.',
            402 => 'Saldo insuficiente en el servicio de consultas. Contacta al administrador del sistema.',
            404 => 'No se encontró información para esa identificación.',
            503 => 'El servicio de identificación no está disponible temporalmente. Intenta más tarde.',
        ];

        abort($status, $messages[$status] ?? 'Error al conectar con el servicio externo de identificación.');
    }
}