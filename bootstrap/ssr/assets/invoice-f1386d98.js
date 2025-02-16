import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import "clsx";
import "@inertiajs/react";
import "react";
import "./separator-4854cb3c.js";
import "react-toastify";
import "@radix-ui/react-separator";
import "./utils-efa289ef.js";
import "tailwind-merge";
function Invoice(props) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { class: "mx-auto my-6 max-w-3xl rounded bg-white p-6 shadow-sm", id: "invoice", children: [
    /* @__PURE__ */ jsxs("div", { class: "grid grid-cols-2 items-center", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", alt: "company-logo", height: "100", width: "100" }) }),
      /* @__PURE__ */ jsxs("div", { class: "text-right", children: [
        /* @__PURE__ */ jsx("p", { children: "PT Eagle Media Informatika" }),
        /* @__PURE__ */ jsx("p", { class: "text-sm text-gray-500", children: "marketing@eagleinformatika.biz.id" }),
        /* @__PURE__ */ jsx("p", { class: "mt-1 text-sm text-gray-500", children: "+62 881-0801-78055" }),
        /* @__PURE__ */ jsx("p", { class: "mt-1 text-sm text-gray-500", children: "VAT: -" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { class: "mt-8 grid grid-cols-2 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { class: "font-bold text-gray-800", children: "Bill to :" }),
        /* @__PURE__ */ jsxs("p", { class: "text-gray-500", children: [
          "Laravel LLC.",
          /* @__PURE__ */ jsx("br", {}),
          "102, San-Fransico, CA, USA"
        ] }),
        /* @__PURE__ */ jsx("p", { class: "text-gray-500", children: "info@laravel.com" })
      ] }),
      /* @__PURE__ */ jsxs("div", { class: "text-right", children: [
        /* @__PURE__ */ jsxs("p", { class: "", children: [
          "Invoice number:",
          /* @__PURE__ */ jsx("span", { class: "text-gray-500", children: "INV-2023786123" })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Invoice date: ",
          /* @__PURE__ */ jsx("span", { class: "text-gray-500", children: "03/07/2023" }),
          /* @__PURE__ */ jsx("br", {}),
          "Due date:",
          /* @__PURE__ */ jsx("span", { class: "text-gray-500", children: "31/07/2023" })
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
      /* @__PURE__ */ jsxs("tbody", { children: [
        /* @__PURE__ */ jsxs("tr", { class: "border-b border-gray-200", children: [
          /* @__PURE__ */ jsxs("td", { class: "max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0", children: [
            /* @__PURE__ */ jsx("div", { class: "font-medium text-gray-900", children: "E-commerce Platform" }),
            /* @__PURE__ */ jsx("div", { class: "mt-1 truncate text-gray-500", children: "Laravel based e-commerce platform." })
          ] }),
          /* @__PURE__ */ jsx("td", { class: "hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell", children: "500.0" }),
          /* @__PURE__ */ jsx("td", { class: "hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell", children: "$100.00" }),
          /* @__PURE__ */ jsx("td", { class: "py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0", children: "$5,000.00" })
        ] }),
        /* @__PURE__ */ jsxs("tr", { class: "border-b border-gray-200", children: [
          /* @__PURE__ */ jsxs("td", { class: "max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0", children: [
            /* @__PURE__ */ jsx("div", { class: "font-medium text-gray-900", children: "Frontend Design" }),
            /* @__PURE__ */ jsx("div", { class: "mt-1 truncate text-gray-500", children: "Frontend design using Vue.js and Tailwind CSS." })
          ] }),
          /* @__PURE__ */ jsx("td", { class: "hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell", children: "500.0" }),
          /* @__PURE__ */ jsx("td", { class: "hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell", children: "$100.00" }),
          /* @__PURE__ */ jsx("td", { class: "py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0", children: "$5,000.00" })
        ] }),
        /* @__PURE__ */ jsxs("tr", { class: "border-b border-gray-200", children: [
          /* @__PURE__ */ jsxs("td", { class: "max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0", children: [
            /* @__PURE__ */ jsx("div", { class: "font-medium text-gray-900", children: "Shop SEO" }),
            /* @__PURE__ */ jsx("div", { class: "mt-1 truncate text-gray-500", children: "Website SEO and Social Media marketing." })
          ] }),
          /* @__PURE__ */ jsx("td", { class: "hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell", children: "50.0" }),
          /* @__PURE__ */ jsx("td", { class: "hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell", children: "$100.00" }),
          /* @__PURE__ */ jsx("td", { class: "py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0", children: "$500.00" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("tfoot", { children: [
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { scope: "row", colspan: "3", class: "hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0", children: "Subtotal" }),
          /* @__PURE__ */ jsx("th", { scope: "row", class: "pl-6 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden", children: "Subtotal" }),
          /* @__PURE__ */ jsx("td", { class: "pl-3 pr-6 pt-6 text-right text-sm text-gray-500 sm:pr-0", children: "$10,500.00" })
        ] }),
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { scope: "row", colspan: "3", class: "hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0", children: "Tax" }),
          /* @__PURE__ */ jsx("th", { scope: "row", class: "pl-6 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden", children: "Tax" }),
          /* @__PURE__ */ jsx("td", { class: "pl-3 pr-6 pt-4 text-right text-sm text-gray-500 sm:pr-0", children: "$1,050.00" })
        ] }),
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { scope: "row", colspan: "3", class: "hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0", children: "Discount" }),
          /* @__PURE__ */ jsx("th", { scope: "row", class: "pl-6 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden", children: "Discount" }),
          /* @__PURE__ */ jsx("td", { class: "pl-3 pr-6 pt-4 text-right text-sm text-gray-500 sm:pr-0", children: "- 10%" })
        ] }),
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { scope: "row", colspan: "3", class: "hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0", children: "Total" }),
          /* @__PURE__ */ jsx("th", { scope: "row", class: "pl-6 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden", children: "Total" }),
          /* @__PURE__ */ jsx("td", { class: "pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0", children: "$11,550.00" })
        ] })
      ] })
    ] }) })
  ] }) });
}
export {
  Invoice as default
};
