import{a2 as v,x as g,r as k,f as a,A as e,z as u,G as d,H as w,h as s,L as y,F as C,p as l,v as b,n as r,B as f}from"./ciaMPvop.js";const $=v("/components/steps/arrow.png"),S={class:"steps"},B={class:"flow steps__flow"},A=["onClick"],L={class:"step__name"},V={class:"steps__scroll"},j={class:"steps__content"},D={__name:"Steps",props:{titles:{type:Array,default:()=>[]},height:{type:String,default:"50ch"}},setup(_){y(o=>({f6d7248c:_.height}));const h=g(),i=Object.keys(h),p=i.length,c=k(0),n=C("block-child-color","dark");function m(o){c.value=o}return(o,z)=>(l(),a(d,null,[e("div",S,[e("div",B,[(l(!0),a(d,null,w(s(p),t=>(l(),a("div",{key:t,class:"flow__step"},[e("div",{class:r(["step",[{"step--active":s(c)==t-1},`step--color_${s(n)}`]]),onClick:F=>m(t-1)},[e("div",{class:r(["step__number",[`step__number--color_${s(n)}`,{"step__number--active":s(c)==t-1}]])},f(t),3),e("div",L,f(_.titles[t-1]),1)],10,A),t!==s(p)?(l(),a("img",{key:0,src:$,class:r(["flow__arrow",`flow__arrow--color_${s(n)}`])},null,2)):b("",!0)]))),128))]),e("div",V,[e("div",j,[u(o.$slots,s(i)[s(c)])])])]),u(o.$slots,"default")],64))}};export{D as default};
