import u from"./ContentRenderer.329ba7c7.js";import _ from"./ContentDoc.4898c7f0.js";import{q as f,Q as h,L as l,P as d,u as p,c as x,w as y,R as C,o as w,S as q}from"./entry.980ae8ea.js";import{q as R}from"./query.8314ba89.js";import"./ContentRendererMarkdown.30d4bc63.js";import"./index.a6ef77ff.js";import"./ContentQuery.470aca6d.js";import"./utils.295d4ff4.js";const A={__name:"[...content-page]",async setup(g){let t,n;const e=f(),a=e.path!=="/"&&e.path.endsWith("/"),i=([t,n]=h(()=>R("/not-found").findOne()),t=await t,n(),t);return l(async()=>{if(a){const{path:r,query:s,hash:o}=e,m={path:r.replace(/\/+$/,""),query:s,hash:o};await d(m,{replace:!0})}}),(r,s)=>{const o=u,c=_;return p(a)?C("",!0):(w(),x(c,{key:0},{"not-found":y(()=>[q(o,{value:p(i)},null,8,["value"])]),_:1}))}}};export{A as default};
