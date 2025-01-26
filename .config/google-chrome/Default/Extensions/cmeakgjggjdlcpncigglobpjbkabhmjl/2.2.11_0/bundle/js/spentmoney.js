(()=>{"use strict";var t,e={3981:(t,e,r)=>{var n=r(1498),o=r.n(n),a=r(8795),i=r(5882),c=r(4200),u=r(5488),s=r(6516),l=r(3716),f=r(8100);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function p(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */p=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof b?e:b,i=Object.create(a.prototype),c=new A(n||[]);return o(i,"_invoke",{value:C(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var y="suspendedStart",v="suspendedYield",d="executing",m="completed",w={};function b(){}function g(){}function x(){}var _={};s(_,i,(function(){return this}));var O=Object.getPrototypeOf,L=O&&O(O(F([])));L&&L!==r&&n.call(L,i)&&(_=L);var j=x.prototype=b.prototype=Object.create(_);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==h(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function C(e,r,n){var o=y;return function(a,i){if(o===d)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===w)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?m:v,s.arg===w)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),w;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,w;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,w):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,w)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function F(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(h(e)+" is not iterable")}return g.prototype=x,o(j,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:g,configurable:!0}),g.displayName=s(x,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},k(E.prototype),s(E.prototype,c,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new E(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(j),s(j,u,"Generator"),s(j,i,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=F,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,w):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),w},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),w}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:F(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),w}},e}function y(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function v(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){y(a,n,o,i,c,"next",t)}function c(t){y(a,n,o,i,c,"throw",t)}i(void 0)}))}}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,m(n.key),n)}}function m(t){var e=function(t,e){if("object"!=h(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==h(e)?e:e+""}function w(t,e,r){return e=g(e),function(t,e){if(e&&("object"==h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,b()?Reflect.construct(e,r||[],g(t).constructor):e.apply(t,r))}function b(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(b=function(){return!!t})()}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}var _=0,O=0,L=0,j=0;new(function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),w(this,e,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(e,t),r=e,n=[{key:"onLoad",value:(y=v(p().mark((function t(){var e;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.w.get({show_spent_money:c.Ay.show_spent_money});case 2:return e=t.sent,t.next=5,s.G4.onLoad();case 5:e.show_spent_money&&this.addInfo();case 6:case"end":return t.stop()}}),t,this)}))),function(){return y.apply(this,arguments)})},{key:"addInfo",value:(h=v(p().mark((function t(){var e,r,n,a,c,s;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o()(".account_setting_block:first .account_setting_sub_block:last").after('<div id="total_expenses" class="account_setting_sub_block">'.concat(i18next.t("controls:loading"),"</div>")),t.next=3,f.Ay.getWalletCurrency();case 3:return this.userCurrency=t.sent,e=f.Ay.getSessionID(),t.next=7,u.A.load(this.userCurrency);case 7:r=null,n={l:"en",sessionid:e};case 9:return r&&(n.cursor=r),t.next=12,f.Ay.apiRequest({headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},method:"POST",url:"//store.steampowered.com/account/AjaxLoadMoreHistory/",data:n});case 12:a=t.sent,r=this.calcSpentMoney(a);case 14:if(r){t.next=9;break}case 15:c=_+O+L+j,s="",_&&(s+='\n        <div class="accountRow accountBalance">\n          <div data-tooltip-content="Click to view purchase &amp; wallet history" class="accountData price">\n            <a href="https://store.steampowered.com/account/history/">'.concat(i.A.vCurrencyFormat(_,this.userCurrency),'</a>\n          </div>\n          <div class="accountLabel">').concat(i18next.t("controls:accountinfo.purchases"),":</div>\n        </div>")),O&&(s+='\n        <div class="accountRow accountBalance">\n          <div data-tooltip-content="Click to view purchase &amp; wallet history" class="accountData price">\n            <a href="https://store.steampowered.com/account/history/">'.concat(i.A.vCurrencyFormat(O,this.userCurrency),'</a>\n          </div>\n          <div class="accountLabel">').concat(i18next.t("controls:accountinfo.transactions"),":</div>\n        </div>")),L&&(s+='\n        <div class="accountRow accountBalance">\n          <div data-tooltip-content="Click to view purchase &amp; wallet history" class="accountData price">\n            <a href="https://store.steampowered.com/account/history/">'.concat(i.A.vCurrencyFormat(L,this.userCurrency),'</a>\n          </div>\n          <div class="accountLabel">').concat(i18next.t("controls:accountinfo.gifts"),":</div>\n        </div>")),j&&(s+='\n        <div class="accountRow accountBalance">\n          <div data-tooltip-content="Click to view purchase &amp; wallet history" class="accountData price">\n            <a href="https://store.steampowered.com/account/history/">'.concat(i.A.vCurrencyFormat(j,this.userCurrency),'</a>\n          </div>\n          <div class="accountLabel">').concat(i18next.t("controls:accountinfo.ingame"),":</div>\n        </div>")),c&&(s+='\n        <div class="inner_rule"></div>\n        <div class="accountRow accountBalance">\n          <div data-tooltip-content="Click to view purchase &amp; wallet history" class="accountData price">\n            <a href="https://store.steampowered.com/account/history/">'.concat(i.A.vCurrencyFormat(c,this.userCurrency),'</a>\n          </div>\n          <div class="accountLabel">').concat(i18next.t("controls:accountinfo.total"),":</div>\n        </div>")),o()("#total_expenses").html(s);case 23:case"end":return t.stop()}}),t,this)}))),function(){return h.apply(this,arguments)})},{key:"calcSpentMoney",value:function(t){var e=this,r=o().parseHTML(t.html);return o().each(r,(function(t,r){var n=o()(r).find(".wht_type div:first").text().trim(),a=o()(r).find(".wht_total").text().trim(),c=o()(r).find(".wht_items").text().trim();if(a&&!a.match("Credit")&&n&&!c.match("Wallet Credit")){var s,l=i.A.parsePrice(a,!0);if(!l)return;s=l.currencyCode!==e.userCurrency?u.A.convert(l.value,l.currencyCode,e.userCurrency):l.value,n.match(/^Purchase/)&&(_+=s),n.match("Market Transaction")&&(O+=s),n.match("Gift Purchase")&&(L+=s),n.match("In-Game Purchase")&&(j+=s)}})),t.cursor}}],n&&d(r.prototype,n),a&&d(r,a),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n,a,h,y}(a.A))}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,loaded:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,t=[],n.O=(e,r,o,a)=>{if(!r){var i=1/0;for(l=0;l<t.length;l++){for(var[r,o,a]=t[l],c=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((t=>n.O[t](r[u])))?r.splice(u--,1):(c=!1,a<i&&(i=a));if(c){t.splice(l--,1);var s=o();void 0!==s&&(e=s)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,o,a]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),n.j=651,(()=>{var t={651:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var o,a,[i,c,u]=r,s=0;if(i.some((e=>0!==t[e]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var l=u(n)}for(e&&e(r);s<i.length;s++)a=i[s],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var o=n.O(void 0,[76],(()=>n(3981)));o=n.O(o)})();