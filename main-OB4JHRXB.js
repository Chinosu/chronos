import{$ as Yl,A as zl,Aa as ih,B as us,Ba as br,C as Pn,Ca as Er,D as Yo,Da as wr,E as kl,Ea as rh,F as Vl,Fa as sh,G as Hl,Ga as hn,H as cn,Ha as gs,I as Gl,Ia as ra,J as Me,Ja as oh,K as ue,Ka as ah,L as ee,La as sa,M as Wl,Ma as ch,N as $o,Na as oa,O as Xe,Oa as lh,P as ae,Pa as hh,Q as zt,Qa as Ne,R as gr,Ra as vs,S as ds,Sa as uh,T as ln,Ta as dh,U as fs,Ua as fh,V as Xl,Va as aa,W as jo,Wa as ph,X as vr,Xa as mh,Y as ql,Z as ps,_ as Jn,a as wt,aa as $l,b as Re,ba as Zo,ca as jl,d as Dl,da as Kn,e as Nl,ea as Zl,f as Ul,fa as Jo,g as Ho,ga as _r,h as Go,ha as Jl,i as jn,ia as Ko,j as Ge,ja as ms,k as Zn,ka as Qo,l as Je,la as yr,m as Bt,ma as ta,n as pr,na as ea,o as Ol,oa as xr,p as Fl,pa as Ke,q as ie,qa as Kl,r as Wo,ra as Ql,s as We,sa as th,t as Bl,ta as Mr,u as Xo,ua as Sr,v as bi,va as In,w as Ei,wa as eh,x as mr,xa as nh,y as qo,ya as na,z as wi,za as ia}from"./chunk-X7GEAEHQ.js";var ha=class extends hh{constructor(){super(...arguments),this.supportsDOMEvents=!0}},ua=class i extends ha{static makeCurrent(){lh(new i)}onAndCancel(t,e,n){return t.addEventListener(e,n),()=>{t.removeEventListener(e,n)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,e){return e=e||this.getDefaultDocument(),e.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return e==="window"?window:e==="document"?t:e==="body"?t.body:null}getBaseHref(t){let e=Mf();return e==null?null:Sf(e)}resetBaseElement(){Tr=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return uh(document.cookie,t)}},Tr=null;function Mf(){return Tr=Tr||document.querySelector("base"),Tr?Tr.getAttribute("href"):null}function Sf(i){return new URL(i,document.baseURI).pathname}var bf=(()=>{let t=class t{build(){return new XMLHttpRequest}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=ee({token:t,factory:t.\u0275fac});let i=t;return i})(),da=new Xe(""),_h=(()=>{let t=class t{constructor(n,r){this._zone=r,this._eventNameToPlugin=new Map,n.forEach(s=>{s.manager=this}),this._plugins=n.slice().reverse()}addEventListener(n,r,s){return this._findPluginFor(r).addEventListener(n,r,s)}getZone(){return this._zone}_findPluginFor(n){let r=this._eventNameToPlugin.get(n);if(r)return r;if(r=this._plugins.find(o=>o.supports(n)),!r)throw new ue(5101,!1);return this._eventNameToPlugin.set(n,r),r}};t.\u0275fac=function(r){return new(r||t)(ae(da),ae(Ke))},t.\u0275prov=ee({token:t,factory:t.\u0275fac});let i=t;return i})(),_s=class{constructor(t){this._doc=t}},ca="ng-app-id",yh=(()=>{let t=class t{constructor(n,r,s,o={}){this.doc=n,this.appId=r,this.nonce=s,this.platformId=o,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=aa(o),this.resetHostNodes()}addStyles(n){for(let r of n)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(n){for(let r of n)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let n=this.styleNodesInDOM;n&&(n.forEach(r=>r.remove()),n.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(n){this.hostNodes.add(n);for(let r of this.getAllStyles())this.addStyleToHost(n,r)}removeHost(n){this.hostNodes.delete(n)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(n){for(let r of this.hostNodes)this.addStyleToHost(r,n)}onStyleRemoved(n){let r=this.styleRef;r.get(n)?.elements?.forEach(s=>s.remove()),r.delete(n)}collectServerRenderedStyles(){let n=this.doc.head?.querySelectorAll(`style[${ca}="${this.appId}"]`);if(n?.length){let r=new Map;return n.forEach(s=>{s.textContent!=null&&r.set(s.textContent,s)}),r}return null}changeUsageCount(n,r){let s=this.styleRef;if(s.has(n)){let o=s.get(n);return o.usage+=r,o.usage}return s.set(n,{usage:r,elements:[]}),r}getStyleElement(n,r){let s=this.styleNodesInDOM,o=s?.get(r);if(o?.parentNode===n)return s.delete(r),o.removeAttribute(ca),o;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=r,this.platformIsServer&&a.setAttribute(ca,this.appId),n.appendChild(a),a}}addStyleToHost(n,r){let s=this.getStyleElement(n,r),o=this.styleRef,a=o.get(r)?.elements;a?a.push(s):o.set(r,{elements:[s],usage:1})}resetHostNodes(){let n=this.hostNodes;n.clear(),n.add(this.doc.head)}};t.\u0275fac=function(r){return new(r||t)(ae(Ne),ae(Zo),ae(Jo,8),ae(Kn))},t.\u0275prov=ee({token:t,factory:t.\u0275fac});let i=t;return i})(),la={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},ga=/%COMP%/g,xh="%COMP%",Ef=`_nghost-${xh}`,wf=`_ngcontent-${xh}`,Tf=!0,Af=new Xe("",{providedIn:"root",factory:()=>Tf});function Cf(i){return wf.replace(ga,i)}function Rf(i){return Ef.replace(ga,i)}function Mh(i,t){return t.map(e=>e.replace(ga,i))}var ys=(()=>{let t=class t{constructor(n,r,s,o,a,c,l,h=null){this.eventManager=n,this.sharedStylesHost=r,this.appId=s,this.removeStylesOnCompDestroy=o,this.doc=a,this.platformId=c,this.ngZone=l,this.nonce=h,this.rendererByCompId=new Map,this.platformIsServer=aa(c),this.defaultRenderer=new Ar(n,a,l,this.platformIsServer)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===gr.ShadowDom&&(r=Re(wt({},r),{encapsulation:gr.Emulated}));let s=this.getOrCreateRenderer(n,r);return s instanceof xs?s.applyToHost(n):s instanceof Cr&&s.applyStyles(),s}getOrCreateRenderer(n,r){let s=this.rendererByCompId,o=s.get(r.id);if(!o){let a=this.doc,c=this.ngZone,l=this.eventManager,h=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,f=this.platformIsServer;switch(r.encapsulation){case gr.Emulated:o=new xs(l,h,r,this.appId,u,a,c,f);break;case gr.ShadowDom:return new fa(l,h,n,r,a,c,this.nonce,f);default:o=new Cr(l,h,r,u,a,c,f);break}s.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}};t.\u0275fac=function(r){return new(r||t)(ae(_h),ae(yh),ae(Zo),ae(Af),ae(Ne),ae(Kn),ae(Ke),ae(Jo))},t.\u0275prov=ee({token:t,factory:t.\u0275fac});let i=t;return i})(),Ar=class{constructor(t,e,n,r){this.eventManager=t,this.doc=e,this.ngZone=n,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(t,e){return e?this.doc.createElementNS(la[e]||e,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,e){(gh(t)?t.content:t).appendChild(e)}insertBefore(t,e,n){t&&(gh(t)?t.content:t).insertBefore(e,n)}removeChild(t,e){t&&t.removeChild(e)}selectRootElement(t,e){let n=typeof t=="string"?this.doc.querySelector(t):t;if(!n)throw new ue(-5104,!1);return e||(n.textContent=""),n}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,n,r){if(r){e=r+":"+e;let s=la[r];s?t.setAttributeNS(s,e,n):t.setAttribute(e,n)}else t.setAttribute(e,n)}removeAttribute(t,e,n){if(n){let r=la[n];r?t.removeAttributeNS(r,e):t.removeAttribute(`${n}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,n,r){r&(_r.DashCase|_r.Important)?t.style.setProperty(e,n,r&_r.Important?"important":""):t.style[e]=n}removeStyle(t,e,n){n&_r.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,n){t!=null&&(t[e]=n)}setValue(t,e){t.nodeValue=e}listen(t,e,n){if(typeof t=="string"&&(t=oa().getGlobalEventTarget(this.doc,t),!t))throw new Error(`Unsupported event target ${t} for event ${e}`);return this.eventManager.addEventListener(t,e,this.decoratePreventDefault(n))}decoratePreventDefault(t){return e=>{if(e==="__ngUnwrap__")return t;(this.platformIsServer?this.ngZone.runGuarded(()=>t(e)):t(e))===!1&&e.preventDefault()}}};function gh(i){return i.tagName==="TEMPLATE"&&i.content!==void 0}var fa=class extends Ar{constructor(t,e,n,r,s,o,a,c){super(t,s,o,c),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=Mh(r.id,r.styles);for(let h of l){let u=document.createElement("style");a&&u.setAttribute("nonce",a),u.textContent=h,this.shadowRoot.appendChild(u)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,n){return super.insertBefore(this.nodeOrShadowRoot(t),e,n)}removeChild(t,e){return super.removeChild(this.nodeOrShadowRoot(t),e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Cr=class extends Ar{constructor(t,e,n,r,s,o,a,c){super(t,s,o,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r,this.styles=c?Mh(c,n.styles):n.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},xs=class extends Cr{constructor(t,e,n,r,s,o,a,c){let l=r+"-"+n.id;super(t,e,n,s,o,a,c,l),this.contentAttr=Cf(l),this.hostAttr=Rf(l)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,e){let n=super.createElement(t,e);return super.setAttribute(n,this.contentAttr,""),n}},Pf=(()=>{let t=class t extends _s{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,s){return n.addEventListener(r,s,!1),()=>this.removeEventListener(n,r,s)}removeEventListener(n,r,s){return n.removeEventListener(r,s)}};t.\u0275fac=function(r){return new(r||t)(ae(Ne))},t.\u0275prov=ee({token:t,factory:t.\u0275fac});let i=t;return i})(),vh=["alt","control","meta","shift"],If={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Lf={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey},Df=(()=>{let t=class t extends _s{constructor(n){super(n)}supports(n){return t.parseEventName(n)!=null}addEventListener(n,r,s){let o=t.parseEventName(r),a=t.eventCallback(o.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>oa().onAndCancel(n,o.domEventName,a))}static parseEventName(n){let r=n.toLowerCase().split("."),s=r.shift();if(r.length===0||!(s==="keydown"||s==="keyup"))return null;let o=t._normalizeKey(r.pop()),a="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),a="code."),vh.forEach(h=>{let u=r.indexOf(h);u>-1&&(r.splice(u,1),a+=h+".")}),a+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=s,l.fullKey=a,l}static matchEventFullKeyCode(n,r){let s=If[n.key]||n.key,o="";return r.indexOf("code.")>-1&&(s=n.code,o="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),vh.forEach(a=>{if(a!==s){let c=Lf[a];c(n)&&(o+=a+".")}}),o+=s,o===r)}static eventCallback(n,r,s){return o=>{t.matchEventFullKeyCode(o,n)&&s.runGuarded(()=>r(o))}}static _normalizeKey(n){return n==="esc"?"escape":n}};t.\u0275fac=function(r){return new(r||t)(ae(Ne))},t.\u0275prov=ee({token:t,factory:t.\u0275fac});let i=t;return i})();function Sh(i,t){return ch(wt({rootComponent:i},Nf(t)))}function Nf(i){return{appProviders:[...zf,...i?.providers??[]],platformProviders:Bf}}function Uf(){ua.makeCurrent()}function Of(){return new Qo}function Ff(){return $l(document),document}var Bf=[{provide:Kn,useValue:dh},{provide:jl,useValue:Uf,multi:!0},{provide:Ne,useFactory:Ff,deps:[]}];var zf=[{provide:ql,useValue:"root"},{provide:Qo,useFactory:Of,deps:[]},{provide:da,useClass:Pf,multi:!0,deps:[Ne,Ke,Kn]},{provide:da,useClass:Df,multi:!0,deps:[Ne]},ys,yh,_h,{provide:ms,useExisting:ys},{provide:ph,useClass:bf,deps:[]},[]];var bh=(()=>{let t=class t{constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}};t.\u0275fac=function(r){return new(r||t)(ae(Ne))},t.\u0275prov=ee({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var kt="primary",Gr=Symbol("RouteTitle"),Ma=class{constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let e=this.params[t];return Array.isArray(e)?e[0]:e}return null}getAll(t){if(this.has(t)){let e=this.params[t];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Pi(i){return new Ma(i)}function Vf(i,t,e){let n=e.path.split("/");if(n.length>i.length||e.pathMatch==="full"&&(t.hasChildren()||n.length<i.length))return null;let r={};for(let s=0;s<n.length;s++){let o=n[s],a=i[s];if(o.startsWith(":"))r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:i.slice(0,n.length),posParams:r}}function Hf(i,t){if(i.length!==t.length)return!1;for(let e=0;e<i.length;++e)if(!un(i[e],t[e]))return!1;return!0}function un(i,t){let e=i?Sa(i):void 0,n=t?Sa(t):void 0;if(!e||!n||e.length!=n.length)return!1;let r;for(let s=0;s<e.length;s++)if(r=e[s],!Rh(i[r],t[r]))return!1;return!0}function Sa(i){return[...Object.keys(i),...Object.getOwnPropertySymbols(i)]}function Rh(i,t){if(Array.isArray(i)&&Array.isArray(t)){if(i.length!==t.length)return!1;let e=[...i].sort(),n=[...t].sort();return e.every((r,s)=>n[s]===r)}else return i===t}function Ph(i){return i.length>0?i[i.length-1]:null}function Nn(i){return Ol(i)?i:eh(i)?Je(Promise.resolve(i)):Bt(i)}var Gf={exact:Lh,subset:Dh},Ih={exact:Wf,subset:Xf,ignored:()=>!0};function Eh(i,t,e){return Gf[e.paths](i.root,t.root,e.matrixParams)&&Ih[e.queryParams](i.queryParams,t.queryParams)&&!(e.fragment==="exact"&&i.fragment!==t.fragment)}function Wf(i,t){return un(i,t)}function Lh(i,t,e){if(!ei(i.segments,t.segments)||!bs(i.segments,t.segments,e)||i.numberOfChildren!==t.numberOfChildren)return!1;for(let n in t.children)if(!i.children[n]||!Lh(i.children[n],t.children[n],e))return!1;return!0}function Xf(i,t){return Object.keys(t).length<=Object.keys(i).length&&Object.keys(t).every(e=>Rh(i[e],t[e]))}function Dh(i,t,e){return Nh(i,t,t.segments,e)}function Nh(i,t,e,n){if(i.segments.length>e.length){let r=i.segments.slice(0,e.length);return!(!ei(r,e)||t.hasChildren()||!bs(r,e,n))}else if(i.segments.length===e.length){if(!ei(i.segments,e)||!bs(i.segments,e,n))return!1;for(let r in t.children)if(!i.children[r]||!Dh(i.children[r],t.children[r],n))return!1;return!0}else{let r=e.slice(0,i.segments.length),s=e.slice(i.segments.length);return!ei(i.segments,r)||!bs(i.segments,r,n)||!i.children[kt]?!1:Nh(i.children[kt],t,s,n)}}function bs(i,t,e){return t.every((n,r)=>Ih[e](i[r].parameters,n.parameters))}var Ln=class{constructor(t=new Kt([],{}),e={},n=null){this.root=t,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=Pi(this.queryParams),this._queryParamMap}toString(){return $f.serialize(this)}},Kt=class{constructor(t,e){this.segments=t,this.children=e,this.parent=null,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Es(this)}},ti=class{constructor(t,e){this.path=t,this.parameters=e}get parameterMap(){return this._parameterMap??=Pi(this.parameters),this._parameterMap}toString(){return Oh(this)}};function qf(i,t){return ei(i,t)&&i.every((e,n)=>un(e.parameters,t[n].parameters))}function ei(i,t){return i.length!==t.length?!1:i.every((e,n)=>e.path===t[n].path)}function Yf(i,t){let e=[];return Object.entries(i.children).forEach(([n,r])=>{n===kt&&(e=e.concat(t(r,n)))}),Object.entries(i.children).forEach(([n,r])=>{n!==kt&&(e=e.concat(t(r,n)))}),e}var $a=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=ee({token:t,factory:()=>new Ts,providedIn:"root"});let i=t;return i})(),Ts=class{parse(t){let e=new Ea(t);return new Ln(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(t){let e=`/${Rr(t.root,!0)}`,n=Jf(t.queryParams),r=typeof t.fragment=="string"?`#${jf(t.fragment)}`:"";return`${e}${n}${r}`}},$f=new Ts;function Es(i){return i.segments.map(t=>Oh(t)).join("/")}function Rr(i,t){if(!i.hasChildren())return Es(i);if(t){let e=i.children[kt]?Rr(i.children[kt],!1):"",n=[];return Object.entries(i.children).forEach(([r,s])=>{r!==kt&&n.push(`${r}:${Rr(s,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=Yf(i,(n,r)=>r===kt?[Rr(i.children[kt],!1)]:[`${r}:${Rr(n,!1)}`]);return Object.keys(i.children).length===1&&i.children[kt]!=null?`${Es(i)}/${e[0]}`:`${Es(i)}/(${e.join("//")})`}}function Uh(i){return encodeURIComponent(i).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ms(i){return Uh(i).replace(/%3B/gi,";")}function jf(i){return encodeURI(i)}function ba(i){return Uh(i).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ws(i){return decodeURIComponent(i)}function wh(i){return ws(i.replace(/\+/g,"%20"))}function Oh(i){return`${ba(i.path)}${Zf(i.parameters)}`}function Zf(i){return Object.entries(i).map(([t,e])=>`;${ba(t)}=${ba(e)}`).join("")}function Jf(i){let t=Object.entries(i).map(([e,n])=>Array.isArray(n)?n.map(r=>`${Ms(e)}=${Ms(r)}`).join("&"):`${Ms(e)}=${Ms(n)}`).filter(e=>e);return t.length?`?${t.join("&")}`:""}var Kf=/^[^\/()?;#]+/;function va(i){let t=i.match(Kf);return t?t[0]:""}var Qf=/^[^\/()?;=#]+/;function tp(i){let t=i.match(Qf);return t?t[0]:""}var ep=/^[^=?&#]+/;function np(i){let t=i.match(ep);return t?t[0]:""}var ip=/^[^&#]+/;function rp(i){let t=i.match(ip);return t?t[0]:""}var Ea=class{constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Kt([],{}):new Kt([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(t.length>0||Object.keys(e).length>0)&&(n[kt]=new Kt(t,e)),n}parseSegment(){let t=va(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new ue(4009,!1);return this.capture(t),new ti(ws(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let e=tp(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let r=va(this.remaining);r&&(n=r,this.capture(n))}t[ws(e)]=ws(n)}parseQueryParam(t){let e=np(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let o=rp(this.remaining);o&&(n=o,this.capture(n))}let r=wh(e),s=wh(n);if(t.hasOwnProperty(r)){let o=t[r];Array.isArray(o)||(o=[o],t[r]=o),o.push(s)}else t[r]=s}parseParens(t){let e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=va(this.remaining),r=this.remaining[n.length];if(r!=="/"&&r!==")"&&r!==";")throw new ue(4010,!1);let s;n.indexOf(":")>-1?(s=n.slice(0,n.indexOf(":")),this.capture(s),this.capture(":")):t&&(s=kt);let o=this.parseChildren();e[s]=Object.keys(o).length===1?o[kt]:new Kt([],o),this.consumeOptional("//")}return e}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new ue(4011,!1)}};function Fh(i){return i.segments.length>0?new Kt([],{[kt]:i}):i}function Bh(i){let t={};for(let[n,r]of Object.entries(i.children)){let s=Bh(r);if(n===kt&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))t[o]=a;else(s.segments.length>0||s.hasChildren())&&(t[n]=s)}let e=new Kt(i.segments,t);return sp(e)}function sp(i){if(i.numberOfChildren===1&&i.children[kt]){let t=i.children[kt];return new Kt(i.segments.concat(t.segments),t.children)}return i}function Ii(i){return i instanceof Ln}function op(i,t,e=null,n=null){let r=zh(i);return kh(r,t,e,n)}function zh(i){let t;function e(s){let o={};for(let c of s.children){let l=e(c);o[c.outlet]=l}let a=new Kt(s.url,o);return s===i&&(t=a),a}let n=e(i.root),r=Fh(n);return t??r}function kh(i,t,e,n){let r=i;for(;r.parent;)r=r.parent;if(t.length===0)return _a(r,r,r,e,n);let s=ap(t);if(s.toRoot())return _a(r,r,new Kt([],{}),e,n);let o=cp(s,r,i),a=o.processChildren?Lr(o.segmentGroup,o.index,s.commands):Hh(o.segmentGroup,o.index,s.commands);return _a(r,o.segmentGroup,a,e,n)}function As(i){return typeof i=="object"&&i!=null&&!i.outlets&&!i.segmentPath}function Ur(i){return typeof i=="object"&&i!=null&&i.outlets}function _a(i,t,e,n,r){let s={};n&&Object.entries(n).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(h=>`${h}`):`${l}`});let o;i===t?o=e:o=Vh(i,t,e);let a=Fh(Bh(o));return new Ln(a,s,r)}function Vh(i,t,e){let n={};return Object.entries(i.children).forEach(([r,s])=>{s===t?n[r]=e:n[r]=Vh(s,t,e)}),new Kt(i.segments,n)}var Cs=class{constructor(t,e,n){if(this.isAbsolute=t,this.numberOfDoubleDots=e,this.commands=n,t&&n.length>0&&As(n[0]))throw new ue(4003,!1);let r=n.find(Ur);if(r&&r!==Ph(n))throw new ue(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function ap(i){if(typeof i[0]=="string"&&i.length===1&&i[0]==="/")return new Cs(!0,0,i);let t=0,e=!1,n=i.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?e=!0:a===".."?t++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new Cs(e,t,n)}var Ci=class{constructor(t,e,n){this.segmentGroup=t,this.processChildren=e,this.index=n}};function cp(i,t,e){if(i.isAbsolute)return new Ci(t,!0,0);if(!e)return new Ci(t,!1,NaN);if(e.parent===null)return new Ci(e,!0,0);let n=As(i.commands[0])?0:1,r=e.segments.length-1+n;return lp(e,r,i.numberOfDoubleDots)}function lp(i,t,e){let n=i,r=t,s=e;for(;s>r;){if(s-=r,n=n.parent,!n)throw new ue(4005,!1);r=n.segments.length}return new Ci(n,!1,r-s)}function hp(i){return Ur(i[0])?i[0].outlets:{[kt]:i}}function Hh(i,t,e){if(i??=new Kt([],{}),i.segments.length===0&&i.hasChildren())return Lr(i,t,e);let n=up(i,t,e),r=e.slice(n.commandIndex);if(n.match&&n.pathIndex<i.segments.length){let s=new Kt(i.segments.slice(0,n.pathIndex),{});return s.children[kt]=new Kt(i.segments.slice(n.pathIndex),i.children),Lr(s,0,r)}else return n.match&&r.length===0?new Kt(i.segments,{}):n.match&&!i.hasChildren()?wa(i,t,e):n.match?Lr(i,0,r):wa(i,t,e)}function Lr(i,t,e){if(e.length===0)return new Kt(i.segments,{});{let n=hp(e),r={};if(Object.keys(n).some(s=>s!==kt)&&i.children[kt]&&i.numberOfChildren===1&&i.children[kt].segments.length===0){let s=Lr(i.children[kt],t,e);return new Kt(i.segments,s.children)}return Object.entries(n).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=Hh(i.children[s],t,o))}),Object.entries(i.children).forEach(([s,o])=>{n[s]===void 0&&(r[s]=o)}),new Kt(i.segments,r)}}function up(i,t,e){let n=0,r=t,s={match:!1,pathIndex:0,commandIndex:0};for(;r<i.segments.length;){if(n>=e.length)return s;let o=i.segments[r],a=e[n];if(Ur(a))break;let c=`${a}`,l=n<e.length-1?e[n+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!Ah(c,l,o))return s;n+=2}else{if(!Ah(c,{},o))return s;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function wa(i,t,e){let n=i.segments.slice(0,t),r=0;for(;r<e.length;){let s=e[r];if(Ur(s)){let c=dp(s.outlets);return new Kt(n,c)}if(r===0&&As(e[0])){let c=i.segments[t];n.push(new ti(c.path,Th(e[0]))),r++;continue}let o=Ur(s)?s.outlets[kt]:`${s}`,a=r<e.length-1?e[r+1]:null;o&&a&&As(a)?(n.push(new ti(o,Th(a))),r+=2):(n.push(new ti(o,{})),r++)}return new Kt(n,{})}function dp(i){let t={};return Object.entries(i).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(t[e]=wa(new Kt([],{}),0,n))}),t}function Th(i){let t={};return Object.entries(i).forEach(([e,n])=>t[e]=`${n}`),t}function Ah(i,t,e){return i==e.path&&un(t,e.parameters)}var Dr="imperative",Se=function(i){return i[i.NavigationStart=0]="NavigationStart",i[i.NavigationEnd=1]="NavigationEnd",i[i.NavigationCancel=2]="NavigationCancel",i[i.NavigationError=3]="NavigationError",i[i.RoutesRecognized=4]="RoutesRecognized",i[i.ResolveStart=5]="ResolveStart",i[i.ResolveEnd=6]="ResolveEnd",i[i.GuardsCheckStart=7]="GuardsCheckStart",i[i.GuardsCheckEnd=8]="GuardsCheckEnd",i[i.RouteConfigLoadStart=9]="RouteConfigLoadStart",i[i.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",i[i.ChildActivationStart=11]="ChildActivationStart",i[i.ChildActivationEnd=12]="ChildActivationEnd",i[i.ActivationStart=13]="ActivationStart",i[i.ActivationEnd=14]="ActivationEnd",i[i.Scroll=15]="Scroll",i[i.NavigationSkipped=16]="NavigationSkipped",i}(Se||{}),Ye=class{constructor(t,e){this.id=t,this.url=e}},Or=class extends Ye{constructor(t,e,n="imperative",r=null){super(t,e),this.type=Se.NavigationStart,this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ni=class extends Ye{constructor(t,e,n){super(t,e),this.urlAfterRedirects=n,this.type=Se.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},qe=function(i){return i[i.Redirect=0]="Redirect",i[i.SupersededByNewNavigation=1]="SupersededByNewNavigation",i[i.NoDataFromResolver=2]="NoDataFromResolver",i[i.GuardRejected=3]="GuardRejected",i}(qe||{}),Ta=function(i){return i[i.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",i[i.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",i}(Ta||{}),Dn=class extends Ye{constructor(t,e,n,r){super(t,e),this.reason=n,this.code=r,this.type=Se.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},ii=class extends Ye{constructor(t,e,n,r){super(t,e),this.reason=n,this.code=r,this.type=Se.NavigationSkipped}},Fr=class extends Ye{constructor(t,e,n,r){super(t,e),this.error=n,this.target=r,this.type=Se.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Rs=class extends Ye{constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r,this.type=Se.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Aa=class extends Ye{constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r,this.type=Se.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ca=class extends Ye{constructor(t,e,n,r,s){super(t,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=s,this.type=Se.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Ra=class extends Ye{constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r,this.type=Se.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Pa=class extends Ye{constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r,this.type=Se.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ia=class{constructor(t){this.route=t,this.type=Se.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},La=class{constructor(t){this.route=t,this.type=Se.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Da=class{constructor(t){this.snapshot=t,this.type=Se.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Na=class{constructor(t){this.snapshot=t,this.type=Se.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ua=class{constructor(t){this.snapshot=t,this.type=Se.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Oa=class{constructor(t){this.snapshot=t,this.type=Se.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Br=class{},zr=class{constructor(t){this.url=t}};var Fa=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new Us,this.attachRef=null}},Us=(()=>{let t=class t{constructor(){this.contexts=new Map}onChildOutletCreated(n,r){let s=this.getOrCreateContext(n);s.outlet=r,this.contexts.set(n,s)}onChildOutletDestroyed(n){let r=this.getContext(n);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let r=this.getContext(n);return r||(r=new Fa,this.contexts.set(n,r)),r}getContext(n){return this.contexts.get(n)||null}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=ee({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),Ps=class{constructor(t){this._root=t}get root(){return this._root.value}parent(t){let e=this.pathFromRoot(t);return e.length>1?e[e.length-2]:null}children(t){let e=Ba(t,this._root);return e?e.children.map(n=>n.value):[]}firstChild(t){let e=Ba(t,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(t){let e=za(t,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==t)}pathFromRoot(t){return za(t,this._root).map(e=>e.value)}};function Ba(i,t){if(i===t.value)return t;for(let e of t.children){let n=Ba(i,e);if(n)return n}return null}function za(i,t){if(i===t.value)return[t];for(let e of t.children){let n=za(i,e);if(n.length)return n.unshift(t),n}return[]}var Be=class{constructor(t,e){this.value=t,this.children=e}toString(){return`TreeNode(${this.value})`}};function Ai(i){let t={};return i&&i.children.forEach(e=>t[e.value.outlet]=e),t}var Is=class extends Ps{constructor(t,e){super(t),this.snapshot=e,Za(this,t)}toString(){return this.snapshot.toString()}};function Gh(i){let t=fp(i),e=new Ge([new ti("",{})]),n=new Ge({}),r=new Ge({}),s=new Ge({}),o=new Ge(""),a=new Li(e,n,s,o,r,kt,i,t.root);return a.snapshot=t.root,new Is(new Be(a,[]),t)}function fp(i){let t={},e={},n={},r="",s=new kr([],t,n,r,e,kt,i,null,{});return new Ls("",new Be(s,[]))}var Li=class{constructor(t,e,n,r,s,o,a,c){this.urlSubject=t,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(ie(l=>l[Gr]))??Bt(void 0),this.url=t,this.params=e,this.queryParams=n,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ie(t=>Pi(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ie(t=>Pi(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function ja(i,t,e="emptyOnly"){let n,{routeConfig:r}=i;return t!==null&&(e==="always"||r?.path===""||!t.component&&!t.routeConfig?.loadComponent)?n={params:wt(wt({},t.params),i.params),data:wt(wt({},t.data),i.data),resolve:wt(wt(wt(wt({},i.data),t.data),r?.data),i._resolvedData)}:n={params:wt({},i.params),data:wt({},i.data),resolve:wt(wt({},i.data),i._resolvedData??{})},r&&Xh(r)&&(n.resolve[Gr]=r.title),n}var kr=class{get title(){return this.data?.[Gr]}constructor(t,e,n,r,s,o,a,c,l){this.url=t,this.params=e,this.queryParams=n,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Pi(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Pi(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${e}')`}},Ls=class extends Ps{constructor(t,e){super(e),this.url=t,Za(this,e)}toString(){return Wh(this._root)}};function Za(i,t){t.value._routerState=i,t.children.forEach(e=>Za(i,e))}function Wh(i){let t=i.children.length>0?` { ${i.children.map(Wh).join(", ")} } `:"";return`${i.value}${t}`}function ya(i){if(i.snapshot){let t=i.snapshot,e=i._futureSnapshot;i.snapshot=e,un(t.queryParams,e.queryParams)||i.queryParamsSubject.next(e.queryParams),t.fragment!==e.fragment&&i.fragmentSubject.next(e.fragment),un(t.params,e.params)||i.paramsSubject.next(e.params),Hf(t.url,e.url)||i.urlSubject.next(e.url),un(t.data,e.data)||i.dataSubject.next(e.data)}else i.snapshot=i._futureSnapshot,i.dataSubject.next(i._futureSnapshot.data)}function ka(i,t){let e=un(i.params,t.params)&&qf(i.url,t.url),n=!i.parent!=!t.parent;return e&&!n&&(!i.parent||ka(i.parent,t.parent))}function Xh(i){return typeof i.title=="string"||i.title===null}var Ja=(()=>{let t=class t{constructor(){this.activated=null,this._activatedRoute=null,this.name=kt,this.activateEvents=new xr,this.deactivateEvents=new xr,this.attachEvents=new xr,this.detachEvents=new xr,this.parentContexts=zt(Us),this.location=zt(Kl),this.changeDetector=zt(ea),this.environmentInjector=zt(ps),this.inputBinder=zt(Ka,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(n){if(n.name){let{firstChange:r,previousValue:s}=n.name;if(r)return;this.isTrackedInParentContexts(s)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(s)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(n){return this.parentContexts.getContext(n)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let n=this.parentContexts.getContext(this.name);n?.route&&(n.attachRef?this.attach(n.attachRef,n.route):this.activateWith(n.route,n.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new ue(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new ue(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new ue(4012,!1);this.location.detach();let n=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(n.instance),n}attach(n,r){this.activated=n,this._activatedRoute=r,this.location.insert(n.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(n.instance)}deactivate(){if(this.activated){let n=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(n)}}activateWith(n,r){if(this.isActivated)throw new ue(4013,!1);this._activatedRoute=n;let s=this.location,a=n.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new Va(n,c,s.injector);this.activated=s.createComponent(a,{index:s.length,injector:l,environmentInjector:r??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};t.\u0275fac=function(r){return new(r||t)},t.\u0275dir=fs({type:t,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[Xl]});let i=t;return i})(),Va=class{constructor(t,e,n){this.route=t,this.childContexts=e,this.parent=n}get(t,e){return t===Li?this.route:t===Us?this.childContexts:this.parent.get(t,e)}},Ka=new Xe("");function pp(i,t,e){let n=Vr(i,t._root,e?e._root:void 0);return new Is(n,t)}function Vr(i,t,e){if(e&&i.shouldReuseRoute(t.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=t.value;let r=mp(i,t,e);return new Be(n,r)}else{if(i.shouldAttach(t.value)){let s=i.retrieve(t.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=t.value,o.children=t.children.map(a=>Vr(i,a)),o}}let n=gp(t.value),r=t.children.map(s=>Vr(i,s));return new Be(n,r)}}function mp(i,t,e){return t.children.map(n=>{for(let r of e.children)if(i.shouldReuseRoute(n.value,r.value.snapshot))return Vr(i,n,r);return Vr(i,n)})}function gp(i){return new Li(new Ge(i.url),new Ge(i.params),new Ge(i.queryParams),new Ge(i.fragment),new Ge(i.data),i.outlet,i.component,i)}var qh="ngNavigationCancelingError";function Yh(i,t){let{redirectTo:e,navigationBehaviorOptions:n}=Ii(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,r=$h(!1,qe.Redirect);return r.url=e,r.navigationBehaviorOptions=n,r}function $h(i,t){let e=new Error(`NavigationCancelingError: ${i||""}`);return e[qh]=!0,e.cancellationCode=t,e}function vp(i){return jh(i)&&Ii(i.url)}function jh(i){return!!i&&i[qh]}var _p=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=ln({type:t,selectors:[["ng-component"]],standalone:!0,features:[hn],decls:1,vars:0,template:function(r,s){r&1&&In(0,"router-outlet")},dependencies:[Ja],encapsulation:2});let i=t;return i})();function yp(i,t){return i.providers&&!i._injector&&(i._injector=sh(i.providers,t,`Route: ${i.path}`)),i._injector??t}function Qa(i){let t=i.children&&i.children.map(Qa),e=t?Re(wt({},i),{children:t}):wt({},i);return!e.component&&!e.loadComponent&&(t||e.loadChildren)&&e.outlet&&e.outlet!==kt&&(e.component=_p),e}function dn(i){return i.outlet||kt}function xp(i,t){let e=i.filter(n=>dn(n)===t);return e.push(...i.filter(n=>dn(n)!==t)),e}function Wr(i){if(!i)return null;if(i.routeConfig?._injector)return i.routeConfig._injector;for(let t=i.parent;t;t=t.parent){let e=t.routeConfig;if(e?._loadedInjector)return e._loadedInjector;if(e?._injector)return e._injector}return null}var Mp=(i,t,e,n)=>ie(r=>(new Ha(t,r.targetRouterState,r.currentRouterState,e,n).activate(i),r)),Ha=class{constructor(t,e,n,r,s){this.routeReuseStrategy=t,this.futureState=e,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=s}activate(t){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,t),ya(this.futureState.root),this.activateChildRoutes(e,n,t)}deactivateChildRoutes(t,e,n){let r=Ai(e);t.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],n),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,n)})}deactivateRoutes(t,e,n){let r=t.value,s=e?e.value:null;if(r===s)if(r.component){let o=n.getContext(r.outlet);o&&this.deactivateChildRoutes(t,e,o.children)}else this.deactivateChildRoutes(t,e,n);else s&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(t,e){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,e):this.deactivateRouteAndOutlet(t,e)}detachAndStoreRouteSubtree(t,e){let n=e.getContext(t.value.outlet),r=n&&t.value.component?n.children:e,s=Ai(t);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(n&&n.outlet){let o=n.outlet.detach(),a=n.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:o,route:t,contexts:a})}}deactivateRouteAndOutlet(t,e){let n=e.getContext(t.value.outlet),r=n&&t.value.component?n.children:e,s=Ai(t);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(t,e,n){let r=Ai(e);t.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],n),this.forwardEvent(new Oa(s.value.snapshot))}),t.children.length&&this.forwardEvent(new Na(t.value.snapshot))}activateRoutes(t,e,n){let r=t.value,s=e?e.value:null;if(ya(r),r===s)if(r.component){let o=n.getOrCreateContext(r.outlet);this.activateChildRoutes(t,e,o.children)}else this.activateChildRoutes(t,e,n);else if(r.component){let o=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),ya(a.route.value),this.activateChildRoutes(t,null,o.children)}else{let a=Wr(r.snapshot);o.attachRef=null,o.route=r,o.injector=a,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(t,null,o.children)}}else this.activateChildRoutes(t,null,n)}},Ds=class{constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},Ri=class{constructor(t,e){this.component=t,this.route=e}};function Sp(i,t,e){let n=i._root,r=t?t._root:null;return Pr(n,r,e,[n.value])}function bp(i){let t=i.routeConfig?i.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:i,guards:t}}function Ni(i,t){let e=Symbol(),n=t.get(i,e);return n===e?typeof i=="function"&&!Wl(i)?i:t.get(i):n}function Pr(i,t,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Ai(t);return i.children.forEach(o=>{Ep(o,s[o.value.outlet],e,n.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>Nr(a,e.getContext(o),r)),r}function Ep(i,t,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=i.value,o=t?t.value:null,a=e?e.getContext(i.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=wp(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Ds(n)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Pr(i,t,a?a.children:null,n,r):Pr(i,t,e,n,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Ri(a.outlet.component,o))}else o&&Nr(t,a,r),r.canActivateChecks.push(new Ds(n)),s.component?Pr(i,null,a?a.children:null,n,r):Pr(i,null,e,n,r);return r}function wp(i,t,e){if(typeof e=="function")return e(i,t);switch(e){case"pathParamsChange":return!ei(i.url,t.url);case"pathParamsOrQueryParamsChange":return!ei(i.url,t.url)||!un(i.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!ka(i,t)||!un(i.queryParams,t.queryParams);case"paramsChange":default:return!ka(i,t)}}function Nr(i,t,e){let n=Ai(i),r=i.value;Object.entries(n).forEach(([s,o])=>{r.component?t?Nr(o,t.children.getContext(s),e):Nr(o,null,e):Nr(o,t,e)}),r.component?t&&t.outlet&&t.outlet.isActivated?e.canDeactivateChecks.push(new Ri(t.outlet.component,r)):e.canDeactivateChecks.push(new Ri(null,r)):e.canDeactivateChecks.push(new Ri(null,r))}function Xr(i){return typeof i=="function"}function Tp(i){return typeof i=="boolean"}function Ap(i){return i&&Xr(i.canLoad)}function Cp(i){return i&&Xr(i.canActivate)}function Rp(i){return i&&Xr(i.canActivateChild)}function Pp(i){return i&&Xr(i.canDeactivate)}function Ip(i){return i&&Xr(i.canMatch)}function Zh(i){return i instanceof Fl||i?.name==="EmptyError"}var Ss=Symbol("INITIAL_VALUE");function Di(){return cn(i=>Wo(i.map(t=>t.pipe(wi(1),Hl(Ss)))).pipe(ie(t=>{for(let e of t)if(e!==!0){if(e===Ss)return Ss;if(e===!1||e instanceof Ln)return e}return!0}),bi(t=>t!==Ss),wi(1)))}function Lp(i,t){return We(e=>{let{targetSnapshot:n,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=e;return o.length===0&&s.length===0?Bt(Re(wt({},e),{guardsResult:!0})):Dp(o,n,r,i).pipe(We(a=>a&&Tp(a)?Np(n,s,i,t):Bt(a)),ie(a=>Re(wt({},e),{guardsResult:a})))})}function Dp(i,t,e,n){return Je(i).pipe(We(r=>zp(r.component,r.route,e,t,n)),Pn(r=>r!==!0,!0))}function Np(i,t,e,n){return Je(t).pipe(mr(r=>Bl(Op(r.route.parent,n),Up(r.route,n),Bp(i,r.path,e),Fp(i,r.route,e))),Pn(r=>r!==!0,!0))}function Up(i,t){return i!==null&&t&&t(new Ua(i)),Bt(!0)}function Op(i,t){return i!==null&&t&&t(new Da(i)),Bt(!0)}function Fp(i,t,e){let n=t.routeConfig?t.routeConfig.canActivate:null;if(!n||n.length===0)return Bt(!0);let r=n.map(s=>Xo(()=>{let o=Wr(t)??e,a=Ni(s,o),c=Cp(a)?a.canActivate(t,i):Jn(o,()=>a(t,i));return Nn(c).pipe(Pn())}));return Bt(r).pipe(Di())}function Bp(i,t,e){let n=t[t.length-1],s=t.slice(0,t.length-1).reverse().map(o=>bp(o)).filter(o=>o!==null).map(o=>Xo(()=>{let a=o.guards.map(c=>{let l=Wr(o.node)??e,h=Ni(c,l),u=Rp(h)?h.canActivateChild(n,i):Jn(l,()=>h(n,i));return Nn(u).pipe(Pn())});return Bt(a).pipe(Di())}));return Bt(s).pipe(Di())}function zp(i,t,e,n,r){let s=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!s||s.length===0)return Bt(!0);let o=s.map(a=>{let c=Wr(t)??r,l=Ni(a,c),h=Pp(l)?l.canDeactivate(i,t,e,n):Jn(c,()=>l(i,t,e,n));return Nn(h).pipe(Pn())});return Bt(o).pipe(Di())}function kp(i,t,e,n){let r=t.canLoad;if(r===void 0||r.length===0)return Bt(!0);let s=r.map(o=>{let a=Ni(o,i),c=Ap(a)?a.canLoad(t,e):Jn(i,()=>a(t,e));return Nn(c)});return Bt(s).pipe(Di(),Jh(n))}function Jh(i){return Ul(Me(t=>{if(Ii(t))throw Yh(i,t)}),ie(t=>t===!0))}function Vp(i,t,e,n){let r=t.canMatch;if(!r||r.length===0)return Bt(!0);let s=r.map(o=>{let a=Ni(o,i),c=Ip(a)?a.canMatch(t,e):Jn(i,()=>a(t,e));return Nn(c)});return Bt(s).pipe(Di(),Jh(n))}var Hr=class{constructor(t){this.segmentGroup=t||null}},Ns=class extends Error{constructor(t){super(),this.urlTree=t}};function Ti(i){return pr(new Hr(i))}function Hp(i){return pr(new ue(4e3,!1))}function Gp(i){return pr($h(!1,qe.GuardRejected))}var Ga=class{constructor(t,e){this.urlSerializer=t,this.urlTree=e}lineralizeSegments(t,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return Bt(n);if(r.numberOfChildren>1||!r.children[kt])return Hp(t.redirectTo);r=r.children[kt]}}applyRedirectCommands(t,e,n){let r=this.applyRedirectCreateUrlTree(e,this.urlSerializer.parse(e),t,n);if(e.startsWith("/"))throw new Ns(r);return r}applyRedirectCreateUrlTree(t,e,n,r){let s=this.createSegmentGroup(t,e.root,n,r);return new Ln(s,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(t,e){let n={};return Object.entries(t).forEach(([r,s])=>{if(typeof s=="string"&&s.startsWith(":")){let a=s.substring(1);n[r]=e[a]}else n[r]=s}),n}createSegmentGroup(t,e,n,r){let s=this.createSegments(t,e.segments,n,r),o={};return Object.entries(e.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(t,c,n,r)}),new Kt(s,o)}createSegments(t,e,n,r){return e.map(s=>s.path.startsWith(":")?this.findPosParam(t,s,r):this.findOrReturn(s,n))}findPosParam(t,e,n){let r=n[e.path.substring(1)];if(!r)throw new ue(4001,!1);return r}findOrReturn(t,e){let n=0;for(let r of e){if(r.path===t.path)return e.splice(n),r;n++}return t}},Wa={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Wp(i,t,e,n,r){let s=tc(i,t,e);return s.matched?(n=yp(t,n),Vp(n,t,e,r).pipe(ie(o=>o===!0?s:wt({},Wa)))):Bt(s)}function tc(i,t,e){if(t.path==="**")return Xp(e);if(t.path==="")return t.pathMatch==="full"&&(i.hasChildren()||e.length>0)?wt({},Wa):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(t.matcher||Vf)(e,i,t);if(!r)return wt({},Wa);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?wt(wt({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function Xp(i){return{matched:!0,parameters:i.length>0?Ph(i).parameters:{},consumedSegments:i,remainingSegments:[],positionalParamSegments:{}}}function Ch(i,t,e,n){return e.length>0&&$p(i,e,n)?{segmentGroup:new Kt(t,Yp(n,new Kt(e,i.children))),slicedSegments:[]}:e.length===0&&jp(i,e,n)?{segmentGroup:new Kt(i.segments,qp(i,e,n,i.children)),slicedSegments:e}:{segmentGroup:new Kt(i.segments,i.children),slicedSegments:e}}function qp(i,t,e,n){let r={};for(let s of e)if(Os(i,t,s)&&!n[dn(s)]){let o=new Kt([],{});r[dn(s)]=o}return wt(wt({},n),r)}function Yp(i,t){let e={};e[kt]=t;for(let n of i)if(n.path===""&&dn(n)!==kt){let r=new Kt([],{});e[dn(n)]=r}return e}function $p(i,t,e){return e.some(n=>Os(i,t,n)&&dn(n)!==kt)}function jp(i,t,e){return e.some(n=>Os(i,t,n))}function Os(i,t,e){return(i.hasChildren()||t.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Zp(i,t,e,n){return dn(i)!==n&&(n===kt||!Os(t,e,i))?!1:tc(t,i,e).matched}function Jp(i,t,e){return t.length===0&&!i.children[e]}var Xa=class{};function Kp(i,t,e,n,r,s,o="emptyOnly"){return new qa(i,t,e,n,r,o,s).recognize()}var Qp=31,qa=class{constructor(t,e,n,r,s,o,a){this.injector=t,this.configLoader=e,this.rootComponentType=n,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new Ga(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(t){return new ue(4002,`'${t.segmentGroup}'`)}recognize(){let t=Ch(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(t).pipe(ie(e=>{let n=new kr([],Object.freeze({}),Object.freeze(wt({},this.urlTree.queryParams)),this.urlTree.fragment,{},kt,this.rootComponentType,null,{}),r=new Be(n,e),s=new Ls("",r),o=op(n,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),this.inheritParamsAndData(s._root,null),{state:s,tree:o}}))}match(t){return this.processSegmentGroup(this.injector,this.config,t,kt).pipe(Ei(n=>{if(n instanceof Ns)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof Hr?this.noMatchError(n):n}))}inheritParamsAndData(t,e){let n=t.value,r=ja(n,e,this.paramsInheritanceStrategy);n.params=Object.freeze(r.params),n.data=Object.freeze(r.data),t.children.forEach(s=>this.inheritParamsAndData(s,n))}processSegmentGroup(t,e,n,r){return n.segments.length===0&&n.hasChildren()?this.processChildren(t,e,n):this.processSegment(t,e,n,n.segments,r,!0).pipe(ie(s=>s instanceof Be?[s]:[]))}processChildren(t,e,n){let r=[];for(let s of Object.keys(n.children))s==="primary"?r.unshift(s):r.push(s);return Je(r).pipe(mr(s=>{let o=n.children[s],a=xp(e,s);return this.processSegmentGroup(t,a,o,s)}),Vl((s,o)=>(s.push(...o),s)),qo(null),kl(),We(s=>{if(s===null)return Ti(n);let o=Kh(s);return tm(o),Bt(o)}))}processSegment(t,e,n,r,s,o){return Je(e).pipe(mr(a=>this.processSegmentAgainstRoute(a._injector??t,e,a,n,r,s,o).pipe(Ei(c=>{if(c instanceof Hr)return Bt(null);throw c}))),Pn(a=>!!a),Ei(a=>{if(Zh(a))return Jp(n,r,s)?Bt(new Xa):Ti(n);throw a}))}processSegmentAgainstRoute(t,e,n,r,s,o,a){return Zp(n,r,s,o)?n.redirectTo===void 0?this.matchSegmentAgainstRoute(t,r,n,s,o):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(t,r,e,n,s,o):Ti(r):Ti(r)}expandSegmentAgainstRouteUsingRedirect(t,e,n,r,s,o){let{matched:a,consumedSegments:c,positionalParamSegments:l,remainingSegments:h}=tc(e,r,s);if(!a)return Ti(e);r.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Qp&&(this.allowRedirects=!1));let u=this.applyRedirects.applyRedirectCommands(c,r.redirectTo,l);return this.applyRedirects.lineralizeSegments(r,u).pipe(We(f=>this.processSegment(t,n,e,f.concat(h),o,!1)))}matchSegmentAgainstRoute(t,e,n,r,s){let o=Wp(e,n,r,t,this.urlSerializer);return n.path==="**"&&(e.children={}),o.pipe(cn(a=>a.matched?(t=n._injector??t,this.getChildConfig(t,n,r).pipe(cn(({routes:c})=>{let l=n._loadedInjector??t,{consumedSegments:h,remainingSegments:u,parameters:f}=a,m=new kr(h,f,Object.freeze(wt({},this.urlTree.queryParams)),this.urlTree.fragment,nm(n),dn(n),n.component??n._loadedComponent??null,n,im(n)),{segmentGroup:v,slicedSegments:y}=Ch(e,h,u,c);if(y.length===0&&v.hasChildren())return this.processChildren(l,c,v).pipe(ie(d=>d===null?null:new Be(m,d)));if(c.length===0&&y.length===0)return Bt(new Be(m,[]));let p=dn(n)===s;return this.processSegment(l,c,v,y,p?kt:s,!0).pipe(ie(d=>new Be(m,d instanceof Be?[d]:[])))}))):Ti(e)))}getChildConfig(t,e,n){return e.children?Bt({routes:e.children,injector:t}):e.loadChildren?e._loadedRoutes!==void 0?Bt({routes:e._loadedRoutes,injector:e._loadedInjector}):kp(t,e,n,this.urlSerializer).pipe(We(r=>r?this.configLoader.loadChildren(t,e).pipe(Me(s=>{e._loadedRoutes=s.routes,e._loadedInjector=s.injector})):Gp(e))):Bt({routes:[],injector:t})}};function tm(i){i.sort((t,e)=>t.value.outlet===kt?-1:e.value.outlet===kt?1:t.value.outlet.localeCompare(e.value.outlet))}function em(i){let t=i.value.routeConfig;return t&&t.path===""}function Kh(i){let t=[],e=new Set;for(let n of i){if(!em(n)){t.push(n);continue}let r=t.find(s=>n.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...n.children),e.add(r)):t.push(n)}for(let n of e){let r=Kh(n.children);t.push(new Be(n.value,r))}return t.filter(n=>!e.has(n))}function nm(i){return i.data||{}}function im(i){return i.resolve||{}}function rm(i,t,e,n,r,s){return We(o=>Kp(i,t,e,n,o.extractedUrl,r,s).pipe(ie(({state:a,tree:c})=>Re(wt({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function sm(i,t){return We(e=>{let{targetSnapshot:n,guards:{canActivateChecks:r}}=e;if(!r.length)return Bt(e);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of Qh(c))o.add(l);let a=0;return Je(o).pipe(mr(c=>s.has(c)?om(c,n,i,t):(c.data=ja(c,c.parent,i).resolve,Bt(void 0))),Me(()=>a++),Yo(1),We(c=>a===o.size?Bt(e):Zn))})}function Qh(i){let t=i.children.map(e=>Qh(e)).flat();return[i,...t]}function om(i,t,e,n){let r=i.routeConfig,s=i._resolve;return r?.title!==void 0&&!Xh(r)&&(s[Gr]=r.title),am(s,i,t,n).pipe(ie(o=>(i._resolvedData=o,i.data=ja(i,i.parent,e).resolve,null)))}function am(i,t,e,n){let r=Sa(i);if(r.length===0)return Bt({});let s={};return Je(r).pipe(We(o=>cm(i[o],t,e,n).pipe(Pn(),Me(a=>{s[o]=a}))),Yo(1),zl(s),Ei(o=>Zh(o)?Zn:pr(o)))}function cm(i,t,e,n){let r=Wr(t)??n,s=Ni(i,r),o=s.resolve?s.resolve(t,e):Jn(r,()=>s(t,e));return Nn(o)}function xa(i){return cn(t=>{let e=i(t);return e?Je(e).pipe(ie(()=>t)):Bt(t)})}var tu=(()=>{let t=class t{buildTitle(n){let r,s=n.root;for(;s!==void 0;)r=this.getResolvedTitleForRoute(s)??r,s=s.children.find(o=>o.outlet===kt);return r}getResolvedTitleForRoute(n){return n.data[Gr]}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=ee({token:t,factory:()=>zt(lm),providedIn:"root"});let i=t;return i})(),lm=(()=>{let t=class t extends tu{constructor(n){super(),this.title=n}updateTitle(n){let r=this.buildTitle(n);r!==void 0&&this.title.setTitle(r)}};t.\u0275fac=function(r){return new(r||t)(ae(bh))},t.\u0275prov=ee({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),ec=new Xe("",{providedIn:"root",factory:()=>({})}),nc=new Xe(""),hm=(()=>{let t=class t{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=zt(ra)}loadComponent(n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Bt(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let r=Nn(n.loadComponent()).pipe(ie(eu),Me(o=>{this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=o}),us(()=>{this.componentLoaders.delete(n)})),s=new Go(r,()=>new jn).pipe(Ho());return this.componentLoaders.set(n,s),s}loadChildren(n,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Bt({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let o=um(r,this.compiler,n,this.onLoadEndListener).pipe(us(()=>{this.childrenLoaders.delete(r)})),a=new Go(o,()=>new jn).pipe(Ho());return this.childrenLoaders.set(r,a),a}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=ee({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();function um(i,t,e,n){return Nn(i.loadChildren()).pipe(ie(eu),We(r=>r instanceof rh||Array.isArray(r)?Bt(r):Je(t.compileModuleAsync(r))),ie(r=>{n&&n(i);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(e).injector,o=s.get(nc,[],{optional:!0,self:!0}).flat()),{routes:o.map(Qa),injector:s}}))}function dm(i){return i&&typeof i=="object"&&"default"in i}function eu(i){return dm(i)?i.default:i}var ic=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=ee({token:t,factory:()=>zt(fm),providedIn:"root"});let i=t;return i})(),fm=(()=>{let t=class t{shouldProcessUrl(n){return!0}extract(n){return n}merge(n,r){return n}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=ee({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),pm=new Xe("");var mm=(()=>{let t=class t{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new jn,this.transitionAbortSubject=new jn,this.configLoader=zt(hm),this.environmentInjector=zt(ps),this.urlSerializer=zt($a),this.rootContexts=zt(Us),this.location=zt(vs),this.inputBindingEnabled=zt(Ka,{optional:!0})!==null,this.titleStrategy=zt(tu),this.options=zt(ec,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=zt(ic),this.createViewTransition=zt(pm,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>Bt(void 0),this.rootComponentType=null;let n=s=>this.events.next(new Ia(s)),r=s=>this.events.next(new La(s));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=n}complete(){this.transitions?.complete()}handleNavigationRequest(n){let r=++this.navigationId;this.transitions?.next(Re(wt(wt({},this.transitions.value),n),{id:r}))}setupNavigations(n,r,s){return this.transitions=new Ge({id:0,currentUrlTree:r,currentRawUrl:r,extractedUrl:this.urlHandlingStrategy.extract(r),urlAfterRedirects:this.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:Dr,restoredState:null,currentSnapshot:s.snapshot,targetSnapshot:null,currentRouterState:s,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(bi(o=>o.id!==0),ie(o=>Re(wt({},o),{extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),cn(o=>{this.currentTransition=o;let a=!1,c=!1;return Bt(o).pipe(Me(l=>{this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?Re(wt({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),cn(l=>{let h=!n.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=l.extras.onSameUrlNavigation??n.onSameUrlNavigation;if(!h&&u!=="reload"){let f="";return this.events.next(new ii(l.id,this.urlSerializer.serialize(l.rawUrl),f,Ta.IgnoredSameUrlNavigation)),l.resolve(null),Zn}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return Bt(l).pipe(cn(f=>{let m=this.transitions?.getValue();return this.events.next(new Or(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),m!==this.transitions?.getValue()?Zn:Promise.resolve(f)}),rm(this.environmentInjector,this.configLoader,this.rootComponentType,n.config,this.urlSerializer,this.paramsInheritanceStrategy),Me(f=>{o.targetSnapshot=f.targetSnapshot,o.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation=Re(wt({},this.currentNavigation),{finalUrl:f.urlAfterRedirects});let m=new Rs(f.id,this.urlSerializer.serialize(f.extractedUrl),this.urlSerializer.serialize(f.urlAfterRedirects),f.targetSnapshot);this.events.next(m)}));if(h&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:f,extractedUrl:m,source:v,restoredState:y,extras:p}=l,d=new Or(f,this.urlSerializer.serialize(m),v,y);this.events.next(d);let A=Gh(this.rootComponentType).snapshot;return this.currentTransition=o=Re(wt({},l),{targetSnapshot:A,urlAfterRedirects:m,extras:Re(wt({},p),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=m,Bt(o)}else{let f="";return this.events.next(new ii(l.id,this.urlSerializer.serialize(l.extractedUrl),f,Ta.IgnoredByUrlHandlingStrategy)),l.resolve(null),Zn}}),Me(l=>{let h=new Aa(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(h)}),ie(l=>(this.currentTransition=o=Re(wt({},l),{guards:Sp(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),o)),Lp(this.environmentInjector,l=>this.events.next(l)),Me(l=>{if(o.guardsResult=l.guardsResult,Ii(l.guardsResult))throw Yh(this.urlSerializer,l.guardsResult);let h=new Ca(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(h)}),bi(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",qe.GuardRejected),!1)),xa(l=>{if(l.guards.canActivateChecks.length)return Bt(l).pipe(Me(h=>{let u=new Ra(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(u)}),cn(h=>{let u=!1;return Bt(h).pipe(sm(this.paramsInheritanceStrategy,this.environmentInjector),Me({next:()=>u=!0,complete:()=>{u||this.cancelNavigationTransition(h,"",qe.NoDataFromResolver)}}))}),Me(h=>{let u=new Pa(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(u)}))}),xa(l=>{let h=u=>{let f=[];u.routeConfig?.loadComponent&&!u.routeConfig._loadedComponent&&f.push(this.configLoader.loadComponent(u.routeConfig).pipe(Me(m=>{u.component=m}),ie(()=>{})));for(let m of u.children)f.push(...h(m));return f};return Wo(h(l.targetSnapshot.root)).pipe(qo(null),wi(1))}),xa(()=>this.afterPreactivation()),cn(()=>{let{currentSnapshot:l,targetSnapshot:h}=o,u=this.createViewTransition?.(this.environmentInjector,l.root,h.root);return u?Je(u).pipe(ie(()=>o)):Bt(o)}),ie(l=>{let h=pp(n.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=o=Re(wt({},l),{targetRouterState:h}),this.currentNavigation.targetRouterState=h,o}),Me(()=>{this.events.next(new Br)}),Mp(this.rootContexts,n.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),wi(1),Me({next:l=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new ni(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{a=!0}}),Gl(this.transitionAbortSubject.pipe(Me(l=>{throw l}))),us(()=>{!a&&!c&&this.cancelNavigationTransition(o,"",qe.SupersededByNewNavigation),this.currentNavigation?.id===o.id&&(this.currentNavigation=null)}),Ei(l=>{if(c=!0,jh(l))this.events.next(new Dn(o.id,this.urlSerializer.serialize(o.extractedUrl),l.message,l.cancellationCode)),vp(l)?this.events.next(new zr(l.url)):o.resolve(!1);else{this.events.next(new Fr(o.id,this.urlSerializer.serialize(o.extractedUrl),l,o.targetSnapshot??void 0));try{o.resolve(n.errorHandler(l))}catch(h){this.options.resolveNavigationPromiseOnError?o.resolve(!1):o.reject(h)}}return Zn}))}))}cancelNavigationTransition(n,r,s){let o=new Dn(n.id,this.urlSerializer.serialize(n.extractedUrl),r,s);this.events.next(o),n.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=ee({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();function gm(i){return i!==Dr}var vm=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=ee({token:t,factory:()=>zt(_m),providedIn:"root"});let i=t;return i})(),Ya=class{shouldDetach(t){return!1}store(t,e){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,e){return t.routeConfig===e.routeConfig}},_m=(()=>{let t=class t extends Ya{};t.\u0275fac=(()=>{let n;return function(s){return(n||(n=jo(t)))(s||t)}})(),t.\u0275prov=ee({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),nu=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=ee({token:t,factory:()=>zt(ym),providedIn:"root"});let i=t;return i})(),ym=(()=>{let t=class t extends nu{constructor(){super(...arguments),this.location=zt(vs),this.urlSerializer=zt($a),this.options=zt(ec,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=zt(ic),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new Ln,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=Gh(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(n){return this.location.subscribe(r=>{r.type==="popstate"&&n(r.url,r.state)})}handleRouterEvent(n,r){if(n instanceof Or)this.stateMemento=this.createStateMemento();else if(n instanceof ii)this.rawUrlTree=r.initialUrl;else if(n instanceof Rs){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let s=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(s,r)}}else n instanceof Br?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,r))):n instanceof Dn&&(n.code===qe.GuardRejected||n.code===qe.NoDataFromResolver)?this.restoreHistory(r):n instanceof Fr?this.restoreHistory(r,!0):n instanceof ni&&(this.lastSuccessfulId=n.id,this.currentPageId=this.browserPageId)}setBrowserUrl(n,r){let s=this.urlSerializer.serialize(n);if(this.location.isCurrentPathEqualTo(s)||r.extras.replaceUrl){let o=this.browserPageId,a=wt(wt({},r.extras.state),this.generateNgRouterState(r.id,o));this.location.replaceState(s,"",a)}else{let o=wt(wt({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(s,"",o)}}restoreHistory(n,r=!1){if(this.canceledNavigationResolution==="computed"){let s=this.browserPageId,o=this.currentPageId-s;o!==0?this.location.historyGo(o):this.currentUrlTree===n.finalUrl&&o===0&&(this.resetState(n),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(n),this.resetUrlToCurrentUrlTree())}resetState(n){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(n,r){return this.canceledNavigationResolution==="computed"?{navigationId:n,\u0275routerPageId:r}:{navigationId:n}}};t.\u0275fac=(()=>{let n;return function(s){return(n||(n=jo(t)))(s||t)}})(),t.\u0275prov=ee({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),Ir=function(i){return i[i.COMPLETE=0]="COMPLETE",i[i.FAILED=1]="FAILED",i[i.REDIRECTING=2]="REDIRECTING",i}(Ir||{});function xm(i,t){i.events.pipe(bi(e=>e instanceof ni||e instanceof Dn||e instanceof Fr||e instanceof ii),ie(e=>e instanceof ni||e instanceof ii?Ir.COMPLETE:(e instanceof Dn?e.code===qe.Redirect||e.code===qe.SupersededByNewNavigation:!1)?Ir.REDIRECTING:Ir.FAILED),bi(e=>e!==Ir.REDIRECTING),wi(1)).subscribe(()=>{t()})}function Mm(i){throw i}var Sm={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},bm={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},iu=(()=>{let t=class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=zt(gs),this.stateManager=zt(nu),this.options=zt(ec,{optional:!0})||{},this.pendingTasks=zt(oh),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=zt(mm),this.urlSerializer=zt($a),this.location=zt(vs),this.urlHandlingStrategy=zt(ic),this._events=new jn,this.errorHandler=this.options.errorHandler||Mm,this.navigated=!1,this.routeReuseStrategy=zt(vm),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=zt(nc,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!zt(Ka,{optional:!0}),this.eventsSubscription=new Nl,this.isNgZoneEnabled=zt(Ke)instanceof Ke&&Ke.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:n=>{this.console.warn(n)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let n=this.navigationTransitions.events.subscribe(r=>{try{let s=this.navigationTransitions.currentTransition,o=this.navigationTransitions.currentNavigation;if(s!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof Dn&&r.code!==qe.Redirect&&r.code!==qe.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof ni)this.navigated=!0;else if(r instanceof zr){let a=this.urlHandlingStrategy.merge(r.url,s.currentRawUrl),c={info:s.extras.info,skipLocationChange:s.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||gm(s.source)};this.scheduleNavigation(a,Dr,null,c,{resolve:s.resolve,reject:s.reject,promise:s.promise})}}wm(r)&&this._events.next(r)}catch(s){this.navigationTransitions.transitionAbortSubject.next(s)}});this.eventsSubscription.add(n)}resetRootComponentType(n){this.routerState.root.component=n,this.navigationTransitions.rootComponentType=n}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Dr,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((n,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(n,"popstate",r)},0)})}navigateToSyncWithBrowser(n,r,s){let o={replaceUrl:!0},a=s?.navigationId?s:null;if(s){let l=wt({},s);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(n);this.scheduleNavigation(c,r,a,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(n){this.config=n.map(Qa),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(n,r={}){let{relativeTo:s,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:l}=r,h=l?this.currentUrlTree.fragment:a,u=null;switch(c){case"merge":u=wt(wt({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let f;try{let m=s?s.snapshot:this.routerState.snapshot.root;f=zh(m)}catch{(typeof n[0]!="string"||!n[0].startsWith("/"))&&(n=[]),f=this.currentUrlTree.root}return kh(f,n,u,h??null)}navigateByUrl(n,r={skipLocationChange:!1}){let s=Ii(n)?n:this.parseUrl(n),o=this.urlHandlingStrategy.merge(s,this.rawUrlTree);return this.scheduleNavigation(o,Dr,null,r)}navigate(n,r={skipLocationChange:!1}){return Em(n),this.navigateByUrl(this.createUrlTree(n,r),r)}serializeUrl(n){return this.urlSerializer.serialize(n)}parseUrl(n){try{return this.urlSerializer.parse(n)}catch{return this.urlSerializer.parse("/")}}isActive(n,r){let s;if(r===!0?s=wt({},Sm):r===!1?s=wt({},bm):s=r,Ii(n))return Eh(this.currentUrlTree,n,s);let o=this.parseUrl(n);return Eh(this.currentUrlTree,o,s)}removeEmptyProps(n){return Object.entries(n).reduce((r,[s,o])=>(o!=null&&(r[s]=o),r),{})}scheduleNavigation(n,r,s,o,a){if(this.disposed)return Promise.resolve(!1);let c,l,h;a?(c=a.resolve,l=a.reject,h=a.promise):h=new Promise((f,m)=>{c=f,l=m});let u=this.pendingTasks.add();return xm(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:s,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:n,extras:o,resolve:c,reject:l,promise:h,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),h.catch(f=>Promise.reject(f))}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=ee({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();function Em(i){for(let t=0;t<i.length;t++)if(i[t]==null)throw new ue(4008,!1)}function wm(i){return!(i instanceof Br)&&!(i instanceof zr)}var Tm=new Xe("");function ru(i,...t){return vr([{provide:nc,multi:!0,useValue:i},[],{provide:Li,useFactory:Am,deps:[iu]},{provide:ah,multi:!0,useFactory:Cm},t.map(e=>e.\u0275providers)])}function Am(i){return i.routerState.root}function Cm(){let i=zt(Yl);return t=>{let e=i.get(sa);if(t!==e.components[0])return;let n=i.get(iu),r=i.get(Rm);i.get(Pm)===1&&n.initialNavigation(),i.get(Im,null,$o.Optional)?.setUpPreloading(),i.get(Tm,null,$o.Optional)?.init(),n.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Rm=new Xe("",{factory:()=>new jn}),Pm=new Xe("",{providedIn:"root",factory:()=>1});var Im=new Xe("");var su=[];var Lm="@",Dm=(()=>{let t=class t{constructor(n,r,s,o,a){this.doc=n,this.delegate=r,this.zone=s,this.animationType=o,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=zt(Jl,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-ULDJUYL6.js")).catch(r=>{throw new ue(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:s})=>{this._engine=r(this.animationType,this.doc,this.scheduler);let o=new s(this.delegate,this._engine,this.zone);return this.delegate=o,o})}createRenderer(n,r){let s=this.delegate.createRenderer(n,r);if(s.\u0275type===0)return s;typeof s.throwOnSyntheticProps=="boolean"&&(s.throwOnSyntheticProps=!1);let o=new rc(s);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let c=a.createRenderer(n,r);o.use(c)}).catch(a=>{o.use(s)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};t.\u0275fac=function(r){ta()},t.\u0275prov=ee({token:t,factory:t.\u0275fac});let i=t;return i})(),rc=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,n,r){this.delegate.insertBefore(t,e,n,r)}removeChild(t,e,n){this.delegate.removeChild(t,e,n)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,n,r){this.delegate.setAttribute(t,e,n,r)}removeAttribute(t,e,n){this.delegate.removeAttribute(t,e,n)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,n,r){this.delegate.setStyle(t,e,n,r)}removeStyle(t,e,n){this.delegate.removeStyle(t,e,n)}setProperty(t,e,n){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(t,e,n)),this.delegate.setProperty(t,e,n)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,n){return this.shouldReplay(e)&&this.replay.push(r=>r.listen(t,e,n)),this.delegate.listen(t,e,n)}shouldReplay(t){return this.replay!==null&&t.startsWith(Lm)}};function ou(i="animations"){return vr([{provide:ms,useFactory:(t,e,n)=>new Dm(t,e,n,i),deps:[Ne,ys,Ke]},{provide:Zl,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var au={providers:[ru(su),ou()]};var sc;try{sc=typeof Intl<"u"&&Intl.v8BreakIterator}catch{sc=!1}var cu=(()=>{let t=class t{constructor(n){this._platformId=n,this.isBrowser=this._platformId?fh(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||sc)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};t.\u0275fac=function(r){return new(r||t)(ae(Kn))},t.\u0275prov=ee({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var Um=["*",[["mat-toolbar-row"]]],Om=["*","mat-toolbar-row"],Fm=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275dir=fs({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"],standalone:!0});let i=t;return i})(),lu=(()=>{let t=class t{constructor(n,r,s){this._elementRef=n,this._platform=r,this._document=s}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}};t.\u0275fac=function(r){return new(r||t)(yr(Ko),yr(cu),yr(Ne))},t.\u0275cmp=ln({type:t,selectors:[["mat-toolbar"]],contentQueries:function(r,s,o){if(r&1&&ia(o,Fm,5),r&2){let a;br(a=Er())&&(s._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(r,s){r&2&&(th(s.color?"mat-"+s.color:""),Ql("mat-toolbar-multiple-rows",s._toolbarRows.length>0)("mat-toolbar-single-row",s._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],standalone:!0,features:[hn],ngContentSelectors:Om,decls:2,vars:0,template:function(r,s){r&1&&(nh(Um),na(0),na(1,1))},styles:[".mat-toolbar{background:var(--mat-toolbar-container-background-color);color:var(--mat-toolbar-container-text-color)}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font);font-size:var(--mat-toolbar-title-text-size);line-height:var(--mat-toolbar-title-text-line-height);font-weight:var(--mat-toolbar-title-text-weight);letter-spacing:var(--mat-toolbar-title-text-tracking);margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color);--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color)}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}"],encapsulation:2,changeDetection:0});let i=t;return i})();var hu=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=ln({type:t,selectors:[["app-top-menu"]],standalone:!0,features:[hn],decls:10,vars:0,consts:[[1,"center-bar"],[1,"item"],["ngSrc","assets/logo-black.png","alt","My Logo","height","442","width","440",1,"logo"]],template:function(r,s){r&1&&(Mr(0,"mat-toolbar",0)(1,"div",1),wr(2,"GitHub"),Sr(),Mr(3,"div",1),wr(4,"YouTube"),Sr(),In(5,"img",2),Mr(6,"div",1),wr(7,"Plugins"),Sr(),Mr(8,"div",1),wr(9,"Mystery"),Sr()())},dependencies:[lu,mh],styles:[".center-bar[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;z-index:10000;color:#fff;background-color:#000;padding-left:25%;padding-right:25%;display:grid;place-items:center;justify-content:center;grid-template-columns:repeat(auto-fit,minmax(10px,1fr))}.item[_ngcontent-%COMP%]{text-align:center;padding:10px}.logo[_ngcontent-%COMP%]{width:40px;height:40px}"]});let i=t;return i})();var _l="161",Mi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bm=0,uu=1,zm=2;var zd=1,km=2,Sn=3,Xn=0,Oe=1,bn=2,Hn=0,nr=1,du=2,fu=3,pu=4,Vm=5,li=100,Hm=101,Gm=102,mu=103,gu=104,Wm=200,Xm=201,qm=202,Ym=203,Oc=204,Fc=205,$m=206,jm=207,Zm=208,Jm=209,Km=210,Qm=211,tg=212,eg=213,ng=214,ig=0,rg=1,sg=2,so=3,og=4,ag=5,cg=6,lg=7,yl=0,hg=1,ug=2,Gn=0,dg=1,fg=2,pg=3,mg=4,gg=5,vg=6;var vu=300,or=301,ar=302,Bc=303,zc=304,Do=306,kc=1e3,rn=1001,Vc=1002,Le=1003,_u=1004;var qr=1005;var Ue=1006,oc=1007;var ui=1008;var Wn=1009,_g=1010,yg=1011,xl=1012,kd=1013,Vn=1014,En=1015,ts=1016,Vd=1017,Hd=1018,di=1020,xg=1021,sn=1023,Mg=1024,Sg=1025,fi=1026,cr=1027,bg=1028,Gd=1029,Eg=1030,Wd=1031,Xd=1033,ac=33776,cc=33777,lc=33778,hc=33779,yu=35840,xu=35841,Mu=35842,Su=35843,qd=36196,bu=37492,Eu=37496,wu=37808,Tu=37809,Au=37810,Cu=37811,Ru=37812,Pu=37813,Iu=37814,Lu=37815,Du=37816,Nu=37817,Uu=37818,Ou=37819,Fu=37820,Bu=37821,uc=36492,zu=36494,ku=36495,wg=36283,Vu=36284,Hu=36285,Gu=36286;var oo=2300,ao=2301,dc=2302,Wu=2400,Xu=2401,qu=2402;var Yd=3e3,pi=3001,Tg=3200,Ag=3201,$d=0,Cg=1,je="",be="srgb",An="srgb-linear",Ml="display-p3",No="display-p3-linear",co="linear",re="srgb",lo="rec709",ho="p3";var Ui=7680;var Yu=519,Rg=512,Pg=513,Ig=514,jd=515,Lg=516,Dg=517,Ng=518,Ug=519,$u=35044;var ju="300 es",Hc=1035,wn=2e3,uo=2001,pn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let r=this._listeners[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zu=1234567,Jr=Math.PI/180,es=180/Math.PI;function ur(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function Ae(i,t,e){return Math.max(t,Math.min(e,i))}function Sl(i,t){return(i%t+t)%t}function Og(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Fg(i,t,e){return i!==t?(e-i)/(t-i):0}function Kr(i,t,e){return(1-e)*i+e*t}function Bg(i,t,e,n){return Kr(i,t,1-Math.exp(-e*n))}function zg(i,t=1){return t-Math.abs(Sl(i,t*2)-t)}function kg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Vg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Hg(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Gg(i,t){return i+Math.random()*(t-i)}function Wg(i){return i*(.5-Math.random())}function Xg(i){i!==void 0&&(Zu=i);let t=Zu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function qg(i){return i*Jr}function Yg(i){return i*es}function Gc(i){return(i&i-1)===0&&i!==0}function $g(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jg(i,t,e,n,r){let s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),f=o((t-n)/2),m=s((n-t)/2),v=o((n-t)/2);switch(r){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*v,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*v,a*l);break;case"ZYZ":i.set(c*v,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ji(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Zd={DEG2RAD:Jr,RAD2DEG:es,generateUUID:ur,clamp:Ae,euclideanModulo:Sl,mapLinear:Og,inverseLerp:Fg,lerp:Kr,damp:Bg,pingpong:zg,smoothstep:kg,smootherstep:Vg,randInt:Hg,randFloat:Gg,randFloatSpread:Wg,seededRandom:Xg,degToRad:qg,radToDeg:Yg,isPowerOfTwo:Gc,ceilPowerOfTwo:$g,floorPowerOfTwo:fo,setQuaternionFromProperEuler:jg,normalize:Pe,denormalize:Ji},It=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xt=class i{constructor(t,e,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],m=n[5],v=n[8],y=r[0],p=r[3],d=r[6],A=r[1],S=r[4],T=r[7],I=r[2],R=r[5],C=r[8];return s[0]=o*y+a*A+c*I,s[3]=o*p+a*S+c*R,s[6]=o*d+a*T+c*C,s[1]=l*y+h*A+u*I,s[4]=l*p+h*S+u*R,s[7]=l*d+h*T+u*C,s[2]=f*y+m*A+v*I,s[5]=f*p+m*S+v*R,s[8]=f*d+m*T+v*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*s,m=l*s-o*c,v=e*u+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/v;return t[0]=u*y,t[1]=(r*l-h*n)*y,t[2]=(a*n-r*o)*y,t[3]=f*y,t[4]=(h*e-r*c)*y,t[5]=(r*s-a*e)*y,t[6]=m*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*s)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(fc.makeScale(t,e)),this}rotate(t){return this.premultiply(fc.makeRotation(-t)),this}translate(t,e){return this.premultiply(fc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},fc=new Xt;function Jd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zg(){let i=ns("canvas");return i.style.display="block",i}var Ju={};function ir(i){i in Ju||(Ju[i]=!0,console.warn(i))}var Ku=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qu=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fs={[An]:{transfer:co,primaries:lo,toReference:i=>i,fromReference:i=>i},[be]:{transfer:re,primaries:lo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[No]:{transfer:co,primaries:ho,toReference:i=>i.applyMatrix3(Qu),fromReference:i=>i.applyMatrix3(Ku)},[Ml]:{transfer:re,primaries:ho,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Qu),fromReference:i=>i.applyMatrix3(Ku).convertLinearToSRGB()}},Jg=new Set([An,No]),Qt={enabled:!0,_workingColorSpace:An,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Jg.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Fs[t].toReference,r=Fs[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Fs[i].primaries},getTransfer:function(i){return i===je?co:Fs[i].transfer}};function rr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Oi,po=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Oi===void 0&&(Oi=ns("canvas")),Oi.width=t.width,Oi.height=t.height;let n=Oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ns("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=rr(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(rr(e[n]/255)*255):e[n]=rr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Kg=0,mo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=ur(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(mc(r[o].image)):s.push(mc(r[o]))}else s=mc(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function mc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?po.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Qg=0,qn=(()=>{class i extends pn{constructor(e=i.DEFAULT_IMAGE,n=i.DEFAULT_MAPPING,r=rn,s=rn,o=Ue,a=ui,c=sn,l=Wn,h=i.DEFAULT_ANISOTROPY,u=je){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=ur(),this.name="",this.source=new mo(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===pi?be:je),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kc:e.x=e.x-Math.floor(e.x);break;case rn:e.x=e.x<0?0:1;break;case Vc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kc:e.y=e.y-Math.floor(e.y);break;case rn:e.y=e.y<0?0:1;break;case Vc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===be?pi:Yd}set encoding(e){ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===pi?be:je}}return i.DEFAULT_IMAGE=null,i.DEFAULT_MAPPING=vu,i.DEFAULT_ANISOTROPY=1,i})(),_e=class i{constructor(t=0,e=0,n=0,r=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],m=c[5],v=c[9],y=c[2],p=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(v+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(l+1)/2,T=(m+1)/2,I=(d+1)/2,R=(h+f)/4,C=(u+y)/4,W=(v+p)/4;return S>T&&S>I?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=R/n,s=C/n):T>I?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=R/r,s=W/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=C/s,r=W/s),this.set(n,r,s,e),this}let A=Math.sqrt((p-v)*(p-v)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(p-v)/A,this.y=(u-y)/A,this.z=(f-h)/A,this.w=Math.acos((l+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wc=class extends pn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);let r={width:t,height:e,depth:1};n.encoding!==void 0&&(ir("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===pi?be:je),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new qn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new mo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cn=class extends Wc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},go=class extends qn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Le,this.minFilter=Le,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xc=class extends qn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Le,this.minFilter=Le,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var on=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3],f=s[o+0],m=s[o+1],v=s[o+2],y=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=v,t[e+3]=y;return}if(u!==y||c!==f||l!==m||h!==v){let p=1-a,d=c*f+l*m+h*v+u*y,A=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){let I=Math.sqrt(S),R=Math.atan2(I,d*A);p=Math.sin(p*R)/I,a=Math.sin(a*R)/I}let T=a*A;if(c=c*p+f*T,l=l*p+m*T,h=h*p+v*T,u=u*p+y*T,p===1-a){let I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[o],f=s[o+1],m=s[o+2],v=s[o+3];return t[e]=a*v+h*u+c*m-l*f,t[e+1]=c*v+h*f+l*u-a*m,t[e+2]=l*v+h*m+a*f-c*u,t[e+3]=h*v-a*u-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),u=a(s/2),f=c(n/2),m=c(r/2),v=c(s/2);switch(o){case"XYZ":this._x=f*h*u+l*m*v,this._y=l*m*u-f*h*v,this._z=l*h*v+f*m*u,this._w=l*h*u-f*m*v;break;case"YXZ":this._x=f*h*u+l*m*v,this._y=l*m*u-f*h*v,this._z=l*h*v-f*m*u,this._w=l*h*u+f*m*v;break;case"ZXY":this._x=f*h*u-l*m*v,this._y=l*m*u+f*h*v,this._z=l*h*v+f*m*u,this._w=l*h*u-f*m*v;break;case"ZYX":this._x=f*h*u-l*m*v,this._y=l*m*u+f*h*v,this._z=l*h*v-f*m*u,this._w=l*h*u+f*m*v;break;case"YZX":this._x=f*h*u+l*m*v,this._y=l*m*u+f*h*v,this._z=l*h*v-f*m*u,this._w=l*h*u-f*m*v;break;case"XZY":this._x=f*h*u-l*m*v,this._y=l*m*u-f*h*v,this._z=l*h*v+f*m*u,this._w=l*h*u+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(s),n*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(td.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(td.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return gc.copy(this).projectOnVector(t),this.sub(gc)}reflect(t){return this.sub(gc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gc=new N,td=new on,mi=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qe):Qe.fromBufferAttribute(s,o),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(t.matrixWorld),this.union(Bs)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yr),zs.subVectors(this.max,Yr),Fi.subVectors(t.a,Yr),Bi.subVectors(t.b,Yr),zi.subVectors(t.c,Yr),Un.subVectors(Bi,Fi),On.subVectors(zi,Bi),ri.subVectors(Fi,zi);let e=[0,-Un.z,Un.y,0,-On.z,On.y,0,-ri.z,ri.y,Un.z,0,-Un.x,On.z,0,-On.x,ri.z,0,-ri.x,-Un.y,Un.x,0,-On.y,On.x,0,-ri.y,ri.x,0];return!vc(e,Fi,Bi,zi,zs)||(e=[1,0,0,0,1,0,0,0,1],!vc(e,Fi,Bi,zi,zs))?!1:(ks.crossVectors(Un,On),e=[ks.x,ks.y,ks.z],vc(e,Fi,Bi,zi,zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},vn=[new N,new N,new N,new N,new N,new N,new N,new N],Qe=new N,Bs=new mi,Fi=new N,Bi=new N,zi=new N,Un=new N,On=new N,ri=new N,Yr=new N,zs=new N,ks=new N,si=new N;function vc(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){si.fromArray(i,s);let a=r.x*Math.abs(si.x)+r.y*Math.abs(si.y)+r.z*Math.abs(si.z),c=t.dot(si),l=e.dot(si),h=n.dot(si);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var tv=new mi,$r=new N,_c=new N,is=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):tv.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$r.subVectors(t,this.center);let e=$r.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector($r,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_c.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($r.copy(t.center).add(_c)),this.expandByPoint($r.copy(t.center).sub(_c))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},_n=new N,yc=new N,Vs=new N,Fn=new N,xc=new N,Hs=new N,Mc=new N,rs=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.origin).addScaledVector(this.direction,e),_n.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){yc.copy(t).add(e).multiplyScalar(.5),Vs.copy(e).sub(t).normalize(),Fn.copy(this.origin).sub(yc);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Vs),a=Fn.dot(this.direction),c=-Fn.dot(Vs),l=Fn.lengthSq(),h=Math.abs(1-o*o),u,f,m,v;if(h>0)if(u=o*c-a,f=o*a-c,v=s*h,u>=0)if(f>=-v)if(f<=v){let y=1/h;u*=y,f*=y,m=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;else f<=-v?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+f*(f+2*c)+l):f<=v?(u=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+f*(f+2*c)+l);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(yc).addScaledVector(Vs,f),m}intersectSphere(t,e){_n.subVectors(t.center,this.origin);let n=_n.dot(this.direction),r=_n.dot(_n)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,n,r,s){xc.subVectors(e,t),Hs.subVectors(n,t),Mc.crossVectors(xc,Hs);let o=this.direction.dot(Mc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fn.subVectors(this.origin,t);let c=a*this.direction.dot(Hs.crossVectors(Fn,Hs));if(c<0)return null;let l=a*this.direction.dot(xc.cross(Fn));if(l<0||c+l>o)return null;let h=-a*Fn.dot(Mc);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ye=class i{constructor(t,e,n,r,s,o,a,c,l,h,u,f,m,v,y,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,h,u,f,m,v,y,p)}set(t,e,n,r,s,o,a,c,l,h,u,f,m,v,y,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=v,d[11]=y,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,r=1/ki.setFromMatrixColumn(t,0).length(),s=1/ki.setFromMatrixColumn(t,1).length(),o=1/ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=o*h,m=o*u,v=a*h,y=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+v*l,e[5]=f-y*l,e[9]=-a*c,e[2]=y-f*l,e[6]=v+m*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,m=c*u,v=l*h,y=l*u;e[0]=f+y*a,e[4]=v*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-v,e[6]=y+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,m=c*u,v=l*h,y=l*u;e[0]=f-y*a,e[4]=-o*u,e[8]=v+m*a,e[1]=m+v*a,e[5]=o*h,e[9]=y-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,m=o*u,v=a*h,y=a*u;e[0]=c*h,e[4]=v*l-m,e[8]=f*l+y,e[1]=c*u,e[5]=y*l+f,e[9]=m*l-v,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,m=o*l,v=a*c,y=a*l;e[0]=c*h,e[4]=y-f*u,e[8]=v*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+v,e[10]=f-y*u}else if(t.order==="XZY"){let f=o*c,m=o*l,v=a*c,y=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+y,e[5]=o*h,e[9]=m*u-v,e[2]=v*u-m,e[6]=a*h,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ev,t,nv)}lookAt(t,e,n){let r=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Bn.crossVectors(n,ze),Bn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Bn.crossVectors(n,ze)),Bn.normalize(),Gs.crossVectors(ze,Bn),r[0]=Bn.x,r[4]=Gs.x,r[8]=ze.x,r[1]=Bn.y,r[5]=Gs.y,r[9]=ze.y,r[2]=Bn.z,r[6]=Gs.z,r[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],m=n[13],v=n[2],y=n[6],p=n[10],d=n[14],A=n[3],S=n[7],T=n[11],I=n[15],R=r[0],C=r[4],W=r[8],st=r[12],_=r[1],w=r[5],H=r[9],Q=r[13],P=r[2],V=r[6],B=r[10],Y=r[14],G=r[3],X=r[7],q=r[11],it=r[15];return s[0]=o*R+a*_+c*P+l*G,s[4]=o*C+a*w+c*V+l*X,s[8]=o*W+a*H+c*B+l*q,s[12]=o*st+a*Q+c*Y+l*it,s[1]=h*R+u*_+f*P+m*G,s[5]=h*C+u*w+f*V+m*X,s[9]=h*W+u*H+f*B+m*q,s[13]=h*st+u*Q+f*Y+m*it,s[2]=v*R+y*_+p*P+d*G,s[6]=v*C+y*w+p*V+d*X,s[10]=v*W+y*H+p*B+d*q,s[14]=v*st+y*Q+p*Y+d*it,s[3]=A*R+S*_+T*P+I*G,s[7]=A*C+S*w+T*V+I*X,s[11]=A*W+S*H+T*B+I*q,s[15]=A*st+S*Q+T*Y+I*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],m=t[14],v=t[3],y=t[7],p=t[11],d=t[15];return v*(+s*c*u-r*l*u-s*a*f+n*l*f+r*a*m-n*c*m)+y*(+e*c*m-e*l*f+s*o*f-r*o*m+r*l*h-s*c*h)+p*(+e*l*u-e*a*m-s*o*u+n*o*m+s*a*h-n*l*h)+d*(-r*a*h-e*c*u+e*a*f+r*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],m=t[11],v=t[12],y=t[13],p=t[14],d=t[15],A=u*p*l-y*f*l+y*c*m-a*p*m-u*c*d+a*f*d,S=v*f*l-h*p*l-v*c*m+o*p*m+h*c*d-o*f*d,T=h*y*l-v*u*l+v*a*m-o*y*m-h*a*d+o*u*d,I=v*u*c-h*y*c-v*a*f+o*y*f+h*a*p-o*u*p,R=e*A+n*S+r*T+s*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return t[0]=A*C,t[1]=(y*f*s-u*p*s-y*r*m+n*p*m+u*r*d-n*f*d)*C,t[2]=(a*p*s-y*c*s+y*r*l-n*p*l-a*r*d+n*c*d)*C,t[3]=(u*c*s-a*f*s-u*r*l+n*f*l+a*r*m-n*c*m)*C,t[4]=S*C,t[5]=(h*p*s-v*f*s+v*r*m-e*p*m-h*r*d+e*f*d)*C,t[6]=(v*c*s-o*p*s-v*r*l+e*p*l+o*r*d-e*c*d)*C,t[7]=(o*f*s-h*c*s+h*r*l-e*f*l-o*r*m+e*c*m)*C,t[8]=T*C,t[9]=(v*u*s-h*y*s-v*n*m+e*y*m+h*n*d-e*u*d)*C,t[10]=(o*y*s-v*a*s+v*n*l-e*y*l-o*n*d+e*a*d)*C,t[11]=(h*a*s-o*u*s-h*n*l+e*u*l+o*n*m-e*a*m)*C,t[12]=I*C,t[13]=(h*y*r-v*u*r+v*n*f-e*y*f-h*n*p+e*u*p)*C,t[14]=(v*a*r-o*y*r-v*n*c+e*y*c+o*n*p-e*a*p)*C,t[15]=(o*u*r-h*a*r+h*n*c-e*u*c-o*n*f+e*a*f)*C,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,f=s*l,m=s*h,v=s*u,y=o*h,p=o*u,d=a*u,A=c*l,S=c*h,T=c*u,I=n.x,R=n.y,C=n.z;return r[0]=(1-(y+d))*I,r[1]=(m+T)*I,r[2]=(v-S)*I,r[3]=0,r[4]=(m-T)*R,r[5]=(1-(f+d))*R,r[6]=(p+A)*R,r[7]=0,r[8]=(v+S)*C,r[9]=(p-A)*C,r[10]=(1-(f+y))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements,s=ki.set(r[0],r[1],r[2]).length(),o=ki.set(r[4],r[5],r[6]).length(),a=ki.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],tn.copy(this);let l=1/s,h=1/o,u=1/a;return tn.elements[0]*=l,tn.elements[1]*=l,tn.elements[2]*=l,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,e.setFromRotationMatrix(tn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=wn){let c=this.elements,l=2*s/(e-t),h=2*s/(n-r),u=(e+t)/(e-t),f=(n+r)/(n-r),m,v;if(a===wn)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===uo)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=wn){let c=this.elements,l=1/(e-t),h=1/(n-r),u=1/(o-s),f=(e+t)*l,m=(n+r)*h,v,y;if(a===wn)v=(o+s)*u,y=-2*u;else if(a===uo)v=s*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=y,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ki=new N,tn=new ye,ev=new N(0,0,0),nv=new N(1,1,1),Bn=new N,Gs=new N,ze=new N,ed=new ye,nd=new on,iv=(()=>{class i{constructor(e=0,n=0,r=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,s=this._order){return this._x=e,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){let s=e.elements,o=s[0],a=s[4],c=s[8],l=s[1],h=s[5],u=s[9],f=s[2],m=s[6],v=s[10];switch(n){case"XYZ":this._y=Math.asin(Ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,v),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,v),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ae(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,v),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-u,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return ed.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ed,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return nd.setFromEuler(this),this.setFromQuaternion(nd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return i.DEFAULT_ORDER="XYZ",i})(),vo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},rv=0,id=new N,Vi=new on,yn=new ye,Ws=new N,jr=new N,sv=new N,ov=new on,rd=new N(1,0,0),sd=new N(0,1,0),od=new N(0,0,1),av={type:"added"},cv={type:"removed"},Rn=(()=>{class i extends pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,n=new iv,r=new on,s=new N(1,1,1);function o(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new Xt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Vi.setFromAxisAngle(e,n),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,n){return Vi.setFromAxisAngle(e,n),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(rd,e)}rotateY(e){return this.rotateOnAxis(sd,e)}rotateZ(e){return this.rotateOnAxis(od,e)}translateOnAxis(e,n){return id.copy(e).applyQuaternion(this.quaternion),this.position.add(id.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(rd,e)}translateY(e){return this.translateOnAxis(sd,e)}translateZ(e){return this.translateOnAxis(od,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Ws.copy(e):Ws.set(e,n,r);let s=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(jr,Ws,this.up):yn.lookAt(Ws,jr,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(yn),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(av)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(cv)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,e,sv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,ov,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let r=0,s=n.length;r<s;r++){let o=n[r];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){let r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++){let c=s[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){let n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let f=l[h];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,h=this.material.length;l<h;l++)c.push(o(e.materials,this.material[l]));s.material=c}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(e.animations,l))}}if(n){let c=a(e.geometries),l=a(e.materials),h=a(e.textures),u=a(e.images),f=a(e.shapes),m=a(e.skeletons),v=a(e.animations),y=a(e.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),m.length>0&&(r.skeletons=m),v.length>0&&(r.animations=v),y.length>0&&(r.nodes=y)}return r.object=s,r;function a(c){let l=[];for(let h in c){let u=c[h];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){let s=e.children[r];this.add(s.clone())}return this}}return i.DEFAULT_UP=new N(0,1,0),i.DEFAULT_MATRIX_AUTO_UPDATE=!0,i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,i})(),en=new N,xn=new N,Sc=new N,Mn=new N,Hi=new N,Gi=new N,ad=new N,bc=new N,Ec=new N,wc=new N,Ki=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),en.subVectors(t,e),r.cross(en);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){en.subVectors(r,e),xn.subVectors(n,e),Sc.subVectors(t,e);let o=en.dot(en),a=en.dot(xn),c=en.dot(Sc),l=xn.dot(xn),h=xn.dot(Sc),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,m=(l*c-a*h)*f,v=(o*h-a*c)*f;return s.set(1-m-v,v,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,Mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Mn.x),c.addScaledVector(o,Mn.y),c.addScaledVector(a,Mn.z),c)}static isFrontFacing(t,e,n,r){return en.subVectors(n,e),xn.subVectors(t,e),en.cross(xn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),en.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;Hi.subVectors(r,n),Gi.subVectors(s,n),bc.subVectors(t,n);let c=Hi.dot(bc),l=Gi.dot(bc);if(c<=0&&l<=0)return e.copy(n);Ec.subVectors(t,r);let h=Hi.dot(Ec),u=Gi.dot(Ec);if(h>=0&&u<=h)return e.copy(r);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Hi,o);wc.subVectors(t,s);let m=Hi.dot(wc),v=Gi.dot(wc);if(v>=0&&m<=v)return e.copy(s);let y=m*l-c*v;if(y<=0&&l>=0&&v<=0)return a=l/(l-v),e.copy(n).addScaledVector(Gi,a);let p=h*v-m*u;if(p<=0&&u-h>=0&&m-v>=0)return ad.subVectors(s,r),a=(u-h)/(u-h+(m-v)),e.copy(r).addScaledVector(ad,a);let d=1/(p+y+f);return o=y*d,a=f*d,e.copy(n).addScaledVector(Hi,o).addScaledVector(Gi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function Tc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Qt.workingColorSpace){if(t=Sl(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Tc(o,s,t+1/3),this.g=Tc(o,s,t),this.b=Tc(o,s,t-1/3)}return Qt.toWorkingColorSpace(this,r),this}setStyle(t,e=be){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){let n=Kd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}copyLinearToSRGB(t){return this.r=pc(t.r),this.g=pc(t.g),this.b=pc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return Qt.fromWorkingColorSpace(Te.copy(this),t),Math.round(Ae(Te.r*255,0,255))*65536+Math.round(Ae(Te.g*255,0,255))*256+Math.round(Ae(Te.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Te.copy(this),e);let n=Te.r,r=Te.g,s=Te.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=be){Qt.fromWorkingColorSpace(Te.copy(this),t);let e=Te.r,n=Te.g,r=Te.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(Xs);let n=Kr(zn.h,Xs.h,e),r=Kr(zn.s,Xs.s,e),s=Kr(zn.l,Xs.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Te=new Yt;Yt.NAMES=Kd;var lv=0,gi=class extends pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=ur(),this.name="",this.type="Material",this.blending=nr,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oc,this.blendDst=Fc,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oc&&(n.blendSrc=this.blendSrc),this.blendDst!==Fc&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},_o=class extends gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var de=new N,qs=new It,Ze=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$u,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ir("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qs.fromBufferAttribute(this,e),qs.applyMatrix3(t),this.setXY(e,qs.x,qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),r=Pe(r,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$u&&(t.usage=this.usage),t}};var yo=class extends Ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var xo=class extends Ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Tn=class extends Ze{constructor(t,e,n){super(new Float32Array(t),e,n)}};var hv=0,$e=new ye,Ac=new Rn,Wi=new N,ke=new mi,Zr=new mi,ve=new N,vi=class i extends pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jd(t)?xo:yo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Xt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return Ac.lookAt(t),Ac.updateMatrix(),this.applyMatrix4(Ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){let e=[];for(let n=0,r=t.length;n<r;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Tn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];ke.setFromBufferAttribute(s),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(ke.min,Zr.min),ke.expandByPoint(ve),ve.addVectors(ke.max,Zr.max),ke.expandByPoint(ve)):(ke.expandByPoint(Zr.min),ke.expandByPoint(Zr.max))}ke.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)ve.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ve));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ve.fromBufferAttribute(a,l),c&&(Wi.fromBufferAttribute(t,l),ve.add(Wi)),r=Math.max(r,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let _=0;_<a;_++)l[_]=new N,h[_]=new N;let u=new N,f=new N,m=new N,v=new It,y=new It,p=new It,d=new N,A=new N;function S(_,w,H){u.fromArray(r,_*3),f.fromArray(r,w*3),m.fromArray(r,H*3),v.fromArray(o,_*2),y.fromArray(o,w*2),p.fromArray(o,H*2),f.sub(u),m.sub(u),y.sub(v),p.sub(v);let Q=1/(y.x*p.y-p.x*y.y);isFinite(Q)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-y.y).multiplyScalar(Q),A.copy(m).multiplyScalar(y.x).addScaledVector(f,-p.x).multiplyScalar(Q),l[_].add(d),l[w].add(d),l[H].add(d),h[_].add(A),h[w].add(A),h[H].add(A))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let _=0,w=T.length;_<w;++_){let H=T[_],Q=H.start,P=H.count;for(let V=Q,B=Q+P;V<B;V+=3)S(n[V+0],n[V+1],n[V+2])}let I=new N,R=new N,C=new N,W=new N;function st(_){C.fromArray(s,_*3),W.copy(C);let w=l[_];I.copy(w),I.sub(C.multiplyScalar(C.dot(w))).normalize(),R.crossVectors(W,w);let Q=R.dot(h[_])<0?-1:1;c[_*4]=I.x,c[_*4+1]=I.y,c[_*4+2]=I.z,c[_*4+3]=Q}for(let _=0,w=T.length;_<w;++_){let H=T[_],Q=H.start,P=H.count;for(let V=Q,B=Q+P;V<B;V+=3)st(n[V+0]),st(n[V+1]),st(n[V+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let r=new N,s=new N,o=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(t)for(let f=0,m=t.count;f<m;f+=3){let v=t.getX(f+0),y=t.getX(f+1),p=t.getX(f+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),m=0,v=0;for(let y=0,p=c.length;y<p;y++){a.isInterleavedBufferAttribute?m=c[y]*a.data.stride+a.offset:m=c[y]*h;for(let d=0;d<h;d++)f[v++]=l[m++]}return new Ze(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],m=t(f,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let r=t.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],u=s[l];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},cd=new ye,oi=new rs,Ys=new is,ld=new N,Xi=new N,qi=new N,Yi=new N,Cc=new N,$s=new N,js=new It,Zs=new It,Js=new It,hd=new N,ud=new N,dd=new N,Ks=new N,Qs=new N,Ve=class extends Rn{constructor(t=new vi,e=new _o){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){$s.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(Cc.fromBufferAttribute(u,t),o?$s.addScaledVector(Cc,h):$s.addScaledVector(Cc.sub(e),h))}e.add($s)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(s),oi.copy(t.ray).recast(t.near),!(Ys.containsPoint(oi.origin)===!1&&(oi.intersectSphere(Ys,ld)===null||oi.origin.distanceToSquared(ld)>(t.far-t.near)**2))&&(cd.copy(s).invert(),oi.copy(t.ray).applyMatrix4(cd),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=f.length;v<y;v++){let p=f[v],d=o[p.materialIndex],A=Math.max(p.start,m.start),S=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let T=A,I=S;T<I;T+=3){let R=a.getX(T),C=a.getX(T+1),W=a.getX(T+2);r=to(this,d,t,n,l,h,u,R,C,W),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{let v=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=v,d=y;p<d;p+=3){let A=a.getX(p),S=a.getX(p+1),T=a.getX(p+2);r=to(this,o,t,n,l,h,u,A,S,T),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,y=f.length;v<y;v++){let p=f[v],d=o[p.materialIndex],A=Math.max(p.start,m.start),S=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let T=A,I=S;T<I;T+=3){let R=T,C=T+1,W=T+2;r=to(this,d,t,n,l,h,u,R,C,W),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{let v=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let p=v,d=y;p<d;p+=3){let A=p,S=p+1,T=p+2;r=to(this,o,t,n,l,h,u,A,S,T),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}};function uv(i,t,e,n,r,s,o,a){let c;if(t.side===Oe?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===Xn,a),c===null)return null;Qs.copy(a),Qs.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Qs);return l<e.near||l>e.far?null:{distance:l,point:Qs.clone(),object:i}}function to(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,Xi),i.getVertexPosition(c,qi),i.getVertexPosition(l,Yi);let h=uv(i,t,e,n,Xi,qi,Yi,Ks);if(h){r&&(js.fromBufferAttribute(r,a),Zs.fromBufferAttribute(r,c),Js.fromBufferAttribute(r,l),h.uv=Ki.getInterpolation(Ks,Xi,qi,Yi,js,Zs,Js,new It)),s&&(js.fromBufferAttribute(s,a),Zs.fromBufferAttribute(s,c),Js.fromBufferAttribute(s,l),h.uv1=Ki.getInterpolation(Ks,Xi,qi,Yi,js,Zs,Js,new It),h.uv2=h.uv1),o&&(hd.fromBufferAttribute(o,a),ud.fromBufferAttribute(o,c),dd.fromBufferAttribute(o,l),h.normal=Ki.getInterpolation(Ks,Xi,qi,Yi,hd,ud,dd,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new N,materialIndex:0};Ki.getNormal(Xi,qi,Yi,u.normal),h.face=u}return h}var _i=class i extends vi{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,m=0;v("z","y","x",-1,-1,n,e,t,o,s,0),v("z","y","x",1,-1,n,e,-t,o,s,1),v("x","z","y",1,1,t,n,e,r,o,2),v("x","z","y",1,-1,t,n,-e,r,o,3),v("x","y","z",1,-1,t,e,n,r,s,4),v("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Tn(l,3)),this.setAttribute("normal",new Tn(h,3)),this.setAttribute("uv",new Tn(u,2));function v(y,p,d,A,S,T,I,R,C,W,st){let _=T/C,w=I/W,H=T/2,Q=I/2,P=R/2,V=C+1,B=W+1,Y=0,G=0,X=new N;for(let q=0;q<B;q++){let it=q*w-Q;for(let ot=0;ot<V;ot++){let At=ot*_-H;X[y]=At*A,X[p]=it*S,X[d]=P,l.push(X.x,X.y,X.z),X[y]=0,X[p]=0,X[d]=R>0?1:-1,h.push(X.x,X.y,X.z),u.push(ot/C),u.push(1-q/W),Y+=1}}for(let q=0;q<W;q++)for(let it=0;it<C;it++){let ot=f+it+V*q,At=f+it+V*(q+1),k=f+(it+1)+V*(q+1),J=f+(it+1)+V*q;c.push(ot,At,J),c.push(At,k,J),G+=6}a.addGroup(m,G,st),m+=G,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function lr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ie(i){let t={};for(let e=0;e<i.length;e++){let n=lr(i[e]);for(let r in n)t[r]=n[r]}return t}function dv(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Qd(i){return i.getRenderTarget()===null?i.outputColorSpace:Qt.workingColorSpace}var fv={clone:lr,merge:Ie},pv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pv,this.fragmentShader=mv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=lr(t.uniforms),this.uniformsGroups=dv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Mo=class extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},kn=new N,fd=new It,pd=new It,De=class extends Mo{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,fd,pd),e.subVectors(pd,fd)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Jr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},$i=-90,ji=1,qc=class extends Rn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new De($i,ji,t,e);r.layers=this.layers,this.add(r);let s=new De($i,ji,t,e);s.layers=this.layers,this.add(s);let o=new De($i,ji,t,e);o.layers=this.layers,this.add(o);let a=new De($i,ji,t,e);a.layers=this.layers,this.add(a);let c=new De($i,ji,t,e);c.layers=this.layers,this.add(c);let l=new De($i,ji,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},So=class extends qn{constructor(t,e,n,r,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:or,super(t,e,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Yc=class extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(ir("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===pi?be:je),this.texture=new So(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ue}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _i(5,5,5),s=new mn({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:Hn});s.uniforms.tEquirect.value=e;let o=new Ve(r,s),a=e.minFilter;return e.minFilter===ui&&(e.minFilter=Ue),new qc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}},Rc=new N,gv=new N,vv=new Xt,nn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Rc.subVectors(n,e).cross(gv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Rc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||vv.getNormalMatrix(t),r=this.coplanarPoint(Rc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ai=new is,eo=new N,ss=class{constructor(t=new nn,e=new nn,n=new nn,r=new nn,s=new nn,o=new nn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn){let n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],u=r[6],f=r[7],m=r[8],v=r[9],y=r[10],p=r[11],d=r[12],A=r[13],S=r[14],T=r[15];if(n[0].setComponents(c-s,f-l,p-m,T-d).normalize(),n[1].setComponents(c+s,f+l,p+m,T+d).normalize(),n[2].setComponents(c+o,f+h,p+v,T+A).normalize(),n[3].setComponents(c-o,f-h,p-v,T-A).normalize(),n[4].setComponents(c-a,f-u,p-y,T-S).normalize(),e===wn)n[5].setComponents(c+a,f+u,p+y,T+S).normalize();else if(e===uo)n[5].setComponents(a,u,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(t){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(eo.x=r.normal.x>0?t.max.x:t.min.x,eo.y=r.normal.y>0?t.max.y:t.min.y,eo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(eo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function tf(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function _v(i,t){let e=t.isWebGL2,n=new WeakMap;function r(l,h){let u=l.array,f=l.usage,m=u.byteLength,v=i.createBuffer();i.bindBuffer(h,v),i.bufferData(h,u,f),l.onUploadCallback();let y;if(u instanceof Float32Array)y=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=i.SHORT;else if(u instanceof Uint32Array)y=i.UNSIGNED_INT;else if(u instanceof Int32Array)y=i.INT;else if(u instanceof Int8Array)y=i.BYTE;else if(u instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:v,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,h,u){let f=h.array,m=h._updateRange,v=h.updateRanges;if(i.bindBuffer(u,l),m.count===-1&&v.length===0&&i.bufferSubData(u,0,f),v.length!==0){for(let y=0,p=v.length;y<p;y++){let d=v[y];e?i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,r(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var bo=class i extends vi{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,u=t/a,f=e/c,m=[],v=[],y=[],p=[];for(let d=0;d<h;d++){let A=d*f-o;for(let S=0;S<l;S++){let T=S*u-s;v.push(T,-A,0),y.push(0,0,1),p.push(S/a),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let A=0;A<a;A++){let S=A+l*d,T=A+l*(d+1),I=A+1+l*(d+1),R=A+1+l*d;m.push(S,T,R),m.push(T,I,R)}this.setIndex(m),this.setAttribute("position",new Tn(v,3)),this.setAttribute("normal",new Tn(y,3)),this.setAttribute("uv",new Tn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},yv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ev=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Av=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Rv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Vv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Hv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$v=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Jv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,t_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,n_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,a_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,c_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,d_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,f_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,__=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,y_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,x_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,M_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,S_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,w_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,T_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,N_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,U_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,O_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,F_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,B_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,H_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,e0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,n0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,i0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,r0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,o0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,c0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,d0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,f0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,v0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,w0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,T0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,A0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,I0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,F0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,z0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,k0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,G0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Z0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:yv,alphahash_pars_fragment:xv,alphamap_fragment:Mv,alphamap_pars_fragment:Sv,alphatest_fragment:bv,alphatest_pars_fragment:Ev,aomap_fragment:wv,aomap_pars_fragment:Tv,batching_pars_vertex:Av,batching_vertex:Cv,begin_vertex:Rv,beginnormal_vertex:Pv,bsdfs:Iv,iridescence_fragment:Lv,bumpmap_pars_fragment:Dv,clipping_planes_fragment:Nv,clipping_planes_pars_fragment:Uv,clipping_planes_pars_vertex:Ov,clipping_planes_vertex:Fv,color_fragment:Bv,color_pars_fragment:zv,color_pars_vertex:kv,color_vertex:Vv,common:Hv,cube_uv_reflection_fragment:Gv,defaultnormal_vertex:Wv,displacementmap_pars_vertex:Xv,displacementmap_vertex:qv,emissivemap_fragment:Yv,emissivemap_pars_fragment:$v,colorspace_fragment:jv,colorspace_pars_fragment:Zv,envmap_fragment:Jv,envmap_common_pars_fragment:Kv,envmap_pars_fragment:Qv,envmap_pars_vertex:t_,envmap_physical_pars_fragment:d_,envmap_vertex:e_,fog_vertex:n_,fog_pars_vertex:i_,fog_fragment:r_,fog_pars_fragment:s_,gradientmap_pars_fragment:o_,lightmap_fragment:a_,lightmap_pars_fragment:c_,lights_lambert_fragment:l_,lights_lambert_pars_fragment:h_,lights_pars_begin:u_,lights_toon_fragment:f_,lights_toon_pars_fragment:p_,lights_phong_fragment:m_,lights_phong_pars_fragment:g_,lights_physical_fragment:v_,lights_physical_pars_fragment:__,lights_fragment_begin:y_,lights_fragment_maps:x_,lights_fragment_end:M_,logdepthbuf_fragment:S_,logdepthbuf_pars_fragment:b_,logdepthbuf_pars_vertex:E_,logdepthbuf_vertex:w_,map_fragment:T_,map_pars_fragment:A_,map_particle_fragment:C_,map_particle_pars_fragment:R_,metalnessmap_fragment:P_,metalnessmap_pars_fragment:I_,morphcolor_vertex:L_,morphnormal_vertex:D_,morphtarget_pars_vertex:N_,morphtarget_vertex:U_,normal_fragment_begin:O_,normal_fragment_maps:F_,normal_pars_fragment:B_,normal_pars_vertex:z_,normal_vertex:k_,normalmap_pars_fragment:V_,clearcoat_normal_fragment_begin:H_,clearcoat_normal_fragment_maps:G_,clearcoat_pars_fragment:W_,iridescence_pars_fragment:X_,opaque_fragment:q_,packing:Y_,premultiplied_alpha_fragment:$_,project_vertex:j_,dithering_fragment:Z_,dithering_pars_fragment:J_,roughnessmap_fragment:K_,roughnessmap_pars_fragment:Q_,shadowmap_pars_fragment:t0,shadowmap_pars_vertex:e0,shadowmap_vertex:n0,shadowmask_pars_fragment:i0,skinbase_vertex:r0,skinning_pars_vertex:s0,skinning_vertex:o0,skinnormal_vertex:a0,specularmap_fragment:c0,specularmap_pars_fragment:l0,tonemapping_fragment:h0,tonemapping_pars_fragment:u0,transmission_fragment:d0,transmission_pars_fragment:f0,uv_pars_fragment:p0,uv_pars_vertex:m0,uv_vertex:g0,worldpos_vertex:v0,background_vert:_0,background_frag:y0,backgroundCube_vert:x0,backgroundCube_frag:M0,cube_vert:S0,cube_frag:b0,depth_vert:E0,depth_frag:w0,distanceRGBA_vert:T0,distanceRGBA_frag:A0,equirect_vert:C0,equirect_frag:R0,linedashed_vert:P0,linedashed_frag:I0,meshbasic_vert:L0,meshbasic_frag:D0,meshlambert_vert:N0,meshlambert_frag:U0,meshmatcap_vert:O0,meshmatcap_frag:F0,meshnormal_vert:B0,meshnormal_frag:z0,meshphong_vert:k0,meshphong_frag:V0,meshphysical_vert:H0,meshphysical_frag:G0,meshtoon_vert:W0,meshtoon_frag:X0,points_vert:q0,points_frag:Y0,shadow_vert:$0,shadow_frag:j0,sprite_vert:Z0,sprite_frag:J0},rt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},fn={basic:{uniforms:Ie([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ie([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ie([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ie([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ie([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ie([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ie([rt.points,rt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ie([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ie([rt.common,rt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ie([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ie([rt.sprite,rt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ie([rt.common,rt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ie([rt.lights,rt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};fn.physical={uniforms:Ie([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var no={r:0,b:0,g:0};function K0(i,t,e,n,r,s,o){let a=new Yt(0),c=s===!0?0:1,l,h,u=null,f=0,m=null;function v(p,d){let A=!1,S=d.isScene===!0?d.background:null;S&&S.isTexture&&(S=(d.backgroundBlurriness>0?e:t).get(S)),S===null?y(a,c):S&&S.isColor&&(y(S,1),A=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||A)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Do)?(h===void 0&&(h=new Ve(new _i(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:lr(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Qt.getTransfer(S.colorSpace)!==re,(u!==S||f!==S.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ve(new bo(2,2),new mn({name:"BackgroundMaterial",uniforms:lr(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(S.colorSpace)!==re,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function y(p,d){p.getRGB(no,Qd(i)),n.buffers.color.setClear(no.r,no.g,no.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),c=d,y(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,y(a,c)},render:v}}function Q0(i,t,e,n){let r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=p(null),l=c,h=!1;function u(P,V,B,Y,G){let X=!1;if(o){let q=y(Y,B,V);l!==q&&(l=q,m(l.object)),X=d(P,Y,B,G),X&&A(P,Y,B,G)}else{let q=V.wireframe===!0;(l.geometry!==Y.id||l.program!==B.id||l.wireframe!==q)&&(l.geometry=Y.id,l.program=B.id,l.wireframe=q,X=!0)}G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,W(P,V,B,Y),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(P){return n.isWebGL2?i.bindVertexArray(P):s.bindVertexArrayOES(P)}function v(P){return n.isWebGL2?i.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function y(P,V,B){let Y=B.wireframe===!0,G=a[P.id];G===void 0&&(G={},a[P.id]=G);let X=G[V.id];X===void 0&&(X={},G[V.id]=X);let q=X[Y];return q===void 0&&(q=p(f()),X[Y]=q),q}function p(P){let V=[],B=[],Y=[];for(let G=0;G<r;G++)V[G]=0,B[G]=0,Y[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:B,attributeDivisors:Y,object:P,attributes:{},index:null}}function d(P,V,B,Y){let G=l.attributes,X=V.attributes,q=0,it=B.getAttributes();for(let ot in it)if(it[ot].location>=0){let k=G[ot],J=X[ot];if(J===void 0&&(ot==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),ot==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),k===void 0||k.attribute!==J||J&&k.data!==J.data)return!0;q++}return l.attributesNum!==q||l.index!==Y}function A(P,V,B,Y){let G={},X=V.attributes,q=0,it=B.getAttributes();for(let ot in it)if(it[ot].location>=0){let k=X[ot];k===void 0&&(ot==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),ot==="instanceColor"&&P.instanceColor&&(k=P.instanceColor));let J={};J.attribute=k,k&&k.data&&(J.data=k.data),G[ot]=J,q++}l.attributes=G,l.attributesNum=q,l.index=Y}function S(){let P=l.newAttributes;for(let V=0,B=P.length;V<B;V++)P[V]=0}function T(P){I(P,0)}function I(P,V){let B=l.newAttributes,Y=l.enabledAttributes,G=l.attributeDivisors;B[P]=1,Y[P]===0&&(i.enableVertexAttribArray(P),Y[P]=1),G[P]!==V&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,V),G[P]=V)}function R(){let P=l.newAttributes,V=l.enabledAttributes;for(let B=0,Y=V.length;B<Y;B++)V[B]!==P[B]&&(i.disableVertexAttribArray(B),V[B]=0)}function C(P,V,B,Y,G,X,q){q===!0?i.vertexAttribIPointer(P,V,B,G,X):i.vertexAttribPointer(P,V,B,Y,G,X)}function W(P,V,B,Y){if(n.isWebGL2===!1&&(P.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;S();let G=Y.attributes,X=B.getAttributes(),q=V.defaultAttributeValues;for(let it in X){let ot=X[it];if(ot.location>=0){let At=G[it];if(At===void 0&&(it==="instanceMatrix"&&P.instanceMatrix&&(At=P.instanceMatrix),it==="instanceColor"&&P.instanceColor&&(At=P.instanceColor)),At!==void 0){let k=At.normalized,J=At.itemSize,ut=e.get(At);if(ut===void 0)continue;let St=ut.buffer,Et=ut.type,ft=ut.bytesPerElement,$t=n.isWebGL2===!0&&(Et===i.INT||Et===i.UNSIGNED_INT||At.gpuType===kd);if(At.isInterleavedBufferAttribute){let Lt=At.data,D=Lt.stride,fe=At.offset;if(Lt.isInstancedInterleavedBuffer){for(let xt=0;xt<ot.locationSize;xt++)I(ot.location+xt,Lt.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let xt=0;xt<ot.locationSize;xt++)T(ot.location+xt);i.bindBuffer(i.ARRAY_BUFFER,St);for(let xt=0;xt<ot.locationSize;xt++)C(ot.location+xt,J/ot.locationSize,Et,k,D*ft,(fe+J/ot.locationSize*xt)*ft,$t)}else{if(At.isInstancedBufferAttribute){for(let Lt=0;Lt<ot.locationSize;Lt++)I(ot.location+Lt,At.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Lt=0;Lt<ot.locationSize;Lt++)T(ot.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,St);for(let Lt=0;Lt<ot.locationSize;Lt++)C(ot.location+Lt,J/ot.locationSize,Et,k,J*ft,J/ot.locationSize*Lt*ft,$t)}}else if(q!==void 0){let k=q[it];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(ot.location,k);break;case 3:i.vertexAttrib3fv(ot.location,k);break;case 4:i.vertexAttrib4fv(ot.location,k);break;default:i.vertexAttrib1fv(ot.location,k)}}}}R()}function st(){H();for(let P in a){let V=a[P];for(let B in V){let Y=V[B];for(let G in Y)v(Y[G].object),delete Y[G];delete V[B]}delete a[P]}}function _(P){if(a[P.id]===void 0)return;let V=a[P.id];for(let B in V){let Y=V[B];for(let G in Y)v(Y[G].object),delete Y[G];delete V[B]}delete a[P.id]}function w(P){for(let V in a){let B=a[V];if(B[P.id]===void 0)continue;let Y=B[P.id];for(let G in Y)v(Y[G].object),delete Y[G];delete B[P.id]}}function H(){Q(),h=!0,l!==c&&(l=c,m(l.object))}function Q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:H,resetDefaultState:Q,dispose:st,releaseStatesOfGeometry:_,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:T,disableUnusedAttributes:R}}function ty(i,t,e,n){let r=n.isWebGL2,s;function o(h){s=h}function a(h,u){i.drawArrays(s,h,u),e.update(u,s,1)}function c(h,u,f){if(f===0)return;let m,v;if(r)m=i,v="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](s,h,u,f),e.update(u,s,f)}function l(h,u,f){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<f;v++)this.render(h[v],u[v]);else{m.multiDrawArraysWEBGL(s,h,0,u,0,f);let v=0;for(let y=0;y<f;y++)v+=u[y];e.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function ey(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,T=o||t.has("OES_texture_float"),I=S&&T,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:A,vertexTextures:S,floatFragmentTextures:T,floatVertexTextures:I,maxSamples:R}}function ny(i){let t=this,e=null,n=0,r=!1,s=!1,o=new nn,a=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||n!==0||r;return r=f,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){let v=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!r||v===null||v.length===0||s&&!p)s?h(null):l();else{let A=s?0:n,S=A*4,T=d.clippingState||null;c.value=T,T=h(v,f,S,m);for(let I=0;I!==S;++I)T[I]=e[I];d.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,v){let y=u!==null?u.length:0,p=null;if(y!==0){if(p=c.value,v!==!0||p===null){let d=m+y*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(p===null||p.length<d)&&(p=new Float32Array(d));for(let S=0,T=m;S!==y;++S,T+=4)o.copy(u[S]).applyMatrix4(A,a),o.normal.toArray(p,T),p[T+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}function iy(i){let t=new WeakMap;function e(o,a){return a===Bc?o.mapping=or:a===zc&&(o.mapping=ar),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Bc||a===zc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Yc(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Eo=class extends Mo{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Qi=4,md=[.125,.215,.35,.446,.526,.582],hi=20,Pc=new Eo,gd=new Yt,Ic=null,Lc=0,Dc=0,ci=(1+Math.sqrt(5))/2,Zi=1/ci,vd=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,ci,Zi),new N(0,ci,-Zi),new N(Zi,0,ci),new N(-Zi,0,ci),new N(ci,Zi,0),new N(-ci,Zi,0)],wo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Ic=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ic,Lc,Dc),t.scissorTest=!1,io(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===or||t.mapping===ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ic=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:ts,format:sn,colorSpace:An,depthBuffer:!1},r=_d(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_d(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ry(s)),this._blurMaterial=sy(s,t,e)}return r}_compileMaterial(t){let e=new Ve(this._lodPlanes[0],t);this._renderer.compile(e,Pc)}_sceneToCubeUV(t,e,n,r){let a=new De(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(gd),h.toneMapping=Gn,h.autoClear=!1;let m=new _o({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),v=new Ve(new _i,m),y=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,y=!0):(m.color.copy(gd),y=!0);for(let d=0;d<6;d++){let A=d%3;A===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):A===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let S=this._cubeSize;io(r,A*S,d>2?S:0,S,S),h.setRenderTarget(r),y&&h.render(v,a),h.render(t,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===or||t.mapping===ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yd());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ve(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;io(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Pc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vd[(r-1)%vd.length];this._blur(t,r-1,r,s,o)}e.autoClear=n}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ve(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*hi-1),y=s/v,p=isFinite(s)?1+Math.floor(h*y):hi;p>hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hi}`);let d=[],A=0;for(let C=0;C<hi;++C){let W=C/y,st=Math.exp(-W*W/2);d.push(st),C===0?A+=st:C<p&&(A+=2*st)}for(let C=0;C<d.length;C++)d[C]=d[C]/A;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=v,f.mipInt.value=S-n;let T=this._sizeLods[r],I=3*T*(r>S-Qi?r-S+Qi:0),R=4*(this._cubeSize-T);io(e,I,R,3*T,2*T),c.setRenderTarget(e),c.render(u,Pc)}};function ry(i){let t=[],e=[],n=[],r=i,s=i-Qi+1+md.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>i-Qi?c=md[o-i+Qi-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,v=6,y=3,p=2,d=1,A=new Float32Array(y*v*m),S=new Float32Array(p*v*m),T=new Float32Array(d*v*m);for(let R=0;R<m;R++){let C=R%3*2/3-1,W=R>2?0:-1,st=[C,W,0,C+2/3,W,0,C+2/3,W+1,0,C,W,0,C+2/3,W+1,0,C,W+1,0];A.set(st,y*v*R),S.set(f,p*v*R);let _=[R,R,R,R,R,R];T.set(_,d*v*R)}let I=new vi;I.setAttribute("position",new Ze(A,y)),I.setAttribute("uv",new Ze(S,p)),I.setAttribute("faceIndex",new Ze(T,d)),t.push(I),r>Qi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _d(i,t,e){let n=new Cn(i,t,e);return n.texture.mapping=Do,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function io(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function sy(i,t,e){let n=new Float32Array(hi),r=new N(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function yd(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function xd(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function bl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oy(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Bc||c===zc,h=c===or||c===ar;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new wo(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&r(u)){e===null&&(e=new wo(i));let f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ay(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function cy(i,t,e,n){let r={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let v in f.attributes)t.remove(f.attributes[v]);for(let v in f.morphAttributes){let y=f.morphAttributes[v];for(let p=0,d=y.length;p<d;p++)t.remove(y[p])}f.removeEventListener("dispose",o),delete r[f.id];let m=s.get(f);m&&(t.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let v in f)t.update(f[v],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let v in m){let y=m[v];for(let p=0,d=y.length;p<d;p++)t.update(y[p],i.ARRAY_BUFFER)}}function l(u){let f=[],m=u.index,v=u.attributes.position,y=0;if(m!==null){let A=m.array;y=m.version;for(let S=0,T=A.length;S<T;S+=3){let I=A[S+0],R=A[S+1],C=A[S+2];f.push(I,R,R,C,C,I)}}else if(v!==void 0){let A=v.array;y=v.version;for(let S=0,T=A.length/3-1;S<T;S+=3){let I=S+0,R=S+1,C=S+2;f.push(I,R,R,C,C,I)}}else return;let p=new(Jd(f)?xo:yo)(f,1);p.version=y;let d=s.get(u);d&&t.remove(d),s.set(u,p)}function h(u){let f=s.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function ly(i,t,e,n){let r=n.isWebGL2,s;function o(m){s=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function h(m,v){i.drawElements(s,v,a,m*c),e.update(v,s,1)}function u(m,v,y){if(y===0)return;let p,d;if(r)p=i,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,v,a,m*c,y),e.update(v,s,y)}function f(m,v,y){if(y===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<y;d++)this.render(m[d]/c,v[d]);else{p.multiDrawElementsWEBGL(s,v,0,a,m,0,y);let d=0;for(let A=0;A<y;A++)d+=v[A];e.update(d,s,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function hy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function uy(i,t){return i[0]-t[0]}function dy(i,t){return Math.abs(t[1])-Math.abs(i[1])}function fy(i,t,e){let n={},r=new Float32Array(8),s=new WeakMap,o=new _e,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(t.isWebGL2===!0){let v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=v!==void 0?v.length:0,p=s.get(h);if(p===void 0||p.count!==y){let V=function(){Q.dispose(),s.delete(h),h.removeEventListener("dispose",V)};var m=V;p!==void 0&&p.texture.dispose();let S=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,I=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],W=h.morphAttributes.color||[],st=0;S===!0&&(st=1),T===!0&&(st=2),I===!0&&(st=3);let _=h.attributes.position.count*st,w=1;_>t.maxTextureSize&&(w=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let H=new Float32Array(_*w*4*y),Q=new go(H,_,w,y);Q.type=En,Q.needsUpdate=!0;let P=st*4;for(let B=0;B<y;B++){let Y=R[B],G=C[B],X=W[B],q=_*w*4*B;for(let it=0;it<Y.count;it++){let ot=it*P;S===!0&&(o.fromBufferAttribute(Y,it),H[q+ot+0]=o.x,H[q+ot+1]=o.y,H[q+ot+2]=o.z,H[q+ot+3]=0),T===!0&&(o.fromBufferAttribute(G,it),H[q+ot+4]=o.x,H[q+ot+5]=o.y,H[q+ot+6]=o.z,H[q+ot+7]=0),I===!0&&(o.fromBufferAttribute(X,it),H[q+ot+8]=o.x,H[q+ot+9]=o.y,H[q+ot+10]=o.z,H[q+ot+11]=X.itemSize===4?o.w:1)}}p={count:y,texture:Q,size:new It(_,w)},s.set(h,p),h.addEventListener("dispose",V)}let d=0;for(let S=0;S<f.length;S++)d+=f[S];let A=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",A),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{let v=f===void 0?0:f.length,y=n[h.id];if(y===void 0||y.length!==v){y=[];for(let T=0;T<v;T++)y[T]=[T,0];n[h.id]=y}for(let T=0;T<v;T++){let I=y[T];I[0]=T,I[1]=f[T]}y.sort(dy);for(let T=0;T<8;T++)T<v&&y[T][1]?(a[T][0]=y[T][0],a[T][1]=y[T][1]):(a[T][0]=Number.MAX_SAFE_INTEGER,a[T][1]=0);a.sort(uy);let p=h.morphAttributes.position,d=h.morphAttributes.normal,A=0;for(let T=0;T<8;T++){let I=a[T],R=I[0],C=I[1];R!==Number.MAX_SAFE_INTEGER&&C?(p&&h.getAttribute("morphTarget"+T)!==p[R]&&h.setAttribute("morphTarget"+T,p[R]),d&&h.getAttribute("morphNormal"+T)!==d[R]&&h.setAttribute("morphNormal"+T,d[R]),r[T]=C,A+=C):(p&&h.hasAttribute("morphTarget"+T)===!0&&h.deleteAttribute("morphTarget"+T),d&&h.hasAttribute("morphNormal"+T)===!0&&h.deleteAttribute("morphNormal"+T),r[T]=0)}let S=h.morphTargetsRelative?1:1-A;u.getUniforms().setValue(i,"morphTargetBaseInfluence",S),u.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function py(i,t,e,n){let r=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}var To=class extends qn{constructor(t,e,n,r,s,o,a,c,l,h){if(h=h!==void 0?h:fi,h!==fi&&h!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===fi&&(n=Vn),n===void 0&&h===cr&&(n=di),super(null,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Le,this.minFilter=c!==void 0?c:Le,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ef=new qn,nf=new To(1,1);nf.compareFunction=jd;var rf=new go,sf=new Xc,of=new So,Md=[],Sd=[],bd=new Float32Array(16),Ed=new Float32Array(9),wd=new Float32Array(4);function dr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=Md[r];if(s===void 0&&(s=new Float32Array(r),Md[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Uo(i,t){let e=Sd[t];e===void 0&&(e=new Int32Array(t),Sd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function my(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function gy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function vy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function _y(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function yy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;wd.set(n),i.uniformMatrix2fv(this.addr,!1,wd),me(e,n)}}function xy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Ed.set(n),i.uniformMatrix3fv(this.addr,!1,Ed),me(e,n)}}function My(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;bd.set(n),i.uniformMatrix4fv(this.addr,!1,bd),me(e,n)}}function Sy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function by(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function Ey(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function wy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function Ty(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ay(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function Cy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function Ry(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function Py(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s=this.type===i.SAMPLER_2D_SHADOW?nf:ef;e.setTexture2D(t||s,r)}function Iy(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||sf,r)}function Ly(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||of,r)}function Dy(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||rf,r)}function Ny(i){switch(i){case 5126:return my;case 35664:return gy;case 35665:return vy;case 35666:return _y;case 35674:return yy;case 35675:return xy;case 35676:return My;case 5124:case 35670:return Sy;case 35667:case 35671:return by;case 35668:case 35672:return Ey;case 35669:case 35673:return wy;case 5125:return Ty;case 36294:return Ay;case 36295:return Cy;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Iy;case 35680:case 36300:case 36308:case 36293:return Ly;case 36289:case 36303:case 36311:case 36292:return Dy}}function Uy(i,t){i.uniform1fv(this.addr,t)}function Oy(i,t){let e=dr(t,this.size,2);i.uniform2fv(this.addr,e)}function Fy(i,t){let e=dr(t,this.size,3);i.uniform3fv(this.addr,e)}function By(i,t){let e=dr(t,this.size,4);i.uniform4fv(this.addr,e)}function zy(i,t){let e=dr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ky(i,t){let e=dr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Vy(i,t){let e=dr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Hy(i,t){i.uniform1iv(this.addr,t)}function Gy(i,t){i.uniform2iv(this.addr,t)}function Wy(i,t){i.uniform3iv(this.addr,t)}function Xy(i,t){i.uniform4iv(this.addr,t)}function qy(i,t){i.uniform1uiv(this.addr,t)}function Yy(i,t){i.uniform2uiv(this.addr,t)}function $y(i,t){i.uniform3uiv(this.addr,t)}function jy(i,t){i.uniform4uiv(this.addr,t)}function Zy(i,t,e){let n=this.cache,r=t.length,s=Uo(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||ef,s[o])}function Jy(i,t,e){let n=this.cache,r=t.length,s=Uo(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||sf,s[o])}function Ky(i,t,e){let n=this.cache,r=t.length,s=Uo(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||of,s[o])}function Qy(i,t,e){let n=this.cache,r=t.length,s=Uo(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||rf,s[o])}function tx(i){switch(i){case 5126:return Uy;case 35664:return Oy;case 35665:return Fy;case 35666:return By;case 35674:return zy;case 35675:return ky;case 35676:return Vy;case 5124:case 35670:return Hy;case 35667:case 35671:return Gy;case 35668:case 35672:return Wy;case 35669:case 35673:return Xy;case 5125:return qy;case 36294:return Yy;case 36295:return $y;case 36296:return jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Zy;case 35679:case 36299:case 36307:return Jy;case 35680:case 36300:case 36308:case 36293:return Ky;case 36289:case 36303:case 36311:case 36292:return Qy}}var $c=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ny(e.type)}},jc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=tx(e.type)}},Zc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Nc=/(\w+)(\])?(\[|\.)?/g;function Td(i,t){i.seq.push(t),i.map[t.id]=t}function ex(i,t,e){let n=i.name,r=n.length;for(Nc.lastIndex=0;;){let s=Nc.exec(n),o=Nc.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Td(e,l===void 0?new $c(a,i,t):new jc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Zc(a),Td(e,u)),e=u}}}var sr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);ex(s,o,this)}}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function Ad(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var nx=37297,ix=0;function rx(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function sx(i){let t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(i),n;switch(t===e?n="":t===ho&&e===lo?n="LinearDisplayP3ToLinearSRGB":t===lo&&e===ho&&(n="LinearSRGBToLinearDisplayP3"),i){case An:case No:return[n,"LinearTransferOETF"];case be:case Ml:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Cd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+rx(i.getShaderSource(t),o)}else return r}function ox(i,t){let e=sx(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ax(i,t){let e;switch(t){case dg:e="Linear";break;case fg:e="Reinhard";break;case pg:e="OptimizedCineon";break;case mg:e="ACESFilmic";break;case vg:e="AgX";break;case gg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function cx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(tr).join(`
`)}function lx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function hx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ux(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function tr(i){return i!==""}function Rd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var dx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(i){return i.replace(dx,px)}var fx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function px(i,t){let e=Vt[t];if(e===void 0){let n=fx.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jc(e)}var mx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Id(i){return i.replace(mx,gx)}function gx(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ld(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(t+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function vx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===km?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Sn&&(t="SHADOWMAP_TYPE_VSM"),t}function _x(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case or:case ar:t="ENVMAP_TYPE_CUBE";break;case Do:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ar:t="ENVMAP_MODE_REFRACTION";break}return t}function xx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yl:t="ENVMAP_BLENDING_MULTIPLY";break;case hg:t="ENVMAP_BLENDING_MIX";break;case ug:t="ENVMAP_BLENDING_ADD";break}return t}function Mx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Sx(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=vx(e),l=_x(e),h=yx(e),u=xx(e),f=Mx(e),m=e.isWebGL2?"":cx(e),v=lx(e),y=hx(s),p=r.createProgram(),d,A,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(tr).join(`
`),d.length>0&&(d+=`
`),A=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(tr).join(`
`),A.length>0&&(A+=`
`)):(d=[Ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),A=[m,Ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Gn?ax("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,ox("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(tr).join(`
`)),o=Jc(o),o=Rd(o,e),o=Pd(o,e),a=Jc(a),a=Rd(a,e),a=Pd(a,e),o=Id(o),a=Id(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,A=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);let T=S+d+o,I=S+A+a,R=Ad(r,r.VERTEX_SHADER,T),C=Ad(r,r.FRAGMENT_SHADER,I);r.attachShader(p,R),r.attachShader(p,C),e.index0AttributeName!==void 0?r.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function W(H){if(i.debug.checkShaderErrors){let Q=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(R).trim(),V=r.getShaderInfoLog(C).trim(),B=!0,Y=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,R,C);else{let G=Cd(r,R,"vertex"),X=Cd(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Q+`
`+G+`
`+X)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(P===""||V==="")&&(Y=!1);Y&&(H.diagnostics={runnable:B,programLog:Q,vertexShader:{log:P,prefix:d},fragmentShader:{log:V,prefix:A}})}r.deleteShader(R),r.deleteShader(C),st=new sr(r,p),_=ux(r,p)}let st;this.getUniforms=function(){return st===void 0&&W(this),st};let _;this.getAttributes=function(){return _===void 0&&W(this),_};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(p,nx)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ix++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=C,this}var bx=0,Kc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Qc(t),e.set(t,n)),n}},Qc=class{constructor(t){this.id=bx++,this.code=t,this.usedTimes=0}};function Ex(i,t,e,n,r,s,o){let a=new vo,c=new Kc,l=new Set,h=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,m=r.vertexTextures,v=r.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function d(_,w,H,Q,P){let V=Q.fog,B=P.geometry,Y=_.isMeshStandardMaterial?Q.environment:null,G=(_.isMeshStandardMaterial?e:t).get(_.envMap||Y),X=G&&G.mapping===Do?G.image.height:null,q=y[_.type];_.precision!==null&&(v=r.getMaxPrecision(_.precision),v!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",v,"instead."));let it=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ot=it!==void 0?it.length:0,At=0;B.morphAttributes.position!==void 0&&(At=1),B.morphAttributes.normal!==void 0&&(At=2),B.morphAttributes.color!==void 0&&(At=3);let k,J,ut,St;if(q){let qt=fn[q];k=qt.vertexShader,J=qt.fragmentShader}else k=_.vertexShader,J=_.fragmentShader,c.update(_),ut=c.getVertexShaderID(_),St=c.getFragmentShaderID(_);let Et=i.getRenderTarget(),ft=P.isInstancedMesh===!0,$t=P.isBatchedMesh===!0,Lt=!!_.map,D=!!_.matcap,fe=!!G,xt=!!_.aoMap,Ct=!!_.lightMap,gt=!!_.bumpMap,ne=!!_.normalMap,Dt=!!_.displacementMap,M=!!_.emissiveMap,g=!!_.metalnessMap,U=!!_.roughnessMap,et=_.anisotropy>0,$=_.clearcoat>0,K=_.iridescence>0,pt=_.sheen>0,at=_.transmission>0,dt=et&&!!_.anisotropyMap,bt=$&&!!_.clearcoatMap,Nt=$&&!!_.clearcoatNormalMap,j=$&&!!_.clearcoatRoughnessMap,Jt=K&&!!_.iridescenceMap,Ht=K&&!!_.iridescenceThicknessMap,Rt=pt&&!!_.sheenColorMap,_t=pt&&!!_.sheenRoughnessMap,lt=!!_.specularMap,Ot=!!_.specularColorMap,E=!!_.specularIntensityMap,nt=at&&!!_.transmissionMap,ct=at&&!!_.thicknessMap,yt=!!_.gradientMap,b=!!_.alphaMap,tt=_.alphaTest>0,Z=!!_.alphaHash,mt=!!_.extensions,Mt=Gn;_.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(Mt=i.toneMapping);let jt={isWebGL2:u,shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:k,fragmentShader:J,defines:_.defines,customVertexShaderID:ut,customFragmentShaderID:St,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:v,batching:$t,instancing:ft,instancingColor:ft&&P.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:Et===null?i.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:An,alphaToCoverage:!!_.alphaToCoverage,map:Lt,matcap:D,envMap:fe,envMapMode:fe&&G.mapping,envMapCubeUVHeight:X,aoMap:xt,lightMap:Ct,bumpMap:gt,normalMap:ne,displacementMap:m&&Dt,emissiveMap:M,normalMapObjectSpace:ne&&_.normalMapType===Cg,normalMapTangentSpace:ne&&_.normalMapType===$d,metalnessMap:g,roughnessMap:U,anisotropy:et,anisotropyMap:dt,clearcoat:$,clearcoatMap:bt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:j,iridescence:K,iridescenceMap:Jt,iridescenceThicknessMap:Ht,sheen:pt,sheenColorMap:Rt,sheenRoughnessMap:_t,specularMap:lt,specularColorMap:Ot,specularIntensityMap:E,transmission:at,transmissionMap:nt,thicknessMap:ct,gradientMap:yt,opaque:_.transparent===!1&&_.blending===nr&&_.alphaToCoverage===!1,alphaMap:b,alphaTest:tt,alphaHash:Z,combine:_.combine,mapUv:Lt&&p(_.map.channel),aoMapUv:xt&&p(_.aoMap.channel),lightMapUv:Ct&&p(_.lightMap.channel),bumpMapUv:gt&&p(_.bumpMap.channel),normalMapUv:ne&&p(_.normalMap.channel),displacementMapUv:Dt&&p(_.displacementMap.channel),emissiveMapUv:M&&p(_.emissiveMap.channel),metalnessMapUv:g&&p(_.metalnessMap.channel),roughnessMapUv:U&&p(_.roughnessMap.channel),anisotropyMapUv:dt&&p(_.anisotropyMap.channel),clearcoatMapUv:bt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Jt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:_t&&p(_.sheenRoughnessMap.channel),specularMapUv:lt&&p(_.specularMap.channel),specularColorMapUv:Ot&&p(_.specularColorMap.channel),specularIntensityMapUv:E&&p(_.specularIntensityMap.channel),transmissionMapUv:nt&&p(_.transmissionMap.channel),thicknessMapUv:ct&&p(_.thicknessMap.channel),alphaMapUv:b&&p(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ne||et),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!B.attributes.uv&&(Lt||b),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:P.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:At,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Lt&&_.map.isVideoTexture===!0&&Qt.getTransfer(_.map.colorSpace)===re,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===bn,flipSided:_.side===Oe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:mt&&_.extensions.derivatives===!0,extensionFragDepth:mt&&_.extensions.fragDepth===!0,extensionDrawBuffers:mt&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:mt&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:mt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:mt&&_.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return jt.vertexUv1s=l.has(1),jt.vertexUv2s=l.has(2),jt.vertexUv3s=l.has(3),l.clear(),jt}function A(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let H in _.defines)w.push(H),w.push(_.defines[H]);return _.isRawShaderMaterial===!1&&(S(w,_),T(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function S(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function T(_,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),_.push(a.mask)}function I(_){let w=y[_.type],H;if(w){let Q=fn[w];H=fv.clone(Q.uniforms)}else H=_.uniforms;return H}function R(_,w){let H;for(let Q=0,P=h.length;Q<P;Q++){let V=h[Q];if(V.cacheKey===w){H=V,++H.usedTimes;break}}return H===void 0&&(H=new Sx(i,w,_,s),h.push(H)),H}function C(_){if(--_.usedTimes===0){let w=h.indexOf(_);h[w]=h[h.length-1],h.pop(),_.destroy()}}function W(_){c.remove(_)}function st(){c.dispose()}return{getParameters:d,getProgramCacheKey:A,getUniforms:I,acquireProgram:R,releaseProgram:C,releaseShaderCache:W,programs:h,dispose:st}}function wx(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function Tx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Dd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Nd(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(u,f,m,v,y,p){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:v,renderOrder:u.renderOrder,z:y,group:p},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=v,d.renderOrder=u.renderOrder,d.z=y,d.group=p),t++,d}function a(u,f,m,v,y,p){let d=o(u,f,m,v,y,p);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):e.push(d)}function c(u,f,m,v,y,p){let d=o(u,f,m,v,y,p);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||Tx),n.length>1&&n.sort(f||Dd),r.length>1&&r.sort(f||Dd)}function h(){for(let u=t,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function Ax(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new Nd,i.set(n,[o])):r>=s.length?(o=new Nd,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Cx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Yt};break;case"SpotLight":e={position:new N,direction:new N,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Rx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Px=0;function Ix(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Lx(i,t){let e=new Cx,n=Rx(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new N);let s=new N,o=new ye,a=new ye;function c(h,u){let f=0,m=0,v=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let y=0,p=0,d=0,A=0,S=0,T=0,I=0,R=0,C=0,W=0,st=0;h.sort(Ix);let _=u===!0?Math.PI:1;for(let H=0,Q=h.length;H<Q;H++){let P=h[H],V=P.color,B=P.intensity,Y=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=V.r*B*_,m+=V.g*B*_,v+=V.b*B*_;else if(P.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(P.sh.coefficients[X],B);st++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*_),P.castShadow){let q=P.shadow,it=n.get(P);it.shadowBias=q.bias,it.shadowNormalBias=q.normalBias,it.shadowRadius=q.radius,it.shadowMapSize=q.mapSize,r.directionalShadow[y]=it,r.directionalShadowMap[y]=G,r.directionalShadowMatrix[y]=P.shadow.matrix,T++}r.directional[y]=X,y++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(V).multiplyScalar(B*_),X.distance=Y,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,r.spot[d]=X;let q=P.shadow;if(P.map&&(r.spotLightMap[C]=P.map,C++,q.updateMatrices(P),P.castShadow&&W++),r.spotLightMatrix[d]=q.matrix,P.castShadow){let it=n.get(P);it.shadowBias=q.bias,it.shadowNormalBias=q.normalBias,it.shadowRadius=q.radius,it.shadowMapSize=q.mapSize,r.spotShadow[d]=it,r.spotShadowMap[d]=G,R++}d++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(V).multiplyScalar(B),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),r.rectArea[A]=X,A++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*_),X.distance=P.distance,X.decay=P.decay,P.castShadow){let q=P.shadow,it=n.get(P);it.shadowBias=q.bias,it.shadowNormalBias=q.normalBias,it.shadowRadius=q.radius,it.shadowMapSize=q.mapSize,it.shadowCameraNear=q.camera.near,it.shadowCameraFar=q.camera.far,r.pointShadow[p]=it,r.pointShadowMap[p]=G,r.pointShadowMatrix[p]=P.shadow.matrix,I++}r.point[p]=X,p++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(B*_),X.groundColor.copy(P.groundColor).multiplyScalar(B*_),r.hemi[S]=X,S++}}A>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=rt.LTC_FLOAT_1,r.rectAreaLTC2=rt.LTC_FLOAT_2):(r.rectAreaLTC1=rt.LTC_HALF_1,r.rectAreaLTC2=rt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=rt.LTC_FLOAT_1,r.rectAreaLTC2=rt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=rt.LTC_HALF_1,r.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=v;let w=r.hash;(w.directionalLength!==y||w.pointLength!==p||w.spotLength!==d||w.rectAreaLength!==A||w.hemiLength!==S||w.numDirectionalShadows!==T||w.numPointShadows!==I||w.numSpotShadows!==R||w.numSpotMaps!==C||w.numLightProbes!==st)&&(r.directional.length=y,r.spot.length=d,r.rectArea.length=A,r.point.length=p,r.hemi.length=S,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=R+C-W,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=W,r.numLightProbes=st,w.directionalLength=y,w.pointLength=p,w.spotLength=d,w.rectAreaLength=A,w.hemiLength=S,w.numDirectionalShadows=T,w.numPointShadows=I,w.numSpotShadows=R,w.numSpotMaps=C,w.numLightProbes=st,r.version=Px++)}function l(h,u){let f=0,m=0,v=0,y=0,p=0,d=u.matrixWorldInverse;for(let A=0,S=h.length;A<S;A++){let T=h[A];if(T.isDirectionalLight){let I=r.directional[f];I.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(d),f++}else if(T.isSpotLight){let I=r.spot[v];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(d),I.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(d),v++}else if(T.isRectAreaLight){let I=r.rectArea[y];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(d),a.identity(),o.copy(T.matrixWorld),o.premultiply(d),a.extractRotation(o),I.halfWidth.set(T.width*.5,0,0),I.halfHeight.set(0,T.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),y++}else if(T.isPointLight){let I=r.point[m];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(d),m++}else if(T.isHemisphereLight){let I=r.hemi[p];I.direction.setFromMatrixPosition(T.matrixWorld),I.direction.transformDirection(d),p++}}}return{setup:c,setupView:l,state:r}}function Ud(i,t){let e=new Lx(i,t),n=[],r=[];function s(){n.length=0,r.length=0}function o(u){n.push(u)}function a(u){r.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Dx(i,t){let e=new WeakMap;function n(s,o=0){let a=e.get(s),c;return a===void 0?(c=new Ud(i,t),e.set(s,[c])):o>=a.length?(c=new Ud(i,t),a.push(c)):c=a[o],c}function r(){e=new WeakMap}return{get:n,dispose:r}}var tl=class extends gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},el=class extends gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Nx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ux=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ox(i,t,e){let n=new ss,r=new It,s=new It,o=new _e,a=new tl({depthPacking:Ag}),c=new el,l={},h=e.maxTextureSize,u={[Xn]:Oe,[Oe]:Xn,[bn]:bn},f=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:Nx,fragmentShader:Ux}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let v=new vi;v.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ve(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zd;let d=this.type;this.render=function(R,C,W){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;let st=i.getRenderTarget(),_=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Hn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let Q=d!==Sn&&this.type===Sn,P=d===Sn&&this.type!==Sn;for(let V=0,B=R.length;V<B;V++){let Y=R[V],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);let X=G.getFrameExtents();if(r.multiply(X),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/X.x),r.x=s.x*X.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/X.y),r.y=s.y*X.y,G.mapSize.y=s.y)),G.map===null||Q===!0||P===!0){let it=this.type!==Sn?{minFilter:Le,magFilter:Le}:{};G.map!==null&&G.map.dispose(),G.map=new Cn(r.x,r.y,it),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let q=G.getViewportCount();for(let it=0;it<q;it++){let ot=G.getViewport(it);o.set(s.x*ot.x,s.y*ot.y,s.x*ot.z,s.y*ot.w),H.viewport(o),G.updateMatrices(Y,it),n=G.getFrustum(),T(C,W,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===Sn&&A(G,W),G.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(st,_,w)};function A(R,C){let W=t.update(y);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Cn(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,W,f,y,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,W,m,y,null)}function S(R,C,W,st){let _=null,w=W.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)_=w;else if(_=W.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let H=_.uuid,Q=C.uuid,P=l[H];P===void 0&&(P={},l[H]=P);let V=P[Q];V===void 0&&(V=_.clone(),P[Q]=V,C.addEventListener("dispose",I)),_=V}if(_.visible=C.visible,_.wireframe=C.wireframe,st===Sn?_.side=C.shadowSide!==null?C.shadowSide:C.side:_.side=C.shadowSide!==null?C.shadowSide:u[C.side],_.alphaMap=C.alphaMap,_.alphaTest=C.alphaTest,_.map=C.map,_.clipShadows=C.clipShadows,_.clippingPlanes=C.clippingPlanes,_.clipIntersection=C.clipIntersection,_.displacementMap=C.displacementMap,_.displacementScale=C.displacementScale,_.displacementBias=C.displacementBias,_.wireframeLinewidth=C.wireframeLinewidth,_.linewidth=C.linewidth,W.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let H=i.properties.get(_);H.light=W}return _}function T(R,C,W,st,_){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===Sn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,R.matrixWorld);let Q=t.update(R),P=R.material;if(Array.isArray(P)){let V=Q.groups;for(let B=0,Y=V.length;B<Y;B++){let G=V[B],X=P[G.materialIndex];if(X&&X.visible){let q=S(R,X,st,_);R.onBeforeShadow(i,R,C,W,Q,q,G),i.renderBufferDirect(W,null,Q,q,R,G),R.onAfterShadow(i,R,C,W,Q,q,G)}}}else if(P.visible){let V=S(R,P,st,_);R.onBeforeShadow(i,R,C,W,Q,V,null),i.renderBufferDirect(W,null,Q,V,R,null),R.onAfterShadow(i,R,C,W,Q,V,null)}}let H=R.children;for(let Q=0,P=H.length;Q<P;Q++)T(H[Q],C,W,st,_)}function I(R){R.target.removeEventListener("dispose",I);for(let W in l){let st=l[W],_=R.target.uuid;_ in st&&(st[_].dispose(),delete st[_])}}}function Fx(i,t,e){let n=e.isWebGL2;function r(){let b=!1,tt=new _e,Z=null,mt=new _e(0,0,0,0);return{setMask:function(Mt){Z!==Mt&&!b&&(i.colorMask(Mt,Mt,Mt,Mt),Z=Mt)},setLocked:function(Mt){b=Mt},setClear:function(Mt,jt,qt,te,xe){xe===!0&&(Mt*=te,jt*=te,qt*=te),tt.set(Mt,jt,qt,te),mt.equals(tt)===!1&&(i.clearColor(Mt,jt,qt,te),mt.copy(tt))},reset:function(){b=!1,Z=null,mt.set(-1,0,0,0)}}}function s(){let b=!1,tt=null,Z=null,mt=null;return{setTest:function(Mt){Mt?ft(i.DEPTH_TEST):$t(i.DEPTH_TEST)},setMask:function(Mt){tt!==Mt&&!b&&(i.depthMask(Mt),tt=Mt)},setFunc:function(Mt){if(Z!==Mt){switch(Mt){case ig:i.depthFunc(i.NEVER);break;case rg:i.depthFunc(i.ALWAYS);break;case sg:i.depthFunc(i.LESS);break;case so:i.depthFunc(i.LEQUAL);break;case og:i.depthFunc(i.EQUAL);break;case ag:i.depthFunc(i.GEQUAL);break;case cg:i.depthFunc(i.GREATER);break;case lg:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=Mt}},setLocked:function(Mt){b=Mt},setClear:function(Mt){mt!==Mt&&(i.clearDepth(Mt),mt=Mt)},reset:function(){b=!1,tt=null,Z=null,mt=null}}}function o(){let b=!1,tt=null,Z=null,mt=null,Mt=null,jt=null,qt=null,te=null,xe=null;return{setTest:function(Zt){b||(Zt?ft(i.STENCIL_TEST):$t(i.STENCIL_TEST))},setMask:function(Zt){tt!==Zt&&!b&&(i.stencilMask(Zt),tt=Zt)},setFunc:function(Zt,ce,Ce){(Z!==Zt||mt!==ce||Mt!==Ce)&&(i.stencilFunc(Zt,ce,Ce),Z=Zt,mt=ce,Mt=Ce)},setOp:function(Zt,ce,Ce){(jt!==Zt||qt!==ce||te!==Ce)&&(i.stencilOp(Zt,ce,Ce),jt=Zt,qt=ce,te=Ce)},setLocked:function(Zt){b=Zt},setClear:function(Zt){xe!==Zt&&(i.clearStencil(Zt),xe=Zt)},reset:function(){b=!1,tt=null,Z=null,mt=null,Mt=null,jt=null,qt=null,te=null,xe=null}}}let a=new r,c=new s,l=new o,h=new WeakMap,u=new WeakMap,f={},m={},v=new WeakMap,y=[],p=null,d=!1,A=null,S=null,T=null,I=null,R=null,C=null,W=null,st=new Yt(0,0,0),_=0,w=!1,H=null,Q=null,P=null,V=null,B=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,X=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=X>=1):q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=X>=2);let it=null,ot={},At=i.getParameter(i.SCISSOR_BOX),k=i.getParameter(i.VIEWPORT),J=new _e().fromArray(At),ut=new _e().fromArray(k);function St(b,tt,Z,mt){let Mt=new Uint8Array(4),jt=i.createTexture();i.bindTexture(b,jt),i.texParameteri(b,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(b,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<Z;qt++)n&&(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)?i.texImage3D(tt,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(tt+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return jt}let Et={};Et[i.TEXTURE_2D]=St(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=St(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Et[i.TEXTURE_2D_ARRAY]=St(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=St(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ft(i.DEPTH_TEST),c.setFunc(so),Dt(!1),M(uu),ft(i.CULL_FACE),gt(Hn);function ft(b){f[b]!==!0&&(i.enable(b),f[b]=!0)}function $t(b){f[b]!==!1&&(i.disable(b),f[b]=!1)}function Lt(b,tt){return m[b]!==tt?(i.bindFramebuffer(b,tt),m[b]=tt,n&&(b===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=tt),b===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=tt)),!0):!1}function D(b,tt){let Z=y,mt=!1;if(b)if(Z=v.get(tt),Z===void 0&&(Z=[],v.set(tt,Z)),b.isWebGLMultipleRenderTargets){let Mt=b.texture;if(Z.length!==Mt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let jt=0,qt=Mt.length;jt<qt;jt++)Z[jt]=i.COLOR_ATTACHMENT0+jt;Z.length=Mt.length,mt=!0}}else Z[0]!==i.COLOR_ATTACHMENT0&&(Z[0]=i.COLOR_ATTACHMENT0,mt=!0);else Z[0]!==i.BACK&&(Z[0]=i.BACK,mt=!0);mt&&(e.isWebGL2?i.drawBuffers(Z):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function fe(b){return p!==b?(i.useProgram(b),p=b,!0):!1}let xt={[li]:i.FUNC_ADD,[Hm]:i.FUNC_SUBTRACT,[Gm]:i.FUNC_REVERSE_SUBTRACT};if(n)xt[mu]=i.MIN,xt[gu]=i.MAX;else{let b=t.get("EXT_blend_minmax");b!==null&&(xt[mu]=b.MIN_EXT,xt[gu]=b.MAX_EXT)}let Ct={[Wm]:i.ZERO,[Xm]:i.ONE,[qm]:i.SRC_COLOR,[Oc]:i.SRC_ALPHA,[Km]:i.SRC_ALPHA_SATURATE,[Zm]:i.DST_COLOR,[$m]:i.DST_ALPHA,[Ym]:i.ONE_MINUS_SRC_COLOR,[Fc]:i.ONE_MINUS_SRC_ALPHA,[Jm]:i.ONE_MINUS_DST_COLOR,[jm]:i.ONE_MINUS_DST_ALPHA,[Qm]:i.CONSTANT_COLOR,[tg]:i.ONE_MINUS_CONSTANT_COLOR,[eg]:i.CONSTANT_ALPHA,[ng]:i.ONE_MINUS_CONSTANT_ALPHA};function gt(b,tt,Z,mt,Mt,jt,qt,te,xe,Zt){if(b===Hn){d===!0&&($t(i.BLEND),d=!1);return}if(d===!1&&(ft(i.BLEND),d=!0),b!==Vm){if(b!==A||Zt!==w){if((S!==li||R!==li)&&(i.blendEquation(i.FUNC_ADD),S=li,R=li),Zt)switch(b){case nr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case du:i.blendFunc(i.ONE,i.ONE);break;case fu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case nr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case du:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}T=null,I=null,C=null,W=null,st.set(0,0,0),_=0,A=b,w=Zt}return}Mt=Mt||tt,jt=jt||Z,qt=qt||mt,(tt!==S||Mt!==R)&&(i.blendEquationSeparate(xt[tt],xt[Mt]),S=tt,R=Mt),(Z!==T||mt!==I||jt!==C||qt!==W)&&(i.blendFuncSeparate(Ct[Z],Ct[mt],Ct[jt],Ct[qt]),T=Z,I=mt,C=jt,W=qt),(te.equals(st)===!1||xe!==_)&&(i.blendColor(te.r,te.g,te.b,xe),st.copy(te),_=xe),A=b,w=!1}function ne(b,tt){b.side===bn?$t(i.CULL_FACE):ft(i.CULL_FACE);let Z=b.side===Oe;tt&&(Z=!Z),Dt(Z),b.blending===nr&&b.transparent===!1?gt(Hn):gt(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),c.setFunc(b.depthFunc),c.setTest(b.depthTest),c.setMask(b.depthWrite),a.setMask(b.colorWrite);let mt=b.stencilWrite;l.setTest(mt),mt&&(l.setMask(b.stencilWriteMask),l.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),l.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),U(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):$t(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(b){H!==b&&(b?i.frontFace(i.CW):i.frontFace(i.CCW),H=b)}function M(b){b!==Bm?(ft(i.CULL_FACE),b!==Q&&(b===uu?i.cullFace(i.BACK):b===zm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$t(i.CULL_FACE),Q=b}function g(b){b!==P&&(G&&i.lineWidth(b),P=b)}function U(b,tt,Z){b?(ft(i.POLYGON_OFFSET_FILL),(V!==tt||B!==Z)&&(i.polygonOffset(tt,Z),V=tt,B=Z)):$t(i.POLYGON_OFFSET_FILL)}function et(b){b?ft(i.SCISSOR_TEST):$t(i.SCISSOR_TEST)}function $(b){b===void 0&&(b=i.TEXTURE0+Y-1),it!==b&&(i.activeTexture(b),it=b)}function K(b,tt,Z){Z===void 0&&(it===null?Z=i.TEXTURE0+Y-1:Z=it);let mt=ot[Z];mt===void 0&&(mt={type:void 0,texture:void 0},ot[Z]=mt),(mt.type!==b||mt.texture!==tt)&&(it!==Z&&(i.activeTexture(Z),it=Z),i.bindTexture(b,tt||Et[b]),mt.type=b,mt.texture=tt)}function pt(){let b=ot[it];b!==void 0&&b.type!==void 0&&(i.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function at(){try{i.compressedTexImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function dt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function bt(){try{i.texSubImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Nt(){try{i.texSubImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function j(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Jt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ht(){try{i.texStorage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Rt(){try{i.texStorage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function lt(){try{i.texImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ot(b){J.equals(b)===!1&&(i.scissor(b.x,b.y,b.z,b.w),J.copy(b))}function E(b){ut.equals(b)===!1&&(i.viewport(b.x,b.y,b.z,b.w),ut.copy(b))}function nt(b,tt){let Z=u.get(tt);Z===void 0&&(Z=new WeakMap,u.set(tt,Z));let mt=Z.get(b);mt===void 0&&(mt=i.getUniformBlockIndex(tt,b.name),Z.set(b,mt))}function ct(b,tt){let mt=u.get(tt).get(b);h.get(tt)!==mt&&(i.uniformBlockBinding(tt,mt,b.__bindingPointIndex),h.set(tt,mt))}function yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},it=null,ot={},m={},v=new WeakMap,y=[],p=null,d=!1,A=null,S=null,T=null,I=null,R=null,C=null,W=null,st=new Yt(0,0,0),_=0,w=!1,H=null,Q=null,P=null,V=null,B=null,J.set(0,0,i.canvas.width,i.canvas.height),ut.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ft,disable:$t,bindFramebuffer:Lt,drawBuffers:D,useProgram:fe,setBlending:gt,setMaterial:ne,setFlipSided:Dt,setCullFace:M,setLineWidth:g,setPolygonOffset:U,setScissorTest:et,activeTexture:$,bindTexture:K,unbindTexture:pt,compressedTexImage2D:at,compressedTexImage3D:dt,texImage2D:_t,texImage3D:lt,updateUBOMapping:nt,uniformBlockBinding:ct,texStorage2D:Ht,texStorage3D:Rt,texSubImage2D:bt,texSubImage3D:Nt,compressedTexSubImage2D:j,compressedTexSubImage3D:Jt,scissor:Ot,viewport:E,reset:yt}}function Bx(i,t,e,n,r,s,o){let a=r.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(M,g){return m?new OffscreenCanvas(M,g):ns("canvas")}function y(M,g,U,et){let $=1;if((M.width>et||M.height>et)&&($=et/Math.max(M.width,M.height)),$<1||g===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){let K=g?fo:Math.floor,pt=K($*M.width),at=K($*M.height);u===void 0&&(u=v(pt,at));let dt=U?v(pt,at):u;return dt.width=pt,dt.height=at,dt.getContext("2d").drawImage(M,0,0,pt,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+pt+"x"+at+")."),dt}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function p(M){return Gc(M.width)&&Gc(M.height)}function d(M){return a?!1:M.wrapS!==rn||M.wrapT!==rn||M.minFilter!==Le&&M.minFilter!==Ue}function A(M,g){return M.generateMipmaps&&g&&M.minFilter!==Le&&M.minFilter!==Ue}function S(M){i.generateMipmap(M)}function T(M,g,U,et,$=!1){if(a===!1)return g;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let K=g;if(g===i.RED&&(U===i.FLOAT&&(K=i.R32F),U===i.HALF_FLOAT&&(K=i.R16F),U===i.UNSIGNED_BYTE&&(K=i.R8)),g===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(K=i.R8UI),U===i.UNSIGNED_SHORT&&(K=i.R16UI),U===i.UNSIGNED_INT&&(K=i.R32UI),U===i.BYTE&&(K=i.R8I),U===i.SHORT&&(K=i.R16I),U===i.INT&&(K=i.R32I)),g===i.RG&&(U===i.FLOAT&&(K=i.RG32F),U===i.HALF_FLOAT&&(K=i.RG16F),U===i.UNSIGNED_BYTE&&(K=i.RG8)),g===i.RGBA){let pt=$?co:Qt.getTransfer(et);U===i.FLOAT&&(K=i.RGBA32F),U===i.HALF_FLOAT&&(K=i.RGBA16F),U===i.UNSIGNED_BYTE&&(K=pt===re?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function I(M,g,U){return A(M,U)===!0||M.isFramebufferTexture&&M.minFilter!==Le&&M.minFilter!==Ue?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function R(M){return M===Le||M===_u||M===qr?i.NEAREST:i.LINEAR}function C(M){let g=M.target;g.removeEventListener("dispose",C),st(g),g.isVideoTexture&&h.delete(g)}function W(M){let g=M.target;g.removeEventListener("dispose",W),w(g)}function st(M){let g=n.get(M);if(g.__webglInit===void 0)return;let U=M.source,et=f.get(U);if(et){let $=et[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&_(M),Object.keys(et).length===0&&f.delete(U)}n.remove(M)}function _(M){let g=n.get(M);i.deleteTexture(g.__webglTexture);let U=M.source,et=f.get(U);delete et[g.__cacheKey],o.memory.textures--}function w(M){let g=M.texture,U=n.get(M),et=n.get(g);if(et.__webglTexture!==void 0&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(U.__webglFramebuffer[$]))for(let K=0;K<U.__webglFramebuffer[$].length;K++)i.deleteFramebuffer(U.__webglFramebuffer[$][K]);else i.deleteFramebuffer(U.__webglFramebuffer[$]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[$])}else{if(Array.isArray(U.__webglFramebuffer))for(let $=0;$<U.__webglFramebuffer.length;$++)i.deleteFramebuffer(U.__webglFramebuffer[$]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let $=0;$<U.__webglColorRenderbuffer.length;$++)U.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[$]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let $=0,K=g.length;$<K;$++){let pt=n.get(g[$]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),o.memory.textures--),n.remove(g[$])}n.remove(g),n.remove(M)}let H=0;function Q(){H=0}function P(){let M=H;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),H+=1,M}function V(M){let g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function B(M,g){let U=n.get(M);if(M.isVideoTexture&&ne(M),M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){let et=M.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(U,M,g);return}}e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+g)}function Y(M,g){let U=n.get(M);if(M.version>0&&U.__version!==M.version){J(U,M,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+g)}function G(M,g){let U=n.get(M);if(M.version>0&&U.__version!==M.version){J(U,M,g);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+g)}function X(M,g){let U=n.get(M);if(M.version>0&&U.__version!==M.version){ut(U,M,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+g)}let q={[kc]:i.REPEAT,[rn]:i.CLAMP_TO_EDGE,[Vc]:i.MIRRORED_REPEAT},it={[Le]:i.NEAREST,[_u]:i.NEAREST_MIPMAP_NEAREST,[qr]:i.NEAREST_MIPMAP_LINEAR,[Ue]:i.LINEAR,[oc]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},ot={[Rg]:i.NEVER,[Ug]:i.ALWAYS,[Pg]:i.LESS,[jd]:i.LEQUAL,[Ig]:i.EQUAL,[Ng]:i.GEQUAL,[Lg]:i.GREATER,[Dg]:i.NOTEQUAL};function At(M,g,U){if(g.type===En&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ue||g.magFilter===oc||g.magFilter===qr||g.magFilter===ui||g.minFilter===Ue||g.minFilter===oc||g.minFilter===qr||g.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),U?(i.texParameteri(M,i.TEXTURE_WRAP_S,q[g.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,q[g.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,q[g.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,it[g.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,it[g.minFilter])):(i.texParameteri(M,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(M,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(g.wrapS!==rn||g.wrapT!==rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,i.TEXTURE_MAG_FILTER,R(g.magFilter)),i.texParameteri(M,i.TEXTURE_MIN_FILTER,R(g.minFilter)),g.minFilter!==Le&&g.minFilter!==Ue&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,ot[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let et=t.get("EXT_texture_filter_anisotropic");if(g.magFilter===Le||g.minFilter!==qr&&g.minFilter!==ui||g.type===En&&t.has("OES_texture_float_linear")===!1||a===!1&&g.type===ts&&t.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||n.get(g).__currentAnisotropy)&&(i.texParameterf(M,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy)}}function k(M,g){let U=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",C));let et=g.source,$=f.get(et);$===void 0&&($={},f.set(et,$));let K=V(g);if(K!==M.__cacheKey){$[K]===void 0&&($[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),$[K].usedTimes++;let pt=$[M.__cacheKey];pt!==void 0&&($[M.__cacheKey].usedTimes--,pt.usedTimes===0&&_(g)),M.__cacheKey=K,M.__webglTexture=$[K].texture}return U}function J(M,g,U){let et=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(et=i.TEXTURE_3D);let $=k(M,g),K=g.source;e.bindTexture(et,M.__webglTexture,i.TEXTURE0+U);let pt=n.get(K);if(K.version!==pt.__version||$===!0){e.activeTexture(i.TEXTURE0+U);let at=Qt.getPrimaries(Qt.workingColorSpace),dt=g.colorSpace===je?null:Qt.getPrimaries(g.colorSpace),bt=g.colorSpace===je||at===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Nt=d(g)&&p(g.image)===!1,j=y(g.image,Nt,!1,r.maxTextureSize);j=Dt(g,j);let Jt=p(j)||a,Ht=s.convert(g.format,g.colorSpace),Rt=s.convert(g.type),_t=T(g.internalFormat,Ht,Rt,g.colorSpace,g.isVideoTexture);At(et,g,Jt);let lt,Ot=g.mipmaps,E=a&&g.isVideoTexture!==!0&&_t!==qd,nt=pt.__version===void 0||$===!0,ct=K.dataReady,yt=I(g,j,Jt);if(g.isDepthTexture)_t=i.DEPTH_COMPONENT,a?g.type===En?_t=i.DEPTH_COMPONENT32F:g.type===Vn?_t=i.DEPTH_COMPONENT24:g.type===di?_t=i.DEPTH24_STENCIL8:_t=i.DEPTH_COMPONENT16:g.type===En&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===fi&&_t===i.DEPTH_COMPONENT&&g.type!==xl&&g.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=Vn,Rt=s.convert(g.type)),g.format===cr&&_t===i.DEPTH_COMPONENT&&(_t=i.DEPTH_STENCIL,g.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=di,Rt=s.convert(g.type))),nt&&(E?e.texStorage2D(i.TEXTURE_2D,1,_t,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,_t,j.width,j.height,0,Ht,Rt,null));else if(g.isDataTexture)if(Ot.length>0&&Jt){E&&nt&&e.texStorage2D(i.TEXTURE_2D,yt,_t,Ot[0].width,Ot[0].height);for(let b=0,tt=Ot.length;b<tt;b++)lt=Ot[b],E?ct&&e.texSubImage2D(i.TEXTURE_2D,b,0,0,lt.width,lt.height,Ht,Rt,lt.data):e.texImage2D(i.TEXTURE_2D,b,_t,lt.width,lt.height,0,Ht,Rt,lt.data);g.generateMipmaps=!1}else E?(nt&&e.texStorage2D(i.TEXTURE_2D,yt,_t,j.width,j.height),ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,Ht,Rt,j.data)):e.texImage2D(i.TEXTURE_2D,0,_t,j.width,j.height,0,Ht,Rt,j.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){E&&nt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,_t,Ot[0].width,Ot[0].height,j.depth);for(let b=0,tt=Ot.length;b<tt;b++)lt=Ot[b],g.format!==sn?Ht!==null?E?ct&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,b,0,0,0,lt.width,lt.height,j.depth,Ht,lt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,b,_t,lt.width,lt.height,j.depth,0,lt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):E?ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,b,0,0,0,lt.width,lt.height,j.depth,Ht,Rt,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,b,_t,lt.width,lt.height,j.depth,0,Ht,Rt,lt.data)}else{E&&nt&&e.texStorage2D(i.TEXTURE_2D,yt,_t,Ot[0].width,Ot[0].height);for(let b=0,tt=Ot.length;b<tt;b++)lt=Ot[b],g.format!==sn?Ht!==null?E?ct&&e.compressedTexSubImage2D(i.TEXTURE_2D,b,0,0,lt.width,lt.height,Ht,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,b,_t,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):E?ct&&e.texSubImage2D(i.TEXTURE_2D,b,0,0,lt.width,lt.height,Ht,Rt,lt.data):e.texImage2D(i.TEXTURE_2D,b,_t,lt.width,lt.height,0,Ht,Rt,lt.data)}else if(g.isDataArrayTexture)E?(nt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,_t,j.width,j.height,j.depth),ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Ht,Rt,j.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,j.width,j.height,j.depth,0,Ht,Rt,j.data);else if(g.isData3DTexture)E?(nt&&e.texStorage3D(i.TEXTURE_3D,yt,_t,j.width,j.height,j.depth),ct&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Ht,Rt,j.data)):e.texImage3D(i.TEXTURE_3D,0,_t,j.width,j.height,j.depth,0,Ht,Rt,j.data);else if(g.isFramebufferTexture){if(nt)if(E)e.texStorage2D(i.TEXTURE_2D,yt,_t,j.width,j.height);else{let b=j.width,tt=j.height;for(let Z=0;Z<yt;Z++)e.texImage2D(i.TEXTURE_2D,Z,_t,b,tt,0,Ht,Rt,null),b>>=1,tt>>=1}}else if(Ot.length>0&&Jt){E&&nt&&e.texStorage2D(i.TEXTURE_2D,yt,_t,Ot[0].width,Ot[0].height);for(let b=0,tt=Ot.length;b<tt;b++)lt=Ot[b],E?ct&&e.texSubImage2D(i.TEXTURE_2D,b,0,0,Ht,Rt,lt):e.texImage2D(i.TEXTURE_2D,b,_t,Ht,Rt,lt);g.generateMipmaps=!1}else E?(nt&&e.texStorage2D(i.TEXTURE_2D,yt,_t,j.width,j.height),ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ht,Rt,j)):e.texImage2D(i.TEXTURE_2D,0,_t,Ht,Rt,j);A(g,Jt)&&S(et),pt.__version=K.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function ut(M,g,U){if(g.image.length!==6)return;let et=k(M,g),$=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+U);let K=n.get($);if($.version!==K.__version||et===!0){e.activeTexture(i.TEXTURE0+U);let pt=Qt.getPrimaries(Qt.workingColorSpace),at=g.colorSpace===je?null:Qt.getPrimaries(g.colorSpace),dt=g.colorSpace===je||pt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let bt=g.isCompressedTexture||g.image[0].isCompressedTexture,Nt=g.image[0]&&g.image[0].isDataTexture,j=[];for(let b=0;b<6;b++)!bt&&!Nt?j[b]=y(g.image[b],!1,!0,r.maxCubemapSize):j[b]=Nt?g.image[b].image:g.image[b],j[b]=Dt(g,j[b]);let Jt=j[0],Ht=p(Jt)||a,Rt=s.convert(g.format,g.colorSpace),_t=s.convert(g.type),lt=T(g.internalFormat,Rt,_t,g.colorSpace),Ot=a&&g.isVideoTexture!==!0,E=K.__version===void 0||et===!0,nt=$.dataReady,ct=I(g,Jt,Ht);At(i.TEXTURE_CUBE_MAP,g,Ht);let yt;if(bt){Ot&&E&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,lt,Jt.width,Jt.height);for(let b=0;b<6;b++){yt=j[b].mipmaps;for(let tt=0;tt<yt.length;tt++){let Z=yt[tt];g.format!==sn?Rt!==null?Ot?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,tt,0,0,Z.width,Z.height,Rt,Z.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,tt,lt,Z.width,Z.height,0,Z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,tt,0,0,Z.width,Z.height,Rt,_t,Z.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,tt,lt,Z.width,Z.height,0,Rt,_t,Z.data)}}}else{yt=g.mipmaps,Ot&&E&&(yt.length>0&&ct++,e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,lt,j[0].width,j[0].height));for(let b=0;b<6;b++)if(Nt){Ot?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,0,0,j[b].width,j[b].height,Rt,_t,j[b].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,lt,j[b].width,j[b].height,0,Rt,_t,j[b].data);for(let tt=0;tt<yt.length;tt++){let mt=yt[tt].image[b].image;Ot?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,tt+1,0,0,mt.width,mt.height,Rt,_t,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,tt+1,lt,mt.width,mt.height,0,Rt,_t,mt.data)}}else{Ot?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,0,0,Rt,_t,j[b]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,lt,Rt,_t,j[b]);for(let tt=0;tt<yt.length;tt++){let Z=yt[tt];Ot?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,tt+1,0,0,Rt,_t,Z.image[b]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+b,tt+1,lt,Rt,_t,Z.image[b])}}}A(g,Ht)&&S(i.TEXTURE_CUBE_MAP),K.__version=$.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function St(M,g,U,et,$,K){let pt=s.convert(U.format,U.colorSpace),at=s.convert(U.type),dt=T(U.internalFormat,pt,at,U.colorSpace);if(!n.get(g).__hasExternalTextures){let Nt=Math.max(1,g.width>>K),j=Math.max(1,g.height>>K);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,K,dt,Nt,j,g.depth,0,pt,at,null):e.texImage2D($,K,dt,Nt,j,0,pt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),gt(g)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,$,n.get(U).__webglTexture,0,Ct(g)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,$,n.get(U).__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(M,g,U){if(i.bindRenderbuffer(i.RENDERBUFFER,M),g.depthBuffer&&!g.stencilBuffer){let et=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(U||gt(g)){let $=g.depthTexture;$&&$.isDepthTexture&&($.type===En?et=i.DEPTH_COMPONENT32F:$.type===Vn&&(et=i.DEPTH_COMPONENT24));let K=Ct(g);gt(g)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,et,g.width,g.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,K,et,g.width,g.height)}else i.renderbufferStorage(i.RENDERBUFFER,et,g.width,g.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,M)}else if(g.depthBuffer&&g.stencilBuffer){let et=Ct(g);U&&gt(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,i.DEPTH24_STENCIL8,g.width,g.height):gt(g)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,i.DEPTH24_STENCIL8,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,M)}else{let et=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let $=0;$<et.length;$++){let K=et[$],pt=s.convert(K.format,K.colorSpace),at=s.convert(K.type),dt=T(K.internalFormat,pt,at,K.colorSpace),bt=Ct(g);U&&gt(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,dt,g.width,g.height):gt(g)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,dt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,dt,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),B(g.depthTexture,0);let et=n.get(g.depthTexture).__webglTexture,$=Ct(g);if(g.depthTexture.format===fi)gt(g)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(g.depthTexture.format===cr)gt(g)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function $t(M){let g=n.get(M),U=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");ft(g.__webglFramebuffer,M)}else if(U){g.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[et]),g.__webglDepthbuffer[et]=i.createRenderbuffer(),Et(g.__webglDepthbuffer[et],M,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=i.createRenderbuffer(),Et(g.__webglDepthbuffer,M,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(M,g,U){let et=n.get(M);g!==void 0&&St(et.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&$t(M)}function D(M){let g=M.texture,U=n.get(M),et=n.get(g);M.addEventListener("dispose",W),M.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=g.version,o.memory.textures++);let $=M.isWebGLCubeRenderTarget===!0,K=M.isWebGLMultipleRenderTargets===!0,pt=p(M)||a;if($){U.__webglFramebuffer=[];for(let at=0;at<6;at++)if(a&&g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[at]=[];for(let dt=0;dt<g.mipmaps.length;dt++)U.__webglFramebuffer[at][dt]=i.createFramebuffer()}else U.__webglFramebuffer[at]=i.createFramebuffer()}else{if(a&&g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let at=0;at<g.mipmaps.length;at++)U.__webglFramebuffer[at]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(K)if(r.drawBuffers){let at=M.texture;for(let dt=0,bt=at.length;dt<bt;dt++){let Nt=n.get(at[dt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&gt(M)===!1){let at=K?g:[g];U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let dt=0;dt<at.length;dt++){let bt=at[dt];U.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[dt]);let Nt=s.convert(bt.format,bt.colorSpace),j=s.convert(bt.type),Jt=T(bt.internalFormat,Nt,j,bt.colorSpace,M.isXRRenderTarget===!0),Ht=Ct(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,Jt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,U.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(U.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),At(i.TEXTURE_CUBE_MAP,g,pt);for(let at=0;at<6;at++)if(a&&g.mipmaps&&g.mipmaps.length>0)for(let dt=0;dt<g.mipmaps.length;dt++)St(U.__webglFramebuffer[at][dt],M,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,dt);else St(U.__webglFramebuffer[at],M,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);A(g,pt)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(K){let at=M.texture;for(let dt=0,bt=at.length;dt<bt;dt++){let Nt=at[dt],j=n.get(Nt);e.bindTexture(i.TEXTURE_2D,j.__webglTexture),At(i.TEXTURE_2D,Nt,pt),St(U.__webglFramebuffer,M,Nt,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),A(Nt,pt)&&S(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?at=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,et.__webglTexture),At(at,g,pt),a&&g.mipmaps&&g.mipmaps.length>0)for(let dt=0;dt<g.mipmaps.length;dt++)St(U.__webglFramebuffer[dt],M,g,i.COLOR_ATTACHMENT0,at,dt);else St(U.__webglFramebuffer,M,g,i.COLOR_ATTACHMENT0,at,0);A(g,pt)&&S(at),e.unbindTexture()}M.depthBuffer&&$t(M)}function fe(M){let g=p(M)||a,U=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let et=0,$=U.length;et<$;et++){let K=U[et];if(A(K,g)){let pt=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,at=n.get(K).__webglTexture;e.bindTexture(pt,at),S(pt),e.unbindTexture()}}}function xt(M){if(a&&M.samples>0&&gt(M)===!1){let g=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],U=M.width,et=M.height,$=i.COLOR_BUFFER_BIT,K=[],pt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=n.get(M),dt=M.isWebGLMultipleRenderTargets===!0;if(dt)for(let bt=0;bt<g.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let bt=0;bt<g.length;bt++){K.push(i.COLOR_ATTACHMENT0+bt),M.depthBuffer&&K.push(pt);let Nt=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(Nt===!1&&(M.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),dt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,at.__webglColorRenderbuffer[bt]),Nt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[pt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[pt])),dt){let j=n.get(g[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,U,et,0,0,U,et,$,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let bt=0;bt<g.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,at.__webglColorRenderbuffer[bt]);let Nt=n.get(g[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}}function Ct(M){return Math.min(r.maxSamples,M.samples)}function gt(M){let g=n.get(M);return a&&M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ne(M){let g=o.render.frame;h.get(M)!==g&&(h.set(M,g),M.update())}function Dt(M,g){let U=M.colorSpace,et=M.format,$=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Hc||U!==An&&U!==je&&(Qt.getTransfer(U)===re?a===!1?t.has("EXT_sRGB")===!0&&et===sn?(M.format=Hc,M.minFilter=Ue,M.generateMipmaps=!1):g=po.sRGBToLinear(g):(et!==sn||$!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),g}this.allocateTextureUnit=P,this.resetTextureUnits=Q,this.setTexture2D=B,this.setTexture2DArray=Y,this.setTexture3D=G,this.setTextureCube=X,this.rebindTextures=Lt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=St,this.useMultisampledRTT=gt}function zx(i,t,e){let n=e.isWebGL2;function r(s,o=je){let a,c=Qt.getTransfer(o);if(s===Wn)return i.UNSIGNED_BYTE;if(s===Vd)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Hd)return i.UNSIGNED_SHORT_5_5_5_1;if(s===_g)return i.BYTE;if(s===yg)return i.SHORT;if(s===xl)return i.UNSIGNED_SHORT;if(s===kd)return i.INT;if(s===Vn)return i.UNSIGNED_INT;if(s===En)return i.FLOAT;if(s===ts)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===xg)return i.ALPHA;if(s===sn)return i.RGBA;if(s===Mg)return i.LUMINANCE;if(s===Sg)return i.LUMINANCE_ALPHA;if(s===fi)return i.DEPTH_COMPONENT;if(s===cr)return i.DEPTH_STENCIL;if(s===Hc)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===bg)return i.RED;if(s===Gd)return i.RED_INTEGER;if(s===Eg)return i.RG;if(s===Wd)return i.RG_INTEGER;if(s===Xd)return i.RGBA_INTEGER;if(s===ac||s===cc||s===lc||s===hc)if(c===re)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ac)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ac)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===cc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===lc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yu||s===xu||s===Mu||s===Su)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===yu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Mu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Su)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qd)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===bu||s===Eu)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===bu)return c===re?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Eu)return c===re?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===wu||s===Tu||s===Au||s===Cu||s===Ru||s===Pu||s===Iu||s===Lu||s===Du||s===Nu||s===Uu||s===Ou||s===Fu||s===Bu)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===wu)return c===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Tu)return c===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Au)return c===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Cu)return c===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ru)return c===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pu)return c===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Iu)return c===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Lu)return c===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Du)return c===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Nu)return c===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Uu)return c===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ou)return c===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Fu)return c===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Bu)return c===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===uc||s===zu||s===ku)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===uc)return c===re?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===zu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ku)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===wg||s===Vu||s===Hu||s===Gu)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===uc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Vu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Hu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Gu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===di?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}var nl=class extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},er=class extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},kx={type:"move"},Qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),d=this._getHandJoint(l,y);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,v=.005;l.inputState.pinching&&f>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kx)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new er;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Vx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,il=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let r=new qn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){let n=e.cameras[0].viewport,r=new mn({extensions:{fragDepth:!0},vertexShader:Vx,fragmentShader:Hx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ve(new bo(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}},rl=class extends pn{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,m=null,v=null,y=new il,p=e.getContextAttributes(),d=null,A=null,S=[],T=[],I=new It,R=null,C=new De;C.layers.enable(1),C.viewport=new _e;let W=new De;W.layers.enable(2),W.viewport=new _e;let st=[C,W],_=new nl;_.layers.enable(1),_.layers.enable(2);let w=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let J=S[k];return J===void 0&&(J=new Qr,S[k]=J),J.getTargetRaySpace()},this.getControllerGrip=function(k){let J=S[k];return J===void 0&&(J=new Qr,S[k]=J),J.getGripSpace()},this.getHand=function(k){let J=S[k];return J===void 0&&(J=new Qr,S[k]=J),J.getHandSpace()};function Q(k){let J=T.indexOf(k.inputSource);if(J===-1)return;let ut=S[J];ut!==void 0&&(ut.update(k.inputSource,k.frame,l||o),ut.dispatchEvent({type:k.type,data:k.inputSource}))}function P(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",V);for(let k=0;k<S.length;k++){let J=T[k];J!==null&&(T[k]=null,S[k].disconnect(J))}w=null,H=null,y.reset(),t.setRenderTarget(d),m=null,f=null,u=null,r=null,A=null,At.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=function(k){return Dl(this,null,function*(){if(r=k,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",P),r.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&(yield e.makeXRCompatible()),R=t.getPixelRatio(),t.getSize(I),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let J={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,J),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new Cn(m.framebufferWidth,m.framebufferHeight,{format:sn,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let J=null,ut=null,St=null;p.depth&&(St=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=p.stencil?cr:fi,ut=p.stencil?di:Vn);let Et={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:s};u=new XRWebGLBinding(r,e),f=u.createProjectionLayer(Et),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),A=new Cn(f.textureWidth,f.textureHeight,{format:sn,type:Wn,depthTexture:new To(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});let ft=t.properties.get(A);ft.__ignoreDepthValues=f.ignoreDepthValues}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),At.setContext(r),At.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function V(k){for(let J=0;J<k.removed.length;J++){let ut=k.removed[J],St=T.indexOf(ut);St>=0&&(T[St]=null,S[St].disconnect(ut))}for(let J=0;J<k.added.length;J++){let ut=k.added[J],St=T.indexOf(ut);if(St===-1){for(let ft=0;ft<S.length;ft++)if(ft>=T.length){T.push(ut),St=ft;break}else if(T[ft]===null){T[ft]=ut,St=ft;break}if(St===-1)break}let Et=S[St];Et&&Et.connect(ut)}}let B=new N,Y=new N;function G(k,J,ut){B.setFromMatrixPosition(J.matrixWorld),Y.setFromMatrixPosition(ut.matrixWorld);let St=B.distanceTo(Y),Et=J.projectionMatrix.elements,ft=ut.projectionMatrix.elements,$t=Et[14]/(Et[10]-1),Lt=Et[14]/(Et[10]+1),D=(Et[9]+1)/Et[5],fe=(Et[9]-1)/Et[5],xt=(Et[8]-1)/Et[0],Ct=(ft[8]+1)/ft[0],gt=$t*xt,ne=$t*Ct,Dt=St/(-xt+Ct),M=Dt*-xt;J.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(M),k.translateZ(Dt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();let g=$t+Dt,U=Lt+Dt,et=gt-M,$=ne+(St-M),K=D*Lt/U*g,pt=fe*Lt/U*g;k.projectionMatrix.makePerspective(et,$,K,pt,g,U),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function X(k,J){J===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(J.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;y.texture!==null&&(k.near=y.depthNear,k.far=y.depthFar),_.near=W.near=C.near=k.near,_.far=W.far=C.far=k.far,(w!==_.near||H!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,H=_.far,C.near=w,C.far=H,W.near=w,W.far=H,C.updateProjectionMatrix(),W.updateProjectionMatrix(),k.updateProjectionMatrix());let J=k.parent,ut=_.cameras;X(_,J);for(let St=0;St<ut.length;St++)X(ut[St],J);ut.length===2?G(_,C,W):_.projectionMatrix.copy(C.projectionMatrix),q(k,_,J)};function q(k,J,ut){ut===null?k.matrix.copy(J.matrixWorld):(k.matrix.copy(ut.matrixWorld),k.matrix.invert(),k.matrix.multiply(J.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=es*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(k){c=k,f!==null&&(f.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.hasDepthSensing=function(){return y.texture!==null};let it=null;function ot(k,J){if(h=J.getViewerPose(l||o),v=J,h!==null){let ut=h.views;m!==null&&(t.setRenderTargetFramebuffer(A,m.framebuffer),t.setRenderTarget(A));let St=!1;ut.length!==_.cameras.length&&(_.cameras.length=0,St=!0);for(let ft=0;ft<ut.length;ft++){let $t=ut[ft],Lt=null;if(m!==null)Lt=m.getViewport($t);else{let fe=u.getViewSubImage(f,$t);Lt=fe.viewport,ft===0&&(t.setRenderTargetTextures(A,fe.colorTexture,f.ignoreDepthValues?void 0:fe.depthStencilTexture),t.setRenderTarget(A))}let D=st[ft];D===void 0&&(D=new De,D.layers.enable(ft),D.viewport=new _e,st[ft]=D),D.matrix.fromArray($t.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray($t.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),ft===0&&(_.matrix.copy(D.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),St===!0&&_.cameras.push(D)}let Et=r.enabledFeatures;if(Et&&Et.includes("depth-sensing")){let ft=u.getDepthInformation(ut[0]);ft&&ft.isValid&&ft.texture&&y.init(t,ft,r.renderState)}}for(let ut=0;ut<S.length;ut++){let St=T[ut],Et=S[ut];St!==null&&Et!==void 0&&Et.update(St,J,l||o)}y.render(t,_),it&&it(k,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),v=null}let At=new tf;At.setAnimationLoop(ot),this.setAnimationLoop=function(k){it=k},this.dispose=function(){}}};function Gx(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Qd(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,A,S,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),u(p,d)):d.isMeshPhongMaterial?(s(p,d),h(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,T)):d.isMeshMatcapMaterial?(s(p,d),v(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),y(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?c(p,d,A,S):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Oe&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Oe&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let A=t.get(d).envMap;if(A&&(p.envMap.value=A,p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;let S=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*S,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,A,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*A,p.scale.value=S*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,A){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Oe&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,d){d.matcap&&(p.matcap.value=d.matcap)}function y(p,d){let A=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Wx(i,t,e,n){let r={},s={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(A,S){let T=S.program;n.uniformBlockBinding(A,T)}function l(A,S){let T=r[A.id];T===void 0&&(v(A),T=h(A),r[A.id]=T,A.addEventListener("dispose",p));let I=S.program;n.updateUBOMapping(A,I);let R=t.render.frame;s[A.id]!==R&&(f(A),s[A.id]=R)}function h(A){let S=u();A.__bindingPointIndex=S;let T=i.createBuffer(),I=A.__size,R=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,I,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,T),T}function u(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){let S=r[A.id],T=A.uniforms,I=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let R=0,C=T.length;R<C;R++){let W=Array.isArray(T[R])?T[R]:[T[R]];for(let st=0,_=W.length;st<_;st++){let w=W[st];if(m(w,R,st,I)===!0){let H=w.__offset,Q=Array.isArray(w.value)?w.value:[w.value],P=0;for(let V=0;V<Q.length;V++){let B=Q[V],Y=y(B);typeof B=="number"||typeof B=="boolean"?(w.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,H+P,w.__data)):B.isMatrix3?(w.__data[0]=B.elements[0],w.__data[1]=B.elements[1],w.__data[2]=B.elements[2],w.__data[3]=0,w.__data[4]=B.elements[3],w.__data[5]=B.elements[4],w.__data[6]=B.elements[5],w.__data[7]=0,w.__data[8]=B.elements[6],w.__data[9]=B.elements[7],w.__data[10]=B.elements[8],w.__data[11]=0):(B.toArray(w.__data,P),P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,S,T,I){let R=A.value,C=S+"_"+T;if(I[C]===void 0)return typeof R=="number"||typeof R=="boolean"?I[C]=R:I[C]=R.clone(),!0;{let W=I[C];if(typeof R=="number"||typeof R=="boolean"){if(W!==R)return I[C]=R,!0}else if(W.equals(R)===!1)return W.copy(R),!0}return!1}function v(A){let S=A.uniforms,T=0,I=16;for(let C=0,W=S.length;C<W;C++){let st=Array.isArray(S[C])?S[C]:[S[C]];for(let _=0,w=st.length;_<w;_++){let H=st[_],Q=Array.isArray(H.value)?H.value:[H.value];for(let P=0,V=Q.length;P<V;P++){let B=Q[P],Y=y(B),G=T%I;G!==0&&I-G<Y.boundary&&(T+=I-G),H.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=T,T+=Y.storage}}}let R=T%I;return R>0&&(T+=I-R),A.__size=T,A.__cache={},this}function y(A){let S={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(S.boundary=4,S.storage=4):A.isVector2?(S.boundary=8,S.storage=8):A.isVector3||A.isColor?(S.boundary=16,S.storage=12):A.isVector4?(S.boundary=16,S.storage=16):A.isMatrix3?(S.boundary=48,S.storage=48):A.isMatrix4?(S.boundary=64,S.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),S}function p(A){let S=A.target;S.removeEventListener("dispose",p);let T=o.indexOf(S.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function d(){for(let A in r)i.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:c,update:l,dispose:d}}var os=class{constructor(t={}){let{canvas:e=Zg(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let m=new Uint32Array(4),v=new Int32Array(4),y=null,p=null,d=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=be,this._useLegacyLights=!1,this.toneMapping=Gn,this.toneMappingExposure=1;let S=this,T=!1,I=0,R=0,C=null,W=-1,st=null,_=new _e,w=new _e,H=null,Q=new Yt(0),P=0,V=e.width,B=e.height,Y=1,G=null,X=null,q=new _e(0,0,V,B),it=new _e(0,0,V,B),ot=!1,At=new ss,k=!1,J=!1,ut=null,St=new ye,Et=new It,ft=new N,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Lt(){return C===null?Y:1}let D=n;function fe(x,L){for(let F=0;F<x.length;F++){let z=x[F],O=e.getContext(z,L);if(O!==null)return O}return null}try{let x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_l}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",b,!1),e.addEventListener("webglcontextcreationerror",tt,!1),D===null){let L=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&L.shift(),D=fe(L,x),D===null)throw fe(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let xt,Ct,gt,ne,Dt,M,g,U,et,$,K,pt,at,dt,bt,Nt,j,Jt,Ht,Rt,_t,lt,Ot,E;function nt(){xt=new ay(D),Ct=new ey(D,xt,t),xt.init(Ct),lt=new zx(D,xt,Ct),gt=new Fx(D,xt,Ct),ne=new hy(D),Dt=new wx,M=new Bx(D,xt,gt,Dt,Ct,lt,ne),g=new iy(S),U=new oy(S),et=new _v(D,Ct),Ot=new Q0(D,xt,et,Ct),$=new cy(D,et,ne,Ot),K=new py(D,$,et,ne),Ht=new fy(D,Ct,M),Nt=new ny(Dt),pt=new Ex(S,g,U,xt,Ct,Ot,Nt),at=new Gx(S,Dt),dt=new Ax,bt=new Dx(xt,Ct),Jt=new K0(S,g,U,gt,K,f,c),j=new Ox(S,K,Ct),E=new Wx(D,ne,Ct,gt),Rt=new ty(D,xt,ne,Ct),_t=new ly(D,xt,ne,Ct),ne.programs=pt.programs,S.capabilities=Ct,S.extensions=xt,S.properties=Dt,S.renderLists=dt,S.shadowMap=j,S.state=gt,S.info=ne}nt();let ct=new rl(S,D);this.xr=ct,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let x=xt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=xt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(x){x!==void 0&&(Y=x,this.setSize(V,B,!1))},this.getSize=function(x){return x.set(V,B)},this.setSize=function(x,L,F=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=x,B=L,e.width=Math.floor(x*Y),e.height=Math.floor(L*Y),F===!0&&(e.style.width=x+"px",e.style.height=L+"px"),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(V*Y,B*Y).floor()},this.setDrawingBufferSize=function(x,L,F){V=x,B=L,Y=F,e.width=Math.floor(x*F),e.height=Math.floor(L*F),this.setViewport(0,0,x,L)},this.getCurrentViewport=function(x){return x.copy(_)},this.getViewport=function(x){return x.copy(q)},this.setViewport=function(x,L,F,z){x.isVector4?q.set(x.x,x.y,x.z,x.w):q.set(x,L,F,z),gt.viewport(_.copy(q).multiplyScalar(Y).floor())},this.getScissor=function(x){return x.copy(it)},this.setScissor=function(x,L,F,z){x.isVector4?it.set(x.x,x.y,x.z,x.w):it.set(x,L,F,z),gt.scissor(w.copy(it).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ot},this.setScissorTest=function(x){gt.setScissorTest(ot=x)},this.setOpaqueSort=function(x){G=x},this.setTransparentSort=function(x){X=x},this.getClearColor=function(x){return x.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor.apply(Jt,arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha.apply(Jt,arguments)},this.clear=function(x=!0,L=!0,F=!0){let z=0;if(x){let O=!1;if(C!==null){let ht=C.texture.format;O=ht===Xd||ht===Wd||ht===Gd}if(O){let ht=C.texture.type,vt=ht===Wn||ht===Vn||ht===xl||ht===di||ht===Vd||ht===Hd,Tt=Jt.getClearColor(),Pt=Jt.getClearAlpha(),Gt=Tt.r,Ut=Tt.g,Ft=Tt.b;vt?(m[0]=Gt,m[1]=Ut,m[2]=Ft,m[3]=Pt,D.clearBufferuiv(D.COLOR,0,m)):(v[0]=Gt,v[1]=Ut,v[2]=Ft,v[3]=Pt,D.clearBufferiv(D.COLOR,0,v))}else z|=D.COLOR_BUFFER_BIT}L&&(z|=D.DEPTH_BUFFER_BIT),F&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",b,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),dt.dispose(),bt.dispose(),Dt.dispose(),g.dispose(),U.dispose(),K.dispose(),Ot.dispose(),E.dispose(),pt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",xe),ct.removeEventListener("sessionend",Zt),ut&&(ut.dispose(),ut=null),ce.stop()};function yt(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function b(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let x=ne.autoReset,L=j.enabled,F=j.autoUpdate,z=j.needsUpdate,O=j.type;nt(),ne.autoReset=x,j.enabled=L,j.autoUpdate=F,j.needsUpdate=z,j.type=O}function tt(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Z(x){let L=x.target;L.removeEventListener("dispose",Z),mt(L)}function mt(x){Mt(x),Dt.remove(x)}function Mt(x){let L=Dt.get(x).programs;L!==void 0&&(L.forEach(function(F){pt.releaseProgram(F)}),x.isShaderMaterial&&pt.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,F,z,O,ht){L===null&&(L=$t);let vt=O.isMesh&&O.matrixWorld.determinant()<0,Tt=pf(x,L,F,z,O);gt.setMaterial(z,vt);let Pt=F.index,Gt=1;if(z.wireframe===!0){if(Pt=$.getWireframeAttribute(F),Pt===void 0)return;Gt=2}let Ut=F.drawRange,Ft=F.attributes.position,le=Ut.start*Gt,Fe=(Ut.start+Ut.count)*Gt;ht!==null&&(le=Math.max(le,ht.start*Gt),Fe=Math.min(Fe,(ht.start+ht.count)*Gt)),Pt!==null?(le=Math.max(le,0),Fe=Math.min(Fe,Pt.count)):Ft!=null&&(le=Math.max(le,0),Fe=Math.min(Fe,Ft.count));let ge=Fe-le;if(ge<0||ge===1/0)return;Ot.setup(O,z,Tt,F,Pt);let gn,se=Rt;if(Pt!==null&&(gn=et.get(Pt),se=_t,se.setIndex(gn)),O.isMesh)z.wireframe===!0?(gt.setLineWidth(z.wireframeLinewidth*Lt()),se.setMode(D.LINES)):se.setMode(D.TRIANGLES);else if(O.isLine){let Wt=z.linewidth;Wt===void 0&&(Wt=1),gt.setLineWidth(Wt*Lt()),O.isLineSegments?se.setMode(D.LINES):O.isLineLoop?se.setMode(D.LINE_LOOP):se.setMode(D.LINE_STRIP)}else O.isPoints?se.setMode(D.POINTS):O.isSprite&&se.setMode(D.TRIANGLES);if(O.isBatchedMesh)se.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)se.renderInstances(le,ge,O.count);else if(F.isInstancedBufferGeometry){let Wt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Bo=Math.min(F.instanceCount,Wt);se.renderInstances(le,ge,Bo)}else se.render(le,ge)};function jt(x,L,F){x.transparent===!0&&x.side===bn&&x.forceSinglePass===!1?(x.side=Oe,x.needsUpdate=!0,hs(x,L,F),x.side=Xn,x.needsUpdate=!0,hs(x,L,F),x.side=bn):hs(x,L,F)}this.compile=function(x,L,F=null){F===null&&(F=x),p=bt.get(F),p.init(),A.push(p),F.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),x!==F&&x.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(S._useLegacyLights);let z=new Set;return x.traverse(function(O){let ht=O.material;if(ht)if(Array.isArray(ht))for(let vt=0;vt<ht.length;vt++){let Tt=ht[vt];jt(Tt,F,O),z.add(Tt)}else jt(ht,F,O),z.add(ht)}),A.pop(),p=null,z},this.compileAsync=function(x,L,F=null){let z=this.compile(x,L,F);return new Promise(O=>{function ht(){if(z.forEach(function(vt){Dt.get(vt).currentProgram.isReady()&&z.delete(vt)}),z.size===0){O(x);return}setTimeout(ht,10)}xt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let qt=null;function te(x){qt&&qt(x)}function xe(){ce.stop()}function Zt(){ce.start()}let ce=new tf;ce.setAnimationLoop(te),typeof self<"u"&&ce.setContext(self),this.setAnimationLoop=function(x){qt=x,ct.setAnimationLoop(x),x===null?ce.stop():ce.start()},ct.addEventListener("sessionstart",xe),ct.addEventListener("sessionend",Zt),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(L),L=ct.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,L,C),p=bt.get(x,A.length),p.init(),A.push(p),St.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),At.setFromProjectionMatrix(St),J=this.localClippingEnabled,k=Nt.init(this.clippingPlanes,J),y=dt.get(x,d.length),y.init(),d.push(y),Ce(x,L,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(G,X),this.info.render.frame++,k===!0&&Nt.beginShadows();let F=p.state.shadowsArray;if(j.render(F,x,L),k===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1)&&Jt.render(y,x),p.setupLights(S._useLegacyLights),L.isArrayCamera){let z=L.cameras;for(let O=0,ht=z.length;O<ht;O++){let vt=z[O];Al(y,x,vt,vt.viewport)}}else Al(y,x,L);C!==null&&(M.updateMultisampleRenderTarget(C),M.updateRenderTargetMipmap(C)),x.isScene===!0&&x.onAfterRender(S,x,L),Ot.resetDefaultState(),W=-1,st=null,A.pop(),A.length>0?p=A[A.length-1]:p=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function Ce(x,L,F,z){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||At.intersectsSprite(x)){z&&ft.setFromMatrixPosition(x.matrixWorld).applyMatrix4(St);let vt=K.update(x),Tt=x.material;Tt.visible&&y.push(x,vt,Tt,F,ft.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||At.intersectsObject(x))){let vt=K.update(x),Tt=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),ft.copy(x.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),ft.copy(vt.boundingSphere.center)),ft.applyMatrix4(x.matrixWorld).applyMatrix4(St)),Array.isArray(Tt)){let Pt=vt.groups;for(let Gt=0,Ut=Pt.length;Gt<Ut;Gt++){let Ft=Pt[Gt],le=Tt[Ft.materialIndex];le&&le.visible&&y.push(x,vt,le,F,ft.z,Ft)}}else Tt.visible&&y.push(x,vt,Tt,F,ft.z,null)}}let ht=x.children;for(let vt=0,Tt=ht.length;vt<Tt;vt++)Ce(ht[vt],L,F,z)}function Al(x,L,F,z){let O=x.opaque,ht=x.transmissive,vt=x.transparent;p.setupLightsView(F),k===!0&&Nt.setGlobalState(S.clippingPlanes,F),ht.length>0&&ff(O,ht,L,F),z&&gt.viewport(_.copy(z)),O.length>0&&ls(O,L,F),ht.length>0&&ls(ht,L,F),vt.length>0&&ls(vt,L,F),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function ff(x,L,F,z){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;let ht=Ct.isWebGL2;ut===null&&(ut=new Cn(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?ts:Wn,minFilter:ui,samples:ht?4:0})),S.getDrawingBufferSize(Et),ht?ut.setSize(Et.x,Et.y):ut.setSize(fo(Et.x),fo(Et.y));let vt=S.getRenderTarget();S.setRenderTarget(ut),S.getClearColor(Q),P=S.getClearAlpha(),P<1&&S.setClearColor(16777215,.5),S.clear();let Tt=S.toneMapping;S.toneMapping=Gn,ls(x,F,z),M.updateMultisampleRenderTarget(ut),M.updateRenderTargetMipmap(ut);let Pt=!1;for(let Gt=0,Ut=L.length;Gt<Ut;Gt++){let Ft=L[Gt],le=Ft.object,Fe=Ft.geometry,ge=Ft.material,gn=Ft.group;if(ge.side===bn&&le.layers.test(z.layers)){let se=ge.side;ge.side=Oe,ge.needsUpdate=!0,Cl(le,F,z,Fe,ge,gn),ge.side=se,ge.needsUpdate=!0,Pt=!0}}Pt===!0&&(M.updateMultisampleRenderTarget(ut),M.updateRenderTargetMipmap(ut)),S.setRenderTarget(vt),S.setClearColor(Q,P),S.toneMapping=Tt}function ls(x,L,F){let z=L.isScene===!0?L.overrideMaterial:null;for(let O=0,ht=x.length;O<ht;O++){let vt=x[O],Tt=vt.object,Pt=vt.geometry,Gt=z===null?vt.material:z,Ut=vt.group;Tt.layers.test(F.layers)&&Cl(Tt,L,F,Pt,Gt,Ut)}}function Cl(x,L,F,z,O,ht){x.onBeforeRender(S,L,F,z,O,ht),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),O.onBeforeRender(S,L,F,z,x,ht),O.transparent===!0&&O.side===bn&&O.forceSinglePass===!1?(O.side=Oe,O.needsUpdate=!0,S.renderBufferDirect(F,L,z,O,x,ht),O.side=Xn,O.needsUpdate=!0,S.renderBufferDirect(F,L,z,O,x,ht),O.side=bn):S.renderBufferDirect(F,L,z,O,x,ht),x.onAfterRender(S,L,F,z,O,ht)}function hs(x,L,F){L.isScene!==!0&&(L=$t);let z=Dt.get(x),O=p.state.lights,ht=p.state.shadowsArray,vt=O.state.version,Tt=pt.getParameters(x,O.state,ht,L,F),Pt=pt.getProgramCacheKey(Tt),Gt=z.programs;z.environment=x.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(x.isMeshStandardMaterial?U:g).get(x.envMap||z.environment),Gt===void 0&&(x.addEventListener("dispose",Z),Gt=new Map,z.programs=Gt);let Ut=Gt.get(Pt);if(Ut!==void 0){if(z.currentProgram===Ut&&z.lightsStateVersion===vt)return Pl(x,Tt),Ut}else Tt.uniforms=pt.getUniforms(x),x.onBuild(F,Tt,S),x.onBeforeCompile(Tt,S),Ut=pt.acquireProgram(Tt,Pt),Gt.set(Pt,Ut),z.uniforms=Tt.uniforms;let Ft=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ft.clippingPlanes=Nt.uniform),Pl(x,Tt),z.needsLights=gf(x),z.lightsStateVersion=vt,z.needsLights&&(Ft.ambientLightColor.value=O.state.ambient,Ft.lightProbe.value=O.state.probe,Ft.directionalLights.value=O.state.directional,Ft.directionalLightShadows.value=O.state.directionalShadow,Ft.spotLights.value=O.state.spot,Ft.spotLightShadows.value=O.state.spotShadow,Ft.rectAreaLights.value=O.state.rectArea,Ft.ltc_1.value=O.state.rectAreaLTC1,Ft.ltc_2.value=O.state.rectAreaLTC2,Ft.pointLights.value=O.state.point,Ft.pointLightShadows.value=O.state.pointShadow,Ft.hemisphereLights.value=O.state.hemi,Ft.directionalShadowMap.value=O.state.directionalShadowMap,Ft.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ft.spotShadowMap.value=O.state.spotShadowMap,Ft.spotLightMatrix.value=O.state.spotLightMatrix,Ft.spotLightMap.value=O.state.spotLightMap,Ft.pointShadowMap.value=O.state.pointShadowMap,Ft.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=Ut,z.uniformsList=null,Ut}function Rl(x){if(x.uniformsList===null){let L=x.currentProgram.getUniforms();x.uniformsList=sr.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function Pl(x,L){let F=Dt.get(x);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function pf(x,L,F,z,O){L.isScene!==!0&&(L=$t),M.resetTextureUnits();let ht=L.fog,vt=z.isMeshStandardMaterial?L.environment:null,Tt=C===null?S.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:An,Pt=(z.isMeshStandardMaterial?U:g).get(z.envMap||vt),Gt=z.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ut=!!F.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ft=!!F.morphAttributes.position,le=!!F.morphAttributes.normal,Fe=!!F.morphAttributes.color,ge=Gn;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ge=S.toneMapping);let gn=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,se=gn!==void 0?gn.length:0,Wt=Dt.get(z),Bo=p.state.lights;if(k===!0&&(J===!0||x!==st)){let He=x===st&&z.id===W;Nt.setState(z,x,He)}let oe=!1;z.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Bo.state.version||Wt.outputColorSpace!==Tt||O.isBatchedMesh&&Wt.batching===!1||!O.isBatchedMesh&&Wt.batching===!0||O.isInstancedMesh&&Wt.instancing===!1||!O.isInstancedMesh&&Wt.instancing===!0||O.isSkinnedMesh&&Wt.skinning===!1||!O.isSkinnedMesh&&Wt.skinning===!0||O.isInstancedMesh&&Wt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Wt.instancingColor===!1&&O.instanceColor!==null||Wt.envMap!==Pt||z.fog===!0&&Wt.fog!==ht||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Nt.numPlanes||Wt.numIntersection!==Nt.numIntersection)||Wt.vertexAlphas!==Gt||Wt.vertexTangents!==Ut||Wt.morphTargets!==Ft||Wt.morphNormals!==le||Wt.morphColors!==Fe||Wt.toneMapping!==ge||Ct.isWebGL2===!0&&Wt.morphTargetsCount!==se)&&(oe=!0):(oe=!0,Wt.__version=z.version);let Yn=Wt.currentProgram;oe===!0&&(Yn=hs(z,L,O));let Il=!1,fr=!1,zo=!1,Ee=Yn.getUniforms(),$n=Wt.uniforms;if(gt.useProgram(Yn.program)&&(Il=!0,fr=!0,zo=!0),z.id!==W&&(W=z.id,fr=!0),Il||st!==x){Ee.setValue(D,"projectionMatrix",x.projectionMatrix),Ee.setValue(D,"viewMatrix",x.matrixWorldInverse);let He=Ee.map.cameraPosition;He!==void 0&&He.setValue(D,ft.setFromMatrixPosition(x.matrixWorld)),Ct.logarithmicDepthBuffer&&Ee.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ee.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),st!==x&&(st=x,fr=!0,zo=!0)}if(O.isSkinnedMesh){Ee.setOptional(D,O,"bindMatrix"),Ee.setOptional(D,O,"bindMatrixInverse");let He=O.skeleton;He&&(Ct.floatVertexTextures?(He.boneTexture===null&&He.computeBoneTexture(),Ee.setValue(D,"boneTexture",He.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(Ee.setOptional(D,O,"batchingTexture"),Ee.setValue(D,"batchingTexture",O._matricesTexture,M));let ko=F.morphAttributes;if((ko.position!==void 0||ko.normal!==void 0||ko.color!==void 0&&Ct.isWebGL2===!0)&&Ht.update(O,F,Yn),(fr||Wt.receiveShadow!==O.receiveShadow)&&(Wt.receiveShadow=O.receiveShadow,Ee.setValue(D,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&($n.envMap.value=Pt,$n.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),fr&&(Ee.setValue(D,"toneMappingExposure",S.toneMappingExposure),Wt.needsLights&&mf($n,zo),ht&&z.fog===!0&&at.refreshFogUniforms($n,ht),at.refreshMaterialUniforms($n,z,Y,B,ut),sr.upload(D,Rl(Wt),$n,M)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(sr.upload(D,Rl(Wt),$n,M),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ee.setValue(D,"center",O.center),Ee.setValue(D,"modelViewMatrix",O.modelViewMatrix),Ee.setValue(D,"normalMatrix",O.normalMatrix),Ee.setValue(D,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let He=z.uniformsGroups;for(let Vo=0,vf=He.length;Vo<vf;Vo++)if(Ct.isWebGL2){let Ll=He[Vo];E.update(Ll,Yn),E.bind(Ll,Yn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yn}function mf(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function gf(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(x,L,F){Dt.get(x.texture).__webglTexture=L,Dt.get(x.depthTexture).__webglTexture=F;let z=Dt.get(x);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=F===void 0,z.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,L){let F=Dt.get(x);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,F=0){C=x,I=L,R=F;let z=!0,O=null,ht=!1,vt=!1;if(x){let Pt=Dt.get(x);Pt.__useDefaultFramebuffer!==void 0?(gt.bindFramebuffer(D.FRAMEBUFFER,null),z=!1):Pt.__webglFramebuffer===void 0?M.setupRenderTarget(x):Pt.__hasExternalTextures&&M.rebindTextures(x,Dt.get(x.texture).__webglTexture,Dt.get(x.depthTexture).__webglTexture);let Gt=x.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(vt=!0);let Ut=Dt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ut[L])?O=Ut[L][F]:O=Ut[L],ht=!0):Ct.isWebGL2&&x.samples>0&&M.useMultisampledRTT(x)===!1?O=Dt.get(x).__webglMultisampledFramebuffer:Array.isArray(Ut)?O=Ut[F]:O=Ut,_.copy(x.viewport),w.copy(x.scissor),H=x.scissorTest}else _.copy(q).multiplyScalar(Y).floor(),w.copy(it).multiplyScalar(Y).floor(),H=ot;if(gt.bindFramebuffer(D.FRAMEBUFFER,O)&&Ct.drawBuffers&&z&&gt.drawBuffers(x,O),gt.viewport(_),gt.scissor(w),gt.setScissorTest(H),ht){let Pt=Dt.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,Pt.__webglTexture,F)}else if(vt){let Pt=Dt.get(x.texture),Gt=L||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pt.__webglTexture,F||0,Gt)}W=-1},this.readRenderTargetPixels=function(x,L,F,z,O,ht,vt){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Dt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&vt!==void 0&&(Tt=Tt[vt]),Tt){gt.bindFramebuffer(D.FRAMEBUFFER,Tt);try{let Pt=x.texture,Gt=Pt.format,Ut=Pt.type;if(Gt!==sn&&lt.convert(Gt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ft=Ut===ts&&(xt.has("EXT_color_buffer_half_float")||Ct.isWebGL2&&xt.has("EXT_color_buffer_float"));if(Ut!==Wn&&lt.convert(Ut)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ut===En&&(Ct.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!Ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-z&&F>=0&&F<=x.height-O&&D.readPixels(L,F,z,O,lt.convert(Gt),lt.convert(Ut),ht)}finally{let Pt=C!==null?Dt.get(C).__webglFramebuffer:null;gt.bindFramebuffer(D.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(x,L,F=0){let z=Math.pow(2,-F),O=Math.floor(L.image.width*z),ht=Math.floor(L.image.height*z);M.setTexture2D(L,0),D.copyTexSubImage2D(D.TEXTURE_2D,F,0,0,x.x,x.y,O,ht),gt.unbindTexture()},this.copyTextureToTexture=function(x,L,F,z=0){let O=L.image.width,ht=L.image.height,vt=lt.convert(F.format),Tt=lt.convert(F.type);M.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment),L.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,x.x,x.y,O,ht,vt,Tt,L.image.data):L.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,x.x,x.y,L.mipmaps[0].width,L.mipmaps[0].height,vt,L.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,z,x.x,x.y,vt,Tt,L.image),z===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),gt.unbindTexture()},this.copyTextureToTexture3D=function(x,L,F,z,O=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ht=x.max.x-x.min.x+1,vt=x.max.y-x.min.y+1,Tt=x.max.z-x.min.z+1,Pt=lt.convert(z.format),Gt=lt.convert(z.type),Ut;if(z.isData3DTexture)M.setTexture3D(z,0),Ut=D.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)M.setTexture2DArray(z,0),Ut=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);let Ft=D.getParameter(D.UNPACK_ROW_LENGTH),le=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Fe=D.getParameter(D.UNPACK_SKIP_PIXELS),ge=D.getParameter(D.UNPACK_SKIP_ROWS),gn=D.getParameter(D.UNPACK_SKIP_IMAGES),se=F.isCompressedTexture?F.mipmaps[O]:F.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,se.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,se.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,x.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,x.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,x.min.z),F.isDataTexture||F.isData3DTexture?D.texSubImage3D(Ut,O,L.x,L.y,L.z,ht,vt,Tt,Pt,Gt,se.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Ut,O,L.x,L.y,L.z,ht,vt,Tt,Pt,se.data)):D.texSubImage3D(Ut,O,L.x,L.y,L.z,ht,vt,Tt,Pt,Gt,se),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ft),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,le),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Fe),D.pixelStorei(D.UNPACK_SKIP_ROWS,ge),D.pixelStorei(D.UNPACK_SKIP_IMAGES,gn),O===0&&z.generateMipmaps&&D.generateMipmap(Ut),gt.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?M.setTextureCube(x,0):x.isData3DTexture?M.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?M.setTexture2DArray(x,0):M.setTexture2D(x,0),gt.unbindTexture()},this.resetState=function(){I=0,R=0,C=null,gt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Ml?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===No?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===be?pi:Yd}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===pi?be:An}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},sl=class extends os{};sl.prototype.isWebGL1Renderer=!0;var Ao=class extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Co=class extends gi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$d,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ro(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Xx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var hr=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ol=class extends hr{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wu,endingEnd:Wu}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xu:s=t,a=2*e-n;break;case qu:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Xu:o=t,c=2*n-e;break;case qu:o=1,c=n+r[1]-r[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,v=(n-e)/(r-e),y=v*v,p=y*v,d=-f*p+2*f*y-f*v,A=(1+f)*p+(-1.5-2*f)*y+(-.5+f)*v+1,S=(-1-m)*p+(1.5+m)*y+.5*v,T=m*p-m*y;for(let I=0;I!==a;++I)s[I]=d*o[h+I]+A*o[l+I]+S*o[c+I]+T*o[u+I];return s}},al=class extends hr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(r-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[l+f]*u+o[c+f]*h;return s}},cl=class extends hr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},an=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ro(e,this.TimeBufferType),this.values=ro(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ro(t.times,Array),values:ro(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ol(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case oo:e=this.InterpolantFactoryMethodDiscrete;break;case ao:e=this.InterpolantFactoryMethodLinear;break;case dc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oo;case this.InterpolantFactoryMethodLinear:return ao;case this.InterpolantFactoryMethodSmooth:return dc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(r!==void 0&&Xx(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===dc,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(r)c=!0;else{let u=a*n,f=u-n,m=u+n;for(let v=0;v!==n;++v){let y=e[u+v];if(y!==e[f+v]||y!==e[m+v]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let m=0;m!==n;++m)e[f+m]=e[u+m]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=ao;var yi=class extends an{};yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=oo;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var ll=class extends an{};ll.prototype.ValueTypeName="color";var hl=class extends an{};hl.prototype.ValueTypeName="number";var ul=class extends hr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(r-e),l=t*a;for(let h=l+a;l!==h;l+=4)on.slerpFlat(s,0,o,l-a,o,l,c);return s}},as=class extends an{InterpolantFactoryMethodLinear(t){return new ul(this.times,this.values,this.getValueSize(),t)}};as.prototype.ValueTypeName="quaternion";as.prototype.DefaultInterpolation=ao;as.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends an{};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=oo;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends an{};dl.prototype.ValueTypeName="vector";var Od={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},fl=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let m=l[u],v=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return v}return null}}},qx=new fl,af=(()=>{class i{constructor(e){this.manager=e!==void 0?e:qx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){let r=this;return new Promise(function(s,o){r.load(e,s,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}return i.DEFAULT_MATERIAL_NAME="__DEFAULT",i})();var pl=class extends af{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=Od.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;let a=ns("img");function c(){h(),Od.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(u){h(),r&&r(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}};var Ro=class extends af{constructor(t){super(t)}load(t,e,n,r){let s=new qn,o=new pl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}},Po=class extends Rn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var Uc=new ye,Fd=new N,Bd=new N,ml=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ss,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Fd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fd),Bd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bd),e.updateMatrixWorld(),Uc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var gl=class extends ml{constructor(){super(new Eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Io=class extends Po{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new gl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Lo=class extends Po{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var El="\\[\\]\\.:\\/",Yx=new RegExp("["+El+"]","g"),wl="[^"+El+"]",$x="[^"+El.replace("\\.","")+"]",jx=/((?:WC+[\/:])*)/.source.replace("WC",wl),Zx=/(WCOD+)?/.source.replace("WCOD",$x),Jx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wl),Kx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wl),Qx=new RegExp("^"+jx+Zx+Jx+Kx+"$"),tM=["material","materials","bones","map"],vl=class{constructor(t,e,n){let r=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},he=(()=>{class i{constructor(e,n,r){this.path=n,this.parsedPath=r||i.parseTrackName(n),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,r){return e&&e.isAnimationObjectGroup?new i.Composite(e,n,r):new i(e,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yx,"")}static parseTrackName(e){let n=Qx.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let r={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);tM.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return r}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let r=e.skeleton.getBoneByName(n);if(r!==void 0)return r}if(e.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===n||c.uuid===n)return c;let l=r(c.children);if(l)return l}return null},s=r(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)e[n++]=r[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,r=n.objectName,s=n.propertyName,o=n.propertyIndex;if(e||(e=i.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=n.objectIndex;switch(r){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let a=e[s];if(a===void 0){let h=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return i.Composite=vl,i})();he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kS=new Float32Array(1);var cs=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_l}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_l);var cf={type:"change"},Tl={type:"start"},lf={type:"end"},Oo=new rs,hf=new nn,nM=Math.cos(70*Zd.DEG2RAD),Fo=class extends pn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mi.ROTATE,MIDDLE:Mi.DOLLY,RIGHT:Mi.PAN},this.touches={ONE:Si.ROTATE,TWO:Si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",bt),this._domElementKeyEvents=E},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",bt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(cf),n.update(),s=r.NONE},this.update=function(){let E=new N,nt=new on().setFromUnitVectors(t.up,new N(0,1,0)),ct=nt.clone().invert(),yt=new N,b=new on,tt=new N,Z=2*Math.PI;return function(Mt=null){let jt=n.object.position;E.copy(jt).sub(n.target),E.applyQuaternion(nt),a.setFromVector3(E),n.autoRotate&&s===r.NONE&&H(_(Mt)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let qt=n.minAzimuthAngle,te=n.maxAzimuthAngle;isFinite(qt)&&isFinite(te)&&(qt<-Math.PI?qt+=Z:qt>Math.PI&&(qt-=Z),te<-Math.PI?te+=Z:te>Math.PI&&(te-=Z),qt<=te?a.theta=Math.max(qt,Math.min(te,a.theta)):a.theta=a.theta>(qt+te)/2?Math.max(qt,a.theta):Math.min(te,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?a.radius=q(a.radius):a.radius=q(a.radius*l),E.setFromSpherical(a),E.applyQuaternion(ct),jt.copy(n.target).add(E),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let xe=!1;if(n.zoomToCursor&&R){let Zt=null;if(n.object.isPerspectiveCamera){let ce=E.length();Zt=q(ce*l);let Ce=ce-Zt;n.object.position.addScaledVector(T,Ce),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let ce=new N(I.x,I.y,0);ce.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),xe=!0;let Ce=new N(I.x,I.y,0);Ce.unproject(n.object),n.object.position.sub(Ce).add(ce),n.object.updateMatrixWorld(),Zt=E.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Zt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Zt).add(n.object.position):(Oo.origin.copy(n.object.position),Oo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Oo.direction))<nM?t.lookAt(n.target):(hf.setFromNormalAndCoplanarPoint(n.object.up,n.target),Oo.intersectPlane(hf,n.target))))}else n.object.isOrthographicCamera&&(xe=l!==1,xe&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix()));return l=1,R=!1,xe||yt.distanceToSquared(n.object.position)>o||8*(1-b.dot(n.object.quaternion))>o||tt.distanceToSquared(n.target)>0?(n.dispatchEvent(cf),yt.copy(n.object.position),b.copy(n.object.quaternion),tt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Jt),n.domElement.removeEventListener("pointerdown",M),n.domElement.removeEventListener("pointercancel",U),n.domElement.removeEventListener("wheel",K),n.domElement.removeEventListener("pointermove",g),n.domElement.removeEventListener("pointerup",U),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",bt),n._domElementKeyEvents=null)};let n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=r.NONE,o=1e-6,a=new cs,c=new cs,l=1,h=new N,u=new It,f=new It,m=new It,v=new It,y=new It,p=new It,d=new It,A=new It,S=new It,T=new N,I=new It,R=!1,C=[],W={},st=!1;function _(E){return E!==null?2*Math.PI/60*n.autoRotateSpeed*E:2*Math.PI/60/60*n.autoRotateSpeed}function w(E){let nt=Math.abs(E*.01);return Math.pow(.95,n.zoomSpeed*nt)}function H(E){c.theta-=E}function Q(E){c.phi-=E}let P=function(){let E=new N;return function(ct,yt){E.setFromMatrixColumn(yt,0),E.multiplyScalar(-ct),h.add(E)}}(),V=function(){let E=new N;return function(ct,yt){n.screenSpacePanning===!0?E.setFromMatrixColumn(yt,1):(E.setFromMatrixColumn(yt,0),E.crossVectors(n.object.up,E)),E.multiplyScalar(ct),h.add(E)}}(),B=function(){let E=new N;return function(ct,yt){let b=n.domElement;if(n.object.isPerspectiveCamera){let tt=n.object.position;E.copy(tt).sub(n.target);let Z=E.length();Z*=Math.tan(n.object.fov/2*Math.PI/180),P(2*ct*Z/b.clientHeight,n.object.matrix),V(2*yt*Z/b.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(ct*(n.object.right-n.object.left)/n.object.zoom/b.clientWidth,n.object.matrix),V(yt*(n.object.top-n.object.bottom)/n.object.zoom/b.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Y(E){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(E){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(E,nt){if(!n.zoomToCursor)return;R=!0;let ct=n.domElement.getBoundingClientRect(),yt=E-ct.left,b=nt-ct.top,tt=ct.width,Z=ct.height;I.x=yt/tt*2-1,I.y=-(b/Z)*2+1,T.set(I.x,I.y,1).unproject(n.object).sub(n.object.position).normalize()}function q(E){return Math.max(n.minDistance,Math.min(n.maxDistance,E))}function it(E){u.set(E.clientX,E.clientY)}function ot(E){X(E.clientX,E.clientX),d.set(E.clientX,E.clientY)}function At(E){v.set(E.clientX,E.clientY)}function k(E){f.set(E.clientX,E.clientY),m.subVectors(f,u).multiplyScalar(n.rotateSpeed);let nt=n.domElement;H(2*Math.PI*m.x/nt.clientHeight),Q(2*Math.PI*m.y/nt.clientHeight),u.copy(f),n.update()}function J(E){A.set(E.clientX,E.clientY),S.subVectors(A,d),S.y>0?Y(w(S.y)):S.y<0&&G(w(S.y)),d.copy(A),n.update()}function ut(E){y.set(E.clientX,E.clientY),p.subVectors(y,v).multiplyScalar(n.panSpeed),B(p.x,p.y),v.copy(y),n.update()}function St(E){X(E.clientX,E.clientY),E.deltaY<0?G(w(E.deltaY)):E.deltaY>0&&Y(w(E.deltaY)),n.update()}function Et(E){let nt=!1;switch(E.code){case n.keys.UP:E.ctrlKey||E.metaKey||E.shiftKey?Q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),nt=!0;break;case n.keys.BOTTOM:E.ctrlKey||E.metaKey||E.shiftKey?Q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),nt=!0;break;case n.keys.LEFT:E.ctrlKey||E.metaKey||E.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),nt=!0;break;case n.keys.RIGHT:E.ctrlKey||E.metaKey||E.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),nt=!0;break}nt&&(E.preventDefault(),n.update())}function ft(E){if(C.length===1)u.set(E.pageX,E.pageY);else{let nt=lt(E),ct=.5*(E.pageX+nt.x),yt=.5*(E.pageY+nt.y);u.set(ct,yt)}}function $t(E){if(C.length===1)v.set(E.pageX,E.pageY);else{let nt=lt(E),ct=.5*(E.pageX+nt.x),yt=.5*(E.pageY+nt.y);v.set(ct,yt)}}function Lt(E){let nt=lt(E),ct=E.pageX-nt.x,yt=E.pageY-nt.y,b=Math.sqrt(ct*ct+yt*yt);d.set(0,b)}function D(E){n.enableZoom&&Lt(E),n.enablePan&&$t(E)}function fe(E){n.enableZoom&&Lt(E),n.enableRotate&&ft(E)}function xt(E){if(C.length==1)f.set(E.pageX,E.pageY);else{let ct=lt(E),yt=.5*(E.pageX+ct.x),b=.5*(E.pageY+ct.y);f.set(yt,b)}m.subVectors(f,u).multiplyScalar(n.rotateSpeed);let nt=n.domElement;H(2*Math.PI*m.x/nt.clientHeight),Q(2*Math.PI*m.y/nt.clientHeight),u.copy(f)}function Ct(E){if(C.length===1)y.set(E.pageX,E.pageY);else{let nt=lt(E),ct=.5*(E.pageX+nt.x),yt=.5*(E.pageY+nt.y);y.set(ct,yt)}p.subVectors(y,v).multiplyScalar(n.panSpeed),B(p.x,p.y),v.copy(y)}function gt(E){let nt=lt(E),ct=E.pageX-nt.x,yt=E.pageY-nt.y,b=Math.sqrt(ct*ct+yt*yt);A.set(0,b),S.set(0,Math.pow(A.y/d.y,n.zoomSpeed)),Y(S.y),d.copy(A);let tt=(E.pageX+nt.x)*.5,Z=(E.pageY+nt.y)*.5;X(tt,Z)}function ne(E){n.enableZoom&&gt(E),n.enablePan&&Ct(E)}function Dt(E){n.enableZoom&&gt(E),n.enableRotate&&xt(E)}function M(E){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(E.pointerId),n.domElement.addEventListener("pointermove",g),n.domElement.addEventListener("pointerup",U)),Ht(E),E.pointerType==="touch"?Nt(E):et(E))}function g(E){n.enabled!==!1&&(E.pointerType==="touch"?j(E):$(E))}function U(E){switch(Rt(E),C.length){case 0:n.domElement.releasePointerCapture(E.pointerId),n.domElement.removeEventListener("pointermove",g),n.domElement.removeEventListener("pointerup",U),n.dispatchEvent(lf),s=r.NONE;break;case 1:let nt=C[0],ct=W[nt];Nt({pointerId:nt,pageX:ct.x,pageY:ct.y});break}}function et(E){let nt;switch(E.button){case 0:nt=n.mouseButtons.LEFT;break;case 1:nt=n.mouseButtons.MIDDLE;break;case 2:nt=n.mouseButtons.RIGHT;break;default:nt=-1}switch(nt){case Mi.DOLLY:if(n.enableZoom===!1)return;ot(E),s=r.DOLLY;break;case Mi.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enablePan===!1)return;At(E),s=r.PAN}else{if(n.enableRotate===!1)return;it(E),s=r.ROTATE}break;case Mi.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enableRotate===!1)return;it(E),s=r.ROTATE}else{if(n.enablePan===!1)return;At(E),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Tl)}function $(E){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;k(E);break;case r.DOLLY:if(n.enableZoom===!1)return;J(E);break;case r.PAN:if(n.enablePan===!1)return;ut(E);break}}function K(E){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(E.preventDefault(),n.dispatchEvent(Tl),St(pt(E)),n.dispatchEvent(lf))}function pt(E){let nt=E.deltaMode,ct={clientX:E.clientX,clientY:E.clientY,deltaY:E.deltaY};switch(nt){case 1:ct.deltaY*=16;break;case 2:ct.deltaY*=100;break}return E.ctrlKey&&!st&&(ct.deltaY*=10),ct}function at(E){E.key==="Control"&&(st=!0,n.domElement.getRootNode().addEventListener("keyup",dt,{passive:!0,capture:!0}))}function dt(E){E.key==="Control"&&(st=!1,n.domElement.getRootNode().removeEventListener("keyup",dt,{passive:!0,capture:!0}))}function bt(E){n.enabled===!1||n.enablePan===!1||Et(E)}function Nt(E){switch(_t(E),C.length){case 1:switch(n.touches.ONE){case Si.ROTATE:if(n.enableRotate===!1)return;ft(E),s=r.TOUCH_ROTATE;break;case Si.PAN:if(n.enablePan===!1)return;$t(E),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Si.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;D(E),s=r.TOUCH_DOLLY_PAN;break;case Si.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;fe(E),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Tl)}function j(E){switch(_t(E),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;xt(E),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Ct(E),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ne(E),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Dt(E),n.update();break;default:s=r.NONE}}function Jt(E){n.enabled!==!1&&E.preventDefault()}function Ht(E){C.push(E.pointerId)}function Rt(E){delete W[E.pointerId];for(let nt=0;nt<C.length;nt++)if(C[nt]==E.pointerId){C.splice(nt,1);return}}function _t(E){let nt=W[E.pointerId];nt===void 0&&(nt=new It,W[E.pointerId]=nt),nt.set(E.pageX,E.pageY)}function lt(E){let nt=E.pointerId===C[0]?C[1]:C[0];return W[nt]}n.domElement.addEventListener("contextmenu",Jt),n.domElement.addEventListener("pointerdown",M),n.domElement.addEventListener("pointercancel",U),n.domElement.addEventListener("wheel",K,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",at,{passive:!0,capture:!0}),this.update()}};var iM=["canvas"],uf=(()=>{let t=class t{constructor(){this.rotationSpeedX=.05,this.rotationSpeedY=.02,this.size=200,this.texture="/assets/society_logo.jpg",this.cameraZ=400,this.fieldOfView=20,this.nearClippingPlane=1,this.farClippingPlane=1e3,this.loader=new Ro,this.geometry=new _i(20,20,20),this.material=new Co({map:this.loader.load(this.texture)}),this.cube=new Ve(this.geometry,this.material)}get canvas(){return this.canvasRef.nativeElement}animateCube(){this.controls.update(),this.cube.rotation.x+=this.rotationSpeedX,this.cube.rotation.y+=this.rotationSpeedY}createScene(){this.scene=new Ao,this.scene.background=new Yt(0),this.scene.add(this.cube);let n=new Lo(4210752);this.scene.add(n);let r=new Io(16777215,1);r.position.set(0,1,1),this.scene.add(r);let s=this.getAspectRatio();this.camera=new De(this.fieldOfView,s,this.nearClippingPlane,this.farClippingPlane),this.camera.position.z=this.cameraZ}getAspectRatio(){return this.canvas.clientWidth/this.canvas.clientHeight}startRenderingLoop(){this.renderer=new os({canvas:this.canvas}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.canvas.clientWidth,this.canvas.clientHeight),this.controls=new Fo(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.25,this.controls.screenSpacePanning=!1;let n=this;(function r(){requestAnimationFrame(r),n.animateCube(),n.renderer.render(n.scene,n.camera)})()}ngOnInit(){}ngAfterViewInit(){this.createScene(),this.startRenderingLoop()}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=ln({type:t,selectors:[["app-cube"]],viewQuery:function(r,s){if(r&1&&ih(iM,5),r&2){let o;br(o=Er())&&(s.canvasRef=o.first)}},inputs:{rotationSpeedX:"rotationSpeedX",rotationSpeedY:"rotationSpeedY",size:"size",texture:"texture",cameraZ:"cameraZ",fieldOfView:"fieldOfView",nearClippingPlane:[ds.None,"nearClipping","nearClippingPlane"],farClippingPlane:[ds.None,"farClipping","farClippingPlane"]},standalone:!0,features:[hn],decls:2,vars:0,consts:[["id","canvas",2,"height","100%","width","100%"],["canvas",""]],template:function(r,s){r&1&&In(0,"canvas",0,1)}});let i=t;return i})();var df=(()=>{let t=class t{constructor(){this.title="chronos"}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=ln({type:t,selectors:[["app-root"]],standalone:!0,features:[hn],decls:3,vars:0,template:function(r,s){r&1&&In(0,"app-top-menu")(1,"router-outlet")(2,"app-cube")},dependencies:[Ja,hu,uf]});let i=t;return i})();Sh(df,au).catch(i=>console.error(i));
