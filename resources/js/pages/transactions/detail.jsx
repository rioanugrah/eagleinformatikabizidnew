import AppLayout from "@/Layouts/appLayout";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Detail(props) {
    const [loading, setLoading] = useState(false);

    const transaction = props.transaction;
    const billing_buyer = JSON.parse(props.transaction.billing_buyer);

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
        window.snap.pay(transaction.billing_references, {
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

    return(
        <>
            <div className='px-4 sm:px-0'>
                <h3 className='text-base/7 font-semibold text-gray-900'>Transaction #{transaction.billing_code}</h3>
                <p className='mt-1 max-w-2xl text-sm/6 text-gray-500'>Personal Transaction.</p>
            </div>
            <div className='mt-6 border-t border-gray-100'>
                <dl className='divide-y divide-gray-100'>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Transaction Code</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{transaction.billing_code}</dd>
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
                        <dt className='text-sm/6 font-medium text-gray-900'>Total</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{format_currency(transaction.total)}</dd>
                    </div>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Status</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{transaction.status == 'PAID' ? <span class='me-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300'>{transaction.status}</span> : transaction.status == 'UNPAID' ? <span class='bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300'>{transaction.status}</span> : <span class='bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300'>{transaction.status}</span>}</dd>
                    </div>
                </dl>
            </div>
            <Link href={route('transaction')} className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>Back</Link>
            {
                loading ? (
                    <button disabled type='button' class='me-2 inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
                        <svg aria-hidden='true' role='status' class='me-3 inline h-4 w-4 animate-spin text-gray-200 dark:text-gray-600' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor' />
                            <path
                                d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                                fill='#1C64F2'
                            />
                        </svg>
                        Loading...
                    </button>
                ):(
                    transaction.status == 'UNPAID' &&
                    <button onClick={onPressPay} className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Pay Now</button>
                )
            }
        </>
    )
}

Detail.layout = (page) => <AppLayout title={'Transaction Detail'} children={page} />;
