<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\DashboardController;

Route::domain(parse_url(env('APP_URL'), PHP_URL_HOST))->group(function () {
    Route::middleware(['auth', 'role:Users'])->group(function () {
        // Route::get('dashboard', [DashboardController::class, 'index'])->middleware(['verified'])->name('dashboard.users');
        // Route::group(['middleware' => ['role:Users']], function(){
        //     Route::prefix('user')->group(function(){
        //         Route::get('dashboard', [DashboardController::class, 'index_user'])->middleware(['verified'])->name('dashboard.user');
        //     });
        // });
        Route::prefix('cart')->group(function(){
            Route::get('/', [App\Http\Controllers\DashboardController::class, 'cart'])->middleware(['verified'])->name('cart');
            Route::get('{id}', [App\Http\Controllers\DashboardController::class, 'cart_detail'])->middleware(['verified'])->name('cart.detail');
            Route::post('{id}/buy', [App\Http\Controllers\CartController::class, 'cart_buy'])->middleware(['verified'])->name('cart.buy');
        });

        Route::controller(App\Http\Controllers\CartController::class)->group(function () {
            Route::post('cart/{id}/simpan', 'cart_add')->middleware(['verified'])->name('cart.add');
        });

        Route::controller(App\Http\Controllers\OrderController::class)->group(function () {
            Route::prefix('order')->group(function(){
                Route::get('/', 'index')->middleware(['verified'])->name('order.index');
                Route::get('{id}', 'detail')->middleware(['verified'])->name('order.detail');
            });

            Route::prefix('finish')->group(function(){
                Route::get('/', 'finish')->middleware(['verified'])->name('order.finish');
            });
        });

        Route::controller(App\Http\Controllers\ProductsController::class)->group(function () {
            Route::prefix('products')->group(function(){
                Route::get('/', 'index')->middleware(['verified'])->name('products.index');
                Route::get('create', 'create')->middleware(['verified'])->name('products.create');
                Route::post('store', 'store')->middleware(['verified'])->name('products.store');
                Route::get('{id}/detail', 'detail')->middleware(['verified'])->name('products.detail');
                Route::get('{id}/edit', 'edit')->middleware(['verified'])->name('products.edit');
                Route::post('{id}/update', 'update')->middleware(['verified'])->name('products.update');
                Route::delete('{id}/delete', 'destroy')->middleware(['verified'])->name('products.destroy');
            });
        });

        Route::controller(App\Http\Controllers\TransactionController::class)->group(function () {
            Route::prefix('transactions')->group(function(){
                Route::get('/', 'index')->middleware(['verified'])->name('transaction');
                Route::get('{id}', 'detail')->middleware(['verified'])->name('transaction.detail');
            });
        });

        Route::controller(App\Http\Controllers\InvoicesController::class)->group(function () {
            Route::get('invoices/{id}', 'InvoiceDetail')->middleware(['verified'])->name('invoices.detail');
            Route::get('invoices/{id}/pdf', 'InvoicePdf')->middleware(['verified'])->name('invoices.pdf');
        });
    });
});
