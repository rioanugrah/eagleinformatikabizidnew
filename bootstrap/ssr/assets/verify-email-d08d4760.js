import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { G as GuestLayout } from "./guest-layout-4309c532.js";
import { B as Button } from "./button-685e6d97.js";
import { useForm, router } from "@inertiajs/react";
import "./card-561925ba.js";
import "react";
import "./utils-efa289ef.js";
import "clsx";
import "tailwind-merge";
import "./theme-toggle-e0614802.js";
import "./icon-9d04f58e.js";
import "@tabler/icons-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
function VerifyEmail({ status }) {
  const { post, processing } = useForm({});
  const submit = (e) => {
    e.preventDefault();
    post(route("verification.send"));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm font-medium text-green-600", children: "A new verification link has been sent to the email address you provided during registration." }),
    /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(Button, { disabled: processing, children: "Resend Verification Email" }),
      /* @__PURE__ */ jsx(Button, { variant: "link", type: "button", onClick: () => router.post(route("logout")), children: "Log Out" })
    ] }) })
  ] });
}
VerifyEmail.layout = (page) => /* @__PURE__ */ jsx(GuestLayout, { title: "Email Verification", description: `Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.`, children: page });
export {
  VerifyEmail as default
};
