import{d as t,a as e}from"./preact.bf58aca5.js";import{w as a,cb as s,cu as n,k as i,Q as c,f as r,L as l,T as o}from"./index.e8b15340.js";import{A as u}from"./ActionButton.45f3bd1f.js";import{S as p,C as h}from"./ContinueLink.9b697552.js";import{P as m}from"./Panel.98ba2c65.js";import{_ as d}from"./GenericPanel.module.67ac8ae5.js";var de=null,es=null,fr=null,it=null,ja=null,ko=null,pt=null,ru=null,zh=null,locales=[de,es,fr,it,ja,ko,pt,ru,zh];let PAYPAL_HREF="https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=F6Q2JNH34XCCG",APP_STORE_HREF="https://apps.apple.com/account/subscriptions";class CancelPlusPanel extends t{constructor(t){super(t),this.state={error:null,processing:!1,next:!1}}cancelSubscription=async t=>{t.preventDefault();try{this.setState({processing:!0,error:null});let e=this.props.user.profile;e?.subscription?.type!==s.LEGACY_PAYPAL&&(e=await n()),this.props.dispatch("user/cancelPlus",e),this.setState({processing:!1,error:null,next:!0})}catch(a){this.props.dispatch("curiosity/error",{error:"Subscription",message:a.message}),this.setState({processing:!1,error:a})}};cancelThirdParty=()=>{this.setState({next:!0})};render(){let t;let{gettext:a}=i(locales),n=this.props.user.profile.subscription,b=n?.type===s.LEGACY_PAYPAL,P=n?.type===s.APP_STORE,f=!b&&!P,{processing:y}=this.state,C=a("I'm sure, cancel my subscription");return t=this.state.next?e(p,{key:"done",className:d.section,"data-section":"done"},e("h4",{className:d.title},b&&a("Your Sonsgterr Plus subscription will remain active until you cancel it on PayPal."),P&&a("Your Sonsgterr Plus subscription will remain active until you cancel it on the App Store."),f&&a("Canceled, Songsterr plus will be active till the end of the last paid month.")),e(h,{id:"doneCancelation",href:"/a/wa/account"},a("Click here to continue"))):e(p,{key:"cancel",className:d.section,"data-section":"form"},e("h4",{className:d.title},a("Are you sure you want to cancel your subscription?")),e("form",{noValidate:!0,onSubmit:this.cancelSubscription},e(c,{error:this.state.error}),e("div",{className:d.actions},b&&e("a",{target:"_blank",onClick:this.cancelThirdParty,href:"https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=F6Q2JNH34XCCG",className:r.buttonGreen,"data-action":"cancelPayPal"},C),P&&e("a",{target:"_blank",onClick:this.cancelThirdParty,href:"https://apps.apple.com/account/subscriptions",className:r.buttonGreen,"data-action":"cancelAppStore"},C),f&&e(u,{id:"confirmCancellation",title:C,processing:y}),e(l,{to:"/a/wa/account",className:r.buttonLink,"data-action":"cancel"},a("No, keep it"))))),e(m,{title:a("Cancel Subscription"),id:this.props.id},e(o,null,t))}}var CancelPlusPanel$1=a(CancelPlusPanel);export{CancelPlusPanel$1 as default};