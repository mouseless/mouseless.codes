import{g as c,u as o,h as u,o as h,c as l,i as d,j as g,k as f,l as m,m as p}from"./entry.7c5a88e6.js";const S=["src","alt","width","height"],b=c({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const s=e,n=o(),r=u(()=>{if(s.src.startsWith("//"))return s.src;const t=g(f(m().app.baseURL)),a=i(n.path);return p(t,a,s.src)});function i(t){return t.endsWith("/")?t:t.replace(/\/[^/]*\/?$/,"")}return(t,a)=>(h(),l("img",{src:d(r),alt:e.alt,width:e.width,height:e.height},null,8,S))}});export{b as default};
