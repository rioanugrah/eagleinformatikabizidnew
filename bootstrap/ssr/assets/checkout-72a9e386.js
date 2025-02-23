import { jsx, jsxs } from "react/jsx-runtime";
import { A as AppLayout } from "./appLayout-0fe2a5ed.js";
import { useState, useEffect } from "react";
import CardItem from "./cardItem-4c5e849e.js";
import { usePage, router } from "@inertiajs/react";
import Swal from "sweetalert2";
import "./icon-9d04f58e.js";
import "./utils-efa289ef.js";
import "clsx";
import "tailwind-merge";
import "@tabler/icons-react";
import "./separator-4854cb3c.js";
import "@radix-ui/react-separator";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "./menuadministrator-9d83b4a9.js";
import "./menuUser-b5f13189.js";
import "react-toastify";
import "./LogoSubEagleMediaInformatika-b47f6c73.js";
import "axios";
import "@heroicons/react/20/solid";
function Checkout(props, { initialItems }) {
  const { errors, auth } = usePage().props;
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
  const ppn = `(${props.ppn.ppn_name})`;
  const total = items.reduce((total2, item) => total2 + item.quantity * item.amount, 0);
  const hitung_ppn = props.ppn.ppn_nominal * total;
  const sub_total = total + hitung_ppn;
  const handlerSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
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
            // method: selectedPaymentMethod.code,
            tax: hitung_ppn,
            // admin_fee: selectedPaymentMethod.total_fee.flat,
            sub_total,
            status: "UNPAID"
          },
          {
            onFinish: (response) => {
              setLoading(false);
            }
          }
        );
      } else {
        setLoading(false);
      }
    });
  };
  return /* @__PURE__ */ jsx("main", { className: "mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl lg:max-w-none", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-lg font-medium text-gray-900", children: "Checkout" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handlerSubmit, className: "lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-200 pt-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Shipping information" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "first-name", className: "block text-sm font-medium text-gray-700", children: "First name" }),
            loading ? /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "first-name", type: "text", readOnly: true, value: firstName, onChange: (e) => setFirstName(e.target.value), autoComplete: "first-name", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }) : /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "first-name", type: "text", value: firstName, onChange: (e) => setFirstName(e.target.value), autoComplete: "first-name", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }),
            errors.firstName && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.firstName })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "last-name", className: "block text-sm font-medium text-gray-700", children: "Last name" }),
            loading ? /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "last-name", type: "text", readOnly: true, value: lastName, onChange: (e) => setlastName(e.target.value), autoComplete: "last-name", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }) : /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "last-name", type: "text", value: lastName, onChange: (e) => setlastName(e.target.value), autoComplete: "last-name", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }),
            errors.lastName && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.lastName })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700", children: "Email" }),
            loading ? /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "email", type: "email", readOnly: true, value: email, onChange: (e) => setEmail(e.target.value), className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }) : /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }),
            errors.email && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.email })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "company", className: "block text-sm font-medium text-gray-700", children: "Company" }),
            loading ? /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "company", type: "text", readOnly: true, value: company, onChange: (e) => setCompany(e.target.value), className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }) : /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "company", type: "text", value: company, onChange: (e) => setCompany(e.target.value), className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }),
            errors.company && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.company })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "address", className: "block text-sm font-medium text-gray-700", children: "Address" }),
            loading ? /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "address", value: address, readOnly: true, onChange: (e) => setAddress(e.target.value), type: "text", autoComplete: "street-address", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }) : /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "address", value: address, onChange: (e) => setAddress(e.target.value), type: "text", autoComplete: "street-address", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }),
            errors.address && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.address })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "city", className: "block text-sm font-medium text-gray-700", children: "City" }),
            loading ? /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "city", type: "text", value: city, onChange: (e) => setCity(e.target.value), autoComplete: "address-level2", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }) : /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "city", type: "text", value: city, onChange: (e) => setCity(e.target.value), autoComplete: "address-level2", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }),
            errors.city && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.city })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "country", className: "block text-sm font-medium text-gray-700", children: "Country" }),
            /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsxs("select", { id: "country", value: country, onChange: (e) => setCountry(e.target.value), autoComplete: "country-name", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500", children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "Select Country" }),
              /* @__PURE__ */ jsx("option", { value: "English", children: "English" }),
              /* @__PURE__ */ jsx("option", { value: "Indonesia", children: "Indonesia" })
            ] }) }),
            errors.country && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.country })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "region", className: "block text-sm font-medium text-gray-700", children: "State / Province" }),
            loading ? /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "region", type: "text", readOnly: true, value: state, onChange: (e) => setState(e.target.value), autoComplete: "address-level1", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }) : /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "region", type: "text", value: state, onChange: (e) => setState(e.target.value), autoComplete: "address-level1", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }),
            errors.state && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.state })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "postal-code", className: "block text-sm font-medium text-gray-700", children: "Postal code" }),
            loading ? /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "postal-code", readOnly: true, type: "text", value: postalCode, onChange: (e) => setPostalCode(e.target.value), autoComplete: "postal-code", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }) : /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "postal-code", type: "text", value: postalCode, onChange: (e) => setPostalCode(e.target.value), autoComplete: "postal-code", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }),
            errors.postal_code && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.postal_code })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-700", children: "Phone" }),
            loading ? /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "phone", type: "number", readOnly: true, value: phone, onChange: (e) => setPhone(e.target.value), autoComplete: "tel", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }) : /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "phone", type: "number", value: phone, onChange: (e) => setPhone(e.target.value), autoComplete: "tel", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }),
            errors.phone && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.phone })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 lg:mt-0", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Order Summary" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 rounded-lg border border-gray-200 bg-white shadow-sm", children: [
          /* @__PURE__ */ jsx("ul", { role: "list", className: "divide-y divide-gray-200", children: items.map((item) => /* @__PURE__ */ jsx(CardItem, { ...item, updateQty }, item.id)) }),
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
