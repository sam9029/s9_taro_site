import{d as c,a as u,c as p,b as o,e as n,f as e,t as a,T as m}from"./index-BvF0sqAX.js";const _={class:"card-detail__wrapper fixed left-0 top-0 z-20 w-screen h-screen flex justify-center items-center glass"},f={class:"ui-mockup-window border-base-300 border shadow-md w-[80%] h-[80%] md:w-[70%] relative"},v={key:0,class:"border-base-300 flex flex-col sm:flex-row gap-5 justify-center items-center border-t px-4 py-16"},x=["src"],h={class:"text-[68px] font-bold"},b={class:"font-bold mt-4 text-zinc-900"},g={class:"font-bold mt-4 text-zinc-900"},w={key:1,class:"w-full h-full flex justify-center items-center"},z=c({__name:"cardDetail",props:{name:{type:String,default:""}},setup(i){const l=u(),t=i,s=p(()=>t.name?m[t.name]:{}),d=()=>{l.back()};return(k,r)=>(o(),n("div",_,[e("div",f,[e("div",{class:"absolute top-3 right-6 z-30 cursor-pointer rounded-md",onClick:d},"X"),t.name?(o(),n("div",v,[e("div",null,[e("img",{class:"w-[180px] h-[320px] rounded-md shadow-md p-1 bg-slate-100/50",src:s.value.cover_url,alt:""},null,8,x)]),e("div",null,[e("div",h,a(s.value.name),1),e("div",b,"正位："+a(s.value.description),1),e("div",g,"逆位："+a(s.value.reversed_description),1)])])):(o(),n("div",w,r[0]||(r[0]=[e("span",{class:"ui-loading ui-loading-spinner ui-loading-lg"},null,-1)])))])]))}});export{z as default};
