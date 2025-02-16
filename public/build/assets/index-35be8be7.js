import{r as f,j as e,a as g,d as h}from"./app-8d8d7ad9.js";import{A as w}from"./app-layout-8e1abf25.js";import{C as k,a as p,b as y,d as v}from"./card-ba5cb4f5.js";import{u as C,S as _,a as S,b as N,c as I,d,T,e as W,f as x,g as n,h as o,i as E,j as l}from"./sort-indicator-4308d534.js";import{I as A}from"./input-e6b1b2da.js";import{I as b}from"./icon-b983c8a4.js";import"./XMarkIcon-c9cd4665.js";import"./IconCheck-0a78c108.js";import"./index-9b8f6c05.js";import"./label-4ce1b15c.js";import"./dialog-a20bad36.js";import"./floating-ui.react-dom-d7874801.js";import"./index-d72cafdc.js";import"./logo_eagle_media_informatika-285b6851.js";import"./react-icons.esm-354832b3.js";import"./index-72103850.js";import"./Combination-6b5014a1.js";import"./index-ff9682d8.js";import"./index-ef1aaffd.js";function L(c){const{data:u,meta:j,links:H}=c.websites,[t,a]=f.useState(c.state);C({route:route("websites.index"),values:t});const r=i=>{let s=(t==null?void 0:t.direction)??"asc";const m=(t==null?void 0:t.field)??"created_at";i===m&&(s=s==="asc"?"desc":"asc"),a({...t,field:i,direction:s})};return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Websites"}),e.jsxs(k,{children:[e.jsx(p,{children:e.jsx(y,{children:"Website"})}),e.jsxs(v,{children:[e.jsx("div",{className:"mb-6",children:e.jsx(h,{href:route("websites.create"),class:"mb-2 me-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800 ",children:"Create"})}),e.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[e.jsxs(_,{value:t==null?void 0:t.limit,onValueChange:i=>a({...t,limit:i}),children:[e.jsx(S,{className:"w-[180px]",children:e.jsx(N,{placeholder:(t==null?void 0:t.limit)??10})}),e.jsxs(I,{children:[e.jsx(d,{value:"10",children:"10"}),e.jsx(d,{value:"25",children:"25"}),e.jsx(d,{value:"50",children:"50"}),e.jsx(d,{value:"75",children:"75"}),e.jsx(d,{value:"100",children:"100"})]})]}),e.jsx("div",{className:"w-72",children:e.jsx(A,{type:"text",value:t==null?void 0:t.search,onChange:i=>a(s=>({...s,search:i.target.value})),placeholder:"Pencarian..."})})]}),e.jsxs(T,{children:[e.jsx(W,{children:e.jsxs(x,{children:[e.jsx(n,{className:"w-[50px] text-center",children:"#"}),e.jsx(n,{onClick:()=>r("website_name"),children:e.jsx(o,{label:"Website Name",column:"website_name",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(n,{onClick:()=>r("website_link"),children:e.jsx(o,{label:"Website Link",column:"website_link",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(n,{onClick:()=>r("user_id"),children:e.jsx(o,{label:"User",column:"user_id",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(n,{onClick:()=>r("expired_date"),children:e.jsx(o,{label:"Expired Date",column:"expired_date",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(n,{onClick:()=>r("status"),children:e.jsx(o,{label:"Status",column:"status",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(n,{})]})}),e.jsx(E,{children:u.length>0?e.jsx(e.Fragment,{children:u.map((i,s)=>e.jsxs(x,{children:[e.jsx(l,{className:"w-0 py-7 text-center",children:j.from+s}),e.jsx(l,{children:i.website_name}),e.jsx(l,{children:i.website_link}),e.jsx(l,{children:i.user.name}),e.jsx(l,{children:i.expired_date}),e.jsx(l,{children:i.status=="Aktif"?e.jsx("span",{class:"bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300",children:i.status}):i.status=="Waiting Payment"?e.jsx("span",{class:"bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300",children:i.status}):e.jsx("span",{class:"bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300",children:i.status})}),e.jsxs(l,{children:[i.status=="Aktif"&&e.jsxs("a",{href:i.website_link,target:"_blank",className:"inline-flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",children:[e.jsx(b,{icon:"IconLogin2"})," Go Website"]}),e.jsxs(h,{className:"text-gray-900 inline-flex items-center bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",children:[e.jsx(b,{icon:"IconLogin2"})," Edit"]})]})]},s))}):e.jsx(x,{children:e.jsx(l,{colSpan:4,className:"animate-pulse py-5 text-center text-base font-semibold text-destructive",children:"Empty Websites"})})})]})]})]})]})}L.layout=c=>e.jsx(w,{title:"Websites",children:c});export{L as default};
