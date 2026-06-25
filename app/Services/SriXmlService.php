<?php

namespace App\Services;

use App\Models\ElectronicInvoice;
use App\Models\Sale;

class SriXmlService
{
    // ─────────────────────────────────────────────
    // CLAVE DE ACCESO (49 dígitos)
    // ─────────────────────────────────────────────

    public function generarClaveAcceso(
        string $fechaEmision,  // formato dd/mm/yyyy
        string $tipoDoc,       // '01' factura, '05' nota débito
        string $secuencial     // 9 dígitos: '000000001'
    ): string {
        // ddmmyyyy
        $fecha = str_replace('/', '', $fechaEmision);
        $ruc = config('sri.ruc');
        $ambiente = (string) config('sri.ambiente');
        $estab = config('sri.estab');
        $ptoEmi = config('sri.pto_emi');
        $codNum = str_pad(random_int(0, 99999999), 8, '0', STR_PAD_LEFT);
        $tipoEmision = '1';

        // 48 dígitos base
        $base = $fecha . $tipoDoc . $ruc . $ambiente
            . $estab . $ptoEmi . $secuencial
            . $codNum . $tipoEmision;

        return $base . $this->modulo11($base);
    }

    private function modulo11(string $cadena): string
    {
        $pesos = [2, 3, 4, 5, 6, 7];
        $digits = array_reverse(str_split($cadena));
        $suma = 0;

        foreach ($digits as $i => $digit) {
            $suma += (int) $digit * $pesos[$i % 6];
        }

        $resultado = 11 - ($suma % 11);

        if ($resultado === 11)
            return '0';
        if ($resultado === 10)
            return '1';

        return (string) $resultado;
    }

    // ─────────────────────────────────────────────
    // SECUENCIAL
    // ─────────────────────────────────────────────

    public function proximoSecuencial(string $tipoDoc): string
    {
        $ultimo = ElectronicInvoice::where('tipo_comprobante', $tipoDoc)
            ->whereNotIn('estado', [ElectronicInvoice::DEVUELTA])
            ->max('secuencial');

        $siguiente = $ultimo ? ((int) $ultimo + 1) : 1;

        return str_pad($siguiente, 9, '0', STR_PAD_LEFT);
    }

    // ─────────────────────────────────────────────
    // GENERAR XML FACTURA (versión 2.1.0)
    // ─────────────────────────────────────────────

