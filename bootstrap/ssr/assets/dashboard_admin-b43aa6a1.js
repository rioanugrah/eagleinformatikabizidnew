import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { A as AppLayout } from "./appLayout-8a53420a.js";
import "clsx";
import "@inertiajs/react";
import { useState, useEffect } from "react";
import "./separator-4854cb3c.js";
import "./button-685e6d97.js";
import "./sheet-d460a36b.js";
import "./dropdown-menu-0037783a.js";
import "./command-973b6e4a.js";
import { C as Card, a as CardHeader, d as CardContent } from "./card-561925ba.js";
import { BarChart } from "@mui/x-charts/BarChart/index.js";
import "./icon-9d04f58e.js";
import "./utils-efa289ef.js";
import "tailwind-merge";
import "@tabler/icons-react";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "./menuadministrator-7073ef60.js";
import "./menuUser-b5f13189.js";
import "react-toastify";
import "./logo_eagle_media_informatika-fceda23c.js";
import "axios";
import "@radix-ui/react-separator";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-icons";
import "@radix-ui/react-toast";
import "@radix-ui/react-dialog";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "cmdk";
function DashboardAdmin(props, { auth }) {
  useState(false);
  const format_currency = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  };
  const projects = [
    { name: "Balance", initials: "BA", href: "#", members: format_currency(0), bgColor: "bg-blue-600" },
    { name: "Total Sales", initials: "TS", href: "#", members: format_currency(props.total_sales), bgColor: "bg-green-600" }
    // { name: 'Component Design', initials: 'CD', href: '#', members: 12, bgColor: 'bg-purple-600' },
    // { name: 'Templates', initials: 'T', href: '#', members: 16, bgColor: 'bg-yellow-500' },
    // { name: 'React Components', initials: 'RC', href: '#', members: 8, bgColor: 'bg-green-500' },
  ];
  const [total_penjualan, setTotalPenjualan] = useState(props.total_penjualan);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  useEffect(() => {
    {
      const snapSrcUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
      const myMidtransClientKey = "SB-Mid-client-o9XnRFm-597OCoz2";
      const script = document.createElement("script");
      script.src = snapSrcUrl;
      script.setAttribute("data-client-key", myMidtransClientKey);
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  });
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
      ] }, project.name)) }),
      /* @__PURE__ */ jsxs(Card, { className: "mt-8", children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "font-bold", children: "Total Penjualan" }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(
          BarChart,
          {
            series: [{ data: total_penjualan.map((item, i) => item.data) }],
            height: 350,
            xAxis: [
              {
                data: total_penjualan.map((item, i) => item.date),
                scaleType: "band"
              }
            ],
            margin: { top: 10, bottom: 30, left: 40, right: 10 }
          }
        ) })
      ] })
    ] })
  );
}
DashboardAdmin.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { title: "Dashboard", children: page });
export {
  DashboardAdmin as default
};
