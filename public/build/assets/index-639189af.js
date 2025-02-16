import{r as g,j as e,d as u}from"./app-8d8d7ad9.js";import{C as p,a as w,b as k,d as y}from"./card-ba5cb4f5.js";import{u as C,S as I,a as N,b as v,c as S,d as i,T as _,e as T,f as x,g as n,h as c,i as D,j as l}from"./sort-indicator-4308d534.js";import{I as P}from"./input-e6b1b2da.js";import{A}from"./appLayout-b3b28ea0.js";import{I as h}from"./icon-b983c8a4.js";import"./button-622cff09.js";import"./IconCheck-0a78c108.js";import"./react-icons.esm-354832b3.js";import"./index-72103850.js";import"./Combination-6b5014a1.js";import"./index-9b8f6c05.js";import"./floating-ui.react-dom-d7874801.js";import"./index-ff9682d8.js";import"./index-ef1aaffd.js";import"./XMarkIcon-c9cd4665.js";import"./label-4ce1b15c.js";import"./dialog-a20bad36.js";import"./index-d72cafdc.js";import"./menuUser-2487cf5d.js";import"./logo_eagle_media_informatika-285b6851.js";function O(d){const{data:m,meta:b,links:E}=d.invoices,[t,a]=g.useState(d.state);C({route:route("order.index"),values:t});const o=r=>{let s=(t==null?void 0:t.direction)??"asc";const f=(t==null?void 0:t.field)??"created_at";r===f&&(s=s==="asc"?"desc":"asc"),a({...t,field:r,direction:s})},j=r=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(r);return e.jsxs(p,{children:[e.jsx(w,{children:e.jsx(k,{children:"Orders"})}),e.jsxs(y,{children:[e.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[e.jsx("div",{children:e.jsxs(I,{value:t==null?void 0:t.limit,onValueChange:r=>a({...t,limit:r}),children:[e.jsx(N,{className:"w-[180px]",children:e.jsx(v,{placeholder:(t==null?void 0:t.limit)??10})}),e.jsxs(S,{children:[e.jsx(i,{value:"10",children:"10"}),e.jsx(i,{value:"25",children:"25"}),e.jsx(i,{value:"50",children:"50"}),e.jsx(i,{value:"75",children:"75"}),e.jsx(i,{value:"100",children:"100"})]})]})}),e.jsx("div",{className:"w-72",children:e.jsx(P,{type:"text",value:t==null?void 0:t.search,onChange:r=>a(s=>({...s,search:r.target.value})),placeholder:"Pencarian..."})})]}),e.jsxs(_,{children:[e.jsx(T,{children:e.jsxs(x,{children:[e.jsx(n,{className:"w-[50px] text-center",children:"#"}),e.jsx(n,{onClick:()=>o("no_invoice"),children:e.jsx(c,{label:"No. Invoice",column:"no_invoice",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(n,{onClick:()=>o("sub_amount"),children:e.jsx(c,{label:"Total",column:"sub_amount",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(n,{onClick:()=>o("created_at"),children:e.jsx(c,{label:"Created At",column:"created_at",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(n,{onClick:()=>o("status"),children:e.jsx(c,{label:"status",column:"status",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(n,{})]})}),e.jsx(D,{children:m.length>0?e.jsx(e.Fragment,{children:m.map((r,s)=>e.jsxs(x,{children:[e.jsx(l,{className:"w-0 py-7 text-center",children:b.from+s}),e.jsxs(l,{children:["ORD/",r.no_invoice]}),e.jsx(l,{children:j(r.sub_amount)}),e.jsx(l,{children:r.created_at}),e.jsx(l,{children:r.status=="PAID"?e.jsx("span",{class:"me-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300",children:r.status}):r.status=="OPEN"?e.jsx("span",{class:"me-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300",children:r.status}):r.status=="UNPAID"?e.jsx("span",{class:"me-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",children:r.status}):e.jsx("span",{class:"me-2 rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300",children:r.status})}),e.jsx(l,{children:r.status=="OPEN"?e.jsxs(u,{href:route("order.checkout",[r.id]),className:"mb-2 me-2 inline-flex items-center rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800",children:[e.jsx(h,{icon:"IconShoppingCartUp"})," Detail Cart"]}):r.status=="UNPAID"?e.jsx(e.Fragment,{children:e.jsxs(u,{href:route("invoices.detail",[r.id]),className:"mb-2 me-2 inline-flex items-center rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800",children:[e.jsx(h,{icon:"IconFileInvoice"})," Invoices"]})}):e.jsxs(u,{href:route("invoices.detail",[r.id]),className:"mb-2 me-2 inline-flex items-center rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800",children:[e.jsx(h,{icon:"IconShoppingCartUp"})," Detail Cart"]})})]},s))}):e.jsx(x,{children:e.jsx(l,{colSpan:4,className:"animate-pulse py-5 text-center text-base font-semibold text-destructive",children:"No Orders."})})})]})]})]})}O.layout=d=>e.jsx(A,{title:"Order",children:d});export{O as default};
