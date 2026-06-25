<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\AppBaseController;
use App\Http\Resources\PermissionCollection;
use App\Http\Resources\PermissionResource;
use App\Repositories\PermissionRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class PermissionController extends AppBaseController
{
    private $permissionRepository;

    public function __construct(PermissionRepository $permissionRepo)
    {
        $this->permissionRepository = $permissionRepo;
    }

    public function getPermissions(Request $request)
    {
        $perPage = getPageSize($request);

        $permissions = Cache::remember("permissions_{$perPage}", 3600, function () use ($perPage) {
            PermissionResource::usingWithCollection();
            return $this->permissionRepository->paginate($perPage);
        });

        PermissionResource::usingWithCollection();
        return new PermissionCollection($permissions);
    }
}