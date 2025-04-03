<?php

return [

    'paths' => ['api/*', 'books', '*'], // Engedélyezett útvonalak

    'allowed_methods' => ['*'], // Engedélyezett HTTP metódusok

    'allowed_origins' => ['*'], // Engedélyezett domainek (pl. 'http://localhost:5175')

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'], // Engedélyezett HTTP fejlécek

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false, // Ha sütiket is használsz, állítsd true-ra
];