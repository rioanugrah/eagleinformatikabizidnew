import{r as f,j as e,d as v}from"./app-c4616f56.js";import"./button-155e3f63.js";import"./sheet-ec5d8dfc.js";import"./index-9791a652.js";import{A as b,f as p,m as g}from"./command-9022dd66.js";import"./XMarkIcon-921e1758.js";import{C,a as y,b as _,c as k,d as N,e as S}from"./card-8ec5bf83.js";import{u as T,S as w,a as A,b as I,c as F,d as a,T as E,e as H,f as j,g as r,h as n,i as P,j as l}from"./sort-indicator-5028b8d3.js";import{UserListOptions as U}from"./user-list-options-6be75c64.js";import{S as D}from"./simple-pagination-70d77038.js";import{I as L}from"./input-f26a0859.js";import{A as R}from"./app-layout-05b8309c.js";import"./IconCheck-dddedbd3.js";import"./react-icons.esm-26e41c02.js";import"./index-7c254dec.js";import"./Combination-a072157f.js";import"./index-4a40f1be.js";import"./floating-ui.react-dom-a9349158.js";import"./index-bbf12980.js";import"./index-db885340.js";import"./icon-e5927db8.js";import"./label-cf85295f.js";import"./dialog-eba35d19.js";import"./index-7c5e6f54.js";import"./menuadministrator-bcb65de7.js";import"./logo_eagle_media_informatika-285b6851.js";function V(o){const{data:m,meta:h,links:u}=o.users,[i,x]=f.useState(o.state);T({route:route("users.index"),values:i,only:["users"]});const d=t=>{let s=(i==null?void 0:i.direction)??"asc";const c=(i==null?void 0:i.field)??"created_at";t===c&&(s=s==="asc"?"desc":"asc"),x({...i,field:t,direction:s})};return e.jsxs(C,{children:[e.jsxs(y,{children:[e.jsx(_,{children:"Users"}),e.jsx(k,{children:"The list of the registered users."})]}),e.jsxs(N,{children:[e.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[e.jsx("div",{children:e.jsxs(w,{value:i==null?void 0:i.limit,onValueChange:t=>x({...i,limit:t}),children:[e.jsx(A,{className:"w-[180px]",children:e.jsx(I,{placeholder:(i==null?void 0:i.limit)??10})}),e.jsxs(F,{children:[e.jsx(a,{value:"10",children:"10"}),e.jsx(a,{value:"25",children:"25"}),e.jsx(a,{value:"50",children:"50"}),e.jsx(a,{value:"75",children:"75"}),e.jsx(a,{value:"100",children:"100"})]})]})}),e.jsx("div",{className:"w-72",children:e.jsx(L,{type:"text",value:i==null?void 0:i.search,onChange:t=>x(s=>({...s,search:t.target.value})),placeholder:"Pencarian..."})})]}),e.jsxs(E,{children:[e.jsx(H,{children:e.jsxs(j,{children:[e.jsx(r,{className:"w-[50px] text-center",children:"#"}),e.jsx(r,{onClick:()=>d("name"),children:e.jsx(n,{label:"name",column:"name",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(r,{onClick:()=>d("username"),children:e.jsx(n,{label:"username",column:"username",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(r,{onClick:()=>d("email_verified_at"),children:e.jsx(n,{label:"verified",column:"email_verified_at",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(r,{onClick:()=>d("roles"),children:e.jsx(n,{label:"roles",column:"roles",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(r,{onClick:()=>d("created_at"),children:e.jsx(n,{label:"joined",column:"created_at",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(r,{onClick:()=>d("updated_at"),children:e.jsx(n,{label:"updated",column:"updated_at",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(r,{})]})}),e.jsx(P,{children:m.length>0?e.jsx(e.Fragment,{children:m.map((t,s)=>e.jsxs(j,{children:[e.jsx(l,{className:"w-0 py-7 text-center",children:h.from+s}),e.jsx(l,{children:e.jsxs("div",{className:"flex items-center font-normal",children:[e.jsx("div",{className:"mr-3 shrink-0",children:e.jsxs(b,{children:[e.jsx(p,{src:t.avatar}),e.jsx(g,{children:t.acronym})]})}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(v,{href:route("users.show",t),children:t.name})}),e.jsx("div",{className:"text-muted-foreground",children:t.email})]})]})}),e.jsx(l,{children:t.username}),e.jsx(l,{className:t.email_verified_at=="Email not verified"?"font-medium text-destructive":"",children:t.email_verified_at}),e.jsx(l,{children:t.roles.map((c,B)=>e.jsx(e.Fragment,{children:c.name=="Administrator"?e.jsx("span",{class:"bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300",children:c.name}):e.jsx("span",{class:"bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300",children:c.name})}))}),e.jsx(l,{children:t.created_at}),e.jsx(l,{children:t.updated_at}),e.jsx(l,{children:e.jsx("div",{className:"flex justify-end",children:e.jsx(U,{user:t})})})]},s))}):e.jsx(j,{children:e.jsx(l,{colSpan:7,className:"animate-pulse py-5 text-center text-base font-semibold text-destructive",children:"No users."})})})]})]}),e.jsx(S,{className:"flex items-center justify-between pt-6",children:e.jsx(D,{links:u,meta:h})})]})}V.layout=o=>e.jsx(R,{title:"Users",children:o});export{V as default};
