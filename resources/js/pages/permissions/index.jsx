import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table';
import { Input } from '@/components/input';
import Container from '@/components/container';
import { useFilter } from '@/hooks/useFilter';
import { Head, Link } from '@inertiajs/react';
import React, { useState } from 'react';
import { SortIndicator } from '@/components/sort-indicator';
import { SimplePagination } from '@/components/simple-pagination';
import AppLayout from '@/Layouts/administrator/app-layout';

export default function Index(props) {
    const { data: permissions, meta, links } = props.permissions;
    const [params, setParams] = useState(props.state);

    useFilter({
        route: route('permissions.index'),
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
            <Head title='Permissions' />
            <Card>
                <CardHeader>
                    <CardTitle>Permissions</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='mb-6'>
                        <Link href={route('permissions.create')} class='mb-2 me-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800 '>
                            Create
                        </Link>
                    </div>
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
                                <TableHead onClick={() => handleSort('name')}>
                                    <SortIndicator label='name' column='name' field={params?.field} direction={params?.direction} />
                                </TableHead>
                                <TableHead onClick={() => handleSort('guard_name')}>
                                    <SortIndicator label='guard name' column='guard_name' field={params?.field} direction={params?.direction} />
                                </TableHead>
                                <TableHead />
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {permissions.length > 0 ? (
                                <>
                                    {permissions.map((item, i) => (
                                        <TableRow key={i}>
                                            <TableCell className='w-0 py-7 text-center'>{meta.from + i}</TableCell>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>{item.guard_name}</TableCell>
                                            <TableCell>
                                                <Link href={route('permissions.edit',[item.id])} class='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900'>
                                                    Edit
                                                </Link>
                                                <Link
                                                    as='button' method='delete' href={route('permissions.destroy',[item.id])}
                                                    class='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
                                                >
                                                    Delete
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </>
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={3} className='animate-pulse py-5 text-center text-base font-semibold text-destructive'>
                                        Empty Permissions
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
        </>
    );
}

Index.layout = (page) => <AppLayout title={'Permissions'} children={page} />;
