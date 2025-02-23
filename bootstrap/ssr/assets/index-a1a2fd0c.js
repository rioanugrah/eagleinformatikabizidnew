import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent } from "./card-561925ba.js";
import { u as useFilter, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, T as Table, e as TableHeader, f as TableRow, g as TableHead, h as TableBody, i as TableCell } from "./useFilter-a39c405a.js";
import { I as Input } from "./input-a8f11544.js";
import { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import { S as SortIndicator } from "./sort-indicator-b26ced7b.js";
import { A as AppLayout } from "./appLayout-93cb4f13.js";
import "./utils-efa289ef.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-icons";
import "@radix-ui/react-select";
import "lodash";
import "./icon-9d04f58e.js";
import "@tabler/icons-react";
import "./separator-4854cb3c.js";
import "@radix-ui/react-separator";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "./menuadministrator-9d83b4a9.js";
import "./menuUser-b5f13189.js";
import "react-toastify";
import "./logo_eagle_media_informatika-fceda23c.js";
import "axios";
function Index(props) {
  const { data: roles, meta, links } = props.roles;
  const [params, setParams] = useState(props.state);
  useFilter({
    route: route("roles.index"),
    values: params
    // only: ['users'],
  });
  const handleSort = (newField) => {
    let newDirection = (params == null ? void 0 : params.direction) ?? "asc";
    const field = (params == null ? void 0 : params.field) ?? "created_at";
    if (newField === field) {
      newDirection = newDirection === "asc" ? "desc" : "asc";
    }
    setParams({ ...params, field: newField, direction: newDirection });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Roles" }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Roles" }) }),
      /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx(Link, { href: route("roles.create"), class: "mb-2 me-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800 ", children: "Create" }) }),
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
            /* @__PURE__ */ jsx(TableHead, { onClick: () => handleSort("name"), children: /* @__PURE__ */ jsx(SortIndicator, { label: "name", column: "name", field: params == null ? void 0 : params.field, direction: params == null ? void 0 : params.direction }) }),
            /* @__PURE__ */ jsx(TableHead, { onClick: () => handleSort("guard_name"), children: /* @__PURE__ */ jsx(SortIndicator, { label: "guard name", column: "guard_name", field: params == null ? void 0 : params.field, direction: params == null ? void 0 : params.direction }) }),
            /* @__PURE__ */ jsx(TableHead, {})
          ] }) }),
          /* @__PURE__ */ jsx(TableBody, { children: roles.length > 0 ? /* @__PURE__ */ jsx(Fragment, { children: roles.map((item, i) => /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableCell, { className: "w-0 py-7 text-center", children: meta.from + i }),
            /* @__PURE__ */ jsx(TableCell, { children: item.name }),
            /* @__PURE__ */ jsx(TableCell, { children: item.guard_name }),
            /* @__PURE__ */ jsxs(TableCell, { children: [
              /* @__PURE__ */ jsx(Link, { href: route("roles.edit", [item.id]), class: "focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900", children: "Edit" }),
              /* @__PURE__ */ jsx(
                Link,
                {
                  as: "button",
                  method: "delete",
                  href: route("permissions.destroy", [item.id]),
                  class: "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
                  children: "Delete"
                }
              )
            ] })
          ] }, i)) }) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 3, className: "animate-pulse py-5 text-center text-base font-semibold text-destructive", children: "Empty Roles" }) }) })
        ] })
      ] })
    ] })
  ] });
}
Index.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { title: "Roles", children: page });
export {
  Index as default
};
