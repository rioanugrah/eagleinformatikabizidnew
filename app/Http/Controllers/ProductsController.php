<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use App\Http\Resources\ProductsResource;

use App\Models\Categories;
use App\Models\Products;
use \Carbon\Carbon;
use Validator;

class ProductsController extends Controller
{
    function __construct(
        Categories $categories,
        Products $products
    ){
        $this->middleware('permission:Products List', ['only' => ['index']]);
        $this->middleware('permission:Products Create', ['only' => ['create','store']]);
        $this->middleware('permission:Products Edit', ['only' => ['edit','update']]);
        $this->middleware('permission:Products Delete', ['only' => ['destroy']]);
        $this->categories = $categories;
        $this->products = $products;
    }

    public function index(Request $request)
    {
        $request->validate([
            'field' => Rule::in(['updated_at', 'created_at', 'product_name']),
            'direction' => Rule::in(['asc', 'desc']),
        ]);

        $limit = $request->input('limit', 10);

        $products = ProductsResource::collection(
            $this->products->query()
                            ->when(
                                value: $request->search,
                                callback: fn ($query, $value) => $query->where('product_name', 'like', '%' . $value . '%')
                            )
                            ->when(
                                value: $request->field && $request->direction,
                                callback: fn ($query) => $query->orderBy($request->field, $request->direction),
                                default: fn ($query) => $query->latest()
                            )
                            ->paginate($limit)
                            ->withQueryString()
    );

        return inertia('products/index',[
            'products' => fn () => $products,
            'state' => $request->only('limit', 'page', 'search', 'field', 'direction'),
        ]);
    }

    public function create()
    {
        $data['categories'] = $this->categories->where('status','Aktif')->get();
        return inertia('products/create',$data);
    }

    public function store(Request $request)
    {
        $request->validate([
            'product_name' => 'required',
            'product_description' => 'required',
            'product_price' => 'required',
            'product_profit_price' => 'required',
            'product_stock' => 'required',
            'status' => 'required'
        ],[
            'product_name.required' => 'Name is required',
            'product_description.required' => 'Description is required',
            'product_price.required' => 'Price is required',
            'product_profit_price.required' => 'Profit Price is required',
            'product_stock.required' => 'Stock is required',
            'status' => 'Status is required'
        ]);

        $input = $request->all();

        $input['id'] = Str::uuid()->toString();
        $input['product_code'] = 'PRD-'.Carbon::today()->format('Y-m-d').'-'.rand(1111,9999);

        $this->products->create($input);

        return redirect()->route('products.index')->with(['success' => 'Products Berhasil Dibuat']);
    }

    public function edit($id)
    {
        $data['product'] = $this->products->find($id);
        if(empty($data['product'])){
            return back()->with('error','Data Tidak Ditemukan');
        }
        $data['categories'] = $this->categories->where('status','Aktif')->get();
        return inertia('products/edit',$data);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'product_name' => 'required',
            'product_description' => 'required',
            'product_price' => 'required',
            'product_profit_price' => 'required',
            'product_stock' => 'required',
            'status' => 'required'
        ],[
            'product_name.required' => 'Name is required',
            'product_description.required' => 'Description is required',
            'product_price.required' => 'Price is required',
            'product_profit_price.required' => 'Profit Price is required',
            'product_stock.required' => 'Stock is required',
            'status' => 'Status is required'
        ]);

        $input = $request->all();

        $this->products->find($id)->update($input);

        return redirect()->route('products.index')->with(['success' => 'Products Berhasil Diupdate']);
    }

    public function destroy($id)
    {
        $product = $this->products->find($id);
        if (empty($product)) {
            return back()->with(['error' => 'Data Tidak Ditemukan']);
        }
        $product->delete();
        return back()->with(['error' => 'Data Berhasil Dihapus']);
    }
}
