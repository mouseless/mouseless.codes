import{_ as f}from"./ContentRendererMarkdown.vue.LzJJRo9r.js";import{H as s,E as l,y as d,M as c}from"./entry.DIOOSpUv.js";import"./MDCRenderer.0tzEU9Cr.js";import"./index.BsYmvPZw.js";const m=s({name:"ContentRenderer",props:{value:{type:Object,required:!1,default:()=>({})},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"}},setup(t){l(()=>t.excerpt,n=>{var e,u,a;n&&!((e=t.value)!=null&&e.excerpt)&&(console.warn(`No excerpt found for document content/${(u=t==null?void 0:t.value)==null?void 0:u._path}.${(a=t==null?void 0:t.value)==null?void 0:a._extension}!`),console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature."))},{immediate:!0})},render(t){var i,o;const n=d(),{value:e,excerpt:u,tag:a}=t,r=u?e==null?void 0:e.excerpt:e==null?void 0:e.body;return!((i=r==null?void 0:r.children)!=null&&i.length)&&(n!=null&&n.empty)?n.empty({value:e,excerpt:u,tag:a,...this.$attrs}):n!=null&&n.default?n.default({value:e,excerpt:u,tag:a,...this.$attrs}):(r==null?void 0:r.type)==="root"&&((o=r==null?void 0:r.children)!=null&&o.length)?c(f,{value:e,excerpt:u,tag:a,...this.$attrs}):c("pre",null,JSON.stringify({message:"You should use slots with <ContentRenderer>",value:e,excerpt:u,tag:a},null,2))}}),g=m;export{g as default};
