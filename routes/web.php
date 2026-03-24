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

// Serve stored report photos (photo_path from the field_reports table)
Route::get('/report-photo/{path}', function (string $path) {
    $full = storage_path('app/' . $path);
    if (! file_exists($full)) abort(404);
    return response()->file($full);
})->where('path', '.+');