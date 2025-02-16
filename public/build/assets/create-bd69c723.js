import{q as x,r as i,W as b,j as e,d as p,y as h}from"./app-b9d488e5.js";import{A as y}from"./app-layout-a47d2c9c.js";import{C as k,a as f,b as j,d as v,e as w}from"./card-3f1533ca.js";import{S as C}from"./sweetalert2.esm.all-adb41881.js";import"./icon-99bafb37.js";import"./index-3520b6d4.js";import"./IconCheck-ff9157f9.js";import"./separator-d806fd04.js";import"./index-ea22eb05.js";import"./menuadministrator-77b98d06.js";import"./index-dc578d37.js";import"./logo_eagle_media_informatika-285b6851.js";import"./XMarkIcon-d7fc27be.js";import"./label-dfe952af.js";import"./dialog-c5b43f66.js";import"./floating-ui.react-dom-bbc02854.js";function N(l){const{errors:a,auth:_}=x().props,[n,o]=i.useState(!1);i.useState(0);const{data:t,setData:s,post:S}=b({category_id:"",title:"",picture:null,description:"",price:"",quantity:"",tag:"",is_product_digital:"",files:"",status:""});i.useState("");const g=r=>{r.preventDefault(),o(!0),C.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Submit!"}).then(c=>{if(c.isConfirmed){const u=r.target.images.files[0],m=t.is_product_digital=="Y"?r.target.files.files[0]:"",d=new FormData;d.append("category_id",t.category_id),d.append("title",t.title),d.append("description",t.description),d.append("price",t.price),d.append("quantity",t.quantity),d.append("tag",t.tag),d.append("is_product_digital",t.is_product_digital),d.append("picture",u),d.append("files",m),d.append("status",t.status),h.post(route("products.store"),d,{onFinish:()=>{o(!1)}})}else o(!1)})};return e.jsx(e.Fragment,{children:e.jsxs(k,{children:[e.jsx(f,{children:e.jsx(j,{children:"Create Product"})}),e.jsxs("form",{onSubmit:g,children:[e.jsxs(v,{children:[e.jsx("div",{className:"mb-6 grid gap-6 md:grid-cols-2",children:e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-gray-900 dark:text-white",children:"Product Name"}),e.jsx("input",{type:"text",placeholder:"Name",value:t.title,onChange:r=>s("title",r.target.value),className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"}),a.title&&e.jsx("p",{className:"mt-2 text-sm text-red-500 dark:text-red-400",children:a.title})]})}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-gray-900 dark:text-white",children:"Product Description"}),e.jsx("textarea",{value:t.description,onChange:r=>s("description",r.target.value),className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",rows:10}),a.description&&e.jsx("p",{className:"mt-2 text-sm text-red-500 dark:text-red-400",children:a.description})]}),e.jsxs("div",{className:"mb-6 grid gap-6 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-gray-900 dark:text-white",children:"Category Product"}),e.jsxs("select",{value:t.category_id,onChange:r=>s("category_id",r.target.value),className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",children:[e.jsx("option",{selected:!0,children:"-- Select Category --"}),l.categories.map((r,c)=>e.jsx("option",{value:r.id,children:r.name}))]}),a.category_id&&e.jsx("p",{className:"mt-2 text-sm text-red-500 dark:text-red-400",children:a.category_id})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-gray-900 dark:text-white",children:"Is Product Digital?"}),e.jsxs("select",{value:t.is_product_digital,onChange:r=>s("is_product_digital",r.target.value),className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",children:[e.jsx("option",{selected:!0,children:"-- Select Product Digital --"}),e.jsx("option",{value:"Y",children:"Yes"}),e.jsx("option",{value:"N",children:"No"})]}),a.is_product_digital&&e.jsx("p",{className:"mt-2 text-sm text-red-500 dark:text-red-400",children:a.is_product_digital})]})]}),e.jsxs("div",{className:"mb-6 grid gap-6 md:grid-cols-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-gray-900 dark:text-white",children:"Product Price"}),e.jsx("input",{type:"number",placeholder:"Price",value:t.price,onChange:r=>s("price",r.target.value),className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"}),a.price&&e.jsx("p",{className:"mt-2 text-sm text-red-500 dark:text-red-400",children:a.price})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-gray-900 dark:text-white",children:"Product Stock"}),e.jsx("input",{type:"number",placeholder:"Stock",value:t.quantity,onChange:r=>s("quantity",r.target.value),className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"}),a.quantity&&e.jsx("p",{className:"mt-2 text-sm text-red-500 dark:text-red-400",children:a.quantity})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-gray-900 dark:text-white",children:"Upload Image Product Digital"}),e.jsx("input",{type:"file",name:"images",value:t.picture,onChange:r=>s("picture",r.target.value),className:"block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"}),a.picture&&e.jsx("p",{className:"mt-2 text-sm text-red-500 dark:text-red-400",children:a.picture})]}),t.is_product_digital==="Y"&&e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-gray-900 dark:text-white",children:"Upload File Product Digital"}),e.jsx("input",{value:t.files,name:"files",onChange:r=>s("files",r.target.value),className:"block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400",id:"file_input",type:"file"})]})]}),e.jsxs("div",{className:"mb-6 grid gap-6 md:grid-cols-2",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-gray-900 dark:text-white",children:"Tag Product"}),e.jsx("input",{type:"text",placeholder:"Tag",value:t.tag,onChange:r=>s("tag",r.target.value),className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"}),e.jsx("p",{id:"helper-text-explanation",class:"mt-2 text-sm text-gray-500 dark:text-gray-400",children:"Use (,) for multiple tag and not space."}),a.tag&&e.jsx("p",{className:"mt-2 text-sm text-red-500 dark:text-red-400",children:a.tag})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-gray-900 dark:text-white",children:"Status"}),e.jsxs("select",{value:t.status,onChange:r=>s("status",r.target.value),className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",children:[e.jsx("option",{selected:!0,children:"-- Select Status --"}),e.jsx("option",{value:"Aktif",children:"Aktif"}),e.jsx("option",{value:"Nonaktif",children:"Non Aktif"})]}),a.status&&e.jsx("p",{className:"mt-2 text-sm text-red-500 dark:text-red-400",children:a.status})]})]})]}),e.jsxs(w,{children:[e.jsx(p,{href:route("products.index"),className:"mb-2 me-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700",children:"Back"}),n?e.jsxs("button",{disabled:!0,type:"button",class:"me-2 inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",children:[e.jsxs("svg",{"aria-hidden":"true",role:"status",class:"me-3 inline h-4 w-4 animate-spin text-gray-200 dark:text-gray-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"#1C64F2"})]}),"Loading..."]}):e.jsx("button",{className:"mb-2 me-2 rounded-lg bg-gradient-to-r from-green-500 via-green-600 to-green-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-green-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:shadow-lg dark:shadow-green-800/80 dark:focus:ring-green-800",children:"Submit"})]})]})]})})}N.layout=l=>e.jsx(y,{title:"Create Product",children:l});export{N as default};
