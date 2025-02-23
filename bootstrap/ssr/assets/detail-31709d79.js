import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { I as Index } from "./appLayout-b1eea15e.js";
import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import "./icon-9d04f58e.js";
import "./utils-efa289ef.js";
import "clsx";
import "tailwind-merge";
import "@tabler/icons-react";
import "react-toastify";
import "axios";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "./LogoSubEagleMediaInformatika-b47f6c73.js";
import "./separator-4854cb3c.js";
import "@radix-ui/react-separator";
function Detail(props) {
  const [loading, setLoading] = useState(false);
  const transaction = props.transaction;
  const billing_buyer = JSON.parse(props.transaction.billing_buyer);
  const format_currency = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  };
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
    window.snap.pay(transaction.billing_references, {
      onSuccess: (result) => {
        alert("Payment Success");
        router.get(route("dashboard"));
        setLoading(false);
      },
      onPending: (result) => {
        alert("Payment Pending");
        router.get(route("dashboard"));
        setLoading(false);
      },
      onError: (result) => {
        alert("Payment Error");
        router.get(route("dashboard"));
        setLoading(false);
      },
      onClose: () => {
        console.log("customer close the popup window without the finishing the payment");
        router.get(route("dashboard"));
        setLoading(false);
      }
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "px-4 sm:px-0", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-base/7 font-semibold text-gray-900", children: [
        "Transaction #",
        transaction.billing_code
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 max-w-2xl text-sm/6 text-gray-500", children: "Personal Transaction." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 border-t border-gray-100", children: [
      /* @__PURE__ */ jsx("dl", { className: "divide-y divide-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Transaction Code" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: transaction.billing_code })
      ] }) }),
      /* @__PURE__ */ jsxs("dl", { className: "divide-y divide-gray-100", children: [
        /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
          /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Billing Name" }),
          /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: billing_buyer.first_name + " " + billing_buyer.last_name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
          /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Billing Address" }),
          /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: billing_buyer.address })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
          /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Billing Email" }),
          /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: billing_buyer.email })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
          /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Billing Phone" }),
          /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: billing_buyer.phone })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
          /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Total" }),
          /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: format_currency(transaction.total) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
          /* @__PURE__ */ jsx("dt", { className: "text-sm/6 font-medium text-gray-900", children: "Status" }),
          /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0", children: transaction.status == "PAID" ? /* @__PURE__ */ jsx("span", { class: "me-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300", children: transaction.status }) : transaction.status == "UNPAID" ? /* @__PURE__ */ jsx("span", { class: "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300", children: transaction.status }) : /* @__PURE__ */ jsx("span", { class: "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300", children: transaction.status }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Link, { href: route("transaction"), className: "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700", children: "Back" }),
    loading ? /* @__PURE__ */ jsxs("button", { disabled: true, type: "button", class: "me-2 inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white", children: [
      /* @__PURE__ */ jsxs("svg", { "aria-hidden": "true", role: "status", class: "me-3 inline h-4 w-4 animate-spin text-gray-200 dark:text-gray-600", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
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
    ] }) : transaction.status == "UNPAID" && /* @__PURE__ */ jsx("button", { onClick: onPressPay, className: "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2", children: "Pay Now" })
  ] });
}
Detail.layout = (page) => /* @__PURE__ */ jsx(Index, { title: "Transaction Detail", children: page });
export {
  Detail as default
};
