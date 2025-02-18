import AppLayout from '@/Layouts/appLayout';
import { router, useForm, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import CardItem from './cardItem';
import Swal from 'sweetalert2';

export default function Index(props, { initialItems }) {
    const { errors, auth } = usePage().props;
    // const [first_name, setFirstName] = useState('');
    // const [last_name, setlastName] = useState('');
    // const [email, setEmail] = useState('');
    // const [company, setCompany] = useState('');
    // const [address, setAddress] = useState('');
    // const [city, setCity] = useState('');
    // const [country, setCountry] = useState('');
    // const [state, setState] = useState('');
    // const [postal_code, setPostalCode] = useState('');
    // const [phone, setPhone] = useState('');

    const [loading, setLoading] = useState(false);

    const format_currency = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(number);
    };

    const initialState = props.cart.cart_items;
    // console.log(initialState);
    const [items, setItems] = useState(initialState || initialItems);

    useEffect(() => {
        JSON.stringify(items);
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

    const ppn = `(${props.ppn.ppn_name})`;
    const total = items.reduce((total, item) => total + item.quantity * item.price, 0);
    const hitung_ppn = props.ppn.ppn_nominal * total;
    // const hitung_ppn = ((0.11 * 0.1)*(total+selectedPaymentMethod.total_fee.flat));
    // const sub_total = total;
    const sub_total = total + hitung_ppn;

    // console.log(sub_total);

    const { data, setData, post } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        company: '',
        address: '',
        city: '',
        country: '',
        // state: '',
        postal_code: '',
        phone: '',
        // ppn: hitung_ppn,
        // items: items,
        // subTotal: sub_total,
    });

    // console.log(data);

    const handlerSubmit = (e) => {
        e.preventDefault();
        // alert(data.subTotal);
        // setLoading(true);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Confirm!"
        }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });

                router.post(
                    route('cart.buy',props.cart.id),
                    {
                        first_name: data.first_name,
                        last_name: data.last_name,
                        email: data.email,
                        company: data.company,
                        address: data.address,
                        city: data.city,
                        country: data.country,
                        postal_code: data.postal_code,
                        phone: data.phone,
                        ppn: hitung_ppn,
                        items: items,
                        subTotal: sub_total,
                    },
                    {
                        onFinish: (response) => {
                            setLoading(false);
                            // window.open(response);
                            // console.log(response);
                            // alert('ok');
                        },
                    },
                );

            }else{
                setLoading(false);
            }
        });
    };

    return (
        <main className='mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:max-w-none'>
                <h1 className='text-lg font-medium text-gray-900'>Checkout</h1>
                <form onSubmit={handlerSubmit} className='lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16'>
                    <div>
                        <div className='border-t border-gray-200 pt-10'>
                            <h2 className='text-lg font-medium text-gray-900'>Shipping information</h2>
                            <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4'>
                                <div>
                                    <label htmlFor='first-name' className='block text-sm font-medium text-gray-700'>
                                        First Name
                                    </label>
                                    {loading ? (
                                        <div className='mt-1'>
                                            <input id='first-name' type='text' readOnly value={data.first_name} onChange={(e) => setData('first_name', e.target.value)} autoComplete='first-name' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                        </div>
                                    ) : (
                                        <div className='mt-1'>
                                            <input id='first-name' type='text' placeholder='First Name' value={data.first_name} onChange={(e) => setData('first_name', e.target.value)} autoComplete='first-name' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                        </div>
                                    )}
                                    {errors.first_name && <p className='mt-2 text-sm text-red-500 dark:text-red-400'>{errors.first_name}</p>}
                                </div>
                                <div>
                                    <label htmlFor='last-name' className='block text-sm font-medium text-gray-700'>
                                        Last Name
                                    </label>
                                    {loading ? (
                                        <div className='mt-1'>
                                            <input id='last-name' type='text' readOnly value={data.last_name} onChange={(e) => setData('last_name', e.target.value)} autoComplete='first-name' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                        </div>
                                    ) : (
                                        <div className='mt-1'>
                                            <input id='last-name' type='text' placeholder='Last Name' value={data.last_name} onChange={(e) => setData('last_name', e.target.value)} autoComplete='first-name' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                        </div>
                                    )}
                                    {errors.last_name && <p className='mt-2 text-sm text-red-500 dark:text-red-400'>{errors.last_name}</p>}
                                </div>
                                <div>
                                    <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                                        Email
                                    </label>
                                    {loading ? (
                                        <div className='mt-1'>
                                            <input id='email' type='email' readOnly value={data.email} onChange={(e) => setData('email', e.target.value)} autoComplete='email' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                        </div>
                                    ) : (
                                        <div className='mt-1'>
                                            <input id='email' type='email' placeholder='Email' value={data.email} onChange={(e) => setData('email', e.target.value)} autoComplete='email' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                        </div>
                                    )}
                                    {errors.email && <p className='mt-2 text-sm text-red-500 dark:text-red-400'>{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor='company' className='block text-sm font-medium text-gray-700'>
                                        Company
                                    </label>
                                    {loading ? (
                                        <div className='mt-1'>
                                            <input id='company' type='text' readOnly value={data.company} onChange={(e) => setData('company', e.target.value)} autoComplete='company' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                        </div>
                                    ) : (
                                        <div className='mt-1'>
                                            <input id='company' type='text' placeholder='Company' value={data.company} onChange={(e) => setData('company', e.target.value)} autoComplete='company' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                        </div>
                                    )}
                                    {errors.company && <p className='mt-2 text-sm text-red-500 dark:text-red-400'>{errors.company}</p>}
                                </div>
                                <div>
                                    <label htmlFor='address' className='block text-sm font-medium text-gray-700'>
                                        Address
                                    </label>
                                    {loading ? (
                                        <div className='mt-1'>
                                            <textarea readOnly value={data.address} onChange={(e) => setData('address', e.target.value)} className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id=""></textarea>
                                            {/* <input id='address' type='text' readOnly value={data.address} onChange={(e) => setData('address', e.target.value)} autoComplete='address' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' /> */}
                                        </div>
                                    ) : (
                                        <div className='mt-1'>
                                            <textarea value={data.address} onChange={(e) => setData('address', e.target.value)} className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id=""></textarea>
                                            {/* <input id='address' type='text' placeholder='Address' value={data.address} onChange={(e) => setData('address', e.target.value)} autoComplete='address' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' /> */}
                                        </div>
                                    )}
                                    {errors.address && <p className='mt-2 text-sm text-red-500 dark:text-red-400'>{errors.address}</p>}
                                </div>
                                <div>
                                    <label htmlFor='city' className='block text-sm font-medium text-gray-700'>
                                        City
                                    </label>
                                    {loading ? (
                                        <div className='mt-1'>
                                            <input id='city' type='text' readOnly value={data.city} onChange={(e) => setData('city', e.target.value)} autoComplete='city' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                        </div>
                                    ) : (
                                        <div className='mt-1'>
                                            <input id='city' type='text' placeholder='City' value={data.city} onChange={(e) => setData('city', e.target.value)} autoComplete='city' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                        </div>
                                    )}
                                    {errors.city && <p className='mt-2 text-sm text-red-500 dark:text-red-400'>{errors.company}</p>}
                                </div>
                                <div>
                                    <label htmlFor='country' className='block text-sm font-medium text-gray-700'>
                                        Country
                                    </label>
                                    {loading ? (
                                        <div className='mt-1'>
                                            <input id='country' type='text' readOnly value={data.country} onChange={(e) => setData('country', e.target.value)} autoComplete='country' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                        </div>
                                    ) : (
                                        <div className='mt-1'>
                                            <input id='country' type='text' placeholder='Country' value={data.country} onChange={(e) => setData('country', e.target.value)} autoComplete='country' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                        </div>
                                    )}
                                    {errors.country && <p className='mt-2 text-sm text-red-500 dark:text-red-400'>{errors.country}</p>}
                                </div>
                                <div>
                                    <label htmlFor='postal_code' className='block text-sm font-medium text-gray-700'>
                                        Postal Code
                                    </label>
                                    {loading ? (
                                        <div className='mt-1'>
                                            <input id='postal_code' type='number' readOnly value={data.postal_code} onChange={(e) => setData('postal_code', e.target.value)} autoComplete='postal_code' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                        </div>
                                    ) : (
                                        <div className='mt-1'>
                                            <input id='postal_code' type='number' placeholder='Postal Code' value={data.postal_code} onChange={(e) => setData('postal_code', e.target.value)} autoComplete='postal_code' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                        </div>
                                    )}
                                    {errors.postal_code && <p className='mt-2 text-sm text-red-500 dark:text-red-400'>{errors.postal_code}</p>}
                                </div>
                                <div>
                                    <label htmlFor='phone' className='block text-sm font-medium text-gray-700'>
                                        Phone
                                    </label>
                                    {loading ? (
                                        <div className='mt-1'>
                                            <input id='phone' type='number' readOnly value={data.phone} onChange={(e) => setData('phone', e.target.value)} autoComplete='phone' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                        </div>
                                    ) : (
                                        <div className='mt-1'>
                                            <input id='phone' type='number' placeholder='Phone' value={data.phone} onChange={(e) => setData('phone', e.target.value)} autoComplete='phone' className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                        </div>
                                    )}
                                    {errors.phone && <p className='mt-2 text-sm text-red-500 dark:text-red-400'>{errors.phone}</p>}
                                </div>
                            </div>
                            <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4'>

                            </div>
                        </div>
                    </div>

                    <div className='mt-10 lg:mt-0'>
                        <h2 className='text-lg font-medium text-gray-900'>Order Summary</h2>
                        <div className='mt-4 rounded-lg border border-gray-200 bg-white shadow-sm'>
                            <ul role='list' className='divide-y divide-gray-200'>
                                {items.map((item) => (
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
                                {/* <div className='flex items-center justify-between'>
                                    <dt className='text-sm'>Admin Fee</dt>
                                    <dd className='text-sm font-medium text-gray-900'>{format_currency(selectedPaymentMethod.total_fee.flat)}</dd>
                                </div> */}
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
Index.layout = (page) => <AppLayout title={'Cart Detail'} children={page} />;
