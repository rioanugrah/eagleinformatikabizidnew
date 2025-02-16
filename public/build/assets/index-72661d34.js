import{r as l,W as h,j as e}from"./app-b9d488e5.js";import{B as s}from"./button-108add15.js";import"./sheet-1e8fc6e7.js";import"./index-0c41a024.js";import{D as j,a as y,b as w,c as D,d as g,e as C}from"./command-6f2ca423.js";import"./separator-d806fd04.js";import{I as v}from"./input-error-5bd7df90.js";import{L as b}from"./label-25a50cd7.js";import{I as A}from"./input-74512efd.js";import{C as I,a as E,b as F,c as N,d as S}from"./card-3f1533ca.js";import{A as U}from"./appLayout-72b101d4.js";import"./index-3520b6d4.js";import"./react-icons.esm-43144308.js";import"./index-0bbb6fe3.js";import"./Combination-a0ed54f6.js";import"./index-ea22eb05.js";import"./floating-ui.react-dom-bbc02854.js";import"./index-1800b340.js";import"./index-7cff4a64.js";import"./icon-99bafb37.js";import"./IconCheck-ff9157f9.js";import"./menuadministrator-77b98d06.js";import"./menuUser-751e72f1.js";import"./index-dc578d37.js";import"./logo_eagle_media_informatika-285b6851.js";import"./dialog-c5b43f66.js";import"./XMarkIcon-d7fc27be.js";import"./label-dfe952af.js";function k(){const[r,o]=l.useState(!1),a=l.useRef(),{data:d,setData:c,delete:p,processing:m,reset:n,errors:u}=h({password:""}),x=()=>{o(!0)},f=t=>{t.preventDefault(),p(route("danger.destroy"),{preserveScroll:!0,onSuccess:()=>i(),onError:()=>a.current.focus(),onFinish:()=>n()})},i=()=>{o(!1),n()};return e.jsxs(I,{children:[e.jsxs(E,{children:[e.jsx(F,{children:"Delete Account"}),e.jsx(N,{children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),e.jsxs(S,{children:[e.jsx(s,{variant:"destructive",onClick:x,children:"Delete Account"}),e.jsx(j,{open:r,onOpenChange:o,children:e.jsxs(y,{children:[e.jsxs(w,{children:[e.jsx(D,{children:"Are you sure you want to delete your account?"}),e.jsx(g,{children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."})]}),e.jsxs("form",{onSubmit:f,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx(b,{htmlFor:"password",children:"Password"}),e.jsx(A,{id:"password",type:"password",name:"password",ref:a,value:d.password,onChange:t=>c("password",t.target.value),className:"mt-1",autoFocus:!0,placeholder:"Password"}),e.jsx(v,{message:u.password,className:"mt-2"})]}),e.jsxs(C,{className:"gap-x-2",children:[e.jsx(s,{type:"button",variant:"outline",onClick:i,children:"Cancel"}),e.jsx(s,{variant:"destructive",disabled:m,children:"Delete Account"})]})]})]})})]})]})}k.layout=r=>e.jsx(U,{title:"Danger",children:r});export{k as default};
