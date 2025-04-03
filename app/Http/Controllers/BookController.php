<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index()
    {
        $konyvek = Book::all(); // Lekérjük az összes könyvet
        return response()->json($konyvek); // JSON formátumban adjuk vissza
    }
}
