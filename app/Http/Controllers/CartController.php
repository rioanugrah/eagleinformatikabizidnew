<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

use App\Http\Controllers\Payment\PaymentMidtransController;

use App\Models\Carts;
use App\Models\CartItems;
use App\Models\Ppn;
use App\Models\Orders;
use App\Models\OrderItems;
use App\Models\Payments;
use App\Models\Products;

use \Carbon\Carbon;
use DB;

class CartController extends Controller
{
    function __construct(
        PaymentMidtransController $midtrans,
        Carts $carts,
        CartItems $cart_items,
        Ppn $ppn,
        Payments $payments,
        Products $products,
        Orders $orders,
        OrderItems $order_items
    ){
        $this->midtrans = $midtrans;
        $this->carts = $carts;
        $this->cart_items = $cart_items;
        $this->ppn = $ppn;
        $this->payments = $payments;
        $this->orders = $orders;
        $this->order_items = $order_items;
        $this->products = $products;
    }

    public function cart_add(Request $request,$id)
    {
        // dd($id);
        DB::beginTransaction();

        try {
            $cart = $this->carts->where('user_id',auth()->user()->id_generate)
                                ->where('status','OPEN')
                                ->first();
                                // dd($cart);
            if (empty($cart)) {
                // dd('ok');
                $input['id'] = Str::uuid()->toString();
                $input['user_id'] = auth()->user()->id_generate;
                $input['tax'] = 0;
                $input['total'] = 0;
                $input['status'] = 'OPEN';

                $product = $this->products->find($id);

                if ($product->quantity <= 0) {
                    return back()->with('error','Data Tidak Ditemukan');
                }

                // dd($input);

                $this->carts->create($input);
                $this->cart_items->create([
                    'id' => Str::uuid()->toString(),
                    'cart_id' => $input['id'],
                    'product_id' => $product->id,
                    'price' => $product->price,
                    'quantity' => 1
                ]);
            }else{
                // dd($cart->cartItems);

                // foreach ($cart->cartItems as $key => $cartItem) {
                //     if ($cartItem->product->quantity <= 0) {
                //         return back()->with(['error' => $cartItem->product->title.' is Sold Out']);
                //     }
                // }

                $product = $this->products->find($id);
                // dd($product);
                if ($product->quantity <= 0) {
                    return back()->with(['error' => $product->title.' is Sold Out']);
                }

                $cartItem = $cart->cartItems->where('product_id',$id)->first();
                // dd($cartItem);
                if (empty($cartItem)) {
                    // $cart->cartItems->create([
                    //     'id' => Str::uuid()->toString(),
                    //     'cart_id' => $cart->id,
                    //     'product_id' => $product->id,
                    //     'price' => $product->price,
                    //     'quantity' => 1
                    // ]);
                    $this->cart_items->create([
                        'id' => Str::uuid()->toString(),
                        'cart_id' => $cart->id,
                        'product_id' => $product->id,
                        'price' => $product->price,
                        'quantity' => 1
                    ]);
                }else{
                    // dd('OK');
                    return back()->with(['error' => $product->title.' Telah ditambahkan']);
                }
                // dd($cartItem);
            }

            DB::commit();

            return back()->with(['success' => $product->title.' is Add, Please check a cart!']);
        } catch (\Throwable $th) {
            // dd($th);

            DB::rollback();
            return back()->with('error','Something Went Wrong!');
        }
    }

    public function cart_remove_item(Request $request, $id, $cart_item_id)
    {
        $cart = $this->carts->where('status','OPEN')->find($id);
        // dd($invoices_detail);
        if (empty($cart)) {
            return back()->with(['error' => 'Cart Tidak Ditemukan']);
        }

        $cart_item = $this->cart_items->where('cart_id',$id)->where('id',$cart_item_id)->first();

        if (empty($cart_item)) {
            return back()->with(['error' => 'Cart Item Tidak Ditemukan']);
        }

        $cart_item->delete();

        return back()->with(['success' => 'Cart Item '.$cart_item->product->title.' Berhasil Dihapus']);

        // $product = $this->product->find(explode('|',$invoices_detail->item)[0]);
        // $product->product_stock =  $product->product_stock+$request->product_stock;
        // $product->update();

        // $invoices_detail->delete();
        // // return back()->with(['success' => 'Item Berhasil Dihapus']);
        // return redirect()->route('order.checkout',[$id])->with(['success' => 'Item Berhasil Dihapus']);
    }

