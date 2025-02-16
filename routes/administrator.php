<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\Auth\DestroyAccountController;
use App\Http\Controllers\Auth\SecurityController;
use App\Http\Controllers\Auth\UserController;
use App\Http\Controllers\ProfileController;

use App\Http\Controllers\WebsitesController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\ProductsController;

Route::domain(parse_url(env('APP_URL'), PHP_URL_HOST))->group(function () {
    Route::middleware('auth')->group(function () {
        Route::group(['middleware' => ['role:Administrator']], function(){
            Route::prefix('administrator')->group(function(){
                Route::get('dashboard', [DashboardController::class, 'index_administrator'])->middleware(['verified'])->name('dashboard.admin');

                Route::controller(PermissionController::class)->group(function () {
                    Route::prefix('permissions')->group(function(){
                        Route::get('/', 'index')->middleware(['verified'])->name('permissions.index');
                        Route::get('create', 'create')->middleware(['verified'])->name('permissions.create');
                        Route::post('store', 'store')->middleware(['verified'])->name('permissions.store');
                        Route::get('{id}', 'edit')->middleware(['verified'])->name('permissions.edit');
                        Route::post('{id}/update', 'update')->middleware(['verified'])->name('permissions.update');
                        Route::delete('{id}/delete', 'destroy')->middleware(['verified'])->name('permissions.destroy');
                    });
                });

                Route::controller(RolesController::class)->group(function () {
                    Route::prefix('roles')->group(function(){
                        Route::get('/', 'index')->middleware(['verified'])->name('roles.index');
                        Route::get('create', 'create')->middleware(['verified'])->name('roles.create');
                        Route::post('store', 'store')->middleware(['verified'])->name('roles.store');
                        Route::get('{id}/edit', 'edit')->middleware(['verified'])->name('roles.edit');
                        // Route::get('{id}/make_access', 'make_access')->name('roles.make_access');
                        // Route::post('{id}/make_access/store', 'store_make_access')->name('roles.store_make_access.store');
                        Route::post('{id}/update', 'update')->name('roles.update');
                        // Route::delete('{id}/delete', 'destroy')->name('permissions.destroy');
                    });
                });

                Route::controller(UserController::class)->group(function () {
                    Route::get('users', 'index')->middleware(['verified'])->name('users.index');
                    Route::get('users/{user}', 'show')->middleware(['verified'])->name('users.show');
                    Route::delete('users/{user}', 'destroy')->middleware(['verified'])->name('users.destroy');
                });

                Route::controller(WebsitesController::class)->group(function () {
                    Route::prefix('websites')->group(function(){
                        Route::get('/', 'index')->middleware(['verified'])->name('websites.index');
                        Route::get('create', 'create')->middleware(['verified'])->name('websites.create');
                        Route::post('store', 'store')->middleware(['verified'])->name('websites.store');
                    });
                });

                Route::controller(CategoriesController::class)->group(function () {
                    Route::prefix('categories')->group(function(){
                        Route::get('/', 'index')->middleware(['verified'])->name('categories.index');
                        Route::get('create', 'create')->middleware(['verified'])->name('categories.create');
                        Route::post('store', 'store')->middleware(['verified'])->name('categories.store');
                        Route::get('{id}', 'edit')->middleware(['verified'])->name('categories.edit');
                        Route::post('{id}/update', 'update')->middleware(['verified'])->name('categories.update');
                        Route::delete('{id}/delete', 'destroy')->middleware(['verified'])->name('categories.destroy');
                    });
                });

                Route::controller(ProductsController::class)->group(function () {
                    Route::prefix('products')->group(function(){
                        Route::get('/', 'index')->middleware(['verified'])->name('products.index');
                        Route::get('create', 'create')->middleware(['verified'])->name('products.create');
                        Route::post('store', 'store')->middleware(['verified'])->name('products.store');
                        Route::get('{id}', 'edit')->middleware(['verified'])->name('products.edit');
                        Route::post('{id}/update', 'update')->middleware(['verified'])->name('products.update');
                        Route::delete('{id}/delete', 'destroy')->middleware(['verified'])->name('products.destroy');
                    });
                });

                Route::controller(ProfileController::class)->group(function () {
                    Route::get('profile', 'index')->middleware(['verified'])->name('profile.index');
                    Route::patch('profile', 'update')->middleware(['verified'])->name('profile.update');
                });

                Route::controller(SecurityController::class)->group(function () {
                    Route::get('security', 'index')->middleware(['verified'])->name('security.index');
                    Route::patch('security', 'update')->middleware(['verified'])->name('security.update');
                });

                Route::controller(DestroyAccountController::class)->group(function () {
                    Route::get('danger', 'index')->middleware(['verified'])->name('danger.index');
                    Route::delete('danger', 'destroy')->middleware(['verified'])->name('danger.destroy');
                });
            });
        });
    });
});
