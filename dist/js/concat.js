/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */
!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t)}(this,function(t){var e=function(){function $(t){return null==t?String(t):S[C.call(t)]||"object"}function F(t){return"function"==$(t)}function k(t){return null!=t&&t==t.window}function M(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function R(t){return"object"==$(t)}function Z(t){return R(t)&&!k(t)&&Object.getPrototypeOf(t)==Object.prototype}function z(t){var e=!!t&&"length"in t&&t.length,n=r.type(t);return"function"!=n&&!k(t)&&("array"==n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function q(t){return a.call(t,function(t){return null!=t})}function H(t){return t.length>0?r.fn.concat.apply([],t):t}function I(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function V(t){return t in l?l[t]:l[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function _(t,e){return"number"!=typeof e||h[I(t)]?e:e+"px"}function B(t){var e,n;return c[t]||(e=f.createElement(t),f.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),c[t]=n),c[t]}function U(t){return"children"in t?u.call(t.children):r.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function X(t,e){var n,r=t?t.length:0;for(n=0;r>n;n++)this[n]=t[n];this.length=r,this.selector=e||""}function J(t,r,i){for(n in r)i&&(Z(r[n])||L(r[n]))?(Z(r[n])&&!Z(t[n])&&(t[n]={}),L(r[n])&&!L(t[n])&&(t[n]=[]),J(t[n],r[n],i)):r[n]!==e&&(t[n]=r[n])}function W(t,e){return null==e?r(t):r(t).filter(e)}function Y(t,e,n,r){return F(e)?e.call(t,n,r):e}function G(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function K(t,n){var r=t.className||"",i=r&&r.baseVal!==e;return n===e?i?r.baseVal:r:void(i?r.baseVal=n:t.className=n)}function Q(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?r.parseJSON(t):t):t}catch(e){return t}}function tt(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)tt(t.childNodes[n],e)}var e,n,r,i,O,P,o=[],s=o.concat,a=o.filter,u=o.slice,f=t.document,c={},l={},h={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},p=/^\s*<(\w+|!)[^>]*>/,d=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,m=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,g=/^(?:body|html)$/i,v=/([A-Z])/g,y=["val","css","html","text","data","width","height","offset"],x=["after","prepend","before","append"],b=f.createElement("table"),E=f.createElement("tr"),j={tr:f.createElement("tbody"),tbody:b,thead:b,tfoot:b,td:E,th:E,"*":f.createElement("div")},w=/complete|loaded|interactive/,T=/^[\w-]*$/,S={},C=S.toString,N={},A=f.createElement("div"),D={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},L=Array.isArray||function(t){return t instanceof Array};return N.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=A).appendChild(t),r=~N.qsa(i,e).indexOf(t),o&&A.removeChild(t),r},O=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},P=function(t){return a.call(t,function(e,n){return t.indexOf(e)==n})},N.fragment=function(t,n,i){var o,s,a;return d.test(t)&&(o=r(f.createElement(RegExp.$1))),o||(t.replace&&(t=t.replace(m,"<$1></$2>")),n===e&&(n=p.test(t)&&RegExp.$1),n in j||(n="*"),a=j[n],a.innerHTML=""+t,o=r.each(u.call(a.childNodes),function(){a.removeChild(this)})),Z(i)&&(s=r(o),r.each(i,function(t,e){y.indexOf(t)>-1?s[t](e):s.attr(t,e)})),o},N.Z=function(t,e){return new X(t,e)},N.isZ=function(t){return t instanceof N.Z},N.init=function(t,n){var i;if(!t)return N.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&p.test(t))i=N.fragment(t,RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}else{if(F(t))return r(f).ready(t);if(N.isZ(t))return t;if(L(t))i=q(t);else if(R(t))i=[t],t=null;else if(p.test(t))i=N.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}}return N.Z(i,t)},r=function(t,e){return N.init(t,e)},r.extend=function(t){var e,n=u.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){J(t,n,e)}),t},N.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,s=T.test(o);return t.getElementById&&s&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:u.call(s&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},r.contains=f.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},r.type=$,r.isFunction=F,r.isWindow=k,r.isArray=L,r.isPlainObject=Z,r.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},r.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},r.inArray=function(t,e,n){return o.indexOf.call(e,t,n)},r.camelCase=O,r.trim=function(t){return null==t?"":String.prototype.trim.call(t)},r.uuid=0,r.support={},r.expr={},r.noop=function(){},r.map=function(t,e){var n,i,o,r=[];if(z(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&r.push(n);else for(o in t)n=e(t[o],o),null!=n&&r.push(n);return H(r)},r.each=function(t,e){var n,r;if(z(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},r.grep=function(t,e){return a.call(t,e)},t.JSON&&(r.parseJSON=JSON.parse),r.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){S["[object "+e+"]"]=e.toLowerCase()}),r.fn={constructor:N.Z,length:0,forEach:o.forEach,reduce:o.reduce,push:o.push,sort:o.sort,splice:o.splice,indexOf:o.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=N.isZ(e)?e.toArray():e;return s.apply(N.isZ(this)?this.toArray():this,n)},map:function(t){return r(r.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return r(u.apply(this,arguments))},ready:function(t){return w.test(f.readyState)&&f.body?t(r):f.addEventListener("DOMContentLoaded",function(){t(r)},!1),this},get:function(t){return t===e?u.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return o.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return F(t)?this.not(this.not(t)):r(a.call(this,function(e){return N.matches(e,t)}))},add:function(t,e){return r(P(this.concat(r(t,e))))},is:function(t){return this.length>0&&N.matches(this[0],t)},not:function(t){var n=[];if(F(t)&&t.call!==e)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):z(t)&&F(t.item)?u.call(t):r(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return r(n)},has:function(t){return this.filter(function(){return R(t)?r.contains(this,t):r(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!R(t)?t:r(t)},last:function(){var t=this[this.length-1];return t&&!R(t)?t:r(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?r(t).filter(function(){var t=this;return o.some.call(n,function(e){return r.contains(e,t)})}):1==this.length?r(N.qsa(this[0],t)):this.map(function(){return N.qsa(this,t)}):r()},closest:function(t,e){var n=[],i="object"==typeof t&&r(t);return this.each(function(r,o){for(;o&&!(i?i.indexOf(o)>=0:N.matches(o,t));)o=o!==e&&!M(o)&&o.parentNode;o&&n.indexOf(o)<0&&n.push(o)}),r(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=r.map(n,function(t){return(t=t.parentNode)&&!M(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return W(e,t)},parent:function(t){return W(P(this.pluck("parentNode")),t)},children:function(t){return W(this.map(function(){return U(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||u.call(this.childNodes)})},siblings:function(t){return W(this.map(function(t,e){return a.call(U(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return r.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=B(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=F(t);if(this[0]&&!e)var n=r(t).get(0),i=n.parentNode||this.length>1;return this.each(function(o){r(this).wrapAll(e?t.call(this,o):i?n.cloneNode(!0):n)})},wrapAll:function(t){if(this[0]){r(this[0]).before(t=r(t));for(var e;(e=t.children()).length;)t=e.first();r(t).append(this)}return this},wrapInner:function(t){var e=F(t);return this.each(function(n){var i=r(this),o=i.contents(),s=e?t.call(this,n):t;o.length?o.wrapAll(s):i.append(s)})},unwrap:function(){return this.parent().each(function(){r(this).replaceWith(r(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var n=r(this);(t===e?"none"==n.css("display"):t)?n.show():n.hide()})},prev:function(t){return r(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return r(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;r(this).empty().append(Y(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=Y(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,r){var i;return"string"!=typeof t||1 in arguments?this.each(function(e){if(1===this.nodeType)if(R(t))for(n in t)G(this,n,t[n]);else G(this,t,Y(this,r,e,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(i=this[0].getAttribute(t))?i:e},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){G(this,t)},this)})},prop:function(t,e){return t=D[t]||t,1 in arguments?this.each(function(n){this[t]=Y(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=D[t]||t,this.each(function(){delete this[t]})},data:function(t,n){var r="data-"+t.replace(v,"-$1").toLowerCase(),i=1 in arguments?this.attr(r,n):this.attr(r);return null!==i?Q(i):e},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=Y(this,t,e,this.value)})):this[0]&&(this[0].multiple?r(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var n=r(this),i=Y(this,e,t,n.offset()),o=n.offsetParent().offset(),s={top:i.top-o.top,left:i.left-o.left};"static"==n.css("position")&&(s.position="relative"),n.css(s)});if(!this.length)return null;if(f.documentElement!==this[0]&&!r.contains(f.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+t.pageXOffset,top:n.top+t.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(t,e){if(arguments.length<2){var i=this[0];if("string"==typeof t){if(!i)return;return i.style[O(t)]||getComputedStyle(i,"").getPropertyValue(t)}if(L(t)){if(!i)return;var o={},s=getComputedStyle(i,"");return r.each(t,function(t,e){o[e]=i.style[O(e)]||s.getPropertyValue(e)}),o}}var a="";if("string"==$(t))e||0===e?a=I(t)+":"+_(t,e):this.each(function(){this.style.removeProperty(I(t))});else for(n in t)t[n]||0===t[n]?a+=I(n)+":"+_(n,t[n])+";":this.each(function(){this.style.removeProperty(I(n))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(r(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?o.some.call(this,function(t){return this.test(K(t))},V(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var n=K(this),o=Y(this,t,e,n);o.split(/\s+/g).forEach(function(t){r(this).hasClass(t)||i.push(t)},this),i.length&&K(this,n+(n?" ":"")+i.join(" "))}}):this},removeClass:function(t){return this.each(function(n){if("className"in this){if(t===e)return K(this,"");i=K(this),Y(this,t,n,i).split(/\s+/g).forEach(function(t){i=i.replace(V(t)," ")}),K(this,i.trim())}})},toggleClass:function(t,n){return t?this.each(function(i){var o=r(this),s=Y(this,t,i,K(this));s.split(/\s+/g).forEach(function(t){(n===e?!o.hasClass(t):n)?o.addClass(t):o.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var n="scrollTop"in this[0];return t===e?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var n="scrollLeft"in this[0];return t===e?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=g.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(r(t).css("margin-top"))||0,n.left-=parseFloat(r(t).css("margin-left"))||0,i.top+=parseFloat(r(e[0]).css("border-top-width"))||0,i.left+=parseFloat(r(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||f.body;t&&!g.test(t.nodeName)&&"static"==r(t).css("position");)t=t.offsetParent;return t})}},r.fn.detach=r.fn.remove,["width","height"].forEach(function(t){var n=t.replace(/./,function(t){return t[0].toUpperCase()});r.fn[t]=function(i){var o,s=this[0];return i===e?k(s)?s["inner"+n]:M(s)?s.documentElement["scroll"+n]:(o=this.offset())&&o[t]:this.each(function(e){s=r(this),s.css(t,Y(this,i,e,s[t]()))})}}),x.forEach(function(n,i){var o=i%2;r.fn[n]=function(){var n,a,s=r.map(arguments,function(t){var i=[];return n=$(t),"array"==n?(t.forEach(function(t){return t.nodeType!==e?i.push(t):r.zepto.isZ(t)?i=i.concat(t.get()):void(i=i.concat(N.fragment(t)))}),i):"object"==n||null==t?t:N.fragment(t)}),u=this.length>1;return s.length<1?this:this.each(function(e,n){a=o?n:n.parentNode,n=0==i?n.nextSibling:1==i?n.firstChild:2==i?n:null;var c=r.contains(f.documentElement,a);s.forEach(function(e){if(u)e=e.cloneNode(!0);else if(!a)return r(e).remove();a.insertBefore(e,n),c&&tt(e,function(e){if(!(null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src)){var n=e.ownerDocument?e.ownerDocument.defaultView:t;n.eval.call(n,e.innerHTML)}})})})},r.fn[o?n+"To":"insert"+(i?"Before":"After")]=function(t){return r(t)[n](this),this}}),N.Z.prototype=X.prototype=r.fn,N.uniq=P,N.deserializeValue=Q,r.zepto=N,r}();return t.Zepto=e,void 0===t.$&&(t.$=e),function(e){function h(t){return t._zid||(t._zid=n++)}function p(t,e,n,r){if(e=d(e),e.ns)var i=m(e.ns);return(a[h(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||i.test(t.ns))&&(!n||h(t.fn)===h(n))&&(!r||t.sel==r)})}function d(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function m(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function g(t,e){return t.del&&!f&&t.e in c||!!e}function v(t){return l[t]||f&&c[t]||t}function y(t,n,i,o,s,u,f){var c=h(t),p=a[c]||(a[c]=[]);n.split(/\s/).forEach(function(n){if("ready"==n)return e(document).ready(i);var a=d(n);a.fn=i,a.sel=s,a.e in l&&(i=function(t){var n=t.relatedTarget;return!n||n!==this&&!e.contains(this,n)?a.fn.apply(this,arguments):void 0}),a.del=u;var c=u||i;a.proxy=function(e){if(e=T(e),!e.isImmediatePropagationStopped()){e.data=o;var n=c.apply(t,e._args==r?[e]:[e].concat(e._args));return n===!1&&(e.preventDefault(),e.stopPropagation()),n}},a.i=p.length,p.push(a),"addEventListener"in t&&t.addEventListener(v(a.e),a.proxy,g(a,f))})}function x(t,e,n,r,i){var o=h(t);(e||"").split(/\s/).forEach(function(e){p(t,e,n,r).forEach(function(e){delete a[o][e.i],"removeEventListener"in t&&t.removeEventListener(v(e.e),e.proxy,g(e,i))})})}function T(t,n){return(n||!t.isDefaultPrevented)&&(n||(n=t),e.each(w,function(e,r){var i=n[e];t[e]=function(){return this[r]=b,i&&i.apply(n,arguments)},t[r]=E}),t.timeStamp||(t.timeStamp=Date.now()),(n.defaultPrevented!==r?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(t.isDefaultPrevented=b)),t}function S(t){var e,n={originalEvent:t};for(e in t)j.test(e)||t[e]===r||(n[e]=t[e]);return T(n,t)}var r,n=1,i=Array.prototype.slice,o=e.isFunction,s=function(t){return"string"==typeof t},a={},u={},f="onfocusin"in t,c={focus:"focusin",blur:"focusout"},l={mouseenter:"mouseover",mouseleave:"mouseout"};u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents",e.event={add:y,remove:x},e.proxy=function(t,n){var r=2 in arguments&&i.call(arguments,2);if(o(t)){var a=function(){return t.apply(n,r?r.concat(i.call(arguments)):arguments)};return a._zid=h(t),a}if(s(n))return r?(r.unshift(t[n],t),e.proxy.apply(null,r)):e.proxy(t[n],t);throw new TypeError("expected function")},e.fn.bind=function(t,e,n){return this.on(t,e,n)},e.fn.unbind=function(t,e){return this.off(t,e)},e.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var b=function(){return!0},E=function(){return!1},j=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,w={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,e,n){return this.on(e,t,n)},e.fn.undelegate=function(t,e,n){return this.off(e,t,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,a,u,f){var c,l,h=this;return t&&!s(t)?(e.each(t,function(t,e){h.on(t,n,a,e,f)}),h):(s(n)||o(u)||u===!1||(u=a,a=n,n=r),(u===r||a===!1)&&(u=a,a=r),u===!1&&(u=E),h.each(function(r,o){f&&(c=function(t){return x(o,t.type,u),u.apply(this,arguments)}),n&&(l=function(t){var r,s=e(t.target).closest(n,o).get(0);return s&&s!==o?(r=e.extend(S(t),{currentTarget:s,liveFired:o}),(c||u).apply(s,[r].concat(i.call(arguments,1)))):void 0}),y(o,t,u,a,n,l||c)}))},e.fn.off=function(t,n,i){var a=this;return t&&!s(t)?(e.each(t,function(t,e){a.off(t,n,e)}),a):(s(n)||o(i)||i===!1||(i=n,n=r),i===!1&&(i=E),a.each(function(){x(this,t,i,n)}))},e.fn.trigger=function(t,n){return t=s(t)||e.isPlainObject(t)?e.Event(t):T(t),t._args=n,this.each(function(){t.type in c&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,n){var r,i;return this.each(function(o,a){r=S(s(t)?e.Event(t):t),r._args=n,r.target=a,e.each(p(a,t.type||t),function(t,e){return i=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),i},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}}),e.Event=function(t,e){s(t)||(e=t,t=e.type);var n=document.createEvent(u[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),T(n)}}(e),function(e){function p(t,n,r){var i=e.Event(n);return e(t).trigger(i,r),!i.isDefaultPrevented()}function d(t,e,n,i){return t.global?p(e||r,n,i):void 0}function m(t){t.global&&0===e.active++&&d(t,null,"ajaxStart")}function g(t){t.global&&!--e.active&&d(t,null,"ajaxStop")}function v(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||d(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void d(e,n,"ajaxSend",[t,e])}function y(t,e,n,r){var i=n.context,o="success";n.success.call(i,t,o,e),r&&r.resolveWith(i,[t,o,e]),d(n,i,"ajaxSuccess",[e,n,t]),b(o,e,n)}function x(t,e,n,r,i){var o=r.context;r.error.call(o,n,e,t),i&&i.rejectWith(o,[n,e,t]),d(r,o,"ajaxError",[n,r,t||e]),b(e,n,r)}function b(t,e,n){var r=n.context;n.complete.call(r,e,t),d(n,r,"ajaxComplete",[e,n]),g(n)}function E(t,e,n){if(n.dataFilter==j)return t;var r=n.context;return n.dataFilter.call(r,t,e)}function j(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==c?"html":t==f?"json":a.test(t)?"script":u.test(t)&&"xml")||"text"}function T(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function S(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=T(t.url,t.data),t.data=void 0)}function C(t,n,r,i){return e.isFunction(n)&&(i=r,r=n,n=void 0),e.isFunction(r)||(i=r,r=void 0),{url:t,data:n,success:r,dataType:i}}function O(t,n,r,i){var o,s=e.isArray(n),a=e.isPlainObject(n);e.each(n,function(n,u){o=e.type(u),i&&(n=r?i:i+"["+(a||"object"==o||"array"==o?n:"")+"]"),!i&&s?t.add(u.name,u.value):"array"==o||!r&&"object"==o?O(t,u,r,n):t.add(n,u)})}var i,o,n=+new Date,r=t.document,s=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,a=/^(?:text|application)\/javascript/i,u=/^(?:text|application)\/xml/i,f="application/json",c="text/html",l=/^\s*$/,h=r.createElement("a");h.href=t.location.href,e.active=0,e.ajaxJSONP=function(i,o){if(!("type"in i))return e.ajax(i);var c,p,s=i.jsonpCallback,a=(e.isFunction(s)?s():s)||"Zepto"+n++,u=r.createElement("script"),f=t[a],l=function(t){e(u).triggerHandler("error",t||"abort")},h={abort:l};return o&&o.promise(h),e(u).on("load error",function(n,r){clearTimeout(p),e(u).off().remove(),"error"!=n.type&&c?y(c[0],h,i,o):x(null,r||"error",h,i,o),t[a]=f,c&&e.isFunction(f)&&f(c[0]),f=c=void 0}),v(h,i)===!1?(l("abort"),h):(t[a]=function(){c=arguments},u.src=i.url.replace(/\?(.+)=\?/,"?$1="+a),r.head.appendChild(u),i.timeout>0&&(p=setTimeout(function(){l("timeout")},i.timeout)),h)},e.ajaxSettings={type:"GET",beforeSend:j,success:j,error:j,complete:j,context:null,global:!0,xhr:function(){return new t.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:f,xml:"application/xml, text/xml",html:c,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:j},e.ajax=function(n){var u,f,s=e.extend({},n||{}),a=e.Deferred&&e.Deferred();for(i in e.ajaxSettings)void 0===s[i]&&(s[i]=e.ajaxSettings[i]);m(s),s.crossDomain||(u=r.createElement("a"),u.href=s.url,u.href=u.href,s.crossDomain=h.protocol+"//"+h.host!=u.protocol+"//"+u.host),s.url||(s.url=t.location.toString()),(f=s.url.indexOf("#"))>-1&&(s.url=s.url.slice(0,f)),S(s);var c=s.dataType,p=/\?.+=\?/.test(s.url);if(p&&(c="jsonp"),s.cache!==!1&&(n&&n.cache===!0||"script"!=c&&"jsonp"!=c)||(s.url=T(s.url,"_="+Date.now())),"jsonp"==c)return p||(s.url=T(s.url,s.jsonp?s.jsonp+"=?":s.jsonp===!1?"":"callback=?")),e.ajaxJSONP(s,a);var P,d=s.accepts[c],g={},b=function(t,e){g[t.toLowerCase()]=[t,e]},C=/^([\w-]+:)\/\//.test(s.url)?RegExp.$1:t.location.protocol,N=s.xhr(),O=N.setRequestHeader;if(a&&a.promise(N),s.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",d||"*/*"),(d=s.mimeType||d)&&(d.indexOf(",")>-1&&(d=d.split(",",2)[0]),N.overrideMimeType&&N.overrideMimeType(d)),(s.contentType||s.contentType!==!1&&s.data&&"GET"!=s.type.toUpperCase())&&b("Content-Type",s.contentType||"application/x-www-form-urlencoded"),s.headers)for(o in s.headers)b(o,s.headers[o]);if(N.setRequestHeader=b,N.onreadystatechange=function(){if(4==N.readyState){N.onreadystatechange=j,clearTimeout(P);var t,n=!1;if(N.status>=200&&N.status<300||304==N.status||0==N.status&&"file:"==C){if(c=c||w(s.mimeType||N.getResponseHeader("content-type")),"arraybuffer"==N.responseType||"blob"==N.responseType)t=N.response;else{t=N.responseText;try{t=E(t,c,s),"script"==c?(1,eval)(t):"xml"==c?t=N.responseXML:"json"==c&&(t=l.test(t)?null:e.parseJSON(t))}catch(r){n=r}if(n)return x(n,"parsererror",N,s,a)}y(t,N,s,a)}else x(N.statusText||null,N.status?"error":"abort",N,s,a)}},v(N,s)===!1)return N.abort(),x(null,"abort",N,s,a),N;var A="async"in s?s.async:!0;if(N.open(s.type,s.url,A,s.username,s.password),s.xhrFields)for(o in s.xhrFields)N[o]=s.xhrFields[o];for(o in g)O.apply(N,g[o]);return s.timeout>0&&(P=setTimeout(function(){N.onreadystatechange=j,N.abort(),x(null,"timeout",N,s,a)},s.timeout)),N.send(s.data?s.data:null),N},e.get=function(){return e.ajax(C.apply(null,arguments))},e.post=function(){var t=C.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=C.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,r){if(!this.length)return this;var a,i=this,o=t.split(/\s/),u=C(t,n,r),f=u.success;return o.length>1&&(u.url=o[0],a=o[1]),u.success=function(t){i.html(a?e("<div>").html(t.replace(s,"")).find(a):t),f&&f.apply(i,arguments)},e.ajax(u),this};var N=encodeURIComponent;e.param=function(t,n){var r=[];return r.add=function(t,n){e.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(N(t)+"="+N(n))},O(r,t,n),r.join("&").replace(/%20/g,"+")}}(e),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(e),function(){try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;t.getComputedStyle=function(t,e){try{return n(t,e)}catch(r){return null}}}}(),e});
//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

;(function($){
  var touch = {},
    touchTimeout, tapTimeout, swipeTimeout, longTapTimeout,
    longTapDelay = 750,
    gesture

  function swipeDirection(x1, x2, y1, y2) {
    return Math.abs(x1 - x2) >=
      Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
  }

  function longTap() {
    longTapTimeout = null
    if (touch.last) {
      touch.el.trigger('longTap')
      touch = {}
    }
  }

  function cancelLongTap() {
    if (longTapTimeout) clearTimeout(longTapTimeout)
    longTapTimeout = null
  }

  function cancelAll() {
    if (touchTimeout) clearTimeout(touchTimeout)
    if (tapTimeout) clearTimeout(tapTimeout)
    if (swipeTimeout) clearTimeout(swipeTimeout)
    if (longTapTimeout) clearTimeout(longTapTimeout)
    touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null
    touch = {}
  }

  function isPrimaryTouch(event){
    return (event.pointerType == 'touch' ||
      event.pointerType == event.MSPOINTER_TYPE_TOUCH)
      && event.isPrimary
  }

  function isPointerEventType(e, type){
    return (e.type == 'pointer'+type ||
      e.type.toLowerCase() == 'mspointer'+type)
  }

  $(document).ready(function(){
    var now, delta, deltaX = 0, deltaY = 0, firstTouch, _isPointerType

    if ('MSGesture' in window) {
      gesture = new MSGesture()
      gesture.target = document.body
    }

    $(document)
      .bind('MSGestureEnd', function(e){
        var swipeDirectionFromVelocity =
          e.velocityX > 1 ? 'Right' : e.velocityX < -1 ? 'Left' : e.velocityY > 1 ? 'Down' : e.velocityY < -1 ? 'Up' : null
        if (swipeDirectionFromVelocity) {
          touch.el.trigger('swipe')
          touch.el.trigger('swipe'+ swipeDirectionFromVelocity)
        }
      })
      .on('touchstart MSPointerDown pointerdown', function(e){
        if((_isPointerType = isPointerEventType(e, 'down')) &&
          !isPrimaryTouch(e)) return
        firstTouch = _isPointerType ? e : e.touches[0]
        if (e.touches && e.touches.length === 1 && touch.x2) {
          // Clear out touch movement data if we have it sticking around
          // This can occur if touchcancel doesn't fire due to preventDefault, etc.
          touch.x2 = undefined
          touch.y2 = undefined
        }
        now = Date.now()
        delta = now - (touch.last || now)
        touch.el = $('tagName' in firstTouch.target ?
          firstTouch.target : firstTouch.target.parentNode)
        touchTimeout && clearTimeout(touchTimeout)
        touch.x1 = firstTouch.pageX
        touch.y1 = firstTouch.pageY
        if (delta > 0 && delta <= 250) touch.isDoubleTap = true
        touch.last = now
        longTapTimeout = setTimeout(longTap, longTapDelay)
        // adds the current touch contact for IE gesture recognition
        if (gesture && _isPointerType) gesture.addPointer(e.pointerId)
      })
      .on('touchmove MSPointerMove pointermove', function(e){
        if((_isPointerType = isPointerEventType(e, 'move')) &&
          !isPrimaryTouch(e)) return
        firstTouch = _isPointerType ? e : e.touches[0]
        cancelLongTap()
        touch.x2 = firstTouch.pageX
        touch.y2 = firstTouch.pageY

        deltaX += Math.abs(touch.x1 - touch.x2)
        deltaY += Math.abs(touch.y1 - touch.y2)
      })
      .on('touchend MSPointerUp pointerup', function(e){
        if((_isPointerType = isPointerEventType(e, 'up')) &&
          !isPrimaryTouch(e)) return
        cancelLongTap()

        // swipe
        if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) ||
            (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30))

          swipeTimeout = setTimeout(function() {
            if (touch.el){
              touch.el.trigger('swipe')
              touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)))
            }
            touch = {}
          }, 0)

        // normal tap
        else if ('last' in touch)
          // don't fire tap when delta position changed by more than 30 pixels,
          // for instance when moving to a point and back to origin
          if (deltaX < 30 && deltaY < 30) {
            // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
            // ('tap' fires before 'scroll')
            tapTimeout = setTimeout(function() {

              // trigger universal 'tap' with the option to cancelTouch()
              // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
              var event = $.Event('tap')
              event.cancelTouch = cancelAll
              // [by paper] fix -> "TypeError: 'undefined' is not an object (evaluating 'touch.el.trigger'), when double tap
              if (touch.el) touch.el.trigger(event)

              // trigger double tap immediately
              if (touch.isDoubleTap) {
                if (touch.el) touch.el.trigger('doubleTap')
                touch = {}
              }

              // trigger single tap after 250ms of inactivity
              else {
                touchTimeout = setTimeout(function(){
                  touchTimeout = null
                  if (touch.el) touch.el.trigger('singleTap')
                  touch = {}
                }, 250)
              }
            }, 0)
          } else {
            touch = {}
          }
          deltaX = deltaY = 0

      })
      // when the browser window loses focus,
      // for example when a modal dialog is shown,
      // cancel all ongoing events
      .on('touchcancel MSPointerCancel pointercancel', cancelAll)

    // scrolling the window indicates intention of the user
    // to scroll, not tap or swipe, so cancel all ongoing events
    $(window).on('scroll', cancelAll)
  })

  ;['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown',
    'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function(eventName){
    $.fn[eventName] = function(callback){ return this.on(eventName, callback) }
  })
})(Zepto)
;
(function ($) {
    var GesturePasswd= function (element, options) {
        this.$element	= $(element);
        this.options	= options;
        var that=this;
        this.pr=options.pointRadii;
        this.rr=options.roundRadii;
        this.o=options.space;
        this.color=options.color;
        //设置解锁界面的样式
        this.$element.css({
            "position":"relation",
            "width":this.options.width,
            "height":this.options.height,
            "background-color":options.backgroundColor,
            "overflow":"hidden",
            "cursor":"default"
        });

        if(! $(element).attr("id"))
            $(element).attr("id",(Math.random()*65535).toString());
        this.id="#"+$(element).attr("id");

        //用于生成坐标对象
        var Point = function (x,y){
            this.x  =x;this.y=y
        };
        //保存结果
        this.result="";
        //每个中心点坐标
        this.pList=[];

        this.sList=[];
        //this.tP=new Point(0,0);


        this.$element.append('<canvas id="gestureCanvas" class="main-c" width="'+options.width+'" height="'+options.height+'" >');
        //this.$element.append('<canvas class="main-p" width="'+options.width+'" height="'+options.height+'" >');
        this.$c= $(this.id+" .main-c")[0];
        this.$ctx=this.$c.getContext('2d');

        //绘制解锁界面
        this.initDraw=function(){
            this.$ctx.strokeStyle=this.color;
            this.$ctx.lineWidth=2;
            for(var j=0; j<3;j++ ){
                for(var i =0;i<3;i++){
                    this.$ctx.moveTo(this.o/2+this.rr*2+i*(this.o+2*this.rr),this.o/2+this.rr+j*(this.o+2*this.rr));
                    this.$ctx.arc(this.o/2+this.rr+i*(this.o+2*this.rr),this.o/2+this.rr+j*(this.o+2*this.rr),this.rr,0,2*Math.PI);

                    var tem=new Point(this.o/2+this.rr+i*(this.o+2*this.rr),this.o/2+this.rr+j*(this.o+2*this.rr));
                    if (that.pList.length < 9)
                        this.pList.push(tem);
                }
            }
            this.$ctx.stroke();
            this.initImg=this.$ctx.getImageData(0,0,this.options.width,this.options.height);
        };
        this.initDraw();



        //this.$ctx.stroke();
        this.isIn=function(x,y){

            for (var p in that.pList){
                //console.log(that.pList[p][x]);
                //  console.log(( Math.pow((x-that.pList[p][x]),2)+Math.pow((y-that.pList[p][y]),2)));
                if(( Math.pow((x-that.pList[p]["x"]),2)+Math.pow((y-that.pList[p]["y"]),2) ) < Math.pow(this.rr,2)){
                    return that.pList[p];
                }
            }
            return 0;
        };

        this.pointDraw =function(c){
            if (arguments.length>0){
                that.$ctx.strokeStyle=c;
                that.$ctx.fillStyle=c;
            }
            for (var p in that.sList){
                that.$ctx.moveTo(that.sList[p]["x"]+that.pr,that.sList[p]["y"]);
                that.$ctx.arc(that.sList[p]["x"],that.sList[p]["y"],that.pr,0,2*Math.PI);
                that.$ctx.fill();
            }
        };
        this.lineDraw=function (c){
            if (arguments.length>0){
                that.$ctx.strokeStyle=c;
                that.$ctx.fillStyle=c;
            }
            if(that.sList.length > 0){
                for( var p in that.sList){
                    if(p == 0){
                        //console.log(that.sList[p]["x"],that.sList[p]["y"]);
                        that.$ctx.moveTo(that.sList[p]["x"],that.sList[p]["y"]);
                        continue;
                    }
                    that.$ctx.lineTo(that.sList[p]["x"],that.sList[p]["y"]);
                    //console.log(that.sList[p]["x"],that.sList[p]["y"]);
                }

            }
        };

        this.allDraw =function(c){
            if (arguments.length>0){
                this.pointDraw(c);
                this.lineDraw(c);
                that.$ctx.stroke();
            }
            else {
                this.pointDraw();
                this.lineDraw();
            }

        };


        this.draw=function(x,y){
            that.$ctx.clearRect(0,0,that.options.width,that.options.height);
            that.$ctx.beginPath();
            //that.initDraw();
            that.$ctx.putImageData(this.initImg,0,0);
            that.$ctx.lineWidth = 5;
            that.pointDraw(that.options.lineColor);
            that.lineDraw(that.options.lineColor);
            that.$ctx.lineTo(x,y);
            that.$ctx.stroke();
        };

        //绘制提示路径
        //for(var i in this.pList){
            //console.log(this.pList[i])
            // this.draw(50, 50);
            // this.draw(50, 50);
        //}

        this.pointInList=function(poi,list){
            for (var p in list){
                if( poi["x"] == list[p]["x"] && poi["y"] == list[p]["y"]){
                    return ++p;
                }
            }
            return false;
        };

        this.touched=false;
        $(this.id).on ("mousedown touchstart",{that:that},function(e){
            e.data.that.touched=true;
        });
        $(this.id).on ("mouseup touchend",{that:that},function(e){
            e.data.that.touched=false;
            that.$ctx.clearRect(0,0,that.options.width,that.options.height);
            that.$ctx.beginPath();
            that.$ctx.putImageData(e.data.that.initImg,0,0);
            that.allDraw(that.options.lineColor);
            // that.$ctx.stroke();
            for(var p in that.sList){
                if(e.data.that.pointInList(that.sList[p], e.data.that.pList)){
                    e.data.that.result= e.data.that.result+(e.data.that.pointInList(that.sList[p], e.data.that.pList)).toString();
                }
            }
            //console.log(e.data.that.result)
            $(element).trigger("hasPasswd",that.result);
        });

        //
        $(this.id).on('touchmove mousemove',{that:that}, function(e) {
            //console.log(e)
            if(e.data.that.touched){
                var x= e.pageX || e.targetTouches[0].pageX ;
                var y = e.pageY || e.targetTouches[0].pageY;
                x=x-that.$element.offset().left;
                y=y-that.$element.offset().top;
                var p = e.data.that.isIn(x, y);
                //console.log(p)
                if(p != 0 ){
                    //if ( !e.data.that.pointInList(p,e.data.that.sList)){
                        //console.log(p)
                        e.data.that.sList.push(p);
                    //}
                }
                //console.log( e.data.that.sList);
                e.data.that.draw(x, y);
            }

        });



        $(this.id).on('passwdWrong',{that:that}, function(e) {
            that.$ctx.clearRect(0,0,that.options.width,that.options.height);
            that.$ctx.beginPath();
            that.$ctx.putImageData(that.initImg,0,0);
            that.allDraw("#cc1c21");
            that.result="";
            that.pList=[];
            that.sList=[];

            setTimeout(function(){
                that.$ctx.clearRect(0,0,that.options.width,that.options.height);
                that.$ctx.beginPath();
                that.initDraw()
            },500)

        });


        $(this.id).on('passwdRight',{that:that}, function(e) {
            that.$ctx.clearRect(0,0,that.options.width,that.options.height);
            that.$ctx.beginPath();
            that.$ctx.putImageData(that.initImg,0,0);
            that.allDraw("#00a254");
            that.result="";
            that.pList=[];
            that.sList=[];
            setTimeout(function(){
                that.$ctx.clearRect(0,0,that.options.width,that.options.height);
                that.$ctx.beginPath();
                that.initDraw()
            },500)
        });


    };


    GesturePasswd.DEFAULTS = {
        zindex :100,
        roundRadii:25,
        pointRadii:6,
        space:30,
        width:400,
        height:400,
        lineColor:"#00aec7",
        backgroundColor:"#252736",
        color:"#FFFFFF"
    };

    function Plugin(option,arg) {
        return this.each(function () {
            var $this   = $(this);
            var options = $.extend({}, GesturePasswd.DEFAULTS, typeof option == 'object' && option);
            var data    = $this.data('GesturePasswd');
            var action  = typeof option == 'string' ? option : NaN;
            if (!data) $this.data('danmu', (data = new GesturePasswd(this, options)));
            if (action)	data[action](arg);
        })
    }


    $.fn.GesturePasswd             = Plugin;
    $.fn.GesturePasswd.Constructor = GesturePasswd;

})(Zepto);

/**
* 水球图 wataerbubble
*/

(function($) {
    $.fn.waterbubble = function(options) {
            var config = $.extend({
                radius: 100,
                lineWidth: undefined,
                data: 0.5,
                waterColor: 'rgba(25, 139, 201, 1)',
                textColor: 'rgba(06, 85, 128, 0.8)',
                font: '',
                wave: true,
                txt: undefined,
                animation: true
            }, options);

            var canvas = this[0];
            config.lineWidth = config.lineWidth ? config.lineWidth : config.radius/24;

            var waterbubble = new Waterbubble(canvas, config);

            return this;
        }
        

        function Waterbubble (canvas, config) {
            this.refresh(canvas, config);
        }

        Waterbubble.prototype = {
            refresh: function (canvas, config) {
                canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
                this._init(canvas, config)
            },

            _init: function (canvas, config){
                var radius = config.radius;
                var lineWidth = config.lineWidth;

                canvas.width = radius*2 + lineWidth;
                canvas.height = radius*2 + lineWidth;

                this._buildShape(canvas, config);
            },

            _buildShape: function (canvas, config) {

                var ctx = canvas.getContext('2d');

                var gap = config.lineWidth*2;
                //raidus of water
                var r = config.radius - gap;
                var data = config.data;
                var lineWidth = config.lineWidth

                var waterColor = config.waterColor;
                var textColor = config.textColor;
                var font = config.font;

                var wave = config.wave

                // //the center of circle
                var x = config.radius + lineWidth/2;
                var y = config.radius + lineWidth/2;

                ctx.beginPath();
                
                ctx.arc(x, y, config.radius, 0, Math.PI*2);
                ctx.lineWidth = lineWidth;
                ctx.strokeStyle = waterColor;
                ctx.stroke();
                //if config animation true
                if (config.animation) {
                    this._animate(ctx, r, data, lineWidth, waterColor, x, y, wave)
                } else {
                    this._fillWater(ctx, r, data, lineWidth, waterColor, x, y, wave);
                }
                
                if (typeof config.txt == 'string'){
                    this._drawText(ctx, textColor, font, config.radius, data, x, y, config.txt);
                }

                return;
            },

            _fillWater: function (ctx, r, data, lineWidth, waterColor, x, y, wave) {
                ctx.beginPath();

                ctx.globalCompositeOperation = 'destination-over';

                //start co-ordinates
                var sy = r*2*(1 - data) + (y - r);
                var sx = x - Math.sqrt((r)*(r) - (y - sy)*(y - sy));
                //middle co-ordinates
                var mx = x;
                var my = sy;
                //end co-ordinates
                var ex = 2*mx - sx;
                var ey = sy;

                var extent; //extent

                if (data > 0.9 || data < 0.1 || !wave) {
                    extent = sy
                } else{
                    extent = sy - (mx -sx)/4
                }

                ctx.beginPath();
                
                ctx.moveTo(sx, sy)
                ctx.quadraticCurveTo((sx + mx)/2, extent, mx, my);
                ctx.quadraticCurveTo((mx + ex)/2, 2*sy - extent, ex, ey);

                var startAngle = -Math.asin((x - sy)/r)
                var endAngle = Math.PI - startAngle;

                ctx.arc(x, y, r, startAngle, endAngle, false)

                ctx.fillStyle = waterColor;
                ctx.fill()
            },

            _drawText: function (ctx, textColor, font, radius, data, x, y, txt) {
                ctx.globalCompositeOperation = 'source-over';

                var size = font ? font.replace( /\D+/g, '') : 0.4*radius;
                ctx.font = font ? font : 'bold ' + size + 'px Microsoft Yahei';

                txt = txt.length ? txt : data*100 + '%'

                var sy = y + size/2;
                var sx = x - ctx.measureText(txt).width/2

                ctx.fillStyle = textColor;
                ctx.fillText(txt, sx, sy)
            },

            _animate: function (ctx, r, data, lineWidth, waterColor, x, y, wave) {
                var datanow = {
                    value: 0
                };
                var requestAnimationFrame = window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (func) {
                    setTimeout(func, 16);
                };
                var self = this;
                var update = function () {
                    if (datanow.value < data - 0.01) {
                        datanow.value += (data - datanow.value)/15
                        self._runing = true;
                    } else {
                        self._runing = false;
                    }
                }
                var step = function () {
                    self._fillWater(ctx, r, datanow.value, lineWidth, waterColor, x, y, wave);
                    update();
                    if (self._runing) {
                        requestAnimationFrame(step);
                    }
                }
                step(ctx, r, datanow, lineWidth, waterColor, x, y, wave)
            }
        }
}(Zepto));
/*!art-template - Template Engine | http://aui.github.com/artTemplate/*/! function() {
    function a(a) {
        return a.replace(t, "").replace(u, ",").replace(v, "").replace(w, "").replace(x, "").split(y)
    }

    function b(a) {
        return "'" + a.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'"
    }

    function c(c, d) {
        function e(a) {
            return m += a.split(/\n/).length - 1, k && ( a = a.replace(/\s+/g, " ").replace(/<!--[\w\W]*?-->/g, "")), a && ( a = s[1] + b(a) + s[2] + "\n"), a
        }

        function f(b) {
            var c = m;
            if ( j ? b = j(b, d) : g && ( b = b.replace(/\n/g, function() {
                return m++, "$line=" + m + ";"
            })), 0 === b.indexOf("=")) {
                var e = l && !/^=[=#]/.test(b);
                if ( b = b.replace(/^=[=#]?|[\s;]*$/g, ""), e) {
                    var f = b.replace(/\s*\([^\)]+\)/, "");
                    n[f] || /^(include|print)$/.test(f) || ( b = "$escape(" + b + ")")
                } else
                    b = "$string(" + b + ")";
                b = s[1] + b + s[2]
            }
            return g && ( b = "$line=" + c + ";" + b), r(a(b), function(a) {
                if (a && !p[a]) {
                    var b;
                    b = "print" === a ? u : "include" === a ? v : n[a] ? "$utils." + a : o[a] ? "$helpers." + a : "$data." + a, w += a + "=" + b + ",", p[a] = !0
                }
            }), b + "\n"
        }

        var g = d.debug,
            h = d.openTag,
            i = d.closeTag,
            j = d.parser,
            k = d.compress,
            l = d.escape,
            m = 1,
            p = {
            $data : 1,
            $filename : 1,
            $utils : 1,
            $helpers : 1,
            $out : 1,
            $line : 1
        },
            q = "".trim,
            s = q ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
            t = q ? "$out+=text;return $out;" : "$out.push(text);",
            u = "function(){var text=''.concat.apply('',arguments);" + t + "}",
            v = "function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);" + t + "}",
            w = "'use strict';var $utils=this,$helpers=$utils.$helpers," + ( g ? "$line=0," : ""),
            x = s[0],
            y = "return new String(" + s[3] + ");";
        r(c.split(h), function(a) {
            a = a.split(i);
            var b = a[0],
                c = a[1];
            1 === a.length ? x += e(b) : (x += f(b), c && (x += e(c)))
        });
        var z = w + x + y;
        g && ( z = "try{" + z + "}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:" + b(c) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");
        try {
            var A = new Function("$data", "$filename", z);
            return A.prototype = n, A
        } catch(B) {
            throw B.temp = "function anonymous($data,$filename) {" + z + "}", B
        }
    }

    var d = function(a, b) {
        return "string" == typeof b ? q(b, {
            filename : a
        }) : g(a, b)
    };
    d.version = "3.0.0", d.config = function(a, b) {
        e[a] = b
    };
    var e = d.defaults = {
        openTag : "<%",
        closeTag : "%>",
        escape : !0,
        cache : !0,
        compress : !1,
        parser : null
    },
        f = d.cache = {};
    d.render = function(a, b) {
        return q(a, b)
    };
    var g = d.renderFile = function(a, b) {
        var c = d.get(a) || p({
            filename : a,
            name : "Render Error",
            message : "Template not found"
        });
        return b ? c(b) : c
    };
    d.get = function(a) {
        var b;
        if (f[a])
            b = f[a];
        else if ("object" == typeof document) {
            var c = document.getElementById(a);
            if (c) {
                var d = (c.value || c.innerHTML).replace(/^\s*|\s*$/g, "");
                b = q(d, {
                    filename : a
                })
            }
        }
        return b
    };
    var h = function(a, b) {
        return "string" != typeof a && ( b = typeof a, "number" === b ? a += "" : a = "function" === b ? h(a.call(a)) : ""), a
    },
        i = {
        "<" : "&#60;",
        ">" : "&#62;",
        '"' : "&#34;",
        "'" : "&#39;",
        "&" : "&#38;"
    },
        j = function(a) {
        return i[a]
    },
        k = function(a) {
        return h(a).replace(/&(?![\w#]+;)|[<>"']/g, j)
    },
        l = Array.isArray ||
    function(a) {
        return "[object Array]" === {}.toString.call(a)
    },
        m = function(a, b) {
        var c,
            d;
        if (l(a))
            for ( c = 0,
            d = a.length; d > c; c++)
                b.call(a, a[c], c, a);
        else
            for (c in a)
            b.call(a, a[c], c)
    },
        n = d.utils = {
        $helpers : {},
        $include : g,
        $string : h,
        $escape : k,
        $each : m
    };
    d.helper = function(a, b) {
        o[a] = b
    };
    var o = d.helpers = n.$helpers;
    d.onerror = function(a) {
        var b = "Template Error\n\n";
        for (var c in a)
        b += "<" + c + ">\n" + a[c] + "\n\n";
        "object" == typeof console && console.error(b)
    };
    var p = function(a) {
        return d.onerror(a),
        function() {
            return "{Template Error}"
        }

    },
        q = d.compile = function(a, b) {
        function d(c) {
            try {
                return new i(c, h) + ""
            } catch(d) {
                return b.debug ? p(d)() : (b.debug = !0, q(a,b)(c))
            }
        }

        b = b || {};
        for (var g in e)
        void 0 === b[g] && (b[g] = e[g]);
        var h = b.filename;
        try {
            var i = c(a, b)
        } catch(j) {
            return j.filename = h || "anonymous", j.name = "Syntax Error", p(j)
        }
        return d.prototype = i.prototype, d.toString = function() {
            return i.toString()
        }, h && b.cache && (f[h] = d), d
    },
        r = n.$each,
        s = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",
        t = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,
        u = /[^\w$]+/g,
        v = new RegExp(["\\b" + s.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
        w = /^\d[^,]*|,\d[^,]*/g,
        x = /^,+|,+$/g,
        y = /^$|,+/;
    e.openTag = "{{", e.closeTag = "}}";
    var z = function(a, b) {
        var c = b.split(":"),
            d = c.shift(),
            e = c.join(":") || "";
        return e && ( e = ", " + e), "$helpers." + d + "(" + a + e + ")"
    };
    e.parser = function(a) {
        a = a.replace(/^\s/, "");
        var b = a.split(" "),
            c = b.shift(),
            e = b.join(" ");
        switch(c) {
        case"if":
            a = "if(" + e + "){";
            break;
        case"else":
            b = "if" === b.shift() ? " if(" + b.join(" ") + ")" : "",
            a = "}else" + b + "{";
            break;
        case"/if":
            a = "}";
            break;
        case"each":
            var f = b[0] || "$data",
                g = b[1] || "as",
                h = b[2] || "$value",
                i = b[3] || "$index",
                j = h + "," + i;
            "as" !== g && ( f = "[]"),
            a = "$each(" + f + ",function(" + j + "){";
            break;
        case"/each":
            a = "});";
            break;
        case"echo":
            a = "print(" + e + ");";
            break;
        case"print":
        case"include":
            a = c + "(" + b.join(",") + ");";
            break;
        default:
            if (/^\s*\|\s*[\w\$]/.test(e)) {
                var k = !0;
                0 === a.indexOf("#") && ( a = a.substr(1),
                k = !1);
                for (var l = 0,
                    m = a.split("|"),
                    n = m.length,
                    o = m[l++]; n > l; l++)
                    o = z(o, m[l]);
                a = ( k ? "=" : "=#") + o
            } else
                a = d.helpers[c] ? "=#" + c + "(" + b.join(",") + ");" : "=" + a
        }
        return a
    }, "function" == typeof define ? define(function() {
        return d
    }) : "undefined" != typeof exports ? module.exports = d : this.template = d
}(); 
/**
 * Created by 独木桥先生 on 2016/11/3.
 */

 /**
  * 链接后面的参数
  */
 function getQueryString(name) {
     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
     var r = window.location.search.substr(1).match(reg);
     if (r != null) return unescape(r[2]); return null;
 }
;(function(){
    var $page = $('.page');
    var AudioPushMsg,
        AudioNewMsg,
        AudioLock,
        AudioMsg;
    var ua = navigator.userAgent.toLowerCase();
    var winW = window.screen.availWidth;
    if(ua.match(/MicroMessenger/i) == "micromessenger") {
        document.addEventListener("WeixinJSBridgeReady", function () {
            loadAll();
        }, false);
        getUserInfo();
    } else {
        loadAll();
    };

    var hasGetHeadImg = 0,
        headImg = 'css/image/icon-head_default.png';
    function getUserInfo(){
        $.ajax({
            type: 'GET',
            url: '/com/get_userinfo_by_code?code='+getQueryString('code'),
            dataType: 'json',
            timeout: 10000,
            success: function(data){
                //alert(JSON.stringify(data));
                if(data.status == 1){
                  hasGetHeadImg = 1;
                  headImg = data.data.headimgurl;
                  $('.my-nickname').html(data.nickname);
                  $('.my-head').css('background-image','url('+headImg+')');
                }else{

                }

            },
            error: function(xhr, type){
                alert('获取用户信息失败');
            }
        })
    }
    /**
     * 获取时间
     */
    function getDate(){
        var date = new Date();
        var month = date.getMonth()+1;
        var day = date.getDate();
        var week = date.getDay();
        var hour = date.getHours();
        var minute = date.getMinutes();
        minute = minute<9?'0'+minute:minute;
        hour = hour<9?'0'+hour:hour;
        week = ['日','一','二','三','四','五','六'][week];
        return {
            month:month,
            week:week,
            day:day,
            hour:hour,
            minute:minute
        }
    }
    function loadAll(){
        AudioPushMsg = document.getElementById('audioPushMsg');
        AudioNewMsg = document.getElementById('newMsg');
        AudioLock = document.getElementById('lock');
        AudioMsg = document.getElementById('AudioMsg');
        //AudioPushMsg.load();
        //AudioNewMsg.load();
        //AudioLock.load();
        var roundRadius = Math.floor(winW/8);
        loadResource(function(percent){
            $('#dowebok').waterbubble({
                txt: percent+'%',
                data: percent/100,
                lineWidth: 2,
                radius: roundRadius,
                //textColor: 'rgba(0, 0, 0, 0.8)'
            });
            if(percent == 100){
                setTimeout(function(){
                    $('#dowebok').addClass('hid');
                    var now = getDate();
                    $page.eq(0).removeClass('hid').find('.date').html(now.month+'月'+now.day+'日');
                },800);
            }
        });
    }
    $page.on('touchmove',function(e){
        var index = $(this).index();
        if(index==5 || index==7){

        }else{
            e.preventDefault();
        }
    });
    /**
     *显示下一页
     */
    function showNextPage(index){
        $page.eq(index).addClass('hid').next().removeClass('hid');
    }
    //前三个页面的交互
    $page.eq(0).on('swipeUp',function(){
        showNextPage(0);
        var now = getDate();
        $page.eq(1).find('.time').html(now.hour+':'+now.minute);
        $page.eq(1).find('.date').html(now.month+'月'+now.day+'日'+'  '+'星期'+now.week);
        var pushMsgObj = [
            {
                name:'福特翼搏',
                content:'请求添加你为好友',
                headClass:'icon-head6'
            },
            {
                name:'新福特翼虎',
                content:'请求添加你为好友',
                headClass:'icon-head3'
            },
            {
                name:'福特锐界',
                content:'请求添加你为好友',
                headClass:'icon-head4'
            }
        ];
        var pushNum = 0;
        var pushLen = pushMsgObj.length;
        function appendPushMsg(index){
            AudioPushMsg.play();
            $('#pushContent').append(template('pushMsg',pushMsgObj[index]));
        };
        var pushTimer = setInterval(function(){
            appendPushMsg(pushNum);
            if(pushNum == (pushLen-1)){
                clearInterval(pushTimer);
                $page.eq(1).on('swipeUp',function(){
                    showNextPage(1);
                    initGesture(function(){
                        AudioLock.play();
                        var now = getDate();
                        $page.eq(3).find('.date').html(now.hour+':'+now.minute);
                        showNextPage(2);
                    });
                });
            }
            pushNum++;
        },2200);
    });
    $('.newMessage').on('touchend',function(e){
        showNextPage(3);
        initChatManager();
    });
    function initChatManager(){
        var msgObj = [{
            headClass:'icon-head1',
            content:'',
            tpl:'messageAudio'
        },{
            headClass:'icon-head2',
            content:'说人话！',
            tpl:'message'
        },{
            headClass:'icon-head1',
            content:'好吧，我要去长安福特品牌体验馆。',
            tpl:'message'
        },{
            headClass:'icon-head3',
            content:'哇，我在蓝调天街，约吗？',
            tpl:'message'
        },{
            headClass:'icon-head4',
            content:'来呀来呀，我在VR无境空间出不来了， 快来救我。',
            tpl:'message'
        },{
            headClass:'icon-head5',
            content:'快使用你的洪荒之力',
            tpl:'message'
        },{
            headClass:'icon-head4',
            content:'蓝瘦，香菇。没人来救宝宝吗？来的 人都有蓝包领哦！',
            tpl:'message'
        },{
            headClass:'icon-head4',
            tpl:'messageImg'
        },{
            headClass:'icon-head3',
            content:'点开试试',
            tpl:'message'
        },{
            headClass:'icon-head_default',
            content:'去哪',
            tpl:'messageMe',
            hasGetHeadImg:hasGetHeadImg,
            headImg:headImg,
        },{
            headClass:'icon-head4',
            content:'更多惊喜快去朋友圈看吧!',
            tpl:'message',
            hand:true
        }];
        var chatContent = $('#chatContent');
        chatContent.on('touchmove',function(){
            //e.stopPropagation();
        });
        $('#textInput').on('change',function(){
            var val = $(this).val();
            if(val.length>0){
                $('.keyboard').removeClass('keyboard-hid');
                setTimeout(function(){
                    chatContent.scrollTop(3000);
                },1);
                $('.send-btn').addClass('send-btn-act').on('touchend',function(){
                    $(this).removeClass('send-btn-act').off('touchend');
                    $('#textInput').val('');
                    msgObj[msgNum]['content'] = val;
                    appendMsg();
                    $('.icon-head_default').css('background-image','url('+headImg+')');
                    //$('.keyboard').addClass('keyboard-hid');
                    msgNum++;
                    setTimeout(function(){
                        appendMsg();
                        $('#chatContent .message').last().on('touchend',function(){
                            $(this).find('.hand').addClass('hid');
                            showNextPage(4);
                            $('#circleNewMsg').on('touchend',function(){
                                showNextPage(5);
                                initdynamics();
                            })
                        });
                    },1000);
                })
            }
        })
        /**
         * 展示用户动态
         */
        function initdynamics(){
            var dynamics ={
                dynamics:[{
                    headClass:'icon-head3',
                    nick:'新福特翼虎',
                    title:'触动未来，2016长安福特品牌体验馆。',
                    type:'video',
                    time:'1分钟前',
                    video:'dist/video/video.mp4',
                    //videoH:Math.floor((window.screen.availWidth*32/1080))*18,
                    //videoW:Math.floor((window.screen.availWidth*32/1080))*24,
                    praises:['新蒙迪欧,','长安福特进无止境'],
                    comments:[{
                        nick:'福特翼搏',
                        content:'哎哟，不错哦。'
                    },{
                        nick:'福特锐界',
                        content:'完美'
                    }]
                },{
                    headClass:'icon-head4',
                    nick:'福特锐界',
                    title:'嘿！你们还认识我吗？快来和我开启一趟未来探秘之旅。',
                    type:'image',
                    images:['css/image/dynamic2_1.jpg','css/image/dynamic2_2.jpg','css/image/dynamic2_3.jpg','css/image/dynamic2_4.jpg','css/image/dynamic2_5.jpg','css/image/dynamic2_6.jpg','css/image/dynamic2_7.jpg','css/image/dynamic2_8.jpg','css/image/dynamic2_9.jpg'],
                    time:'3分钟前',
                    video:'',
                    praises:['新福特翼虎,','福特翼搏,','福特金牛座'],
                    comments:[{
                        nick:'全新福克斯',
                        content:'酷炫！我也想玩！'
                    },{
                        nick:'新福特翼虎',
                        content:'我也要变身成机械人！'
                    }]
                },{
                    headClass:'icon-head1',
                    nick:'全新福克斯',
                    title:'我们准备了多重大礼，等你来2016长安福特品牌体验馆感知科技，触动未来，赢取精美好礼！',
                    type:'image',
                    images:['css/image/dynamic3_1.jpg','css/image/dynamic3_2.jpg','css/image/dynamic3_3.jpg'],
                    time:'10分钟前',
                    video:'',
                    praises:['长安福特进无止境,','福特福睿斯,','新福特翼虎'],
                    comments:[{
                        nick:'福特金牛座',
                        content:'这么多礼品，看得我目瞪口呆。'
                    },{
                        nick:'福特锐界',
                        content:'一言不合就送礼。'
                    },{
                        nick:'新福特翼虎',
                        content:'没想到你是这样的福克斯。'
                    }]
                },{
                    headClass:'icon-head7',
                    nick:'新蒙迪欧',
                    title:'我们还准备了很多惊喜送给每一位体验者！现在转发本链接到朋友圈，把好消息传递给更多的朋友吧！凭转发朋友圈可以到2016长安福特品牌体验馆活动现场领取精美礼品一份！',
                    type:'image',
                    images:['css/image/dynamic4_1.jpg','css/image/dynamic4_2.jpg','css/image/dynamic4_3.jpg'],
                    time:'13分钟前',
                    video:'',
                    praises:['福特金牛座,','新蒙迪欧,','长安福特进无止境'],
                    comments:[{
                        nick:'全新福克斯',
                        content:'和我抢着送礼品，友谊的小船说翻就翻。'
                    },{
                        nick:'福特翼搏',
                        content:'宝宝也要礼品，宝宝去转发了。'
                    }]
                }]
            }
            $page.eq(6).append(template('dynamic',dynamics));
            $page.eq(6).on('scroll',function(){
                //console.log($(this)[0].offsetHeight)
                var $this =$(this),
                    viewH =$(this).height(),//可见高度
                    contentH =$(this).get(0).scrollHeight,//内容高度
                    scrollTop =$(this).scrollTop();//滚动高度
                //console.log(scrollTop,contentH,viewH)
                if(scrollTop >= contentH -viewH){ //到达底部100px时,加载新内容
                    $('.share-mask').removeClass('hid').off('click').on('click',function(){
                        $(this).addClass('hid');
                    });
                }
            })
            $('video').on('click',function(){

            })
        }
        /**
         *用户交互
         */
        function initEvent(){
            msgNum++;
            appendMsg();
            $('.message-img').on('touchend',function(){
                $(this).html('');
                $('.model').addClass('model-show');
                //关闭红包
                $('.model-close').on('touchend',function(){
                    $('.model').removeClass('model-show');
                    $('.message-img').off('touchend');
                    setTimeout(function(){
                        $('#textInput').val('HELLO,FORD！').trigger('change');
                    },1000);
                })
            })
        }
        //插入消息
        function appendMsg(){
            AudioNewMsg.play();
            //console.log(msgNum)
            chatContent.append(template(msgObj[msgNum]['tpl'], msgObj[msgNum]));
            chatContent.scrollTop(3000);
        }
        //自动播放声音
        var msgNum = 1;

        var AudioPlayNum = 0;
        setTimeout(function(){
            //if(AudioMsg.ended){
                if(AudioPlayNum == 0){
                    var msgTimer = window.setInterval(function(){
                        appendMsg();
                        if(msgObj[msgNum]['tpl'] == 'messageImg'){
                            initEvent();
                            window.clearInterval(msgTimer);
                        }
                        msgNum++;
                    },2200);
                    AudioPlayNum++;
                    //window.clearInterval(audioListener);
                }
           // }
        },4000);
        // AudioMsg.addEventListener('ended', function () {
        //
        // }, false);
        AudioMsg.play();
        chatContent.append(template(msgObj[0]['tpl'], msgObj[0]));
        $('.messageAudio').on('click',function(){
            AudioMsg.pause();
            AudioMsg.play();
        });

    }

    /**
     *加载页面资源,图片,音频
     */
    function loadResource(callback){
        var call = callback;
        var urlObj = [
            'F.png',
            'hand.png',
            'logo-round.png',
            'logo.png',
            'keyboard.png',
            'model.png',
            'hongbao.png',
            'page1-bg.jpg',
            'page2-bg.jpg',
            'page3-bg.jpg',
            'page4-bg.jpg',
            'page5-bg.jpg',
            'page6-bg.jpg',
            'friend-circle-bg.jpg',
            'share-mask.png',
            //'page7-bg.jpg',
            // 'newMsg.mp3',
            // 'pushMsg.mp3',
            // 'lock.wav'
        ];
        var len = urlObj.length,Aresource = [],hasLoadNum = 0;
        for(var i = 0; i < len; i++){
            var type = urlObj[i].split('.')[1];
            if(type == 'mp3'||type == 'wav'){
                Aresource[i] = new Audio();
                Aresource[i].src = 'dist/music/' + urlObj[i];
                Aresource[i].load();
                saveResourse(i,'audio');
            }else{
                Aresource[i] = new Image();
                Aresource[i].src = 'css/image/'+urlObj[i];
                saveResourse(i,'img');
            }

        }
        function saveResourse(index,type){
            if(type == 'img'){
                Aresource[index].onload = function(){
                    hasLoadNum ++ ;
                    var percent = Math.floor(hasLoadNum/len*100);
                    //console.log(percent)
                    call(percent);
                }
            }else{
                Aresource[index].onloadeddata = function(){
                    hasLoadNum ++ ;
                    //this.volume = 0;
                    //this.play();
                    var percent = Math.floor(hasLoadNum/len*100);
                    //console.log(percent)
                    call(percent);
                }
            }

        }
    }
    /**
     * 初始化手势解锁
     */
    function initGesture(callback){
        var winW = Math.floor((Math.min(window.innerWidth,window.innerHeight)/40))*30;
        $("#gesturepwd").GesturePasswd({
            backgroundColor:"rgba(0,0,0,0)",  //背景色
            color:"#FFFFFF",   //主要的控件颜色
            roundRadii:winW*5/48,    //大圆点的半径
            pointRadii:winW/40, //大圆点被选中时显示的圆心的半径
            space:winW/8,  //大圆点之间的间隙
            width:winW,   //整个组件的宽度
            height:winW,  //整个组件的高度
            lineColor:"#00aec7",   //用户划出线条的颜色
            zindex :100  //整个组件的css z-index属性
        });
        $("#gesturepwd").on("hasPasswd",function(e,passwd){
            var len = passwd.length;
            var realPwd = passwd[0];
            for(var i = 1; i < len; i++){
                if(passwd[i]!== passwd[i-1]) realPwd+=passwd[i];
            }
            //alert(realPwd)
            var Apwd = ['321456547','745654123','32147456'];
            var result = (Apwd.indexOf(realPwd)>=0)?true:false;
            if(result){
                $("#gesturepwd").trigger("passwdRight");
                setTimeout(function(){
                    //密码验证正确后的其他操作，打开新的页面等。。。
                    callback();
                },500);  //延迟半秒以照顾视觉效果
            }
            else{
                $("#gesturepwd").trigger("passwdWrong");
                //密码验证错误后的其他操作。。。
            }
        });
    }
    function getcity() {
        //var map = new BMap.Map("bdMapBox");
        var nowCity = new BMap.LocalCity();
        nowCity.get(bdGetPosition);
        function bdGetPosition(result){
            //console.log(result);
            var cityName = result.name; //当前的城市名
            $('.city').html(cityName);
            // $.ajax({
            //     url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURI(cityName)+'&output=JSON&ak=8q1fKGyOaINwMdblZKMlBO8u6Ii61KSn',
            //     type:'get',
            //     dataType:'json',
            //     success:function(data){
            //         console.log(data)
            //     }
            // })
        }
    }
    getcity();
})();

;(function(){
	var isLoad = false;
	var shareLink = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb49f0a0ee3b7b621&redirect_uri='+encodeURIComponent(window.location.href.split('?')[0])+'&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';
	var shareData = {
		imgUrl: 'http://text.dmooo.xyz/pages/h5/2017/0326/dist/css/image/friend-circle-bg.jpg', // 分享图标
		title:$('title').html()+'',   // 分享标题
		desc: $('meta[name=description]').attr('content')+'',   // 分享内容                                                                           // 分享描述
		link: shareLink,   // 分享链接
		type: '',
		dataUrl: '',
		success: function (res) {
				//openToast('分享成功',3000);
		},
		cancel: function (res) {

		}
	};
	checkCode();
	function checkCode(){
		var code = getQueryString('code');
		if(!code){
				//openToast('微信授权失败，请重新进入',2000);
				window.location.href = shareLink;
				return false;
		}
	}
	var WXENV = new (function (ticketUrl) {
		var self = this;
		self.ticketUrl = ticketUrl;
		self.nonceStr = 'youfankeji';
		self.timestamp = new Date().getTime()+'';
		self.ready = false;
		self.readyHandlers = [];
		self.shareData = shareData;
		self.debug = false;
		self.jsApiList =
				[
						'onMenuShareTimeline',
						'onMenuShareAppMessage',
						'onMenuShareQQ',
						'onMenuShareWeibo',
						'stopRecord',
						'onVoiceRecordEnd',
						'playVoice',
						'onVoicePlayEnd',
						'pauseVoice',
						'stopVoice',
						'uploadVoice',
						'downloadVoice',
						'hideOptionMenu',
						'showOptionMenu',
						'hideMenuItems',
						'showMenuItems',
						'hideAllNonBaseMenuItem',
						'showAllNonBaseMenuItem',
						'closeWindow',
						'scanQRCode'
				];
		self._updateShareData = function (data) {
				wx.onMenuShareTimeline({
						title: data.desc,
						link: data.link,
						imgUrl: data.imgUrl,
						success: data.success,
						cancel: data.cancel
				});

				wx.onMenuShareAppMessage({
						title: data.title,
						desc: data.desc,
						link: data.link,
						imgUrl: data.imgUrl,
						type: data.type,
						dataUrl: data.dataUrl,
						success: data.success,
						cancel: data.cancel
				});

				wx.onMenuShareQQ({
						title: data.title,
						desc: data.desc,
						link: data.link,
						imgUrl: data.imgUrl,
						success: data.success,
						cancel: data.cancel
				});

				wx.onMenuShareWeibo({
						title: data.title,
						desc: data.desc,
						link: data.link,
						imgUrl: data.imgUrl,
						success: data.success,
						cancel: data.cancel
				});
				//alert(JSON.stringify(data));
		};
		var js = document.getElementsByTagName('script')[0];
		self.onEnvReady = function () {
				var url = self.ticketUrl+'?nonceStr='+self.nonceStr+'&timestamp='+self.timestamp+'&url='+encodeURIComponent(window.location.href.split('#')[0]);
				$.ajax({
						type: 'GET',
						url: url,
						dataType: 'json',
						timeout: 10000,
						success: function(data){
							//alert(JSON.stringify(data));
							if(data.status == 1){
								var data = data.data;
								var config = {
										debug: self.debug,
										appId: data.appId,
										timestamp: data.timestamp,
										nonceStr: data.nonceStr,
										signature: data.signature,
										jsApiList: self.jsApiList
								};
								//alert('config>>>>'+JSON.stringify(config));
								wx.config(config);
							}else{
								//alert('JS SDK 授权失败');
							}
						},
						error: function(xhr, type){
								//alert('获取coonfig失败');
						}
				})
		};
		var wxjs = document.createElement('script');
		wxjs.addEventListener('load', function () {
				wx.ready(function () {
						//alert('js ready is ok');
						self._updateShareData(shareData);
						// wx.hideMenuItems({
						//     menuList: ['menuItem:profile', 'menuItem:addContact']
						// });
				});
				self.onEnvReady();
		});
		wxjs.src = 'http://res.wx.qq.com/open/js/jweixin-1.0.0.js';
		js.parentNode.insertBefore(wxjs, js.nextSibling);
	})('/com/get_ticket_getticket');
})();
