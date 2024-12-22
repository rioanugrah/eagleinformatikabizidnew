import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { A as AppLayout } from "./app-layout-90740d9b.js";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent } from "./card-98e72ec0.js";
import { u as useFilter, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, T as Table, e as TableHeader, f as TableRow, g as TableHead, h as SortIndicator, i as TableBody, j as TableCell } from "./sort-indicator-69b56f28.js";
import { I as Input } from "./input-49803b73.js";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import { I as Icon } from "./icon-83e95262.js";
import "./separator-8f30fd49.js";
import "@radix-ui/react-separator";
import "@headlessui/react";
import "@radix-ui/react-icons";
import "@radix-ui/react-select";
import "lodash";
import "clsx";
import "tailwind-merge";
import "@tabler/icons-react";
function Index(data) {
  const { data: websites, meta, links } = data.websites;
  const [params, setParams] = useState(data.state);
  useFilter({
    route: route("websites.index"),
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
    /* @__PURE__ */ jsx(Head, { title: "Websites" }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Website" }) }),
      /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx(Link, { href: route("websites.create"), class: "mb-2 me-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800 ", children: "Create" }) }),
        /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs(Select, { value: params == null ? void 0 : params.limit, onValueChange: (e) => setParams({ ...params, limit: e }), children: [
            /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: (params == null ? void 0 : params.limit) ?? 10 }) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "10", children: "10" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "25", children: "25" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "50", children: "50" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "75", children: "75" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "100", children: "100" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-72", children: /* @__PURE__ */ jsx(Input, { type: "text", value: params == null ? void 0 : params.search, onChange: (e) => setParams((prev) => ({ ...prev, search: e.target.value })), placeholder: "Pencarian..." }) })
        ] }),
        /* @__PURE__ */ jsxs(Table, { children: [
          /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHead, { className: "w-[50px] text-center", children: "#" }),
            /* @__PURE__ */ jsx(TableHead, { onClick: () => handleSort("website_name"), children: /* @__PURE__ */ jsx(SortIndicator, { label: "Website Name", column: "website_name", field: params == null ? void 0 : params.field, direction: params == null ? void 0 : params.direction }) }),
            /* @__PURE__ */ jsx(TableHead, { onClick: () => handleSort("website_link"), children: /* @__PURE__ */ jsx(SortIndicator, { label: "Website Link", column: "website_link", field: params == null ? void 0 : params.field, direction: params == null ? void 0 : params.direction }) }),
            /* @__PURE__ */ jsx(TableHead, { onClick: () => handleSort("user_id"), children: /* @__PURE__ */ jsx(SortIndicator, { label: "User", column: "user_id", field: params == null ? void 0 : params.field, direction: params == null ? void 0 : params.direction }) }),
            /* @__PURE__ */ jsx(TableHead, { onClick: () => handleSort("expired_date"), children: /* @__PURE__ */ jsx(SortIndicator, { label: "Expired Date", column: "expired_date", field: params == null ? void 0 : params.field, direction: params == null ? void 0 : params.direction }) }),
            /* @__PURE__ */ jsx(TableHead, { onClick: () => handleSort("status"), children: /* @__PURE__ */ jsx(SortIndicator, { label: "Status", column: "status", field: params == null ? void 0 : params.field, direction: params == null ? void 0 : params.direction }) }),
            /* @__PURE__ */ jsx(TableHead, {})
          ] }) }),
          /* @__PURE__ */ jsx(TableBody, { children: websites.length > 0 ? /* @__PURE__ */ jsx(Fragment, { children: websites.map((item, i) => /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableCell, { className: "w-0 py-7 text-center", children: meta.from + i }),
            /* @__PURE__ */ jsx(TableCell, { children: item.website_name }),
            /* @__PURE__ */ jsx(TableCell, { children: item.website_link }),
            /* @__PURE__ */ jsx(TableCell, { children: item.user.name }),
            /* @__PURE__ */ jsx(TableCell, { children: item.expired_date }),
            /* @__PURE__ */ jsx(TableCell, { children: item.status == "Aktif" ? /* @__PURE__ */ jsx("span", { class: "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300", children: item.status }) : item.status == "Waiting Payment" ? /* @__PURE__ */ jsx("span", { class: "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300", children: item.status }) : /* @__PURE__ */ jsx("span", { class: "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300", children: item.status }) }),
            /* @__PURE__ */ jsxs(TableCell, { children: [
              item.status == "Aktif" && /* @__PURE__ */ jsxs("a", { href: item.website_link, target: "_blank", className: "inline-flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2", children: [
                /* @__PURE__ */ jsx(Icon, { icon: "IconLogin2" }),
                " Go Website"
              ] }),
              /* @__PURE__ */ jsxs(Link, { className: "text-gray-900 inline-flex items-center bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2", children: [
                /* @__PURE__ */ jsx(Icon, { icon: "IconLogin2" }),
                " Edit"
              ] })
            ] })
          ] }, i)) }) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 4, className: "animate-pulse py-5 text-center text-base font-semibold text-destructive", children: "Empty Websites" }) }) })
        ] })
      ] })
    ] })
  ] });
}
Index.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { title: "Websites", children: page });
export {
  Index as default
};
