import { jsx } from "react/jsx-runtime";
import { c as cn } from "./icon-83e95262.js";
import { Link } from "@inertiajs/react";
function PrimaryLink({ className, isDanger = false, active, value, children, ...props }) {
  return /* @__PURE__ */ jsx(Link, { className: cn("text-sm capitalize text-muted-foreground hover:text-foreground", className, active ? "bg-muted font-medium text-primary" : "text-muted-foreground", isDanger && active ? "text-destructive" : "text-primary"), ...props, children: value || children });
}
export {
  PrimaryLink as P
};
