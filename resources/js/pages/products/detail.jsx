import AppLayout from "@/Layouts/appLayout";
import { Head, Link } from "@inertiajs/react";

export default function Detail(props)
{
    const product = props.product;

    return(
        <>
            <Head
                title={'Product '+product.title}
            />
            <div className='px-4 sm:px-0'>
                <h3 className='text-base/7 font-semibold text-gray-900'>Product Code : {product.product_code}</h3>
            </div>
            <div className='mt-6 border-t border-gray-100'>
                <dl className='divide-y divide-gray-100'>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Product Images</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>
                            <img src={product.picture} className='h-auto max-w-lg rounded-lg' width={640} />
                        </dd>
                    </div>
                </dl>
                <dl className='divide-y divide-gray-100'>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Slug</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{product.slug}</dd>
                    </div>
                </dl>
                <dl className='divide-y divide-gray-100'>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Product Title</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{product.title}</dd>
                    </div>
                </dl>
                <dl className='divide-y divide-gray-100'>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Product Description</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{product.description}</dd>
                    </div>
                </dl>
                <dl className='divide-y divide-gray-100'>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Product Price</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{product.price}</dd>
                    </div>
                </dl>
                <dl className='divide-y divide-gray-100'>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Product Quantity</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{product.quantity}</dd>
                    </div>
                </dl>
                <dl className='divide-y divide-gray-100'>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm/6 font-medium text-gray-900'>Product Create</dt>
                        <dd className='mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0'>{product.created_at}</dd>
                    </div>
                </dl>
            </div>
            <Link href={route('products.index')} className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>Back</Link>
        </>
    )
}

Detail.layout = (page) => <AppLayout title={'Product Detail'} children={page} />;
