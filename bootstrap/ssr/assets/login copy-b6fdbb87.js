import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { I as InputError } from "./input-error-4ef2eb93.js";
import { useForm } from "@inertiajs/react";
import { I as Input } from "./input-a8f11544.js";
import { C as Checkbox } from "./checkbox-ae0f2d3c.js";
import { B as Button } from "./button-685e6d97.js";
import { L as Label } from "./label-cc69fbbb.js";
import { G as GuestLayout } from "./guest-layout-4309c532.js";
import { P as PrimaryLink } from "./primary-link-f11f45e8.js";
import "./utils-efa289ef.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-checkbox";
import "@tabler/icons-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "./card-561925ba.js";
import "./theme-toggle-e0614802.js";
import "./icon-9d04f58e.js";
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
