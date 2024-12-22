import{r,j as x,t as _t,b as Ge,$ as At,g as Dt}from"./app-d83e23a6.js";import{_ as A,c as D}from"./icon-582b59ec.js";import{$ as kt,d as Ot,e as Ye}from"./index-6e9120dd.js";import{$ as Se}from"./index-521fd295.js";import{C as Lt,M as It}from"./react-icons.esm-9c28c724.js";import{d as Tt,_ as Ft,u as Mt,e as W,f as jt,z as Ut,s as Bt,g as Kt,R as Wt,h as Vt,i as Ht}from"./Combination-80026dd2.js";import{k as Gt,$ as ze,f as Xe,g as qe,h as Yt,i as Ze,j as Je}from"./index-e1eb8508.js";const Qe="Avatar",[zt,Xr]=kt(Qe),[Xt,et]=zt(Qe),qt=r.forwardRef((e,t)=>{const{__scopeAvatar:n,...o}=e,[a,c]=r.useState("idle");return r.createElement(Xt,{scope:n,imageLoadingStatus:a,onImageLoadingStatusChange:c},r.createElement(Se.span,A({},o,{ref:t})))}),Zt="AvatarImage",Jt=r.forwardRef((e,t)=>{const{__scopeAvatar:n,src:o,onLoadingStatusChange:a=()=>{},...c}=e,l=et(Zt,n),s=tn(o),u=Ot(i=>{a(i),l.onImageLoadingStatusChange(i)});return Ye(()=>{s!=="idle"&&u(s)},[s,u]),s==="loaded"?r.createElement(Se.img,A({},c,{ref:t,src:o})):null}),Qt="AvatarFallback",en=r.forwardRef((e,t)=>{const{__scopeAvatar:n,delayMs:o,...a}=e,c=et(Qt,n),[l,s]=r.useState(o===void 0);return r.useEffect(()=>{if(o!==void 0){const u=window.setTimeout(()=>s(!0),o);return()=>window.clearTimeout(u)}},[o]),l&&c.imageLoadingStatus!=="loaded"?r.createElement(Se.span,A({},a,{ref:t})):null});function tn(e){const[t,n]=r.useState("idle");return Ye(()=>{if(!e){n("error");return}let o=!0;const a=new window.Image,c=l=>()=>{o&&n(l)};return n("loading"),a.onload=c("loaded"),a.onerror=c("error"),a.src=e,()=>{o=!1}},[e]),t}const tt=qt,nt=Jt,rt=en,nn=r.forwardRef(({className:e,...t},n)=>x.jsx(tt,{ref:n,className:D("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",e),...t}));nn.displayName=tt.displayName;const rn=r.forwardRef(({className:e,...t},n)=>x.jsx(nt,{ref:n,className:D("aspect-square h-full w-full",e),...t}));rn.displayName=nt.displayName;const on=r.forwardRef(({className:e,...t},n)=>x.jsx(rt,{ref:n,className:D("flex h-full w-full items-center justify-center rounded-full bg-muted",e),...t}));on.displayName=rt.displayName;function H(e,t,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}function an(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function ot(...e){return t=>e.forEach(n=>an(n,t))}function J(...e){return r.useCallback(ot(...e),e)}function cn(e,t=[]){let n=[];function o(c,l){const s=r.createContext(l),u=n.length;n=[...n,l];function i(v){const{scope:E,children:g,...P}=v,f=(E==null?void 0:E[e][u])||s,b=r.useMemo(()=>P,Object.values(P));return r.createElement(f.Provider,{value:b},g)}function m(v,E){const g=(E==null?void 0:E[e][u])||s,P=r.useContext(g);if(P)return P;if(l!==void 0)return l;throw new Error(`\`${v}\` must be used within \`${c}\``)}return i.displayName=c+"Provider",[i,m]}const a=()=>{const c=n.map(l=>r.createContext(l));return function(s){const u=(s==null?void 0:s[e])||c;return r.useMemo(()=>({[`__scope${e}`]:{...s,[e]:u}}),[s,u])}};return a.scopeName=e,[o,sn(a,...t)]}function sn(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(c){const l=o.reduce((s,{useScope:u,scopeName:i})=>{const v=u(c)[`__scope${i}`];return{...s,...v}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return n.scopeName=t.scopeName,n}const be=globalThis!=null&&globalThis.document?r.useLayoutEffect:()=>{},ln=_t["useId".toString()]||(()=>{});let un=0;function ue(e){const[t,n]=r.useState(ln());return be(()=>{e||n(o=>o??String(un++))},[e]),e||(t?`radix-${t}`:"")}function j(e){const t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}function dn({prop:e,defaultProp:t,onChange:n=()=>{}}){const[o,a]=fn({defaultProp:t,onChange:n}),c=e!==void 0,l=c?e:o,s=j(n),u=r.useCallback(i=>{if(c){const v=typeof i=="function"?i(e):i;v!==e&&s(v)}else a(i)},[c,e,a,s]);return[l,u]}function fn({defaultProp:e,onChange:t}){const n=r.useState(e),[o]=n,a=r.useRef(o),c=j(t);return r.useEffect(()=>{a.current!==o&&(c(o),a.current=o)},[o,a,c]),n}const Re=r.forwardRef((e,t)=>{const{children:n,...o}=e,a=r.Children.toArray(n),c=a.find(vn);if(c){const l=c.props.children,s=a.map(u=>u===c?r.Children.count(l)>1?r.Children.only(null):r.isValidElement(l)?l.props.children:null:u);return r.createElement(ge,A({},o,{ref:t}),r.isValidElement(l)?r.cloneElement(l,void 0,s):null)}return r.createElement(ge,A({},o,{ref:t}),n)});Re.displayName="Slot";const ge=r.forwardRef((e,t)=>{const{children:n,...o}=e;return r.isValidElement(n)?r.cloneElement(n,{...pn(o,n.props),ref:ot(t,n.ref)}):r.Children.count(n)>1?r.Children.only(null):null});ge.displayName="SlotClone";const mn=({children:e})=>r.createElement(r.Fragment,null,e);function vn(e){return r.isValidElement(e)&&e.type===mn}function pn(e,t){const n={...t};for(const o in t){const a=e[o],c=t[o];/^on[A-Z]/.test(o)?n[o]=(...s)=>{c==null||c(...s),a==null||a(...s)}:o==="style"?n[o]={...a,...c}:o==="className"&&(n[o]=[a,c].filter(Boolean).join(" "))}return{...e,...n}}const hn=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],ae=hn.reduce((e,t)=>{const n=r.forwardRef((o,a)=>{const{asChild:c,...l}=o,s=c?Re:t;return r.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.createElement(s,A({},l,{ref:a}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function $n(e,t){e&&Ge.flushSync(()=>e.dispatchEvent(t))}function bn(e){const t=j(e);r.useEffect(()=>{const n=o=>{o.key==="Escape"&&t(o)};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[t])}const Ee="dismissableLayer.update",gn="dismissableLayer.pointerDownOutside",En="dismissableLayer.focusOutside";let Oe;const yn=r.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Cn=r.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:o,onPointerDownOutside:a,onFocusOutside:c,onInteractOutside:l,onDismiss:s,...u}=e,i=r.useContext(yn),[m,v]=r.useState(null),[,E]=r.useState({}),g=J(t,S=>v(S)),P=Array.from(i.layers),[f]=[...i.layersWithOutsidePointerEventsDisabled].slice(-1),b=P.indexOf(f),h=m?P.indexOf(m):-1,R=i.layersWithOutsidePointerEventsDisabled.size>0,w=h>=b,y=xn(S=>{const k=S.target,I=[...i.branches].some(T=>T.contains(k));!w||I||(a==null||a(S),l==null||l(S),S.defaultPrevented||s==null||s())}),N=wn(S=>{const k=S.target;[...i.branches].some(T=>T.contains(k))||(c==null||c(S),l==null||l(S),S.defaultPrevented||s==null||s())});return bn(S=>{h===i.layers.size-1&&(o==null||o(S),!S.defaultPrevented&&s&&(S.preventDefault(),s()))}),r.useEffect(()=>{if(m)return n&&(i.layersWithOutsidePointerEventsDisabled.size===0&&(Oe=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),i.layersWithOutsidePointerEventsDisabled.add(m)),i.layers.add(m),Le(),()=>{n&&i.layersWithOutsidePointerEventsDisabled.size===1&&(document.body.style.pointerEvents=Oe)}},[m,n,i]),r.useEffect(()=>()=>{m&&(i.layers.delete(m),i.layersWithOutsidePointerEventsDisabled.delete(m),Le())},[m,i]),r.useEffect(()=>{const S=()=>E({});return document.addEventListener(Ee,S),()=>document.removeEventListener(Ee,S)},[]),r.createElement(ae.div,A({},u,{ref:g,style:{pointerEvents:R?w?"auto":"none":void 0,...e.style},onFocusCapture:H(e.onFocusCapture,N.onFocusCapture),onBlurCapture:H(e.onBlurCapture,N.onBlurCapture),onPointerDownCapture:H(e.onPointerDownCapture,y.onPointerDownCapture)}))});function xn(e){const t=j(e),n=r.useRef(!1),o=r.useRef(()=>{});return r.useEffect(()=>{const a=l=>{if(l.target&&!n.current){let u=function(){at(gn,t,s,{discrete:!0})};const s={originalEvent:l};l.pointerType==="touch"?(document.removeEventListener("click",o.current),o.current=u,document.addEventListener("click",o.current,{once:!0})):u()}n.current=!1},c=window.setTimeout(()=>{document.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(c),document.removeEventListener("pointerdown",a),document.removeEventListener("click",o.current)}},[t]),{onPointerDownCapture:()=>n.current=!0}}function wn(e){const t=j(e),n=r.useRef(!1);return r.useEffect(()=>{const o=a=>{a.target&&!n.current&&at(En,t,{originalEvent:a},{discrete:!1})};return document.addEventListener("focusin",o),()=>document.removeEventListener("focusin",o)},[t]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}function Le(){const e=new CustomEvent(Ee);document.dispatchEvent(e)}function at(e,t,n,{discrete:o}){const a=n.originalEvent.target,c=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&a.addEventListener(e,t,{once:!0}),o?$n(a,c):a.dispatchEvent(c)}const de="focusScope.autoFocusOnMount",fe="focusScope.autoFocusOnUnmount",Ie={bubbles:!1,cancelable:!0},Sn=r.forwardRef((e,t)=>{const{loop:n=!1,trapped:o=!1,onMountAutoFocus:a,onUnmountAutoFocus:c,...l}=e,[s,u]=r.useState(null),i=j(a),m=j(c),v=r.useRef(null),E=J(t,f=>u(f)),g=r.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;r.useEffect(()=>{if(o){let f=function(h){if(g.paused||!s)return;const R=h.target;s.contains(R)?v.current=R:M(v.current,{select:!0})},b=function(h){g.paused||!s||s.contains(h.relatedTarget)||M(v.current,{select:!0})};return document.addEventListener("focusin",f),document.addEventListener("focusout",b),()=>{document.removeEventListener("focusin",f),document.removeEventListener("focusout",b)}}},[o,s,g.paused]),r.useEffect(()=>{if(s){Fe.add(g);const f=document.activeElement;if(!s.contains(f)){const h=new CustomEvent(de,Ie);s.addEventListener(de,i),s.dispatchEvent(h),h.defaultPrevented||(Rn(Dn(ct(s)),{select:!0}),document.activeElement===f&&M(s))}return()=>{s.removeEventListener(de,i),setTimeout(()=>{const h=new CustomEvent(fe,Ie);s.addEventListener(fe,m),s.dispatchEvent(h),h.defaultPrevented||M(f??document.body,{select:!0}),s.removeEventListener(fe,m),Fe.remove(g)},0)}}},[s,i,m,g]);const P=r.useCallback(f=>{if(!n&&!o||g.paused)return;const b=f.key==="Tab"&&!f.altKey&&!f.ctrlKey&&!f.metaKey,h=document.activeElement;if(b&&h){const R=f.currentTarget,[w,y]=Nn(R);w&&y?!f.shiftKey&&h===y?(f.preventDefault(),n&&M(w,{select:!0})):f.shiftKey&&h===w&&(f.preventDefault(),n&&M(y,{select:!0})):h===R&&f.preventDefault()}},[n,o,g.paused]);return r.createElement(ae.div,A({tabIndex:-1},l,{ref:E,onKeyDown:P}))});function Rn(e,{select:t=!1}={}){const n=document.activeElement;for(const o of e)if(M(o,{select:t}),document.activeElement!==n)return}function Nn(e){const t=ct(e),n=Te(t,e),o=Te(t.reverse(),e);return[n,o]}function ct(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const a=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||a?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Te(e,t){for(const n of e)if(!Pn(n,{upTo:t}))return n}function Pn(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function _n(e){return e instanceof HTMLInputElement&&"select"in e}function M(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&_n(e)&&t&&e.select()}}const Fe=An();function An(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Me(e,t),e.unshift(t)},remove(t){var n;e=Me(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function Me(e,t){const n=[...e],o=n.indexOf(t);return o!==-1&&n.splice(o,1),n}function Dn(e){return e.filter(t=>t.tagName!=="A")}const kn=r.forwardRef((e,t)=>{var n;const{container:o=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...a}=e;return o?At.createPortal(r.createElement(ae.div,A({},a,{ref:t})),o):null});function On(e,t){return r.useReducer((n,o)=>{const a=t[n][o];return a??n},e)}const ce=e=>{const{present:t,children:n}=e,o=Ln(t),a=typeof n=="function"?n({present:o.isPresent}):r.Children.only(n),c=J(o.ref,a.ref);return typeof n=="function"||o.isPresent?r.cloneElement(a,{ref:c}):null};ce.displayName="Presence";function Ln(e){const[t,n]=r.useState(),o=r.useRef({}),a=r.useRef(e),c=r.useRef("none"),l=e?"mounted":"unmounted",[s,u]=On(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.useEffect(()=>{const i=ne(o.current);c.current=s==="mounted"?i:"none"},[s]),be(()=>{const i=o.current,m=a.current;if(m!==e){const E=c.current,g=ne(i);e?u("MOUNT"):g==="none"||(i==null?void 0:i.display)==="none"?u("UNMOUNT"):u(m&&E!==g?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,u]),be(()=>{if(t){const i=v=>{const g=ne(o.current).includes(v.animationName);v.target===t&&g&&Ge.flushSync(()=>u("ANIMATION_END"))},m=v=>{v.target===t&&(c.current=ne(o.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",i),t.addEventListener("animationend",i),()=>{t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",i),t.removeEventListener("animationend",i)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:r.useCallback(i=>{i&&(o.current=getComputedStyle(i)),n(i)},[])}}function ne(e){return(e==null?void 0:e.animationName)||"none"}let me=0;function In(){r.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:je()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:je()),me++,()=>{me===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(o=>o.remove()),me--}},[])}function je(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var st=Tt(),ve=function(){},se=r.forwardRef(function(e,t){var n=r.useRef(null),o=r.useState({onScrollCapture:ve,onWheelCapture:ve,onTouchMoveCapture:ve}),a=o[0],c=o[1],l=e.forwardProps,s=e.children,u=e.className,i=e.removeScrollBar,m=e.enabled,v=e.shards,E=e.sideCar,g=e.noIsolation,P=e.inert,f=e.allowPinchZoom,b=e.as,h=b===void 0?"div":b,R=Ft(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),w=E,y=Mt([n,t]),N=W(W({},R),a);return r.createElement(r.Fragment,null,m&&r.createElement(w,{sideCar:st,removeScrollBar:i,shards:v,noIsolation:g,inert:P,setCallbacks:c,allowPinchZoom:!!f,lockRef:n}),l?r.cloneElement(r.Children.only(s),W(W({},N),{ref:y})):r.createElement(h,W({},N,{className:u,ref:y}),s))});se.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};se.classNames={fullWidth:jt,zeroRight:Ut};var ye=!1;if(typeof window<"u")try{var re=Object.defineProperty({},"passive",{get:function(){return ye=!0,!0}});window.addEventListener("test",re,re),window.removeEventListener("test",re,re)}catch{ye=!1}var B=ye?{passive:!1}:!1,Tn=function(e){var t=window.getComputedStyle(e);return t.overflowY!=="hidden"&&!(t.overflowY===t.overflowX&&t.overflowY==="visible")},Fn=function(e){var t=window.getComputedStyle(e);return t.overflowX!=="hidden"&&!(t.overflowY===t.overflowX&&t.overflowX==="visible")},Ue=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var o=lt(e,n);if(o){var a=it(e,n),c=a[1],l=a[2];if(c>l)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},Mn=function(e){var t=e.scrollTop,n=e.scrollHeight,o=e.clientHeight;return[t,n,o]},jn=function(e){var t=e.scrollLeft,n=e.scrollWidth,o=e.clientWidth;return[t,n,o]},lt=function(e,t){return e==="v"?Tn(t):Fn(t)},it=function(e,t){return e==="v"?Mn(t):jn(t)},Un=function(e,t){return e==="h"&&t==="rtl"?-1:1},Bn=function(e,t,n,o,a){var c=Un(e,window.getComputedStyle(t).direction),l=c*o,s=n.target,u=t.contains(s),i=!1,m=l>0,v=0,E=0;do{var g=it(e,s),P=g[0],f=g[1],b=g[2],h=f-b-c*P;(P||h)&&lt(e,s)&&(v+=h,E+=P),s=s.parentNode}while(!u&&s!==document.body||u&&(t.contains(s)||t===s));return(m&&(a&&v===0||!a&&l>v)||!m&&(a&&E===0||!a&&-l>E))&&(i=!0),i},oe=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Be=function(e){return[e.deltaX,e.deltaY]},Ke=function(e){return e&&"current"in e?e.current:e},Kn=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Wn=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Vn=0,K=[];function Hn(e){var t=r.useRef([]),n=r.useRef([0,0]),o=r.useRef(),a=r.useState(Vn++)[0],c=r.useState(function(){return Bt()})[0],l=r.useRef(e);r.useEffect(function(){l.current=e},[e]),r.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var f=Kt([e.lockRef.current],(e.shards||[]).map(Ke),!0).filter(Boolean);return f.forEach(function(b){return b.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),f.forEach(function(b){return b.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var s=r.useCallback(function(f,b){if("touches"in f&&f.touches.length===2)return!l.current.allowPinchZoom;var h=oe(f),R=n.current,w="deltaX"in f?f.deltaX:R[0]-h[0],y="deltaY"in f?f.deltaY:R[1]-h[1],N,S=f.target,k=Math.abs(w)>Math.abs(y)?"h":"v";if("touches"in f&&k==="h"&&S.type==="range")return!1;var I=Ue(k,S);if(!I)return!0;if(I?N=k:(N=k==="v"?"h":"v",I=Ue(k,S)),!I)return!1;if(!o.current&&"changedTouches"in f&&(w||y)&&(o.current=N),!N)return!0;var T=o.current||N;return Bn(T,b,f,T==="h"?w:y,!0)},[]),u=r.useCallback(function(f){var b=f;if(!(!K.length||K[K.length-1]!==c)){var h="deltaY"in b?Be(b):oe(b),R=t.current.filter(function(N){return N.name===b.type&&N.target===b.target&&Kn(N.delta,h)})[0];if(R&&R.should){b.preventDefault();return}if(!R){var w=(l.current.shards||[]).map(Ke).filter(Boolean).filter(function(N){return N.contains(b.target)}),y=w.length>0?s(b,w[0]):!l.current.noIsolation;y&&b.preventDefault()}}},[]),i=r.useCallback(function(f,b,h,R){var w={name:f,delta:b,target:h,should:R};t.current.push(w),setTimeout(function(){t.current=t.current.filter(function(y){return y!==w})},1)},[]),m=r.useCallback(function(f){n.current=oe(f),o.current=void 0},[]),v=r.useCallback(function(f){i(f.type,Be(f),f.target,s(f,e.lockRef.current))},[]),E=r.useCallback(function(f){i(f.type,oe(f),f.target,s(f,e.lockRef.current))},[]);r.useEffect(function(){return K.push(c),e.setCallbacks({onScrollCapture:v,onWheelCapture:v,onTouchMoveCapture:E}),document.addEventListener("wheel",u,B),document.addEventListener("touchmove",u,B),document.addEventListener("touchstart",m,B),function(){K=K.filter(function(f){return f!==c}),document.removeEventListener("wheel",u,B),document.removeEventListener("touchmove",u,B),document.removeEventListener("touchstart",m,B)}},[]);var g=e.removeScrollBar,P=e.inert;return r.createElement(r.Fragment,null,P?r.createElement(c,{styles:Wn(a)}):null,g?r.createElement(Wt,{gapMode:"margin"}):null)}const Gn=Vt(st,Hn);var ut=r.forwardRef(function(e,t){return r.createElement(se,W({},e,{ref:t,sideCar:Gn}))});ut.classNames=se.classNames;const Yn=ut,dt="Dialog",[ft,qr]=cn(dt),[zn,U]=ft(dt),Xn=e=>{const{__scopeDialog:t,children:n,open:o,defaultOpen:a,onOpenChange:c,modal:l=!0}=e,s=r.useRef(null),u=r.useRef(null),[i=!1,m]=dn({prop:o,defaultProp:a,onChange:c});return r.createElement(zn,{scope:t,triggerRef:s,contentRef:u,contentId:ue(),titleId:ue(),descriptionId:ue(),open:i,onOpenChange:m,onOpenToggle:r.useCallback(()=>m(v=>!v),[m]),modal:l},n)},mt="DialogPortal",[qn,vt]=ft(mt,{forceMount:void 0}),Zn=e=>{const{__scopeDialog:t,forceMount:n,children:o,container:a}=e,c=U(mt,t);return r.createElement(qn,{scope:t,forceMount:n},r.Children.map(o,l=>r.createElement(ce,{present:n||c.open},r.createElement(kn,{asChild:!0,container:a},l))))},Ce="DialogOverlay",Jn=r.forwardRef((e,t)=>{const n=vt(Ce,e.__scopeDialog),{forceMount:o=n.forceMount,...a}=e,c=U(Ce,e.__scopeDialog);return c.modal?r.createElement(ce,{present:o||c.open},r.createElement(Qn,A({},a,{ref:t}))):null}),Qn=r.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,a=U(Ce,n);return r.createElement(Yn,{as:Re,allowPinchZoom:!0,shards:[a.contentRef]},r.createElement(ae.div,A({"data-state":ht(a.open)},o,{ref:t,style:{pointerEvents:"auto",...o.style}})))}),Z="DialogContent",er=r.forwardRef((e,t)=>{const n=vt(Z,e.__scopeDialog),{forceMount:o=n.forceMount,...a}=e,c=U(Z,e.__scopeDialog);return r.createElement(ce,{present:o||c.open},c.modal?r.createElement(tr,A({},a,{ref:t})):r.createElement(nr,A({},a,{ref:t})))}),tr=r.forwardRef((e,t)=>{const n=U(Z,e.__scopeDialog),o=r.useRef(null),a=J(t,n.contentRef,o);return r.useEffect(()=>{const c=o.current;if(c)return Ht(c)},[]),r.createElement(pt,A({},e,{ref:a,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:H(e.onCloseAutoFocus,c=>{var l;c.preventDefault(),(l=n.triggerRef.current)===null||l===void 0||l.focus()}),onPointerDownOutside:H(e.onPointerDownOutside,c=>{const l=c.detail.originalEvent,s=l.button===0&&l.ctrlKey===!0;(l.button===2||s)&&c.preventDefault()}),onFocusOutside:H(e.onFocusOutside,c=>c.preventDefault())}))}),nr=r.forwardRef((e,t)=>{const n=U(Z,e.__scopeDialog),o=r.useRef(!1);return r.createElement(pt,A({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var c;if((c=e.onCloseAutoFocus)===null||c===void 0||c.call(e,a),!a.defaultPrevented){var l;o.current||(l=n.triggerRef.current)===null||l===void 0||l.focus(),a.preventDefault()}o.current=!1},onInteractOutside:a=>{var c,l;(c=e.onInteractOutside)===null||c===void 0||c.call(e,a),a.defaultPrevented||(o.current=!0);const s=a.target;((l=n.triggerRef.current)===null||l===void 0?void 0:l.contains(s))&&a.preventDefault()}}))}),pt=r.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:o,onOpenAutoFocus:a,onCloseAutoFocus:c,...l}=e,s=U(Z,n),u=r.useRef(null),i=J(t,u);return In(),r.createElement(r.Fragment,null,r.createElement(Sn,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:a,onUnmountAutoFocus:c},r.createElement(Cn,A({role:"dialog",id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":ht(s.open)},l,{ref:i,onDismiss:()=>s.onOpenChange(!1)}))),!1)});function ht(e){return e?"open":"closed"}const rr=Xn,or=Zn,ar=Jn,cr=er;var We=1,sr=.9,lr=.3,pe=.1,ir=0,he=.999,ur=.9999,dr=.99,Ve=/[\\\/\-_+.# \t"@\[\(\{&]/,fr=/[\\\/\-_+.# \t"@\[\(\{&]/g;function xe(e,t,n,o,a,c){if(c===t.length)return a===e.length?We:dr;for(var l=o.charAt(c),s=n.indexOf(l,a),u=0,i,m,v;s>=0;)i=xe(e,t,n,o,s+1,c+1),i>u&&(s===a?i*=We:Ve.test(e.charAt(s-1))?(i*=sr,v=e.slice(a,s-1).match(fr),v&&a>0&&(i*=Math.pow(he,v.length))):Ve.test(e.slice(a,s-1))?(i*=ir,a>0&&(i*=Math.pow(he,s-a))):(i*=lr,a>0&&(i*=Math.pow(he,s-a))),e.charAt(s)!==t.charAt(c)&&(i*=ur)),i<pe&&n.charAt(s-1)===o.charAt(c+1)&&n.charAt(s-1)!==o.charAt(c)&&(m=xe(e,t,n,o,s+1,c+2),m*pe>i&&(i=m*pe)),i>u&&(u=i),s=n.indexOf(l,s+1);return u}function mr(e,t){return xe(e,t,e.toLowerCase(),t.toLowerCase(),0,0)}var vr=mr;const pr=Dt(vr);var hr='[cmdk-list-sizer=""]',q='[cmdk-group=""]',$e='[cmdk-group-items=""]',$r='[cmdk-group-heading=""]',$t='[cmdk-item=""]',He=`${$t}:not([aria-disabled="true"])`,we="cmdk-item-select",F="data-value",br=(e,t)=>pr(e,t),bt=r.createContext(void 0),Q=()=>r.useContext(bt),gt=r.createContext(void 0),Ne=()=>r.useContext(gt),Et=r.createContext(void 0),yt=r.forwardRef((e,t)=>{let n=r.useRef(null),o=V(()=>({search:"",value:"",filtered:{count:0,items:new Map,groups:new Set}})),a=V(()=>new Set),c=V(()=>new Map),l=V(()=>new Map),s=V(()=>new Set),u=Ct(e),{label:i,children:m,value:v,onValueChange:E,filter:g,shouldFilter:P,...f}=e,b=r.useId(),h=r.useId(),R=r.useId(),w=_r();Y(()=>{if(v!==void 0){let d=v.trim().toLowerCase();o.current.value=d,w(6,Pe),y.emit()}},[v]);let y=r.useMemo(()=>({subscribe:d=>(s.current.add(d),()=>s.current.delete(d)),snapshot:()=>o.current,setState:(d,$,C)=>{var p,_,L;if(!Object.is(o.current[d],$)){if(o.current[d]=$,d==="search")T(),k(),w(1,I);else if(d==="value")if(((p=u.current)==null?void 0:p.value)!==void 0){(L=(_=u.current).onValueChange)==null||L.call(_,$);return}else C||w(5,Pe);y.emit()}},emit:()=>{s.current.forEach(d=>d())}}),[]),N=r.useMemo(()=>({value:(d,$)=>{$!==l.current.get(d)&&(l.current.set(d,$),o.current.filtered.items.set(d,S($)),w(2,()=>{k(),y.emit()}))},item:(d,$)=>(a.current.add(d),$&&(c.current.has($)?c.current.get($).add(d):c.current.set($,new Set([d]))),w(3,()=>{T(),k(),o.current.value||I(),y.emit()}),()=>{l.current.delete(d),a.current.delete(d),o.current.filtered.items.delete(d),w(4,()=>{T(),I(),y.emit()})}),group:d=>(c.current.has(d)||c.current.set(d,new Set),()=>{l.current.delete(d),c.current.delete(d)}),filter:()=>u.current.shouldFilter,label:i||e["aria-label"],listId:b,inputId:R,labelId:h}),[]);function S(d){var $;let C=(($=u.current)==null?void 0:$.filter)??br;return d?C(d,o.current.search):0}function k(){if(!n.current||!o.current.search||u.current.shouldFilter===!1)return;let d=o.current.filtered.items,$=[];o.current.filtered.groups.forEach(p=>{let _=c.current.get(p),L=0;_.forEach(X=>{let Pt=d.get(X);L=Math.max(Pt,L)}),$.push([p,L])});let C=n.current.querySelector(hr);z().sort((p,_)=>{let L=p.getAttribute(F),X=_.getAttribute(F);return(d.get(X)??0)-(d.get(L)??0)}).forEach(p=>{let _=p.closest($e);_?_.appendChild(p.parentElement===_?p:p.closest(`${$e} > *`)):C.appendChild(p.parentElement===C?p:p.closest(`${$e} > *`))}),$.sort((p,_)=>_[1]-p[1]).forEach(p=>{let _=n.current.querySelector(`${q}[${F}="${p[0]}"]`);_==null||_.parentElement.appendChild(_)})}function I(){let d=z().find(C=>!C.ariaDisabled),$=d==null?void 0:d.getAttribute(F);y.setState("value",$||void 0)}function T(){if(!o.current.search||u.current.shouldFilter===!1){o.current.filtered.count=a.current.size;return}o.current.filtered.groups=new Set;let d=0;for(let $ of a.current){let C=l.current.get($),p=S(C);o.current.filtered.items.set($,p),p>0&&d++}for(let[$,C]of c.current)for(let p of C)if(o.current.filtered.items.get(p)>0){o.current.filtered.groups.add($);break}o.current.filtered.count=d}function Pe(){var d,$,C;let p=te();p&&(((d=p.parentElement)==null?void 0:d.firstChild)===p&&((C=($=p.closest(q))==null?void 0:$.querySelector($r))==null||C.scrollIntoView({block:"nearest"})),p.scrollIntoView({block:"nearest"}))}function te(){return n.current.querySelector(`${$t}[aria-selected="true"]`)}function z(){return Array.from(n.current.querySelectorAll(He))}function le(d){let $=z()[d];$&&y.setState("value",$.getAttribute(F))}function ie(d){var $;let C=te(),p=z(),_=p.findIndex(X=>X===C),L=p[_+d];($=u.current)!=null&&$.loop&&(L=_+d<0?p[p.length-1]:_+d===p.length?p[0]:p[_+d]),L&&y.setState("value",L.getAttribute(F))}function _e(d){let $=te(),C=$==null?void 0:$.closest(q),p;for(;C&&!p;)C=d>0?Nr(C,q):Pr(C,q),p=C==null?void 0:C.querySelector(He);p?y.setState("value",p.getAttribute(F)):ie(d)}let Ae=()=>le(z().length-1),De=d=>{d.preventDefault(),d.metaKey?Ae():d.altKey?_e(1):ie(1)},ke=d=>{d.preventDefault(),d.metaKey?le(0):d.altKey?_e(-1):ie(-1)};return r.createElement("div",{ref:ee([n,t]),...f,"cmdk-root":"",onKeyDown:d=>{var $;if(($=f.onKeyDown)==null||$.call(f,d),!d.defaultPrevented)switch(d.key){case"n":case"j":{d.ctrlKey&&De(d);break}case"ArrowDown":{De(d);break}case"p":case"k":{d.ctrlKey&&ke(d);break}case"ArrowUp":{ke(d);break}case"Home":{d.preventDefault(),le(0);break}case"End":{d.preventDefault(),Ae();break}case"Enter":{d.preventDefault();let C=te();if(C){let p=new Event(we);C.dispatchEvent(p)}}}}},r.createElement("label",{"cmdk-label":"",htmlFor:N.inputId,id:N.labelId,style:Ar},i),r.createElement(gt.Provider,{value:y},r.createElement(bt.Provider,{value:N},m)))}),gr=r.forwardRef((e,t)=>{let n=r.useId(),o=r.useRef(null),a=r.useContext(Et),c=Q(),l=Ct(e);Y(()=>c.item(n,a),[]);let s=xt(n,o,[e.value,e.children,o]),u=Ne(),i=G(h=>h.value&&h.value===s.current),m=G(h=>c.filter()===!1?!0:h.search?h.filtered.items.get(n)>0:!0);r.useEffect(()=>{let h=o.current;if(!(!h||e.disabled))return h.addEventListener(we,v),()=>h.removeEventListener(we,v)},[m,e.onSelect,e.disabled]);function v(){var h,R;(R=(h=l.current).onSelect)==null||R.call(h,s.current)}function E(){u.setState("value",s.current,!0)}if(!m)return null;let{disabled:g,value:P,onSelect:f,...b}=e;return r.createElement("div",{ref:ee([o,t]),...b,"cmdk-item":"",role:"option","aria-disabled":g||void 0,"aria-selected":i||void 0,"data-selected":i||void 0,onPointerMove:g?void 0:E,onClick:g?void 0:v},e.children)}),Er=r.forwardRef((e,t)=>{let{heading:n,children:o,...a}=e,c=r.useId(),l=r.useRef(null),s=r.useRef(null),u=r.useId(),i=Q(),m=G(E=>i.filter()===!1?!0:E.search?E.filtered.groups.has(c):!0);Y(()=>i.group(c),[]),xt(c,l,[e.value,e.heading,s]);let v=r.createElement(Et.Provider,{value:c},o);return r.createElement("div",{ref:ee([l,t]),...a,"cmdk-group":"",role:"presentation",hidden:m?void 0:!0},n&&r.createElement("div",{ref:s,"cmdk-group-heading":"","aria-hidden":!0,id:u},n),r.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":n?u:void 0},v))}),yr=r.forwardRef((e,t)=>{let{alwaysRender:n,...o}=e,a=r.useRef(null),c=G(l=>!l.search);return!n&&!c?null:r.createElement("div",{ref:ee([a,t]),...o,"cmdk-separator":"",role:"separator"})}),Cr=r.forwardRef((e,t)=>{let{onValueChange:n,...o}=e,a=e.value!=null,c=Ne(),l=G(u=>u.search),s=Q();return r.useEffect(()=>{e.value!=null&&c.setState("search",e.value)},[e.value]),r.createElement("input",{ref:t,...o,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":s.listId,"aria-labelledby":s.labelId,id:s.inputId,type:"text",value:a?e.value:l,onChange:u=>{a||c.setState("search",u.target.value),n==null||n(u.target.value)}})}),xr=r.forwardRef((e,t)=>{let{children:n,...o}=e,a=r.useRef(null),c=r.useRef(null),l=Q();return r.useEffect(()=>{if(c.current&&a.current){let s=c.current,u=a.current,i,m=new ResizeObserver(()=>{i=requestAnimationFrame(()=>{let v=s.getBoundingClientRect().height;u.style.setProperty("--cmdk-list-height",v.toFixed(1)+"px")})});return m.observe(s),()=>{cancelAnimationFrame(i),m.unobserve(s)}}},[]),r.createElement("div",{ref:ee([a,t]),...o,"cmdk-list":"",role:"listbox","aria-label":"Suggestions",id:l.listId,"aria-labelledby":l.inputId},r.createElement("div",{ref:c,"cmdk-list-sizer":""},n))}),wr=r.forwardRef((e,t)=>{let{open:n,onOpenChange:o,container:a,...c}=e;return r.createElement(rr,{open:n,onOpenChange:o},r.createElement(or,{container:a},r.createElement(ar,{"cmdk-overlay":""}),r.createElement(cr,{"aria-label":e.label,"cmdk-dialog":""},r.createElement(yt,{ref:t,...c}))))}),Sr=r.forwardRef((e,t)=>{let n=r.useRef(!0),o=G(a=>a.filtered.count===0);return r.useEffect(()=>{n.current=!1},[]),n.current||!o?null:r.createElement("div",{ref:t,...e,"cmdk-empty":"",role:"presentation"})}),Rr=r.forwardRef((e,t)=>{let{progress:n,children:o,...a}=e;return r.createElement("div",{ref:t,...a,"cmdk-loading":"",role:"progressbar","aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Loading..."},r.createElement("div",{"aria-hidden":!0},o))}),O=Object.assign(yt,{List:xr,Item:gr,Input:Cr,Group:Er,Separator:yr,Dialog:wr,Empty:Sr,Loading:Rr});function Nr(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return n;n=n.nextElementSibling}}function Pr(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return n;n=n.previousElementSibling}}function Ct(e){let t=r.useRef(e);return Y(()=>{t.current=e}),t}var Y=typeof window>"u"?r.useEffect:r.useLayoutEffect;function V(e){let t=r.useRef();return t.current===void 0&&(t.current=e()),t}function ee(e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}function G(e){let t=Ne(),n=()=>e(t.snapshot());return r.useSyncExternalStore(t.subscribe,n,n)}function xt(e,t,n){let o=r.useRef(),a=Q();return Y(()=>{var c;let l=(()=>{var s;for(let u of n){if(typeof u=="string")return u.trim().toLowerCase();if(typeof u=="object"&&"current"in u&&u.current)return(s=u.current.textContent)==null?void 0:s.trim().toLowerCase()}})();a.value(e,l),(c=t.current)==null||c.setAttribute(F,l),o.current=l}),o}var _r=()=>{let[e,t]=r.useState(),n=V(()=>new Map);return Y(()=>{n.current.forEach(o=>o()),n.current=new Map},[e]),(o,a)=>{n.current.set(o,a),t({})}},Ar={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};const Dr=Gt,wt=({className:e,...t})=>x.jsx(ze,{className:D(e),...t});wt.displayName=ze.displayName;const St=r.forwardRef(({className:e,...t},n)=>x.jsx(Xe,{ref:n,className:D("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));St.displayName=Xe.displayName;const Rt=r.forwardRef(({className:e,children:t,...n},o)=>x.jsxs(wt,{children:[x.jsx(St,{}),x.jsxs(qe,{ref:o,className:D("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",e),...n,children:[t,x.jsxs(Yt,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[x.jsx(Lt,{className:"h-4 w-4"}),x.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));Rt.displayName=qe.displayName;const kr=({className:e,...t})=>x.jsx("div",{className:D("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});kr.displayName="DialogHeader";const Or=({className:e,...t})=>x.jsx("div",{className:D("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t});Or.displayName="DialogFooter";const Lr=r.forwardRef(({className:e,...t},n)=>x.jsx(Ze,{ref:n,className:D("text-lg font-semibold leading-none tracking-tight",e),...t}));Lr.displayName=Ze.displayName;const Ir=r.forwardRef(({className:e,...t},n)=>x.jsx(Je,{ref:n,className:D("text-sm text-muted-foreground",e),...t}));Ir.displayName=Je.displayName;const Nt=r.forwardRef(({className:e,...t},n)=>x.jsx(O,{ref:n,className:D("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",e),...t}));Nt.displayName=O.displayName;const Zr=({children:e,...t})=>x.jsx(Dr,{...t,children:x.jsx(Rt,{className:"overflow-hidden p-0",children:x.jsx(Nt,{className:"[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",children:e})})}),Tr=r.forwardRef(({className:e,...t},n)=>x.jsxs("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[x.jsx(It,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),x.jsx(O.Input,{ref:n,className:D("flex h-10 w-full rounded-md border-none bg-transparent py-3 text-sm outline-none !ring-0 placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",e),...t})]}));Tr.displayName=O.Input.displayName;const Fr=r.forwardRef(({className:e,...t},n)=>x.jsx(O.List,{ref:n,className:D("max-h-[300px] overflow-y-auto overflow-x-hidden",e),...t}));Fr.displayName=O.List.displayName;const Mr=r.forwardRef((e,t)=>x.jsx(O.Empty,{ref:t,className:"py-6 text-center text-sm",...e}));Mr.displayName=O.Empty.displayName;const jr=r.forwardRef(({className:e,...t},n)=>x.jsx(O.Group,{ref:n,className:D("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",e),...t}));jr.displayName=O.Group.displayName;const Ur=r.forwardRef(({className:e,...t},n)=>x.jsx(O.Separator,{ref:n,className:D("-mx-1 h-px bg-border",e),...t}));Ur.displayName=O.Separator.displayName;const Br=r.forwardRef(({className:e,...t},n)=>x.jsx(O.Item,{ref:n,className:D("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...t}));Br.displayName=O.Item.displayName;export{Jt as $,nn as A,Zr as C,Dr as D,Rt as a,kr as b,Lr as c,Ir as d,Or as e,rn as f,Tr as g,Fr as h,Mr as i,jr as j,Br as k,Ur as l,on as m};
