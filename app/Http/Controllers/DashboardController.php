<?php

namespace App\Http\Controllers;

use App\Models\Billings;
use App\Models\Invoices;
use App\Models\InvoicesDetail;

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
        Billings $billings,
        Invoices $invoices,
        InvoicesDetail $invoicesDetail
    ){
        $this->billings = $billings;
        $this->invoices = $invoices;
        $this->invoices_detail = $invoicesDetail;
    }

    public function cart()
    {
        $invoices = $this->invoices->where('user_id',auth()->user()->id)
                                ->where('status','OPEN')
                                ->first();
        $invoicesDetail = $this->invoices_detail->where('invoice_id',$invoices->id)->count();
        // $invoices = $this->invoices_detail->with('invoice')->whereHas('invoice', function($query){
        //                                     $query->where('user_id',auth()->user()->id)
        //                                         ->where('status','OPEN');
        //                                 })->get();
        // dd($invoices);
        return response()->json([
            'url' => route('order.checkout',['id' => $invoices->id]),
            'total_cart' => $invoicesDetail
        ]);
    }

    public function index()
    {
        // dd(auth()->user()->hasRole('Administrator'));
        if (auth()->user()->hasRole('Administrator') == true) {
            // return redirect()->route('dashboard.admin');
            $date = Carbon::now();

            $year_start = $date->startOfYear()->format('Y-m');
            $year_end = $date->endOfYear()->format('Y-m');

            $years = CarbonPeriod::create($year_start, $year_end)->month();
            $total_sales = [];
            foreach ($years as $key => $value) {
                $total_billings = $this->billings->where('created_at','like','%'.$value->format('Y-m').'%')
                                                        ->where('status','PAID')
                                                        ->sum('sub_total');
                $data['total_penjualan'][] = [
                    'date' => $value->isoFormat('MMMM YYYY'),
                    'data' => $total_billings
                ];

                $total_sales[] = $total_billings;

            }

            $data['total_sales'] = array_sum($total_sales);

            // dd(array_sum($data['total_sales']));

            // $data['total_penjualan'] = [
            //     [
            //         'date' => 'Januari',
            //         'data' => 60
            //     ]
            // ];
            // dd($data);
            return inertia('dashboard/dashboard_admin',$data);
        }else{
            // return redirect()->route('dashboard.user');
            return inertia('dashboard/index');
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
