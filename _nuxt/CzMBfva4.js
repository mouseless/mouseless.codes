import S from"./DfLRyiB5.js";import B from"./Brm2VYOg.js";import{_ as V}from"./CIvjSSSA.js";import N from"./vyutlRFG.js";import{u as P}from"./BNUYKoLI.js";import{G as I,k as L,q as u,H as R,I as A,o as l,c,a as n,F,x as G,n as H,m as e,t as T,b as d,l as g,h as f,w as j,d as z}from"./ByoSPicl.js";import"./DlAUqK2U.js";import"./EtxAxw1B.js";import"./BgmUL5K_.js";import"./C-v3KzvZ.js";import"./BneCoJRQ.js";import"./Cpj98o6Y.js";const D={class:"pr-list"},E={class:"pr-list__repos"},M={class:"repo-list"},J={class:"repo-list__items"},K=["onClick"],O={class:"pr-list__prs"},Q={key:0,class:"pr-list__loading loading"},U=n("div",{class:"loading__icon"},null,-1),W=[U],X={key:1,class:"pr-list__see-more pr"},Y={class:"pr__body"},pt={__name:"PrList",props:{height:{type:String,default:"50ch"},repos:{type:Array,default:()=>[]}},setup(s){I(t=>({beb588e0:s.height}));const v=s,k=P(),y=L("block-child-color","dark"),p=u([]),i=u(0),_=u(!1),o=u("all");R(async()=>{const t=await h(o.value);p.value=t.length>0?[...t,{}]:t}),A([i,o],async()=>{const t=await h(o.value);p.value=t.length>0?[...t,{}]:t});function x(){o.value=o.value==="all"?"open":"all"}function b(t){i.value=t}async function h(t){_.value=!1;const m=await k.getPullRequests(v.repos[i.value],t);return _.value=!0,m}return(t,m)=>{const w=S,$=B,q=V,C=N;return l(),c("div",D,[n("div",E,[n("div",M,[n("ul",J,[(l(!0),c(F,null,G(s.repos,(r,a)=>(l(),c("li",{key:r,class:"repo-list__item"},[n("button",{class:H(["repo-list__item-link",[`repo-list__item-link--color_${e(y)}`,{"repo-list__item-link--active":a==e(i)}]]),onClick:Z=>b(a)},T(r),11,K)]))),128))]),d(w,{action:x,status:e(o),class:"repo-list__switcher"},null,8,["status"])])]),n("div",O,[e(_)?g("",!0):(l(),c("div",Q,W)),e(_)?(l(),f(C,{key:1,align:"left",slides:e(p),height:s.height},{default:j(({pageNumber:r,slides:a})=>[a.length!==0&&r!=a.length-1?(l(),f($,{key:0,pr:a[r],height:s.height},null,8,["pr","height"])):(l(),c("div",X,[n("div",Y,[z(" To see more pull requests, please visit "),d(q,{text:`github.com/mouseless/${s.repos[e(i)]}/pulls`,to:`https://github.com/mouseless/${s.repos[e(i)]}/pulls${e(o)=="all"?"?q=is%3Apr":""}`},null,8,["text","to"])])]))]),_:1},8,["slides","height"])):g("",!0)])])}}};export{pt as default};
