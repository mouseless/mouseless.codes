import{$ as v,E as g,A as k,c as a,a as e,r as u,F as d,C as w,h as s,D as C,m as y,o as l,s as $,v as n,t as m}from"./CUbhAbJ_.js";const b=v("/components/steps/arrow.png"),S={class:"steps"},A={class:"flow steps__flow"},B=["onClick"],V={class:"step__name"},j={class:"steps__scroll"},D={class:"steps__content"},N={__name:"Steps",props:{titles:{type:Array,default:()=>[]},height:{type:String,default:"50ch"}},setup(_){C(o=>({f6d7248c:_.height}));const h=g(),i=Object.keys(h),p=i.length,c=k(0),r=y("block-child-color","dark");function f(o){c.value=o}return(o,E)=>(l(),a(d,null,[e("div",S,[e("div",A,[(l(!0),a(d,null,w(s(p),t=>(l(),a("div",{key:t,class:"flow__step"},[e("div",{class:n(["step",[{"step--active":s(c)==t-1},`step--color_${s(r)}`]]),onClick:F=>f(t-1)},[e("div",{class:n(["step__number",[`step__number--color_${s(r)}`,{"step__number--active":s(c)==t-1}]])},m(t),3),e("div",V,m(_.titles[t-1]),1)],10,B),t!==s(p)?(l(),a("img",{key:0,src:b,class:n(["flow__arrow",`flow__arrow--color_${s(r)}`])},null,2)):$("",!0)]))),128))]),e("div",j,[e("div",D,[u(o.$slots,s(i)[s(c)])])])]),u(o.$slots,"default")],64))}};export{N as default};
