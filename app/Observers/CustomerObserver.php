<?php
// app/Observers/CustomerObserver.php

namespace App\Observers;

use App\Models\Customer;

class CustomerObserver
{
    public function saving(Customer $customer): void
    {
        $esConsumidorFinal =
            $customer->tipo_identificacion === Customer::TIPO_CONSUMIDOR_FINAL ||
            strtolower(trim($customer->name)) === 'consumidor final' ||
            $customer->identification === '9999999999999' ||
            empty($customer->identification);

        if ($esConsumidorFinal) {
            $customer->es_consumidor_final = true;
            $customer->tipo_identificacion = Customer::TIPO_CONSUMIDOR_FINAL;
            $customer->identification = '9999999999999';
        } else {
            $customer->es_consumidor_final = false;

            // Inferir tipo si no viene del frontend
            if (empty($customer->tipo_identificacion)) {
                $customer->tipo_identificacion = match (strlen((string) $customer->identification)) {
                    13 => Customer::TIPO_RUC,
                    10 => Customer::TIPO_CEDULA,
                    default => Customer::TIPO_PASAPORTE,
                };
            }
        }
    }
}