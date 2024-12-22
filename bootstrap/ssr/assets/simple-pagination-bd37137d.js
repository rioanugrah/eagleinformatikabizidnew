import { jsxs, jsx } from "react/jsx-runtime";
import { b as buttonVariants } from "./button-c1e927c9.js";
import { Link } from "@inertiajs/react";
function SimplePagination({ meta, links }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center justify-between", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground", children: [
      "Showing ",
      /* @__PURE__ */ jsx("strong", { children: meta.from }),
      " to ",
      /* @__PURE__ */ jsx("strong", { children: meta.to }),
      " of ",
      /* @__PURE__ */ jsx("strong", { children: meta.total }),
      " results"
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
      /* @__PURE__ */ jsx(Link, { className: buttonVariants({ variant: "outline", size: "sm" }), disabled: (links == null ? void 0 : links.prev) === null, as: "button", preserveScroll: true, preserveState: true, href: links == null ? void 0 : links.prev, children: "Previous" }),
      /* @__PURE__ */ jsx(Link, { className: buttonVariants({ variant: "outline", size: "sm" }), disabled: (links == null ? void 0 : links.next) === null, as: "button", preserveScroll: true, preserveState: true, href: links == null ? void 0 : links.next, children: "Next" })
    ] })
  ] });
}
export {
  SimplePagination as S
};
