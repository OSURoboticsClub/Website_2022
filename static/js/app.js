/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// App JavaScript can go here
var UniversalTilt = __webpack_require__(/*! universal-tilt.js */ "./node_modules/universal-tilt.js/lib/universal-tilt.min.js");
window.addEventListener('scroll', function (_, ev) {
  // console.log(window.scrollY);
  if (window.scrollY > 10) {
    document.getElementById("navbar").classList.add("bg-neutral-900");
  } else {
    document.getElementById("navbar").classList.remove("bg-neutral-900");
  }
});
var menuOpen = false;
document.getElementById("menuToggle").addEventListener("click", function () {
  console.log("menu open click");
  if (menuOpen) {
    // Close the menu
    document.getElementById("mobileMenu").classList.add("hidden");
    document.getElementById("mobileMenuCloseSvg").classList.add("hidden");
    document.getElementById("mobileMenuOpenSvg").classList.remove("hidden");
    menuOpen = false;
    if (window.scrollY < 10) {
      document.getElementById("navbar").classList.remove("bg-neutral-900");
    }
  } else {
    // Open the menu
    document.getElementById("mobileMenu").classList.remove("hidden");
    document.getElementById("mobileMenuCloseSvg").classList.remove("hidden");
    document.getElementById("mobileMenuOpenSvg").classList.add("hidden");
    document.getElementById("navbar").classList.add("bg-neutral-900");
    menuOpen = true;
  }
});

// Universal Tilt
UniversalTilt.init({
  elements: document.querySelectorAll('[tilt]'),
  settings: {
    // options...
    shine: true,
    'shine-opacity': 0.5,
    'shine-save': true,
    scale: 1.2,
    exclude: /(iPod|iPhone|iPad|Android)/
  },
  callbacks: {
    // callbacks...
  }
});

/***/ }),

