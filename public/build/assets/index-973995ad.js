import{r as u,j as e,d as v}from"./app-09f0cebb.js";import"./button-357427dc.js";import"./sheet-54aab494.js";import"./index-8534196a.js";import{A as b,f as p,m as g}from"./command-422c3599.js";import"./XMarkIcon-ee465076.js";import{C,a as y,b as _,c as k,d as N,e as S}from"./card-baccc4bd.js";import{u as T,S as w,a as A,b as I,c as F,d as a,T as E,e as H,f as m,g as r,h as P,i as l}from"./useFilter-f056d863.js";import{UserListOptions as U}from"./user-list-options-5e20663f.js";import{S as D}from"./simple-pagination-571ff3ad.js";import{I as L}from"./input-00233e38.js";import{S as n}from"./sort-indicator-9b7b5ebb.js";import{A as R}from"./appLayout-bac20d4d.js";import"./IconCheck-c5fcb93b.js";import"./react-icons.esm-feaa2a86.js";import"./index-708586a4.js";import"./Combination-c2781251.js";import"./index-c5af9afc.js";import"./floating-ui.react-dom-e132892f.js";import"./index-2e328f01.js";import"./index-46cf7bfd.js";import"./icon-5cb206d5.js";import"./label-d4319d13.js";import"./dialog-fa4ebf60.js";import"./index-9423490a.js";import"./menuadministrator-536dbff7.js";import"./menuUser-88343c63.js";import"./index-a0b2995f.js";import"./logo_eagle_media_informatika-285b6851.js";function V(o){const{data:j,meta:h,links:f}=o.users,[i,x]=u.useState(o.state);T({route:route("users.index"),values:i,only:["users"]});const d=t=>{let s=(i==null?void 0:i.direction)??"asc";const c=(i==null?void 0:i.field)??"created_at";t===c&&(s=s==="asc"?"desc":"asc"),x({...i,field:t,direction:s})};return e.jsxs(C,{children:[e.jsxs(y,{children:[e.jsx(_,{children:"Users"}),e.jsx(k,{children:"The list of the registered users."})]}),e.jsxs(N,{children:[e.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[e.jsx("div",{children:e.jsxs(w,{value:i==null?void 0:i.limit,onValueChange:t=>x({...i,limit:t}),children:[e.jsx(A,{className:"w-[180px]",children:e.jsx(I,{placeholder:(i==null?void 0:i.limit)??10})}),e.jsxs(F,{children:[e.jsx(a,{value:"10",children:"10"}),e.jsx(a,{value:"25",children:"25"}),e.jsx(a,{value:"50",children:"50"}),e.jsx(a,{value:"75",children:"75"}),e.jsx(a,{value:"100",children:"100"})]})]})}),e.jsx("div",{className:"w-72",children:e.jsx(L,{type:"text",value:i==null?void 0:i.search,onChange:t=>x(s=>({...s,search:t.target.value})),placeholder:"Pencarian..."})})]}),e.jsxs(E,{children:[e.jsx(H,{children:e.jsxs(m,{children:[e.jsx(r,{className:"w-[50px] text-center",children:"#"}),e.jsx(r,{onClick:()=>d("name"),children:e.jsx(n,{label:"name",column:"name",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(r,{onClick:()=>d("username"),children:e.jsx(n,{label:"username",column:"username",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(r,{onClick:()=>d("email_verified_at"),children:e.jsx(n,{label:"verified",column:"email_verified_at",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(r,{onClick:()=>d("roles"),children:e.jsx(n,{label:"roles",column:"roles",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(r,{onClick:()=>d("created_at"),children:e.jsx(n,{label:"joined",column:"created_at",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(r,{onClick:()=>d("updated_at"),children:e.jsx(n,{label:"updated",column:"updated_at",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(r,{})]})}),e.jsx(P,{children:j.length>0?e.jsx(e.Fragment,{children:j.map((t,s)=>e.jsxs(m,{children:[e.jsx(l,{className:"w-0 py-7 text-center",children:h.from+s}),e.jsx(l,{children:e.jsxs("div",{className:"flex items-center font-normal",children:[e.jsx("div",{className:"mr-3 shrink-0",children:e.jsxs(b,{children:[e.jsx(p,{src:t.avatar}),e.jsx(g,{children:t.acronym})]})}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(v,{href:route("users.show",t),children:t.name})}),e.jsx("div",{className:"text-muted-foreground",children:t.email})]})]})}),e.jsx(l,{children:t.username}),e.jsx(l,{className:t.email_verified_at=="Email not verified"?"font-medium text-destructive":"",children:t.email_verified_at}),e.jsx(l,{children:t.roles.map((c,B)=>e.jsx(e.Fragment,{children:c.name=="Administrator"?e.jsx("span",{class:"bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300",children:c.name}):e.jsx("span",{class:"bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300",children:c.name})}))}),e.jsx(l,{children:t.created_at}),e.jsx(l,{children:t.updated_at}),e.jsx(l,{children:e.jsx("div",{className:"flex justify-end",children:e.jsx(U,{user:t})})})]},s))}):e.jsx(m,{children:e.jsx(l,{colSpan:7,className:"animate-pulse py-5 text-center text-base font-semibold text-destructive",children:"No users."})})})]})]}),e.jsx(S,{className:"flex items-center justify-between pt-6",children:e.jsx(D,{links:f,meta:h})})]})}V.layout=o=>e.jsx(R,{title:"Users",children:o});export{V as default};
