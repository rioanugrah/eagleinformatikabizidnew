import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { I as InputError } from "./input-error-4ef2eb93.js";
import { useForm } from "@inertiajs/react";
import { G as GuestLayout } from "./guest-layout-5b066f46.js";
import { L as Label } from "./label-f8cd2dfe.js";
import { I as Input } from "./input-49803b73.js";
import { B as Button } from "./button-c1e927c9.js";
import "./card-98e72ec0.js";
import "./icon-83e95262.js";
import "clsx";
import "tailwind-merge";
import "@tabler/icons-react";
import "./theme-toggle-07cb2e84.js";
import "@radix-ui/react-label";
import "class-variance-authority";
import "@radix-ui/react-slot";
function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: ""
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("password.confirm"));
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
    /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password" }),
      /* @__PURE__ */ jsx(Input, { id: "password", type: "password", name: "password", value: data.password, className: "mt-1 block w-full", autoFocus: true, onChange: (e) => setData("password", e.target.value) }),
      /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center justify-end", children: /* @__PURE__ */ jsx(Button, { className: "ml-4", disabled: processing, children: "Confirm" }) })
  ] });
}
ConfirmPassword.layout = (page) => /* @__PURE__ */ jsx(GuestLayout, { title: "Confirm Password", description: "This is a secure area of the application. Please confirm your password before continuing.", children: page });
export {
  ConfirmPassword as default
};
