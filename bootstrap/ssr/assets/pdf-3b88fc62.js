import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { l as logo } from "./LogoEagleMediaInformatika-a7a8a189.js";
function Pdf(props) {
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
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: logo, alt: "Logo Eagle Media Informatika", height: "100", width: "100" }) }),
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
      ] }) })
    ] })
  ] });
}
export {
  Pdf as default
};
