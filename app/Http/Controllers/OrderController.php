<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

use App\Http\Resources\OrderResources;

use App\Models\Orders;
use \Carbon\Carbon;

class OrderController extends Controller
{
    function __construct(
        Orders $orders
    ){
        $this->orders = $orders;
    }

    public function index(Request $request)
    {
        $request->validate([
            'field' => Rule::in(['updated_at', 'created_at', 'email_verified_at', 'order_code']),
            'direction' => Rule::in(['asc', 'desc']),
        ]);

        $limit = $request->input('limit', 10);

        $orders = OrderResources::collection(
            $this->orders->query()
                            ->when(
                                value: $request->search,
                                callback: fn ($query, $value) => $query->where('order_code', 'like', '%' . $value . '%')
                                    ->where('user_id', auth()->user()->id_generate)
                            )
                            ->when(
                                value: $request->field && $request->direction,
                                callback: fn ($query) => $query->orderBy($request->field, $request->direction),
                                default: fn ($query) => $query->latest()
                            )
                            ->paginate($limit)
                            ->withQueryString()
        );
        return inertia('orders/index', [
            'orders' => fn () => $orders,
            'state' => $request->only('limit', 'page', 'search', 'field', 'direction'),
        ]);
    }
}
