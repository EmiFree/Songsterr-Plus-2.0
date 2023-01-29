import{N as e,C as t,T as s,a as i,b as c,p as l,c as n,d as p,e as r,f as a,g as o}from"./types.3d32913a.js";let entities={"&aacute;":"\xe1","&acirc;":"\xe2","&acute;":"\xb4","&agrave;":"\xe0","&amp;":"&","&ccedil;":"\xe7","&ccirc;":"─ë","&eacute;":"\xe9","&ecirc;":"\xea","&egrave;":"\xe8","&iuml;":"\xef"};function unescape(e){return e.replace(/&.*?;/g,e=>entities[e]||e)}let LIGHT_CHORD_PATTERN=`\\[(${e}|${t})\\]`,CHORD_LINE_NOISE_REGEXP=/[^ .,'\dXx\/|:;()-]+/;function splitChords(e,t){for(let p of e.split("\n")){let e=[],r=0;for(let t of p.matchAll(LIGHT_CHORD_PATTERN,"g")){let[n,a]=t,o=p.substring(r,t.index);if(o.length){let t=!CHORD_LINE_NOISE_REGEXP.test(o);e.push({type:t?s:i,text:unescape(o)})}e.push({type:c,chord:l(a)}),r=t.index+n.length}let a=p.substring(r);if(a.length){let t=!CHORD_LINE_NOISE_REGEXP.test(a);e.push({type:t?s:i,text:unescape(a)})}e.length&&(e[e.length-1].type===c&&e.push({type:s,text:""}),t.push({type:n,line:e}))}}function splitDirectives(e,t){let s=0;for(let i of e.matchAll(/{(\w+):?([^}]*)?}/isg)){splitChords(e.substring(s,i.index),t);let[c,l,n]=i;switch(l){case"tuning":t.push({type:o,text:n.trim()});break;case"capo":t.push({type:a,text:n.trim()});break;case"section":t.push({type:r,text:n.trim()});break;case"c":case"comment":case"ci":case"comment_italic":case"gc":case"guitar_comment":t.push({type:p,text:n.trim()})}s=i.index+c.length}splitChords(e.substring(s),t)}function combineTextWithChordsIntoBlocks(e){e.forEach(e=>{if("line"===e.type&&e.line.some(e=>e.type===i)){let t=[];e.line.forEach(e=>{let s=t[t.length-1];void 0===s?t.push([e]):1===s.length?e.type===c?t.push([e]):s.push(e):t.push([e])}),e.blocks=t}})}function split(e){let t=[];e=e.replace(/{start_of_tab}.*?{end_of_tab}/isg,"").replace(/{sot}.*?{eot}/isg,"").replace(/.*&copy.*\n?/ig,"");let s=0;for(let i of e.matchAll(/{start_of_chorus}(.*){end_of_chorus}/isg))splitDirectives(e.substring(s,i.index),t),t.push({type:r,text:"Chorus"}),splitDirectives(i[1],t),s=i.index+i[0].length;return splitDirectives(e.substring(s),t),combineTextWithChordsIntoBlocks(t),t}String.prototype.matchAll||(String.prototype.matchAll=function(e){e=RegExp(e);let t=[],s=[];for(;null!==(t=e.exec(this));)s.push(t);return s});export{CHORD_LINE_NOISE_REGEXP,LIGHT_CHORD_PATTERN,split,splitChords,splitDirectives};