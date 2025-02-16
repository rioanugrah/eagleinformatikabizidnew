import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent, e as CardFooter } from "./card-561925ba.js";
import { u as useFilter, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, T as Table, e as TableHeader, f as TableRow, g as TableHead, h as SortIndicator, i as TableBody, j as TableCell } from "./sort-indicator-9c51c00c.js";
import { I as Input } from "./input-a8f11544.js";
import { A as AppLayout } from "./appLayout-93cb4f13.js";
import { useState } from "react";
import { Link } from "@inertiajs/react";
import { I as Icon } from "./icon-9d04f58e.js";
import { S as SimplePagination } from "./simple-pagination-1ce1e8ea.js";
import "./utils-efa289ef.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-icons";
import "@radix-ui/react-select";
import "lodash";
import "./separator-4854cb3c.js";
import "@radix-ui/react-separator";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "./menuadministrator-9d83b4a9.js";
import "./menuUser-b5f13189.js";
import "react-toastify";
import "./logo_eagle_media_informatika-fceda23c.js";
import "axios";
import "@tabler/icons-react";
import "./button-685e6d97.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
function Index(props) {
  const { data: ppns, meta, links } = props.ppns;
  const [params, setParams] = useState(props.state);
  useFilter({
    route: route("ppns.index"),
    values: params
  });
  const handleSort = (newField) => {
    let newDirection = (params == null ? void 0 : params.direction) ?? "asc";
    const field = (params == null ? void 0 : params.field) ?? "created_at";
    if (newField === field) {
      newDirection = newDirection === "asc" ? "desc" : "asc";
    }
    setParams({ ...params, field: newField, direction: newDirection });
  };
  return /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "PPN" }) }),
    /* @__PURE__ */ jsxs(CardContent, { children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3 flex", children: /* @__PURE__ */ jsx(Link, { href: route("ppns.create"), className: "mb-2 me-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800", children: "Create" }) }),
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
      /* @__PURE__ */ jsxs(Table, { children: [
        /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableHead, { className: "w-[50px] text-center", children: "#" }),
          /* @__PURE__ */ jsx(TableHead, { onClick: () => handleSort("ppn_name"), children: /* @__PURE__ */ jsx(SortIndicator, { label: "Name", column: "ppn_name", field: params == null ? void 0 : params.field, direction: params == null ? void 0 : params.direction }) }),
          /* @__PURE__ */ jsx(TableHead, { onClick: () => handleSort("ppn_nominal"), children: /* @__PURE__ */ jsx(SortIndicator, { label: "Nominal", column: "ppn_nominal", field: params == null ? void 0 : params.field, direction: params == null ? void 0 : params.direction }) }),
          /* @__PURE__ */ jsx(TableHead, { onClick: () => handleSort("status"), children: /* @__PURE__ */ jsx(SortIndicator, { label: "status", column: "status", field: params == null ? void 0 : params.field, direction: params == null ? void 0 : params.direction }) }),
          /* @__PURE__ */ jsx(TableHead, {})
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { children: ppns.length > 0 ? /* @__PURE__ */ jsx(Fragment, { children: ppns.map((ppn, i) => /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { className: "w-0 py-7 text-center", children: meta.from + i }),
          /* @__PURE__ */ jsx(TableCell, { children: ppn.ppn_name }),
          /* @__PURE__ */ jsx(TableCell, { children: ppn.ppn_nominal }),
          /* @__PURE__ */ jsx(TableCell, { children: ppn.status == "Aktif" ? /* @__PURE__ */ jsx("span", { class: "me-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300", children: ppn.status }) : /* @__PURE__ */ jsx("span", { class: "me-2 rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300", children: ppn.status }) }),
          /* @__PURE__ */ jsxs(TableCell, { children: [
            /* @__PURE__ */ jsxs(Link, { href: route("ppns.edit", [ppn.id]), className: "mb-2 me-2 inline-flex items-center rounded-lg bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 px-5 py-2.5 text-center text-sm font-medium text-gray-900 shadow-lg shadow-lime-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-lime-300 dark:shadow-lg dark:shadow-lime-800/80 dark:focus:ring-lime-800", children: [
              /* @__PURE__ */ jsx(Icon, { icon: "IconLogin2" }),
              " Edit"
            ] }),
            /* @__PURE__ */ jsxs(Link, { as: "button", method: "delete", href: route("ppns.destroy", [ppn.id]), className: "mb-2 mb-2 me-2 me-2 inline-flex rounded-lg bg-gradient-to-r from-red-400 via-red-500 to-red-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-red-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-red-300 dark:shadow-lg dark:shadow-red-800/80 dark:focus:ring-red-800", children: [
              /* @__PURE__ */ jsx(Icon, { icon: "IconTrash" }),
              " Delete"
            ] })
          ] })
        ] }, i)) }) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 5, className: "animate-pulse py-5 text-center text-base font-semibold text-destructive", children: "No PPN." }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(CardFooter, { className: "flex items-center justify-between pt-6", children: /* @__PURE__ */ jsx(SimplePagination, { links, meta }) })
  ] });
}
Index.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { title: "PPN", children: page });
export {
  Index as default
};
