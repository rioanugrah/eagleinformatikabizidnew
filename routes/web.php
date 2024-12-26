<?php

use App\Http\Controllers\Auth\DestroyAccountController;
use App\Http\Controllers\Auth\SecurityController;
use App\Http\Controllers\Auth\UserController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;

use App\Http\Controllers\PermissionController;
use App\Http\Controllers\RolesController;

use App\Http\Controllers\FrontendController;
use Illuminate\Support\Facades\Route;

Route::domain(parse_url(env('APP_URL'), PHP_URL_HOST))->group(function () {
    // Route::get('/', HomeController::class)->name('home');
    // Route::get('/', function(){
    //     return redirect()->route('login');
    // });
    Route::get('/', [FrontendController::class, 'index'])->name('frontend.index');
    Route::get('tentang-kami', [FrontendController::class, 'about_us'])->name('frontend.tentang_kami');
    Route::get('services', [FrontendController::class, 'services'])->name('frontend.services');
    Route::get('kontak-kami', [FrontendController::class, 'contact_us'])->name('frontend.kontak_kami');

    Route::middleware('auth')->group(function () {
        Route::get('dashboard', [DashboardController::class, 'index'])->middleware(['verified'])->name('dashboard');

        // Route::controller(ProfileController::class)->group(function () {
        //     Route::get('profile', 'index')->middleware(['verified'])->name('profile.index');
        //     Route::patch('profile', 'update')->middleware(['verified'])->name('profile.update');
        // });

        // Route::controller(SecurityController::class)->group(function () {
        //     Route::get('security', 'index')->middleware(['verified'])->name('security.index');
        //     Route::patch('security', 'update')->middleware(['verified'])->name('security.update');
        // });

        // Route::controller(DestroyAccountController::class)->group(function () {
        //     Route::get('danger', 'index')->middleware(['verified'])->name('danger.index');
        //     Route::delete('danger', 'destroy')->middleware(['verified'])->name('danger.destroy');
        // });

    });
});

require __DIR__ . '/auth.php';
