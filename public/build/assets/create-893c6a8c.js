import{q as m,r as a,j as e,d as u,y as c}from"./app-d83e23a6.js";import"./button-511d548e.js";import{C as x,a as b,b as h,d as p,e as f}from"./card-f7afdd9e.js";import{A as y}from"./appnew-layout-d63718c3.js";import"./icon-582b59ec.js";import"./menu-687fb9cf.js";import"./index-521fd295.js";import"./focus-management-21e17fca.js";import"./floating-ui.react-dom-e8c1f3c9.js";function k(){const{errors:r}=m().props,[s,n]=a.useState(""),[o,i]=a.useState(""),[l,d]=a.useState(!1),g=t=>{t.preventDefault(),d(!0),c.post(route("permissions.store"),{name:s,guard_name:o},{onFinish:()=>{d(!1)}})};return e.jsx(e.Fragment,{children:e.jsxs(x,{children:[e.jsx(b,{children:e.jsx(h,{children:"Create Permission"})}),e.jsxs("form",{onSubmit:g,children:[e.jsxs(p,{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-gray-900 dark:text-white",children:"Name"}),e.jsx("input",{type:"text",value:s,onChange:t=>n(t.target.value),className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",placeholder:"Permission Name"}),r.name&&e.jsx("p",{className:"mt-2 text-sm text-red-500 dark:text-red-400",children:r.name})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-gray-900 dark:text-white",children:"Guard Name"}),e.jsxs("select",{value:o,onChange:t=>i(t.target.value),class:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",children:[e.jsx("option",{selected:!0,children:"-- Select Guard Name --"}),e.jsx("option",{value:"web",children:"WEB"}),e.jsx("option",{value:"api",children:"API"})]}),r.name&&e.jsx("p",{className:"mt-2 text-sm text-red-500 dark:text-red-400",children:r.guard_name})]})]}),e.jsxs(f,{children:[e.jsx(u,{href:route("permissions.index"),className:"text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",children:"Back"}),l?e.jsxs("button",{disabled:!0,type:"button",class:"py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center",children:[e.jsxs("svg",{"aria-hidden":"true",role:"status",class:"inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"#1C64F2"})]}),"Loading..."]}):e.jsx("button",{className:"text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",children:"Submit"})]})]})]})})}k.layout=r=>e.jsx(y,{title:"Create Permissions",children:r});export{k as default};
