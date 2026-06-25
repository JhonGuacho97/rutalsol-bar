<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\ElectronicInvoice
 *
 * @property int $id
 * @property int $sale_id
 * @property string $tipo_comprobante
 * @property string $clave_acceso
 * @property string|null $numero_autorizacion
 * @property string $secuencial
 * @property string $estado
 * @property string|null $xml_firmado
 * @property string|null $xml_autorizado
 * @property \Illuminate\Support\Carbon|null $fecha_autorizacion
 * @property array|null $mensajes_sri
 * @property int $intentos
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Sale $sale
 * @method static \Illuminate\Database\Eloquent\Builder|ElectronicInvoice newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ElectronicInvoice newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ElectronicInvoice query()
 * @method static \Illuminate\Database\Eloquent\Builder|ElectronicInvoice whereClaveAcceso($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ElectronicInvoice whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ElectronicInvoice whereEstado($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ElectronicInvoice whereFechaAutorizacion($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ElectronicInvoice whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ElectronicInvoice whereIntentos($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ElectronicInvoice whereMensajesSri($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ElectronicInvoice whereNumeroAutorizacion($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ElectronicInvoice whereSaleId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ElectronicInvoice whereSecuencial($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ElectronicInvoice whereTipoComprobante($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ElectronicInvoice whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ElectronicInvoice whereXmlAutorizado($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ElectronicInvoice whereXmlFirmado($value)
 * @mixin \Eloquent
 */
class ElectronicInvoice extends BaseModel
{
    use HasFactory;

    protected $table = 'electronic_invoices';

    // ── Tipos de comprobante ──────────────────────
    const FACTURA = '01';
    const NOTA_DEBITO = '05';

    // ── Estados del comprobante ───────────────────
    const PENDIENTE = 'PENDIENTE';
    const RECIBIDA = 'RECIBIDA';
    const AUTORIZADA = 'AUTORIZADA';
    const NO_AUTORIZADA = 'NO_AUTORIZADA';
    const DEVUELTA = 'DEVUELTA';

    protected $fillable = [
        'sale_id',
        'tipo_comprobante',
        'clave_acceso',
        'numero_autorizacion',
        'secuencial',
        'estado',
        'xml_firmado',
        'xml_autorizado',
        'fecha_autorizacion',
        'mensajes_sri',
        'intentos',
    ];

    protected $casts = [
        'mensajes_sri' => 'array',
        'fecha_autorizacion' => 'datetime',
        'intentos' => 'integer',
    ];

    // ── Relaciones ────────────────────────────────

    public function sale(): BelongsTo
    {
        return $this->belongsTo(Sale::class, 'sale_id', 'id');
    }

    // ── Helpers de estado ─────────────────────────

    public function estaAutorizada(): bool
    {
        return $this->estado === self::AUTORIZADA;
    }

    public function estaPendiente(): bool
    {
        return in_array($this->estado, [self::PENDIENTE, self::RECIBIDA]);
    }

    public function estaRechazada(): bool
    {
        return in_array($this->estado, [self::NO_AUTORIZADA, self::DEVUELTA]);
    }

    public function puedeReintentarse(): bool
    {
        return $this->estaRechazada() && $this->intentos < 5;
    }

    // ── Helpers de mensajes SRI ───────────────────

    public function mensajesErrores(): array
    {
        if (empty($this->mensajes_sri)) {
            return [];
        }

        return collect($this->mensajes_sri)
            ->where('tipo', 'ERROR')
            ->values()
            ->toArray();
    }

    public function mensajesAdvertencias(): array
    {
        if (empty($this->mensajes_sri)) {
            return [];
        }

        return collect($this->mensajes_sri)
            ->where('tipo', 'ADVERTENCIA')
            ->values()
            ->toArray();
    }

    public function primerError(): ?string
    {
        $errores = $this->mensajesErrores();

        return $errores[0]['mensaje'] ?? null;
    }

    // ── Helpers de formato ────────────────────────

    /**
     * Número de comprobante en formato 001-001-000000001
     * para mostrar en el RIDE y en la UI.
     */
    public function numeroComprobante(): string
    {
        $cfg = config('sri');

        return $cfg['estab'] . '-' . $cfg['pto_emi'] . '-' . $this->secuencial;
    }

    /**
     * Número de autorización formateado para el RIDE.
     * Si aún no está autorizado retorna la clave de acceso.
     */
    public function numeroAutorizacionRide(): string
    {
        return $this->numero_autorizacion ?? $this->clave_acceso;
    }
}