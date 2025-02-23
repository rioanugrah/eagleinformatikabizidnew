import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { l as logo } from "./logo_eagle_media_informatika-fceda23c.js";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
function AppLayout({ title, children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = [
    { name: "Beranda", href: route("frontend.index") },
    { name: "Tentang Kami", href: route("frontend.tentang_kami") },
    // { name: 'Services', href: route('frontend.services') },
    { name: "Kontak Kami", href: route("frontend.kontak_kami") }
    // { name: 'Marketplace', href: '#' },
    // { name: 'Company', href: '#' },
  ];
  const footer_navigation = {
    solutions: [
      { name: "Marketing", href: "#" },
      { name: "Analytics", href: "#" },
      { name: "Commerce", href: "#" },
      { name: "Insights", href: "#" }
    ],
    support: [
      { name: "Pricing", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Guides", href: "#" },
      { name: "API Status", href: "#" }
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Jobs", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" }
    ],
    legal: [
      { name: "Claim", href: "#" },
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" }
    ],
    social: [
      // {
      //     name: 'Facebook',
      //     href: '#',
      //     icon: (props) => (
      //         <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
      //             <path fillRule='evenodd' d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' clipRule='evenodd' />
      //         </svg>
      //     ),
      // },
      {
        name: "Instagram",
        href: "#",
        icon: (props) => /* @__PURE__ */ jsx("svg", { fill: "currentColor", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
            clipRule: "evenodd"
          }
        ) })
      }
      // {
      //     name: 'X',
      //     href: '#',
      //     icon: (props) => (
      //         <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
      //             <path d='M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z' />
      //         </svg>
      //     ),
      // },
      // {
      //     name: 'GitHub',
      //     href: '#',
      //     icon: (props) => (
      //         <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
      //             <path
      //                 fillRule='evenodd'
      //                 d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
      //                 clipRule='evenodd'
      //             />
      //         </svg>
      //     ),
      // },
      // {
      //     name: 'YouTube',
      //     href: '#',
      //     icon: (props) => (
      //         <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
      //             <path fillRule='evenodd' d='M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z' clipRule='evenodd' />
      //         </svg>
      //     ),
      // },
    ]
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("header", { className: "bg-white", children: [
      /* @__PURE__ */ jsxs("nav", { "aria-label": "Global", className: "mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8", children: [
        /* @__PURE__ */ jsx("div", { className: "flex lg:flex-1", children: /* @__PURE__ */ jsxs(Link, { href: route("frontend.index"), className: "-m-1.5 p-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Eagle Media Informatika" }),
          /* @__PURE__ */ jsx("img", { alt: "Logo Eagle Media Informatika", src: logo, className: "h-14 w-auto" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "hidden lg:flex lg:gap-x-12", children: navigation.map((item) => /* @__PURE__ */ jsx(Link, { href: item.href, className: "text-sm font-semibold leading-6 text-gray-900", children: item.name }, item.name)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-1 items-center justify-end gap-x-6", children: [
          /* @__PURE__ */ jsx(Link, { href: route("login"), className: "hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900", children: "Log in" }),
          /* @__PURE__ */ jsx(Link, { href: route("register"), className: "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: "Register" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex lg:hidden", children: /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setMobileMenuOpen(true), className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700", children: [
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open main menu" }),
          /* @__PURE__ */ jsx(Bars3Icon, { "aria-hidden": "true", className: "h-6 w-6" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Dialog, { open: mobileMenuOpen, onClose: setMobileMenuOpen, className: "lg:hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-10" }),
        /* @__PURE__ */ jsxs(DialogPanel, { className: "fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-6", children: [
            /* @__PURE__ */ jsxs("a", { href: "#", className: "-m-1.5 p-1.5", children: [
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Your Company" }),
              /* @__PURE__ */ jsx("img", { alt: "", src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600", className: "h-8 w-auto" })
            ] }),
            /* @__PURE__ */ jsx(Link, { href: route("register"), className: "ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: "Register" }),
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setMobileMenuOpen(false), className: "-m-2.5 rounded-md p-2.5 text-gray-700", children: [
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close menu" }),
              /* @__PURE__ */ jsx(XMarkIcon, { "aria-hidden": "true", className: "h-6 w-6" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ jsxs("div", { className: "-my-6 divide-y divide-gray-500/10", children: [
            /* @__PURE__ */ jsx("div", { className: "space-y-2 py-6", children: navigation.map((item) => /* @__PURE__ */ jsx("a", { href: item.href, className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50", children: item.name }, item.name)) }),
            /* @__PURE__ */ jsx("div", { className: "py-6", children: /* @__PURE__ */ jsx(Link, { href: route("login"), className: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50", children: "Log in" }) })
          ] }) })
        ] })
      ] })
    ] }),
    children,
    /* @__PURE__ */ jsxs("footer", { "aria-labelledby": "footer-heading", className: "bg-white", children: [
      /* @__PURE__ */ jsx("h2", { id: "footer-heading", className: "sr-only", children: "Footer" }),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32", children: [
        /* @__PURE__ */ jsxs("div", { className: "xl:grid xl:grid-cols-3 xl:gap-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsx("img", { alt: "Logo Eagle Media Informatika", src: logo, className: "h-14" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm leading-6 text-gray-600", children: "Eagle Media Informatika adalah perusahaan pembuatan website dan aplikasi yang berdedikasi untuk membantu bisnis Anda tumbuh secara online." }),
            /* @__PURE__ */ jsx("div", { className: "flex space-x-6", children: footer_navigation.social.map((item) => /* @__PURE__ */ jsxs("a", { href: item.href, className: "text-gray-400 hover:text-gray-500", children: [
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: item.name }),
              /* @__PURE__ */ jsx(item.icon, { "aria-hidden": "true", className: "h-6 w-6" })
            ] }, item.name)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0", children: [
            /* @__PURE__ */ jsxs("div", { className: "md:grid md:grid-cols-2 md:gap-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Solutions" }),
                /* @__PURE__ */ jsx("ul", { role: "list", className: "mt-6 space-y-4", children: footer_navigation.solutions.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: item.href, className: "text-sm leading-6 text-gray-600 hover:text-gray-900", children: item.name }) }, item.name)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-10 md:mt-0", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Support" }),
                /* @__PURE__ */ jsx("ul", { role: "list", className: "mt-6 space-y-4", children: footer_navigation.support.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: item.href, className: "text-sm leading-6 text-gray-600 hover:text-gray-900", children: item.name }) }, item.name)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "md:grid md:grid-cols-2 md:gap-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Company" }),
                /* @__PURE__ */ jsx("ul", { role: "list", className: "mt-6 space-y-4", children: footer_navigation.company.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: item.href, className: "text-sm leading-6 text-gray-600 hover:text-gray-900", children: item.name }) }, item.name)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-10 md:mt-0", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Legal" }),
                /* @__PURE__ */ jsx("ul", { role: "list", className: "mt-6 space-y-4", children: footer_navigation.legal.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: item.href, className: "text-sm leading-6 text-gray-600 hover:text-gray-900", children: item.name }) }, item.name)) })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24", children: /* @__PURE__ */ jsx("p", { className: "text-xs leading-5 text-gray-500", children: "© 2025 PT Eagle Media Informatika All Rights Reserved." }) })
      ] })
    ] })
  ] });
}
export {
  AppLayout as A
};
