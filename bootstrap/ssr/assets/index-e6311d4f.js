import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent } from "./card-561925ba.js";
import { u as useFilter, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, T as Table, e as TableHeader, f as TableRow, g as TableHead, h as SortIndicator, i as TableBody, j as TableCell } from "./sort-indicator-9c51c00c.js";
import { I as Input } from "./input-a8f11544.js";
import { A as AppLayout } from "./appLayout-93cb4f13.js";
import { useState } from "react";
import { usePage, Link } from "@inertiajs/react";
import { I as Icon } from "./icon-9d04f58e.js";
import "./button-685e6d97.js";
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
import "@radix-ui/react-slot";
import "class-variance-authority";
function Index(props) {
  const { data: transactions, meta, links } = props.transactions;
  const [params, setParams] = useState(props.state);
  usePage().props;
  useFilter({
    route: route("transaction"),
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
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Transactions" }) }),
    /* @__PURE__ */ jsxs(CardContent, { children: [
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
          /* @__PURE__ */ jsx(TableHead, { onClick: () => handleSort("billing_code"), children: /* @__PURE__ */ jsx(SortIndicator, { label: "Billing Code", column: "billing_code", field: params == null ? void 0 : params.field, direction: params == null ? void 0 : params.direction }) }),
          /* @__PURE__ */ jsx(TableHead, { onClick: () => handleSort("total"), children: /* @__PURE__ */ jsx(SortIndicator, { label: "Total", column: "total", field: params == null ? void 0 : params.field, direction: params == null ? void 0 : params.direction }) }),
          /* @__PURE__ */ jsx(TableHead, { onClick: () => handleSort("status"), children: /* @__PURE__ */ jsx(SortIndicator, { label: "Status", column: "status", field: params == null ? void 0 : params.field, direction: params == null ? void 0 : params.direction }) }),
          /* @__PURE__ */ jsx(TableHead, {})
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { children: transactions.length > 0 ? /* @__PURE__ */ jsx(Fragment, { children: transactions.map((transaction, i) => /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { className: "w-0 py-7 text-center", children: meta.from + i }),
          /* @__PURE__ */ jsx(TableCell, { children: transaction.billing_code }),
          /* @__PURE__ */ jsx(TableCell, { children: transaction.total }),
          /* @__PURE__ */ jsx(TableCell, { children: transaction.status == "PAID" ? /* @__PURE__ */ jsx("span", { class: "me-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300", children: transaction.status }) : transaction.status == "UNPAID" ? /* @__PURE__ */ jsx("span", { class: "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300", children: transaction.status }) : /* @__PURE__ */ jsx("span", { class: "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300", children: transaction.status }) }),
          /* @__PURE__ */ jsxs(TableCell, { children: [
            /* @__PURE__ */ jsxs(Link, { className: "items-center inline-flex text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2", children: [
              /* @__PURE__ */ jsx(Icon, { icon: "IconLogin2", className: "w-6 h-6 me-2" }),
              " Order"
            ] }),
            transaction.status == "UNPAID" && /* @__PURE__ */ jsxs(Link, { href: route("transaction.detail", [transaction.id]), className: "mb-2 me-2 items-center inline-flex text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center", children: [
              /* @__PURE__ */ jsx(Icon, { icon: "IconLogin2", className: "w-6 h-6 me-2" }),
              " Pay Now"
            ] })
          ] })
        ] }, i)) }) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 5, className: "animate-pulse py-5 text-center text-base font-semibold text-destructive", children: "No Transaction." }) }) })
      ] })
    ] })
  ] });
}
Index.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { title: "Transaction", children: page });
export {
  Index as default
};
