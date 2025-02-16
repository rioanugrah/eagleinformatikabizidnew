import{r as b,j as e,d as c}from"./app-8d8d7ad9.js";import{C as p,a as w,b as v,d as k,e as N}from"./card-ba5cb4f5.js";import{u as y,S as C,a as S,b as T,c as I,d as n,T as P,e as _,f as x,g as l,h as m,i as A,j as r}from"./sort-indicator-4308d534.js";import{I as E}from"./input-e6b1b2da.js";import{A as H}from"./appLayout-b3b28ea0.js";import{I as j}from"./icon-b983c8a4.js";import{S as D}from"./simple-pagination-04693120.js";import"./IconCheck-0a78c108.js";import"./react-icons.esm-354832b3.js";import"./index-72103850.js";import"./Combination-6b5014a1.js";import"./index-9b8f6c05.js";import"./floating-ui.react-dom-d7874801.js";import"./index-ff9682d8.js";import"./index-ef1aaffd.js";import"./XMarkIcon-c9cd4665.js";import"./label-4ce1b15c.js";import"./dialog-a20bad36.js";import"./index-d72cafdc.js";import"./menuUser-2487cf5d.js";import"./logo_eagle_media_informatika-285b6851.js";import"./button-622cff09.js";function F(d){const{data:u,meta:h,links:f}=d.ppns,[t,o]=b.useState(d.state);y({route:route("ppns.index"),values:t});const a=i=>{let s=(t==null?void 0:t.direction)??"asc";const g=(t==null?void 0:t.field)??"created_at";i===g&&(s=s==="asc"?"desc":"asc"),o({...t,field:i,direction:s})};return e.jsxs(p,{children:[e.jsx(w,{children:e.jsx(v,{children:"PPN"})}),e.jsxs(k,{children:[e.jsx("div",{className:"mb-3 flex",children:e.jsx(c,{href:route("ppns.create"),className:"mb-2 me-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800",children:"Create"})}),e.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[e.jsx("div",{children:e.jsxs(C,{value:t==null?void 0:t.limit,onValueChange:i=>o({...t,limit:i}),children:[e.jsx(S,{className:"w-[180px]",children:e.jsx(T,{placeholder:(t==null?void 0:t.limit)??10})}),e.jsxs(I,{children:[e.jsx(n,{value:"10",children:"10"}),e.jsx(n,{value:"25",children:"25"}),e.jsx(n,{value:"50",children:"50"}),e.jsx(n,{value:"75",children:"75"}),e.jsx(n,{value:"100",children:"100"})]})]})}),e.jsx("div",{className:"w-72",children:e.jsx(E,{type:"text",value:t==null?void 0:t.search,onChange:i=>o(s=>({...s,search:i.target.value})),placeholder:"Pencarian..."})})]}),e.jsxs(P,{children:[e.jsx(_,{children:e.jsxs(x,{children:[e.jsx(l,{className:"w-[50px] text-center",children:"#"}),e.jsx(l,{onClick:()=>a("ppn_name"),children:e.jsx(m,{label:"Name",column:"ppn_name",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(l,{onClick:()=>a("ppn_nominal"),children:e.jsx(m,{label:"Nominal",column:"ppn_nominal",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(l,{onClick:()=>a("status"),children:e.jsx(m,{label:"status",column:"status",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(l,{})]})}),e.jsx(A,{children:u.length>0?e.jsx(e.Fragment,{children:u.map((i,s)=>e.jsxs(x,{children:[e.jsx(r,{className:"w-0 py-7 text-center",children:h.from+s}),e.jsx(r,{children:i.ppn_name}),e.jsx(r,{children:i.ppn_nominal}),e.jsx(r,{children:i.status=="Aktif"?e.jsx("span",{class:"me-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300",children:i.status}):e.jsx("span",{class:"me-2 rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300",children:i.status})}),e.jsxs(r,{children:[e.jsxs(c,{href:route("ppns.edit",[i.id]),className:"mb-2 me-2 inline-flex items-center rounded-lg bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 px-5 py-2.5 text-center text-sm font-medium text-gray-900 shadow-lg shadow-lime-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-lime-300 dark:shadow-lg dark:shadow-lime-800/80 dark:focus:ring-lime-800",children:[e.jsx(j,{icon:"IconLogin2"})," Edit"]}),e.jsxs(c,{as:"button",method:"delete",href:route("ppns.destroy",[i.id]),className:"mb-2 mb-2 me-2 me-2 inline-flex rounded-lg bg-gradient-to-r from-red-400 via-red-500 to-red-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-red-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-red-300 dark:shadow-lg dark:shadow-red-800/80 dark:focus:ring-red-800",children:[e.jsx(j,{icon:"IconTrash"})," Delete"]})]})]},s))}):e.jsx(x,{children:e.jsx(r,{colSpan:5,className:"animate-pulse py-5 text-center text-base font-semibold text-destructive",children:"No PPN."})})})]})]}),e.jsx(N,{className:"flex items-center justify-between pt-6",children:e.jsx(D,{links:f,meta:h})})]})}F.layout=d=>e.jsx(H,{title:"PPN",children:d});export{F as default};
