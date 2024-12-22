import { jsxs, jsx } from "react/jsx-runtime";
import "clsx";
import "react";
import { usePage, useForm, Link } from "@inertiajs/react";
import { B as Button } from "./button-c1e927c9.js";
import "./sheet-1b4c457c.js";
import "./dropdown-menu-57f4ca50.js";
import "./command-28ef4a0e.js";
import "./separator-8f30fd49.js";
import { I as InputError } from "./input-error-4ef2eb93.js";
import { Transition } from "@headlessui/react";
import { L as Label } from "./label-f8cd2dfe.js";
import { I as Input } from "./input-49803b73.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-98e72ec0.js";
import { A as AppLayout } from "./app-layout-90740d9b.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./icon-83e95262.js";
import "tailwind-merge";
import "@tabler/icons-react";
import "@radix-ui/react-icons";
import "@radix-ui/react-toast";
import "@radix-ui/react-dialog";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "cmdk";
import "@radix-ui/react-separator";
import "@radix-ui/react-label";
function Index({ mustVerifyEmail, status }) {
  const user = usePage().props.auth.user;
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: user.name,
    username: user.username,
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
          /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Name" }),
          /* @__PURE__ */ jsx(Input, { id: "name", className: "mt-1 block w-full", value: data.name, onChange: (e) => setData("name", e.target.value), required: true, autoFocus: true, autoComplete: "name" }),
          /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "username", children: "Username" }),
          /* @__PURE__ */ jsx(Input, { id: "username", className: "mt-1 block w-full", value: data.username, onChange: (e) => setData("username", e.target.value), required: true, autoComplete: "username" }),
          /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.username })
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
          /* @__PURE__ */ jsx(Button, { disabled: processing, children: "Save" }),
          /* @__PURE__ */ jsx(Transition, { show: recentlySuccessful, enter: "transition ease-in-out", enterFrom: "opacity-0", leave: "transition ease-in-out", leaveTo: "opacity-0", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Saved." }) })
        ] })
      ] }) })
    ] })
  );
}
Index.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { title: "Profile", children: page });
export {
  Index as default
};
