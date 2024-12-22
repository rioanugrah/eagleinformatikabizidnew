<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Spatie\Permission\Models\Permission;
use App\Http\Resources\PermissionResource;
use Validator;

class PermissionController extends Controller
{
    function __construct(
        Permission $permission
    ){
        $this->permission = $permission;
    }

    public function index(Request $request)
    {
        // dd(auth()->user()->hasRole('Users'));
        $request->validate([
            'field' => Rule::in(['updated_at', 'created_at', 'name', 'guard_name']),
            'direction' => Rule::in(['asc', 'desc']),
        ]);

        $limit = $request->input('limit', 10);

        $permissions = PermissionResource::collection(
            Permission::query()
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
                ->fastPaginate($limit)
                ->withQueryString()
        );

        return inertia('permissions/index',[
            'permissions' => fn () => $permissions,
            'state' => $request->only('limit', 'page', 'search', 'field', 'direction'),
        ]);
    }

    public function create()
    {
        return inertia('permissions/create');
    }

    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'name' => 'required',
            'guard_name' => 'required'
        ],[
            'name.required' => 'Permission Name is required',
            'guard_name' => 'Permission Guard Name is required'
        ]);

        $input = $request->all();
        $this->permission->create($input);

        return redirect()->route('permissions.index')->with('success', 'Permission Berhasil Dibuat');
    }

    public function edit($id)
    {
        $data['permission'] = $this->permission->find($id);

        if(empty($data['permission'])){
            return response()->with('errors','Data Tidak Ditemukan');
        }

        return inertia('permissions/edit',$data);
    }

    public function update(Request $request, $id)
    {
        // dd($request->all());
        $request->validate([
            'name' => 'required',
            'guard_name' => 'required'
        ],[
            'name.required' => 'Permission Name is required',
            'guard_name' => 'Permission Guard Name is required'
        ]);

        $input = $request->all();
        $this->permission->find($id)->update($input);

        return redirect()->route('permissions.index')->with('success', 'Permission Berhasil Dibuat');
    }

    public function destroy($id)
    {
        $permission = $this->permission->find($id);

        if(empty($permission)){
            return response()->with('errors','Data Tidak Ditemukan');
        }

        $permission->delete();

        return back()->with('success','Data Berhasil Dihapus');
    }
}
