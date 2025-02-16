import{r as t,q as b,j as e,a as y,d as l,f as N}from"./app-8d8d7ad9.js";import{I as n}from"./icon-b983c8a4.js";import{X as v,r}from"./XMarkIcon-c9cd4665.js";import{y as d,M as c,L as w}from"./index-d72cafdc.js";import{M as x}from"./menuUser-2487cf5d.js";import{l as m}from"./logo_eagle_media_informatika-285b6851.js";import{g as k,D as I,j as C,h as M}from"./dialog-a20bad36.js";function B({title:g,children:u}){const[h,i]=t.useState(!1);t.useState(!0);const[o,p]=t.useState([]),{auth:a,flash:s}=b().props,f=async()=>{await N.get(route("cart")).then(j=>{p(j.data)})};return t.useEffect(()=>{s.message.success&&d.success(s.message.success),s.message.error&&d.error(s.message.error),f()},[s]),e.jsxs(e.Fragment,{children:[e.jsx(y,{title:g}),e.jsxs(k,{open:h,onClose:i,className:"relative z-50 lg:hidden",children:[e.jsx(I,{transition:!0,className:"fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"}),e.jsx("div",{className:"fixed inset-0 flex",children:e.jsxs(C,{transition:!0,className:"relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full",children:[e.jsx(M,{children:e.jsx("div",{className:"absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0",children:e.jsxs("button",{type:"button",onClick:()=>i(!1),className:"-m-2.5 p-2.5",children:[e.jsx("span",{className:"sr-only",children:"Close sidebar"}),e.jsx(v,{"aria-hidden":"true",className:"h-6 w-6 text-white"})]})})}),e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Eagle Media Informatika",src:m,className:"h-12 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[a.user.access==!0?e.jsx(c,{}):e.jsx(x,{}),e.jsx("li",{className:"mt-auto",children:e.jsx(l,{className:"group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600",children:"Settings"})})]})})]})]})})]}),e.jsx("div",{className:"hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col",children:e.jsxs("div",{className:"flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4",children:[e.jsx("div",{className:"flex h-16 shrink-0 items-center",children:e.jsx("img",{alt:"Eagle Media Informatika",src:m,className:"h-12 w-auto"})}),e.jsx("nav",{className:"flex flex-1 flex-col",children:e.jsxs("ul",{role:"list",className:"flex flex-1 flex-col gap-y-7",children:[a.user.access==!0?e.jsx(c,{}):e.jsx(x,{}),e.jsx("li",{className:"mt-auto",children:e.jsx(l,{className:"group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600",children:"Settings"})})]})})]})}),e.jsxs("div",{className:"lg:pl-72",children:[e.jsx("div",{className:"sticky top-0 z-40 lg:mx-auto lg:max-w-7xl lg:px-8",children:e.jsxs("div",{className:"flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none",children:[e.jsxs("button",{type:"button",onClick:()=>i(!0),className:"-m-2.5 p-2.5 text-gray-700 lg:hidden",children:[e.jsx("span",{className:"sr-only",children:"Open sidebar"}),e.jsx(n,{icon:"IconMenu2"})]}),e.jsx("div",{"aria-hidden":"true",className:"h-6 w-px bg-gray-200 lg:hidden"}),e.jsx("div",{className:"flex flex-1 gap-x-4 self-stretch lg:gap-x-6",children:e.jsxs("div",{className:"flex items-center gap-x-4 lg:gap-x-6",children:[e.jsxs(l,{href:o.url,className:"relative rounded-full border-2 border-transparent px-1 py-4 text-gray-800 transition duration-150 ease-in-out hover:text-gray-400 focus:text-gray-500 focus:outline-none","aria-label":"Cart",children:[e.jsx(n,{icon:"IconShoppingCart"}),e.jsx("span",{className:"absolute inset-0 -mr-6 object-right-top",children:e.jsx("div",{className:"inline-flex items-center rounded-full border-2 border-white bg-red-500 px-1.5 py-0.5 text-xs font-semibold leading-4 text-white",children:o.total_cart})})]}),e.jsxs("button",{type:"button",className:"relative rounded-full border-2 border-transparent px-1 py-4 text-gray-800 transition duration-150 ease-in-out hover:text-gray-400 focus:text-gray-500 focus:outline-none","aria-label":"Cart",children:[e.jsx(n,{icon:"IconBell"}),e.jsx("span",{className:"absolute inset-0 -mr-6 object-right-top",children:e.jsx("div",{className:"inline-flex items-center rounded-full border-2 border-white bg-red-500 px-1.5 py-0.5 text-xs font-semibold leading-4 text-white",children:"0"})})]}),e.jsx("div",{"aria-hidden":"true",className:"hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"}),e.jsxs(r,{as:"div",className:"relative",children:[e.jsxs(r.Button,{className:"-m-1.5 flex items-center p-1.5",children:[e.jsx("span",{className:"sr-only",children:"Open user menu"}),e.jsx("img",{src:a.user.avatar,className:"h-8 w-8 rounded-full bg-gray-50"}),e.jsx("span",{className:"hidden lg:flex lg:items-center",children:e.jsx("span",{"aria-hidden":"true",className:"ml-4 text-sm font-semibold leading-6 text-gray-900",children:a.user.name})})]}),e.jsx(r.Items,{transition:!0,className:"absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in",children:e.jsx(r.Item,{children:e.jsx(l,{as:"button",method:"post",href:route("logout"),className:"block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50",children:"Logout"})})})]})]})})]})}),e.jsx("main",{className:"py-10",children:e.jsxs("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[e.jsx(w,{}),u]})})]})]})}export{B as A};
