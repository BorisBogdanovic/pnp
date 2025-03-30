<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FiterUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'status' => 'nullable|integer|exists:statuses,id', 
            'city' => 'nullable|integer|exists:cities,id',
            'search' => 'nullable|string|max:255', 
        ];
    }
}