    public function cart_buy(Request $request, $id)
    {
        // dd('OK');
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required',
            'company' => 'required',
            'address' => 'required',
            'city' => 'required',
            'country' => 'required',
            'postal_code' => 'required',
            'phone' => 'required',
        ],[
            'first_name.required' => 'First Name is required',
            'last_name.required' => 'Last Name is required',
            'email' => 'Email is required',
            'company' => 'Company is required',
            'address' => 'Address is required',
            'city' => 'City is required',
            'country' => 'Country is required',
            'postal_code' => 'Postal Code is required',
            'phone' => 'Phone is required',
        ]);

        DB::beginTransaction();

        // dd($request->all());

        try {
            $input['id'] = Str::uuid()->toString();
            $input['user_id'] = auth()->user()->id_generate;
            $input['order_code'] = 'ORD-'.Carbon::now()->format('Ymd').'-'.rand(1111,9999);
            $input['tax'] = $request->ppn;
            $input['admin_fee'] = 0;
            $input['total'] = $request->subTotal;
            $input['status'] = 'UNPAID';
            // dd($input);
            $ppn = $this->ppn->select('ppn_nominal')->where('status','Aktif')->first();

            $items = [];
            $orderItems = [];

            // $this->orders->create($input);
            // $this->order_items->create($orderItems);

            foreach ($request->items as $key => $item) {
                // dd($item);
                $items[] = [
                    'name' => $item['product']['title'],
                    'price' => $item['price']+($ppn->ppn_nominal*$item['price']),
                    'quantity' => $item['quantity']
                    // 'name' => explode('|',$item['item'])[1],
                    // 'price' => $item['amount']+(0.11*$item['amount']),
                    // 'quantity' => $item['quantity'],
                ];

                $this->order_items->create([
                    'id' => Str::uuid()->toString(),
                    'order_id' => $input['id'],
                    'product_id' => $item['product']['id'],
                    'price' => $item['price'],
                    'quantity' => $item['quantity']
                ]);

                $product = $this->products->find($item['product']['id']);

                if ($product->quantity <= 0) {
                    return back()->with('error','Stock '.$item['product']['title'].' Sold Out');
                }

                $product->update([
                    'quantity' => $product->quantity-$item['quantity']
                ]);

                // $orderItems[] = [
                //     'id' => Str::uuid()->toString(),
                //     'order_id' => $input['id'],
                //     'product_id' => $item['product']['id'],
                //     'price' => $item['price'],
                //     'quantity' => $item['quantity']
                // ];
                // $items[] = [
                //     'id' => Str::uuid()->toString(),
                //     'price' => $item['amount']+(0.11*$item['amount']),
                //     'quantity' => $item['quantity'],
                //     'name' => explode('|',$item['item'])[1],
                // ];
            }

            // dd($orderItems,$items);

            $billing_code = 'INV-'.Carbon::now()->format('Ymd').'-'.rand(1111,9999);

            $paymentDetail = $this->midtrans->payment_checkout(
                $request->first_name,
                $request->last_name,
                $request->email,
                $request->phone,
                $billing_code,
                auth()->user()->id,
                $items,
                // $request->tax,
                0,
                $request->subTotal
            );

            // dd($paymentDetail);

            $billing['id'] = Str::uuid()->toString();
            $billing['order_id'] = $input['id'];
            $billing['billing_code'] = $billing_code;
            $billing['billing_references'] = $paymentDetail == null ? '-' : $paymentDetail;
            $billing['billing_buyer'] = json_encode([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'address' => $request->address,
                'email' => $request->email,
                'phone' => $request->phone,
                'company' => $request->company,
                'city' => $request->city,
                'country' => $request->country,
                'postal_code' => $request->postal_code,
            ]);
            $billing['total'] = $request->subTotal;
            $billing['status'] = 'UNPAID';

            $this->carts->find($id)->update([
                'tax' => $input['tax'],
                'total' => $input['total'],
                'status' => 'UNPAID'
            ]);

            $this->orders->create($input);
            // $this->order_items->create($orderItems);
            $this->payments->create($billing);

            DB::commit();
            return redirect()->route('transaction.detail',['id' => $billing['id']]);

        } catch (\Throwable $th) {
            // dd($th);
            DB::rollback();
            return back()->with('error',$th);
        }
    }
}
