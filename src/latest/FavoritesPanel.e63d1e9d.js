import{g as e,A as t,y as s,v as i,m as a,i as o,_ as n,a as r}from"./preact.f8a34c73.js";import{J as l,T as c,C as d,a1 as m,L as u,u as v,bl as f,bd as p,aa as h,a9 as L,aH as g,bB as C,bC as w,bD as k,bi as b,bj as y,bg as N,bm as x,bn as A,bs as M,bq as Z,br as S,bh as I}from"./index.3637aaf7.js";import{E as P,I as F,k as O,$ as B,A as R,_ as j,S as D,K as T}from"./SongsPanel.module.a5a30510.js";import{t as z}from"./DifficultyIndicator.c7b5f0f9.js";import{r as E}from"./SearchBox.b79cb4b8.js";import{e as $}from"./Stub.d042d44f.js";import{w as K}from"./Panel.4e04b14d.js";import"./ShowroomPlaceholder.module.29a59946.js";class q extends r{render(){const{width:e,height:t,className:s}=this.props;return i("svg",{className:s,height:t,width:e,viewBox:"0 0 16 4"},i("circle",{cx:"2",cy:"2",r:"2"}),i("circle",{cx:"8",cy:"2",r:"2"}),i("circle",{cx:"14",cy:"2",r:"2"}))}}let W;const G=e((e=>{let{song:a,addOptions:o,removeCaption:n,onAdd:r,onClose:l,onRemove:c}=e;const d={current:[]},m=t((e=>{e.preventDefault(),e.stopPropagation()}),[]),u=t((e=>{e.preventDefault(),e.stopPropagation(),void 0===W||W>=d.current.length-1?W=0:W+=1,d.current&&d.current[W].focus()}),[]),v=t((e=>{e.preventDefault(),e.stopPropagation(),void 0===W||W<=0?W=d.current.length-1:W-=1,d.current&&d.current[W].focus()}),[]);return s((()=>{const e={up:v,down:u,tab:l,esc:l,space:m};return window.hotKeysManager.bind(e,{onPanelPopup:!0}),W=void 0,()=>{window.hotKeysManager.unbind(e,{onPanelPopup:!0}),W=void 0}}),[o]),i("div",{className:"Clr13o","data-dropdown":""},o&&0!==o.length&&i("div",{className:"Clr2j2"},i("p",{},"Add to playlist:"),o.map((e=>e.active?i("button",{ref:e=>{d.current.push(e)},onClick:()=>{r(a,e.id)}},e.name):i("button",{onClick:m,className:"Clr2ma",tabIndex:-1},e.name)))),i("button",{ref:e=>{d.current.push(e)},className:"Clr1ed",onClick:c,"data-feature":"remove"},n))})),V=e((e=>{let{song:s,addOptions:a,dropdownShown:o,optionsAlwaysOn:n,removeCaption:r,onAdd:l,onOptionsClick:c,onRemove:d}=e;const m=o||n?"w81kv w82q9":"w81kv",u=t((e=>{e.preventDefault(),e.stopPropagation(),o?c():c(s.songId)}),[s,o]),v=t((()=>c()),[]);return i("div",{className:m,onClick:u},i("button",{className:"w8k4",title:"Options"},i(q,{width:16,height:4})),o&&i(G,{addOptions:a,song:s,onRemove:d,removeCaption:r,onAdd:l,onClose:v}))})),Y={animationStyles:{exitActive:"Bp51ux",enterActive:"Bp53",enter:"Bp51c",exit:"Bp51zj"}},_=e((e=>{let{song:s,isActive:o,addOptions:n,dropdownShown:r,optionsAlwaysOn:v,isPhone:f,inSetlist:p,onAdd:h,onClick:L,onOptionsClick:g,onRemove:C,difficultyNA:w}=e;void 0===w&&(w=!1);const[k,b]=a(!1);let y=P.favorite;o&&(y+=" "+P.active),k&&(y+=" "+P.removal);const N=s.tracks&&s.tracks[s.defaultTrack]&&s.difficulty,x=l(s,s.defaultTrack),A=t((e=>{e.preventDefault(),e.stopPropagation(),b(!k)}),[k]),M=t((e=>{e.preventDefault(),e.stopPropagation(),b(!1),C()}),[C]);return i(u,{className:y,"data-song":"",to:x,onClick:L},f&&i("div",{role:"button",className:P.fav,onClick:A,title:"Remove from favorites"},i(m,{width:17,height:17,state:"fill",title:"Remove from favorites",styles:P})),i("div",{className:P.wrapper},i("div",{className:P.name,"data-field":"name"},s.title),i("div",{className:P.artist,"data-field":"artist"},s.artist)),!f&&i(V,{song:s,addOptions:n,dropdownShown:r,optionsAlwaysOn:v,removeCaption:p?"Remove from this playlist":"Remove from favorites",onAdd:h,onOptionsClick:g,onRemove:C}),i(z,{difficultyNA:w,difficultyString:N}),f&&i(c,{component:"div",className:P.controls},k&&i(d,Y,i("div",{className:P.buttons},i("button",{className:P.cancel,onClick:A,"data-action":"cancel"},"Cancel"),i("button",{className:P.remove,onClick:M,"data-action":"remove"},"Remove")))))}));class H extends r{render(){return i("svg",{width:189,height:101,viewBox:"0 0 189 101",fill:"none"},i("rect",{x:"139",y:"60",width:"50",height:"4",rx:"1",fill:"#3A3A3A"}),i("rect",{y:"60",width:"50",height:"4",rx:"1",fill:"#3A3A3A"}),i("path",{fill:"#3A3A3A",d:"M94 78L95.1452 76.3603L94.009 75.5668L92.8669 76.3519L94 78ZM115 61L113.879 59.3438L112.698 60.1431L113.069 61.5199L115 61ZM107.5 36.5L105.631 37.2109L106.089 38.4157L107.375 38.4961L107.5 36.5ZM82 36.5L82.1217 38.4963L83.464 38.4144L83.8947 37.1405L82 36.5ZM73 61L74.9249 61.5429L75.3139 60.1637L74.1331 59.3519L73 61ZM43.899 38.8232L43.7773 36.8269L43.899 38.8232ZM43.3933 40.6454L44.5264 38.9973L43.3933 40.6454ZM94.9901 3.60352L96.8595 2.89262L94.9901 3.60352ZM93.108 3.63874L91.2134 2.99828L93.108 3.63874ZM145.072 40.6433L143.951 38.9871L145.072 40.6433ZM123.248 98.4268L122.102 100.067L123.248 98.4268ZM124.786 97.347L126.717 96.8271L124.786 97.347ZM64.2801 98.4324L65.4132 100.081L64.2801 98.4324ZM62.7511 97.3369L60.8262 96.794L62.7511 97.3369ZM65.4132 100.081L95.1331 79.6481L92.8669 76.3519L63.147 96.7843L65.4132 100.081ZM92.8548 79.6397L122.102 100.067L124.393 96.7872L95.1452 76.3603L92.8548 79.6397ZM126.717 96.8271L116.931 60.4801L113.069 61.5199L122.855 97.867L126.717 96.8271ZM116.121 62.6562L146.194 42.2995L143.951 38.9871L113.879 59.3438L116.121 62.6562ZM144.699 36.821L107.625 34.5039L107.375 38.4961L144.449 40.8132L144.699 36.821ZM109.369 35.7891L96.8595 2.89262L93.1207 4.31441L105.631 37.2109L109.369 35.7891ZM91.2134 2.99828L80.1053 35.8595L83.8947 37.1405L95.0027 4.27919L91.2134 2.99828ZM81.8783 34.5037L43.7773 36.8269L44.0207 40.8195L82.1217 38.4963L81.8783 34.5037ZM42.2603 42.2935L71.8669 62.6481L74.1331 59.3519L44.5264 38.9973L42.2603 42.2935ZM71.0751 60.4571L60.8262 96.794L64.676 97.8799L74.9249 61.5429L71.0751 60.4571ZM43.7773 36.8269C40.9293 37.0006 39.9091 40.6771 42.2603 42.2935L44.5264 38.9973C45.3101 39.5361 44.97 40.7616 44.0207 40.8195L43.7773 36.8269ZM96.8595 2.89262C95.8593 0.26248 92.1145 0.332526 91.2134 2.99828L95.0027 4.27919C94.7023 5.16779 93.4541 5.19112 93.1207 4.31441L96.8595 2.89262ZM146.194 42.2995C148.563 40.6953 147.555 36.9995 144.699 36.821L144.449 40.8132C143.497 40.7537 143.161 39.5218 143.951 38.9871L146.194 42.2995ZM122.102 100.067C124.399 101.67 127.445 99.5316 126.717 96.8271L122.855 97.867C122.612 96.9655 123.627 96.2526 124.393 96.7872L122.102 100.067ZM63.147 96.7843C63.9182 96.2542 64.9301 96.9791 64.676 97.8799L60.8262 96.794C60.0641 99.4962 63.0996 101.671 65.4132 100.081L63.147 96.7843Z"}))}}const J=e=>{let{name:t,onConfirm:a,onCancel:n,setName:r}=e;const l=o(null);s((()=>{l.current&&l.current.focus()}),[]),l.current&&l.current.focus();const c=t.length>15?2:1;return i("form",{className:"rp1zs",noValidate:!0,onClick:e=>{e.stopPropagation()}},i("textarea",{spellcheck:!1,className:"rp1zs",placeholder:"New playlist",maxlength:30,rows:c,value:t,ref:l,autoComplete:"off",onKeyDown:e=>{13===e.keyCode&&(e.preventDefault(),a()),27===e.keyCode&&(e.preventDefault(),n())},onChange:e=>{r(e.target.value)}}))};class Q extends r{render(){const{width:e,height:t,className:s}=this.props;return i("svg",{className:s,height:t,width:e,viewBox:"0 0 9 9"},i("rect",{y:"1.17",width:"1.65",height:"10",transform:"rotate(-45 0 1.17)"}),i("rect",{x:"7.07",width:"1.65",height:"10",transform:"rotate(45 7.07 0)"}))}}const U=e((e=>{let{name:t,id:s,removable:a,confirmRemove:o,active:n,shaking:r,onClick:l,onRemoveClick:c}=e,d=n?"Bxc1j Bxc11e":"Bxc1j";return d=o?"Bxc1j Bxc160":d,d=`${d} ${r?"Bxc23n":""}`,i("li",{className:d,onClick:()=>{l(s)},"data-playlist":t},i("button",{className:"Bxc11z",title:t},t),a&&i("button",{className:"Bxc2az",onClick:e=>{e.stopPropagation(),c(s)},"data-feature":"remove"},i(Q,{width:9,height:9})))})),X=()=>{const{setlists:e,dispatch:t}=v("setlists"),{activeSetId:s,createSetForm:a,removeSetId:o,markedIds:n}=e;return i("aside",{id:"playlist-menu",className:"E41oo"},i("div",{className:"E4bj"},i("ul",null,i(U,{name:"Favorites",active:!s,onClick:()=>t("setlists/select",void 0)}),i("li",{},i("button",{id:"create-playlist",className:"E422r",onClick:e=>{e.stopPropagation(),t("setlists/openCreate")}},"Create playlist")),a&&i("li",{className:"E42as"},i(J,{name:a.name,onConfirm:()=>t("setlists/confirmCreate"),onCancel:()=>t("setlists/cancelCreate"),setName:e=>t("setlists/changeName",e)})),e.setlists.map((e=>i(U,{id:e.id,name:e.name,active:e.id===s,shaking:n.includes(e.id),removable:!0,confirmRemove:o===e.id,onRemoveClick:s=>t(o===e.id?"setlists/confirmRemove":"setlists/initRemove",s),onClick:e=>t("setlists/select",e)}))))))};class ee extends r{render(){return i("svg",{height:100,width:188,viewBox:"0 0 188 100",fill:"#3A3A3A"},i("rect",{x:"53",width:"135",height:"4.1"}),i("rect",{x:"53",y:"24",width:"135",height:"4.1"}),i("rect",{x:"89",y:"48",width:"99",height:"4.1"}),i("rect",{y:"48",width:"70",height:"4.1"}),i("rect",{x:"33",y:"85",width:"70",height:"4.1",transform:"rotate(-90 33 85)"}),i("rect",{x:"53",y:"72",width:"135",height:"4.1"}),i("rect",{y:"96",width:"188",height:"4.1"}))}}const te=e((e=>{let{route:s,query:r,user:l,device:c,isSmallScreen:d,id:m}=e;const{favorites:u,setlists:P,meta:z,dispatch:q}=v("favorites","setlists","meta"),W=o(),G=o();F(W,G,"FavoritesPanel");const{hasPlus:V,isLoggedIn:Y}=l,{isDesktop:J,isPhone:Q,isTablet:U}=c,{pattern:te,loading:se}=u,{activeSetId:ie}=P,ae=J&&!V,[oe]=a("none"),[ne,re]=a(void 0),[le,ce]=a(null),de=u.filters.instrument,me=()=>{x(A),q("favorites/filter/reset")},ue=u.filters.difficulty,ve=u.filters.tunings[de]||f;let fe=(pe=p(z))&&pe.isDrums?h:pe&&pe.isBassGuitar?L:g;var pe;de!==A&&(fe=(e=>{switch(e){case S:return L;case Z:return h;case M:return g;default:return()=>!1}})(de));const he=(e,t,s,i)=>fe(t.instrumentId)&&(-1===e||t.views>i[e].views)?s:e,Le=n((()=>((e,t)=>e&&e.map((e=>{const s=e.tracks;if(s){const i=s.reduce(t,-1);return-1!==i?Object.assign({},e,{defaultTrack:i}):e}return e})))(ie?P.setlists.find((e=>e.id===ie)).songs:u.favorites,he)),[u.favorites,ie,P.setlists,fe]),ge=n((()=>function(e,t){if(t&&""!==t){const s=t.toLowerCase().trim().split(" ").filter((e=>e));return e.filter((e=>{const t=e.title.toLowerCase(),i=e.artist.toLowerCase();return s.every((e=>-1!==t.indexOf(e)||-1!==i.indexOf(e)))}))}return e}(Le,te)),[Le,te]),Ce=I(de),we=n((()=>{const e=Ce?ge:C(ge,oe,ue),t=w(e,de);return k(t,ve)}),[ge,oe,ue,de,ve]),ke=!Q&&P.setlists&&P.setlists.length>0,be=u.favorites&&u.favorites.length>0,ye=Le&&Le.length>0,Ne=we&&we.length>0,xe=0===u.pattern.length?{}:{pattern:u.pattern},Ae=b.map((e=>y("/a/wa/favorites",e,xe))),Me={tuningFilter:ve,instrumentFilter:de,difficultyFilter:ue,setTuningFilter:e=>q("favorites/filter/tuning",{instrument:de,tuning:e}),setInstrumentFilter:e=>{x(e),q("favorites/filter/instrument",e)},setDifficultyFilter:e=>q("favorites/filter/difficulty",e),difficultyFilterNA:Ce,isSmallScreen:d,spacerSize:Q?"big":"small",instrumentSEOLinks:Ae,activeFilter:le,onFilterClick:e=>{ce(e===le?null:e),re(void 0)}},Ze=t((e=>{q("favorites/filter",e),N(e)}),[]),Se=t((e=>{e.preventDefault(),q("setlists/select",void 0)}),[]),Ie=e=>{re(e),ce(null),q("setlists/panelClick")},Pe=t((()=>{re(void 0),ce(null),q("setlists/panelClick")}),[]),Fe=t((()=>{me(),Ze("")}),[]),Oe=ie?`Filter ${P.setlists.find((e=>e.id===ie)).name}`:"Filter favorites";return i(K,{title:"Favorites",id:m,onClick:Pe},(be||ke)&&i(O,{noObserver:!0},i(E,{inputRef:G,value:te,isDesktop:J,loading:se,placeholder:Oe,setValue:Ze})),(be||ke)&&i("div",{className:"Cw8192"},!Q&&i(X,null),ye&&Ne&&i("div",{className:Q?"Cw8xl":"Cw82yi"},i(O,{},i(B,Me),Y&&ae&&i(R,{page:s.page,instrumentFilter:de})),i("div",{ref:W,className:"Cw84r","data-list":"favorites"},we.map((e=>{const t=[];P.setlists.forEach((s=>{const i=!s.songs.find((t=>t.songId===e.songId));t.push({name:s.name,id:s.id,active:i})}));const s=ie?()=>q("setlists/removeSong",{setlistId:ie,songId:e.songId}):()=>q("favorites/delete",e.songId);return i(_,{key:`${ie}${e.songId}`,isPhone:Q,song:e,addOptions:t,dropdownShown:ne===e.songId,isActive:z&&z.songId===e.songId,optionsAlwaysOn:U,inSetlist:!!ie,onAdd:(e,t)=>q("setlists/addSong",{song:e,setlistId:t}),onClick:()=>{q("setlists/panelClick")},onOptionsClick:Ie,onRemove:s,difficultyNA:Ce})})))),ye&&!Ne&&i("div",{className:"Cw82ur"},i("div",{className:j.stubWrapper},i(B,Me),i($,{id:"notfound",header:"No tabs found",headerColor:"red",icon:()=>i(D,null)},T({usesFilters:!1,numResults:ge.length,resetFilter:ge.length>0?me:Fe})))),!ye&&i("div",{className:"Cw82ur"},i("div",{className:j.stubWrapper},ie?i($,{id:"notfound",header:"Playlist is empty",icon:()=>i(ee,null)},i("div",{className:"Cw81er"},i("a",{onClick:Se,tabIndex:0},"Go to Favorites")," to fill it with songs")):i($,{id:"nofavorites",header:"You have no favorites",icon:()=>i(H,null),hint:()=>"To create a favorite, open a song and click on the star."})))),!ke&&!be&&i($,{id:"nofavorites",header:u.error?"Favorites are temporary unavailable":"You have no favorites",icon:()=>i(H,null),hint:()=>u.error?"We will return them back as soon as possible":"To create a favorite, open a song and click on the star."}))}));export{te as default};
//# sourceMappingURL=FavoritesPanel.e63d1e9d.js.map
