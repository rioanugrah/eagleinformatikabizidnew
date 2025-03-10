<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Http\RedirectResponse;

class SecurityController extends Controller
{
    public function index()
    {
        if (auth()->user()->hasRole('Administrator') == true) {
            return inertia('security/index');
        }else{
            return inertia('security/users/index');
        }
    }

    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return back();
    }
}
