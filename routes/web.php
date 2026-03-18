<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
Route::get('/', function () {
    return Inertia::render('Home');
});


Route::get('/report', function () {
    return Inertia::render('Report');
});


Route::get('/map', function () {
    return Inertia::render('Map');
});


Route::get('/profile', function () {
    return Inertia::render('Profile');
});


