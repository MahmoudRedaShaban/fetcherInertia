<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', ['name'=>'mahmoud']);
});


Route::inertia('/about', 'About');
Route::inertia('/contact', 'Contact');
// Route::inertia('/about/vision', "About/Vision");
// Route::inertia('/about/CompanyInfo', "About/CompanyInfo");

Route::resource('/users', UserController::class);