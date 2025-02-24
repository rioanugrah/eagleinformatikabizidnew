import { jsxs, jsx } from "react/jsx-runtime";
import "clsx";
import "react";
import { usePage, useForm, Link } from "@inertiajs/react";
import { B as Button } from "./button-685e6d97.js";
import "./sheet-d460a36b.js";
import "./dropdown-menu-0037783a.js";
import "./command-973b6e4a.js";
import "./separator-4854cb3c.js";
import { I as InputError } from "./input-error-4ef2eb93.js";
import { Transition } from "@headlessui/react";
import { L as Label } from "./label-cc69fbbb.js";
import { I as Input } from "./input-a8f11544.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-561925ba.js";
import { I as Index$1 } from "./appLayout-b1eea15e.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-efa289ef.js";
import "tailwind-merge";
import "@radix-ui/react-icons";
import "@radix-ui/react-toast";
import "@radix-ui/react-dialog";
import "@radix-ui/react-dropdown-menu";
import "./icon-9d04f58e.js";
import "@tabler/icons-react";
import "@radix-ui/react-avatar";
import "cmdk";
import "@radix-ui/react-separator";
import "@radix-ui/react-label";
import "react-toastify";
import "axios";
import "@heroicons/react/24/outline";
import "./LogoSubEagleMediaInformatika-b47f6c73.js";
function Index({ mustVerifyEmail, status }) {
  const user = usePage().props.auth.user;
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: user.name,
    // username: user.username,
    email: user.email
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("profile.update"));
  };
  return (
    // <Container className={'lg:max-w-2xl'}>
    // </Container>
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Profile Information" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Update your account's profile information and email address." })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "username", children: "Username" }),
          /* @__PURE__ */ jsx("p", { children: data.username })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Name" }),
          /* @__PURE__ */ jsx(Input, { id: "name", className: "mt-1 block w-full", value: data.name, onChange: (e) => setData("name", e.target.value), required: true, autoFocus: true, autoComplete: "name" }),
          /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
          /* @__PURE__ */ jsx(Input, { id: "email", type: "email", className: "mt-1 block w-full", value: data.email, onChange: (e) => setData("email", e.target.value), required: true, autoComplete: "username" }),
          /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.email })
        ] }),
        mustVerifyEmail && user.email_verified_at === null && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("p", { className: "mt-2 text-sm text-gray-800", children: [
            "Your email address is unverified.",
            /* @__PURE__ */ jsx(Link, { href: route("verification.send"), method: "post", as: "button", className: "rounded-md text-sm text-muted-foreground hover:text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2", children: "Click here to re-send the verification email." })
          ] }),
          status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm font-medium text-green-600", children: "A new verification link has been sent to your email address." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx(Button, { disabled: processing, children: "Update" }),
          /* @__PURE__ */ jsx(Transition, { show: recentlySuccessful, enter: "transition ease-in-out", enterFrom: "opacity-0", leave: "transition ease-in-out", leaveTo: "opacity-0", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Saved." }) })
        ] })
      ] }) })
    ] })
  );
}
Index.layout = (page) => /* @__PURE__ */ jsx(Index$1, { title: "Profile", children: page });
export {
  Index as default
};
