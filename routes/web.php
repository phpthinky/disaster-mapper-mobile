<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\FieldReportController;
use App\Http\Controllers\HomeController;
/*
Route::get('/', function () {
    return Inertia::render('Home');
});
*/
Route::get('/',[HomeController:: class, 'index']);

Route::get('/report',[FieldReportController:: class, 'index']);
Route::post('/report',[FieldReportController:: class, 'store']);

Route::get('/map',[FieldReportController:: class, 'map']);

Route::get('/profile', function () {
    return Inertia::render('Profile');
});