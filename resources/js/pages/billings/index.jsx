import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/select';
import { Input } from '@/components/input';

import { useFilter } from '@/hooks/useFilter';
import AppLayout from '@/Layouts/appLayout';
import { useState } from 'react';
import { SortIndicator } from '@/components/sort-indicator';
import { Link } from '@inertiajs/react';
import { Icon } from '@/components/icon';
import { SimplePagination } from '@/components/simple-pagination';

export default function Index(props) {
    const { data: billings, meta, links } = props.billings;
    const [params, setParams] = useState(props.state);
    useFilter({
        route: route('billing.index'),
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

    const format_currency = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(number);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Billings</CardTitle>
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
                            <TableHead onClick={() => handleSort('billing_references')}>
                                <SortIndicator label='Billing References' column='billing_references' field={params?.field} direction={params?.direction} />
                            </TableHead>
                            <TableHead onClick={() => handleSort('sub_total')}>
                                <SortIndicator label='Total' column='sub_total' field={params?.field} direction={params?.direction} />
                            </TableHead>
                            <TableHead onClick={() => handleSort('status')}>
                                <SortIndicator label='status' column='status' field={params?.field} direction={params?.direction} />
                            </TableHead>
                            <TableHead />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {billings.length > 0 ? (
                            <>
                                {billings.map((billing, i) => (
                                    <TableRow key={i}>
                                        <TableCell className='w-0 py-7 text-center'>{meta.from + i}</TableCell>
                                        <TableCell>{billing.billing_code}</TableCell>
                                        <TableCell>{billing.billing_references}</TableCell>
                                        <TableCell>{format_currency(billing.sub_total)}</TableCell>
                                        <TableCell>
                                            {billing.status == 'PAID' ? (
                                                <span class='me-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300'>{billing.status}</span>
                                            ) : billing.status == 'UNPAID' ? (
                                                <span class='me-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'>{billing.status}</span>
                                            ) : (
                                                <span class='me-2 rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300'>{billing.status}</span>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            {
                                                billing.status == 'UNPAID' ?
                                                <Link href={route('invoices.detail',[billing.invoice_id])} className='inline-flex items-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                                                    <Icon icon={'IconCash'} /> Pay Now
                                                </Link>
                                                : billing.status == 'PAID' &&
                                                <Link href={route('invoices.detail',[billing.invoice_id])} className='inline-flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                                                    <Icon icon={'IconFileInvoice'} /> Invoices
                                                </Link>
                                            }
                                        </TableCell>
                                        {/* <TableCell>{category.status == 'Aktif' ? <span class='me-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300'>{category.status}</span> : <span class='me-2 rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300'>{category.status}</span>}</TableCell>
                                        <TableCell>
                                            <Link href={route('categories.edit',[category.id])} className='mb-2 me-2 inline-flex items-center rounded-lg bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 px-5 py-2.5 text-center text-sm font-medium text-gray-900 shadow-lg shadow-lime-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-lime-300 dark:shadow-lg dark:shadow-lime-800/80 dark:focus:ring-lime-800'>
                                                <Icon icon={'IconLogin2'} /> Edit
                                            </Link>
                                            <Link as='button' method='delete' href={route('categories.destroy',[category.id])} className='mb-2 mb-2 me-2 me-2 inline-flex rounded-lg bg-gradient-to-r from-red-400 via-red-500 to-red-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-red-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-red-300 dark:shadow-lg dark:shadow-red-800/80 dark:focus:ring-red-800'>
                                                <Icon icon={'IconTrash'} /> Delete
                                            </Link>
                                        </TableCell> */}
                                    </TableRow>
                                ))}
                            </>
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} className='animate-pulse py-5 text-center text-base font-semibold text-destructive'>
                                    No Billings.
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
    );
}

Index.layout = (page) => <AppLayout title={'Billings'} children={page} />;
