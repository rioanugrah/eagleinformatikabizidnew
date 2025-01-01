import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import "./button-685e6d97.js";
import "./sheet-d460a36b.js";
import "clsx";
import "./dropdown-menu-0037783a.js";
import { A as Avatar, f as AvatarImage, m as AvatarFallback } from "./command-973b6e4a.js";
import "./separator-4854cb3c.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from "./card-561925ba.js";
import { u as useFilter, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, T as Table, e as TableHeader, f as TableRow, g as TableHead, h as SortIndicator, i as TableBody, j as TableCell } from "./sort-indicator-9c51c00c.js";
import { UserListOptions } from "./user-list-options-a48e1595.js";
import { S as SimplePagination } from "./simple-pagination-1ce1e8ea.js";
import { I as Input } from "./input-a8f11544.js";
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
import "@radix-ui/react-select";
import "lodash";
import "@radix-ui/react-alert-dialog";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "./menuadministrator-4039c077.js";
import "./menuUser-b5f13189.js";
import "react-toastify";
import "./logo_eagle_media_informatika-fceda23c.js";
function Index(props) {
  const { data: users, meta, links } = props.users;
  const [params, setParams] = useState(props.state);
  useFilter({
    route: route("users.index"),
    values: params,
    only: ["users"]
  });
  const handleSort = (newField) => {
    let newDirection = (params == null ? void 0 : params.direction) ?? "asc";
    const field = (params == null ? void 0 : params.field) ?? "created_at";
    if (newField === field) {
      newDirection = newDirection === "asc" ? "desc" : "asc";
    }
    setParams({ ...params, field: newField, direction: newDirection });
  };
  return (
    // <Container className={'lg:mx-auto lg:max-w-5xl'}>
    // </Container>
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Users" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "The list of the registered users." })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Select, { value: params == null ? void 0 : params.limit, onValueChange: (e) => setParams({ ...params, limit: e }), children: [
            /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: (params == null ? void 0 : params.limit) ?? 10 }) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "10", children: "10" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "25", children: "25" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "50", children: "50" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "75", children: "75" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "100", children: "100" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "w-72", children: /* @__PURE__ */ jsx(Input, { type: "text", value: params == null ? void 0 : params.search, onChange: (e) => setParams((prev) => ({ ...prev, search: e.target.value })), placeholder: "Pencarian..." }) })
        ] }),
        /* @__PURE__ */ jsxs(Table, { children: [
          /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHead, { className: "w-[50px] text-center", children: "#" }),
            /* @__PURE__ */ jsx(TableHead, { onClick: () => handleSort("name"), children: /* @__PURE__ */ jsx(SortIndicator, { label: "name", column: "name", field: params == null ? void 0 : params.field, direction: params == null ? void 0 : params.direction }) }),
            /* @__PURE__ */ jsx(TableHead, { onClick: () => handleSort("username"), children: /* @__PURE__ */ jsx(SortIndicator, { label: "username", column: "username", field: params == null ? void 0 : params.field, direction: params == null ? void 0 : params.direction }) }),
            /* @__PURE__ */ jsx(TableHead, { onClick: () => handleSort("email_verified_at"), children: /* @__PURE__ */ jsx(SortIndicator, { label: "verified", column: "email_verified_at", field: params == null ? void 0 : params.field, direction: params == null ? void 0 : params.direction }) }),
            /* @__PURE__ */ jsx(TableHead, { onClick: () => handleSort("roles"), children: /* @__PURE__ */ jsx(SortIndicator, { label: "roles", column: "roles", field: params == null ? void 0 : params.field, direction: params == null ? void 0 : params.direction }) }),
            /* @__PURE__ */ jsx(TableHead, { onClick: () => handleSort("created_at"), children: /* @__PURE__ */ jsx(SortIndicator, { label: "joined", column: "created_at", field: params == null ? void 0 : params.field, direction: params == null ? void 0 : params.direction }) }),
            /* @__PURE__ */ jsx(TableHead, { onClick: () => handleSort("updated_at"), children: /* @__PURE__ */ jsx(SortIndicator, { label: "updated", column: "updated_at", field: params == null ? void 0 : params.field, direction: params == null ? void 0 : params.direction }) }),
            /* @__PURE__ */ jsx(TableHead, {})
          ] }) }),
          /* @__PURE__ */ jsx(TableBody, { children: users.length > 0 ? /* @__PURE__ */ jsx(Fragment, { children: users.map((user, i) => /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableCell, { className: "w-0 py-7 text-center", children: meta.from + i }),
            /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center font-normal", children: [
              /* @__PURE__ */ jsx("div", { className: "mr-3 shrink-0", children: /* @__PURE__ */ jsxs(Avatar, { children: [
                /* @__PURE__ */ jsx(AvatarImage, { src: user.avatar }),
                /* @__PURE__ */ jsx(AvatarFallback, { children: user.acronym })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: route("users.show", user), children: user.name }) }),
                /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: user.email })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx(TableCell, { children: user.username }),
            /* @__PURE__ */ jsx(TableCell, { className: user.email_verified_at == "Email not verified" ? "font-medium text-destructive" : "", children: user.email_verified_at }),
            /* @__PURE__ */ jsx(TableCell, { children: user.roles.map((role, index) => /* @__PURE__ */ jsx(Fragment, { children: role.name == "Administrator" ? /* @__PURE__ */ jsx("span", { class: "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300", children: role.name }) : /* @__PURE__ */ jsx("span", { class: "bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300", children: role.name }) })) }),
            /* @__PURE__ */ jsx(TableCell, { children: user.created_at }),
            /* @__PURE__ */ jsx(TableCell, { children: user.updated_at }),
            /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(UserListOptions, { user }) }) })
          ] }, i)) }) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 7, className: "animate-pulse py-5 text-center text-base font-semibold text-destructive", children: "No users." }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(CardFooter, { className: "flex items-center justify-between pt-6", children: /* @__PURE__ */ jsx(SimplePagination, { links, meta }) })
    ] })
  );
}
Index.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { title: "Users", children: page });
export {
  Index as default
};
