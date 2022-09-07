import{_ as a,p as e,T as l,h as t,E as i,f as s}from"./preact.272910a2.js";import{P as n}from"./Panel.d80d9593.js";import{u as r,bF as o,x as c,bG as m,p as $,L as u,_ as x,bH as A}from"./index.b0563877.js";import{I as f}from"./Input.d3dc4ead.js";import{F as d}from"./FileInput.9fa1eb8f.js";import{F as p,a as N,v as b,n as h}from"./FormError.15baa318.js";import{A as v}from"./ActionButton.3e8facf6.js";import{S as _}from"./Stub.3e3179ce.js";let w="Bv92k3",y="Bv92se",g={actions:"Bv92k3",notice:"Bv92se"},F=()=>{let{dispatch:i,user:s,device:n}=r("user","device"),$=a(),u=a(),x=a(),A=s.isAdmin,_=A?".gp3, .gp4, .gp5, .gpx, .gp":".gp3, .gp4, .gp5",[w,y]=e(!1),[F,D]=e(null),G=async(a,e,l,t)=>{y(!0),D(null);try{let s=N(A);b([{field:a,validator:h},{field:e,validator:h},{field:l,validator:s},]);let n={file:l.files[0],title:e.value,artist:a.value,difficulty:"Intermediate"};await m(i,n,t)}catch(r){console.error(r),D(r)}y(!1)},P=l(a=>{a.preventDefault();let e=new o;return G($.current,u.current,x.current,e.signal),e.abort.bind(e)},[$,u,x]),S=c(n.os)?"https://play.google.com/store/apps/details?id=org.herac.tuxguitar.android.activity.admob":"https://sourceforge.net/projects/tuxguitar",k={rel:"noopener noreferrer",target:"_blank"},B=t("a",{href:"https://www.guitar-pro.com",...k},"Guitar Pro"),H=t("a",{href:S,...k},"TuxGuitar");return t("form",{noValidate:!0,className:g.form,onSubmit:P,action:""},t(p,{error:F}),t(f,{type:"text",label:"Artist",ref:$,name:"artist",error:F}),t(f,{type:"text",label:"Title",ref:u,name:"title",error:F}),t("p",{className:g.notice,"aria-label":"requirements"},"To create a tab you'll need to either buy ",B," software or use a free ",H," alternative."),t("p",{className:g.notice,"aria-label":"instructions"},"We\xa0only support Guitar Pro\xa03,\xa04,\xa0and\xa05\xa0files at\xa0the moment. ","If\xa0you have a Guitar Pro 6/7+ (.gpx, .gp) file, please export\xa0it\xa0to a Guitar Pro 5 file format\xa0first.",t("br",null),B,": File → Export → GP5",t("br",null),H,": File → Save As → Guitar Pro 5"),t(d,{id:"tabFile",accept:_,label:"Guitar Pro Tab",ref:x,name:"file",error:F,isDropFileAvailable:!0,isNewFormats:A}),t("div",{className:g.actions},t(v,{id:"submitTab",title:"Submit",processing:w})))};function D(){return t("svg",{width:189,height:105,viewBox:"0 0 189 105"},t("path",{d:"M62 39C63.1046 39 64 38.1046 64 37C64 35.8954 63.1046 35 62 35V39ZM127 35C125.895 35 125 35.8954 125 37C125 38.1046 125.895 39 127 39V35ZM185 38V102H189V38H185ZM186 101H3V105H186V101ZM4 102V38H0V102H4ZM3 39H62V35H3V39ZM127 39H186V35H127V39ZM3 101C3.55228 101 4 101.448 4 102H0C0 103.657 1.34316 105 3 105V101ZM185 102C185 101.448 185.448 101 186 101V105C187.657 105 189 103.657 189 102H185ZM189 38C189 36.3431 187.657 35 186 35V39C185.448 39 185 38.5523 185 38H189ZM4 38C4 38.5523 3.55228 39 3 39V35C1.34315 35 0 36.3431 0 38H4Z",fill:"#3A3A3A"}),t("path",{d:"M92.5 68C92.5 69.1046 93.3954 70 94.5 70C95.6046 70 96.5 69.1046 96.5 68H92.5ZM95.9142 1.08579C95.1332 0.304738 93.8668 0.304738 93.0858 1.08579L80.3579 13.8137C79.5768 14.5948 79.5768 15.8611 80.3579 16.6421C81.1389 17.4232 82.4052 17.4232 83.1863 16.6421L94.5 5.32843L105.814 16.6421C106.595 17.4232 107.861 17.4232 108.642 16.6421C109.423 15.8611 109.423 14.5948 108.642 13.8137L95.9142 1.08579ZM96.5 68V2.5H92.5V68H96.5Z",fill:"#3A3A3A"}))}let G="Bkk4b",P="Bkk227",S="Bkk1g9",k={title:"Bkk4b",section:"Bkk227",notice:"Bkk1g9"},B=i(a=>{let{dispatch:e,uploads:l,user:i}=r("uploads","user"),{song:o,songSubmitted:c,songError:m}=l,{isLoggedIn:f}=i,d=!f,p=f&&!o,N=f&&o&&!m,b=N&&!c,h=N&&c;return s(()=>e("upload/reset"),[]),t(n,{title:"Submit Tab",id:a.id},d&&t(_,{id:"submit",header:"Have a tab to share?",icon:()=>t(D,null),hint:()=>t("span",{},"Please ",t(u,{to:"/a/wa/signin?next=submit","data-link":"signin"},"sign up")," for free to submit your tab.")}),p&&t("section",{className:k.section,"data-section":"submit"},t("h4",{className:k.title},"Have a tab to share?",t("br",null),"Upload it in Guitar\xa0Pro format and fill\xa0in\xa0the\xa0fields below."),t("div",null,t("p",{className:k.notice},"Your tab will appear on\xa0the\xa0site in\xa0a\xa0few\xa0minutes and we'll send you an\xa0email with\xa0a\xa0link\xa0to\xa0it."),t(F,null))),b&&t("section",{className:k.section,"data-section":"duplicate"},t("h4",{className:k.title},"Submitted song already exists on Songsterr."),t("div",null,t("p",{className:k.notice},"If you feel that you have a better version, please submit it via Upload\xa0New\xa0Revision button on existing song's page."),t(u,{className:x.buttonGreen,to:A(o)},"View existing song"))),h&&t("section",{className:k.section,"data-section":"success"},t("h4",{className:k.title},"Thanks for contributing to Songsterr!"),t("div",null,t("p",{className:k.notice},"We are processing your tab",t("br",null),"and will redirect to it as soon as possible."),t("div",null,t($,{fill:"#777",width:25,height:20})))))});export{B as default}