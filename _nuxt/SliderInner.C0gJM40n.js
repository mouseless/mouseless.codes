import{G as m,k as h,s as b,q as k,o as c,c as d,a as s,n as a,m as t,r as f,F as p,x as $}from"./entry.Bs-lsIbI.js";const C={class:"slider"},S={class:"navigation slider__previous"},y={class:"navigation slider__next"},x={class:"slider__thumb"},B=["onClick"],j={__name:"SliderInner",props:{slides:{type:Array,default:()=>[]},align:{type:String,default:"center"},height:{type:String,default:"50ch"}},setup(n){m(o=>({49159894:n.height}));const _=n,l=h("block-child-color","dark"),i=b(()=>_.slides),e=k(0),u=()=>e.value>0?e.value=e.value-1:e.value,g=()=>e.value<i.value.length-1?e.value=e.value+1:e.value;function v(o){e.value=o}return(o,N)=>(c(),d("div",C,[s("div",S,[s("button",{class:a(["navigation__button",{"navigation__button--disabled":t(e)==0}]),onClick:u},[s("img",{class:a([`mouseless logo mark mono ${t(l)=="light"?"invert":""}`,"navigation__image navigation__image--reverse"])},null,2)],2)]),s("div",{class:a(["slider__content",[`slider__content--color_${t(l)}`,`slider__content--align_${n.align}`]])},[f(o.$slots,"default",{pageNumber:t(e),slides:t(i)})],2),s("div",y,[s("button",{class:a(["navigation__button",{"navigation__button--disabled":t(e)==t(i).length-1||t(i).length==0}]),onClick:g},[s("img",{class:a([`mouseless logo mark mono ${t(l)=="light"?"invert":""}`,"navigation__image"])},null,2)],2)]),s("div",x,[(c(!0),d(p,null,$(n.slides.length,r=>(c(),d("button",{key:r,class:a([[{"slider__dot--active":r-1==t(e)},`slider__dot--color_${t(l)}`],"slider__dot"]),onClick:F=>v(r-1)},null,10,B))),128))])]))}};export{j as default};
