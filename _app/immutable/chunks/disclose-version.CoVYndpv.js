import{S as D,Q as me,R as Te,T as R,U as Pe,z as T,V as y,W as M,y as m,X as N,Y as Re,O as Se,Z as ce,h as g,_ as C,$ as de,N as J,a0 as j,a1 as B,a2 as _e,a3 as ve,D as Ne,a4 as U,a5 as Oe,a6 as Ie,l as b,a7 as $,k,a8 as z,a9 as Ae,aa as Le,ab as H,ac as x,ad as xe,ae as De,af as Me,ag as Ce,ah as Be,j as G,w as qe,x as Fe,m as Ve,g as Ye,ai as ne,p as te,E as je,aj as Ue,ak as $e,al as Ke,a as We,v as Z,F as pe,b as ae,f as He,am as ze,an as Ge,ao as he,ap as Ze,aq as Qe,ar as Xe,as as Je,q as ke,at as er,au as rr,L as be,B as ie,av as nr,aw as tr,ax as se,ay as F}from"./utils.mRHdRji8.js";function L(e,r=null,n){if(typeof e!="object"||e===null||D in e)return e;const i=Se(e);if(i!==me&&i!==Te)return e;var t=new Map,a=ce(e),d=R(0);a&&t.set("length",R(e.length));var _;return new Proxy(e,{defineProperty(f,s,l){(!("value"in l)||l.configurable===!1||l.enumerable===!1||l.writable===!1)&&Pe();var o=t.get(s);return o===void 0?(o=R(l.value),t.set(s,o)):T(o,L(l.value,_)),!0},deleteProperty(f,s){var l=t.get(s);if(l===void 0)s in f&&t.set(s,R(y));else{if(a&&typeof s=="string"){var o=t.get("length"),u=Number(s);Number.isInteger(u)&&u<o.v&&T(o,u)}T(l,y),ue(d)}return!0},get(f,s,l){var v;if(s===D)return e;var o=t.get(s),u=s in f;if(o===void 0&&(!u||(v=M(f,s))!=null&&v.writable)&&(o=R(L(u?f[s]:y,_)),t.set(s,o)),o!==void 0){var c=m(o);return c===y?void 0:c}return Reflect.get(f,s,l)},getOwnPropertyDescriptor(f,s){var l=Reflect.getOwnPropertyDescriptor(f,s);if(l&&"value"in l){var o=t.get(s);o&&(l.value=m(o))}else if(l===void 0){var u=t.get(s),c=u==null?void 0:u.v;if(u!==void 0&&c!==y)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return l},has(f,s){var c;if(s===D)return!0;var l=t.get(s),o=l!==void 0&&l.v!==y||Reflect.has(f,s);if(l!==void 0||N!==null&&(!o||(c=M(f,s))!=null&&c.writable)){l===void 0&&(l=R(o?L(f[s],_):y),t.set(s,l));var u=m(l);if(u===y)return!1}return o},set(f,s,l,o){var E;var u=t.get(s),c=s in f;if(a&&s==="length")for(var v=l;v<u.v;v+=1){var h=t.get(v+"");h!==void 0?T(h,y):v in f&&(h=R(y),t.set(v+"",h))}u===void 0?(!c||(E=M(f,s))!=null&&E.writable)&&(u=R(void 0),T(u,L(l,_)),t.set(s,u)):(c=u.v!==y,T(u,L(l,_)));var w=Reflect.getOwnPropertyDescriptor(f,s);if(w!=null&&w.set&&w.set.call(o,l),!c){if(a&&typeof s=="string"){var O=t.get("length"),S=Number(s);Number.isInteger(S)&&S>=O.v&&T(O,S+1)}ue(d)}return!0},ownKeys(f){m(d);var s=Reflect.ownKeys(f).filter(u=>{var c=t.get(u);return c===void 0||c.v!==y});for(var[l,o]of t)o.v!==y&&!(l in f)&&s.push(l);return s},setPrototypeOf(){Re()}})}function ue(e,r=1){T(e,e.v+r)}function wr(e,r){if(r){const n=document.body;e.autofocus=!0,J(()=>{document.activeElement===n&&e.focus()})}}function yr(e){g&&C(e)!==null&&de(e)}let fe=!1;function ar(){fe||(fe=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const n of e.target.elements)(r=n.__on_r)==null||r.call(n)})},{capture:!0}))}function we(e){var r=_e,n=N;j(null),B(null);try{return e()}finally{j(r),B(n)}}function gr(e,r,n,i=n){e.addEventListener(r,()=>we(n));const t=e.__on_r;t?e.__on_r=()=>{t(),i()}:e.__on_r=i,ar()}const ye=new Set,Q=new Set;function ir(e,r,n,i){function t(a){if(i.capture||V.call(r,a),!a.cancelBubble)return we(()=>n.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?J(()=>{r.addEventListener(e,t,i)}):r.addEventListener(e,t,i),t}function Er(e,r,n,i,t){var a={capture:i,passive:t},d=ir(e,r,n,a);(r===document.body||r===window||r===document)&&ve(()=>{r.removeEventListener(e,d,a)})}function mr(e){for(var r=0;r<e.length;r++)ye.add(e[r]);for(var n of Q)n(e)}function V(e){var S;var r=this,n=r.ownerDocument,i=e.type,t=((S=e.composedPath)==null?void 0:S.call(e))||[],a=t[0]||e.target,d=0,_=e.__root;if(_){var f=t.indexOf(_);if(f!==-1&&(r===document||r===window)){e.__root=r;return}var s=t.indexOf(r);if(s===-1)return;f<=s&&(d=f)}if(a=t[d]||e.target,a!==r){Ne(e,"currentTarget",{configurable:!0,get(){return a||n}});var l=_e,o=N;j(null),B(null);try{for(var u,c=[];a!==null;){var v=a.assignedSlot||a.parentNode||a.host||null;try{var h=a["__"+i];if(h!==void 0&&!a.disabled)if(ce(h)){var[w,...O]=h;w.apply(a,[e,...O])}else h.call(a,e)}catch(E){u?c.push(E):u=E}if(e.cancelBubble||v===r||v===null)break;a=v}if(u){for(let E of c)queueMicrotask(()=>{throw E});throw u}}finally{e.__root=r,delete e.currentTarget,j(l),B(o)}}}function ge(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function P(e,r){var n=N;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=r)}function Tr(e,r){var n=(r&Oe)!==0,i=(r&Ie)!==0,t,a=!e.startsWith("<!>");return()=>{if(g)return P(b,null),b;t===void 0&&(t=ge(a?e:"<!>"+e),n||(t=C(t)));var d=i?document.importNode(t,!0):t.cloneNode(!0);if(n){var _=C(d),f=d.lastChild;P(_,f)}else P(d,d);return d}}function Pr(e,r,n="svg"){var i=!e.startsWith("<!>"),t=`<${n}>${i?e:"<!>"+e}</${n}>`,a;return()=>{if(g)return P(b,null),b;if(!a){var d=ge(t),_=C(d);a=C(_)}var f=a.cloneNode(!0);return P(f,f),f}}function Rr(e=""){if(!g){var r=U(e+"");return P(r,r),r}var n=b;return n.nodeType!==3&&(n.before(n=U()),$(n)),P(n,n),n}function Sr(){if(g)return P(b,null),b;var e=document.createDocumentFragment(),r=document.createComment(""),n=U();return e.append(r,n),P(r,n),e}function Nr(e,r){if(g){N.nodes_end=b,k();return}e!==null&&e.before(r)}function Or(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const sr=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Ir(e){return sr.includes(e)}const ur={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function Ar(e){return e=e.toLowerCase(),ur[e]??e}const fr=["touchstart","touchmove"];function or(e){return fr.includes(e)}function Lr(e,r){var n=r==null?"":typeof r=="object"?r+"":r;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function lr(e,r){return Ee(e,r)}function xr(e,r){z(),r.intro=r.intro??!1;const n=r.target,i=g,t=b;try{for(var a=C(n);a&&(a.nodeType!==8||a.data!==Ae);)a=Le(a);if(!a)throw H;x(!0),$(a),k();const d=Ee(e,{...r,anchor:a});if(b===null||b.nodeType!==8||b.data!==xe)throw De(),H;return x(!1),d}catch(d){if(d===H)return r.recover===!1&&Me(),z(),de(n),x(!1),lr(e,r);throw d}finally{x(i),$(t)}}const A=new Map;function Ee(e,{target:r,anchor:n,props:i={},events:t,context:a,intro:d=!0}){z();var _=new Set,f=o=>{for(var u=0;u<o.length;u++){var c=o[u];if(!_.has(c)){_.add(c);var v=or(c);r.addEventListener(c,V,{passive:v});var h=A.get(c);h===void 0?(document.addEventListener(c,V,{passive:v}),A.set(c,1)):A.set(c,h+1)}}};f(Ce(ye)),Q.add(f);var s=void 0,l=Be(()=>{var o=n??r.appendChild(U());return G(()=>{if(a){qe({});var u=Ve;u.c=a}t&&(i.$$events=t),g&&P(o,null),s=e(o,i)||{},g&&(N.nodes_end=b),a&&Fe()}),()=>{var v;for(var u of _){r.removeEventListener(u,V);var c=A.get(u);--c===0?(document.removeEventListener(u,V),A.delete(u)):A.set(u,c)}Q.delete(f),X.delete(s),o!==n&&((v=o.parentNode)==null||v.removeChild(o))}});return X.set(s,l),s}let X=new WeakMap;function Dr(e){const r=X.get(e);r&&r()}function Mr(e,r,n,i=null,t=!1){g&&k();var a=e,d=null,_=null,f=null,s=t?je:0;Ye(()=>{if(f===(f=!!r()))return;let l=!1;if(g){const o=a.data===Ue;f===o&&(a=$e(),$(a),x(!1),l=!0)}f?(d?ne(d):d=G(()=>n(a)),_&&te(_,()=>{_=null})):(_?ne(_):i&&(_=G(()=>i(a))),d&&te(d,()=>{d=null})),l&&x(!0)},s),g&&(a=b)}function oe(e,r){return e===r||(e==null?void 0:e[D])===r}function Cr(e={},r,n,i){return Ke(()=>{var t,a;return We(()=>{t=a,a=[],Z(()=>{e!==n(...a)&&(r(e,...a),t&&oe(n(...t),e)&&r(null,...t))})}),()=>{J(()=>{a&&oe(n(...a),e)&&r(null,...a)})}}),e}let Y=!1;function Br(e,r,n){const i=n[r]??(n[r]={store:null,source:pe(void 0),unsubscribe:ae});if(i.store!==e)if(i.unsubscribe(),i.store=e??null,e==null)i.source.v=void 0,i.unsubscribe=ae;else{var t=!0;i.unsubscribe=He(e,a=>{t?i.source.v=a:T(i.source,a)}),t=!1}return m(i.source)}function qr(){const e={};return ve(()=>{for(var r in e)e[r].unsubscribe()}),e}function cr(e){var r=Y;try{return Y=!1,[e(),Y]}finally{Y=r}}const dr={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Fr(e,r,n){return new Proxy({props:e,exclude:r},dr)}const _r={get(e,r){if(!e.exclude.includes(r))return m(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,n){return r in e.special||(e.special[r]=pr({get[r](){return e.props[r]}},r,he)),e.special[r](n),se(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),se(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Vr(e,r){return new Proxy({props:e,exclude:r,special:{},version:R(0)},_r)}const vr={get(e,r){let n=e.props.length;for(;n--;){let i=e.props[n];if(F(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i)return i[r]}},set(e,r,n){let i=e.props.length;for(;i--;){let t=e.props[i];F(t)&&(t=t());const a=M(t,r);if(a&&a.set)return a.set(n),!0}return!1},getOwnPropertyDescriptor(e,r){let n=e.props.length;for(;n--;){let i=e.props[n];if(F(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i){const t=M(i,r);return t&&!t.configurable&&(t.configurable=!0),t}}},has(e,r){if(r===D||r===be)return!1;for(let n of e.props)if(F(n)&&(n=n()),n!=null&&r in n)return!0;return!1},ownKeys(e){const r=[];for(let n of e.props){F(n)&&(n=n());for(const i in n)r.includes(i)||r.push(i)}return r}};function Yr(...e){return new Proxy({props:e},vr)}function le(e){for(var r=N,n=N;r!==null&&!(r.f&(Qe|Xe));)r=r.parent;try{return B(r),e()}finally{B(n)}}function pr(e,r,n,i){var re;var t=(n&Je)!==0,a=!ke||(n&er)!==0,d=(n&rr)!==0,_=(n&tr)!==0,f=!1,s;d?[s,f]=cr(()=>e[r]):s=e[r];var l=D in e||be in e,o=((re=M(e,r))==null?void 0:re.set)??(l&&d&&r in e?p=>e[r]=p:void 0),u=i,c=!0,v=!1,h=()=>(v=!0,c&&(c=!1,_?u=Z(i):u=i),u);s===void 0&&i!==void 0&&(o&&a&&ze(),s=h(),o&&o(s));var w;if(a)w=()=>{var p=e[r];return p===void 0?h():(c=!0,v=!1,p)};else{var O=le(()=>(t?ie:nr)(()=>e[r]));O.f|=Ge,w=()=>{var p=m(O);return p!==void 0&&(u=void 0),p===void 0?u:p}}if(!(n&he))return w;if(o){var S=e.$$legacy;return function(p,I){return arguments.length>0?((!a||!I||S||f)&&o(I?w():p),p):w()}}var E=!1,ee=!1,K=pe(s),q=le(()=>ie(()=>{var p=w(),I=m(K);return E?(E=!1,ee=!0,I):(ee=!1,K.v=p)}));return t||(q.equals=Ze),function(p,I){if(arguments.length>0){const W=I?m(q):a&&d?L(p):p;return q.equals(W)||(E=!0,T(K,W),v&&u!==void 0&&(u=W),Z(()=>m(q))),p}return m(q)}}const hr="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(hr);export{Pr as A,Er as B,P as C,Nr as a,Rr as b,Lr as c,Br as d,Cr as e,yr as f,L as g,xr as h,Mr as i,Sr as j,ar as k,gr as l,lr as m,Or as n,ir as o,pr as p,mr as q,Fr as r,qr as s,Tr as t,Dr as u,wr as v,Ar as w,Ir as x,Yr as y,Vr as z};