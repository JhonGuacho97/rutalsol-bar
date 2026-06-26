<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\AppBaseController;
use App\Services\SriService;
use Illuminate\Http\Request;
 
class SriController extends AppBaseController
{
    public function __construct(protected SriService $sriService)
    {
    }

    public function lookup(Request $request)
    {
        $request->validate([
            'identification' => [
                'required',
                'string',
                function ($attribute, $value, $fail) {
                    if (!in_array(mb_strlen($value), [10, 13])) {
                        $fail('La identificación debe tener 10 dígitos (cédula) o 13 dígitos (RUC).');
                    }
                },
            ],
        ]);

        // TEMPORAL: solo para diagnosticar el 500 en producción. Quitar después.
        try {
            $data = $this->sriService->searchByIdentificationSRI(
                $request->string('identification')
            );

            return response()->json($data);
        } catch (\Throwable $e) {
            return response()->json([
                'debug_message' => $e->getMessage(),
                'debug_file'    => $e->getFile(),
                'debug_line'    => $e->getLine(),
                'debug_trace'   => collect($e->getTrace())->take(5),
            ], 500);
        }
    }
}