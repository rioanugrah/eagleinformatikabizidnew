import{q as l,W as g,r as c,j as e,d as u,y as m}from"./app-8d8d7ad9.js";import{A as x}from"./appLayout-b3b28ea0.js";import{C as b,a as h,b as p,d as y,e as f}from"./card-ba5cb4f5.js";import"./icon-b983c8a4.js";import"./IconCheck-0a78c108.js";import"./XMarkIcon-c9cd4665.js";import"./index-9b8f6c05.js";import"./label-4ce1b15c.js";import"./dialog-a20bad36.js";import"./floating-ui.react-dom-d7874801.js";import"./index-d72cafdc.js";import"./menuUser-2487cf5d.js";import"./logo_eagle_media_informatika-285b6851.js";function k(t){const{errors:a,auth:C}=l().props,{data:s,setData:o,post:j,progress:w}=g({name:t.category.name,description:t.category.description,status:t.category.status}),[i,d]=c.useState(!1),n=r=>{r.preventDefault(),d(!0),m.post(route("categories.update",[t.category.id]),s,{onFinish:()=>{d(!1)}})};return e.jsx(e.Fragment,{children:e.jsxs(b,{children:[e.jsx(h,{children:e.jsx(p,{children:"Edit Category"})}),e.jsxs("form",{onSubmit:n,children:[e.jsxs(y,{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-gray-900 dark:text-white",children:"Name"}),e.jsx("input",{type:"text",placeholder:"Name",value:s.name,onChange:r=>o("name",r.target.value),className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"}),a.name&&e.jsx("p",{className:"mt-2 text-sm text-red-500 dark:text-red-400",children:a.name})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-gray-900 dark:text-white",children:"Description"}),e.jsx("textarea",{value:s.description,onChange:r=>o("description",r.target.value),className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",placeholder:"Description",rows:5}),a.description&&e.jsx("p",{className:"mt-2 text-sm text-red-500 dark:text-red-400",children:a.description})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-gray-900 dark:text-white",children:"Status"}),e.jsxs("select",{value:s.status,onChange:r=>o("status",r.target.value),class:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",children:[e.jsx("option",{selected:!0,children:"-- Select Status --"}),e.jsx("option",{value:"Aktif",children:"Aktif"}),e.jsx("option",{value:"Nonaktif",children:"Non Aktif"})]}),a.status&&e.jsx("p",{className:"mt-2 text-sm text-red-500 dark:text-red-400",children:a.status})]})]}),e.jsxs(f,{children:[e.jsx(u,{href:route("categories.index"),className:"mb-2 me-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700",children:"Back"}),i?e.jsxs("button",{disabled:!0,type:"button",class:"me-2 inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",children:[e.jsxs("svg",{"aria-hidden":"true",role:"status",class:"me-3 inline h-4 w-4 animate-spin text-gray-200 dark:text-gray-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"#1C64F2"})]}),"Loading..."]}):e.jsx("button",{className:"mb-2 me-2 rounded-lg bg-gradient-to-r from-green-500 via-green-600 to-green-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-green-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:shadow-lg dark:shadow-green-800/80 dark:focus:ring-green-800",children:"Update"})]})]})]})})}k.layout=t=>e.jsx(x,{title:"Edit Category",children:t});export{k as default};