    public function generarXmlFactura(Sale $sale): array
    {
        $secuencial = $this->proximoSecuencial(ElectronicInvoice::FACTURA);
        $fechaEmision = $sale->fechaEmisionSri();
        $claveAcceso = $this->generarClaveAcceso(
            $fechaEmision,
            ElectronicInvoice::FACTURA,
            $secuencial
        );

        $cfg = config('sri');
        $customer = $sale->customer;

        $dom = new \DOMDocument('1.0', 'UTF-8');
        $dom->formatOutput = true;

        // ── Raíz ──────────────────────────────────
        $factura = $dom->createElement('factura');
        $factura->setAttribute('id', 'comprobante');
        $factura->setAttribute('version', '2.1.0');
        $dom->appendChild($factura);

        // ── infoTributaria ────────────────────────
        $infoTrib = $dom->createElement('infoTributaria');
        $this->nodo($dom, $infoTrib, 'ambiente', $cfg['ambiente']);
        $this->nodo($dom, $infoTrib, 'tipoEmision', '1');
        $this->nodo($dom, $infoTrib, 'razonSocial', $cfg['razon_social']);
        $this->nodo($dom, $infoTrib, 'nombreComercial', $cfg['nombre_comercial']);
        $this->nodo($dom, $infoTrib, 'ruc', $cfg['ruc']);
        $this->nodo($dom, $infoTrib, 'claveAcceso', $claveAcceso);
        $this->nodo($dom, $infoTrib, 'codDoc', ElectronicInvoice::FACTURA);
        $this->nodo($dom, $infoTrib, 'estab', $cfg['estab']);
        $this->nodo($dom, $infoTrib, 'ptoEmi', $cfg['pto_emi']);
        $this->nodo($dom, $infoTrib, 'secuencial', $secuencial);
        $this->nodo($dom, $infoTrib, 'dirMatriz', $cfg['dir_matriz']);
        $factura->appendChild($infoTrib);

        // ── infoFactura ───────────────────────────
        $infoFact = $dom->createElement('infoFactura');
        $this->nodo($dom, $infoFact, 'fechaEmision', $fechaEmision);
        $this->nodo($dom, $infoFact, 'dirEstablecimiento', $cfg['dir_matriz']);
        $this->nodo($dom, $infoFact, 'obligadoContabilidad', $cfg['obligado_contabilidad']);
        $this->nodo($dom, $infoFact, 'tipoIdentificacionComprador', $customer->tipoIdentificacionSri());
        $this->nodo($dom, $infoFact, 'razonSocialComprador', $customer->razonSocialSri());
        $this->nodo($dom, $infoFact, 'identificacionComprador', $customer->identificacionSri());
        $this->nodo($dom, $infoFact, 'totalSinImpuestos', $this->decimal2($sale->subtotalSinIvaSri()));
        $this->nodo($dom, $infoFact, 'totalDescuento', $this->decimal2($sale->discount ?? 0));

        // totalConImpuestos
        $totalConImp = $dom->createElement('totalConImpuestos');
        $this->agregarTotalImpuesto(
            $dom,
            $totalConImp,
            $sale->subtotalSinIvaSri(),
            $sale->tax_amount ?? 0,
            $sale->tax_rate ?? 15
        );
        $infoFact->appendChild($totalConImp);

        $this->nodo($dom, $infoFact, 'propina', '0.00');
        $this->nodo($dom, $infoFact, 'importeTotal', $this->decimal2($sale->grand_total ?? 0));
        $this->nodo($dom, $infoFact, 'moneda', 'DOLAR');

        // pagos
        $pagos = $dom->createElement('pagos');
        $pago = $dom->createElement('pago');
        $this->nodo($dom, $pago, 'formaPago', $sale->formaPagoSri());
        $this->nodo($dom, $pago, 'total', $this->decimal2($sale->grand_total ?? 0));
        $this->nodo($dom, $pago, 'plazo', '0');
        $this->nodo($dom, $pago, 'unidadTiempo', 'dias');
        $pagos->appendChild($pago);
        $infoFact->appendChild($pagos);
        $factura->appendChild($infoFact);

        // ── detalles ──────────────────────────────
        $detalles = $dom->createElement('detalles');

        foreach ($sale->saleItems as $item) {
            $detalle = $dom->createElement('detalle');
            $this->nodo($dom, $detalle, 'codigoPrincipal', $item->codigoPrincipalSri());
            $this->nodo($dom, $detalle, 'descripcion', $item->descripcionSri());
            $this->nodo($dom, $detalle, 'cantidad', $this->decimal6($item->quantity ?? 1));
            $this->nodo($dom, $detalle, 'precioUnitario', $this->decimal6($item->precioUnitarioSri()));
            $this->nodo($dom, $detalle, 'descuento', $this->decimal2($item->descuentoSri()));
            $this->nodo($dom, $detalle, 'precioTotalSinImpuesto', $this->decimal2($item->precioTotalSinImpuestoSri()));

            // impuestos del item
            $impuestos = $dom->createElement('impuestos');
            $impuesto = $dom->createElement('impuesto');
            $this->nodo($dom, $impuesto, 'codigo', '2');
            $this->nodo($dom, $impuesto, 'codigoPorcentaje', $item->codigoPorcentajeIvaSri());
            $this->nodo($dom, $impuesto, 'tarifa', $this->decimal2($item->tarifaIvaSri()));
            $this->nodo($dom, $impuesto, 'baseImponible', $this->decimal2($item->precioTotalSinImpuestoSri()));
            $this->nodo($dom, $impuesto, 'valor', $this->decimal2($item->valorIvaSri()));
            $impuestos->appendChild($impuesto);
            $detalle->appendChild($impuestos);
            $detalles->appendChild($detalle);
        }

        $factura->appendChild($detalles);

        // ── infoAdicional ─────────────────────────
        $infoAdicional = $dom->createElement('infoAdicional');
        $hasAdicional = false;

        if ($customer->email) {
            $campo = $dom->createElement('campoAdicional', $customer->email);
            $campo->setAttribute('nombre', 'Email');
            $infoAdicional->appendChild($campo);
            $hasAdicional = true;
        }

        if ($customer->phone) {
            $campo = $dom->createElement('campoAdicional', $customer->phone);
            $campo->setAttribute('nombre', 'Telefono');
            $infoAdicional->appendChild($campo);
            $hasAdicional = true;
        }

        if ($customer->address) {
            $campo = $dom->createElement('campoAdicional', $customer->address);
            $campo->setAttribute('nombre', 'Direccion');
            $infoAdicional->appendChild($campo);
            $hasAdicional = true;
        }

        if ($hasAdicional) {
            $factura->appendChild($infoAdicional);
        }

        return [
            'xml' => $dom->saveXML(),
            'clave_acceso' => $claveAcceso,
            'secuencial' => $secuencial,
        ];
    }

