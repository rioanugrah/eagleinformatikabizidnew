import{r as m,j as s,a,d}from"./app-25b7d524.js";import{I as l}from"./appLayout-007dfab6.js";import"./icon-dfe243d3.js";import"./IconCheck-31caebf9.js";import"./index-da4f904c.js";import"./LogoSubEagleMediaInformatika-de8d60d9.js";import"./XMarkIcon-6d7e5201.js";import"./index-ed3ebc4b.js";import"./dialog-6589431a.js";import"./floating-ui.react-dom-75afbfa6.js";function i(r){m.useState(!1);const e=r.order,t=JSON.parse(r.order.payment.billing_buyer);return s.jsxs(s.Fragment,{children:[s.jsx(a,{title:"Order Code : "+e.order_code}),s.jsxs("div",{className:"px-4 sm:px-0",children:[s.jsxs("h3",{className:"text-base/7 font-semibold text-gray-900",children:["Order Code : #",e.order_code," ",e.payment.status=="PAID"?s.jsx("span",{class:"me-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300",children:e.payment.status}):e.payment.status=="UNPAID"?s.jsx("span",{class:"bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300",children:e.payment.status}):s.jsx("span",{class:"bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300",children:e.payment.status})]}),s.jsx("p",{className:"mt-1 max-w-2xl text-sm/6 text-gray-500",children:"Personal Order."})]}),s.jsxs("div",{className:"mt-6 border-t border-gray-100",children:[s.jsx("dl",{className:"divide-y divide-gray-100",children:s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Order Code"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:e.order_code})]})}),s.jsxs("dl",{className:"divide-y divide-gray-100",children:[s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Billing Name"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:t.first_name+" "+t.last_name})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Billing Address"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:t.address})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Billing Email"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:t.email})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Billing Phone"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:t.phone})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Tax"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:e.tax})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Total"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:e.total})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Created At"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:e.created_at})]})]})]}),s.jsx(d,{href:route("order.index"),className:"text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",children:"Back"})]})}i.layout=r=>s.jsx(l,{title:"Order Detail",children:r});export{i as default};
