<?php

namespace App\Http\Controllers;

class DashboardController extends Controller
{
    // public function __invoke()
    // {
    //     if (auth()->user()->hasRole('Administrator') == true) {
    //         return redirect()->route('dashboard.admin');
    //     }else{
    //         return inertia('dashboard/index');
    //     }
    // }

    public function index()
    {
        // dd(auth()->user()->hasRole('Administrator'));
        if (auth()->user()->hasRole('Administrator') == true) {
            return redirect()->route('dashboard.admin');
        }else{
            return redirect()->route('dashboard.user');
        }
    }

    public function index_administrator()
    {
        return inertia('dashboard/dashboard_admin');
    }

    public function index_user()
    {
        return inertia('dashboard/index');
    }

    // public function index_user()
    // {
    //     return inertia('dashboard/index');
    // }
}
