import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent, e as CardFooter } from "./card-561925ba.js";
import { u as useFilter, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./useFilter-a39c405a.js";
import { I as Input } from "./input-a8f11544.js";
import { I as Index$1 } from "./appLayout-c1a8bf8e.js";
import { useState } from "react";
import "clsx";
import { usePage, Link } from "@inertiajs/react";
import { S as SimplePagination } from "./simple-pagination-1ce1e8ea.js";
import "./utils-efa289ef.js";
import "tailwind-merge";
import "@radix-ui/react-icons";
import "@radix-ui/react-select";
import "lodash";
import "./icon-9d04f58e.js";
import "@tabler/icons-react";
import "react-toastify";
import "axios";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "./logo_eagle_media_informatika-fceda23c.js";
import "./separator-4854cb3c.js";
import "@radix-ui/react-separator";
import "./button-685e6d97.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
function Index(props) {
  const { data: products, meta, links } = props.products;
  const [params, setParams] = useState(props.state);
  const { auth } = usePage().props;
  useFilter({
    route: route("products.index"),
    values: params
  });
  return /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Products" }) }),
    /* @__PURE__ */ jsxs(CardContent, { children: [
      auth.user.access == true && /* @__PURE__ */ jsx("div", { className: "mb-3 flex", children: /* @__PURE__ */ jsx(Link, { href: route("products.create"), className: "mb-2 me-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800", children: "Create" }) }),
      /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Select, { value: params == null ? void 0 : params.limit, onValueChange: (e) => setParams({ ...params, limit: e }), children: [
          /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: (params == null ? void 0 : params.limit) ?? 10 }) }),
          /* @__PURE__ */ jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsx(SelectItem, { value: "10", children: "10" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "25", children: "25" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "50", children: "50" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "75", children: "75" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "100", children: "100" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "w-72", children: /* @__PURE__ */ jsx(Input, { type: "text", value: params == null ? void 0 : params.search, onChange: (e) => setParams((prev) => ({ ...prev, search: e.target.value })), placeholder: "Pencarian..." }) })
      ] }),
      products.length > 0 ? /* @__PURE__ */ jsx("div", { className: "mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4", children: /* @__PURE__ */ jsx(Fragment, { children: products.map((product, i) => /* @__PURE__ */ jsxs("div", { className: "group relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100", children: [
          /* @__PURE__ */ jsx("img", { alt: product.title, src: product.picture, className: "object-cover object-center" }),
          /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "flex items-end p-4 opacity-0 group-hover:opacity-100", children: /* @__PURE__ */ jsx("div", { className: "w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter", children: "View Product" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900", children: [
          /* @__PURE__ */ jsx("h3", { children: /* @__PURE__ */ jsxs(Link, { href: route("products.detail", [product.id]), children: [
            /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "absolute inset-0" }),
            product.title
          ] }) }),
          /* @__PURE__ */ jsx("p", { children: product.price })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-500", children: product.category_id })
      ] }, product.id)) }) }) : /* @__PURE__ */ jsx("p", { className: "animate-pulse text-center text-base font-semibold text-destructive", children: "No Products." })
    ] }),
    /* @__PURE__ */ jsx(CardFooter, { className: "flex items-center justify-between pt-6", children: /* @__PURE__ */ jsx(SimplePagination, { links, meta }) })
  ] });
}
Index.layout = (page) => /* @__PURE__ */ jsx(Index$1, { title: "Products", children: page });
export {
  Index as default
};
