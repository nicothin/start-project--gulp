!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=function(e){(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?e():document.addEventListener("DOMContentLoaded",e)}},,function(e,t,n){n(0)((function(){for(var e=document.querySelectorAll(".burger"),t=0;t<e.length;t++){e[t].addEventListener("click",n)}function n(){var e=this.getAttribute("data-target-id"),t=this.getAttribute("data-target-class-toggle");e&&t&&(this.classList.toggle("burger--close"),document.getElementById(e).classList.toggle(t))}}))},function(e,t,n){n(0)((function(){var e=new RegExp("main-nav__link");document.addEventListener("focus",(function(n){if(e.test(n.target.className))for(var o=t(n.target,".main-nav__item"),r=0;r<o.length;r++)o[r].classList.add("main-nav__item--show-child")}),!0),document.addEventListener("blur",(function(t){if(e.test(t.target.className))for(var n=document.querySelectorAll(".main-nav__item--show-child"),o=0;o<n.length;o++)n[o].classList.remove("main-nav__item--show-child")}),!0);
/*! getParents.js | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/getParents */
var t=function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1});for(var n=[];e&&e!==document;e=e.parentNode)t?e.matches(t)&&n.push(e):n.push(e);return n}}))},function(e,t){},,function(e,t,n){
/*!*
 * ВНИМАНИЕ! Этот файл генерируется автоматически.
 * Любые изменения этого файла будут потеряны при следующей компиляции.
 * Любое изменение проекта без возможности компиляции ДОЛЬШЕ И ДОРОЖЕ в 2-5 раз.
 */
n(2),n(3),n(4)}]);