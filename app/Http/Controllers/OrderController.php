<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Payment\TripayController;

use App\Http\Resources\InvoicesResource;

use App\Models\Products;
use App\Models\Invoices;
use App\Models\InvoicesDetail;
use App\Models\Billings;
use \Carbon\Carbon;
use Validator;
use DB;

class OrderController extends Controller
{
    function __construct(
        TripayController $tripay,
        Products $product,
        Invoices $invoices,
        InvoicesDetail $invoices_detail,
        Billings $billings
    ){
        $this->middleware('permission:Order List', ['only' => ['index']]);
        $this->middleware('permission:Order Create', ['only' => ['create']]);
        $this->middleware('permission:Order Edit', ['only' => ['edit','update']]);
        $this->middleware('permission:Order Delete', ['only' => ['destroy']]);

        $this->tripay = $tripay;
        $this->product = $product;
        $this->invoices = $invoices;
        $this->invoices_detail = $invoices_detail;
        $this->billings = $billings;
    }

    public function index(Request $request)
    {
        $request->validate([
            'field' => Rule::in(['updated_at', 'created_at', 'email_verified_at', 'no_invoices']),
            'direction' => Rule::in(['asc', 'desc']),
        ]);

        $limit = $request->input('limit', 10);

        $invoices = InvoicesResource::collection(
            $this->invoices->query()
                            ->when(
                                value: $request->search,
                                callback: fn ($query, $value) => $query->where('name', 'like', '%' . $value . '%')
                                    ->orWhere('guard_name', 'like', '%' . $value . '%')
                            )
                            ->when(
                                value: $request->field && $request->direction,
                                callback: fn ($query) => $query->orderBy($request->field, $request->direction),
                                default: fn ($query) => $query->latest()
                            )
                            ->paginate($limit)
                            ->withQueryString()
        );
        return inertia('order/index', [
            'invoices' => fn () => $invoices,
            'state' => $request->only('limit', 'page', 'search', 'field', 'direction'),
        ]);
    }

    public function store(Request $request, $id)
    {
        // dd('ok');
        DB::beginTransaction();
        try {
            $invoices = $this->invoices->where('status','OPEN')
                                        ->where('user_id',auth()->user()->id)
                                        ->first();
            if (empty($invoices)) {

                $input['id'] = Str::uuid()->toString();
                $input['no_invoice'] = Carbon::now()->format('Ymd').'-'.rand(1111,9999);
                $input['user_id'] = auth()->user()->id;
                $input['status'] = 'OPEN';
                $input['sub_amount'] = 0;

                $this->invoices->create($input);

                $product = $this->product->find($id);
                $this->invoices_detail->create([
                    'id' => Str::uuid()->toString(),
                    'invoice_id' => $input['id'],
                    'item' => $product->id.'|'.$product->product_name,
                    'quantity' => 1,
                    'amount' => $product->product_price+$product->product_profit_price,
                ]);

                $product->product_stock = $product->product_stock-1;
                $product->update();
            }else{
                $product = $this->product->find($id);
                $this->invoices_detail->create([
                    'id' => Str::uuid()->toString(),
                    'invoice_id' => $invoices->id,
                    'item' => $product->id.'|'.$product->product_name,
                    'quantity' => 1,
                    'amount' => $product->product_price+$product->product_profit_price,
                ]);
                $product->product_stock = $product->product_stock-1;
                $product->update();
            }

            DB::commit();

            // return back()->with('success','Item is Add');
        } catch (\Exception $e) {
            DB::rollback();
            return redirect()->back()
            ->with('warning','Something Went Wrong!');
        }
    }

    public function detail($id)
    {
        $data['invoice'] = $this->invoices->with('invoice_details')->where('status','OPEN')->find($id);

        if (empty($data['invoice'])) {
            return back()->with('errors','Data Tidak Ditemukan');
        }

        $tripay = $this->tripay;
        $data['channels'] = json_decode($tripay->getPayment())->data;
        // dd($data);
        return inertia('order/checkout',$data);
    }

    public function invoice_detail_remove(Request $request, $id, $invoice_id)
    {
        // dd($id,$invoice_id);
        // dd($request->all());
        $invoices_detail = $this->invoices_detail->where('id',$invoice_id)->where('invoice_id',$id)->first();
        // dd($invoices_detail);
        if (empty($invoices_detail)) {
            return back()->with('errors','Data Tidak Ditemukan');
        }

        $product = $this->product->find(explode('|',$invoices_detail->item)[0]);
        $product->product_stock =  $product->product_stock+$request->product_stock;
        $product->update();

        $invoices_detail->delete();
        return redirect()->route('order.checkout',[$id]);
        // dd($invoices_detail);
    }

    public function checkout(Request $request, $id)
    {
        // dd($request->all());
        $request->validate([
            'firstName' => 'required',
            'lastName' => 'required',
            'email' => 'required',
            'company' => 'required',
            'address' => 'required',
            'city' => 'required',
            'country' => 'required',
            'state' => 'required',
            'postal_code' => 'required',
            'phone' => 'required',
            'method' => 'required',
        ],[
            'firstName.required' => 'First Name is required',
            'lastName.required' => 'Last Name is required',
            'email.required' => 'Email is required',
            'company.required' => 'Company is required',
            'address.required' => 'Address is required',
            'city' => 'City is required',
            'country' => 'Country is required',
            'state' => 'State is required',
            'postal_code' => 'Postal Code is required',
            'phone' => 'Phone is required',
            'method' => 'Payment Method is required',
        ]);

        $input['id'] = Str::uuid()->toString();
        $input['user_id'] = auth()->user()->id;
        $input['invoice_id'] = $id;
        $input['billing_code'] = 'TRX-'.Carbon::now()->format('Ymd').'-'.rand(1111,9999);
        $input['billing_buyer'] = json_encode([
            'first_name' => $request->firstName,
            'last_name' => $request->lastName,
            'address' => $request->address,
            'email' => $request->email,
            'phone' => $request->phone,
        ]);
        $items = [];
        foreach ($request->items as $key => $item) {
            $items[] = [
                'name' => explode('|',$item['item'])[1],
                'price' => $item['amount']+(0.11*$item['amount']),
                'quantity' => $item['quantity'],
            ];
        }
        $input['tax'] = $request->tax;
        $input['admin_fee'] = $request->admin_fee;
        $input['sub_total'] = $request->sub_total;
        // dd($items);
        $paymentDetail = $this->tripay->requestTransaction(
            $items,
            $request->method,
            $request->sub_total,
            $request->firstName,
            $request->lastName,
            $request->email,
            $request->phone,
            $input['billing_code'],
            null
            //route invoices
        );

        $input['billing_references'] = json_decode($paymentDetail)->data->reference;
        $input['billing_link_payment'] = json_decode($paymentDetail)->data->checkout_url;
        $input['status'] = 'UNPAID';
        // $input['billing_references'] = json_decode($paymentDetail);
        // dd($input,$items);
        $this->billings->create($input);
        $this->invoices->find($id)->update([
            'sub_amount' => $input['sub_total'],
            'status' => 'UNPAID'
        ]);
        // return redirect(json_decode($paymentDetail)->data->checkout_url);
        // return redirect()->route('order.index');
        // return json_decode($paymentDetail)->data->checkout_url;
        return inertia()->location(json_decode($paymentDetail)->data->checkout_url);
    }
}
