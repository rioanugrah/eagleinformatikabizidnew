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
use File;

class ProductsController extends Controller
{
    function __construct(
        Categories $categories,
        Products $products
    ){
        // $this->middleware('permission:Products List', ['only' => ['index']]);
        // $this->middleware('permission:Products Create', ['only' => ['create','store']]);
        // $this->middleware('permission:Products Edit', ['only' => ['edit','update']]);
        // $this->middleware('permission:Products Delete', ['only' => ['destroy']]);
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

        if (auth()->user()->hasRole('Administrator') == true) {
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
        }else{
            $products = ProductsResource::collection(
                $this->products->query()
                                ->orderBy('created_at','desc')
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

            return inertia('products/users/index',[
                'products' => fn () => $products,
                'state' => $request->only('limit', 'page', 'search', 'field', 'direction'),
            ]);

        }

    }

    public function create()
    {
        $data['categories'] = $this->categories->where('status','Aktif')->get();
        return inertia('products/create',$data);
    }

    public function store(Request $request)
    {
        // dd($request->server('CONTENT_LENGTH'));

        // dd($request->all());

        $request->validate([
            'category_id' => 'required',
            'title' => 'required',
            // 'picture' => 'required',
            'description' => 'required',
            'price' => 'required',
            'quantity' => 'required',
            'tag' => 'required',
            'is_product_digital' => 'required',
            'status' => 'required'
        ],[
            'category_id.required' => 'Category is required',
            'title.required' => 'Product Title is required',
            // 'picture.required' => 'Upload Images is required',
            'description.required' => 'Description is required',
            'price.required' => 'Price is required',
            'quantity.required' => 'Stock is required',
            'tag.required' => 'Tag is required',
            'is_product_digital.required' => 'Is Product Digital is required',
            'status' => 'Status is required'
        ]);

        $input = $request->all();

        // dd($input);

        $input['id'] = Str::uuid()->toString();
        $input['slug'] = Str::slug($request->title);

        if ($request->is_product_digital == 'Y') {
            $product_code = 'DG';
        }else{
            $product_code = 'PRD';
        }

        $input['product_code'] = $product_code.'-'.Carbon::today()->format('Y-m-d').'-'.rand(1111,9999);

        // dd($input['product_code']);
        if ($request->file('picture')) {
            $path = public_path('backend/images/products');

            if(!File::isDirectory($path)){
                File::makeDirectory($path, 0777, true, true);
            }

            // dd($request->picture->getClientOriginalExtension());
            $fileName = time().'.'.$request->file('picture')->getClientOriginalExtension();
            $request->file('picture')->move($path, $fileName);
            $input['picture'] = $fileName;

        }

        if ($request->file('files')) {
            $pathFiles = public_path('backend/berkas/products');

            if(!File::isDirectory($pathFiles)){
                File::makeDirectory($pathFiles, 0777, true, true);
            }

            $fileNameFiles = time().'.'.$request->file('files')->getClientOriginalExtension();
            $request->file('files')->move($pathFiles, $fileNameFiles);
            $input['files'] = $fileNameFiles;
        }

        $this->products->create($input);

        return redirect()->route('products.index')->with(['success' => 'Products Berhasil Dibuat']);
    }

    public function detail($id)
    {
        // $data['product'] = $this->products->find($id);
        if (auth()->user()->hasRole('Administrator') == true) {
            $data['product'] = new ProductsResource(
                $this->products->find($id)
            );

            if(empty($data['product'])){
                return back()->with('error','Produk Tidak Ditemukan');
            }

            return inertia('products/detail',$data);
        }else{
            $data['product'] = new ProductsResource(
                $this->products->find($id)
            );

            if(empty($data['product'])){
                return back()->with('error','Produk Tidak Ditemukan');
            }

            return inertia('products/users/detail',$data);
        }

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
            'category_id' => 'required',
            'title' => 'required',
            // 'picture' => 'required',
            'description' => 'required',
            'price' => 'required',
            'quantity' => 'required',
            'tag' => 'required',
            'is_product_digital' => 'required',
            'status' => 'required'
        ],[
            'category_id.required' => 'Category is required',
            'title.required' => 'Product Title is required',
            // 'picture.required' => 'Upload Images is required',
            'description.required' => 'Description is required',
            'price.required' => 'Price is required',
            'quantity.required' => 'Stock is required',
            'tag.required' => 'Tag is required',
            'is_product_digital.required' => 'Is Product Digital is required',
            'status' => 'Status is required'
        ]);

        $input = $request->all();

        $product = $this->products->find($id);

        if ($request->picture != 'undefined') {
            if ($request->file('picture')) {
                $fileImages = public_path('backend/images/products/'.$product->picture);
                if(File::exists($fileImages)) {
                    File::delete($fileImages);
                }

                $fileName = time().'.'.$request->file('picture')->getClientOriginalExtension();
                $request->file('picture')->move(public_path('backend/images/products'), $fileName);
                $input['picture'] = $fileName;

            }
        }else{
            $input['picture'] = $product->picture;
        }

        if ($request->files != 'undefined') {
            if ($request->file('files')) {
                $fileImagesFiles = public_path('backend/berkas/products/'.$product->files);
                if(File::exists($fileImagesFiles)) {
                    File::delete($fileImagesFiles);
                }

                $fileNameFiles = time().'.'.$request->file('files')->getClientOriginalExtension();
                $request->file('files')->move(public_path('backend/berkas/products'), $fileNameFiles);
                $input['files'] = $fileNameFiles;
            }
        }else{
            $input['files'] = $product->files;
        }

        $product->update($input);
        // $this->products->find($id)->update($input);

        return redirect()->route('products.index')->with(['success' => 'Products '.$input['title'].' Berhasil Diupdate']);
    }

    public function destroy($id)
    {
        $product = $this->products->find($id);
        if (empty($product)) {
            return back()->with(['error' => 'Data Tidak Ditemukan']);
        }
        $product->delete();
        return back()->with(['error' => $product->product_name.' Berhasil Dihapus']);
    }
}
