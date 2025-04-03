<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $table = 'books'; // Tábla neve
    protected $primaryKey = 'konyv_id'; // Elsődleges kulcs
}
