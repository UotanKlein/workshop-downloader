"use strict";(self.webpackChunkworkshop_downloader=self.webpackChunkworkshop_downloader||[]).push([[83],{83:(e,t,n)=>{n.d(t,{A:()=>ft});var r={};function o(e,t){return function(){return e.apply(t,arguments)}}n.r(r),n.d(r,{hasBrowserEnv:()=>ae,hasStandardBrowserEnv:()=>ce,hasStandardBrowserWebWorkerEnv:()=>le,origin:()=>fe});const{toString:s}=Object.prototype,{getPrototypeOf:i}=Object,a=(c=Object.create(null),e=>{const t=s.call(e);return c[t]||(c[t]=t.slice(8,-1).toLowerCase())});var c;const u=e=>(e=e.toLowerCase(),t=>a(t)===e),l=e=>t=>typeof t===e,{isArray:f}=Array,d=l("undefined"),h=u("ArrayBuffer"),p=l("string"),m=l("function"),y=l("number"),b=e=>null!==e&&"object"==typeof e,g=e=>{if("object"!==a(e))return!1;const t=i(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},w=u("Date"),E=u("File"),O=u("Blob"),R=u("FileList"),S=u("URLSearchParams"),[T,A,v,C]=["ReadableStream","Request","Response","Headers"].map(u);function x(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),f(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function N(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const j="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,P=e=>!d(e)&&e!==j,_=(L="undefined"!=typeof Uint8Array&&i(Uint8Array),e=>L&&e instanceof L);var L;const U=u("HTMLFormElement"),F=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),B=u("RegExp"),D=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};x(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)},k="abcdefghijklmnopqrstuvwxyz",q="0123456789",I={DIGIT:q,ALPHA:k,ALPHA_DIGIT:k+k.toUpperCase()+q},z=u("AsyncFunction"),M={isArray:f,isArrayBuffer:h,isBuffer:function(e){return null!==e&&!d(e)&&null!==e.constructor&&!d(e.constructor)&&m(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||m(e.append)&&("formdata"===(t=a(e))||"object"===t&&m(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&h(e.buffer),t},isString:p,isNumber:y,isBoolean:e=>!0===e||!1===e,isObject:b,isPlainObject:g,isReadableStream:T,isRequest:A,isResponse:v,isHeaders:C,isUndefined:d,isDate:w,isFile:E,isBlob:O,isRegExp:B,isFunction:m,isStream:e=>b(e)&&m(e.pipe),isURLSearchParams:S,isTypedArray:_,isFileList:R,forEach:x,merge:function e(){const{caseless:t}=P(this)&&this||{},n={},r=(r,o)=>{const s=t&&N(n,o)||o;g(n[s])&&g(r)?n[s]=e(n[s],r):g(r)?n[s]=e({},r):f(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&x(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(x(t,((t,r)=>{n&&m(t)?e[r]=o(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,s,a;const c={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)a=o[s],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&i(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:a,kindOfTest:u,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(f(e))return e;let t=e.length;if(!y(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:U,hasOwnProperty:F,hasOwnProp:F,reduceDescriptors:D,freezeMethods:e=>{D(e,((t,n)=>{if(m(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];m(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return f(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:N,global:j,isContextDefined:P,ALPHABET:I,generateString:(e=16,t=I.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&m(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(b(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=f(e)?[]:{};return x(e,((e,t)=>{const s=n(e,r+1);!d(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:z,isThenable:e=>e&&(b(e)||m(e))&&m(e.then)&&m(e.catch)};function H(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}M.inherits(H,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:M.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const J=H.prototype,W={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{W[e]={value:e}})),Object.defineProperties(H,W),Object.defineProperty(J,"isAxiosError",{value:!0}),H.from=(e,t,n,r,o,s)=>{const i=Object.create(J);return M.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),H.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const K=H;function V(e){return M.isPlainObject(e)||M.isArray(e)}function $(e){return M.endsWith(e,"[]")?e.slice(0,-2):e}function G(e,t,n){return e?e.concat(t).map((function(e,t){return e=$(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const X=M.toFlatObject(M,{},null,(function(e){return/^is[A-Z]/.test(e)})),Q=function(e,t,n){if(!M.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=M.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!M.isUndefined(t[e])}))).metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&M.isSpecCompliantForm(t);if(!M.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(M.isDate(e))return e.toISOString();if(!a&&M.isBlob(e))throw new K("Blob is not supported. Use a Buffer instead.");return M.isArrayBuffer(e)||M.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(M.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(M.isArray(e)&&function(e){return M.isArray(e)&&!e.some(V)}(e)||(M.isFileList(e)||M.endsWith(n,"[]"))&&(a=M.toArray(e)))return n=$(n),a.forEach((function(e,r){!M.isUndefined(e)&&null!==e&&t.append(!0===i?G([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!V(e)||(t.append(G(o,n,s),c(e)),!1)}const l=[],f=Object.assign(X,{defaultVisitor:u,convertValue:c,isVisitable:V});if(!M.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!M.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),M.forEach(n,(function(n,s){!0===(!(M.isUndefined(n)||null===n)&&o.call(t,n,M.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),l.pop()}}(e),t};function Z(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Y(e,t){this._pairs=[],e&&Q(e,this,t)}const ee=Y.prototype;ee.append=function(e,t){this._pairs.push([e,t])},ee.toString=function(e){const t=e?function(t){return e.call(this,t,Z)}:Z;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const te=Y;function ne(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function re(e,t,n){if(!t)return e;const r=n&&n.encode||ne,o=n&&n.serialize;let s;if(s=o?o(t,n):M.isURLSearchParams(t)?t.toString():new te(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}const oe=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){M.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},se={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ie={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:te,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},ae="undefined"!=typeof window&&"undefined"!=typeof document,ce=(ue="undefined"!=typeof navigator&&navigator.product,ae&&["ReactNative","NativeScript","NS"].indexOf(ue)<0);var ue;const le="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,fe=ae&&window.location.href||"http://localhost",de={...r,...ie},he=function(e){function t(e,n,r,o){let s=e[o++];if("__proto__"===s)return!0;const i=Number.isFinite(+s),a=o>=e.length;return s=!s&&M.isArray(r)?r.length:s,a?(M.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i):(r[s]&&M.isObject(r[s])||(r[s]=[]),t(e,n,r[s],o)&&M.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i)}if(M.isFormData(e)&&M.isFunction(e.entries)){const n={};return M.forEachEntry(e,((e,r)=>{t(function(e){return M.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null},pe={transitional:se,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=M.isObject(e);if(o&&M.isHTMLForm(e)&&(e=new FormData(e)),M.isFormData(e))return r?JSON.stringify(he(e)):e;if(M.isArrayBuffer(e)||M.isBuffer(e)||M.isStream(e)||M.isFile(e)||M.isBlob(e)||M.isReadableStream(e))return e;if(M.isArrayBufferView(e))return e.buffer;if(M.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return Q(e,new de.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return de.isNode&&M.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=M.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Q(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(M.isString(e))try{return(0,JSON.parse)(e),M.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||pe.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(M.isResponse(e)||M.isReadableStream(e))return e;if(e&&M.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw K.from(e,K.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:de.classes.FormData,Blob:de.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};M.forEach(["delete","get","head","post","put","patch"],(e=>{pe.headers[e]={}}));const me=pe,ye=M.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),be=Symbol("internals");function ge(e){return e&&String(e).trim().toLowerCase()}function we(e){return!1===e||null==e?e:M.isArray(e)?e.map(we):String(e)}function Ee(e,t,n,r,o){return M.isFunction(r)?r.call(this,t,n):(o&&(t=n),M.isString(t)?M.isString(r)?-1!==t.indexOf(r):M.isRegExp(r)?r.test(t):void 0:void 0)}class Oe{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=ge(t);if(!o)throw new Error("header name must be a non-empty string");const s=M.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=we(e))}const s=(e,t)=>M.forEach(e,((e,n)=>o(e,n,t)));if(M.isPlainObject(e)||e instanceof this.constructor)s(e,t);else if(M.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&ye[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if(M.isHeaders(e))for(const[t,r]of e.entries())o(r,t,n);else null!=e&&o(t,e,n);return this}get(e,t){if(e=ge(e)){const n=M.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(M.isFunction(t))return t.call(this,e,n);if(M.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ge(e)){const n=M.findKey(this,e);return!(!n||void 0===this[n]||t&&!Ee(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=ge(e)){const o=M.findKey(n,e);!o||t&&!Ee(0,n[o],o,t)||(delete n[o],r=!0)}}return M.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!Ee(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return M.forEach(this,((r,o)=>{const s=M.findKey(n,o);if(s)return t[s]=we(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=we(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return M.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&M.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[be]=this[be]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ge(e);t[r]||(function(e,t){const n=M.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return M.isArray(e)?e.forEach(r):r(e),this}}Oe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),M.reduceDescriptors(Oe.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),M.freezeMethods(Oe);const Re=Oe;function Se(e,t){const n=this||me,r=t||n,o=Re.from(r.headers);let s=r.data;return M.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function Te(e){return!(!e||!e.__CANCEL__)}function Ae(e,t,n){K.call(this,null==e?"canceled":e,K.ERR_CANCELED,t,n),this.name="CanceledError"}M.inherits(Ae,K,{__CANCEL__:!0});const ve=Ae;function Ce(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new K("Request failed with status code "+n.status,[K.ERR_BAD_REQUEST,K.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}const xe=(e,t,n=3)=>{let r=0;const o=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[i];o||(o=c),n[s]=a,r[s]=c;let l=i,f=0;for(;l!==s;)f+=n[l++],l%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}(50,250);return function(e,t){let n=0;const r=1e3/t;let o=null;return function(){const t=!0===this,s=Date.now();if(t||s-n>r)return o&&(clearTimeout(o),o=null),n=s,e.apply(null,arguments);o||(o=setTimeout((()=>(o=null,n=Date.now(),e.apply(null,arguments))),r-(s-n)))}}((n=>{const s=n.loaded,i=n.lengthComputable?n.total:void 0,a=s-r,c=o(a);r=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:n,lengthComputable:null!=i};u[t?"download":"upload"]=!0,e(u)}),n)},Ne=de.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=M.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0},je=de.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];M.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),M.isString(r)&&i.push("path="+r),M.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Pe(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const _e=e=>e instanceof Re?{...e}:e;function Le(e,t){t=t||{};const n={};function r(e,t,n){return M.isPlainObject(e)&&M.isPlainObject(t)?M.merge.call({caseless:n},e,t):M.isPlainObject(t)?M.merge({},t):M.isArray(t)?t.slice():t}function o(e,t,n){return M.isUndefined(t)?M.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!M.isUndefined(t))return r(void 0,t)}function i(e,t){return M.isUndefined(t)?M.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(_e(e),_e(t),!0)};return M.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);M.isUndefined(i)&&s!==a||(n[r]=i)})),n}const Ue=e=>{const t=Le({},e);let n,{data:r,withXSRFToken:o,xsrfHeaderName:s,xsrfCookieName:i,headers:a,auth:c}=t;if(t.headers=a=Re.from(a),t.url=re(Pe(t.baseURL,t.url),e.params,e.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),M.isFormData(r))if(de.hasStandardBrowserEnv||de.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(!1!==(n=a.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];a.setContentType([e||"multipart/form-data",...t].join("; "))}if(de.hasStandardBrowserEnv&&(o&&M.isFunction(o)&&(o=o(t)),o||!1!==o&&Ne(t.url))){const e=s&&i&&je.read(i);e&&a.set(s,e)}return t},Fe="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=Ue(e);let o=r.data;const s=Re.from(r.headers).normalize();let i,{responseType:a}=r;function c(){r.cancelToken&&r.cancelToken.unsubscribe(i),r.signal&&r.signal.removeEventListener("abort",i)}let u=new XMLHttpRequest;function l(){if(!u)return;const r=Re.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders());Ce((function(e){t(e),c()}),(function(e){n(e),c()}),{data:a&&"text"!==a&&"json"!==a?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:r,config:e,request:u}),u=null}u.open(r.method.toUpperCase(),r.url,!0),u.timeout=r.timeout,"onloadend"in u?u.onloadend=l:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(l)},u.onabort=function(){u&&(n(new K("Request aborted",K.ECONNABORTED,r,u)),u=null)},u.onerror=function(){n(new K("Network Error",K.ERR_NETWORK,r,u)),u=null},u.ontimeout=function(){let e=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const t=r.transitional||se;r.timeoutErrorMessage&&(e=r.timeoutErrorMessage),n(new K(e,t.clarifyTimeoutError?K.ETIMEDOUT:K.ECONNABORTED,r,u)),u=null},void 0===o&&s.setContentType(null),"setRequestHeader"in u&&M.forEach(s.toJSON(),(function(e,t){u.setRequestHeader(t,e)})),M.isUndefined(r.withCredentials)||(u.withCredentials=!!r.withCredentials),a&&"json"!==a&&(u.responseType=r.responseType),"function"==typeof r.onDownloadProgress&&u.addEventListener("progress",xe(r.onDownloadProgress,!0)),"function"==typeof r.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",xe(r.onUploadProgress)),(r.cancelToken||r.signal)&&(i=t=>{u&&(n(!t||t.type?new ve(null,e,u):t),u.abort(),u=null)},r.cancelToken&&r.cancelToken.subscribe(i),r.signal&&(r.signal.aborted?i():r.signal.addEventListener("abort",i)));const f=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);f&&-1===de.protocols.indexOf(f)?n(new K("Unsupported protocol "+f+":",K.ERR_BAD_REQUEST,e)):u.send(o||null)}))},Be=(e,t)=>{let n,r=new AbortController;const o=function(e){if(!n){n=!0,i();const t=e instanceof Error?e:this.reason;r.abort(t instanceof K?t:new ve(t instanceof Error?t.message:t))}};let s=t&&setTimeout((()=>{o(new K(`timeout ${t} of ms exceeded`,K.ETIMEDOUT))}),t);const i=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach((e=>{e&&(e.removeEventListener?e.removeEventListener("abort",o):e.unsubscribe(o))})),e=null)};e.forEach((e=>e&&e.addEventListener&&e.addEventListener("abort",o)));const{signal:a}=r;return a.unsubscribe=i,[a,()=>{s&&clearTimeout(s),s=null}]},De=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,o=0;for(;o<n;)r=o+t,yield e.slice(o,r),o=r},ke=(e,t,n,r,o)=>{const s=async function*(e,t,n){for await(const r of e)yield*De(ArrayBuffer.isView(r)?r:await n(String(r)),t)}(e,t,o);let i=0;return new ReadableStream({type:"bytes",async pull(e){const{done:t,value:o}=await s.next();if(t)return e.close(),void r();let a=o.byteLength;n&&n(i+=a),e.enqueue(new Uint8Array(o))},cancel:e=>(r(e),s.return())},{highWaterMark:2})},qe=(e,t)=>{const n=null!=e;return r=>setTimeout((()=>t({lengthComputable:n,total:e,loaded:r})))},Ie="function"==typeof fetch&&"function"==typeof Request&&"function"==typeof Response,ze=Ie&&"function"==typeof ReadableStream,Me=Ie&&("function"==typeof TextEncoder?(He=new TextEncoder,e=>He.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var He;const Je=ze&&(()=>{let e=!1;const t=new Request(de.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),We=ze&&!!(()=>{try{return M.isReadableStream(new Response("").body)}catch(e){}})(),Ke={stream:We&&(e=>e.body)};var Ve;Ie&&(Ve=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!Ke[e]&&(Ke[e]=M.isFunction(Ve[e])?t=>t[e]():(t,n)=>{throw new K(`Response type '${e}' is not supported`,K.ERR_NOT_SUPPORT,n)})})));const $e={http:null,xhr:Fe,fetch:Ie&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:s,timeout:i,onDownloadProgress:a,onUploadProgress:c,responseType:u,headers:l,withCredentials:f="same-origin",fetchOptions:d}=Ue(e);u=u?(u+"").toLowerCase():"text";let h,p,[m,y]=o||s||i?Be([o,s],i):[];const b=()=>{!h&&setTimeout((()=>{m&&m.unsubscribe()})),h=!0};let g;try{if(c&&Je&&"get"!==n&&"head"!==n&&0!==(g=await(async(e,t)=>{const n=M.toFiniteNumber(e.getContentLength());return null==n?(async e=>null==e?0:M.isBlob(e)?e.size:M.isSpecCompliantForm(e)?(await new Request(e).arrayBuffer()).byteLength:M.isArrayBufferView(e)?e.byteLength:(M.isURLSearchParams(e)&&(e+=""),M.isString(e)?(await Me(e)).byteLength:void 0))(t):n})(l,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});M.isFormData(r)&&(e=n.headers.get("content-type"))&&l.setContentType(e),n.body&&(r=ke(n.body,65536,qe(g,xe(c)),null,Me))}M.isString(f)||(f=f?"cors":"omit"),p=new Request(t,{...d,signal:m,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",withCredentials:f});let o=await fetch(p);const s=We&&("stream"===u||"response"===u);if(We&&(a||s)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=o[t]}));const t=M.toFiniteNumber(o.headers.get("content-length"));o=new Response(ke(o.body,65536,a&&qe(t,xe(a,!0)),s&&b,Me),e)}u=u||"text";let i=await Ke[M.findKey(Ke,u)||"text"](o,e);return!s&&b(),y&&y(),await new Promise(((t,n)=>{Ce(t,n,{data:i,headers:Re.from(o.headers),status:o.status,statusText:o.statusText,config:e,request:p})}))}catch(t){if(b(),t&&"TypeError"===t.name&&/fetch/i.test(t.message))throw Object.assign(new K("Network Error",K.ERR_NETWORK,e,p),{cause:t.cause||t});throw K.from(t,t&&t.code,e,p)}})};M.forEach($e,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));const Ge=e=>`- ${e}`,Xe=e=>M.isFunction(e)||null===e||!1===e,Qe=e=>{e=M.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!Xe(n)&&(r=$e[(t=String(n)).toLowerCase()],void 0===r))throw new K(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(Ge).join("\n"):" "+Ge(e[0]):"as no adapter specified";throw new K("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function Ze(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ve(null,e)}function Ye(e){return Ze(e),e.headers=Re.from(e.headers),e.data=Se.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Qe(e.adapter||me.adapter)(e).then((function(t){return Ze(e),t.data=Se.call(e,e.transformResponse,t),t.headers=Re.from(t.headers),t}),(function(t){return Te(t)||(Ze(e),t&&t.response&&(t.response.data=Se.call(e,e.transformResponse,t.response),t.response.headers=Re.from(t.response.headers))),Promise.reject(t)}))}const et={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{et[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const tt={};et.transitional=function(e,t,n){function r(e,t){return"[Axios v1.7.2] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new K(r(o," has been removed"+(t?" in "+t:"")),K.ERR_DEPRECATED);return t&&!tt[o]&&(tt[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};const nt={assertOptions:function(e,t,n){if("object"!=typeof e)throw new K("options must be an object",K.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new K("option "+s+" must be "+n,K.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new K("Unknown option "+s,K.ERR_BAD_OPTION)}},validators:et},rt=nt.validators;class ot{constructor(e){this.defaults=e,this.interceptors={request:new oe,response:new oe}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t;Error.captureStackTrace?Error.captureStackTrace(t={}):t=new Error;const n=t.stack?t.stack.replace(/^.+\n/,""):"";try{e.stack?n&&!String(e.stack).endsWith(n.replace(/^.+\n.+\n/,""))&&(e.stack+="\n"+n):e.stack=n}catch(e){}}throw e}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Le(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&nt.assertOptions(n,{silentJSONParsing:rt.transitional(rt.boolean),forcedJSONParsing:rt.transitional(rt.boolean),clarifyTimeoutError:rt.transitional(rt.boolean)},!1),null!=r&&(M.isFunction(r)?t.paramsSerializer={serialize:r}:nt.assertOptions(r,{encode:rt.function,serialize:rt.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&M.merge(o.common,o[t.method]);o&&M.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Re.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[Ye.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);f<l;)u=u.then(e[f++],e[f++]);return u}l=i.length;let d=t;for(f=0;f<l;){const e=i[f++],t=i[f++];try{d=e(d)}catch(e){t.call(this,e);break}}try{u=Ye.call(this,d)}catch(e){return Promise.reject(e)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(e){return re(Pe((e=Le(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}M.forEach(["delete","get","head","options"],(function(e){ot.prototype[e]=function(t,n){return this.request(Le(n||{},{method:e,url:t,data:(n||{}).data}))}})),M.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Le(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}ot.prototype[e]=t(),ot.prototype[e+"Form"]=t(!0)}));const st=ot;class it{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new ve(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new it((function(t){e=t})),cancel:e}}}const at=it,ct={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ct).forEach((([e,t])=>{ct[t]=e}));const ut=ct,lt=function e(t){const n=new st(t),r=o(st.prototype.request,n);return M.extend(r,st.prototype,n,{allOwnKeys:!0}),M.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Le(t,n))},r}(me);lt.Axios=st,lt.CanceledError=ve,lt.CancelToken=at,lt.isCancel=Te,lt.VERSION="1.7.2",lt.toFormData=Q,lt.AxiosError=K,lt.Cancel=lt.CanceledError,lt.all=function(e){return Promise.all(e)},lt.spread=function(e){return function(t){return e.apply(null,t)}},lt.isAxiosError=function(e){return M.isObject(e)&&!0===e.isAxiosError},lt.mergeConfig=Le,lt.AxiosHeaders=Re,lt.formToJSON=e=>he(M.isHTMLForm(e)?new FormData(e):e),lt.getAdapter=Qe,lt.HttpStatusCode=ut,lt.default=lt;const ft=lt}}]);