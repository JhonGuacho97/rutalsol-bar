<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\SriService;
use Illuminate\Http\Request;

class SriController extends Controller
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

        $data = $this->sriService->searchByIdentificationSRI(
            $request->string('identification')
        );

        return response()->json($data);
    }
}