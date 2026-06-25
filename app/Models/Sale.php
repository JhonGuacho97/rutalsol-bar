<?php

namespace App\Models;

use App\Models\Contracts\JsonResourceful;
use App\Traits\HasJsonResourcefulData;
use Eloquent;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Facades\Storage;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

/**
 * App\Models\Sale
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon $date
 * @property int $customer_id
 * @property int $warehouse_id
 * @property float|null $tax_rate
 * @property float|null $tax_amount
 * @property float|null $discount
 * @property float|null $shipping
 * @property float|null $grand_total
 * @property float|null $received_amount
 * @property float|null $paid_amount
 * @property int|null $payment_type
 * @property string|null $note
 * @property string|null $reference_code
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $status
 * @property int|null $payment_status
 * @property-read \App\Models\Customer $customer
 * @property-read string $sale_pdf_url
 * @property-read \Spatie\MediaLibrary\MediaCollections\Models\Collections\MediaCollection|Media[] $media
 * @property-read int|null $media_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\SaleItem[] $saleItems
 * @property-read int|null $sale_items_count
 * @property-read \App\Models\Warehouse $warehouse
 * @property-read \App\Models\SalesPayment $latestPayment
 * @method static \Illuminate\Database\Eloquent\Builder|Sale newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Sale newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Sale query()
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereCustomerId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereDiscount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereGrandTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereNote($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale wherePaidAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale wherePaymentStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale wherePaymentType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereReceivedAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereReferenceCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereShipping($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereTaxAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereTaxRate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereWarehouseId($value)
 * @property int $is_return
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\SalesPayment[] $payments
 * @property-read int|null $payments_count
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereIsReturn($value)
 * @property float|null $subtotal_sin_iva
 * @property int|null $user_id
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereSubtotalSinIva($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Sale whereUserId($value)
 * @property-read \App\Models\ElectronicInvoice|null $electronicInvoice
 * @mixin Eloquent
 */
class Sale extends BaseModel implements HasMedia, JsonResourceful
{
    use HasFactory, InteractsWithMedia, HasJsonResourcefulData;

    protected $table = 'sales';

    public const JSON_API_TYPE = 'sales';

    public const SALE_PDF = 'sale_pdf';

    public const SALE_BARCODE_PATH = 'sale_barcode_path';

    public const CODE128 = 1;

    public const CODE39 = 2;

    public const EAN8 = 3;

    public const UPC = 4;

    public const EAN13 = 5;

    protected $fillable = [
        'date',
        'customer_id',
        'warehouse_id',
        'tax_rate',
        'tax_amount',
        'discount',
        'shipping',
        'grand_total',
        'received_amount',
        'paid_amount',
        'payment_type',
        'note',
        'status',
        'payment_status',
        'reference_code',
        'barcode_symbol',
        'is_return',
        'user_id',
    ];

    public static $rules = [
        'date' => 'date|required',
        'customer_id' => 'required|exists:customers,id',
        'warehouse_id' => 'required|exists:warehouses,id',
        'tax_rate' => 'nullable|numeric',
        'tax_amount' => 'nullable|numeric',
        'discount' => 'nullable|numeric',
        'shipping' => 'nullable|numeric',
        'grand_total' => 'nullable|numeric',
        'received_amount' => 'numeric|nullable',
        'paid_amount' => 'numeric|nullable',
        'payment_type' => 'numeric|integer',
        'notes' => 'nullable',
        'status' => 'integer|required',
        'payment_status' => 'integer|required',
        'reference_code' => 'nullable',
    ];

    public $casts = [
        'date' => 'date',
        'tax_rate' => 'double',
        'tax_amount' => 'double',
        'discount' => 'double',
        'shipping' => 'double',
        'grand_total' => 'double',
        'received_amount' => 'double',
        'paid_amount' => 'double',
        'payment_status' => 'integer',
        'status' => 'integer',
        'payment_type' => 'integer',
    ];

    //tax type  const
    const EXCLUSIVE = 1;

    const INCLUSIVE = 2;

    // discount type const
    const PERCENTAGE = 1;

    const FIXED = 2;

    // payment type
    const CASH = 1;

    const CHEQUE = 2;

    const BANK_TRANSFER = 3;

    const OTHER = 4;

