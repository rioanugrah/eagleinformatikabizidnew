import { jsxs, jsx } from "react/jsx-runtime";
import { useForm } from "@inertiajs/react";
import { useState, useRef } from "react";
import { B as Button } from "./button-685e6d97.js";
import "./sheet-d460a36b.js";
import "clsx";
import "./dropdown-menu-0037783a.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription, e as DialogFooter } from "./command-973b6e4a.js";
import "./separator-4854cb3c.js";
import { I as InputError } from "./input-error-4ef2eb93.js";
import { L as Label } from "./label-cc69fbbb.js";
import { I as Input } from "./input-a8f11544.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-561925ba.js";
import { A as AppLayout } from "./appLayout-b051a4d3.js";
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
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "./menuadministrator-4039c077.js";
import "./menuUser-b5f13189.js";
import "react-toastify";
import "./logo_eagle_media_informatika-fceda23c.js";
function Index() {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const passwordInput = useRef();
  const { data, setData, delete: destroy, processing, reset, errors } = useForm({ password: "" });
  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };
  const deleteUser = (e) => {
    e.preventDefault();
    destroy(route("danger.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset()
    });
  };
  const closeModal = () => {
    setConfirmingUserDeletion(false);
    reset();
  };
  return (
    // <Container className={'lg:max-w-2xl'}>
    // </Container>
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Delete Account" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain." })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsx(Button, { variant: "destructive", onClick: confirmUserDeletion, children: "Delete Account" }),
        /* @__PURE__ */ jsx(Dialog, { open: confirmingUserDeletion, onOpenChange: setConfirmingUserDeletion, children: /* @__PURE__ */ jsxs(DialogContent, { children: [
          /* @__PURE__ */ jsxs(DialogHeader, { children: [
            /* @__PURE__ */ jsx(DialogTitle, { children: "Are you sure you want to delete your account?" }),
            /* @__PURE__ */ jsx(DialogDescription, { children: "Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account." })
          ] }),
          /* @__PURE__ */ jsxs("form", { onSubmit: deleteUser, children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password" }),
              /* @__PURE__ */ jsx(Input, { id: "password", type: "password", name: "password", ref: passwordInput, value: data.password, onChange: (e) => setData("password", e.target.value), className: "mt-1", autoFocus: true, placeholder: "Password" }),
              /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
            ] }),
            /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-x-2", children: [
              /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", onClick: closeModal, children: "Cancel" }),
              /* @__PURE__ */ jsx(Button, { variant: "destructive", disabled: processing, children: "Delete Account" })
            ] })
          ] })
        ] }) })
      ] })
    ] })
  );
}
Index.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { title: "Danger", children: page });
export {
  Index as default
};
