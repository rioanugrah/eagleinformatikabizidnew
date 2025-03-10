import { jsx, jsxs } from "react/jsx-runtime";
import { TrashIcon } from "@heroicons/react/20/solid";
import { usePage, Link } from "@inertiajs/react";
import { useState } from "react";
function CardItem({ id, product_id, product, item, quantity, price, updateQty }) {
  const { cart } = usePage().props;
  useState(false);
  const addOne = () => {
    updateQty(id, quantity + 1);
  };
  const removeOne = () => {
    updateQty(id, quantity - 1);
  };
  const format_currency = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  };
  return /* @__PURE__ */ jsx("li", { className: "flex px-4 py-6 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "ml-6 flex flex-1 flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ jsx("h4", { className: "text-sm", children: /* @__PURE__ */ jsx("a", { className: "font-bold text-gray-700 hover:text-gray-800", children: product.title }) }) }),
      /* @__PURE__ */ jsx("div", { className: "ml-4 flow-root flex-shrink-0", children: /* @__PURE__ */ jsxs(Link, { as: "button", method: "post", href: route("cart.remove_item", [cart.id, id]), className: "-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500", children: [
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Remove" }),
        /* @__PURE__ */ jsx(TrashIcon, { "aria-hidden": "true", className: "h-5 w-5" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-1 items-end justify-between pt-2", children: [
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm font-medium text-gray-900", children: format_currency(price) }),
      /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "quantity", className: "sr-only", children: "Quantity" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("button", { type: "button", className: "px-3 py-2 mr-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800", onClick: removeOne, disabled: quantity <= 1, children: "-" }),
          quantity,
          /* @__PURE__ */ jsx("button", { type: "button", className: "px-3 py-2 ml-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800", onClick: addOne, children: "+" })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  CardItem as default
};
