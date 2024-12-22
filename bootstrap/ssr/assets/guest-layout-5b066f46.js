import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-98e72ec0.js";
import { T as ThemeToggle } from "./theme-toggle-07cb2e84.js";
import { Head } from "@inertiajs/react";
function GuestLayout({ title, description, children }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsx("div", { className: "flex min-h-screen flex-col items-center pt-10 sm:justify-center sm:pt-0", children: /* @__PURE__ */ jsxs(Card, { className: "mt-6 w-full sm:max-w-md ", children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: title }),
        /* @__PURE__ */ jsx(CardDescription, { children: description })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 mb-4 mr-4", children: /* @__PURE__ */ jsx(ThemeToggle, {}) })
  ] });
}
export {
  GuestLayout as G
};
