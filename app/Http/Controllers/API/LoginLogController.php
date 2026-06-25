<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\LoginLog;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;

class LoginLogController extends Controller
{
    public function index(Request $request)
    {
        $perPage = getPageSize($request);

        $page = $request->input('page.number', 1);

        $logs = LoginLog::with('user:id,first_name,last_name')
            ->when($request->search, fn($q) => $q->where('email', 'like', "%{$request->search}%"))
            ->when($request->status, fn($q) => $q->where('status', $request->status))
            ->orderByDesc('logged_at')
            ->paginate($perPage, ['*'], 'page', $page);
        return response()->json($logs);
    }

    public function getIpLocation(string $ip)
    {
        // IPs locales
        if (in_array($ip, ['127.0.0.1', '::1']) || str_starts_with($ip, '192.168')) {
            return response()->json(['error' => 'IP local — sin ubicación disponible']);
        }

        try {
            $response = Http::get("http://ip-api.com/json/{$ip}", [
                'lang' => 'es',
                'fields' => 'status,message,continent,country,regionName,city,zip,lat,lon,timezone,isp,org',
            ]);

            return response()->json($response->json());
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error al consultar la ubicación']);
        }
    }
}