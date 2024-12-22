import { jsx } from "react/jsx-runtime";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as tablerIcons from "@tabler/icons-react";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Icon({ className, icon, ...props }) {
  const Icon2 = tablerIcons[icon];
  return /* @__PURE__ */ jsx(Icon2, { className: cn("h-6 w-6 stroke-[1.2]", className), ...props });
}
export {
  Icon as I,
  cn as c
};
