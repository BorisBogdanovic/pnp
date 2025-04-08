<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EditUserRequest extends FormRequest
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
           'name' => 'sometimes|string|max:255',
        'last_name' => 'sometimes|string|max:255',
        'phone' => 'sometimes|string|max:20',
        'password' => 'sometimes|string|min:4|max:255|confirmed',
        'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif|max:2048',
        ];
    }
}
