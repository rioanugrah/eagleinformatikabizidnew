import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { A as AppLayout } from "./appLayout-0fe2a5ed.js";
import { Head, Link } from "@inertiajs/react";
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
import "./menuadministrator-9d83b4a9.js";
import "./menuUser-b5f13189.js";
import "react-toastify";
import "./LogoSubEagleMediaInformatika-b47f6c73.js";
import "axios";
function Detail(props) {
  const product = props.product;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Head,
      {
        title: "Product " + product.title
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "px-4 sm:px-0", children: /* @__PURE__ */ jsxs("h3", { className: "text-base/7 font-semibold text-gray-900", children: [
      "Product Code : ",
      product.product_code
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 border-t border-gray-100", children: [
      /* @__PURE__ */ jsx("dl", { className: "divide-y divide-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Product Images" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: /* @__PURE__ */ jsx("img", { src: product.picture, className: "h-auto max-w-lg rounded-lg", width: 640 }) })
      ] }) }),
      /* @__PURE__ */ jsx("dl", { className: "divide-y divide-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Slug" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: product.slug })
      ] }) }),
      /* @__PURE__ */ jsx("dl", { className: "divide-y divide-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Product Title" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: product.title })
      ] }) }),
      /* @__PURE__ */ jsx("dl", { className: "divide-y divide-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Product Description" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: product.description })
      ] }) }),
      /* @__PURE__ */ jsx("dl", { className: "divide-y divide-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Product Price" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: product.price })
      ] }) }),
      /* @__PURE__ */ jsx("dl", { className: "divide-y divide-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Product Quantity" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: product.quantity })
      ] }) }),
      /* @__PURE__ */ jsx("dl", { className: "divide-y divide-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Product Create" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: product.created_at })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Link, { href: route("products.index"), className: "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700", children: "Back" })
  ] });
}
Detail.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { title: "Product Detail", children: page });
export {
  Detail as default
};
