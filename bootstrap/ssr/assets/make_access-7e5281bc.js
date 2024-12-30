import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import "./button-685e6d97.js";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent, e as CardFooter } from "./card-561925ba.js";
import "clsx";
import { L as Label } from "./label-cc69fbbb.js";
import { I as Icon } from "./icon-9d04f58e.js";
import { usePage, Head, Link, router } from "@inertiajs/react";
import { useState } from "react";
import { S as Separator } from "./separator-4854cb3c.js";
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild, Menu } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { l as logo } from "./logo_eagle_media_informatika-fceda23c.js";
import { M as MenuUser } from "./menuUser-b5f13189.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-efa289ef.js";
import "tailwind-merge";
import "@radix-ui/react-label";
import "@tabler/icons-react";
import "@radix-ui/react-separator";
function AppNewLayout({ title, children }) {
  const [open, setOpen] = useState(false);
  const { auth } = usePage().props;
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsxs(Dialog, { open, onClose: setOpen, className: "relative z-50 lg:hidden", children: [
      /* @__PURE__ */ jsx(DialogBackdrop, { transition: true, className: "fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0" }),
      /* @__PURE__ */ jsx("div", { className: "fixed inset-0 flex", children: /* @__PURE__ */ jsxs(DialogPanel, { transition: true, className: "relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full", children: [
        /* @__PURE__ */ jsx(TransitionChild, { children: /* @__PURE__ */ jsx("div", { className: "absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0", children: /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setOpen(false), className: "-m-2.5 p-2.5", children: [
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close sidebar" }),
          /* @__PURE__ */ jsx(XMarkIcon, { "aria-hidden": "true", className: "h-6 w-6 text-white" })
        ] }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-16 shrink-0 items-center", children: /* @__PURE__ */ jsx("img", { alt: "Eagle Media Informatika", src: logo, className: "h-12 w-auto" }) }),
          /* @__PURE__ */ jsx("nav", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ jsxs("ul", { role: "list", className: "flex flex-1 flex-col gap-y-7", children: [
            /* @__PURE__ */ jsx(MenuUser, {}),
            /* @__PURE__ */ jsx("li", { className: "mt-auto", children: /* @__PURE__ */ jsx(Link, { className: "group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600", children: "Settings" }) })
          ] }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col", children: /* @__PURE__ */ jsxs("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-16 shrink-0 items-center", children: /* @__PURE__ */ jsx("img", { alt: "Eagle Media Informatika", src: logo, className: "h-12 w-auto" }) }),
      /* @__PURE__ */ jsx("nav", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ jsxs("ul", { role: "list", className: "flex flex-1 flex-col gap-y-7", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("ul", { role: "list", className: "-mx-2 space-y-1", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { href: route("dashboard"), className: classNames(route().current("dashboard") ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600", "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"), children: [
            /* @__PURE__ */ jsx(Icon, { icon: "IconChartPie3" }),
            "Dashboard"
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
        ] }) }),
        /* @__PURE__ */ jsx("li", { className: "mt-auto", children: /* @__PURE__ */ jsx(Link, { className: "group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600", children: "Settings" }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "lg:pl-72", children: [
      /* @__PURE__ */ jsx("div", { className: "sticky top-0 z-40 lg:mx-auto lg:max-w-7xl lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none", children: [
        /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setOpen(true), className: "-m-2.5 p-2.5 text-gray-700 lg:hidden", children: [
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open sidebar" }),
          /* @__PURE__ */ jsx(Icon, { icon: "IconMenu2" })
        ] }),
        /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "h-6 w-px bg-gray-200 lg:hidden" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-1 gap-x-4 self-stretch lg:gap-x-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-4 lg:gap-x-6", children: [
          /* @__PURE__ */ jsxs("button", { type: "button", className: "-m-2.5 p-2.5 text-gray-400 hover:text-gray-500", children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "View notifications" }),
            /* @__PURE__ */ jsx(Icon, { icon: "IconBell" })
          ] }),
          /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" }),
          /* @__PURE__ */ jsxs(Menu, { as: "div", className: "relative", children: [
            /* @__PURE__ */ jsxs(Menu.Button, { className: "-m-1.5 flex items-center p-1.5", children: [
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open user menu" }),
              /* @__PURE__ */ jsx("img", { alt: "", src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", className: "h-8 w-8 rounded-full bg-gray-50" }),
              /* @__PURE__ */ jsx("span", { className: "hidden lg:flex lg:items-center", children: /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "ml-4 text-sm font-semibold leading-6 text-gray-900", children: auth.user.name }) })
            ] }),
            /* @__PURE__ */ jsx(Menu.Items, { transition: true, className: "absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in", children: /* @__PURE__ */ jsx(Menu.Item, { children: /* @__PURE__ */ jsx(Link, { as: "button", method: "post", href: route("logout"), className: "block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50", children: "Logout" }) }) })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("main", { className: "py-10", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children }) })
    ] })
  ] });
}
function MakeAccess(data) {
  usePage().props;
  const [role_guard_name, setRoleGuardName] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleChangeNormalSelect = (e) => {
    const updatedOptions = [...e.target.options].filter((option) => option.selected).map((x) => x.value);
    console.log("updatedOptions", updatedOptions);
    setRoleGuardName(updatedOptions);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    router.post(
      route("roles.store_make_access.store", [data.role.id]),
      {
        permission: role_guard_name
      },
      {
        onFinish: () => {
          setLoading(false);
        }
      }
    );
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Create Roles" }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handlerSubmit, children: [
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
        /* @__PURE__ */ jsxs(Label, { children: [
          "Role : ",
          data.role.name
        ] }),
        /* @__PURE__ */ jsxs("select", { multiple: true, value: role_guard_name, onChange: handleChangeNormalSelect, className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", children: [
          /* @__PURE__ */ jsx("option", { selected: true, children: "Choose Permission" }),
          data.custom_permission.map((item, i) => /* @__PURE__ */ jsx("option", { value: item.name, children: item.name }))
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs(CardFooter, { children: [
        /* @__PURE__ */ jsx(Link, { href: route("roles.index"), className: "mb-2 me-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700", children: "Back" }),
        loading ? /* @__PURE__ */ jsxs("button", { disabled: true, type: "button", className: "me-2 inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white", children: [
          /* @__PURE__ */ jsxs("svg", { "aria-hidden": "true", role: "status", className: "me-3 inline h-4 w-4 animate-spin text-gray-200 dark:text-gray-600", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
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
        ] }) : /* @__PURE__ */ jsx("button", { className: "mb-2 me-2 rounded-lg bg-gradient-to-r from-green-500 via-green-600 to-green-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-green-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:shadow-lg dark:shadow-green-800/80 dark:focus:ring-green-800", children: "Submit" })
      ] })
    ] })
  ] }) });
}
MakeAccess.layout = (page) => /* @__PURE__ */ jsx(AppNewLayout, { title: "Create Permissions", children: page });
export {
  MakeAccess as default
};
