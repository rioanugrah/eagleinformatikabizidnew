<?php

namespace App\Http\Controllers\Payment;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\User;
use App\Models\Payments;
// use App\Models\Order;
// use App\Models\OrderList;
// use App\Models\Transactions;
// use App\Models\TransactionList;

// use App\Models\VerifikasiTiket;
// use App\Models\VerifikasiTiketList;

// use App\Events\NotificationEvent;
// use App\Notifications\NotificationNotif;

// use \Carbon\Carbon;
// use Notification;
use \Carbon\Carbon;
use DB;
// use Midtrans\Config;
// use Midtrans\Snap;
// use App\Services\Midtrans\CreateSnapTokenService;
// use Config;

class PaymentMidtransController extends Controller
{
    public function __construct(
        Payments $transactions
    ){
        // $this->midtrans_is_production = env('MIDTRANS_IS_PRODUCTION');
        if (env('MIDTRANS_IS_PRODUCTION') == true) {
            $this->midtrans_client_key = env('MIDTRANS_CLIENT_KEY_PRODUCTION');
            $this->midtrans_server_key = env('MIDTRANS_SERVER_KEY_PRODUCTION');
            $this->url_payment = env('MIDTRANS_URL_PRODUCTION');
        }else{
            $this->midtrans_client_key = env('MIDTRANS_CLIENT_KEY_SANDBOX');
            $this->midtrans_server_key = env('MIDTRANS_SERVER_KEY_SANDBOX');
            $this->url_payment = env('MIDTRANS_URL_SANDBOX');
        }

        $this->transactions = $transactions;
    }

    public function test()
    {
        // Set your Merchant Server Key
        \Midtrans\Config::$serverKey = $this->midtrans_server_key;
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = env('MIDTRANS_IS_PRODUCTION');
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = true;
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = true;

        $params = array(
            'transaction_details' => array(
                'order_id' => rand(),
                'gross_amount' => 10000,
            ),
            'customer_details' => array(
                'first_name' => 'budi',
                'last_name' => 'pratama',
                'email' => 'budi.pra@example.com',
                'phone' => '08111222333',
            ),
        );

        $snapToken = \Midtrans\Snap::getSnapToken($params);
        return $snapToken;
    }

    public function test_payment(Request $request)
    {
        // Set your Merchant Server Key
        // if (env('MIDTRANS_IS_PRODUCTION') == true) {
        //     \Midtrans\Config::$serverKey = env('MIDTRANS_SERVER_KEY');
        // }else{
        // }
        \Midtrans\Config::$serverKey = $this->midtrans_server_key;
        \Midtrans\Config::$isProduction = env('MIDTRANS_IS_PRODUCTION');
        \Midtrans\Config::$isSanitized = true;
        \Midtrans\Config::$is3ds = true;
        $params = [
            'transaction_details' => [
                'order_id' => 'TRX-'.rand(),
                'gross_amount' => "10000",
                // 'gross_amount' => strval($request->orderTotal),
            ],
            'customer_details' => array(
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'phone' => $request->phone,
            ),
        ];
        $data['midtrans_client_key'] = $this->midtrans_client_key;
        $data['link_url_payment'] = $this->url_payment;
        // $data['kode_order'] = 123;
        // $data['first_name'] = 'Radit';
        // $data['last_name'] ="-";
        // $data['email'] = "-";
        // $data['title'] = "-";
        // $data['qty'] = 1;
        // $data['price'] = 10000;
        $data['snapToken'] = \Midtrans\Snap::getSnapToken($params);
        // $snapToken = Snap::getSnapToken($params);
        return view('frontend.frontend5.payment.index',$data);
        // return view('orders.show', compact('order', 'snapToken'));
    }

