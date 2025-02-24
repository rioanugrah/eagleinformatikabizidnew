<?php

use App\Http\Controllers\Payment\PaymentMidtransController;

use App\Http\Controllers\Auth\DestroyAccountController;
use App\Http\Controllers\Auth\SecurityController;
use App\Http\Controllers\Auth\UserController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;

use App\Http\Controllers\PermissionController;
use App\Http\Controllers\RolesController;

use App\Http\Controllers\BillingController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\InvoicesController;
use App\Http\Controllers\WebsitesController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\PpnController;
use App\Http\Controllers\CartController;

use App\Http\Controllers\TransactionController;

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

        Route::get('test', [PaymentMidtransController::class, 'test'])->middleware(['verified']);

        Route::prefix('cart')->group(function(){
            Route::get('/', [DashboardController::class, 'cart'])->middleware(['verified'])->name('cart');
            Route::get('{id}', [DashboardController::class, 'cart_detail'])->middleware(['verified'])->name('cart.detail');
            Route::post('{id}/buy', [CartController::class, 'cart_buy'])->middleware(['verified'])->name('cart.buy');
            Route::post('{id}/item/{cart_item_id}/delete', [CartController::class, 'cart_remove_item'])->middleware(['verified'])->name('cart.remove_item');
        });

        Route::controller(OrderController::class)->group(function () {
            Route::prefix('order')->group(function(){
                Route::get('/', 'index')->middleware(['verified'])->name('order.index');
                Route::get('{id}', 'detail')->middleware(['verified'])->name('order.detail');
                // Route::get('{id}/checkout', 'detail')->middleware(['verified'])->name('order.checkout');
                // Route::get('{id}/payment', 'payment')->middleware(['verified'])->name('order.payment');
                // Route::post('{id}/buy', 'store')->middleware(['verified'])->name('order.store');
                // Route::post('{id}/buy/checkout', 'checkout')->middleware(['verified'])->name('order.buy.checkout');
                // Route::post('{id}/{invoice_id}/remove', 'invoice_detail_remove')->middleware(['verified'])->name('order.invoice_detail_remove');
            });

            Route::prefix('finish')->group(function(){
                Route::get('/', 'finish')->middleware(['verified'])->name('order.finish');
            });

            // Route::prefix('pa')->group(function(){
            // });
        });

        Route::controller(CartController::class)->group(function () {
            Route::post('cart/{id}/simpan', 'cart_add')->middleware(['verified'])->name('cart.add');
        });

        Route::controller(TransactionController::class)->group(function () {
            Route::prefix('transactions')->group(function(){
                Route::get('/', 'index')->middleware(['verified'])->name('transaction');
                Route::get('{id}', 'detail')->middleware(['verified'])->name('transaction.detail');
            });
        });

        Route::controller(InvoicesController::class)->group(function () {
            Route::get('invoices/{id}', 'InvoiceDetail')->middleware(['verified'])->name('invoices.detail');
            Route::get('invoices/{id}/pdf', 'InvoicePdf')->middleware(['verified'])->name('invoices.pdf');
        });

        Route::controller(BillingController::class)->group(function () {
            Route::get('billings', 'index')->middleware(['verified'])->name('billing.index');
        });

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
                Route::get('{id}/detail', 'detail')->middleware(['verified'])->name('products.detail');
                Route::get('{id}/edit', 'edit')->middleware(['verified'])->name('products.edit');
                Route::post('{id}/update', 'update')->middleware(['verified'])->name('products.update');
                Route::delete('{id}/delete', 'destroy')->middleware(['verified'])->name('products.destroy');
            });
        });

        Route::controller(PpnController::class)->group(function () {
            Route::prefix('ppns')->group(function(){
                Route::get('/', 'index')->middleware(['verified'])->name('ppns.index');
                Route::get('create', 'create')->middleware(['verified'])->name('ppns.create');
                Route::post('store', 'store')->middleware(['verified'])->name('ppns.store');
                Route::get('{id}', 'edit')->middleware(['verified'])->name('ppns.edit');
                Route::post('{id}/update', 'update')->middleware(['verified'])->name('ppns.update');
                Route::delete('{id}/delete', 'destroy')->middleware(['verified'])->name('ppns.destroy');
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

        // Route::middleware(['role:Administrator'])->group(function () {

        // });

    });
});

Route::domain('payment1.'.parse_url(env('APP_URL'), PHP_URL_HOST))->group(function () {
    Route::get('/', function(){
        return 'OKE1';
    });
    // Route::post('midtrans/webhook', [App\Http\Controllers\Payment\PaymentMidtransController::class, 'payment_callback'])->name('midtrans.callback');
});

require __DIR__ . '/auth.php';
