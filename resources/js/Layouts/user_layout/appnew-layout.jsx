import { Icon } from '@/components/icon';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { Separator } from '@/components/separator';

import { Dialog, Menu, Transition } from '@headlessui/react';

export default function AppNewLayout({ title, children }) {
    const [open, setOpen] = useState(false);
    const { auth } = usePage().props;
    const navigation = [
        { name: 'Dashboard', href: '#', icon: 'IconChartPie3', current: true },
        // { name: 'Team', href: '#', icon: 'IconChartPie3', current: false },
        // { name: 'Projects', href: '#', icon: 'IconChartPie3', current: false },
        // { name: 'Calendar', href: '#', icon: 'IconChartPie3', current: false },
        // { name: 'Documents', href: '#', icon: 'IconChartPie3', current: false },
        // { name: 'Reports', href: '#', icon: 'IconChartPie3', current: false },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <>
            <Head title={title} />
            <Dialog open={open} onClose={setOpen} className='relative z-50 lg:hidden'>
                <Dialog.Backdrop transition className='fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0' />
                <div className='fixed inset-0 flex'>
                    <Dialog.Panel transition className='relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full'>
                        <Transition show={open}>
                            <div className='absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0'>
                                <button type='button' onClick={() => setOpen(false)} className='-m-2.5 p-2.5'>
                                    <span className='sr-only'>Close sidebar</span>
                                    <Icon icon={'IconX'} />
                                </button>
                            </div>
                        </Transition>
                        <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4'>
                            <div className='flex h-16 shrink-0 items-center'>
                                <img alt='Your Company' src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600' className='h-8 w-auto' />
                            </div>
                            <nav className='flex flex-1 flex-col'>
                                <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                                    <li>
                                        <ul role='list' className='-mx-2 space-y-1'>
                                            <li>
                                                <Link href='#' className={classNames(route().current('dashboard') ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6')}>
                                                    <Icon icon={'IconChartPie3'} />
                                                    Dashboard
                                                </Link>
                                            </li>
                                            <Separator className='!my-4' />
                                            <li>
                                                <Link href={route('profile.index')} className={classNames(route().current('profile*') ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6')}>
                                                    <Icon icon={'IconSettings'} />
                                                    Profile
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={route('security.index')} className={classNames(route().current('security*') ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6')}>
                                                    <Icon icon={'IconShieldLock'} />
                                                    Security
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={route('danger.index')} className={classNames(route().current('danger*') ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6')}>
                                                    <Icon icon={'IconShieldLock'} />
                                                    Danger zone
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
            <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'>
                <div className='flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4'>
                    <div className='flex h-16 shrink-0 items-center'>
                        <img alt='Your Company' src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600' className='h-8 w-auto' />
                    </div>
                    <nav className='flex flex-1 flex-col'>
                        <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                            <li>
                                <ul role='list' className='-mx-2 space-y-1'>
                                    <li>
                                        <Link href={route('dashboard')} className={classNames(route().current('dashboard') ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6')}>
                                            <Icon icon={'IconChartPie3'} />
                                            Dashboard
                                        </Link>
                                    </li>
                                    <Separator className='!my-4' />
                                    <li>
                                        <Link href={route('profile.index')} className={classNames(route().current('profile*') ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6')}>
                                            <Icon icon={'IconSettings'} />
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={route('security.index')} className={classNames(route().current('security*') ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6')}>
                                            <Icon icon={'IconShieldLock'} />
                                            Security
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={route('danger.index')} className={classNames(route().current('danger*') ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6')}>
                                            <Icon icon={'IconShieldLock'} />
                                            Danger zone
                                        </Link>
                                    </li>
                                </ul>
                            </li>
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
                                <button type='button' className='-m-2.5 p-2.5 text-gray-400 hover:text-gray-500'>
                                    <span className='sr-only'>View notifications</span>
                                    <Icon icon={'IconBell'} />
                                </button>
                                <div aria-hidden='true' className='hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200' />
                                <Menu as='div' className='relative'>
                                    <Menu.Button className='-m-1.5 flex items-center p-1.5'>
                                        <span className='sr-only'>Open user menu</span>
                                        <img alt='' src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' className='h-8 w-8 rounded-full bg-gray-50' />
                                        <span className='hidden lg:flex lg:items-center'>
                                            <span aria-hidden='true' className='ml-4 text-sm font-semibold leading-6 text-gray-900'>
                                                {auth.user.name}
                                            </span>
                                            {/* <ChevronDownIcon aria-hidden='true' className='ml-2 h-5 w-5 text-gray-400' /> */}
                                        </span>
                                    </Menu.Button>
                                    <Menu.Items transition className='absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'>
                                        <Menu.Item>
                                            <Link
                                                as='button' method='post' href={route('logout')}
                                                className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                                            >Logout</Link>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
                <main className='py-10'>
                    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>{children}</div>
                </main>
            </div>
            {/* <p>Test</p> */}
        </>
    );
}
