import{v as W,P as $,a6 as B,F as H,aa as N,ab as w,C as M,ac as j,ad as F,h as p,d as f,a as D,I as S,ae as A,af as U,ag as Y,ah as L,J as b,ai as q,aj as G,ak as z,al as J,am as x,an as K,c as Q,i as X,k as Z,a2 as ee}from"./runtime.Bw2bEUjr.js";const C=new Set,k=new Set;function te(e,t,r,i){function n(a){if(i.capture||y.call(t,a),!a.cancelBubble)return r.call(this,a)}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?$(()=>{t.addEventListener(e,n,i)}):t.addEventListener(e,n,i),n}function de(e,t,r,i,n){var a={capture:i,passive:n},o=te(e,t,r,a);(t===document.body||t===window||t===document)&&W(()=>{t.removeEventListener(e,o,a)})}function fe(e){for(var t=0;t<e.length;t++)C.add(e[t]);for(var r of k)r(e)}function y(e){var O;var t=this,r=t.ownerDocument,i=e.type,n=((O=e.composedPath)==null?void 0:O.call(e))||[],a=n[0]||e.target,o=0,c=e.__root;if(c){var d=n.indexOf(c);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var h=n.indexOf(t);if(h===-1)return;d<=h&&(o=d)}if(a=n[o]||e.target,a!==t){B(e,"currentTarget",{configurable:!0,get(){return a||r}});try{for(var m,l=[];a!==null;){var u=a.assignedSlot||a.parentNode||a.host||null;try{var s=a["__"+i];if(s!==void 0&&!a.disabled)if(H(s)){var[v,...E]=s;v.apply(a,[e,...E])}else s.call(a,e)}catch(T){m?l.push(T):m=T}if(e.cancelBubble||u===t||u===null)break;a=u}if(m){for(let T of l)queueMicrotask(()=>{throw T});throw m}}finally{e.__root=t,delete e.currentTarget}}}function P(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function _(e,t){var r=M;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function le(e,t){var r=(t&j)!==0,i=(t&F)!==0,n,a=!e.startsWith("<!>");return()=>{if(p)return _(f,null),f;n===void 0&&(n=P(a?e:"<!>"+e),r||(n=w(n)));var o=i?document.importNode(n,!0):n.cloneNode(!0);if(r){var c=w(o),d=o.lastChild;_(c,d)}else _(o,o);return o}}function ce(e,t,r="svg"){var i=!e.startsWith("<!>"),n=`<${r}>${i?e:"<!>"+e}</${r}>`,a;return()=>{if(p)return _(f,null),f;if(!a){var o=P(n),c=w(o);a=w(c)}var d=a.cloneNode(!0);return _(d,d),d}}function _e(e=""){if(!p){var t=N(e+"");return _(t,t),t}var r=f;return r.nodeType!==3&&(r.before(r=N()),S(r)),_(r,r),r}function pe(){if(p)return _(f,null),f;var e=document.createDocumentFragment(),t=document.createComment(""),r=N();return e.append(t,r),_(t,r),e}function he(e,t){if(p){M.nodes_end=f,D();return}e!==null&&e.before(t)}function ve(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const re=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function me(e){return re.includes(e)}const ae={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function ge(e){return e=e.toLowerCase(),ae[e]??e}const ne=["touchstart","touchmove"];function oe(e){return ne.includes(e)}let I=!0;function ye(e){I=e}function we(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function ie(e,t){return V(e,t)}function Ee(e,t){A(),t.intro=t.intro??!1;const r=t.target,i=p,n=f;try{for(var a=w(r);a&&(a.nodeType!==8||a.data!==U);)a=Y(a);if(!a)throw L;b(!0),S(a),D();const o=V(e,{...t,anchor:a});if(f===null||f.nodeType!==8||f.data!==q)throw G(),L;return b(!1),o}catch(o){if(o===L)return t.recover===!1&&z(),A(),J(r),b(!1),ie(e,t);throw o}finally{b(i),S(n)}}const g=new Map;function V(e,{target:t,anchor:r,props:i={},events:n,context:a,intro:o=!0}){A();var c=new Set,d=l=>{for(var u=0;u<l.length;u++){var s=l[u];if(!c.has(s)){c.add(s);var v=oe(s);t.addEventListener(s,y,{passive:v});var E=g.get(s);E===void 0?(document.addEventListener(s,y,{passive:v}),g.set(s,1)):g.set(s,E+1)}}};d(x(C)),k.add(d);var h=void 0,m=K(()=>{var l=r??t.appendChild(N());return Q(()=>{if(a){X({});var u=ee;u.c=a}n&&(i.$$events=n),p&&_(l,null),I=o,h=e(l,i)||{},I=!0,p&&(M.nodes_end=f),a&&Z()}),()=>{var v;for(var u of c){t.removeEventListener(u,y);var s=g.get(u);--s===0?(document.removeEventListener(u,y),g.delete(u)):g.set(u,s)}k.delete(d),R.delete(h),l!==r&&((v=l.parentNode)==null||v.removeChild(l))}});return R.set(h,m),h}let R=new WeakMap;function Te(e){const t=R.get(e);t&&t()}const se="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(se);export{he as a,_e as b,pe as c,ye as d,_ as e,te as f,fe as g,Ee as h,ve as i,me as j,ce as k,de as l,ie as m,ge as n,I as o,we as s,le as t,Te as u};