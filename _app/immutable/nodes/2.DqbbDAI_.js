var Me=Object.defineProperty;var he=a=>{throw TypeError(a)};var Oe=(a,t,e)=>t in a?Me(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var q=(a,t,e)=>Oe(a,typeof t!="symbol"?t+"":t,e),ge=(a,t,e)=>t.has(a)||he("Cannot "+e);var r=(a,t,e)=>(ge(a,t,"read from private field"),e?e.call(a):t.get(a)),c=(a,t,e)=>t.has(a)?he("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(a):t.set(a,e),E=(a,t,e,i)=>(ge(a,t,"write to private field"),i?i.call(a,e):t.set(a,e),e);import{p as s,c as C,i as et,a as n,t as A,r as ot,q as Ie,j as dt,g as At,s as ht,l as be,d as Wt,e as st,b as Re,v as fe,f as me}from"../chunks/disclose-version.COpIlTjV.js";import{p as ye,u as Kt,v as Vt,k as I,t as U,y as Ct,x as _t,D as Le,f as De,E as Ne,o as Ee,h as Fe,G as ce,H as Se,r as je,J as Ge,K as Qe,n as Be,F as ze,P as He,w as qe,z as ve,A as Ke,C as le,I as Pe,b as xe,B as Jt,l as Ve,L as Je,M as We}from"../chunks/language.CAekHiVq.js";import{y as R,j as v,v as Ue,b as ue,p as at,f as _,g as o,n as Tt,r as l,t as Y,c as rt,x as ct,i as ut,u as Ce,e as m,h as O,aq as Ye}from"../chunks/utils.BedhUbme.js";import{u as Xe,P as pe,R as _e,T as ke,a as we}from"../chunks/index.BdNkWqYv.js";import{M as Ze,t as $e}from"../chunks/theme.ByxC_bYy.js";const ta="data-avatar-root",ea="data-avatar-image",aa="data-avatar-fallback";var kt,Rt,Ut;class ra{constructor(t){c(this,kt);c(this,Rt);q(this,"delayMs");q(this,"loadingStatus");c(this,Ut,R(()=>({id:r(this,kt).current,[ta]:"","data-status":this.loadingStatus.current})));this.delayMs=t.delayMs,this.loadingStatus=t.loadingStatus,E(this,Rt,t.ref),E(this,kt,t.id),Kt({id:r(this,kt),ref:r(this,Rt)})}loadImage(t,e,i){let d;const u=new Image;return u.src=t,e!==void 0&&(u.crossOrigin=e),i&&(u.referrerPolicy=i),this.loadingStatus.current="loading",u.onload=()=>{d=window.setTimeout(()=>{this.loadingStatus.current="loaded"},this.delayMs.current)},u.onerror=()=>{this.loadingStatus.current="error"},()=>{clearTimeout(d)}}get props(){return v(r(this,Ut))}}kt=new WeakMap,Rt=new WeakMap,Ut=new WeakMap;var wt,Lt,mt,bt,vt,pt,Yt;class ia{constructor(t,e){c(this,wt);c(this,Lt);c(this,mt);c(this,bt);c(this,vt);c(this,pt);c(this,Yt,R(()=>({id:r(this,wt).current,style:{display:r(this,pt).loadingStatus.current==="loaded"?"block":"none"},"data-status":r(this,pt).loadingStatus.current,[ea]:"",src:r(this,vt).current,crossorigin:r(this,mt).current,referrerpolicy:r(this,bt).current})));E(this,pt,e),E(this,vt,t.src),E(this,wt,t.id),E(this,Lt,t.ref),E(this,mt,t.crossOrigin),E(this,bt,t.referrerPolicy),Kt({id:r(this,wt),ref:r(this,Lt)}),Ue(()=>{r(this,vt).current&&(r(this,mt).current,ue(()=>r(this,pt).loadImage(r(this,vt).current??"",r(this,mt).current,r(this,bt).current)))})}get props(){return v(r(this,Yt))}}wt=new WeakMap,Lt=new WeakMap,mt=new WeakMap,bt=new WeakMap,vt=new WeakMap,pt=new WeakMap,Yt=new WeakMap;var Dt,Nt,yt,Xt;class na{constructor(t,e){c(this,Dt);c(this,Nt);c(this,yt);c(this,Xt,R(()=>({style:{display:r(this,yt).loadingStatus.current==="loaded"?"none":void 0},"data-status":r(this,yt).loadingStatus.current,[aa]:""})));E(this,yt,e),E(this,Dt,t.id),E(this,Nt,t.ref),Kt({id:r(this,Dt),ref:r(this,Nt)})}get props(){return v(r(this,Xt))}}Dt=new WeakMap,Nt=new WeakMap,yt=new WeakMap,Xt=new WeakMap;const[sa,Te]=ye("Avatar.Root");function oa(a){return sa(new ra(a))}function la(a){const t=Te();return new ia(a,t)}function da(a){const t=Te();return new na(a,t)}var ca=A("<div><!></div>");function ua(a,t){at(t,!0);let e=s(t,"delayMs",3,0),i=s(t,"loadingStatus",15,"loading"),d=s(t,"id",19,Vt),u=s(t,"ref",15,null),h=ot(t,["$$slots","$$events","$$legacy","delayMs","loadingStatus","onLoadingStatusChange","child","children","id","ref"]);const f=oa({delayMs:I.with(()=>e()),loadingStatus:I.with(()=>i(),p=>{var k;i()!==p&&(i(p),(k=t.onLoadingStatusChange)==null||k.call(t,p))}),id:I.with(()=>d()),ref:I.with(()=>u(),p=>u(p))}),S=R(()=>_t(h,f.props));var g=C(),y=_(g);et(y,()=>t.child,p=>{var k=C(),x=_(k);U(x,()=>t.child,()=>({props:v(S)})),n(p,k)},p=>{var k=ca();let x;var M=o(k);U(M,()=>t.children??Tt),l(k),Y(()=>x=Ct(k,x,{...v(S)})),n(p,k)}),n(a,g),rt()}var ha=A("<img>");function ga(a,t){at(t,!0);let e=s(t,"id",19,Vt),i=s(t,"ref",15,null),d=s(t,"crossorigin",3,void 0),u=s(t,"referrerpolicy",3,void 0),h=ot(t,["$$slots","$$events","$$legacy","src","child","id","ref","crossorigin","referrerpolicy"]);const f=la({src:I.with(()=>t.src),id:I.with(()=>e()),ref:I.with(()=>i(),p=>i(p)),crossOrigin:I.with(()=>d()),referrerPolicy:I.with(()=>u())}),S=R(()=>_t(h,f.props));var g=C(),y=_(g);et(y,()=>t.child,p=>{var k=C(),x=_(k);U(x,()=>t.child,()=>({props:v(S)})),n(p,k)},p=>{var k=ha();let x;Y(()=>x=Ct(k,x,{...v(S),src:t.src})),Le(k),Ie(k),n(p,k)}),n(a,g),rt()}var fa=A("<span><!></span>");function ma(a,t){at(t,!0);let e=s(t,"id",19,Vt),i=s(t,"ref",15,null),d=ot(t,["$$slots","$$events","$$legacy","children","child","id","ref"]);const u=da({id:I.with(()=>e()),ref:I.with(()=>i(),g=>i(g))}),h=R(()=>_t(d,u.props));var f=C(),S=_(f);et(S,()=>t.child,g=>{var y=C(),p=_(y);U(p,()=>t.child,()=>({props:v(h)})),n(g,y)},g=>{var y=fa();let p;var k=o(y);U(k,()=>t.children??Tt),l(y),Y(()=>p=Ct(y,p,{...v(h)})),n(g,y)}),n(a,f),rt()}const va="data-link-preview-content",pa="data-link-preview-trigger";var Et,Ft,jt,Gt,Qt,Bt,zt,Ht;class _a{constructor(t){q(this,"open");q(this,"openDelay");q(this,"closeDelay");c(this,Et,ct(!1));c(this,Ft,ct(!1));c(this,jt,ct(!1));q(this,"timeout",null);c(this,Gt,ct(null));c(this,Qt,ct(void 0));c(this,Bt,ct(!1));c(this,zt,ct(null));q(this,"isPointerInTransit",I(!1));c(this,Ht,ct(!1));q(this,"clearTimeout",()=>{this.timeout&&(window.clearTimeout(this.timeout),this.timeout=null)});q(this,"handleOpen",()=>{this.clearTimeout(),!this.open.current&&(this.isOpening=!0,this.timeout=window.setTimeout(()=>{this.isOpening&&(this.open.current=!0,this.isOpening=!1)},this.openDelay.current))});q(this,"immediateClose",()=>{this.clearTimeout(),this.isOpening=!1,this.open.current=!1});q(this,"handleClose",()=>{this.isOpening=!1,this.clearTimeout(),!this.isPointerDownOnContent&&!this.hasSelection&&(this.timeout=window.setTimeout(()=>{this.open.current=!1},this.closeDelay.current))});this.open=t.open,this.openDelay=t.openDelay,this.closeDelay=t.closeDelay,Ce(()=>{if(!this.open.current){ue(()=>this.hasSelection=!1);return}const i=De(document,"pointerup",()=>{this.containsSelection=!1,this.isPointerDownOnContent=!1,Qe(1,()=>{var f;((f=document.getSelection())==null?void 0:f.toString())!==""?this.hasSelection=!0:this.hasSelection=!1})}),d=ue(()=>this.contentNode);if(!d)return;const u=Ne(d);for(const h of u)h.setAttribute("tabindex","-1");return()=>{i(),this.hasSelection=!1,this.isPointerDownOnContent=!1}})}get hasSelection(){return v(r(this,Et))}set hasSelection(t){ut(r(this,Et),dt(t))}get isPointerDownOnContent(){return v(r(this,Ft))}set isPointerDownOnContent(t){ut(r(this,Ft),dt(t))}get containsSelection(){return v(r(this,jt))}set containsSelection(t){ut(r(this,jt),dt(t))}get contentNode(){return v(r(this,Gt))}set contentNode(t){ut(r(this,Gt),dt(t))}get contentId(){return v(r(this,Qt))}set contentId(t){ut(r(this,Qt),dt(t))}get contentMounted(){return v(r(this,Bt))}set contentMounted(t){ut(r(this,Bt),dt(t))}get triggerNode(){return v(r(this,zt))}set triggerNode(t){ut(r(this,zt),dt(t))}get isOpening(){return v(r(this,Ht))}set isOpening(t){ut(r(this,Ht),dt(t))}}Et=new WeakMap,Ft=new WeakMap,jt=new WeakMap,Gt=new WeakMap,Qt=new WeakMap,Bt=new WeakMap,zt=new WeakMap,Ht=new WeakMap;var St,qt,K,Zt,$t,te,ee,ae;class ka{constructor(t,e){c(this,St);c(this,qt);c(this,K);c(this,Zt,t=>{ce(t)||r(this,K).handleOpen()});c(this,$t,t=>{ce(t)||r(this,K).contentMounted||r(this,K).immediateClose()});c(this,te,t=>{je(t.currentTarget)&&r(this,K).handleOpen()});c(this,ee,()=>{r(this,K).handleClose()});c(this,ae,R(()=>({id:r(this,St).current,"aria-haspopup":"dialog","aria-expanded":Ge(r(this,K).open.current),"data-state":Se(r(this,K).open.current),"aria-controls":r(this,K).contentId,role:"button",[pa]:"",onpointerenter:r(this,Zt),onfocus:r(this,te),onblur:r(this,ee),onpointerleave:r(this,$t)})));E(this,St,t.id),E(this,qt,t.ref),E(this,K,e),Kt({id:r(this,St),ref:r(this,qt),onRefChange:i=>{r(this,K).triggerNode=i}})}get props(){return v(r(this,ae))}}St=new WeakMap,qt=new WeakMap,K=new WeakMap,Zt=new WeakMap,$t=new WeakMap,te=new WeakMap,ee=new WeakMap,ae=new WeakMap;var Pt,xt,re,ie,ne,se,oe;class wa{constructor(t,e){c(this,Pt);c(this,xt);q(this,"root");c(this,re,t=>{const e=t.target;Fe(e)&&(t.currentTarget.contains(e)&&(this.root.containsSelection=!0),this.root.hasSelection=!0,this.root.isPointerDownOnContent=!0)});c(this,ie,t=>{ce(t)||this.root.handleOpen()});c(this,ne,t=>{t.preventDefault()});c(this,se,R(()=>({open:this.root.open.current})));c(this,oe,R(()=>({id:r(this,Pt).current,tabindex:-1,"data-state":Se(this.root.open.current),[va]:"",onpointerdown:r(this,re),onpointerenter:r(this,ie),onfocusout:r(this,ne)})));E(this,Pt,t.id),E(this,xt,t.ref),this.root=e,Kt({id:r(this,Pt),ref:r(this,xt),onRefChange:i=>{this.root.contentNode=i,this.root.contentId=i==null?void 0:i.id},deps:()=>this.root.open.current}),Ce(()=>{if(!this.root.open.current)return;const{isPointerInTransit:i,onPointerExit:d}=Xe(()=>this.root.triggerNode,()=>r(this,xt).current);this.root.isPointerInTransit=i,d(()=>{this.root.handleClose()})}),Ee(()=>{this.root.clearTimeout()})}get snippetProps(){return v(r(this,se))}get props(){return v(r(this,oe))}}Pt=new WeakMap,xt=new WeakMap,re=new WeakMap,ie=new WeakMap,ne=new WeakMap,se=new WeakMap,oe=new WeakMap;const[ba,Ae]=ye("LinkPreview.Root");function ya(a){return ba(new _a(a))}function Sa(a){return new ka(a,Ae())}function Pa(a){return new wa(a,Ae())}function xa(a,t){at(t,!0);let e=s(t,"open",15,!1),i=s(t,"onOpenChange",3,Be),d=s(t,"openDelay",3,700),u=s(t,"closeDelay",3,300),h=s(t,"controlledOpen",3,!1);ya({open:I.with(()=>e(),g=>{h()||e(g),i()(g)}),openDelay:I.with(()=>d()),closeDelay:I.with(()=>u())});var f=C(),S=_(f);At(S,()=>ze,(g,y)=>{y(g,{children:(p,k)=>{var x=C(),M=_(x);U(M,()=>t.children??Tt),n(p,x)},$$slots:{default:!0}})}),n(a,f),rt()}var Ca=A("<div><!></div>"),Ta=A("<div><!></div>"),Aa=A("<!> <!>",1);function Ma(a,t){at(t,!0);let e=s(t,"id",19,Vt),i=s(t,"ref",15,null),d=s(t,"side",3,"top"),u=s(t,"sideOffset",3,0),h=s(t,"align",3,"center"),f=s(t,"avoidCollisions",3,!0),S=s(t,"arrowPadding",3,0),g=s(t,"sticky",3,"partial"),y=s(t,"hideWhenDetached",3,!1),p=s(t,"collisionPadding",3,0),k=s(t,"forceMount",3,!1),x=ot(t,["$$slots","$$events","$$legacy","children","child","id","ref","side","sideOffset","align","avoidCollisions","arrowPadding","sticky","hideWhenDetached","collisionPadding","onInteractOutside","onEscapeKeydown","forceMount"]);const M=Pa({id:I.with(()=>e()),ref:I.with(()=>i(),G=>i(G))}),X=R(()=>({side:d(),sideOffset:u(),align:h(),avoidCollisions:f(),arrowPadding:S(),sticky:g(),hideWhenDetached:y(),collisionPadding:p()})),F=R(()=>_t(x,v(X),M.props));function L(G){var Q;(Q=t.onInteractOutside)==null||Q.call(t,G),!G.defaultPrevented&&M.root.handleClose()}function Z(G){var Q;(Q=t.onEscapeKeydown)==null||Q.call(t,G),!G.defaultPrevented&&M.root.handleClose()}var gt=C(),lt=_(gt);et(lt,k,G=>{qe(G,ht(()=>v(F),{get enabled(){return M.root.open.current},get id(){return e()},onInteractOutside:L,onEscapeKeydown:Z,onOpenAutoFocus:V=>V.preventDefault(),onCloseAutoFocus:V=>V.preventDefault(),trapFocus:!1,loop:!1,preventScroll:!1,forceMount:!0,popper:(V,$)=>{let Mt=()=>$==null?void 0:$().props;var z=C();const J=R(()=>_t(Mt(),{style:ve("link-preview")}));var ft=_(z);et(ft,()=>t.child,b=>{var P=C(),w=_(P);U(w,()=>t.child,()=>({props:v(J),...M.snippetProps})),n(b,P)},b=>{var P=Ca();let w;var D=o(P);U(D,()=>t.children??Tt),l(P),Y(()=>w=Ct(P,w,{...v(J)})),n(b,P)}),n(V,z)},$$slots:{popper:!0}}))},G=>{var Q=C(),V=_(Q);et(V,()=>!k(),$=>{He($,ht(()=>v(F),{get present(){return M.root.open.current},get id(){return e()},onInteractOutside:L,onEscapeKeydown:Z,onOpenAutoFocus:z=>z.preventDefault(),onCloseAutoFocus:z=>z.preventDefault(),trapFocus:!1,loop:!1,preventScroll:!1,forceMount:!1,popper:(z,J)=>{let ft=()=>J==null?void 0:J().props;var b=Aa();const P=R(()=>_t(ft(),{style:ve("link-preview")}));var w=_(b);et(w,()=>t.child,T=>{var N=C(),j=_(N);U(j,()=>t.child,()=>({props:v(P),...M.snippetProps})),n(T,N)},T=>{var N=Ta();let j;var B=o(N);U(B,()=>t.children??Tt),l(N),Y(()=>j=Ct(N,j,{...v(P)})),n(T,N)});var D=m(w,2);Ze(D,{onMountedChange:T=>M.root.contentMounted=T}),n(z,b)},$$slots:{popper:!0}}))},null,!0),n(G,Q)}),n(a,gt),rt()}var Oa=A("<a><!></a>");function Ia(a,t){at(t,!0);let e=s(t,"ref",15,null),i=s(t,"id",19,Vt),d=ot(t,["$$slots","$$events","$$legacy","ref","id","child","children"]);const u=Sa({id:I.with(()=>i()),ref:I.with(()=>e(),g=>e(g))}),h=R(()=>_t(d,u.props));var f=C(),S=_(f);At(S,()=>Ke,(g,y)=>{y(g,{get id(){return i()},children:(p,k)=>{var x=C(),M=_(x);et(M,()=>t.child,X=>{var F=C(),L=_(F);U(L,()=>t.child,()=>({props:v(h)})),n(X,F)},X=>{var F=Oa();let L;var Z=o(F);U(Z,()=>t.children??Tt),l(F),Y(()=>L=Ct(F,L,{...v(h)})),n(X,F)}),n(p,x)},$$slots:{default:!0}})}),n(a,f),rt()}function Ra(a,t){at(t,!0);let e=s(t,"ref",15,null),i=s(t,"loadingStatus",15,"loading"),d=ot(t,["$$slots","$$events","$$legacy","class","ref","loadingStatus"]);var u=C(),h=_(u),f=R(()=>le("relative flex size-10 shrink-0 overflow-hidden rounded-full",t.class));At(h,()=>ua,(S,g)=>{g(S,ht({get loadingStatus(){return i()},set loadingStatus(y){i(y)},get ref(){return e()},set ref(y){e(y)},get class(){return v(f)}},()=>d))}),n(a,u),rt()}function La(a,t){at(t,!0);let e=s(t,"ref",15,null),i=ot(t,["$$slots","$$events","$$legacy","class","src","alt","ref"]);var d=C(),u=_(d),h=R(()=>le("aspect-square h-full w-full",t.class));At(u,()=>ga,(f,S)=>{S(f,ht({get ref(){return e()},set ref(g){e(g)},get src(){return t.src},get alt(){return t.alt},get class(){return v(h)}},()=>i))}),n(a,d),rt()}function Da(a,t){at(t,!0);let e=s(t,"ref",15,null),i=ot(t,["$$slots","$$events","$$legacy","class","ref"]);var d=C(),u=_(d),h=R(()=>le("bg-muted flex h-full w-full items-center justify-center rounded-full",t.class));At(u,()=>ma,(f,S)=>{S(f,ht({get ref(){return e()},set ref(g){e(g)},get class(){return v(h)}},()=>i))}),n(a,d),rt()}function Na(a,t){const e=be(t,["children","$$slots","$$events","$$legacy"]);Pe(a,ht({name:"github"},()=>e,{iconNode:[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]],children:(d,u)=>{var h=C(),f=_(h);xe(f,t,"default",{}),n(d,h)},$$slots:{default:!0}}))}function Ea(a,t){const e=be(t,["children","$$slots","$$events","$$legacy"]);Pe(a,ht({name:"send"},()=>e,{iconNode:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]],children:(d,u)=>{var h=C(),f=_(h);xe(f,t,"default",{}),n(d,h)},$$slots:{default:!0}}))}function Fa(a,t){at(t,!0);let e=s(t,"ref",15,null),i=s(t,"align",3,"center"),d=s(t,"sideOffset",3,4),u=ot(t,["$$slots","$$events","$$legacy","ref","class","align","sideOffset"]);var h=C(),f=_(h),S=R(()=>le("bg-popover text-popover-foreground z-50 w-64 rounded-md border p-4 shadow-md outline-none",t.class));At(f,()=>Ma,(g,y)=>{y(g,ht({get ref(){return e()},set ref(p){e(p)},get sideOffset(){return d()},get align(){return i()},get class(){return v(S)}},()=>u))}),n(a,h),rt()}const ja=xa,Ga=Ia;var Qa=A("<!> <!>",1),Ba=A('<div class="flex space-x-4"><!> <div><h4 class="text-sm font-semibold"> </h4> <p class="text-sm"> </p></div></div>'),za=A("<!> <!>",1);function W(a,t){let e=s(t,"class",8,""),i=s(t,"link",8,"https://ma.cyou"),d=s(t,"name",8,"ma.cyou"),u=s(t,"img",8,"https://github.com/ma-cyou.png"),h=s(t,"fallback",8,"MA"),f=s(t,"title",8,"macyou"),S=s(t,"description",8,"Mapagmataas's website");ja(a,{children:(g,y)=>{var p=za(),k=_(p),x=Ye(()=>`${(e()!==""?e()+" ":"")??""}rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black`);Ga(k,{get href(){return i()},target:"_blank",rel:"noreferrer noopener",get class(){return v(x)},children:(X,F)=>{O();var L=Wt();Y(()=>st(L,d())),n(X,L)},$$slots:{default:!0}});var M=m(k,2);Fa(M,{class:"w-80",children:(X,F)=>{var L=Ba(),Z=o(L);Ra(Z,{class:"my-auto h-12 w-12",children:($,Mt)=>{var z=Qa(),J=_(z);La(J,{get src(){return u()}});var ft=m(J,2);Da(ft,{children:(b,P)=>{O();var w=Wt();Y(()=>st(w,h())),n(b,w)},$$slots:{default:!0}}),n($,z)},$$slots:{default:!0}});var gt=m(Z,2),lt=o(gt),G=o(lt,!0);l(lt);var Q=m(lt,2),V=o(Q,!0);l(Q),l(gt),l(L),Y(()=>{st(G,f()),st(V,S())}),n(X,L)},$$slots:{default:!0}}),n(g,p)},$$slots:{default:!0}})}var Ha=A('<div class="flex items-center justify-center">Привет&nbsp; <button class="cursor-grab grayscale-[20%] hover:scale-110">👋</button> ,</div> <div class="ml-0 text-2xl sm:ml-2 sm:text-4xl md:text-5xl">я автор</div>',1),qa=A('<div class="flex items-center justify-center">Hi&nbsp; <button class="cursor-grab grayscale-[20%] hover:scale-110">👋</button> ,</div> <div class="ml-0 text-2xl sm:ml-2 sm:text-4xl md:text-5xl">I am the author</div>',1),Ka=A(`<ul class="my-4 ml-3 list-disc space-y-2 md:my-8 md:ml-6 md:space-y-4 [&amp;>li]:mt-2"><li><p>Меня зовут Тимофей, мой ник — "Mapagmataas". В настоящий момент я работаю в <!> лаборантом на <a href="https://ru.wikipedia.org/wiki/ВЭПП-2000" target="_blank">коллайдере частиц</a>. Основное направление моей деятельности — <a href="https://wikipedia.org/wiki/Solution_stack#Full-stack_developer">full stack</a> разработка веб-сайтов для управления данными, приборами и различными системами.</p></li> <li><p>Я увлекаюсь веб-дизайном и front-end разработкой, постоянно нахожу новые решения и
								стремлюсь узнавать что-то новое, и не побоюсь сказать, что уверен в своих знаниях <a href="https://wikipedia.org/wiki/HTML" target="_blank">HTML</a>, <a href="https://wikipedia.org/wiki/CSS" target="_blank">CSS</a>, <a href="https://wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a>/<a href="https://wikipedia.org/wiki/TypeScript" target="_blank">TypeScript</a>, в моем любимом фреймворке <!>, а также <!>. Меня также привлекает мир разработки игр, и я горю желанием попробовать себя в <a href="https://wikipedia.org/wiki/Video_game_development" target="_blank">game dev</a>. Я хорошо знаком с основами языков C-семейства (<a href="https://wikipedia.org/wiki/C_(programming_language)" target="_blank">C</a>, <a href="https://wikipedia.org/wiki/C_Sharp_(programming_language)" target="_blank">C#</a>, <a href="https://wikipedia.org/wiki/C++" target="_blank">C++</a>, <!>), <a href="https://wikipedia.org/wiki/Memory_management" target="_blank">управлением памятью</a>, <a href="https://wikipedia.org/wiki/Multithreading_(computer_architecture)" target="_blank">многопоточностью</a>, <a href="https://wikipedia.org/wiki/Asynchrony_(computer_programming)" target="_blank">асинхронным программированием</a>.</p></li> <li><p>Также владею основами работы с <a href="https://wikipedia.org/wiki/Database" target="_blank">базами данных</a> — таких как <a href="https://wikipedia.org/wiki/PostgreSQL" target="_blank">PostgreSQL</a>, <a href="https://wikipedia.org/wiki/MySQL" target="_blank">MySQL</a>, <a href="https://wikipedia.org/wiki/SQLite" target="_blank">SQLite</a>, <a href="https://wikipedia.org/wiki/SQLAlchemy" target="_blank">SQLAlchemy</a>, <a href="https://wikipedia.org/wiki/Redis" target="_blank">Redis</a> и <a href="https://wikipedia.org/wiki/MongoDB" target="_blank">MongoDB</a>. Для
								повседневных задач я использую <!> или <!>, и хорошо знаком с множеством модулей и библиотек для этих языков.</p></li></ul> <blockquote class="mt-6 border-l-2 border-muted-foreground pl-6 italic md:mt-10">Главное, что я ищу в своей работе, — это интересные задачи и профессиональный рост.
						Однако при этом я не спешу и стремлюсь к качественному развитию.</blockquote>`,1),Va=A(`<ul class="my-4 ml-3 list-disc space-y-2 md:my-8 md:ml-6 md:space-y-4 [&amp;>li]:mt-2"><li><p>My name is Timofey, and my nickname is "Mapagmataas". Currently, I work as a lab
								technician at <!> at a <a href="https://wikipedia.org/wiki/Collider" target="_blank">particle collider</a>.
								My primary area of expertise is <a href="https://wikipedia.org/wiki/Solution_stack#Full-stack_developer">full stack</a> development of websites for managing data, instruments, and various systems.</p></li> <li><p>I am passionate about web design and front-end development, always looking for new
								solutions and eager to learn new things. I am confident in my knowledge of <a href="https://wikipedia.org/wiki/HTML" target="_blank">HTML</a>, <a href="https://wikipedia.org/wiki/CSS" target="_blank">CSS</a>, <a href="https://wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a>/<a href="https://wikipedia.org/wiki/TypeScript" target="_blank">TypeScript</a>, my favorite framework <!>, and also <!>. I am also drawn to the world of game development and am eager to explore
								opportunities in <a href="https://wikipedia.org/wiki/Video_game_development" target="_blank">game dev</a>. I am familiar with the basics of C-family languages (<a href="https://wikipedia.org/wiki/C_(programming_language)" target="_blank">C</a>, <a href="https://wikipedia.org/wiki/C_Sharp_(programming_language)" target="_blank">C#</a>, <a href="https://wikipedia.org/wiki/C++" target="_blank">C++</a>, <!>), <a href="https://wikipedia.org/wiki/Memory_management" target="_blank">memory management</a>, <a href="https://wikipedia.org/wiki/Multithreading_(computer_architecture)" target="_blank">multithreading</a>, and <a href="https://wikipedia.org/wiki/Asynchrony_(computer_programming)" target="_blank">asynchronous programming</a>.</p></li> <li><p>I also have a strong foundation in working with <a href="https://wikipedia.org/wiki/Database" target="_blank">databases</a> such as <a href="https://wikipedia.org/wiki/PostgreSQL" target="_blank">PostgreSQL</a>, <a href="https://wikipedia.org/wiki/MySQL" target="_blank">MySQL</a>, <a href="https://wikipedia.org/wiki/SQLite" target="_blank">SQLite</a>, <a href="https://wikipedia.org/wiki/SQLAlchemy" target="_blank">SQLAlchemy</a>, <a href="https://wikipedia.org/wiki/Redis" target="_blank">Redis</a>, and <a href="https://wikipedia.org/wiki/MongoDB" target="_blank">MongoDB</a>. For
								everyday tasks, I use <!> or <!>, and I am well-versed in many modules and libraries for these languages.</p></li></ul> <blockquote class="mt-6 border-l-2 border-muted-foreground pl-6 italic md:mt-10">The most important thing I seek in my work is interesting challenges and professional
						growth. However, I am not in a hurry; I strive for quality development.</blockquote>`,1),Ja=A("<!> @mapagmataas1331",1),Wa=A("<p>GitHub</p>"),Ua=A("<!> <!>",1),Ya=A("<!> @mapagmataas",1),Xa=A("<p>Telegram</p>"),Za=A("<!> <!>",1),$a=A(`<div class="w-full snap-y snap-mandatory justify-center overflow-y-scroll scroll-smooth bg-gradient-to-br from-white to-sky-200 dark:from-sky-800 dark:to-black"><section class="relative flex snap-start items-center justify-center"><div class="text-center"><h1 class="block items-center justify-center text-3xl font-bold sm:flex sm:text-4xl md:text-5xl"><!></h1> <p class="mt-2 text-base sm:mt-5 md:text-lg"> </p> <img src="/author.png"> <div class="mt-5 flex flex-col items-center justify-center sm:mt-10 md:flex-row"><!> <!></div></div></section> <section id="about" class="relative z-10 flex snap-start flex-col items-center justify-center text-xs leading-normal tracking-tight md:text-base md:leading-relaxed md:tracking-normal"><div class="container z-10 max-h-full"><h1 class="scroll-m-20 text-2xl font-extrabold tracking-tight md:text-4xl lg:text-5xl"> </h1> <div class="mt-0 md:mt-6"><!></div></div></section> <section id="socials" class="relative flex snap-start flex-col items-center justify-center"><div class="container mx-auto text-center"><h2 class="text-4xl font-bold"> </h2> <div class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2"><!> <!></div> <p id="legal" class="absolute bottom-0 left-0 right-0 p-2 text-center text-xs backdrop-blur-sm">© ma.cyou (<a href="https://github.com/mapagmataas1331" target="_blank">Mapagmataas</a>),
				2024. All rights reserved.</p></div></section></div>`);function sr(a){const t=Re(),e=()=>me(Ve,"$language",t),i=()=>me($e,"$theme",t),d=b=>{b.innerHTML="👀",setTimeout(()=>b.style.transform="scaleX(-1)",500),setTimeout(()=>b.style.transform="",1e3),setTimeout(()=>b.innerHTML="👋",1500)};var u=$a(),h=o(u),f=o(h),S=o(f),g=o(S);et(g,()=>e()==="ru",b=>{var P=Ha(),w=_(P),D=m(o(w));O(),l(w),O(2),fe("click",D,T=>d(T.target)),n(b,P)},b=>{var P=qa(),w=_(P),D=m(o(w));O(),l(w),O(2),fe("click",D,T=>d(T.target)),n(b,P)}),l(S);var y=m(S,2),p=o(y,!0);l(y);var k=m(y,2),x=m(k,2),M=o(x);Jt(M,{href:"#about",variant:"default",class:"m-2 min-w-48 font-semibold shadow-lg hover:scale-105",children:(b,P)=>{O();var w=Wt();Y(()=>st(w,e()==="ru"?"Больше обо мне":"More about me")),n(b,w)},$$slots:{default:!0}});var X=m(M,2);Jt(X,{href:"#socials",variant:"default",class:"m-2 min-w-48 font-semibold shadow-lg hover:scale-105",children:(b,P)=>{O();var w=Wt();Y(()=>st(w,e()==="ru"?"Мои Соц. сети":"My Social links")),n(b,w)},$$slots:{default:!0}}),l(x),l(f),l(h);var F=m(h,2),L=o(F),Z=o(L),gt=o(Z,!0);l(Z);var lt=m(Z,2),G=o(lt);et(G,()=>e()==="ru",b=>{var P=Ka(),w=_(P),D=o(w),T=o(D),N=m(o(T));W(N,{class:"font-semibold italic",link:"https://www.inp.nsk.su/",name:"ИЯФ",img:"https://inp.nsk.su/images/logo/OfficiallogoBINPblueClear.gif",fallback:"ИЯФ",title:"ИЯФ СО РАН",description:"Институт ядерной физики имени Г. И. Будкера СО РАН"}),O(5),l(T),l(D);var j=m(D,2),B=o(j),it=m(o(B),9);W(it,{class:"font-semibold italic",link:"https://svelte.dev/",name:"Svelte",img:"https://github.com/sveltejs.png",fallback:"SK",title:"SVELTE",description:"Кибернетически улучшенные веб-приложения."});var H=m(it,2);W(H,{class:"font-semibold italic",link:"https://react.dev/",name:"React",img:"https://github.com/reactjs.png",fallback:"RC",title:"React",description:"Библиотека для создания пользовательских интерфейсов."});var Ot=m(H,10);W(Ot,{class:"font-semibold italic",link:"https://www.rust-lang.org/",name:"Rust",img:"https://github.com/rust-lang.png",fallback:"RT",title:"Rust",description:"Язык, расширяющий возможности каждого для создания надежного и эффективного программного обеспечения."}),O(7),l(B),l(j);var tt=m(j,2),nt=o(tt),It=m(o(nt),15);W(It,{class:"font-semibold italic",link:"https://www.python.org/",name:"Python",img:"https://github.com/python.png",fallback:"PY",title:"Python",description:"язык программирования, который позволяет работать быстро и более эффективно интегрировать программы."});var de=m(It,2);W(de,{class:"font-semibold italic",link:"https://go.dev/",name:"Golang",img:"https://github.com/golang.png",fallback:"GO",title:"GO",description:"Создавайте простые, безопасные и масштабируемые программы с помощью Go."}),O(),l(nt),l(tt),l(w),O(2),n(b,P)},b=>{var P=Va(),w=_(P),D=o(w),T=o(D),N=m(o(T));W(N,{class:"font-semibold italic",link:"https://www.inp.nsk.su/",name:"BINP",img:"https://inp.nsk.su/images/logo/OfficiallogoBINPblueClear.gif",fallback:"BINP",title:"Budker Institute of Nuclear Physics",description:"G. I. Budker Institute of Nuclear Physics SB RAS"}),O(5),l(T),l(D);var j=m(D,2),B=o(j),it=m(o(B),9);W(it,{class:"font-semibold italic",link:"https://svelte.dev/",name:"Svelte",img:"https://github.com/sveltejs.png",fallback:"SK",title:"SVELTE",description:"Cybernetically enhanced web apps."});var H=m(it,2);W(H,{class:"font-semibold italic",link:"https://react.dev/",name:"React",img:"https://github.com/reactjs.png",fallback:"RC",title:"React",description:"A JavaScript library for building user interfaces."});var Ot=m(H,10);W(Ot,{class:"font-semibold italic",link:"https://www.rust-lang.org/",name:"Rust",img:"https://github.com/rust-lang.png",fallback:"RT",title:"Rust",description:"A language empowering everyone to build reliable and efficient software."}),O(7),l(B),l(j);var tt=m(j,2),nt=o(tt),It=m(o(nt),15);W(It,{class:"font-semibold italic",link:"https://www.python.org/",name:"Python",img:"https://github.com/python.png",fallback:"PY",title:"Python",description:"A programming language that lets you work quickly and integrate systems more effectively."});var de=m(It,2);W(de,{class:"font-semibold italic",link:"https://go.dev/",name:"Golang",img:"https://github.com/golang.png",fallback:"GO",title:"Go",description:"Create fast, reliable, and scalable programs with Go."}),O(),l(nt),l(tt),l(w),O(2),n(b,P)}),l(lt),l(L),l(F);var Q=m(F,2),V=o(Q),$=o(V),Mt=o($,!0);l($);var z=m($,2),J=o(z);pe(J,{children:(b,P)=>{_e(b,{children:(w,D)=>{var T=Ua(),N=_(T);ke(N,{class:"sm:text-right",children:(B,it)=>{Jt(B,{href:"https://github.com/mapagmataas1331",variant:"default",target:"_blank",class:"m-2 min-w-48 font-semibold shadow-lg hover:scale-105",children:(H,Ot)=>{var tt=Ja(),nt=_(tt);Na(nt,{class:"mr-2 !size-6"}),O(),n(H,tt)},$$slots:{default:!0}})},$$slots:{default:!0}});var j=m(N,2);we(j,{children:(B,it)=>{var H=Wa();n(B,H)},$$slots:{default:!0}}),n(w,T)},$$slots:{default:!0}})},$$slots:{default:!0}});var ft=m(J,2);pe(ft,{children:(b,P)=>{_e(b,{children:(w,D)=>{var T=Za(),N=_(T);ke(N,{class:"sm:text-left",children:(B,it)=>{Jt(B,{href:"https://t.me/mapagmataas",variant:"default",target:"_blank",class:"m-2 min-w-48 font-semibold shadow-lg hover:scale-105",children:(H,Ot)=>{var tt=Ya(),nt=_(tt);Ea(nt,{class:"mr-2 !size-6"}),O(),n(H,tt)},$$slots:{default:!0}})},$$slots:{default:!0}});var j=m(N,2);we(j,{children:(B,it)=>{var H=Xa();n(B,H)},$$slots:{default:!0}}),n(w,T)},$$slots:{default:!0}})},$$slots:{default:!0}}),l(z),O(2),l(V),l(Q),l(u),Y(()=>{st(p,e()==="ru"?"Веб-разработчик и дизайнер":"Web developer and designer"),Je(k,"alt",e()==="ru"?"Фото Aвтора":"Author's photo"),We(k,`mx-auto mt-5 flex h-full max-h-[calc((100dvh_-_3.5rem)_/_2)] min-h-48 items-center justify-center rounded-3xl shadow-xl transition-transform hover:scale-105 sm:mt-10 md:max-h-[calc((100dvh_-_4rem)_/_2)] ${(i()==="dark"?"pattern-light":"pattern")??""}`),st(gt,e()==="ru"?"Обо мне":"About me"),st(Mt,e()==="ru"?"Мои Соц. сети":"My Social links")}),n(a,u)}export{sr as component};
