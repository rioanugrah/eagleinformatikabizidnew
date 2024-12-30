<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use App\Http\Resources\BillingResource;

use App\Models\Billings;
use \Carbon\Carbon;
use Validator;

class BillingController extends Controller
{
    function __construct(
        Billings $billings
    ){
        $this->billings = $billings;
    }

    public function index(Request $request)
    {
        $request->validate([
            'field' => Rule::in(['updated_at', 'created_at', 'billing_code', 'billing_references']),
            'direction' => Rule::in(['asc', 'desc']),
        ]);

        $limit = $request->input('limit', 10);

        if (auth()->user()->hasRole('Administrator') == true) {
            $billings = BillingResource::collection(
                $this->billings->query()
                                ->when(
                                    value: $request->search,
                                    callback: fn ($query, $value) => $query->where('billing_code', 'like', '%' . $value . '%')
                                                                            ->orWhere('billing_references', 'like', '%' . $value . '%')
                                )
                                ->when(
                                    value: $request->field && $request->direction,
                                    callback: fn ($query) => $query->orderBy($request->field, $request->direction),
                                    default: fn ($query) => $query->latest()
                                )
                                ->paginate($limit)
                                ->withQueryString()
            );
        }else{
            $billings = BillingResource::collection(
                $this->billings->query()
                                ->where('user_id',auth()->user()->id)
                                ->when(
                                    value: $request->search,
                                    callback: fn ($query, $value) => $query->where('billing_code', 'like', '%' . $value . '%')
                                                                            ->orWhere('billing_references', 'like', '%' . $value . '%')
                                )
                                ->when(
                                    value: $request->field && $request->direction,
                                    callback: fn ($query) => $query->orderBy($request->field, $request->direction),
                                    default: fn ($query) => $query->latest()
                                )
                                ->paginate($limit)
                                ->withQueryString()
            );
        }

        return inertia('billings/index',[
            'billings' => fn () => $billings,
            'state' => $request->only('limit', 'page', 'search', 'field', 'direction'),
        ]);
    }
}
