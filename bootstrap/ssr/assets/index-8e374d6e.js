import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent } from "./card-561925ba.js";
import { u as useFilter, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, T as Table, e as TableHeader, f as TableRow, g as TableHead, h as SortIndicator, i as TableBody, j as TableCell } from "./sort-indicator-9c51c00c.js";
import { I as Input } from "./input-a8f11544.js";
import { A as AppLayout } from "./appLayout-c2bcf663.js";
import { useState } from "react";
import { Link } from "@inertiajs/react";
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
import "./menuadministrator-4039c077.js";
import "./menuUser-b5f13189.js";
import "react-toastify";
import "./logo_eagle_media_informatika-fceda23c.js";
import "@tabler/icons-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
function Index(props) {
  const { data: invoices, meta, links } = props.invoices;
  const [params, setParams] = useState(props.state);
  useFilter({
    route: route("order.index"),
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
  const format_currency = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  };
  return /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Orders" }) }),
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
          /* @__PURE__ */ jsx(TableHead, { onClick: () => handleSort("no_invoice"), children: /* @__PURE__ */ jsx(SortIndicator, { label: "No. Invoice", column: "no_invoice", field: params == null ? void 0 : params.field, direction: params == null ? void 0 : params.direction }) }),
          /* @__PURE__ */ jsx(TableHead, { onClick: () => handleSort("sub_amount"), children: /* @__PURE__ */ jsx(SortIndicator, { label: "Total", column: "sub_amount", field: params == null ? void 0 : params.field, direction: params == null ? void 0 : params.direction }) }),
          /* @__PURE__ */ jsx(TableHead, { onClick: () => handleSort("created_at"), children: /* @__PURE__ */ jsx(SortIndicator, { label: "Created At", column: "created_at", field: params == null ? void 0 : params.field, direction: params == null ? void 0 : params.direction }) }),
          /* @__PURE__ */ jsx(TableHead, { onClick: () => handleSort("status"), children: /* @__PURE__ */ jsx(SortIndicator, { label: "status", column: "status", field: params == null ? void 0 : params.field, direction: params == null ? void 0 : params.direction }) }),
          /* @__PURE__ */ jsx(TableHead, {})
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { children: invoices.length > 0 ? /* @__PURE__ */ jsx(Fragment, { children: invoices.map((invoice, i) => /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { className: "w-0 py-7 text-center", children: meta.from + i }),
          /* @__PURE__ */ jsxs(TableCell, { children: [
            "ORD/",
            invoice.no_invoice
          ] }),
          /* @__PURE__ */ jsx(TableCell, { children: format_currency(invoice.sub_amount) }),
          /* @__PURE__ */ jsx(TableCell, { children: invoice.created_at }),
          /* @__PURE__ */ jsx(TableCell, { children: invoice.status == "PAID" ? /* @__PURE__ */ jsx("span", { class: "me-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300", children: invoice.status }) : invoice.status == "OPEN" ? /* @__PURE__ */ jsx("span", { class: "me-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300", children: invoice.status }) : invoice.status == "UNPAID" ? /* @__PURE__ */ jsx("span", { class: "me-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300", children: invoice.status }) : /* @__PURE__ */ jsx("span", { class: "me-2 rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300", children: invoice.status }) }),
          /* @__PURE__ */ jsx(TableCell, { children: invoice.status == "OPEN" ? /* @__PURE__ */ jsxs(Link, { href: route("order.checkout", [invoice.id]), className: "mb-2 me-2 inline-flex items-center rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800", children: [
            /* @__PURE__ */ jsx(Icon, { icon: "IconShoppingCartUp" }),
            " Detail Cart"
          ] }) : invoice.status == "UNPAID" ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Link, { href: route("invoices.detail", [invoice.id]), className: "mb-2 me-2 inline-flex items-center rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800", children: [
            /* @__PURE__ */ jsx(Icon, { icon: "IconFileInvoice" }),
            " Invoices"
          ] }) }) : /* @__PURE__ */ jsxs(Link, { href: route("invoices.detail", [invoice.id]), className: "mb-2 me-2 inline-flex items-center rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800", children: [
            /* @__PURE__ */ jsx(Icon, { icon: "IconShoppingCartUp" }),
            " Detail Cart"
          ] }) })
        ] }, i)) }) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 4, className: "animate-pulse py-5 text-center text-base font-semibold text-destructive", children: "No Orders." }) }) })
      ] })
    ] })
  ] });
}
Index.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { title: "Order", children: page });
export {
  Index as default
};
