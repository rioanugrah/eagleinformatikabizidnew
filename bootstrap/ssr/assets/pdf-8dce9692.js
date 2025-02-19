import { jsx, Fragment, jsxs } from "react/jsx-runtime";
function Pdf() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { class: "mx-auto my-6 max-w-3xl rounded bg-white p-6 shadow-sm", id: "invoice", children: /* @__PURE__ */ jsxs("div", { class: "grid grid-cols-2 items-center", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", alt: "company-logo", height: "100", width: "100" }) }),
    /* @__PURE__ */ jsxs("div", { class: "text-right", children: [
      /* @__PURE__ */ jsx("p", { children: "PT Eagle Media Informatika" }),
      /* @__PURE__ */ jsx("p", { class: "text-sm text-gray-500", children: "marketing@eagleinformatika.biz.id" }),
      /* @__PURE__ */ jsx("p", { class: "mt-1 text-sm text-gray-500", children: "+62 881-0801-78055" }),
      /* @__PURE__ */ jsx("p", { class: "mt-1 text-sm text-gray-500", children: "VAT: -" })
    ] })
  ] }) }) });
}
export {
  Pdf as default
};
