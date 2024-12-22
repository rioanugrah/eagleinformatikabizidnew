import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { RadioGroup, Radio } from "@headlessui/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
const logo = "/build/assets/logo_eagle_media_informatika-296c447f.png";
function AppLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = [
    { name: "Beranda", href: route("frontend.index") },
    { name: "Tentang Kami", href: "#" },
    { name: "Kontak Kami", href: "#" }
    // { name: 'Marketplace', href: '#' },
    // { name: 'Company', href: '#' },
  ];
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
      price: { monthly: "700.000", lifetime: "8.000.000" },
      mainFeatures: ["Domain /tahun (**.co.id/.com)", "Hosting pertahun (15GB)"]
    },
    {
      name: "Profesional",
      id: "tier-profesional",
      href: "#",
      featured: true,
      description: "-",
      price: { monthly: "1.200.000", lifetime: "14.000.000" },
      mainFeatures: ["Domain /tahun (**.co.id/.com)", "Hosting pertahun (45GB)"]
    },
    {
      name: "Eksklusif",
      id: "tier-eksklusif",
      href: "#",
      featured: false,
      description: "-",
      price: { monthly: "1.850.000", lifetime: "22.000.000" },
      mainFeatures: ["Domain /tahun (**.co.id/.com)", "Hosting per 2 tahun (45GB)"]
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
      {
        name: "Facebook",
        href: "#",
        icon: (props) => /* @__PURE__ */ jsx("svg", { fill: "currentColor", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z", clipRule: "evenodd" }) })
      },
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
      },
      {
        name: "X",
        href: "#",
        icon: (props) => /* @__PURE__ */ jsx("svg", { fill: "currentColor", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsx("path", { d: "M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" }) })
      },
      {
        name: "GitHub",
        href: "#",
        icon: (props) => /* @__PURE__ */ jsx("svg", { fill: "currentColor", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
            clipRule: "evenodd"
          }
        ) })
      },
      {
        name: "YouTube",
        href: "#",
        icon: (props) => /* @__PURE__ */ jsx("svg", { fill: "currentColor", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z", clipRule: "evenodd" }) })
      }
    ]
  };
  const [frequency, setFrequency] = useState(frequencies[0]);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { className: "bg-white", children: /* @__PURE__ */ jsxs("nav", { "aria-label": "Global", className: "mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("div", { className: "flex lg:flex-1", children: /* @__PURE__ */ jsxs("a", { href: "#", className: "-m-1.5 p-1.5", children: [
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Eagle Media Informatika" }),
        /* @__PURE__ */ jsx("img", { alt: "Logo Eagle Media Informatika", src: logo, className: "h-14 w-auto" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "hidden lg:flex lg:gap-x-12", children: navigation.map((item) => /* @__PURE__ */ jsx(Link, { href: item.href, className: "text-sm font-semibold leading-6 text-gray-900", children: item.name }, item.name)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-1 items-center justify-end gap-x-6", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900", children: "Log in" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: "Sign up" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex lg:hidden", children: /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setMobileMenuOpen(true), className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700", children: /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open main menu" }) }) })
    ] }) }),
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
    ] }),
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
        /* @__PURE__ */ jsx("div", { className: "mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24", children: /* @__PURE__ */ jsx("p", { className: "text-xs leading-5 text-gray-500", children: "© 2024 PT Eagle Media Informatika, Inc. All rights reserved." }) })
      ] })
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsx(Fragment, {});
}
Index.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { title: "Eagle Media Informatika", children: page });
export {
  Index as default
};
