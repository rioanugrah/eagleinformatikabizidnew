import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { A as AppLayout } from "./appLayout-0fe2a5ed.js";
import { router } from "@inertiajs/react";
import { useState, useEffect } from "react";
import "./icon-9d04f58e.js";
import "./utils-efa289ef.js";
import "clsx";
import "tailwind-merge";
import "@tabler/icons-react";
import "./separator-4854cb3c.js";
import "@radix-ui/react-separator";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "./menuadministrator-9d83b4a9.js";
import "./menuUser-b5f13189.js";
import "react-toastify";
import "./LogoSubEagleMediaInformatika-b47f6c73.js";
import "axios";
function Index(props) {
  const [loading, setLoading] = useState(false);
  const format_currency = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  };
  const ppn = `(${props.ppn.ppn_name})`;
  const billingBuyer = JSON.parse(props.billing.billing_buyer);
  useEffect(() => {
    {
      const snapSrcUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
      const myMidtransClientKey = "SB-Mid-client-5JTwHNpWJkJrLtOn";
      const script = document.createElement("script");
      script.src = snapSrcUrl;
      script.setAttribute("data-client-key", myMidtransClientKey);
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);
  const onPressPay = async () => {
    setLoading(true);
    window.snap.pay(props.billing.billing_references, {
      onSuccess: (result) => {
        router.get(route("order.detail", [props.billing.order_id]));
        setLoading(false);
      },
      onPending: (result) => {
        router.get(route("order.detail", [props.billing.order_id]));
        setLoading(false);
      },
      onError: (result) => {
        router.get(route("order.detail", [props.billing.order_id]));
        setLoading(false);
      },
      onClose: () => {
        console.log("customer close the popup window without the finishing the payment");
        alert("customer close the popup window without the finishing the payment");
        router.get(route("dashboard"));
        setLoading(false);
      }
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("main", { className: "relative lg:min-h-full", children: [
    /* @__PURE__ */ jsx("div", { className: "h-80 overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12", children: /* @__PURE__ */ jsx("img", { alt: "TODO", src: "https://tailwindui.com/img/ecommerce-images/confirmation-page-06-hero.jpg", className: "h-full w-full object-cover object-center" }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24", children: /* @__PURE__ */ jsxs("div", { className: "lg:col-start-2", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-sm font-medium text-indigo-600", children: "Waiting Payment" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl", children: "Thanks for ordering" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-base text-gray-500", children: "We appreciate your order, we’re currently processing it. So hang tight and we’ll send you confirmation very soon!" }),
      /* @__PURE__ */ jsxs("dl", { className: "mt-16 text-sm font-medium", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-gray-900", children: "Tracking number" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-2 text-indigo-600", children: props.billing.billing_code })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500", children: props.billing.invoice.invoice_details.map((item, index) => /* @__PURE__ */ jsxs("li", { className: "flex space-x-6 py-6", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-auto space-y-1", children: /* @__PURE__ */ jsx("h3", { className: "text-gray-900", children: /* @__PURE__ */ jsx("a", { children: item.item.split("|")[1] }) }) }),
        /* @__PURE__ */ jsx("p", { className: "flex-none font-medium text-gray-900", children: format_currency(item.amount) })
      ] }, item.id)) }),
      /* @__PURE__ */ jsxs("dl", { className: "space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-500", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxs("dt", { children: [
            "Taxes (",
            ppn,
            ")"
          ] }),
          /* @__PURE__ */ jsx("dd", { className: "text-gray-900", children: format_currency(props.billing.tax) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900", children: [
          /* @__PURE__ */ jsx("dt", { className: "text-base", children: "Total" }),
          /* @__PURE__ */ jsx("dd", { className: "text-base", children: format_currency(props.billing.sub_total) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900", children: [
          /* @__PURE__ */ jsx("dt", { className: "text-base", children: "Status" }),
          props.billing.status == "UNPAID" ? /* @__PURE__ */ jsx("dd", { className: "text-base text-yellow-500", children: props.billing.status }) : /* @__PURE__ */ jsx("dd", { className: "text-base text-green-500", children: props.billing.status })
        ] })
      ] }),
      /* @__PURE__ */ jsx("dl", { className: "mt-16 grid grid-cols-2 gap-x-4 text-sm text-gray-600", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("dt", { className: "font-medium text-gray-900", children: "Shipping Address" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-2", children: /* @__PURE__ */ jsxs("address", { className: "not-italic", children: [
          /* @__PURE__ */ jsx("span", { className: "block", children: billingBuyer.first_name + " " + billingBuyer.last_name }),
          /* @__PURE__ */ jsx("span", { className: "block", children: billingBuyer.address }),
          /* @__PURE__ */ jsx("span", { className: "block", children: billingBuyer.email })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 border-t border-gray-200 py-6 text-right", children: /* @__PURE__ */ jsx("button", { onClick: onPressPay, className: "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2", children: "Pay Now" }) })
    ] }) }) })
  ] }) });
}
Index.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { title: "Payment", children: page });
export {
  Index as default
};
