import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { I as Index } from "./appLayout-c1a8bf8e.js";
import { Head, Link } from "@inertiajs/react";
import { l as logo } from "./LogoEagleMediaInformatika-a7a8a189.js";
import "./icon-9d04f58e.js";
import "./utils-efa289ef.js";
import "clsx";
import "tailwind-merge";
import "@tabler/icons-react";
import "react";
import "react-toastify";
import "axios";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "./logo_eagle_media_informatika-fceda23c.js";
import "./separator-4854cb3c.js";
import "@radix-ui/react-separator";
function Invoice(props) {
  const invoice = props.order;
  const billing_buyer = JSON.parse(props.order.payment.billing_buyer);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Head,
      {
        title: "Invoice - " + invoice.order_code
      }
    ),
    /* @__PURE__ */ jsxs("div", { class: "mx-auto my-6 max-w-3xl rounded bg-white p-6 shadow-sm", id: "invoice", children: [
      /* @__PURE__ */ jsxs("div", { class: "grid grid-cols-2 items-center", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: logo, alt: "", height: "100", width: "100" }) }),
        /* @__PURE__ */ jsxs("div", { class: "text-right", children: [
          /* @__PURE__ */ jsx("p", { children: "PT Eagle Media Informatika" }),
          /* @__PURE__ */ jsx("p", { class: "text-sm text-gray-500", children: "marketing@eagleinformatika.biz.id" }),
          /* @__PURE__ */ jsx("p", { class: "mt-1 text-sm text-gray-500", children: "+62 881-0801-78055" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { class: "mt-8 grid grid-cols-2 items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { class: "font-bold text-gray-800", children: "Bill to :" }),
          /* @__PURE__ */ jsxs("p", { class: "text-gray-500", children: [
            billing_buyer.first_name + " " + billing_buyer.last_name,
            /* @__PURE__ */ jsx("br", {}),
            billing_buyer.address
          ] }),
          /* @__PURE__ */ jsx("p", { class: "text-gray-500", children: billing_buyer.email })
        ] }),
        /* @__PURE__ */ jsxs("div", { class: "text-right", children: [
          /* @__PURE__ */ jsxs("p", { class: "", children: [
            "Invoice number:",
            /* @__PURE__ */ jsx("span", { class: "text-gray-500", children: invoice.payment.billing_code })
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Invoice date: ",
            /* @__PURE__ */ jsx("span", { class: "text-gray-500", children: invoice.created_at }),
            /* @__PURE__ */ jsx("br", {})
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { class: "-mx-4 mt-8 flow-root sm:mx-0", children: /* @__PURE__ */ jsxs("table", { class: "min-w-full", children: [
        /* @__PURE__ */ jsx("thead", { class: "border-b border-gray-300 text-gray-900", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { scope: "col", class: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0", children: "Items" }),
          /* @__PURE__ */ jsx("th", { scope: "col", class: "hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell", children: "Quantity" }),
          /* @__PURE__ */ jsx("th", { scope: "col", class: "hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell", children: "Price" }),
          /* @__PURE__ */ jsx("th", { scope: "col", class: "py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0", children: "Amount" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: props.order.order_details.map((items, i) => /* @__PURE__ */ jsxs("tr", { class: "border-b border-gray-200", children: [
          /* @__PURE__ */ jsx("td", { class: "max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0", children: /* @__PURE__ */ jsx("div", { class: "font-medium text-gray-900", children: items.item }) }),
          /* @__PURE__ */ jsx("td", { class: "hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell", children: items.quantity }),
          /* @__PURE__ */ jsx("td", { class: "hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell", children: items.price }),
          /* @__PURE__ */ jsx("td", { class: "py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0", children: items.total })
        ] }, i)) }),
        /* @__PURE__ */ jsxs("tfoot", { children: [
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { scope: "row", colspan: "3", class: "hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0", children: "Subtotal" }),
            /* @__PURE__ */ jsx("th", { scope: "row", class: "pl-6 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden", children: "Subtotal" }),
            /* @__PURE__ */ jsx("td", { class: "pl-3 pr-6 pt-6 text-right text-sm text-gray-500 sm:pr-0", children: invoice.total })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { scope: "row", colspan: "3", class: "hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0", children: "Tax" }),
            /* @__PURE__ */ jsx("th", { scope: "row", class: "pl-6 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden", children: "Tax" }),
            /* @__PURE__ */ jsx("td", { class: "pl-3 pr-6 pt-4 text-right text-sm text-gray-500 sm:pr-0", children: invoice.tax })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { scope: "row", colspan: "3", class: "hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0", children: "Total" }),
            /* @__PURE__ */ jsx("th", { scope: "row", class: "pl-6 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden", children: "Total" }),
            /* @__PURE__ */ jsx("td", { class: "pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0", children: invoice.sub_total })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Link, { href: route("order.index"), className: "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700", children: "Back" }),
      /* @__PURE__ */ jsx(Link, { href: route("invoices.pdf", [invoice.id]), className: "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700", children: "Print" })
    ] })
  ] });
}
Invoice.layout = (page) => /* @__PURE__ */ jsx(Index, { title: "Invoices", children: page });
export {
  Invoice as default
};
