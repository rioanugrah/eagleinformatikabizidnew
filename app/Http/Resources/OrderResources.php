<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResources extends JsonResource
{
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'order_code' => $this->order_code,
            'tax' => 'Rp. '.number_format($this->tax,0,',','.'),
            'admin_fee' => $this->admin_fee,
            'total' => 'Rp. '.number_format($this->total,0,',','.'),
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'status' => $this->payment->status,
            'payment' => $this->payment,
            // 'status' => $this->status,
        ];
    }
}
