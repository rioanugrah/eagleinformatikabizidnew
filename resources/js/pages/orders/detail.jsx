import AppLayout from "@/Layouts/appLayout";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Detail(props) {
    const [loading, setLoading] = useState(false);

    const order = props.order;
    const billing_buyer = JSON.parse(props.order.payment.billing_buyer);

    const format_currency = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(number);
    };

    return(
        <>
        <Head
            title={'Order Code : '+order.order_code}
        />
            <div className='px-4 sm:px-0'>
                <h3 className='text-base/7 font-semibold text-gray-900'>Order Code : #{order.order_code} {order.payment.status == 'PAID' ? <span class='me-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300'>{order.payment.status}</span> : order.payment.status == 'UNPAID' ? <span class='bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300'>{order.payment.status}</span> : <span class='bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300'>{order.payment.status}</span>}</h3>
                <p className='mt-1 max-w-2xl text-sm/6 text-gray-500'>Personal Order.</p>
            </div>
            <div className='mt-6 border-t border-gray-100'>
                <dl className='divide-y divide-gray-100'>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Order Code</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{order.order_code}</dd>
                    </div>
                </dl>
                <dl className='divide-y divide-gray-100'>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Billing Name</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{billing_buyer.first_name+' '+billing_buyer.last_name}</dd>
                    </div>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Billing Address</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{billing_buyer.address}</dd>
                    </div>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Billing Email</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{billing_buyer.email}</dd>
                    </div>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Billing Phone</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{billing_buyer.phone}</dd>
                    </div>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Tax</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{order.tax}</dd>
                    </div>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Total</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{order.total}</dd>
                    </div>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Created At</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{order.created_at}</dd>
                    </div>
                    {/* <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Status</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{order.payment.status == 'PAID' ? <span class='me-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300'>{order.payment.status}</span> : order.payment.status == 'UNPAID' ? <span class='bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300'>{order.payment.status}</span> : <span class='bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300'>{order.payment.status}</span>}</dd>
                    </div> */}
                </dl>
            </div>
            <Link href={route('order.index')} className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>Back</Link>
        </>
    )
}

Detail.layout = (page) => <AppLayout title={'Order Detail'} children={page} />;
