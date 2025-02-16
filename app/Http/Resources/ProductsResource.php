<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductsResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'product_code' => $this->product_code,
            'category_id' => $this->category->name,
            'title' => $this->title,
            'picture' => asset('backend/images/products/'.$this->picture),
            // 'picture' => $this->picture,
            'description' => $this->description,
            // 'price' => $this->price,
            'price' => 'Rp. '.number_format($this->price,0,',','.'),
            'quantity' => $this->quantity,
            'is_product_digital' => $this->is_product_digital,
            'files' => $this->files,
            'status' => $this->status,
        ];
    }
}
