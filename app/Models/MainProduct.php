<?php

namespace App\Models;

use App\Models\Contracts\JsonResourceful;
use App\Traits\HasJsonResourcefulData;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

/**
 * App\Models\MainProduct
 *
 * @property int $id
 * @property string $name
 * @property string $code
 * @property string|null $product_unit
 * @property int $product_type 1=Single, 2=Variable
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read array|string $image_url
 * @property-read \Spatie\MediaLibrary\MediaCollections\Models\Collections\MediaCollection<int, \Spatie\MediaLibrary\MediaCollections\Models\Media> $media
 * @property-read int|null $media_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Product> $products
 * @property-read int|null $products_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\VariationType> $variationTypes
 * @property-read int|null $variation_types_count
 * @property-read \App\Models\Variation|null $variations
 * @method static \Illuminate\Database\Eloquent\Builder|MainProduct newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|MainProduct newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|MainProduct query()
 * @method static \Illuminate\Database\Eloquent\Builder|MainProduct whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MainProduct whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MainProduct whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MainProduct whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MainProduct whereProductType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MainProduct whereProductUnit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MainProduct whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class MainProduct extends Model implements HasMedia, JsonResourceful
{
    use HasFactory, HasJsonResourcefulData, InteractsWithMedia;

    protected $fillable = [
        'name',
        'code',
        'product_unit',
        'product_type',
    ];

    const JSON_API_TYPE = 'products';

    const SINGLE_PRODUCT = 1;
    const VARIATION_PRODUCT = 2;

    const PATH = 'main_product';


    protected $appends = ['image_url'];

    public static $rules = [
        'images.*' => 'image|mimes:jpg,jpeg,png',
    ];

    protected $casts = [
        'name' => 'string',
        'code' => 'string',
        'product_unit' => 'string',
        'product_type' => 'integer',
    ];

    public function getIdFilterFields(): array
    {
        return [
            'id' => self::class,
        ];
    }

    public function prepareLinks(): array
    {
        return [
            'self' => route('products.show', $this->id),
        ];
    }

    public function prepareAttributes(): array
    {
        $this->load('products');
        $prices = collect($this->products)->pluck('product_price')->toArray();

        $fields = [
            'name' => $this->name,
            'code' => $this->code,
            'product_unit' => $this->getProductUnitName($this->product_unit),
            'product_type' => $this->product_type,
            'min_price' => min($prices),
            'max_price' => max($prices),
            'images' => $this->image_url,
            'products' => $this->products->map(function ($product) {
                $productData = $product->prepareAttributes();
                $productData['id'] = $product->id;

                return $productData;
            }),
        ];

        if ($this->product_type == self::VARIATION_PRODUCT) {
            $fields['variation'] = $this->variations->prepareAttributes();
            $fields['variation_types'] = $this->variationTypes->map(function ($variationType) {
                return $variationType->only('id', 'name');
            });
        }

        return $fields;
    }

    /**
     * @return array|string
     */
    public function getImageUrlAttribute()
    {
        /** @var Media $media */
        $medias = $this->getMedia(MainProduct::PATH);
        $images = [];
        if (!empty($medias)) {
            foreach ($medias as $key => $media) {
                $images['imageUrls'][$key] = $media->getFullUrl();
                $images['id'][$key] = $media->id;
            }

            return $images;
        }

        return '';
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function variations()
    {
        return $this->hasOneThrough(Variation::class, VariationProduct::class, 'main_product_id', 'id', 'id', 'variation_id');
    }
    public function variationTypes()
    {
        return $this->hasManyThrough(VariationType::class, VariationProduct::class, 'main_product_id', 'id', 'id', 'variation_type_id');
    }

    /**
     * @return array|string
     */
    public function getProductUnitName()
    {
        $productUnit = BaseUnit::whereId($this->product_unit)->first();
        if ($productUnit) {
            return $productUnit->toArray();
        }

        return '';
    }
}
