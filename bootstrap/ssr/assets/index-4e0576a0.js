import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link, usePage, router, Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { T as ThemeToggle } from "./theme-toggle-07cb2e84.js";
import { D as DropdownMenuLabel, a as DropdownMenuSeparator, b as DropdownMenuItem, c as DropdownMenu, d as DropdownMenuTrigger, e as DropdownMenuContent } from "./dropdown-menu-57f4ca50.js";
import { A as Avatar, f as AvatarImage, C as CommandDialog, g as CommandInput, h as CommandList, i as CommandEmpty, j as CommandGroup, k as CommandItem, l as CommandSeparator } from "./command-28ef4a0e.js";
import { c as cn, I as Icon } from "./icon-83e95262.js";
import { P as PrimaryLink } from "./primary-link-5ae1fd5d.js";
import { b as buttonVariants } from "./button-c1e927c9.js";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "@radix-ui/react-icons";
import "cmdk";
import "@radix-ui/react-dialog";
import "clsx";
import "tailwind-merge";
import "@tabler/icons-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
function ApplicationLogo(props) {
  return /* @__PURE__ */ jsx("svg", { ...props, viewBox: "0 0 316 316", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z" }) });
}
function ProfileTrigger({ className = "", auth }) {
  return /* @__PURE__ */ jsx(Avatar, { className: cn(className), children: /* @__PURE__ */ jsx(AvatarImage, { src: auth.user.avatar }) });
}
function MenuItem({ auth }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(DropdownMenuLabel, { className: "pt-3", children: [
      /* @__PURE__ */ jsx("h4", { className: "block", children: auth.user.name }),
      /* @__PURE__ */ jsx("span", { className: "text-xs font-normal", children: auth.user.email })
    ] }),
    /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
    /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: route("home"), children: [
      /* @__PURE__ */ jsx(Icon, { icon: "IconHome2" }),
      "Home"
    ] }) }),
    /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: route("dashboard"), children: [
      /* @__PURE__ */ jsx(Icon, { icon: "IconChartPie3" }),
      "Dashboard"
    ] }) }),
    /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: route("profile.index"), children: [
      /* @__PURE__ */ jsx(Icon, { icon: "IconSettings" }),
      "Settings"
    ] }) }),
    /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { className: "w-full", as: "button", method: "post", href: route("logout"), children: [
      /* @__PURE__ */ jsx(Icon, { icon: "IconLogout" }),
      "Log out"
    ] }) })
  ] });
}
function ResponsiveNavigation({ setOpenCommandPalette }) {
  const { auth } = usePage().props;
  return /* @__PURE__ */ jsx("header", { className: "relative z-40 block md:hidden", children: /* @__PURE__ */ jsx("div", { className: "fixed left-1/2 top-0 h-[4.5rem] w-full -translate-x-1/2", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center justify-between border-b border-border bg-background px-2 py-4", children: [
    /* @__PURE__ */ jsx(Link, { href: route("home"), children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "block h-10 w-auto fill-muted-foreground transition duration-300 hover:fill-foreground" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-2", children: [
      /* @__PURE__ */ jsx(ThemeToggle, {}),
      /* @__PURE__ */ jsx("button", { onClick: () => setOpenCommandPalette(true), className: "flex items-center justify-center gap-x-4 rounded-lg border border-border p-2 text-[0.900rem]/[1.35rem] text-muted-foreground hover:text-foreground focus:outline-none", children: /* @__PURE__ */ jsx(Icon, { icon: "IconSearch", className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsx(DropdownMenu, { children: auth.user ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { className: "select-none outline-none", children: /* @__PURE__ */ jsx(ProfileTrigger, { auth }) }),
        /* @__PURE__ */ jsx(DropdownMenuContent, { align: "end", className: "mt-2 w-64 space-y-2", children: /* @__PURE__ */ jsx(MenuItem, { ...{ auth } }) })
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { className: "grid place-content-center rounded-lg border border-border p-2", children: /* @__PURE__ */ jsx(Icon, { icon: "IconMenuDeep", className: "h-6 w-6 stroke-[1.3] text-muted-foreground" }) }),
        /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "mt-2 w-64 space-y-2", children: [
          /* @__PURE__ */ jsx(DropdownMenuLabel, { className: "pt-3", children: "You are not authenticated" }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: route("login"), children: [
            /* @__PURE__ */ jsx(Icon, { icon: "IconLogin", className: "mr-2 h-5 w-5 stroke-[1.2]" }),
            "Login"
          ] }) }),
          /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: route("register"), children: [
            /* @__PURE__ */ jsx(Icon, { icon: "IconUserCircle", className: "mr-2 h-5 w-5 stroke-[1.2]" }),
            "Register"
          ] }) })
        ] })
      ] }) })
    ] })
  ] }) }) });
}
function CommandPalette({ openCommandPalette, setOpenCommandPalette }) {
  const { auth } = usePage().props;
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpenCommandPalette((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  function Redirect(href) {
    router.get(
      href,
      {},
      {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => setOpenCommandPalette(false)
      }
    );
  }
  function Logout(href) {
    router.post(
      href,
      {},
      {
        onSuccess: () => setOpenCommandPalette(false)
      }
    );
  }
  return /* @__PURE__ */ jsxs(CommandDialog, { open: openCommandPalette, onOpenChange: setOpenCommandPalette, children: [
    /* @__PURE__ */ jsx(CommandInput, { placeholder: "Type a command or search..." }),
    /* @__PURE__ */ jsxs(CommandList, { children: [
      /* @__PURE__ */ jsx(CommandEmpty, { children: "No results found." }),
      /* @__PURE__ */ jsx(CommandGroup, { heading: "Suggestions", children: /* @__PURE__ */ jsxs(CommandItem, { onSelect: () => Redirect(route("home")), children: [
        /* @__PURE__ */ jsx(Icon, { icon: "IconHome2", className: "mr-2 h-4 w-4 stroke-[1.3px]" }),
        /* @__PURE__ */ jsx("span", { children: "Home" })
      ] }) }),
      auth.user ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(CommandSeparator, {}),
        /* @__PURE__ */ jsxs(CommandGroup, { heading: "Settings", children: [
          /* @__PURE__ */ jsxs(CommandItem, { onSelect: () => Redirect(route("dashboard")), children: [
            /* @__PURE__ */ jsx(Icon, { icon: "IconChartPie", className: "mr-2 h-4 w-4 stroke-[1.3px]" }),
            /* @__PURE__ */ jsx("span", { children: "Dashboard" })
          ] }),
          /* @__PURE__ */ jsxs(CommandItem, { onSelect: () => Redirect(route("profile.index")), children: [
            /* @__PURE__ */ jsx(Icon, { icon: "IconSettings", className: "mr-2 h-4 w-4 stroke-[1.3px]" }),
            /* @__PURE__ */ jsx("span", { children: "Settings" })
          ] }),
          /* @__PURE__ */ jsxs(CommandItem, { onSelect: () => Redirect(route("security.index")), children: [
            /* @__PURE__ */ jsx(Icon, { icon: "IconShieldLock", className: "mr-2 h-4 w-4 stroke-[1.3px]" }),
            /* @__PURE__ */ jsx("span", { children: "Security" })
          ] }),
          /* @__PURE__ */ jsxs(CommandItem, { onSelect: () => Redirect(route("danger.index")), children: [
            /* @__PURE__ */ jsx(Icon, { icon: "IconAlertTriangle", className: "mr-2 h-4 w-4 stroke-[1.3px]" }),
            /* @__PURE__ */ jsx("span", { children: "Danger Zone" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(CommandSeparator, {}),
        /* @__PURE__ */ jsx(CommandGroup, { children: /* @__PURE__ */ jsxs(CommandItem, { onSelect: () => Logout(route("logout")), children: [
          /* @__PURE__ */ jsx(Icon, { icon: "IconLogout", className: "mr-2 h-4 w-4 stroke-[1.3px]" }),
          /* @__PURE__ */ jsx("span", { children: "Logout" })
        ] }) })
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(CommandSeparator, {}),
        /* @__PURE__ */ jsxs(CommandGroup, { heading: "Authentication", children: [
          /* @__PURE__ */ jsxs(CommandItem, { onSelect: () => Redirect(route("login")), children: [
            /* @__PURE__ */ jsx(Icon, { icon: "IconLogin", className: "mr-2 h-4 w-4 stroke-[1.3px]" }),
            /* @__PURE__ */ jsx("span", { children: "Login" })
          ] }),
          /* @__PURE__ */ jsxs(CommandItem, { onSelect: () => Redirect(route("register")), children: [
            /* @__PURE__ */ jsx(Icon, { icon: "IconUserCircle", className: "mr-2 h-4 w-4 stroke-[1.3px]" }),
            /* @__PURE__ */ jsx("span", { children: "Register" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function NavigationMenu({ openCommandPalette, setOpenCommandPalette }) {
  const { auth } = usePage().props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(CommandPalette, { openCommandPalette, setOpenCommandPalette }),
    /* @__PURE__ */ jsx("header", { className: "relative z-[60] hidden md:block", children: /* @__PURE__ */ jsx("div", { className: "fixed left-1/2 top-0 h-[4.5rem] w-full -translate-x-1/2", children: /* @__PURE__ */ jsx("nav", { className: "border-b border-border/80 bg-card px-6 py-5", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-x-4", children: /* @__PURE__ */ jsx(Link, { href: route("home"), children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "block h-10 w-auto fill-muted-foreground transition duration-300 hover:fill-foreground" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-4", children: [
        /* @__PURE__ */ jsxs("button", { onClick: () => setOpenCommandPalette(true), className: "flex items-center gap-x-4 rounded-lg border px-4 py-2.5 text-[0.900rem]/[1.35rem] text-muted-foreground hover:text-foreground focus:outline-none", children: [
          /* @__PURE__ */ jsx(Icon, { icon: "IconSearch", className: "h-4 w-4 stroke-[2]" }),
          /* @__PURE__ */ jsx("span", { className: "mx-3", children: "Search..." }),
          /* @__PURE__ */ jsxs("kbd", { className: "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono font-medium opacity-100", children: [
            /* @__PURE__ */ jsx("span", { className: "text-base", children: "⌘" }),
            "K"
          ] })
        ] }),
        /* @__PURE__ */ jsx(ThemeToggle, {}),
        auth.user ? /* @__PURE__ */ jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsx(DropdownMenuTrigger, { className: "select-none outline-none", children: /* @__PURE__ */ jsx(ProfileTrigger, { auth, className: "h-[2.7rem] w-[2.7rem]" }) }),
          /* @__PURE__ */ jsx(DropdownMenuContent, { align: "end", className: "mt-3 w-64 space-y-2", children: /* @__PURE__ */ jsx(MenuItem, { ...{ auth } }) })
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-2", children: [
          /* @__PURE__ */ jsx(PrimaryLink, { className: buttonVariants({ variant: "outline", size: "lg", className: "h-[2.7rem] px-4" }), href: route("login"), value: "login" }),
          /* @__PURE__ */ jsx(PrimaryLink, { className: buttonVariants({ variant: "outline", size: "lg", className: "h-[2.7rem] px-4" }), href: route("register"), value: "register" })
        ] })
      ] })
    ] }) }) }) })
  ] });
}
function AppLayout({ title, children }) {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(ResponsiveNavigation, { openCommandPalette: open, setOpenCommandPalette: setOpen }),
      /* @__PURE__ */ jsx(NavigationMenu, { openCommandPalette: open, setOpenCommandPalette: setOpen }),
      children
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsx(Template, { children: collections.map((item, index) => /* @__PURE__ */ jsx(CardLink, { href: item.url, children: /* @__PURE__ */ jsxs(Content, { children: [
    /* @__PURE__ */ jsx(Title, { children: item.title }),
    /* @__PURE__ */ jsx(Description, { children: item.description })
  ] }) }, index)) });
}
const collections = [
  {
    title: "Documentation",
    description: "Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience with Laravel, we recommend reading our documentation from beginning to end.",
    url: "https://laravel.com/docs"
  },
  {
    title: "Laracasts",
    description: "Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process.",
    url: "https://laracasts.com"
  },
  {
    title: "Laravel News",
    description: "Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials.",
    url: "https://laravel-news.com"
  },
  {
    title: "Vibrant Ecosystem",
    description: "Laravel robust library of first-party tools and libraries, such as Forge, Vapor , Nova , and Envoyer help you take your projects to the next level. Pair them with powerful open source libraries like Cashier , Dusk , Echo , Horizon , Sanctum , Telescope , and more.",
    url: "https://laravel.com"
  }
];
function CardLink({ children, ...props }) {
  return /* @__PURE__ */ jsx("a", { ...props, className: "duration-250 flex scale-100 rounded-lg border bg-white from-gray-700/50 via-transparent p-6 shadow-sm shadow-gray-500/20 transition-all focus:outline focus:outline-2 focus:outline-red-500 motion-safe:hover:scale-[1.01] dark:bg-gray-800/50 dark:bg-gradient-to-bl dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/5", children });
}
function Template({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "bg-card pt-10 lg:pt-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-2 py-6 lg:p-8", children: /* @__PURE__ */ jsx("div", { className: "mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8", children }) }) });
}
function Content({ children }) {
  return /* @__PURE__ */ jsx("div", { children });
}
function Title({ children }) {
  return /* @__PURE__ */ jsx("h2", { className: "mt-3 text-xl font-semibold text-gray-900 dark:text-white", children });
}
function Description({ children }) {
  return /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400", children });
}
Index.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { title: "Home", children: page });
export {
  Index as default
};
