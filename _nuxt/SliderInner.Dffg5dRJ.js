import{C as h,k,s as f,q as b,o as l,c as a,m as t,a as s,n as c,l as u,r as p,F as C,x as y}from"./entry.DIOOSpUv.js";const $={class:"slider"},S={key:0,class:"navigation slider__previous"},x={key:1,class:"navigation slider__next"},N={class:"slider__thumb"},B=["onClick"],q={__name:"SliderInner",props:{slides:{type:Array,default:()=>[]},align:{type:String,default:"center"},height:{type:String,default:"50ch"}},setup(n){h(r=>({"57eebd03":n.height}));const _=n,o=k("block-child-color","dark"),i=f(()=>_.slides),e=b(0),g=()=>e.value>0?e.value=e.value-1:e.value,v=()=>e.value<i.value.length-1?e.value=e.value+1:e.value;function m(r){e.value=r}return(r,V)=>(l(),a("div",$,[t(e)!=0?(l(),a("div",S,[s("button",{class:"navigation__button",onClick:g},[s("img",{class:c([`mouseless logo mark mono ${t(o)=="light"?"invert":""}`,"navigation__image navigation__image--reverse"])},null,2)])])):u("",!0),s("div",{class:c(["slider__content",[`slider__content--color_${t(o)}`,`slider__content--align_${n.align}`]])},[p(r.$slots,"default",{pageNumber:t(e),slides:t(i)})],2),t(e)!=t(i).length-1&&t(i).length!=0?(l(),a("div",x,[s("button",{class:"navigation__button",onClick:v},[s("img",{class:c([`mouseless logo mark mono ${t(o)=="light"?"invert":""}`,"navigation__image"])},null,2)])])):u("",!0),s("div",N,[(l(!0),a(C,null,y(n.slides.length,d=>(l(),a("button",{key:d,class:c([[{"slider__dot--active":d-1==t(e)},`slider__dot--color_${t(o)}`],"slider__dot"]),onClick:F=>m(d-1)},null,10,B))),128))])]))}};export{q as default};
