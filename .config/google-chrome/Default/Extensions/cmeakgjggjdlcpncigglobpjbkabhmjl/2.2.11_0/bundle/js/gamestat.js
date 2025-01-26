(()=>{"use strict";var t,e={3257:(t,e,r)=>{var n=r(1498),o=r.n(n),i=r(8795),a=r(8100);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){w(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */f=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:A(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var y="suspendedStart",d="suspendedYield",v="executing",g="completed",b={};function m(){}function w(){}function O(){}var E={};s(E,a,(function(){return this}));var _=Object.getPrototypeOf,L=_&&_(_(D([])));L&&L!==r&&n.call(L,a)&&(E=L);var j=O.prototype=m.prototype=Object.create(E);function T(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,u){var l=h(t[o],t,i);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==c(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(s).then((function(t){f.value=t,a(f)}),(function(t){return r("throw",t,a,u)}))}u(l.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function A(e,r,n){var o=y;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=x(c,n);if(u){if(u===b)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=h(e,r,n);if("normal"===l.type){if(o=n.done?g:d,l.arg===b)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=g,n.method="throw",n.arg=l.arg)}}}function x(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,x(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,b;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,b):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function D(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(c(e)+" is not iterable")}return w.prototype=O,o(j,"constructor",{value:O,configurable:!0}),o(O,"constructor",{value:w,configurable:!0}),w.displayName=s(O,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,O):(t.__proto__=O,s(t,l,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},T(k.prototype),s(k.prototype,u,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(p(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},T(j),s(j,l,"Generator"),s(j,a,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=D,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:D(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),b}},e}function s(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return p(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function h(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function y(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){h(i,n,o,a,c,"next",t)}function c(t){h(i,n,o,a,c,"throw",t)}a(void 0)}))}}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,O(n.key),n)}}function v(t,e,r){return e=b(e),function(t,e){if(e&&("object"==c(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,g()?Reflect.construct(e,r||[],b(t).constructor):e.apply(t,r))}function g(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(g=function(){return!!t})()}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function w(t,e,r){return(e=O(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function O(t){var e=function(t,e){if("object"!=c(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==c(e)?e:e+""}window.SIHID||(window.SIHID=chrome.runtime.id||"cmeakgjggjdlcpncigglobpjbkabhmjl");var E=[{attributes:{target:"page",targetType:"page",action:"view"},addListener:function(t){t(this.attributes)}},{attributes:{target:"add-to-your-wishlist",targetType:"button",action:"click"},el:function(){return o()("#add_to_wishlist_area>a.add_to_wishlist")},addListener:function(t){for(var e=this,r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];this.el().click((function(){return t.apply(void 0,[e.attributes].concat(n))}))}},{attributes:{target:"follow",targetType:"button",action:"click"},el:function(){return o()("#queueBtnFollow>div.queue_btn_inactive")},addListener:function(t){for(var e=this,r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];this.el().click((function(){return t.apply(void 0,[e.attributes].concat(n))}))}},{attributes:{target:"ignore",targetType:"button",action:"click"},el:function(){return o()("#ignoreBtn>div.queue_btn_ignore>div.queue_btn_inactive")},addListener:function(t){for(var e=this,r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];this.el().click((function(){return t.apply(void 0,[e.attributes].concat(n))}))}},{attributes:{target:"share",targetType:"button",action:"click"},el:function(){return o()("#shareEmbedRow").children().eq(0)},addListener:function(t){for(var e=this,r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];this.el().click((function(){return t.apply(void 0,[e.attributes].concat(n))}))}},{attributes:{target:"Embed",targetType:"button",action:"click"},el:function(){return o()("#shareEmbedRow").children().eq(1)},addListener:function(t){for(var e=this,r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];this.el().click((function(){return t.apply(void 0,[e.attributes].concat(n))}))}},{attributes:{target:"report-this-product",targetType:"button",action:"click"},el:function(){return o()("#shareEmbedRow").children().eq(2)},addListener:function(t){for(var e=this,r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];this.el().click((function(){return t.apply(void 0,[e.attributes].concat(n))}))}},{attributes:{target:"community-hub",targetType:"button",action:"click"},el:function(){return o()('div.apphub_OtherSiteInfo>a>span:contains("Community Hub")').parent()},addListener:function(t){for(var e=this,r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];this.el().click((function(){return t.apply(void 0,[e.attributes].concat(n))}))}}],_=function(t){function e(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=v(this,e)).events=t,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(e,t),r=e,n=[{key:"onLoad",value:(u=y(f().mark((function t(){var r,n,o,i,c,u,l;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={name:e.parseGameName(),appId:a.Ay.getAppId(window.location.href)},n=this.parseLangAndCountry(),o=n.country,i=n.lang,t.next=4,this.getUID();case 4:c=t.sent,u=s(this.events);try{for(u.s();!(l=u.n()).done;)l.value.addListener((function(t){var n=t.target,a=t.targetType,u=t.action;return e.registerEvent({data:r,target:n,targetType:a,action:u,lang:i,country:o,uid:c})}))}catch(t){u.e(t)}finally{u.f()}case 7:case"end":return t.stop()}}),t,this)}))),function(){return u.apply(this,arguments)})},{key:"parseLangAndCountry",value:function(){var t={lang:e.DEFAULT_LANG,country:e.DEFAULT_COUNTRY};try{var r=JSON.parse(o()("#application_config").attr("data-config"));t.lang=(r.LANGUAGE||e.DEFAULT_LANG).toLowerCase(),t.country=(r.COUNTRY||e.DEFAULT_COUNTRY).toLowerCase()}catch(t){}return t}},{key:"parseUserSteamId",value:function(){try{return JSON.parse(o()("#application_config").attr("data-userinfo")).steamid||e.DEFAULT_STEAM_ID}catch(t){return null}}},{key:"getUID",value:(c=y(f().mark((function t(){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.abrupt("return",new Promise((function(t){chrome.storage.sync.get({sih_token:""},(function(r){var n=r.sih_token;return t(n||e.DEFAULT_UID)}))})));case 4:t.prev=4,t.t0=t.catch(0);case 6:return t.abrupt("return",e.DEFAULT_UID);case 7:case"end":return t.stop()}}),t,null,[[0,4]])}))),function(){return c.apply(this,arguments)})}],i=[{key:"parseGameName",value:function(){return o()(".apphub_AppName:first").text().replace(/(\u2122)/g,"").replace(/(\xAE)/g,"")}},{key:"registerEvent",value:function(t){var r={type:e.EVENT_TYPE,payload:l(l({},t),{},{group:e.EVENT_GROUP,link:location.href})};chrome.runtime.sendMessage(window.SIHID,{type:"EVENT_STORE",data:r})}}],n&&d(r.prototype,n),i&&d(r,i),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n,i,c,u}(i.A);w(_,"EVENT_GROUP","game-page-events"),w(_,"EVENT_TYPE","events"),w(_,"DEFAULT_COUNTRY","n/a"),w(_,"DEFAULT_LANG","n/a"),w(_,"DEFAULT_UID","n/a"),w(_,"DEFAULT_STEAM_ID","n/a");new _(E)}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,loaded:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,t=[],n.O=(e,r,o,i)=>{if(!r){var a=1/0;for(f=0;f<t.length;f++){for(var[r,o,i]=t[f],c=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((t=>n.O[t](r[u])))?r.splice(u--,1):(c=!1,i<a&&(a=i));if(c){t.splice(f--,1);var l=o();void 0!==l&&(e=l)}}return e}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[r,o,i]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),n.j=767,(()=>{var t={767:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var o,i,[a,c,u]=r,l=0;if(a.some((e=>0!==t[e]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var f=u(n)}for(e&&e(r);l<a.length;l++)i=a[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(f)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var o=n.O(void 0,[76],(()=>n(3257)));o=n.O(o)})();