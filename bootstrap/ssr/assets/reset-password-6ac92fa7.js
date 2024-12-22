import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { I as InputError } from "./input-error-4ef2eb93.js";
import { useForm } from "@inertiajs/react";
import { L as Label } from "./label-f8cd2dfe.js";
import { I as Input } from "./input-49803b73.js";
import { B as Button } from "./button-c1e927c9.js";
import { G as GuestLayout } from "./guest-layout-5b066f46.js";
import "@radix-ui/react-label";
import "class-variance-authority";
import "./icon-83e95262.js";
import "clsx";
import "tailwind-merge";
import "@tabler/icons-react";
import "@radix-ui/react-slot";
import "./card-98e72ec0.js";
import "./theme-toggle-07cb2e84.js";
function ResetPassword({ token, email }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token,
    email,
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("password.store"));
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email " }),
      /* @__PURE__ */ jsx(Input, { id: "email", type: "email", name: "email", value: data.email, className: "mt-1 block w-full", autoComplete: "username", onChange: (e) => setData("email", e.target.value) }),
      /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password" }),
      /* @__PURE__ */ jsx(Input, { id: "password", type: "password", name: "password", value: data.password, className: "mt-1 block w-full", autoComplete: "new-password", autoFocus: true, onChange: (e) => setData("password", e.target.value) }),
      /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "password_confirmation", children: "Confirm Password" }),
      /* @__PURE__ */ jsx(Input, { type: "password", name: "password_confirmation", value: data.password_confirmation, className: "mt-1 block w-full", autoComplete: "new-password", onChange: (e) => setData("password_confirmation", e.target.value) }),
      /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center justify-end", children: /* @__PURE__ */ jsx(Button, { className: "ml-4", disabled: processing, children: "Reset Password" }) })
  ] });
}
ResetPassword.layout = (page) => /* @__PURE__ */ jsx(GuestLayout, { title: "Reset Password", description: "Please insert your new password before continuing.", children: page });
export {
  ResetPassword as default
};
