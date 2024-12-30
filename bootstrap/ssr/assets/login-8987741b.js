import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { I as InputError } from "./input-error-4ef2eb93.js";
import { useForm } from "@inertiajs/react";
import "./input-a8f11544.js";
import "./checkbox-ae0f2d3c.js";
import "./button-685e6d97.js";
import "./label-cc69fbbb.js";
import "./card-561925ba.js";
import "clsx";
import { l as logo } from "./logo_eagle_media_informatika-fceda23c.js";
import "./utils-efa289ef.js";
import "tailwind-merge";
import "@radix-ui/react-checkbox";
import "@tabler/icons-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    post(route("login"), {
      onFinish: () => {
        setLoading(false);
      }
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm font-medium text-green-600", children: status }),
    /* @__PURE__ */ jsxs("div", { className: "flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "sm:mx-auto sm:w-full sm:max-w-md", children: [
        /* @__PURE__ */ jsx("img", { alt: "Eagle Media Informatika", src: logo, className: "mx-auto h-20 w-auto" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900", children: "Login Account" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]", children: /* @__PURE__ */ jsx("div", { className: "bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12", children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", children: "Email address" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
            /* @__PURE__ */ jsx("input", { id: "email", name: "email", type: "email", value: data.email, onChange: (e) => setData("email", e.target.value), required: true, autoComplete: "email", className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }),
            /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "password", className: "block text-sm font-medium leading-6 text-gray-900", children: "Password" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
            /* @__PURE__ */ jsx("input", { id: "password", name: "password", type: "password", value: data.password, onChange: (e) => setData("password", e.target.value), required: true, autoComplete: "current-password", className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }),
            /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("input", { id: "remember-me", name: "remember-me", type: "checkbox", className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" }),
            /* @__PURE__ */ jsx("label", { htmlFor: "remember-me", className: "ml-3 block text-sm leading-6 text-gray-900", children: "Remember me" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-sm leading-6", children: /* @__PURE__ */ jsx("a", { href: "#", className: "font-semibold text-indigo-600 hover:text-indigo-500", children: "Forgot password?" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("button", { type: "submit", className: "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: loading ? "Loading..." : "Sign in" }) })
      ] }) }) })
    ] })
  ] });
}
export {
  Login as default
};
