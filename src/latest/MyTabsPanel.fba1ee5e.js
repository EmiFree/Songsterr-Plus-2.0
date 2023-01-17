import{d as t,a as a,R as e,o as s,h as i}from"./preact.3d326435.js";import{bh as n,L as l,bQ as r,u as o,g as d}from"./index.9148933a.js";import"./audio.1ae45449.js";import{P as b}from"./Panel.1b182ff5.js";import{S as c}from"./Stub.4f8edbef.js";import"./env.1ef38fce.js";class IconNoSubmittedTabs extends t{render(){return a("svg",{width:84,height:104,viewBox:"2 2 79.167 100",fill:"none"},a("path",{d:"M5 2h73.167a3 3 0 0 1 3 3v94a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Z",stroke:"#3A3A3A","stroke-width":"4"}),a("path",{d:"M51.125 39.319c0 7.667-4.972 12.485-9.542 12.485-4.57 0-9.541-4.818-9.541-12.485 0-7.668 4.972-12.486 9.541-12.486 4.57 0 9.542 4.818 9.542 12.486Zm-3.2 14.57c4.283-2.769 7.2-8.255 7.2-14.57 0-9.105-6.063-16.486-13.542-16.486-7.478 0-13.541 7.381-13.541 16.486 0 6.315 2.917 11.801 7.2 14.57C23.344 55.563 14.5 61.777 14.5 68.341 14.5 76.027 26.626 77 41.583 77c14.958 0 27.084-.973 27.084-8.659 0-6.564-8.844-12.778-20.743-14.452Zm16.742 14.452c0 .692-.2 1.103-.728 1.556-.69.589-1.98 1.236-4.16 1.771C55.415 72.741 49.107 73 41.584 73c-7.522 0-13.83-.26-18.196-1.332-2.179-.535-3.47-1.182-4.159-1.772-.529-.452-.728-.864-.728-1.555 0-1.67 1.453-4.339 5.896-6.843 4.229-2.383 10.307-4.049 17.187-4.049 6.881 0 12.96 1.666 17.187 4.049 4.444 2.504 5.897 5.174 5.897 6.843Z",fill:"#3A3A3A","fill-rule":"evenodd","clip-rule":"evenodd"}),a("title",{id:"title-account"},"Tabs"))}}let subtitle="C4p8m",text="C4prg",link="C4pcd",tabs="C4p2cf",thead="C4p1f0",sortsBar="C4p2u3",totalBalance="C4p162",balanceIcon="C4pwx",noTabs="C4pck",noTabs__instructions="C4p2tl",submitTabsStroke="C4p2k8",__default$1={subtitle:"C4p8m",text:"C4prg",link:"C4pcd",tabs:"C4p2cf",thead:"C4p1f0",sortsBar:"C4p2u3",totalBalance:"C4p162",balanceIcon:"C4pwx",noTabs:"C4pck",noTabs__instructions:"C4p2tl",submitTabsStroke:"C4p2k8"},item="D012iv",numerated="D012iv D012x",wrapper="D012ps",name="D012u1",artist="D01144",active="D012ga",__default={item:"D012iv",numerated:"D012iv D012x",wrapper:"D012ps",name:"D012u1",artist:"D01144",active:"D012ga"},TabsCard=e(t=>{let{isActive:a,numerated:e,revisionData:i,onClick:r}=t,{title:o,artist:d,defaultTrack:b}=i,c=e?__default.numerated:__default.item;a&&(c+=" "+__default.active);let u=n(i,b);return s(l,{to:u,className:c,onClick:r,"data-song":"",children:[s("div",{className:__default.name,"data-field":"name",children:o}),s("div",{className:__default.artist,"data-field":"artist",children:d})]})}),NoTabs=e(()=>a(c,{id:"nosubmittedtabs",header:"You have no submitted tabs.",icon:()=>a(IconNoSubmittedTabs,null),hint:()=>a("div",{className:__default$1.noTabs__instructions,children:["To submit a\xa0tab, click the ",a(r,{styles:{icon:"",stroke:__default$1.submitTabsStroke}})," button in the toolbar."]})})),MyTabsPanel=e(t=>{let{user:e,id:s}=t,{isLoggedIn:n}=e,{myTabs:l,dispatch:r}=o("myTabs","experiments"),c=l?.tabs?.length>0,u=l?.loading,p=l?.tabs?.length===0||!n;function m(){r("curiosity/conversion",{event:"Opened tab from My Tabs"})}return i(()=>{let t=l?.tabs?.length>0?l?.tabs?.reduce((t,a)=>t+a.totalFavorites,0):0,a=t>0,e=a?(t/l?.tabs?.length).toFixed(1):"0";(a||!n)&&r("curiosity/conversion",{event:"Opened My Tabs panel","Tabs count":l?.tabs?.length||0,"Average favorites per tab":e})},[l?.tabs,n]),a(b,{title:"My Tabs",id:s,children:[u&&a(d,{id:"faq-loader",fill:"#777",width:35,height:35,style:{margin:"30px auto"}}),c&&a("div",{className:"Panel-inner"},a("div",{className:__default$1.tabs,children:l?.tabs?.map(t=>a(TabsCard,{isActive:!1,numerated:!0,revisionData:t,key:t.songId,onClick:m}))})),p&&a(NoTabs,null)]})});export{MyTabsPanel as default};
