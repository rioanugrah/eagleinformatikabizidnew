import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { A as AppNewLayout } from "./appnew-layout-b37a51df.js";
import "@inertiajs/react";
import "react";
import "./button-c1e927c9.js";
import "./sheet-1b4c457c.js";
import "clsx";
import "./dropdown-menu-57f4ca50.js";
import "./command-28ef4a0e.js";
import "./separator-8f30fd49.js";
import "./card-98e72ec0.js";
import "./icon-83e95262.js";
import "tailwind-merge";
import "@tabler/icons-react";
import "@headlessui/react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-icons";
import "@radix-ui/react-toast";
import "@radix-ui/react-dialog";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "cmdk";
import "@radix-ui/react-separator";
function Index({ auth }) {
  const projects = [
    { name: "Balance", initials: "BA", href: "#", members: "Rp. 10.000", bgColor: "bg-blue-600" }
    // { name: 'Component Design', initials: 'CD', href: '#', members: 12, bgColor: 'bg-purple-600' },
    // { name: 'Templates', initials: 'T', href: '#', members: 16, bgColor: 'bg-yellow-500' },
    // { name: 'React Components', initials: 'RC', href: '#', members: 8, bgColor: 'bg-green-500' },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    // <Container>
    //     <Card>
    //         <CardHeader>
    //             <CardTitle>Dashboard</CardTitle>
    //             <CardDescription>Selamat Datang {auth.user.name}.</CardDescription>
    //         </CardHeader>
    //         <CardContent>
    //             <h2 className="text-sm font-medium text-gray-500">Pinned Projects</h2>
    //         </CardContent>
    //     </Card>
    // </Container>
    /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-sm font-medium text-gray-500", children: "Dashboard" }),
      /* @__PURE__ */ jsx("ul", { role: "list", className: "mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4", children: projects.map((project) => /* @__PURE__ */ jsxs("li", { className: "col-span-1 flex rounded-md shadow-sm", children: [
        /* @__PURE__ */ jsx("div", { className: classNames(project.bgColor, "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"), children: project.initials }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1 truncate px-4 py-2 text-sm", children: [
            /* @__PURE__ */ jsx("a", { href: project.href, className: "font-medium text-gray-900 hover:text-gray-600", children: project.name }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: project.members })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 pr-2", children: /* @__PURE__ */ jsx("button", { type: "button", className: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2", children: /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open options" }) }) })
        ] })
      ] }, project.name)) })
    ] })
  );
}
Index.layout = (page) => /* @__PURE__ */ jsx(AppNewLayout, { title: "Dashboard", children: page });
export {
  Index as default
};
