import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { I as Icon } from "./icon-9d04f58e.js";
import { usePage, Head, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import "./separator-4854cb3c.js";
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild, Menu } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { M as MenuAdministrator } from "./menuadministrator-4039c077.js";
import { M as MenuUser } from "./menuUser-b5f13189.js";
import { toast, ToastContainer } from "react-toastify";
import { l as logo } from "./logo_eagle_media_informatika-fceda23c.js";
function AppLayout({ title, children }) {
  const [open, setOpen] = useState(false);
  useState(true);
  const { auth, flash } = usePage().props;
  useEffect(() => {
    if (flash.message.success) {
      toast.success(flash.message.success);
    }
    if (flash.message.error) {
      toast.error(flash.message.error);
    }
  }, [flash]);
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
            auth.user.access == true ? /* @__PURE__ */ jsx(MenuAdministrator, {}) : /* @__PURE__ */ jsx(MenuUser, {}),
            /* @__PURE__ */ jsx("li", { className: "mt-auto", children: /* @__PURE__ */ jsx(Link, { className: "group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600", children: "Settings" }) })
          ] }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col", children: /* @__PURE__ */ jsxs("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-16 shrink-0 items-center", children: /* @__PURE__ */ jsx("img", { alt: "Eagle Media Informatika", src: logo, className: "h-12 w-auto" }) }),
      /* @__PURE__ */ jsx("nav", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ jsxs("ul", { role: "list", className: "flex flex-1 flex-col gap-y-7", children: [
        auth.user.access == true ? /* @__PURE__ */ jsx(MenuAdministrator, {}) : /* @__PURE__ */ jsx(MenuUser, {}),
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
              /* @__PURE__ */ jsx("img", { src: auth.user.avatar, className: "h-8 w-8 rounded-full bg-gray-50" }),
              /* @__PURE__ */ jsx("span", { className: "hidden lg:flex lg:items-center", children: /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "ml-4 text-sm font-semibold leading-6 text-gray-900", children: auth.user.name }) })
            ] }),
            /* @__PURE__ */ jsx(Menu.Items, { transition: true, className: "absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in", children: /* @__PURE__ */ jsx(Menu.Item, { children: /* @__PURE__ */ jsx(Link, { as: "button", method: "post", href: route("logout"), className: "block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50", children: "Logout" }) }) })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("main", { className: "py-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsx(ToastContainer, {}),
        children
      ] }) })
    ] })
  ] });
}
export {
  AppLayout as A
};
