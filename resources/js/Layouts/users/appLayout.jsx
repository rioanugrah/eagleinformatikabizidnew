import { Icon } from '@/components/icon';
import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { Dialog, DialogBackdrop, DialogPanel, Menu, MenuButton, MenuItem, MenuItems, Transition, TransitionChild } from '@headlessui/react';
import { Bars3Icon, BellIcon, CalendarIcon, ChartPieIcon, Cog6ToothIcon, DocumentDuplicateIcon, FolderIcon, HomeIcon, UsersIcon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../../../public/logo/LogoSubEagleMediaInformatika.webp';
import MenuUser from './menuUser';

export default function Index({ title, children }) {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(true);
    const [dataCart, setDataCart] = useState([]);

    const { auth, flash } = usePage().props;

    const cart = async () => {
        await axios.get(route('cart')).then((response) => {
            setDataCart(response.data);
            // console.log(response.data);
        });
    };

    useEffect(() => {
        if (flash.message.success) {
            toast.success(flash.message.success);
        }
        if (flash.message.error) {
            toast.error(flash.message.error);
        }
        cart();
    }, [flash]);

    return (
        <>
            <Head title={title} />
            <Dialog open={open} onClose={setOpen} className='relative z-50 lg:hidden'>
                <DialogBackdrop transition className='fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0' />
                <div className='fixed inset-0 flex'>
                    <DialogPanel transition className='relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full'>
                        <TransitionChild>
                            <div className='absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0'>
                                <button type='button' onClick={() => setOpen(false)} className='-m-2.5 p-2.5'>
                                    <span className='sr-only'>Close sidebar</span>
                                    <XMarkIcon aria-hidden='true' className='h-6 w-6 text-white' />
                                </button>
                            </div>
                        </TransitionChild>
                        <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4'>
                            <div className='flex h-18 shrink-0 items-center'>
                                <img alt='Eagle Media Informatika' src={logo} width='180' />
                            </div>
                            <nav className='flex flex-1 flex-col'>
                                <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                                    {auth.user.access == true ? <MenuAdministrator /> : <MenuUser />}
                                    <li className='mt-auto'>
                                        <Link className='group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600'>Settings</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'>
                <div className='flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4'>
                    <div className='flex h-18 shrink-0 items-center'>
                        <img alt='Eagle Media Informatika' src={logo} width='180' />
                    </div>
                    <nav className='flex flex-1 flex-col'>
                        <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                            <MenuUser />
                            <li className='mt-auto'>
                                <Link className='group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600'>Settings</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className='lg:pl-72'>
                <div className='sticky top-0 z-40 lg:mx-auto lg:max-w-7xl lg:px-8'>
                    <div className='flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none'>
                        <button type='button' onClick={() => setOpen(true)} className='-m-2.5 p-2.5 text-gray-700 lg:hidden'>
                            <span className='sr-only'>Open sidebar</span>
                            <Icon icon={'IconMenu2'} />
                        </button>
                        <div aria-hidden='true' className='h-6 w-px bg-gray-200 lg:hidden' />
                        <div className='flex flex-1 gap-x-4 self-stretch lg:gap-x-6'>
                            <div className='flex items-center gap-x-4 lg:gap-x-6'>
                                <Link href={dataCart.url} className='relative rounded-full border-2 border-transparent px-1 py-4 text-gray-800 transition duration-150 ease-in-out hover:text-gray-400 focus:text-gray-500 focus:outline-none' aria-label='Cart'>
                                    <Icon icon={'IconShoppingCart'} />
                                    <span className='absolute inset-0 -mr-6 object-right-top'>
                                        <div className='inline-flex items-center rounded-full border-2 border-white bg-red-500 px-1.5 py-0.5 text-xs font-semibold leading-4 text-white'>{dataCart.total_cart}</div>
                                    </span>
                                </Link>
                                <button type='button' className='relative rounded-full border-2 border-transparent px-1 py-4 text-gray-800 transition duration-150 ease-in-out hover:text-gray-400 focus:text-gray-500 focus:outline-none' aria-label='Cart'>
                                    <Icon icon={'IconBell'} />
                                    <span className='absolute inset-0 -mr-6 object-right-top'>
                                        <div className='inline-flex items-center rounded-full border-2 border-white bg-red-500 px-1.5 py-0.5 text-xs font-semibold leading-4 text-white'>0</div>
                                    </span>
                                </button>
                                {/* <button type='button' className='-m-2.5 p-2.5 text-gray-400 hover:text-gray-500'>
                                                <span className='sr-only'>View notifications</span>
                                                <Icon icon={'IconBell'} />
                                            </button> */}
                                <div aria-hidden='true' className='hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200' />
                                <Menu as='div' className='relative'>
                                    <Menu.Button className='-m-1.5 flex items-center p-1.5'>
                                        <span className='sr-only'>Open user menu</span>
                                        <img src={auth.user.avatar} className='h-8 w-8 rounded-full bg-gray-50' />
                                        <span className='hidden lg:flex lg:items-center'>
                                            <span aria-hidden='true' className='ml-4 text-sm font-semibold leading-6 text-gray-900'>
                                                {auth.user.name}
                                            </span>
                                            {/* <ChevronDownIcon aria-hidden='true' className='ml-2 h-5 w-5 text-gray-400' /> */}
                                        </span>
                                    </Menu.Button>
                                    <Menu.Items transition className='absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'>
                                        <Menu.Item>
                                            <Link as='button' method='post' href={route('logout')} className='block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50'>
                                                Logout
                                            </Link>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>

                <main className='py-10'>
                    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                        {/* {flash.message && (
                                        <div id='alert-3' className='mb-4 flex items-center rounded-lg bg-green-50 p-4 text-green-800 dark:bg-gray-800 dark:text-green-400' role='alert'>
                                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                                <path fill='currentColor' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z' />
                                            </svg>
                                            <span className='sr-only'>Success!</span>
                                            <div className='ms-3 text-sm font-medium'>{flash.message}</div>
                                            <button type='button' className='-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-green-50 p-1.5 text-green-500 hover:bg-green-200 focus:ring-2 focus:ring-green-400 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700' data-dismiss-target='#alert-3' aria-label='Close'>
                                                <span className='sr-only'>Close</span>
                                                <svg className='h-3 w-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14'>
                                                    <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6' />
                                                </svg>
                                            </button>
                                        </div>
                                    )} */}
                        <ToastContainer />
                        {children}
                    </div>
                </main>
            </div>
        </>
    );
}
