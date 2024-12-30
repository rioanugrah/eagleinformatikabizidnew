import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent, e as CardFooter } from "./card-561925ba.js";
import { u as useFilter, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, T as Table, e as TableHeader, f as TableRow, g as TableHead, h as SortIndicator, i as TableBody, j as TableCell } from "./sort-indicator-9c51c00c.js";
import { I as Input } from "./input-a8f11544.js";
import { A as AppLayout } from "./appLayout-27340ecd.js";
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
import "./menuadministrator-4039c077.js";
import "./menuUser-b5f13189.js";
import "./logo_eagle_media_informatika-fceda23c.js";
import "@tabler/icons-react";
import "./button-685e6d97.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
function Index(props) {
  const { data: billings, meta, links } = props.billings;
  const [params, setParams] = useState(props.state);
  useFilter({
    route: route("billing.index"),
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
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Billings" }) }),
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
          /* @__PURE__ */ jsx(TableHead, { onClick: () => handleSort("billing_references"), children: /* @__PURE__ */ jsx(SortIndicator, { label: "Billing References", column: "billing_references", field: params == null ? void 0 : params.field, direction: params == null ? void 0 : params.direction }) }),
          /* @__PURE__ */ jsx(TableHead, { onClick: () => handleSort("sub_total"), children: /* @__PURE__ */ jsx(SortIndicator, { label: "Total", column: "sub_total", field: params == null ? void 0 : params.field, direction: params == null ? void 0 : params.direction }) }),
          /* @__PURE__ */ jsx(TableHead, { onClick: () => handleSort("status"), children: /* @__PURE__ */ jsx(SortIndicator, { label: "status", column: "status", field: params == null ? void 0 : params.field, direction: params == null ? void 0 : params.direction }) }),
          /* @__PURE__ */ jsx(TableHead, {})
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { children: billings.length > 0 ? /* @__PURE__ */ jsx(Fragment, { children: billings.map((billing, i) => /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { className: "w-0 py-7 text-center", children: meta.from + i }),
          /* @__PURE__ */ jsx(TableCell, { children: billing.billing_code }),
          /* @__PURE__ */ jsx(TableCell, { children: billing.billing_references }),
          /* @__PURE__ */ jsx(TableCell, { children: format_currency(billing.sub_total) }),
          /* @__PURE__ */ jsx(TableCell, { children: billing.status == "PAID" ? /* @__PURE__ */ jsx("span", { class: "me-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300", children: billing.status }) : billing.status == "UNPAID" ? /* @__PURE__ */ jsx("span", { class: "me-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300", children: billing.status }) : /* @__PURE__ */ jsx("span", { class: "me-2 rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300", children: billing.status }) }),
          /* @__PURE__ */ jsx(TableCell, { children: billing.status == "UNPAID" ? /* @__PURE__ */ jsxs("a", { href: billing.billing_link_payment, className: "inline-flex items-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2", children: [
            /* @__PURE__ */ jsx(Icon, { icon: "IconCash" }),
            " Pay Now"
          ] }) : billing.status == "PAID" && /* @__PURE__ */ jsxs(Link, { href: route("invoices.detail", [billing.invoice_id]), className: "inline-flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2", children: [
            /* @__PURE__ */ jsx(Icon, { icon: "IconFileInvoice" }),
            " Invoices"
          ] }) })
        ] }, i)) }) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 6, className: "animate-pulse py-5 text-center text-base font-semibold text-destructive", children: "No Billings." }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(CardFooter, { className: "flex items-center justify-between pt-6", children: /* @__PURE__ */ jsx(SimplePagination, { links, meta }) })
  ] });
}
Index.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { title: "Billings", children: page });
export {
  Index as default
};
