import{_ as w,r as u,a as r,l as k,b as h,e as o,v as c,k as x,x as E,m as I}from"./index-BplTCESI.js";const C=["id"],M={class:"ui-modal-box"},m="open",d="close",s="confirm",S={__name:"index",emits:[m,d,s],setup(T,{expose:f,emit:_}){const n=_,t=u("default"),a=u(!1);function p(){const e="modal_"+window.crypto.randomUUID().split("-")[0];t.value=e}function v(e){a.value=!0,I(()=>{var l;(l=window[t.value])==null||l.showModal()}),n(m)}function i(e=d){a.value=!1,window[t.value].close(),e!=s&&n(d)}function b(){n(s),i(s)}return p(),f({open:v,close:i}),(e,l)=>(r(),k(E,{to:"body"},[a.value?(r(),h("dialog",{key:0,id:t.value,class:"ui-modal"},[o("div",M,[o("div",null,[c(e.$slots,"header",{},void 0,!0)]),o("div",null,[c(e.$slots,"default",{},void 0,!0)]),c(e.$slots,"header",{},()=>[o("div",{class:"ui-modal-action"},[o("form",{method:"dialog"},[o("button",{class:"ui-btn mr-2 w-24",onClick:i},"取消"),o("button",{class:"ui-btn ui-btn-primary w-24",onClick:b},"确认")])])],!0)])],8,C)):x("",!0)]))}},B=w(S,[["__scopeId","data-v-811ef1b1"]]);export{B as default};
