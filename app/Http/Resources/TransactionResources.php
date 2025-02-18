<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TransactionResources extends JsonResource
{
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'order_id' => $this->order_id,
            'billing_code' => $this->billing_code,
            'billing_references' => $this->billing_references,
            'billing_buyer' => $this->billing_buyer,
            'total' => 'Rp. '.number_format($this->total,0,',','.'),
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'status' => $this->status,
        ];
    }
}
