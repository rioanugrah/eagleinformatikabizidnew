import { jsx, jsxs } from "react/jsx-runtime";
import { A as AppLayout } from "./appLayout-b051a4d3.js";
import { useState, useEffect } from "react";
import { RadioGroup, Radio } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import CardItem from "./cardItem-4c5e849e.js";
import { router } from "@inertiajs/react";
import "./icon-9d04f58e.js";
import "./utils-efa289ef.js";
import "clsx";
import "tailwind-merge";
import "@tabler/icons-react";
import "./separator-4854cb3c.js";
import "@radix-ui/react-separator";
import "@heroicons/react/24/outline";
import "./menuadministrator-4039c077.js";
import "./menuUser-b5f13189.js";
import "react-toastify";
import "./logo_eagle_media_informatika-fceda23c.js";
function Checkout(props, { initialItems }) {
  const paymentMethod = props.channels;
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(paymentMethod[0]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const format_currency = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  };
  const initialState = props.invoice.invoice_details;
  const [items, setItems] = useState(initialState || initialItems);
  useState(0);
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
  };
  const ppn = "11%";
  const total = items.reduce((total2, item) => total2 + item.quantity * item.amount, 0);
  const hitung_ppn = 0.11 * total;
  const sub_total = total + hitung_ppn;
  const handlerSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    router.post(
      route("order.buy.checkout", props.invoice.id),
      {
        invoice_id: props.invoice.id,
        items,
        // amount: sub_total,
        firstName,
        lastName,
        email,
        company,
        address,
        city,
        country,
        state,
        postal_code: postalCode,
        phone,
        method: selectedPaymentMethod.code,
        tax: hitung_ppn,
        admin_fee: selectedPaymentMethod.total_fee.flat,
        sub_total,
        status: "UNPAID"
      },
      {
        onFinish: (response) => {
          setLoading(false);
          console.log(response);
        }
      }
    );
  };
  return /* @__PURE__ */ jsx("main", { className: "mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl lg:max-w-none", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-lg font-medium text-gray-900", children: "Checkout" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handlerSubmit, className: "lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-200 pt-10", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Shipping information" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "first-name", className: "block text-sm font-medium text-gray-700", children: "First name" }),
              /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "first-name", type: "text", value: firstName, onChange: (e) => setFirstName(e.target.value), autoComplete: "first-name", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "last-name", className: "block text-sm font-medium text-gray-700", children: "Last name" }),
              /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "last-name", type: "text", value: lastName, onChange: (e) => setlastName(e.target.value), autoComplete: "last-name", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700", children: "Email" }),
              /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "company", className: "block text-sm font-medium text-gray-700", children: "Company" }),
              /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "company", type: "text", value: company, onChange: (e) => setCompany(e.target.value), className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "address", className: "block text-sm font-medium text-gray-700", children: "Address" }),
              /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "address", value: address, onChange: (e) => setAddress(e.target.value), type: "text", autoComplete: "street-address", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "city", className: "block text-sm font-medium text-gray-700", children: "City" }),
              /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "city", type: "text", value: city, onChange: (e) => setCity(e.target.value), autoComplete: "address-level2", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "country", className: "block text-sm font-medium text-gray-700", children: "Country" }),
              /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsxs("select", { id: "country", value: country, onChange: (e) => setCountry(e.target.value), autoComplete: "country-name", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500", children: [
                /* @__PURE__ */ jsx("option", { children: "Select Country" }),
                /* @__PURE__ */ jsx("option", { children: "English" }),
                /* @__PURE__ */ jsx("option", { children: "Indonesia" })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "region", className: "block text-sm font-medium text-gray-700", children: "State / Province" }),
              /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "region", type: "text", value: state, onChange: (e) => setState(e.target.value), autoComplete: "address-level1", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "postal-code", className: "block text-sm font-medium text-gray-700", children: "Postal code" }),
              /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "postal-code", type: "text", value: postalCode, onChange: (e) => setPostalCode(e.target.value), autoComplete: "postal-code", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-700", children: "Phone" }),
              /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "phone", type: "number", value: phone, onChange: (e) => setPhone(e.target.value), autoComplete: "tel", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 border-t border-gray-200 pt-10", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Payment Method" }),
          /* @__PURE__ */ jsx("fieldset", { className: "mt-4", children: /* @__PURE__ */ jsx(RadioGroup, { value: selectedPaymentMethod, onChange: setSelectedPaymentMethod, className: "grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4", children: paymentMethod.map((payment, i) => /* @__PURE__ */ jsxs(Radio, { value: payment, "aria-label": payment.name, className: "group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none data-[checked]:border-transparent data-[focus]:ring-2 data-[focus]:ring-indigo-500", children: [
            /* @__PURE__ */ jsx("span", { className: "flex flex-1", children: /* @__PURE__ */ jsxs("span", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsx("img", { src: payment.icon_url, className: "h-18 w-9" }),
              /* @__PURE__ */ jsx("span", { className: "block text-sm font-medium text-gray-900", children: payment.name }),
              /* @__PURE__ */ jsx("span", { className: "mt-1 flex items-center text-sm text-gray-500", children: payment.group }),
              /* @__PURE__ */ jsx("span", { className: "mt-6 text-sm font-medium text-gray-900", children: format_currency(payment.total_fee.flat) })
            ] }) }),
            /* @__PURE__ */ jsx(CheckCircleIcon, { "aria-hidden": "true", className: "h-5 w-5 text-indigo-600 [.group:not([data-checked])_&]:hidden" }),
            /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500" })
          ] }, payment.code)) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 lg:mt-0", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Order Summary" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 rounded-lg border border-gray-200 bg-white shadow-sm", children: [
          /* @__PURE__ */ jsx("ul", { role: "list", className: "divide-y divide-gray-200", children: items.map((item) => (
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
            /* @__PURE__ */ jsx(CardItem, { ...item, updateQty }, item.id)
          )) }),
          /* @__PURE__ */ jsxs("dl", { className: "space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("dt", { className: "text-sm", children: "Subtotal" }),
              /* @__PURE__ */ jsx("dd", { className: "text-sm font-medium text-gray-900", children: format_currency(total) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("dt", { className: "text-sm", children: [
                "Taxes ",
                ppn
              ] }),
              /* @__PURE__ */ jsx("dd", { className: "text-sm font-medium text-gray-900", children: format_currency(hitung_ppn) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("dt", { className: "text-sm", children: "Admin Fee" }),
              /* @__PURE__ */ jsx("dd", { className: "text-sm font-medium text-gray-900", children: format_currency(selectedPaymentMethod.total_fee.flat) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-t border-gray-200 pt-6", children: [
              /* @__PURE__ */ jsx("dt", { className: "text-base font-medium", children: "Total" }),
              /* @__PURE__ */ jsx("dd", { className: "text-base font-medium text-gray-900", children: format_currency(sub_total) })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "border-t border-gray-200 px-4 py-6 sm:px-6", children: loading ? /* @__PURE__ */ jsx("button", { type: "button", className: "w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50", children: "Loading..." }) : /* @__PURE__ */ jsx("button", { type: "submit", className: "w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50", children: "Confirm Order" }) })
        ] })
      ] })
    ] })
  ] }) });
}
Checkout.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { title: "Order Cart", children: page });
export {
  Checkout as default
};
