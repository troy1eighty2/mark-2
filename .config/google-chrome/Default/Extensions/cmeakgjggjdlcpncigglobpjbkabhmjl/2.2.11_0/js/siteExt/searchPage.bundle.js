var SIH;(()=>{"use strict";var e={d:(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};e.r(n),e.d(n,{SihFilters:()=>w,searchPage:()=>t});var t={};function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function a(e,n,t){return(n=function(e){var n=function(e,n){if("object"!=r(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,n||"default");if("object"!=r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==r(n)?n:n+""}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){var e,n;!function(){var e=c();if($J(".page_content").append('\n    <div class="row">\n      <a href="https://store.steampowered.com/cart/" class="sih-cart__button sih-cart__button_green cart-counter"\n        >'.concat(SIHLang.cart.add_to_cart,' <span class="number">').concat(e.length,'</span></a\n      >\n      <a href="javascript:void(0)" class="sih-cart__button sih-cart__button_red clear-cart_button"\n        >').concat(SIHLang.cart.clear_all,"\n      </a>\n    </div>\n  ")),window.outerWidth>1440){var n=Number($J(".page_content").css("margin-left").replace(/px/g,"").trim())+Number($J(".page_content").css("width").replace(/px/g,"").trim());$J(".page_content").find(".row").css("left",n+20)}}(),e=$J(".responsive_page_frame").find(".clear-cart_button"),$J(e).click((function(){var e=c();e.length=0,o(e),window.location.reload()})),n=c(),$J(".responsive_search_name_combined").each((function(e,t){var r=$J(t).find(".discount_final_price").text(),i=new RegExp("[0-9]");if(r.match(i)){var c=$J(t).parent(),l=c.attr("data-ds-appid");$J(t).children().hasClass("sih-cart")||c.find(".ds_incart_flag").length||($J('\n          <a href="javascript:void(0)" class="sih-cart">\n            <div class="sih-cart__checkbox"></div>\n          </a>\n        ').appendTo(t),n.forEach((function(e){for(var n in e)n===l&&$J(t).find(".sih-cart").children(".sih-cart__checkbox").addClass("checked")})),$J(t).find(".sih-cart").click($J.debounce(300,(function(){$J(this).children(".sih-cart__checkbox").toggleClass("checked");var e=$J(t).parent().attr("href");$J.ajax({method:"GET",url:e}).done((function(e){var t=0;$J(e).find(".game_purchase_action").each((function(e,r){$J(r).find(".btn_addtocart").each((function(e,r){var i=$J(r).children("a").attr("href");if(i.includes("javascript:addToCart")&&0===t){var c=i.match(/[0-9]+/g);if(n){var u=n.findIndex((function(e){return e[l]===c[0]}));-1===u?(n.push(a({},l,c[0])),o(n),s()):(n.splice(u,1),o(n),s())}t++}}))}))}))}))))}})),Ajax.Responders.register({onComplete:function(){$J(".responsive_search_name_combined").each((function(e,t){var r=$J(t).find(".discount_final_price").text(),i=new RegExp("[0-9]");if(r.match(i)){var c=$J(t).parent(),l=c.attr("data-ds-appid");$J(t).children().hasClass("sih-cart")||c.find(".ds_incart_flag").length||($J('\n              <a href="javascript:void(0)" class="sih-cart">\n                <div class="sih-cart__checkbox"></div>\n              </a>\n            ').appendTo(t),n.forEach((function(e){for(var n in e)n===l&&$J(t).find(".sih-cart").children(".sih-cart__checkbox").addClass("checked")})),$J(t).find(".sih-cart").click($J.debounce(300,(function(){$J(this).children(".sih-cart__checkbox").toggleClass("checked");var e=$J(t).parent().attr("href");$J.ajax({method:"GET",url:e}).done((function(e){var t=0;$J(e).find(".game_purchase_action").each((function(e,r){$J(r).find(".btn_addtocart").each((function(e,r){var i=$J(r).children("a").attr("href");if(i.includes("javascript:addToCart")&&0===t){var c=i.match(/[0-9]+/g);if(n){var u=n.findIndex((function(e){return e[l]===c[0]}));-1===u?(n.push(a({},l,c[0])),o(n),s()):(n.splice(u,1),o(n),s())}t++}}))}))}))}))))}}))}})}function c(){var e=localStorage.getItem("SIH_CART")||"[]";return JSON.parse(e)}function o(e){var n=JSON.stringify(e);localStorage.setItem("SIH_CART",n)}function s(){var e=c(),n=$J(".responsive_page_frame").find(".cart-counter"),t=e.length.toString();$J(n).children(".number").text(t)}e.r(t),e.d(t,{load:()=>i});var l,u=function(e,n){try{n=n||"",localStorage.setItem(e,JSON.stringify(n))}catch(e){console.error(e)}},d=function(e){try{var n=localStorage.getItem(e)||null;return JSON.parse(n)}catch(e){return console.error(e),null}};function h(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i,c,o=[],s=!0,l=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=i.call(t)).done)&&(o.push(r.value),o.length!==n);s=!0);}catch(e){l=!0,a=e}finally{try{if(!s&&null!=t.return&&(c=t.return(),Object(c)!==c))return}finally{if(l)throw a}}return o}}(e,n)||function(e,n){if(e){if("string"==typeof e)return _(e,n);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,m(r.key),r)}}function v(e,n,t){return n&&p(e.prototype,n),t&&p(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function g(e,n,t){return(n=m(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e){var n=function(e,n){if("object"!=f(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==f(n)?n:n+""}var b=v((function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),g(this,"initSihFilters",(function(){var n=$J("#advsearchform .rightcol"),t=$J('<div class="block search_collapse_block" data-collapse-name="sih-filter">\n        <div class="block_header sih-filters__header">\n          <div>'.concat(SIHLang.game_filters.title,'</div>\n          <img src="chrome-extension://').concat(SIHID,'/assets/common/powered_sih.svg" alt="" />\n        </div>\n        <div class="block_content block_content_inner">\n          ').concat(["cart","mixed","negative"].map((function(n){return e.getCheckboxHtml(n)})).join(""),'\n          <div class="block_rule"></div>\n          ').concat(e.getReviewScoreHtml(),'\n          <div class="block_rule"></div>\n          ').concat(e.getRangeNumberFilterHtml("sih-reviews-count",SIHLang.game_filters.number_reviews,100),'\n          <div class="block_rule"></div>\n          ').concat(e.getRangeNumberFilterHtml("sih-discount-percent",SIHLang.game_filters.discount,1),"\n        </div>\n      </div>"));n.prepend(t),e.applyFilter(),e.initAutocollapse(),e.eventListeners(),e.rewriteSteamMethod()}))}));l=b,g(b,"RANGE_CONTROL_STEP",5),g(b,"RANGE_CONTROL_MIN_VALUE",0),g(b,"RANGE_CONTROL_MAX_VALUE",100),g(b,"initAutocollapse",(function(){var e,n="sih-filter",t=l.getCollapsePrefs(),r=$J('.search_collapse_block[data-collapse-name="'.concat(n,'"]'));void 0===t[n]?(t[n]=!1,e=!1):e=t[n],r.children(".block_content").css("height",""),e&&(r.addClass("collapsed"),r.children(".block_content").hide()),r.children(".block_header").on("click",(function(){r.hasClass("collapsed")?(t[n]=!1,r.children(".block_content").slideDown("fast")):(t[n]=!0,r.children(".block_content").slideUp("fast")),r.toggleClass("collapsed"),l.saveCollapsePrefs(t)}))})),g(b,"getCollapsePrefs",(function(){return d("sih_search_collapse_prefs")||{}})),g(b,"saveCollapsePrefs",(function(e){u("sih_search_collapse_prefs",e)})),g(b,"eventListeners",(function(){l.checkboxClickListener(),l.reviewScoreListener(),l.rangeNumberFilterListener("sih-reviews-count"),l.rangeNumberFilterListener("sih-discount-percent")})),g(b,"getCheckboxHtml",(function(e){var n,t,r=new URLSearchParams(window.location.search),a="sih-hide",i=r.has(a)&&null!==(n=null===(t=r.get(a))||void 0===t?void 0:t.split(",").includes(e))&&void 0!==n&&n;return'<div\n        class="tab_filter_control_row sih-control__checkbox '.concat(i?"checked":"",'"\n        data-param="sih-hide"\n        data-value=').concat(e,'\n      >\n        <span\n          class="tab_filter_control tab_filter_control_include ').concat(i?"checked":"",'"\n          data-param="sih-hide"\n          data-value="').concat(e,'"\n        >\n          <span>\n            <span class="tab_filter_control_checkbox"></span>\n            <span class="tab_filter_control_label">').concat(SIHLang.game_filters[e],"</span>\n          </span>\n        </span>\n      </div>")})),g(b,"getReviewScoreHtml",(function(){var e=new URLSearchParams(window.location.search).get("sih-reviews-score"),n=h(e?e.split("-").map(Number):[l.RANGE_CONTROL_MIN_VALUE,l.RANGE_CONTROL_MAX_VALUE],2),t=n[0],r=n[1];return'<div class="range_container">\n        <div class="sih-double-slider range_container_inner">\n          <input\n            class="sih-double-slider__input sih-double-slider__input_upper range_input"\n            type="range"\n            min="'.concat(l.RANGE_CONTROL_MIN_VALUE,'"\n            max="').concat(l.RANGE_CONTROL_MAX_VALUE,'"\n            step="').concat(l.RANGE_CONTROL_STEP,'"\n            value="').concat(r,'"\n          />\n          <input\n            class="sih-double-slider__input sih-double-slider__input_lower range_input"\n            type="range"\n            min="').concat(l.RANGE_CONTROL_MIN_VALUE,'"\n            max="').concat(l.RANGE_CONTROL_MAX_VALUE,'"\n            step="').concat(l.RANGE_CONTROL_STEP,'"\n            value="').concat(t,'"\n          />\n        </div>\n        <div class="sih-range-display range_display">\n          ').concat(SIHLang.game_filters.between," ").concat(t,"% ").concat(SIHLang.game_filters.and," ").concat(r,"%\n          ").concat(SIHLang.game_filters.positive_reviews,"\n        </div>\n      </div>")})),g(b,"getRangeNumberFilterHtml",(function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=new URLSearchParams(window.location.search).get(e),a=h(r?r.split("-"):["",""],2),i=a[0],c=a[1];return'\n    <div class="sih-range-filter">\n      <div class="sih-range-filter__header">'.concat(n,':</div>\n      <div class="sih-range-filter__content">\n        <input\n          class="sih-range-filter__input ').concat(e,"__input ").concat(e,'__input_lower search_filter_suggest"\n          type="number"\n          min="0"\n          step="').concat(t,'"\n          placeholder="').concat(SIHLang.game_filters.min,'"\n          value="').concat(i,'"\n        />\n        -\n        <input\n          class="sih-range-filter__input ').concat(e,"__input ").concat(e,'__input_upper search_filter_suggest"\n          type="number"\n          min="0"\n          step="').concat(t,'"\n          placeholder="').concat(SIHLang.game_filters.max,'"\n          value="').concat(c,'"\n        />\n      </div>\n    </div>')})),g(b,"checkboxClickListener",(function(){$J(".sih-control__checkbox").click((function(){$J(this).toggleClass("checked"),$J(this).find(".tab_filter_control_include").toggleClass("checked"),l.updateSearchUrl(),l.applyFilter()}))})),g(b,"reviewScoreListener",(function(){$J(".sih-double-slider__input").each((function(e,n){$J(n).change((function(){var e=$J(".sih-double-slider__input_lower"),n=$J(".sih-double-slider__input_upper"),t=+e.val(),r=+n.val();r<=t&&(t===l.RANGE_CONTROL_MAX_VALUE?(t=l.RANGE_CONTROL_MAX_VALUE-l.RANGE_CONTROL_STEP,r=l.RANGE_CONTROL_MAX_VALUE):r<l.RANGE_CONTROL_MAX_VALUE?r=t+l.RANGE_CONTROL_STEP:t=r-l.RANGE_CONTROL_STEP,e.val(t),n.val(r)),$J(".sih-range-display").text("".concat(SIHLang.game_filters.between," ").concat(t,"% ").concat(SIHLang.game_filters.and," ").concat(r,"% ").concat(SIHLang.game_filters.positive_reviews)),l.updateSearchUrl(),l.applyFilter()}))}))})),g(b,"rangeNumberFilterListener",(function(e){var n=function(e){+e.val()<0&&e.val("")},t=function(){var t=$J(".".concat(e,"__input_lower")),r=$J(".".concat(e,"__input_upper"));n(t),n(r),l.updateSearchUrl(),l.applyFilter()};$J(".".concat(e,"__input")).each((function(e,n){$J(n).change(t),$J(n).focusout(t),$J(n).keydown((function(e){"Enter"===e.key&&(e.preventDefault(),n.dispatchEvent(new Event("change")))}))}))})),g(b,"updateSearchUrl",(function(){var e=new URLSearchParams(window.location.search),n={};$J(".sih-control__checkbox").each((function(e,t){var r=$J(t).attr("data-param"),a=$J(t).attr("data-value"),i=$J(t).hasClass("checked");n[r]||(n[r]=[]),i&&n[r].push(a)}));var t=+$J(".sih-double-slider__input_lower").val(),r=+$J(".sih-double-slider__input_upper").val();n["sih-reviews-score"]="".concat(t,"-").concat(r);for(var a=0,i=Object.entries(n);a<i.length;a++){var c=h(i[a],2),o=c[0],s=c[1];null!==s&&s.length?e.set(o,s):e.delete(o)}var l=$J(".sih-reviews-count__input_lower").val(),u=$J(".sih-reviews-count__input_upper").val();n["sih-reviews-count"]="".concat(l,"-").concat(u);var d=$J(".sih-discount-percent__input_lower").val(),_=$J(".sih-discount-percent__input_upper").val();n["sih-discount-percent"]="".concat(d,"-").concat(_);for(var f=0,p=Object.entries(n);f<p.length;f++){var v=h(p[f],2),g=v[0],m=v[1];null!==m&&m.length?e.set(g,m):e.delete(g)}history.pushState({},"","?".concat(e.toString()))})),g(b,"clearFilterClasses",(function(e){e.forEach((function(e){$J(".".concat(e)).removeClass(e)}))})),g(b,"applyFilter",(function(){var e=new URLSearchParams(window.location.search),n=$J(".search_result_row");if(e.has("sih-hide")){var t=e.get("sih-hide").split(",");n.each((function(e,n){var r=$J(n);t.forEach((function(e){switch(e){case"cart":r.toggleClass("sih-hide__card",r.hasClass("ds_incart"));break;case"mixed":r.toggleClass("sih-hide__mixed",!!r.find(".search_reviewscore span.search_review_summary.mixed").length);break;case"negative":r.toggleClass("sih-hide__negative",!!r.find(".search_reviewscore span.search_review_summary.negative").length)}}))}))}else{var r=$J('[class*="sih-hide"]');r.length&&r.each((function(){$J(this).removeClass((function(e,n){return(n.match(/\bsih-hide\S*/g)||[]).join(" ")}))}))}if(e.has("sih-reviews-score")){var a=h(e.get("sih-reviews-score").split("-"),2),i=a[0],c=a[1];n.each((function(e,n){var t=$J(n),r=t.find(".search_review_summary");if(r.length){var a=r.attr("data-tooltip-html").match(/(?<=%\s?)\d+|\d+(?=\s*%)/);if(a){var o=+a[0];o<+i||o>+c?t.addClass("sih-reviews-score"):t.removeClass("sih-reviews-score")}else+i>0&&t.addClass("sih-reviews-score")}}))}else l.clearFilterClasses(["sih-reviews-score"]);if(e.has("sih-reviews-count")){var o=h(e.get("sih-reviews-count").split("-"),2),s=o[0],u=o[1];n.each((function(e,n){var t=$J(n),r=t.find(".search_review_summary");if(r.length){var a=r.attr("data-tooltip-html").match(/(?<!%\s*[\d,]*)\d[\d,]+(?![\d,]*\s*%)/);if(a){var i=+a[0].replace(/,/g,"");s&&i<+s||u&&i>+u?t.addClass("sih-reviews-count-filter"):t.removeClass("sih-reviews-count-filter")}else s&&+s>0&&t.addClass("ssih-reviews-count-filter")}}))}else l.clearFilterClasses(["sih-reviews-count-filter"]);if(e.has("sih-discount-percent")){var d=h(e.get("sih-discount-percent").split("-"),2),_=d[0],f=d[1];n.each((function(e,n){var t=$J(n),r=t.find(".discount_block");if(r.length){var a=r.attr("data-discount")||"0";_&&+a<+_||f&&+a>+f?t.addClass("sih-discount-percent-filter"):t.removeClass("sih-discount-percent-filter")}else _&&+_>0&&t.addClass("sih-discount-percent-filter")}))}else l.clearFilterClasses(["sih-discount-percent-filter"])})),g(b,"rewriteSteamMethod",(function(){var e=InitInfiniteScroll.oController;if(e){var n=e.m_fnPageChangedHandler;e.SetPageChangedHandler((function(){n.apply(void 0,arguments),l.applyFilter()}))}}));const w=new b;SIH=n})();