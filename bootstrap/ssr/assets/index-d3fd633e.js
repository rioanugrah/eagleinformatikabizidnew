import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { A as AppLayout } from "./app-layout-e05f7bf6.js";
import { useState } from "react";
import { Head } from "@inertiajs/react";
import "@headlessui/react";
import "./logo_eagle_media_informatika-fceda23c.js";
import "@heroicons/react/24/solid";
function Index() {
  const frequencies = [
    { value: "monthly", label: "Monthly" },
    { value: "lifetime", label: "Lifetime" }
  ];
  [
    {
      name: "Startup",
      id: "tier-startup",
      href: route("login"),
      featured: false,
      description: "-",
      price: { monthly: "700.000", lifetime: "5.500.000" },
      mainFeatures: [
        "Domain /tahun (**.co.id/.com)",
        "Hosting pertahun (15GB)",
        "Persyaratan: (**) KTP, SIUP/TDP/AKTA/Surat Izin Usaha"
      ]
    },
    {
      name: "Profesional",
      id: "tier-profesional",
      href: route("login"),
      featured: true,
      description: "-",
      price: { monthly: "1.200.000", lifetime: "14.000.000" },
      mainFeatures: ["Domain /tahun (**.co.id/.com)", "Hosting pertahun (45GB)", "Persyaratan: (**) KTP, SIUP/TDP/AKTA/Surat Izin Usaha"]
    },
    {
      name: "Eksklusif",
      id: "tier-eksklusif",
      href: route("login"),
      featured: false,
      description: "-",
      price: { monthly: "1.850.000", lifetime: "22.000.000" },
      mainFeatures: ["Domain /tahun (**.co.id/.com)", "Hosting per 2 tahun (45GB)", "Persyaratan: (**) KTP, SIUP/TDP/AKTA/Surat Izin Usaha"]
    }
  ];
  useState(frequencies[0]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Eagle Media Informatika" }),
    /* @__PURE__ */ jsx("div", { className: "bg-indigo-100", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl", children: [
        "Analisa Keamanan",
        /* @__PURE__ */ jsx("br", {}),
        "Untuk Data Besar."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: "Get started" }),
        /* @__PURE__ */ jsxs("a", { href: "#", className: "text-sm font-semibold leading-6 text-gray-900", children: [
          "Learn more ",
          /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "→" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32", children: [
      /* @__PURE__ */ jsx("img", { alt: "", src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply", className: "absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" }),
      /* @__PURE__ */ jsx("div", { className: "hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl", children: /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          },
          className: "aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu", children: /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          },
          className: "aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl lg:mx-0", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold tracking-tight text-white sm:text-6xl", children: "Tentang Kami" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg leading-8 text-gray-300", children: "Eagle Media Informatika adalah perusahaan pembuatan website dan aplikasi yang berdedikasi untuk membantu bisnis Anda tumbuh secara online. kami memahami bahwa website adalah wajah bisnis Anda di dunia digital, oleh karena itu kami berkomitmen untuk menciptakan website yang tidak hanya menarik secara visual, tetapi juga mudah digunakan dan efektif dalam mencapai tujuan bisnis Anda." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-between pb-16 pt-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "hover-up-5 wow animate__ animate__fadeInUp animated flex w-1/2 py-4 lg:w-auto", "data-wow-delay": ".2s", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-blueGray-50 flex h-12 w-12 items-center justify-center rounded-xl text-blue-500 sm:h-20 sm:w-20", children: /* @__PURE__ */ jsx("svg", { className: "h-8 w-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "ml-2 sm:ml-6 sm:py-2", children: [
          /* @__PURE__ */ jsx("span", { className: "font-heading font-bold sm:text-2xl", children: "+ " }),
          /* @__PURE__ */ jsx("span", { className: "font-heading count font-bold sm:text-2xl", children: "10" }),
          /* @__PURE__ */ jsx("p", { className: "text-blueGray-400 text-xs sm:text-base", children: "Mitra Kami" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hover-up-5 wow animate__ animate__fadeInUp animated flex w-1/2 py-4 lg:w-auto", "data-wow-delay": ".2s", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-blueGray-50 flex h-12 w-12 items-center justify-center rounded-xl text-blue-500 sm:h-20 sm:w-20", children: /* @__PURE__ */ jsx("svg", { className: "h-8 w-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "ml-2 sm:ml-6 sm:py-2", children: [
          /* @__PURE__ */ jsx("span", { className: "font-heading font-bold sm:text-2xl", children: "+ " }),
          /* @__PURE__ */ jsx("span", { className: "font-heading count font-bold sm:text-2xl", children: "57" }),
          /* @__PURE__ */ jsx("span", { className: "font-heading font-bold sm:text-2xl", children: " " }),
          /* @__PURE__ */ jsx("p", { className: "text-blueGray-400 text-xs sm:text-base", children: "Project Selesai" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hover-up-5 wow animate__ animate__fadeInUp animated flex w-1/2 py-4 lg:w-auto", "data-wow-delay": ".2s", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-blueGray-50 flex h-12 w-12 items-center justify-center rounded-xl text-blue-500 sm:h-20 sm:w-20", children: /* @__PURE__ */ jsx("svg", { className: "h-8 w-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx(
          "path",
          {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          }
        ) }) }),
        /* @__PURE__ */ jsxs("div", { className: "ml-2 sm:ml-6 sm:py-2", children: [
          /* @__PURE__ */ jsx("span", { className: "font-heading font-bold sm:text-2xl", children: "+ " }),
          /* @__PURE__ */ jsx("span", { className: "font-heading count font-bold sm:text-2xl", children: "10" }),
          /* @__PURE__ */ jsx("p", { className: "text-blueGray-400 text-xs sm:text-base", children: "Klien" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hover-up-5 wow animate__ animate__fadeInUp animated flex w-1/2 py-4 lg:w-auto", "data-wow-delay": ".2s", children: [
        /* @__PURE__ */ jsx("div", { class: "bg-blueGray-50 flex h-12 w-12 items-center justify-center rounded-xl text-blue-500 sm:h-20 sm:w-20", children: /* @__PURE__ */ jsx("svg", { class: "h-8 w-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" }) }) }),
        /* @__PURE__ */ jsxs("div", { class: "ml-2 sm:ml-6 sm:py-2", children: [
          /* @__PURE__ */ jsx("span", { class: "font-heading font-bold sm:text-2xl", children: "+ " }),
          /* @__PURE__ */ jsx("span", { class: "font-heading count font-bold sm:text-2xl", children: "320" }),
          /* @__PURE__ */ jsx("p", { class: "text-blueGray-400 text-xs sm:text-base", children: "Pekerjaan Penelitian" })
        ] })
      ] })
    ] }) })
  ] });
}
Index.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { title: "Eagle Media Informatika", children: page });
export {
  Index as default
};
