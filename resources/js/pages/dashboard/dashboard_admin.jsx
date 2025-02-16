import AppLayout from '@/Layouts/appLayout';
import AppNewLayout from '@/Layouts/user_layout/appnew-layout';
import AuthLayout from '@/Layouts/auth-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/card';
import Container from '@/components/container';
import { Link } from '@inertiajs/react';

import { BarChart } from '@mui/x-charts/BarChart';
import { useEffect, useState } from 'react';
import { Button } from '@/components/button';
import axios from 'axios';

export default function DashboardAdmin(props, { auth }) {
    const [loading, setLoading] = useState(false);

    const format_currency = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(number);
    };

    const projects = [
        { name: 'Balance', initials: 'BA', href: '#', members: format_currency(0), bgColor: 'bg-blue-600' },
        { name: 'Total Sales', initials: 'TS', href: '#', members: format_currency(0), bgColor: 'bg-green-600' },
        // { name: 'Component Design', initials: 'CD', href: '#', members: 12, bgColor: 'bg-purple-600' },
        // { name: 'Templates', initials: 'T', href: '#', members: 16, bgColor: 'bg-yellow-500' },
        // { name: 'React Components', initials: 'RC', href: '#', members: 8, bgColor: 'bg-green-500' },
    ];

    // const [total_penjualan, setTotalPenjualan] = useState(props.total_penjualan);

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    useEffect(() => {
        if (import.meta.env.VITE_MIDTRANS_IS_PRODUCTION == true) {
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
    });

    const onPressPay = async () => {
        // const data = await fetch(`${window.location.hostname}/api/test-payment`, {
        //   headers: {
        //     'Authorization': 'Bearer '+token
        //   }
        // });
        setLoading(true);
        await axios.post(`api/test-payment`).then(function (response) {
            console.log(response);
            const snapToken = response.data;
            window.snap.pay(snapToken, {
                onSuccess: () => {
                    console.log('success');
                    setLoading(false);
                },
                onPending: (result) => {
                    console.log('pending transaction', result);
                    setLoading(false);
                },
                onError: (result) => {
                    console.log('error transaction', result);
                    setLoading(false);
                },
                onClose: () => {
                    console.log('customer close the popup window without the finishing the payment');
                    setLoading(false);
                },
            });
        });
        // console.log(data);
        // const res = await data.json();
        // const snapToken = res.token;
        // const snapToken = '2b3cce85-e205-4c59-8d84-f0a29b5e3545';
        // window.snap.pay(snapToken, {
        //   onSuccess: () => {
        //     console.log('success')
        //   },
        //   onPending: (result) => {
        //     console.log('pending transaction', result)
        //   },
        //   onError: (result) => {
        //     console.log('error transaction', result)
        //   },
        //   onClose: () => {
        //     console.log('customer close the popup window without the finishing the payment')
        //   },
        // })

        // router.post(route('frontend.test_payment'),{
        //     onFinish: (response) => {
        //         // console.log(response);
        //         const snapToken = response;
        //         window.snap.pay(snapToken, {
        //           onSuccess: () => {
        //             console.log('success')
        //           },
        //           onPending: (result) => {
        //             console.log('pending transaction', result)
        //           },
        //           onError: (result) => {
        //             console.log('error transaction', result)
        //           },
        //           onClose: () => {
        //             console.log('customer close the popup window without the finishing the payment')
        //           },
        //         })
        //     },
        // });
    };

    // console.log(total_penjualan);

    return (
        // <Container>
        //     <Card>
        //         <CardHeader>
        //             <CardTitle>Dashboard</CardTitle>
        //             <CardDescription>Selamat Datang {auth.user.name}.</CardDescription>
        //         </CardHeader>
        //         <CardContent>
        //             <h2 className="text-sm font-medium text-gray-500">Pinned Projects</h2>
        //         </CardContent>
        //     </Card>
        // </Container>
        <>
            <h2 className='text-sm font-medium text-gray-500'>Dashboard</h2>
            <ul role='list' className='mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4'>
                {projects.map((project) => (
                    <li key={project.name} className='col-span-1 flex rounded-md shadow-sm'>
                        <div className={classNames(project.bgColor, 'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white')}>{project.initials}</div>
                        <div className='flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white'>
                            <div className='flex-1 truncate px-4 py-2 text-sm'>
                                <a href={project.href} className='font-medium text-gray-900 hover:text-gray-600'>
                                    {project.name}
                                </a>
                                <p className='text-gray-500'>{project.members}</p>
                            </div>
                            <div className='flex-shrink-0 pr-2'>
                                <button type='button' className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                                    <span className='sr-only'>Open options</span>
                                    {/* <EllipsisVerticalIcon aria-hidden='true' className='h-5 w-5' /> */}
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <Card className='mt-8'>
                <CardHeader className='font-bold'>Total Penjualan</CardHeader>
                <CardContent>

                </CardContent>
            </Card>
        </>
    );
}
DashboardAdmin.layout = (page) => <AppLayout title={'Dashboard'} children={page} />;
// Index.layout = (page) => <AuthLayout title={'Dashboard'} children={page} />;
{
    /* <div className='px-2 pb-12 pt-28'>
<Container>
    <div className='max-w-2xl space-y-6'>
        <div className='p-6 text-foreground'>You're logged in!</div>
    </div>
</Container>
</div> */
}
