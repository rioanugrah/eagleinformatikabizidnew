import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/select';
import { Input } from '@/components/input';

import { useFilter } from '@/hooks/useFilter';
import AppLayout from '@/Layouts/users/appLayout';
import { useState, useEffect, useRef } from 'react';
import { SortIndicator } from '@/components/sort-indicator';
import { Link, usePage } from '@inertiajs/react';
import { Icon } from '@/components/icon';
import { SimplePagination } from '@/components/simple-pagination';

export default function Index(props){
    const { data: transactions, meta, links } = props.transactions;
    const [params, setParams] = useState(props.state);

    const { auth } = usePage().props;

    useFilter({
        route: route('transaction'),
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
                <CardTitle>Transactions</CardTitle>
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
                            <TableHead onClick={() => handleSort('billing_code')}>
                                <SortIndicator label='Billing Code' column='billing_code' field={params?.field} direction={params?.direction} />
                            </TableHead>
                            <TableHead onClick={() => handleSort('total')}>
                                <SortIndicator label='Total' column='total' field={params?.field} direction={params?.direction} />
                            </TableHead>
                            <TableHead onClick={() => handleSort('created_at')}>
                                <SortIndicator label='Date Create' column='created_at' field={params?.field} direction={params?.direction} />
                            </TableHead>
                            <TableHead onClick={() => handleSort('status')}>
                                <SortIndicator label='Status' column='status' field={params?.field} direction={params?.direction} />
                            </TableHead>
                            <TableHead />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {transactions.length > 0 ? (
                            <>
                                {transactions.map((transaction, i) => (
                                    <TableRow key={i}>
                                        <TableCell className='w-0 py-7 text-center'>{meta.from + i}</TableCell>
                                        <TableCell>{transaction.billing_code}</TableCell>
                                        <TableCell className='text-right'>{transaction.total}</TableCell>
                                        <TableCell className='text-center'>{transaction.created_at}</TableCell>
                                        <TableCell className='text-center'>{transaction.status == 'PAID' ? <span className='me-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300'>{transaction.status}</span> : transaction.status == 'UNPAID' ? <span className='bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300'>{transaction.status}</span> : <span className='bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300'>{transaction.status}</span>}</TableCell>
                                        <TableCell>
                                            <Link href={route('order.detail', [transaction.order_id])} className='items-center inline-flex text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                                                <Icon icon={'IconLogin2'} className={'w-6 h-6 me-2'} /> Order
                                            </Link>
                                            {
                                                transaction.status == 'UNPAID' &&
                                                <Link href={route('transaction.detail', [transaction.id])} className='mb-2 me-2 items-center inline-flex text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
                                                    <Icon icon={'IconLogin2'} className={'w-6 h-6 me-2'} /> Pay Now
                                                </Link>
                                            }
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </>
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className='animate-pulse py-5 text-center text-base font-semibold text-destructive'>
                                    No Transaction.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

Index.layout = (page) => <AppLayout title={'Transaction'} children={page} />;
