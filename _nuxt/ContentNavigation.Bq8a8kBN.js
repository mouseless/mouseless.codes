import{U as v,V as m,W as l,i as d,X as g,Y as f,I as c,Z as y,$ as h,_,a0 as w,a1 as C,H as $,a2 as P,s as x,a3 as N,K as E,y as T,M as p}from"./entry.DIOOSpUv.js";import{_ as S}from"./nuxt-link.DrXJVaWl.js";const b="$s";function j(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,o]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const a=b+n,r=l(),s=v(r.payload.state,a);if(s.value===void 0&&o){const i=o();if(m(i))return r.payload.state[a]=i,i;s.value=i}return s}const D=async t=>{const{content:e}=d().public;typeof(t==null?void 0:t.params)!="function"&&(t=g(t));const n=t.params(),o=e.experimental.stripQueryParameters?f(`/navigation/${`${c(n)}.${e.integrity}`}/${y(n)}.json`):f(`/navigation/${c(n)}.${e.integrity}.json`);if(h())return(await _(()=>import("./client-db.DF9eTorO.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(s=>s.generateNavigation))(n);const a=await $fetch(o,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:w(n),previewToken:C().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a},R=$({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=P(t),n=x(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&j("dd-navigation").value){const{navigation:a}=N();return{navigation:a}}const{data:o}=await E(`content-navigation-${c(n.value)}`,()=>D(n.value));return{navigation:o}},render(t){const e=T(),{navigation:n}=t,o=s=>p(S,{to:s._path},()=>s.title),a=(s,i)=>p("ul",i?{"data-level":i}:null,s.map(u=>u.children?p("li",null,[o(u),a(u.children,i+1)]):p("li",null,o(u)))),r=s=>a(s,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):r(n)}}),K=R;export{K as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.DF9eTorO.js","./entry.DIOOSpUv.js","./index.BsYmvPZw.js","./_commonjsHelpers.Cpj98o6Y.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
