import { jsxs, jsx } from "react/jsx-runtime";
import { I as Icon } from "./icon-9d04f58e.js";
const SortIndicator = ({ label, field, column, direction }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
    /* @__PURE__ */ jsx("span", { className: "mr-2 capitalize", children: label }),
    field === column ? direction === "asc" ? /* @__PURE__ */ jsx(Icon, { icon: "IconChevronUp", className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Icon, { icon: "IconChevronDown", className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Icon, { icon: "IconChevronDown", className: "h-4 w-4" })
  ] });
};
export {
  SortIndicator as S
};
