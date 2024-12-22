<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use App\Http\Resources\WebsiteResource;

use App\Models\Websites;
use \Carbon\Carbon;
use Validator;

class WebsitesController extends Controller
{
    function __construct(
        Websites $websites
    ){
        $this->websites = $websites;
    }

    public function index(Request $request)
    {
        $request->validate([
            'field' => Rule::in(['updated_at', 'created_at', 'website_name']),
            'direction' => Rule::in(['asc', 'desc']),
        ]);

        $limit = $request->input('limit', 10);

        if (auth()->user()->hasRole('Administrator') == true) {
            $websites = WebsiteResource::collection(
                    $this->websites->query()
                                    ->with('user')
                                    ->when(
                                        value: $request->search,
                                        callback: fn ($query, $value) => $query->where('website_name', 'like', '%' . $value . '%')
                                    )
                                    ->when(
                                        value: $request->field && $request->direction,
                                        callback: fn ($query) => $query->orderBy($request->field, $request->direction),
                                        default: fn ($query) => $query->latest()
                                    )
                                    ->fastPaginate($limit)
                                    ->withQueryString()
            );
        }else{
            $websites = WebsiteResource::collection(
                    $this->websites->query()
                                    ->with('user')
                                    ->when(
                                        value: $request->search,
                                        callback: fn ($query, $value) => $query->where('website_name', 'like', '%' . $value . '%')
                                                                                ->where('user_id',auth()->user()->id)
                                    )
                                    ->when(
                                        value: $request->field && $request->direction,
                                        callback: fn ($query) => $query->orderBy($request->field, $request->direction),
                                        default: fn ($query) => $query->latest()
                                    )
                                    ->fastPaginate($limit)
                                    ->withQueryString()
            );
        }

        return inertia('websites/index',[
            'websites' => fn () => $websites,
            'state' => $request->only('limit', 'page', 'search', 'field', 'direction'),
        ]);
    }

    public function create()
    {
        return inertia('websites/create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'website_name' => 'required',
            'website_link' => 'required'
        ],[
            'website_name.required' => 'Website Name is required',
            'website_link' => 'Website Link is required'
        ]);

        $input = $request->all();
        $input['id'] = Str::uuid()->toString();
        $input['user_id'] = auth()->user()->id;
        $input['website_code'] = 'W-'.Carbon::today()->format('Ymd').rand(1000,9999);

        if (auth()->user()->hasRole('Administrator') == true) {
            $input['status'] = $request->status;
        }else{
            $input['status'] = 'Waiting Payment';
        }

        $this->websites->firstOrCreate([
            'website_name' => $request->website_name
        ],$input);

        return redirect()->route('websites.index')->with('success', 'Website Berhasil Dibuat');
    }
}
