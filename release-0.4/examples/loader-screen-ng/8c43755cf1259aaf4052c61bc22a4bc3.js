!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=1034)}({10:function(t,e,n){t.exports=n(2)(24)},1034:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(36),r=n.n(i),o=n(923);r.a.module("ExampleApp",[o.a]).run(["loaderScreen",function(t){t.setVisible(!0),t.startInitialLoading()}])},1171:function(t,e){t.exports=" <div class=ring-loader-screen ng-if=$root.isLoaderVisible()> <rg-loader class=ring-loader-screen__loader message=\"{{$root.isInitialLoading() ? message : ''}}\"></rg-loader> </div> "},14:function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=i(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([o]).join("\n")}return[n].join("\n")}function i(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=n(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},16:function(t,e,n){function i(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=p[i.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(l(i.parts[o],e))}else{for(var s=[],o=0;o<i.parts.length;o++)s.push(l(i.parts[o],e));p[i.id]={id:i.id,refs:1,parts:s}}}}function r(t,e){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],s=e.base?o[0]+e.base:o[0],a=o[1],u=o[2],c=o[3],l={css:a,media:u,sourceMap:c};i[s]?i[s].parts.push(l):n.push(i[s]={id:s,parts:[l]})}return n}function o(t,e){var n=m(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=x[x.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),x.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=m(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,r)}}function s(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=x.indexOf(t);e>=0&&x.splice(e,1)}function a(t){var e=document.createElement("style");return t.attrs.type="text/css",c(e,t.attrs),o(t,e),e}function u(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",c(e,t.attrs),o(t,e),e}function c(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function l(t,e){var n,i,r,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var c=b++;n=y||(y=a(e)),i=f.bind(null,n,c,!1),r=f.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(e),i=h.bind(null,n,e),r=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(e),i=d.bind(null,n),r=function(){s(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}function f(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=w(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function d(t,e){var n=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function h(t,e,n){var i=n.css,r=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||o)&&(i=_(i)),r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([i],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var p={},v=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),g=function(t){return document.querySelector(t)},m=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=g.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),y=null,b=0,x=[],_=n(46);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=v()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return i(n,e),function(t){for(var o=[],s=0;s<n.length;s++){var a=n[s],u=p[a.id];u.refs--,o.push(u)}t&&i(r(t,e),e);for(var s=0;s<o.length;s++){var u=o[s];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete p[u.id]}}}};var w=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},19:function(t,e,n){t.exports={default:n(44),__esModule:!0}},2:function(t,e){t.exports=vendor_lib},20:function(t,e,n){t.exports=n(2)(647)},22:function(t,e,n){t.exports=n(2)(568)},23:function(t,e,n){t.exports={default:n(34),__esModule:!0}},24:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(57),o=i(r),s=n(56),a=i(s),u="function"==typeof a.default&&"symbol"==typeof o.default?function(t){return typeof t}:function(t){return t&&"function"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?"symbol":typeof t};e.default="function"==typeof a.default&&"symbol"===u(o.default)?function(t){return void 0===t?"undefined":u(t)}:function(t){return t&&"function"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?"symbol":void 0===t?"undefined":u(t)}},25:function(t,e,n){t.exports=n(2)(531)},277:function(t,e,n){"use strict";var i=n(5),r=n.n(i),o=n(6),s=n.n(o),a=function(){function t(){for(var e=this,n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];r()(this,t),this.$inject={},this.constructor.$inject.forEach(function(t,n){e.$inject[t]=i[n]})}return s()(t,null,[{key:"controller",get:function(){return this}}]),t}();a.$inject=[],e.a=a},29:function(t,e,n){t.exports=n(2)(397)},32:function(t,e,n){"use strict";function i(t){return t===document||t instanceof Node&&document.documentElement.contains(t.parentNode)}function r(t){if(t instanceof Range||i(t)){var e=t.getBoundingClientRect();return{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}}return m()({},b)}function o(){return"devicePixelRatio"in window?window.devicePixelRatio:1}function s(){return window.innerHeight}function a(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function u(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}function c(t){t.preventDefault&&t.preventDefault()}n.d(e,"i",function(){return y}),e.g=i,e.a=r,e.b=o,e.f=s,e.d=a,e.e=u,n.d(e,"c",function(){return x}),e.h=c;var l=n(55),f=n.n(l),d=n(5),h=n.n(d),p=n(6),v=n.n(p),g=n(19),m=n.n(g),y=window.getComputedStyle.bind(window),b={top:0,right:0,bottom:0,left:0,width:0,height:0},x=function(){function t(){h()(this,t),this._all=new f.a}return v()(t,[{key:"add",value:function(t,e,n,i){t.addEventListener(e,n,i);var r=function(){return t.removeEventListener(e,n,i)};return this._all.add(r),r}},{key:"remove",value:function(t){t(),this._all.delete(t)}},{key:"removeAll",value:function(){var t=this;this._all.forEach(function(e){return t.remove(e)})}}]),t}()},34:function(t,e,n){n(50);var i=n(10).Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},36:function(t,e,n){t.exports=n(2)(391)},37:function(t,e,n){n(61);var i=n(10).Object;t.exports=function(t,e){return i.create(t,e)}},38:function(t,e,n){n(62);var i=n(10).Object;t.exports=function(t,e){return i.getOwnPropertyDescriptor(t,e)}},39:function(t,e,n){n(64),t.exports=n(10).Object.getPrototypeOf},399:function(t,e,n){"use strict";var i=n(19),r=n.n(i),o=n(5),s=n.n(o),a=n(6),u=n.n(a),c=n(29),l=(n.n(c),n(403)),f=(n.n(l),n(32)),d=function(){function t(e){var n=e.x,i=e.y,r=e.radius,o=e.color;s()(this,t),this.radius=r,this.x=n,this.y=i,this.color=o,this.decay=.01,this.life=1}return u()(t,[{key:"step",value:function(){this.life-=this.decay}},{key:"isAlive",value:function(){return this.life>=0}},{key:"draw",value:function(t){var e=this.life>=0?this.life:0;t.fillStyle="rgba("+this.color.r+", "+this.color.g+", "+this.color.b+", "+e+")",t.beginPath(),t.arc(this.x+this.radius,this.y+this.radius,this.radius,0,2*Math.PI),t.fill()}}]),t}(),h=function(){function t(e,n){s()(this,t),this.isRunning=!1,this.props=r()({},t.defaultProps,n),this.renderInNodeAndStart(e)}return u()(t,null,[{key:"calculateGradient",value:function(t,e,n){var i=function(t,e){return t+Math.round((e-t)*n)};return{r:i(t.r,e.r),g:i(t.g,e.g),b:i(t.b,e.b)}}}]),u()(t,[{key:"setCanvasSize",value:function(){var e=t.getPixelRatio(),n=this.props.size*e;this.canvas.width=n,this.canvas.height=n,this.canvas.style.width=this.props.size+"px",this.canvas.style.height=this.props.size+"px",this.ctx=this.canvas.getContext("2d"),this.ctx.scale(e,e)}},{key:"initializeLoader",value:function(){this.setCanvasSize(),this.height=this.props.size,this.width=this.props.size,this.particles=[],this.baseSpeed=1,this.colorIndex=0,this.maxRadius=10,this.minRadius=6,this.colorChangeTick=40,this.x=0,this.y=0,this.radius=8,this.hSpeed=1.5,this.vSpeed=.5,this.radiusSpeed=.05,this.tick=0,this.prepareInitialState(100),this.isRunning=!0,this.loop()}},{key:"prepareInitialState",value:function(t){for(var e=0;e<t;e++)this.step()}},{key:"handleLimits",value:function(t,e,n,i){var r=Math.random(this.baseSpeed)-this.baseSpeed/2;return t+2*e+this.baseSpeed>=i?-(this.baseSpeed+r):t<=this.baseSpeed?this.baseSpeed+r:n}},{key:"calculateNextCoordinates",value:function(){this.x+=this.hSpeed,this.y+=this.vSpeed,this.hSpeed=this.handleLimits(this.x,this.radius,this.hSpeed,this.width),this.vSpeed=this.handleLimits(this.y,this.radius,this.vSpeed,this.height)}},{key:"calculateNextRadius",value:function(){this.radius+=this.radiusSpeed,(this.radius>this.maxRadius||this.radius<this.minRadius)&&(this.radiusSpeed=-this.radiusSpeed)}},{key:"getNextColor",value:function(){var e=this.props.colors,n=e[this.colorIndex],i=e[this.colorIndex+1]||e[0];return t.calculateGradient(n,i,this.tick/this.colorChangeTick)}},{key:"nextTick",value:function(){++this.tick>this.colorChangeTick&&(this.tick=0,++this.colorIndex>this.props.colors.length-1&&(this.colorIndex=0))}},{key:"step",value:function(){this.nextTick(),this.calculateNextCoordinates(),this.calculateNextRadius(),this.particles.forEach(function(t){return t.step()}),this.particles.push(new d({x:this.x,y:this.y,radius:this.radius,color:this.getNextColor()}))}},{key:"removeDeadParticles",value:function(){this.particles=this.particles.filter(function(t){return t.isAlive()})}},{key:"draw",value:function(){var t=this;this.ctx.clearRect(0,0,this.width,this.height),this.removeDeadParticles(),this.particles.forEach(function(e){return e.draw(t.ctx)})}},{key:"loop",value:function(){var t=this;this.step(),this.draw(),this.isRunning&&window.requestAnimationFrame(function(){return t.loop()})}},{key:"updateMessage",value:function(t){this.textNode.textContent=t||""}},{key:"destroy",value:function(){this.isRunning=!1}},{key:"renderInNodeAndStart",value:function(t){return this.canvas=document.createElement("canvas"),this.canvas.classList.add("ring-loader__canvas"),this.textNode=document.createElement("div"),this.textNode.classList.add("ring-loader__text"),this.textNode.textContent=this.props.message?this.props.message:"",t.appendChild(this.canvas),t.appendChild(this.textNode),this.initializeLoader(),t}}],[{key:"getPixelRatio",value:function(){return n.i(f.b)()}}]),t}();h.defaultProps={size:64,colors:[{r:215,g:60,b:234},{r:145,g:53,b:224},{r:88,g:72,b:224},{r:37,g:183,b:255},{r:89,g:189,b:0},{r:251,g:172,b:2},{r:227,g:37,b:129}]},e.a=h},40:function(t,e,n){n(65),t.exports=n(10).Object.setPrototypeOf},400:function(t,e,n){e=t.exports=n(14)(!1),e.push([t.i,"@-webkit-keyframes rotation-keyframes{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotation-keyframes{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.ring-loader__canvas{display:block;margin:16px auto;pointer-events:none;-webkit-animation:rotation-keyframes 36s linear infinite;animation:rotation-keyframes 36s linear infinite}.ring-loader__text{text-align:center;color:#444;font-size:13px;font-family:-apple-system,BlinkMacSystemFont,Helvetica Neue,Arial,sans-serif}",""])},403:function(t,e,n){var i=n(400);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0};r.transform=void 0,r.insertInto=void 0,n(16)(i,r),i.locals&&(t.exports=i.locals)},41:function(t,e,n){n(66),n(25),n(67),n(68),t.exports=n(10).Symbol},42:function(t,e,n){n(22),n(20),t.exports=n(60).f("iterator")},44:function(t,e,n){n(69),t.exports=n(10).Object.assign},45:function(t,e,n){t.exports={default:n(38),__esModule:!0}},46:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r))return t;var o;return o=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}},5:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},50:function(t,e,n){t.exports=n(2)(518)},52:function(t,e,n){t.exports={default:n(37),__esModule:!0}},53:function(t,e,n){t.exports={default:n(59),__esModule:!0}},54:function(t,e,n){t.exports={default:n(40),__esModule:!0}},55:function(t,e,n){t.exports={default:n(86),__esModule:!0}},56:function(t,e,n){t.exports={default:n(41),__esModule:!0}},57:function(t,e,n){t.exports={default:n(42),__esModule:!0}},58:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(23),o=i(r),s=n(45),a=i(s),u=n(53),c=i(u);e.default=function(t,e){for(var n=(0,c.default)(e),i=0;i<n.length;i++){var r=n[i],s=(0,a.default)(e,r);s&&s.configurable&&void 0===t[r]&&(0,o.default)(t,r,s)}return t}},59:function(t,e,n){n(63);var i=n(10).Object;t.exports=function(t){return i.getOwnPropertyNames(t)}},6:function(t,e,n){"use strict";e.__esModule=!0;var i=n(23),r=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,r.default)(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()},60:function(t,e,n){t.exports=n(2)(224)},602:function(t,e,n){e=t.exports=n(14)(!1),e.push([t.i,'.ring-loader-screen{position:absolute;width:100%;height:100%;text-align:center;vertical-align:middle}.ring-loader-screen .ring-loader-screen__loader{display:inline-block}.ring-loader-screen .ring-loader-screen__loader_without-spacings .ring-loader__canvas{margin:0}.ring-loader-screen:before{content:"";display:inline-block;height:100%;vertical-align:middle}',""])},61:function(t,e,n){t.exports=n(2)(516)},62:function(t,e,n){t.exports=n(2)(520)},63:function(t,e,n){t.exports=n(2)(521)},64:function(t,e,n){t.exports=n(2)(522)},65:function(t,e,n){t.exports=n(2)(530)},66:function(t,e,n){t.exports=n(2)(578)},67:function(t,e,n){t.exports=n(2)(640)},673:function(t,e,n){var i=n(602);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0};r.transform=void 0,r.insertInto=void 0,n(16)(i,r),i.locals&&(t.exports=i.locals)},68:function(t,e,n){t.exports=n(2)(641)},69:function(t,e,n){t.exports=n(2)(515)},7:function(t,e,n){t.exports={default:n(39),__esModule:!0}},8:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(58),o=i(r),s=n(54),a=i(s),u=n(52),c=i(u),l=n(24),f=i(l);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,f.default)(e)));t.prototype=(0,c.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(a.default?(0,a.default)(t,e):(0,o.default)(t,e))}},86:function(t,e,n){n(25),n(22),n(20),n(87),n(90),n(89),n(88),t.exports=n(10).Set},861:function(t,e,n){"use strict";var i=n(7),r=n.n(i),o=n(5),s=n.n(o),a=n(6),u=n.n(a),c=n(9),l=n.n(c),f=n(8),d=n.n(f),h=n(36),p=n.n(h),v=n(277),g=n(399),m=p.a.module("Ring.loader",[]),y=function(t){function e(){var t;s()(this,e);for(var n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];var a=l()(this,(t=e.__proto__||r()(e)).call.apply(t,[this].concat(i))),u=a.$inject.$element;return a.loader=new g.a(u[0],{message:a.message}),a}return d()(e,t),u()(e,[{key:"$onDestroy",value:function(){this.loader.destroy()}},{key:"$onChanges",value:function(t){this.loader.updateMessage(t.message.currentValue)}}]),e}(v.a);y.$inject=["$element"],y.bindings={message:"@"},m.component("rgLoader",y),e.a=m.name},87:function(t,e,n){t.exports=n(2)(227)},88:function(t,e,n){t.exports=n(2)(631)},89:function(t,e,n){t.exports=n(2)(632)},9:function(t,e,n){"use strict";e.__esModule=!0;var i=n(24),r=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,r.default)(e))&&"function"!=typeof e?t:e}},90:function(t,e,n){t.exports=n(2)(633)},923:function(t,e,n){"use strict";var i=n(36),r=n.n(i),o=n(861),s=n(673),a=(n.n(s),r.a.module("Ring.loader-screen",[o.a]));a.service("loaderScreen",["$timeout","$rootScope",function(t,e){var n=this,i=!1,r=!1,o=void 0,s=void 0;this.startLoading=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;s||(s=t(function(){n.setVisible(!0)},e))},this.stopLoading=function(){s&&(t.cancel(s),s=null),n.setVisible(!1)},this.startInitialLoading=function(){i=!0,n.setVisible(!0)},this.stopInitialLoading=function(){i=!1,n.setVisible(!1)},e.isInitialLoading=function(){return i},e.isLoaderVisible=function(){return o},e.isLoadingFailed=function(){return r},this.failInitialLoading=function(t){n.stopInitialLoading(),r=!0,e.error=t},this.setVisible=function(t){o=t},e.$on("$routeChangeSuccess",function(){n.stopInitialLoading()}),e.$on("$routeChangeError",function(t,e,i,r){r&&(r.silent||r.authRedirect)||n.failInitialLoading(r)})}]),a.directive("rgLoaderScreen",[function(){return{restrict:"A",scope:{message:"@rgLoaderScreen"},template:n(1171)}}]),e.a=a.name}});