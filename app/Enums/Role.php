<?php

namespace App\Enums;

enum Role: string
{
    case ADMIN = "ADMIN";
    case USER = "USER";

    public static function toArray()
    {
        return collect(self::cases())->mapWithKeys(function ($case) {
            return [$case->name => $case->value];
        })->toArray();
    }
}
