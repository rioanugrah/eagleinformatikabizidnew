import AppLayout from "@/Layouts/users/appLayout";
import { Head, Link } from "@inertiajs/react";

import logo from '../../../../../public/logo/LogoEagleMediaInformatika.webp';

export default function Invoice(props) {
    const invoice = props.order;
    const billing_buyer = JSON.parse(props.order.payment.billing_buyer);
    // const billing_buyer = JSON.stringify(props.order.billing_buyer);
    // console.table(invoice.order_details);
    return (
        <>
        <Head
            title={'Invoice - '+invoice.order_code}
        />
            <div class='mx-auto my-6 max-w-3xl rounded bg-white p-6 shadow-sm' id='invoice'>
                <div class='grid grid-cols-2 items-center'>
                    <div>
                        <img src={logo} alt="" height='100' width='100' />
                        {/* <img src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' alt='company-logo' height='100' width='100' /> */}
                    </div>
                    <div class='text-right'>
                        <p>PT Eagle Media Informatika</p>
                        <p class='text-sm text-gray-500'>marketing@eagleinformatika.biz.id</p>
                        <p class='mt-1 text-sm text-gray-500'>+62 881-0801-78055</p>
                    </div>
                </div>

                <div class='mt-8 grid grid-cols-2 items-center'>
                    <div>
                        <p class='font-bold text-gray-800'>Bill to :</p>
                        <p class='text-gray-500'>
                            {billing_buyer.first_name+' '+billing_buyer.last_name}
                            <br />
                            {billing_buyer.address}
                        </p>
                        <p class='text-gray-500'>{billing_buyer.email}</p>
                    </div>
                    <div class='text-right'>
                        <p class=''>
                            Invoice number:
                            <span class='text-gray-500'>{invoice.payment.billing_code}</span>
                        </p>
                        <p>
                            Invoice date: <span class='text-gray-500'>{invoice.created_at}</span>
                            <br />
                        </p>
                    </div>
                </div>

                <div class='-mx-4 mt-8 flow-root sm:mx-0'>
                    <table class='min-w-full'>
                        <thead class='border-b border-gray-300 text-gray-900'>
                            <tr>
                                <th scope='col' class='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'>
                                    Items
                                </th>
                                <th scope='col' class='hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell'>
                                    Quantity
                                </th>
                                <th scope='col' class='hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell'>
                                    Price
                                </th>
                                <th scope='col' class='py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0'>
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.order.order_details.map((items, i) => (
                                    <tr class='border-b border-gray-200' key={i}>
                                        <td class='max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0'>
                                            <div class='font-medium text-gray-900'>{items.item}</div>
                                        </td>
                                        <td class='hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell'>{items.quantity}</td>
                                        <td class='hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell'>{items.price}</td>
                                        <td class='py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0'>{items.total}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th scope='row' colspan='3' class='hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0'>
                                    Subtotal
                                </th>
                                <th scope='row' class='pl-6 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden'>
                                    Subtotal
                                </th>
                                <td class='pl-3 pr-6 pt-6 text-right text-sm text-gray-500 sm:pr-0'>{invoice.total}</td>
                            </tr>
                            <tr>
                                <th scope='row' colspan='3' class='hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0'>
                                    Tax
                                </th>
                                <th scope='row' class='pl-6 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden'>
                                    Tax
                                </th>
                                <td class='pl-3 pr-6 pt-4 text-right text-sm text-gray-500 sm:pr-0'>{invoice.tax}</td>
                            </tr>
                            {/* <tr>
                                <th scope='row' colspan='3' class='hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0'>
                                    Discount
                                </th>
                                <th scope='row' class='pl-6 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden'>
                                    Discount
                                </th>
                                <td class='pl-3 pr-6 pt-4 text-right text-sm text-gray-500 sm:pr-0'>- 10%</td>
                            </tr> */}
                            <tr>
                                <th scope='row' colspan='3' class='hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0'>
                                    Total
                                </th>
                                <th scope='row' class='pl-6 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden'>
                                    Total
                                </th>
                                <td class='pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0'>{invoice.sub_total}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            <Link href={route('order.index')} className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>Back</Link>
            <Link href={route('invoices.pdf',[invoice.id])} className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>Print</Link>
            </div>

        </>
    );
}

Invoice.layout = (page) => <AppLayout title={'Invoices'} children={page} />;
