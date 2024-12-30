import{j as s,d}from"./app-c4616f56.js";import{A as i}from"./appLayout-26be5ab5.js";import"./icon-e5927db8.js";import"./IconCheck-dddedbd3.js";import"./XMarkIcon-921e1758.js";import"./index-4a40f1be.js";import"./label-cf85295f.js";import"./dialog-eba35d19.js";import"./floating-ui.react-dom-a9349158.js";import"./menuadministrator-bcb65de7.js";import"./menuUser-d7642dd6.js";import"./logo_eagle_media_informatika-285b6851.js";function l(t){const e=t.invoices.billing,m=JSON.parse(t.invoices.billing.billing_buyer),a=r=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(r);return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"px-4 sm:px-0",children:[s.jsxs("h3",{className:"text-base/7 font-semibold text-gray-900",children:["Invoices #",t.invoices.no_invoice]}),s.jsx("p",{className:"mt-1 max-w-2xl text-sm/6 text-gray-500",children:"Personal Invoices."})]}),s.jsx("div",{className:"mt-6 border-t border-gray-100",children:s.jsxs("dl",{className:"divide-y divide-gray-100",children:[s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Billing Number"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:e.billing_code})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Billing References"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:e.billing_references})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"First Name"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:m.first_name})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Last Name"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:m.last_name})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Address"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:m.address})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Email address"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:m.email})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Phone Number"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:m.phone})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Tax"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:a(e.tax)})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Admin Fee"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:a(e.admin_fee)})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Total"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:a(e.sub_total)})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Status"}),e.status=="UNPAID"?s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.jsx("span",{className:"bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300",children:e.status})}):e.status=="PAID"?s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.jsx("span",{className:"bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300",children:e.status})}):s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.jsx("span",{className:"bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300",children:e.status})})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Items"}),s.jsx("dd",{className:"mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0",children:s.jsx("ul",{role:"list",className:"divide-y divide-gray-100 rounded-md border border-gray-200",children:t.invoices.invoice_details.map((r,x)=>s.jsx("li",{className:"flex items-center justify-between py-4 pl-4 pr-5 text-sm/6",children:s.jsx("div",{className:"flex w-0 flex-1 items-center",children:s.jsxs("div",{className:"ml-4 flex min-w-0 flex-1 gap-2",children:[s.jsx("span",{className:"truncate font-medium",children:r.item.split("|")[1]}),s.jsx("span",{className:"shrink-0 text-green-700",children:a(r.amount)})]})})}))})})]})]})}),s.jsx(d,{href:route("order.index"),className:"text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",children:"Back"}),e.status=="UNPAID"&&s.jsx("a",{href:t.invoices.billing.billing_link_payment,className:"text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",children:"Pay Now"})]})}l.layout=t=>s.jsx(i,{title:"Order Invoices",children:t});export{l as default};
