import{q as d,r as x,j as e,d as u}from"./app-1d778fd1.js";import{T as f}from"./TrashIcon-910f5c0a.js";function p({id:t,product_id:h,product:l,item:b,quantity:s,price:n,updateQty:r}){const{cart:a}=d().props;x.useState(!1);const c=()=>{r(t,s+1)},o=()=>{r(t,s-1)},i=m=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(m);return e.jsx("li",{className:"flex px-4 py-6 sm:px-6",children:e.jsxs("div",{className:"ml-6 flex flex-1 flex-col",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"min-w-0 flex-1",children:e.jsx("h4",{className:"text-sm",children:e.jsx("a",{className:"font-bold text-gray-700 hover:text-gray-800",children:l.title})})}),e.jsx("div",{className:"ml-4 flow-root flex-shrink-0",children:e.jsxs(u,{as:"button",method:"post",href:route("cart.remove_item",[a.id,t]),className:"-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Remove"}),e.jsx(f,{"aria-hidden":"true",className:"h-5 w-5"})]})})]}),e.jsxs("div",{className:"flex flex-1 items-end justify-between pt-2",children:[e.jsx("p",{className:"mt-1 text-sm font-medium text-gray-900",children:i(n)}),e.jsxs("div",{className:"ml-4",children:[e.jsx("label",{htmlFor:"quantity",className:"sr-only",children:"Quantity"}),e.jsxs("div",{children:[e.jsx("button",{type:"button",className:"px-3 py-2 mr-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",onClick:o,disabled:s<=1,children:"-"}),s,e.jsx("button",{type:"button",className:"px-3 py-2 ml-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",onClick:c,children:"+"})]})]})]})]})})}export{p as default};
