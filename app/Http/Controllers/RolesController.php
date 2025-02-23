<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

use App\Http\Resources\RolesResource;
use DB;

class RolesController extends Controller
{
    function __construct(
        Role $role,
        Permission $permission
    ){
        $this->middleware('permission:role-list', ['only' => ['index']]);
        $this->middleware('permission:role-create', ['only' => ['create','store']]);
        $this->middleware('permission:role-edit', ['only' => ['edit','update']]);
        $this->middleware('permission:role-delete', ['only' => ['destroy']]);
        $this->role = $role;
        $this->permission = $permission;
    }

    public function index(Request $request)
    {
        $request->validate([
            'field' => Rule::in(['updated_at', 'created_at', 'email_verified_at', 'name', 'username', 'posts_count']),
            'direction' => Rule::in(['asc', 'desc']),
        ]);

        $limit = $request->input('limit', 10);

        $roles = RolesResource::collection(
            Role::query()
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

        return inertia('roles/index',[
            'roles' => fn () => $roles,
            'state' => $request->only('limit', 'page', 'search', 'field', 'direction'),
        ]);
    }

    public function create()
    {
        DB::statement("SET SQL_MODE=''");
        // $role_permission = $this->permission->select('name','id')->groupBy('name')->get();
        // $data['custom_permission'] = [];
        // foreach($role_permission as $per){

        //     $key = substr($per->name, 0, strpos($per->name, "-"));

        //     if(str_starts_with($per->name, $key)){

        //         $data['custom_permission'][$key][] = $per;
        //     }

        // }
        $data['custom_permission'] = $this->permission->select('name','id')->groupBy('name')->get();

        // dd($data);

        return inertia('roles/create',$data);
    }

    public function store(Request $request)
    {
        // dd($request->permission);
        $this->validate($request, [
            'name' => 'required|unique:roles,name',
            'permission' => 'required',
        ]);

        $role = Role::create(['name' => $request->input('name')]);
        $role->syncPermissions($request->input('permission'));

        return redirect()->route('roles.index')->with('success','Data Berhasil Disimpan');
    }

    public function edit($id)
    {
        $data['role'] = $this->role->with('permissions')->find($id);
        // dd($data);

        if (empty($data['role'])) {
            return back();
        }

        DB::statement("SET SQL_MODE=''");
        $data['custom_permission'] = $this->permission->select('name','id')->orderBy('id','asc')->get();

        return inertia('roles/edit',$data);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required',
            'permission' => 'required',
        ]);

        $role = Role::find($id);
        $role->name = $request->input('name');
        $role->save();

        $role->syncPermissions($request->input('permission'));

        return redirect()->route('roles.index')
                        ->with('success','Role updated successfully');
    }

    // public function make_access($id)
    // {
    //     $data['role'] = $this->role->find($id);

    //     if(empty($data['role'])){
    //         return back();
    //     }

    //     $data['custom_permission'] = $this->permission->select('name','id')->get();

    //     return inertia('roles/make_access',$data);
    // }

    // public function store_make_access(Request $request, $id)
    // {
    //     // dd($request->all());
    //     $request->validate([
    //         'permission' => 'required'
    //     ]);

    //     $role = Role::findOrFail($id);
    //     $role->syncPermissions($request->permission);
    // }
}
