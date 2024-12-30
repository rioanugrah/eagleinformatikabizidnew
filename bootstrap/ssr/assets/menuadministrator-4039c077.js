import { jsx, jsxs } from "react/jsx-runtime";
import { I as Icon } from "./icon-9d04f58e.js";
import { S as Separator } from "./separator-4854cb3c.js";
import { Link } from "@inertiajs/react";
function MenuAdministrator() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("ul", { role: "list", className: "-mx-2 space-y-1", children: [
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { href: route("dashboard"), className: classNames(route().current("dashboard") ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600", "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"), children: [
      /* @__PURE__ */ jsx(Icon, { icon: "IconChartPie3" }),
      "Dashboard"
    ] }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { href: route("order.index"), className: classNames(route().current("order*") ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600", "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"), children: [
      /* @__PURE__ */ jsx(Icon, { icon: "IconChartPie3" }),
      "Order"
    ] }) }),
    /* @__PURE__ */ jsx(Separator, { className: "!my-4" }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Categories" }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { href: route("categories.index"), className: classNames(route().current("categories*") ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600", "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"), children: [
      /* @__PURE__ */ jsx(Icon, { icon: "IconChartPie3" }),
      "Category"
    ] }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Products" }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { href: route("products.index"), className: classNames(route().current("products*") ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600", "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"), children: [
      /* @__PURE__ */ jsx(Icon, { icon: "IconChartPie3" }),
      "Products"
    ] }) }),
    /* @__PURE__ */ jsx(Separator, { className: "!my-4" }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Payment" }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { href: route("billing.index"), className: classNames(route().current("billing.index*") ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600", "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"), children: [
      /* @__PURE__ */ jsx(Icon, { icon: "IconChartPie3" }),
      "Billing"
    ] }) }),
    /* @__PURE__ */ jsx(Separator, { className: "!my-4" }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", { className: "text-sm", children: "User Management" }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { href: route("permissions.index"), className: classNames(route().current("permissions*") ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600", "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"), children: [
      /* @__PURE__ */ jsx(Icon, { icon: "IconChartPie3" }),
      "Permissions"
    ] }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { href: route("roles.index"), className: classNames(route().current("roles*") ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600", "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"), children: [
      /* @__PURE__ */ jsx(Icon, { icon: "IconChartPie3" }),
      "Roles"
    ] }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { href: route("users.index"), className: classNames(route().current("users*") ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600", "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"), children: [
      /* @__PURE__ */ jsx(Icon, { icon: "IconChartPie3" }),
      "Users"
    ] }) }),
    /* @__PURE__ */ jsx(Separator, { className: "!my-4" }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { href: route("profile.index"), className: classNames(route().current("profile*") ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600", "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"), children: [
      /* @__PURE__ */ jsx(Icon, { icon: "IconSettings" }),
      "Profile"
    ] }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { href: route("security.index"), className: classNames(route().current("security*") ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600", "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"), children: [
      /* @__PURE__ */ jsx(Icon, { icon: "IconShieldLock" }),
      "Security"
    ] }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { href: route("danger.index"), className: classNames(route().current("danger*") ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600", "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"), children: [
      /* @__PURE__ */ jsx(Icon, { icon: "IconShieldLock" }),
      "Danger zone"
    ] }) })
  ] }) });
}
export {
  MenuAdministrator as M
};
