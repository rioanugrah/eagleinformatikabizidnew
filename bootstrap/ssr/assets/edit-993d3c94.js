import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { A as AppLayout } from "./app-layout-79224f6b.js";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent, e as CardFooter } from "./card-561925ba.js";
import { usePage, Link, router } from "@inertiajs/react";
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
import "./menuadministrator-4039c077.js";
import "./logo_eagle_media_informatika-fceda23c.js";
function Edit(props) {
  const { errors, auth } = usePage().props;
  const [product_category, setProductCategory] = useState(props.product.categories_id);
  const [product_name, setProductName] = useState(props.product.product_name);
  const [product_description, setProductDescription] = useState(props.product.product_description);
  const [product_price, setProductPrice] = useState(props.product.product_price);
  const [product_profit_price, setProductProfitPrice] = useState(props.product.product_profit_price);
  const [product_stock, setProductStock] = useState(props.product.product_stock);
  const [product_periode, setProductPeriode] = useState(props.product.product_periode);
  const [product_status, setProductStatus] = useState(props.product.status);
  const [loading, setLoading] = useState(false);
  const handlerSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    router.post(
      route("products.update", [props.product.id]),
      {
        categories_id: product_category,
        product_name,
        product_description,
        product_price,
        product_profit_price,
        product_stock,
        product_periode,
        status: product_status
      },
      {
        onFinish: () => {
          setLoading(false);
        }
      }
    );
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Create Product" }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handlerSubmit, children: [
      /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium text-gray-900 dark:text-white", children: "Product Name" }),
          /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Name", value: product_name, onChange: (e) => setProductName(e.target.value), className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }),
          errors.product_name && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.product_name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium text-gray-900 dark:text-white", children: "Product Description" }),
          /* @__PURE__ */ jsx("textarea", { value: product_description, onChange: (e) => setProductDescription(e.target.value), className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }),
          errors.product_description && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.product_description })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-6 mb-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium text-gray-900 dark:text-white", children: "Category Product" }),
            /* @__PURE__ */ jsxs("select", { value: product_category, onChange: (e) => setProductCategory(e.target.value), class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500", children: [
              /* @__PURE__ */ jsx("option", { selected: true, children: "-- Select Category --" }),
              props.categories.map((category, index) => /* @__PURE__ */ jsx("option", { value: category.id, children: category.name }))
            ] }),
            errors.categories_id && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.categories_id })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium text-gray-900 dark:text-white", children: "Product Periode" }),
            /* @__PURE__ */ jsxs("select", { value: product_periode, onChange: (e) => setProductPeriode(e.target.value), class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500", children: [
              /* @__PURE__ */ jsx("option", { selected: true, children: "-- Select Periode --" }),
              /* @__PURE__ */ jsx("option", { value: "Lifetime", children: "Lifetime" }),
              /* @__PURE__ */ jsx("option", { value: "1", children: "1 Tahun" }),
              /* @__PURE__ */ jsx("option", { value: "2", children: "2 Tahun" }),
              /* @__PURE__ */ jsx("option", { value: "3", children: "3 Tahun" })
            ] }),
            errors.product_periode && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.product_periode })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-6 grid gap-6 md:grid-cols-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium text-gray-900 dark:text-white", children: "Product Price" }),
            /* @__PURE__ */ jsx("input", { type: "number", placeholder: "Price", value: product_price, onChange: (e) => setProductPrice(e.target.value), className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }),
            errors.product_price && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.product_price })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium text-gray-900 dark:text-white", children: "Product Profit Price" }),
            /* @__PURE__ */ jsx("input", { type: "number", placeholder: "Profit Price", value: product_profit_price, onChange: (e) => setProductProfitPrice(e.target.value), className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }),
            errors.product_profit_price && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.product_profit_price })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium text-gray-900 dark:text-white", children: "Product Stock" }),
            /* @__PURE__ */ jsx("input", { type: "number", placeholder: "Stock", value: product_stock, onChange: (e) => setProductStock(e.target.value), className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }),
            errors.product_stock && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.product_stock })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium text-gray-900 dark:text-white", children: "Status" }),
          /* @__PURE__ */ jsxs("select", { value: product_status, onChange: (e) => setProductStatus(e.target.value), class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500", children: [
            /* @__PURE__ */ jsx("option", { selected: true, children: "-- Select Status --" }),
            /* @__PURE__ */ jsx("option", { value: "Aktif", children: "Aktif" }),
            /* @__PURE__ */ jsx("option", { value: "Nonaktif", children: "Non Aktif" })
          ] }),
          errors.status && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.status })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(CardFooter, { children: [
        /* @__PURE__ */ jsx(Link, { href: route("products.index"), className: "mb-2 me-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700", children: "Back" }),
        loading ? /* @__PURE__ */ jsxs("button", { disabled: true, type: "button", class: "me-2 inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white", children: [
          /* @__PURE__ */ jsxs("svg", { "aria-hidden": "true", role: "status", class: "me-3 inline h-4 w-4 animate-spin text-gray-200 dark:text-gray-600", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ jsx("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "currentColor" }),
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                fill: "#1C64F2"
              }
            )
          ] }),
          "Loading..."
        ] }) : /* @__PURE__ */ jsx("button", { className: "mb-2 me-2 rounded-lg bg-gradient-to-r from-green-500 via-green-600 to-green-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-green-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:shadow-lg dark:shadow-green-800/80 dark:focus:ring-green-800", children: "Update" })
      ] })
    ] })
  ] }) });
}
Edit.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { title: "Edit Product", children: page });
export {
  Edit as default
};
