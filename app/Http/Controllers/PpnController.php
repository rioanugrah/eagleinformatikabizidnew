<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use App\Http\Resources\PpnResource;

use App\Models\Ppn;
class PpnController extends Controller
{
    function __construct(
        Ppn $ppn
    ){
        // $this->middleware('permission:Category List', ['only' => ['index']]);
        // $this->middleware('permission:Category Create', ['only' => ['create','store']]);
        // $this->middleware('permission:Category Edit', ['only' => ['edit','update']]);
        // $this->middleware('permission:Category Delete', ['only' => ['destroy']]);
        $this->ppn = $ppn;
    }

    public function index(Request $request)
    {
        $request->validate([
            'field' => Rule::in(['updated_at', 'created_at', 'ppn_name']),
            'direction' => Rule::in(['asc', 'desc']),
        ]);

        $limit = $request->input('limit', 10);

        $ppns = PpnResource::collection(
            $this->ppn->query()
                            ->when(
                                value: $request->search,
                                callback: fn ($query, $value) => $query->where('ppn_name', 'like', '%' . $value . '%')
                            )
                            ->when(
                                value: $request->field && $request->direction,
                                callback: fn ($query) => $query->orderBy($request->field, $request->direction),
                                default: fn ($query) => $query->latest()
                            )
                            ->paginate($limit)
                            ->withQueryString()
        );

        return inertia('ppn/index',[
            'ppns' => fn () => $ppns,
            'state' => $request->only('limit', 'page', 'search', 'field', 'direction'),
        ]);
    }

    public function create()
    {
        return inertia('ppn/create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'ppn_name' => 'required',
            'ppn_nominal' => 'required',
            'status' => 'required'
        ],[
            'ppn_name.required' => 'PPN Name is required',
            'ppn_nominal.required' => 'PPN Percentage is required',
            'status' => 'Status is required'
        ]);

        $input = $request->all();

        $input['id'] = Str::uuid()->toString();

        $this->ppn->create($input);

        return redirect()->route('ppns.index')->with('success', $input['ppn_name'].' PPN Berhasil Dibuat');
    }

    public function edit($id)
    {
        $data['ppn'] = $this->ppn->find($id);
        if (empty($data['ppn'])) {
            return back()->with('error','Data Tidak Ditemukan');
        }
        return inertia('ppn/edit',$data);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'ppn_name' => 'required',
            'ppn_nominal' => 'required',
            'status' => 'required'
        ],[
            'ppn_name.required' => 'PPN Name is required',
            'ppn_nominal.required' => 'PPN Percentage is required',
            'status' => 'Status is required'
        ]);

        $input = $request->all();

        $this->ppn->find($id)->update($input);

        return redirect()->route('ppns.index')->with('success', 'PPN Berhasil Diupdate');
    }

    public function destroy($id)
    {
        $ppn = $this->ppn->find($id);
        if (empty($ppn)) {
            return back()->with('error','Data Tidak Ditemukan');
        }
        $ppn->delete();
        return back()->with('success','Data Berhasil Dihapus');
    }
}
