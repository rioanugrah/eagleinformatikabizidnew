import AppLayout from '@/Layouts/appLayout';
import { Fragment, useEffect, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, Popover, PopoverButton, PopoverGroup, PopoverPanel, Radio, RadioGroup, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Bars3Icon, MagnifyingGlassIcon, QuestionMarkCircleIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon, ChevronDownIcon, TrashIcon } from '@heroicons/react/20/solid';
import CardItem from './cardItem';
import { router } from '@inertiajs/react';

export default function Checkout(props, { initialItems }) {
    const paymentMethod = props.channels;

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(paymentMethod[0]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);

    const format_currency = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(number);
    };

    const initialState = props.invoice.invoice_details;
    const [items, setItems] = useState(initialState || initialItems);
    const [count, setCount] = useState(0);

    useEffect(() => {
        JSON.stringify(items);
        // localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    const updateQty = (id, newQty) => {
        const newItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: newQty };
            }
            return item;
        });
        setItems(newItems);
        // console.log(id+" "+newQty);
    };
    const ppn = '11%';
    const total = items.reduce((total, item) => total + item.quantity * item.amount, 0);
    const hitung_ppn = 0.11 * total;
    // const hitung_ppn = ((0.11 * 0.1)*(total+selectedPaymentMethod.total_fee.flat));
    // const sub_total = total;
    const sub_total = total + hitung_ppn;
    // const sub_total = total + hitung_ppn + selectedPaymentMethod.total_fee.flat;

    const handlerSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        router.post(
            route('order.buy.checkout',props.invoice.id),
            {
                invoice_id: props.invoice.id,
                items: items,
                // amount: sub_total,
                firstName: firstName,
                lastName: lastName,
                email: email,
                company: company,
                address: address,
                city: city,
                country: country,
                state: state,
                postal_code: postalCode,
                phone: phone,
                method: selectedPaymentMethod.code,
                tax: hitung_ppn,
                admin_fee: selectedPaymentMethod.total_fee.flat,
                sub_total: sub_total,
                status: 'UNPAID',
            },
            {
                onFinish: (response) => {
                    setLoading(false);
                    // window.open(response);
                    console.log(response);
                    // alert('ok');
                },
            },
        );
    };
    return (
        <main className='mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:max-w-none'>
                <h1 className='text-lg font-medium text-gray-900'>Checkout</h1>
                <form onSubmit={handlerSubmit} className='lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16'>
                    <div>
                        <div className='border-t border-gray-200 pt-10'>
                            <h2 className='text-lg font-medium text-gray-900'>Shipping information</h2>

                            <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4'>
                                <div>
                                    <label htmlFor='first-name' className='block text-sm font-medium text-gray-700'>
                                        First name
                                    </label>
                                    <div className='mt-1'>
                                        <input id='first-name' type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} autoComplete='first-name' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor='last-name' className='block text-sm font-medium text-gray-700'>
                                        Last name
                                    </label>
                                    <div className='mt-1'>
                                        <input id='last-name' type='text' value={lastName} onChange={(e) => setlastName(e.target.value)} autoComplete='last-name' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                    </div>
                                </div>

                                <div className='sm:col-span-2'>
                                    <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                                        Email
                                    </label>
                                    <div className='mt-1'>
                                        <input id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                    </div>
                                </div>

                                <div className='sm:col-span-2'>
                                    <label htmlFor='company' className='block text-sm font-medium text-gray-700'>
                                        Company
                                    </label>
                                    <div className='mt-1'>
                                        <input id='company' type='text' value={company} onChange={(e) => setCompany(e.target.value)} className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                    </div>
                                </div>

                                <div className='sm:col-span-2'>
                                    <label htmlFor='address' className='block text-sm font-medium text-gray-700'>
                                        Address
                                    </label>
                                    <div className='mt-1'>
                                        <input id='address' value={address} onChange={(e) => setAddress(e.target.value)} type='text' autoComplete='street-address' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor='city' className='block text-sm font-medium text-gray-700'>
                                        City
                                    </label>
                                    <div className='mt-1'>
                                        <input id='city' type='text' value={city} onChange={(e) => setCity(e.target.value)} autoComplete='address-level2' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor='country' className='block text-sm font-medium text-gray-700'>
                                        Country
                                    </label>
                                    <div className='mt-1'>
                                        <select id='country' value={country} onChange={(e) => setCountry(e.target.value)} autoComplete='country-name' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'>
                                            <option>Select Country</option>
                                            <option>English</option>
                                            <option>Indonesia</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor='region' className='block text-sm font-medium text-gray-700'>
                                        State / Province
                                    </label>
                                    <div className='mt-1'>
                                        <input id='region' type='text' value={state} onChange={(e) => setState(e.target.value)} autoComplete='address-level1' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor='postal-code' className='block text-sm font-medium text-gray-700'>
                                        Postal code
                                    </label>
                                    <div className='mt-1'>
                                        <input id='postal-code' type='text' value={postalCode} onChange={(e) => setPostalCode(e.target.value)} autoComplete='postal-code' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                    </div>
                                </div>

                                <div className='sm:col-span-2'>
                                    <label htmlFor='phone' className='block text-sm font-medium text-gray-700'>
                                        Phone
                                    </label>
                                    <div className='mt-1'>
                                        <input id='phone' type='number' value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete='tel' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10 border-t border-gray-200 pt-10'>
                            <h2 className='text-lg font-medium text-gray-900'>Payment Method</h2>
                            <fieldset className='mt-4'>
                                <RadioGroup value={selectedPaymentMethod} onChange={setSelectedPaymentMethod} className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4'>
                                    {paymentMethod.map((payment, i) => (
                                        <Radio key={payment.code} value={payment} aria-label={payment.name} className='group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none data-[checked]:border-transparent data-[focus]:ring-2 data-[focus]:ring-indigo-500'>
                                            <span className='flex flex-1'>
                                                <span className='flex flex-col'>
                                                    <img src={payment.icon_url} className='h-18 w-9' />
                                                    <span className='block text-sm font-medium text-gray-900'>{payment.name}</span>
                                                    <span className='mt-1 flex items-center text-sm text-gray-500'>{payment.group}</span>
                                                    <span className='mt-6 text-sm font-medium text-gray-900'>{format_currency(payment.total_fee.flat)}</span>
                                                </span>
                                            </span>
                                            <CheckCircleIcon aria-hidden='true' className='h-5 w-5 text-indigo-600 [.group:not([data-checked])_&]:hidden' />
                                            <span aria-hidden='true' className='pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500' />
                                        </Radio>
                                    ))}
                                </RadioGroup>
                            </fieldset>
                        </div>
                    </div>

                    <div className='mt-10 lg:mt-0'>
                        <h2 className='text-lg font-medium text-gray-900'>Order Summary</h2>
                        <div className='mt-4 rounded-lg border border-gray-200 bg-white shadow-sm'>
                            <ul role='list' className='divide-y divide-gray-200'>
                                {items.map((item) => (
                                    // <li key={invoice_detail.id} className='flex px-4 py-6 sm:px-6'>
                                    //     <div className='ml-6 flex flex-1 flex-col'>
                                    //         <div className='flex'>
                                    //             <div className='min-w-0 flex-1'>
                                    //                 <h4 className='text-sm'>
                                    //                     <a className='font-medium text-gray-700 hover:text-gray-800'>{invoice_detail.item.split('|')[1]}</a>
                                    //                 </h4>
                                    //                 {/* <p className='mt-1 text-sm text-gray-500'>{product.color}</p>
                                    //                 <p className='mt-1 text-sm text-gray-500'>{product.size}</p> */}
                                    //             </div>
                                    //             <div className='ml-4 flow-root flex-shrink-0'>
                                    //                 <button type='button' className='-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500'>
                                    //                     <span className='sr-only'>Remove</span>
                                    //                     <TrashIcon aria-hidden='true' className='h-5 w-5' />
                                    //                 </button>
                                    //             </div>
                                    //         </div>
                                    //         <div className='flex flex-1 items-end justify-between pt-2'>
                                    //             <p className='mt-1 text-sm font-medium text-gray-900'>{format_currency(invoice_detail.amount)}</p>

                                    //             <div className='ml-4'>
                                    //                 <label htmlFor='quantity' className='sr-only'>
                                    //                     Quantity
                                    //                 </label>
                                    //                 <select key={invoice_detail.id} {...invoice_detail} id='quantity' onChange={(e) => selectQuantity(e.target.value)} className='rounded-md border border-gray-300 text-left text-base font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm'>
                                    //                     <option value={1}>1</option>
                                    //                     <option value={2}>2</option>
                                    //                     <option value={3}>3</option>
                                    //                     <option value={4}>4</option>
                                    //                     <option value={5}>5</option>
                                    //                     <option value={6}>6</option>
                                    //                     <option value={7}>7</option>
                                    //                     <option value={8}>8</option>
                                    //                 </select>
                                    //             </div>
                                    //         </div>
                                    //     </div>
                                    // </li>
                                    <CardItem key={item.id} {...item} updateQty={updateQty} />
                                ))}
                            </ul>
                            <dl className='space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6'>
                                <div className='flex items-center justify-between'>
                                    <dt className='text-sm'>Subtotal</dt>
                                    <dd className='text-sm font-medium text-gray-900'>{format_currency(total)}</dd>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <dt className='text-sm'>Taxes {ppn}</dt>
                                    <dd className='text-sm font-medium text-gray-900'>{format_currency(hitung_ppn)}</dd>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <dt className='text-sm'>Admin Fee</dt>
                                    <dd className='text-sm font-medium text-gray-900'>{format_currency(selectedPaymentMethod.total_fee.flat)}</dd>
                                </div>
                                <div className='flex items-center justify-between border-t border-gray-200 pt-6'>
                                    <dt className='text-base font-medium'>Total</dt>
                                    <dd className='text-base font-medium text-gray-900'>{format_currency(sub_total)}</dd>
                                </div>
                            </dl>
                            <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
                                {
                                    loading ?
                                    <button type='button' className='w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50'>
                                        Loading...
                                    </button>
                                    :
                                    <button type='submit' className='w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50'>
                                        Confirm Order
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}
Checkout.layout = (page) => <AppLayout title={'Order Cart'} children={page} />;
