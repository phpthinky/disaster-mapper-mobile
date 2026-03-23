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

// Serve native camera photos through PHP so WebView can display them via <img src>
Route::get('/native-photo', function (Illuminate\Http\Request $request) {
    $path = $request->query('path', '');
    $real = $path ? realpath($path) : false;

    // Only serve files that actually exist inside the device's app data directory
    if (! $real || ! file_exists($real) || ! str_starts_with($real, '/data/')) {
        abort(404);
    }

    return response()->file($real);
});