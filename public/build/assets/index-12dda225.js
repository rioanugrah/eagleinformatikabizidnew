import{r as n,j as s,d as x}from"./app-7e344300.js";import{A as o}from"./appLayout-92f19a16.js";import"./icon-1b911682.js";import"./IconCheck-21470ec9.js";import"./XMarkIcon-c21dbc1f.js";import"./index-3fa0c0de.js";import"./label-5ce8ec2f.js";import"./dialog-5e9a2370.js";import"./floating-ui.react-dom-7bac7342.js";import"./menuadministrator-c877cff0.js";import"./menuUser-90de81be.js";import"./logo_eagle_media_informatika-285b6851.js";function g(m){const e=m.invoices.billing,a=JSON.parse(m.invoices.billing.billing_buyer),[p,r]=n.useState(!1),l=t=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t);n.useEffect(()=>{{const t="https://app.midtrans.com/snap/snap.js",i="Mid-client-UoBYHZo76x6vvOaJ",d=document.createElement("script");return d.src=t,d.setAttribute("data-client-key",i),d.async=!0,document.body.appendChild(d),()=>{document.body.removeChild(d)}}},[]);const c=async()=>{r(!0),window.snap.pay(e.billing_references,{onSuccess:t=>{alert("Payment Success"),router.get(route("dashboard")),r(!1)},onPending:t=>{alert("Payment Pending"),router.get(route("dashboard")),r(!1)},onError:t=>{alert("Payment Error"),router.get(route("dashboard")),r(!1)},onClose:()=>{console.log("customer close the popup window without the finishing the payment"),router.get(route("dashboard")),r(!1)}})};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"px-4 sm:px-0",children:[s.jsxs("h3",{className:"text-base/7 font-semibold text-gray-900",children:["Invoices #",m.invoices.no_invoice]}),s.jsx("p",{className:"mt-1 max-w-2xl text-sm/6 text-gray-500",children:"Personal Invoices."})]}),s.jsx("div",{className:"mt-6 border-t border-gray-100",children:s.jsxs("dl",{className:"divide-y divide-gray-100",children:[s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Billing Number"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:e.billing_code})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Billing References"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:e.billing_references})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"First Name"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:a.first_name})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Last Name"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:a.last_name})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Address"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:a.address})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Email address"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:a.email})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Phone Number"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:a.phone})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Tax"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:l(e.tax)})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Admin Fee"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:l(e.admin_fee)})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Total"}),s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:l(e.sub_total)})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Status"}),e.status=="UNPAID"?s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.jsx("span",{className:"bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300",children:e.status})}):e.status=="PAID"?s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.jsx("span",{className:"bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300",children:e.status})}):s.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.jsx("span",{className:"bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300",children:e.status})})]}),s.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Items"}),s.jsx("dd",{className:"mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0",children:s.jsx("ul",{role:"list",className:"divide-y divide-gray-100 rounded-md border border-gray-200",children:m.invoices.invoice_details.map((t,i)=>s.jsx("li",{className:"flex items-center justify-between py-4 pl-4 pr-5 text-sm/6",children:s.jsx("div",{className:"flex w-0 flex-1 items-center",children:s.jsxs("div",{className:"ml-4 flex min-w-0 flex-1 gap-2",children:[s.jsx("span",{className:"truncate font-medium",children:t.item.split("|")[1]}),s.jsx("span",{className:"shrink-0 text-green-700",children:l(t.amount)})]})})}))})})]})]})}),s.jsx(x,{href:route("order.index"),className:"text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",children:"Back"}),e.status=="UNPAID"&&s.jsx("button",{onClick:c,className:"text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",children:"Pay Now"})]})}g.layout=m=>s.jsx(o,{title:"Order Invoices",children:m});export{g as default};
