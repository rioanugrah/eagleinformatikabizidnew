<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\Orders;
// use App\Http\Resources\PaymentResources;
use App\Http\Resources\OrderResources;



class InvoicesController extends Controller
{
    function __construct(
        Orders $orders
    ){
        $this->orders = $orders;
    }

    public function InvoiceDetail($id)
    {
        if (auth()->user()->hasRole('Administrator') == true) {
            $order = $this->orders->with('payment','order_details')->find($id);

            if (empty($order)) {
                return back()->with('error','Invoice Tidak Ditemukan');
            }

            $orderItems = [];

            foreach ($order->order_details as $key => $order_detail) {
                $orderItems[] = [
                    'id' => $order_detail->id,
                    'item' => $order_detail->product->title,
                    'price' => 'Rp. '.number_format($order_detail->price,0,',','.'),
                    'quantity' => $order_detail->quantity,
                    'total' => 'Rp. '.number_format($order_detail->price*$order_detail->quantity,0,',','.'),
                ];
            }

            $data['order'] = [
                'id' => $order->id,
                'user_id' => $order->user_id,
                'order_code' => $order->order_code,
                'tax' => 'Rp. '.number_format($order->tax,0,',','.'),
                'admin_fee' => $order->admin_fee,
                'total' => 'Rp. '.number_format($order->total-$order->tax,0,',','.'),
                'sub_total' => 'Rp. '.number_format($order->total,0,',','.'),
                'payment' => [
                    'id' => $order->payment->id,
                    'order_id' => $order->payment->order_id,
                    'billing_code' => $order->payment->billing_code,
                    'billing_buyer' => $order->payment->billing_buyer,
                    'total' => $order->payment->total,
                    'status' => $order->payment->status,
                    'created_at' => $order->payment->created_at->format('Y-m-d H:i:s'),
                    'updated_at' => $order->payment->updated_at->format('Y-m-d H:i:s'),
                ],
                'order_details' => $orderItems,
                'created_at' => $order->created_at->format('Y-m-d H:i:s'),
            ];

            return inertia('invoices/invoice',$data);
        }else{
            $order = $this->orders->with('payment','order_details')
                                            ->where('id',$id)
                                            ->where('user_id',auth()->user()->id_generate)
                                            ->first();
            // dd($order);
            if (empty($order)) {
                return back()->with('error','Invoice Tidak Ditemukan');
            }

            $orderItems = [];

            foreach ($order->order_details as $key => $order_detail) {
                $orderItems[] = [
                    'id' => $order_detail->id,
                    'item' => $order_detail->product->title,
                    'price' => 'Rp. '.number_format($order_detail->price,0,',','.'),
                    'quantity' => $order_detail->quantity,
                    'total' => 'Rp. '.number_format($order_detail->price*$order_detail->quantity,0,',','.'),
                ];
            }

            $data['order'] = [
                'id' => $order->id,
                'user_id' => $order->user_id,
                'order_code' => $order->order_code,
                'tax' => 'Rp. '.number_format($order->tax,0,',','.'),
                'admin_fee' => $order->admin_fee,
                'total' => 'Rp. '.number_format($order->total-$order->tax,0,',','.'),
                'sub_total' => 'Rp. '.number_format($order->total,0,',','.'),
                'payment' => [
                    'id' => $order->payment->id,
                    'order_id' => $order->payment->order_id,
                    'billing_code' => $order->payment->billing_code,
                    'billing_buyer' => $order->payment->billing_buyer,
                    'total' => $order->payment->total,
                    'status' => $order->payment->status,
                    'created_at' => $order->payment->created_at->format('Y-m-d H:i:s'),
                    'updated_at' => $order->payment->updated_at->format('Y-m-d H:i:s'),
                ],
                'order_details' => $orderItems,
                'created_at' => $order->created_at->format('Y-m-d H:i:s'),
            ];

            return inertia('invoices/users/invoice',$data);
        }
    }

    public function InvoicePdf($id)
    {
        if (auth()->user()->hasRole('Administrator') == true) {
            $order = $this->orders->with('payment','order_details')->find($id);
        }else{
            $order = $this->orders->with('payment','order_details')
                                            ->where('id',$id)
                                            ->where('user_id',auth()->user()->id_generate)
                                            ->first();
        }

        if (empty($order)) {
            return back()->with('error','Invoice Tidak Ditemukan');
        }

        $orderItems = [];

        foreach ($order->order_details as $key => $order_detail) {
            $orderItems[] = [
                'id' => $order_detail->id,
                'item' => $order_detail->product->title,
                'price' => 'Rp. '.number_format($order_detail->price,0,',','.'),
                'quantity' => $order_detail->quantity,
                'total' => 'Rp. '.number_format($order_detail->price*$order_detail->quantity,0,',','.'),
            ];
        }

        $data['order'] = [
            'id' => $order->id,
            'user_id' => $order->user_id,
            'order_code' => $order->order_code,
            'tax' => 'Rp. '.number_format($order->tax,0,',','.'),
            'admin_fee' => $order->admin_fee,
            'total' => 'Rp. '.number_format($order->total-$order->tax,0,',','.'),
            'sub_total' => 'Rp. '.number_format($order->total,0,',','.'),
            'payment' => [
                'id' => $order->payment->id,
                'order_id' => $order->payment->order_id,
                'billing_code' => $order->payment->billing_code,
                'billing_buyer' => $order->payment->billing_buyer,
                'total' => $order->payment->total,
                'status' => $order->payment->status,
                'created_at' => $order->payment->created_at->format('Y-m-d H:i:s'),
                'updated_at' => $order->payment->updated_at->format('Y-m-d H:i:s'),
            ],
            'order_details' => $orderItems,
            'created_at' => $order->created_at->format('Y-m-d H:i:s'),
        ];

        return inertia('invoices/pdf',$data);
    }
}
