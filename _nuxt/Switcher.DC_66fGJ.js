import{_ as c}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{o,c as n,a,t as l,n as i,p as r,e as u}from"./entry.Bs-lsIbI.js";const _=t=>(r("data-v-d4a65c03"),t=t(),u(),t),d=_(()=>a("button",{class:"switcher__btn"},null,-1)),p={class:"switcher__text"},m={__name:"Switcher",props:{action:{type:Function,default:null},status:{type:String,default:null}},setup(t){return(h,s)=>(o(),n("div",{class:i(["switcher",`switcher--status_${t.status}`]),onClick:s[0]||(s[0]=(...e)=>t.action&&t.action(...e))},[d,a("div",p,l(t.status==="all"?"All":"Open"),1)],2))}},S=c(m,[["__scopeId","data-v-d4a65c03"]]);export{S as default};
