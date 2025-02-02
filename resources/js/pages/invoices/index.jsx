import AppLayout from '@/Layouts/appLayout';
import { PaperClipIcon } from '@heroicons/react/20/solid';
import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Index(props) {
    const billing = props.invoices.billing;
    const billing_buyer = JSON.parse(props.invoices.billing.billing_buyer);
    const [loading, setLoading] = useState(false);

    const format_currency = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(number);
    };

    useEffect(() => {
        if (import.meta.env.VITE_MIDTRANS_IS_PRODUCTION == 'true') {
            const snapSrcUrl = import.meta.env.VITE_MIDTRANS_URL_PRODUCTION;

            const myMidtransClientKey = import.meta.env.VITE_MIDTRANS_CLIENT_KEY_PRODUCTION; //change this according to your client-key

            const script = document.createElement('script');
            script.src = snapSrcUrl;
            script.setAttribute('data-client-key', myMidtransClientKey);
            script.async = true;

            // console.log(snapSrcUrl);

            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };

        } else {
            const snapSrcUrl = import.meta.env.VITE_MIDTRANS_URL_SANDBOX;

            const myMidtransClientKey = import.meta.env.VITE_MIDTRANS_CLIENT_KEY_SANDBOX; //change this according to your client-key

            const script = document.createElement('script');
            script.src = snapSrcUrl;
            script.setAttribute('data-client-key', myMidtransClientKey);
            script.async = true;

            // console.log(snapSrcUrl);

            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };

        }
    },[]);

    const onPressPay = async () => {
        setLoading(true);
        window.snap.pay(billing.billing_references, {
            onSuccess: (result) => {
                // console.log('success');
                alert('Payment Success');
                router.get(route('dashboard'));
                setLoading(false);
            },
            onPending: (result) => {
                // console.log('pending transaction', result);
                alert('Payment Pending');
                router.get(route('dashboard'));
                setLoading(false);
            },
            onError: (result) => {
                // console.log('error transaction', result);
                alert('Payment Error');
                router.get(route('dashboard'));
                setLoading(false);
            },
            onClose: () => {
                console.log('customer close the popup window without the finishing the payment');
                // alert('customer close the popup window without the finishing the payment');
                router.get(route('dashboard'));
                setLoading(false);
            },
        });
    }

    return (
        <>
            <div className='px-4 sm:px-0'>
                <h3 className='text-base/7 font-semibold text-gray-900'>Invoices #{props.invoices.no_invoice}</h3>
                <p className='mt-1 max-w-2xl text-sm/6 text-gray-500'>Personal Invoices.</p>
            </div>
            <div className='mt-6 border-t border-gray-100'>
                <dl className='divide-y divide-gray-100'>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Billing Number</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{billing.billing_code}</dd>
                    </div>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Billing References</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{billing.billing_references}</dd>
                    </div>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>First Name</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{billing_buyer.first_name}</dd>
                    </div>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Last Name</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{billing_buyer.last_name}</dd>
                    </div>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Address</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{billing_buyer.address}</dd>
                    </div>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Email address</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{billing_buyer.email}</dd>
                    </div>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Phone Number</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{billing_buyer.phone}</dd>
                    </div>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Tax</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{format_currency(billing.tax)}</dd>
                    </div>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Admin Fee</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{format_currency(billing.admin_fee)}</dd>
                    </div>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Total</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{format_currency(billing.sub_total)}</dd>
                    </div>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Status</dt>
                        {
                            billing.status == 'UNPAID' ?
                            <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'><span className='bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300'>{billing.status}</span></dd>
                            : billing.status == 'PAID' ?
                            <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'><span className='bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300'>{billing.status}</span></dd>
                            :
                            <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'><span className='bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300'>{billing.status}</span></dd>
                        }
                    </div>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Items</dt>
                        <dd className='mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                            <ul role='list' className='divide-y divide-gray-100 rounded-md border border-gray-200'>
                                {props.invoices.invoice_details.map((invoice_detail,index) => (
                                <li className='flex items-center justify-between py-4 pl-4 pr-5 text-sm/6'>
                                    <div className='flex w-0 flex-1 items-center'>
                                        <div className='ml-4 flex min-w-0 flex-1 gap-2'>
                                            <span className='truncate font-medium'>{invoice_detail.item.split('|')[1]}</span>
                                            <span className='shrink-0 text-green-700'>{format_currency(invoice_detail.amount)}</span>
                                        </div>
                                    </div>
                                </li>
                                ))}
                            </ul>
                        </dd>
                    </div>
                </dl>
            </div>
            <Link href={route('order.index')} className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>Back</Link>
            {
                billing.status == 'UNPAID' &&
                <button onClick={onPressPay} className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Pay Now</button>
                // <a href={props.invoices.billing.billing_link_payment} className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Pay Now</a>
            }
        </>
    );
}
Index.layout = (page) => <AppLayout title={'Order Invoices'} children={page} />;
