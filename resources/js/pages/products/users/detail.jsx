import { Fragment } from 'react';
import AppLayout from '@/Layouts/users/appLayout';
import { StarIcon } from '@heroicons/react/20/solid';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Link } from '@inertiajs/react';

export default function Detail(props) {
    const product = props.product;

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    const license = {
        href: '#',
        summary: 'For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.',
        content: `
          <h4>Overview</h4>

          <p>For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.</p>

          <ul role="list">
          <li>You\'re allowed to use the icons in unlimited projects.</li>
          <li>Attribution is not required to use the icons.</li>
          </ul>

          <h4>What you can do with it</h4>

          <ul role="list">
          <li>Use them freely in your personal and professional work.</li>
          <li>Make them your own. Change the colors to suit your project or brand.</li>
          </ul>

          <h4>What you can\'t do with it</h4>

          <ul role="list">
          <li>Don\'t be greedy. Selling or distributing these icons in their original or modified state is prohibited.</li>
          <li>Don\'t be evil. These icons cannot be used on websites or applications that promote illegal or immoral beliefs or activities.</li>
          </ul>
        `,
    };

    return (
        <div className='bg-white'>
            <div className='mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
                {/* Product */}
                <div className='lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16'>
                    {/* Product image */}
                    <div className='lg:col-span-4 lg:row-end-1'>
                        <div className='aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100'>
                            <img alt={product.title} src={product.picture} className='object-cover object-center' />
                        </div>
                    </div>

                    {/* Product details */}
                    <div className='mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none'>
                        <div className='flex flex-col-reverse'>
                            <div className='mt-4'>
                                <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>{product.title}</h1>

                                <h2 id='information-heading' className='sr-only'>
                                    Product information
                                </h2>
                                <p className='mt-2 text-sm text-gray-500'>{/* Version {product.version.name} (Updated <time dateTime={product.version.datetime}>{product.version.date}</time>) */}</p>
                            </div>

                            <div>
                                <h3 className='sr-only'>Reviews</h3>
                                <div className='flex items-center'>
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon key={rating} aria-hidden='true' className={classNames(4 > rating ? 'text-yellow-400' : 'text-gray-300', 'h-5 w-5 flex-shrink-0')} />
                                    ))}
                                </div>
                                {/* <p className='sr-only'>{reviews.average} out of 5 stars</p> */}
                            </div>
                        </div>

                        <p className='mt-6 text-gray-500'>{product.description}</p>

                        <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-1'>
                            <Link as='button' method='post' href={route('cart.add', [product.id])} className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50'>
                                Add Cart {product.price}
                            </Link>
                        </div>

                        <div className='mt-10 border-t border-gray-200 pt-10'>
                            <h3 className='text-sm font-medium text-gray-900'>License</h3>
                            <p className='mt-4 text-sm text-gray-500'>
                                {license.summary}{' '}
                                <a href={license.href} className='font-medium text-indigo-600 hover:text-indigo-500'>
                                    Read full license
                                </a>
                            </p>
                        </div>

                    </div>

                </div>
            </div>
            <Link href={route('products.index')} className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>Back</Link>

        </div>
    );
}

Detail.layout = (page) => <AppLayout title={'Orders'} children={page} />;
