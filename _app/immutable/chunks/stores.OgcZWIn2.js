import{l as k,p as s,a as g,n as N,c as A}from"./disclose-version.BqvIbbEd.js";import{e as B,f as I,g as E,i as L,t as h,j as M,k as P,N as V,l as _}from"./runtime.CcVPQbpP.js";import{i as G,e as O,a as R,s as U,b as x,c as Z,d as q}from"./language.ui_5YlUb.js";import{s as D}from"./entry.0q56gaH_.js";/**
 * @license lucide-svelte v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var H=N("<svg><!><!></svg>");function ee(t,e){const a=k(e,["children","$$slots","$$events","$$legacy"]),r=k(a,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);B(e,!1);let v=s(e,"name",8,void 0),z=s(e,"color",8,"currentColor"),n=s(e,"size",8,24),b=s(e,"strokeWidth",8,2),S=s(e,"absoluteStrokeWidth",8,!1),W=s(e,"iconNode",24,()=>[]);const C=(...l)=>l.filter((o,c,d)=>!!o&&d.indexOf(o)===c).join(" ");G();var i=H();let f;var m=I(i);O(m,1,W,R,(l,o)=>{let c=()=>_(o)[0],d=()=>_(o)[1];var p=A(),j=P(p);Z(j,c,!0,(u,Q)=>{let w;h(()=>w=x(u,w,{...d()},void 0,u.namespaceURI!==V,u.nodeName.includes("-")))}),g(l,p)});var y=E(m);U(y,e,"default",{},null),L(i),h(()=>f=x(i,f,{...F,...r,width:n(),height:n(),stroke:z(),"stroke-width":S()?Number(b())*24/Number(n()):b(),class:C("lucide-icon","lucide",v()?`lucide-${v()}`:"",a.class)},void 0,!0)),g(t,i),M()}var J=N('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g><path d="M100,50c0,18.3-9.8,34.3-24.5,43v-23.2l21.5-5.9-21.5-5.9V24.2h-.5l-25,23.8-25-23.8h-.5v68.8C9.8,84.3,0,68.3,0,50,0,22.4,22.4,0,50,0s50,22.4,50,50Z"></path><polygon points="75.5 58.1 75.5 69.9 53 76 53 52 75.5 58.1"></polygon></g></svg>');function te(t,e){let a=s(e,"class",8,"");var r=J();h(()=>q(r,a())),g(t,r)}const K=()=>{const t=D;return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated}},se={subscribe(t){return K().page.subscribe(t)}};export{ee as I,te as L,se as p};
