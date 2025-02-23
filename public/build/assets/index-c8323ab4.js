import{r as g,q as p,j as e,d as h}from"./app-09f0cebb.js";import{C as w,a as k,b as v,d as y,e as C}from"./card-baccc4bd.js";import{u as N,S,a as I,b as T,c as P,d as n,T as _,e as O,f as x,g as r,h as D,i}from"./useFilter-f056d863.js";import{I as A}from"./input-00233e38.js";import{A as H}from"./appLayout-bac20d4d.js";import{S as c}from"./sort-indicator-9b7b5ebb.js";import{I as j}from"./icon-5cb206d5.js";import{S as E}from"./simple-pagination-571ff3ad.js";import"./IconCheck-c5fcb93b.js";import"./react-icons.esm-feaa2a86.js";import"./index-708586a4.js";import"./Combination-c2781251.js";import"./index-c5af9afc.js";import"./floating-ui.react-dom-e132892f.js";import"./index-9423490a.js";import"./index-46cf7bfd.js";import"./XMarkIcon-ee465076.js";import"./label-d4319d13.js";import"./dialog-fa4ebf60.js";import"./menuadministrator-536dbff7.js";import"./menuUser-88343c63.js";import"./index-a0b2995f.js";import"./logo_eagle_media_informatika-285b6851.js";import"./button-357427dc.js";function F(d){const{data:u,meta:m,links:f}=d.orders,[t,a]=g.useState(d.state);p().props,N({route:route("order.index"),values:t});const o=s=>{let l=(t==null?void 0:t.direction)??"asc";const b=(t==null?void 0:t.field)??"created_at";s===b&&(l=l==="asc"?"desc":"asc"),a({...t,field:s,direction:l})};return e.jsxs(w,{children:[e.jsx(k,{children:e.jsx(v,{children:"Orders"})}),e.jsxs(y,{children:[e.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[e.jsx("div",{children:e.jsxs(S,{value:t==null?void 0:t.limit,onValueChange:s=>a({...t,limit:s}),children:[e.jsx(I,{className:"w-[180px]",children:e.jsx(T,{placeholder:(t==null?void 0:t.limit)??10})}),e.jsxs(P,{children:[e.jsx(n,{value:"10",children:"10"}),e.jsx(n,{value:"25",children:"25"}),e.jsx(n,{value:"50",children:"50"}),e.jsx(n,{value:"75",children:"75"}),e.jsx(n,{value:"100",children:"100"})]})]})}),e.jsx("div",{className:"w-72",children:e.jsx(A,{type:"text",value:t==null?void 0:t.search,onChange:s=>a(l=>({...l,search:s.target.value})),placeholder:"Pencarian..."})})]}),e.jsxs(_,{children:[e.jsx(O,{children:e.jsxs(x,{children:[e.jsx(r,{className:"w-[50px] text-center",children:"#"}),e.jsx(r,{onClick:()=>o("order_code"),children:e.jsx(c,{label:"Order Code",column:"order_code",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(r,{onClick:()=>o("total"),children:e.jsx(c,{label:"Total",column:"total",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(r,{onClick:()=>o("created_at"),children:e.jsx(c,{label:"Order Date",column:"created_at",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(r,{onClick:()=>o("status"),children:e.jsx(c,{label:"Status",column:"status",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(r,{})]})}),e.jsx(D,{children:u.length>0?e.jsx(e.Fragment,{children:u.map((s,l)=>e.jsxs(x,{children:[e.jsx(i,{className:"w-0 py-7 text-center",children:m.from+l}),e.jsx(i,{children:s.order_code}),e.jsx(i,{className:"text-right",children:s.total}),e.jsx(i,{className:"text-center",children:s.created_at}),e.jsx(i,{className:"text-center",children:s.status=="PAID"?e.jsx("span",{class:"me-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300",children:s.status}):s.status=="UNPAID"?e.jsx("span",{class:"bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300",children:s.status}):e.jsx("span",{class:"bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300",children:s.status})}),e.jsxs(i,{children:[e.jsxs(h,{href:route("order.detail",[s.id]),className:"inline-flex text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center me-2 mb-2",children:[e.jsx(j,{icon:"IconPackages",className:"w-6 h-6 me-2"})," Order Detail"]}),e.jsxs(h,{href:route("invoices.detail",[s.id]),className:"inline-flex text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center me-2 mb-2",children:[e.jsx(j,{icon:"IconPackages",className:"w-6 h-6 me-2"})," Invoices"]})]})]},l))}):e.jsx(x,{children:e.jsx(i,{colSpan:8,className:"animate-pulse py-5 text-center text-base font-semibold text-destructive",children:"No Orders."})})})]})]}),e.jsx(C,{className:"flex items-center justify-between pt-6",children:e.jsx(E,{links:f,meta:m})})]})}F.layout=d=>e.jsx(H,{title:"Orders",children:d});export{F as default};
