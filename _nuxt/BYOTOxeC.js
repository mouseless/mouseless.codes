import{_ as o}from"./DlAUqK2U.js";import{o as c,c as n,a as e,t as l,n as i,p as r,e as u}from"./BBtTaDTQ.js";const _=t=>(r("data-v-df0861eb"),t=t(),u(),t),d=_(()=>e("button",{class:"switcher__btn"},null,-1)),p={class:"switcher__text"},f={__name:"Switcher",props:{action:{type:Function,default:null},status:{type:String,default:null}},setup(t){return(m,s)=>(c(),n("div",{class:i(["switcher",`switcher--status_${t.status}`]),onClick:s[0]||(s[0]=(...a)=>t.action&&t.action(...a))},[d,e("div",p,l(t.status==="all"?"All":"Open"),1)],2))}},S=o(f,[["__scopeId","data-v-df0861eb"]]);export{S as default};