import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/select';
import { Input } from '@/components/input';

import { useFilter } from '@/hooks/useFilter';
import AppLayout from '@/Layouts/appLayout';
import { useState, useEffect, useRef } from 'react';
import { SortIndicator } from '@/components/sort-indicator';
import { Link, usePage } from '@inertiajs/react';
import { Icon } from '@/components/icon';
import { SimplePagination } from '@/components/simple-pagination';

export default function Index(props)
{
    const { data: orders, meta, links } = props.orders;
    const [params, setParams] = useState(props.state);

    const { auth } = usePage().props;

    useFilter({
        route: route('order.index'),
        values: params,
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
        <Card>
            <CardHeader>
                <CardTitle>Orders</CardTitle>
            </CardHeader>
            <CardContent>
                <div className='mb-3 flex items-center justify-between'>
                    <div>
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
                    </div>
                    <div className='w-72'>
                        <Input type='text' value={params?.search} onChange={(e) => setParams((prev) => ({ ...prev, search: e.target.value }))} placeholder='Pencarian...' />
                    </div>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className='w-[50px] text-center'>#</TableHead>
                            <TableHead onClick={() => handleSort('order_code')}>
                                <SortIndicator label='Order Code' column='order_code' field={params?.field} direction={params?.direction} />
                            </TableHead>
                            <TableHead onClick={() => handleSort('total')}>
                                <SortIndicator label='Total' column='total' field={params?.field} direction={params?.direction} />
                            </TableHead>
                            <TableHead onClick={() => handleSort('status')}>
                                <SortIndicator label='Status' column='status' field={params?.field} direction={params?.direction} />
                            </TableHead>
                            <TableHead />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.length > 0 ? (
                            <>
                                {orders.map((order, i) => (
                                    <TableRow key={i}>
                                        <TableCell className='w-0 py-7 text-center'>{meta.from + i}</TableCell>
                                        <TableCell>{order.order_code}</TableCell>
                                        <TableCell>{order.total}</TableCell>
                                        <TableCell>{order.status == 'PAID' ? <span class='me-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300'>{order.status}</span> : order.status == 'UNPAID' ? <span class='bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300'>{order.status}</span> : <span class='bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300'>{order.status}</span>}</TableCell>
                                        <TableCell>
                                            <Link href={route('order.detail', [order.id])} className='inline-flex text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center me-2 mb-2'>
                                                <Icon icon={'IconPackages'} className={'w-6 h-6 me-2'} /> Order Detail
                                            </Link>
                                            <Link href={route('invoices.detail',[order.id])} className='inline-flex text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center me-2 mb-2'>
                                                <Icon icon={'IconPackages'} className={'w-6 h-6 me-2'} /> Invoices
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </>
                        ) : (
                            <TableRow>
                                <TableCell colSpan={8} className='animate-pulse py-5 text-center text-base font-semibold text-destructive'>
                                    No Products.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter className='flex items-center justify-between pt-6'>
                <SimplePagination links={links} meta={meta} />
            </CardFooter>
        </Card>
    )
}
Index.layout = (page) => <AppLayout title={'Orders'} children={page} />;
