<?php

namespace App\Models;

use App\Models\Contracts\JsonResourceful;
use App\Traits\HasJsonResourcefulData;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * App\Models\VariationProduct
 *
 * @property int $id
 * @property int|null $main_product_id
 * @property int $product_id
 * @property int $variation_id
 * @property int $variation_type_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\MainProduct|null $mainProduct
 * @property-read \App\Models\Product $product
 * @property-read \App\Models\Variation $variation
 * @property-read \App\Models\VariationType $variationType
 * @method static \Illuminate\Database\Eloquent\Builder|VariationProduct newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|VariationProduct newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|VariationProduct query()
 * @method static \Illuminate\Database\Eloquent\Builder|VariationProduct whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|VariationProduct whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|VariationProduct whereMainProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|VariationProduct whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|VariationProduct whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|VariationProduct whereVariationId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|VariationProduct whereVariationTypeId($value)
 * @mixin \Eloquent
 */
class VariationProduct extends BaseModel implements JsonResourceful
{
    use HasFactory, HasJsonResourcefulData;

    protected $fillable = [
        'main_product_id',
        'product_id',
        'variation_id',
        'variation_type_id',
    ];

    protected $casts = [
        'main_product_id' => 'integer',
        'product_id' => 'integer',
        'variation_id' => 'integer',
        'variation_type_id' => 'integer',
    ];

    public function mainProduct()
    {
        return $this->belongsTo(MainProduct::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function variation()
    {
        return $this->belongsTo(Variation::class);
    }

    public function variationType()
    {
        return $this->belongsTo(VariationType::class);
    }

    public function prepareAttributes(): array
    {
        return [
            'main_product_id' => $this->main_product_id,
            'product_id' => $this->product_id,
            'variation_id' => $this->variation_id,
            'variation_type_id' => $this->variation_type_id,
            'variation_name' => $this->variation->name ?? '',
            'variation_type_name' => $this->variationType->name ?? '',
        ];
    }
    public function prepareLinks(): array
    {
        return [];
    }
}
