<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\DashboardController;

Route::domain(parse_url(env('APP_URL'), PHP_URL_HOST))->group(function () {
    Route::middleware('auth')->group(function () {
        Route::group(['middleware' => ['role:Users']], function(){
            Route::prefix('user')->group(function(){
                Route::get('dashboard', [DashboardController::class, 'index_user'])->middleware(['verified'])->name('dashboard.user');
            });
        });
    });
});
