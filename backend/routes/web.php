<?php

use App\Http\Controllers\SPController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::get('sp', [SPController::class, 'index']);
Route::get('chitiet/{id}', [SPController::class, 'chitiet']);