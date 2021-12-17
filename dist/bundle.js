!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.BlockTypeTunes=t():e.BlockTypeTunes=t()}(self,(function(){return function(){"use strict";var e={630:function(e,t,n){function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=document.createElement(e);for(var a in Array.isArray(n)?(t=i.classList).add.apply(t,r(n)):n&&i.classList.add(n),o)i[a]=o[a];return i}n.r(t),n.d(t,{make:function(){return i}})},424:function(e,t,n){var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".ce-blocktune-type--spoilerHeader .ce-block__content {\n    border: 2px solid rgb(120 120 120);\n    border-left-width: 0;\n    border-right-width: 0;\n    opacity: 0.75;\n}\n.ce-blocktune-type--spoilerContent .ce-block__content {\n    opacity: 0.6;\n}\n",""]),t.Z=o},645:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},548:function(e,t,n){var r=n(379),o=n.n(r),i=n(424);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals},379:function(e,t,n){var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var s=e[o],c=t.base?s[0]+t.base:s[0],u=n[c]||0,l="".concat(c," ").concat(u);n[c]=u+1;var f=a(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(i[f].references++,i[f].updater(p)):i.push({identifier:l,updater:v(p,t),references:1}),r.push(l)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,l=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var d=null,h=0;function v(e,t){var n,r,o;if(t.singleton){var i=h++;n=d||(d=c(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=c(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var c=s(e,t),u=0;u<n.length;u++){var l=a(n[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=c}}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(r),n.d(r,{default:function(){return o}}),n(548).toString();var t=n(630).make,o=function(){function n(e){var t=e.api,r=e.data,o=e.config,i=e.block;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.api=t,this.block=i,this.settings=o,this.data=r||{type:this.getType()},this.typeSettings=[{name:"spoilerHeader",label:this.api.i18n.t("Spoiler Header"),icon:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n<path d="M10 17L3.0718 5L16.9282 5L10 17Z"/>\n</svg>\n'},{name:"spoilerContent",label:this.api.i18n.t("Spoiler Content"),icon:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n<path d="M17 10L5 16.9282V3.0718L17 10Z"/>\n</svg>\n'}],this._CSS={type:{spoilerHeader:"ce-blocktune-type--spoilerHeader",spoilerContent:"ce-blocktune-type--spoilerContent"}}}var r,o,i;return r=n,i=[{key:"DEFAULT_TYPE",get:function(){return""}},{key:"isTune",get:function(){return!0}}],(o=[{key:"getType",value:function(){var e,t;return null!==(e=this.settings)&&void 0!==e&&e.blocks&&this.settings.blocks.hasOwnProperty(this.block.name)?this.settings.blocks[this.block.name]:null!==(t=this.settings)&&void 0!==t&&t.default?this.settings.default:n.DEFAULT_TYPE}},{key:"wrap",value:function(e){return this.wrapper=t("div"),this.wrapper.classList.toggle(this._CSS.type[this.data.type]),this.wrapper.append(e),this.wrapper}},{key:"render",value:function(){var e=this,n=t("div");return this.typeSettings.map((function(t){var r=document.createElement("button");return r.classList.add(e.api.styles.settingsButton),r.innerHTML=t.icon,r.type="button",r.classList.toggle(e.api.styles.settingsButtonActive,t.name===e.data.type),n.appendChild(r),e.api.tooltip.onHover(r,t.label,{placement:"top",hidingDelay:500}),r})).forEach((function(t,n,r){t.addEventListener("click",(function(){var t=e.typeSettings[n].name;e.data.type=t===e.data.type?null:t,r.forEach((function(t,n){var r=e.typeSettings[n].name;t.classList.toggle(e.api.styles.settingsButtonActive,r===e.data.type),e.wrapper.classList.toggle(e._CSS.type[r],r===e.data.type)}))}))})),n}},{key:"save",value:function(){return this.data}}])&&e(r.prototype,o),i&&e(r,i),n}()}(),r}()}));