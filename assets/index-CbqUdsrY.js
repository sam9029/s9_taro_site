import{_ as g,r as _,a as v,l as w,b as x,e as a,v as u,k as M,x as E,m as C}from"./index-B4oAVC6r.js";const f="abacdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789";function h(t,s,l){let e=Math.floor(Math.random()*(s-t+1)+t),o=f.length-10;return l==0&&e>=o&&(e=h(t,s,l)),e}function I(t){let s=0,l=f.length-1,e="";t=t||15;for(var o=0,i;o<t;o++)i=h(s,l,o),e+=f[i];return e}const T=["id"],B={class:"ui-modal-box"},p="open",m="close",r="confirm",N={__name:"index",emits:[p,m,r],setup(t,{expose:s,emit:l}){const e=l,o=_("default"),i=_(!1);function b(){const n="modal_"+I(16);o.value=n}function k(n){i.value=!0,C(()=>{var d;(d=window[o.value])==null||d.showModal()}),e(p)}function c(n=m){i.value=!1,window[o.value].close(),n!=r&&e(m)}function S(){e(r),c(r)}return b(),s({open:k,close:c}),(n,d)=>(v(),w(E,{to:"body"},[i.value?(v(),x("dialog",{key:0,id:o.value,class:"ui-modal"},[a("div",B,[a("div",null,[u(n.$slots,"header",{},void 0,!0)]),a("div",null,[u(n.$slots,"default",{},void 0,!0)]),u(n.$slots,"header",{},()=>[a("div",{class:"ui-modal-action"},[a("form",{method:"dialog"},[a("button",{class:"ui-btn mr-2 w-24",onClick:c},"取消"),a("button",{class:"ui-btn ui-btn-primary w-24",onClick:S},"确认")])])],!0)])],8,T)):M("",!0)]))}},O=g(N,[["__scopeId","data-v-34233851"]]);export{O as default};