    // Order status
    const COMPLETED = 1;

    const PENDING = 2;

    const ORDERED = 3;

    // payment status
    const PAID = 1;

    const UNPAID = 2;

    const PARTIAL_PAID = 3;

    public function prepareLinks(): array
    {
        return [
            'self' => route('sales.show', $this->id),
        ];
    }

    public function getSalePdfUrlAttribute(): string
    {
        /** @var Media $media */
        $media = $this->getMedia(self::SALE_PDF)->first();
        if (!empty($media)) {
            return $media->getFullUrl();
        }

        return '';
    }

    public function prepareAttributes(): array
    {
        $fields = [
            'date' => $this->date,
            'is_return' => $this->is_return,
            'customer_id' => $this->customer_id,
            'customer_name' => $this->customer->name,
            'warehouse_id' => $this->warehouse_id,
            'warehouse_name' => $this->warehouse->name,
            'tax_rate' => $this->tax_rate,
            'tax_amount' => $this->tax_amount,
            'discount' => $this->discount,
            'shipping' => $this->shipping,
            'grand_total' => $this->grand_total,
            'received_amount' => $this->received_amount,
            'paid_amount' => $this->paid_amount,
            'due_amount' => $this->dueAmount($this->id),
            'payment_type' => $this->payment_type,
            'note' => $this->note,
            'status' => $this->status,
            'payment_status' => $this->payment_status,
            'reference_code' => $this->reference_code,
            'sale_items' => $this->saleItems,
            'created_at' => $this->created_at,
            'barcode_url' => Storage::url('sales/barcode-' . $this->reference_code . '.png'),
        ];

        return $fields;
    }

    public function prepareRecentSelling(): array
    {
        $fields = [
            'reference_code' => $this->reference_code,
            'customer_name' => $this->customer->name,
            'grand_total' => $this->grand_total,
            'paid_amount' => $this->paid_amount,
            'due_amount' => $this->dueAmount($this->id),
            'payment_status' => $this->payment_status,
            'status' => $this->status,
        ];

        return $fields;
    }

    /**
     * Subtotal sin IVA para el XML del SRI.
     * Si ya tienes subtotal_sin_iva guardado lo usa,
     * si no lo calcula desde grand_total - tax_amount.
     */
    public function subtotalSinIvaSri(): float
    {
        if (!empty($this->subtotal_sin_iva)) {
            return round($this->subtotal_sin_iva, 2);
        }

        return round(($this->grand_total ?? 0) - ($this->tax_amount ?? 0), 2);
    }

    /**
     * Forma de pago mapeada al código SRI.
     * Basado en las constantes que ya tienes: CASH=1, CHEQUE=2,
     * BANK_TRANSFER=3, OTHER=4.
     */
    public function formaPagoSri(): string
    {
        return match ($this->payment_type) {
            self::CASH => '01', // efectivo
            self::CHEQUE => '15', // transferencia (cheque → más cercano)
            self::BANK_TRANSFER => '15', // transferencia bancaria
            self::OTHER => '01', // otros → efectivo por defecto
            default => '01',
        };
    }

    /**
     * Fecha de emisión en formato dd/MM/yyyy que requiere el SRI.
     */
    public function fechaEmisionSri(): string
    {
        return $this->date->format('d/m/Y');
    }

    /**
     * Relación con la factura electrónica generada para esta venta.
     */
    public function electronicInvoice(): HasOne
    {
        return $this->hasOne(ElectronicInvoice::class, 'sale_id', 'id');
    }

    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class, 'customer_id', 'id');
    }

    public function warehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class, 'warehouse_id', 'id');
    }

    public function saleItems(): HasMany
    {
        return $this->hasMany(SaleItem::class, 'sale_id', 'id');
    }

    public function payments(): HasMany
    {
        return $this->hasMany(SalesPayment::class, 'sale_id', 'id');
    }

    /**
     * @return int|mixed
     */
    public function dueAmount($id)
    {
        $grandTotal = Sale::whereId($id)->value('grand_total');
        $paidAmount = SalesPayment::whereSaleId($id)->sum('amount');

        $dueAmount = $grandTotal - $paidAmount;

        if ($dueAmount < 0) {
            $dueAmount = 0;
        }

        return $dueAmount;
    }
}
