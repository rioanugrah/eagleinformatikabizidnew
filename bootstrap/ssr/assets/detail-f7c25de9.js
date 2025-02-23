import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { A as AppLayout } from "./appLayout-0fe2a5ed.js";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
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
function Detail(props) {
  useState(false);
  const order = props.order;
  const billing_buyer = JSON.parse(props.order.payment.billing_buyer);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Head,
      {
        title: "Order Code : " + order.order_code
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "px-4 sm:px-0", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-base/7 font-semibold text-gray-900", children: [
        "Order Code : #",
        order.order_code,
        " ",
        order.payment.status == "PAID" ? /* @__PURE__ */ jsx("span", { class: "me-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300", children: order.payment.status }) : order.payment.status == "UNPAID" ? /* @__PURE__ */ jsx("span", { class: "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300", children: order.payment.status }) : /* @__PURE__ */ jsx("span", { class: "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300", children: order.payment.status })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 max-w-2xl text-sm/6 text-gray-500", children: "Personal Order." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 border-t border-gray-100", children: [
      /* @__PURE__ */ jsx("dl", { className: "divide-y divide-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Order Code" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: order.order_code })
      ] }) }),
      /* @__PURE__ */ jsxs("dl", { className: "divide-y divide-gray-100", children: [
        /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
          /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Billing Name" }),
          /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: billing_buyer.first_name + " " + billing_buyer.last_name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
          /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Billing Address" }),
          /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: billing_buyer.address })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
          /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Billing Email" }),
          /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: billing_buyer.email })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
          /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Billing Phone" }),
          /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: billing_buyer.phone })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
          /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Tax" }),
          /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: order.tax })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
          /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Total" }),
          /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: order.total })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
          /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Created At" }),
          /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: order.created_at })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Link, { href: route("order.index"), className: "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700", children: "Back" })
  ] });
}
Detail.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { title: "Order Detail", children: page });
export {
  Detail as default
};
