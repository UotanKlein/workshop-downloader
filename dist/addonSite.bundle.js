/*! For license information please see addonSite.bundle.js.LICENSE.txt */
(()=>{"use strict";var t,e,r,n,o,a={281:(t,e,r)=>{t.exports=r.p+"images/Octicons-mark-github.svg"},588:(t,e,r)=>{t.exports=r.p+"images/Space.jpg"},369:(t,e,r)=>{t.exports=r.p+"images/blackFile.png"},150:(t,e,r)=>{t.exports=r.p+"images/blueFile.png"},152:(t,e,r)=>{t.exports=r.p+"images/blueFolder.png"},953:(t,e,r)=>{t.exports=r.p+"images/cpp.jpg"},140:(t,e,r)=>{t.exports=r.p+"images/mult-kosmo.png"},727:(t,e,r)=>{t.exports=r.p+"images/pngwing.com.png"},386:(t,e,r)=>{r.a(t,(async(t,e)=>{try{r(281),r(727);var n=r(753),o=(r(152),r(369),r(150),r(953),r(588),r(140),t([n]));n=(o.then?(await o)():o)[0],e()}catch(t){e(t)}}))},753:(t,e,r)=>{r.a(t,(async(t,e)=>{try{var n=r(83);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function f(){f=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof b?e:b,i=Object.create(a.prototype),c=new A(n||[]);return o(i,"_invoke",{value:j(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var d="suspendedStart",y="suspendedYield",v="executing",m="completed",g={};function b(){}function w(){}function x(){}var k={};u(k,i,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(F([])));E&&E!==r&&n.call(E,i)&&(k=E);var S=x.prototype=b.prototype=Object.create(k);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,a,i,c){var s=h(t[o],t,a);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==p(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function j(e,r,n){var o=d;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var s=C(c,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var u=h(e,r,n);if("normal"===u.type){if(o=n.done?m:y,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function C(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,C(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=h(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function F(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(p(e)+" is not iterable")}return w.prototype=x,o(S,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:w,configurable:!0}),w.displayName=u(x,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,u(t,s,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},_(O.prototype),u(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new O(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(S),u(S,s,"Generator"),u(S,i,(function(){return this})),u(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=F,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(q),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),q(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;q(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:F(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function h(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function d(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){h(a,n,o,i,c,"next",t)}function c(t){h(a,n,o,i,c,"throw",t)}i(void 0)}))}}var o=window.location,a=o.pathname,i=o.host,c=a.split("/"),s=c[c.length-1],u="http://".concat(i,"/dataAddon/").concat(s);function y(t){return v.apply(this,arguments)}function v(){return v=d(f().mark((function t(e){var r,n,o,a;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/download-zip/".concat(e));case 2:if(!(r=t.sent).ok){t.next=17;break}return t.next=6,r.blob();case 6:n=t.sent,o=window.URL.createObjectURL(n),(a=document.createElement("a")).href=o,a.download="".concat(e,".zip"),document.body.appendChild(a),a.click(),a.remove(),window.URL.revokeObjectURL(o),t.next=18;break;case 17:alert("Failed to download zip file");case 18:case"end":return t.stop()}}),t)}))),v.apply(this,arguments)}window.onload=function(){var t=document.querySelector(".main-workspace");t.value="",t.disabled=!0;var e=document.querySelector(".go-back"),r=document.querySelector(".go-addonList");e.setAttribute("href","http://".concat(i)),r.setAttribute("href","http://".concat(i,"/addonList"))};var l=function(){var t=d(f().mark((function t(){var e,r,o,a,c,l,p,h,v;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p=function(t){var e=document.querySelector(".message");e.textContent=t,e.style.display="block",setTimeout((function(){e.style.display="none"}),3e3),console.log("A")},l=function(t){var e=document.createElement("ul");return t.children&&0!==t.children.length&&Array.isArray(t.children)&&t.children.forEach((function(t){var r=document.createElement("li"),o=document.createElement("button");o.classList.add("file-system-buttons");var a=document.createElement("span"),i=document.createElement("img");if(i.src=t.children?"../images/blueFolder.png":"../images/blueFile.png",i.style.height="16px",i.style.width="16px",a.textContent=t.name,o.appendChild(i),o.appendChild(a),r.appendChild(o),t.children&&0!==t.children.length){var s=l(t);s.style.display="none",o.addEventListener("click",(function(){s.style.display="none"===s.style.display?"block":"none"})),r.appendChild(s)}else o.addEventListener("click",function(){var e=d(f().mark((function e(r){var o,a,i,s;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.currentTarget.querySelector("span").textContent,a=document.querySelector(".left-aside-filename"),e.prev=2,e.next=5,n.A.post(u,{path:t.path});case 5:i=e.sent,s=document.querySelector(".main-workspace"),o.endsWith(".png")?(s.value="¯_(ツ)_/¯",a.textContent=o):(s.value=i.data,a.textContent=o),c=t.path,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error("Ошибка: ".concat(e.t0.message));case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}());e.appendChild(r)})),e},t.next=4,n.A.get(u);case 4:e=t.sent,r=JSON.parse(e.data.json),o=e.data.name,document.querySelector(".main-header").textContent=o,a=document.querySelector(".left-aside-file-list"),document.querySelector(".right-aside-downloader-all").addEventListener("click",d(f().mark((function t(){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(s);case 2:case"end":return t.stop()}}),t)})))),c=null,a.textContent="",a.appendChild(l(r)),h=document.querySelectorAll(".button-for-work-with-files"),v="http://".concat(i,"/changeFile/").concat(s),h.forEach((function(t){t.addEventListener("click",function(){var t=d(f().mark((function t(e){var r,o,i;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=document.querySelector(".main-workspace"),!e.target.classList.contains("change-file")){t.next=5;break}r.disabled=!1,t.next=50;break;case 5:if(!e.target.classList.contains("save-file")){t.next=19;break}return r.disabled=!0,t.prev=7,t.next=10,n.A.post(v,{path:c,data:r.value},{timeout:1e4});case 10:p("Файл успешно сохранён"),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(7),console.error("Ошибка сохранения ".concat(t.t0.message)),console.log(t.t0);case 17:t.next=50;break;case 19:if(!e.target.classList.contains("select-all")){t.next=23;break}r.select(),t.next=50;break;case 23:if(!e.target.classList.contains("copy-all")){t.next=34;break}return t.prev=24,t.next=27,navigator.clipboard.writeText(r.value);case 27:t.next=32;break;case 29:t.prev=29,t.t1=t.catch(24),console.error("Ошибка копирования: ".concat(t.t1.message));case 32:t.next=50;break;case 34:if(!e.target.classList.contains("delete-file")){t.next=50;break}return t.prev=35,t.next=38,n.A.delete(v,{data:{path:c}});case 38:return a.textContent="",t.next=41,n.A.get(u);case 41:o=t.sent,i=JSON.parse(o.data.json),a.appendChild(l(i)),t.next=50;break;case 46:t.prev=46,t.t2=t.catch(35),console.log(JSON.stringify(t.t2,null,2)),console.error("Ошибка удаления файла: ".concat(t.t2.message));case 50:case"end":return t.stop()}}),t,null,[[7,13],[24,29],[35,46]])})));return function(e){return t.apply(this,arguments)}}())}));case 20:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();await l(),e()}catch(m){e(m)}}),1)}},i={};function c(t){var e=i[t];if(void 0!==e)return e.exports;var r=i[t]={exports:{}};return a[t](r,r.exports,c),r.exports}c.m=a,t="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=t=>{t&&t.d<1&&(t.d=1,t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},c.a=(o,a,i)=>{var c;i&&((c=[]).d=-1);var s,u,l,p=new Set,f=o.exports,h=new Promise(((t,e)=>{l=e,u=t}));h[e]=f,h[t]=t=>(c&&t(c),p.forEach(t),h.catch((t=>{}))),o.exports=h,a((o=>{var a;s=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[t])return o;if(o.then){var a=[];a.d=0,o.then((t=>{i[e]=t,n(a)}),(t=>{i[r]=t,n(a)}));var i={};return i[t]=t=>t(a),i}}var c={};return c[t]=t=>{},c[e]=o,c})))(o);var i=()=>s.map((t=>{if(t[r])throw t[r];return t[e]})),u=new Promise((e=>{(a=()=>e(i)).r=0;var r=t=>t!==c&&!p.has(t)&&(p.add(t),t&&!t.d&&(a.r++,t.push(a)));s.map((e=>e[t](r)))}));return a.r?u:i()}),(t=>(t?l(h[r]=t):u(f),n(c)))),c&&c.d<0&&(c.d=0)},o=[],c.O=(t,e,r,n)=>{if(!e){var a=1/0;for(l=0;l<o.length;l++){for(var[e,r,n]=o[l],i=!0,s=0;s<e.length;s++)(!1&n||a>=n)&&Object.keys(c.O).every((t=>c.O[t](e[s])))?e.splice(s--,1):(i=!1,n<a&&(a=n));if(i){o.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}n=n||0;for(var l=o.length;l>0&&o[l-1][2]>n;l--)o[l]=o[l-1];o[l]=[e,r,n]},c.d=(t,e)=>{for(var r in e)c.o(e,r)&&!c.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},c.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),c.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.p="../",(()=>{var t={402:0};c.O.j=e=>0===t[e];var e=(e,r)=>{var n,o,[a,i,s]=r,u=0;if(a.some((e=>0!==t[e]))){for(n in i)c.o(i,n)&&(c.m[n]=i[n]);if(s)var l=s(c)}for(e&&e(r);u<a.length;u++)o=a[u],c.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return c.O(l)},r=self.webpackChunkworkshop_downloader=self.webpackChunkworkshop_downloader||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var s=c.O(void 0,[83],(()=>c(386)));s=c.O(s)})();