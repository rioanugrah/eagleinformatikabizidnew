import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { A as AppLayout } from "./appLayout-b051a4d3.js";
import { Link } from "@inertiajs/react";
import "./icon-9d04f58e.js";
import "./utils-efa289ef.js";
import "clsx";
import "tailwind-merge";
import "@tabler/icons-react";
import "react";
import "./separator-4854cb3c.js";
import "@radix-ui/react-separator";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "./menuadministrator-4039c077.js";
import "./menuUser-b5f13189.js";
import "react-toastify";
import "./logo_eagle_media_informatika-fceda23c.js";
function Index(props) {
  const billing = props.invoices.billing;
  const billing_buyer = JSON.parse(props.invoices.billing.billing_buyer);
  const format_currency = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "px-4 sm:px-0", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-base/7 font-semibold text-gray-900", children: [
        "Invoices #",
        props.invoices.no_invoice
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 max-w-2xl text-sm/6 text-gray-500", children: "Personal Invoices." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 border-t border-gray-100", children: /* @__PURE__ */ jsxs("dl", { className: "divide-y divide-gray-100", children: [
      /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Billing Number" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: billing.billing_code })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Billing References" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: billing.billing_references })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "First Name" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: billing_buyer.first_name })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Last Name" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: billing_buyer.last_name })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Address" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: billing_buyer.address })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Email address" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: billing_buyer.email })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Phone Number" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: billing_buyer.phone })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Tax" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: format_currency(billing.tax) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Admin Fee" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: format_currency(billing.admin_fee) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Total" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: format_currency(billing.sub_total) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Status" }),
        billing.status == "UNPAID" ? /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: /* @__PURE__ */ jsx("span", { className: "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300", children: billing.status }) }) : billing.status == "PAID" ? /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: /* @__PURE__ */ jsx("span", { className: "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300", children: billing.status }) }) : /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: /* @__PURE__ */ jsx("span", { className: "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300", children: billing.status }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Items" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0", children: /* @__PURE__ */ jsx("ul", { role: "list", className: "divide-y divide-gray-100 rounded-md border border-gray-200", children: props.invoices.invoice_details.map((invoice_detail, index) => /* @__PURE__ */ jsx("li", { className: "flex items-center justify-between py-4 pl-4 pr-5 text-sm/6", children: /* @__PURE__ */ jsx("div", { className: "flex w-0 flex-1 items-center", children: /* @__PURE__ */ jsxs("div", { className: "ml-4 flex min-w-0 flex-1 gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "truncate font-medium", children: invoice_detail.item.split("|")[1] }),
          /* @__PURE__ */ jsx("span", { className: "shrink-0 text-green-700", children: format_currency(invoice_detail.amount) })
        ] }) }) })) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Link, { href: route("order.index"), className: "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700", children: "Back" }),
    billing.status == "UNPAID" && /* @__PURE__ */ jsx("a", { href: props.invoices.billing.billing_link_payment, className: "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2", children: "Pay Now" })
  ] });
}
Index.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { title: "Order Invoices", children: page });
export {
  Index as default
};
