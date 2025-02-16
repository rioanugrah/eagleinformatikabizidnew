<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use App\Http\Resources\TransactionResources;

use App\Models\Payments;
use \Carbon\Carbon;

class TransactionController extends Controller
{
    function __construct(
        Payments $payments
    ){
        $this->payments = $payments;
    }

    public function index(Request $request)
    {
        $request->validate([
            'field' => Rule::in(['updated_at', 'created_at', 'product_name']),
            'direction' => Rule::in(['asc', 'desc']),
        ]);

        $limit = $request->input('limit', 10);

        $transactions = TransactionResources::collection(
            $this->payments->query()
                                ->when(
                                    value: $request->search,
                                    callback: fn ($query, $value) => $query->where('billing_code', 'like', '%' . $value . '%')
                                )
                                ->when(
                                    value: $request->field && $request->direction,
                                    callback: fn ($query) => $query->orderBy($request->field, $request->direction),
                                    default: fn ($query) => $query->latest()
                                )
                                ->paginate($limit)
                                ->withQueryString()
        );

        return inertia('transactions/index',[
            'transactions' => fn () => $transactions,
            'state' => $request->only('limit', 'page', 'search', 'field', 'direction'),
        ]);
    }

    public function detail($id)
    {
        $data['transaction'] = $this->payments->find($id);

        if (empty($data['transaction'])) {
            return back()->with(['error' => 'Transaction Not Found']);
        }

        return inertia('transactions/detail',$data);
    }
}
