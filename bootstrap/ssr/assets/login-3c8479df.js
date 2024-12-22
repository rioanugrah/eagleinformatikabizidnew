import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useEffect } from "react";
import { I as InputError } from "./input-error-4ef2eb93.js";
import { useForm } from "@inertiajs/react";
import { I as Input } from "./input-49803b73.js";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { c as cn } from "./icon-83e95262.js";
import { IconCheck } from "@tabler/icons-react";
import { B as Button } from "./button-c1e927c9.js";
import { L as Label } from "./label-f8cd2dfe.js";
import { G as GuestLayout } from "./guest-layout-5b066f46.js";
import { P as PrimaryLink } from "./primary-link-5ae1fd5d.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "./card-98e72ec0.js";
import "./theme-toggle-07cb2e84.js";
const Checkbox = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(CheckboxPrimitive.Root, { ref, className: cn("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className), ...props, children: /* @__PURE__ */ jsx(CheckboxPrimitive.Indicator, { className: cn("flex items-center justify-center text-current"), children: /* @__PURE__ */ jsx(IconCheck, { className: "h-4 w-4" }) }) }));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm font-medium text-green-600", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "email", className: "capitalize", children: "email" }),
        /* @__PURE__ */ jsx(Input, { id: "email", type: "email", name: "email", value: data.email, className: "mt-1 block w-full", autoComplete: "username", autoFocus: true, onChange: (e) => setData("email", e.target.value) }),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "password", className: "capitalize", children: "password" }),
        /* @__PURE__ */ jsx(Input, { id: "password", type: "password", name: "password", value: data.password, className: "mt-1 block w-full", autoComplete: "current-password", onChange: (e) => setData("password", e.target.value) }),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 block", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(Checkbox, { name: "remember", checked: data.remember, onCheckedChange: (e) => setData("remember", e) }),
        /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm text-muted-foreground", children: "Remember me" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-end", children: [
        /* @__PURE__ */ jsx(PrimaryLink, { href: route("register"), value: "register?" }),
        /* @__PURE__ */ jsx(Button, { className: "ml-4", disabled: processing, children: "Log in" })
      ] })
    ] })
  ] });
}
Login.layout = (page) => /* @__PURE__ */ jsx(GuestLayout, { title: "Login", description: "Welcome back, Login and jump to your dashboard", children: page });
export {
  Login as default
};
