import { jsx, jsxs } from "react/jsx-runtime";
import { I as Index$1 } from "./appLayout-b1eea15e.js";
import { usePage, useForm, router } from "@inertiajs/react";
import { useState, useEffect } from "react";
import CardItem from "./cardItem-e78889af.js";
import Swal from "sweetalert2";
import "./icon-9d04f58e.js";
import "./utils-efa289ef.js";
import "clsx";
import "tailwind-merge";
import "@tabler/icons-react";
import "react-toastify";
import "axios";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "./LogoSubEagleMediaInformatika-b47f6c73.js";
import "./separator-4854cb3c.js";
import "@radix-ui/react-separator";
import "@heroicons/react/20/solid";
function Index(props, { initialItems }) {
  const { errors, auth } = usePage().props;
  const [loading, setLoading] = useState(false);
  const format_currency = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  };
  const initialState = props.cart.cart_items;
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
  };
  const ppn = `(${props.ppn.ppn_name})`;
  const total = items.reduce((total2, item) => total2 + item.quantity * item.price, 0);
  const hitung_ppn = props.ppn.ppn_nominal * total;
  const sub_total = total + hitung_ppn;
  const { data, setData, post } = useForm({
    first_name: "",
    last_name: "",
    email: "",
    company: "",
    address: "",
    city: "",
    country: "",
    // state: '',
    postal_code: "",
    phone: ""
    // ppn: hitung_ppn,
    // items: items,
    // subTotal: sub_total,
  });
  const handlerSubmit = (e) => {
    e.preventDefault();
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
          route("cart.buy", props.cart.id),
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
            items,
            subTotal: sub_total
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
  return /* @__PURE__ */ jsx("main", { className: "mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl lg:max-w-none", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-lg font-medium text-gray-900", children: "Checkout" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handlerSubmit, className: "lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-200 pt-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Shipping information" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "first-name", className: "block text-sm font-medium text-gray-700", children: "First Name" }),
            loading ? /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "first-name", type: "text", readOnly: true, value: data.first_name, onChange: (e) => setData("first_name", e.target.value), autoComplete: "first-name", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }) : /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "first-name", type: "text", placeholder: "First Name", value: data.first_name, onChange: (e) => setData("first_name", e.target.value), autoComplete: "first-name", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }),
            errors.first_name && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.first_name })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "last-name", className: "block text-sm font-medium text-gray-700", children: "Last Name" }),
            loading ? /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "last-name", type: "text", readOnly: true, value: data.last_name, onChange: (e) => setData("last_name", e.target.value), autoComplete: "first-name", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }) : /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "last-name", type: "text", placeholder: "Last Name", value: data.last_name, onChange: (e) => setData("last_name", e.target.value), autoComplete: "first-name", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }),
            errors.last_name && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.last_name })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700", children: "Email" }),
            loading ? /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "email", type: "email", readOnly: true, value: data.email, onChange: (e) => setData("email", e.target.value), autoComplete: "email", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }) : /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "email", type: "email", placeholder: "Email", value: data.email, onChange: (e) => setData("email", e.target.value), autoComplete: "email", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }),
            errors.email && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.email })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "company", className: "block text-sm font-medium text-gray-700", children: "Company" }),
            loading ? /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "company", type: "text", readOnly: true, value: data.company, onChange: (e) => setData("company", e.target.value), autoComplete: "company", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }) : /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "company", type: "text", placeholder: "Company", value: data.company, onChange: (e) => setData("company", e.target.value), autoComplete: "company", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }),
            errors.company && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.company })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "address", className: "block text-sm font-medium text-gray-700", children: "Address" }),
            loading ? /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("textarea", { readOnly: true, value: data.address, onChange: (e) => setData("address", e.target.value), className: "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", id: "" }) }) : /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("textarea", { value: data.address, onChange: (e) => setData("address", e.target.value), className: "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", id: "" }) }),
            errors.address && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.address })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "city", className: "block text-sm font-medium text-gray-700", children: "City" }),
            loading ? /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "city", type: "text", readOnly: true, value: data.city, onChange: (e) => setData("city", e.target.value), autoComplete: "city", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }) : /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "city", type: "text", placeholder: "City", value: data.city, onChange: (e) => setData("city", e.target.value), autoComplete: "city", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }),
            errors.city && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.company })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "country", className: "block text-sm font-medium text-gray-700", children: "Country" }),
            loading ? /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "country", type: "text", readOnly: true, value: data.country, onChange: (e) => setData("country", e.target.value), autoComplete: "country", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }) : /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "country", type: "text", placeholder: "Country", value: data.country, onChange: (e) => setData("country", e.target.value), autoComplete: "country", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }),
            errors.country && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.country })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "postal_code", className: "block text-sm font-medium text-gray-700", children: "Postal Code" }),
            loading ? /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "postal_code", type: "number", readOnly: true, value: data.postal_code, onChange: (e) => setData("postal_code", e.target.value), autoComplete: "postal_code", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }) : /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "postal_code", type: "number", placeholder: "Postal Code", value: data.postal_code, onChange: (e) => setData("postal_code", e.target.value), autoComplete: "postal_code", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }),
            errors.postal_code && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.postal_code })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-700", children: "Phone" }),
            loading ? /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "phone", type: "number", readOnly: true, value: data.phone, onChange: (e) => setData("phone", e.target.value), autoComplete: "phone", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }) : /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("input", { id: "phone", type: "number", placeholder: "Phone", value: data.phone, onChange: (e) => setData("phone", e.target.value), autoComplete: "phone", className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }) }),
            errors.phone && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.phone })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4" })
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
Index.layout = (page) => /* @__PURE__ */ jsx(Index$1, { title: "Cart Detail", children: page });
export {
  Index as default
};
