import AppLayout from '@/Layouts/administrator/app-layout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table';
import { Input } from '@/components/input';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { useFilter } from '@/hooks/useFilter';
import { SortIndicator } from '@/components/sort-indicator';
import { Icon } from '@/components/icon';

export default function Index(data) {
    const { data: websites, meta, links } = data.websites;
    const [params, setParams] = useState(data.state);

    useFilter({
        route: route('websites.index'),
        values: params,
        // only: ['users'],
    });

    const handleSort = (newField) => {
        let newDirection = params?.direction ?? 'asc';
        const field = params?.field ?? 'created_at';

        if (newField === field) {
            newDirection = newDirection === 'asc' ? 'desc' : 'asc'; // used newDirection
        }

        setParams({ ...params, field: newField, direction: newDirection });
    };

    return (
        <>
            <Head title='Websites' />
            <Card>
                <CardHeader>
                    <CardTitle>Website</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='mb-6'>
                        <Link href={route('websites.create')} class='mb-2 me-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800 '>
                            Create
                        </Link>
                    </div>
                    <div className='mb-3 flex items-center justify-between'>
                        <Select value={params?.limit} onValueChange={(e) => setParams({ ...params, limit: e })}>
                            <SelectTrigger className='w-[180px]'>
                                <SelectValue placeholder={params?.limit ?? 10} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='10'>10</SelectItem>
                                <SelectItem value='25'>25</SelectItem>
                                <SelectItem value='50'>50</SelectItem>
                                <SelectItem value='75'>75</SelectItem>
                                <SelectItem value='100'>100</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className='w-72'>
                            <Input type='text' value={params?.search} onChange={(e) => setParams((prev) => ({ ...prev, search: e.target.value }))} placeholder='Pencarian...' />
                        </div>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className='w-[50px] text-center'>#</TableHead>
                                <TableHead onClick={() => handleSort('website_name')}>
                                    <SortIndicator label='Website Name' column='website_name' field={params?.field} direction={params?.direction} />
                                </TableHead>
                                <TableHead onClick={() => handleSort('website_link')}>
                                    <SortIndicator label='Website Link' column='website_link' field={params?.field} direction={params?.direction} />
                                </TableHead>
                                <TableHead onClick={() => handleSort('user_id')}>
                                    <SortIndicator label='User' column='user_id' field={params?.field} direction={params?.direction} />
                                </TableHead>
                                <TableHead onClick={() => handleSort('expired_date')}>
                                    <SortIndicator label='Expired Date' column='expired_date' field={params?.field} direction={params?.direction} />
                                </TableHead>
                                <TableHead onClick={() => handleSort('status')}>
                                    <SortIndicator label='Status' column='status' field={params?.field} direction={params?.direction} />
                                </TableHead>
                                <TableHead />
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                websites.length > 0 ? (
                                    <>
                                        {
                                            websites.map((item,i) => (
                                                <TableRow key={i}>
                                                    <TableCell className='w-0 py-7 text-center'>{meta.from + i}</TableCell>
                                                    <TableCell>{item.website_name}</TableCell>
                                                    <TableCell>{item.website_link}</TableCell>
                                                    <TableCell>{item.user.name}</TableCell>
                                                    <TableCell>{item.expired_date}</TableCell>
                                                    <TableCell>
                                                        {
                                                            item.status == 'Aktif' ?
                                                            <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{item.status}</span>
                                                            : item.status == 'Waiting Payment' ?
                                                            <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">{item.status}</span>
                                                            :
                                                            <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">{item.status}</span>
                                                        }
                                                    </TableCell>
                                                    <TableCell>
                                                        {
                                                            item.status == 'Aktif' &&
                                                            <a href={item.website_link} target='_blank' className='inline-flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                                                                <Icon icon={'IconLogin2'} /> Go Website
                                                            </a>
                                                        }
                                                        <Link className='text-gray-900 inline-flex items-center bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                                                            <Icon icon={'IconLogin2'} /> Edit
                                                        </Link>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </>
                                ):(
                                    <TableRow>
                                        <TableCell colSpan={4} className='animate-pulse py-5 text-center text-base font-semibold text-destructive'>
                                            Empty Websites
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    );
}

Index.layout = (page) => <AppLayout title={'Websites'} children={page} />;
