import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { A as AppLayout } from "./app-layout-5f825d0f.js";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent, e as CardFooter } from "./card-561925ba.js";
import { usePage, useForm, Link, router } from "@inertiajs/react";
import { useState } from "react";
import Swal from "sweetalert2";
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
import "react-toastify";
import "./logo_eagle_media_informatika-fceda23c.js";
function Edit(props) {
  const { errors, auth } = usePage().props;
  const [loading, setLoading] = useState(false);
  useState(0);
  const { data, setData, post } = useForm({
    // title: '',
    // avatar: null,
    category_id: props.product.category_id,
    title: props.product.title,
    picture: null,
    description: props.product.description,
    price: props.product.price,
    quantity: props.product.quantity,
    tag: props.product.tag,
    is_product_digital: props.product.is_product_digital,
    files: "",
    status: props.product.status
  });
  useState("");
  const handlerSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Submit!"
    }).then((result) => {
      if (result.isConfirmed) {
        const upload_images = e.target.images.files[0];
        const files = data.is_product_digital == "Y" ? e.target.files.files[0] : "";
        const formData = new FormData();
        formData.append("category_id", data.category_id);
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("price", data.price);
        formData.append("quantity", data.quantity);
        formData.append("tag", data.tag);
        formData.append("is_product_digital", data.is_product_digital);
        formData.append("picture", upload_images);
        formData.append("files", files);
        formData.append("status", data.status);
        router.post(route("products.update", props.product.id), formData, {
          onFinish: () => {
            setLoading(false);
          }
        });
      } else {
        setLoading(false);
      }
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Create Product" }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handlerSubmit, children: [
      /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsx("div", { className: "mb-6 grid gap-6 md:grid-cols-2", children: /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium text-gray-900 dark:text-white", children: "Product Name" }),
          /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Name", value: data.title, onChange: (e) => setData("title", e.target.value), className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }),
          errors.title && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.title })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium text-gray-900 dark:text-white", children: "Product Description" }),
          /* @__PURE__ */ jsx("textarea", { value: data.description, onChange: (e) => setData("description", e.target.value), className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500", rows: 10 }),
          errors.description && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.description })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-6 grid gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium text-gray-900 dark:text-white", children: "Category Product" }),
            /* @__PURE__ */ jsxs("select", { value: data.category_id, onChange: (e) => setData("category_id", e.target.value), className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500", children: [
              /* @__PURE__ */ jsx("option", { selected: true, children: "-- Select Category --" }),
              props.categories.map((category, index) => /* @__PURE__ */ jsx("option", { value: category.id, children: category.name }))
            ] }),
            errors.category_id && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.category_id })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium text-gray-900 dark:text-white", children: "Is Product Digital?" }),
            /* @__PURE__ */ jsxs("select", { value: data.is_product_digital, onChange: (e) => setData("is_product_digital", e.target.value), className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500", children: [
              /* @__PURE__ */ jsx("option", { selected: true, children: "-- Select Product Digital --" }),
              /* @__PURE__ */ jsx("option", { value: "Y", children: "Yes" }),
              /* @__PURE__ */ jsx("option", { value: "N", children: "No" })
            ] }),
            errors.is_product_digital && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.is_product_digital })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-6 grid gap-6 md:grid-cols-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium text-gray-900 dark:text-white", children: "Product Price" }),
            /* @__PURE__ */ jsx("input", { type: "number", placeholder: "Price", value: data.price, onChange: (e) => setData("price", e.target.value), className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }),
            errors.price && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.price })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium text-gray-900 dark:text-white", children: "Product Stock" }),
            /* @__PURE__ */ jsx("input", { type: "number", placeholder: "Stock", value: data.quantity, onChange: (e) => setData("quantity", e.target.value), className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }),
            errors.quantity && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.quantity })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium text-gray-900 dark:text-white", children: "Upload Image Product Digital" }),
            /* @__PURE__ */ jsx("input", { type: "file", name: "images", value: data.picture, onChange: (e) => setData("picture", e.target.value), className: "block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400" }),
            errors.picture && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.picture })
          ] }),
          data.is_product_digital === "Y" && /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium text-gray-900 dark:text-white", children: "Upload File Product Digital" }),
            /* @__PURE__ */ jsx("input", { value: data.files, name: "files", onChange: (e) => setData("files", e.target.value), className: "block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400", id: "file_input", type: "file" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-6 grid gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium text-gray-900 dark:text-white", children: "Tag Product" }),
            /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Tag", value: data.tag, onChange: (e) => setData("tag", e.target.value), className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" }),
            /* @__PURE__ */ jsx("p", { id: "helper-text-explanation", class: "mt-2 text-sm text-gray-500 dark:text-gray-400", children: "Use (,) for multiple tag and not space." }),
            errors.tag && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.tag })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium text-gray-900 dark:text-white", children: "Status" }),
            /* @__PURE__ */ jsxs("select", { value: data.status, onChange: (e) => setData("status", e.target.value), className: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500", children: [
              /* @__PURE__ */ jsx("option", { selected: true, children: "-- Select Status --" }),
              /* @__PURE__ */ jsx("option", { value: "Aktif", children: "Aktif" }),
              /* @__PURE__ */ jsx("option", { value: "Nonaktif", children: "Non Aktif" })
            ] }),
            errors.status && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-red-500 dark:text-red-400", children: errors.status })
          ] })
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
