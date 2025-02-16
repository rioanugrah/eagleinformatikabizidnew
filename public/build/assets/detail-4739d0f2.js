import{r as m,j as e,d as x}from"./app-b9d488e5.js";import{A as g}from"./appLayout-72b101d4.js";import"./icon-99bafb37.js";import"./index-3520b6d4.js";import"./IconCheck-ff9157f9.js";import"./separator-d806fd04.js";import"./index-ea22eb05.js";import"./menuadministrator-77b98d06.js";import"./menuUser-751e72f1.js";import"./index-dc578d37.js";import"./logo_eagle_media_informatika-285b6851.js";import"./dialog-c5b43f66.js";import"./XMarkIcon-d7fc27be.js";import"./label-dfe952af.js";import"./floating-ui.react-dom-bbc02854.js";function u(n){const[i,r]=m.useState(!1),s=n.transaction,a=JSON.parse(n.transaction.billing_buyer),o=t=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t);m.useEffect(()=>{{const t="https://app.sandbox.midtrans.com/snap/snap.js",c="SB-Mid-client-5JTwHNpWJkJrLtOn",d=document.createElement("script");return d.src=t,d.setAttribute("data-client-key",c),d.async=!0,document.body.appendChild(d),()=>{document.body.removeChild(d)}}},[]);const l=async()=>{r(!0),window.snap.pay(s.billing_references,{onSuccess:t=>{alert("Payment Success"),router.get(route("dashboard")),r(!1)},onPending:t=>{alert("Payment Pending"),router.get(route("dashboard")),r(!1)},onError:t=>{alert("Payment Error"),router.get(route("dashboard")),r(!1)},onClose:()=>{console.log("customer close the popup window without the finishing the payment"),router.get(route("dashboard")),r(!1)}})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"px-4 sm:px-0",children:[e.jsxs("h3",{className:"text-base/7 font-semibold text-gray-900",children:["Transaction #",s.billing_code]}),e.jsx("p",{className:"mt-1 max-w-2xl text-sm/6 text-gray-500",children:"Personal Transaction."})]}),e.jsxs("div",{className:"mt-6 border-t border-gray-100",children:[e.jsx("dl",{className:"divide-y divide-gray-100",children:e.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[e.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Transaction Code"}),e.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.billing_code})]})}),e.jsxs("dl",{className:"divide-y divide-gray-100",children:[e.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[e.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Billing Name"}),e.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:a.first_name+" "+a.last_name})]}),e.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[e.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Billing Address"}),e.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:a.address})]}),e.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[e.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Billing Email"}),e.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:a.email})]}),e.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[e.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Billing Phone"}),e.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:a.phone})]}),e.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[e.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Total"}),e.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:o(s.total)})]}),e.jsxs("div",{className:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[e.jsx("dt",{className:"text-sm/6 font-medium text-gray-900",children:"Status"}),e.jsx("dd",{className:"mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0",children:s.status=="PAID"?e.jsx("span",{class:"me-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300",children:s.status}):s.status=="UNPAID"?e.jsx("span",{class:"bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300",children:s.status}):e.jsx("span",{class:"bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300",children:s.status})})]})]})]}),e.jsx(x,{href:route("transaction"),className:"text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",children:"Back"}),i?e.jsxs("button",{disabled:!0,type:"button",class:"me-2 inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",children:[e.jsxs("svg",{"aria-hidden":"true",role:"status",class:"me-3 inline h-4 w-4 animate-spin text-gray-200 dark:text-gray-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"#1C64F2"})]}),"Loading..."]}):s.status=="UNPAID"&&e.jsx("button",{onClick:l,className:"text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",children:"Pay Now"})]})}u.layout=n=>e.jsx(g,{title:"Transaction Detail",children:n});export{u as default};
