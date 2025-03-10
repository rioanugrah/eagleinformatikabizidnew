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

export default function Index(props) {
    const { data: products, meta, links } = props.products;
    const [params, setParams] = useState(props.state);

    const { auth } = usePage().props;

    useFilter({
        route: route('products.index'),
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

    const handlerAddCart = (e) => {
        e.preventDefault();
        setLoading(true);
        alert('ok');

        // router.post(
        //     route('products.store'),
        //     {
        //         categories_id: product_category,
        //         product_name: product_name,
        //         product_description: product_description,
        //         product_price: product_price,
        //         product_profit_price: product_profit_price,
        //         product_stock: product_stock,
        //         product_periode: product_periode,
        //         status: product_status,
        //     },
        //     {
        //         onFinish: () => {
        //             setLoading(false);
        //             // alert('ok');
        //         },
        //     },
        // );
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Products</CardTitle>
            </CardHeader>
            <CardContent>
                {auth.user.access == true && (
                    <div className='mb-3 flex'>
                        <Link href={route('products.create')} className='mb-2 me-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800'>
                            Create
                        </Link>
                    </div>
                )}

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
                {/* <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className='w-[50px] text-center'>#</TableHead>
                            <TableHead onClick={() => handleSort('action')}>
                                Action
                            </TableHead>
                            <TableHead onClick={() => handleSort('picture')}>
                                <SortIndicator label='Picture' column='picture' field={params?.field} direction={params?.direction} />
                            </TableHead>
                            <TableHead onClick={() => handleSort('product_code')}>
                                <SortIndicator label='Product Code' column='product_code' field={params?.field} direction={params?.direction} />
                            </TableHead>
                            <TableHead onClick={() => handleSort('title')}>
                                <SortIndicator label='Title' column='title' field={params?.field} direction={params?.direction} />
                            </TableHead>
                            <TableHead onClick={() => handleSort('category_id')}>
                                <SortIndicator label='Category' column='category_id' field={params?.field} direction={params?.direction} />
                            </TableHead>
                            <TableHead onClick={() => handleSort('price')}>
                                <SortIndicator label='Price' column='price' field={params?.field} direction={params?.direction} />
                            </TableHead>
                            <TableHead onClick={() => handleSort('quantity')}>
                                <SortIndicator label='Quantity' column='quantity' field={params?.field} direction={params?.direction} />
                            </TableHead>
                            <TableHead onClick={() => handleSort('status')}>
                                <SortIndicator label='status' column='status' field={params?.field} direction={params?.direction} />
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.length > 0 ? (
                            <>
                                {products.map((product, i) => (
                                    <TableRow key={i}>
                                        <TableCell className='w-0 py-7 text-center'>{meta.from + i}</TableCell>
                                        <TableCell>
                                            <Link as='button' method='post' href={route('cart.add', [product.id])} className='mb-2 me-2 inline-flex items-center rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-green-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:shadow-lg dark:shadow-green-800/80 dark:focus:ring-green-800'>
                                                <Icon icon={'IconShoppingCartPlus'} className={'w-6 h-6 me-2'} /> Add Cart
                                            </Link>
                                            <Link href={route('products.detail', [product.id])} className='mb-2 me-2 inline-flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
                                                <Icon icon={'IconEye'} className={'w-6 h-6 me-2'} /> View
                                            </Link>
                                            {auth.user.access == true && (
                                                <>
                                                    <Link href={route('products.edit', [product.id])} className='mb-2 me-2 inline-flex items-center rounded-lg bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 px-5 py-2.5 text-center text-sm font-medium text-gray-900 shadow-lg shadow-lime-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-lime-300 dark:shadow-lg dark:shadow-lime-800/80 dark:focus:ring-lime-800'>
                                                        <Icon icon={'IconLogin2'} className={'w-6 h-6 me-2'} /> Edit
                                                    </Link>
                                                    <Link as='button' method='delete' href={route('products.destroy', [product.id])} className='mb-2 mb-2 me-2 me-2 inline-flex items-center rounded-lg bg-gradient-to-r from-red-400 via-red-500 to-red-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-red-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-red-300 dark:shadow-lg dark:shadow-red-800/80 dark:focus:ring-red-800'>
                                                        <Icon icon={'IconTrash'} className={'w-6 h-6 me-2'} /> Delete
                                                    </Link>
                                                </>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            <img src={product.picture} className='h-auto max-w-lg rounded-lg' width={220} />
                                        </TableCell>
                                        <TableCell>{product.product_code}</TableCell>
                                        <TableCell>{product.title}</TableCell>
                                        <TableCell>{product.category_id}</TableCell>
                                        <TableCell>{product.price}</TableCell>
                                        <TableCell>{product.quantity}</TableCell>
                                        <TableCell>{product.status == 'Aktif' ? <span class='me-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300'>{product.status}</span> : <span class='me-2 rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300'>{product.status}</span>}</TableCell>
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
                </Table> */}
                {products.length > 0 ? (
                <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    <>
                        {products.map((product, i) => (
                            <div key={product.id} className="group relative">
                                <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                                <img alt={product.title} src={product.picture} className="object-cover object-center" />
                                    <div aria-hidden="true" className="flex items-end p-4 opacity-0 group-hover:opacity-100">
                                        <div className="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                                        View Product
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
                                    <h3>
                                    <Link href={route('products.detail',[product.id])}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.title}
                                    </Link>
                                    </h3>
                                    <p>{product.price}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{product.category_id}</p>
                            </div>
                        ))}
                    </>
                </div>
                ) : (
                    <p className='animate-pulse text-center text-base font-semibold text-destructive'>No Products.</p>
                )}
            </CardContent>
            <CardFooter className='flex items-center justify-between pt-6'>
                <SimplePagination links={links} meta={meta} />
            </CardFooter>
        </Card>
    );
}

Index.layout = (page) => <AppLayout title={'Products'} children={page} />;
