<?php
// app/Models/Customer.php

namespace App\Models;

use App\Traits\HasJsonResourcefulData;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\Customer
 *
 * @property int $id
 * @property string|null $identification
 * @property string|null $tipo_identificacion
 * @property bool $es_consumidor_final
 * @property string $name
 * @property string $email
 * @property string $phone
 * @property string|null $dob
 * @property string $country
 * @property string $city
 * @property string $address
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Quotation> $quotations
 * @property-read int|null $quotations_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Sale> $sales
 * @property-read int|null $sales_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\SaleReturn> $salesReturns
 * @property-read int|null $sales_returns_count
 * @method static \Illuminate\Database\Eloquent\Builder|Customer newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Customer newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Customer query()
 * @method static \Illuminate\Database\Eloquent\Builder|Customer whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customer whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customer whereCountry($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customer whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customer whereDob($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customer whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customer whereEsConsumidorFinal($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customer whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customer whereIdentification($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customer whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customer wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customer whereTipoIdentificacion($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customer whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Customer extends BaseModel
{
    use HasFactory, HasJsonResourcefulData;

    protected $table = 'customers';

    const JSON_API_TYPE = 'customers';

    // Códigos SRI para tipo de identificación
    const TIPO_RUC = '04';
    const TIPO_CEDULA = '05';
    const TIPO_PASAPORTE = '06';
    const TIPO_CONSUMIDOR_FINAL = '07';
    const TIPO_EXTERIOR = '08';

    protected $fillable = [
        'identification',
        'tipo_identificacion',    // NUEVO — '04','05','06','07','08'
        'es_consumidor_final',    // NUEVO — boolean
        'name',
        'email',
        'phone',
        'country',
        'city',
        'address',
        'dob',
    ];

    protected $casts = [
        'es_consumidor_final' => 'boolean',
    ];

    public static $rules = [
        'identification' => 'nullable|unique:customers',
        'tipo_identificacion' => 'nullable|in:04,05,06,07,08',
        'es_consumidor_final' => 'nullable|boolean',
        'name' => 'required',
        'email' => 'required|email|unique:customers',
        'phone' => 'required|numeric',
        'country' => 'required',
        'city' => 'required',
        'address' => 'required',
        'dob' => 'nullable|date',
    ];

    /**
     * Devuelve el tipo de identificación SRI.
     * Si es consumidor final, siempre retorna '07'.
     * Si no tiene tipo definido, lo infiere por la longitud.
     */
    public function tipoIdentificacionSri(): string
    {
        if ($this->es_consumidor_final || strtolower($this->name) === 'consumidor final') {
            return self::TIPO_CONSUMIDOR_FINAL; // '07'
        }

        if ($this->tipo_identificacion) {
            return $this->tipo_identificacion;
        }

        return match (strlen((string) $this->identification)) {
            13 => self::TIPO_RUC,
            10 => self::TIPO_CEDULA,
            default => self::TIPO_PASAPORTE,
        };
    }

    /**
     * Devuelve la identificación según el SRI.
     * Consumidor final usa 9999999999999 (13 nueves).
     */
    public function identificacionSri(): string
    {
        // Detectar consumidor final por nombre o por flag
        if ($this->es_consumidor_final || strtolower($this->name) === 'consumidor final') {
            return '9999999999999';
        }

        return (string) ($this->identification ?? '9999999999999');
    }

    /**
     * Nombre que irá en el XML del SRI.
     */
    public function razonSocialSri(): string
    {
        if ($this->es_consumidor_final || strtolower($this->name) === 'consumidor final') {
            return 'CONSUMIDOR FINAL';
        }

        return strtoupper($this->name);
    }

    // ── Relaciones (sin cambios) ──────────────────

    public function sales(): HasMany
    {
        return $this->hasMany(Sale::class, 'customer_id', 'id');
    }

    public function quotations(): HasMany
    {
        return $this->hasMany(Quotation::class, 'customer_id', 'id');
    }

    public function salesReturns(): HasMany
    {
        return $this->hasMany(SaleReturn::class, 'customer_id', 'id');
    }

    // ── Métodos existentes (sin cambios) ─────────

    public function prepareLinks(): array
    {
        return ['self' => route('customers.show', $this->id)];
    }

    public function prepareAttributes(): array
    {
        return [
            'identification' => $this->identification,
            'tipo_identificacion' => $this->tipo_identificacion,
            'es_consumidor_final' => $this->es_consumidor_final,
            'name' => $this->name,
            'email' => $this->email,
            'phone' => $this->phone,
            'country' => $this->country,
            'city' => $this->city,
            'address' => $this->address,
            'dob' => $this->dob,
            'created_at' => $this->created_at,
        ];
    }

    public function prepareCustomers(): array
    {
        return ['id' => $this->id, 'name' => $this->name];
    }
}