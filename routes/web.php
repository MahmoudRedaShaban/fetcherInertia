<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', ['name'=>'mahmoud']);
});

Route::inertia('/about/vision', "About/Vision");
Route::inertia('/about/CompanyInfo', "About/CompanyInfo");