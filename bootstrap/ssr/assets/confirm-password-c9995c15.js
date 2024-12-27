import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { I as InputError } from "./input-error-4ef2eb93.js";
import { useForm } from "@inertiajs/react";
import { G as GuestLayout } from "./guest-layout-4309c532.js";
import { L as Label } from "./label-cc69fbbb.js";
import { I as Input } from "./input-a8f11544.js";
import { B as Button } from "./button-685e6d97.js";
import "./card-561925ba.js";
import "./utils-efa289ef.js";
import "clsx";
import "tailwind-merge";
import "./theme-toggle-e0614802.js";
import "./icon-9d04f58e.js";
import "@tabler/icons-react";
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
