import{f as c,s as u,o as l,c as h,m as o,n as d,A as f,B as g,i as m,j as p}from"./BBtTaDTQ.js";const S=["src","alt","width","height"],b={__name:"Image",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const a=e,n=c(),i=u(()=>{if(a.src.startsWith("//"))return a.src;const t=f(g(m().app.baseURL)),s=r(n.path);return p(t,s,a.src)});function r(t){return t.endsWith("/")?t:t.replace(/\/[^/]*\/?$/,"")}return(t,s)=>(l(),h("img",{src:o(i),alt:e.alt,width:e.width,height:e.height,class:d([e.alt])},null,10,S))}};export{b as default};
