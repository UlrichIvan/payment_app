<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SignupRequest extends FormRequest
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
            "email" => "required|email",
            "password" => "required|min:12|max:255",
            "name" => "required|min:2|max:255"
        ];
    }
    public function messages()
    {
        return [
            // email
            "email.required" => "adrèsse email requise",
            "email.email" => "adrèsse email invalide",
            // password
            "password.required" => "mot de passe requis",
            "password.min" => "mot de passe trop court",
            "password.max" => "mot de passe trop long",
            // name 
            "name.required" => "nom requis",
            "name.min" => "nom très court",
            "name.max" => "nom très long",
        ];
    }
}