/***/ "./assets/css/styles.scss":
/*!********************************!*\
  !*** ./assets/css/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/universal-tilt.js/lib/universal-tilt.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/universal-tilt.js/lib/universal-tilt.min.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

!function(e,t){ true?module.exports=t():0}("object"!=typeof window?__webpack_require__.g.window=__webpack_require__.g:window,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o=(i=n(1))&&i.__esModule?i:{default:i};var a=o.default;t.default=a,t.default=o.default,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o=(i=n(2))&&i.__esModule?i:{default:i};function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=function(){function e(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"onMouseEnter",function(){n.updateElementPosition(),n.transitions(),"function"==typeof n.callbacks.onMouseEnter&&n.callbacks.onMouseEnter(n.element)}),s(this,"onMouseMove",function(e){null!==n.updateCall&&cancelAnimationFrame(n.updateCall),n.event=e,n.updateElementPosition(),n.updateCall=requestAnimationFrame(function(){return n.update()}),"function"==typeof n.callbacks.onMouseMove&&n.callbacks.onMouseMove(n.element)}),s(this,"onMouseLeave",function(){n.transitions(),requestAnimationFrame(function(){return n.reset()}),"function"==typeof n.callbacks.onMouseLeave&&n.callbacks.onMouseLeave(n.element)}),s(this,"onDeviceMove",function(e){n.event=e,n.update(),n.updateElementPosition(),n.transitions(),"function"==typeof n.callbacks.onDeviceMove&&n.callbacks.onDeviceMove(n.element)}),this.element=t,this.callbacks=o,this.settings=this.extendSettings(i),"function"==typeof this.callbacks.onInit&&this.callbacks.onInit(this.element),this.reverse=this.settings.reverse?-1:1,this.settings.shine&&this.shine(),this.element.style.transform="perspective(".concat(this.settings.perspective,"px)"),this.addEventListeners()}var t,n,i;return t=e,i=[{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.elements,i=t.settings,o=t.callbacks;n instanceof Node&&(n=[n]),n instanceof NodeList&&(n=[].slice.call(n));var a=!0,s=!1,r=void 0;try{for(var l,c=n[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){var u=l.value;"universalTilt"in u||(u.universalTilt=new e(u,i,o))}}catch(e){s=!0,r=e}finally{try{a||null==c.return||c.return()}finally{if(s)throw r}}}}],(n=[{key:"isMobile",value:function(){return window.DeviceMotionEvent&&"ontouchstart"in document.documentElement}},{key:"addEventListeners",value:function(){var e;o.default.name.match(this.settings.exclude)||(null===(e=o.default.product)||void 0===e?void 0:e.match(this.settings.exclude))||(this.isMobile()?window.addEventListener("devicemotion",this.onDeviceMove):("element"===this.settings.base?this.base=this.element:"window"===this.settings.base&&(this.base=window),this.base.addEventListener("mouseenter",this.onMouseEnter),this.base.addEventListener("mousemove",this.onMouseMove),this.base.addEventListener("mouseleave",this.onMouseLeave)))}},{key:"removeEventListeners",value:function(){window.removeEventListener("devicemotion",this.onDeviceMove),this.base.removeEventListener("mouseenter",this.onMouseEnter),this.base.removeEventListener("mousemove",this.onMouseMove),this.base.removeEventListener("mouseleave",this.onMouseLeave)}},{key:"destroy",value:function(){clearTimeout(this.timeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall),"function"==typeof this.callbacks.onDestroy&&this.callbacks.onDestroy(this.element),this.reset(),this.removeEventListeners(),this.element.universalTilt=null,delete this.element.universalTilt,this.element=null}},{key:"reset",value:function(){this.event={pageX:this.left+this.width/2,pageY:this.top+this.height/2},this.settings.reset&&(this.element.style.transform="perspective(".concat(this.settings.perspective,"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")),this.settings.shine&&!this.settings["shine-save"]&&Object.assign(this.shineElement.style,{transform:"rotate(180deg) translate3d(-50%, -50%, 0)",opacity:"0"})}},{key:"getValues",value:function(){var e,t,n;this.isMobile()?(e=this.event.accelerationIncludingGravity.x/4,t=this.event.accelerationIncludingGravity.y/4,90===window.orientation?(n=(1-t)/2,t=(1+e)/2,e=n):-90===window.orientation?(n=(1+t)/2,t=(1-e)/2,e=n):0===window.orientation?(t=n=(1+t)/2,e=(1+e)/2):180===window.orientation&&(t=n=(1-t)/2,e=(1-e)/2)):"element"===this.settings.base?(e=(this.event.clientX-this.left)/this.width,t=(this.event.clientY-this.top)/this.height):"window"===this.settings.base&&(e=this.event.clientX/window.innerWidth,t=this.event.clientY/window.innerHeight);e=Math.min(Math.max(e,0),1),t=Math.min(Math.max(t,0),1);var i=(this.settings.max/2-e*this.settings.max).toFixed(2),o=(t*this.settings.max-this.settings.max/2).toFixed(2),a=Math.atan2(e-.5,.5-t)*(180/Math.PI);return{tiltX:this.reverse*i,tiltY:this.reverse*o,angle:a}}},{key:"updateElementPosition",value:function(){var e=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=e.left,this.top=e.top}},{key:"update",value:function(){var e=this.getValues();this.element.style.transform="perspective(".concat(this.settings.perspective,"px)\n      rotateX(").concat(this.settings.disabled&&"X"===this.settings.disabled.toUpperCase()?0:e.tiltY,"deg)\n      rotateY(").concat(this.settings.disabled&&"Y"===this.settings.disabled.toUpperCase()?0:e.tiltX,"deg)\n      scale3d(").concat(this.settings.scale,", ").concat(this.settings.scale,", ").concat(this.settings.scale,")"),this.settings.shine&&Object.assign(this.shineElement.style,{transform:"rotate(".concat(e.angle,"deg) translate3d(-50%, -50%, 0)"),opacity:"".concat(this.settings["shine-opacity"])}),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:e})),this.updateCall=null}},{key:"shine",value:function(){var e=document.createElement("div"),t=document.createElement("div");e.classList.add("shine"),t.classList.add("shine-inner"),e.appendChild(t),this.element.appendChild(e),this.shineWrapper=this.element.querySelector(".shine"),this.shineElement=this.element.querySelector(".shine-inner"),Object.assign(this.shineWrapper.style,{position:"absolute",top:"0",left:"0",height:"100%",width:"100%",overflow:"hidden"}),Object.assign(this.shineElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",width:"".concat(2*this.element.offsetWidth,"px"),height:"".concat(2*this.element.offsetWidth,"px"),transform:"rotate(180deg) translate3d(-50%, -50%, 0)","transform-origin":"0% 0%",opacity:"0"})}},{key:"transitions",value:function(){var e=this;clearTimeout(this.timeout),this.element.style.transition="all ".concat(this.settings.speed,"ms ").concat(this.settings.easing),this.settings.shine&&(this.shineElement.style.transition="opacity ".concat(this.settings.speed,"ms ").concat(this.settings.easing)),this.timeout=setTimeout(function(){e.element.style.transition="",e.settings.shine&&(e.shineElement.style.transition="")},this.settings.speed)}},{key:"extendSettings",value:function(e){var t={base:"element",disabled:null,easing:"cubic-bezier(.03, .98, .52, .99)",exclude:null,max:35,perspective:1e3,reset:!0,reverse:!1,scale:1,shine:!1,"shine-opacity":0,"shine-save":!1,speed:300},n={};for(var i in t)if(i in e)n[i]=e[i];else if(this.element.getAttribute("data-".concat(i))){var o=this.element.getAttribute("data-".concat(i));try{n[i]=JSON.parse(o)}catch(e){n[i]=o}}else n[i]=t[i];return n}}])&&a(t.prototype,n),i&&a(t,i),e}();if(t.default=r,"undefined"!=typeof document){window.UniversalTilt=r;var l=document.querySelectorAll("[data-tilt]");l.length&&r.init({elements:l})}window.jQuery&&(window.jQuery.fn.universalTilt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r.init({elements:this,settings:e.settings||{},callbacks:e.callbacks||{}})})},function(e,t,n){(function(e,i){var o;
/*!
 * Platform.js <https://mths.be/platform>
 * Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 * Copyright 2011-2013 John-David Dalton <http://allyoucanleet.com/>
 * Available under MIT license <https://mths.be/mit>
 */(function(){"use strict";var a={function:!0,object:!0},s=a[typeof window]&&window||this,r=a[typeof t]&&t,l=a[typeof e]&&e&&!e.nodeType&&e,c=r&&l&&"object"==typeof i&&i;!c||c.global!==c&&c.window!==c&&c.self!==c||(s=c);var u=Math.pow(2,53)-1,d=/\bOpera/,b=Object.prototype,h=b.hasOwnProperty,p=b.toString;function f(e){return(e=String(e)).charAt(0).toUpperCase()+e.slice(1)}function m(e){return e=S(e),/^(?:webOS|i(?:OS|P))/.test(e)?e:f(e)}function v(e,t){for(var n in e)h.call(e,n)&&t(e[n],n,e)}function g(e){return null==e?f(e):p.call(e).slice(8,-1)}function y(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function x(e,t){var n=null;return function(e,t){var n=-1,i=e?e.length:0;if("number"==typeof i&&i>-1&&i<=u)for(;++n<i;)t(e[n],n,e);else v(e,t)}(e,function(i,o){n=t(n,i,o,e)}),n}function S(e){return String(e).replace(/^ +| +$/g,"")}var w=function e(t){var n=s,i=t&&"object"==typeof t&&"String"!=g(t);i&&(n=t,t=null);var o=n.navigator||{},a=o.userAgent||"";t||(t=a);var r,l,c,u,b,h=i?!!o.likeChrome:/\bChrome\b/.test(t)&&!/internal|\n/i.test(p.toString()),f=i?"Object":"ScriptBridgingProxyObject",w=i?"Object":"Environment",M=i&&n.java?"JavaPackage":g(n.java),O=i?"Object":"RuntimeObject",E=/\bJava/.test(M)&&n.java,k=E&&g(n.environment)==w,P=E?"a":"α",C=E?"b":"β",T=n.document||{},W=n.operamini||n.opera,j=d.test(j=i&&W?W["[[Class]]"]:g(W))?j:W=null,A=t,B=[],I=null,F=t==a,R=F&&W&&"function"==typeof W.version&&W.version(),G=x([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"],function(e,n){return e||RegExp("\\b"+(n.pattern||y(n))+"\\b","i").exec(t)&&(n.label||n)}),L=function(e){return x(e,function(e,n){return e||RegExp("\\b"+(n.pattern||y(n))+"\\b","i").exec(t)&&(n.label||n)})}(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"Edge"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Waterfox","WebPositive","Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chrome",{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),X=N([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),$=function(e){return x(e,function(e,n,i){return e||(n[X]||n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(X)]||RegExp("\\b"+y(i)+"(?:\\b|\\w*\\d)","i").exec(t))&&i})}({Apple:{iPad:1,iPhone:1,iPod:1},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1}}),_=function(e){return x(e,function(e,n){var i=n.pattern||y(n);return!e&&(e=RegExp("\\b"+i+"(?:/[\\d.]+|[ \\w.]*)","i").exec(t))&&(e=function(e,t,n){var i={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return t&&n&&/^Win/i.test(e)&&!/^Windows Phone /i.test(e)&&(i=i[/[\d.]+$/.exec(e)])&&(e="Windows "+i),e=String(e),t&&n&&(e=e.replace(RegExp(t,"i"),n)),e=m(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])}(e,i,n.label||n)),e})}(["Windows Phone","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);function N(e){return x(e,function(e,n){var i=n.pattern||y(n);return!e&&(e=RegExp("\\b"+i+" *\\d+[.\\w_]*","i").exec(t)||RegExp("\\b"+i+" *\\w+-[\\w]*","i").exec(t)||RegExp("\\b"+i+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(t))&&((e=String(n.label&&!RegExp(i,"i").test(n.label)?n.label:e).split("/"))[1]&&!/[\d.]+/.test(e[0])&&(e[0]+=" "+e[1]),n=n.label||n,e=m(e[0].replace(RegExp(i,"i"),n).replace(RegExp("; *(?:"+n+"[_-])?","i")," ").replace(RegExp("("+n+")[-_.]?(\\w)","i"),"$1 $2"))),e})}if(G&&(G=[G]),$&&!X&&(X=N([$])),(r=/\bGoogle TV\b/.exec(X))&&(X=r[0]),/\bSimulator\b/i.test(t)&&(X=(X?X+" ":"")+"Simulator"),"Opera Mini"==L&&/\bOPiOS\b/.test(t)&&B.push("running in Turbo/Uncompressed mode"),"IE"==L&&/\blike iPhone OS\b/.test(t)?($=(r=e(t.replace(/like iPhone OS/,""))).manufacturer,X=r.product):/^iP/.test(X)?(L||(L="Safari"),_="iOS"+((r=/ OS ([\d_]+)/i.exec(t))?" "+r[1].replace(/_/g,"."):"")):"Konqueror"!=L||/buntu/i.test(_)?$&&"Google"!=$&&(/Chrome/.test(L)&&!/\bMobile Safari\b/i.test(t)||/\bVita\b/.test(X))||/\bAndroid\b/.test(_)&&/^Chrome/.test(L)&&/\bVersion\//i.test(t)?(L="Android Browser",_=/\bAndroid\b/.test(_)?_:"Android"):"Silk"==L?(/\bMobi/i.test(t)||(_="Android",B.unshift("desktop mode")),/Accelerated *= *true/i.test(t)&&B.unshift("accelerated")):"PaleMoon"==L&&(r=/\bFirefox\/([\d.]+)\b/.exec(t))?B.push("identifying as Firefox "+r[1]):"Firefox"==L&&(r=/\b(Mobile|Tablet|TV)\b/i.exec(t))?(_||(_="Firefox OS"),X||(X=r[1])):!L||(r=!/\bMinefield\b/i.test(t)&&/\b(?:Firefox|Safari)\b/.exec(L))?(L&&!X&&/[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(r+"/")+8))&&(L=null),(r=X||$||_)&&(X||$||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(_))&&(L=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(_)?_:r)+" Browser")):"Electron"==L&&(r=(/\bChrome\/([\d.]+)\b/.exec(t)||0)[1])&&B.push("Chromium "+r):_="Kubuntu",R||(R=x(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))","Version",y(L),"(?:Firefox|Minefield|NetFront)"],function(e,n){return e||(RegExp(n+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(t)||0)[1]||null})),(r=("iCab"==G&&parseFloat(R)>3?"WebKit":/\bOpera\b/.test(L)&&(/\bOPR\b/.test(t)?"Blink":"Presto"))||/\b(?:Midori|Nook|Safari)\b/i.test(t)&&!/^(?:Trident|EdgeHTML)$/.test(G)&&"WebKit"||!G&&/\bMSIE\b/i.test(t)&&("Mac OS"==_?"Tasman":"Trident")||"WebKit"==G&&/\bPlayStation\b(?! Vita\b)/i.test(L)&&"NetFront")&&(G=[r]),"IE"==L&&(r=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t)||0)[1])?(L+=" Mobile",_="Windows Phone "+(/\+$/.test(r)?r:r+".x"),B.unshift("desktop mode")):/\bWPDesktop\b/i.test(t)?(L="IE Mobile",_="Windows Phone 8.x",B.unshift("desktop mode"),R||(R=(/\brv:([\d.]+)/.exec(t)||0)[1])):"IE"!=L&&"Trident"==G&&(r=/\brv:([\d.]+)/.exec(t))&&(L&&B.push("identifying as "+L+(R?" "+R:"")),L="IE",R=r[1]),F){if(u="global",b=null!=(c=n)?typeof c[u]:"number",/^(?:boolean|number|string|undefined)$/.test(b)||"object"==b&&!c[u])g(r=n.runtime)==f?(L="Adobe AIR",_=r.flash.system.Capabilities.os):g(r=n.phantom)==O?(L="PhantomJS",R=(r=r.version||null)&&r.major+"."+r.minor+"."+r.patch):"number"==typeof T.documentMode&&(r=/\bTrident\/(\d+)/i.exec(t))?(R=[R,T.documentMode],(r=+r[1]+4)!=R[1]&&(B.push("IE "+R[1]+" mode"),G&&(G[1]=""),R[1]=r),R="IE"==L?String(R[1].toFixed(1)):R[0]):"number"==typeof T.documentMode&&/^(?:Chrome|Firefox)\b/.test(L)&&(B.push("masking as "+L+" "+R),L="IE",R="11.0",G=["Trident"],_="Windows");else if(E&&(A=(r=E.lang.System).getProperty("os.arch"),_=_||r.getProperty("os.name")+" "+r.getProperty("os.version")),k){try{R=n.require("ringo/engine").version.join("."),L="RingoJS"}catch(e){(r=n.system)&&r.global.system==n.system&&(L="Narwhal",_||(_=r[0].os||null))}L||(L="Rhino")}else"object"==typeof n.process&&!n.process.browser&&(r=n.process)&&("object"==typeof r.versions&&("string"==typeof r.versions.electron?(B.push("Node "+r.versions.node),L="Electron",R=r.versions.electron):"string"==typeof r.versions.nw&&(B.push("Chromium "+R,"Node "+r.versions.node),L="NW.js",R=r.versions.nw)),L||(L="Node.js",A=r.arch,_=r.platform,R=(R=/[\d.]+/.exec(r.version))?R[0]:null));_=_&&m(_)}if(R&&(r=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(R)||/(?:alpha|beta)(?: ?\d)?/i.exec(t+";"+(F&&o.appMinorVersion))||/\bMinefield\b/i.test(t)&&"a")&&(I=/b/i.test(r)?"beta":"alpha",R=R.replace(RegExp(r+"\\+?$"),"")+("beta"==I?C:P)+(/\d+\+?/.exec(r)||"")),"Fennec"==L||"Firefox"==L&&/\b(?:Android|Firefox OS)\b/.test(_))L="Firefox Mobile";else if("Maxthon"==L&&R)R=R.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(X))"Xbox 360"==X&&(_=null),"Xbox 360"==X&&/\bIEMobile\b/.test(t)&&B.unshift("mobile mode");else if(!/^(?:Chrome|IE|Opera)$/.test(L)&&(!L||X||/Browser|Mobi/.test(L))||"Windows CE"!=_&&!/Mobi/i.test(t))if("IE"==L&&F)try{null===n.external&&B.unshift("platform preview")}catch(e){B.unshift("embedded")}else(/\bBlackBerry\b/.test(X)||/\bBB10\b/.test(t))&&(r=(RegExp(X.replace(/ +/g," *")+"/([.\\d]+)","i").exec(t)||0)[1]||R)?(_=((r=[r,/BB10/.test(t)])[1]?(X=null,$="BlackBerry"):"Device Software")+" "+r[0],R=null):this!=v&&"Wii"!=X&&(F&&W||/Opera/.test(L)&&/\b(?:MSIE|Firefox)\b/i.test(t)||"Firefox"==L&&/\bOS X (?:\d+\.){2,}/.test(_)||"IE"==L&&(_&&!/^Win/.test(_)&&R>5.5||/\bWindows XP\b/.test(_)&&R>8||8==R&&!/\bTrident\b/.test(t)))&&!d.test(r=e.call(v,t.replace(d,"")+";"))&&r.name&&(r="ing as "+r.name+((r=r.version)?" "+r:""),d.test(L)?(/\bIE\b/.test(r)&&"Mac OS"==_&&(_=null),r="identify"+r):(r="mask"+r,L=j?m(j.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(r)&&(_=null),F||(R=null)),G=["Presto"],B.push(r));else L+=" Mobile";(r=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(t)||0)[1])&&(r=[parseFloat(r.replace(/\.(\d)$/,".0$1")),r],"Safari"==L&&"+"==r[1].slice(-1)?(L="WebKit Nightly",I="alpha",R=r[1].slice(0,-1)):R!=r[1]&&R!=(r[2]=(/\bSafari\/([\d.]+\+?)/i.exec(t)||0)[1])||(R=null),r[1]=(/\bChrome\/([\d.]+)/i.exec(t)||0)[1],537.36==r[0]&&537.36==r[2]&&parseFloat(r[1])>=28&&"WebKit"==G&&(G=["Blink"]),F&&(h||r[1])?(G&&(G[1]="like Chrome"),r=r[1]||((r=r[0])<530?1:r<532?2:r<532.05?3:r<533?4:r<534.03?5:r<534.07?6:r<534.1?7:r<534.13?8:r<534.16?9:r<534.24?10:r<534.3?11:r<535.01?12:r<535.02?"13+":r<535.07?15:r<535.11?16:r<535.19?17:r<536.05?18:r<536.1?19:r<537.01?20:r<537.11?"21+":r<537.13?23:r<537.18?24:r<537.24?25:r<537.36?26:"Blink"!=G?"27":"28")):(G&&(G[1]="like Safari"),r=(r=r[0])<400?1:r<500?2:r<526?3:r<533?4:r<534?"4+":r<535?5:r<537?6:r<538?7:r<601?8:"8"),G&&(G[1]+=" "+(r+="number"==typeof r?".x":/[.+]/.test(r)?"":"+")),"Safari"==L&&(!R||parseInt(R)>45)&&(R=r)),"Opera"==L&&(r=/\bzbov|zvav$/.exec(_))?(L+=" ",B.unshift("desktop mode"),"zvav"==r?(L+="Mini",R=null):L+="Mobile",_=_.replace(RegExp(" *"+r+"$"),"")):"Safari"==L&&/\bChrome\b/.exec(G&&G[1])&&(B.unshift("desktop mode"),L="Chrome Mobile",R=null,/\bOS X\b/.test(_)?($="Apple",_="iOS 4.3+"):_=null),R&&0==R.indexOf(r=/[\d.]+$/.exec(_))&&t.indexOf("/"+r+"-")>-1&&(_=S(_.replace(r,""))),G&&!/\b(?:Avant|Nook)\b/.test(L)&&(/Browser|Lunascape|Maxthon/.test(L)||"Safari"!=L&&/^iOS/.test(_)&&/\bSafari\b/.test(G[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(L)&&G[1])&&(r=G[G.length-1])&&B.push(r),B.length&&(B=["("+B.join("; ")+")"]),$&&X&&X.indexOf($)<0&&B.push("on "+$),X&&B.push((/^on /.test(B[B.length-1])?"":"on ")+X),_&&(r=/ ([\d.+]+)$/.exec(_),l=r&&"/"==_.charAt(_.length-r[0].length-1),_={architecture:32,family:r&&!l?_.replace(r[0],""):_,version:r?r[1]:null,toString:function(){var e=this.version;return this.family+(e&&!l?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(r=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(A))&&!/\bi686\b/i.test(A)?(_&&(_.architecture=64,_.family=_.family.replace(RegExp(" *"+r),"")),L&&(/\bWOW64\b/i.test(t)||F&&/\w(?:86|32)$/.test(o.cpuClass||o.platform)&&!/\bWin64; x64\b/i.test(t))&&B.unshift("32-bit")):_&&/^OS X/.test(_.family)&&"Chrome"==L&&parseFloat(R)>=39&&(_.architecture=64),t||(t=null);var K={};return K.description=t,K.layout=G&&G[0],K.manufacturer=$,K.name=L,K.prerelease=I,K.product=X,K.ua=t,K.version=L&&R,K.os=_||{architecture:null,family:null,version:null,toString:function(){return"null"}},K.parse=e,K.toString=function(){return this.description||""},K.version&&B.unshift(R),K.name&&B.unshift(L),_&&L&&(_!=String(_).split(" ")[0]||_!=L.split(" ")[0]&&!X)&&B.push(X?"("+_+")":"on "+_),B.length&&(K.description=B.join(" ")),K}();s.platform=w,void 0===(o=function(){return w}.call(t,n,t,e))||(e.exports=o)}).call(this)}).call(this,n(3)(e),n(4))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}])});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/static/js/app": 0,
/******/ 			"static/css/styles": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhugo_starter_tailwind_basic"] = self["webpackChunkhugo_starter_tailwind_basic"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["static/css/styles"], () => (__webpack_require__("./assets/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["static/css/styles"], () => (__webpack_require__("./assets/css/styles.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;