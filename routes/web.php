<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\FieldReportController;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/report',[FieldReportController:: class, 'index']);
Route::post('/report',[FieldReportController:: class, 'store']);
Route::post('/map',[FieldReportController:: class, 'map']);

Route::get('/profile', function () {
    return Inertia::render('Profile');
});