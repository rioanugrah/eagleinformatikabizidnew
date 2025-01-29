<?php

return [
    'mercant_id' => env('MIDTRANS_IS_PRODUCTION') == true ? env('MIDTRANS_MERCHANT_ID_PRODUCTION') : env('MIDTRANS_MERCHANT_ID_SANDBOX'),
    'client_key' => env('MIDTRANS_IS_PRODUCTION') == true ? env('MIDTRANS_CLIENT_KEY_PRODUCTION') : env('MIDTRANS_CLIENT_KEY_SANDBOX'),
    'server_key' => env('MIDTRANS_IS_PRODUCTION') == true ? env('MIDTRANS_SERVER_KEY_PRODUCTION') : env('MIDTRANS_SERVER_KEY_SANDBOX'),

    'is_production' => env('MIDTRANS_IS_PRODUCTION', false),
    'is_sanitized' => false,
    'is_3ds' => false,
];
