import{W as u,r as c,j as e}from"./app-b9d488e5.js";import{I as o}from"./input-error-5bd7df90.js";import{L as m}from"./label-25a50cd7.js";import{I as i}from"./input-74512efd.js";import{B as f}from"./button-108add15.js";import{G as w}from"./guest-layout-fd99ddb0.js";import{P as x}from"./primary-link-eae8d329.js";import"./index-3520b6d4.js";import"./index-ea22eb05.js";import"./card-3f1533ca.js";import"./theme-toggle-6578099f.js";import"./icon-99bafb37.js";import"./IconCheck-ff9157f9.js";function j(){const{data:a,setData:r,post:l,processing:n,errors:t,reset:d}=u({name:"",email:"",password:"",password_confirmation:""});c.useEffect(()=>()=>{d("password","password_confirmation")},[]);const p=s=>{s.preventDefault(),l(route("register"))};return e.jsxs("form",{onSubmit:p,children:[e.jsxs("div",{children:[e.jsx(m,{htmlFor:"name",children:"Name"}),e.jsx(i,{id:"name",name:"name",value:a.name,className:"mt-1 block w-full",autoComplete:"name",autoFocus:!0,onChange:s=>r("name",s.target.value),required:!0}),e.jsx(o,{message:t.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"email",children:"Email"}),e.jsx(i,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",onChange:s=>r("email",s.target.value),required:!0}),e.jsx(o,{message:t.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"password",children:"Password"}),e.jsx(i,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password",s.target.value),required:!0}),e.jsx(o,{message:t.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"password_confirmation",children:"Confirm Password"}),e.jsx(i,{id:"password_confirmation",type:"password",name:"password_confirmation",value:a.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password_confirmation",s.target.value),required:!0}),e.jsx(o,{message:t.password_confirmation,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-end",children:[e.jsx(x,{href:route("login"),value:"login?"}),e.jsx(f,{className:"ml-4",disabled:n,children:"Register"})]})]})}j.layout=a=>e.jsx(w,{title:"Register",description:"Haii, Feel free to register",children:a});export{j as default};
