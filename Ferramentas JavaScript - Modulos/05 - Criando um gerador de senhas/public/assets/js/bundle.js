(()=>{var r={122:(r,n,e)=>{(n=e(645)(!1)).push([r.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]),n.push([r.id,":root {\r\n  --primary-color: rgb(17, 86, 102);\r\n  --primary-color-darker: rgb(9, 48, 56);\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  outline: 0;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: var(--primary-color);\r\n  font-family: 'Open sans', sans-serif;\r\n  font-size: 1.3em;\r\n  line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n  max-width: 640px;\r\n  margin: 50px auto;\r\n  background: #fff;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\nform input, form label, form button {\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n  font-size: 24px;\r\n  height: 50px;\r\n  padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n  outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n  border: none;\r\n  background: var(--primary-color);\r\n  color: #fff;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  height: 50px;\r\n  cursor: pointer;\r\n  margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n  background: var(--primary-color-darker);\r\n}\r\n\r\n.senha-gerada{\r\n  font-size: 2em ;\r\n  color: var(--primary-color);\r\n  margin: 40px 0;\r\n\r\n}\r\ninput[type=\"checkbox\"] {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n.container-main{\r\n  width: 250px;\r\n  \r\n}\r\n\r\nbutton{\r\n  display: block;\r\n  margin: 40px 0;\r\n  font-size: 1em;\r\n}",""]),r.exports=n},645:r=>{"use strict";r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=function(r,n){var e,t,o,i=r[1]||"",a=r[3];if(!a)return i;if(n&&"function"==typeof btoa){var c=(e=a,t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),"/*# ".concat(o," */")),s=a.sources.map((function(r){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(r," */")}));return[i].concat(s).concat([c]).join("\n")}return[i].join("\n")}(n,r);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(r,e,t){"string"==typeof r&&(r=[[null,r,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<r.length;c++){var s=[].concat(r[c]);t&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),n.push(s))}},n}},96:(r,n,e)=>{var t=e(379),o=e(122);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[r.id,o,""]]);t(o,{insert:"head",singleton:!1}),r.exports=o.locals||{}},379:(r,n,e)=>{"use strict";var t,o=function(){var r={};return function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[n]=e}return r[n]}}(),i=[];function a(r){for(var n=-1,e=0;e<i.length;e++)if(i[e].identifier===r){n=e;break}return n}function c(r,n){for(var e={},t=[],o=0;o<r.length;o++){var c=r[o],s=n.base?c[0]+n.base:c[0],u=e[s]||0,d="".concat(s," ").concat(u);e[s]=u+1;var f=a(d),l={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(i[f].references++,i[f].updater(l)):i.push({identifier:d,updater:h(l,n),references:1}),t.push(d)}return t}function s(r){var n=document.createElement("style"),t=r.attributes||{};if(void 0===t.nonce){var i=e.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(r){n.setAttribute(r,t[r])})),"function"==typeof r.insert)r.insert(n);else{var a=o(r.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,d=(u=[],function(r,n){return u[r]=n,u.filter(Boolean).join("\n")});function f(r,n,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(r.styleSheet)r.styleSheet.cssText=d(n,o);else{var i=document.createTextNode(o),a=r.childNodes;a[n]&&r.removeChild(a[n]),a.length?r.insertBefore(i,a[n]):r.appendChild(i)}}function l(r,n,e){var t=e.css,o=e.media,i=e.sourceMap;if(o?r.setAttribute("media",o):r.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}var p=null,m=0;function h(r,n){var e,t,o;if(n.singleton){var i=m++;e=p||(p=s(n)),t=f.bind(null,e,i,!1),o=f.bind(null,e,i,!0)}else e=s(n),t=l.bind(null,e,n),o=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return t(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;t(r=n)}else o()}}r.exports=function(r,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=c(r=r||[],n);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var t=0;t<e.length;t++){var o=a(e[t]);i[o].references--}for(var s=c(r,n),u=0;u<e.length;u++){var d=a(e[u]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}e=s}}}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return r[t](i,i.exports,e),i.exports}e.nc=void 0,(()=>{"use strict";var r=function(r,n){return Math.floor(Math.random()*(r-n)+n)},n=document.querySelector(".senha-gerada"),t=document.querySelector(".qnt"),o=document.querySelector(".chk-maiusculas"),i=document.querySelector(".chk-minusculas"),a=document.querySelector(".chk-numeros"),c=document.querySelector(".chk-simbolos"),s=document.querySelector(".gerar-senha");e(96),s.addEventListener("click",(function(){n.innerHTML=function(n,e,t,o,i){var a=[];n=Number(n);for(var c=0;c<n;c++)e&&a.push(String.fromCharCode(r(65,91))),t&&a.push(String.fromCharCode(r(97,123))),o&&a.push(String.fromCharCode(r(48,58))),i&&a.push(1===r(4,1)?String.fromCharCode(r(33,48)):2===r(4,1)?String.fromCharCode(r(58,65)):3===r(4,1)?String.fromCharCode(r(91,97)):String.fromCharCode(r(123,127)));return a.join("").slice(0,n)}(t.value,o.checked,i.checked,a.checked,c.checked)||"Selecione uma das opções"}))})()})();
//# sourceMappingURL=bundle.js.map