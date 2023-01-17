import{a as e}from"./preact.3d326435.js";import{j as t,L as a,A as s}from"./index.9148933a.js";import{P as o}from"./Panel.1b182ff5.js";import{s as i}from"./signature.7ef6ac6e.js";import{a as l,g as r}from"./gplay.79326319.js";import"./audio.1ae45449.js";import"./env.1ef38fce.js";let info="Cjzh0",left="Cjz16q",right="Cjz1hy",signature="Cjz13j",bottom="Cjz1v8",stores="Cjzia",__default={info:"Cjzh0",left:"Cjz16q",right:"Cjz1hy",signature:"Cjz13j",bottom:"Cjz1v8",stores:"Cjzia"};var styles=__default,de=null,es=null,fr=null,it=null,ja=null,ko=null,pt=null,ru=null,zh=null,locales=[de,es,fr,it,ja,ko,pt,ru,zh];function AboutPanel(n){let{gettext:u}=t(locales),c=(t,a)=>e(s,{source:"about",os:"ios"===t?"iOS":"Android",eventProperties:{Via:"about page","App store":"ios"===t?"App Store":"Google Play"}},a);return e(o,{title:u("About"),id:n.id},e("div",{className:styles.info},e("div",{className:styles.left},e("p",null,u("Songsterr is an "),e("strong",null,u("archive of guitar, bass and drum tabs")),u(". It is collaboratively built and maintained by your fellow music lovers. Anyone with Internet access can contribute new tabs and make changes to existing ones. Much like "),e("a",{href:"https://www.wikipedia.org/",rel:"noopener noreferrer",target:"_blank"},u("Wikipedia")),u(", contributions cannot damage Songsterr because the software allows easy reversal of mistakes and experienced editors are watching to help and ensure that edits are cumulative improvements.")),e("p",null,u("Songsterr is also an "),e("strong",null,u("online tab player")),u(" which makes learning tabs easier. It accompanies each tab with a song audio and automatically scrolls through each tab, indicating exactly which note is being played."))),e("div",{className:styles.right},e("p",null,e(a,{to:"/a/wa/plus"},u("Paid plan")),u(" unlocks advanced player features, including Print, Tempo Control, Loop and more.")),e("p",null,u("Finally, Songsterr has a "),e("strong",null,u("mobile app for\xa0"),c("ios",u("iOS"))," and ",c("ios",u("Android"))),u(" with instant access to realistic playback of 400,000 songs (800,000 tab tracks) from Songsterr.com. With the Songsterr app you no longer need to download tabs from third-party sites or upload them from your computer to your device.")),e("p",null,u("Songsterr is "),e("strong",null,u("100% legal")),u(". Support by paid users is the only thing that keeps the site alive by allowing us to pay royalties to music creators.")),e("p",null,e(a,{to:"/a/wa/help#contact-us"},u("Contact us")),u(" if you have any questions.")),e("div",{className:styles.signature},e("img",{src:i,width:182,height:53,alt:"Songsterr"})),e("div",{className:styles.bottom},e("div",{className:styles.stores},c("ios",e("img",{src:l,width:160,height:53,alt:"AppStore"})),c("android",e("img",{src:r,width:180.425532,height:53,alt:"Google Play"})))))))}export{AboutPanel as default};
