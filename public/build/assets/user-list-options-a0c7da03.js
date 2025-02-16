import{r,j as o,W as Q,d as W}from"./app-8d8d7ad9.js";import{b as _,B as X}from"./button-622cff09.js";import{l as T,$ as Y,f as q,m as J,g as K,i as Z,j as ee,h as S,k as ae,n as te,b as N,c as oe,d as se,e as re,D as ce,a as h}from"./index-37ea5773.js";import{_ as n,$ as w,f as ne,c as l}from"./IconCheck-0a78c108.js";import{$ as le,b as de}from"./index-72103850.js";import{I as u}from"./icon-b983c8a4.js";import"./index-9b8f6c05.js";import"./Combination-6b5014a1.js";import"./floating-ui.react-dom-d7874801.js";import"./index-19e64ded.js";const ie=1,fe=1e6;let g=0;function pe(){return g=(g+1)%Number.MAX_VALUE,g.toString()}const D=new Map,y=e=>{if(D.has(e))return;const a=setTimeout(()=>{D.delete(e),m({type:"REMOVE_TOAST",toastId:e})},fe);D.set(e,a)},$e=(e,a)=>{switch(a.type){case"ADD_TOAST":return{...e,toasts:[a.toast,...e.toasts].slice(0,ie)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(t=>t.id===a.toast.id?{...t,...a.toast}:t)};case"DISMISS_TOAST":{const{toastId:t}=a;return t?y(t):e.toasts.forEach(s=>{y(s.id)}),{...e,toasts:e.toasts.map(s=>s.id===t||t===void 0?{...s,open:!1}:s)}}case"REMOVE_TOAST":return a.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(t=>t.id!==a.toastId)}}},ue=[];let A={toasts:[]};function m(e){A=$e(A,e),ue.forEach(a=>{a(A)})}function me({...e}){const a=pe(),t=c=>m({type:"UPDATE_TOAST",toast:{...c,id:a}}),s=()=>m({type:"DISMISS_TOAST",toastId:a});return m({type:"ADD_TOAST",toast:{...e,id:a,open:!0,onOpenChange:c=>{c||s()}}}),{id:a,dismiss:s,update:t}}const be="AlertDialog",[xe,Qe]=le(be,[T]),d=T(),ge=e=>{const{__scopeAlertDialog:a,...t}=e,s=d(a);return r.createElement(ae,n({},s,t,{modal:!0}))},De=r.forwardRef((e,a)=>{const{__scopeAlertDialog:t,...s}=e,c=d(t);return r.createElement(te,n({},c,s,{ref:a}))}),Ae=e=>{const{__scopeAlertDialog:a,...t}=e,s=d(a);return r.createElement(Y,n({},s,t))},_e=r.forwardRef((e,a)=>{const{__scopeAlertDialog:t,...s}=e,c=d(t);return r.createElement(q,n({},c,s,{ref:a}))}),E="AlertDialogContent",[he,ye]=xe(E),je=r.forwardRef((e,a)=>{const{__scopeAlertDialog:t,children:s,...c}=e,i=d(t),f=r.useRef(null),b=w(a,f),$=r.useRef(null);return r.createElement(J,{contentName:E,titleName:Te,docsSlug:"alert-dialog"},r.createElement(he,{scope:t,cancelRef:$},r.createElement(K,n({role:"alertdialog"},i,c,{ref:b,onOpenAutoFocus:de(c.onOpenAutoFocus,p=>{var x;p.preventDefault(),(x=$.current)===null||x===void 0||x.focus({preventScroll:!0})}),onPointerDownOutside:p=>p.preventDefault(),onInteractOutside:p=>p.preventDefault()}),r.createElement(ne,null,s),!1)))}),Te="AlertDialogTitle",Se=r.forwardRef((e,a)=>{const{__scopeAlertDialog:t,...s}=e,c=d(t);return r.createElement(Z,n({},c,s,{ref:a}))}),Ne=r.forwardRef((e,a)=>{const{__scopeAlertDialog:t,...s}=e,c=d(t);return r.createElement(ee,n({},c,s,{ref:a}))}),we=r.forwardRef((e,a)=>{const{__scopeAlertDialog:t,...s}=e,c=d(t);return r.createElement(S,n({},c,s,{ref:a}))}),Ee="AlertDialogCancel",ve=r.forwardRef((e,a)=>{const{__scopeAlertDialog:t,...s}=e,{cancelRef:c}=ye(Ee,t),i=d(t),f=w(a,c);return r.createElement(S,n({},i,s,{ref:f}))}),Re=ge,Oe=De,v=Ae,R=_e,O=je,I=we,C=ve,M=Se,P=Ne,Ie=Re,Ce=Oe,L=({className:e,...a})=>o.jsx(v,{className:l(e),...a});L.displayName=v.displayName;const k=r.forwardRef(({className:e,...a},t)=>o.jsx(R,{className:l("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...a,ref:t}));k.displayName=R.displayName;const U=r.forwardRef(({className:e,...a},t)=>o.jsxs(L,{children:[o.jsx(k,{}),o.jsx(O,{ref:t,className:l("fixed left-[50%] top-[50%] z-[66] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",e),...a})]}));U.displayName=O.displayName;const z=({className:e,...a})=>o.jsx("div",{className:l("flex flex-col space-y-2 text-center sm:text-left",e),...a});z.displayName="AlertDialogHeader";const B=({className:e,...a})=>o.jsx("div",{className:l("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...a});B.displayName="AlertDialogFooter";const F=r.forwardRef(({className:e,...a},t)=>o.jsx(M,{ref:t,className:l("text-lg font-semibold",e),...a}));F.displayName=M.displayName;const V=r.forwardRef(({className:e,...a},t)=>o.jsx(P,{ref:t,className:l("text-sm text-muted-foreground",e),...a}));V.displayName=P.displayName;const H=r.forwardRef(({className:e,...a},t)=>o.jsx(I,{ref:t,className:l(_(),e),...a}));H.displayName=I.displayName;const G=r.forwardRef(({className:e,...a},t)=>o.jsx(C,{ref:t,className:l(_({variant:"outline"}),"mt-2 sm:mt-0",e),...a}));G.displayName=C.displayName;function j({trigger_text:e,title:a="Are you absolutely sure?",description:t,cancel_text:s="Cancel",submit_text:c="Continue",action:i,buttonStyle:f="",children:b}){return o.jsxs(Ie,{children:[o.jsx(Ce,{asChild:!0,children:o.jsx(N,{onSelect:$=>$.preventDefault(),children:b||e})}),o.jsxs(U,{children:[o.jsxs(z,{children:[o.jsx(F,{children:a}),o.jsx(V,{children:t})]}),o.jsxs(B,{children:[o.jsx(G,{children:s}),o.jsx(H,{onClick:i,className:_({variant:f}),children:c})]})]})]})}function Me(){const e=new Date,a={year:"numeric",month:"long",day:"numeric",weekday:"long"},t={hour:"2-digit",minute:"2-digit",hour12:!1},s=e.toLocaleDateString("en-SG",a),c=e.toLocaleTimeString("id-ID",t);return`${s} at ${c}`}function We({user:e,details:a=!0}){const{delete:t}=Q();function s(c){t(route("users.destroy",c),{preserveScroll:!0,onSuccess:()=>{me({title:"User has been deleted succesfully",description:Me()})}})}return o.jsxs(oe,{children:[o.jsx(se,{asChild:!0,children:o.jsx(X,{className:"h-7",variant:"outline",size:"icon",children:o.jsx(u,{icon:"IconDots",className:"h-5 w-5 stroke-[1.2]"})})}),o.jsxs(re,{align:"end",className:"w-56",children:[o.jsx(ce,{children:"Actions"}),a?o.jsxs(o.Fragment,{children:[o.jsx(h,{}),o.jsx(N,{asChild:!0,children:o.jsxs(W,{href:route("users.show",e),children:[o.jsx(u,{icon:"IconId"}),"Details"]})})]}):null,o.jsx(h,{}),o.jsxs(j,{title:"Are you sure?",description:"This action will limit user activity.",submit_text:"Ban",action:()=>console.log(e.username),buttonStyle:"destructive",children:[o.jsx(u,{icon:"IconBan"}),"Ban"]}),o.jsxs(j,{description:"This action cannot be undone. This will permanently delete user account and remove data from our servers.",action:()=>s(e),submit_text:"Delete",buttonStyle:"destructive",children:[o.jsx(u,{icon:"IconTrash"}),"Delete Permanently"]})]})]})}export{We as UserListOptions};
