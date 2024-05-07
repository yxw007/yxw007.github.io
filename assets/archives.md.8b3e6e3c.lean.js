import{b as X,d as q,g as Y,e as R,i as Q,o as c,c as l,n as K,f as tt,a as e,h as st,j as ct,k as I,u as nt,r as lt,t as pt,l as i,m as V,w as _,p as H,q as A,s as d,v as O,F as Z,x as D,T as et,y as at,z as rt,_ as G,A as ut}from"./app.d65ad660.js";const ht=q({name:"IconShareAlt",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:t=>["butt","round","square"].includes(t)},strokeLinejoin:{type:String,default:"miter",validator:t=>["arcs","bevel","miter","miter-clip","round"].includes(t)},rotate:Number,spin:Boolean},emits:{click:t=>!0},setup(t,{emit:r}){const o=Y("icon"),p=R(()=>[o,`${o}-share-alt`,{[`${o}-spin`]:t.spin}]),h=R(()=>{const n={};return t.size&&(n.fontSize=Q(t.size)?`${t.size}px`:t.size),t.rotate&&(n.transform=`rotate(${t.rotate}deg)`),n});return{cls:p,innerStyle:h,onClick:n=>{r("click",n)}}}}),dt=["stroke-width","stroke-linecap","stroke-linejoin"],gt=e("path",{d:"M32.442 21.552a4.5 4.5 0 1 1 .065 4.025m-.065-4.025-16.884-8.104m16.884 8.104A4.483 4.483 0 0 0 32 23.5c0 .75.183 1.455.507 2.077m-16.95-12.13a4.5 4.5 0 1 1-8.113-3.895 4.5 4.5 0 0 1 8.114 3.896Zm-.064 20.977A4.5 4.5 0 1 0 11.5 41c3.334-.001 5.503-3.68 3.993-6.578Zm0 0 17.014-8.847"},null,-1),mt=[gt];function _t(t,r,o,p,h,u){return c(),l("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(t.cls),style:tt(t.innerStyle),"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin,onClick:r[0]||(r[0]=(...n)=>t.onClick&&t.onClick(...n))},mt,14,dt)}var J=X(ht,[["render",_t]]);const vt=Object.assign(J,{install:(t,r)=>{var o;const p=(o=r==null?void 0:r.iconPrefix)!=null?o:"";t.component(p+J.name,J)}}),ft=q({name:"IconTrophy",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:t=>["butt","round","square"].includes(t)},strokeLinejoin:{type:String,default:"miter",validator:t=>["arcs","bevel","miter","miter-clip","round"].includes(t)},rotate:Number,spin:Boolean},emits:{click:t=>!0},setup(t,{emit:r}){const o=Y("icon"),p=R(()=>[o,`${o}-trophy`,{[`${o}-spin`]:t.spin}]),h=R(()=>{const n={};return t.size&&(n.fontSize=Q(t.size)?`${t.size}px`:t.size),t.rotate&&(n.transform=`rotate(${t.rotate}deg)`),n});return{cls:p,innerStyle:h,onClick:n=>{r("click",n)}}}}),wt=["stroke-width","stroke-linecap","stroke-linejoin"],yt=e("path",{d:"M24 33c-6.075 0-11-4.925-11-11m11 11c6.075 0 11-4.925 11-11M24 33v8M13 22V7h22v15m-22 0V9H7v7a6 6 0 0 0 6 6Zm22 0V9h6v7a6 6 0 0 1-6 6ZM12 41h24"},null,-1),Pt=[yt];function Tt(t,r,o,p,h,u){return c(),l("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(t.cls),style:tt(t.innerStyle),"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin,onClick:r[0]||(r[0]=(...n)=>t.onClick&&t.onClick(...n))},Pt,14,wt)}var W=X(ft,[["render",Tt]]);const kt=Object.assign(W,{install:(t,r)=>{var o;const p=(o=r==null?void 0:r.iconPrefix)!=null?o:"";t.component(p+W.name,W)}});var it={exports:{}};(function(t,r){(function(o,p){t.exports=p()})(st,function(){return function(o,p,h){o=o||{};var u=p.prototype,n={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function T(a,s,m,g){return u.fromToBase(a,s,m,g)}h.en.relativeTime=n,u.fromToBase=function(a,s,m,g,f){for(var k,y,w,C=m.$locale().relativeTime||n,$=o.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],B=$.length,z=0;z<B;z+=1){var P=$[z];P.d&&(k=g?h(a).diff(m,P.d,!0):m.diff(a,P.d,!0));var x=(o.rounding||Math.round)(Math.abs(k));if(w=k>0,x<=P.r||!P.r){x<=1&&z>0&&(P=$[z-1]);var M=C[P.l];f&&(x=f(""+x)),y=typeof M=="string"?M.replace("%d",x):M(x,s,P.l,w);break}}if(s)return y;var j=w?C.future:C.past;return typeof j=="function"?j(y):j.replace("%s",y)},u.to=function(a,s){return T(a,s,this,!0)},u.from=function(a,s){return T(a,s,this)};var v=function(a){return a.$u?h.utc():h()};u.toNow=function(a){return this.to(v(this),a)},u.fromNow=function(a){return this.from(v(this),a)}}})})(it);var xt=it.exports;const St=ct(xt);function F(t){const r=new RegExp("(^|&)"+t+"=([^&]*)(&|$)");let o=decodeURIComponent(window.location.search.substr(1)).match(r);return o!=null?unescape(o[2]):null}function U(t,r,o){r?window.location.href=t+"?"+r+"="+o:window.location.href=t}function bt(t){return["猴年","鸡年","狗年","猪年","鼠年","牛年","虎年","兔年","龙年","蛇年","马年","羊年"][t%12]}function Nt(t){return["monkey","rooster","dog","pig","rat","ox","tiger","rabbit","dragon","snake","horse","goat"][t%12]}const L=t=>(at("data-v-7f4bf7ea"),t=t(),rt(),t),Ct={class:"meta-wrapper"},$t={class:"meta-item original"},zt={class:"meta-item"},Mt=L(()=>e("span",{class:"meta-icon author"},[e("svg",{role:"img",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},[e("title",null,"原创作者"),e("path",{d:"M858.5 763.6c-18.9-44.8-46.1-85-80.6-119.5-34.5-34.5-74.7-61.6-119.5-80.6-0.4-0.2-0.8-0.3-1.2-0.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-0.4 0.2-0.8 0.3-1.2 0.5-44.8 18.9-85 46-119.5 80.6-34.5 34.5-61.6 74.7-80.6 119.5C146.9 807.5 137 854 136 901.8c-0.1 4.5 3.5 8.2 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c0.1 4.4 3.6 7.8 8 7.8h60c4.5 0 8.1-3.7 8-8.2-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"})])],-1)),Vt={class:"meta-content"},At=["href"],Ut=["title"],Lt={class:"meta-item"},jt={class:"meta-icon date"},Et={role:"img",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Zt={key:0},Dt={key:1},Ht=L(()=>e("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"},null,-1)),Bt=L(()=>e("path",{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"},null,-1)),It=["datetime","title"],Ot={key:0,class:"meta-item"},Rt=L(()=>e("span",{class:"meta-icon pv"},[e("svg",{role:"img",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},[e("title",null,"阅读数"),e("path",{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3-7.7 16.2-7.7 35.2 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766z"}),e("path",{d:"M508 336c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176z m0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"})])],-1)),Jt=["textContent","title"],Wt={key:1,class:"meta-item"},Ft=L(()=>e("span",{class:"meta-icon category"},[e("svg",{role:"img",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},[e("title",null,"所属分类"),e("path",{d:"M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256z m635.3 512H159l103.3-256h612.4L771.3 768z"})])],-1)),qt={class:"meta-content"},Gt=["onClick","title"],Xt={key:0},Yt={class:"meta-item tag"},Qt=L(()=>e("span",{class:"meta-icon tag"},[e("svg",{role:"img",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},[e("title",null,"标签列表"),e("path",{d:"M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-0.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-0.2-4.7 0.6-6.3 2.3L137.7 444.8a8.03 8.03 0 0 0 0 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0z m62.6-651.7l224.6 19 19 224.6L477.5 694 233.9 450.5l311.9-311.9z m60.16 186.23a48 48 0 1 0 67.88-67.89 48 48 0 1 0-67.88 67.89zM889.7 539.8l-39.6-39.5a8.03 8.03 0 0 0-11.3 0l-362 361.3-237.6-237a8.03 8.03 0 0 0-11.3 0l-39.6 39.5a8.03 8.03 0 0 0 0 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z"})])],-1)),Kt={class:"meta-content"},te=["onClick","title"],ee={key:0},ae=q({__name:"ArticleMetadata",props:{article:Object,showCategory:{type:Boolean,default:!0}},setup(t){var y,w,C,$,B;I.extend(St),I.locale("zh-cn");const r=t,{theme:o,page:p}=nt(),h=lt({isOriginal:((y=r.article)==null?void 0:y.isOriginal)??!0,author:((w=r.article)==null?void 0:w.author)??o.value.articleMetadataConfig.author,authorLink:((C=r.article)==null?void 0:C.authorLink)??o.value.articleMetadataConfig.authorLink,showViewCount:!1,viewCount:0,date:new Date(r.article.date),categories:(($=r.article)==null?void 0:$.categories)??[],tags:((B=r.article)==null?void 0:B.tags)??[],showCategory:r.showCategory}),{isOriginal:u,author:n,authorLink:T,showViewCount:v,viewCount:a,date:s,toDate:m,categories:g,tags:f,showCategory:k}=pt(h);return h.showViewCount,(z,P)=>{const x=kt,M=et,j=vt;return c(),l("div",Ct,[e("div",$t,[i(u)?(c(),V(M,{key:0,color:"orangered",title:"原创文章"},{icon:_(()=>[H(x)]),default:_(()=>[A(" 原创 ")]),_:1})):(c(),V(M,{key:1,color:"arcoblue",title:"转载文章"},{icon:_(()=>[H(j)]),default:_(()=>[A(" 转载 ")]),_:1}))]),e("div",zt,[Mt,e("span",Vt,[i(u)?(c(),l("a",{key:0,href:i(T),title:"进入作者主页"},d(i(n)),9,At)):(c(),l("span",{key:1,title:i(n)},d(i(n)),9,Ut))])]),e("div",Lt,[e("span",jt,[(c(),l("svg",Et,[i(u)?(c(),l("title",Zt,"发布时间")):(c(),l("title",Dt,"转载时间")),Ht,Bt]))]),e("time",{class:"meta-content",datetime:i(s).toISOString(),title:i(I)().to(i(I)(i(s)))},d(i(s).toLocaleString("zh",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"})),9,It)]),i(v)?(c(),l("div",Ot,[Rt,e("span",{class:"meta-content",textContent:d(i(a)),title:i(a)},null,8,Jt)])):O("",!0),i(k)?(c(),l("div",Wt,[Ft,e("span",qt,[(c(!0),l(Z,null,D(i(g),(b,E)=>(c(),l("span",{key:E},[e("a",{href:"javascript:void(0);",onClick:ot=>i(U)("/archives","category",b),target:"_self",title:b},d(b),9,Gt),E!=i(g).length-1?(c(),l("span",Xt,", ")):O("",!0)]))),128))])])):O("",!0),e("div",Yt,[Qt,e("span",Kt,[(c(!0),l(Z,null,D(i(f),(b,E)=>(c(),l("span",{key:E},[e("a",{href:"javascript:void(0);",onClick:ot=>i(U)("/archives","tag",b),target:"_self",title:b},d(b),9,te),E!=i(f).length-1?(c(),l("span",ee,", ")):O("",!0)]))),128))])])])}}});const re=G(ae,[["__scopeId","data-v-7f4bf7ea"]]),ie="/img/footprint.png",S=JSON.parse('[{"title":"基础知识","author":"Potter","date":"2022/08/05 14:24","tags":["计算机网络"],"categories":["计算机网络"],"path":"article/01-basic/01-network/01-各种概念"},{"title":"网络模型","author":"Potter","date":"2022/08/07 21:24","tags":["ISO","TCP/IP"],"categories":["计算机网络"],"path":"article/01-basic/01-network/02-网络模型"},{"title":"TCP","author":"Potter","date":"2022/08/08 19:40","tags":["TCP"],"categories":["计算机网络"],"path":"article/01-basic/01-network/03-TCP"},{"title":"UDP","author":"Potter","date":"2022/08/08 10:26","tags":["UDP","计算机网络"],"categories":["计算机网络"],"path":"article/01-basic/01-network/04-UDP"},{"title":"DNS","author":"Potter","date":"2022/08/05 21:25","tags":["计算机网络","DNS"],"categories":["计算机网络"],"path":"article/01-basic/01-network/05-DNS"},{"title":"HTTP","author":"Potter","date":"2023/02/28 21:23","tags":["HTTP"],"categories":["计算机网络"],"path":"article/01-basic/01-network/06-HTTP"},{"title":"HTTPS","author":"Potter","date":"2023/3/14 23:00","tags":["HTTPS"],"categories":["计算机网络"],"path":"article/01-basic/01-network/07-HTTPS"},{"title":"http状态码","author":"Potter","date":"2023/02/27","tags":["HTTP"],"categories":["计算机网络"],"path":"article/01-basic/01-network/08-HTTP状态码"},{"title":"C# 与 JS 之间Gzip互通","author":"Potter","date":"2022-05-12 18:41","tags":["C#","Gzip","JS"],"categories":["压缩"],"path":"article/02-frontend-basic/01-js/JS01"},{"title":"对称加密和非对称加密的应用","author":"Potter","date":"2022-05-12 18:41","tags":["对称加密","非对称加密","AES","RSA"],"categories":["加密"],"path":"article/02-frontend-basic/01-js/JS02"},{"title":"CORS-跨域实战","author":"Potter","date":"2022-05-12 18:41","tags":["Web","Vue.js","Node.js","Express"],"categories":["部署"],"path":"article/02-frontend-basic/01-js/JS03"},{"title":"JS基础-01：原型了解","author":"Potter","date":"2022-05-12 18:41","tags":["js","原型"],"categories":["JS基础"],"path":"article/02-frontend-basic/01-js/JS_Base_01"},{"title":"JS基础-02：继承","author":"Potter","date":"2022-05-12 18:41","tags":["继承"],"categories":["JS基础"],"path":"article/02-frontend-basic/01-js/JS_Base_02"},{"title":"屏蔽：键盘按键、鼠标点击事件","author":"Potter","date":"2022-05-12 18:50","tags":["事件屏蔽"],"categories":["H5"],"path":"article/02-frontend-basic/01-js/PreventEvent"},{"title":"响应式根基：Object.defineProperty 与 Proxy 拦截区别","author":"Potter","date":"2022-05-12 18:42","tags":["Object.defineProperty","Proxy"],"categories":["响应式原理"],"path":"article/02-frontend-basic/01-js/principle-learn-01"},{"title":"响应式核心原理","author":"Potter","date":"2022-05-12 18:42","tags":["Proxy","watchEffect","dep","Reflect"],"categories":["响应式原理"],"path":"article/02-frontend-basic/01-js/principle-learn-02"},{"title":"TypeScript 入门 - 01：创建一个在Chrome上运行的TypeScript Demo","author":"Potter","date":"2022-05-12 18:49","tags":["TypeScript","VSCode","Chrome"],"categories":["TypeScript 入门"],"path":"article/02-frontend-basic/02-ts/TypeScript 入门 - 01：创建一个在Chrome上运行的TypeScript Demo"},{"title":"TypeScript 入门 - 02：基本语法","author":"Potter","date":"2022-05-12 18:49","tags":["TypeScript"],"categories":["TypeScript 入门"],"path":"article/02-frontend-basic/02-ts/TypeScript 入门 - 02：基本语法"},{"title":"TypeScript 入门 - 03：Type和Interface 使用场景","author":"Potter","date":"2022-05-14 21:40","tags":["TypeScript"],"categories":["TypeScript 入门"],"path":"article/02-frontend-basic/02-ts/TypeScript 入门 - 03：Type和Interface 使用场景"},{"title":"TypeStript 入门 - 04：各种类型","author":"Potter","date":"2022-11-25 21:00","tags":["TypeScript"],"categories":["TypeScript 入门"],"path":"article/02-frontend-basic/02-ts/TypeStript 入门 - 04：各种类型"},{"title":"TypeStript 入门 - 05：类型保护","author":"Potter","date":"2022-11-25 22:49","tags":["TypeScript"],"categories":["TypeScript 入门"],"path":"article/02-frontend-basic/02-ts/TypeStript 入门 - 05：类型保护"},{"title":"TypeStript 入门 - 06：类型推断","author":"Potter","date":"2022-11-26 22:00","tags":["TypeScript"],"categories":["TypeScript 入门"],"path":"article/02-frontend-basic/02-ts/TypeStript 入门 - 06：类型推断"},{"title":"TypeStript 入门 - 07：装包和拆包","author":"Potter","date":"2022-11-27 21:00","tags":["TypeScript"],"categories":["TypeScript 入门"],"path":"article/02-frontend-basic/02-ts/TypeStript 入门 - 07：装包和拆包"},{"title":"TypeStript 入门 - 08：自定义类型","author":"Potter","date":"2022-11-27 22:03","tags":["TypeScript"],"categories":["TypeScript 入门"],"path":"article/02-frontend-basic/02-ts/TypeStript 入门 - 08：自定义类型"},{"title":"TypeStript 入门 - 09：unknown","author":"Potter","date":"2022-11-27 23:13","tags":["TypeScript"],"categories":["TypeScript 入门"],"path":"article/02-frontend-basic/02-ts/TypeStript 入门 - 09：unknown"},{"title":"TypeStript 入门 - 10：模块与命名空间","author":"Potter","date":"2022-11-28 21:00","tags":["TypeScript"],"categories":["TypeScript 入门"],"path":"article/02-frontend-basic/02-ts/TypeStript 入门 - 10：模块与命名空间"},{"title":"TypeStript 入门 - 11：类型声明","author":"Potter","date":"2022-11-28 22:00","tags":["TypeScript"],"categories":["TypeScript 入门"],"path":"article/02-frontend-basic/02-ts/TypeStript 入门 - 11：类型声明"},{"title":"TypeStript 入门 - 12：扩展变量类型","author":"Potter","date":"2022-11-28 23:00","tags":["TypeScript"],"categories":["TypeScript 入门"],"path":"article/02-frontend-basic/02-ts/TypeStript 入门 - 12：扩展变量类型"},{"title":"TypeStript 入门 - 13：更多关键字","author":"Potter","date":"2022-11-29 21:20","tags":["TypeScript"],"categories":["TypeScript 入门"],"path":"article/02-frontend-basic/02-ts/TypeStript 入门 - 13：更多关键字"},{"title":"vue3.x-响应式核心原理","author":"Potter","date":"2021-07-26 17:11","tags":["vue3","proxy"],"categories":["vue3.x"],"path":"article/03-framework/01-vue/vue3.x-响应式核心原理"},{"title":"VueRouter 核心原理","author":"Potter","date":"2022-11-02 11:23","tags":["路由","VueRouter"],"categories":["VueRouter"],"path":"article/03-framework/02-vueRouter/VueRouter-核心原理"},{"title":"Pinia-核心原理","author":"Potter","date":"2022-04-05 14:24","tags":["pinia","状态管理"],"categories":["pinia"],"path":"article/03-framework/03-pinia/Pinia-核心原理"},{"title":"利用VMware 安装Centos 搭建Nuxt 打包环境","author":"Potter","date":"2023-7-13 11:56","tags":["Nuxt","Centos","VMware"],"categories":["Nuxt"],"path":"article/03-framework/04-nuxt/利用VMware 安装Centos 搭建Nuxt 打包环境"},{"title":"1.更新队列(构建+处理)","author":"Potter","date":"2024-04-15T10:20:49.000Z","tags":["react"],"categories":["react18"],"path":"article/03-framework/20-react/1.更新队列(构建+处理)"},{"title":"2.Fiber 构建过程","author":"Potter","date":"2024-04-15T10:21:34.000Z","tags":["react"],"categories":["react18"],"path":"article/03-framework/20-react/2.Fiber 构建过程"},{"title":"3.事件注册和派发","author":"Potter","date":"2024-04-15T10:21:54.000Z","tags":["react"],"categories":["react18"],"path":"article/03-framework/20-react/3.事件注册和派发"},{"title":"4.useReducer","author":"Potter","date":"2024-04-15T10:22:13.000Z","tags":["react"],"categories":["react18"],"path":"article/03-framework/20-react/4.useReducer"},{"title":"5.useState","author":"Potter","date":"2024-04-15T10:22:42.000Z","tags":["react"],"categories":["react18"],"path":"article/03-framework/20-react/5.useState"},{"title":"Rollup插件开发","author":"Potter","date":"2022-01-15 14:15","tags":["插件","rollup"],"categories":["rollup"],"path":"article/03-framework/31-build-rollup/01-Rollup插件开发"},{"title":"webpack 01：原理雏形思考","author":"Potter","date":"2022-05-12 18:45","tags":["webpack","原理"],"categories":["webpack"],"path":"article/03-framework/32-build-webpack/WebPack 01：原理雏形思考"},{"title":"webpack 02：利用 VS Code 进行调试","author":"Potter","date":"2022-05-12 18:45","tags":["webpack","vscode","debugger"],"categories":["webpack"],"path":"article/03-framework/32-build-webpack/WebPack 02：利用 VS Code 进行调试"},{"title":"webpack 03：实现一个自定义loader","author":"Potter","date":"2022-05-12 18:45","tags":["webpack","自定义loader"],"categories":["webpack"],"path":"article/03-framework/32-build-webpack/Webpack 03：实现一个自定义loader"},{"title":"Electron 入门实战 01：主进程与渲染进程通信","author":"Potter","date":"2024-01-08T15:36:42.000Z","tags":["Electron"],"categories":["Electron"],"path":"article/04-practic/Electron/Electron 入门实战 01：主进程与渲染进程通信"},{"title":"Electron 入门实战 02：打包和自动更新","author":"Potter","date":"2024-01-08T15:41:52.000Z","tags":["Electron"],"categories":["Electron"],"path":"article/04-practic/Electron/Electron 入门实战 02：打包和自动更新"},{"title":"Electron 入门实战 03：实现一个截图功能","author":"Potter","date":"2024-04-15T10:23:32.000Z","tags":["Electron","截图"],"categories":["Electron"],"path":"article/04-practic/Electron/Electron 入门实战 03：实现一个截图功能"},{"title":"Electron 入门实战 04：支持多屏截图","author":"Potter","date":"2024-04-15T10:24:25.000Z","tags":["Electron","多屏截图"],"categories":["Electron"],"path":"article/04-practic/Electron/Electron 入门实战 04：支持多屏截图"},{"title":"创建通用JS公共模块并发布至npm","author":"Potter","date":"2022-05-12 18:52","tags":["UMD","rollup","verdaccio","npm"],"categories":["模块化"],"path":"article/04-practic/Library/Web04"},{"title":"Nuxt 入门实战 - 01：目录结构","author":"Potter","date":"2023-06-20T11:39:08.000Z","tags":["Nuxt"],"categories":["Nuxt 入门实战"],"path":"article/04-practic/Nuxt/Nuxt 入门实战 - 01：目录结构"},{"title":"Nuxt 入门实战 - 02：nuxt是如何运转的 ?","author":"Potter","date":"2023-06-20T11:40:40.000Z","tags":["Nuxt"],"categories":["Nuxt 入门实战"],"path":"article/04-practic/Nuxt/Nuxt 入门实战 - 02：nuxt是如何运转的 "},{"title":"Nuxt 入门实战 - 03：模块开发指南","author":"Potter","date":"2023-06-21T11:41:30.000Z","tags":["Nuxt"],"categories":["Nuxt 入门实战"],"path":"article/04-practic/Nuxt/Nuxt 入门实战 - 03：模块开发指南"},{"title":"Nuxt 入门实战 - 04：常用操作","author":"Potter","date":"2023-06-21T11:42:00.000Z","tags":["Nuxt"],"categories":["Nuxt 入门实战"],"path":"article/04-practic/Nuxt/Nuxt 入门实战 - 04：常用操作"},{"title":"Nuxt 入门实战 - 05：特性","author":"Potter","date":"2023-06-21T11:42:18.000Z","tags":["Nuxt"],"categories":["Nuxt 入门实战"],"path":"article/04-practic/Nuxt/Nuxt 入门实战 - 05：特性"},{"title":"Nuxt 入门实战 - 07：服务端自定义路由","author":"Potter","date":"2023-06-22T11:43:29.000Z","tags":["Nuxt"],"categories":["Nuxt 入门实战"],"path":"article/04-practic/Nuxt/Nuxt 入门实战 - 07：服务端自定义路由"},{"title":"Nuxt 入门实战 - 09：集成腾讯CoDesign字体图标库","author":"Potter","date":"2023-06-24T11:44:05.000Z","tags":["Nuxt"],"categories":["Nuxt 入门实战"],"path":"article/04-practic/Nuxt/Nuxt 入门实战 - 09：集成腾讯CoDesign字体图标库"},{"title":"Nuxt 入门实战 - 10：定义全局变量和方法","author":"Potter","date":"2023-06-25T11:44:26.000Z","tags":["Nuxt"],"categories":["Nuxt 入门实战"],"path":"article/04-practic/Nuxt/Nuxt 入门实战 - 10：定义全局变量和方法"},{"title":"Nuxt 入门实战 - 11：如何使用动态组件","author":"Potter","date":"2023-06-26T11:44:45.000Z","tags":["Nuxt"],"categories":["Nuxt 入门实战"],"path":"article/04-practic/Nuxt/Nuxt 入门实战 - 11：如何使用动态组件"},{"title":"Nuxt 入门实战 - 12：集成NProgess","author":"Potter","date":"2023-07-01T11:45:04.000Z","tags":["Nuxt"],"categories":["Nuxt 入门实战"],"path":"article/04-practic/Nuxt/Nuxt 入门实战 - 12：集成NProgess"},{"title":"Nuxt 入门实战 - 13：docker 打包部署","author":"Potter","date":"2023-07-02T11:45:23.000Z","tags":["Nuxt"],"categories":["Nuxt 入门实战"],"path":"article/04-practic/Nuxt/Nuxt 入门实战 - 13：docker 打包部署"},{"title":"uni-app 如何引入Iconfont阿里巴巴矢量图标库","author":"Potter","date":"2022-05-12 18:42","tags":["UniApp"],"categories":["前端"],"path":"article/04-practic/Uniapp/UniApp01"},{"title":"uniapp 入门实战 02：编译时动态替换配置方案","author":"Potter","date":"2022-05-12 18:42","tags":["UniApp"],"categories":["uniapp 入门实战"],"path":"article/04-practic/Uniapp/UniApp02"},{"title":"uniapp 入门实战 03：富文本显示","author":"Potter","date":"2022-05-12 18:42","tags":["rich-text"],"categories":["uniapp 入门实战"],"path":"article/04-practic/Uniapp/UniApp03"},{"title":"uniapp 入门实战 04： canvasToTempFilePath 解决 fail canvas is empty 报错","author":"Potter","date":"2022-05-12 18:42","tags":["UniApp","canvas","小程序"],"categories":["uniapp 入门实战"],"path":"article/04-practic/Uniapp/UniApp04"},{"title":"uniapp 入门实战 07：解决引入阿里巴巴字体图标，修改字体颜色无效问题","author":"Potter","date":"2022-05-12 18:42","tags":["UniApp","canvas","小程序"],"categories":["uniapp 入门实战"],"path":"article/04-practic/Uniapp/UniApp07：解决引入阿里巴巴字体图标，修改字体颜色无效问题"},{"title":"uniapp 入门实战 08：设置 with 为 auto，图片列表显示仍然被压缩在屏幕宽度内显示的问题","author":"Potter","date":"2022/6/16 22:49","tags":["UniApp"],"categories":["UniApp"],"path":"article/04-practic/Uniapp/uniapp 入门实战 08：设置with为auto，图片列表显示仍然被压缩在屏幕宽度内显示的问题"},{"title":"uniapp 入门实战 09：解决>>> 与 /deep/ 深度选择无法使用的问题","author":"Potter","date":"2022/6/16 22:50","tags":["UniApp"],"categories":["UniApp"],"path":"article/04-practic/Uniapp/uniapp 入门实战 09：解决 与 deep 深度选择无法使用的问题"},{"title":"uniapp 入门实战 10：利用 css 实现文字居中在圆中心","author":"Potter","date":"2022/6/16 22:50","tags":["UniApp"],"categories":["UniApp"],"path":"article/04-practic/Uniapp/uniapp 入门实战 10：利用css实现文字居中在圆中心"},{"title":"uniapp 入门实战 11：解决给引入的组件添加 class，样式诡异问题","author":"Potter","date":"2022/11/13 16:40","tags":["UniApp"],"categories":["UniApp"],"path":"article/04-practic/Uniapp/uniapp 入门实战 11：解决给引入的组件添加class，样式诡异问题"},{"title":"uniapp 入门实战 12：解决给 flex 布局元素中插入<br/>标签换行失效问题","author":"Potter","date":"2022/11/13 16:33","tags":["UniApp"],"categories":["UniApp"],"path":"article/04-practic/Uniapp/uniapp 入门实战 12：解决给flex布局元素中插入 br 标签换行失效问题"},{"title":"uniapp 入门实战 13：解决 canvasToTempFilePath 生成图片模糊问题","author":"Potter","date":"2022/06/16 22:51","tags":["UniApp"],"categories":["UniApp"],"path":"article/04-practic/Uniapp/uniapp 入门实战 13：解决canvasToTempFilePath 生成图片模糊问题"},{"title":"Dev环境用vite替换webpack获得极致开发体验","author":"Potter","date":"2023-8-14 11:57","tags":["vite","webpack","vue3"],"categories":["vite"],"path":"article/04-practic/Vite/Dev环境用vite替换webpack获得极致开发体验"},{"title":"vue-ssr 1.基本实现","author":"Potter","date":"2022-11-02 11:26","tags":["vue-ssr","ssr"],"categories":["vue-ssr"],"path":"article/04-practic/Vue-ssr/01-vue-ssr-基本实现"},{"title":"vue-ssr 2.集成vue-router","author":"Potter","date":"2022-11-03 11:00","tags":["vue-ssr","ssr"],"categories":["vue-ssr"],"path":"article/04-practic/Vue-ssr/02-vue-ssr-集成vue-router"},{"title":"vue-ssr 3.集成vuex","author":"Potter","date":"2022-11-04 11:00","tags":["vue-ssr","ssr"],"categories":["vue-ssr"],"path":"article/04-practic/Vue-ssr/03-vue-ssr-集成vuex"},{"title":"vue-ssr 4.优化打包和支持preload","author":"Potter","date":"2022-11-05 11:20","tags":["vue-ssr","ssr"],"categories":["vue-ssr"],"path":"article/04-practic/Vue-ssr/04-vue-ssr-优化打包和支持preload"},{"title":"解决vue项目打包后，开发环境页面正常显示，打包后页面却无法显示问题，排查全过程","author":"Potter","date":"2023-10-15T16:18:28.000Z","tags":["xx"],"categories":["xx"],"path":"article/04-practic/Vue/解决vue项目打包后，开发环境页面正常显示，打包后页面却无法显示问题，排查全过程"},{"title":"实现一个将JSON转markdown table的vscode插件","author":"Potter","date":"2024-04-15T10:25:02.000Z","tags":["vscode","插件"],"categories":["vscode 插件"],"path":"article/04-practic/vscode/实现一个将JSON转markdown table的vscode插件"},{"title":"Web性能优化","author":"Potter","date":"2022-05-12 18:48","tags":["Vue","WebPack"],"categories":["性能优化"],"path":"article/05-optimize/Optimization/Web03"},{"title":"Web构建优化","author":"Potter","date":"2022-05-12 18:48","tags":["DllPlugin","DllReferencePlugin","打包优化"],"categories":["webpack"],"path":"article/05-optimize/Optimization/WebBuild01"},{"title":"知道这些软件，让你工作得更顺心 [Part 1]","author":"Potter","date":"2022-05-12 18:50","tags":["tools"],"categories":["tools"],"path":"article/06-misc/Tools Share/Normal01"},{"title":"web如何调起exe程序","author":"Potter","date":"2023-08-02T16:28:32.000Z","tags":["C#"],"categories":["Web"],"path":"article/06-misc/csharp/web如何调起exe程序"},{"title":"如何获取类中字段、属性、函数等的相关注释","author":"Potter","date":"2023/05/30 17:20","tags":["获取类注释","反射"],"categories":["C#"],"path":"article/06-misc/csharp/如何获取类中字段、属性、函数等的相关注释"},{"title":"初始化不统一控制好，引发的血案","author":"Potter","date":"2022-05-12 18:35","tags":["编程血案"],"categories":["编程血案"],"path":"article/06-misc/tragedy/初始化不统一控制好，引发的血案"},{"title":"手动拼接长url，引发的血案","author":"Potter","date":"2022-05-12 18:32","tags":["编程血案"],"categories":["编程血案"],"path":"article/06-misc/tragedy/手动拼接长url，引发的血案"},{"title":"解决XMLHttpRequest发送formData，java后端无法正确拿到数据问题","author":"Potter","date":"2022-04-23T16:21:03.000Z","tags":["乱码"],"categories":["web"],"path":"article/06-misc/web/解决XMLHttpRequest 发送formData，后端java要么不到数据，要么拿到数据乱码"}]');const N=t=>(at("data-v-7d0dbbf5"),t=t(),rt(),t),oe={class:"timeline-wrap"},se={class:"timeline-header"},ce=N(()=>e("svg",{class:"icon",role:"img",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},[e("title",null,"所属分类"),e("path",{d:"M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256z m635.3 512H159l103.3-256h612.4L771.3 768z"})],-1)),ne=N(()=>e("svg",{class:"icon",role:"img",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},[e("title",null,"标签列表"),e("path",{d:"M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-0.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-0.2-4.7 0.6-6.3 2.3L137.7 444.8a8.03 8.03 0 0 0 0 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0z m62.6-651.7l224.6 19 19 224.6L477.5 694 233.9 450.5l311.9-311.9z m60.16 186.23a48 48 0 1 0 67.88-67.89 48 48 0 1 0-67.88 67.89zM889.7 539.8l-39.6-39.5a8.03 8.03 0 0 0-11.3 0l-362 361.3-237.6-237a8.03 8.03 0 0 0-11.3 0l-39.6 39.5a8.03 8.03 0 0 0 0 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z"})],-1)),le=N(()=>e("svg",{class:"icon",role:"img",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32z m-260 72h96v209.9L621.5 312 572 347.4V136z m220 752H232V136h280v296.9c0 3.3 1 6.6 3 9.3a15.9 15.9 0 0 0 22.3 3.7l83.8-59.9 81.4 59.4c2.7 2 6 3.1 9.4 3.1 8.8 0 16-7.2 16-16V136h64v752z"})],-1)),pe=N(()=>e("svg",{class:"icon",role:"img",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32z m-260 72h96v209.9L621.5 312 572 347.4V136z m220 752H232V136h280v296.9c0 3.3 1 6.6 3 9.3a15.9 15.9 0 0 0 22.3 3.7l83.8-59.9 81.4 59.4c2.7 2 6 3.1 9.4 3.1 8.8 0 16-7.2 16-16V136h64v752z"})],-1)),ue={class:"timeline-item"},he={class:"year"},de=["onClick","src","title"],ge={class:"timeline-item-content"},me={class:"month"},_e={class:"articles"},ve={class:"article"},fe=N(()=>e("img",{src:ie,class:"icon"},null,-1)),we=["href"],ye=N(()=>e("br",null,null,-1)),Pe=N(()=>e("div",{id:"main"},null,-1)),Te={__name:"Archive",setup(t){let r,o,p,h,u;function n(v){if(!v)return Number.MAX_SAFE_INTEGER;let a=new Date(v);return Math.floor(a.getTime())}function T(){if(r=[],o={},p=F("category"),h=F("tag"),u=F("year"),p&&p.trim()!="")for(let a=0;a<S.length;a++){let s=S[a];s.categories&&s.categories.includes(p)&&r.push(s)}else if(h&&h.trim()!="")for(let a=0;a<S.length;a++){let s=S[a];s.tags&&s.tags.includes(h)&&r.push(s)}else if(u&&u.trim()!="")for(let a=0;a<S.length;a++){let s=S[a];s.date&&new Date(s.date).getFullYear()==u&&r.push(s)}else r.push(...S);let v=r.find(a=>!a.date);v&&console.error("无日期博客：",v),r.sort((a,s)=>n(s.date)-n(a.date));for(let a=0;a<r.length;a++){const s=r[a];let m=new Date(s.date).getFullYear()+"年",g=new Date(s.date).getMonth()+1+"月";o[m]||(o[m]={}),o[m][g]||(o[m][g]=[]),o[m][g].push(s)}}return T(),(v,a)=>{const s=et,m=re;return c(),l("div",oe,[e("div",se,[i(p)?(c(),V(s,{key:0,class:"content",closable:"",onClose:a[0]||(a[0]=g=>i(U)("/archives"))},{icon:_(()=>[ce]),default:_(()=>[A(" "+d(i(p))+" (共 "+d(i(r).length)+" 篇) ",1)]),_:1})):i(h)?(c(),V(s,{key:1,class:"content",closable:"",onClose:a[1]||(a[1]=g=>i(U)("/archives"))},{icon:_(()=>[ne]),default:_(()=>[A(" "+d(i(h))+" (共 "+d(i(r).length)+" 篇) ",1)]),_:1})):i(u)?(c(),V(s,{key:2,class:"content",closable:"",onClose:a[2]||(a[2]=g=>i(U)("/archives"))},{icon:_(()=>[le]),default:_(()=>[A(" "+d(i(u))+"年 (共 "+d(i(r).length)+" 篇) ",1)]),_:1})):(c(),V(s,{key:3,class:"content"},{icon:_(()=>[pe]),default:_(()=>[A(" 共 "+d(i(S).length)+" 篇，未完待续······ ",1)]),_:1}))]),(c(!0),l(Z,null,D(i(o),(g,f)=>(c(),l("div",ue,[e("div",he,[e("img",{class:"chinese-zodiac",onClick:k=>i(U)("/archives","year",f.replace("年","")),src:"img/svg/chinese-zodiac/"+i(Nt)(f.replace("年",""))+".svg",title:i(bt)(f.replace("年","")),alt:"生肖"},null,8,de),e("span",null,d(f),1)]),e("div",ge,[(c(!0),l(Z,null,D(g,(k,y)=>(c(),l("div",null,[e("span",me,d(y),1),e("div",_e,[(c(!0),l(Z,null,D(k,w=>(c(),l("span",ve,[fe,e("a",{href:w.path,class:"title",target:"_blank"},d(w.title),9,we),ye,H(m,{article:w},null,8,["article"])]))),256))])]))),256))]),Pe]))),256))])}}},ke=G(Te,[["__scopeId","data-v-7d0dbbf5"]]),Ne=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"archives.md","lastUpdated":1715053816000}'),xe={name:"archives.md"};function Se(t,r,o,p,h,u){const n=ke,T=ut("ClientOnly");return c(),l("div",null,[H(T,null,{default:_(()=>[H(n)]),_:1})])}const Ce=G(xe,[["render",Se]]);export{Ne as __pageData,Ce as default};
