<?php
// config/sri.php

return [
    'ambiente' => env('SRI_AMBIENTE', 1),
    'ruc' => env('SRI_RUC'),
    'razon_social' => env('SRI_RAZON_SOCIAL'),
    'nombre_comercial' => env('SRI_NOMBRE_COMERCIAL'),
    'dir_matriz' => env('SRI_DIR_MATRIZ'),
    'estab' => env('SRI_ESTAB', '001'),
    'pto_emi' => env('SRI_PTO_EMI', '001'),
    'certificado_path' => env('SRI_CERTIFICADO_PATH'),
    'certificado_clave' => env('SRI_CERTIFICADO_CLAVE'),
    'obligado_contabilidad' => env('SRI_OBLIGADO_CONTABILIDAD', 'SI'),

    'wsdl_recepcion' => [
        1 => 'https://celcer.sri.gob.ec/comprobantes-electronicos-ws/RecepcionComprobantesOffline?wsdl',
        2 => 'https://cel.sri.gob.ec/comprobantes-electronicos-ws/RecepcionComprobantesOffline?wsdl',
    ],
    'wsdl_autorizacion' => [
        1 => 'https://celcer.sri.gob.ec/comprobantes-electronicos-ws/AutorizacionComprobantesOffline?wsdl',
        2 => 'https://cel.sri.gob.ec/comprobantes-electronicos-ws/AutorizacionComprobantesOffline?wsdl',
    ],
];