    // ─────────────────────────────────────────────
    // GENERAR XML NOTA DE DÉBITO (versión 1.0.0)
    // ─────────────────────────────────────────────

    public function generarXmlNotaDebito(
        ElectronicInvoice $facturaOrigen,
        array $motivos  // [['razon' => 'Interés mora', 'valor' => 10.00]]
    ): array {
        $secuencial = $this->proximoSecuencial(ElectronicInvoice::NOTA_DEBITO);
        $fechaEmision = now()->format('d/m/Y');
        $claveAcceso = $this->generarClaveAcceso(
            $fechaEmision,
            ElectronicInvoice::NOTA_DEBITO,
            $secuencial
        );

        $cfg = config('sri');
        $sale = $facturaOrigen->sale;
        $customer = $sale->customer;

        $totalSinImp = collect($motivos)->sum('valor');
        $tarifa = $sale->tax_rate ?? 15;
        $iva = round($totalSinImp * $tarifa / 100, 2);
        $total = round($totalSinImp + $iva, 2);

        $dom = new \DOMDocument('1.0', 'UTF-8');
        $dom->formatOutput = true;

        // ── Raíz ──────────────────────────────────
        $notaDebito = $dom->createElement('notaDebito');
        $notaDebito->setAttribute('version', '1.0.0');
        $notaDebito->setAttribute('id', 'comprobante');
        $dom->appendChild($notaDebito);

        // ── infoTributaria ────────────────────────
        $infoTrib = $dom->createElement('infoTributaria');
        $this->nodo($dom, $infoTrib, 'ambiente', $cfg['ambiente']);
        $this->nodo($dom, $infoTrib, 'tipoEmision', '1');
        $this->nodo($dom, $infoTrib, 'razonSocial', $cfg['razon_social']);
        $this->nodo($dom, $infoTrib, 'nombreComercial', $cfg['nombre_comercial']);
        $this->nodo($dom, $infoTrib, 'ruc', $cfg['ruc']);
        $this->nodo($dom, $infoTrib, 'claveAcceso', $claveAcceso);
        $this->nodo($dom, $infoTrib, 'codDoc', ElectronicInvoice::NOTA_DEBITO);
        $this->nodo($dom, $infoTrib, 'estab', $cfg['estab']);
        $this->nodo($dom, $infoTrib, 'ptoEmi', $cfg['pto_emi']);
        $this->nodo($dom, $infoTrib, 'secuencial', $secuencial);
        $this->nodo($dom, $infoTrib, 'dirMatriz', $cfg['dir_matriz']);
        $notaDebito->appendChild($infoTrib);

        // ── infoNotaDebito ────────────────────────
        $infoND = $dom->createElement('infoNotaDebito');
        $this->nodo($dom, $infoND, 'fechaEmision', $fechaEmision);
        $this->nodo($dom, $infoND, 'tipoIdentificacionComprador', $customer->tipoIdentificacionSri());
        $this->nodo($dom, $infoND, 'razonSocialComprador', $customer->razonSocialSri());
        $this->nodo($dom, $infoND, 'identificacionComprador', $customer->identificacionSri());
        $this->nodo($dom, $infoND, 'obligadoContabilidad', $cfg['obligado_contabilidad']);
        $this->nodo($dom, $infoND, 'codDocModificado', '01');
        $this->nodo(
            $dom,
            $infoND,
            'numDocModificado',
            $cfg['estab'] . '-' . $cfg['pto_emi'] . '-' . $facturaOrigen->secuencial
        );
        $this->nodo(
            $dom,
            $infoND,
            'fechaEmisionDocSustento',
            $facturaOrigen->created_at->format('d/m/Y')
        );
        $this->nodo($dom, $infoND, 'totalSinImpuestos', $this->decimal2($totalSinImp));

        // impuestos
        $impuestos = $dom->createElement('impuestos');
        $impuesto = $dom->createElement('impuesto');
        $this->nodo($dom, $impuesto, 'codigo', '2');
        $this->nodo($dom, $impuesto, 'codigoPorcentaje', $this->codigoPorcentaje($tarifa));
        $this->nodo($dom, $impuesto, 'tarifa', $this->decimal2($tarifa));
        $this->nodo($dom, $impuesto, 'baseImponible', $this->decimal2($totalSinImp));
        $this->nodo($dom, $impuesto, 'valor', $this->decimal2($iva));
        $impuestos->appendChild($impuesto);
        $infoND->appendChild($impuestos);

        $this->nodo($dom, $infoND, 'valorTotal', $this->decimal2($total));

        // pagos
        $pagos = $dom->createElement('pagos');
        $pago = $dom->createElement('pago');
        $this->nodo($dom, $pago, 'formaPago', '01');
        $this->nodo($dom, $pago, 'total', $this->decimal2($total));
        $this->nodo($dom, $pago, 'plazo', '0');
        $this->nodo($dom, $pago, 'unidadTiempo', 'dias');
        $pagos->appendChild($pago);
        $infoND->appendChild($pagos);
        $notaDebito->appendChild($infoND);

        // ── motivos ───────────────────────────────
        $motivosNode = $dom->createElement('motivos');
        foreach ($motivos as $m) {
            $motivo = $dom->createElement('motivo');
            $this->nodo($dom, $motivo, 'razon', $m['razon']);
            $this->nodo($dom, $motivo, 'valor', $this->decimal2($m['valor']));
            $motivosNode->appendChild($motivo);
        }
        $notaDebito->appendChild($motivosNode);

        return [
            'xml' => $dom->saveXML(),
            'clave_acceso' => $claveAcceso,
            'secuencial' => $secuencial,
        ];
    }

