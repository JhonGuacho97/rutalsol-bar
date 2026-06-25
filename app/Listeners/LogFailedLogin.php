<?php

namespace App\Listeners;

use App\Models\LoginLog;
use Illuminate\Auth\Events\Failed;

class LogFailedLogin
{
    public function handle(Failed $event): void
    {
        /** @var \App\Models\User $user */
        $user = $event->user;

        LoginLog::create([
            'user_id' => $user?->id,
            'email' => $event->credentials['email'] ?? null,
            'ip_address' => request()->ip(),
            'user_agent' => request()->userAgent(),
            'status' => 'failed',
            'logged_at' => now(),
        ]);
    }
}