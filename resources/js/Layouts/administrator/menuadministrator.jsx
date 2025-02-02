import { Icon } from '@/components/icon';
import { Separator } from '@/components/separator';
import { Link } from '@inertiajs/react';

export default function MenuAdministrator() {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }
    return (
        <li>
            <ul role='list' className='-mx-2 space-y-1'>
                <li>
                    <Link href={route('dashboard')} className={classNames(route().current('dashboard') ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6')}>
                        <Icon icon={'IconChartPie3'} />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link href={route('order.index')} className={classNames(route().current('order*') ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6')}>
                        <Icon icon={'IconChartPie3'} />
                        Order
                    </Link>
                </li>
                <Separator className='!my-4' />
                <li>
                    <span className='text-sm'>Categories</span>
                </li>
                <li>
                    <Link href={route('categories.index')} className={classNames(route().current('categories*') ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6')}>
                        <Icon icon={'IconChartPie3'} />
                        Category
                    </Link>
                </li>
                <li>
                    <span className='text-sm'>Products</span>
                </li>
                <li>
                    <Link href={route('products.index')} className={classNames(route().current('products*') ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6')}>
                        <Icon icon={'IconChartPie3'} />
                        Products
                    </Link>
                </li>
                {/* <li>
                    <Link href={route('websites.index')} className={classNames(route().current('websites*') ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6')}>
                        <Icon icon={'IconChartPie3'} />
                        Websites
                    </Link>
                </li> */}
                <Separator className='!my-4' />
                <li>
                    <span className='text-sm'>Payment</span>
                </li>
                <li>
                    <Link href={route('billing.index')} className={classNames(route().current('billing.index*') ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6')}>
                        <Icon icon={'IconChartPie3'} />
                        Billing
                    </Link>
                </li>
                <Separator className='!my-4' />
                <li>
                    <span className='text-sm'>Management</span>
                </li>
                <li>
                    <Link href={route('ppns.index')} className={classNames(route().current('ppns.index*') ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6')}>
                        <Icon icon={'IconChartPie3'} />
                        PPN
                    </Link>
                </li>
                <li>
                    <Link href={route('permissions.index')} className={classNames(route().current('permissions*') ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6')}>
                        <Icon icon={'IconChartPie3'} />
                        Permissions
                    </Link>
                </li>
                <li>
                    <Link href={route('roles.index')} className={classNames(route().current('roles*') ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6')}>
                        <Icon icon={'IconChartPie3'} />
                        Roles
                    </Link>
                </li>
                <li>
                    <Link href={route('users.index')} className={classNames(route().current('users*') ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6')}>
                        <Icon icon={'IconChartPie3'} />
                        Users
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
    );
}
