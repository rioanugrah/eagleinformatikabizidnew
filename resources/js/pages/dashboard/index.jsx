import AppNewLayout from '@/Layouts/user_layout/appnew-layout';
import AuthLayout from '@/Layouts/auth-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/card';
import Container from '@/components/container';
import { Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/users/appLayout';

import { BarChart, LineChart } from '@mui/x-charts';

export default function Index(props,{ auth }) {
    const projects = [
        { name: 'Balance', initials: 'BA', href: '#', members: 'Rp. 0', bgColor: 'bg-blue-600' },
        { name: 'Total Sales', initials: 'TS', href: '#', members: 'Rp. 0', bgColor: 'bg-green-600' },
        // { name: 'Component Design', initials: 'CD', href: '#', members: 12, bgColor: 'bg-purple-600' },
        // { name: 'Templates', initials: 'T', href: '#', members: 16, bgColor: 'bg-yellow-500' },
        // { name: 'React Components', initials: 'RC', href: '#', members: 8, bgColor: 'bg-green-500' },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

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
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <Card className='mt-8'>
                <CardHeader className='font-bold'>Total Penjualan</CardHeader>
                <CardContent>
                    <BarChart
                        series={[
                            { data: props.total_penjualan.map((data, i) => data.data ) },
                        ]}
                        height={290}
                        xAxis={[{ data: props.total_penjualan.map((date, i) => date.date ), scaleType: 'band' }]}
                        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                    />
                </CardContent>
            </Card>
        </>
    );
}
Index.layout = (page) => <AppLayout title={'Dashboard'} children={page} />;
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
