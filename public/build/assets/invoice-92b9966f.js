import{j as t,a as d,d as a}from"./app-25b7d524.js";import{I as o}from"./appLayout-007dfab6.js";import{l as x}from"./LogoEagleMediaInformatika-30e2ddcd.js";import"./icon-dfe243d3.js";import"./IconCheck-31caebf9.js";import"./index-da4f904c.js";import"./LogoSubEagleMediaInformatika-de8d60d9.js";import"./XMarkIcon-6d7e5201.js";import"./index-ed3ebc4b.js";import"./dialog-6589431a.js";import"./floating-ui.react-dom-75afbfa6.js";function c(r){const e=r.order,s=JSON.parse(r.order.payment.billing_buyer);return t.jsxs(t.Fragment,{children:[t.jsx(d,{title:"Invoice - "+e.order_code}),t.jsxs("div",{class:"mx-auto my-6 max-w-3xl rounded bg-white p-6 shadow-sm",id:"invoice",children:[t.jsxs("div",{class:"grid grid-cols-2 items-center",children:[t.jsx("div",{children:t.jsx("img",{src:x,alt:"",height:"100",width:"100"})}),t.jsxs("div",{class:"text-right",children:[t.jsx("p",{children:"PT Eagle Media Informatika"}),t.jsx("p",{class:"text-sm text-gray-500",children:"marketing@eagleinformatika.biz.id"}),t.jsx("p",{class:"mt-1 text-sm text-gray-500",children:"+62 881-0801-78055"})]})]}),t.jsxs("div",{class:"mt-8 grid grid-cols-2 items-center",children:[t.jsxs("div",{children:[t.jsx("p",{class:"font-bold text-gray-800",children:"Bill to :"}),t.jsxs("p",{class:"text-gray-500",children:[s.first_name+" "+s.last_name,t.jsx("br",{}),s.address]}),t.jsx("p",{class:"text-gray-500",children:s.email})]}),t.jsxs("div",{class:"text-right",children:[t.jsxs("p",{class:"",children:["Invoice number:",t.jsx("span",{class:"text-gray-500",children:e.payment.billing_code})]}),t.jsxs("p",{children:["Invoice date: ",t.jsx("span",{class:"text-gray-500",children:e.created_at}),t.jsx("br",{})]})]})]}),t.jsx("div",{class:"-mx-4 mt-8 flow-root sm:mx-0",children:t.jsxs("table",{class:"min-w-full",children:[t.jsx("thead",{class:"border-b border-gray-300 text-gray-900",children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0",children:"Items"}),t.jsx("th",{scope:"col",class:"hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell",children:"Quantity"}),t.jsx("th",{scope:"col",class:"hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell",children:"Price"}),t.jsx("th",{scope:"col",class:"py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0",children:"Amount"})]})}),t.jsx("tbody",{children:r.order.order_details.map((l,i)=>t.jsxs("tr",{class:"border-b border-gray-200",children:[t.jsx("td",{class:"max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0",children:t.jsx("div",{class:"font-medium text-gray-900",children:l.item})}),t.jsx("td",{class:"hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell",children:l.quantity}),t.jsx("td",{class:"hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell",children:l.price}),t.jsx("td",{class:"py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0",children:l.total})]},i))}),t.jsxs("tfoot",{children:[t.jsxs("tr",{children:[t.jsx("th",{scope:"row",colspan:"3",class:"hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0",children:"Subtotal"}),t.jsx("th",{scope:"row",class:"pl-6 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden",children:"Subtotal"}),t.jsx("td",{class:"pl-3 pr-6 pt-6 text-right text-sm text-gray-500 sm:pr-0",children:e.total})]}),t.jsxs("tr",{children:[t.jsx("th",{scope:"row",colspan:"3",class:"hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0",children:"Tax"}),t.jsx("th",{scope:"row",class:"pl-6 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden",children:"Tax"}),t.jsx("td",{class:"pl-3 pr-6 pt-4 text-right text-sm text-gray-500 sm:pr-0",children:e.tax})]}),t.jsxs("tr",{children:[t.jsx("th",{scope:"row",colspan:"3",class:"hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0",children:"Total"}),t.jsx("th",{scope:"row",class:"pl-6 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden",children:"Total"}),t.jsx("td",{class:"pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0",children:e.sub_total})]})]})]})}),t.jsx(a,{href:route("order.index"),className:"text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",children:"Back"}),t.jsx(a,{href:route("invoices.pdf",[e.id]),className:"text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",children:"Print"})]})]})}c.layout=r=>t.jsx(o,{title:"Invoices",children:r});export{c as default};
