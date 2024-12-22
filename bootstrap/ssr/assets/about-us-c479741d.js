import { jsx, Fragment } from "react/jsx-runtime";
import { A as AppLayout } from "./app-layout-e7c5c7c7.js";
import { Head } from "@inertiajs/react";
import "react";
import "@headlessui/react";
import "@heroicons/react/24/solid";
function AboutUs() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Head, { title: "Tentang Kami" }) });
}
AboutUs.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { title: "Tentang Kami", children: page });
export {
  AboutUs as default
};