    // ─────────────────────────────────────────────
    // HELPERS PRIVADOS
    // ─────────────────────────────────────────────

    private function nodo(\DOMDocument $dom, \DOMElement $parent, string $tag, $value): void
    {
        $node = $dom->createElement($tag);
        $node->appendChild($dom->createTextNode((string) $value));
        $parent->appendChild($node);
    }

    private function agregarTotalImpuesto(
        \DOMDocument $dom,
        \DOMElement $parent,
        float $base,
        float $valorIva,
        float $tarifa
    ): void {
        $totalImp = $dom->createElement('totalImpuesto');
        $this->nodo($dom, $totalImp, 'codigo', '2');
        $this->nodo($dom, $totalImp, 'codigoPorcentaje', $this->codigoPorcentaje($tarifa));
        $this->nodo($dom, $totalImp, 'baseImponible', $this->decimal2($base));
        $this->nodo($dom, $totalImp, 'valor', $this->decimal2($valorIva));
        $parent->appendChild($totalImp);
    }

    private function codigoPorcentaje(float $tarifa): string
    {
        return match ((int) $tarifa) {
            0 => '0',
            12 => '2',
            14 => '3',
            15 => '4',
            5 => '5',
            default => '4',
        };
    }

    private function decimal2(float $valor): string
    {
        return number_format($valor, 2, '.', '');
    }

    private function decimal6(float $valor): string
    {
        return number_format($valor, 6, '.', '');
    }
}