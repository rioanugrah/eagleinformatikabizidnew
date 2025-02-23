import{r as y,j as e,d as m}from"./app-25b7d524.js";import{C as p,a as v,b as w,d as I,e as k}from"./card-c8b00a40.js";import{u as C,S as N,a as S,b as _,c as T,d as r,T as P,e as D,f as x,g as l,h as A,i as n}from"./useFilter-a4d5a0a4.js";import{I as B}from"./input-efa49cc4.js";import{A as F}from"./appLayout-13242ad4.js";import{S as d}from"./sort-indicator-c68e0d39.js";import{I as j}from"./icon-dfe243d3.js";import{S as R}from"./simple-pagination-8f527e4e.js";import"./IconCheck-31caebf9.js";import"./react-icons.esm-e795c403.js";import"./index-c11ada6f.js";import"./Combination-e9c854bf.js";import"./index-ed3ebc4b.js";import"./floating-ui.react-dom-75afbfa6.js";import"./index-6a69484f.js";import"./index-821225bb.js";import"./XMarkIcon-6d7e5201.js";import"./dialog-6589431a.js";import"./menuadministrator-ce6d3f67.js";import"./menuUser-8a7ae72b.js";import"./index-da4f904c.js";import"./LogoSubEagleMediaInformatika-de8d60d9.js";import"./button-ef994a9b.js";function H(o){const{data:u,meta:h,links:f}=o.billings,[t,a]=y.useState(o.state);C({route:route("billing.index"),values:t});const c=i=>{let s=(t==null?void 0:t.direction)??"asc";const b=(t==null?void 0:t.field)??"created_at";i===b&&(s=s==="asc"?"desc":"asc"),a({...t,field:i,direction:s})},g=i=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(i);return e.jsxs(p,{children:[e.jsx(v,{children:e.jsx(w,{children:"Billings"})}),e.jsxs(I,{children:[e.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[e.jsx("div",{children:e.jsxs(N,{value:t==null?void 0:t.limit,onValueChange:i=>a({...t,limit:i}),children:[e.jsx(S,{className:"w-[180px]",children:e.jsx(_,{placeholder:(t==null?void 0:t.limit)??10})}),e.jsxs(T,{children:[e.jsx(r,{value:"10",children:"10"}),e.jsx(r,{value:"25",children:"25"}),e.jsx(r,{value:"50",children:"50"}),e.jsx(r,{value:"75",children:"75"}),e.jsx(r,{value:"100",children:"100"})]})]})}),e.jsx("div",{className:"w-72",children:e.jsx(B,{type:"text",value:t==null?void 0:t.search,onChange:i=>a(s=>({...s,search:i.target.value})),placeholder:"Pencarian..."})})]}),e.jsxs(P,{children:[e.jsx(D,{children:e.jsxs(x,{children:[e.jsx(l,{className:"w-[50px] text-center",children:"#"}),e.jsx(l,{onClick:()=>c("billing_code"),children:e.jsx(d,{label:"Billing Code",column:"billing_code",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(l,{onClick:()=>c("billing_references"),children:e.jsx(d,{label:"Billing References",column:"billing_references",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(l,{onClick:()=>c("sub_total"),children:e.jsx(d,{label:"Total",column:"sub_total",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(l,{onClick:()=>c("status"),children:e.jsx(d,{label:"status",column:"status",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(l,{})]})}),e.jsx(A,{children:u.length>0?e.jsx(e.Fragment,{children:u.map((i,s)=>e.jsxs(x,{children:[e.jsx(n,{className:"w-0 py-7 text-center",children:h.from+s}),e.jsx(n,{children:i.billing_code}),e.jsx(n,{children:i.billing_references}),e.jsx(n,{children:g(i.sub_total)}),e.jsx(n,{children:i.status=="PAID"?e.jsx("span",{class:"me-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300",children:i.status}):i.status=="UNPAID"?e.jsx("span",{class:"me-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",children:i.status}):e.jsx("span",{class:"me-2 rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300",children:i.status})}),e.jsx(n,{children:i.status=="UNPAID"?e.jsxs(m,{href:route("invoices.detail",[i.invoice_id]),className:"inline-flex items-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",children:[e.jsx(j,{icon:"IconCash"})," Pay Now"]}):i.status=="PAID"&&e.jsxs(m,{href:route("invoices.detail",[i.invoice_id]),className:"inline-flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",children:[e.jsx(j,{icon:"IconFileInvoice"})," Invoices"]})})]},s))}):e.jsx(x,{children:e.jsx(n,{colSpan:6,className:"animate-pulse py-5 text-center text-base font-semibold text-destructive",children:"No Billings."})})})]})]}),e.jsx(k,{className:"flex items-center justify-between pt-6",children:e.jsx(R,{links:f,meta:h})})]})}H.layout=o=>e.jsx(F,{title:"Billings",children:o});export{H as default};
