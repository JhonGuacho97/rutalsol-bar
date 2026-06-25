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
            'identification' => ['required', 'string', 'min:10', 'max:13'],
        ]);

        $data = $this->sriService->searchByIdentificationSRI(
            $request->string('identification')
        );

        return response()->json($data);
    }
}