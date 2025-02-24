<?php

namespace App\Http\Controllers;

// use App\Models\Billings;
// use App\Models\Invoices;
// use App\Models\InvoicesDetail;

use App\Models\Carts;
use App\Models\Ppn;
use App\Models\Orders;

use \Carbon\Carbon;
use \Carbon\CarbonPeriod;

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

    function __construct(
        Carts $cart,
        Orders $orders,
        Ppn $ppn
    ){
        $this->cart = $cart;
        $this->orders = $orders;
        $this->ppn = $ppn;
    }

    public function cart()
    {
        $cart = $this->cart->where('user_id',auth()->user()->id_generate)
                            ->where('status','OPEN')
                            ->first();
        if (!empty($cart)) {
            return response()->json([
                'url' => route('cart.detail',['id' => $cart->id]),
                'total_cart' => $cart->cartItems->count()
            ]);
        }else{
            return response()->json([
                'url' => '',
                'total_cart' => 0
            ]);
        }
        // $invoices = $this->invoices->where('user_id',auth()->user()->id)
        //                         ->where('status','OPEN')
        //                         ->first();
        // // dd($invoices);
        // if (!empty($invoices)) {
        //     $invoicesDetail = $this->invoices_detail->where('invoice_id',$invoices->id)->count();
        //     return response()->json([
        //         'url' => route('order.checkout',['id' => $invoices->id]),
        //         'total_cart' => $invoicesDetail
        //     ]);
        // }else{
        //     $invoicesDetail = 0;
        //     return response()->json([
        //         'url' => null,
        //         'total_cart' => $invoicesDetail
        //     ]);
        // }

        // $invoices = $this->invoices_detail->with('invoice')->whereHas('invoice', function($query){
        //                                     $query->where('user_id',auth()->user()->id)
        //                                         ->where('status','OPEN');
        //                                 })->get();
        // dd($invoices);
    }

    public function cart_detail($id)
    {
        $cart = $this->cart->with('cartItems','cartItems.product')->where('id',$id)
                            ->where('user_id',auth()->user()->id_generate)
                            ->where('status','OPEN')
                            ->first();
        if (empty($cart)) {
            return back()->with('error','Cart Tidak Ditemukan');
        }

        $ppn = $this->ppn->select('ppn_name','ppn_nominal')->where('status','Aktif')->first();

        if (auth()->user()->hasRole('Administrator') == true) {
            return inertia('cart/index',[
                'cart' => $cart,
                'ppn' => $ppn
            ]);
        }else{
            return inertia('cart/users/index',[
                'cart' => $cart,
                'ppn' => $ppn
            ]);
        }

    }

    public function index()
    {
        // dd(auth()->user()->hasRole('Administrator'));
        if (auth()->user()->hasRole('Administrator') == true) {
            $date = Carbon::now();

            $year_start = $date->startOfYear()->format('Y-m');
            $year_end = $date->endOfYear()->format('Y-m');

            $years = CarbonPeriod::create($year_start, $year_end)->month();
            $total_sales = [];

            foreach ($years as $key => $value) {
                $order = $this->orders->whereHas('payment', function($query) {
                                            $query->where('status','PAID');
                                        })
                                        ->where('created_at','like','%'.$value->format('Y-m').'%')
                                        ->sum('total');
                $data['total_penjualan'][] = [
                    'date' => $value->isoFormat('MMMM YYYY'),
                    'data' => $order
                ];

                $total_sales[] = $order;

            }

            $data['total_sales'] = array_sum($total_sales);

            return inertia('dashboard/dashboard_admin',$data);
        }else{
            $date = Carbon::now();

            $year_start = $date->startOfYear()->format('Y-m');
            $year_end = $date->endOfYear()->format('Y-m');

            $years = CarbonPeriod::create($year_start, $year_end)->month();
            $total_sales = [];

            foreach ($years as $key => $value) {
                $order = $this->orders->whereHas('payment', function($query) {
                                            $query->where('status','PAID');
                                        })
                                        ->where('user_id',auth()->user()->id_generate)
                                        ->where('created_at','like','%'.$value->format('Y-m').'%')
                                        ->sum('total');
                $data['total_penjualan'][] = [
                    'date' => $value->isoFormat('MMMM YYYY'),
                    'data' => $order
                ];

                $total_sales[] = $order;

            }

            $data['total_sales'] = array_sum($total_sales);

            return inertia('dashboard/index',$data);
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
