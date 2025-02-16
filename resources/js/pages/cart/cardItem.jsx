import { CheckCircleIcon, ChevronDownIcon, TrashIcon } from '@heroicons/react/20/solid';
import { Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function CardItem({ id, product_id, product, item, quantity, price, updateQty }) {
    const {cart} = usePage().props;
    const [loading, setLoading] = useState(false);

    const addOne = () => {
        updateQty(id, quantity + 1);
    };
    const removeOne = () => {
        updateQty(id, quantity - 1);
    };

    const format_currency = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(number);
    };

    // console.log(item.split('|')[0]);

    console.log(product.price);

    const handlerSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // router.post(
        //     route('order.invoice_detail_remove',[invoice.id,id]),
        //     {
        //         product_stock: quantity,
        //     },
        //     {
        //         onFinish: () => {
        //             setLoading(false);
        //             // alert('ok');
        //         },
        //     },
        // );
    };

    return (
        <li className='flex px-4 py-6 sm:px-6'>
            <div className='ml-6 flex flex-1 flex-col'>
                <div className='flex'>
                    <div className='min-w-0 flex-1'>
                        <h4 className='text-sm'>
                            <a className='font-bold text-gray-700 hover:text-gray-800'>{product.title}</a>
                        </h4>
                    </div>
                    <div className='ml-4 flow-root flex-shrink-0'>
                        <Link as='button' onClick={handlerSubmit} className='-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500'>
                            <span className='sr-only'>Remove</span>
                            <TrashIcon aria-hidden='true' className='h-5 w-5' />
                        </Link>
                    </div>
                </div>
                <div className='flex flex-1 items-end justify-between pt-2'>
                    <p className='mt-1 text-sm font-medium text-gray-900'>{format_currency(price)}</p>

                    <div className='ml-4'>
                        <label htmlFor='quantity' className='sr-only'>
                            Quantity
                        </label>
                        <div>
                            <button type='button' onClick={removeOne} disabled={quantity <= 1}>
                                -
                            </button>
                            {quantity}
                            <button type='button' onClick={addOne}>+</button>
                        </div>
                        {/* <select id='quantity' onChange={(e) => selectQuantity(e.target.value)} className='rounded-md border border-gray-300 text-left text-base font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm'>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                        </select> */}
                    </div>
                </div>
            </div>
        </li>
    );
}
