<?php

namespace App\Models;

use App\Traits\HasJsonResourcefulData;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * App\Models\VariationType
 *
 * @property int $id
 * @property int $variation_id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Variation $variation
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\VariationProduct> $variationProducts
 * @property-read int|null $variation_products_count
 * @method static \Illuminate\Database\Eloquent\Builder|VariationType newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|VariationType newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|VariationType query()
 * @method static \Illuminate\Database\Eloquent\Builder|VariationType whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|VariationType whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|VariationType whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|VariationType whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|VariationType whereVariationId($value)
 * @mixin \Eloquent
 */
class VariationType extends BaseModel
{
    use HasFactory, HasJsonResourcefulData;

    protected $fillable = [
        'name',
        'variation_id',
    ];

    public function variation()
    {
        return $this->belongsTo(Variation::class);
    }

    public function variationProducts()
    {
        return $this->hasMany(VariationProduct::class);
    }
}
