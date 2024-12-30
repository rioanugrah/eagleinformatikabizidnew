<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\Invoices;

class InvoicesController extends Controller
{
    function __construct(
        Invoices $invoices
    ){
        $this->invoices = $invoices;
    }

    public function InvoiceDetail($id)
    {
        if (auth()->user()->hasRole('Administrator') == true) {
            $data['invoices'] = $this->invoices->with('billing','invoice_details')->find($id);
        }else{
            $data['invoices'] = $this->invoices->with('billing','invoice_details')
                                                ->where('id',$id)
                                                ->where('user_id',auth()->user()->id)
                                                ->first();
        }

        if (empty($data['invoices'])) {
            return back()->with('errors','Invoice Tidak Ditemukan');
        }

        return inertia('invoices/index',$data);
    }
}
