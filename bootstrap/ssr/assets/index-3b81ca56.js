import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { A as AppLayout } from "./app-layout-2d5f9a0f.js";
import { useState } from "react";
import { RadioGroup, Radio } from "@headlessui/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Head } from "@inertiajs/react";
import "./logo_eagle_media_informatika-fceda23c.js";
import "@heroicons/react/24/solid";
function Index() {
  const frequencies = [
    { value: "monthly", label: "Monthly" },
    { value: "lifetime", label: "Lifetime" }
  ];
  const tiers = [
    {
      name: "Startup",
      id: "tier-startup",
      href: "#",
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
      href: "#",
      featured: true,
      description: "-",
      price: { monthly: "1.200.000", lifetime: "14.000.000" },
      mainFeatures: ["Domain /tahun (**.co.id/.com)", "Hosting pertahun (45GB)", "Persyaratan: (**) KTP, SIUP/TDP/AKTA/Surat Izin Usaha"]
    },
    {
      name: "Eksklusif",
      id: "tier-eksklusif",
      href: "#",
      featured: false,
      description: "-",
      price: { monthly: "1.850.000", lifetime: "22.000.000" },
      mainFeatures: ["Domain /tahun (**.co.id/.com)", "Hosting per 2 tahun (45GB)", "Persyaratan: (**) KTP, SIUP/TDP/AKTA/Surat Izin Usaha"]
    }
  ];
  const sections = [
    {
      name: "Catered for business",
      features: [
        {
          name: "Unlimited Inode",
          tiers: {
            Startup: true,
            Profesional: true,
            Eksklusif: true
          }
        },
        {
          name: "Bandwidth",
          tiers: {
            Startup: "Unlimited",
            Profesional: "Unlimited",
            Eksklusif: "Unlimited"
          }
        },
        {
          name: "Database",
          tiers: {
            Startup: "Unlimited",
            Profesional: "Unlimited",
            Eksklusif: "Unlimited"
          }
        },
        {
          name: "Addon Domain",
          tiers: {
            Startup: "Unlimited",
            Profesional: "Unlimited",
            Eksklusif: "Unlimited"
          }
        },
        {
          name: "Sub Domain",
          tiers: {
            Startup: "Unlimited",
            Profesional: "Unlimited",
            Eksklusif: "Unlimited"
          }
        },
        {
          name: "Storage",
          tiers: {
            Startup: "15GB",
            Profesional: "45GB",
            Eksklusif: "per 2 tahun (45GB)"
          }
        },
        {
          name: "Backup",
          tiers: {
            Startup: true,
            Profesional: true,
            Eksklusif: true
          }
        },
        {
          name: "SEO",
          tiers: {
            Startup: true,
            Profesional: true,
            Eksklusif: true
          }
        }
      ]
    },
    {
      name: "Fitur Email",
      features: [
        {
          name: "Email Account",
          tiers: {
            Startup: "Unlimited",
            Profesional: "Unlimited",
            Eksklusif: "Unlimited"
          }
        },
        {
          name: "Attachment",
          tiers: {
            Startup: "50MB E-mail Attachment",
            Profesional: "50MB E-mail Attachment",
            Eksklusif: "50MB E-mail Attachment"
          }
        },
        {
          name: "Fitur Lain",
          tiers: {
            Startup: "POP3 / IMAP, SMTP, Anti Spam, MailChannel",
            Profesional: "POP3 / IMAP, SMTP, Anti Spam, MailChannel",
            Eksklusif: "POP3 / IMAP, SMTP, Anti Spam, MailChannel"
          }
        }
      ]
    }
  ];
  const [frequency, setFrequency] = useState(frequencies[0]);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
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
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "isolate overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "flow-root bg-gray-900 pb-16 pt-24 sm:pt-32 lg:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsx("h2", { className: "mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-white", children: "Jasa Website Company Profile" }),
          /* @__PURE__ */ jsx("div", { className: "mt-16 flex justify-center", children: /* @__PURE__ */ jsx("fieldset", { "aria-label": "Payment frequency", children: /* @__PURE__ */ jsx(RadioGroup, { value: frequency, onChange: setFrequency, className: "grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white", children: frequencies.map((option) => /* @__PURE__ */ jsx(Radio, { value: option, className: "cursor-pointer rounded-full px-2.5 py-1 data-[checked]:bg-indigo-500", children: option.label }, option.value)) }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3", children: [
          /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 1208 1024", "aria-hidden": "true", className: "absolute -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0", children: [
            /* @__PURE__ */ jsx("ellipse", { cx: 604, cy: 512, rx: 604, ry: 512, fill: "url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)" }),
            /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("radialGradient", { id: "d25c25d4-6d43-4bf9-b9ac-1842a30a4867", children: [
              /* @__PURE__ */ jsx("stop", { stopColor: "#7775D6" }),
              /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#E935C1" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10" }),
          tiers.map((tier) => /* @__PURE__ */ jsx("div", { className: classNames(tier.featured ? "z-10 bg-white shadow-xl ring-1 ring-gray-900/10" : "bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0", "relative rounded-2xl"), children: /* @__PURE__ */ jsxs("div", { className: "p-8 lg:pt-12 xl:p-10 xl:pt-14", children: [
            /* @__PURE__ */ jsx("h3", { id: tier.id, className: classNames(tier.featured ? "text-gray-900" : "text-white", "text-sm font-semibold leading-6"), children: tier.name }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch", children: [
              /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-center gap-x-4", children: [
                /* @__PURE__ */ jsx("p", { className: classNames(tier.featured ? "text-gray-900" : "text-white", "text-4xl font-bold tracking-tight"), children: tier.price[frequency.value] }),
                /* @__PURE__ */ jsxs("div", { className: "text-sm leading-5", children: [
                  /* @__PURE__ */ jsx("p", { className: tier.featured ? "text-gray-900" : "text-white", children: "IDR" }),
                  /* @__PURE__ */ jsx("p", { className: tier.featured ? "text-gray-500" : "text-gray-400", children: `Billed ${frequency.value}` })
                ] })
              ] }),
              /* @__PURE__ */ jsx("a", { href: tier.href, "aria-describedby": tier.id, className: classNames(tier.featured ? "bg-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600" : "bg-white/10 hover:bg-white/20 focus-visible:outline-white", "rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"), children: "Buy this plan" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-8 flow-root sm:mt-10", children: /* @__PURE__ */ jsx("ul", { role: "list", className: classNames(tier.featured ? "divide-gray-900/5 border-gray-900/5 text-gray-600" : "divide-white/5 border-white/5 text-white", "-my-2 divide-y border-t text-sm leading-6 lg:border-t-0"), children: tier.mainFeatures.map((mainFeature) => /* @__PURE__ */ jsxs("li", { className: "flex gap-x-3 py-2", children: [
              /* @__PURE__ */ jsx(CheckIcon, { "aria-hidden": "true", className: classNames(tier.featured ? "text-indigo-600" : "text-gray-500", "h-6 w-5 flex-none") }),
              mainFeature
            ] }, mainFeature)) }) })
          ] }) }, tier.id))
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "relative bg-gray-50 lg:pt-14", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8", children: [
        /* @__PURE__ */ jsxs("section", { "aria-labelledby": "mobile-comparison-heading", className: "lg:hidden", children: [
          /* @__PURE__ */ jsx("h2", { id: "mobile-comparison-heading", className: "sr-only", children: "Feature comparison" }),
          /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-2xl space-y-16", children: tiers.map((tier) => /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-900/10", children: [
            /* @__PURE__ */ jsxs("div", { className: classNames(tier.featured ? "border-indigo-600" : "border-transparent", "-mt-px w-72 border-t-2 pt-10 md:w-80"), children: [
              /* @__PURE__ */ jsx("h3", { className: classNames(tier.featured ? "text-indigo-600" : "text-gray-900", "text-sm font-semibold leading-6"), children: tier.name }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm leading-6 text-gray-600", children: tier.description })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-10", children: sections.map((section) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold leading-6 text-gray-900", children: section.name }),
              /* @__PURE__ */ jsxs("div", { className: "relative mt-6", children: [
                /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block" }),
                /* @__PURE__ */ jsx("div", { className: classNames(tier.featured ? "ring-2 ring-indigo-600" : "ring-1 ring-gray-900/10", "relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0"), children: /* @__PURE__ */ jsx("dl", { className: "divide-y divide-gray-200 text-sm leading-6", children: section.features.map((feature) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0", children: [
                  /* @__PURE__ */ jsx("dt", { className: "pr-4 text-gray-600", children: feature.name }),
                  /* @__PURE__ */ jsx("dd", { className: "flex items-center justify-end sm:justify-center sm:px-4", children: typeof feature.tiers[tier.name] === "string" ? /* @__PURE__ */ jsx("span", { className: tier.featured ? "font-semibold text-indigo-600" : "text-gray-900", children: feature.tiers[tier.name] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                    feature.tiers[tier.name] === true ? /* @__PURE__ */ jsx(CheckIcon, { "aria-hidden": "true", className: "mx-auto h-5 w-5 text-indigo-600" }) : /* @__PURE__ */ jsx(XMarkIcon, { "aria-hidden": "true", className: "mx-auto h-5 w-5 text-gray-400" }),
                    /* @__PURE__ */ jsx("span", { className: "sr-only", children: feature.tiers[tier.name] === true ? "Yes" : "No" })
                  ] }) })
                ] }, feature.name)) }) }),
                /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: classNames(tier.featured ? "ring-2 ring-indigo-600" : "ring-1 ring-gray-900/10", "pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block") })
              ] })
            ] }, section.name)) })
          ] }, tier.id)) })
        ] }),
        /* @__PURE__ */ jsxs("section", { "aria-labelledby": "comparison-heading", className: "hidden lg:block", children: [
          /* @__PURE__ */ jsx("h2", { id: "comparison-heading", className: "sr-only", children: "Feature comparison" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-x-8 border-t border-gray-900/10 before:block", children: tiers.map((tier) => /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "-mt-px", children: /* @__PURE__ */ jsxs("div", { className: classNames(tier.featured ? "border-indigo-600" : "border-transparent", "border-t-2 pt-10"), children: [
            /* @__PURE__ */ jsx("p", { className: classNames(tier.featured ? "text-indigo-600" : "text-gray-900", "text-sm font-semibold leading-6"), children: tier.name }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm leading-6 text-gray-600", children: tier.description })
          ] }) }, tier.id)) }),
          /* @__PURE__ */ jsx("div", { className: "-mt-6 space-y-16", children: sections.map((section) => /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: section.name }),
            /* @__PURE__ */ jsxs("div", { className: "relative -mx-8 mt-10", children: [
              /* @__PURE__ */ jsxs("div", { "aria-hidden": "true", className: "absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block", children: [
                /* @__PURE__ */ jsx("div", { className: "h-full w-full rounded-lg bg-white shadow-sm" }),
                /* @__PURE__ */ jsx("div", { className: "h-full w-full rounded-lg bg-white shadow-sm" }),
                /* @__PURE__ */ jsx("div", { className: "h-full w-full rounded-lg bg-white shadow-sm" })
              ] }),
              /* @__PURE__ */ jsxs("table", { className: "relative w-full border-separate border-spacing-x-8", children: [
                /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "text-left", children: [
                  /* @__PURE__ */ jsx("th", { scope: "col", children: /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Feature" }) }),
                  tiers.map((tier) => /* @__PURE__ */ jsx("th", { scope: "col", children: /* @__PURE__ */ jsxs("span", { className: "sr-only", children: [
                    tier.name,
                    " tier"
                  ] }) }, tier.id))
                ] }) }),
                /* @__PURE__ */ jsx("tbody", { children: section.features.map((feature, featureIdx) => /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsxs("th", { scope: "row", className: "w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900", children: [
                    feature.name,
                    featureIdx !== section.features.length - 1 ? /* @__PURE__ */ jsx("div", { className: "absolute inset-x-8 mt-3 h-px bg-gray-200" }) : null
                  ] }),
                  tiers.map((tier) => /* @__PURE__ */ jsx("td", { className: "relative w-1/4 px-4 py-0 text-center", children: /* @__PURE__ */ jsx("span", { className: "relative h-full w-full py-3", children: typeof feature.tiers[tier.name] === "string" ? /* @__PURE__ */ jsx("span", { className: classNames(tier.featured ? "font-semibold text-indigo-600" : "text-gray-900", "text-sm leading-6"), children: feature.tiers[tier.name] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                    feature.tiers[tier.name] === true ? /* @__PURE__ */ jsx(CheckIcon, { "aria-hidden": "true", className: "mx-auto h-5 w-5 text-indigo-600" }) : /* @__PURE__ */ jsx(XMarkIcon, { "aria-hidden": "true", className: "mx-auto h-5 w-5 text-gray-400" }),
                    /* @__PURE__ */ jsx("span", { className: "sr-only", children: feature.tiers[tier.name] === true ? "Yes" : "No" })
                  ] }) }) }, tier.id))
                ] }, feature.name)) })
              ] }),
              /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block", children: tiers.map((tier) => /* @__PURE__ */ jsx("div", { className: classNames(tier.featured ? "ring-2 ring-indigo-600" : "ring-1 ring-gray-900/10", "rounded-lg") }, tier.id)) })
            ] })
          ] }, section.name)) })
        ] })
      ] }) })
    ] })
  ] });
}
Index.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { title: "Eagle Media Informatika", children: page });
export {
  Index as default
};
