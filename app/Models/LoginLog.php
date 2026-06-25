<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\LoginLog
 *
 * @property int $id
 * @property int|null $user_id
 * @property string|null $email
 * @property string $ip_address
 * @property string|null $user_agent
 * @property string $status
 * @property \Illuminate\Support\Carbon $logged_at
 * @property-read \App\Models\User|null $user
 * @method static \Illuminate\Database\Eloquent\Builder|LoginLog newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|LoginLog newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|LoginLog query()
 * @method static \Illuminate\Database\Eloquent\Builder|LoginLog whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LoginLog whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LoginLog whereIpAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LoginLog whereLoggedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LoginLog whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LoginLog whereUserAgent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LoginLog whereUserId($value)
 * @mixin \Eloquent
 */
class LoginLog extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'email',
        'ip_address',
        'user_agent',
        'status',
        'logged_at'
    ];

    protected $casts = [
        'logged_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}