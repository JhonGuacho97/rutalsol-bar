<?php

namespace App\Http\Requests;

use App\Models\Customer;
use Illuminate\Foundation\Http\FormRequest;

class UpdateCustomerRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $id = $this->route('customer');
        $rules = Customer::$rules;

        $rules['email'] = 'required|email|unique:customers,email,' . $id;
        $rules['identification'] = 'nullable|unique:customers,identification,' . $id;

        return $rules;
    }
}