<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use App\Http\Resources\CategoriesResource;

use App\Models\Categories;
use \Carbon\Carbon;
use Validator;

class CategoriesController extends Controller
{
    function __construct(
        Categories $categories
    ){
        $this->categories = $categories;
    }

    public function index(Request $request)
    {
        $request->validate([
            'field' => Rule::in(['updated_at', 'created_at', 'name']),
            'direction' => Rule::in(['asc', 'desc']),
        ]);

        $limit = $request->input('limit', 10);

        $categories = CategoriesResource::collection(
            $this->categories->query()
                            ->when(
                                value: $request->search,
                                callback: fn ($query, $value) => $query->where('name', 'like', '%' . $value . '%')
                            )
                            ->when(
                                value: $request->field && $request->direction,
                                callback: fn ($query) => $query->orderBy($request->field, $request->direction),
                                default: fn ($query) => $query->latest()
                            )
                            ->paginate($limit)
                            ->withQueryString()
    );

        return inertia('categories/index',[
            'categories' => fn () => $categories,
            'state' => $request->only('limit', 'page', 'search', 'field', 'direction'),
        ]);
    }

    public function create()
    {
        return inertia('categories/create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'status' => 'required'
        ],[
            'name.required' => 'Name is required',
            'status' => 'Status is required'
        ]);

        $input = $request->all();

        $this->categories->create($input);

        return redirect()->route('categories.index')->with('success', 'Category Berhasil Dibuat');
    }

    public function edit($id)
    {
        $data['category'] = $this->categories->find($id);
        if (empty($data['category'])) {
            return back()->with('error','Data Tidak Ditemukan');
        }
        return inertia('categories/edit',$data);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'status' => 'required'
        ],[
            'name.required' => 'Name is required',
            'status' => 'Status is required'
        ]);

        $input = $request->all();

        $this->categories->find($id)->update($input);

        return redirect()->route('categories.index')->with('success', 'Category Berhasil Diupdate');
    }

    public function destroy($id)
    {
        $category = $this->categories->find($id);
        if (empty($category)) {
            return back()->with('error','Data Tidak Ditemukan');
        }
        $category->delete();
        return back()->with('success','Data Berhasil Dihapus');
    }
}