    public function payment_checkout(
        $firsname,
        $lastname,
        // $address,
        $email,
        $phone,
        $orderId,
        $user_id,
        $items,
        // $tax,
        $adminfee,
        $subtotal
    )
    {
        \Midtrans\Config::$serverKey = $this->midtrans_server_key;
        \Midtrans\Config::$isProduction = env('MIDTRANS_IS_PRODUCTION');
        \Midtrans\Config::$isSanitized = true;
        \Midtrans\Config::$is3ds = true;

        // $urutan = Order::max('kode_order');
        // DB::beginTransaction();

        try {
            // $input['id'] = Str::uuid()->toString();
            // $kode_jenis_transaksi = 'TRX';
            // $kode_random_transaksi = Carbon::now()->format('Ymd').rand(100,999);

            // $input['user_id'] = $user_id;
            // $input['billing_code'] = $kode_jenis_transaksi.'-'.$kode_random_transaksi;
            // $input['billing_references'] = '-';
            // $input['billing_link_payment'] = '-';
            // $input['billing_buyer'] = json_encode([
            //     'first_name' => $firstName,
            //     'last_name' => $lastName,
            //     'address' => $address,
            //     'email' => $email,
            //     'phone' => $phone,
            // ]);
            // $input['tax'] = $tax;
            // $input['admin_fee'] = $adminfee;
            // $input['sub_total'] = $subtotal;
            // $input['status'] = 'UNPAID';

            $params['transaction_details'] = [
                'order_id' => $orderId,
                'gross_amount' => $subtotal,
            ];

            // $params['credit_card'] = [
            //     'secure' => true
            // ];

            // $params['item_details'] = $items;

            $params['customer_details'] = [
                'first_name' => $firsname,
                'last_name' => $lastname,
                'email' => $email,
                'phone' => $phone,
            ];

            // dd($params);

            // DB::commit();
            // $snapToken = \Midtrans\Snap::getSnapToken($params);
            // dd($snapToken);
            return \Midtrans\Snap::getSnapToken($params);

            // return \Midtrans\Snap::getSnapToken($params);

            // $input['transaction_code'] = $kode_jenis_transaksi.'-'.$kode_random_transaksi;
            // $input['transaction_unit'] = $request->title;

            // if (!empty($request->nama_anggota)) {
            //     $verifikasi_tiket = VerifikasiTiket::create([
            //         'id' => Str::uuid()->toString(),
            //         'transaction_id' => $input['id'],
            //         'kode_tiket' => 'E-TIKET-'.$kode_random_transaksi,
            //         'tanggal_booking' => $request->tanggal_berangkat,
            //         'nama_tiket' => $request->title,
            //         'nama_order' => $request->first_name.' '.$request->last_name,
            //         'address' => $request->alamat,
            //         'email' => $request->email,
            //         'phone' => $request->phone,
            //         'qty' => $request->qty,
            //         'price' => $request->orderTotal,
            //         'status' => 'Unpaid'
            //     ]);

            //     foreach ($request->nama_anggota as $key => $value) {
            //         $data['item_details'][] = [
            //             'id' => $key+1,
            //             'name' => $value,
            //             'qty' => 1
            //         ];

            //         VerifikasiTiketList::create([
            //             'id' => Str::uuid()->toString(),
            //             'verifikasi_tiket_id' => $verifikasi_tiket->id,
            //             'nama_order' => $value,
            //             'qty' => 1
            //         ]);
            //     }

            //     $input['transaction_order'] = json_encode([
            //         'first_name' => $request->first_name,
            //         'last_name' => $request->last_name,
            //         'address' => $request->alamat,
            //         'email' => $request->email,
            //         'phone' => $request->phone,
            //         'item_details' => $data['item_details']
            //     ]);
            // }else{
            //     $input['transaction_order'] = json_encode([
            //         'first_name' => $request->first_name,
            //         'last_name' => $request->last_name,
            //         'address' => $request->alamat,
            //         'email' => $request->email,
            //         'phone' => $request->phone,
            //     ]);

            //     $verifikasi_tiket = VerifikasiTiket::create([
            //         'id' => Str::uuid()->toString(),
            //         'transaction_id' => $input['id'],
            //         'kode_tiket' => 'E-TIKET-'.$kode_random_transaksi,
            //         'tanggal_booking' => $request->tanggal_berangkat,
            //         'nama_tiket' => $request->title,
            //         'nama_order' => $request->first_name.' '.$request->last_name,
            //         'address' => $request->alamat,
            //         'email' => $request->email,
            //         'phone' => $request->phone,
            //         'qty' => $request->qty,
            //         'price' => $request->orderTotal,
            //         'status' => 'Unpaid'
            //     ]);
            // }

            // if($request->qty == 0 and $request->qty == null){
            //     $input['transaction_qty'] = 1;
            // }else{
            //     $input['transaction_qty'] = $request->qty;
            // }

            // $input['transaction_price'] = $request->orderTotal;
            // if (auth()->user()) {
            //     $input['user'] = auth()->user()->id;
            // }else{
            //     $input['user'] = null;
            // }
            // $input['status'] = 'Unpaid';

            // $transactions = Transactions::create($input);
            // DB::commit();

            // if($transactions){
            //     $params['transaction_details'] = [
            //         'order_id' => $input['transaction_code'],
            //         'gross_amount' => $request->orderTotal,
            //     ];
            //     $params['customer_details'] = [
            //         'first_name' => $request->first_name,
            //         'last_name' => $request->last_name,
            //         'email' => $request->email,
            //         'phone' => $request->phone,
            //     ];
            //     // $params['item_details'] = [
            //     //     [
            //     //         'id' => '1',
            //     //         'price' => $request->orderTotal,
            //     //         'quantity' => $input['qty'],
            //     //         'name' => $request->title
            //     //     ]
            //     // ];
            //     $user = User::where('role',1)->get();
            //     $notif = [
            //         'id' => $input['id'],
            //         'url' => route('b.invoice.detail',$input['transaction_code']),
            //         'title' => $input['transaction_unit'],
            //         'message' => 'Pesanan Baru - Sedang Melakukan Pembayaran',
            //         'color_icon' => 'warning',
            //         'icon' => 'uil-clipboard-alt',
            //         'publish' => $transactions->created_at,
            //     ];
            //     Notification::send($user,new NotificationNotif($notif));
            //     // foreach ($users as $user) {
            //     // }

            //     $data['kode_order'] = $input['transaction_code'];
            //     $data['first_name'] = $request->first_name;
            //     $data['last_name'] = $request->last_name;
            //     $data['email'] = $request->email;
            //     $data['title'] = $request->title;
            //     $data['qty'] = $input['transaction_qty'];
            //     $data['price'] = $input['transaction_price'];

            //     $data['link_url_payment'] = $this->url_payment;
            //     $data['midtrans_client_key'] = $this->midtrans_client_key;
            //     $data['snapToken'] = \Midtrans\Snap::getSnapToken($params);
            //     return view('frontend.frontend5.payment.index',$data);
            // }

        } catch (\Throwable $th) {
            // DB::rollback();
            // return back();
        }

        // return $data['snapToken'];
        // return view('orders.show', compact('order', 'snapToken'));
    }

    public function payment_callback(Request $request)
    {
        $serverKey = $this->midtrans_server_key;

        $hashed = hash('sha512',
            $request->order_id.
            $request->status_code.
            $request->gross_amount.
            $serverKey
        );

        // if($hashed != $request->signature_key){
        //     return response()->json(['message' => 'Invalid signature key'], 403);
        // }

        // return response()->json(['message' => 'Webhook processed successfully']);

        if ($hashed == $request->signature_key) {
            // $transactions = $this->transactions->where('billing_code',$request->order_id)->first();
            // $transactions->update([
            //     'status' => 'PAID'
            // ]);
            // $billing->invoice->update([
            //     'status' => 'PAID'
            // ]);
        }else{
            // $transactions = $this->transactions->where('billing_code',$request->order_id)->first();
            // $transactions->update([
            //     'status' => 'NOTPAID'
            // ]);
            // $billing->invoice->update([
            //     'status' => 'NOTPAID'
            // ]);
        }

        // return response()->json(['success' => 'Callback received successfully']);

    }
}
