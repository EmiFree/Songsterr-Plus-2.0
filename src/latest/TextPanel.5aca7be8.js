import{d as e,q as t,h as a,a as n}from"./preact.bf58aca5.js";import{P as o}from"./Panel.98ba2c65.js";import{u as r,S as s,bN as i,aa as l}from"./index.e8b15340.js";let textpage="Cbj2o2",section="Cbj22m",__default={textpage:"Cbj2o2",section:"Cbj22m"},WELL_KNOWN_TITLES={privacy:"Privacy Policy",terms:"Terms of Service",dnsmpd:"Do Not Sell My Personal Information"};class TextPanel extends e{render(){let{textpage:e}=r("textpage");{let c=t(s);a(()=>{i(c,this.props.route.page)},[this.props.route.page]),a(()=>{let e;let t=document.getElementById("manage-consent");return t&&(e=e=>{c.dispatch("consent/view",{suite:"tcf",view:"details",options:null}),e.preventDefault()},t.addEventListener("click",e)),()=>t&&e&&t.removeEventListener("click",e)},[e.content])}return n(o,{title:e.title||WELL_KNOWN_TITLES[e.slug]||"Placeholder",id:e.slug},n("div",{className:__default.section},e.isLoading&&n(l,{level:"info",title:"Loading...",action:"",reason:"textpage_loading"}),e.isError&&n(l,{level:"info",title:"Something went wrong",action:"Please, try to reload page.",reason:"textpage_error"}),!e.isLoading&&!e.isError&&n("div",{className:__default.textpage,dangerouslySetInnerHTML:{__html:e.content}})))}}export{TextPanel,TextPanel as default};