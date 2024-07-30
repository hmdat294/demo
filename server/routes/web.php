<?php

use App\Http\Controllers\SPController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::get('api/sp', [SPController::class, 'index']);
Route::get('api/chitiet/{id}', [SPController::class, 'chitiet']);
Route::post('api/themsp', [SPController::class, 'themsp']);