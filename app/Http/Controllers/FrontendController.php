<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function index()
    {
        return inertia('frontend/index');
    }

    public function about_us()
    {
        return inertia('frontend/about-us');
    }

    public function contact_us()
    {
        return inertia('frontend/contact-us');
    }

}
