import AppLayout from '@/Layouts/appLayout';
import { router } from '@inertiajs/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Index(props) {
    const [loading, setLoading] = useState(false);

    const format_currency = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(number);
    };

    const ppn = '11%';

    // const total = parseFloat(props.billing.sub_total) + parseFloat(props.billing.tax);
    const billingBuyer = JSON.parse(props.billing.billing_buyer);

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
        window.snap.pay(props.billing.billing_references, {
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
                alert('customer close the popup window without the finishing the payment');
                router.get(route('dashboard'));
                setLoading(false);
            },
        });
    }

    // console.log(props);
    return (
        <>
            <main className='relative lg:min-h-full'>
                <div className='h-80 overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12'>
                    <img alt='TODO' src='https://tailwindui.com/img/ecommerce-images/confirmation-page-06-hero.jpg' className='h-full w-full object-cover object-center' />
                </div>
                <div>
                    <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24'>
                        <div className='lg:col-start-2'>
                            <h1 className='text-sm font-medium text-indigo-600'>Waiting Payment</h1>
                            <p className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>Thanks for ordering</p>
                            <p className='mt-2 text-base text-gray-500'>We appreciate your order, we’re currently processing it. So hang tight and we’ll send you confirmation very soon!</p>
                            <dl className='mt-16 text-sm font-medium'>
                                <dt className='text-gray-900'>Tracking number</dt>
                                <dd className='mt-2 text-indigo-600'>{props.billing.billing_code}</dd>
                            </dl>
                            <ul className='mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500'>
                                {props.billing.invoice.invoice_details.map((item, index) => (
                                    <li key={item.id} className='flex space-x-6 py-6'>
                                        <div className='flex-auto space-y-1'>
                                            <h3 className='text-gray-900'>
                                                <a>{item.item.split('|')[1]}</a>
                                            </h3>
                                            {/* <p>{product.color}</p>
                                            <p>{product.size}</p> */}
                                        </div>
                                        <p className='flex-none font-medium text-gray-900'>{format_currency(item.amount)}</p>
                                    </li>
                                ))}
                            </ul>

                            <dl className='space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-500'>
                                <div className='flex justify-between'>
                                    <dt>Taxes ({ppn})</dt>
                                    <dd className='text-gray-900'>{format_currency(props.billing.tax)}</dd>
                                </div>

                                <div className='flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900'>
                                    <dt className='text-base'>Total</dt>
                                    <dd className='text-base'>{format_currency(props.billing.sub_total)}</dd>
                                </div>
                                <div className='flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900'>
                                    <dt className='text-base'>Status</dt>
                                    {props.billing.status == 'UNPAID' ?
                                    <dd className='text-base text-yellow-500'>{props.billing.status}</dd>
                                    :
                                    <dd className='text-base text-green-500'>{props.billing.status}</dd>
                                    }
                                </div>
                            </dl>

                            <dl className='mt-16 grid grid-cols-2 gap-x-4 text-sm text-gray-600'>
                                <div>
                                    <dt className='font-medium text-gray-900'>Shipping Address</dt>
                                    <dd className='mt-2'>
                                        <address className='not-italic'>
                                            <span className='block'>{billingBuyer.first_name + ' ' + billingBuyer.last_name}</span>
                                            <span className='block'>{billingBuyer.address}</span>
                                            <span className='block'>{billingBuyer.email}</span>
                                        </address>
                                    </dd>
                                </div>
                            </dl>

                            <div className='mt-16 border-t border-gray-200 py-6 text-right'>
                                {/* <a href='#' className='text-sm font-medium text-indigo-600 hover:text-indigo-500'>
                                    Continue Shopping
                                    <span aria-hidden='true'> &rarr;</span>
                                </a> */}
                                <button onClick={onPressPay} className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Pay Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

Index.layout = (page) => <AppLayout title={'Payment'} children={page} />;
