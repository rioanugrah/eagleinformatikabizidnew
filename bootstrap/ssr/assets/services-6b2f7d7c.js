import { jsx, Fragment } from "react/jsx-runtime";
import { A as AppLayout } from "./app-layout-dfaa86da.js";
import { Head } from "@inertiajs/react";
import "react";
import "@headlessui/react";
import "@heroicons/react/24/solid";
function Services() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Head, { title: "Services" }) });
}
Services.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { title: "Services", children: page });
export {
  Services as default
};
