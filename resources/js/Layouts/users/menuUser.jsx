import { Icon } from '@/components/icon';
import { Separator } from '@/components/separator';
import { Link } from '@inertiajs/react';

export default function MenuUser() {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <li>
            <ul role='list' className='-mx-2 space-y-1'>
                <li>
                    <Link href={route('dashboard')} className={classNames(route().current('dashboard*') ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6')}>
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
                    <span className='text-sm'>Products</span>
                </li>
                <li>
                    <Link href={route('products.index')} className={classNames(route().current('products*') ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6')}>
                        <Icon icon={'IconChartPie3'} />
                        Products
                    </Link>
                </li>
                <Separator className='!my-4' />
                <li>
                    <Link href={route('transaction')} className={classNames(route().current('transaction*') ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6')}>
                        <Icon icon={'IconChartPie3'} />
                        Transactions
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
