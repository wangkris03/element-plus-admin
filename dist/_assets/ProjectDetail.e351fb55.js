import{d as e,u as a,m as n,b as l,o as t,e as o,g as u,t as p}from"./index.2f3b3385.js";var m=e({name:"ProjectDetail",setup:()=>({projName:a().params.projName,input:n("")})});const r={id:"dynamicexample"},s=u("h2",null,"项目详情",-1);m.render=function(e,a,n,m,d,i){const c=l("el-input");return t(),o("div",r,[s,u("p",null,"项目编码："+p(e.projName),1),u(c,{modelValue:e.input,"onUpdate:modelValue":a[1]||(a[1]=a=>e.input=a)},null,8,["modelValue"])])};export default m;
