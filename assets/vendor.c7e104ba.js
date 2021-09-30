/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var e=Object.freeze({});function t(e){return null==e}function n(e){return null!=e}function r(e){return!0===e}function i(e){return"string"==typeof e||"number"==typeof e||"symbol"==typeof e||"boolean"==typeof e}function o(e){return null!==e&&"object"==typeof e}var s=Object.prototype.toString;function a(e){return"[object Object]"===s.call(e)}function l(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function c(e){return n(e)&&"function"==typeof e.then&&"function"==typeof e.catch}function u(e){return null==e?"":Array.isArray(e)||a(e)&&e.toString===s?JSON.stringify(e,null,2):String(e)}function h(e){var t=parseFloat(e);return isNaN(t)?e:t}function d(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}d("slot,component",!0);var f=d("key,ref,slot,slot-scope,is");function p(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function g(e,t){return m.call(e,t)}function v(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}var y=/-(\w)/g,O=v((function(e){return e.replace(y,(function(e,t){return t?t.toUpperCase():""}))})),b=v((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),w=/\B([A-Z])/g,x=v((function(e){return e.replace(w,"-$1").toLowerCase()}));var k=Function.prototype.bind?function(e,t){return e.bind(t)}:function(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n};function S(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function T(e,t){for(var n in t)e[n]=t[n];return e}function C(e){for(var t={},n=0;n<e.length;n++)e[n]&&T(t,e[n]);return t}function E(e,t,n){}var Q=function(e,t,n){return!1},I=function(e){return e};function A(e,t){if(e===t)return!0;var n=o(e),r=o(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),s=Array.isArray(t);if(i&&s)return e.length===t.length&&e.every((function(e,n){return A(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||s)return!1;var a=Object.keys(e),l=Object.keys(t);return a.length===l.length&&a.every((function(n){return A(e[n],t[n])}))}catch(c){return!1}}function P(e,t){for(var n=0;n<e.length;n++)if(A(e[n],t))return n;return-1}function $(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var R=["component","directive","filter"],L=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],D={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:Q,isReservedAttr:Q,isUnknownElement:Q,getTagNamespace:E,parsePlatformTagName:I,mustUseProp:Q,async:!0,_lifecycleHooks:L};function N(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function M(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var W=new RegExp("[^"+/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/.source+".$_\\d]");var j="__proto__"in{},F="undefined"!=typeof window,V="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,q=V&&WXEnvironment.platform.toLowerCase(),z=F&&window.navigator.userAgent.toLowerCase(),U=z&&/msie|trident/.test(z),B=z&&z.indexOf("msie 9.0")>0,Y=z&&z.indexOf("edge/")>0;z&&z.indexOf("android");var X=z&&/iphone|ipad|ipod|ios/.test(z)||"ios"===q;z&&/chrome\/\d+/.test(z),z&&/phantomjs/.test(z);var G,H=z&&z.match(/firefox\/(\d+)/),Z={}.watch,K=!1;if(F)try{var J={};Object.defineProperty(J,"passive",{get:function(){K=!0}}),window.addEventListener("test-passive",null,J)}catch(l6){}var ee=function(){return void 0===G&&(G=!F&&!V&&"undefined"!=typeof global&&(global.process&&"server"===global.process.env.VUE_ENV)),G},te=F&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ne(e){return"function"==typeof e&&/native code/.test(e.toString())}var re,ie="undefined"!=typeof Symbol&&ne(Symbol)&&"undefined"!=typeof Reflect&&ne(Reflect.ownKeys);re="undefined"!=typeof Set&&ne(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var oe=E,se=0,ae=function(){this.id=se++,this.subs=[]};ae.prototype.addSub=function(e){this.subs.push(e)},ae.prototype.removeSub=function(e){p(this.subs,e)},ae.prototype.depend=function(){ae.target&&ae.target.addDep(this)},ae.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},ae.target=null;var le=[];function ce(e){le.push(e),ae.target=e}function ue(){le.pop(),ae.target=le[le.length-1]}var he=function(e,t,n,r,i,o,s,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},de={child:{configurable:!0}};de.child.get=function(){return this.componentInstance},Object.defineProperties(he.prototype,de);var fe=function(e){void 0===e&&(e="");var t=new he;return t.text=e,t.isComment=!0,t};function pe(e){return new he(void 0,void 0,void 0,String(e))}function me(e){var t=new he(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var ge=Array.prototype,ve=Object.create(ge);["push","pop","shift","unshift","splice","sort","reverse"].forEach((function(e){var t=ge[e];M(ve,e,(function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,o=t.apply(this,n),s=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&s.observeArray(i),s.dep.notify(),o}))}));var ye=Object.getOwnPropertyNames(ve),Oe=!0;function be(e){Oe=e}var we=function(e){var t;this.value=e,this.dep=new ae,this.vmCount=0,M(e,"__ob__",this),Array.isArray(e)?(j?(t=ve,e.__proto__=t):function(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];M(e,o,t[o])}}(e,ve,ye),this.observeArray(e)):this.walk(e)};function xe(e,t){var n;if(o(e)&&!(e instanceof he))return g(e,"__ob__")&&e.__ob__ instanceof we?n=e.__ob__:Oe&&!ee()&&(Array.isArray(e)||a(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new we(e)),t&&n&&n.vmCount++,n}function ke(e,t,n,r,i){var o=new ae,s=Object.getOwnPropertyDescriptor(e,t);if(!s||!1!==s.configurable){var a=s&&s.get,l=s&&s.set;a&&!l||2!==arguments.length||(n=e[t]);var c=!i&&xe(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return ae.target&&(o.depend(),c&&(c.dep.depend(),Array.isArray(t)&&Te(t))),t},set:function(t){var r=a?a.call(e):n;t===r||t!=t&&r!=r||a&&!l||(l?l.call(e,t):n=t,c=!i&&xe(t),o.notify())}})}}function Se(e,t,n){if(Array.isArray(e)&&l(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(ke(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function _e(e,t){if(Array.isArray(e)&&l(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||g(e,t)&&(delete e[t],n&&n.dep.notify())}}function Te(e){for(var t=void 0,n=0,r=e.length;n<r;n++)(t=e[n])&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&Te(t)}we.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)ke(e,t[n])},we.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)xe(e[t])};var Ce=D.optionMergeStrategies;function Ee(e,t){if(!t)return e;for(var n,r,i,o=ie?Reflect.ownKeys(t):Object.keys(t),s=0;s<o.length;s++)"__ob__"!==(n=o[s])&&(r=e[n],i=t[n],g(e,n)?r!==i&&a(r)&&a(i)&&Ee(r,i):Se(e,n,i));return e}function Qe(e,t,n){return n?function(){var r="function"==typeof t?t.call(n,n):t,i="function"==typeof e?e.call(n,n):e;return r?Ee(r,i):i}:t?e?function(){return Ee("function"==typeof t?t.call(this,this):t,"function"==typeof e?e.call(this,this):e)}:t:e}function Ie(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(n):n}function Ae(e,t,n,r){var i=Object.create(e||null);return t?T(i,t):i}Ce.data=function(e,t,n){return n?Qe(e,t,n):t&&"function"!=typeof t?e:Qe(e,t)},L.forEach((function(e){Ce[e]=Ie})),R.forEach((function(e){Ce[e+"s"]=Ae})),Ce.watch=function(e,t,n,r){if(e===Z&&(e=void 0),t===Z&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};for(var o in T(i,e),t){var s=i[o],a=t[o];s&&!Array.isArray(s)&&(s=[s]),i[o]=s?s.concat(a):Array.isArray(a)?a:[a]}return i},Ce.props=Ce.methods=Ce.inject=Ce.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return T(i,e),t&&T(i,t),i},Ce.provide=Qe;var Pe=function(e,t){return void 0===t?e:t};function $e(e,t,n){if("function"==typeof t&&(t=t.options),function(e,t){var n=e.props;if(n){var r,i,o={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(o[O(i)]={type:null});else if(a(n))for(var s in n)i=n[s],o[O(s)]=a(i)?i:{type:i};e.props=o}}(t),function(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(a(n))for(var o in n){var s=n[o];r[o]=a(s)?T({from:o},s):{from:s}}}}(t),function(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}(t),!t._base&&(t.extends&&(e=$e(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=$e(e,t.mixins[r],n);var o,s={};for(o in e)l(o);for(o in t)g(e,o)||l(o);function l(r){var i=Ce[r]||Pe;s[r]=i(e[r],t[r],n,r)}return s}function Re(e,t,n,r){if("string"==typeof n){var i=e[t];if(g(i,n))return i[n];var o=O(n);if(g(i,o))return i[o];var s=b(o);return g(i,s)?i[s]:i[n]||i[o]||i[s]}}function Le(e,t,n,r){var i=t[e],o=!g(n,e),s=n[e],a=We(Boolean,i.type);if(a>-1)if(o&&!g(i,"default"))s=!1;else if(""===s||s===x(e)){var l=We(String,i.type);(l<0||a<l)&&(s=!0)}if(void 0===s){s=function(e,t,n){if(!g(t,"default"))return;var r=t.default;if(e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n])return e._props[n];return"function"==typeof r&&"Function"!==Ne(t.type)?r.call(e):r}(r,i,e);var c=Oe;be(!0),xe(s),be(c)}return s}var De=/^\s*function (\w+)/;function Ne(e){var t=e&&e.toString().match(De);return t?t[1]:""}function Me(e,t){return Ne(e)===Ne(t)}function We(e,t){if(!Array.isArray(t))return Me(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(Me(t[n],e))return n;return-1}function je(e,t,n){ce();try{if(t)for(var r=t;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,e,t,n))return}catch(l6){Ve(l6,r,"errorCaptured hook")}}Ve(e,t,n)}finally{ue()}}function Fe(e,t,n,r,i){var o;try{(o=n?e.apply(t,n):e.call(t))&&!o._isVue&&c(o)&&!o._handled&&(o.catch((function(e){return je(e,r,i+" (Promise/async)")})),o._handled=!0)}catch(l6){je(l6,r,i)}return o}function Ve(e,t,n){if(D.errorHandler)try{return D.errorHandler.call(null,e,t,n)}catch(l6){l6!==e&&qe(l6)}qe(e)}function qe(e,t,n){if(!F&&!V||"undefined"==typeof console)throw e;console.error(e)}var ze,Ue=!1,Be=[],Ye=!1;function Xe(){Ye=!1;var e=Be.slice(0);Be.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!=typeof Promise&&ne(Promise)){var Ge=Promise.resolve();ze=function(){Ge.then(Xe),X&&setTimeout(E)},Ue=!0}else if(U||"undefined"==typeof MutationObserver||!ne(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ze="undefined"!=typeof setImmediate&&ne(setImmediate)?function(){setImmediate(Xe)}:function(){setTimeout(Xe,0)};else{var He=1,Ze=new MutationObserver(Xe),Ke=document.createTextNode(String(He));Ze.observe(Ke,{characterData:!0}),ze=function(){He=(He+1)%2,Ke.data=String(He)},Ue=!0}function Je(e,t){var n;if(Be.push((function(){if(e)try{e.call(t)}catch(l6){je(l6,t,"nextTick")}else n&&n(t)})),Ye||(Ye=!0,ze()),!e&&"undefined"!=typeof Promise)return new Promise((function(e){n=e}))}var et=new re;function tt(e){nt(e,et),et.clear()}function nt(e,t){var n,r,i=Array.isArray(e);if(!(!i&&!o(e)||Object.isFrozen(e)||e instanceof he)){if(e.__ob__){var s=e.__ob__.dep.id;if(t.has(s))return;t.add(s)}if(i)for(n=e.length;n--;)nt(e[n],t);else for(n=(r=Object.keys(e)).length;n--;)nt(e[r[n]],t)}}var rt=v((function(e){var t="&"===e.charAt(0),n="~"===(e=t?e.slice(1):e).charAt(0),r="!"===(e=n?e.slice(1):e).charAt(0);return{name:e=r?e.slice(1):e,once:n,capture:r,passive:t}}));function it(e,t){function n(){var e=arguments,r=n.fns;if(!Array.isArray(r))return Fe(r,null,arguments,t,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)Fe(i[o],null,e,t,"v-on handler")}return n.fns=e,n}function ot(e,n,i,o,s,a){var l,c,u,h;for(l in e)c=e[l],u=n[l],h=rt(l),t(c)||(t(u)?(t(c.fns)&&(c=e[l]=it(c,a)),r(h.once)&&(c=e[l]=s(h.name,c,h.capture)),i(h.name,c,h.capture,h.passive,h.params)):c!==u&&(u.fns=c,e[l]=u));for(l in n)t(e[l])&&o((h=rt(l)).name,n[l],h.capture)}function st(e,i,o){var s;e instanceof he&&(e=e.data.hook||(e.data.hook={}));var a=e[i];function l(){o.apply(this,arguments),p(s.fns,l)}t(a)?s=it([l]):n(a.fns)&&r(a.merged)?(s=a).fns.push(l):s=it([a,l]),s.merged=!0,e[i]=s}function at(e,t,r,i,o){if(n(t)){if(g(t,r))return e[r]=t[r],o||delete t[r],!0;if(g(t,i))return e[r]=t[i],o||delete t[i],!0}return!1}function lt(e){return i(e)?[pe(e)]:Array.isArray(e)?ut(e):void 0}function ct(e){return n(e)&&n(e.text)&&!1===e.isComment}function ut(e,o){var s,a,l,c,u=[];for(s=0;s<e.length;s++)t(a=e[s])||"boolean"==typeof a||(c=u[l=u.length-1],Array.isArray(a)?a.length>0&&(ct((a=ut(a,(o||"")+"_"+s))[0])&&ct(c)&&(u[l]=pe(c.text+a[0].text),a.shift()),u.push.apply(u,a)):i(a)?ct(c)?u[l]=pe(c.text+a):""!==a&&u.push(pe(a)):ct(a)&&ct(c)?u[l]=pe(c.text+a.text):(r(e._isVList)&&n(a.tag)&&t(a.key)&&n(o)&&(a.key="__vlist"+o+"_"+s+"__"),u.push(a)));return u}function ht(e,t){if(e){for(var n=Object.create(null),r=ie?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){for(var s=e[o].from,a=t;a;){if(a._provided&&g(a._provided,s)){n[o]=a._provided[s];break}a=a.$parent}if(!a&&"default"in e[o]){var l=e[o].default;n[o]="function"==typeof l?l.call(t):l}}}return n}}function dt(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var o=e[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==t&&o.fnContext!==t||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,l=n[a]||(n[a]=[]);"template"===o.tag?l.push.apply(l,o.children||[]):l.push(o)}}for(var c in n)n[c].every(ft)&&delete n[c];return n}function ft(e){return e.isComment&&!e.asyncFactory||" "===e.text}function pt(e){return e.isComment&&e.asyncFactory}function mt(t,n,r){var i,o=Object.keys(n).length>0,s=t?!!t.$stable:!o,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(s&&r&&r!==e&&a===r.$key&&!o&&!r.$hasNormal)return r;for(var l in i={},t)t[l]&&"$"!==l[0]&&(i[l]=gt(n,l,t[l]))}else i={};for(var c in n)c in i||(i[c]=vt(n,c));return t&&Object.isExtensible(t)&&(t._normalized=i),M(i,"$stable",s),M(i,"$key",a),M(i,"$hasNormal",o),i}function gt(e,t,n){var r=function(){var e=arguments.length?n.apply(null,arguments):n({}),t=(e=e&&"object"==typeof e&&!Array.isArray(e)?[e]:lt(e))&&e[0];return e&&(!t||1===e.length&&t.isComment&&!pt(t))?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:r,enumerable:!0,configurable:!0}),r}function vt(e,t){return function(){return e[t]}}function yt(e,t){var r,i,s,a,l;if(Array.isArray(e)||"string"==typeof e)for(r=new Array(e.length),i=0,s=e.length;i<s;i++)r[i]=t(e[i],i);else if("number"==typeof e)for(r=new Array(e),i=0;i<e;i++)r[i]=t(i+1,i);else if(o(e))if(ie&&e[Symbol.iterator]){r=[];for(var c=e[Symbol.iterator](),u=c.next();!u.done;)r.push(t(u.value,r.length)),u=c.next()}else for(a=Object.keys(e),r=new Array(a.length),i=0,s=a.length;i<s;i++)l=a[i],r[i]=t(e[l],l,i);return n(r)||(r=[]),r._isVList=!0,r}function Ot(e,t,n,r){var i,o=this.$scopedSlots[e];o?(n=n||{},r&&(n=T(T({},r),n)),i=o(n)||("function"==typeof t?t():t)):i=this.$slots[e]||("function"==typeof t?t():t);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function bt(e){return Re(this.$options,"filters",e)||I}function wt(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function xt(e,t,n,r,i){var o=D.keyCodes[t]||n;return i&&r&&!D.keyCodes[t]?wt(i,r):o?wt(o,e):r?x(r)!==t:void 0===e}function kt(e,t,n,r,i){if(n)if(o(n)){var s;Array.isArray(n)&&(n=C(n));var a=function(o){if("class"===o||"style"===o||f(o))s=e;else{var a=e.attrs&&e.attrs.type;s=r||D.mustUseProp(t,a,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var l=O(o),c=x(o);l in s||c in s||(s[o]=n[o],i&&((e.on||(e.on={}))["update:"+o]=function(e){n[o]=e}))};for(var l in n)a(l)}else;return e}function St(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||Tt(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),"__static__"+e,!1),r}function _t(e,t,n){return Tt(e,"__once__"+t+(n?"_"+n:""),!0),e}function Tt(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&Ct(e[r],t+"_"+r,n);else Ct(e,t,n)}function Ct(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function Et(e,t){if(t)if(a(t)){var n=e.on=e.on?T({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function Qt(e,t,n,r){t=t||{$stable:!n};for(var i=0;i<e.length;i++){var o=e[i];Array.isArray(o)?Qt(o,t,n):o&&(o.proxy&&(o.fn.proxy=!0),t[o.key]=o.fn)}return r&&(t.$key=r),t}function It(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"==typeof r&&r&&(e[t[n]]=t[n+1])}return e}function At(e,t){return"string"==typeof e?t+e:e}function Pt(e){e._o=_t,e._n=h,e._s=u,e._l=yt,e._t=Ot,e._q=A,e._i=P,e._m=St,e._f=bt,e._k=xt,e._b=kt,e._v=pe,e._e=fe,e._u=Qt,e._g=Et,e._d=It,e._p=At}function $t(t,n,i,o,s){var a,l=this,c=s.options;g(o,"_uid")?(a=Object.create(o))._original=o:(a=o,o=o._original);var u=r(c._compiled),h=!u;this.data=t,this.props=n,this.children=i,this.parent=o,this.listeners=t.on||e,this.injections=ht(c.inject,o),this.slots=function(){return l.$slots||mt(t.scopedSlots,l.$slots=dt(i,o)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return mt(t.scopedSlots,this.slots())}}),u&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=mt(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(e,t,n,r){var i=jt(a,e,t,n,r,h);return i&&!Array.isArray(i)&&(i.fnScopeId=c._scopeId,i.fnContext=o),i}:this._c=function(e,t,n,r){return jt(a,e,t,n,r,h)}}function Rt(e,t,n,r,i){var o=me(e);return o.fnContext=n,o.fnOptions=r,t.slot&&((o.data||(o.data={})).slot=t.slot),o}function Lt(e,t){for(var n in t)e[O(n)]=t[n]}Pt($t.prototype);var Dt={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var r=e;Dt.prepatch(r,r)}else{(e.componentInstance=function(e,t){var r={_isComponent:!0,_parentVnode:e,parent:t},i=e.data.inlineTemplate;n(i)&&(r.render=i.render,r.staticRenderFns=i.staticRenderFns);return new e.componentOptions.Ctor(r)}(e,Ht)).$mount(t?e.elm:void 0,t)}},prepatch:function(t,n){var r=n.componentOptions;!function(t,n,r,i,o){var s=i.data.scopedSlots,a=t.$scopedSlots,l=!!(s&&!s.$stable||a!==e&&!a.$stable||s&&t.$scopedSlots.$key!==s.$key||!s&&t.$scopedSlots.$key),c=!!(o||t.$options._renderChildren||l);t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i);if(t.$options._renderChildren=o,t.$attrs=i.data.attrs||e,t.$listeners=r||e,n&&t.$options.props){be(!1);for(var u=t._props,h=t.$options._propKeys||[],d=0;d<h.length;d++){var f=h[d],p=t.$options.props;u[f]=Le(f,p,n,t)}be(!0),t.$options.propsData=n}r=r||e;var m=t.$options._parentListeners;t.$options._parentListeners=r,Gt(t,r,m),c&&(t.$slots=dt(o,i.context),t.$forceUpdate())}(n.componentInstance=t.componentInstance,r.propsData,r.listeners,n,r.children)},insert:function(e){var t,n=e.context,r=e.componentInstance;r._isMounted||(r._isMounted=!0,tn(r,"mounted")),e.data.keepAlive&&(n._isMounted?((t=r)._inactive=!1,rn.push(t)):Jt(r,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?en(t,!0):t.$destroy())}},Nt=Object.keys(Dt);function Mt(i,s,a,l,u){if(!t(i)){var h=a.$options._base;if(o(i)&&(i=h.extend(i)),"function"==typeof i){var d;if(t(i.cid)&&void 0===(i=function(e,i){if(r(e.error)&&n(e.errorComp))return e.errorComp;if(n(e.resolved))return e.resolved;var s=qt;s&&n(e.owners)&&-1===e.owners.indexOf(s)&&e.owners.push(s);if(r(e.loading)&&n(e.loadingComp))return e.loadingComp;if(s&&!n(e.owners)){var a=e.owners=[s],l=!0,u=null,h=null;s.$on("hook:destroyed",(function(){return p(a,s)}));var d=function(e){for(var t=0,n=a.length;t<n;t++)a[t].$forceUpdate();e&&(a.length=0,null!==u&&(clearTimeout(u),u=null),null!==h&&(clearTimeout(h),h=null))},f=$((function(t){e.resolved=zt(t,i),l?a.length=0:d(!0)})),m=$((function(t){n(e.errorComp)&&(e.error=!0,d(!0))})),g=e(f,m);return o(g)&&(c(g)?t(e.resolved)&&g.then(f,m):c(g.component)&&(g.component.then(f,m),n(g.error)&&(e.errorComp=zt(g.error,i)),n(g.loading)&&(e.loadingComp=zt(g.loading,i),0===g.delay?e.loading=!0:u=setTimeout((function(){u=null,t(e.resolved)&&t(e.error)&&(e.loading=!0,d(!1))}),g.delay||200)),n(g.timeout)&&(h=setTimeout((function(){h=null,t(e.resolved)&&m(null)}),g.timeout)))),l=!1,e.loading?e.loadingComp:e.resolved}}(d=i,h)))return function(e,t,n,r,i){var o=fe();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}(d,s,a,l,u);s=s||{},Sn(i),n(s.model)&&function(e,t){var r=e.model&&e.model.prop||"value",i=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[r]=t.model.value;var o=t.on||(t.on={}),s=o[i],a=t.model.callback;n(s)?(Array.isArray(s)?-1===s.indexOf(a):s!==a)&&(o[i]=[a].concat(s)):o[i]=a}(i.options,s);var f=function(e,r,i){var o=r.options.props;if(!t(o)){var s={},a=e.attrs,l=e.props;if(n(a)||n(l))for(var c in o){var u=x(c);at(s,l,c,u,!0)||at(s,a,c,u,!1)}return s}}(s,i);if(r(i.options.functional))return function(t,r,i,o,s){var a=t.options,l={},c=a.props;if(n(c))for(var u in c)l[u]=Le(u,c,r||e);else n(i.attrs)&&Lt(l,i.attrs),n(i.props)&&Lt(l,i.props);var h=new $t(i,l,s,o,t),d=a.render.call(null,h._c,h);if(d instanceof he)return Rt(d,i,h.parent,a);if(Array.isArray(d)){for(var f=lt(d)||[],p=new Array(f.length),m=0;m<f.length;m++)p[m]=Rt(f[m],i,h.parent,a);return p}}(i,f,s,a,l);var m=s.on;if(s.on=s.nativeOn,r(i.options.abstract)){var g=s.slot;s={},g&&(s.slot=g)}!function(e){for(var t=e.hook||(e.hook={}),n=0;n<Nt.length;n++){var r=Nt[n],i=t[r],o=Dt[r];i===o||i&&i._merged||(t[r]=i?Wt(o,i):o)}}(s);var v=i.options.name||u;return new he("vue-component-"+i.cid+(v?"-"+v:""),s,void 0,void 0,void 0,a,{Ctor:i,propsData:f,listeners:m,tag:u,children:l},d)}}}function Wt(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}function jt(e,t,s,a,l,c){return(Array.isArray(s)||i(s))&&(l=a,a=s,s=void 0),r(c)&&(l=2),function(e,t,r,i,s){if(n(r)&&n(r.__ob__))return fe();n(r)&&n(r.is)&&(t=r.is);if(!t)return fe();Array.isArray(i)&&"function"==typeof i[0]&&((r=r||{}).scopedSlots={default:i[0]},i.length=0);2===s?i=lt(i):1===s&&(i=function(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}(i));var a,l;if("string"==typeof t){var c;l=e.$vnode&&e.$vnode.ns||D.getTagNamespace(t),a=D.isReservedTag(t)?new he(D.parsePlatformTagName(t),r,i,void 0,void 0,e):r&&r.pre||!n(c=Re(e.$options,"components",t))?new he(t,r,i,void 0,void 0,e):Mt(c,r,e,i,t)}else a=Mt(t,r,e,i);return Array.isArray(a)?a:n(a)?(n(l)&&Ft(a,l),n(r)&&function(e){o(e.style)&&tt(e.style);o(e.class)&&tt(e.class)}(r),a):fe()}(e,t,s,a,l)}function Ft(e,i,o){if(e.ns=i,"foreignObject"===e.tag&&(i=void 0,o=!0),n(e.children))for(var s=0,a=e.children.length;s<a;s++){var l=e.children[s];n(l.tag)&&(t(l.ns)||r(o)&&"svg"!==l.tag)&&Ft(l,i,o)}}var Vt,qt=null;function zt(e,t){return(e.__esModule||ie&&"Module"===e[Symbol.toStringTag])&&(e=e.default),o(e)?t.extend(e):e}function Ut(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var r=e[t];if(n(r)&&(n(r.componentOptions)||pt(r)))return r}}function Bt(e,t){Vt.$on(e,t)}function Yt(e,t){Vt.$off(e,t)}function Xt(e,t){var n=Vt;return function r(){var i=t.apply(null,arguments);null!==i&&n.$off(e,r)}}function Gt(e,t,n){Vt=e,ot(t,n||{},Bt,Yt,Xt,e),Vt=void 0}var Ht=null;function Zt(e){var t=Ht;return Ht=e,function(){Ht=t}}function Kt(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function Jt(e,t){if(t){if(e._directInactive=!1,Kt(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Jt(e.$children[n]);tn(e,"activated")}}function en(e,t){if(!(t&&(e._directInactive=!0,Kt(e))||e._inactive)){e._inactive=!0;for(var n=0;n<e.$children.length;n++)en(e.$children[n]);tn(e,"deactivated")}}function tn(e,t){ce();var n=e.$options[t],r=t+" hook";if(n)for(var i=0,o=n.length;i<o;i++)Fe(n[i],e,null,e,r);e._hasHookEvent&&e.$emit("hook:"+t),ue()}var nn=[],rn=[],on={},sn=!1,an=!1,ln=0;var cn=0,un=Date.now;if(F&&!U){var hn=window.performance;hn&&"function"==typeof hn.now&&un()>document.createEvent("Event").timeStamp&&(un=function(){return hn.now()})}function dn(){var e,t;for(cn=un(),an=!0,nn.sort((function(e,t){return e.id-t.id})),ln=0;ln<nn.length;ln++)(e=nn[ln]).before&&e.before(),t=e.id,on[t]=null,e.run();var n=rn.slice(),r=nn.slice();ln=nn.length=rn.length=0,on={},sn=an=!1,function(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Jt(e[t],!0)}(n),function(e){var t=e.length;for(;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&tn(r,"updated")}}(r),te&&D.devtools&&te.emit("flush")}var fn=0,pn=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++fn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new re,this.newDepIds=new re,this.expression="","function"==typeof t?this.getter=t:(this.getter=function(e){if(!W.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}(t),this.getter||(this.getter=E)),this.value=this.lazy?void 0:this.get()};pn.prototype.get=function(){var e;ce(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(l6){if(!this.user)throw l6;je(l6,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&tt(e),ue(),this.cleanupDeps()}return e},pn.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},pn.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},pn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(e){var t=e.id;if(null==on[t]){if(on[t]=!0,an){for(var n=nn.length-1;n>ln&&nn[n].id>e.id;)n--;nn.splice(n+1,0,e)}else nn.push(e);sn||(sn=!0,Je(dn))}}(this)},pn.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||o(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'+this.expression+'"';Fe(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},pn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},pn.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()},pn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||p(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};var mn={enumerable:!0,configurable:!0,get:E,set:E};function gn(e,t,n){mn.get=function(){return this[t][n]},mn.set=function(e){this[t][n]=e},Object.defineProperty(e,n,mn)}function vn(e){e._watchers=[];var t=e.$options;t.props&&function(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[];e.$parent&&be(!1);var o=function(o){i.push(o);var s=Le(o,t,n,e);ke(r,o,s),o in e||gn(e,"_props",o)};for(var s in t)o(s);be(!0)}(e,t.props),t.methods&&function(e,t){for(var n in e.$options.props,t)e[n]="function"!=typeof t[n]?E:k(t[n],e)}(e,t.methods),t.data?function(e){var t=e.$options.data;a(t=e._data="function"==typeof t?function(e,t){ce();try{return e.call(t,t)}catch(l6){return je(l6,t,"data()"),{}}finally{ue()}}(t,e):t||{})||(t={});var n=Object.keys(t),r=e.$options.props;e.$options.methods;var i=n.length;for(;i--;){var o=n[i];r&&g(r,o)||N(o)||gn(e,"_data",o)}xe(t,!0)}(e):xe(e._data={},!0),t.computed&&function(e,t){var n=e._computedWatchers=Object.create(null),r=ee();for(var i in t){var o=t[i],s="function"==typeof o?o:o.get;r||(n[i]=new pn(e,s||E,E,yn)),i in e||On(e,i,o)}}(e,t.computed),t.watch&&t.watch!==Z&&function(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)xn(e,n,r[i]);else xn(e,n,r)}}(e,t.watch)}var yn={lazy:!0};function On(e,t,n){var r=!ee();"function"==typeof n?(mn.get=r?bn(t):wn(n),mn.set=E):(mn.get=n.get?r&&!1!==n.cache?bn(t):wn(n.get):E,mn.set=n.set||E),Object.defineProperty(e,t,mn)}function bn(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),ae.target&&t.depend(),t.value}}function wn(e){return function(){return e.call(this,this)}}function xn(e,t,n,r){return a(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}var kn=0;function Sn(e){var t=e.options;if(e.super){var n=Sn(e.super);if(n!==e.superOptions){e.superOptions=n;var r=function(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}(e);r&&T(e.extendOptions,r),(t=e.options=$e(n,e.extendOptions)).name&&(t.components[t.name]=e)}}return t}function _n(e){this._init(e)}function Tn(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name,s=function(e){this._init(e)};return(s.prototype=Object.create(n.prototype)).constructor=s,s.cid=t++,s.options=$e(n.options,e),s.super=n,s.options.props&&function(e){var t=e.options.props;for(var n in t)gn(e.prototype,"_props",n)}(s),s.options.computed&&function(e){var t=e.options.computed;for(var n in t)On(e.prototype,n,t[n])}(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,R.forEach((function(e){s[e]=n[e]})),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=e,s.sealedOptions=T({},s.options),i[r]=s,s}}function Cn(e){return e&&(e.Ctor.options.name||e.tag)}function En(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"==typeof e?e.split(",").indexOf(t)>-1:(n=e,"[object RegExp]"===s.call(n)&&e.test(t));var n}function Qn(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var s=n[o];if(s){var a=s.name;a&&!t(a)&&In(n,o,r,i)}}}function In(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,p(n,t)}_n.prototype._init=function(t){var n=this;n._uid=kn++,n._isVue=!0,t&&t._isComponent?function(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}(n,t):n.$options=$e(Sn(n.constructor),t||{},n),n._renderProxy=n,n._self=n,function(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}(n),function(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&Gt(e,t)}(n),function(t){t._vnode=null,t._staticTrees=null;var n=t.$options,r=t.$vnode=n._parentVnode,i=r&&r.context;t.$slots=dt(n._renderChildren,i),t.$scopedSlots=e,t._c=function(e,n,r,i){return jt(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return jt(t,e,n,r,i,!0)};var o=r&&r.data;ke(t,"$attrs",o&&o.attrs||e,null,!0),ke(t,"$listeners",n._parentListeners||e,null,!0)}(n),tn(n,"beforeCreate"),function(e){var t=ht(e.$options.inject,e);t&&(be(!1),Object.keys(t).forEach((function(n){ke(e,n,t[n])})),be(!0))}(n),vn(n),function(e){var t=e.$options.provide;t&&(e._provided="function"==typeof t?t.call(e):t)}(n),tn(n,"created"),n.$options.el&&n.$mount(n.$options.el)},function(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Se,e.prototype.$delete=_e,e.prototype.$watch=function(e,t,n){var r=this;if(a(t))return xn(r,e,t,n);(n=n||{}).user=!0;var i=new pn(r,e,t,n);if(n.immediate){var o='callback for immediate watcher "'+i.expression+'"';ce(),Fe(t,r,[i.value],r,o),ue()}return function(){i.teardown()}}}(_n),function(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(Array.isArray(e))for(var i=0,o=e.length;i<o;i++)r.$on(e[i],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)n.$off(e[r],t);return n}var o,s=n._events[e];if(!s)return n;if(!t)return n._events[e]=null,n;for(var a=s.length;a--;)if((o=s[a])===t||o.fn===t){s.splice(a,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?S(n):n;for(var r=S(arguments,1),i='event handler for "'+e+'"',o=0,s=n.length;o<s;o++)Fe(n[o],t,r,t,i)}return t}}(_n),function(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,o=Zt(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){tn(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||p(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),tn(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}(_n),function(e){Pt(e.prototype),e.prototype.$nextTick=function(e){return Je(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,i=n._parentVnode;i&&(t.$scopedSlots=mt(i.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=i;try{qt=t,e=r.call(t._renderProxy,t.$createElement)}catch(l6){je(l6,t,"render"),e=t._vnode}finally{qt=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof he||(e=fe()),e.parent=i,e}}(_n);var An=[String,RegExp,Array],Pn={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:An,exclude:An,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,n=e.keys,r=e.vnodeToCache,i=e.keyToCache;if(r){var o=r.tag,s=r.componentInstance,a=r.componentOptions;t[i]={name:Cn(a),tag:o,componentInstance:s},n.push(i),this.max&&n.length>parseInt(this.max)&&In(t,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)In(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){Qn(e,(function(e){return En(t,e)}))})),this.$watch("exclude",(function(t){Qn(e,(function(e){return!En(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=Ut(e),n=t&&t.componentOptions;if(n){var r=Cn(n),i=this.include,o=this.exclude;if(i&&(!r||!En(i,r))||o&&r&&En(o,r))return t;var s=this.cache,a=this.keys,l=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;s[l]?(t.componentInstance=s[l].componentInstance,p(a,l),a.push(l)):(this.vnodeToCache=t,this.keyToCache=l),t.data.keepAlive=!0}return t||e&&e[0]}}};!function(e){var t={get:function(){return D}};Object.defineProperty(e,"config",t),e.util={warn:oe,extend:T,mergeOptions:$e,defineReactive:ke},e.set=Se,e.delete=_e,e.nextTick=Je,e.observable=function(e){return xe(e),e},e.options=Object.create(null),R.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,T(e.options.components,Pn),function(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=S(arguments,1);return n.unshift(this),"function"==typeof e.install?e.install.apply(e,n):"function"==typeof e&&e.apply(null,n),t.push(e),this}}(e),function(e){e.mixin=function(e){return this.options=$e(this.options,e),this}}(e),Tn(e),function(e){R.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&a(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}(e)}(_n),Object.defineProperty(_n.prototype,"$isServer",{get:ee}),Object.defineProperty(_n.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(_n,"FunctionalRenderContext",{value:$t}),_n.version="2.6.14";var $n=d("style,class"),Rn=d("input,textarea,option,select,progress"),Ln=d("contenteditable,draggable,spellcheck"),Dn=d("events,caret,typing,plaintext-only"),Nn=d("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Mn="http://www.w3.org/1999/xlink",Wn=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},jn=function(e){return Wn(e)?e.slice(6,e.length):""},Fn=function(e){return null==e||!1===e};function Vn(e){for(var t=e.data,r=e,i=e;n(i.componentInstance);)(i=i.componentInstance._vnode)&&i.data&&(t=qn(i.data,t));for(;n(r=r.parent);)r&&r.data&&(t=qn(t,r.data));return function(e,t){if(n(e)||n(t))return zn(e,Un(t));return""}(t.staticClass,t.class)}function qn(e,t){return{staticClass:zn(e.staticClass,t.staticClass),class:n(e.class)?[e.class,t.class]:t.class}}function zn(e,t){return e?t?e+" "+t:e:t||""}function Un(e){return Array.isArray(e)?function(e){for(var t,r="",i=0,o=e.length;i<o;i++)n(t=Un(e[i]))&&""!==t&&(r&&(r+=" "),r+=t);return r}(e):o(e)?function(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}(e):"string"==typeof e?e:""}var Bn={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Yn=d("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Xn=d("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Gn=function(e){return Yn(e)||Xn(e)};var Hn=Object.create(null);var Zn=d("text,number,password,search,email,tel,url");var Kn=Object.freeze({createElement:function(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n},createElementNS:function(e,t){return document.createElementNS(Bn[e],t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},setStyleScope:function(e,t){e.setAttribute(t,"")}}),Jn={create:function(e,t){er(t)},update:function(e,t){e.data.ref!==t.data.ref&&(er(e,!0),er(t))},destroy:function(e){er(e,!0)}};function er(e,t){var r=e.data.ref;if(n(r)){var i=e.context,o=e.componentInstance||e.elm,s=i.$refs;t?Array.isArray(s[r])?p(s[r],o):s[r]===o&&(s[r]=void 0):e.data.refInFor?Array.isArray(s[r])?s[r].indexOf(o)<0&&s[r].push(o):s[r]=[o]:s[r]=o}}var tr=new he("",{},[]),nr=["create","activate","update","remove","destroy"];function rr(e,i){return e.key===i.key&&e.asyncFactory===i.asyncFactory&&(e.tag===i.tag&&e.isComment===i.isComment&&n(e.data)===n(i.data)&&function(e,t){if("input"!==e.tag)return!0;var r,i=n(r=e.data)&&n(r=r.attrs)&&r.type,o=n(r=t.data)&&n(r=r.attrs)&&r.type;return i===o||Zn(i)&&Zn(o)}(e,i)||r(e.isAsyncPlaceholder)&&t(i.asyncFactory.error))}function ir(e,t,r){var i,o,s={};for(i=t;i<=r;++i)n(o=e[i].key)&&(s[o]=i);return s}var or={create:sr,update:sr,destroy:function(e){sr(e,tr)}};function sr(e,t){(e.data.directives||t.data.directives)&&function(e,t){var n,r,i,o=e===tr,s=t===tr,a=lr(e.data.directives,e.context),l=lr(t.data.directives,t.context),c=[],u=[];for(n in l)r=a[n],i=l[n],r?(i.oldValue=r.value,i.oldArg=r.arg,ur(i,"update",t,e),i.def&&i.def.componentUpdated&&u.push(i)):(ur(i,"bind",t,e),i.def&&i.def.inserted&&c.push(i));if(c.length){var h=function(){for(var n=0;n<c.length;n++)ur(c[n],"inserted",t,e)};o?st(t,"insert",h):h()}u.length&&st(t,"postpatch",(function(){for(var n=0;n<u.length;n++)ur(u[n],"componentUpdated",t,e)}));if(!o)for(n in a)l[n]||ur(a[n],"unbind",e,e,s)}(e,t)}var ar=Object.create(null);function lr(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++)(r=e[n]).modifiers||(r.modifiers=ar),i[cr(r)]=r,r.def=Re(t.$options,"directives",r.name);return i}function cr(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function ur(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(l6){je(l6,n.context,"directive "+e.name+" "+t+" hook")}}var hr=[Jn,or];function dr(e,r){var i=r.componentOptions;if(!(n(i)&&!1===i.Ctor.options.inheritAttrs||t(e.data.attrs)&&t(r.data.attrs))){var o,s,a=r.elm,l=e.data.attrs||{},c=r.data.attrs||{};for(o in n(c.__ob__)&&(c=r.data.attrs=T({},c)),c)s=c[o],l[o]!==s&&fr(a,o,s,r.data.pre);for(o in(U||Y)&&c.value!==l.value&&fr(a,"value",c.value),l)t(c[o])&&(Wn(o)?a.removeAttributeNS(Mn,jn(o)):Ln(o)||a.removeAttribute(o))}}function fr(e,t,n,r){r||e.tagName.indexOf("-")>-1?pr(e,t,n):Nn(t)?Fn(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):Ln(t)?e.setAttribute(t,function(e,t){return Fn(t)||"false"===t?"false":"contenteditable"===e&&Dn(t)?t:"true"}(t,n)):Wn(t)?Fn(n)?e.removeAttributeNS(Mn,jn(t)):e.setAttributeNS(Mn,t,n):pr(e,t,n)}function pr(e,t,n){if(Fn(n))e.removeAttribute(t);else{if(U&&!B&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var mr={create:dr,update:dr};function gr(e,r){var i=r.elm,o=r.data,s=e.data;if(!(t(o.staticClass)&&t(o.class)&&(t(s)||t(s.staticClass)&&t(s.class)))){var a=Vn(r),l=i._transitionClasses;n(l)&&(a=zn(a,Un(l))),a!==i._prevClass&&(i.setAttribute("class",a),i._prevClass=a)}}var vr,yr={create:gr,update:gr};function Or(e,t,n){var r=vr;return function i(){var o=t.apply(null,arguments);null!==o&&xr(e,i,n,r)}}var br=Ue&&!(H&&Number(H[1])<=53);function wr(e,t,n,r){if(br){var i=cn,o=t;t=o._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return o.apply(this,arguments)}}vr.addEventListener(e,t,K?{capture:n,passive:r}:n)}function xr(e,t,n,r){(r||vr).removeEventListener(e,t._wrapper||t,n)}function kr(e,r){if(!t(e.data.on)||!t(r.data.on)){var i=r.data.on||{},o=e.data.on||{};vr=r.elm,function(e){if(n(e.__r)){var t=U?"change":"input";e[t]=[].concat(e.__r,e[t]||[]),delete e.__r}n(e.__c)&&(e.change=[].concat(e.__c,e.change||[]),delete e.__c)}(i),ot(i,o,wr,xr,Or,r.context),vr=void 0}}var Sr,_r={create:kr,update:kr};function Tr(e,r){if(!t(e.data.domProps)||!t(r.data.domProps)){var i,o,s=r.elm,a=e.data.domProps||{},l=r.data.domProps||{};for(i in n(l.__ob__)&&(l=r.data.domProps=T({},l)),a)i in l||(s[i]="");for(i in l){if(o=l[i],"textContent"===i||"innerHTML"===i){if(r.children&&(r.children.length=0),o===a[i])continue;1===s.childNodes.length&&s.removeChild(s.childNodes[0])}if("value"===i&&"PROGRESS"!==s.tagName){s._value=o;var c=t(o)?"":String(o);Cr(s,c)&&(s.value=c)}else if("innerHTML"===i&&Xn(s.tagName)&&t(s.innerHTML)){(Sr=Sr||document.createElement("div")).innerHTML="<svg>"+o+"</svg>";for(var u=Sr.firstChild;s.firstChild;)s.removeChild(s.firstChild);for(;u.firstChild;)s.appendChild(u.firstChild)}else if(o!==a[i])try{s[i]=o}catch(l6){}}}}function Cr(e,t){return!e.composing&&("OPTION"===e.tagName||function(e,t){var n=!0;try{n=document.activeElement!==e}catch(l6){}return n&&e.value!==t}(e,t)||function(e,t){var r=e.value,i=e._vModifiers;if(n(i)){if(i.number)return h(r)!==h(t);if(i.trim)return r.trim()!==t.trim()}return r!==t}(e,t))}var Er={create:Tr,update:Tr},Qr=v((function(e){var t={},n=/:(.+)/;return e.split(/;(?![^(]*\))/g).forEach((function(e){if(e){var r=e.split(n);r.length>1&&(t[r[0].trim()]=r[1].trim())}})),t}));function Ir(e){var t=Ar(e.style);return e.staticStyle?T(e.staticStyle,t):t}function Ar(e){return Array.isArray(e)?C(e):"string"==typeof e?Qr(e):e}var Pr,$r=/^--/,Rr=/\s*!important$/,Lr=function(e,t,n){if($r.test(t))e.style.setProperty(t,n);else if(Rr.test(n))e.style.setProperty(x(t),n.replace(Rr,""),"important");else{var r=Nr(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},Dr=["Webkit","Moz","ms"],Nr=v((function(e){if(Pr=Pr||document.createElement("div").style,"filter"!==(e=O(e))&&e in Pr)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<Dr.length;n++){var r=Dr[n]+t;if(r in Pr)return r}}));function Mr(e,r){var i=r.data,o=e.data;if(!(t(i.staticStyle)&&t(i.style)&&t(o.staticStyle)&&t(o.style))){var s,a,l=r.elm,c=o.staticStyle,u=o.normalizedStyle||o.style||{},h=c||u,d=Ar(r.data.style)||{};r.data.normalizedStyle=n(d.__ob__)?T({},d):d;var f=function(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=Ir(i.data))&&T(r,n);(n=Ir(e.data))&&T(r,n);for(var o=e;o=o.parent;)o.data&&(n=Ir(o.data))&&T(r,n);return r}(r,!0);for(a in h)t(f[a])&&Lr(l,a,"");for(a in f)(s=f[a])!==h[a]&&Lr(l,a,null==s?"":s)}}var Wr={create:Mr,update:Mr},jr=/\s+/;function Fr(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(jr).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Vr(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(jr).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?e.setAttribute("class",n):e.removeAttribute("class")}}function qr(e){if(e){if("object"==typeof e){var t={};return!1!==e.css&&T(t,zr(e.name||"v")),T(t,e),t}return"string"==typeof e?zr(e):void 0}}var zr=v((function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}})),Ur=F&&!B,Br="transition",Yr="transitionend",Xr="animation",Gr="animationend";Ur&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Br="WebkitTransition",Yr="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Xr="WebkitAnimation",Gr="webkitAnimationEnd"));var Hr=F?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function Zr(e){Hr((function(){Hr(e)}))}function Kr(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Fr(e,t))}function Jr(e,t){e._transitionClasses&&p(e._transitionClasses,t),Vr(e,t)}function ei(e,t,n){var r=ni(e,t),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a="transition"===i?Yr:Gr,l=0,c=function(){e.removeEventListener(a,u),n()},u=function(t){t.target===e&&++l>=s&&c()};setTimeout((function(){l<s&&c()}),o+1),e.addEventListener(a,u)}var ti=/\b(transform|all)(,|$)/;function ni(e,t){var n,r=window.getComputedStyle(e),i=(r[Br+"Delay"]||"").split(", "),o=(r[Br+"Duration"]||"").split(", "),s=ri(i,o),a=(r[Xr+"Delay"]||"").split(", "),l=(r[Xr+"Duration"]||"").split(", "),c=ri(a,l),u=0,h=0;return"transition"===t?s>0&&(n="transition",u=s,h=o.length):"animation"===t?c>0&&(n="animation",u=c,h=l.length):h=(n=(u=Math.max(s,c))>0?s>c?"transition":"animation":null)?"transition"===n?o.length:l.length:0,{type:n,timeout:u,propCount:h,hasTransform:"transition"===n&&ti.test(r[Br+"Property"])}}function ri(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return ii(t)+ii(e[n])})))}function ii(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function oi(e,r){var i=e.elm;n(i._leaveCb)&&(i._leaveCb.cancelled=!0,i._leaveCb());var s=qr(e.data.transition);if(!t(s)&&!n(i._enterCb)&&1===i.nodeType){for(var a=s.css,l=s.type,c=s.enterClass,u=s.enterToClass,d=s.enterActiveClass,f=s.appearClass,p=s.appearToClass,m=s.appearActiveClass,g=s.beforeEnter,v=s.enter,y=s.afterEnter,O=s.enterCancelled,b=s.beforeAppear,w=s.appear,x=s.afterAppear,k=s.appearCancelled,S=s.duration,_=Ht,T=Ht.$vnode;T&&T.parent;)_=T.context,T=T.parent;var C=!_._isMounted||!e.isRootInsert;if(!C||w||""===w){var E=C&&f?f:c,Q=C&&m?m:d,I=C&&p?p:u,A=C&&b||g,P=C&&"function"==typeof w?w:v,R=C&&x||y,L=C&&k||O,D=h(o(S)?S.enter:S),N=!1!==a&&!B,M=li(P),W=i._enterCb=$((function(){N&&(Jr(i,I),Jr(i,Q)),W.cancelled?(N&&Jr(i,E),L&&L(i)):R&&R(i),i._enterCb=null}));e.data.show||st(e,"insert",(function(){var t=i.parentNode,n=t&&t._pending&&t._pending[e.key];n&&n.tag===e.tag&&n.elm._leaveCb&&n.elm._leaveCb(),P&&P(i,W)})),A&&A(i),N&&(Kr(i,E),Kr(i,Q),Zr((function(){Jr(i,E),W.cancelled||(Kr(i,I),M||(ai(D)?setTimeout(W,D):ei(i,l,W)))}))),e.data.show&&(r&&r(),P&&P(i,W)),N||M||W()}}}function si(e,r){var i=e.elm;n(i._enterCb)&&(i._enterCb.cancelled=!0,i._enterCb());var s=qr(e.data.transition);if(t(s)||1!==i.nodeType)return r();if(!n(i._leaveCb)){var a=s.css,l=s.type,c=s.leaveClass,u=s.leaveToClass,d=s.leaveActiveClass,f=s.beforeLeave,p=s.leave,m=s.afterLeave,g=s.leaveCancelled,v=s.delayLeave,y=s.duration,O=!1!==a&&!B,b=li(p),w=h(o(y)?y.leave:y),x=i._leaveCb=$((function(){i.parentNode&&i.parentNode._pending&&(i.parentNode._pending[e.key]=null),O&&(Jr(i,u),Jr(i,d)),x.cancelled?(O&&Jr(i,c),g&&g(i)):(r(),m&&m(i)),i._leaveCb=null}));v?v(k):k()}function k(){x.cancelled||(!e.data.show&&i.parentNode&&((i.parentNode._pending||(i.parentNode._pending={}))[e.key]=e),f&&f(i),O&&(Kr(i,c),Kr(i,d),Zr((function(){Jr(i,c),x.cancelled||(Kr(i,u),b||(ai(w)?setTimeout(x,w):ei(i,l,x)))}))),p&&p(i,x),O||b||x())}}function ai(e){return"number"==typeof e&&!isNaN(e)}function li(e){if(t(e))return!1;var r=e.fns;return n(r)?li(Array.isArray(r)?r[0]:r):(e._length||e.length)>1}function ci(e,t){!0!==t.data.show&&oi(t)}var ui=function(e){var o,s,a={},l=e.modules,c=e.nodeOps;for(o=0;o<nr.length;++o)for(a[nr[o]]=[],s=0;s<l.length;++s)n(l[s][nr[o]])&&a[nr[o]].push(l[s][nr[o]]);function u(e){var t=c.parentNode(e);n(t)&&c.removeChild(t,e)}function h(e,t,i,o,s,l,u){if(n(e.elm)&&n(l)&&(e=l[u]=me(e)),e.isRootInsert=!s,!function(e,t,i,o){var s=e.data;if(n(s)){var l=n(e.componentInstance)&&s.keepAlive;if(n(s=s.hook)&&n(s=s.init)&&s(e,!1),n(e.componentInstance))return f(e,t),p(i,e.elm,o),r(l)&&function(e,t,r,i){var o,s=e;for(;s.componentInstance;)if(n(o=(s=s.componentInstance._vnode).data)&&n(o=o.transition)){for(o=0;o<a.activate.length;++o)a.activate[o](tr,s);t.push(s);break}p(r,e.elm,i)}(e,t,i,o),!0}}(e,t,i,o)){var h=e.data,d=e.children,g=e.tag;n(g)?(e.elm=e.ns?c.createElementNS(e.ns,g):c.createElement(g,e),y(e),m(e,d,t),n(h)&&v(e,t),p(i,e.elm,o)):r(e.isComment)?(e.elm=c.createComment(e.text),p(i,e.elm,o)):(e.elm=c.createTextNode(e.text),p(i,e.elm,o))}}function f(e,t){n(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,g(e)?(v(e,t),y(e)):(er(e),t.push(e))}function p(e,t,r){n(e)&&(n(r)?c.parentNode(r)===e&&c.insertBefore(e,t,r):c.appendChild(e,t))}function m(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)h(t[r],n,e.elm,null,!0,t,r);else i(e.text)&&c.appendChild(e.elm,c.createTextNode(String(e.text)))}function g(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return n(e.tag)}function v(e,t){for(var r=0;r<a.create.length;++r)a.create[r](tr,e);n(o=e.data.hook)&&(n(o.create)&&o.create(tr,e),n(o.insert)&&t.push(e))}function y(e){var t;if(n(t=e.fnScopeId))c.setStyleScope(e.elm,t);else for(var r=e;r;)n(t=r.context)&&n(t=t.$options._scopeId)&&c.setStyleScope(e.elm,t),r=r.parent;n(t=Ht)&&t!==e.context&&t!==e.fnContext&&n(t=t.$options._scopeId)&&c.setStyleScope(e.elm,t)}function O(e,t,n,r,i,o){for(;r<=i;++r)h(n[r],o,e,t,!1,n,r)}function b(e){var t,r,i=e.data;if(n(i))for(n(t=i.hook)&&n(t=t.destroy)&&t(e),t=0;t<a.destroy.length;++t)a.destroy[t](e);if(n(t=e.children))for(r=0;r<e.children.length;++r)b(e.children[r])}function w(e,t,r){for(;t<=r;++t){var i=e[t];n(i)&&(n(i.tag)?(x(i),b(i)):u(i.elm))}}function x(e,t){if(n(t)||n(e.data)){var r,i=a.remove.length+1;for(n(t)?t.listeners+=i:t=function(e,t){function n(){0==--n.listeners&&u(e)}return n.listeners=t,n}(e.elm,i),n(r=e.componentInstance)&&n(r=r._vnode)&&n(r.data)&&x(r,t),r=0;r<a.remove.length;++r)a.remove[r](e,t);n(r=e.data.hook)&&n(r=r.remove)?r(e,t):t()}else u(e.elm)}function k(e,t,r,i){for(var o=r;o<i;o++){var s=t[o];if(n(s)&&rr(e,s))return o}}function S(e,i,o,s,l,u){if(e!==i){n(i.elm)&&n(s)&&(i=s[l]=me(i));var d=i.elm=e.elm;if(r(e.isAsyncPlaceholder))n(i.asyncFactory.resolved)?C(e.elm,i,o):i.isAsyncPlaceholder=!0;else if(r(i.isStatic)&&r(e.isStatic)&&i.key===e.key&&(r(i.isCloned)||r(i.isOnce)))i.componentInstance=e.componentInstance;else{var f,p=i.data;n(p)&&n(f=p.hook)&&n(f=f.prepatch)&&f(e,i);var m=e.children,v=i.children;if(n(p)&&g(i)){for(f=0;f<a.update.length;++f)a.update[f](e,i);n(f=p.hook)&&n(f=f.update)&&f(e,i)}t(i.text)?n(m)&&n(v)?m!==v&&function(e,r,i,o,s){for(var a,l,u,d=0,f=0,p=r.length-1,m=r[0],g=r[p],v=i.length-1,y=i[0],b=i[v],x=!s;d<=p&&f<=v;)t(m)?m=r[++d]:t(g)?g=r[--p]:rr(m,y)?(S(m,y,o,i,f),m=r[++d],y=i[++f]):rr(g,b)?(S(g,b,o,i,v),g=r[--p],b=i[--v]):rr(m,b)?(S(m,b,o,i,v),x&&c.insertBefore(e,m.elm,c.nextSibling(g.elm)),m=r[++d],b=i[--v]):rr(g,y)?(S(g,y,o,i,f),x&&c.insertBefore(e,g.elm,m.elm),g=r[--p],y=i[++f]):(t(a)&&(a=ir(r,d,p)),t(l=n(y.key)?a[y.key]:k(y,r,d,p))?h(y,o,e,m.elm,!1,i,f):rr(u=r[l],y)?(S(u,y,o,i,f),r[l]=void 0,x&&c.insertBefore(e,u.elm,m.elm)):h(y,o,e,m.elm,!1,i,f),y=i[++f]);d>p?O(e,t(i[v+1])?null:i[v+1].elm,i,f,v,o):f>v&&w(r,d,p)}(d,m,v,o,u):n(v)?(n(e.text)&&c.setTextContent(d,""),O(d,null,v,0,v.length-1,o)):n(m)?w(m,0,m.length-1):n(e.text)&&c.setTextContent(d,""):e.text!==i.text&&c.setTextContent(d,i.text),n(p)&&n(f=p.hook)&&n(f=f.postpatch)&&f(e,i)}}}function _(e,t,i){if(r(i)&&n(e.parent))e.parent.data.pendingInsert=t;else for(var o=0;o<t.length;++o)t[o].data.hook.insert(t[o])}var T=d("attrs,class,staticClass,staticStyle,key");function C(e,t,i,o){var s,a=t.tag,l=t.data,c=t.children;if(o=o||l&&l.pre,t.elm=e,r(t.isComment)&&n(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(n(l)&&(n(s=l.hook)&&n(s=s.init)&&s(t,!0),n(s=t.componentInstance)))return f(t,i),!0;if(n(a)){if(n(c))if(e.hasChildNodes())if(n(s=l)&&n(s=s.domProps)&&n(s=s.innerHTML)){if(s!==e.innerHTML)return!1}else{for(var u=!0,h=e.firstChild,d=0;d<c.length;d++){if(!h||!C(h,c[d],i,o)){u=!1;break}h=h.nextSibling}if(!u||h)return!1}else m(t,c,i);if(n(l)){var p=!1;for(var g in l)if(!T(g)){p=!0,v(t,i);break}!p&&l.class&&tt(l.class)}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,i,o,s){if(!t(i)){var l,u=!1,d=[];if(t(e))u=!0,h(i,d);else{var f=n(e.nodeType);if(!f&&rr(e,i))S(e,i,d,null,null,s);else{if(f){if(1===e.nodeType&&e.hasAttribute("data-server-rendered")&&(e.removeAttribute("data-server-rendered"),o=!0),r(o)&&C(e,i,d))return _(i,d,!0),e;l=e,e=new he(c.tagName(l).toLowerCase(),{},[],void 0,l)}var p=e.elm,m=c.parentNode(p);if(h(i,d,p._leaveCb?null:m,c.nextSibling(p)),n(i.parent))for(var v=i.parent,y=g(i);v;){for(var O=0;O<a.destroy.length;++O)a.destroy[O](v);if(v.elm=i.elm,y){for(var x=0;x<a.create.length;++x)a.create[x](tr,v);var k=v.data.hook.insert;if(k.merged)for(var T=1;T<k.fns.length;T++)k.fns[T]()}else er(v);v=v.parent}n(m)?w([e],0,0):n(e.tag)&&b(e)}}return _(i,d,u),i.elm}n(e)&&b(e)}}({nodeOps:Kn,modules:[mr,yr,_r,Er,Wr,F?{create:ci,activate:ci,remove:function(e,t){!0!==e.data.show?si(e,t):t()}}:{}].concat(hr)});B&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&yi(e,"input")}));var hi={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?st(n,"postpatch",(function(){hi.componentUpdated(e,t,n)})):di(e,t,n.context),e._vOptions=[].map.call(e.options,mi)):("textarea"===n.tag||Zn(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",gi),e.addEventListener("compositionend",vi),e.addEventListener("change",vi),B&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){di(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,mi);if(i.some((function(e,t){return!A(e,r[t])})))(e.multiple?t.value.some((function(e){return pi(e,i)})):t.value!==t.oldValue&&pi(t.value,i))&&yi(e,"change")}}};function di(e,t,n){fi(e,t),(U||Y)&&setTimeout((function(){fi(e,t)}),0)}function fi(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,l=e.options.length;a<l;a++)if(s=e.options[a],i)o=P(r,mi(s))>-1,s.selected!==o&&(s.selected=o);else if(A(mi(s),r))return void(e.selectedIndex!==a&&(e.selectedIndex=a));i||(e.selectedIndex=-1)}}function pi(e,t){return t.every((function(t){return!A(t,e)}))}function mi(e){return"_value"in e?e._value:e.value}function gi(e){e.target.composing=!0}function vi(e){e.target.composing&&(e.target.composing=!1,yi(e.target,"input"))}function yi(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Oi(e){return!e.componentInstance||e.data&&e.data.transition?e:Oi(e.componentInstance._vnode)}var bi={model:hi,show:{bind:function(e,t,n){var r=t.value,i=(n=Oi(n)).data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,oi(n,(function(){e.style.display=o}))):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value;!r!=!t.oldValue&&((n=Oi(n)).data&&n.data.transition?(n.data.show=!0,r?oi(n,(function(){e.style.display=e.__vOriginalDisplay})):si(n,(function(){e.style.display="none"}))):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}}},wi={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function xi(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?xi(Ut(t.children)):e}function ki(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[O(o)]=i[o];return t}function Si(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}var _i=function(e){return e.tag||pt(e)},Ti=function(e){return"show"===e.name},Ci={name:"transition",props:wi,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(_i)).length){var r=this.mode,o=n[0];if(function(e){for(;e=e.parent;)if(e.data.transition)return!0}(this.$vnode))return o;var s=xi(o);if(!s)return o;if(this._leaving)return Si(e,o);var a="__transition-"+this._uid+"-";s.key=null==s.key?s.isComment?a+"comment":a+s.tag:i(s.key)?0===String(s.key).indexOf(a)?s.key:a+s.key:s.key;var l=(s.data||(s.data={})).transition=ki(this),c=this._vnode,u=xi(c);if(s.data.directives&&s.data.directives.some(Ti)&&(s.data.show=!0),u&&u.data&&!function(e,t){return t.key===e.key&&t.tag===e.tag}(s,u)&&!pt(u)&&(!u.componentInstance||!u.componentInstance._vnode.isComment)){var h=u.data.transition=T({},l);if("out-in"===r)return this._leaving=!0,st(h,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),Si(e,o);if("in-out"===r){if(pt(s))return c;var d,f=function(){d()};st(l,"afterEnter",f),st(l,"enterCancelled",f),st(h,"delayLeave",(function(e){d=e}))}}return o}}},Ei=T({tag:String,moveClass:String},wi);function Qi(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Ii(e){e.data.newPos=e.elm.getBoundingClientRect()}function Ai(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}delete Ei.mode;var Pi={Transition:Ci,TransitionGroup:{props:Ei,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=Zt(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=ki(this),a=0;a<i.length;a++){var l=i[a];l.tag&&null!=l.key&&0!==String(l.key).indexOf("__vlist")&&(o.push(l),n[l.key]=l,(l.data||(l.data={})).transition=s)}if(r){for(var c=[],u=[],h=0;h<r.length;h++){var d=r[h];d.data.transition=s,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?c.push(d):u.push(d)}this.kept=e(t,null,c),this.removed=u}return e(t,null,o)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(Qi),e.forEach(Ii),e.forEach(Ai),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,r=n.style;Kr(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Yr,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Yr,e),n._moveCb=null,Jr(n,t))})}})))},methods:{hasMove:function(e,t){if(!Ur)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){Vr(n,e)})),Fr(n,t),n.style.display="none",this.$el.appendChild(n);var r=ni(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};_n.config.mustUseProp=function(e,t,n){return"value"===n&&Rn(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},_n.config.isReservedTag=Gn,_n.config.isReservedAttr=$n,_n.config.getTagNamespace=function(e){return Xn(e)?"svg":"math"===e?"math":void 0},_n.config.isUnknownElement=function(e){if(!F)return!0;if(Gn(e))return!1;if(e=e.toLowerCase(),null!=Hn[e])return Hn[e];var t=document.createElement(e);return e.indexOf("-")>-1?Hn[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Hn[e]=/HTMLUnknownElement/.test(t.toString())},T(_n.options.directives,bi),T(_n.options.components,Pi),_n.prototype.__patch__=F?ui:E,_n.prototype.$mount=function(e,t){return function(e,t,n){var r;return e.$el=t,e.$options.render||(e.$options.render=fe),tn(e,"beforeMount"),r=function(){e._update(e._render(),n)},new pn(e,r,E,{before:function(){e._isMounted&&!e._isDestroyed&&tn(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,tn(e,"mounted")),e}(this,e=e&&F?function(e){if("string"==typeof e){return document.querySelector(e)||document.createElement("div")}return e}(e):void 0,t)},F&&setTimeout((function(){D.devtools&&te&&te.emit("init",_n)}),0);var $i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_n}),Ri="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Li(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Di(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})})),t}function Ni(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Mi=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()})).toLowerCase()},Wi=function(e){var t="",n=Object.keys(e);return n.forEach((function(r,i){var o=e[r];(function(e){return/[height|width]$/.test(e)})(r=Mi(r))&&"number"==typeof o&&(o+="px"),t+=!0===o?r:!1===o?"not "+r:"("+r+": "+o+")",i<n.length-1&&(t+=" and ")})),t},ji=function(e){var t="";return"string"==typeof e?e:e instanceof Array?(e.forEach((function(n,r){t+=Wi(n),r<e.length-1&&(t+=", ")})),t):Wi(e)};function Fi(e){var t=Object.keys(e),n=t.map((function(t){return e[t]})),r=[0].concat(function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(n.slice(0,-1)));return r.reduce((function(e,n,i){var o=Object.assign({minWidth:n},i<t.length-1?{maxWidth:r[i+1]-1}:{}),s=ji(o);return Object.assign(e,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t[i],s))}),{})}function Vi(e,t,n){return function n(r){if(void 0!==t[r])return t[r];var i=e.findIndex((function(e){return e===r})),o=-1!==i||0!==i?e[i-1]:null;return o?void 0!==t[o]?t[o]:n(o):t[i]}(n)}function qi(e,t){var n=window.matchMedia(e),r=function(e){e.matches&&t()};n.addListener(r),r(n)}function zi(e){return"[object Array]"===Object.prototype.toString.call(e)}var Ui={props:{mq:{required:!0,type:[String,Array]}},computed:{plusModifier:function(){return!zi(this.mq)&&"+"===this.mq.slice(-1)},activeBreakpoints:function(){var e=Object.keys(this.$mqAvailableBreakpoints),t=this.plusModifier?this.mq.slice(0,-1):zi(this.mq)?this.mq:[this.mq];return this.plusModifier?function(e,t){var n=e.findIndex((function(e){return e===t}));return e.slice(n)}(e,t):t}},render:function(e,t){return this.activeBreakpoints.includes(this.$mq)?e("div",this.$slots.default):e()}},Bi={sm:450,md:1250,lg:1/0},Yi={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.breakpoints,r=void 0===n?Bi:n,i=t.defaultBreakpoint,o=void 0===i?"sm":i,s=!1,a=new e({data:function(){return{currentBreakpoint:o}}});e.filter("mq",(function(e,t){return Vi(Object.keys(r),t,e)})),e.mixin({computed:{$mq:function(){return a.currentBreakpoint}},created:function(){this.$isServer&&(a.currentBreakpoint=o)},mounted:function(){if(!s){var e=Fi(r),t=function(t){qi(e[t],(function(){a.currentBreakpoint=t}))};for(var n in e)t(n);s=!0}}}),e.prototype.$mqAvailableBreakpoints=r,e.component("MqLayout",Ui)}},Xi=function(e){return e&&e.Math==Math&&e},Gi=Xi("object"==typeof globalThis&&globalThis)||Xi("object"==typeof window&&window)||Xi("object"==typeof self&&self)||Xi("object"==typeof Ri&&Ri)||function(){return this}()||Function("return this")(),Hi={},Zi=function(e){try{return!!e()}catch(t){return!0}},Ki=!Zi((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),Ji={},eo={}.propertyIsEnumerable,to=Object.getOwnPropertyDescriptor,no=to&&!eo.call({1:2},1);Ji.f=no?function(e){var t=to(this,e);return!!t&&t.enumerable}:eo;var ro,io,oo=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},so={}.toString,ao=function(e){return so.call(e).slice(8,-1)},lo=ao,co="".split,uo=Zi((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==lo(e)?co.call(e,""):Object(e)}:Object,ho=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},fo=uo,po=ho,mo=function(e){return fo(po(e))},go=function(e){return"object"==typeof e?null!==e:"function"==typeof e},vo=Gi,yo=function(e){return"function"==typeof e?e:void 0},Oo=function(e,t){return arguments.length<2?yo(vo[e]):vo[e]&&vo[e][t]},bo=Gi,wo=Oo("navigator","userAgent")||"",xo=bo.process,ko=bo.Deno,So=xo&&xo.versions||ko&&ko.version,_o=So&&So.v8;_o?io=(ro=_o.split("."))[0]<4?1:ro[0]+ro[1]:wo&&(!(ro=wo.match(/Edge\/(\d+)/))||ro[1]>=74)&&(ro=wo.match(/Chrome\/(\d+)/))&&(io=ro[1]);var To=io&&+io,Co=To,Eo=Zi,Qo=!!Object.getOwnPropertySymbols&&!Eo((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Co&&Co<41})),Io=Qo&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ao=Oo,Po=Io?function(e){return"symbol"==typeof e}:function(e){var t=Ao("Symbol");return"function"==typeof t&&Object(e)instanceof t},$o=go,Ro={exports:{}},Lo=Gi,Do=function(e,t){try{Object.defineProperty(Lo,e,{value:t,configurable:!0,writable:!0})}catch(n){Lo[e]=t}return t},No=Do,Mo=Gi["__core-js_shared__"]||No("__core-js_shared__",{}),Wo=Mo;(Ro.exports=function(e,t){return Wo[e]||(Wo[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.16.3",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var jo=ho,Fo=function(e){return Object(jo(e))},Vo=Fo,qo={}.hasOwnProperty,zo=Object.hasOwn||function(e,t){return qo.call(Vo(e),t)},Uo=0,Bo=Math.random(),Yo=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++Uo+Bo).toString(36)},Xo=Gi,Go=Ro.exports,Ho=zo,Zo=Yo,Ko=Qo,Jo=Io,es=Go("wks"),ts=Xo.Symbol,ns=Jo?ts:ts&&ts.withoutSetter||Zo,rs=function(e){return Ho(es,e)&&(Ko||"string"==typeof es[e])||(Ko&&Ho(ts,e)?es[e]=ts[e]:es[e]=ns("Symbol."+e)),es[e]},is=go,os=Po,ss=function(e,t){var n,r;if("string"===t&&"function"==typeof(n=e.toString)&&!$o(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!$o(r=n.call(e)))return r;if("string"!==t&&"function"==typeof(n=e.toString)&&!$o(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},as=rs("toPrimitive"),ls=function(e,t){if(!is(e)||os(e))return e;var n,r=e[as];if(void 0!==r){if(void 0===t&&(t="default"),n=r.call(e,t),!is(n)||os(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===t&&(t="number"),ss(e,t)},cs=Po,us=function(e){var t=ls(e,"string");return cs(t)?t:String(t)},hs=go,ds=Gi.document,fs=hs(ds)&&hs(ds.createElement),ps=function(e){return fs?ds.createElement(e):{}},ms=!Ki&&!Zi((function(){return 7!=Object.defineProperty(ps("div"),"a",{get:function(){return 7}}).a})),gs=Ki,vs=Ji,ys=oo,Os=mo,bs=us,ws=zo,xs=ms,ks=Object.getOwnPropertyDescriptor;Hi.f=gs?ks:function(e,t){if(e=Os(e),t=bs(t),xs)try{return ks(e,t)}catch(n){}if(ws(e,t))return ys(!vs.f.call(e,t),e[t])};var Ss={},_s=go,Ts=function(e){if(!_s(e))throw TypeError(String(e)+" is not an object");return e},Cs=Ki,Es=ms,Qs=Ts,Is=us,As=Object.defineProperty;Ss.f=Cs?As:function(e,t,n){if(Qs(e),t=Is(t),Qs(n),Es)try{return As(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var Ps=Ss,$s=oo,Rs=Ki?function(e,t,n){return Ps.f(e,t,$s(1,n))}:function(e,t,n){return e[t]=n,e},Ls={exports:{}},Ds=Mo,Ns=Function.toString;"function"!=typeof Ds.inspectSource&&(Ds.inspectSource=function(e){return Ns.call(e)});var Ms,Ws,js,Fs=Ds.inspectSource,Vs=Fs,qs=Gi.WeakMap,zs="function"==typeof qs&&/native code/.test(Vs(qs)),Us=Ro.exports,Bs=Yo,Ys=Us("keys"),Xs={},Gs=zs,Hs=go,Zs=Rs,Ks=zo,Js=Mo,ea=function(e){return Ys[e]||(Ys[e]=Bs(e))},ta=Xs,na=Gi.WeakMap;if(Gs||Js.state){var ra=Js.state||(Js.state=new na),ia=ra.get,oa=ra.has,sa=ra.set;Ms=function(e,t){if(oa.call(ra,e))throw new TypeError("Object already initialized");return t.facade=e,sa.call(ra,e,t),t},Ws=function(e){return ia.call(ra,e)||{}},js=function(e){return oa.call(ra,e)}}else{var aa=ea("state");ta[aa]=!0,Ms=function(e,t){if(Ks(e,aa))throw new TypeError("Object already initialized");return t.facade=e,Zs(e,aa,t),t},Ws=function(e){return Ks(e,aa)?e[aa]:{}},js=function(e){return Ks(e,aa)}}var la={set:Ms,get:Ws,has:js,enforce:function(e){return js(e)?Ws(e):Ms(e,{})},getterFor:function(e){return function(t){var n;if(!Hs(t)||(n=Ws(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},ca=Gi,ua=Rs,ha=zo,da=Do,fa=Fs,pa=la.get,ma=la.enforce,ga=String(String).split("String");(Ls.exports=function(e,t,n,r){var i,o=!!r&&!!r.unsafe,s=!!r&&!!r.enumerable,a=!!r&&!!r.noTargetGet;"function"==typeof n&&("string"!=typeof t||ha(n,"name")||ua(n,"name",t),(i=ma(n)).source||(i.source=ga.join("string"==typeof t?t:""))),e!==ca?(o?!a&&e[t]&&(s=!0):delete e[t],s?e[t]=n:ua(e,t,n)):s?e[t]=n:da(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&pa(this).source||fa(this)}));var va={},ya=Math.ceil,Oa=Math.floor,ba=function(e){return isNaN(e=+e)?0:(e>0?Oa:ya)(e)},wa=ba,xa=Math.min,ka=function(e){return e>0?xa(wa(e),9007199254740991):0},Sa=ba,_a=Math.max,Ta=Math.min,Ca=mo,Ea=ka,Qa=function(e,t){var n=Sa(e);return n<0?_a(n+t,0):Ta(n,t)},Ia=function(e){return function(t,n,r){var i,o=Ca(t),s=Ea(o.length),a=Qa(r,s);if(e&&n!=n){for(;s>a;)if((i=o[a++])!=i)return!0}else for(;s>a;a++)if((e||a in o)&&o[a]===n)return e||a||0;return!e&&-1}},Aa={includes:Ia(!0),indexOf:Ia(!1)},Pa=zo,$a=mo,Ra=Aa.indexOf,La=Xs,Da=function(e,t){var n,r=$a(e),i=0,o=[];for(n in r)!Pa(La,n)&&Pa(r,n)&&o.push(n);for(;t.length>i;)Pa(r,n=t[i++])&&(~Ra(o,n)||o.push(n));return o},Na=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Ma=Da,Wa=Na.concat("length","prototype");va.f=Object.getOwnPropertyNames||function(e){return Ma(e,Wa)};var ja={};ja.f=Object.getOwnPropertySymbols;var Fa=va,Va=ja,qa=Ts,za=Oo("Reflect","ownKeys")||function(e){var t=Fa.f(qa(e)),n=Va.f;return n?t.concat(n(e)):t},Ua=zo,Ba=za,Ya=Hi,Xa=Ss,Ga=Zi,Ha=/#|\.prototype\./,Za=function(e,t){var n=Ja[Ka(e)];return n==tl||n!=el&&("function"==typeof t?Ga(t):!!t)},Ka=Za.normalize=function(e){return String(e).replace(Ha,".").toLowerCase()},Ja=Za.data={},el=Za.NATIVE="N",tl=Za.POLYFILL="P",nl=Za,rl=Gi,il=Hi.f,ol=Rs,sl=Ls.exports,al=Do,ll=function(e,t){for(var n=Ba(t),r=Xa.f,i=Ya.f,o=0;o<n.length;o++){var s=n[o];Ua(e,s)||r(e,s,i(t,s))}},cl=nl,ul=function(e,t){var n,r,i,o,s,a=e.target,l=e.global,c=e.stat;if(n=l?rl:c?rl[a]||al(a,{}):(rl[a]||{}).prototype)for(r in t){if(o=t[r],i=e.noTargetGet?(s=il(n,r))&&s.value:n[r],!cl(l?r:a+(c?".":"#")+r,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;ll(o,i)}(e.sham||i&&i.sham)&&ol(o,"sham",!0),sl(n,r,o,e)}},hl=ao,dl=Array.isArray||function(e){return"Array"==hl(e)},fl=us,pl=Ss,ml=oo,gl=go,vl=dl,yl=rs("species"),Ol=function(e){var t;return vl(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!vl(t.prototype)?gl(t)&&null===(t=t[yl])&&(t=void 0):t=void 0),void 0===t?Array:t},bl=Zi,wl=To,xl=rs("species"),kl=ul,Sl=Zi,_l=dl,Tl=go,Cl=Fo,El=ka,Ql=function(e,t,n){var r=fl(t);r in e?pl.f(e,r,ml(0,n)):e[r]=n},Il=function(e,t){return new(Ol(e))(0===t?0:t)},Al=function(e){return wl>=51||!bl((function(){var t=[];return(t.constructor={})[xl]=function(){return{foo:1}},1!==t[e](Boolean).foo}))},Pl=To,$l=rs("isConcatSpreadable"),Rl=Pl>=51||!Sl((function(){var e=[];return e[$l]=!1,e.concat()[0]!==e})),Ll=Al("concat"),Dl=function(e){if(!Tl(e))return!1;var t=e[$l];return void 0!==t?!!t:_l(e)};kl({target:"Array",proto:!0,forced:!Rl||!Ll},{concat:function(e){var t,n,r,i,o,s=Cl(this),a=Il(s,0),l=0;for(t=-1,r=arguments.length;t<r;t++)if(Dl(o=-1===t?s:arguments[t])){if(l+(i=El(o.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<i;n++,l++)n in o&&Ql(a,l,o[n])}else{if(l>=9007199254740991)throw TypeError("Maximum allowed index exceeded");Ql(a,l++,o)}return a.length=l,a}});var Nl=Da,Ml=Na,Wl=Object.keys||function(e){return Nl(e,Ml)},jl=Ki,Fl=Zi,Vl=Wl,ql=ja,zl=Ji,Ul=Fo,Bl=uo,Yl=Object.assign,Xl=Object.defineProperty,Gl=!Yl||Fl((function(){if(jl&&1!==Yl({b:1},Yl(Xl({},"a",{enumerable:!0,get:function(){Xl(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach((function(e){t[e]=e})),7!=Yl({},e)[n]||Vl(Yl({},t)).join("")!=r}))?function(e,t){for(var n=Ul(e),r=arguments.length,i=1,o=ql.f,s=zl.f;r>i;)for(var a,l=Bl(arguments[i++]),c=o?Vl(l).concat(o(l)):Vl(l),u=c.length,h=0;u>h;)a=c[h++],jl&&!s.call(l,a)||(n[a]=l[a]);return n}:Yl;ul({target:"Object",stat:!0,forced:Object.assign!==Gl},{assign:Gl});var Hl=function(e){return e&&e.Math==Math&&e},Zl=Hl("object"==typeof globalThis&&globalThis)||Hl("object"==typeof window&&window)||Hl("object"==typeof self&&self)||Hl("object"==typeof Ri&&Ri)||function(){return this}()||Function("return this")(),Kl={},Jl=function(e){try{return!!e()}catch(t){return!0}},ec=!Jl((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),tc={},nc={}.propertyIsEnumerable,rc=Object.getOwnPropertyDescriptor,ic=rc&&!nc.call({1:2},1);tc.f=ic?function(e){var t=rc(this,e);return!!t&&t.enumerable}:nc;var oc,sc,ac=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},lc={}.toString,cc=function(e){return lc.call(e).slice(8,-1)},uc=cc,hc="".split,dc=Jl((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==uc(e)?hc.call(e,""):Object(e)}:Object,fc=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},pc=dc,mc=fc,gc=function(e){return pc(mc(e))},vc=function(e){return"object"==typeof e?null!==e:"function"==typeof e},yc=Zl,Oc=function(e){return"function"==typeof e?e:void 0},bc=function(e,t){return arguments.length<2?Oc(yc[e]):yc[e]&&yc[e][t]},wc=Zl,xc=bc("navigator","userAgent")||"",kc=wc.process,Sc=wc.Deno,_c=kc&&kc.versions||Sc&&Sc.version,Tc=_c&&_c.v8;Tc?sc=(oc=Tc.split("."))[0]<4?1:oc[0]+oc[1]:xc&&(!(oc=xc.match(/Edge\/(\d+)/))||oc[1]>=74)&&(oc=xc.match(/Chrome\/(\d+)/))&&(sc=oc[1]);var Cc=sc&&+sc,Ec=Cc,Qc=Jl,Ic=!!Object.getOwnPropertySymbols&&!Qc((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Ec&&Ec<41})),Ac=Ic&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Pc=bc,$c=Ac?function(e){return"symbol"==typeof e}:function(e){var t=Pc("Symbol");return"function"==typeof t&&Object(e)instanceof t},Rc=vc,Lc={exports:{}},Dc=Zl,Nc=function(e,t){try{Object.defineProperty(Dc,e,{value:t,configurable:!0,writable:!0})}catch(n){Dc[e]=t}return t},Mc=Nc,Wc=Zl["__core-js_shared__"]||Mc("__core-js_shared__",{}),jc=Wc;(Lc.exports=function(e,t){return jc[e]||(jc[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.16.3",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var Fc=fc,Vc=function(e){return Object(Fc(e))},qc=Vc,zc={}.hasOwnProperty,Uc=Object.hasOwn||function(e,t){return zc.call(qc(e),t)},Bc=0,Yc=Math.random(),Xc=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++Bc+Yc).toString(36)},Gc=Zl,Hc=Lc.exports,Zc=Uc,Kc=Xc,Jc=Ic,eu=Ac,tu=Hc("wks"),nu=Gc.Symbol,ru=eu?nu:nu&&nu.withoutSetter||Kc,iu=function(e){return Zc(tu,e)&&(Jc||"string"==typeof tu[e])||(Jc&&Zc(nu,e)?tu[e]=nu[e]:tu[e]=ru("Symbol."+e)),tu[e]},ou=vc,su=$c,au=function(e,t){var n,r;if("string"===t&&"function"==typeof(n=e.toString)&&!Rc(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!Rc(r=n.call(e)))return r;if("string"!==t&&"function"==typeof(n=e.toString)&&!Rc(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},lu=iu("toPrimitive"),cu=function(e,t){if(!ou(e)||su(e))return e;var n,r=e[lu];if(void 0!==r){if(void 0===t&&(t="default"),n=r.call(e,t),!ou(n)||su(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===t&&(t="number"),au(e,t)},uu=$c,hu=function(e){var t=cu(e,"string");return uu(t)?t:String(t)},du=vc,fu=Zl.document,pu=du(fu)&&du(fu.createElement),mu=function(e){return pu?fu.createElement(e):{}},gu=mu,vu=!ec&&!Jl((function(){return 7!=Object.defineProperty(gu("div"),"a",{get:function(){return 7}}).a})),yu=ec,Ou=tc,bu=ac,wu=gc,xu=hu,ku=Uc,Su=vu,_u=Object.getOwnPropertyDescriptor;Kl.f=yu?_u:function(e,t){if(e=wu(e),t=xu(t),Su)try{return _u(e,t)}catch(n){}if(ku(e,t))return bu(!Ou.f.call(e,t),e[t])};var Tu={},Cu=vc,Eu=function(e){if(!Cu(e))throw TypeError(String(e)+" is not an object");return e},Qu=ec,Iu=vu,Au=Eu,Pu=hu,$u=Object.defineProperty;Tu.f=Qu?$u:function(e,t,n){if(Au(e),t=Pu(t),Au(n),Iu)try{return $u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var Ru=Tu,Lu=ac,Du=ec?function(e,t,n){return Ru.f(e,t,Lu(1,n))}:function(e,t,n){return e[t]=n,e},Nu={exports:{}},Mu=Wc,Wu=Function.toString;"function"!=typeof Mu.inspectSource&&(Mu.inspectSource=function(e){return Wu.call(e)});var ju,Fu,Vu,qu=Mu.inspectSource,zu=qu,Uu=Zl.WeakMap,Bu="function"==typeof Uu&&/native code/.test(zu(Uu)),Yu=Lc.exports,Xu=Xc,Gu=Yu("keys"),Hu=function(e){return Gu[e]||(Gu[e]=Xu(e))},Zu={},Ku=Bu,Ju=vc,eh=Du,th=Uc,nh=Wc,rh=Hu,ih=Zu,oh=Zl.WeakMap;if(Ku||nh.state){var sh=nh.state||(nh.state=new oh),ah=sh.get,lh=sh.has,ch=sh.set;ju=function(e,t){if(lh.call(sh,e))throw new TypeError("Object already initialized");return t.facade=e,ch.call(sh,e,t),t},Fu=function(e){return ah.call(sh,e)||{}},Vu=function(e){return lh.call(sh,e)}}else{var uh=rh("state");ih[uh]=!0,ju=function(e,t){if(th(e,uh))throw new TypeError("Object already initialized");return t.facade=e,eh(e,uh,t),t},Fu=function(e){return th(e,uh)?e[uh]:{}},Vu=function(e){return th(e,uh)}}var hh={set:ju,get:Fu,has:Vu,enforce:function(e){return Vu(e)?Fu(e):ju(e,{})},getterFor:function(e){return function(t){var n;if(!Ju(t)||(n=Fu(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},dh=Zl,fh=Du,ph=Uc,mh=Nc,gh=qu,vh=hh.get,yh=hh.enforce,Oh=String(String).split("String");(Nu.exports=function(e,t,n,r){var i,o=!!r&&!!r.unsafe,s=!!r&&!!r.enumerable,a=!!r&&!!r.noTargetGet;"function"==typeof n&&("string"!=typeof t||ph(n,"name")||fh(n,"name",t),(i=yh(n)).source||(i.source=Oh.join("string"==typeof t?t:""))),e!==dh?(o?!a&&e[t]&&(s=!0):delete e[t],s?e[t]=n:fh(e,t,n)):s?e[t]=n:mh(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&vh(this).source||gh(this)}));var bh={},wh=Math.ceil,xh=Math.floor,kh=function(e){return isNaN(e=+e)?0:(e>0?xh:wh)(e)},Sh=kh,_h=Math.min,Th=function(e){return e>0?_h(Sh(e),9007199254740991):0},Ch=kh,Eh=Math.max,Qh=Math.min,Ih=gc,Ah=Th,Ph=function(e,t){var n=Ch(e);return n<0?Eh(n+t,0):Qh(n,t)},$h=function(e){return function(t,n,r){var i,o=Ih(t),s=Ah(o.length),a=Ph(r,s);if(e&&n!=n){for(;s>a;)if((i=o[a++])!=i)return!0}else for(;s>a;a++)if((e||a in o)&&o[a]===n)return e||a||0;return!e&&-1}},Rh={includes:$h(!0),indexOf:$h(!1)},Lh=Uc,Dh=gc,Nh=Rh.indexOf,Mh=Zu,Wh=function(e,t){var n,r=Dh(e),i=0,o=[];for(n in r)!Lh(Mh,n)&&Lh(r,n)&&o.push(n);for(;t.length>i;)Lh(r,n=t[i++])&&(~Nh(o,n)||o.push(n));return o},jh=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Fh=Wh,Vh=jh.concat("length","prototype");bh.f=Object.getOwnPropertyNames||function(e){return Fh(e,Vh)};var qh={};qh.f=Object.getOwnPropertySymbols;var zh=bh,Uh=qh,Bh=Eu,Yh=bc("Reflect","ownKeys")||function(e){var t=zh.f(Bh(e)),n=Uh.f;return n?t.concat(n(e)):t},Xh=Uc,Gh=Yh,Hh=Kl,Zh=Tu,Kh=Jl,Jh=/#|\.prototype\./,ed=function(e,t){var n=nd[td(e)];return n==id||n!=rd&&("function"==typeof t?Kh(t):!!t)},td=ed.normalize=function(e){return String(e).replace(Jh,".").toLowerCase()},nd=ed.data={},rd=ed.NATIVE="N",id=ed.POLYFILL="P",od=ed,sd=Zl,ad=Kl.f,ld=Du,cd=Nu.exports,ud=Nc,hd=function(e,t){for(var n=Gh(t),r=Zh.f,i=Hh.f,o=0;o<n.length;o++){var s=n[o];Xh(e,s)||r(e,s,i(t,s))}},dd=od,fd=function(e,t){var n,r,i,o,s,a=e.target,l=e.global,c=e.stat;if(n=l?sd:c?sd[a]||ud(a,{}):(sd[a]||{}).prototype)for(r in t){if(o=t[r],i=e.noTargetGet?(s=ad(n,r))&&s.value:n[r],!dd(l?r:a+(c?".":"#")+r,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;hd(o,i)}(e.sham||i&&i.sham)&&ld(o,"sham",!0),cd(n,r,o,e)}},pd=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e},md=pd,gd=function(e,t,n){if(md(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}},vd=cc,yd=Array.isArray||function(e){return"Array"==vd(e)},Od=vc,bd=yd,wd=iu("species"),xd=function(e){var t;return bd(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!bd(t.prototype)?Od(t)&&null===(t=t[wd])&&(t=void 0):t=void 0),void 0===t?Array:t},kd=gd,Sd=dc,_d=Vc,Td=Th,Cd=function(e,t){return new(xd(e))(0===t?0:t)},Ed=[].push,Qd=function(e){var t=1==e,n=2==e,r=3==e,i=4==e,o=6==e,s=7==e,a=5==e||o;return function(l,c,u,h){for(var d,f,p=_d(l),m=Sd(p),g=kd(c,u,3),v=Td(m.length),y=0,O=h||Cd,b=t?O(l,v):n||s?O(l,0):void 0;v>y;y++)if((a||y in m)&&(f=g(d=m[y],y,p),e))if(t)b[y]=f;else if(f)switch(e){case 3:return!0;case 5:return d;case 6:return y;case 2:Ed.call(b,d)}else switch(e){case 4:return!1;case 7:Ed.call(b,d)}return o?-1:r||i?i:b}},Id={forEach:Qd(0),map:Qd(1),filter:Qd(2),some:Qd(3),every:Qd(4),find:Qd(5),findIndex:Qd(6),filterReject:Qd(7)},Ad=Jl,Pd=function(e,t){var n=[][e];return!!n&&Ad((function(){n.call(null,t||function(){throw 1},1)}))},$d=Id.forEach,Rd=Pd("forEach")?[].forEach:function(e){return $d(this,e,arguments.length>1?arguments[1]:void 0)};fd({target:"Array",proto:!0,forced:[].forEach!=Rd},{forEach:Rd});var Ld={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Dd=Zl,Nd=Ld,Md=Rd,Wd=Du;for(var jd in Nd){var Fd=Dd[jd],Vd=Fd&&Fd.prototype;if(Vd&&Vd.forEach!==Md)try{Wd(Vd,"forEach",Md)}catch(c6){Vd.forEach=Md}}var qd=!("undefined"==typeof window||!window.document||!window.document.createElement),zd=Jl,Ud=Cc,Bd=iu("species"),Yd=Id.filter;fd({target:"Array",proto:!0,forced:!function(e){return Ud>=51||!zd((function(){var t=[];return(t.constructor={})[Bd]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}("filter")},{filter:function(e){return Yd(this,e,arguments.length>1?arguments[1]:void 0)}});var Xd,Gd=Wh,Hd=jh,Zd=Object.keys||function(e){return Gd(e,Hd)},Kd=Tu,Jd=Eu,ef=Zd,tf=ec?Object.defineProperties:function(e,t){Jd(e);for(var n,r=ef(t),i=r.length,o=0;i>o;)Kd.f(e,n=r[o++],t[n]);return e},nf=bc("document","documentElement"),rf=Eu,of=tf,sf=jh,af=Zu,lf=nf,cf=mu,uf=Hu("IE_PROTO"),hf=function(){},df=function(e){return"<script>"+e+"<\/script>"},ff=function(e){e.write(df("")),e.close();var t=e.parentWindow.Object;return e=null,t},pf=function(){try{Xd=new ActiveXObject("htmlfile")}catch(c6){}var e,t;pf="undefined"!=typeof document?document.domain&&Xd?ff(Xd):((t=cf("iframe")).style.display="none",lf.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(df("document.F=Object")),e.close(),e.F):ff(Xd);for(var n=sf.length;n--;)delete pf.prototype[sf[n]];return pf()};af[uf]=!0;var mf=Object.create||function(e,t){var n;return null!==e?(hf.prototype=rf(e),n=new hf,hf.prototype=null,n[uf]=e):n=pf(),void 0===t?n:of(n,t)},gf=mf,vf=Tu,yf=iu("unscopables"),Of=Array.prototype;null==Of[yf]&&vf.f(Of,yf,{configurable:!0,value:gf(null)});var bf,wf,xf,kf={},Sf=!Jl((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})),_f=Uc,Tf=Vc,Cf=Sf,Ef=Hu("IE_PROTO"),Qf=Object.prototype,If=Cf?Object.getPrototypeOf:function(e){return e=Tf(e),_f(e,Ef)?e[Ef]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?Qf:null},Af=Jl,Pf=If,$f=Du,Rf=Uc,Lf=iu("iterator"),Df=!1;[].keys&&("next"in(xf=[].keys())?(wf=Pf(Pf(xf)))!==Object.prototype&&(bf=wf):Df=!0),(null==bf||Af((function(){var e={};return bf[Lf].call(e)!==e})))&&(bf={}),Rf(bf,Lf)||$f(bf,Lf,(function(){return this}));var Nf={IteratorPrototype:bf,BUGGY_SAFARI_ITERATORS:Df},Mf=Tu.f,Wf=Uc,jf=iu("toStringTag"),Ff=function(e,t,n){e&&!Wf(e=n?e:e.prototype,jf)&&Mf(e,jf,{configurable:!0,value:t})},Vf=Nf.IteratorPrototype,qf=mf,zf=ac,Uf=Ff,Bf=kf,Yf=function(){return this},Xf=vc,Gf=Eu,Hf=function(e){if(!Xf(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e},Zf=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),t=n instanceof Array}catch(c6){}return function(n,r){return Gf(n),Hf(r),t?e.call(n,r):n.__proto__=r,n}}():void 0),Kf=fd,Jf=function(e,t,n){var r=t+" Iterator";return e.prototype=qf(Vf,{next:zf(1,n)}),Uf(e,r,!1),Bf[r]=Yf,e},ep=If,tp=Zf,np=Ff,rp=Du,ip=Nu.exports,op=kf,sp=Nf.IteratorPrototype,ap=Nf.BUGGY_SAFARI_ITERATORS,lp=iu("iterator"),cp=function(){return this},up=function(e,t,n,r,i,o,s){Jf(n,t,r);var a,l,c,u=function(e){if(e===i&&m)return m;if(!ap&&e in f)return f[e];switch(e){case"keys":case"values":case"entries":return function(){return new n(this,e)}}return function(){return new n(this)}},h=t+" Iterator",d=!1,f=e.prototype,p=f[lp]||f["@@iterator"]||i&&f[i],m=!ap&&p||u(i),g="Array"==t&&f.entries||p;if(g&&(a=ep(g.call(new e)),sp!==Object.prototype&&a.next&&(ep(a)!==sp&&(tp?tp(a,sp):"function"!=typeof a[lp]&&rp(a,lp,cp)),np(a,h,!0))),"values"==i&&p&&"values"!==p.name&&(d=!0,m=function(){return p.call(this)}),f[lp]!==m&&rp(f,lp,m),op[t]=m,i)if(l={values:u("values"),keys:o?m:u("keys"),entries:u("entries")},s)for(c in l)(ap||d||!(c in f))&&ip(f,c,l[c]);else Kf({target:t,proto:!0,forced:ap||d},l);return l},hp=gc,dp=function(e){Of[yf][e]=!0},fp=kf,pp=hh,mp=up,gp=pp.set,vp=pp.getterFor("Array Iterator"),yp=mp(Array,"Array",(function(e,t){gp(this,{type:"Array Iterator",target:hp(e),index:0,kind:t})}),(function(){var e=vp(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values");fp.Arguments=fp.Array,dp("keys"),dp("values"),dp("entries");var Op=ec,bp=Jl,wp=Zd,xp=qh,kp=tc,Sp=Vc,_p=dc,Tp=Object.assign,Cp=Object.defineProperty,Ep=!Tp||bp((function(){if(Op&&1!==Tp({b:1},Tp(Cp({},"a",{enumerable:!0,get:function(){Cp(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach((function(e){t[e]=e})),7!=Tp({},e)[n]||wp(Tp({},t)).join("")!=r}))?function(e,t){for(var n=Sp(e),r=arguments.length,i=1,o=xp.f,s=kp.f;r>i;)for(var a,l=_p(arguments[i++]),c=o?wp(l).concat(o(l)):wp(l),u=c.length,h=0;u>h;)a=c[h++],Op&&!s.call(l,a)||(n[a]=l[a]);return n}:Tp;fd({target:"Object",stat:!0,forced:Object.assign!==Ep},{assign:Ep});var Qp={};Qp[iu("toStringTag")]="z";var Ip="[object z]"===String(Qp),Ap=Ip,Pp=cc,$p=iu("toStringTag"),Rp="Arguments"==Pp(function(){return arguments}()),Lp=Ap?Pp:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(c6){}}(t=Object(e),$p))?n:Rp?Pp(t):"Object"==(r=Pp(t))&&"function"==typeof t.callee?"Arguments":r},Dp=Lp,Np=Ip?{}.toString:function(){return"[object "+Dp(this)+"]"},Mp=Ip,Wp=Nu.exports,jp=Np;Mp||Wp(Object.prototype,"toString",jp,{unsafe:!0});var Fp=$c,Vp=function(e){if(Fp(e))throw TypeError("Cannot convert a Symbol value to a string");return String(e)},qp=fc,zp=Vp,Up="[\t\n\v\f\r                　\u2028\u2029\ufeff]",Bp=RegExp("^"+Up+Up+"*"),Yp=RegExp(Up+Up+"*$"),Xp=function(e){return function(t){var n=zp(qp(t));return 1&e&&(n=n.replace(Bp,"")),2&e&&(n=n.replace(Yp,"")),n}},Gp={start:Xp(1),end:Xp(2),trim:Xp(3)},Hp=Vp,Zp=Gp.trim,Kp=Zl.parseInt,Jp=/^[+-]?0[Xx]/,em=8!==Kp("\t\n\v\f\r                　\u2028\u2029\ufeff08")||22!==Kp("\t\n\v\f\r                　\u2028\u2029\ufeff0x16")?function(e,t){var n=Zp(Hp(e));return Kp(n,t>>>0||(Jp.test(n)?16:10))}:Kp;fd({global:!0,forced:parseInt!=em},{parseInt:em});var tm=kh,nm=Vp,rm=fc,im=function(e){return function(t,n){var r,i,o=nm(rm(t)),s=tm(n),a=o.length;return s<0||s>=a?e?"":void 0:(r=o.charCodeAt(s))<55296||r>56319||s+1===a||(i=o.charCodeAt(s+1))<56320||i>57343?e?o.charAt(s):r:e?o.slice(s,s+2):i-56320+(r-55296<<10)+65536}},om={codeAt:im(!1),charAt:im(!0)},sm=om.charAt,am=Vp,lm=hh,cm=up,um=lm.set,hm=lm.getterFor("String Iterator");cm(String,"String",(function(e){um(this,{type:"String Iterator",string:am(e),index:0})}),(function(){var e,t=hm(this),n=t.string,r=t.index;return r>=n.length?{value:void 0,done:!0}:(e=sm(n,r),t.index+=e.length,{value:e,done:!1})}));var dm=Nu.exports,fm=function(e,t,n){for(var r in t)dm(e,r,t[r],n);return e},pm={exports:{}},mm={},gm=gc,vm=bh.f,ym={}.toString,Om="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];mm.f=function(e){return Om&&"[object Window]"==ym.call(e)?function(e){try{return vm(e)}catch(c6){return Om.slice()}}(e):vm(gm(e))};var bm=!Jl((function(){return Object.isExtensible(Object.preventExtensions({}))})),wm=fd,xm=Zu,km=vc,Sm=Uc,_m=Tu.f,Tm=bh,Cm=mm,Em=bm,Qm=!1,Im=Xc("meta"),Am=0,Pm=Object.isExtensible||function(){return!0},$m=function(e){_m(e,Im,{value:{objectID:"O"+Am++,weakData:{}}})},Rm=pm.exports={enable:function(){Rm.enable=function(){},Qm=!0;var e=Tm.f,t=[].splice,n={};n[Im]=1,e(n).length&&(Tm.f=function(n){for(var r=e(n),i=0,o=r.length;i<o;i++)if(r[i]===Im){t.call(r,i,1);break}return r},wm({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:Cm.f}))},fastKey:function(e,t){if(!km(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!Sm(e,Im)){if(!Pm(e))return"F";if(!t)return"E";$m(e)}return e[Im].objectID},getWeakData:function(e,t){if(!Sm(e,Im)){if(!Pm(e))return!0;if(!t)return!1;$m(e)}return e[Im].weakData},onFreeze:function(e){return Em&&Qm&&Pm(e)&&!Sm(e,Im)&&$m(e),e}};xm[Im]=!0;var Lm=kf,Dm=iu("iterator"),Nm=Array.prototype,Mm=Lp,Wm=kf,jm=iu("iterator"),Fm=Eu,Vm=Eu,qm=function(e){return void 0!==e&&(Lm.Array===e||Nm[Dm]===e)},zm=Th,Um=gd,Bm=function(e){if(null!=e)return e[jm]||e["@@iterator"]||Wm[Mm(e)]},Ym=function(e){var t=e.return;if(void 0!==t)return Fm(t.call(e)).value},Xm=function(e,t){this.stopped=e,this.result=t},Gm=function(e,t,n){var r,i,o,s,a,l,c,u=n&&n.that,h=!(!n||!n.AS_ENTRIES),d=!(!n||!n.IS_ITERATOR),f=!(!n||!n.INTERRUPTED),p=Um(t,u,1+h+f),m=function(e){return r&&Ym(r),new Xm(!0,e)},g=function(e){return h?(Vm(e),f?p(e[0],e[1],m):p(e[0],e[1])):f?p(e,m):p(e)};if(d)r=e;else{if("function"!=typeof(i=Bm(e)))throw TypeError("Target is not iterable");if(qm(i)){for(o=0,s=zm(e.length);s>o;o++)if((a=g(e[o]))&&a instanceof Xm)return a;return new Xm(!1)}r=i.call(e)}for(l=r.next;!(c=l.call(r)).done;){try{a=g(c.value)}catch(c6){throw Ym(r),c6}if("object"==typeof a&&a&&a instanceof Xm)return a}return new Xm(!1)},Hm=function(e,t,n){if(!(e instanceof t))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return e},Zm=iu("iterator"),Km=!1;try{var Jm=0,eg={next:function(){return{done:!!Jm++}},return:function(){Km=!0}};eg[Zm]=function(){return this},Array.from(eg,(function(){throw 2}))}catch(c6){}var tg=vc,ng=Zf,rg=fd,ig=Zl,og=od,sg=Nu.exports,ag=pm.exports,lg=Gm,cg=Hm,ug=vc,hg=Jl,dg=function(e,t){if(!t&&!Km)return!1;var n=!1;try{var r={};r[Zm]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c6){}return n},fg=Ff,pg=function(e,t,n){var r,i;return ng&&"function"==typeof(r=t.constructor)&&r!==n&&tg(i=r.prototype)&&i!==n.prototype&&ng(e,i),e},mg=fm,gg=pm.exports.getWeakData,vg=Eu,yg=vc,Og=Hm,bg=Gm,wg=Uc,xg=hh.set,kg=hh.getterFor,Sg=Id.find,_g=Id.findIndex,Tg=0,Cg=function(e){return e.frozen||(e.frozen=new Eg)},Eg=function(){this.entries=[]},Qg=function(e,t){return Sg(e.entries,(function(e){return e[0]===t}))};Eg.prototype={get:function(e){var t=Qg(this,e);if(t)return t[1]},has:function(e){return!!Qg(this,e)},set:function(e,t){var n=Qg(this,e);n?n[1]=t:this.entries.push([e,t])},delete:function(e){var t=_g(this.entries,(function(t){return t[0]===e}));return~t&&this.entries.splice(t,1),!!~t}};var Ig,Ag={getConstructor:function(e,t,n,r){var i=e((function(e,o){Og(e,i,t),xg(e,{type:t,id:Tg++,frozen:void 0}),null!=o&&bg(o,e[r],{that:e,AS_ENTRIES:n})})),o=kg(t),s=function(e,t,n){var r=o(e),i=gg(vg(t),!0);return!0===i?Cg(r).set(t,n):i[r.id]=n,e};return mg(i.prototype,{delete:function(e){var t=o(this);if(!yg(e))return!1;var n=gg(e);return!0===n?Cg(t).delete(e):n&&wg(n,t.id)&&delete n[t.id]},has:function(e){var t=o(this);if(!yg(e))return!1;var n=gg(e);return!0===n?Cg(t).has(e):n&&wg(n,t.id)}}),mg(i.prototype,n?{get:function(e){var t=o(this);if(yg(e)){var n=gg(e);return!0===n?Cg(t).get(e):n?n[t.id]:void 0}},set:function(e,t){return s(this,e,t)}}:{add:function(e){return s(this,e,!0)}}),i}},Pg=Zl,$g=fm,Rg=pm.exports,Lg=function(e,t,n){var r=-1!==e.indexOf("Map"),i=-1!==e.indexOf("Weak"),o=r?"set":"add",s=ig[e],a=s&&s.prototype,l=s,c={},u=function(e){var t=a[e];sg(a,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(i&&!ug(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return i&&!ug(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(i&&!ug(e))&&t.call(this,0===e?0:e)}:function(e,n){return t.call(this,0===e?0:e,n),this})};if(og(e,"function"!=typeof s||!(i||a.forEach&&!hg((function(){(new s).entries().next()})))))l=n.getConstructor(t,e,r,o),ag.enable();else if(og(e,!0)){var h=new l,d=h[o](i?{}:-0,1)!=h,f=hg((function(){h.has(1)})),p=dg((function(e){new s(e)})),m=!i&&hg((function(){for(var e=new s,t=5;t--;)e[o](t,t);return!e.has(-0)}));p||((l=t((function(t,n){cg(t,l,e);var i=pg(new s,t,l);return null!=n&&lg(n,i[o],{that:i,AS_ENTRIES:r}),i}))).prototype=a,a.constructor=l),(f||m)&&(u("delete"),u("has"),r&&u("get")),(m||d)&&u(o),i&&a.clear&&delete a.clear}return c[e]=l,rg({global:!0,forced:l!=s},c),fg(l,e),i||n.setStrong(l,e,r),l},Dg=Ag,Ng=vc,Mg=hh.enforce,Wg=Bu,jg=!Pg.ActiveXObject&&"ActiveXObject"in Pg,Fg=Object.isExtensible,Vg=function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},qg=Lg("WeakMap",Vg,Dg);if(Wg&&jg){Ig=Dg.getConstructor(Vg,"WeakMap",!0),Rg.enable();var zg=qg.prototype,Ug=zg.delete,Bg=zg.has,Yg=zg.get,Xg=zg.set;$g(zg,{delete:function(e){if(Ng(e)&&!Fg(e)){var t=Mg(this);return t.frozen||(t.frozen=new Ig),Ug.call(this,e)||t.frozen.delete(e)}return Ug.call(this,e)},has:function(e){if(Ng(e)&&!Fg(e)){var t=Mg(this);return t.frozen||(t.frozen=new Ig),Bg.call(this,e)||t.frozen.has(e)}return Bg.call(this,e)},get:function(e){if(Ng(e)&&!Fg(e)){var t=Mg(this);return t.frozen||(t.frozen=new Ig),Bg.call(this,e)?Yg.call(this,e):t.frozen.get(e)}return Yg.call(this,e)},set:function(e,t){if(Ng(e)&&!Fg(e)){var n=Mg(this);n.frozen||(n.frozen=new Ig),Bg.call(this,e)?Xg.call(this,e,t):n.frozen.set(e,t)}else Xg.call(this,e,t);return this}})}var Gg=Zl,Hg=Ld,Zg=yp,Kg=Du,Jg=iu,ev=Jg("iterator"),tv=Jg("toStringTag"),nv=Zg.values;for(var rv in Hg){var iv=Gg[rv],ov=iv&&iv.prototype;if(ov){if(ov[ev]!==nv)try{Kg(ov,ev,nv)}catch(c6){ov[ev]=nv}if(ov[tv]||Kg(ov,tv,rv),Hg[rv])for(var sv in Zg)if(ov[sv]!==Zg[sv])try{Kg(ov,sv,Zg[sv])}catch(c6){ov[sv]=Zg[sv]}}}var av=/^\s+|\s+$/g,lv=/^[-+]0x[0-9a-f]+$/i,cv=/^0b[01]+$/i,uv=/^0o[0-7]+$/i,hv=parseInt,dv="object"==typeof Ri&&Ri&&Ri.Object===Object&&Ri,fv="object"==typeof self&&self&&self.Object===Object&&self,pv=dv||fv||Function("return this")(),mv=Object.prototype.toString,gv=Math.max,vv=Math.min,yv=function(){return pv.Date.now()};function Ov(e,t,n){var r,i,o,s,a,l,c=0,u=!1,h=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,o=i;return r=i=void 0,c=t,s=e.apply(o,n)}function p(e){return c=e,a=setTimeout(g,t),u?f(e):s}function m(e){var n=e-l;return void 0===l||n>=t||n<0||h&&e-c>=o}function g(){var e=yv();if(m(e))return v(e);a=setTimeout(g,function(e){var n=t-(e-l);return h?vv(n,o-(e-c)):n}(e))}function v(e){return a=void 0,d&&r?f(e):(r=i=void 0,s)}function y(){var e=yv(),n=m(e);if(r=arguments,i=this,l=e,n){if(void 0===a)return p(l);if(h)return a=setTimeout(g,t),f(l)}return void 0===a&&(a=setTimeout(g,t)),s}return t=wv(t)||0,bv(n)&&(u=!!n.leading,o=(h="maxWait"in n)?gv(wv(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d),y.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=l=i=a=void 0},y.flush=function(){return void 0===a?s:v(yv())},y}function bv(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function wv(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==mv.call(e)}(e))return NaN;if(bv(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=bv(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(av,"");var n=cv.test(e);return n||uv.test(e)?hv(e.slice(2),n?2:8):lv.test(e)?NaN:+e}var xv=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return bv(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Ov(e,t,{leading:r,maxWait:t,trailing:i})},kv=/^\s+|\s+$/g,Sv=/^[-+]0x[0-9a-f]+$/i,_v=/^0b[01]+$/i,Tv=/^0o[0-7]+$/i,Cv=parseInt,Ev="object"==typeof Ri&&Ri&&Ri.Object===Object&&Ri,Qv="object"==typeof self&&self&&self.Object===Object&&self,Iv=Ev||Qv||Function("return this")(),Av=Object.prototype.toString,Pv=Math.max,$v=Math.min,Rv=function(){return Iv.Date.now()};function Lv(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Dv(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==Av.call(e)}(e))return NaN;if(Lv(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Lv(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(kv,"");var n=_v.test(e);return n||Tv.test(e)?Cv(e.slice(2),n?2:8):Sv.test(e)?NaN:+e}var Nv=function(e,t,n){var r,i,o,s,a,l,c=0,u=!1,h=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,o=i;return r=i=void 0,c=t,s=e.apply(o,n)}function p(e){return c=e,a=setTimeout(g,t),u?f(e):s}function m(e){var n=e-l;return void 0===l||n>=t||n<0||h&&e-c>=o}function g(){var e=Rv();if(m(e))return v(e);a=setTimeout(g,function(e){var n=t-(e-l);return h?$v(n,o-(e-c)):n}(e))}function v(e){return a=void 0,d&&r?f(e):(r=i=void 0,s)}function y(){var e=Rv(),n=m(e);if(r=arguments,i=this,l=e,n){if(void 0===a)return p(l);if(h)return a=setTimeout(g,t),f(l)}return void 0===a&&(a=setTimeout(g,t)),s}return t=Dv(t)||0,Lv(n)&&(u=!!n.leading,o=(h="maxWait"in n)?Pv(Dv(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d),y.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=l=i=a=void 0},y.flush=function(){return void 0===a?s:v(Rv())},y},Mv="[object GeneratorFunction]",Wv=/^\[object .+?Constructor\]$/,jv="object"==typeof Ri&&Ri&&Ri.Object===Object&&Ri,Fv="object"==typeof self&&self&&self.Object===Object&&self,Vv=jv||Fv||Function("return this")();var qv,zv=Array.prototype,Uv=Function.prototype,Bv=Object.prototype,Yv=Vv["__core-js_shared__"],Xv=(qv=/[^.]+$/.exec(Yv&&Yv.keys&&Yv.keys.IE_PROTO||""))?"Symbol(src)_1."+qv:"",Gv=Uv.toString,Hv=Bv.hasOwnProperty,Zv=Bv.toString,Kv=RegExp("^"+Gv.call(Hv).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Jv=zv.splice,ey=ly(Vv,"Map"),ty=ly(Object,"create");function ny(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function ry(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function iy(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function oy(e,t){for(var n,r,i=e.length;i--;)if((n=e[i][0])===(r=t)||n!=n&&r!=r)return i;return-1}function sy(e){return!(!uy(e)||(t=e,Xv&&Xv in t))&&(function(e){var t=uy(e)?Zv.call(e):"";return"[object Function]"==t||t==Mv}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(l6){}return t}(e)?Kv:Wv).test(function(e){if(null!=e){try{return Gv.call(e)}catch(l6){}try{return e+""}catch(l6){}}return""}(e));var t}function ay(e,t){var n,r,i=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof t?"string":"hash"]:i.map}function ly(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return sy(n)?n:void 0}function cy(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var s=e.apply(this,r);return n.cache=o.set(i,s),s};return n.cache=new(cy.Cache||iy),n}function uy(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}ny.prototype.clear=function(){this.__data__=ty?ty(null):{}},ny.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},ny.prototype.get=function(e){var t=this.__data__;if(ty){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Hv.call(t,e)?t[e]:void 0},ny.prototype.has=function(e){var t=this.__data__;return ty?void 0!==t[e]:Hv.call(t,e)},ny.prototype.set=function(e,t){return this.__data__[e]=ty&&void 0===t?"__lodash_hash_undefined__":t,this},ry.prototype.clear=function(){this.__data__=[]},ry.prototype.delete=function(e){var t=this.__data__,n=oy(t,e);return!(n<0)&&(n==t.length-1?t.pop():Jv.call(t,n,1),!0)},ry.prototype.get=function(e){var t=this.__data__,n=oy(t,e);return n<0?void 0:t[n][1]},ry.prototype.has=function(e){return oy(this.__data__,e)>-1},ry.prototype.set=function(e,t){var n=this.__data__,r=oy(n,e);return r<0?n.push([e,t]):n[r][1]=t,this},iy.prototype.clear=function(){this.__data__={hash:new ny,map:new(ey||ry),string:new ny}},iy.prototype.delete=function(e){return ay(this,e).delete(e)},iy.prototype.get=function(e){return ay(this,e).get(e)},iy.prototype.has=function(e){return ay(this,e).has(e)},iy.prototype.set=function(e,t){return ay(this,e).set(e,t),this},cy.Cache=iy;var hy,dy,fy=cy,py=[],my="ResizeObserver loop completed with undelivered notifications.";(dy=hy||(hy={})).BORDER_BOX="border-box",dy.CONTENT_BOX="content-box",dy.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box";var gy,vy=function(e){return Object.freeze(e)},yy=function(e,t){this.inlineSize=e,this.blockSize=t,vy(this)},Oy=function(){function e(e,t,n,r){return this.x=e,this.y=t,this.width=n,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,vy(this)}return e.prototype.toJSON=function(){var e=this;return{x:e.x,y:e.y,top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),by=function(e){return e instanceof SVGElement&&"getBBox"in e},wy=function(e){if(by(e)){var t=e.getBBox(),n=t.width,r=t.height;return!n&&!r}var i=e,o=i.offsetWidth,s=i.offsetHeight;return!(o||s||e.getClientRects().length)},xy=function(e){var t,n;if(e instanceof Element)return!0;var r=null===(n=null===(t=e)||void 0===t?void 0:t.ownerDocument)||void 0===n?void 0:n.defaultView;return!!(r&&e instanceof r.Element)},ky="undefined"!=typeof window?window:{},Sy=new WeakMap,_y=/auto|scroll/,Ty=/^tb|vertical/,Cy=/msie|trident/i.test(ky.navigator&&ky.navigator.userAgent),Ey=function(e){return parseFloat(e||"0")},Qy=function(e,t,n){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===n&&(n=!1),new yy((n?t:e)||0,(n?e:t)||0)},Iy=vy({devicePixelContentBoxSize:Qy(),borderBoxSize:Qy(),contentBoxSize:Qy(),contentRect:new Oy(0,0,0,0)}),Ay=function(e,t){if(void 0===t&&(t=!1),Sy.has(e)&&!t)return Sy.get(e);if(wy(e))return Sy.set(e,Iy),Iy;var n=getComputedStyle(e),r=by(e)&&e.ownerSVGElement&&e.getBBox(),i=!Cy&&"border-box"===n.boxSizing,o=Ty.test(n.writingMode||""),s=!r&&_y.test(n.overflowY||""),a=!r&&_y.test(n.overflowX||""),l=r?0:Ey(n.paddingTop),c=r?0:Ey(n.paddingRight),u=r?0:Ey(n.paddingBottom),h=r?0:Ey(n.paddingLeft),d=r?0:Ey(n.borderTopWidth),f=r?0:Ey(n.borderRightWidth),p=r?0:Ey(n.borderBottomWidth),m=h+c,g=l+u,v=(r?0:Ey(n.borderLeftWidth))+f,y=d+p,O=a?e.offsetHeight-y-e.clientHeight:0,b=s?e.offsetWidth-v-e.clientWidth:0,w=i?m+v:0,x=i?g+y:0,k=r?r.width:Ey(n.width)-w-b,S=r?r.height:Ey(n.height)-x-O,_=k+m+b+v,T=S+g+O+y,C=vy({devicePixelContentBoxSize:Qy(Math.round(k*devicePixelRatio),Math.round(S*devicePixelRatio),o),borderBoxSize:Qy(_,T,o),contentBoxSize:Qy(k,S,o),contentRect:new Oy(h,l,k,S)});return Sy.set(e,C),C},Py=function(e,t,n){var r=Ay(e,n),i=r.borderBoxSize,o=r.contentBoxSize,s=r.devicePixelContentBoxSize;switch(t){case hy.DEVICE_PIXEL_CONTENT_BOX:return s;case hy.BORDER_BOX:return i;default:return o}},$y=function(e){var t=Ay(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=vy([t.borderBoxSize]),this.contentBoxSize=vy([t.contentBoxSize]),this.devicePixelContentBoxSize=vy([t.devicePixelContentBoxSize])},Ry=function(e){if(wy(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},Ly=function(){var e=1/0,t=[];py.forEach((function(n){if(0!==n.activeTargets.length){var r=[];n.activeTargets.forEach((function(t){var n=new $y(t.target),i=Ry(t.target);r.push(n),t.lastReportedSize=Py(t.target,t.observedBox),i<e&&(e=i)})),t.push((function(){n.callback.call(n.observer,r,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,r=t;n<r.length;n++){(0,r[n])()}return e},Dy=function(e){py.forEach((function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach((function(n){n.isActive()&&(Ry(n.target)>e?t.activeTargets.push(n):t.skippedTargets.push(n))}))}))},Ny=function(){var e,t=0;for(Dy(t);py.some((function(e){return e.activeTargets.length>0}));)t=Ly(),Dy(t);return py.some((function(e){return e.skippedTargets.length>0}))&&("function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:my}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=my),window.dispatchEvent(e)),t>0},My=[],Wy=function(e){if(!gy){var t=0,n=document.createTextNode("");new MutationObserver((function(){return My.splice(0).forEach((function(e){return e()}))})).observe(n,{characterData:!0}),gy=function(){n.textContent=""+(t?t--:t++)}}My.push(e),gy()},jy=0,Fy={attributes:!0,characterData:!0,childList:!0,subtree:!0},Vy=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],qy=function(e){return void 0===e&&(e=0),Date.now()+e},zy=!1,Uy=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!zy){zy=!0;var n,r=qy(e);n=function(){var n=!1;try{n=Ny()}finally{if(zy=!1,e=r-qy(),!jy)return;n?t.run(1e3):e>0?t.run(e):t.start()}},Wy((function(){requestAnimationFrame(n)}))}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,Fy)};document.body?t():ky.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),Vy.forEach((function(t){return ky.addEventListener(t,e.listener,!0)})))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),Vy.forEach((function(t){return ky.removeEventListener(t,e.listener,!0)})),this.stopped=!0)},e}()),By=function(e){!jy&&e>0&&Uy.start(),!(jy+=e)&&Uy.stop()},Yy=function(){function e(e,t){this.target=e,this.observedBox=t||hy.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=Py(this.target,this.observedBox,!0);return e=this.target,by(e)||function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),Xy=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},Gy=new WeakMap,Hy=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},Zy=function(){function e(){}return e.connect=function(e,t){var n=new Xy(e,t);Gy.set(e,n)},e.observe=function(e,t,n){var r=Gy.get(e),i=0===r.observationTargets.length;Hy(r.observationTargets,t)<0&&(i&&py.push(r),r.observationTargets.push(new Yy(t,n&&n.box)),By(1),Uy.schedule())},e.unobserve=function(e,t){var n=Gy.get(e),r=Hy(n.observationTargets,t),i=1===n.observationTargets.length;r>=0&&(i&&py.splice(py.indexOf(n),1),n.observationTargets.splice(r,1),By(-1))},e.disconnect=function(e){var t=this,n=Gy.get(e);n.observationTargets.slice().forEach((function(n){return t.unobserve(e,n.target)})),n.activeTargets.splice(0,n.activeTargets.length)},e}(),Ky=function(){function e(e){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Zy.connect(this,e)}return e.prototype.observe=function(e,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!xy(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Zy.observe(this,e,t)},e.prototype.unobserve=function(e){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!xy(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Zy.unobserve(this,e)},e.prototype.disconnect=function(){Zy.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}(),Jy=pd,eO=Vc,tO=dc,nO=Th,rO=function(e){return function(t,n,r,i){Jy(n);var o=eO(t),s=tO(o),a=nO(o.length),l=e?a-1:0,c=e?-1:1;if(r<2)for(;;){if(l in s){i=s[l],l+=c;break}if(l+=c,e?l<0:a<=l)throw TypeError("Reduce of empty array with no initial value")}for(;e?l>=0:a>l;l+=c)l in s&&(i=n(i,s[l],l,o));return i}},iO={left:rO(!1),right:rO(!0)},oO="process"==cc(Zl.process),sO=iO.left,aO=Cc,lO=oO;fd({target:"Array",proto:!0,forced:!Pd("reduce")||!lO&&aO>79&&aO<83},{reduce:function(e){return sO(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}});var cO=ec,uO=Tu.f,hO=Function.prototype,dO=hO.toString,fO=/^\s*function ([^ (]*)/;cO&&!("name"in hO)&&uO(hO,"name",{configurable:!0,get:function(){try{return dO.call(this).match(fO)[1]}catch(c6){return""}}});var pO=Eu,mO={},gO=Jl,vO=Zl.RegExp;mO.UNSUPPORTED_Y=gO((function(){var e=vO("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),mO.BROKEN_CARET=gO((function(){var e=vO("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));var yO,OO,bO=Jl,wO=Zl.RegExp,xO=bO((function(){var e=wO(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)})),kO=Jl,SO=Zl.RegExp,_O=kO((function(){var e=SO("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")})),TO=Vp,CO=function(){var e=pO(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},EO=mO,QO=Lc.exports,IO=mf,AO=hh.get,PO=xO,$O=_O,RO=RegExp.prototype.exec,LO=QO("native-string-replace",String.prototype.replace),DO=RO,NO=(yO=/a/,OO=/b*/g,RO.call(yO,"a"),RO.call(OO,"a"),0!==yO.lastIndex||0!==OO.lastIndex),MO=EO.UNSUPPORTED_Y||EO.BROKEN_CARET,WO=void 0!==/()??/.exec("")[1];(NO||WO||MO||PO||$O)&&(DO=function(e){var t,n,r,i,o,s,a,l=this,c=AO(l),u=TO(e),h=c.raw;if(h)return h.lastIndex=l.lastIndex,t=DO.call(h,u),l.lastIndex=h.lastIndex,t;var d=c.groups,f=MO&&l.sticky,p=CO.call(l),m=l.source,g=0,v=u;if(f&&(-1===(p=p.replace("y","")).indexOf("g")&&(p+="g"),v=u.slice(l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&"\n"!==u.charAt(l.lastIndex-1))&&(m="(?: "+m+")",v=" "+v,g++),n=new RegExp("^(?:"+m+")",p)),WO&&(n=new RegExp("^"+m+"$(?!\\s)",p)),NO&&(r=l.lastIndex),i=RO.call(f?n:l,v),f?i?(i.input=i.input.slice(g),i[0]=i[0].slice(g),i.index=l.lastIndex,l.lastIndex+=i[0].length):l.lastIndex=0:NO&&i&&(l.lastIndex=l.global?i.index+i[0].length:r),WO&&i&&i.length>1&&LO.call(i[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(i[o]=void 0)})),i&&d)for(i.groups=s=IO(null),o=0;o<d.length;o++)s[(a=d[o])[0]]=i[a[1]];return i});var jO=DO;fd({target:"RegExp",proto:!0,forced:/./.exec!==jO},{exec:jO});var FO=Nu.exports,VO=jO,qO=Jl,zO=iu,UO=Du,BO=zO("species"),YO=RegExp.prototype,XO=function(e,t,n,r){var i=zO(e),o=!qO((function(){var t={};return t[i]=function(){return 7},7!=""[e](t)})),s=o&&!qO((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[BO]=function(){return n},n.flags="",n[i]=/./[i]),n.exec=function(){return t=!0,null},n[i](""),!t}));if(!o||!s||n){var a=/./[i],l=t(i,""[e],(function(e,t,n,r,i){var s=t.exec;return s===VO||s===YO.exec?o&&!i?{done:!0,value:a.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}));FO(String.prototype,e,l[0]),FO(YO,i,l[1])}r&&UO(YO[i],"sham",!0)},GO=om.charAt,HO=function(e,t,n){return t+(n?GO(e,t).length:1)},ZO=cc,KO=jO,JO=function(e,t){var n=e.exec;if("function"==typeof n){var r=n.call(e,t);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==ZO(e))throw TypeError("RegExp#exec called on incompatible receiver");return KO.call(e,t)},eb=Eu,tb=Th,nb=Vp,rb=fc,ib=HO,ob=JO;XO("match",(function(e,t,n){return[function(t){var n=rb(this),r=null==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](nb(n))},function(e){var r=eb(this),i=nb(e),o=n(t,r,i);if(o.done)return o.value;if(!r.global)return ob(r,i);var s=r.unicode;r.lastIndex=0;for(var a,l=[],c=0;null!==(a=ob(r,i));){var u=nb(a[0]);l[c]=u,""===u&&(r.lastIndex=ib(i,tb(r.lastIndex),s)),c++}return 0===c?null:l}]}));var sb=Vc,ab=Math.floor,lb="".replace,cb=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,ub=/\$([$&'`]|\d{1,2})/g,hb=XO,db=Jl,fb=Eu,pb=kh,mb=Th,gb=Vp,vb=fc,yb=HO,Ob=function(e,t,n,r,i,o){var s=n+e.length,a=r.length,l=ub;return void 0!==i&&(i=sb(i),l=cb),lb.call(o,l,(function(o,l){var c;switch(l.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(s);case"<":c=i[l.slice(1,-1)];break;default:var u=+l;if(0===u)return o;if(u>a){var h=ab(u/10);return 0===h?o:h<=a?void 0===r[h-1]?l.charAt(1):r[h-1]+l.charAt(1):o}c=r[u-1]}return void 0===c?"":c}))},bb=JO,wb=iu("replace"),xb=Math.max,kb=Math.min,Sb="$0"==="a".replace(/./,"$0"),_b=!!/./[wb]&&""===/./[wb]("a","$0");hb("replace",(function(e,t,n){var r=_b?"$":"$0";return[function(e,n){var r=vb(this),i=null==e?void 0:e[wb];return void 0!==i?i.call(e,r,n):t.call(gb(r),e,n)},function(e,i){var o=fb(this),s=gb(e);if("string"==typeof i&&-1===i.indexOf(r)&&-1===i.indexOf("$<")){var a=n(t,o,s,i);if(a.done)return a.value}var l="function"==typeof i;l||(i=gb(i));var c=o.global;if(c){var u=o.unicode;o.lastIndex=0}for(var h=[];;){var d=bb(o,s);if(null===d)break;if(h.push(d),!c)break;""===gb(d[0])&&(o.lastIndex=yb(s,mb(o.lastIndex),u))}for(var f,p="",m=0,g=0;g<h.length;g++){d=h[g];for(var v=gb(d[0]),y=xb(kb(pb(d.index),s.length),0),O=[],b=1;b<d.length;b++)O.push(void 0===(f=d[b])?f:String(f));var w=d.groups;if(l){var x=[v].concat(O,y,s);void 0!==w&&x.push(w);var k=gb(i.apply(void 0,x))}else k=Ob(v,s,y,O,w,i);y>=m&&(p+=s.slice(m,y)+k,m=y+v.length)}return p+s.slice(m)}]}),!!db((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}))||!Sb||_b);var Tb=function(e){return Array.prototype.reduce.call(e,(function(e,t){var n=t.name.match(/data-simplebar-(.+)/);if(n){var r=n[1].replace(/\W+(.)/g,(function(e,t){return t.toUpperCase()}));switch(t.value){case"true":e[r]=!0;break;case"false":e[r]=!1;break;case void 0:e[r]=!0;break;default:e[r]=t.value}}return e}),{})};function Cb(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView?e.ownerDocument.defaultView:window}function Eb(e){return e&&e.ownerDocument?e.ownerDocument:document}var Qb=null,Ib=null;function Ab(e){if(null===Qb){var t=Eb(e);if(void 0===t)return Qb=0;var n=t.body,r=t.createElement("div");r.classList.add("simplebar-hide-scrollbar"),n.appendChild(r);var i=r.getBoundingClientRect().right;n.removeChild(r),Qb=i}return Qb}qd&&window.addEventListener("resize",(function(){Ib!==window.devicePixelRatio&&(Ib=window.devicePixelRatio,Qb=null)}));var Pb=function(){function e(t,n){var r=this;this.onScroll=function(){var e=Cb(r.el);r.scrollXTicking||(e.requestAnimationFrame(r.scrollX),r.scrollXTicking=!0),r.scrollYTicking||(e.requestAnimationFrame(r.scrollY),r.scrollYTicking=!0)},this.scrollX=function(){r.axis.x.isOverflowing&&(r.showScrollbar("x"),r.positionScrollbar("x")),r.scrollXTicking=!1},this.scrollY=function(){r.axis.y.isOverflowing&&(r.showScrollbar("y"),r.positionScrollbar("y")),r.scrollYTicking=!1},this.onMouseEnter=function(){r.showScrollbar("x"),r.showScrollbar("y")},this.onMouseMove=function(e){r.mouseX=e.clientX,r.mouseY=e.clientY,(r.axis.x.isOverflowing||r.axis.x.forceVisible)&&r.onMouseMoveForAxis("x"),(r.axis.y.isOverflowing||r.axis.y.forceVisible)&&r.onMouseMoveForAxis("y")},this.onMouseLeave=function(){r.onMouseMove.cancel(),(r.axis.x.isOverflowing||r.axis.x.forceVisible)&&r.onMouseLeaveForAxis("x"),(r.axis.y.isOverflowing||r.axis.y.forceVisible)&&r.onMouseLeaveForAxis("y"),r.mouseX=-1,r.mouseY=-1},this.onWindowResize=function(){r.scrollbarWidth=r.getScrollbarWidth(),r.hideNativeScrollbar()},this.hideScrollbars=function(){r.axis.x.track.rect=r.axis.x.track.el.getBoundingClientRect(),r.axis.y.track.rect=r.axis.y.track.el.getBoundingClientRect(),r.isWithinBounds(r.axis.y.track.rect)||(r.axis.y.scrollbar.el.classList.remove(r.classNames.visible),r.axis.y.isVisible=!1),r.isWithinBounds(r.axis.x.track.rect)||(r.axis.x.scrollbar.el.classList.remove(r.classNames.visible),r.axis.x.isVisible=!1)},this.onPointerEvent=function(e){var t,n;r.axis.x.track.rect=r.axis.x.track.el.getBoundingClientRect(),r.axis.y.track.rect=r.axis.y.track.el.getBoundingClientRect(),(r.axis.x.isOverflowing||r.axis.x.forceVisible)&&(t=r.isWithinBounds(r.axis.x.track.rect)),(r.axis.y.isOverflowing||r.axis.y.forceVisible)&&(n=r.isWithinBounds(r.axis.y.track.rect)),(t||n)&&(e.preventDefault(),e.stopPropagation(),"mousedown"===e.type&&(t&&(r.axis.x.scrollbar.rect=r.axis.x.scrollbar.el.getBoundingClientRect(),r.isWithinBounds(r.axis.x.scrollbar.rect)?r.onDragStart(e,"x"):r.onTrackClick(e,"x")),n&&(r.axis.y.scrollbar.rect=r.axis.y.scrollbar.el.getBoundingClientRect(),r.isWithinBounds(r.axis.y.scrollbar.rect)?r.onDragStart(e,"y"):r.onTrackClick(e,"y"))))},this.drag=function(t){var n=r.axis[r.draggedAxis].track,i=n.rect[r.axis[r.draggedAxis].sizeAttr],o=r.axis[r.draggedAxis].scrollbar,s=r.contentWrapperEl[r.axis[r.draggedAxis].scrollSizeAttr],a=parseInt(r.elStyles[r.axis[r.draggedAxis].sizeAttr],10);t.preventDefault(),t.stopPropagation();var l=(("y"===r.draggedAxis?t.pageY:t.pageX)-n.rect[r.axis[r.draggedAxis].offsetAttr]-r.axis[r.draggedAxis].dragOffset)/(i-o.size)*(s-a);"x"===r.draggedAxis&&(l=r.isRtl&&e.getRtlHelpers().isRtlScrollbarInverted?l-(i+o.size):l,l=r.isRtl&&e.getRtlHelpers().isRtlScrollingInverted?-l:l),r.contentWrapperEl[r.axis[r.draggedAxis].scrollOffsetAttr]=l},this.onEndDrag=function(e){var t=Eb(r.el),n=Cb(r.el);e.preventDefault(),e.stopPropagation(),r.el.classList.remove(r.classNames.dragging),t.removeEventListener("mousemove",r.drag,!0),t.removeEventListener("mouseup",r.onEndDrag,!0),r.removePreventClickId=n.setTimeout((function(){t.removeEventListener("click",r.preventClick,!0),t.removeEventListener("dblclick",r.preventClick,!0),r.removePreventClickId=null}))},this.preventClick=function(e){e.preventDefault(),e.stopPropagation()},this.el=t,this.minScrollbarWidth=20,this.options=Object.assign({},e.defaultOptions,{},n),this.classNames=Object.assign({},e.defaultOptions.classNames,{},this.options.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}}},this.removePreventClickId=null,e.instances.has(this.el)||(this.recalculate=xv(this.recalculate.bind(this),64),this.onMouseMove=xv(this.onMouseMove.bind(this),64),this.hideScrollbars=Nv(this.hideScrollbars.bind(this),this.options.timeout),this.onWindowResize=Nv(this.onWindowResize.bind(this),64,{leading:!0}),e.getRtlHelpers=fy(e.getRtlHelpers),this.init())}e.getRtlHelpers=function(){var t=document.createElement("div");t.innerHTML='<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';var n=t.firstElementChild;document.body.appendChild(n);var r=n.firstElementChild;n.scrollLeft=0;var i=e.getOffset(n),o=e.getOffset(r);n.scrollLeft=999;var s=e.getOffset(r);return{isRtlScrollingInverted:i.left!==o.left&&o.left-s.left!=0,isRtlScrollbarInverted:i.left!==o.left}},e.getOffset=function(e){var t=e.getBoundingClientRect(),n=Eb(e),r=Cb(e);return{top:t.top+(r.pageYOffset||n.documentElement.scrollTop),left:t.left+(r.pageXOffset||n.documentElement.scrollLeft)}};var t=e.prototype;return t.init=function(){e.instances.set(this.el,this),qd&&(this.initDOM(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},t.initDOM=function(){var e=this;if(Array.prototype.filter.call(this.el.children,(function(t){return t.classList.contains(e.classNames.wrapper)})).length)this.wrapperEl=this.el.querySelector("."+this.classNames.wrapper),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector("."+this.classNames.contentWrapper),this.contentEl=this.options.contentNode||this.el.querySelector("."+this.classNames.contentEl),this.offsetEl=this.el.querySelector("."+this.classNames.offset),this.maskEl=this.el.querySelector("."+this.classNames.mask),this.placeholderEl=this.findChild(this.wrapperEl,"."+this.classNames.placeholder),this.heightAutoObserverWrapperEl=this.el.querySelector("."+this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl=this.el.querySelector("."+this.classNames.heightAutoObserverEl),this.axis.x.track.el=this.findChild(this.el,"."+this.classNames.track+"."+this.classNames.horizontal),this.axis.y.track.el=this.findChild(this.el,"."+this.classNames.track+"."+this.classNames.vertical);else{for(this.wrapperEl=document.createElement("div"),this.contentWrapperEl=document.createElement("div"),this.offsetEl=document.createElement("div"),this.maskEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.placeholderEl=document.createElement("div"),this.heightAutoObserverWrapperEl=document.createElement("div"),this.heightAutoObserverEl=document.createElement("div"),this.wrapperEl.classList.add(this.classNames.wrapper),this.contentWrapperEl.classList.add(this.classNames.contentWrapper),this.offsetEl.classList.add(this.classNames.offset),this.maskEl.classList.add(this.classNames.mask),this.contentEl.classList.add(this.classNames.contentEl),this.placeholderEl.classList.add(this.classNames.placeholder),this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.contentWrapperEl.appendChild(this.contentEl),this.offsetEl.appendChild(this.contentWrapperEl),this.maskEl.appendChild(this.offsetEl),this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),this.wrapperEl.appendChild(this.maskEl),this.wrapperEl.appendChild(this.placeholderEl),this.el.appendChild(this.wrapperEl)}if(!this.axis.x.track.el||!this.axis.y.track.el){var t=document.createElement("div"),n=document.createElement("div");t.classList.add(this.classNames.track),n.classList.add(this.classNames.scrollbar),t.appendChild(n),this.axis.x.track.el=t.cloneNode(!0),this.axis.x.track.el.classList.add(this.classNames.horizontal),this.axis.y.track.el=t.cloneNode(!0),this.axis.y.track.el.classList.add(this.classNames.vertical),this.el.appendChild(this.axis.x.track.el),this.el.appendChild(this.axis.y.track.el)}this.axis.x.scrollbar.el=this.axis.x.track.el.querySelector("."+this.classNames.scrollbar),this.axis.y.scrollbar.el=this.axis.y.track.el.querySelector("."+this.classNames.scrollbar),this.options.autoHide||(this.axis.x.scrollbar.el.classList.add(this.classNames.visible),this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),this.el.setAttribute("data-simplebar","init")},t.initListeners=function(){var e=this,t=Cb(this.el);this.options.autoHide&&this.el.addEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick"].forEach((function(t){e.el.addEventListener(t,e.onPointerEvent,!0)})),["touchstart","touchend","touchmove"].forEach((function(t){e.el.addEventListener(t,e.onPointerEvent,{capture:!0,passive:!0})})),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl.addEventListener("scroll",this.onScroll),t.addEventListener("resize",this.onWindowResize);var n=!1,r=t.ResizeObserver||Ky;this.resizeObserver=new r((function(){n&&e.recalculate()})),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),t.requestAnimationFrame((function(){n=!0})),this.mutationObserver=new t.MutationObserver(this.recalculate),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})},t.recalculate=function(){var e=Cb(this.el);this.elStyles=e.getComputedStyle(this.el),this.isRtl="rtl"===this.elStyles.direction;var t=this.heightAutoObserverEl.offsetHeight<=1,n=this.heightAutoObserverEl.offsetWidth<=1,r=this.contentEl.offsetWidth,i=this.contentWrapperEl.offsetWidth,o=this.elStyles.overflowX,s=this.elStyles.overflowY;this.contentEl.style.padding=this.elStyles.paddingTop+" "+this.elStyles.paddingRight+" "+this.elStyles.paddingBottom+" "+this.elStyles.paddingLeft,this.wrapperEl.style.margin="-"+this.elStyles.paddingTop+" -"+this.elStyles.paddingRight+" -"+this.elStyles.paddingBottom+" -"+this.elStyles.paddingLeft;var a=this.contentEl.scrollHeight,l=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=t?"auto":"100%",this.placeholderEl.style.width=n?r+"px":"auto",this.placeholderEl.style.height=a+"px";var c=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=l>r,this.axis.y.isOverflowing=a>c,this.axis.x.isOverflowing="hidden"!==o&&this.axis.x.isOverflowing,this.axis.y.isOverflowing="hidden"!==s&&this.axis.y.isOverflowing,this.axis.x.forceVisible="x"===this.options.forceVisible||!0===this.options.forceVisible,this.axis.y.forceVisible="y"===this.options.forceVisible||!0===this.options.forceVisible,this.hideNativeScrollbar();var u=this.axis.x.isOverflowing?this.scrollbarWidth:0,h=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&l>i-h,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&a>c-u,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el.style.width=this.axis.x.scrollbar.size+"px",this.axis.y.scrollbar.el.style.height=this.axis.y.scrollbar.size+"px",this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")},t.getScrollbarSize=function(e){if(void 0===e&&(e="y"),!this.axis[e].isOverflowing)return 0;var t,n=this.contentEl[this.axis[e].scrollSizeAttr],r=this.axis[e].track.el[this.axis[e].offsetSizeAttr],i=r/n;return t=Math.max(~~(i*r),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(t=Math.min(t,this.options.scrollbarMaxSize)),t},t.positionScrollbar=function(t){if(void 0===t&&(t="y"),this.axis[t].isOverflowing){var n=this.contentWrapperEl[this.axis[t].scrollSizeAttr],r=this.axis[t].track.el[this.axis[t].offsetSizeAttr],i=parseInt(this.elStyles[this.axis[t].sizeAttr],10),o=this.axis[t].scrollbar,s=this.contentWrapperEl[this.axis[t].scrollOffsetAttr],a=(s="x"===t&&this.isRtl&&e.getRtlHelpers().isRtlScrollingInverted?-s:s)/(n-i),l=~~((r-o.size)*a);l="x"===t&&this.isRtl&&e.getRtlHelpers().isRtlScrollbarInverted?l+(r-o.size):l,o.el.style.transform="x"===t?"translate3d("+l+"px, 0, 0)":"translate3d(0, "+l+"px, 0)"}},t.toggleTrackVisibility=function(e){void 0===e&&(e="y");var t=this.axis[e].track.el,n=this.axis[e].scrollbar.el;this.axis[e].isOverflowing||this.axis[e].forceVisible?(t.style.visibility="visible",this.contentWrapperEl.style[this.axis[e].overflowAttr]="scroll"):(t.style.visibility="hidden",this.contentWrapperEl.style[this.axis[e].overflowAttr]="hidden"),this.axis[e].isOverflowing?n.style.display="block":n.style.display="none"},t.hideNativeScrollbar=function(){this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-"+this.scrollbarWidth+"px":0,this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-"+this.scrollbarWidth+"px":0},t.onMouseMoveForAxis=function(e){void 0===e&&(e="y"),this.axis[e].track.rect=this.axis[e].track.el.getBoundingClientRect(),this.axis[e].scrollbar.rect=this.axis[e].scrollbar.el.getBoundingClientRect(),this.isWithinBounds(this.axis[e].scrollbar.rect)?this.axis[e].scrollbar.el.classList.add(this.classNames.hover):this.axis[e].scrollbar.el.classList.remove(this.classNames.hover),this.isWithinBounds(this.axis[e].track.rect)?(this.showScrollbar(e),this.axis[e].track.el.classList.add(this.classNames.hover)):this.axis[e].track.el.classList.remove(this.classNames.hover)},t.onMouseLeaveForAxis=function(e){void 0===e&&(e="y"),this.axis[e].track.el.classList.remove(this.classNames.hover),this.axis[e].scrollbar.el.classList.remove(this.classNames.hover)},t.showScrollbar=function(e){void 0===e&&(e="y");var t=this.axis[e].scrollbar.el;this.axis[e].isVisible||(t.classList.add(this.classNames.visible),this.axis[e].isVisible=!0),this.options.autoHide&&this.hideScrollbars()},t.onDragStart=function(e,t){void 0===t&&(t="y");var n=Eb(this.el),r=Cb(this.el),i=this.axis[t].scrollbar,o="y"===t?e.pageY:e.pageX;this.axis[t].dragOffset=o-i.rect[this.axis[t].offsetAttr],this.draggedAxis=t,this.el.classList.add(this.classNames.dragging),n.addEventListener("mousemove",this.drag,!0),n.addEventListener("mouseup",this.onEndDrag,!0),null===this.removePreventClickId?(n.addEventListener("click",this.preventClick,!0),n.addEventListener("dblclick",this.preventClick,!0)):(r.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},t.onTrackClick=function(e,t){var n=this;if(void 0===t&&(t="y"),this.options.clickOnTrack){var r=Cb(this.el);this.axis[t].scrollbar.rect=this.axis[t].scrollbar.el.getBoundingClientRect();var i=this.axis[t].scrollbar.rect[this.axis[t].offsetAttr],o=parseInt(this.elStyles[this.axis[t].sizeAttr],10),s=this.contentWrapperEl[this.axis[t].scrollOffsetAttr],a=("y"===t?this.mouseY-i:this.mouseX-i)<0?-1:1,l=-1===a?s-o:s+o;!function e(){var i,o;-1===a?s>l&&(s-=n.options.clickOnTrackSpeed,n.contentWrapperEl.scrollTo(((i={})[n.axis[t].offsetAttr]=s,i)),r.requestAnimationFrame(e)):s<l&&(s+=n.options.clickOnTrackSpeed,n.contentWrapperEl.scrollTo(((o={})[n.axis[t].offsetAttr]=s,o)),r.requestAnimationFrame(e))}()}},t.getContentElement=function(){return this.contentEl},t.getScrollElement=function(){return this.contentWrapperEl},t.getScrollbarWidth=function(){try{return"none"===getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:Ab(this.el)}catch(l6){return Ab(this.el)}},t.removeListeners=function(){var e=this,t=Cb(this.el);this.options.autoHide&&this.el.removeEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick"].forEach((function(t){e.el.removeEventListener(t,e.onPointerEvent,!0)})),["touchstart","touchend","touchmove"].forEach((function(t){e.el.removeEventListener(t,e.onPointerEvent,{capture:!0,passive:!0})})),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),t.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.recalculate.cancel(),this.onMouseMove.cancel(),this.hideScrollbars.cancel(),this.onWindowResize.cancel()},t.unMount=function(){this.removeListeners(),e.instances.delete(this.el)},t.isWithinBounds=function(e){return this.mouseX>=e.left&&this.mouseX<=e.left+e.width&&this.mouseY>=e.top&&this.mouseY<=e.top+e.height},t.findChild=function(e,t){var n=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;return Array.prototype.filter.call(e.children,(function(e){return n.call(e,t)}))[0]},e}();Pb.defaultOptions={autoHide:!0,forceVisible:!1,clickOnTrack:!0,clickOnTrackSpeed:40,classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging"},scrollbarMinSize:25,scrollbarMaxSize:0,timeout:1e3},Pb.instances=new WeakMap,Pb.initDOMLoadedElements=function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"),(function(e){"init"===e.getAttribute("data-simplebar")||Pb.instances.has(e)||new Pb(e,Tb(e.attributes))}))},Pb.removeObserver=function(){this.globalObserver.disconnect()},Pb.initHtmlApi=function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),"undefined"!=typeof MutationObserver&&(this.globalObserver=new MutationObserver(Pb.handleMutations),this.globalObserver.observe(document,{childList:!0,subtree:!0})),"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))},Pb.handleMutations=function(e){e.forEach((function(e){Array.prototype.forEach.call(e.addedNodes,(function(e){1===e.nodeType&&(e.hasAttribute("data-simplebar")?!Pb.instances.has(e)&&document.documentElement.contains(e)&&new Pb(e,Tb(e.attributes)):Array.prototype.forEach.call(e.querySelectorAll("[data-simplebar]"),(function(e){"init"!==e.getAttribute("data-simplebar")&&!Pb.instances.has(e)&&document.documentElement.contains(e)&&new Pb(e,Tb(e.attributes))})))})),Array.prototype.forEach.call(e.removedNodes,(function(e){1===e.nodeType&&("init"===e.getAttribute("data-simplebar")?Pb.instances.has(e)&&!document.documentElement.contains(e)&&Pb.instances.get(e).unMount():Array.prototype.forEach.call(e.querySelectorAll('[data-simplebar="init"]'),(function(e){Pb.instances.has(e)&&!document.documentElement.contains(e)&&Pb.instances.get(e).unMount()})))}))}))},Pb.getOptions=Tb,qd&&Pb.initHtmlApi();var $b={name:"simplebar-vue",mounted:function(){var e=Pb.getOptions(this.$refs.element.attributes);this.SimpleBar=new Pb(this.$refs.element,e)},computed:{scrollElement:function(){return this.$refs.scrollElement},contentElement:function(){return this.$refs.contentElement}}},Rb=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"element"},[n("div",{staticClass:"simplebar-wrapper"},[e._m(0),e._v(" "),n("div",{staticClass:"simplebar-mask"},[n("div",{staticClass:"simplebar-offset"},[n("div",e._g({ref:"scrollElement",staticClass:"simplebar-content-wrapper"},Object.assign({},e.$listeners.scroll&&{scroll:e.$listeners.scroll})),[n("div",{ref:"contentElement",staticClass:"simplebar-content"},[e._t("default")],2)])])]),e._v(" "),n("div",{staticClass:"simplebar-placeholder"})]),e._v(" "),e._m(1),e._v(" "),e._m(2)])};Rb._withStripped=!0;var Lb,Db,Nb,Mb,Wb,jb=(Lb={render:Rb,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"simplebar-height-auto-observer-wrapper"},[t("div",{staticClass:"simplebar-height-auto-observer"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"simplebar-track simplebar-horizontal"},[t("div",{staticClass:"simplebar-scrollbar"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"simplebar-track simplebar-vertical"},[t("div",{staticClass:"simplebar-scrollbar"})])}]},Nb=void 0,Mb=!1,(Wb=("function"==typeof(Db=$b)?Db.options:Db)||{}).__file="/Users/adriendenat/Sites/simplebar/packages/simplebar-vue/index.vue",Wb.render||(Wb.render=Lb.render,Wb.staticRenderFns=Lb.staticRenderFns,Wb._compiled=!0,Mb&&(Wb.functional=!0)),Wb._scopeId=Nb,Wb),Fb=function(e,t){return(Fb=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Vb=function(){return(Vb=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function qb(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function zb(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{l(r.next(e))}catch(l6){o(l6)}}function a(e){try{l(r.throw(e))}catch(l6){o(l6)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))}function Ub(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(l6){o=[6,l6],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}function Bb(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Yb(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(c6){i={error:c6}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s}function Xb(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gb=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Hb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=o>>2,h=(3&o)<<4|a>>4,d=(15&a)<<2|c>>6,f=63&c;l||(f=64,s||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Gb(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){var s=((7&i)<<18|(63&(o=e[n++]))<<12|(63&(a=e[n++]))<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{o=e[n++];var a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var o=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0,a=++i<e.length?n[e.charAt(i)]:64,l=++i<e.length?n[e.charAt(i)]:64;if(++i,null==o||null==s||null==a||null==l)throw Error();var c=o<<2|s>>4;if(r.push(c),64!==a){var u=s<<4&240|a>>2;if(r.push(u),64!==l){var h=a<<6&192|l;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Zb=function(e){return function(e){var t=Gb(e);return Hb.encodeByteArray(t,!0)}(e).replace(/\./g,"")};function Kb(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=Kb(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Jb=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ew(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function tw(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ew())}function nw(){try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(l6){return!1}}function rw(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function iw(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function ow(){var e=ew();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function sw(){return"indexedDB"in self&&null!=indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var aw=function(e){function t(n,r,i){var o=e.call(this,r)||this;return o.code=n,o.customData=i,o.name="FirebaseError",Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,lw.prototype.create),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Fb(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error),lw=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},i=this.service+"/"+e,o=this.errors[e],s=o?cw(o,r):"Error",a=this.serviceName+": "+s+" ("+i+").",l=new aw(i,a,r);return l},e}();function cw(e,t){return e.replace(uw,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}var uw=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function dw(e,t){if(e===t)return!0;for(var n=Object.keys(e),r=Object.keys(t),i=0,o=n;i<o.length;i++){var s=o[i];if(!r.includes(s))return!1;var a=e[s],l=t[s];if(fw(a)&&fw(l)){if(!dw(a,l))return!1}else if(a!==l)return!1}for(var c=0,u=r;c<u.length;c++){s=u[c];if(!n.includes(s))return!1}return!0}function fw(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},r=0,i=Object.entries(e);r<i.length;r++){var o=i[r];n(o[0],o[1])}return t.length?"&"+t.join("&"):""}function mw(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var n=e.split("="),r=n[0],i=n[1];t[decodeURIComponent(r)]=decodeURIComponent(i)}})),t}function gw(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function vw(e,t){var n=new yw(e,t);return n.subscribe.bind(n)}var yw=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"==typeof e[i])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=Ow),void 0===r.error&&(r.error=Ow),void 0===r.complete&&(r.complete=Ow);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(l6){}})),this.observers.push(r),o},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(l6){"undefined"!=typeof console&&console.error&&console.error(l6)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function Ow(){}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(e){return e&&e._delegate?e._delegate:e}var ww=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),xw=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new Jb;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(l6){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(l6){if(r)return null;throw l6}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(l6){}try{for(var r=Bb(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var o=Yb(i.value,2),s=o[0],a=o[1],l=this.normalizeInstanceIdentifier(s);try{var c=this.getOrInitializeService({instanceIdentifier:l});a.resolve(c)}catch(l6){}}}catch(u){t={error:u}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e="[DEFAULT]"),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return zb(this,void 0,void 0,(function(){var e;return Ub(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Xb(Xb([],Yb(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),Yb(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e="[DEFAULT]"),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e="[DEFAULT]"),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.options,i=void 0===r?{}:r,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var s=this.getOrInitializeService({instanceIdentifier:o,options:i});try{for(var a=Bb(this.instancesDeferred.entries()),l=a.next();!l.done;l=a.next()){var c=Yb(l.value,2),u=c[0],h=c[1];o===this.normalizeInstanceIdentifier(u)&&h.resolve(s)}}catch(d){t={error:d}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return s},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,r,i=this.onInitCallbacks.get(t);if(i)try{for(var o=Bb(i),s=o.next();!s.done;s=o.next()){var a=s.value;try{a(e,t)}catch(l){}}}catch(c){n={error:c}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,"[DEFAULT]"===t?void 0:t),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(s){}return o||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e="[DEFAULT]"),this.component?this.component.multipleInstances?e:"[DEFAULT]":e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kw,Sw=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new xw(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function _w(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tw,Cw,Ew=[];(Cw=Tw||(Tw={}))[Cw.DEBUG=0]="DEBUG",Cw[Cw.VERBOSE=1]="VERBOSE",Cw[Cw.INFO=2]="INFO",Cw[Cw.WARN=3]="WARN",Cw[Cw.ERROR=4]="ERROR",Cw[Cw.SILENT=5]="SILENT";var Qw={debug:Tw.DEBUG,verbose:Tw.VERBOSE,info:Tw.INFO,warn:Tw.WARN,error:Tw.ERROR,silent:Tw.SILENT},Iw=Tw.INFO,Aw=((kw={})[Tw.DEBUG]="log",kw[Tw.VERBOSE]="log",kw[Tw.INFO]="info",kw[Tw.WARN]="warn",kw[Tw.ERROR]="error",kw),Pw=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=(new Date).toISOString(),o=Aw[t];if(!o)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[o].apply(console,_w(["["+i+"]  "+e.name+":"],n))}},$w=function(){function e(e){this.name=e,this._logLevel=Iw,this._logHandler=Pw,this._userLogHandler=null,Ew.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in Tw))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?Qw[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,_w([this,Tw.DEBUG],e)),this._logHandler.apply(this,_w([this,Tw.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,_w([this,Tw.VERBOSE],e)),this._logHandler.apply(this,_w([this,Tw.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,_w([this,Tw.INFO],e)),this._logHandler.apply(this,_w([this,Tw.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,_w([this,Tw.WARN],e)),this._logHandler.apply(this,_w([this,Tw.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,_w([this,Tw.ERROR],e)),this._logHandler.apply(this,_w([this,Tw.ERROR],e))},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Lw=new $w("@firebase/app"),Dw={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Nw=new Map,Mw=new Map;function Ww(e,t){try{e.container.addComponent(t)}catch(l6){Lw.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,l6)}}function jw(e,t){e.container.addOrOverwriteComponent(t)}function Fw(e){const t=e.name;if(Mw.has(t))return Lw.debug(`There were multiple attempts to register component ${t}.`),!1;Mw.set(t,e);for(const n of Nw.values())Ww(n,e);return!0}function Vw(e,t){return e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qw=new lw("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zw{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ww("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qw.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw qw.create("bad-app-name",{appName:String(r)});const i=Nw.get(r);if(i){if(dw(e,i.options)&&dw(n,i.config))return i;throw qw.create("duplicate-app",{appName:r})}const o=new Sw(r);for(const a of Mw.values())o.addComponent(a);const s=new zw(e,n,o);return Nw.set(r,s),s}async function Bw(e){const t=e.name;Nw.has(t)&&(Nw.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Yw(e,t,n){var r;let i=null!==(r=Dw[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Lw.warn(e.join(" "))}Fw(new ww(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}function Xw(e,t){if(null!==e&&"function"!=typeof e)throw qw.create("invalid-log-argument");!function(e,t){for(var n=function(n){var r=null;t&&t.level&&(r=Qw[t.level]),n.userLogHandler=null===e?null:function(t,n){for(var i=[],o=2;o<arguments.length;o++)i[o-2]=arguments[o];var s=i.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((function(e){return e})).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:Tw[n].toLowerCase(),message:s,args:i,type:t.name})}},r=0,i=Ew;r<i.length;r++)n(i[r])}(e,t)}function Gw(e){var t;t=e,Ew.forEach((function(e){e.setLogLevel(t)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hw;Fw(new ww("platform-logger",(e=>new Rw(e)),"PRIVATE")),Yw("@firebase/app","0.7.0",Hw),Yw("fire-js","");var Zw=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SDK_VERSION:"9.0.0",_DEFAULT_ENTRY_NAME:"[DEFAULT]",_addComponent:Ww,_addOrOverwriteComponent:jw,_apps:Nw,_clearComponents:function(){Mw.clear()},_components:Mw,_getProvider:Vw,_registerComponent:Fw,_removeServiceInstance:function(e,t,n="[DEFAULT]"){Vw(e,t).clearInstance(n)},deleteApp:Bw,getApp:function(e="[DEFAULT]"){const t=Nw.get(e);if(!t)throw qw.create("no-app",{appName:e});return t},getApps:function(){return Array.from(Nw.values())},initializeApp:Uw,onLog:Xw,registerVersion:Yw,setLogLevel:Gw,FirebaseError:aw});
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e,t){this._delegate=e,this.firebase=t,Ww(e,new ww("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),Bw(this._delegate))))}_getService(e,t="[DEFAULT]"){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t="[DEFAULT]"){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Ww(this._delegate,e)}_addOrOverwriteComponent(e){jw(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=new lw("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."});const ex=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function e(){const t=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){const t={},n={__esModule:!0,initializeApp:function(r,i={}){const o=Uw(r,i);if(hw(t,o.name))return t[o.name];const s=new e(o,n);return t[o.name]=s,s},app:r,registerVersion:Yw,setLogLevel:Gw,onLog:Xw,apps:null,SDK_VERSION:"9.0.0",INTERNAL:{registerComponent:function(t){const i=t.name,o=i.replace("-compat","");if(Fw(t)&&"PUBLIC"===t.type){const s=(e=r())=>{if("function"!=typeof e[o])throw Jw.create("invalid-app-argument",{appName:i});return e[o]()};void 0!==t.serviceProps&&Kb(s,t.serviceProps),n[o]=s,e.prototype[o]=function(...e){return this._getService.bind(this,i).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[o]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:Zw}};function r(e){if(!hw(t,e=e||"[DEFAULT]"))throw Jw.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map((e=>t[e]))}}),r.App=e,n}(Kw);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){Kb(t,e)},createSubscribe:vw,ErrorFactory:lw,deepExtend:Kb}),t}(),tx=new $w("@firebase/app-compat");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if("object"==typeof self&&self.self===self&&void 0!==self.firebase){tx.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&tx.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const nx=ex;!
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){Yw("@firebase/app-compat","0.1.0",e)}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
nx.registerVersion("firebase","9.0.0","app-compat");const rx="facebook.com",ix="github.com",ox="google.com",sx="password",ax="twitter.com",lx="EMAIL_SIGNIN",cx="PASSWORD_RESET",ux="RECOVER_EMAIL",hx="REVERT_SECOND_FACTOR_ADDITION",dx="VERIFY_AND_CHANGE_EMAIL",fx="VERIFY_EMAIL";const px=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}},mx=new lw("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),gx=new $w("@firebase/auth");function vx(e,...t){gx.logLevel<=Tw.ERROR&&gx.error(`Auth (9.0.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(e,...t){throw bx(e,...t)}function Ox(e,...t){return bx(e,...t)}function bx(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return mx.create(e,...t)}function wx(e,t,...n){if(!e)throw bx(t,...n)}function xx(e){const t="INTERNAL ASSERTION FAILED: "+e;throw vx(t),new Error(t)}function kx(e,t){e||xx(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx=new Map;function _x(e){kx(e instanceof Function,"Expected a class definition");let t=Sx.get(e);return t?(kx(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Sx.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tx(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Cx(){return"http:"===Ex()||"https:"===Ex()}function Ex(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qx{constructor(e,t){this.shortDelay=e,this.longDelay=t,kx(t>e,"Short delay should be less than long delay!"),this.isMobile=tw()||iw()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Cx()||rw()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ix(e,t){kx(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void xx("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void xx("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void xx("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"},$x=new Qx(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rx(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Lx(e,t,n,r,i={}){return Dx(e,i,(()=>{let i={},o={};r&&("GET"===t?o=r:i={body:JSON.stringify(r)});const s=pw(Object.assign({key:e.config.apiKey},o)).slice(1),a=new(Ax.headers());return a.set("Content-Type","application/json"),a.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&a.set("X-Firebase-Locale",e.languageCode),Ax.fetch()(Mx(e,e.config.apiHost,n,s),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Dx(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Px),t);try{const t=new Wx(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw jx(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=(i.ok?o.errorMessage:o.error.message).split(" : ")[0];if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw jx(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===t)throw jx(e,"email-already-in-use",o);yx(e,r[t]||t.toLowerCase().replace(/[_\s]+/g,"-"))}}catch(l6){if(l6 instanceof aw)throw l6;yx(e,"network-request-failed")}}async function Nx(e,t,n,r,i={}){const o=await Lx(e,t,n,r,i);return"mfaPendingCredential"in o&&yx(e,"multi-factor-auth-required",{serverResponse:o}),o}function Mx(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Ix(e.config,i):`${e.config.apiScheme}://${i}`}class Wx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Ox(this.auth,"timeout"))),$x.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function jx(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ox(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fx(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(l6){}}function Vx(e){return 1e3*Number(e)}function qx(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return vx("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return Hb.decodeString(e,!0)}catch(l6){console.error("base64Decode failed: ",l6)}return null}(n);return e?JSON.parse(e):(vx("Failed to decode base64 JWT payload"),null)}catch(l6){return vx("Caught error parsing JWT payload as JSON",l6),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function zx(e,t,n=!1){if(n)return t;try{return await t}catch(l6){throw l6 instanceof aw&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(l6)&&e.auth.currentUser===e&&await e.auth.signOut(),l6}}class Ux{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(l6){return void("auth/network-request-failed"===l6.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fx(this.lastLoginAt),this.creationTime=Fx(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yx(e){var t;const n=e.auth,r=await e.getIdToken(),i=await zx(e,async function(e,t){return Lx(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));wx(null==i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=qb(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=s,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&o.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Bx(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xx{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){wx(e.idToken,"internal-error"),wx(void 0!==e.idToken,"internal-error"),wx(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=qx(e);return wx(t,"internal-error"),wx(void 0!==t.exp,"internal-error"),wx(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return wx(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Dx(e,{},(()=>{const n=pw({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,o=Mx(e,r,"/v1/token",`key=${i}`);return Ax.fetch()(o,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new Xx;return n&&(wx("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(wx("string"==typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(wx("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xx,this.toJSON())}_performRefresh(){return xx("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gx(e,t){wx("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Hx{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=qb(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Ux(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new Bx(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await zx(this,this.stsTokenManager.getToken(this.auth,e));return wx(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=bw(e),r=await n.getIdToken(t),i=qx(r);wx(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"==typeof i.firebase?i.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Fx(Vx(i.auth_time)),issuedAtTime:Fx(Vx(i.iat)),expirationTime:Fx(Vx(i.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=bw(e);await Yx(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(wx(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Hx(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){wx(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Yx(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await zx(this,async function(e,t){return Lx(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:O,isAnonymous:b,providerData:w,stsTokenManager:x}=t;wx(y&&x,e,"internal-error");const k=Xx.fromJSON(this.name,x);wx("string"==typeof y,e,"internal-error"),Gx(u,e.name),Gx(h,e.name),wx("boolean"==typeof O,e,"internal-error"),wx("boolean"==typeof b,e,"internal-error"),Gx(d,e.name),Gx(f,e.name),Gx(p,e.name),Gx(m,e.name),Gx(g,e.name),Gx(v,e.name);const S=new Hx({uid:y,auth:e,email:h,emailVerified:O,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:k,createdAt:g,lastLoginAt:v});return w&&Array.isArray(w)&&(S.providerData=w.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new Xx;r.updateFromServerResponse(t);const i=new Hx({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Yx(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Zx.type="NONE";const Kx=Zx;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(e,t,n){return`firebase:${e}:${t}:${n}`}class ek{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Jx(this.userKey,r.apiKey,i),this.fullPersistenceKey=Jx("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Hx._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ek(_x(Kx),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||_x(Kx);const o=Jx(n,e.config.apiKey,e.name);let s=null;for(const c of t)try{const t=await c._get(o);if(t){const n=Hx._fromJSON(e,t);c!==i&&(s=n),i=c;break}}catch(l){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(l){}}))),new ek(i,e,n)):new ek(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ok(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(nk(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ak(t))return"Blackberry";if(lk(t))return"Webos";if(rk(t))return"Safari";if((t.includes("chrome/")||ik(t))&&!t.includes("edge/"))return"Chrome";if(sk(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function nk(e=ew()){return/firefox\//i.test(e)}function rk(e=ew()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ik(e=ew()){return/crios\//i.test(e)}function ok(e=ew()){return/iemobile/i.test(e)}function sk(e=ew()){return/android/i.test(e)}function ak(e=ew()){return/blackberry/i.test(e)}function lk(e=ew()){return/webos/i.test(e)}function ck(e=ew()){return/iphone|ipad|ipod/i.test(e)}function uk(e=ew()){return ck(e)||sk(e)||lk(e)||ak(e)||/windows phone/i.test(e)||ok(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hk(e,t=[]){let n;switch(e){case"Browser":n=tk(ew());break;case"Worker":n=`${tk(ew())}-${e}`;break;default:n=e}return`${n}/JsCore/9.0.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pk(this),this.idTokenSubscription=new pk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mx,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_x(t)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await ek.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e)):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);r&&r!==i||!(null==o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(wx(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(l6){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Yx(e)}catch(l6){if("auth/network-request-failed"!==l6.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?bw(e):null;return t&&wx(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&wx(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(_x(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new lw("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_x(e)||this._popupRedirectResolver;wx(t,this,"argument-error"),this.redirectPersistenceManager=await ek.create(this,[_x(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return wx(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return wx(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hk(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function fk(e){return bw(e)}class pk{constructor(e){this.auth=e,this.observer=null,this.addObserver=vw((e=>this.observer=e))}get next(){return wx(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function mk(e,t,n){const r=fk(e);wx(r._canInitEmulator,r,"emulator-config-failed"),wx(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),o=gk(t),{host:s,port:a}=function(e){const t=gk(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:vk(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:vk(t)}}}(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),function(e){function t(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"==typeof window||"undefined"==typeof document||e||("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i)}function gk(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function vk(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class yk{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return xx("not implemented")}_getIdTokenResponse(e){return xx("not implemented")}_linkToIdToken(e,t){return xx("not implemented")}_getReauthenticationResolver(e){return xx("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ok(e,t){return Lx(e,"POST","/v1/accounts:resetPassword",Rx(e,t))}async function bk(e,t){return Lx(e,"POST","/v1/accounts:update",t)}async function wk(e,t){return Lx(e,"POST","/v1/accounts:sendOobCode",Rx(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xk extends yk{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new xk(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new xk(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Nx(e,"POST","/v1/accounts:signInWithPassword",Rx(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Nx(e,"POST","/v1/accounts:signInWithEmailLink",Rx(e,t))}(e,{email:this._email,oobCode:this._password});default:yx(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return bk(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Nx(e,"POST","/v1/accounts:signInWithEmailLink",Rx(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:yx(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kk(e,t){return Nx(e,"POST","/v1/accounts:signInWithIdp",Rx(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk extends yk{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Sk(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):yx("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=qb(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Sk(n,r);return Object.assign(o,i),o}_getIdTokenResponse(e){return kk(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,kk(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,kk(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=pw(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tk extends yk{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Tk({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Tk({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Nx(e,"POST","/v1/accounts:signInWithPhoneNumber",Rx(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Nx(e,"POST","/v1/accounts:signInWithPhoneNumber",Rx(e,t));if(n.temporaryProof)throw jx(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Nx(e,"POST","/v1/accounts:signInWithPhoneNumber",Rx(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),_k)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Tk({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e){var t,n,r,i,o,s;const a=mw(gw(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);wx(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}static parseLink(e){const t=function(e){const t=mw(gw(e)).link,n=t?mw(gw(t)).deep_link_id:null,r=mw(gw(e)).deep_link_id;return(r?mw(gw(r)).link:null)||r||n||t||e}(e);try{return new Ck(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(){this.providerId=Ek.PROVIDER_ID}static credential(e,t){return xk._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ck.parseLink(t);return wx(n,"argument-error"),xk._fromEmailAndCode(e,n.code,n.tenantId)}}Ek.PROVIDER_ID="password",Ek.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ek.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qk{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik extends Qk{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ak extends Ik{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return wx("providerId"in t&&"signInMethod"in t,"argument-error"),Sk._fromParams(t)}credential(e){return this._credential(e)}_credential(e){return wx(e.idToken||e.accessToken,"argument-error"),Sk._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ak.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ak.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:o,providerId:s}=e;if(!(n||r||t||i))return null;if(!s)return null;try{return new Ak(s)._credential({idToken:t,accessToken:n,rawNonce:o,pendingToken:i})}catch(l6){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk extends Ik{constructor(){super("facebook.com")}static credential(e){return Sk._fromParams({providerId:Pk.PROVIDER_ID,signInMethod:Pk.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pk.credentialFromTaggedObject(e)}static credentialFromError(e){return Pk.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Pk.credential(e.oauthAccessToken)}catch(t){return null}}}Pk.FACEBOOK_SIGN_IN_METHOD="facebook.com",Pk.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $k extends Ik{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Sk._fromParams({providerId:$k.PROVIDER_ID,signInMethod:$k.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $k.credentialFromTaggedObject(e)}static credentialFromError(e){return $k.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return $k.credential(t,n)}catch(r){return null}}}$k.GOOGLE_SIGN_IN_METHOD="google.com",$k.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rk extends Ik{constructor(){super("github.com")}static credential(e){return Sk._fromParams({providerId:Rk.PROVIDER_ID,signInMethod:Rk.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rk.credentialFromTaggedObject(e)}static credentialFromError(e){return Rk.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Rk.credential(e.oauthAccessToken)}catch(t){return null}}}Rk.GITHUB_SIGN_IN_METHOD="github.com",Rk.PROVIDER_ID="github.com";class Lk extends yk{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){return kk(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,kk(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,kk(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new Lk(n,i):null}static _create(e,t){return new Lk(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk extends Ik{constructor(){super("twitter.com")}static credential(e,t){return Sk._fromParams({providerId:Dk.PROVIDER_ID,signInMethod:Dk.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Dk.credentialFromTaggedObject(e)}static credentialFromError(e){return Dk.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Dk.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Nk(e,t){return Nx(e,"POST","/v1/accounts:signUp",Rx(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dk.TWITTER_SIGN_IN_METHOD="twitter.com",Dk.PROVIDER_ID="twitter.com";class Mk{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Hx._fromIdTokenResponse(e,n,r),o=Wk(n);return new Mk({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Wk(n);return new Mk({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Wk(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jk extends aw{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,jk.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(i=e.tenantId)&&void 0!==i?i:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,r){return new jk(e,t,n,r)}}function Fk(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw jk._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qk(e,t){const n=bw(e);await Uk(!0,n,t);const{providerUserInfo:r}=await async function(e,t){return Lx(e,"POST","/v1/accounts:update",t)}(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),i=Vk(r||[]);return n.providerData=n.providerData.filter((e=>i.has(e.providerId))),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function zk(e,t,n=!1){const r=await zx(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Mk._forOperation(e,"link",r)}async function Uk(e,t,n){await Yx(t);const r=!1===e?"provider-already-linked":"no-such-provider";wx(Vk(t.providerData).has(n)===e,t.auth,r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bk(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await zx(e,Fk(r,i,t,e),n);wx(o.idToken,r,"internal-error");const s=qx(o.idToken);wx(s,r,"internal-error");const{sub:a}=s;return wx(e.uid===a,r,"user-mismatch"),Mk._forOperation(e,i,o)}catch(l6){throw"auth/user-not-found"===(null==l6?void 0:l6.code)&&yx(r,"user-mismatch"),l6}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yk(e,t,n=!1){const r="signIn",i=await Fk(e,r,t),o=await Mk._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function Xk(e,t){return Yk(fk(e),t)}async function Gk(e,t){const n=bw(e);return await Uk(!1,n,t.providerId),zk(n,t)}async function Hk(e,t){return Bk(bw(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Zk(e,t){const n=fk(e),r=await async function(e,t){return Nx(e,"POST","/v1/accounts:signInWithCustomToken",Rx(e,t))}(n,{token:t,returnSecureToken:!0}),i=await Mk._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Jk._fromServerResponse(e,t):yx(e,"internal-error")}}class Jk extends Kk{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Jk(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(e,t,n){var r;wx((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),wx(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(wx(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iosBundleId=n.iOS.bundleId),n.android&&(wx(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tS(e,t,n){const r=bw(e),i={requestType:"PASSWORD_RESET",email:t};n&&eS(r,i,n),await async function(e,t){return wk(e,t)}(r,i)}async function nS(e,t){await async function(e,t){return Lx(e,"POST","/v1/accounts:update",Rx(e,t))}(bw(e),{oobCode:t})}async function rS(e,t){const n=bw(e),r=await Ok(n,{oobCode:t}),i=r.requestType;switch(wx(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":wx(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":wx(r.mfaInfo,n,"internal-error");default:wx(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=Kk._fromServerResponse(fk(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:o},operation:i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function iS(e,t,n){const r=bw(e),i={requestType:"EMAIL_SIGNIN",email:t};wx(n.handleCodeInApp,r,"argument-error"),n&&eS(r,i,n),await async function(e,t){return wk(e,t)}(r,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function oS(e,t){const n={identifier:t,continueUri:Cx()?Tx():"http://localhost"},{signinMethods:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return Lx(e,"POST","/v1/accounts:createAuthUri",Rx(e,t))}(bw(e),n);return r||[]}async function sS(e,t){const n=bw(e),r={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&eS(n.auth,r,t);const{email:i}=await async function(e,t){return wk(e,t)}(n.auth,r);i!==e.email&&await e.reload()}async function aS(e,t,n){const r=bw(e),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};n&&eS(r.auth,i,n);const{email:o}=await async function(e,t){return wk(e,t)}(r.auth,i);o!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function lS(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=bw(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await zx(r,async function(e,t){return Lx(e,"POST","/v1/accounts:update",t)}(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const s=r.providerData.find((({providerId:e})=>"password"===e));s&&(s.displayName=r.displayName,s.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}async function cS(e,t,n){const{auth:r}=e,i={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(i.email=t),n&&(i.password=n);const o=await zx(e,bk(r,i));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class hS extends uS{constructor(e,t,n,r){super(e,t,n),this.username=r}}class dS extends uS{constructor(e,t){super(e,"facebook.com",t)}}class fS extends hS{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class pS extends uS{constructor(e,t){super(e,"google.com",t)}}class mS extends hS{constructor(e,t,n){super(e,"twitter.com",t,n)}}function gS(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:function(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},o=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null==e?void 0:e.idToken)){const r=null===(n=null===(t=qx(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n.sign_in_provider;if(r)return new uS(o,"anonymous"!==r&&"custom"!==r?r:null)}if(!r)return null;switch(r){case"facebook.com":return new dS(o,i);case"github.com":return new fS(o,i);case"google.com":return new pS(o,i);case"twitter.com":return new mS(o,i,e.screenName||null);case"custom":case"anonymous":return new uS(o,null);default:return new uS(o,r,i)}}(n)}class vS{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new vS("enroll",e)}static _fromMfaPendingCredential(e){return new vS("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return vS._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return vS._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=fk(e),r=(t.serverResponse.mfaInfo||[]).map((e=>Kk._fromServerResponse(n,e)));wx(t.serverResponse.mfaPendingCredential,n,"internal-error");const i=vS._fromMfaPendingCredential(t.serverResponse.mfaPendingCredential);return new yS(i,r,(async e=>{const r=await e._process(n,i);delete t.serverResponse.mfaInfo,delete t.serverResponse.mfaPendingCredential;const o=Object.assign(Object.assign({},t.serverResponse),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":const e=await Mk._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return wx(t.user,n,"internal-error"),Mk._forOperation(t.user,t.operationType,o);default:yx(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}class OS{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>Kk._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new OS(e)}async getSession(){return vS._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,r=await this.getSession(),i=await zx(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"==typeof e?e:e.uid,n=await this.user.getIdToken(),r=await zx(this.user,(i=this.user.auth,o={idToken:n,mfaEnrollmentId:t},Lx(i,"POST","/v2/accounts/mfaEnrollment:withdraw",Object.assign({tenantId:i.tenantId},o))));var i,o;this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(l6){if("auth/user-token-expired"!==l6.code)throw l6}}}const bS=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wS{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS extends wS{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=ew();return rk(e)||ck(e)}()&&function(){try{return!(!window||window===window.top)}catch(l6){return!1}}(),this.fallbackToPolling=uk(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);ow()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xS.type="LOCAL";const kS=xS;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS extends wS{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}SS.type="SESSION";const _S=SS;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class TS{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new TS(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function CS(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */TS.receivers=[];class ES{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const l=CS("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function IS(){return void 0!==QS().WorkerGlobalScope&&"function"==typeof QS().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const AS="firebaseLocalStorageDb";class PS{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function $S(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function RS(){const e=indexedDB.open(AS,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(l6){n(l6)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(AS);return new PS(e).toPromise()}(),t(await RS()))}))}))}async function LS(e,t,n){const r=$S(e,!0).put({fbase_key:t,value:n});return new PS(r).toPromise()}function DS(e,t){const n=$S(e,!0).delete(t);return new PS(n).toPromise()}class NS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await RS()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(l6){if(t++>3)throw l6;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return IS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=TS._getInstance(IS()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new ES(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await RS();return await LS(e,"__sak","1"),await DS(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>LS(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=$S(e,!1).get(t),r=await new PS(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>DS(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=$S(e,!1).getAll();return new PS(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}NS.type="LOCAL";const MS=NS;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,o;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Ox("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(o=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==o?o:document).appendChild(r)}))}function jS(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.auth=e,this.counter=1e12,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new VS(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||1e12;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||1e12;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||1e12;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class VS{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"==typeof e?document.getElementById(e):e;wx(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=function(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(l6){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(l6){}this.isVisible&&this.execute()}),6e4)}),500))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}const qS=jS("rcb"),zS=new Qx(3e4,6e4);class US{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!QS().grecaptcha}load(e,t=""){return wx(function(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(QS().grecaptcha):new Promise(((n,r)=>{const i=QS().setTimeout((()=>{r(Ox(e,"network-request-failed"))}),zS.get());QS()[qS]=()=>{QS().clearTimeout(i),delete QS()[qS];const o=QS().grecaptcha;if(!o)return void r(Ox(e,"internal-error"));const s=o.render;o.render=(e,t)=>{const n=s(e,t);return this.counter++,n},this.hostLanguage=t,n(o)};WS(`https://www.google.com/recaptcha/api.js??${pw({onload:qS,render:"explicit",hl:t})}`).catch((()=>{clearTimeout(i),r(Ox(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!QS().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}class BS{async load(e){return new FS(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS={theme:"light",type:"image"};class XS{constructor(e,t=Object.assign({},YS),n){this.parameters=t,this.type="recaptcha",this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=fk(n),this.isInvisible="invisible"===this.parameters.size,wx("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"==typeof e?document.getElementById(e):e;wx(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new BS:new US,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(l6){return Promise.reject(l6)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){wx(!this.parameters.sitekey,this.auth,"argument-error"),wx(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),wx("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"==typeof e)e(t);else if("string"==typeof e){const n=QS()[e];"function"==typeof n&&n(t)}}}assertNotDestroyed(){wx(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){wx(Cx()&&!IS(),this.auth,"internal-error"),await function(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e){return(await Lx(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}(this.auth);wx(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return wx(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}class GS{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Tk._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function HS(e,t,n){var r;const i=await n.verify();try{let o;if(wx("string"==typeof i,e,"argument-error"),wx("recaptcha"===n.type,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){wx("enroll"===t.type,e,"internal-error");return(await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Lx(e,"POST","/v2/accounts/mfaEnrollment:start",Object.assign({tenantId:e.tenantId},t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo}{wx("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;wx(n,e,"missing-multi-factor-info");return(await function(e,t){return Lx(e,"POST","/v2/accounts/mfaSignIn:start",Object.assign({tenantId:e.tenantId},t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Lx(e,"POST","/v1/accounts:sendVerificationCode",Rx(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ZS{constructor(e){this.providerId=ZS.PROVIDER_ID,this.auth=fk(e)}verifyPhoneNumber(e,t){return HS(this.auth,e,bw(t))}static credential(e,t){return Tk._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ZS.credentialFromTaggedObject(t)}static credentialFromError(e){return ZS.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Tk._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function KS(e,t){return t?_x(t):(wx(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ZS.PROVIDER_ID="phone",ZS.PHONE_SIGN_IN_METHOD="phone";class JS extends yk{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return kk(e,this._buildIdpRequest())}_linkToIdToken(e,t){return kk(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return kk(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function e_(e){return Yk(e.auth,new JS(e),e.bypassAuthState)}function t_(e){const{auth:t,user:n}=e;return wx(n,t,"internal-error"),Bk(n,new JS(e),e.bypassAuthState)}async function n_(e){const{auth:t,user:n}=e;return wx(n,t,"internal-error"),zk(n,new JS(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(l6){this.reject(l6)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(l6){this.reject(l6)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return e_;case"linkViaPopup":case"linkViaRedirect":return n_;case"reauthViaPopup":case"reauthViaRedirect":return t_;default:yx(this.auth,"internal-error")}}resolve(e){kx(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kx(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=new Qx(2e3,1e4);class o_ extends r_{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,o_.currentPopupAction&&o_.currentPopupAction.cancel(),o_.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return wx(e,this.auth,"internal-error"),e}async onExecution(){kx(1===this.filter.length,"Popup operations only handle one event");const e=CS();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Ox(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Ox(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,o_.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Ox(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,i_.get())};e()}}o_.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s_=new Map;class a_ extends r_{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=s_.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=u_(t),r="true"===await c_(e)._get(n);return await c_(e)._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(l6){e=()=>Promise.reject(l6)}s_.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function l_(e,t){return c_(e)._set(u_(t),"true")}function c_(e){return _x(e._redirectPersistence)}function u_(e){return Jx("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(e,t,n){return async function(e,t,n){const r=fk(e);wx(t instanceof Qk,e,"argument-error");const i=KS(r,n);return await l_(i,r),i._openRedirect(r,t,"signInViaRedirect")}(e,t,n)}function d_(e,t,n){return async function(e,t,n){const r=bw(e);wx(t instanceof Qk,r.auth,"argument-error");const i=KS(r.auth,n);await l_(i,r.auth);const o=await m_(r);return i._openRedirect(r.auth,t,"reauthViaRedirect",o)}(e,t,n)}function f_(e,t,n){return async function(e,t,n){const r=bw(e);wx(t instanceof Qk,r.auth,"argument-error");const i=KS(r.auth,n);await Uk(!1,r,t.providerId),await l_(i,r.auth);const o=await m_(r);return i._openRedirect(r.auth,t,"linkViaRedirect",o)}(e,t,n)}async function p_(e,t,n=!1){const r=fk(e),i=KS(r,t),o=new a_(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}async function m_(e){const t=CS(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return y_(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!y_(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ox(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(v_(e))}saveEventToCache(e){this.cachedEventUids.add(v_(e)),this.lastProcessedEventTime=Date.now()}}function v_(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function y_({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}async function O_(e,t={}){return Lx(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,w_=/^https?/;function x_(e){const t=Tx(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!w_.test(n))return!1;if(b_.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=new Qx(3e4,6e4);function S_(){const e=QS().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}let __=null;function T_(e){return __=__||function(e){return new Promise(((t,n)=>{var r,i,o;function s(){S_(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{S_(),n(Ox(e,"network-request-failed"))},timeout:k_.get()})}if(null===(i=null===(r=QS().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=QS().gapi)||void 0===o?void 0:o.load)){const t=jS("iframefcb");return QS()[t]=()=>{gapi.load?s():n(Ox(e,"network-request-failed"))},WS(`https://apis.google.com/js/api.js?onload=${t}`)}s()}})).catch((e=>{throw __=null,e}))}(e),__}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=new Qx(5e3,15e3),E_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Q_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function I_(e){const t=e.config;wx(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ix(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.0.0"},i=Q_.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${pw(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const A_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class P_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(l6){}}}function $_(e,t,n,r=500,i=600){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},A_),{width:r.toString(),height:i.toString(),top:o,left:s}),c=ew().toLowerCase();n&&(a=ik(c)?"_blank":n),nk(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=ew()){var t;return ck(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new P_(null);const h=window.open(t||"",a,u);wx(h,e,"popup-blocked");try{h.focus()}catch(l6){}return new P_(h)}function R_(e,t,n,r,i,o){wx(e.config.authDomain,e,"auth-domain-config-required"),wx(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.0.0",eventId:i};if(t instanceof Qk){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))s[e]=t}if(t instanceof Ik){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))void 0===a[l]&&delete a[l];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return Ix(e,"emulator/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${pw(a).slice(1)}`}const L_=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_S,this._completeRedirectFn=p_}async _openPopup(e,t,n,r){var i;kx(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return $_(e,R_(e,t,n,Tx(),r),CS())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=R_(e,t,n,Tx(),r),QS().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(kx(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await async function(e){const t=await T_(e),n=QS().gapi;return wx(n,e,"internal-error"),t.open({where:document.body,url:I_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:E_,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Ox(e,"network-request-failed"),o=QS().setTimeout((()=>{r(i)}),C_.get());function s(){QS().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}(e),n=new g_(e);return t.register("authEvent",(t=>{wx(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),yx(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){if(e.config.emulator)return;const{authorizedDomains:t}=await O_(e);for(const r of t)try{if(x_(r))return}catch(n){}yx(e,"unauthorized-domain")}(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return uk()||rk()||ck()}};class D_ extends class{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return xx("unexpected MultiFactorSessionType")}}}{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new D_(e)}_finalizeEnroll(e,t,n){return function(e,t){return Lx(e,"POST","/v2/accounts/mfaEnrollment:finalize",Object.assign({tenantId:e.tenantId},t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return Lx(e,"POST","/v2/accounts/mfaSignIn:finalize",Object.assign({tenantId:e.tenantId},t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class N_{constructor(){}static assertion(e){return D_._fromCredential(e)}}var M_;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){wx(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j_(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */M_="Browser",Fw(new ww("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{wx(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),wx(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:M_,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hk(M_)},o=new dk(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_x);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Fw(new ww("auth-internal",(e=>{const t=fk(e.getProvider("auth").getImmediate());return new W_(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Yw("@firebase/auth","0.17.0",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(M_));async function F_(e,t,n){var r;const{BuildInfo:i}=j_();kx(t.sessionId,"AuthEvent did not contain a session ID");const o=await async function(e){const t=function(e){if(kx(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map((e=>e.toString(16).padStart(2,"0"))).join("")}(t.sessionId),s={};return ck()?s.ibi=i.packageName:sk()?s.apn=i.packageName:yx(e,"operation-not-supported-in-this-environment"),i.displayName&&(s.appDisplayName=i.displayName),s.sessionId=o,R_(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,s)}function V_(e){const{cordova:t}=j_();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,function(e=ew()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}()?"_blank":"_system","location=yes"),n(i)}))}))}class q_ extends g_{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}async function z_(e){const t=await Y_()._get(X_(e));return t&&await Y_()._remove(X_(e)),t}function U_(e,t){var n,r;const i=function(e){const t=G_(e),n=t.link?decodeURIComponent(t.link):void 0,r=G_(n).link,i=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return G_(i).link||i||r||n||e}(t);if(i.includes("/__/auth/callback")){const t=G_(i),o=t.firebaseError?function(e){try{return JSON.parse(e)}catch(l6){return null}}(decodeURIComponent(t.firebaseError)):null,s=null===(r=null===(n=null==o?void 0:o.code)||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=s?Ox(s):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function B_(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<20;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function Y_(){return _x(kS)}function X_(e){return Jx("authEvent",e.config.apiKey,e.name)}function G_(e){if(!(null==e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return mw(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=class{constructor(){this._redirectPersistence=_S,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=p_}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new q_(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){yx(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){!function(e){var t,n,r,i,o,s,a,l,c,u;const h=j_();wx("function"==typeof(null===(t=null==h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),wx(void 0!==(null===(n=null==h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),wx("function"==typeof(null===(o=null===(i=null===(r=null==h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===o?void 0:o.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),wx("function"==typeof(null===(l=null===(a=null===(s=null==h?void 0:h.cordova)||void 0===s?void 0:s.plugins)||void 0===a?void 0:a.browsertab)||void 0===l?void 0:l.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),wx("function"==typeof(null===(u=null===(c=null==h?void 0:h.cordova)||void 0===c?void 0:c.InAppBrowser)||void 0===u?void 0:u.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),s_.clear(),await this._originValidation(e);const o=function(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:B_(),postBody:null,tenantId:e.tenantId,error:Ox(e,"no-auth-event")}}(e,n,r);await function(e,t){return Y_()._set(X_(e),t)}(e,o);const s=await F_(e,o,t);return async function(e,t,n){const{cordova:r}=j_();let i=()=>{};try{await new Promise(((o,s)=>{let a=null;function l(){var e;o();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof t&&t(),"function"==typeof(null==n?void 0:n.close)&&n.close()}function c(){a||(a=window.setTimeout((()=>{s(Ox(e,"redirect-cancelled-by-user"))}),2e3))}function u(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&c()}t.addPassiveListener(l),document.addEventListener("resume",c,!1),sk()&&document.addEventListener("visibilitychange",u,!1),i=()=>{t.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}}))}finally{i()}}(e,i,await V_(s))}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){const{BuildInfo:t}=j_(),n={};ck()?n.iosBundleId=t.packageName:sk()?n.androidPackageName=t.packageName:yx(e,"operation-not-supported-in-this-environment"),await O_(e,n)}(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=j_(),o=setTimeout((async()=>{await z_(e),t.onEvent(Z_())}),500),s=async n=>{clearTimeout(o);const r=await z_(e);let i=null;r&&(null==n?void 0:n.url)&&(i=U_(r,n.url)),t.onEvent(i||Z_())};void 0!==n&&"function"==typeof n.subscribe&&n.subscribe(null,s);const a=r,l=`${i.packageName.toLowerCase()}://`;j_().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(l)&&s({url:e}),"function"==typeof a)try{a(e)}catch(l6){console.error(l6)}}}};function Z_(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ox("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function J_(e=ew()){return!("file:"!==K_()&&"ionic:"!==K_()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function eT(e=ew()){return ow()&&11===(null===document||void 0===document?void 0:document.documentMode)||function(e=ew()){return/Edge\/\d+/.test(e)}(e)}function tT(){try{const e=self.localStorage,t=CS();if(e)return e.setItem(t,"1"),e.removeItem(t),!eT()||sw()}catch(l6){return nT()&&sw()}return!1}function nT(){return"undefined"!=typeof global&&"WorkerGlobalScope"in global&&"importScripts"in global}function rT(){return("http:"===K_()||"https:"===K_()||rw()||J_())&&!(iw()||nw())&&tT()&&!nT()}function iT(){return J_()&&"undefined"!=typeof document}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oT={LOCAL:"local",NONE:"none",SESSION:"session"},sT=wx;async function aT(e){await e._initializationPromise;const t=lT(),n=Jx("persistence",e.config.apiKey,e.name);(null==t?void 0:t.sessionStorage)&&t.sessionStorage.setItem(n,e._getPersistence())}function lT(){return"undefined"!=typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT=wx;class uT{constructor(){this.browserResolver=_x(L_),this.cordovaResolver=_x(H_),this.underlyingResolver=null,this._redirectPersistence=_S,this._completeRedirectFn=p_}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return iT()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return cT(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await async function(){return!!iT()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),1e3);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(e){return e.unwrap()}function dT(e,t){var n;const r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code){t.resolver=new gT(e,function(e,t){var n;const r=bw(e),i=t;return wx(t.operationType,r,"argument-error"),wx(null===(n=i.serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),yS._fromError(r,i)}(e,t))}else if(r){const e=fT(t),n=t;e&&(n.credential=e,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}function fT(e){const{_tokenResponse:t}=e instanceof aw?e.customData:e;if(!t)return null;if(!(e instanceof aw)&&"temporaryProof"in t&&"phoneNumber"in t)return ZS.credentialFromResult(e);const n=t.providerId;if(!n||n===sx)return null;let r;switch(n){case ox:r=$k;break;case rx:r=Pk;break;case ix:r=Rk;break;case ax:r=Dk;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:o,pendingToken:s,nonce:a}=t;return i||o||e||s?s?n.startsWith("saml.")?Lk._create(n,s):Sk._fromParams({providerId:n,signInMethod:n,pendingToken:s,idToken:e,accessToken:i}):new Ak(n).credential({idToken:e,accessToken:i,rawNonce:a}):null}return e instanceof aw?r.credentialFromError(e):r.credentialFromResult(e)}async function pT(e,t){let n;try{n=await t}catch(l6){throw l6 instanceof aw&&dT(e,l6),l6}const{operationType:r,user:i}=n;return{operationType:r,credential:(o=n,fT(o)),additionalUserInfo:gS(n),user:vT.getOrCreate(i)};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var o}async function mT(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>pT(e,n.confirm(t))}}class gT{constructor(e,t){this.resolver=t,this.auth=e.wrapped()}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return pT(hT(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e){this._delegate=e,this.multiFactor=function(e){const t=bw(e);return bS.has(t)||bS.set(t,OS._fromUser(t)),bS.get(t)}(e)}static getOrCreate(e){return vT.USER_MAP.has(e)||vT.USER_MAP.set(e,new vT(e)),vT.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return pT(this.auth,Gk(this._delegate,e))}async linkWithPhoneNumber(e,t){return mT(this.auth,async function(e,t,n){const r=bw(e);await Uk(!1,r,"phone");const i=await HS(r.auth,t,bw(n));return new GS(i,(e=>Gk(r,e)))}(this._delegate,e,t))}async linkWithPopup(e){return pT(this.auth,async function(e,t,n){const r=bw(e);wx(t instanceof Qk,r.auth,"argument-error");const i=KS(r.auth,n);return new o_(r.auth,"linkViaPopup",t,i,r).executeNotNull()}(this._delegate,e,uT))}async linkWithRedirect(e){return await aT(fk(this.auth)),f_(this._delegate,e,uT)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return pT(this.auth,Hk(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return mT(this.auth,async function(e,t,n){const r=bw(e),i=await HS(r.auth,t,bw(n));return new GS(i,(e=>Hk(r,e)))}(this._delegate,e,t))}reauthenticateWithPopup(e){return pT(this.auth,async function(e,t,n){const r=bw(e);wx(t instanceof Qk,r.auth,"argument-error");const i=KS(r.auth,n);return new o_(r.auth,"reauthViaPopup",t,i,r).executeNotNull()}(this._delegate,e,uT))}async reauthenticateWithRedirect(e){return await aT(fk(this.auth)),d_(this._delegate,e,uT)}sendEmailVerification(e){return sS(this._delegate,e)}async unlink(e){return await qk(this._delegate,e),this}updateEmail(e){return function(e,t){return cS(bw(e),t,null)}(this._delegate,e)}updatePassword(e){return function(e,t){return cS(bw(e),null,t)}(this._delegate,e)}updatePhoneNumber(e){return async function(e,t){await zk(bw(e),t)}(this._delegate,e)}updateProfile(e){return lS(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return aS(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}vT.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yT=wx;class OT{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;yT(n,"invalid-api-key",{appName:e.name});let r=[Kx];if("undefined"!=typeof window){r=function(e,t){const n=lT();if(!(null==n?void 0:n.sessionStorage))return[];const r=Jx("persistence",e,t);switch(n.sessionStorage.getItem(r)){case oT.NONE:return[Kx];case oT.LOCAL:return[MS,_S];case oT.SESSION:return[_S];default:return[]}}(n,e.name);for(const e of[MS,kS,_S])r.includes(e)||r.push(e)}yT(n,"invalid-api-key",{appName:e.name});const i="undefined"!=typeof window?uT:void 0;this._delegate=t.initialize({options:{persistence:r,popupRedirectResolver:i}}),this._delegate._updateErrorMap(px),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?vT.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){mk(this._delegate,e,t)}applyActionCode(e){return nS(this._delegate,e)}checkActionCode(e){return rS(this._delegate,e)}confirmPasswordReset(e,t){return async function(e,t,n){await Ok(bw(e),{oobCode:t,newPassword:n})}(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return pT(this._delegate,async function(e,t,n){const r=fk(e),i=await Nk(r,{returnSecureToken:!0,email:t,password:n}),o=await Mk._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return oS(this._delegate,e)}isSignInWithEmailLink(e){return function(e,t){const n=Ck.parseLink(t);return"EMAIL_SIGNIN"===(null==n?void 0:n.operation)}(this._delegate,e)}async getRedirectResult(){yT(rT(),this._delegate,"operation-not-supported-in-this-environment");const e=await async function(e,t){return await fk(e)._initializationPromise,p_(e,t,!1)}(this._delegate,uT);return e?pT(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){!function(e,t){fk(e)._logFramework(t)}(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:o}=bT(e,t,n);return this._delegate.onAuthStateChanged(r,i,o)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:o}=bT(e,t,n);return this._delegate.onIdTokenChanged(r,i,o)}sendSignInLinkToEmail(e,t){return iS(this._delegate,e,t)}sendPasswordResetEmail(e,t){return tS(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(function(e,t){sT(Object.values(oT).includes(t),e,"invalid-persistence-type"),iw()?sT(t!==oT.SESSION,e,"unsupported-persistence-type"):nw()?sT(t===oT.NONE,e,"unsupported-persistence-type"):nT()?sT(t===oT.NONE||t===oT.LOCAL&&sw(),e,"unsupported-persistence-type"):sT(t===oT.NONE||tT(),e,"unsupported-persistence-type")}(this._delegate,e),e){case oT.SESSION:t=_S;break;case oT.LOCAL:t=await _x(MS)._isAvailable()?MS:kS;break;case oT.NONE:t=Kx;break;default:return yx("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return pT(this._delegate,async function(e){var t;const n=fk(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Mk({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Nk(n,{returnSecureToken:!0}),i=await Mk._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}(this._delegate))}signInWithCredential(e){return pT(this._delegate,Xk(this._delegate,e))}signInWithCustomToken(e){return pT(this._delegate,Zk(this._delegate,e))}signInWithEmailAndPassword(e,t){return pT(this._delegate,function(e,t,n){return Xk(bw(e),Ek.credential(t,n))}(this._delegate,e,t))}signInWithEmailLink(e,t){return pT(this._delegate,async function(e,t,n){const r=bw(e),i=Ek.credentialWithLink(t,n||Tx());return wx(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Xk(r,i)}(this._delegate,e,t))}signInWithPhoneNumber(e,t){return mT(this._delegate,async function(e,t,n){const r=fk(e),i=await HS(r,t,bw(n));return new GS(i,(e=>Xk(r,e)))}(this._delegate,e,t))}async signInWithPopup(e){return yT(rT(),this._delegate,"operation-not-supported-in-this-environment"),pT(this._delegate,async function(e,t,n){const r=fk(e);wx(t instanceof Qk,e,"argument-error");const i=KS(r,n);return new o_(r,"signInViaPopup",t,i).executeNotNull()}(this._delegate,e,uT))}async signInWithRedirect(e){return yT(rT(),this._delegate,"operation-not-supported-in-this-environment"),await aT(this._delegate),h_(this._delegate,e,uT)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return async function(e,t){const{data:n}=await rS(bw(e),t);return n.email}(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function bT(e,t,n){let r=e;"function"!=typeof e&&({next:r,error:t,complete:n}=e);const i=r;return{next:e=>i(e&&vT.getOrCreate(e)),error:t,complete:n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */OT.Persistence=oT;class wT{constructor(){this.providerId="phone",this._delegate=new ZS(hT(nx.auth()))}static credential(e,t){return ZS.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}wT.PHONE_SIGN_IN_METHOD=ZS.PHONE_SIGN_IN_METHOD,wT.PROVIDER_ID=ZS.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xT=wx;class kT{constructor(e,t,n=nx.app()){var r;xT(null===(r=n.options)||void 0===r?void 0:r.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new XS(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ST;(ST=nx).INTERNAL.registerComponent(new ww("auth-compat",(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new OT(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:lx,PASSWORD_RESET:cx,RECOVER_EMAIL:ux,REVERT_SECOND_FACTOR_ADDITION:hx,VERIFY_AND_CHANGE_EMAIL:dx,VERIFY_EMAIL:fx}},EmailAuthProvider:Ek,FacebookAuthProvider:Pk,GithubAuthProvider:Rk,GoogleAuthProvider:$k,OAuthProvider:Ak,PhoneAuthProvider:wT,PhoneMultiFactorGenerator:N_,RecaptchaVerifier:kT,TwitterAuthProvider:Dk,Auth:OT,AuthCredential:yk,Error:aw}).setInstantiationMode("LAZY").setMultipleInstances(!1)),ST.registerVersion("@firebase/auth-compat","0.1.0");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var _T=function(e,t){return(_T=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function TT(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}var CT,ET="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},QT=QT||{},IT=ET||self;function AT(){}function PT(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function $T(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var RT="closure_uid_"+(1e9*Math.random()>>>0),LT=0;function DT(e,t,n){return e.call.apply(e.bind,arguments)}function NT(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function MT(e,t,n){return(MT=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?DT:NT).apply(null,arguments)}function WT(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function jT(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return t.prototype[n].apply(e,i)}}function FT(){this.s=this.s,this.o=this.o}var VT={};FT.prototype.s=!1,FT.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,RT)&&e[RT]||(e[RT]=++LT)}(this);delete VT[e]}},FT.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var qT=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(var n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},zT=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){for(var r=e.length,i="string"==typeof e?e.split(""):e,o=0;o<r;o++)o in i&&t.call(n,i[o],o,e)};function UT(e){return Array.prototype.concat.apply([],arguments)}function BT(e){var t=e.length;if(0<t){for(var n=Array(t),r=0;r<t;r++)n[r]=e[r];return n}return[]}function YT(e){return/^[\s\xa0]*$/.test(e)}var XT,GT=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function HT(e,t){return-1!=e.indexOf(t)}function ZT(e,t){return e<t?-1:e>t?1:0}e:{var KT=IT.navigator;if(KT){var JT=KT.userAgent;if(JT){XT=JT;break e}}XT=""}function eC(e,t,n){for(var r in e)t.call(n,e[r],r,e)}function tC(e){var t={};for(var n in e)t[n]=e[n];return t}var nC="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rC(e,t){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])e[n]=r[n];for(var o=0;o<nC.length;o++)n=nC[o],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function iC(e){return iC[" "](e),e}iC[" "]=AT;var oC,sC,aC=HT(XT,"Opera"),lC=HT(XT,"Trident")||HT(XT,"MSIE"),cC=HT(XT,"Edge"),uC=cC||lC,hC=HT(XT,"Gecko")&&!(HT(XT.toLowerCase(),"webkit")&&!HT(XT,"Edge"))&&!(HT(XT,"Trident")||HT(XT,"MSIE"))&&!HT(XT,"Edge"),dC=HT(XT.toLowerCase(),"webkit")&&!HT(XT,"Edge");function fC(){var e=IT.document;return e?e.documentMode:void 0}e:{var pC="",mC=(sC=XT,hC?/rv:([^\);]+)(\)|;)/.exec(sC):cC?/Edge\/([\d\.]+)/.exec(sC):lC?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(sC):dC?/WebKit\/(\S+)/.exec(sC):aC?/(?:Version)[ \/]?(\S+)/.exec(sC):void 0);if(mC&&(pC=mC?mC[1]:""),lC){var gC=fC();if(null!=gC&&gC>parseFloat(pC)){oC=String(gC);break e}}oC=pC}var vC,yC={};function OC(){return function(e){var t=yC;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){for(var e=0,t=GT(String(oC)).split("."),n=GT("9").split("."),r=Math.max(t.length,n.length),i=0;0==e&&i<r;i++){var o=t[i]||"",s=n[i]||"";do{if(o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==o[0].length&&0==s[0].length)break;e=ZT(0==o[1].length?0:parseInt(o[1],10),0==s[1].length?0:parseInt(s[1],10))||ZT(0==o[2].length,0==s[2].length)||ZT(o[2],s[2]),o=o[3],s=s[3]}while(0==e)}return 0<=e}))}if(IT.document&&lC){var bC=fC();vC=bC||(parseInt(oC,10)||void 0)}else vC=void 0;var wC=vC,xC=function(){if(!IT.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{IT.addEventListener("test",AT,t),IT.removeEventListener("test",AT,t)}catch(n){}return e}();function kC(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function SC(e,t){if(kC.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(hC){e:{try{iC(t.nodeName);var i=!0;break e}catch(o){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:_C[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&SC.Z.h.call(this)}}kC.prototype.h=function(){this.defaultPrevented=!0},jT(SC,kC);var _C={2:"touch",3:"pen",4:"mouse"};SC.prototype.h=function(){SC.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var TC="closure_listenable_"+(1e6*Math.random()|0),CC=0;function EC(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++CC,this.ca=this.fa=!1}function QC(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function IC(e){this.src=e,this.g={},this.h=0}function AC(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],o=qT(i,t);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(QC(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function PC(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.ca&&o.listener==t&&o.capture==!!n&&o.ia==r)return i}return-1}IC.prototype.add=function(e,t,n,r,i){var o=e.toString();(e=this.g[o])||(e=this.g[o]=[],this.h++);var s=PC(e,t,r,i);return-1<s?(t=e[s],n||(t.fa=!1)):((t=new EC(t,this.src,o,!!r,i)).fa=n,e.push(t)),t};var $C="closure_lm_"+(1e6*Math.random()|0),RC={};function LC(e,t,n,r,i){if(r&&r.once)return NC(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)LC(e,t[o],n,r,i);return null}return n=zC(n),e&&e[TC]?e.N(t,n,$T(r)?!!r.capture:!!r,i):DC(e,t,n,!1,r,i)}function DC(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=$T(i)?!!i.capture:!!i,a=VC(e);if(a||(e[$C]=a=new IC(e)),(n=a.add(t,n,r,s,o)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=FC;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)xC||(i=s),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(jC(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function NC(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)NC(e,t[o],n,r,i);return null}return n=zC(n),e&&e[TC]?e.O(t,n,$T(r)?!!r.capture:!!r,i):DC(e,t,n,!0,r,i)}function MC(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)MC(e,t[o],n,r,i);else r=$T(r)?!!r.capture:!!r,n=zC(n),e&&e[TC]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=PC(o=e.g[t],n,r,i))&&(QC(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete e.g[t],e.h--)))):e&&(e=VC(e))&&(t=e.g[t.toString()],e=-1,t&&(e=PC(t,n,r,i)),(n=-1<e?t[e]:null)&&WC(n))}function WC(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[TC])AC(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(jC(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=VC(t))?(AC(n,e),0==n.h&&(n.src=null,t[$C]=null)):QC(e)}}}function jC(e){return e in RC?RC[e]:RC[e]="on"+e}function FC(e,t){if(e.ca)e=!0;else{t=new SC(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&WC(e),e=n.call(r,t)}return e}function VC(e){return(e=e[$C])instanceof IC?e:null}var qC="__closure_events_fn_"+(1e9*Math.random()>>>0);function zC(e){return"function"==typeof e?e:(e[qC]||(e[qC]=function(t){return e.handleEvent(t)}),e[qC])}function UC(){FT.call(this),this.i=new IC(this),this.P=this,this.I=null}function BC(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new kC(t,e);else if(t instanceof kC)t.target=t.target||e;else{var i=t;rC(t=new kC(r,e),i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=YC(s,r,!0,t)&&i}if(i=YC(s=t.g=e,r,!0,t)&&i,i=YC(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)i=YC(s=t.g=n[o],r,!1,t)&&i}function YC(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.ca&&s.capture==n){var a=s.listener,l=s.ia||s.src;s.fa&&AC(e.i,s),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}jT(UC,FT),UC.prototype[TC]=!0,UC.prototype.removeEventListener=function(e,t,n,r){MC(this,e,t,n,r)},UC.prototype.M=function(){if(UC.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)QC(n[r]);delete t.g[e],t.h--}}this.I=null},UC.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},UC.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var XC=IT.JSON.stringify;function GC(){var e=rE,t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var HC,ZC=function(){function e(){this.h=this.g=null}return e.prototype.add=function(e,t){var n=KC.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n},e}(),KC=new(function(){function e(e,t){this.i=e,this.j=t,this.h=0,this.g=null}return e.prototype.get=function(){var e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e},e}())((function(){return new JC}),(function(e){return e.reset()})),JC=function(){function e(){this.next=this.g=this.h=null}return e.prototype.set=function(e,t){this.h=e,this.g=t,this.next=null},e.prototype.reset=function(){this.next=this.g=this.h=null},e}();function eE(e){IT.setTimeout((function(){throw e}),0)}function tE(e,t){HC||function(){var e=IT.Promise.resolve(void 0);HC=function(){e.then(iE)}}(),nE||(HC(),nE=!0),rE.add(e,t)}var nE=!1,rE=new ZC;function iE(){for(var e;e=GC();){try{e.h.call(e.g)}catch(n){eE(n)}var t=KC;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}nE=!1}function oE(e,t){UC.call(this),this.h=e||1,this.g=t||IT,this.j=MT(this.kb,this),this.l=Date.now()}function sE(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function aE(e,t,n){if("function"==typeof e)n&&(e=MT(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=MT(e.handleEvent,e)}return 2147483647<Number(t)?-1:IT.setTimeout(e,t||0)}function lE(e){e.g=aE((function(){e.g=null,e.i&&(e.i=!1,lE(e))}),e.j);var t=e.h;e.h=null,e.m.apply(null,t)}jT(oE,UC),(CT=oE.prototype).da=!1,CT.S=null,CT.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),BC(this,"tick"),this.da&&(sE(this),this.start()))}},CT.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},CT.M=function(){oE.Z.M.call(this),sE(this),delete this.g};var cE=function(e){function t(t,n){var r=e.call(this)||this;return r.m=t,r.j=n,r.h=null,r.i=!1,r.g=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}_T(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.l=function(e){this.h=arguments,this.g?this.i=!0:lE(this)},t.prototype.M=function(){e.prototype.M.call(this),this.g&&(IT.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)},t}(FT);function uE(e){FT.call(this),this.h=e,this.g={}}jT(uE,FT);var hE=[];function dE(e,t,n,r){Array.isArray(n)||(n&&(hE[0]=n.toString()),n=hE);for(var i=0;i<n.length;i++){var o=LC(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function fE(e){eC(e.g,(function(e,t){this.g.hasOwnProperty(t)&&WC(e)}),e),e.g={}}function pE(){this.g=!0}function mE(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return XC(n)}catch(a){return t}}(e,n)+(r?" "+r:"")}))}uE.prototype.M=function(){uE.Z.M.call(this),fE(this)},uE.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},pE.prototype.Aa=function(){this.g=!1},pE.prototype.info=function(){};var gE={},vE=null;function yE(){return vE=vE||new UC}function OE(e){kC.call(this,gE.Ma,e)}function bE(e){var t=yE();BC(t,new OE(t,e))}function wE(e,t){kC.call(this,gE.STAT_EVENT,e),this.stat=t}function xE(e){var t=yE();BC(t,new wE(t,e))}function kE(e,t){kC.call(this,gE.Na,e),this.size=t}function SE(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return IT.setTimeout((function(){e()}),t)}gE.Ma="serverreachability",jT(OE,kC),gE.STAT_EVENT="statevent",jT(wE,kC),gE.Na="timingevent",jT(kE,kC);var _E={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},TE={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function CE(){}function EE(e){return e.h||(e.h=e.i())}function QE(){}CE.prototype.h=null;var IE,AE={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function PE(){kC.call(this,"d")}function $E(){kC.call(this,"c")}function RE(){}function LE(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new uE(this),this.P=NE,e=uC?125:void 0,this.W=new oE(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new DE}function DE(){this.i=null,this.g="",this.h=!1}jT(PE,kC),jT($E,kC),jT(RE,CE),RE.prototype.g=function(){return new XMLHttpRequest},RE.prototype.i=function(){return{}},IE=new RE;var NE=45e3,ME={},WE={};function jE(e,t,n){e.K=1,e.v=cQ(rQ(t)),e.s=n,e.U=!0,FE(e,null)}function FE(e,t){e.F=Date.now(),UE(e),e.A=rQ(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),xQ(n.h,"t",r),e.C=0,n=e.l.H,e.h=new DE,e.g=kI(e.l,n?t:null,!e.s),0<e.O&&(e.L=new cE(MT(e.Ia,e,e.g),e.O)),dE(e.V,e.g,"readystatechange",e.gb),t=e.H?tC(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),bE(1),function(e,t,n,r,i,o){e.info((function(){if(e.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");s=2<=h.length&&"type"==h[1]?s+(u+"=")+c+"&":s+(u+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+s}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function VE(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function qE(e,t,n){for(var r,i=!0;!e.I&&e.C<n.length;){if((r=zE(e,n))==WE){4==t&&(e.o=4,xE(14),i=!1),mE(e.j,e.m,null,"[Incomplete Response]");break}if(r==ME){e.o=4,xE(15),mE(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}mE(e.j,e.m,r,null),HE(e,r)}VE(e)&&r!=WE&&r!=ME&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,xE(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),mI(t),t.L=!0,xE(11))):(mE(e.j,e.m,n,"[Invalid Chunked Response]"),GE(e),XE(e))}function zE(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?WE:(n=Number(t.substring(n,r)),isNaN(n)?ME:(r+=1)+n>t.length?WE:(t=t.substr(r,n),e.C=r+n,t))}function UE(e){e.Y=Date.now()+e.P,BE(e,e.P)}function BE(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=SE(MT(e.eb,e),t)}function YE(e){e.B&&(IT.clearTimeout(e.B),e.B=null)}function XE(e){0==e.l.G||e.I||yI(e.l,e)}function GE(e){YE(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,sE(e.W),fE(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function HE(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||QQ(n.i,e)))if(n.I=e.N,!e.J&&QQ(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(g){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;vI(n),sI(n)}pI(n),xE(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=SE(MT(n.ab,n),6e3));if(1>=EQ(n.i)&&n.ka){try{n.ka()}catch(g){}n.ka=void 0}}else bI(n,11)}else if((e.J||n.g==e)&&vI(n),!YT(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){var o=i[t];if(n.U=o[0],o=o[1],2==n.G)if("c"==o[0]){n.J=o[1],n.la=o[2];var s=o[3];null!=s&&(n.ma=s,n.h.info("VER="+n.ma));var a=o[4];null!=a&&(n.za=a,n.h.info("SVER="+n.za));var l=o[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;var c=e.g;if(c){var u=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(u){var h=r.i;!h.g&&(HT(u,"spdy")||HT(u,"quic")||HT(u,"h2"))&&(h.j=h.l,h.g=new Set,h.h&&(IQ(h,h.h),h.h=null))}if(r.D){var d=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;d&&(r.sa=d,lQ(r.F,r.D,d))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var f=e;if((r=n).oa=xI(r,r.H?r.la:null,r.W),f.J){AQ(r.i,f);var p=f,m=r.K;m&&p.setTimeout(m),p.B&&(YE(p),UE(p)),r.g=f}else fI(r);0<n.l.length&&cI(n)}else"stop"!=o[0]&&"close"!=o[0]||bI(n,7);else 3==n.G&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?bI(n,7):oI(n):"noop"!=o[0]&&n.j&&n.j.wa(o),n.A=0)}bE(4)}catch(g){}}function ZE(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(PT(e)||"string"==typeof e)zT(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(PT(e)||"string"==typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;i=(r=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(PT(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e)).length;for(var o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}}function KE(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof KE)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function JE(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];eQ(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)eQ(i,r=e.g[t])||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function eQ(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(CT=LE.prototype).setTimeout=function(e){this.P=e},CT.gb=function(e){e=e.target;var t=this.L;t&&3==eI(e)?t.l():this.Ia(e)},CT.Ia=function(e){try{if(e==this.g)e:{var t=eI(this.g),n=this.g.Da(),r=this.g.ba();if(!(3>t)&&(3!=t||uC||this.g&&(this.h.h||this.g.ga()||tI(this.g)))){this.I||4!=t||7==n||bE(8==n||0>=r?3:2),YE(this);var i=this.g.ba();this.N=i;t:if(VE(this)){var o=tI(this.g);e="";var s=o.length,a=4==eI(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){GE(this),XE(this);var l="";break t}this.h.i=new IT.TextDecoder}for(n=0;n<s;n++)this.h.h=!0,e+=this.h.i.decode(o[n],{stream:a&&n==s-1});o.splice(0,s),this.h.g+=e,this.C=0,l=this.h.g}else l=this.g.ga();if(this.i=200==i,function(e,t,n,r,i,o,s){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+o+" "+s}))}(this.j,this.u,this.A,this.m,this.X,t,i),this.i){if(this.$&&!this.J){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!YT(c)){var h=c;break t}}h=null}if(!(i=h)){this.i=!1,this.o=3,xE(12),GE(this),XE(this);break e}mE(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,HE(this,i)}this.U?(qE(this,t,l),uC&&this.i&&3==t&&(dE(this.V,this.W,"tick",this.fb),this.W.start())):(mE(this.j,this.m,l,null),HE(this,l)),4==t&&GE(this),this.i&&!this.I&&(4==t?yI(this.l,this):(this.i=!1,UE(this)))}else 400==i&&0<l.indexOf("Unknown SID")?(this.o=3,xE(12)):(this.o=0,xE(13)),GE(this),XE(this)}}}catch(d){}},CT.fb=function(){if(this.g){var e=eI(this.g),t=this.g.ga();this.C<t.length&&(YE(this),qE(this,e,t),this.i&&4!=e&&UE(this))}},CT.cancel=function(){this.I=!0,GE(this)},CT.eb=function(){this.B=null;var e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(bE(3),xE(17)),GE(this),this.o=2,XE(this)):BE(this,this.Y-e)},(CT=KE.prototype).R=function(){JE(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},CT.T=function(){return JE(this),this.g.concat()},CT.get=function(e,t){return eQ(this.h,e)?this.h[e]:t},CT.set=function(e,t){eQ(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},CT.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],o=this.get(i);e.call(t,o,i,this)}};var tQ=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function nQ(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof nQ){this.g=void 0!==t?t:e.g,iQ(this,e.j),this.s=e.s,oQ(this,e.i),sQ(this,e.m),this.l=e.l,t=e.h;var n=new yQ;n.i=t.i,t.g&&(n.g=new KE(t.g),n.h=t.h),aQ(this,n),this.o=e.o}else e&&(n=String(e).match(tQ))?(this.g=!!t,iQ(this,n[1]||"",!0),this.s=uQ(n[2]||""),oQ(this,n[3]||"",!0),sQ(this,n[4]),this.l=uQ(n[5]||"",!0),aQ(this,n[6]||"",!0),this.o=uQ(n[7]||"")):(this.g=!!t,this.h=new yQ(null,this.g))}function rQ(e){return new nQ(e)}function iQ(e,t,n){e.j=n?uQ(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function oQ(e,t,n){e.i=n?uQ(t,!0):t}function sQ(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function aQ(e,t,n){t instanceof yQ?(e.h=t,function(e,t){t&&!e.j&&(OQ(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(bQ(this,t),xQ(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=hQ(t,gQ)),e.h=new yQ(t,e.g))}function lQ(e,t,n){e.h.set(t,n)}function cQ(e){return lQ(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function uQ(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function hQ(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,dQ),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function dQ(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}nQ.prototype.toString=function(){var e=[],t=this.j;t&&e.push(hQ(t,fQ,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(hQ(t,fQ,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(hQ(n,"/"==n.charAt(0)?mQ:pQ,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",hQ(n,vQ)),e.join("")};var fQ=/[#\/\?@]/g,pQ=/[#\?:]/g,mQ=/[#\?]/g,gQ=/[#\?@]/g,vQ=/#/g;function yQ(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function OQ(e){e.g||(e.g=new KE,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function bQ(e,t){OQ(e),t=kQ(e,t),eQ(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,eQ((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&JE(e)))}function wQ(e,t){return OQ(e),t=kQ(e,t),eQ(e.g.h,t)}function xQ(e,t,n){bQ(e,t),0<n.length&&(e.i=null,e.g.set(kQ(e,t),BT(n)),e.h+=n.length)}function kQ(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(CT=yQ.prototype).add=function(e,t){OQ(this),this.i=null,e=kQ(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},CT.forEach=function(e,t){OQ(this),this.g.forEach((function(n,r){zT(n,(function(n){e.call(t,n,r,this)}),this)}),this)},CT.T=function(){OQ(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],o=0;o<i.length;o++)n.push(t[r]);return n},CT.R=function(e){OQ(this);var t=[];if("string"==typeof e)wQ(this,e)&&(t=UT(t,this.g.get(kQ(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=UT(t,e[n])}return t},CT.set=function(e,t){return OQ(this),this.i=null,wQ(this,e=kQ(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},CT.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},CT.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var o=0;o<r.length;o++){var s=i;""!==r[o]&&(s+="="+encodeURIComponent(String(r[o]))),e.push(s)}}return this.i=e.join("&")};var SQ=function(e,t){this.h=e,this.g=t};function _Q(e){this.l=e||TQ,IT.PerformanceNavigationTiming?e=0<(e=IT.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(IT.g&&IT.g.Ea&&IT.g.Ea()&&IT.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var TQ=10;function CQ(e){return!!e.h||!!e.g&&e.g.size>=e.j}function EQ(e){return e.h?1:e.g?e.g.size:0}function QQ(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function IQ(e,t){e.g?e.g.add(t):e.h=t}function AQ(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function PQ(e){var t,n;if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){var r=e.i;try{for(var i=TT(e.g.values()),o=i.next();!o.done;o=i.next()){var s=o.value;r=r.concat(s.D)}}catch(a){t={error:a}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r}return BT(e.i)}function $Q(){}function RQ(){this.g=new $Q}function LQ(e,t,n){var r=n||"";try{ZE(e,(function(e,n){var i=e;$T(e)&&(i=XC(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(l6){throw t.push(r+"type="+encodeURIComponent("_badmap")),l6}}function DQ(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(o){}}function NQ(e){this.l=e.$b||null,this.j=e.ib||!1}function MQ(e,t){UC.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=WQ,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_Q.prototype.cancel=function(){var e,t;if(this.i=PQ(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){try{for(var n=TT(this.g.values()),r=n.next();!r.done;r=n.next()){r.value.cancel()}}catch(i){e={error:i}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}this.g.clear()}},$Q.prototype.stringify=function(e){return IT.JSON.stringify(e,void 0)},$Q.prototype.parse=function(e){return IT.JSON.parse(e,void 0)},jT(NQ,CE),NQ.prototype.g=function(){return new MQ(this.l,this.j)},NQ.prototype.i=function(e){return function(){return e}}({}),jT(MQ,UC);var WQ=0;function jQ(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function FQ(e){e.readyState=4,e.l=null,e.j=null,e.A=null,VQ(e)}function VQ(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(CT=MQ.prototype).open=function(e,t){if(this.readyState!=WQ)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,VQ(this)},CT.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||IT).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},CT.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,FQ(this)),this.readyState=WQ},CT.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,VQ(this)),this.g&&(this.readyState=3,VQ(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==IT.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;jQ(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},CT.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?FQ(this):VQ(this),3==this.readyState&&jQ(this)}},CT.Ua=function(e){this.g&&(this.response=this.responseText=e,FQ(this))},CT.Ta=function(e){this.g&&(this.response=e,FQ(this))},CT.ha=function(){this.g&&FQ(this)},CT.setRequestHeader=function(e,t){this.v.append(e,t)},CT.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},CT.getAllResponseHeaders=function(){if(!this.h)return"";for(var e=[],t=this.h.entries(),n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(MQ.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var qQ=IT.JSON.parse;function zQ(e){UC.call(this),this.headers=new KE,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=UQ,this.K=this.L=!1}jT(zQ,UC);var UQ="",BQ=/^https?$/i,YQ=["POST","PUT"];function XQ(e){return"content-type"==e.toLowerCase()}function GQ(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,HQ(e),KQ(e)}function HQ(e){e.D||(e.D=!0,BC(e,"complete"),BC(e,"error"))}function ZQ(e){if(e.h&&void 0!==QT&&(!e.C[1]||4!=eI(e)||2!=e.ba()))if(e.v&&4==eI(e))aE(e.Fa,0,e);else if(BC(e,"readystatechange"),4==eI(e)){e.h=!1;try{var t,n=e.ba();e:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}if(!(t=r)){var i;if(i=0===n){var o=String(e.H).match(tQ)[1]||null;if(!o&&IT.self&&IT.self.location){var s=IT.self.location.protocol;o=s.substr(0,s.length-1)}i=!BQ.test(o?o.toLowerCase():"")}t=i}if(t)BC(e,"complete"),BC(e,"success");else{e.m=6;try{var a=2<eI(e)?e.g.statusText:""}catch(l){a=""}e.j=a+" ["+e.ba()+"]",HQ(e)}}finally{KQ(e)}}}function KQ(e,t){if(e.g){JQ(e);var n=e.g,r=e.C[0]?AT:null;e.g=null,e.C=null,t||BC(e,"ready");try{n.onreadystatechange=r}catch(l6){}}}function JQ(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(IT.clearTimeout(e.A),e.A=null)}function eI(e){return e.g?e.g.readyState:0}function tI(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case UQ:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function nI(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=function(e){var t="";return eC(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):lQ(e,t,n))}function rI(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function iI(e){this.za=0,this.l=[],this.h=new pE,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=rI("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=rI("baseRetryDelayMs",5e3,e),this.$a=rI("retryDelaySeedMs",1e4,e),this.Ya=rI("forwardChannelMaxRetries",2,e),this.ra=rI("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new _Q(e&&e.concurrentRequestLimit),this.Ca=new RQ,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function oI(e){if(aI(e),3==e.G){var t=e.V++,n=rQ(e.F);lQ(n,"SID",e.J),lQ(n,"RID",t),lQ(n,"TYPE","terminate"),hI(e,n),(t=new LE(e,e.h,t,void 0)).K=2,t.v=cQ(rQ(n)),n=!1,IT.navigator&&IT.navigator.sendBeacon&&(n=IT.navigator.sendBeacon(t.v.toString(),"")),!n&&IT.Image&&((new Image).src=t.v,n=!0),n||(t.g=kI(t.l,null),t.g.ea(t.v)),t.F=Date.now(),UE(t)}wI(e)}function sI(e){e.g&&(mI(e),e.g.cancel(),e.g=null)}function aI(e){sI(e),e.u&&(IT.clearTimeout(e.u),e.u=null),vI(e),e.i.cancel(),e.m&&("number"==typeof e.m&&IT.clearTimeout(e.m),e.m=null)}function lI(e,t){e.l.push(new SQ(e.Za++,t)),3==e.G&&cI(e)}function cI(e){CQ(e.i)||e.m||(e.m=!0,tE(e.Ha,e),e.C=0)}function uI(e,t){var n;n=t?t.m:e.V++;var r=rQ(e.F);lQ(r,"SID",e.J),lQ(r,"RID",n),lQ(r,"AID",e.U),hI(e,r),e.o&&e.s&&nI(r,e.o,e.s),n=new LE(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=dI(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),IQ(e.i,n),jE(n,r,t)}function hI(e,t){e.j&&ZE({},(function(e,n){lQ(t,n,e)}))}function dI(e,t,n){n=Math.min(e.l.length,n);var r=e.j?MT(e.j.Oa,e.j,e):null;e:for(var i=e.l,o=-1;;){var s=["count="+n];-1==o?0<n?(o=i[0].h,s.push("ofs="+o)):o=0:s.push("ofs="+o);for(var a=!0,l=0;l<n;l++){var c=i[l].h,u=i[l].g;if(0>(c-=o))o=Math.max(0,i[l].h-100),a=!1;else try{LQ(u,s,"req"+c+"_")}catch(h){r&&r(u)}}if(a){r=s.join("&");break e}}return e=e.l.splice(0,n),t.D=e,r}function fI(e){e.g||e.u||(e.Y=1,tE(e.Ga,e),e.A=0)}function pI(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=SE(MT(e.Ga,e),OI(e,e.A)),e.A++,!0)}function mI(e){null!=e.B&&(IT.clearTimeout(e.B),e.B=null)}function gI(e){e.g=new LE(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=rQ(e.oa);lQ(t,"RID","rpc"),lQ(t,"SID",e.J),lQ(t,"CI",e.N?"0":"1"),lQ(t,"AID",e.U),hI(e,t),lQ(t,"TYPE","xmlhttp"),e.o&&e.s&&nI(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=cQ(rQ(t)),n.s=null,n.U=!0,FE(n,e)}function vI(e){null!=e.v&&(IT.clearTimeout(e.v),e.v=null)}function yI(e,t){var n=null;if(e.g==t){vI(e),mI(e),e.g=null;var r=2}else{if(!QQ(e.i,t))return;n=t.D,AQ(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;BC(r=yE(),new kE(r,n,t,i)),cI(e)}else fI(e);else if(3==(i=t.o)||0==i&&0<e.I||!(1==r&&function(e,t){return!(EQ(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=SE(MT(e.Ha,e,t),OI(e,e.C)),e.C++,0)))}(e,t)||2==r&&pI(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:bI(e,5);break;case 4:bI(e,10);break;case 3:bI(e,6);break;default:bI(e,2)}}function OI(e,t){var n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function bI(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=MT(e.jb,e);n||(n=new nQ("//www.google.com/images/cleardot.gif"),IT.location&&"http"==IT.location.protocol||iQ(n,"https"),cQ(n)),function(e,t){var n=new pE;if(IT.Image){var r=new Image;r.onload=WT(DQ,n,r,"TestLoadImage: loaded",!0,t),r.onerror=WT(DQ,n,r,"TestLoadImage: error",!1,t),r.onabort=WT(DQ,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=WT(DQ,n,r,"TestLoadImage: timeout",!1,t),IT.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else xE(2);e.G=0,e.j&&e.j.va(t),wI(e),aI(e)}function wI(e){e.G=0,e.I=-1,e.j&&(0==PQ(e.i).length&&0==e.l.length||(e.i.i.length=0,BT(e.l),e.l.length=0),e.j.ua())}function xI(e,t,n){var r=function(e){return e instanceof nQ?rQ(e):new nQ(e,void 0)}(n);if(""!=r.i)t&&oQ(r,t+"."+r.i),sQ(r,r.m);else{var i=IT.location;r=function(e,t,n,r){var i=new nQ(null,void 0);return e&&iQ(i,e),t&&oQ(i,t),n&&sQ(i,n),r&&(i.l=r),i}(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&eC(e.aa,(function(e,t){lQ(r,t,e)})),t=e.D,n=e.sa,t&&n&&lQ(r,t,n),lQ(r,"VER",e.ma),hI(e,r),r}function kI(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new zQ(new NQ({ib:!0})):new zQ(e.qa)).L=e.H,t}function SI(){}function _I(){if(lC&&!(10<=Number(wC)))throw Error("Environmental error: no available transport.")}function TI(e,t){UC.call(this),this.g=new iI(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!YT(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!YT(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new QI(this)}function CI(e){PE.call(this);var t=e.__sm__;if(t){e:{for(var n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function EI(){$E.call(this),this.status=1}function QI(e){this.g=e}(CT=zQ.prototype).ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():IE.g(),this.C=this.u?EE(this.u):EE(IE),this.g.onreadystatechange=MT(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(o){return void GQ(this,o)}e=n||"";var i=new KE(this.headers);r&&ZE(r,(function(e,t){i.set(t,e)})),r=function(e){e:{for(var t=XQ,n=e.length,r="string"==typeof e?e.split(""):e,i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(i.T()),n=IT.FormData&&e instanceof IT.FormData,!(0<=qT(YQ,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{JQ(this),0<this.B&&((this.K=function(e){return lC&&OC()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=MT(this.pa,this)):this.A=aE(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(o){GQ(this,o)}},CT.pa=function(){void 0!==QT&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,BC(this,"timeout"),this.abort(8))},CT.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,BC(this,"complete"),BC(this,"abort"),KQ(this))},CT.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),KQ(this,!0)),zQ.Z.M.call(this)},CT.Fa=function(){this.s||(this.F||this.v||this.l?ZQ(this):this.cb())},CT.cb=function(){ZQ(this)},CT.ba=function(){try{return 2<eI(this)?this.g.status:-1}catch(sC){return-1}},CT.ga=function(){try{return this.g?this.g.responseText:""}catch(sC){return""}},CT.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),qQ(t)}},CT.Da=function(){return this.m},CT.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(CT=iI.prototype).ma=8,CT.G=1,CT.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},CT.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;var t=new LE(this,this.h,e,void 0),n=this.s;if(this.P&&(n?rC(n=tC(n),this.P):n=this.P),null===this.o&&(t.H=n),this.ja)e:{for(var r=0,i=0;i<this.l.length;i++){var o=this.l[i];if(void 0===(o="__data__"in o.g&&"string"==typeof(o=o.g.__data__)?o.length:void 0))break;if(4096<(r+=o)){r=i;break e}if(4096===r||i===this.l.length-1){r=i+1;break e}}r=1e3}else r=1e3;r=dI(this,t,r),lQ(i=rQ(this.F),"RID",e),lQ(i,"CVER",22),this.D&&lQ(i,"X-HTTP-Session-Id",this.D),hI(this,i),this.o&&n&&nI(i,this.o,n),IQ(this.i,t),this.Ra&&lQ(i,"TYPE","init"),this.ja?(lQ(i,"$req",r),lQ(i,"SID","null"),t.$=!0,jE(t,i,null)):jE(t,i,r),this.G=2}}else 3==this.G&&(e?uI(this,e):0==this.l.length||CQ(this.i)||uI(this))},CT.Ga=function(){if(this.u=null,gI(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=SE(MT(this.bb,this),e)}},CT.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,xE(10),sI(this),gI(this))},CT.ab=function(){null!=this.v&&(this.v=null,sI(this),pI(this),xE(19))},CT.jb=function(e){e?(this.h.info("Successfully pinged google.com"),xE(2)):(this.h.info("Failed to ping google.com"),xE(1))},(CT=SI.prototype).xa=function(){},CT.wa=function(){},CT.va=function(){},CT.ua=function(){},CT.Oa=function(){},_I.prototype.g=function(e,t){return new TI(e,t)},jT(TI,UC),TI.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),tE(MT(e.hb,e,t))),xE(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=xI(e,null,e.W),cI(e)},TI.prototype.close=function(){oI(this.g)},TI.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,lI(this.g,t)}else this.v?((t={}).__data__=XC(e),lI(this.g,t)):lI(this.g,e)},TI.prototype.M=function(){this.g.j=null,delete this.j,oI(this.g),delete this.g,TI.Z.M.call(this)},jT(CI,PE),jT(EI,$E),jT(QI,SI),QI.prototype.xa=function(){BC(this.g,"a")},QI.prototype.wa=function(e){BC(this.g,new CI(e))},QI.prototype.va=function(e){BC(this.g,new EI(e))},QI.prototype.ua=function(){BC(this.g,"b")},_I.prototype.createWebChannel=_I.prototype.g,TI.prototype.send=TI.prototype.u,TI.prototype.open=TI.prototype.m,TI.prototype.close=TI.prototype.close,_E.NO_ERROR=0,_E.TIMEOUT=8,_E.HTTP_ERROR=6,TE.COMPLETE="complete",QE.EventType=AE,AE.OPEN="a",AE.CLOSE="b",AE.ERROR="c",AE.MESSAGE="d",UC.prototype.listen=UC.prototype.N,zQ.prototype.listenOnce=zQ.prototype.O,zQ.prototype.getLastError=zQ.prototype.La,zQ.prototype.getLastErrorCode=zQ.prototype.Da,zQ.prototype.getStatus=zQ.prototype.ba,zQ.prototype.getResponseJson=zQ.prototype.Qa,zQ.prototype.getResponseText=zQ.prototype.ga,zQ.prototype.send=zQ.prototype.ea;var II=_E,AI=TE,PI=gE,$I=10,RI=11,LI=NQ,DI=QE,NI=zQ;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class MI{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}MI.UNAUTHENTICATED=new MI(null),MI.GOOGLE_CREDENTIALS=new MI("google-credentials-uid"),MI.FIRST_PARTY=new MI("first-party-uid"),MI.MOCK_USER=new MI("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let WI="9.0.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=new $w("@firebase/firestore");function FI(){return jI.logLevel}function VI(e,...t){if(jI.logLevel<=Tw.DEBUG){const n=t.map(UI);jI.debug(`Firestore (${WI}): ${e}`,...n)}}function qI(e,...t){if(jI.logLevel<=Tw.ERROR){const n=t.map(UI);jI.error(`Firestore (${WI}): ${e}`,...n)}}function zI(e,...t){if(jI.logLevel<=Tw.WARN){const n=t.map(UI);jI.warn(`Firestore (${WI}): ${e}`,...n)}}function UI(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(n){return e}
/**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(e="Unexpected state"){const t=`FIRESTORE (${WI}) INTERNAL ASSERTION FAILED: `+e;throw qI(t),new Error(t)}function YI(e,t){e||BI()}function XI(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class HI extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,t){this.user=t,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class JI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(MI.UNAUTHENTICATED)))}shutdown(){}}class eA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class tA{constructor(e){this.t=e,this.currentUser=MI.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new ZI;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ZI,e.enqueueRetryable((()=>r(this.currentUser)))};const o=t=>{e.enqueueRetryable((async()=>{VI("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),await i.promise,await r(this.currentUser)}))};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(VI("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ZI)}}),0),e.enqueueRetryable((async()=>{0===this.i&&(await i.promise,await r(this.currentUser))}))}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(VI("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(YI("string"==typeof t.accessToken),new KI(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return YI(null===e||"string"==typeof e),new MI(e)}}class nA{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=MI.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},t=this.h.auth.getAuthHeaderValueForFirstParty([]);return t&&(e.Authorization=t),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class rA{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new nA(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(MI.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.g(e),this.p=e=>t.writeSequenceNumber(e))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */iA.T=-1;class sA{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=oA(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function aA(e,t){return e<t?-1:e>t?1:0}function lA(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function cA(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new HI(GI.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new HI(GI.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new HI(GI.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new HI(GI.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return uA.fromMillis(Date.now())}static fromDate(e){return uA.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new uA(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?aA(this.nanoseconds,e.nanoseconds):aA(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.timestamp=e}static fromTimestamp(e){return new hA(e)}static min(){return new hA(new uA(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function fA(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function pA(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,t,n){void 0===t?t=0:t>e.length&&BI(),void 0===n?n=e.length-t:n>e.length-t&&BI(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===mA.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof mA?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class gA extends mA{construct(e,t,n){return new gA(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new HI(GI.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new gA(t)}static emptyPath(){return new gA([])}}const vA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yA extends mA{construct(e,t,n){return new yA(e,t,n)}static isValidIdentifier(e){return vA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yA.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new yA(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new HI(GI.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new HI(GI.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new HI(GI.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(o=!o,r++):"."!==t||o?(n+=t,r++):(i(),r++)}if(i(),o)throw new HI(GI.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yA(t)}static emptyPath(){return new yA([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e){this.fields=e,e.sort(yA.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return lA(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bA{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new bA(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new bA(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return aA(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bA.EMPTY_BYTE_STRING=new bA("");const wA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xA(e){if(YI(!!e),"string"==typeof e){let t=0;const n=wA.exec(e);if(YI(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:kA(e.seconds),nanos:kA(e.nanos)}}function kA(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function SA(e){return"string"==typeof e?bA.fromBase64String(e):bA.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function TA(e){const t=e.mapValue.fields.__previous_value__;return _A(t)?TA(t):t}function CA(e){const t=xA(e.mapValue.fields.__local_write_time__.timestampValue);return new uA(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(e){return null==e}function QA(e){return 0===e&&1/e==-1/0}function IA(e){return"number"==typeof e&&Number.isInteger(e)&&!QA(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e){this.path=e}static fromPath(e){return new AA(gA.fromString(e))}static fromName(e){return new AA(gA.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===gA.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return gA.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new AA(new gA(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?_A(e)?4:10:BI()}function $A(e,t){const n=PA(e);if(n!==PA(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return CA(e).isEqual(CA(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=xA(e.timestampValue),r=xA(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,SA(e.bytesValue).isEqual(SA(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return kA(e.geoPointValue.latitude)===kA(t.geoPointValue.latitude)&&kA(e.geoPointValue.longitude)===kA(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return kA(e.integerValue)===kA(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=kA(e.doubleValue),r=kA(t.doubleValue);return n===r?QA(n)===QA(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return lA(e.arrayValue.values||[],t.arrayValue.values||[],$A);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(dA(n)!==dA(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!$A(n[i],r[i])))return!1;return!0}(e,t);default:return BI()}var r}function RA(e,t){return void 0!==(e.values||[]).find((e=>$A(e,t)))}function LA(e,t){const n=PA(e),r=PA(t);if(n!==r)return aA(n,r);switch(n){case 0:return 0;case 1:return aA(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=kA(e.integerValue||e.doubleValue),r=kA(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return DA(e.timestampValue,t.timestampValue);case 4:return DA(CA(e),CA(t));case 5:return aA(e.stringValue,t.stringValue);case 6:return function(e,t){const n=SA(e),r=SA(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=aA(n[i],r[i]);if(0!==e)return e}return aA(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=aA(kA(e.latitude),kA(t.latitude));return 0!==n?n:aA(kA(e.longitude),kA(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=LA(n[i],r[i]);if(e)return e}return aA(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let s=0;s<r.length&&s<o.length;++s){const e=aA(r[s],o[s]);if(0!==e)return e;const t=LA(n[r[s]],i[o[s]]);if(0!==t)return t}return aA(r.length,o.length)}(e.mapValue,t.mapValue);default:throw BI()}}function DA(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return aA(e,t);const n=xA(e),r=xA(t),i=aA(n.seconds,r.seconds);return 0!==i?i:aA(n.nanos,r.nanos)}function NA(e){return MA(e)}function MA(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=xA(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?SA(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,AA.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=MA(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${MA(e.fields[i])}`;return n+"}"}(e.mapValue):BI();var t,n}function WA(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function jA(e){return!!e&&"integerValue"in e}function FA(e){return!!e&&"arrayValue"in e}function VA(e){return!!e&&"nullValue"in e}function qA(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function zA(e){return!!e&&"mapValue"in e}function UA(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return fA(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=UA(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=UA(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e){this.value=e}static empty(){return new BA({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!zA(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=UA(t)}setAll(e){let t=yA.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=UA(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());zA(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return $A(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];zA(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){fA(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new BA(UA(this.value))}}function YA(e){const t=[];return fA(e.fields,((e,n)=>{const r=new yA([e]);if(zA(n)){const e=YA(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new OA(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class XA{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new XA(e,0,hA.min(),BA.empty(),0)}static newFoundDocument(e,t,n){return new XA(e,1,t,n,0)}static newNoDocument(e,t){return new XA(e,2,t,BA.empty(),0)}static newUnknownDocument(e,t){return new XA(e,3,t,BA.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=BA.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=BA.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof XA&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new XA(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e,t=null,n=[],r=[],i=null,o=null,s=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.A=null}}function HA(e,t=null,n=[],r=[],i=null,o=null,s=null){return new GA(e,t,n,r,i,o,s)}function ZA(e){const t=XI(e);if(null===t.A){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>function(e){return e.field.canonicalString()+e.op.toString()+NA(e.value)}(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),EA(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=uP(t.startAt)),t.endAt&&(e+="|ub:",e+=uP(t.endAt)),t.A=e}return t.A}function KA(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!dP(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!$A(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!pP(e.startAt,t.startAt)&&pP(e.endAt,t.endAt)}function JA(e){return AA.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class eP extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.R(e,t,n):new tP(e,t,n):"array-contains"===t?new oP(e,n):"in"===t?new sP(e,n):"not-in"===t?new aP(e,n):"array-contains-any"===t?new lP(e,n):new eP(e,t,n)}static R(e,t,n){return"in"===t?new nP(e,n):new rP(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.P(LA(t,this.value)):null!==t&&PA(this.value)===PA(t)&&this.P(LA(t,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return BI()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class tP extends eP{constructor(e,t,n){super(e,t,n),this.key=AA.fromName(n.referenceValue)}matches(e){const t=AA.comparator(e.key,this.key);return this.P(t)}}class nP extends eP{constructor(e,t){super(e,"in",t),this.keys=iP("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class rP extends eP{constructor(e,t){super(e,"not-in",t),this.keys=iP("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function iP(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>AA.fromName(e.referenceValue)))}class oP extends eP{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return FA(t)&&RA(t.arrayValue,this.value)}}class sP extends eP{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&RA(this.value.arrayValue,t)}}class aP extends eP{constructor(e,t){super(e,"not-in",t)}matches(e){if(RA(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!RA(this.value.arrayValue,t)}}class lP extends eP{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!FA(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>RA(this.value.arrayValue,e)))}}class cP{constructor(e,t){this.position=e,this.before=t}}function uP(e){return`${e.before?"b":"a"}:${e.position.map((e=>NA(e))).join(",")}`}class hP{constructor(e,t="asc"){this.field=e,this.dir=t}}function dP(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function fP(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const o=t[i],s=e.position[i];if(r=o.field.isKeyField()?AA.comparator(AA.fromName(s.referenceValue),n.key):LA(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return e.before?r<=0:r<0}function pP(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!$A(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e,t=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function gP(e,t,n,r,i,o,s,a){return new mP(e,t,n,r,i,o,s,a)}function vP(e){return new mP(e)}function yP(e){return!EA(e.limit)&&"F"===e.limitType}function OP(e){return!EA(e.limit)&&"L"===e.limitType}function bP(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function wP(e){for(const t of e.filters)if(t.v())return t.field;return null}function xP(e){return null!==e.collectionGroup}function kP(e){const t=XI(e);if(null===t.V){t.V=[];const e=wP(t),n=bP(t);if(null!==e&&null===n)e.isKeyField()||t.V.push(new hP(e)),t.V.push(new hP(yA.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.V.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.V.push(new hP(yA.keyField(),e))}}}return t.V}function SP(e){const t=XI(e);if(!t.S)if("F"===t.limitType)t.S=HA(t.path,t.collectionGroup,kP(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of kP(t)){const t="desc"===i.dir?"asc":"desc";e.push(new hP(i.field,t))}const n=t.endAt?new cP(t.endAt.position,!t.endAt.before):null,r=t.startAt?new cP(t.startAt.position,!t.startAt.before):null;t.S=HA(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.S}function _P(e,t,n){return new mP(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function TP(e,t){return KA(SP(e),SP(t))&&e.limitType===t.limitType}function CP(e){return`${ZA(SP(e))}|lt:${e.limitType}`}function EP(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${NA(t.value)}`;var t})).join(", ")}]`),EA(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: "+uP(e.startAt)),e.endAt&&(t+=", endAt: "+uP(e.endAt)),`Target(${t})`}(SP(e))}; limitType=${e.limitType})`}function QP(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):AA.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!fP(n.startAt,kP(n),r)||n.endAt&&fP(n.endAt,kP(n),r)));var n,r}function IP(e){return(t,n)=>{let r=!1;for(const i of kP(e)){const e=AP(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function AP(e,t,n){const r=e.field.isKeyField()?AA.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?LA(r,i):BI()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return BI()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PP(e,t){if(e.D){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:QA(t)?"-0":t}}function $P(e){return{integerValue:""+e}}function RP(e,t){return IA(t)?$P(t):PP(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(){this._=void 0}}function DP(e,t,n){return e instanceof WP?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof jP?FP(e,t):e instanceof VP?qP(e,t):function(e,t){const n=MP(e,t),r=UP(n)+UP(e.C);return jA(n)&&jA(e.C)?$P(r):PP(e.N,r)}(e,t)}function NP(e,t,n){return e instanceof jP?FP(e,t):e instanceof VP?qP(e,t):n}function MP(e,t){return e instanceof zP?jA(r=t)||(n=r)&&"doubleValue"in n?t:{integerValue:0}:null;var n,r}class WP extends LP{}class jP extends LP{constructor(e){super(),this.elements=e}}function FP(e,t){const n=BP(t);for(const r of e.elements)n.some((e=>$A(e,r)))||n.push(r);return{arrayValue:{values:n}}}class VP extends LP{constructor(e){super(),this.elements=e}}function qP(e,t){let n=BP(t);for(const r of e.elements)n=n.filter((e=>!$A(e,r)));return{arrayValue:{values:n}}}class zP extends LP{constructor(e,t){super(),this.N=e,this.C=t}}function UP(e){return kA(e.integerValue||e.doubleValue)}function BP(e){return FA(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e,t){this.field=e,this.transform=t}}class XP{constructor(e,t){this.version=e,this.transformResults=t}}class GP{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new GP}static exists(e){return new GP(void 0,e)}static updateTime(e){return new GP(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function HP(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ZP{}function KP(e,t,n){var r;e instanceof r$?function(e,t,n){const r=e.value.clone(),i=s$(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof i$?function(e,t,n){if(!HP(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=s$(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(o$(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function JP(e,t,n){var r;e instanceof r$?function(e,t,n){if(!HP(e.precondition,t))return;const r=e.value.clone(),i=a$(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(n$(t),r).setHasLocalMutations()}(e,t,n):e instanceof i$?function(e,t,n){if(!HP(e.precondition,t))return;const r=a$(e.fieldTransforms,n,t),i=t.data;i.setAll(o$(e)),i.setAll(r),t.convertToFoundDocument(n$(t),i).setHasLocalMutations()}(e,t,n):(r=t,HP(e.precondition,r)&&r.convertToNoDocument(hA.min()))}function e$(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=MP(r.transform,e||null);null!=i&&(null==n&&(n=BA.empty()),n.set(r.field,i))}return n||null}function t$(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&lA(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof jP&&r instanceof jP||n instanceof VP&&r instanceof VP?lA(n.elements,r.elements,$A):n instanceof zP&&r instanceof zP?$A(n.C,r.C):n instanceof WP&&r instanceof WP);var n,r}(e,t))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}function n$(e){return e.isFoundDocument()?e.version:hA.min()}class r$ extends ZP{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class i$ extends ZP{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function o$(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function s$(e,t,n){const r=new Map;YI(e.length===n.length);for(let i=0;i<n.length;i++){const o=e[i],s=o.transform,a=t.data.field(o.field);r.set(o.field,NP(s,a,n[i]))}return r}function a$(e,t,n){const r=new Map;for(const i of e){const e=i.transform,o=n.data.field(i.field);r.set(i.field,DP(e,o,t))}return r}class l$ extends ZP{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class c$ extends ZP{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u${constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var h$,d$;function f$(e){switch(e){case GI.OK:return BI();case GI.CANCELLED:case GI.UNKNOWN:case GI.DEADLINE_EXCEEDED:case GI.RESOURCE_EXHAUSTED:case GI.INTERNAL:case GI.UNAVAILABLE:case GI.UNAUTHENTICATED:return!1;case GI.INVALID_ARGUMENT:case GI.NOT_FOUND:case GI.ALREADY_EXISTS:case GI.PERMISSION_DENIED:case GI.FAILED_PRECONDITION:case GI.ABORTED:case GI.OUT_OF_RANGE:case GI.UNIMPLEMENTED:case GI.DATA_LOSS:return!0;default:return BI()}}function p$(e){if(void 0===e)return qI("GRPC error has no .code"),GI.UNKNOWN;switch(e){case h$.OK:return GI.OK;case h$.CANCELLED:return GI.CANCELLED;case h$.UNKNOWN:return GI.UNKNOWN;case h$.DEADLINE_EXCEEDED:return GI.DEADLINE_EXCEEDED;case h$.RESOURCE_EXHAUSTED:return GI.RESOURCE_EXHAUSTED;case h$.INTERNAL:return GI.INTERNAL;case h$.UNAVAILABLE:return GI.UNAVAILABLE;case h$.UNAUTHENTICATED:return GI.UNAUTHENTICATED;case h$.INVALID_ARGUMENT:return GI.INVALID_ARGUMENT;case h$.NOT_FOUND:return GI.NOT_FOUND;case h$.ALREADY_EXISTS:return GI.ALREADY_EXISTS;case h$.PERMISSION_DENIED:return GI.PERMISSION_DENIED;case h$.FAILED_PRECONDITION:return GI.FAILED_PRECONDITION;case h$.ABORTED:return GI.ABORTED;case h$.OUT_OF_RANGE:return GI.OUT_OF_RANGE;case h$.UNIMPLEMENTED:return GI.UNIMPLEMENTED;case h$.DATA_LOSS:return GI.DATA_LOSS;default:return BI()}}(d$=h$||(h$={}))[d$.OK=0]="OK",d$[d$.CANCELLED=1]="CANCELLED",d$[d$.UNKNOWN=2]="UNKNOWN",d$[d$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",d$[d$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",d$[d$.NOT_FOUND=5]="NOT_FOUND",d$[d$.ALREADY_EXISTS=6]="ALREADY_EXISTS",d$[d$.PERMISSION_DENIED=7]="PERMISSION_DENIED",d$[d$.UNAUTHENTICATED=16]="UNAUTHENTICATED",d$[d$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",d$[d$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",d$[d$.ABORTED=10]="ABORTED",d$[d$.OUT_OF_RANGE=11]="OUT_OF_RANGE",d$[d$.UNIMPLEMENTED=12]="UNIMPLEMENTED",d$[d$.INTERNAL=13]="INTERNAL",d$[d$.UNAVAILABLE=14]="UNAVAILABLE",d$[d$.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class m${constructor(e,t){this.comparator=e,this.root=t||v$.EMPTY}insert(e,t){return new m$(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,v$.BLACK,null,null))}remove(e){return new m$(this.comparator,this.root.remove(e,this.comparator).copy(null,null,v$.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new g$(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new g$(this.root,e,this.comparator,!1)}getReverseIterator(){return new g$(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new g$(this.root,e,this.comparator,!0)}}class g${constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class v${constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:v$.RED,this.left=null!=r?r:v$.EMPTY,this.right=null!=i?i:v$.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new v$(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return v$.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return v$.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,v$.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,v$.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw BI();if(this.right.isRed())throw BI();const e=this.left.check();if(e!==this.right.check())throw BI();return e+(this.isRed()?0:1)}}v$.EMPTY=null,v$.RED=!0,v$.BLACK=!1,v$.EMPTY=new class{constructor(){this.size=0}get key(){throw BI()}get value(){throw BI()}get color(){throw BI()}get left(){throw BI()}get right(){throw BI()}copy(e,t,n,r,i){return this}insert(e,t,n){return new v$(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class y${constructor(e){this.comparator=e,this.data=new m$(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new O$(this.data.getIterator())}getIteratorFrom(e){return new O$(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof y$))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new y$(this.comparator);return t.data=e,t}}class O${constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b$=new m$(AA.comparator);function w$(){return b$}const x$=new m$(AA.comparator);function k$(){return x$}const S$=new m$(AA.comparator);function _$(){return S$}const T$=new y$(AA.comparator);function C$(...e){let t=T$;for(const n of e)t=t.add(n);return t}const E$=new y$(aA);function Q$(){return E$}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I${constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,A$.createSynthesizedTargetChangeForCurrentChange(e,t)),new I$(hA.min(),n,Q$(),w$(),C$())}}class A${constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new A$(bA.EMPTY_BYTE_STRING,t,C$(),C$(),C$())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P${constructor(e,t,n,r){this.k=e,this.removedTargetIds=t,this.key=n,this.$=r}}class $${constructor(e,t){this.targetId=e,this.O=t}}class R${constructor(e,t,n=bA.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class L${constructor(){this.F=0,this.M=M$(),this.L=bA.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=C$(),t=C$(),n=C$();return this.M.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:BI()}})),new A$(this.L,this.B,e,t,n)}G(){this.U=!1,this.M=M$()}H(e,t){this.U=!0,this.M=this.M.insert(e,t)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class D${constructor(e){this.tt=e,this.et=new Map,this.nt=w$(),this.st=N$(),this.it=new y$(aA)}rt(e){for(const t of e.k)e.$&&e.$.isFoundDocument()?this.ot(t,e.$):this.at(t,e.key,e.$);for(const t of e.removedTargetIds)this.at(t,e.key,e.$)}ct(e){this.forEachTarget(e,(t=>{const n=this.ut(t);switch(e.state){case 0:this.ht(t)&&n.j(e.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(e.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(t);break;case 3:this.ht(t)&&(n.Z(),n.j(e.resumeToken));break;case 4:this.ht(t)&&(this.lt(t),n.j(e.resumeToken));break;default:BI()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.et.forEach(((e,n)=>{this.ht(n)&&t(n)}))}ft(e){const t=e.targetId,n=e.O.count,r=this.dt(t);if(r){const e=r.target;if(JA(e))if(0===n){const n=new AA(e.path);this.at(t,n,XA.newNoDocument(n,hA.min()))}else YI(1===n);else this.wt(t)!==n&&(this.lt(t),this.it=this.it.add(t))}}_t(e){const t=new Map;this.et.forEach(((n,r)=>{const i=this.dt(r);if(i){if(n.current&&JA(i.target)){const t=new AA(i.target.path);null!==this.nt.get(t)||this.gt(r,t)||this.at(r,t,XA.newNoDocument(t,e))}n.K&&(t.set(r,n.W()),n.G())}}));let n=C$();this.st.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.dt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))}));const r=new I$(e,t,this.it,this.nt,n);return this.nt=w$(),this.st=N$(),this.it=new y$(aA),r}ot(e,t){if(!this.ht(e))return;const n=this.gt(e,t.key)?2:0;this.ut(e).H(t.key,n),this.nt=this.nt.insert(t.key,t),this.st=this.st.insert(t.key,this.yt(t.key).add(e))}at(e,t,n){if(!this.ht(e))return;const r=this.ut(e);this.gt(e,t)?r.H(t,1):r.J(t),this.st=this.st.insert(t,this.yt(t).delete(e)),n&&(this.nt=this.nt.insert(t,n))}removeTarget(e){this.et.delete(e)}wt(e){const t=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let t=this.et.get(e);return t||(t=new L$,this.et.set(e,t)),t}yt(e){let t=this.st.get(e);return t||(t=new y$(aA),this.st=this.st.insert(e,t)),t}ht(e){const t=null!==this.dt(e);return t||VI("WatchChangeAggregator","Detected inactive target",e),t}dt(e){const t=this.et.get(e);return t&&t.q?null:this.tt.Et(e)}lt(e){this.et.set(e,new L$),this.tt.getRemoteKeysForTarget(e).forEach((t=>{this.at(e,t,null)}))}gt(e,t){return this.tt.getRemoteKeysForTarget(e).has(t)}}function N$(){return new m$(AA.comparator)}function M$(){return new m$(AA.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W$={asc:"ASCENDING",desc:"DESCENDING"},j$={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class F${constructor(e,t){this.databaseId=e,this.D=t}}function V$(e,t){return e.D?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function q$(e,t){return e.D?t.toBase64():t.toUint8Array()}function z$(e,t){return V$(e,t.toTimestamp())}function U$(e){return YI(!!e),hA.fromTimestamp(function(e){const t=xA(e);return new uA(t.seconds,t.nanos)}(e))}function B$(e,t){return(n=e,new gA(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function Y$(e){const t=gA.fromString(e);return YI(vR(t)),t}function X$(e,t){return B$(e.databaseId,t.path)}function G$(e,t){const n=Y$(t);if(n.get(1)!==e.databaseId.projectId)throw new HI(GI.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new HI(GI.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new AA(J$(n))}function H$(e,t){return B$(e.databaseId,t)}function Z$(e){const t=Y$(e);return 4===t.length?gA.emptyPath():J$(t)}function K$(e){return new gA(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function J$(e){return YI(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function eR(e,t,n){return{name:X$(e,t),fields:n.value.mapValue.fields}}function tR(e,t,n){const r=G$(e,t.name),i=U$(t.updateTime),o=new BA({mapValue:{fields:t.fields}}),s=XA.newFoundDocument(r,i,o);return n&&s.setHasCommittedMutations(),n?s.setHasCommittedMutations():s}function nR(e,t){let n;if(t instanceof r$)n={update:eR(e,t.key,t.value)};else if(t instanceof l$)n={delete:X$(e,t.key)};else if(t instanceof i$)n={update:eR(e,t.key,t.data),updateMask:gR(t.fieldMask)};else{if(!(t instanceof c$))return BI();n={verify:X$(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof WP)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof jP)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof VP)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof zP)return{fieldPath:t.field.canonicalString(),increment:n.C};throw BI()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:z$(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:BI())),n;var r,i}function rR(e,t){const n=t.currentDocument?void 0!==(i=t.currentDocument).updateTime?GP.updateTime(U$(i.updateTime)):void 0!==i.exists?GP.exists(i.exists):GP.none():GP.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)YI("REQUEST_TIME"===t.setToServerValue),n=new WP;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new jP(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new VP(e)}else"increment"in t?n=new zP(e,t.increment):BI();const r=yA.fromServerFormat(t.fieldPath);return new YP(r,n)}(e,t))):[];var i;if(t.update){t.update.name;const i=G$(e,t.update.name),o=new BA({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new OA(t.map((e=>yA.fromServerFormat(e))))}(t.updateMask);return new i$(i,o,e,n,r)}return new r$(i,o,n,r)}if(t.delete){const r=G$(e,t.delete);return new l$(r,n)}if(t.verify){const r=G$(e,t.verify);return new c$(r,n)}return BI()}function iR(e,t){return{documents:[H$(e,t.path)]}}function oR(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=H$(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=H$(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(qA(e.value))return{unaryFilter:{field:dR(e.field),op:"IS_NAN"}};if(VA(e.value))return{unaryFilter:{field:dR(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(qA(e.value))return{unaryFilter:{field:dR(e.field),op:"IS_NOT_NAN"}};if(VA(e.value))return{unaryFilter:{field:dR(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dR(e.field),op:hR(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const o=function(e){if(0!==e.length)return e.map((e=>{return{field:dR((t=e).field),direction:uR(t.dir)};var t}))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const s=(a=e,l=t.limit,a.D||EA(l)?l:{value:l});var a,l;return null!==s&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt=lR(t.startAt)),t.endAt&&(n.structuredQuery.endAt=lR(t.endAt)),n}function sR(e){let t=Z$(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){YI(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let o=[];n.where&&(o=aR(n.where));let s=[];n.orderBy&&(s=n.orderBy.map((e=>{return new hP(fR((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,EA(t)?null:t}(n.limit));let l=null;n.startAt&&(l=cR(n.startAt));let c=null;return n.endAt&&(c=cR(n.endAt)),gP(t,i,s,o,a,"F",l,c)}function aR(e){return e?void 0!==e.unaryFilter?[mR(e)]:void 0!==e.fieldFilter?[pR(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>aR(e))).reduce(((e,t)=>e.concat(t))):BI():[]}function lR(e){return{before:e.before,values:e.position}}function cR(e){const t=!!e.before,n=e.values||[];return new cP(n,t)}function uR(e){return W$[e]}function hR(e){return j$[e]}function dR(e){return{fieldPath:e.canonicalString()}}function fR(e){return yA.fromServerFormat(e.fieldPath)}function pR(e){return eP.create(fR(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return BI()}}(e.fieldFilter.op),e.fieldFilter.value)}function mR(e){switch(e.unaryFilter.op){case"IS_NAN":const t=fR(e.unaryFilter.field);return eP.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=fR(e.unaryFilter.field);return eP.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=fR(e.unaryFilter.field);return eP.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=fR(e.unaryFilter.field);return eP.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return BI()}}function gR(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function vR(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=bR(t)),t=OR(e.get(n),t);return bR(t)}function OR(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function bR(e){return e+""}function wR(e){const t=e.length;if(YI(t>=2),2===t)return YI(""===e.charAt(0)&&""===e.charAt(1)),gA.emptyPath();const n=t-2,r=[];let i="";for(let o=0;o<t;){const t=e.indexOf("",o);switch((t<0||t>n)&&BI(),e.charAt(t+1)){case"":const n=e.substring(o,t);let s;0===i.length?s=n:(i+=n,s=i,i=""),r.push(s);break;case"":i+=e.substring(o,t),i+="\0";break;case"":i+=e.substring(o,t+1);break;default:BI()}o=t+2}return new gA(r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e,t){this.seconds=e,this.nanoseconds=t}}class kR{constructor(e,t,n){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=n}}kR.store="owner",kR.key="owner";class SR{constructor(e,t,n){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=n}}SR.store="mutationQueues",SR.keyPath="userId";class _R{constructor(e,t,n,r,i){this.userId=e,this.batchId=t,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}_R.store="mutations",_R.keyPath="batchId",_R.userMutationsIndex="userMutationsIndex",_R.userMutationsKeyPath=["userId","batchId"];class TR{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,yR(t)]}static key(e,t,n){return[e,yR(t),n]}}TR.store="documentMutations",TR.PLACEHOLDER=new TR;class CR{constructor(e,t){this.path=e,this.readTime=t}}class ER{constructor(e,t){this.path=e,this.version=t}}class QR{constructor(e,t,n,r,i,o){this.unknownDocument=e,this.noDocument=t,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=o}}QR.store="remoteDocuments",QR.readTimeIndex="readTimeIndex",QR.readTimeIndexPath="readTime",QR.collectionReadTimeIndex="collectionReadTimeIndex",QR.collectionReadTimeIndexPath=["parentPath","readTime"];class IR{constructor(e){this.byteSize=e}}IR.store="remoteDocumentGlobal",IR.key="remoteDocumentGlobalKey";class AR{constructor(e,t,n,r,i,o,s){this.targetId=e,this.canonicalId=t,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=o,this.query=s}}AR.store="targets",AR.keyPath="targetId",AR.queryTargetsIndexName="queryTargetsIndex",AR.queryTargetsKeyPath=["canonicalId","targetId"];class PR{constructor(e,t,n){this.targetId=e,this.path=t,this.sequenceNumber=n}}PR.store="targetDocuments",PR.keyPath=["targetId","path"],PR.documentTargetsIndex="documentTargetsIndex",PR.documentTargetsKeyPath=["path","targetId"];class $R{constructor(e,t,n,r){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}$R.key="targetGlobalKey",$R.store="targetGlobal";class RR{constructor(e,t){this.collectionId=e,this.parent=t}}RR.store="collectionParents",RR.keyPath=["collectionId","parent"];class LR{constructor(e,t,n,r){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=n,this.inForeground=r}}LR.store="clientMetadata",LR.keyPath="clientId";class DR{constructor(e,t,n){this.bundleId=e,this.createTime=t,this.version=n}}DR.store="bundles",DR.keyPath="bundleId";class NR{constructor(e,t,n){this.name=e,this.readTime=t,this.bundledQuery=n}}NR.store="namedQueries",NR.keyPath="name";const MR=[SR.store,_R.store,TR.store,QR.store,AR.store,kR.store,$R.store,PR.store,LR.store,IR.store,RR.store,DR.store,NR.store],WR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&BI(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new FR(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof FR?t:FR.resolve(t)}catch(t){return FR.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):FR.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):FR.reject(t)}static resolve(e){return new FR(((t,n)=>{t(e)}))}static reject(e){return new FR(((t,n)=>{n(e)}))}static waitFor(e){return new FR(((t,n)=>{let r=0,i=0,o=!1;e.forEach((e=>{++r,e.next((()=>{++i,o&&i===r&&t()}),(e=>n(e)))})),o=!0,i===r&&t()}))}static or(e){let t=FR.resolve(!1);for(const n of e)t=t.next((e=>e?FR.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.Tt=new ZI,this.transaction.oncomplete=()=>{this.Tt.resolve()},this.transaction.onabort=()=>{t.error?this.Tt.reject(new UR(e,t.error)):this.Tt.resolve()},this.transaction.onerror=t=>{const n=HR(t.target.error);this.Tt.reject(new UR(e,n))}}static open(e,t,n,r){try{return new VR(t,e.transaction(r,n))}catch(i){throw new UR(t,i)}}get It(){return this.Tt.promise}abort(e){e&&this.Tt.reject(e),this.aborted||(VI("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const t=this.transaction.objectStore(e);return new YR(t)}}class qR{constructor(e,t,n){this.name=e,this.version=t,this.At=n,12.2===qR.Rt(ew())&&qI("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return VI("SimpleDb","Removing database:",e),XR(window.indexedDB.deleteDatabase(e)).toPromise()}static Pt(){if("undefined"==typeof indexedDB)return!1;if(qR.bt())return!0;const e=ew(),t=qR.Rt(e),n=0<t&&t<10,r=qR.vt(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static bt(){var e;return"undefined"!=typeof process&&"YES"===(null===(e=process.env)||void 0===e?void 0:e.Vt)}static St(e,t){return e.store(t)}static Rt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static vt(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Dt(e){return this.db||(VI("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new UR(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new HI(GI.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):n(new UR(e,r))},r.onupgradeneeded=e=>{VI("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.At.Ct(t,r.transaction,e.oldVersion,this.version).next((()=>{VI("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.Nt&&(this.db.onversionchange=e=>this.Nt(e)),this.db}xt(e){this.Nt=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let o=0;for(;;){++o;try{this.db=await this.Dt(e);const t=VR.open(this.db,e,i?"readonly":"readwrite",n),o=r(t).catch((e=>(t.abort(e),FR.reject(e)))).toPromise();return o.catch((()=>{})),await t.It,o}catch(s){const e="FirebaseError"!==s.name&&o<3;if(VI("SimpleDb","Transaction failed with error:",s.message,"Retrying:",e),this.close(),!e)return Promise.reject(s)}}}close(){this.db&&this.db.close(),this.db=void 0}}class zR{constructor(e){this.kt=e,this.$t=!1,this.Ot=null}get isDone(){return this.$t}get Ft(){return this.Ot}set cursor(e){this.kt=e}done(){this.$t=!0}Mt(e){this.Ot=e}delete(){return XR(this.kt.delete())}}class UR extends HI{constructor(e,t){super(GI.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function BR(e){return"IndexedDbTransactionError"===e.name}class YR{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(VI("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(VI("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),XR(n)}add(e){return VI("SimpleDb","ADD",this.store.name,e,e),XR(this.store.add(e))}get(e){return XR(this.store.get(e)).next((t=>(void 0===t&&(t=null),VI("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return VI("SimpleDb","DELETE",this.store.name,e),XR(this.store.delete(e))}count(){return VI("SimpleDb","COUNT",this.store.name),XR(this.store.count())}Lt(e,t){const n=this.cursor(this.options(e,t)),r=[];return this.Bt(n,((e,t)=>{r.push(t)})).next((()=>r))}Ut(e,t){VI("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.qt=!1;const r=this.cursor(n);return this.Bt(r,((e,t,n)=>n.delete()))}Kt(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.Bt(r,t)}jt(e){const t=this.cursor({});return new FR(((n,r)=>{t.onerror=e=>{const t=HR(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}Bt(e,t){const n=[];return new FR(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const o=new zR(i),s=t(i.primaryKey,i.value,o);if(s instanceof FR){const e=s.catch((e=>(o.done(),FR.reject(e))));n.push(e)}o.isDone?r():null===o.Ft?i.continue():i.continue(o.Ft)}})).next((()=>FR.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.qt?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function XR(e){return new FR(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=HR(e.target.error);n(t)}}))}let GR=!1;function HR(e){const t=qR.Rt(ew());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new HI("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return GR||(GR=!0,setTimeout((()=>{throw e}),0)),e}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR extends jR{constructor(e,t){super(),this.Qt=e,this.currentSequenceNumber=t}}function KR(e,t){const n=XI(e);return qR.St(n.Qt,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&KP(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&JP(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&JP(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(hA.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),C$())}isEqual(e){return this.batchId===e.batchId&&lA(this.mutations,e.mutations,((e,t)=>t$(e,t)))&&lA(this.baseMutations,e.baseMutations,((e,t)=>t$(e,t)))}}class eL{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){YI(e.mutations.length===n.length);let r=_$();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new eL(e,t,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{constructor(e,t,n,r,i=hA.min(),o=hA.min(),s=bA.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s}withSequenceNumber(e){return new tL(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new tL(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new tL(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(e){this.Wt=e}}function rL(e,t){if(t.document)return tR(e.Wt,t.document,!!t.hasCommittedMutations);if(t.noDocument){const e=AA.fromSegments(t.noDocument.path),n=lL(t.noDocument.readTime),r=XA.newNoDocument(e,n);return t.hasCommittedMutations?r.setHasCommittedMutations():r}if(t.unknownDocument){const e=AA.fromSegments(t.unknownDocument.path),n=lL(t.unknownDocument.version);return XA.newUnknownDocument(e,n)}return BI()}function iL(e,t,n){const r=oL(n),i=t.key.path.popLast().toArray();if(t.isFoundDocument()){const n={name:X$(o=e.Wt,(s=t).key),fields:s.data.value.mapValue.fields,updateTime:V$(o,s.version.toTimestamp())},a=t.hasCommittedMutations;return new QR(null,null,n,a,r,i)}var o,s;if(t.isNoDocument()){const e=t.key.path.toArray(),n=aL(t.version),o=t.hasCommittedMutations;return new QR(null,new CR(e,n),null,o,r,i)}if(t.isUnknownDocument()){const e=t.key.path.toArray(),n=aL(t.version);return new QR(new ER(e,n),null,null,!0,r,i)}return BI()}function oL(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function sL(e){const t=new uA(e[0],e[1]);return hA.fromTimestamp(t)}function aL(e){const t=e.toTimestamp();return new xR(t.seconds,t.nanoseconds)}function lL(e){const t=new uA(e.seconds,e.nanoseconds);return hA.fromTimestamp(t)}function cL(e,t){const n=(t.baseMutations||[]).map((t=>rR(e.Wt,t)));for(let o=0;o<t.mutations.length-1;++o){const e=t.mutations[o];if(o+1<t.mutations.length&&void 0!==t.mutations[o+1].transform){const n=t.mutations[o+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(o+1,1),++o}}const r=t.mutations.map((t=>rR(e.Wt,t))),i=uA.fromMillis(t.localWriteTimeMs);return new JR(t.batchId,i,n,r)}function uL(e){const t=lL(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?lL(e.lastLimboFreeSnapshotVersion):hA.min();let r;var i;return void 0!==e.query.documents?(YI(1===(i=e.query).documents.length),r=SP(vP(Z$(i.documents[0])))):r=SP(sR(e.query)),new tL(r,e.targetId,0,e.lastListenSequenceNumber,t,n,bA.fromBase64String(e.resumeToken))}function hL(e,t){const n=aL(t.snapshotVersion),r=aL(t.lastLimboFreeSnapshotVersion);let i;i=JA(t.target)?iR(e.Wt,t.target):oR(e.Wt,t.target);const o=t.resumeToken.toBase64();return new AR(t.targetId,ZA(t.target),n,o,t.sequenceNumber,r,i)}function dL(e){const t=sR({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?_P(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{getBundleMetadata(e,t){return pL(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:lL(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return pL(e).put({bundleId:(n=t).id,createTime:aL(U$(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return mL(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:dL(t.bundledQuery),readTime:lL(t.readTime)};var t}))}saveNamedQuery(e,t){return mL(e).put({name:(n=t).name,readTime:aL(U$(n.readTime)),bundledQuery:n.bundledQuery});var n}}function pL(e){return KR(e,DR.store)}function mL(e){return KR(e,NR.store)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(){this.Gt=new vL}addToCollectionParentIndex(e,t){return this.Gt.add(t),FR.resolve()}getCollectionParents(e,t){return FR.resolve(this.Gt.getEntries(t))}}class vL{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new y$(gA.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new y$(gA.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{constructor(){this.zt=new vL}addToCollectionParentIndex(e,t){if(!this.zt.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.zt.add(t)}));const i={collectionId:n,parent:yR(r)};return OL(e).put(i)}return FR.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[cA(t),""],!1,!0);return OL(e).Lt(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(wR(r.parent))}return n}))}}function OL(e){return KR(e,RR.store)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bL={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class wL{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new wL(e,wL.DEFAULT_COLLECTION_PERCENTILE,wL.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xL(e,t,n){const r=e.store(_R.store),i=e.store(TR.store),o=[],s=IDBKeyRange.only(n.batchId);let a=0;const l=r.Kt({range:s},((e,t,n)=>(a++,n.delete())));o.push(l.next((()=>{YI(1===a)})));const c=[];for(const u of n.mutations){const e=TR.key(t,u.key.path,n.batchId);o.push(i.delete(e)),c.push(u.key)}return FR.waitFor(o).next((()=>c))}function kL(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw BI();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wL.DEFAULT_COLLECTION_PERCENTILE=10,wL.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wL.DEFAULT=new wL(41943040,wL.DEFAULT_COLLECTION_PERCENTILE,wL.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wL.DISABLED=new wL(-1,0,0);class SL{constructor(e,t,n,r){this.userId=e,this.N=t,this.Ht=n,this.referenceDelegate=r,this.Jt={}}static Yt(e,t,n,r){YI(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new SL(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return TL(e).Kt({index:_R.userMutationsIndex,range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=CL(e),o=TL(e);return o.add({}).next((s=>{YI("number"==typeof s);const a=new JR(s,t,n,r),l=function(e,t,n){const r=n.baseMutations.map((t=>nR(e.Wt,t))),i=n.mutations.map((t=>nR(e.Wt,t)));return new _R(t,n.batchId,n.localWriteTime.toMillis(),r,i)}(this.N,this.userId,a),c=[];let u=new y$(((e,t)=>aA(e.canonicalString(),t.canonicalString())));for(const e of r){const t=TR.key(this.userId,e.key.path,s);u=u.add(e.key.path.popLast()),c.push(o.put(l)),c.push(i.put(t,TR.PLACEHOLDER))}return u.forEach((t=>{c.push(this.Ht.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.Jt[s]=a.keys()})),FR.waitFor(c).next((()=>a))}))}lookupMutationBatch(e,t){return TL(e).get(t).next((e=>e?(YI(e.userId===this.userId),cL(this.N,e)):null))}Xt(e,t){return this.Jt[t]?FR.resolve(this.Jt[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.Jt[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return TL(e).Kt({index:_R.userMutationsIndex,range:r},((e,t,r)=>{t.userId===this.userId&&(YI(t.batchId>=n),i=cL(this.N,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return TL(e).Kt({index:_R.userMutationsIndex,range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return TL(e).Lt(_R.userMutationsIndex,t).next((e=>e.map((e=>cL(this.N,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=TR.prefixForPath(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return CL(e).Kt({range:r},((n,r,o)=>{const[s,a,l]=n,c=wR(a);if(s===this.userId&&t.path.isEqual(c))return TL(e).get(l).next((e=>{if(!e)throw BI();YI(e.userId===this.userId),i.push(cL(this.N,e))}));o.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new y$(aA);const r=[];return t.forEach((t=>{const i=TR.prefixForPath(this.userId,t.path),o=IDBKeyRange.lowerBound(i),s=CL(e).Kt({range:o},((e,r,i)=>{const[o,s,a]=e,l=wR(s);o===this.userId&&t.path.isEqual(l)?n=n.add(a):i.done()}));r.push(s)})),FR.waitFor(r).next((()=>this.Zt(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=TR.prefixForPath(this.userId,n),o=IDBKeyRange.lowerBound(i);let s=new y$(aA);return CL(e).Kt({range:o},((e,t,i)=>{const[o,a,l]=e,c=wR(a);o===this.userId&&n.isPrefixOf(c)?c.length===r&&(s=s.add(l)):i.done()})).next((()=>this.Zt(e,s)))}Zt(e,t){const n=[],r=[];return t.forEach((t=>{r.push(TL(e).get(t).next((e=>{if(null===e)throw BI();YI(e.userId===this.userId),n.push(cL(this.N,e))})))})),FR.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return xL(e.Qt,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.te(t.batchId)})),FR.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}te(e){delete this.Jt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return FR.resolve();const n=IDBKeyRange.lowerBound(TR.prefixForUser(this.userId)),r=[];return CL(e).Kt({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=wR(e[1]);r.push(t)}else n.done()})).next((()=>{YI(0===r.length)}))}))}containsKey(e,t){return _L(e,this.userId,t)}ee(e){return EL(e).get(this.userId).next((e=>e||new SR(this.userId,-1,"")))}}function _L(e,t,n){const r=TR.prefixForPath(t,n.path),i=r[1],o=IDBKeyRange.lowerBound(r);let s=!1;return CL(e).Kt({range:o,qt:!0},((e,n,r)=>{const[o,a,l]=e;o===t&&a===i&&(s=!0),r.done()})).next((()=>s))}function TL(e){return KR(e,_R.store)}function CL(e){return KR(e,TR.store)}function EL(e){return KR(e,SR.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new QL(0)}static ie(){return new QL(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IL{constructor(e,t){this.referenceDelegate=e,this.N=t}allocateTargetId(e){return this.re(e).next((t=>{const n=new QL(t.highestTargetId);return t.highestTargetId=n.next(),this.oe(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.re(e).next((e=>hA.fromTimestamp(new uA(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.re(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.re(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.oe(e,r))))}addTargetData(e,t){return this.ae(e,t).next((()=>this.re(e).next((n=>(n.targetCount+=1,this.ce(t,n),this.oe(e,n))))))}updateTargetData(e,t){return this.ae(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>AL(e).delete(t.targetId))).next((()=>this.re(e))).next((t=>(YI(t.targetCount>0),t.targetCount-=1,this.oe(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return AL(e).Kt(((o,s)=>{const a=uL(s);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>FR.waitFor(i))).next((()=>r))}forEachTarget(e,t){return AL(e).Kt(((e,n)=>{const r=uL(n);t(r)}))}re(e){return PL(e).get($R.key).next((e=>(YI(null!==e),e)))}oe(e,t){return PL(e).put($R.key,t)}ae(e,t){return AL(e).put(hL(this.N,t))}ce(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.re(e).next((e=>e.targetCount))}getTargetData(e,t){const n=ZA(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return AL(e).Kt({range:r,index:AR.queryTargetsIndexName},((e,n,r)=>{const o=uL(n);KA(t,o.target)&&(i=o,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=$L(e);return t.forEach((t=>{const o=yR(t.path);r.push(i.put(new PR(n,o))),r.push(this.referenceDelegate.addReference(e,n,t))})),FR.waitFor(r)}removeMatchingKeys(e,t,n){const r=$L(e);return FR.forEach(t,(t=>{const i=yR(t.path);return FR.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=$L(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=$L(e);let i=C$();return r.Kt({range:n,qt:!0},((e,t,n)=>{const r=wR(e[1]),o=new AA(r);i=i.add(o)})).next((()=>i))}containsKey(e,t){const n=yR(t.path),r=IDBKeyRange.bound([n],[cA(n)],!1,!0);let i=0;return $L(e).Kt({index:PR.documentTargetsIndex,qt:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}Et(e,t){return AL(e).get(t).next((e=>e?uL(e):null))}}function AL(e){return KR(e,AR.store)}function PL(e){return KR(e,$R.store)}function $L(e){return KR(e,PR.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RL(e){if(e.code!==GI.FAILED_PRECONDITION||e.message!==WR)throw e;VI("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LL([e,t],[n,r]){const i=aA(e,n);return 0===i?aA(t,r):i}class DL{constructor(e){this.ue=e,this.buffer=new y$(LL),this.he=0}le(){return++this.he}fe(e){const t=[e,this.le()];if(this.buffer.size<this.ue)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();LL(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class NL{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.de=!1,this.we=null}start(e){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this._e(e)}stop(){this.we&&(this.we.cancel(),this.we=null)}get started(){return null!==this.we}_e(e){const t=this.de?3e5:6e4;VI("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.we=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.we=null,this.de=!0;try{await e.collectGarbage(this.garbageCollector)}catch(t){BR(t)?VI("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await RL(t)}await this._e(e)}))}}class ML{constructor(e,t){this.me=e,this.params=t}calculateTargetCount(e,t){return this.me.ge(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return FR.resolve(iA.T);const n=new DL(t);return this.me.forEachTarget(e,(e=>n.fe(e.sequenceNumber))).next((()=>this.me.ye(e,(e=>n.fe(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.me.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.me.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(VI("LruGarbageCollector","Garbage collection skipped; disabled"),FR.resolve(bL)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(VI("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bL):this.pe(e,t)))}getCacheSize(e){return this.me.getCacheSize(e)}pe(e,t){let n,r,i,o,s,a,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(VI("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,o=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,s=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,a=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(l=Date.now(),FI()<=Tw.DEBUG&&VI("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-c}ms\n\tDetermined least recently used ${r} in `+(s-o)+`ms\n\tRemoved ${i} targets in `+(a-s)+`ms\n\tRemoved ${e} documents in `+(l-a)+`ms\nTotal Duration: ${l-c}ms`),FR.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(e,t){this.db=e,this.garbageCollector=new ML(this,t)}ge(e){const t=this.Ee(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Ee(e){let t=0;return this.ye(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}ye(e,t){return this.Te(e,((e,n)=>t(n)))}addReference(e,t,n){return jL(e,n)}removeReference(e,t,n){return jL(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return jL(e,t)}Ie(e,t){return function(e,t){let n=!1;return EL(e).jt((r=>_L(e,r,t).next((e=>(e&&(n=!0),FR.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Te(e,((o,s)=>{if(s<=t){const t=this.Ie(e,o).next((t=>{if(!t)return i++,n.getEntry(e,o).next((()=>(n.removeEntry(o),$L(e).delete([0,yR(o.path)]))))}));r.push(t)}})).next((()=>FR.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return jL(e,t)}Te(e,t){const n=$L(e);let r,i=iA.T;return n.Kt({index:PR.documentTargetsIndex},(([e,n],{path:o,sequenceNumber:s})=>{0===e?(i!==iA.T&&t(new AA(wR(r)),i),i=s,r=o):i=iA.T})).next((()=>{i!==iA.T&&t(new AA(wR(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function jL(e,t){return $L(e).put((n=t,r=e.currentSequenceNumber,new PR(0,yR(n.path),r)));var n,r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){fA(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return pA(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(){this.changes=new FL((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:hA.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:XA.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?FR.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qL{constructor(e,t){this.N=e,this.Ht=t}addEntry(e,t,n){return BL(e).put(YL(t),n)}removeEntry(e,t){const n=BL(e),r=YL(t);return n.delete(r)}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Ae(e,n))))}getEntry(e,t){return BL(e).get(YL(t)).next((e=>this.Re(t,e)))}Pe(e,t){return BL(e).get(YL(t)).next((e=>({document:this.Re(t,e),size:kL(e)})))}getEntries(e,t){let n=w$();return this.be(e,t,((e,t)=>{const r=this.Re(e,t);n=n.insert(e,r)})).next((()=>n))}ve(e,t){let n=w$(),r=new m$(AA.comparator);return this.be(e,t,((e,t)=>{const i=this.Re(e,t);n=n.insert(e,i),r=r.insert(e,kL(t))})).next((()=>({documents:n,Ve:r})))}be(e,t,n){if(t.isEmpty())return FR.resolve();const r=IDBKeyRange.bound(t.first().path.toArray(),t.last().path.toArray()),i=t.getIterator();let o=i.getNext();return BL(e).Kt({range:r},((e,t,r)=>{const s=AA.fromSegments(e);for(;o&&AA.comparator(o,s)<0;)n(o,null),o=i.getNext();o&&o.isEqual(s)&&(n(o,t),o=i.hasNext()?i.getNext():null),o?r.Mt(o.path.toArray()):r.done()})).next((()=>{for(;o;)n(o,null),o=i.hasNext()?i.getNext():null}))}getDocumentsMatchingQuery(e,t,n){let r=w$();const i=t.path.length+1,o={};if(n.isEqual(hA.min())){const e=t.path.toArray();o.range=IDBKeyRange.lowerBound(e)}else{const e=t.path.toArray(),r=oL(n);o.range=IDBKeyRange.lowerBound([e,r],!0),o.index=QR.collectionReadTimeIndex}return BL(e).Kt(o,((e,n,o)=>{if(e.length!==i)return;const s=rL(this.N,n);t.path.isPrefixOf(s.key.path)?QP(t,s)&&(r=r.insert(s.key,s)):o.done()})).next((()=>r))}newChangeBuffer(e){return new zL(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return UL(e).get(IR.key).next((e=>(YI(!!e),e)))}Ae(e,t){return UL(e).put(IR.key,t)}Re(e,t){if(t){const e=rL(this.N,t);if(!e.isNoDocument()||!e.version.isEqual(hA.min()))return e}return XA.newInvalidDocument(e)}}class zL extends VL{constructor(e,t){super(),this.Se=e,this.trackRemovals=t,this.De=new FL((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new y$(((e,t)=>aA(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,o)=>{const s=this.De.get(i);if(o.document.isValidDocument()){const a=iL(this.Se.N,o.document,this.getReadTime(i));r=r.add(i.path.popLast());const l=kL(a);n+=l-s,t.push(this.Se.addEntry(e,i,a))}else if(n-=s,this.trackRemovals){const n=iL(this.Se.N,XA.newNoDocument(i,hA.min()),this.getReadTime(i));t.push(this.Se.addEntry(e,i,n))}else t.push(this.Se.removeEntry(e,i))})),r.forEach((n=>{t.push(this.Se.Ht.addToCollectionParentIndex(e,n))})),t.push(this.Se.updateMetadata(e,n)),FR.waitFor(t)}getFromCache(e,t){return this.Se.Pe(e,t).next((e=>(this.De.set(t,e.size),e.document)))}getAllFromCache(e,t){return this.Se.ve(e,t).next((({documents:e,Ve:t})=>(t.forEach(((e,t)=>{this.De.set(e,t)})),e)))}}function UL(e){return KR(e,IR.store)}function BL(e){return KR(e,QR.store)}function YL(e){return e.path.toArray()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{constructor(e){this.N=e}Ct(e,t,n,r){YI(n<r&&n>=0&&r<=11);const i=new VR("createOrUpgrade",t);n<1&&r>=1&&(e.createObjectStore(kR.store),function(e){e.createObjectStore(SR.store,{keyPath:SR.keyPath}),e.createObjectStore(_R.store,{keyPath:_R.keyPath,autoIncrement:!0}).createIndex(_R.userMutationsIndex,_R.userMutationsKeyPath,{unique:!0}),e.createObjectStore(TR.store)}(e),GL(e),function(e){e.createObjectStore(QR.store)}(e));let o=FR.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore(PR.store),e.deleteObjectStore(AR.store),e.deleteObjectStore($R.store)}(e),GL(e)),o=o.next((()=>function(e){const t=e.store($R.store),n=new $R(0,0,hA.min().toTimestamp(),0);return t.put($R.key,n)}(i)))),n<4&&r>=4&&(0!==n&&(o=o.next((()=>function(e,t){return t.store(_R.store).Lt().next((n=>{e.deleteObjectStore(_R.store),e.createObjectStore(_R.store,{keyPath:_R.keyPath,autoIncrement:!0}).createIndex(_R.userMutationsIndex,_R.userMutationsKeyPath,{unique:!0});const r=t.store(_R.store),i=n.map((e=>r.put(e)));return FR.waitFor(i)}))}(e,i)))),o=o.next((()=>{!function(e){e.createObjectStore(LR.store,{keyPath:LR.keyPath})}(e)}))),n<5&&r>=5&&(o=o.next((()=>this.Ce(i)))),n<6&&r>=6&&(o=o.next((()=>(function(e){e.createObjectStore(IR.store)}(e),this.Ne(i))))),n<7&&r>=7&&(o=o.next((()=>this.xe(i)))),n<8&&r>=8&&(o=o.next((()=>this.ke(e,i)))),n<9&&r>=9&&(o=o.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e),function(e){const t=e.objectStore(QR.store);t.createIndex(QR.readTimeIndex,QR.readTimeIndexPath,{unique:!1}),t.createIndex(QR.collectionReadTimeIndex,QR.collectionReadTimeIndexPath,{unique:!1})}(t)}))),n<10&&r>=10&&(o=o.next((()=>this.$e(i)))),n<11&&r>=11&&(o=o.next((()=>{!function(e){e.createObjectStore(DR.store,{keyPath:DR.keyPath})}(e),function(e){e.createObjectStore(NR.store,{keyPath:NR.keyPath})}(e)}))),o}Ne(e){let t=0;return e.store(QR.store).Kt(((e,n)=>{t+=kL(n)})).next((()=>{const n=new IR(t);return e.store(IR.store).put(IR.key,n)}))}Ce(e){const t=e.store(SR.store),n=e.store(_R.store);return t.Lt().next((t=>FR.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.Lt(_R.userMutationsIndex,r).next((n=>FR.forEach(n,(n=>{YI(n.userId===t.userId);const r=cL(this.N,n);return xL(e,t.userId,r).next((()=>{}))}))))}))))}xe(e){const t=e.store(PR.store),n=e.store(QR.store);return e.store($R.store).get($R.key).next((e=>{const r=[];return n.Kt(((n,i)=>{const o=new gA(n),s=[0,yR(o)];r.push(t.get(s).next((n=>{return n?FR.resolve():(r=o,t.put(new PR(0,yR(r),e.highestListenSequenceNumber)));var r})))})).next((()=>FR.waitFor(r)))}))}ke(e,t){e.createObjectStore(RR.store,{keyPath:RR.keyPath});const n=t.store(RR.store),r=new vL,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:yR(r)})}};return t.store(QR.store).Kt({qt:!0},((e,t)=>{const n=new gA(e);return i(n.popLast())})).next((()=>t.store(TR.store).Kt({qt:!0},(([e,t,n],r)=>{const o=wR(t);return i(o.popLast())}))))}$e(e){const t=e.store(AR.store);return t.Kt(((e,n)=>{const r=uL(n),i=hL(this.N,r);return t.put(i)}))}}function GL(e){e.createObjectStore(PR.store,{keyPath:PR.keyPath}).createIndex(PR.documentTargetsIndex,PR.documentTargetsKeyPath,{unique:!0}),e.createObjectStore(AR.store,{keyPath:AR.keyPath}).createIndex(AR.queryTargetsIndexName,AR.queryTargetsKeyPath,{unique:!0}),e.createObjectStore($R.store)}const HL="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ZL{constructor(e,t,n,r,i,o,s,a,l,c){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Oe=i,this.window=o,this.document=s,this.Fe=l,this.Me=c,this.Le=null,this.Be=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ue=null,this.inForeground=!1,this.qe=null,this.Ke=null,this.je=Number.NEGATIVE_INFINITY,this.Qe=e=>Promise.resolve(),!ZL.Pt())throw new HI(GI.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");var u,h;this.referenceDelegate=new WL(this,r),this.We=t+"main",this.N=new nL(a),this.Ge=new qR(this.We,11,new XL(this.N)),this.ze=new IL(this.referenceDelegate,this.N),this.Ht=new yL,this.He=(u=this.N,h=this.Ht,new qL(u,h)),this.Je=new fL,this.window&&this.window.localStorage?this.Ye=this.window.localStorage:(this.Ye=null,!1===c&&qI("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Xe().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new HI(GI.FAILED_PRECONDITION,HL);return this.Ze(),this.tn(),this.en(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.ze.getHighestSequenceNumber(e)))})).then((e=>{this.Le=new iA(e,this.Fe)})).then((()=>{this.Be=!0})).catch((e=>(this.Ge&&this.Ge.close(),Promise.reject(e))))}nn(e){return this.Qe=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ge.xt((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Oe.enqueueAndForget((async()=>{this.started&&await this.Xe()})))}Xe(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>JL(e).put(new LR(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next((()=>{if(this.isPrimary)return this.sn(e).next((e=>{e||(this.isPrimary=!1,this.Oe.enqueueRetryable((()=>this.Qe(!1))))}))})).next((()=>this.rn(e))).next((t=>this.isPrimary&&!t?this.on(e).next((()=>!1)):!!t&&this.an(e).next((()=>!0)))))).catch((e=>{if(BR(e))return VI("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return VI("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Oe.enqueueRetryable((()=>this.Qe(e))),this.isPrimary=e}))}sn(e){return KL(e).get(kR.key).next((e=>FR.resolve(this.cn(e))))}un(e){return JL(e).delete(this.clientId)}async hn(){if(this.isPrimary&&!this.ln(this.je,18e5)){this.je=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=KR(e,LR.store);return t.Lt().next((e=>{const n=this.fn(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return FR.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.Ye)for(const t of e)this.Ye.removeItem(this.dn(t.clientId))}}en(){this.Ke=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Xe().then((()=>this.hn())).then((()=>this.en()))))}cn(e){return!!e&&e.ownerId===this.clientId}rn(e){return this.Me?FR.resolve(!0):KL(e).get(kR.key).next((t=>{if(null!==t&&this.ln(t.leaseTimestampMs,5e3)&&!this.wn(t.ownerId)){if(this.cn(t)&&this.networkEnabled)return!0;if(!this.cn(t)){if(!t.allowTabSynchronization)throw new HI(GI.FAILED_PRECONDITION,HL);return!1}}return!(!this.networkEnabled||!this.inForeground)||JL(e).Lt().next((e=>void 0===this.fn(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&VI("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.Be=!1,this._n(),this.Ke&&(this.Ke.cancel(),this.Ke=null),this.mn(),this.gn(),await this.Ge.runTransaction("shutdown","readwrite",[kR.store,LR.store],(e=>{const t=new ZR(e,iA.T);return this.on(t).next((()=>this.un(t)))})),this.Ge.close(),this.yn()}fn(e,t){return e.filter((e=>this.ln(e.updateTimeMs,t)&&!this.wn(e.clientId)))}pn(){return this.runTransaction("getActiveClients","readonly",(e=>JL(e).Lt().next((e=>this.fn(e,18e5).map((e=>e.clientId))))))}get started(){return this.Be}getMutationQueue(e){return SL.Yt(e,this.N,this.Ht,this.referenceDelegate)}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getIndexManager(){return this.Ht}getBundleCache(){return this.Je}runTransaction(e,t,n){VI("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite";let i;return this.Ge.runTransaction(e,r,MR,(r=>(i=new ZR(r,this.Le?this.Le.next():iA.T),"readwrite-primary"===t?this.sn(i).next((e=>!!e||this.rn(i))).next((t=>{if(!t)throw qI(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable((()=>this.Qe(!1))),new HI(GI.FAILED_PRECONDITION,WR);return n(i)})).next((e=>this.an(i).next((()=>e)))):this.En(i).next((()=>n(i)))))).then((e=>(i.raiseOnCommittedEvent(),e)))}En(e){return KL(e).get(kR.key).next((e=>{if(null!==e&&this.ln(e.leaseTimestampMs,5e3)&&!this.wn(e.ownerId)&&!this.cn(e)&&!(this.Me||this.allowTabSynchronization&&e.allowTabSynchronization))throw new HI(GI.FAILED_PRECONDITION,HL)}))}an(e){const t=new kR(this.clientId,this.allowTabSynchronization,Date.now());return KL(e).put(kR.key,t)}static Pt(){return qR.Pt()}on(e){const t=KL(e);return t.get(kR.key).next((e=>this.cn(e)?(VI("IndexedDbPersistence","Releasing primary lease."),t.delete(kR.key)):FR.resolve()))}ln(e,t){const n=Date.now();return!(e<n-t||e>n&&(qI(`Detected an update time that is in the future: ${e} > ${n}`),1))}Ze(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.qe=()=>{this.Oe.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.Xe())))},this.document.addEventListener("visibilitychange",this.qe),this.inForeground="visible"===this.document.visibilityState)}mn(){this.qe&&(this.document.removeEventListener("visibilitychange",this.qe),this.qe=null)}tn(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Ue=()=>{this._n(),!nw()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")&&navigator.appVersion.match("Version/14")&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Ue))}gn(){this.Ue&&(this.window.removeEventListener("pagehide",this.Ue),this.Ue=null)}wn(e){var t;try{const n=null!==(null===(t=this.Ye)||void 0===t?void 0:t.getItem(this.dn(e)));return VI("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return qI("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}_n(){if(this.Ye)try{this.Ye.setItem(this.dn(this.clientId),String(Date.now()))}catch(xY){qI("Failed to set zombie client id.",xY)}}yn(){if(this.Ye)try{this.Ye.removeItem(this.dn(this.clientId))}catch(xY){}}dn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function KL(e){return KR(e,kR.store)}function JL(e){return KR(e,LR.store)}function eD(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class tD{constructor(e,t){this.progress=e,this.Tn=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,t,n){this.He=e,this.In=t,this.Ht=n}An(e,t){return this.In.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Rn(e,t,n)))}Rn(e,t,n){return this.He.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}Pn(e,t){e.forEach(((e,n)=>{for(const r of t)r.applyToLocalView(n)}))}bn(e,t){return this.He.getEntries(e,t).next((t=>this.vn(e,t).next((()=>t))))}vn(e,t){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.Pn(t,e)))}getDocumentsMatchingQuery(e,t,n){return r=t,AA.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.Vn(e,t.path):xP(t)?this.Sn(e,t,n):this.Dn(e,t,n);var r}Vn(e,t){return this.An(e,new AA(t)).next((e=>{let t=k$();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Sn(e,t,n){const r=t.collectionGroup;let i=k$();return this.Ht.getCollectionParents(e,r).next((o=>FR.forEach(o,(o=>{const s=(a=t,l=o.child(r),new mP(l,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,l;return this.Dn(e,s,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}Dn(e,t,n){let r,i;return this.He.getDocumentsMatchingQuery(e,t,n).next((n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(e,t)))).next((t=>(i=t,this.Cn(e,i,r).next((e=>{r=e;for(const t of i)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=XA.newInvalidDocument(n),r=r.insert(n,i)),JP(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((e,n)=>{QP(t,n)||(r=r.remove(e))})),r)))}Cn(e,t,n){let r=C$();for(const o of t)for(const e of o.mutations)e instanceof i$&&null===n.get(e.key)&&(r=r.add(e.key));let i=n;return this.He.getEntries(e,r).next((e=>(e.forEach(((e,t)=>{t.isFoundDocument()&&(i=i.insert(e,t))})),i)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Nn=n,this.xn=r}static kn(e,t){let n=C$(),r=C$();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new rD(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{$n(e){this.On=e}getDocumentsMatchingQuery(e,t,n,r){return 0===(i=t).filters.length&&null===i.limit&&null==i.startAt&&null==i.endAt&&(0===i.explicitOrderBy.length||1===i.explicitOrderBy.length&&i.explicitOrderBy[0].field.isKeyField())||n.isEqual(hA.min())?this.Fn(e,t):this.On.bn(e,r).next((i=>{const o=this.Mn(t,i);return(yP(t)||OP(t))&&this.Ln(t.limitType,o,r,n)?this.Fn(e,t):(FI()<=Tw.DEBUG&&VI("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),EP(t)),this.On.getDocumentsMatchingQuery(e,t,n).next((e=>(o.forEach((t=>{e=e.insert(t.key,t)})),e))))}));var i}Mn(e,t){let n=new y$(IP(e));return t.forEach(((t,r)=>{QP(e,r)&&(n=n.add(r))})),n}Ln(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(e,t){return FI()<=Tw.DEBUG&&VI("QueryEngine","Using full collection scan to execute query:",EP(t)),this.On.getDocumentsMatchingQuery(e,t,hA.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e,t,n,r){this.persistence=e,this.Bn=t,this.N=r,this.Un=new m$(aA),this.qn=new FL((e=>ZA(e)),KA),this.Kn=hA.min(),this.In=e.getMutationQueue(n),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new nD(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Un)))}}function sD(e,t,n,r){return new oD(e,t,n,r)}async function aD(e,t){const n=XI(e);let r=n.In,i=n.Qn;const o=await n.persistence.runTransaction("Handle user change","readonly",(e=>{let o;return n.In.getAllMutationBatches(e).next((s=>(o=s,r=n.persistence.getMutationQueue(t),i=new nD(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(e)))).next((t=>{const n=[],r=[];let s=C$();for(const e of o){n.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}return i.bn(e,s).next((e=>({Wn:e,removedBatchIds:n,addedBatchIds:r})))}))}));return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),o}function lD(e){const t=XI(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.ze.getLastRemoteSnapshotVersion(e)))}function cD(e,t,n,r,i){let o=C$();return n.forEach((e=>o=o.add(e))),t.getEntries(e,o).next((e=>{let o=w$();return n.forEach(((n,s)=>{const a=e.get(n),l=(null==i?void 0:i.get(n))||r;s.isNoDocument()&&s.version.isEqual(hA.min())?(t.removeEntry(n,l),o=o.insert(n,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(s,l),o=o.insert(n,s)):VI("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",s.version)})),o}))}function uD(e,t){const n=XI(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.In.getNextMutationBatchAfterBatchId(e,t))))}function hD(e,t){const n=XI(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.ze.getTargetData(e,t).next((i=>i?(r=i,FR.resolve(r)):n.ze.allocateTargetId(e).next((i=>(r=new tL(t,i,0,e.currentSequenceNumber),n.ze.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Un.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(e.targetId,e),n.qn.set(t,e.targetId)),e}))}async function dD(e,t,n){const r=XI(e),i=r.Un.get(t),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(s){if(!BR(s))throw s;VI("LocalStore",`Failed to update sequence numbers for target ${t}: ${s}`)}r.Un=r.Un.remove(t),r.qn.delete(i.target)}function fD(e,t,n){const r=XI(e);let i=hA.min(),o=C$();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=XI(e),i=r.qn.get(n);return void 0!==i?FR.resolve(r.Un.get(i)):r.ze.getTargetData(t,n)}(r,e,SP(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(e,t.targetId).next((e=>{o=e}))})).next((()=>r.Bn.getDocumentsMatchingQuery(e,t,n?i:hA.min(),n?o:C$()))).next((e=>({documents:e,Gn:o})))))}function pD(e,t){const n=XI(e),r=XI(n.ze),i=n.Un.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.Et(e,t).next((e=>e?e.target:null))))}function mD(e){const t=XI(e);return t.persistence.runTransaction("Get new document changes","readonly",(e=>function(e,t,n){const r=XI(e);let i=w$(),o=oL(n);const s=BL(t),a=IDBKeyRange.lowerBound(o,!0);return s.Kt({index:QR.readTimeIndex,range:a},((e,t)=>{const n=rL(r.N,t);i=i.insert(n.key,n),o=t.readTime})).next((()=>({Tn:i,readTime:sL(o)})))}(t.jn,e,t.Kn))).then((({Tn:e,readTime:n})=>(t.Kn=n,e)))}async function gD(e,t,n=C$()){const r=await hD(e,SP(dL(t.bundledQuery))),i=XI(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const o=U$(t.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Je.saveNamedQuery(e,t);const s=r.withResumeToken(bA.EMPTY_BYTE_STRING,o);return i.Un=i.Un.insert(s.targetId,s),i.ze.updateTargetData(e,s).next((()=>i.ze.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.ze.addMatchingKeys(e,n,r.targetId))).next((()=>i.Je.saveNamedQuery(e,t)))}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return FR.resolve(this.Yn.get(t))}saveBundleMetadata(e,t){var n;return this.Yn.set(t.id,{id:(n=t).id,version:n.version,createTime:U$(n.createTime)}),FR.resolve()}getNamedQuery(e,t){return FR.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,{name:(n=t).name,query:dL(n.bundledQuery),readTime:U$(n.readTime)}),FR.resolve();var n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(){this.Zn=new y$(OD.ts),this.es=new y$(OD.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const n=new OD(e,t);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.rs(new OD(e,t))}os(e,t){e.forEach((e=>this.removeReference(e,t)))}cs(e){const t=new AA(new gA([])),n=new OD(t,e),r=new OD(t,e+1),i=[];return this.es.forEachInRange([n,r],(e=>{this.rs(e),i.push(e.key)})),i}us(){this.Zn.forEach((e=>this.rs(e)))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new AA(new gA([])),n=new OD(t,e),r=new OD(t,e+1);let i=C$();return this.es.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new OD(e,0),n=this.Zn.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class OD{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return AA.comparator(e.key,t.key)||aA(e.ls,t.ls)}static ns(e,t){return aA(e.ls,t.ls)||AA.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e,t){this.Ht=e,this.referenceDelegate=t,this.In=[],this.fs=1,this.ds=new y$(OD.ts)}checkEmpty(e){return FR.resolve(0===this.In.length)}addMutationBatch(e,t,n,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new JR(i,t,n,r);this.In.push(o);for(const s of r)this.ds=this.ds.add(new OD(s.key,i)),this.Ht.addToCollectionParentIndex(e,s.key.path.popLast());return FR.resolve(o)}lookupMutationBatch(e,t){return FR.resolve(this.ws(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this._s(n),i=r<0?0:r;return FR.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return FR.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(e){return FR.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new OD(t,0),r=new OD(t,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],(e=>{const t=this.ws(e.ls);i.push(t)})),FR.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new y$(aA);return t.forEach((e=>{const t=new OD(e,0),r=new OD(e,Number.POSITIVE_INFINITY);this.ds.forEachInRange([t,r],(e=>{n=n.add(e.ls)}))})),FR.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;AA.isDocumentKey(i)||(i=i.child(""));const o=new OD(new AA(i),0);let s=new y$(aA);return this.ds.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(s=s.add(e.ls)),!0)}),o),FR.resolve(this.gs(s))}gs(e){const t=[];return e.forEach((e=>{const n=this.ws(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){YI(0===this.ys(t.batchId,"removed")),this.In.shift();let n=this.ds;return FR.forEach(t.mutations,(r=>{const i=new OD(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ds=n}))}te(e){}containsKey(e,t){const n=new OD(t,0),r=this.ds.firstAfterOrEqual(n);return FR.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.In.length,FR.resolve()}ys(e,t){return this._s(e)}_s(e){return 0===this.In.length?0:e-this.In[0].batchId}ws(e){const t=this._s(e);return t<0||t>=this.In.length?null:this.In[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e,t){this.Ht=e,this.ps=t,this.docs=new m$(AA.comparator),this.size=0}addEntry(e,t,n){const r=t.key,i=this.docs.get(r),o=i?i.size:0,s=this.ps(t);return this.docs=this.docs.insert(r,{document:t.clone(),size:s,readTime:n}),this.size+=s-o,this.Ht.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return FR.resolve(n?n.document.clone():XA.newInvalidDocument(t))}getEntries(e,t){let n=w$();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():XA.newInvalidDocument(e))})),FR.resolve(n)}getDocumentsMatchingQuery(e,t,n){let r=w$();const i=new AA(t.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:e,value:{document:i,readTime:s}}=o.getNext();if(!t.path.isPrefixOf(e.path))break;s.compareTo(n)<=0||QP(t,i)&&(r=r.insert(i.key,i.clone()))}return FR.resolve(r)}Es(e,t){return FR.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new xD(this)}getSize(e){return FR.resolve(this.size)}}class xD extends VL{constructor(e){super(),this.Se=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?t.push(this.Se.addEntry(e,r.document,this.getReadTime(n))):this.Se.removeEntry(n)})),FR.waitFor(t)}getFromCache(e,t){return this.Se.getEntry(e,t)}getAllFromCache(e,t){return this.Se.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e){this.persistence=e,this.Ts=new FL((e=>ZA(e)),KA),this.lastRemoteSnapshotVersion=hA.min(),this.highestTargetId=0,this.Is=0,this.As=new yD,this.targetCount=0,this.Rs=QL.se()}forEachTarget(e,t){return this.Ts.forEach(((e,n)=>t(n))),FR.resolve()}getLastRemoteSnapshotVersion(e){return FR.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return FR.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),FR.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Is&&(this.Is=t),FR.resolve()}ae(e){this.Ts.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new QL(t),this.highestTargetId=t),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,t){return this.ae(t),this.targetCount+=1,FR.resolve()}updateTargetData(e,t){return this.ae(t),FR.resolve()}removeTargetData(e,t){return this.Ts.delete(t.target),this.As.cs(t.targetId),this.targetCount-=1,FR.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Ts.forEach(((o,s)=>{s.sequenceNumber<=t&&null===n.get(s.targetId)&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(e,s.targetId)),r++)})),FR.waitFor(i).next((()=>r))}getTargetCount(e){return FR.resolve(this.targetCount)}getTargetData(e,t){const n=this.Ts.get(t)||null;return FR.resolve(n)}addMatchingKeys(e,t,n){return this.As.ss(t,n),FR.resolve()}removeMatchingKeys(e,t,n){this.As.os(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),FR.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.As.cs(t),FR.resolve()}getMatchingKeysForTargetId(e,t){const n=this.As.hs(t);return FR.resolve(n)}containsKey(e,t){return FR.resolve(this.As.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(e,t){var n;this.Ps={},this.Le=new iA(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new kD(this),this.Ht=new gL,this.He=(n=this.Ht,new wD(n,(e=>this.referenceDelegate.bs(e)))),this.N=new nL(t),this.Je=new vD(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let t=this.Ps[e.toKey()];return t||(t=new bD(this.Ht,this.referenceDelegate),this.Ps[e.toKey()]=t),t}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,t,n){VI("MemoryPersistence","Starting transaction:",e);const r=new _D(this.Le.next());return this.referenceDelegate.vs(),n(r).next((e=>this.referenceDelegate.Vs(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ss(e,t){return FR.or(Object.values(this.Ps).map((n=>()=>n.containsKey(e,t))))}}class _D extends jR{constructor(e){super(),this.currentSequenceNumber=e}}class TD{constructor(e){this.persistence=e,this.Ds=new yD,this.Cs=null}static Ns(e){return new TD(e)}get xs(){if(this.Cs)return this.Cs;throw BI()}addReference(e,t,n){return this.Ds.addReference(n,t),this.xs.delete(n.toString()),FR.resolve()}removeReference(e,t,n){return this.Ds.removeReference(n,t),this.xs.add(n.toString()),FR.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),FR.resolve()}removeTarget(e,t){this.Ds.cs(t.targetId).forEach((e=>this.xs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.xs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}vs(){this.Cs=new Set}Vs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return FR.forEach(this.xs,(n=>{const r=AA.fromPath(n);return this.ks(e,r).next((e=>{e||t.removeEntry(r)}))})).next((()=>(this.Cs=null,t.apply(e))))}updateLimboDocument(e,t){return this.ks(e,t).next((e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())}))}bs(e){return 0}ks(e,t){return FR.or([()=>FR.resolve(this.Ds.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ss(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CD(e,t){return`firestore_clients_${e}_${t}`}function ED(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function QD(e,t){return`firestore_targets_${e}_${t}`}class ID{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static $s(e,t,n){const r=JSON.parse(n);let i,o="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return o&&r.error&&(o="string"==typeof r.error.message&&"string"==typeof r.error.code,o&&(i=new HI(r.error.code,r.error.message))),o?new ID(e,t,r.state,i):(qI("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class AD{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static $s(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new HI(n.error.code,n.error.message))),i?new AD(e,n.state,r):(qI("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class PD{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static $s(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=Q$();for(let o=0;r&&o<n.activeTargetIds.length;++o)r=IA(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return r?new PD(e,i):(qI("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class $D{constructor(e,t){this.clientId=e,this.onlineState=t}static $s(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new $D(t.clientId,t.onlineState):(qI("SharedClientState",`Failed to parse online state: ${e}`),null)}}class RD{constructor(){this.activeTargetIds=Q$()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class LD{constructor(e,t,n,r,i){this.window=e,this.Oe=t,this.persistenceKey=n,this.Ls=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Bs=this.Us.bind(this),this.qs=new m$(aA),this.started=!1,this.Ks=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.js=CD(this.persistenceKey,this.Ls),this.Qs=`firestore_sequence_number_${this.persistenceKey}`,this.qs=this.qs.insert(this.Ls,new RD),this.Ws=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Gs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.zs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Hs=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.Js=function(e){return`firestore_bundle_loaded_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.Bs)}static Pt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.pn();for(const n of e){if(n===this.Ls)continue;const e=this.getItem(CD(this.persistenceKey,n));if(e){const t=PD.$s(n,e);t&&(this.qs=this.qs.insert(t.clientId,t))}}this.Ys();const t=this.storage.getItem(this.Hs);if(t){const e=this.Xs(t);e&&this.Zs(e)}for(const n of this.Ks)this.Us(n);this.Ks=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.Qs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ti(this.qs)}isActiveQueryTarget(e){let t=!1;return this.qs.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.ei(e,"pending")}updateMutationState(e,t,n){this.ei(e,t,n),this.ni(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(QD(this.persistenceKey,e));if(n){const r=AD.$s(e,n);r&&(t=r.state)}}return this.si.Fs(e),this.Ys(),t}removeLocalQueryTarget(e){this.si.Ms(e),this.Ys()}isLocalQueryTarget(e){return this.si.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(QD(this.persistenceKey,e))}updateQueryState(e,t,n){this.ii(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.ni(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.ri(e)}notifyBundleLoaded(){this.oi()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Bs),this.removeItem(this.js),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return VI("SharedClientState","READ",e,t),t}setItem(e,t){VI("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){VI("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Us(e){const t=e;if(t.storageArea===this.storage){if(VI("SharedClientState","EVENT",t.key,t.newValue),t.key===this.js)return void qI("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.Ws.test(t.key)){if(null==t.newValue){const e=this.ai(t.key);return this.ci(e,null)}{const e=this.ui(t.key,t.newValue);if(e)return this.ci(e.clientId,e)}}else if(this.Gs.test(t.key)){if(null!==t.newValue){const e=this.hi(t.key,t.newValue);if(e)return this.li(e)}}else if(this.zs.test(t.key)){if(null!==t.newValue){const e=this.fi(t.key,t.newValue);if(e)return this.di(e)}}else if(t.key===this.Hs){if(null!==t.newValue){const e=this.Xs(t.newValue);if(e)return this.Zs(e)}}else if(t.key===this.Qs){const e=function(e){let t=iA.T;if(null!=e)try{const n=JSON.parse(e);YI("number"==typeof n),t=n}catch(n){qI("SharedClientState","Failed to read sequence number from WebStorage",n)}return t}(t.newValue);e!==iA.T&&this.sequenceNumberHandler(e)}else if(t.key===this.Js)return this.syncEngine.wi()}else this.Ks.push(t)}))}}get si(){return this.qs.get(this.Ls)}Ys(){this.setItem(this.js,this.si.Os())}ei(e,t,n){const r=new ID(this.currentUser,e,t,n),i=ED(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Os())}ni(e){const t=ED(this.persistenceKey,this.currentUser,e);this.removeItem(t)}ri(e){const t={clientId:this.Ls,onlineState:e};this.storage.setItem(this.Hs,JSON.stringify(t))}ii(e,t,n){const r=QD(this.persistenceKey,e),i=new AD(e,t,n);this.setItem(r,i.Os())}oi(){this.setItem(this.Js,"value-not-used")}ai(e){const t=this.Ws.exec(e);return t?t[1]:null}ui(e,t){const n=this.ai(e);return PD.$s(n,t)}hi(e,t){const n=this.Gs.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return ID.$s(new MI(i),r,t)}fi(e,t){const n=this.zs.exec(e),r=Number(n[1]);return AD.$s(r,t)}Xs(e){return $D.$s(e)}async li(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine._i(e.batchId,e.state,e.error);VI("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}di(e){return this.syncEngine.mi(e.targetId,e.state,e.error)}ci(e,t){const n=t?this.qs.insert(e,t):this.qs.remove(e),r=this.ti(this.qs),i=this.ti(n),o=[],s=[];return i.forEach((e=>{r.has(e)||o.push(e)})),r.forEach((e=>{i.has(e)||s.push(e)})),this.syncEngine.gi(o,s).then((()=>{this.qs=n}))}Zs(e){this.qs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ti(e){let t=Q$();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class DD{constructor(){this.yi=new RD,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,t,n){this.pi[e]=t}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new RD,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{Ei(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.Pi=[],this.bi()}Ei(e){this.Pi.push(e)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}bi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){VI("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Pi)e(0)}Ri(){VI("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Pi)e(1)}static Pt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Fi=t+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,t,n,r){const i=this.Bi(e,t);VI("RestConnection","Sending: ",i,n);const o={};return this.Ui(o,r),this.qi(e,i,o,n).then((e=>(VI("RestConnection","Received: ",e),e)),(t=>{throw zI("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",n),t}))}Ki(e,t,n,r){return this.Li(e,t,n,r)}Ui(e,t){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+WI,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t)for(const n in t.authHeaders)t.authHeaders.hasOwnProperty(n)&&(e[n]=t.authHeaders[n])}Bi(e,t){const n=WD[e];return`${this.Fi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,t,n,r){return new Promise(((i,o)=>{const s=new NI;s.listenOnce(AI.COMPLETE,(()=>{try{switch(s.getLastErrorCode()){case II.NO_ERROR:const t=s.getResponseJson();VI("Connection","XHR received:",JSON.stringify(t)),i(t);break;case II.TIMEOUT:VI("Connection",'RPC "'+e+'" timed out'),o(new HI(GI.DEADLINE_EXCEEDED,"Request time out"));break;case II.HTTP_ERROR:const n=s.getStatus();if(VI("Connection",'RPC "'+e+'" failed with status:',n,"response text:",s.getResponseText()),n>0){const e=s.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(GI).indexOf(t)>=0?t:GI.UNKNOWN}(e.status);o(new HI(t,e.message))}else o(new HI(GI.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new HI(GI.UNAVAILABLE,"Connection failed."));break;default:BI()}}finally{VI("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);s.send(t,"POST",a,n,15)}))}ji(e,t){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=new _I,i=yE(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new LI({})),this.Ui(o.initMessageHeaders,t),tw()||iw()||ew().indexOf("Electron/")>=0||ow()||ew().indexOf("MSAppHost/")>=0||rw()||(o.httpHeadersOverwriteParam="$httpHeaders");const s=n.join("");VI("Connection","Creating WebChannel: "+s,o);const a=r.createWebChannel(s,o);let l=!1,c=!1;const u=new jD({vi:e=>{c?VI("Connection","Not sending because WebChannel is closed:",e):(l||(VI("Connection","Opening WebChannel transport."),a.open(),l=!0),VI("Connection","WebChannel sending:",e),a.send(e))},Vi:()=>a.close()}),h=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(t){setTimeout((()=>{throw t}),0)}}))};return h(a,DI.EventType.OPEN,(()=>{c||VI("Connection","WebChannel transport opened.")})),h(a,DI.EventType.CLOSE,(()=>{c||(c=!0,VI("Connection","WebChannel transport closed"),u.$i())})),h(a,DI.EventType.ERROR,(e=>{c||(c=!0,zI("Connection","WebChannel transport errored:",e),u.$i(new HI(GI.UNAVAILABLE,"The operation could not be completed")))})),h(a,DI.EventType.MESSAGE,(e=>{var t;if(!c){const n=e.data[0];YI(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){VI("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=h$[e];if(void 0!==t)return p$(t)}(e),n=i.message;void 0===t&&(t=GI.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),c=!0,u.$i(new HI(t,n)),a.close()}else VI("Connection","WebChannel received:",n),u.Oi(n)}})),h(i,PI.STAT_EVENT,(e=>{e.stat===$I?VI("Connection","Detected buffering proxy"):e.stat===RI&&VI("Connection","Detected no buffering proxy")})),setTimeout((()=>{u.ki()}),0),u}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VD(){return"undefined"!=typeof window?window:null}function qD(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zD(e){return new F$(e,!0)}class UD{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Oe=e,this.timerId=t,this.Qi=n,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const t=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,t-n);r>0&&VI("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,(()=>(this.Ji=Date.now(),e()))),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e,t,n,r,i,o){this.Oe=e,this.er=n,this.nr=r,this.credentialsProvider=i,this.listener=o,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new UD(e,t)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,(()=>this.dr())))}wr(e){this._r(),this.stream.send(e)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,t){this._r(),this.rr.cancel(),this.sr++,3!==e?this.rr.reset():t&&t.code===GI.RESOURCE_EXHAUSTED?(qI(t.toString()),qI("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):t&&t.code===GI.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(t)}mr(){}auth(){this.state=1;const e=this.gr(this.sr),t=this.sr;this.credentialsProvider.getToken().then((e=>{this.sr===t&&this.yr(e)}),(t=>{e((()=>{const e=new HI(GI.UNKNOWN,"Fetching auth token failed: "+t.message);return this.pr(e)}))}))}yr(e){const t=this.gr(this.sr);this.stream=this.Er(e),this.stream.Si((()=>{t((()=>(this.state=2,this.listener.Si())))})),this.stream.Ci((e=>{t((()=>this.pr(e)))})),this.stream.onMessage((e=>{t((()=>this.onMessage(e)))}))}ur(){this.state=4,this.rr.Xi((async()=>{this.state=0,this.start()}))}pr(e){return VI("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(3,e)}gr(e){return t=>{this.Oe.enqueueAndForget((()=>this.sr===e?t():(VI("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class YD extends BD{constructor(e,t,n,r,i){super(e,"listen_stream_connection_backoff","listen_stream_idle",t,n,i),this.N=r}Er(e){return this.nr.ji("Listen",e)}onMessage(e){this.rr.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:BI(),o=t.targetChange.targetIds||[],s=function(e,t){return e.D?(YI(void 0===t||"string"==typeof t),bA.fromBase64String(t||"")):(YI(void 0===t||t instanceof Uint8Array),bA.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(e){const t=void 0===e.code?GI.UNKNOWN:p$(e.code);return new HI(t,e.message||"")}(a);n=new R$(i,o,s,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=G$(e,r.document.name),o=U$(r.document.updateTime),s=new BA({mapValue:{fields:r.document.fields}}),a=XA.newFoundDocument(i,o,s),l=r.targetIds||[],c=r.removedTargetIds||[];n=new P$(l,c,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=G$(e,r.document),o=r.readTime?U$(r.readTime):hA.min(),s=XA.newNoDocument(i,o),a=r.removedTargetIds||[];n=new P$([],a,s.key,s)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=G$(e,r.document),o=r.removedTargetIds||[];n=new P$([],o,i,null)}else{if(!("filter"in t))return BI();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new u$(r),o=e.targetId;n=new $$(o,i)}}var r;return n}(this.N,e),n=function(e){if(!("targetChange"in e))return hA.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?hA.min():t.readTime?U$(t.readTime):hA.min()}(e);return this.listener.Tr(t,n)}Ir(e){const t={};t.database=K$(this.N),t.addTarget=function(e,t){let n;const r=t.target;return n=JA(r)?{documents:iR(e,r)}:{query:oR(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=q$(e,t.resumeToken):t.snapshotVersion.compareTo(hA.min())>0&&(n.readTime=V$(e,t.snapshotVersion.toTimestamp())),n}(this.N,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return BI()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.N,e);n&&(t.labels=n),this.wr(t)}Ar(e){const t={};t.database=K$(this.N),t.removeTarget=e,this.wr(t)}}class XD extends BD{constructor(e,t,n,r,i){super(e,"write_stream_connection_backoff","write_stream_idle",t,n,i),this.N=r,this.Rr=!1}get Pr(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.br([])}Er(e){return this.nr.ji("Write",e)}onMessage(e){if(YI(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Rr){this.rr.reset();const t=function(e,t){return e&&e.length>0?(YI(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?U$(e.updateTime):U$(t);return n.isEqual(hA.min())&&(n=U$(t)),new XP(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=U$(e.commitTime);return this.listener.vr(n,t)}return YI(!e.writeResults||0===e.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const e={};e.database=K$(this.N),this.wr(e)}br(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>nR(this.N,e)))};this.wr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD extends class{}{constructor(e,t,n){super(),this.credentials=e,this.nr=t,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new HI(GI.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,t,n){return this.Cr(),this.credentials.getToken().then((r=>this.nr.Li(e,t,n,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===GI.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new HI(GI.UNKNOWN,e.toString())}))}Ki(e,t,n){return this.Cr(),this.credentials.getToken().then((r=>this.nr.Ki(e,t,n,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===GI.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new HI(GI.UNKNOWN,e.toString())}))}terminate(){this.Dr=!0}}class HD{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve()))))}Lr(e){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Fr("Offline")))}set(e){this.Br(),this.Nr=0,"Online"===e&&(this.$r=!1),this.Fr(e)}Fr(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Mr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(qI(t),this.$r=!1):VI("OnlineStateTracker",t)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=i,this.Qr.Ei((e=>{n.enqueueAndForget((async()=>{sN(this)&&(VI("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=XI(e);t.Kr.add(4),await JD(t),t.Wr.set("Unknown"),t.Kr.delete(4),await KD(t)}(this))}))})),this.Wr=new HD(n,r)}}async function KD(e){if(sN(e))for(const t of e.jr)await t(!0)}async function JD(e){for(const t of e.jr)await t(!1)}function eN(e,t){const n=XI(e);n.qr.has(t.targetId)||(n.qr.set(t.targetId,t),oN(n)?iN(n):kN(n).cr()&&nN(n,t))}function tN(e,t){const n=XI(e),r=kN(n);n.qr.delete(t),r.cr()&&rN(n,t),0===n.qr.size&&(r.cr()?r.lr():sN(n)&&n.Wr.set("Unknown"))}function nN(e,t){e.Gr.Y(t.targetId),kN(e).Ir(t)}function rN(e,t){e.Gr.Y(t),kN(e).Ar(t)}function iN(e){e.Gr=new D$({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.qr.get(t)||null}),kN(e).start(),e.Wr.Or()}function oN(e){return sN(e)&&!kN(e).ar()&&e.qr.size>0}function sN(e){return 0===XI(e).Kr.size}function aN(e){e.Gr=void 0}async function lN(e){e.qr.forEach(((t,n)=>{nN(e,t)}))}async function cN(e,t){aN(e),oN(e)?(e.Wr.Lr(t),iN(e)):e.Wr.set("Unknown")}async function uN(e,t,n){if(e.Wr.set("Online"),t instanceof R$&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.qr.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.qr.delete(r),e.Gr.removeTarget(r))}(e,t)}catch(r){VI("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await hN(e,r)}else if(t instanceof P$?e.Gr.rt(t):t instanceof $$?e.Gr.ft(t):e.Gr.ct(t),!n.isEqual(hA.min()))try{const t=await lD(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Gr._t(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.qr.get(r);i&&e.qr.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.qr.get(t);if(!n)return;e.qr.set(t,n.withResumeToken(bA.EMPTY_BYTE_STRING,n.snapshotVersion)),rN(e,t);const r=new tL(n.target,t,1,n.sequenceNumber);nN(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(i){VI("RemoteStore","Failed to raise snapshot:",i),await hN(e,i)}}async function hN(e,t,n){if(!BR(t))throw t;e.Kr.add(1),await JD(e),e.Wr.set("Offline"),n||(n=()=>lD(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{VI("RemoteStore","Retrying IndexedDB access"),await n(),e.Kr.delete(1),await KD(e)}))}function dN(e,t){return t().catch((n=>hN(e,n,t)))}async function fN(e){const t=XI(e),n=SN(t);let r=t.Ur.length>0?t.Ur[t.Ur.length-1].batchId:-1;for(;pN(t);)try{const e=await uD(t.localStore,r);if(null===e){0===t.Ur.length&&n.lr();break}r=e.batchId,mN(t,e)}catch(i){await hN(t,i)}gN(t)&&vN(t)}function pN(e){return sN(e)&&e.Ur.length<10}function mN(e,t){e.Ur.push(t);const n=SN(e);n.cr()&&n.Pr&&n.br(t.mutations)}function gN(e){return sN(e)&&!SN(e).ar()&&e.Ur.length>0}function vN(e){SN(e).start()}async function yN(e){SN(e).Sr()}async function ON(e){const t=SN(e);for(const n of e.Ur)t.br(n.mutations)}async function bN(e,t,n){const r=e.Ur.shift(),i=eL.from(r,t,n);await dN(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await fN(e)}async function wN(e,t){t&&SN(e).Pr&&await async function(e,t){if(f$(n=t.code)&&n!==GI.ABORTED){const n=e.Ur.shift();SN(e).hr(),await dN(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await fN(e)}var n}(e,t),gN(e)&&vN(e)}async function xN(e,t){const n=XI(e);t?(n.Kr.delete(2),await KD(n)):t||(n.Kr.add(2),await JD(n),n.Wr.set("Unknown"))}function kN(e){return e.zr||(e.zr=function(e,t,n){const r=XI(e);return r.Cr(),new YD(t,r.nr,r.credentials,r.N,n)}(e.datastore,e.asyncQueue,{Si:lN.bind(null,e),Ci:cN.bind(null,e),Tr:uN.bind(null,e)}),e.jr.push((async t=>{t?(e.zr.hr(),oN(e)?iN(e):e.Wr.set("Unknown")):(await e.zr.stop(),aN(e))}))),e.zr}function SN(e){return e.Hr||(e.Hr=function(e,t,n){const r=XI(e);return r.Cr(),new XD(t,r.nr,r.credentials,r.N,n)}(e.datastore,e.asyncQueue,{Si:yN.bind(null,e),Ci:wN.bind(null,e),Vr:ON.bind(null,e),vr:bN.bind(null,e)}),e.jr.push((async t=>{t?(e.Hr.hr(),await fN(e)):(await e.Hr.stop(),e.Ur.length>0&&(VI("RemoteStore",`Stopping write stream with ${e.Ur.length} pending writes`),e.Ur=[]))}))),e.Hr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class _N{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ZI,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,s=new _N(e,t,o,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new HI(GI.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function TN(e,t){if(qI("AsyncQueue",`${t}: ${e}`),BR(e))return new HI(GI.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e){this.comparator=e?(t,n)=>e(t,n)||AA.comparator(t.key,n.key):(e,t)=>AA.comparator(e.key,t.key),this.keyedMap=k$(),this.sortedSet=new m$(this.comparator)}static emptySet(e){return new CN(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof CN))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new CN;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(){this.Jr=new m$(AA.comparator)}track(e){const t=e.doc.key,n=this.Jr.get(t);n?0!==e.type&&3===n.type?this.Jr=this.Jr.insert(t,e):3===e.type&&1!==n.type?this.Jr=this.Jr.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Jr=this.Jr.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Jr=this.Jr.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Jr=this.Jr.remove(t):1===e.type&&2===n.type?this.Jr=this.Jr.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Jr=this.Jr.insert(t,{type:2,doc:e.doc}):BI():this.Jr=this.Jr.insert(t,e)}Yr(){const e=[];return this.Jr.inorderTraversal(((t,n)=>{e.push(n)})),e}}class QN{constructor(e,t,n,r,i,o,s,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new QN(e,t,CN.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&TP(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(){this.Xr=void 0,this.listeners=[]}}class AN{constructor(){this.queries=new FL((e=>CP(e)),TP),this.onlineState="Unknown",this.Zr=new Set}}async function PN(e,t){const n=XI(e),r=t.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new IN),i)try{o.Xr=await n.onListen(r)}catch(s){const e=TN(s,`Initialization of query '${EP(t.query)}' failed`);return void t.onError(e)}n.queries.set(r,o),o.listeners.push(t),t.eo(n.onlineState),o.Xr&&t.no(o.Xr)&&DN(n)}async function $N(e,t){const n=XI(e),r=t.query;let i=!1;const o=n.queries.get(r);if(o){const e=o.listeners.indexOf(t);e>=0&&(o.listeners.splice(e,1),i=0===o.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function RN(e,t){const n=XI(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.no(i)&&(r=!0);t.Xr=i}}r&&DN(n)}function LN(e,t,n){const r=XI(e),i=r.queries.get(t);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(t)}function DN(e){e.Zr.forEach((e=>{e.next()}))}class NN{constructor(e,t,n){this.query=e,this.so=t,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=n||{}}no(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new QN(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.io?this.oo(e)&&(this.so.next(e),t=!0):this.ao(e,this.onlineState)&&(this.co(e),t=!0),this.ro=e,t}onError(e){this.so.error(e)}eo(e){this.onlineState=e;let t=!1;return this.ro&&!this.io&&this.ao(this.ro,e)&&(this.co(this.ro),t=!0),t}ao(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.uo&&n||e.docs.isEmpty()&&"Offline"!==t)}oo(e){if(e.docChanges.length>0)return!0;const t=this.ro&&this.ro.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}co(e){e=QN.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.io=!0,this.so.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e,t){this.payload=e,this.byteLength=t}ho(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e){this.N=e}zn(e){return G$(this.N,e)}Hn(e){return e.metadata.exists?tR(this.N,e.document,!1):XA.newNoDocument(this.zn(e.metadata.name),this.Jn(e.metadata.readTime))}Jn(e){return U$(e)}}class jN{constructor(e,t,n){this.lo=e,this.localStore=t,this.N=n,this.queries=[],this.documents=[],this.progress=FN(e)}fo(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t),t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}wo(e){const t=new Map,n=new WN(this.N);for(const r of e)if(r.metadata.queries){const e=n.zn(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||C$()).add(e);t.set(n,r)}}return t}async complete(){const e=await async function(e,t,n,r){const i=XI(e);let o=C$(),s=w$(),a=_$();for(const h of n){const e=t.zn(h.metadata.name);h.document&&(o=o.add(e)),s=s.insert(e,t.Hn(h)),a=a.insert(e,t.Jn(h.metadata.readTime))}const l=i.jn.newChangeBuffer({trackRemovals:!0}),c=await hD(i,(u=r,SP(vP(gA.fromString(`__bundle__/docs/${u}`)))));var u;return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>cD(e,l,s,hA.min(),a).next((t=>(l.apply(e),t))).next((t=>i.ze.removeMatchingKeysForTargetId(e,c.targetId).next((()=>i.ze.addMatchingKeys(e,o,c.targetId))).next((()=>i.Qn.vn(e,t))).next((()=>t))))))}(this.localStore,new WN(this.N),this.documents,this.lo.id),t=this.wo(this.documents);for(const n of this.queries)await gD(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",new tD(Object.assign({},this.progress),e)}}function FN(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e){this.key=e}}class qN{constructor(e){this.key=e}}class zN{constructor(e,t){this.query=e,this._o=t,this.mo=null,this.current=!1,this.yo=C$(),this.mutatedKeys=C$(),this.po=IP(e),this.Eo=new CN(this.po)}get To(){return this._o}Io(e,t){const n=t?t.Ao:new EN,r=t?t.Eo:this.Eo;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a=yP(this.query)&&r.size===this.query.limit?r.last():null,l=OP(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const c=r.get(e),u=QP(this.query,t)?t:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Ro(c,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.po(u,a)>0||l&&this.po(u,l)<0)&&(s=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(a||l)&&(s=!0)),f&&(u?(o=o.add(u),i=d?i.add(e):i.delete(e)):(o=o.delete(e),i=i.delete(e)))})),yP(this.query)||OP(this.query))for(;o.size>this.query.limit;){const e=yP(this.query)?o.last():o.first();o=o.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Eo:o,Ao:n,Ln:s,mutatedKeys:i}}Ro(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Eo;this.Eo=e.Eo,this.mutatedKeys=e.mutatedKeys;const i=e.Ao.Yr();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return BI()}};return n(e)-n(t)}(e.type,t.type)||this.po(e.doc,t.doc))),this.Po(n);const o=t?this.bo():[],s=0===this.yo.size&&this.current?1:0,a=s!==this.mo;return this.mo=s,0!==i.length||a?{snapshot:new QN(this.query,e.Eo,r,i,e.mutatedKeys,0===s,a,!1),vo:o}:{vo:o}}eo(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new EN,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(e){return!this._o.has(e)&&!!this.Eo.has(e)&&!this.Eo.get(e).hasLocalMutations}Po(e){e&&(e.addedDocuments.forEach((e=>this._o=this._o.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this._o=this._o.delete(e))),this.current=e.current)}bo(){if(!this.current)return[];const e=this.yo;this.yo=C$(),this.Eo.forEach((e=>{this.Vo(e.key)&&(this.yo=this.yo.add(e.key))}));const t=[];return e.forEach((e=>{this.yo.has(e)||t.push(new qN(e))})),this.yo.forEach((n=>{e.has(n)||t.push(new VN(n))})),t}So(e){this._o=e.Gn,this.yo=C$();const t=this.Io(e.documents);return this.applyChanges(t,!0)}Do(){return QN.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,0===this.mo)}}class UN{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class BN{constructor(e){this.key=e,this.Co=!1}}class YN{constructor(e,t,n,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.No={},this.xo=new FL((e=>CP(e)),TP),this.ko=new Map,this.$o=new Set,this.Oo=new m$(AA.comparator),this.Fo=new Map,this.Mo=new yD,this.Lo={},this.Bo=new Map,this.Uo=QL.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function XN(e,t){const n=bM(e);let r,i;const o=n.xo.get(t);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.Do();else{const e=await hD(n.localStore,SP(t)),o=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await GN(n,t,r,"current"===o),n.isPrimaryClient&&eN(n.remoteStore,e)}return i}async function GN(e,t,n,r){e.Ko=(t,n,r)=>async function(e,t,n,r){let i=t.view.Io(n);i.Ln&&(i=await fD(e.localStore,t.query,!1).then((({documents:e})=>t.view.Io(e,i))));const o=r&&r.targetChanges.get(t.targetId),s=t.view.applyChanges(i,e.isPrimaryClient,o);return sM(e,t.targetId,s.vo),s.snapshot}(e,t,n,r);const i=await fD(e.localStore,t,!0),o=new zN(t,i.Gn),s=o.Io(i.documents),a=A$.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),l=o.applyChanges(s,e.isPrimaryClient,a);sM(e,n,l.vo);const c=new UN(t,n,o);return e.xo.set(t,c),e.ko.has(n)?e.ko.get(n).push(t):e.ko.set(n,[t]),l.snapshot}async function HN(e,t){const n=XI(e),r=n.xo.get(t),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter((e=>!TP(e,t)))),void n.xo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await dD(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),tN(n.remoteStore,r.targetId),iM(n,r.targetId)})).catch(RL)):(iM(n,r.targetId),await dD(n.localStore,r.targetId,!0))}async function ZN(e,t){const n=XI(e);try{const e=await function(e,t){const n=XI(e),r=t.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const s=[];t.targetChanges.forEach(((t,o)=>{const a=i.get(o);if(!a)return;s.push(n.ze.removeMatchingKeys(e,t.removedDocuments,o).next((()=>n.ze.addMatchingKeys(e,t.addedDocuments,o))));const l=t.resumeToken;if(l.approximateByteSize()>0){const d=a.withResumeToken(l,r).withSequenceNumber(e.currentSequenceNumber);i=i.insert(o,d),c=a,h=t,YI((u=d).resumeToken.approximateByteSize()>0),(0===c.resumeToken.approximateByteSize()||u.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||h.addedDocuments.size+h.modifiedDocuments.size+h.removedDocuments.size>0)&&s.push(n.ze.updateTargetData(e,d))}var c,u,h}));let a=w$();if(t.documentUpdates.forEach(((r,i)=>{t.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),s.push(cD(e,o,t.documentUpdates,r,void 0).next((e=>{a=e}))),!r.isEqual(hA.min())){const t=n.ze.getLastRemoteSnapshotVersion(e).next((t=>n.ze.setTargetsMetadata(e,e.currentSequenceNumber,r)));s.push(t)}return FR.waitFor(s).next((()=>o.apply(e))).next((()=>n.Qn.vn(e,a))).next((()=>a))})).then((e=>(n.Un=i,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Fo.get(t);r&&(YI(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Co=!0:e.modifiedDocuments.size>0?YI(r.Co):e.removedDocuments.size>0&&(YI(r.Co),r.Co=!1))})),await cM(n,e,t)}catch(r){await RL(r)}}function KN(e,t,n){const r=XI(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.xo.forEach(((n,r)=>{const i=r.view.eo(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=XI(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.eo(t)&&(r=!0)})),r&&DN(n)}(r.eventManager,t),e.length&&r.No.Tr(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function JN(e,t,n){const r=XI(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Fo.get(t),o=i&&i.key;if(o){let e=new m$(AA.comparator);e=e.insert(o,XA.newNoDocument(o,hA.min()));const n=C$().add(o),i=new I$(hA.min(),new Map,new y$(aA),e,n);await ZN(r,i),r.Oo=r.Oo.remove(o),r.Fo.delete(t),lM(r)}else await dD(r.localStore,t,!1).then((()=>iM(r,t,n))).catch(RL)}async function eM(e,t){const n=XI(e),r=t.batch.batchId;try{const e=await function(e,t){const n=XI(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,o=i.keys();let s=FR.resolve();return o.forEach((e=>{s=s.next((()=>r.getEntry(t,e))).next((t=>{const o=n.docVersions.get(e);YI(null!==o),t.version.compareTo(o)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&r.addEntry(t,n.commitVersion))}))})),s.next((()=>e.In.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.In.performConsistencyCheck(e))).next((()=>n.Qn.bn(e,r)))}))}(n.localStore,t);rM(n,r,null),nM(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await cM(n,e)}catch(i){await RL(i)}}async function tM(e,t,n){const r=XI(e);try{const e=await function(e,t){const n=XI(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.In.lookupMutationBatch(e,t).next((t=>(YI(null!==t),r=t.keys(),n.In.removeMutationBatch(e,t)))).next((()=>n.In.performConsistencyCheck(e))).next((()=>n.Qn.bn(e,r)))}))}(r.localStore,t);rM(r,t,n),nM(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await cM(r,e)}catch(i){await RL(i)}}function nM(e,t){(e.Bo.get(t)||[]).forEach((e=>{e.resolve()})),e.Bo.delete(t)}function rM(e,t,n){const r=XI(e);let i=r.Lo[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Lo[r.currentUser.toKey()]=i}}function iM(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ko.get(t))e.xo.delete(r),n&&e.No.jo(r,n);e.ko.delete(t),e.isPrimaryClient&&e.Mo.cs(t).forEach((t=>{e.Mo.containsKey(t)||oM(e,t)}))}function oM(e,t){e.$o.delete(t.path.canonicalString());const n=e.Oo.get(t);null!==n&&(tN(e.remoteStore,n),e.Oo=e.Oo.remove(t),e.Fo.delete(n),lM(e))}function sM(e,t,n){for(const r of n)r instanceof VN?(e.Mo.addReference(r.key,t),aM(e,r)):r instanceof qN?(VI("SyncEngine","Document no longer in limbo: "+r.key),e.Mo.removeReference(r.key,t),e.Mo.containsKey(r.key)||oM(e,r.key)):BI()}function aM(e,t){const n=t.key,r=n.path.canonicalString();e.Oo.get(n)||e.$o.has(r)||(VI("SyncEngine","New document in limbo: "+n),e.$o.add(r),lM(e))}function lM(e){for(;e.$o.size>0&&e.Oo.size<e.maxConcurrentLimboResolutions;){const t=e.$o.values().next().value;e.$o.delete(t);const n=new AA(gA.fromString(t)),r=e.Uo.next();e.Fo.set(r,new BN(n)),e.Oo=e.Oo.insert(n,r),eN(e.remoteStore,new tL(SP(vP(n.path)),r,2,iA.T))}}async function cM(e,t,n){const r=XI(e),i=[],o=[],s=[];r.xo.isEmpty()||(r.xo.forEach(((e,a)=>{s.push(r.Ko(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=rD.kn(a.targetId,e);o.push(t)}})))})),await Promise.all(s),r.No.Tr(i),await async function(e,t){const n=XI(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>FR.forEach(t,(t=>FR.forEach(t.Nn,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>FR.forEach(t.xn,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(r){if(!BR(r))throw r;VI("LocalStore","Failed to update sequence numbers: "+r)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.Un.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(e,i)}}}(r.localStore,o))}async function uM(e,t){const n=XI(e);if(!n.currentUser.isEqual(t)){VI("SyncEngine","User change. New user:",t.toKey());const e=await aD(n.localStore,t);n.currentUser=t,(r=n).Bo.forEach((e=>{e.forEach((e=>{e.reject(new HI(GI.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.Bo.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await cM(n,e.Wn)}var r}function hM(e,t){const n=XI(e),r=n.Fo.get(t);if(r&&r.Co)return C$().add(r.key);{let e=C$();const r=n.ko.get(t);if(!r)return e;for(const t of r){const r=n.xo.get(t);e=e.unionWith(r.view.To)}return e}}async function dM(e,t){const n=XI(e),r=await fD(n.localStore,t.query,!0),i=t.view.So(r);return n.isPrimaryClient&&sM(n,t.targetId,i.vo),i}async function fM(e){const t=XI(e);return mD(t.localStore).then((e=>cM(t,e)))}async function pM(e,t,n,r){const i=XI(e),o=await function(e,t){const n=XI(e),r=XI(n.In);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.Xt(e,t).next((t=>t?n.Qn.bn(e,t):FR.resolve(null)))))}(i.localStore,t);var s,a;null!==o?("pending"===n?await fN(i.remoteStore):"acknowledged"===n||"rejected"===n?(rM(i,t,r||null),nM(i,t),s=i.localStore,a=t,XI(XI(s).In).te(a)):BI(),await cM(i,o)):VI("SyncEngine","Cannot apply mutation batch with id: "+t)}async function mM(e,t,n){const r=XI(e),i=[],o=[];for(const s of t){let e;const t=r.ko.get(s);if(t&&0!==t.length){e=await hD(r.localStore,SP(t[0]));for(const e of t){const t=r.xo.get(e),n=await dM(r,t);n.snapshot&&o.push(n.snapshot)}}else{const t=await pD(r.localStore,s);e=await hD(r.localStore,t),await GN(r,gM(t),s,!1)}i.push(e)}return r.No.Tr(o),i}function gM(e){return gP(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function vM(e){const t=XI(e);return XI(XI(t.localStore).persistence).pn()}async function yM(e,t,n,r){const i=XI(e);if(i.qo)VI("SyncEngine","Ignoring unexpected query state notification.");else if(i.ko.has(t))switch(n){case"current":case"not-current":{const e=await mD(i.localStore),r=I$.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await cM(i,e,r);break}case"rejected":await dD(i.localStore,t,!0),iM(i,t,r);break;default:BI()}}async function OM(e,t,n){const r=bM(e);if(r.qo){for(const e of t){if(r.ko.has(e)){VI("SyncEngine","Adding an already active target "+e);continue}const t=await pD(r.localStore,e),n=await hD(r.localStore,t);await GN(r,gM(t),n.targetId,!1),eN(r.remoteStore,n)}for(const e of n)r.ko.has(e)&&await dD(r.localStore,e,!1).then((()=>{tN(r.remoteStore,e),iM(r,e)})).catch(RL)}}function bM(e){const t=XI(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ZN.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=hM.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=JN.bind(null,t),t.No.Tr=RN.bind(null,t.eventManager),t.No.jo=LN.bind(null,t.eventManager),t}function wM(e){const t=XI(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=eM.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=tM.bind(null,t),t}class xM{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=zD(e.databaseInfo.databaseId),this.sharedClientState=this.Wo(e),this.persistence=this.Go(e),await this.persistence.start(),this.gcScheduler=this.zo(e),this.localStore=this.Ho(e)}zo(e){return null}Ho(e){return sD(this.persistence,new iD,e.initialUser,this.N)}Go(e){return new SD(TD.Ns,this.N)}Wo(e){return new DD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kM extends xM{constructor(e,t,n){super(),this.Jo=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await async function(e){const t=XI(e);return t.persistence.runTransaction("Synchronize last document change read time","readonly",(e=>function(e){const t=BL(e);let n=hA.min();return t.Kt({index:QR.readTimeIndex,reverse:!0},((e,t,r)=>{t.readTime&&(n=sL(t.readTime)),r.done()})).next((()=>n))}(e))).then((e=>{t.Kn=e}))}(this.localStore),await this.Jo.initialize(this,e),await wM(this.Jo.syncEngine),await fN(this.Jo.remoteStore),await this.persistence.nn((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve())))}Ho(e){return sD(this.persistence,new iD,e.initialUser,this.N)}zo(e){const t=this.persistence.referenceDelegate.garbageCollector;return new NL(t,e.asyncQueue)}Go(e){const t=eD(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?wL.withCacheSize(this.cacheSizeBytes):wL.DEFAULT;return new ZL(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,VD(),qD(),this.N,this.sharedClientState,!!this.forceOwnership)}Wo(e){return new DD}}class SM extends kM{constructor(e,t){super(e,t,!1),this.Jo=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Jo.syncEngine;this.sharedClientState instanceof LD&&(this.sharedClientState.syncEngine={_i:pM.bind(null,t),mi:yM.bind(null,t),gi:OM.bind(null,t),pn:vM.bind(null,t),wi:fM.bind(null,t)},await this.sharedClientState.start()),await this.persistence.nn((async e=>{await async function(e,t){const n=XI(e);if(bM(n),wM(n),!0===t&&!0!==n.qo){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await mM(n,e.toArray());n.qo=!0,await xN(n.remoteStore,!0);for(const r of t)eN(n.remoteStore,r)}else if(!1===t&&!1!==n.qo){const e=[];let t=Promise.resolve();n.ko.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(iM(n,i),dD(n.localStore,i,!0)))),tN(n.remoteStore,i)})),await t,await mM(n,e),function(e){const t=XI(e);t.Fo.forEach(((e,n)=>{tN(t.remoteStore,n)})),t.Mo.us(),t.Fo=new Map,t.Oo=new m$(AA.comparator)}(n),n.qo=!1,await xN(n.remoteStore,!1)}}(this.Jo.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):e||this.gcScheduler.stop())}))}Wo(e){const t=VD();if(!LD.Pt(t))throw new HI(GI.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=eD(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new LD(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class _M{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>KN(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=uM.bind(null,this.syncEngine),await xN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new AN}createDatastore(e){const t=zD(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new FD(r));var r,i;return i=e.credentials,new GD(i,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>KN(this.syncEngine,e,0),o=MD.Pt()?new MD:new ND,new ZD(t,n,r,i,o);var t,n,r,i,o}createSyncEngine(e,t){return function(e,t,n,r,i,o,s){const a=new YN(e,t,n,r,i,o);return s&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=XI(e);VI("RemoteStore","RemoteStore shutting down."),t.Kr.add(5),await JD(t),t.Qr.shutdown(),t.Wr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TM(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Yo(this.observer.next,e)}error(e){this.observer.error?this.Yo(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Xo(){this.muted=!0}Yo(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(e,t){this.Zo=e,this.N=t,this.metadata=new ZI,this.buffer=new Uint8Array,this.ta=new TextDecoder("utf-8"),this.ea().then((e=>{e&&e.ho()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.payload)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Zo.cancel()}async getMetadata(){return this.metadata.promise}async Qo(){return await this.getMetadata(),this.ea()}async ea(){const e=await this.na();if(null===e)return null;const t=this.ta.decode(e),n=Number(t);isNaN(n)&&this.sa(`length string (${t}) is not valid number`);const r=await this.ia(n);return new MN(JSON.parse(r),e.length+n)}ra(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async na(){for(;this.ra()<0&&!(await this.oa()););if(0===this.buffer.length)return null;const e=this.ra();e<0&&this.sa("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async ia(e){for(;this.buffer.length<e;)await this.oa()&&this.sa("Reached the end of bundle when more is expected.");const t=this.ta.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}sa(e){throw this.Zo.cancel(),new Error(`Invalid bundle format: ${e}`)}async oa(){const e=await this.Zo.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new HI(GI.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=XI(e),r=K$(n.N)+"/documents",i={documents:t.map((e=>X$(n.N,e)))},o=await n.Ki("BatchGetDocuments",r,i),s=new Map;o.forEach((e=>{const t=function(e,t){return"found"in t?function(e,t){YI(!!t.found),t.found.name,t.found.updateTime;const n=G$(e,t.found.name),r=U$(t.found.updateTime),i=new BA({mapValue:{fields:t.found.fields}});return XA.newFoundDocument(n,r,i)}(e,t):"missing"in t?function(e,t){YI(!!t.missing),YI(!!t.readTime);const n=G$(e,t.missing),r=U$(t.readTime);return XA.newNoDocument(n,r)}(e,t):BI()}(n.N,e);s.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=s.get(e.toString());YI(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastWriteError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new l$(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=AA.fromPath(t);this.mutations.push(new c$(n,this.precondition(n)))})),await async function(e,t){const n=XI(e),r=K$(n.N)+"/documents",i={writes:t.map((e=>nR(n.N,e)))};await n.Li("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw BI();t=hA.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new HI(GI.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?GP.updateTime(t):GP.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(hA.min()))throw new HI(GI.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return GP.updateTime(t)}return GP.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(e,t,n,r){this.asyncQueue=e,this.datastore=t,this.updateFunction=n,this.deferred=r,this.aa=5,this.rr=new UD(this.asyncQueue,"transaction_retry")}run(){this.aa-=1,this.ca()}ca(){this.rr.Xi((async()=>{const e=new QM(this.datastore),t=this.ua(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.ha(e)}))))})).catch((e=>{this.ha(e)}))}))}ua(e){try{const t=this.updateFunction(e);return!EA(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}ha(e){this.aa>0&&this.la(e)?(this.aa-=1,this.asyncQueue.enqueueAndForget((()=>(this.ca(),Promise.resolve())))):this.deferred.reject(e)}la(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!f$(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{constructor(e,t,n){this.credentials=e,this.asyncQueue=t,this.databaseInfo=n,this.user=MI.UNAUTHENTICATED,this.clientId=sA.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(t,(async e=>{VI("FirestoreClient","Received user=",e.uid),await this.credentialListener(e),this.user=e}))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new HI(GI.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ZI;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(l6){const n=TN(l6,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function PM(e,t){e.asyncQueue.verifyOperationInProgress(),VI("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await aD(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function $M(e,t){e.asyncQueue.verifyOperationInProgress();const n=await RM(e);VI("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>async function(e,t){const n=XI(e);n.asyncQueue.verifyOperationInProgress(),VI("RemoteStore","RemoteStore received new credentials");const r=sN(n);n.Kr.add(3),await JD(n),r&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Kr.delete(3),await KD(n)}(t.remoteStore,e))),e.onlineComponents=t}async function RM(e){return e.offlineComponents||(VI("FirestoreClient","Using default OfflineComponentProvider"),await PM(e,new xM)),e.offlineComponents}async function LM(e){return e.onlineComponents||(VI("FirestoreClient","Using default OnlineComponentProvider"),await $M(e,new _M)),e.onlineComponents}function DM(e){return RM(e).then((e=>e.persistence))}function NM(e){return RM(e).then((e=>e.localStore))}function MM(e){return LM(e).then((e=>e.remoteStore))}function WM(e){return LM(e).then((e=>e.syncEngine))}async function jM(e){const t=await LM(e),n=t.eventManager;return n.onListen=XN.bind(null,t.syncEngine),n.onUnlisten=HN.bind(null,t.syncEngine),n}function FM(e,t,n={}){const r=new ZI;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const o=new CM({next:o=>{t.enqueueAndForget((()=>$N(e,s)));const a=o.docs.has(n);!a&&o.fromCache?i.reject(new HI(GI.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&o.fromCache&&r&&"server"===r.source?i.reject(new HI(GI.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:e=>i.reject(e)}),s=new NN(vP(n.path),o,{includeMetadataChanges:!0,uo:!0});return PN(e,s)}(await jM(e),e.asyncQueue,t,n,r))),r.promise}function VM(e,t,n={}){const r=new ZI;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const o=new CM({next:n=>{t.enqueueAndForget((()=>$N(e,s))),n.fromCache&&"server"===r.source?i.reject(new HI(GI.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),s=new NN(n,o,{includeMetadataChanges:!0,uo:!0});return PN(e,s)}(await jM(e),e.asyncQueue,t,n,r))),r.promise}function qM(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,r=function(e,t){if(e instanceof Uint8Array)return TM(e,t);if(e instanceof ArrayBuffer)return TM(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),new EM(r,t);var r}(n,zD(t));e.asyncQueue.enqueueAndForget((async()=>{!function(e,t,n){const r=XI(e);(async function(e,t,n){try{const i=await t.getMetadata();if(await function(e,t){const n=XI(e),r=U$(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.Je.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,i))return await t.close(),void n._completeWith((r=i,{taskState:"Success",documentsLoaded:r.totalDocuments,bytesLoaded:r.totalBytes,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}));n._updateProgress(FN(i));const o=new jN(i,e.localStore,t.N);let s=await t.Qo();for(;s;){const e=await o.fo(s);e&&n._updateProgress(e),s=await t.Qo()}const a=await o.complete();await cM(e,a.Tn,void 0),await function(e,t){const n=XI(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.Je.saveBundleMetadata(e,t)))}(e.localStore,i),n._completeWith(a.progress)}catch(r){zI("SyncEngine",`Loading bundle failed with ${r}`),n._failWith(r)}var r})(r,t,n).then((()=>{r.sharedClientState.notifyBundleLoaded()}))}(await WM(e),i,r)}))}class zM{constructor(e,t,n,r,i,o,s,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class UM{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof UM&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BM=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YM(e,t,n){if(!n)throw new HI(GI.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function XM(e,t,n,r){if(!0===t&&!0===r)throw new HI(GI.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function GM(e){if(!AA.isDocumentKey(e))throw new HI(GI.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function HM(e){if(AA.isDocumentKey(e))throw new HI(GI.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ZM(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){if(e.constructor){const t=/function\s+([^\s(]+)\s*\(/.exec(e.constructor.toString());if(t&&t.length>1)return t[1]}return null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":BI()}function KM(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new HI(GI.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ZM(e);throw new HI(GI.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function JM(e,t){if(t<=0)throw new HI(GI.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eW{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new HI(GI.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new HI(GI.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,XM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tW{constructor(e,t){this._credentials=t,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new eW({}),this._settingsFrozen=!1,e instanceof UM?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new HI(GI.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new UM(e.options.projectId)}(e))}get app(){if(!this._app)throw new HI(GI.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new HI(GI.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new eW(e),void 0!==e.credentials&&(this._credentials=function(e){if(!e)return new JI;switch(e.type){case"gapi":const t=e.client;return YI(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new rA(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new HI(GI.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=BM.get(e);t&&(VI("ComponentProvider","Removing Datastore"),BM.delete(e),t.terminate())}(this),Promise.resolve()}}function nW(e,t,n,r={}){var i;const o=(e=KM(e,tW))._getSettings();if("firestore.googleapis.com"!==o.host&&o.host!==t&&zI("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},o),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=MI.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var o=Vb({iss:"https://securetoken.google.com/"+n,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Zb(JSON.stringify({alg:"none",type:"JWT"})),Zb(JSON.stringify(o)),""].join(".")}(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new HI(GI.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new MI(o)}e._credentials=new eA(new KI(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rW{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oW(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rW(this.firestore,e,this._key)}}class iW{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new iW(this.firestore,e,this._query)}}class oW extends iW{constructor(e,t,n){super(e,t,vP(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rW(this.firestore,null,new AA(e))}withConverter(e){return new oW(this.firestore,e,this._path)}}function sW(e,t,...n){if(e=bw(e),YM("collection","path",t),e instanceof tW){const r=gA.fromString(t,...n);return HM(r),new oW(e,null,r)}{if(!(e instanceof rW||e instanceof oW))throw new HI(GI.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=gA.fromString(e.path,...n).child(gA.fromString(t));return HM(r),new oW(e.firestore,null,r)}}function aW(e,t,...n){if(e=bw(e),1===arguments.length&&(t=sA.I()),YM("doc","path",t),e instanceof tW){const r=gA.fromString(t,...n);return GM(r),new rW(e,null,new AA(r))}{if(!(e instanceof rW||e instanceof oW))throw new HI(GI.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(gA.fromString(t,...n));return GM(r),new rW(e.firestore,e instanceof oW?e.converter:null,new AA(r))}}function lW(e,t){return e=bw(e),t=bw(t),(e instanceof rW||e instanceof oW)&&(t instanceof rW||t instanceof oW)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function cW(e,t){return e=bw(e),t=bw(t),e instanceof iW&&t instanceof iW&&e.firestore===t.firestore&&TP(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class uW{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new UD(this,"async_queue_retry"),this.Ea=()=>{const e=qD();e&&VI("AsyncQueue","Visibility state changed to "+e.visibilityState),this.rr.tr()};const e=qD();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ta(),this.Ia(e)}enterRestrictedMode(e){if(!this.wa){this.wa=!0,this.ya=e||!1;const t=qD();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ea)}}enqueue(e){if(this.Ta(),this.wa)return new Promise((()=>{}));const t=new ZI;return this.Ia((()=>this.wa&&this.ya?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.da.push(e),this.Aa())))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(xY){if(!BR(xY))throw xY;VI("AsyncQueue","Operation failed with retryable error: "+xY)}this.da.length>0&&this.rr.Xi((()=>this.Aa()))}}Ia(e){const t=this.fa.then((()=>(this.ga=!0,e().catch((e=>{throw this.ma=e,this.ga=!1,qI("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.ga=!1,e))))));return this.fa=t,t}enqueueAfterDelay(e,t,n){this.Ta(),this.pa.indexOf(e)>-1&&(t=0);const r=_N.createAndSchedule(this,e,t,n,(e=>this.Ra(e)));return this._a.push(r),r}Ta(){this.ma&&BI()}verifyOperationInProgress(){}async Pa(){let e;do{e=this.fa,await e}while(e!==this.fa)}ba(e){for(const t of this._a)if(t.timerId===e)return!0;return!1}va(e){return this.Pa().then((()=>{this._a.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this._a)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Pa()}))}Va(e){this.pa.push(e)}Ra(e){const t=this._a.indexOf(e);this._a.splice(t,1)}}function hW(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of["next","error","complete"])if(r in n&&"function"==typeof n[r])return!0;return!1}(e)}class dW{constructor(){this._progressObserver={},this._taskCompletionResolver=new ZI,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fW extends tW{constructor(e,t){super(e,t),this.type="firestore",this._queue=new uW,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||mW(this),this._firestoreClient.terminate()}}function pW(e){return e._firestoreClient||mW(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function mW(e){var t;const n=e._freezeSettings(),r=(i=e._databaseId,o=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",s=e._persistenceKey,new zM(i,o,s,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var i,o,s,a;e._firestoreClient=new AM(e._credentials,e._queue,r)}function gW(e,t,n){const r=new ZI;return e.asyncQueue.enqueue((async()=>{try{await PM(e,n),await $M(e,t),r.resolve()}catch(o){if(!("FirebaseError"===(i=o).name?i.code===GI.FAILED_PRECONDITION||i.code===GI.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&i instanceof DOMException)||22===i.code||20===i.code||11===i.code))throw o;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+o),r.reject(o)}var i})).then((()=>r.promise))}function vW(e){return function(e){const t=new ZI;return e.asyncQueue.enqueueAndForget((async()=>async function(t,n){const r=XI(t);sN(r.remoteStore)||VI("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=XI(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.In.getHighestUnacknowledgedBatchId(e)))}(r.localStore);if(-1===e)return void n.resolve();const t=r.Bo.get(e)||[];t.push(n),r.Bo.set(e,t)}catch(e){const r=TN(e,"Initialization of waitForPendingWrites() operation failed");n.reject(r)}}(await WM(e),t))),t.promise}(pW(e=KM(e,fW)))}function yW(e){return function(e){return e.asyncQueue.enqueue((async()=>{const t=await DM(e),n=await MM(e);return t.setNetworkEnabled(!0),function(e){const t=XI(e);return t.Kr.delete(0),KD(t)}(n)}))}(pW(e=KM(e,fW)))}function OW(e){return function(e){return e.asyncQueue.enqueue((async()=>{const t=await DM(e),n=await MM(e);return t.setNetworkEnabled(!1),async function(e){const t=XI(e);t.Kr.add(0),await JD(t),t.Wr.set("Offline")}(n)}))}(pW(e=KM(e,fW)))}function bW(e,t){return function(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=XI(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.Je.getNamedQuery(e,t)))}(await NM(e),t)))}(pW(e=KM(e,fW)),t).then((t=>t?new iW(e,null,t.query):null))}function wW(e){if(e._initialized||e._terminated)throw new HI(GI.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xW{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new HI(GI.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yA(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kW{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kW(bA.fromBase64String(e))}catch(t){throw new HI(GI.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new kW(bA.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SW{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _W{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new HI(GI.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new HI(GI.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return aA(this._lat,e._lat)||aA(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TW=/^__.*__$/;class CW{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new i$(e,this.data,this.fieldMask,t,this.fieldTransforms):new r$(e,this.data,t,this.fieldTransforms)}}class EW{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new i$(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function QW(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw BI()}}class IW{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.N=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Sa(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(e){return new IW(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Ca({path:n,xa:!1});return r.ka(e),r}$a(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Ca({path:n,xa:!1});return r.Sa(),r}Oa(e){return this.Ca({path:void 0,xa:!0})}Fa(e){return HW(e,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Sa(){if(this.path)for(let e=0;e<this.path.length;e++)this.ka(this.path.get(e))}ka(e){if(0===e.length)throw this.Fa("Document fields must not be empty");if(QW(this.Da)&&TW.test(e))throw this.Fa('Document fields cannot begin and end with "__"')}}class AW{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.N=n||zD(e)}Ba(e,t,n,r=!1){return new IW({Da:e,methodName:t,La:n,path:yA.emptyPath(),xa:!1,Ma:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function PW(e){const t=e._freezeSettings(),n=zD(e._databaseId);return new AW(e._databaseId,!!t.ignoreUndefinedProperties,n)}function $W(e,t,n,r,i,o={}){const s=e.Ba(o.merge||o.mergeFields?2:0,t,n,i);BW("Data must be an object, but it was:",s,r);const a=zW(r,s);let l,c;if(o.merge)l=new OA(s.fieldMask),c=s.fieldTransforms;else if(o.mergeFields){const e=[];for(const r of o.mergeFields){const i=YW(t,r,n);if(!s.contains(i))throw new HI(GI.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);ZW(e,i)||e.push(i)}l=new OA(e),c=s.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,c=s.fieldTransforms;return new CW(new BA(a),l,c)}class RW extends SW{_toFieldTransform(e){if(2!==e.Da)throw 1===e.Da?e.Fa(`${this._methodName}() can only appear at the top level of your update data`):e.Fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof RW}}function LW(e,t,n){return new IW({Da:3,La:t.settings.La,methodName:e._methodName,xa:n},t.databaseId,t.N,t.ignoreUndefinedProperties)}class DW extends SW{_toFieldTransform(e){return new YP(e.path,new WP)}isEqual(e){return e instanceof DW}}class NW extends SW{constructor(e,t){super(e),this.Ua=t}_toFieldTransform(e){const t=LW(this,e,!0),n=this.Ua.map((e=>qW(e,t))),r=new jP(n);return new YP(e.path,r)}isEqual(e){return this===e}}class MW extends SW{constructor(e,t){super(e),this.Ua=t}_toFieldTransform(e){const t=LW(this,e,!0),n=this.Ua.map((e=>qW(e,t))),r=new VP(n);return new YP(e.path,r)}isEqual(e){return this===e}}class WW extends SW{constructor(e,t){super(e),this.qa=t}_toFieldTransform(e){const t=new zP(e.N,RP(e.N,this.qa));return new YP(e.path,t)}isEqual(e){return this===e}}function jW(e,t,n,r){const i=e.Ba(1,t,n);BW("Data must be an object, but it was:",i,r);const o=[],s=BA.empty();fA(r,((e,r)=>{const a=GW(t,e,n);r=bw(r);const l=i.$a(a);if(r instanceof RW)o.push(a);else{const e=qW(r,l);null!=e&&(o.push(a),s.set(a,e))}}));const a=new OA(o);return new EW(s,a,i.fieldTransforms)}function FW(e,t,n,r,i,o){const s=e.Ba(1,t,n),a=[YW(t,r,n)],l=[i];if(o.length%2!=0)throw new HI(GI.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<o.length;d+=2)a.push(YW(t,o[d])),l.push(o[d+1]);const c=[],u=BA.empty();for(let d=a.length-1;d>=0;--d)if(!ZW(c,a[d])){const e=a[d];let t=l[d];t=bw(t);const n=s.$a(e);if(t instanceof RW)c.push(e);else{const r=qW(t,n);null!=r&&(c.push(e),u.set(e,r))}}const h=new OA(c);return new EW(u,h,s.fieldTransforms)}function VW(e,t,n,r=!1){return qW(n,e.Ba(r?4:3,t))}function qW(e,t){if(UW(e=bw(e)))return BW("Unsupported field value:",t,e),zW(e,t);if(e instanceof SW)return function(e,t){if(!QW(t.Da))throw t.Fa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Fa(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.xa&&4!==t.Da)throw t.Fa("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=qW(i,t.Oa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=bw(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return RP(t.N,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=uA.fromDate(e);return{timestampValue:V$(t.N,n)}}if(e instanceof uA){const n=new uA(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:V$(t.N,n)}}if(e instanceof _W)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof kW)return{bytesValue:q$(t.N,e._byteString)};if(e instanceof rW){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:B$(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Fa(`Unsupported field value: ${ZM(e)}`)}(e,t)}function zW(e,t){const n={};return pA(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):fA(e,((e,r)=>{const i=qW(r,t.Na(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function UW(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof uA||e instanceof _W||e instanceof kW||e instanceof rW||e instanceof SW)}function BW(e,t,n){if(!UW(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=ZM(n);throw"an object"===r?t.Fa(e+" a custom object"):t.Fa(e+" "+r)}var r}function YW(e,t,n){if((t=bw(t))instanceof xW)return t._internalPath;if("string"==typeof t)return GW(e,t);throw HW("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const XW=new RegExp("[~\\*/\\[\\]]");function GW(e,t,n){if(t.search(XW)>=0)throw HW(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new xW(...t.split("."))._internalPath}catch(r){throw HW(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function HW(e,t,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new HI(GI.INVALID_ARGUMENT,a+e+l)}function ZW(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KW{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new rW(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new JW(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ej("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class JW extends KW{data(){return super.data()}}function ej(e,t){return"string"==typeof t?GW(e,t):t instanceof xW?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tj{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nj extends KW{constructor(e,t,n,r,i,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new rj(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ej("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class rj extends nj{data(e={}){return super.data(e)}}class ij{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new tj(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new rj(this._firestore,this._userDataWriter,n.key,n,new tj(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new HI(GI.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new rj(e._firestore,e._userDataWriter,n.doc.key,n.doc,new tj(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new rj(e._firestore,e._userDataWriter,t.doc.key,t.doc,new tj(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,o=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),o=n.indexOf(t.doc.key)),{type:oj(t.type),doc:r,oldIndex:i,newIndex:o}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function oj(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return BI()}}function sj(e,t){return e instanceof nj&&t instanceof nj?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof ij&&t instanceof ij&&e._firestore===t._firestore&&cW(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aj(e){if(OP(e)&&0===e.explicitOrderBy.length)throw new HI(GI.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lj{}function cj(e,...t){for(const n of t)e=n._apply(e);return e}class uj extends lj{constructor(e,t,n){super(),this.Ka=e,this.ja=t,this.Qa=n,this.type="where"}_apply(e){const t=PW(e.firestore),n=function(e,t,n,r,i,o,s){let a;if(i.isKeyField()){if("array-contains"===o||"array-contains-any"===o)throw new HI(GI.INVALID_ARGUMENT,`Invalid Query. You can't perform '${o}' queries on FieldPath.documentId().`);if("in"===o||"not-in"===o){vj(s,o);const t=[];for(const n of s)t.push(gj(r,e,n));a={arrayValue:{values:t}}}else a=gj(r,e,s)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||vj(s,o),a=VW(n,"where",s,"in"===o||"not-in"===o);const l=eP.create(i,o,a);return function(e,t){if(t.v()){const n=wP(e);if(null!==n&&!n.isEqual(t.field))throw new HI(GI.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=bP(e);null!==r&&yj(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new HI(GI.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new HI(GI.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,l),l}(e._query,0,t,e.firestore._databaseId,this.Ka,this.ja,this.Qa);return new iW(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new mP(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}class hj extends lj{constructor(e,t){super(),this.Ka=e,this.Wa=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new HI(GI.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new HI(GI.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new hP(t,n);return function(e,t){if(null===bP(e)){const n=wP(e);null!==n&&yj(e,n,t.field)}}(e,r),r}(e._query,this.Ka,this.Wa);return new iW(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new mP(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}class dj extends lj{constructor(e,t,n){super(),this.type=e,this.Ga=t,this.za=n}_apply(e){return new iW(e.firestore,e.converter,_P(e._query,this.Ga,this.za))}}class fj extends lj{constructor(e,t,n){super(),this.type=e,this.Ha=t,this.Ja=n}_apply(e){const t=mj(e,this.type,this.Ha,this.Ja);return new iW(e.firestore,e.converter,(n=e._query,r=t,new mP(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,r,n.endAt)));var n,r}}class pj extends lj{constructor(e,t,n){super(),this.type=e,this.Ha=t,this.Ja=n}_apply(e){const t=mj(e,this.type,this.Ha,this.Ja);return new iW(e.firestore,e.converter,(n=e._query,r=t,new mP(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,n.startAt,r)));var n,r}}function mj(e,t,n,r){if(n[0]=bw(n[0]),n[0]instanceof KW)return function(e,t,n,r,i){if(!r)throw new HI(GI.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const o=[];for(const s of kP(e))if(s.field.isKeyField())o.push(WA(t,r.key));else{const e=r.data.field(s.field);if(_A(e))throw new HI(GI.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+s.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=s.field.canonicalString();throw new HI(GI.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}o.push(e)}return new cP(o,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=PW(e.firestore);return function(e,t,n,r,i,o){const s=e.explicitOrderBy;if(i.length>s.length)throw new HI(GI.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let l=0;l<i.length;l++){const o=i[l];if(s[l].field.isKeyField()){if("string"!=typeof o)throw new HI(GI.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof o}`);if(!xP(e)&&-1!==o.indexOf("/"))throw new HI(GI.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${r}() must be a plain document ID, but '${o}' contains a slash.`);const n=e.path.child(gA.fromString(o));if(!AA.isDocumentKey(n))throw new HI(GI.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new AA(n);a.push(WA(t,i))}else{const e=VW(n,r,o);a.push(e)}}return new cP(a,o)}(e._query,e.firestore._databaseId,i,t,n,r)}}function gj(e,t,n){if("string"==typeof(n=bw(n))){if(""===n)throw new HI(GI.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!xP(t)&&-1!==n.indexOf("/"))throw new HI(GI.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(gA.fromString(n));if(!AA.isDocumentKey(r))throw new HI(GI.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return WA(e,new AA(r))}if(n instanceof rW)return WA(e,n._key);throw new HI(GI.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${ZM(n)}.`)}function vj(e,t){if(!Array.isArray(e)||0===e.length)throw new HI(GI.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new HI(GI.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function yj(e,t,n){if(!n.isEqual(t))throw new HI(GI.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oj{convertValue(e,t="none"){switch(PA(e)){case 0:return null;case 1:return e.booleanValue;case 2:return kA(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(SA(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw BI()}}convertObject(e,t){const n={};return fA(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new _W(kA(e.latitude),kA(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=TA(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(CA(e));default:return null}}convertTimestamp(e){const t=xA(e);return new uA(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=gA.fromString(e);YI(vR(n));const r=new UM(n.get(1),n.get(3)),i=new AA(n.popFirst(5));return r.isEqual(t)||qI(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bj(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class wj extends Oj{constructor(e){super(),this.firestore=e}convertBytes(e){return new kW(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new rW(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xj{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=PW(e)}set(e,t,n){this._verifyNotCommitted();const r=kj(e,this._firestore),i=bj(r.converter,t,n),o=$W(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(o.toMutation(r._key,GP.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=kj(e,this._firestore);let o;return o="string"==typeof(t=bw(t))||t instanceof xW?FW(this._dataReader,"WriteBatch.update",i._key,t,n,r):jW(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,GP.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=kj(e,this._firestore);return this._mutations=this._mutations.concat(new l$(t._key,GP.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new HI(GI.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function kj(e,t){if((e=bw(e)).firestore!==t)throw new HI(GI.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sj extends Oj{constructor(e){super(),this.firestore=e}convertBytes(e){return new kW(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new rW(this.firestore,null,t)}}function _j(e){e=KM(e,rW);const t=KM(e.firestore,fW),n=pW(t),r=new Sj(t);return function(e,t){const n=new ZI;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=XI(e);return n.persistence.runTransaction("read document","readonly",(e=>n.Qn.An(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new HI(GI.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(r){const e=TN(r,`Failed to get document '${t} from cache`);n.reject(e)}}(await NM(e),t,n))),n.promise}(n,e._key).then((n=>new nj(t,r,e._key,n,new tj(null!==n&&n.hasLocalMutations,!0),e.converter)))}function Tj(e){e=KM(e,iW);const t=KM(e.firestore,fW),n=pW(t),r=new Sj(t);return function(e,t){const n=new ZI;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await fD(e,t,!0),i=new zN(t,r.Gn),o=i.Io(r.documents),s=i.applyChanges(o,!1);n.resolve(s.snapshot)}catch(r){const e=TN(r,`Failed to execute query '${t} against cache`);n.reject(e)}}(await NM(e),t,n))),n.promise}(n,e._query).then((n=>new ij(t,r,e,n)))}function Cj(e,t,n){e=KM(e,rW);const r=KM(e.firestore,fW),i=bj(e.converter,t,n);return Aj(r,[$W(PW(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,GP.none())])}function Ej(e,t,n,...r){e=KM(e,rW);const i=KM(e.firestore,fW),o=PW(i);let s;return s="string"==typeof(t=bw(t))||t instanceof xW?FW(o,"updateDoc",e._key,t,n,r):jW(o,"updateDoc",e._key,t),Aj(i,[s.toMutation(e._key,GP.exists(!0))])}function Qj(e,...t){var n,r,i;e=bw(e);let o={includeMetadataChanges:!1},s=0;"object"!=typeof t[s]||hW(t[s])||(o=t[s],s++);const a={includeMetadataChanges:o.includeMetadataChanges};if(hW(t[s])){const e=t[s];t[s]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[s+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[s+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let l,c,u;if(e instanceof rW)c=KM(e.firestore,fW),u=vP(e._key.path),l={next:n=>{t[s]&&t[s](Pj(c,e,n))},error:t[s+1],complete:t[s+2]};else{const n=KM(e,iW);c=KM(n.firestore,fW),u=n._query;const r=new Sj(c);l={next:e=>{t[s]&&t[s](new ij(c,r,n,e))},error:t[s+1],complete:t[s+2]},aj(e._query)}return function(e,t,n,r){const i=new CM(r),o=new NN(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>PN(await jM(e),o))),()=>{i.Xo(),e.asyncQueue.enqueueAndForget((async()=>$N(await jM(e),o)))}}(pW(c),u,a,l)}function Ij(e,t){return function(e,t){const n=new CM(t);return e.asyncQueue.enqueueAndForget((async()=>{return t=await jM(e),r=n,XI(t).Zr.add(r),void r.next();var t,r})),()=>{n.Xo(),e.asyncQueue.enqueueAndForget((async()=>{return t=await jM(e),r=n,void XI(t).Zr.delete(r);var t,r}))}}(pW(e=KM(e,fW)),hW(t)?t:{next:t})}function Aj(e,t){return function(e,t){const n=new ZI;return e.asyncQueue.enqueueAndForget((async()=>async function(t,n,r){const i=wM(t);try{const e=await function(e,t){const n=XI(e),r=uA.now(),i=t.reduce(((e,t)=>e.add(t.key)),C$());let o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.Qn.bn(e,i).next((i=>{o=i;const s=[];for(const e of t){const t=e$(e,o.get(e.key));null!=t&&s.push(new i$(e.key,t,YA(t.value.mapValue),GP.exists(!0)))}return n.In.addMutationBatch(e,r,s,t)})))).then((e=>(e.applyToLocalDocumentSet(o),{batchId:e.batchId,changes:o})))}(i.localStore,n);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Lo[e.currentUser.toKey()];r||(r=new m$(aA)),r=r.insert(t,n),e.Lo[e.currentUser.toKey()]=r}(i,e.batchId,r),await cM(i,e.changes),await fN(i.remoteStore)}catch(e){const n=TN(e,"Failed to persist write");r.reject(n)}}(await WM(e),t,n))),n.promise}(pW(e),t)}function Pj(e,t,n){const r=n.docs.get(t._key),i=new Sj(e);return new nj(e,i,t._key,r,new tj(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $j extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=PW(e)}get(e){const t=kj(e,this._firestore),n=new wj(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return BI();const r=e[0];if(r.isFoundDocument())return new KW(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new KW(this._firestore,n,t._key,null,t.converter);throw BI()}))}set(e,t,n){const r=kj(e,this._firestore),i=bj(r.converter,t,n),o=$W(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,o),this}update(e,t,n,...r){const i=kj(e,this._firestore);let o;return o="string"==typeof(t=bw(t))||t instanceof xW?FW(this._dataReader,"Transaction.update",i._key,t,n,r):jW(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=kj(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=kj(e,this._firestore),n=new Sj(this._firestore);return super.get(e).then((e=>new nj(this._firestore,n,t._key,e._document,new tj(!1,!1),t.converter)))}}function Rj(e,t){return function(e,t){const n=new ZI;return e.asyncQueue.enqueueAndForget((async()=>{const r=await(i=e,LM(i).then((e=>e.datastore)));var i;new IM(e.asyncQueue,r,t,n).run()})),n.promise}(pW(e),(n=>t(new $j(e,n))))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */WI="9.0.0",Fw(new ww("firestore",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=new fW(n,new tA(e.getProvider("auth-internal")));return t=Object.assign({useFetchStreams:!0},t),r._setSettings(t),r}),"PUBLIC")),Yw("@firebase/firestore","3.0.0",undefined);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lj(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new HI("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dj(){if("undefined"==typeof Uint8Array)throw new HI("unimplemented","Uint8Arrays are not available in this environment.")}function Nj(){if("undefined"==typeof atob)throw new HI("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Mj{constructor(e){this._delegate=e}static fromBase64String(e){return Nj(),new Mj(kW.fromBase64String(e))}static fromUint8Array(e){return Dj(),new Mj(kW.fromUint8Array(e))}toBase64(){return Nj(),this._delegate.toBase64()}toUint8Array(){return Dj(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wj(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class jj{enableIndexedDbPersistence(e,t){return function(e,t){wW(e=KM(e,fW));const n=pW(e),r=e._freezeSettings(),i=new _M;return gW(n,i,new kM(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return function(e){wW(e=KM(e,fW));const t=pW(e),n=e._freezeSettings(),r=new _M;return gW(t,r,new SM(r,n.cacheSizeBytes))}(e._delegate)}clearIndexedDbPersistence(e){return function(e){if(e._initialized&&!e._terminated)throw new HI(GI.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new ZI;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!qR.Pt())return Promise.resolve();const t=e+"main";await qR.delete(t)}(eD(e._databaseId,e._persistenceKey)),t.resolve()}catch(n){t.reject(n)}})),t.promise}(e._delegate)}}class Fj{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof UM||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||zI("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&delete(e=Object.assign(Object.assign({},t),e)).merge,this._delegate._setSettings(e)}useEmulator(e,t,n={}){nW(this._delegate,e,t,n)}enableNetwork(){return yW(this._delegate)}disableNetwork(){return OW(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,XM("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return vW(this._delegate)}onSnapshotsInSync(e){return Ij(this._delegate,e)}get app(){if(!this._appCompat)throw new HI("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new tF(this,sW(this._delegate,e))}catch(l6){throw Yj(l6,"collection()","Firestore.collection()")}}doc(e){try{return new Bj(this,aW(this._delegate,e))}catch(l6){throw Yj(l6,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Kj(this,function(e,t){if(e=KM(e,tW),YM("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new HI(GI.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new iW(e,null,(n=t,new mP(gA.emptyPath(),n)));var n}(this._delegate,e))}catch(l6){throw Yj(l6,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Rj(this._delegate,(t=>e(new qj(this,t))))}batch(){return pW(this._delegate),new zj(new xj(this._delegate,(e=>Aj(this._delegate,e))))}loadBundle(e){return function(e,t){const n=pW(e=KM(e,fW)),r=new dW;return qM(n,e._databaseId,t,r),r}(this._delegate,e)}namedQuery(e){return bW(this._delegate,e).then((e=>e?new Kj(this,e):null))}}class Vj extends Oj{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mj(new kW(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Bj.forKey(t,this.firestore,null)}}class qj{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Vj(e)}get(e){const t=nF(e);return this._delegate.get(t).then((e=>new Hj(this._firestore,new nj(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=nF(e);return n?(Lj("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=nF(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=nF(e);return this._delegate.delete(t),this}}class zj{constructor(e){this._delegate=e}set(e,t,n){const r=nF(e);return n?(Lj("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=nF(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=nF(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Uj{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new rj(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Zj(this._firestore,n),null!=t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=Uj.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new Uj(e,new Vj(e),t),r.set(t,i)),i}}Uj.INSTANCES=new WeakMap;class Bj{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Vj(e)}static forPath(e,t,n){if(e.length%2!=0)throw new HI("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Bj(t,new rW(t._delegate,n,new AA(e)))}static forKey(e,t,n){return new Bj(t,new rW(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new tF(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new tF(this.firestore,sW(this._delegate,e))}catch(l6){throw Yj(l6,"collection()","DocumentReference.collection()")}}isEqual(e){return(e=bw(e))instanceof rW&&lW(this._delegate,e)}set(e,t){t=Lj("DocumentReference.set",t);try{return t?Cj(this._delegate,e,t):Cj(this._delegate,e)}catch(l6){throw Yj(l6,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?Ej(this._delegate,e):Ej(this._delegate,e,t,...n)}catch(l6){throw Yj(l6,"updateDoc()","DocumentReference.update()")}}delete(){return Aj(KM((e=this._delegate).firestore,fW),[new l$(e._key,GP.none())]);var e}onSnapshot(...e){const t=Xj(e),n=Gj(e,(e=>new Hj(this.firestore,new nj(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return Qj(this._delegate,t,n)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?_j(this._delegate):"server"===(null==e?void 0:e.source)?function(e){e=KM(e,rW);const t=KM(e.firestore,fW);return FM(pW(t),e._key,{source:"server"}).then((n=>Pj(t,e,n)))}(this._delegate):function(e){e=KM(e,rW);const t=KM(e.firestore,fW);return FM(pW(t),e._key).then((n=>Pj(t,e,n)))}(this._delegate),t.then((e=>new Hj(this.firestore,new nj(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new Bj(this.firestore,e?this._delegate.withConverter(Uj.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Yj(e,t,n){return e.message=e.message.replace(t,n),e}function Xj(e){for(const t of e)if("object"==typeof t&&!Wj(t))return t;return{}}function Gj(e,t){var n,r;let i;return i=Wj(e[0])?e[0]:Wj(e[1])?e[1]:"function"==typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class Hj{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Bj(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return sj(this._delegate,e._delegate)}}class Zj extends Hj{data(e){const t=this._delegate.data(e);return void 0!==t||BI(),t}}class Kj{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Vj(e)}where(e,t,n){try{return new Kj(this.firestore,cj(this._delegate,function(e,t,n){const r=t,i=ej("where",e);return new uj(i,r,n)}(e,t,n)))}catch(l6){throw Yj(l6,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Kj(this.firestore,cj(this._delegate,function(e,t="asc"){const n=t,r=ej("orderBy",e);return new hj(r,n)}(e,t)))}catch(l6){throw Yj(l6,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Kj(this.firestore,cj(this._delegate,(JM("limit",t=e),new dj("limit",t,"F"))))}catch(l6){throw Yj(l6,"limit()","Query.limit()")}var t}limitToLast(e){try{return new Kj(this.firestore,cj(this._delegate,(JM("limitToLast",t=e),new dj("limitToLast",t,"L"))))}catch(l6){throw Yj(l6,"limitToLast()","Query.limitToLast()")}var t}startAt(...e){try{return new Kj(this.firestore,cj(this._delegate,function(...e){return new fj("startAt",e,!0)}(...e)))}catch(l6){throw Yj(l6,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Kj(this.firestore,cj(this._delegate,function(...e){return new fj("startAfter",e,!1)}(...e)))}catch(l6){throw Yj(l6,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Kj(this.firestore,cj(this._delegate,function(...e){return new pj("endBefore",e,!0)}(...e)))}catch(l6){throw Yj(l6,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Kj(this.firestore,cj(this._delegate,function(...e){return new pj("endAt",e,!1)}(...e)))}catch(l6){throw Yj(l6,"endAt()","Query.endAt()")}}isEqual(e){return cW(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?Tj(this._delegate):"server"===(null==e?void 0:e.source)?function(e){e=KM(e,iW);const t=KM(e.firestore,fW),n=pW(t),r=new Sj(t);return VM(n,e._query,{source:"server"}).then((n=>new ij(t,r,e,n)))}(this._delegate):function(e){e=KM(e,iW);const t=KM(e.firestore,fW),n=pW(t),r=new Sj(t);return aj(e._query),VM(n,e._query).then((n=>new ij(t,r,e,n)))}(this._delegate),t.then((e=>new eF(this.firestore,new ij(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=Xj(e),n=Gj(e,(e=>new eF(this.firestore,new ij(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return Qj(this._delegate,t,n)}withConverter(e){return new Kj(this.firestore,e?this._delegate.withConverter(Uj.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Jj{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Zj(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class eF{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Kj(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new Zj(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new Jj(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new Zj(this._firestore,n))}))}isEqual(e){return sj(this._delegate,e._delegate)}}class tF extends Kj{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Bj(this.firestore,e):null}doc(e){try{return new Bj(this.firestore,void 0===e?aW(this._delegate):aW(this._delegate,e))}catch(l6){throw Yj(l6,"doc()","CollectionReference.doc()")}}add(e){return function(e,t){const n=KM(e.firestore,fW),r=aW(e),i=bj(e.converter,t);return Aj(n,[$W(PW(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,GP.exists(!1))]).then((()=>r))}(this._delegate,e).then((e=>new Bj(this.firestore,e)))}isEqual(e){return lW(this._delegate,e._delegate)}withConverter(e){return new tF(this.firestore,e?this._delegate.withConverter(Uj.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function nF(e){return KM(e,rW)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rF{constructor(...e){this._delegate=new xW(...e)}static documentId(){return new rF(yA.keyField().canonicalString())}isEqual(e){return(e=bw(e))instanceof xW&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e){this._delegate=e}static serverTimestamp(){const e=new DW("serverTimestamp");return e._methodName="FieldValue.serverTimestamp",new iF(e)}static delete(){const e=new RW("deleteField");return e._methodName="FieldValue.delete",new iF(e)}static arrayUnion(...e){const t=function(...e){return new NW("arrayUnion",e)}(...e);return t._methodName="FieldValue.arrayUnion",new iF(t)}static arrayRemove(...e){const t=function(...e){return new MW("arrayRemove",e)}(...e);return t._methodName="FieldValue.arrayRemove",new iF(t)}static increment(e){const t=new WW("increment",e);return t._methodName="FieldValue.increment",new iF(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oF={Firestore:Fj,GeoPoint:_W,Timestamp:uA,Blob:Mj,Transaction:qj,WriteBatch:zj,DocumentReference:Bj,DocumentSnapshot:Hj,Query:Kj,QueryDocumentSnapshot:Zj,QuerySnapshot:eF,CollectionReference:tF,FieldPath:rF,FieldValue:iF,setLogLevel:function(e){var t;t=e,jI.setLogLevel(t)},CACHE_SIZE_UNLIMITED:-1};
/*!
  * vue-router v3.5.2
  * (c) 2021 Evan You
  * @license MIT
  */
function sF(e,t){for(var n in t)e[n]=t[n];return e}!
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){var t;t=(e,t)=>new Fj(e,t,new jj),e.INTERNAL.registerComponent(new ww("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},oF))),e.registerVersion("@firebase/firestore-compat","0.1.0")}(nx);var aF=/[!'()*]/g,lF=function(e){return"%"+e.charCodeAt(0).toString(16)},cF=/%2C/g,uF=function(e){return encodeURIComponent(e).replace(aF,lF).replace(cF,",")};function hF(e){try{return decodeURIComponent(e)}catch(t){}return e}var dF=function(e){return null==e||"object"==typeof e?e:String(e)};function fF(e){var t={};return(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var n=e.replace(/\+/g," ").split("="),r=hF(n.shift()),i=n.length>0?hF(n.join("=")):null;void 0===t[r]?t[r]=i:Array.isArray(t[r])?t[r].push(i):t[r]=[t[r],i]})),t):t}function pF(e){var t=e?Object.keys(e).map((function(t){var n=e[t];if(void 0===n)return"";if(null===n)return uF(t);if(Array.isArray(n)){var r=[];return n.forEach((function(e){void 0!==e&&(null===e?r.push(uF(t)):r.push(uF(t)+"="+uF(e)))})),r.join("&")}return uF(t)+"="+uF(n)})).filter((function(e){return e.length>0})).join("&"):null;return t?"?"+t:""}var mF=/\/?$/;function gF(e,t,n,r){var i=r&&r.options.stringifyQuery,o=t.query||{};try{o=vF(o)}catch(l6){}var s={name:t.name||e&&e.name,meta:e&&e.meta||{},path:t.path||"/",hash:t.hash||"",query:o,params:t.params||{},fullPath:bF(t,i),matched:e?OF(e):[]};return n&&(s.redirectedFrom=bF(n,i)),Object.freeze(s)}function vF(e){if(Array.isArray(e))return e.map(vF);if(e&&"object"==typeof e){var t={};for(var n in e)t[n]=vF(e[n]);return t}return e}var yF=gF(null,{path:"/"});function OF(e){for(var t=[];e;)t.unshift(e),e=e.parent;return t}function bF(e,t){var n=e.path,r=e.query;void 0===r&&(r={});var i=e.hash;return void 0===i&&(i=""),(n||"/")+(t||pF)(r)+i}function wF(e,t,n){return t===yF?e===t:!!t&&(e.path&&t.path?e.path.replace(mF,"")===t.path.replace(mF,"")&&(n||e.hash===t.hash&&xF(e.query,t.query)):!(!e.name||!t.name)&&(e.name===t.name&&(n||e.hash===t.hash&&xF(e.query,t.query)&&xF(e.params,t.params))))}function xF(e,t){if(void 0===e&&(e={}),void 0===t&&(t={}),!e||!t)return e===t;var n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((function(n,i){var o=e[n];if(r[i]!==n)return!1;var s=t[n];return null==o||null==s?o===s:"object"==typeof o&&"object"==typeof s?xF(o,s):String(o)===String(s)}))}function kF(e){for(var t=0;t<e.matched.length;t++){var n=e.matched[t];for(var r in n.instances){var i=n.instances[r],o=n.enteredCbs[r];if(i&&o){delete n.enteredCbs[r];for(var s=0;s<o.length;s++)i._isBeingDestroyed||o[s](i)}}}}var SF={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,t){var n=t.props,r=t.children,i=t.parent,o=t.data;o.routerView=!0;for(var s=i.$createElement,a=n.name,l=i.$route,c=i._routerViewCache||(i._routerViewCache={}),u=0,h=!1;i&&i._routerRoot!==i;){var d=i.$vnode?i.$vnode.data:{};d.routerView&&u++,d.keepAlive&&i._directInactive&&i._inactive&&(h=!0),i=i.$parent}if(o.routerViewDepth=u,h){var f=c[a],p=f&&f.component;return p?(f.configProps&&_F(p,o,f.route,f.configProps),s(p,o,r)):s()}var m=l.matched[u],g=m&&m.components[a];if(!m||!g)return c[a]=null,s();c[a]={component:g},o.registerRouteInstance=function(e,t){var n=m.instances[a];(t&&n!==e||!t&&n===e)&&(m.instances[a]=t)},(o.hook||(o.hook={})).prepatch=function(e,t){m.instances[a]=t.componentInstance},o.hook.init=function(e){e.data.keepAlive&&e.componentInstance&&e.componentInstance!==m.instances[a]&&(m.instances[a]=e.componentInstance),kF(l)};var v=m.props&&m.props[a];return v&&(sF(c[a],{route:l,configProps:v}),_F(g,o,l,v)),s(g,o,r)}};function _F(e,t,n,r){var i=t.props=function(e,t){switch(typeof t){case"undefined":return;case"object":return t;case"function":return t(e);case"boolean":return t?e.params:void 0}}(n,r);if(i){i=t.props=sF({},i);var o=t.attrs=t.attrs||{};for(var s in i)e.props&&s in e.props||(o[s]=i[s],delete i[s])}}function TF(e,t,n){var r=e.charAt(0);if("/"===r)return e;if("?"===r||"#"===r)return t+e;var i=t.split("/");n&&i[i.length-1]||i.pop();for(var o=e.replace(/^\//,"").split("/"),s=0;s<o.length;s++){var a=o[s];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function CF(e){return e.replace(/\/\//g,"/")}var EF=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},QF=qF,IF=LF,AF=function(e,t){return NF(LF(e,t),t)},PF=NF,$F=VF,RF=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function LF(e,t){for(var n,r=[],i=0,o=0,s="",a=t&&t.delimiter||"/";null!=(n=RF.exec(e));){var l=n[0],c=n[1],u=n.index;if(s+=e.slice(o,u),o=u+l.length,c)s+=c[1];else{var h=e[o],d=n[2],f=n[3],p=n[4],m=n[5],g=n[6],v=n[7];s&&(r.push(s),s="");var y=null!=d&&null!=h&&h!==d,O="+"===g||"*"===g,b="?"===g||"*"===g,w=n[2]||a,x=p||m;r.push({name:f||i++,prefix:d||"",delimiter:w,optional:b,repeat:O,partial:y,asterisk:!!v,pattern:x?WF(x):v?".*":"[^"+MF(w)+"]+?"})}}return o<e.length&&(s+=e.substr(o)),s&&r.push(s),r}function DF(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function NF(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",FF(t)));return function(t,r){for(var i="",o=t||{},s=(r||{}).pretty?DF:encodeURIComponent,a=0;a<e.length;a++){var l=e[a];if("string"!=typeof l){var c,u=o[l.name];if(null==u){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(EF(u)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(u)+"`");if(0===u.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var h=0;h<u.length;h++){if(c=s(u[h]),!n[a].test(c))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(c)+"`");i+=(0===h?l.prefix:l.delimiter)+c}}else{if(c=l.asterisk?encodeURI(u).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):s(u),!n[a].test(c))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+c+'"');i+=l.prefix+c}}else i+=l}return i}}function MF(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function WF(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function jF(e,t){return e.keys=t,e}function FF(e){return e&&e.sensitive?"":"i"}function VF(e,t,n){EF(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,i=!1!==n.end,o="",s=0;s<e.length;s++){var a=e[s];if("string"==typeof a)o+=MF(a);else{var l=MF(a.prefix),c="(?:"+a.pattern+")";t.push(a),a.repeat&&(c+="(?:"+l+c+")*"),o+=c=a.optional?a.partial?l+"("+c+")?":"(?:"+l+"("+c+"))?":l+"("+c+")"}}var u=MF(n.delimiter||"/"),h=o.slice(-u.length)===u;return r||(o=(h?o.slice(0,-u.length):o)+"(?:"+u+"(?=$))?"),o+=i?"$":r&&h?"":"(?="+u+"|$)",jF(new RegExp("^"+o,FF(n)),t)}function qF(e,t,n){return EF(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return jF(e,t)}(e,t):EF(e)?function(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(qF(e[i],t,n).source);return jF(new RegExp("(?:"+r.join("|")+")",FF(n)),t)}(e,t,n):function(e,t,n){return VF(LF(e,n),t,n)}(e,t,n)}QF.parse=IF,QF.compile=AF,QF.tokensToFunction=PF,QF.tokensToRegExp=$F;var zF=Object.create(null);function UF(e,t,n){t=t||{};try{var r=zF[e]||(zF[e]=QF.compile(e));return"string"==typeof t.pathMatch&&(t[0]=t.pathMatch),r(t,{pretty:!0})}catch(l6){return""}finally{delete t[0]}}function BF(e,t,n,r){var i="string"==typeof e?{path:e}:e;if(i._normalized)return i;if(i.name){var o=(i=sF({},e)).params;return o&&"object"==typeof o&&(i.params=sF({},o)),i}if(!i.path&&i.params&&t){(i=sF({},i))._normalized=!0;var s=sF(sF({},t.params),i.params);if(t.name)i.name=t.name,i.params=s;else if(t.matched.length){var a=t.matched[t.matched.length-1].path;i.path=UF(a,s,t.path)}return i}var l=function(e){var t="",n="",r=e.indexOf("#");r>=0&&(t=e.slice(r),e=e.slice(0,r));var i=e.indexOf("?");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{path:e,query:n,hash:t}}(i.path||""),c=t&&t.path||"/",u=l.path?TF(l.path,c,n||i.append):c,h=function(e,t,n){void 0===t&&(t={});var r,i=n||fF;try{r=i(e||"")}catch(l6){r={}}for(var o in t){var s=t[o];r[o]=Array.isArray(s)?s.map(dF):dF(s)}return r}(l.query,i.query,r&&r.options.parseQuery),d=i.hash||l.hash;return d&&"#"!==d.charAt(0)&&(d="#"+d),{_normalized:!0,path:u,query:h,hash:d}}var YF,XF=function(){},GF={name:"RouterLink",props:{to:{type:[String,Object],required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:[String,Array],default:"click"}},render:function(e){var t=this,n=this.$router,r=this.$route,i=n.resolve(this.to,r,this.append),o=i.location,s=i.route,a=i.href,l={},c=n.options.linkActiveClass,u=n.options.linkExactActiveClass,h=null==c?"router-link-active":c,d=null==u?"router-link-exact-active":u,f=null==this.activeClass?h:this.activeClass,p=null==this.exactActiveClass?d:this.exactActiveClass,m=s.redirectedFrom?gF(null,BF(s.redirectedFrom),null,n):s;l[p]=wF(r,m,this.exactPath),l[f]=this.exact||this.exactPath?l[p]:function(e,t){return 0===e.path.replace(mF,"/").indexOf(t.path.replace(mF,"/"))&&(!t.hash||e.hash===t.hash)&&function(e,t){for(var n in t)if(!(n in e))return!1;return!0}(e.query,t.query)}(r,m);var g=l[p]?this.ariaCurrentValue:null,v=function(e){HF(e)&&(t.replace?n.replace(o,XF):n.push(o,XF))},y={click:HF};Array.isArray(this.event)?this.event.forEach((function(e){y[e]=v})):y[this.event]=v;var O={class:l},b=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:a,route:s,navigate:v,isActive:l[f],isExactActive:l[p]});if(b){if(1===b.length)return b[0];if(b.length>1||!b.length)return 0===b.length?e():e("span",{},b)}if("a"===this.tag)O.on=y,O.attrs={href:a,"aria-current":g};else{var w=ZF(this.$slots.default);if(w){w.isStatic=!1;var x=w.data=sF({},w.data);for(var k in x.on=x.on||{},x.on){var S=x.on[k];k in y&&(x.on[k]=Array.isArray(S)?S:[S])}for(var _ in y)_ in x.on?x.on[_].push(y[_]):x.on[_]=v;var T=w.data.attrs=sF({},w.data.attrs);T.href=a,T["aria-current"]=g}else O.on=y}return e(this.tag,O,this.$slots.default)}};function HF(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.defaultPrevented||void 0!==e.button&&0!==e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ZF(e){if(e)for(var t,n=0;n<e.length;n++){if("a"===(t=e[n]).tag)return t;if(t.children&&(t=ZF(t.children)))return t}}var KF="undefined"!=typeof window;function JF(e,t,n,r,i){var o=t||[],s=n||Object.create(null),a=r||Object.create(null);e.forEach((function(e){eV(o,s,a,e,i)}));for(var l=0,c=o.length;l<c;l++)"*"===o[l]&&(o.push(o.splice(l,1)[0]),c--,l--);return{pathList:o,pathMap:s,nameMap:a}}function eV(e,t,n,r,i,o){var s=r.path,a=r.name,l=r.pathToRegexpOptions||{},c=function(e,t,n){n||(e=e.replace(/\/$/,""));if("/"===e[0])return e;if(null==t)return e;return CF(t.path+"/"+e)}(s,i,l.strict);"boolean"==typeof r.caseSensitive&&(l.sensitive=r.caseSensitive);var u={path:c,regex:tV(c,l),components:r.components||{default:r.component},alias:r.alias?"string"==typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:o,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=o?CF(o+"/"+r.path):void 0;eV(e,t,n,r,u,i)})),t[u.path]||(e.push(u.path),t[u.path]=u),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<h.length;++d){var f={path:h[d],children:r.children};eV(e,t,n,f,i,u.path||"/")}a&&(n[a]||(n[a]=u))}function tV(e,t){return QF(e,[],t)}function nV(e,t){var n=JF(e),r=n.pathList,i=n.pathMap,o=n.nameMap;function s(e,n,s){var a=BF(e,n,!1,t),c=a.name;if(c){var u=o[c];if(!u)return l(null,a);var h=u.regex.keys.filter((function(e){return!e.optional})).map((function(e){return e.name}));if("object"!=typeof a.params&&(a.params={}),n&&"object"==typeof n.params)for(var d in n.params)!(d in a.params)&&h.indexOf(d)>-1&&(a.params[d]=n.params[d]);return a.path=UF(u.path,a.params),l(u,a,s)}if(a.path){a.params={};for(var f=0;f<r.length;f++){var p=r[f],m=i[p];if(rV(m.regex,a.path,a.params))return l(m,a,s)}}return l(null,a)}function a(e,n){var r=e.redirect,i="function"==typeof r?r(gF(e,n,null,t)):r;if("string"==typeof i&&(i={path:i}),!i||"object"!=typeof i)return l(null,n);var a=i,c=a.name,u=a.path,h=n.query,d=n.hash,f=n.params;return h=a.hasOwnProperty("query")?a.query:h,d=a.hasOwnProperty("hash")?a.hash:d,f=a.hasOwnProperty("params")?a.params:f,c?(o[c],s({_normalized:!0,name:c,query:h,hash:d,params:f},void 0,n)):u?s({_normalized:!0,path:UF(function(e,t){return TF(e,t.parent?t.parent.path:"/",!0)}(u,e),f),query:h,hash:d},void 0,n):l(null,n)}function l(e,n,r){return e&&e.redirect?a(e,r||n):e&&e.matchAs?function(e,t,n){var r=s({_normalized:!0,path:UF(n,t.params)});if(r){var i=r.matched,o=i[i.length-1];return t.params=r.params,l(o,t)}return l(null,t)}(0,n,e.matchAs):gF(e,n,r,t)}return{match:s,addRoute:function(e,t){var n="object"!=typeof e?o[e]:void 0;JF([t||e],r,i,o,n),n&&n.alias.length&&JF(n.alias.map((function(e){return{path:e,children:[t]}})),r,i,o,n)},getRoutes:function(){return r.map((function(e){return i[e]}))},addRoutes:function(e){JF(e,r,i,o)}}}function rV(e,t,n){var r=t.match(e);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var s=e.keys[i-1];s&&(n[s.name||"pathMatch"]="string"==typeof r[i]?hF(r[i]):r[i])}return!0}var iV=KF&&window.performance&&window.performance.now?window.performance:Date;function oV(){return iV.now().toFixed(3)}var sV=oV();function aV(){return sV}function lV(e){return sV=e}var cV=Object.create(null);function uV(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,t=window.location.href.replace(e,""),n=sF({},window.history.state);return n.key=aV(),window.history.replaceState(n,"",t),window.addEventListener("popstate",fV),function(){window.removeEventListener("popstate",fV)}}function hV(e,t,n,r){if(e.app){var i=e.options.scrollBehavior;i&&e.app.$nextTick((function(){var o=function(){var e=aV();if(e)return cV[e]}(),s=i.call(e,t,n,r?o:null);s&&("function"==typeof s.then?s.then((function(e){yV(e,o)})).catch((function(e){})):yV(s,o))}))}}function dV(){var e=aV();e&&(cV[e]={x:window.pageXOffset,y:window.pageYOffset})}function fV(e){dV(),e.state&&e.state.key&&lV(e.state.key)}function pV(e){return gV(e.x)||gV(e.y)}function mV(e){return{x:gV(e.x)?e.x:window.pageXOffset,y:gV(e.y)?e.y:window.pageYOffset}}function gV(e){return"number"==typeof e}var vV=/^#\d/;function yV(e,t){var n,r="object"==typeof e;if(r&&"string"==typeof e.selector){var i=vV.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(i){var o=e.offset&&"object"==typeof e.offset?e.offset:{};t=function(e,t){var n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{x:r.left-n.left-t.x,y:r.top-n.top-t.y}}(i,o={x:gV((n=o).x)?n.x:0,y:gV(n.y)?n.y:0})}else pV(e)&&(t=mV(e))}else r&&pV(e)&&(t=mV(e));t&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:t.x,top:t.y,behavior:e.behavior}):window.scrollTo(t.x,t.y))}var OV,bV=KF&&((-1===(OV=window.navigator.userAgent).indexOf("Android 2.")&&-1===OV.indexOf("Android 4.0")||-1===OV.indexOf("Mobile Safari")||-1!==OV.indexOf("Chrome")||-1!==OV.indexOf("Windows Phone"))&&window.history&&"function"==typeof window.history.pushState);function wV(e,t){dV();var n=window.history;try{if(t){var r=sF({},n.state);r.key=aV(),n.replaceState(r,"",e)}else n.pushState({key:lV(oV())},"",e)}catch(l6){window.location[t?"replace":"assign"](e)}}function xV(e){wV(e,!0)}function kV(e,t,n){var r=function(i){i>=e.length?n():e[i]?t(e[i],(function(){r(i+1)})):r(i+1)};r(0)}var SV={redirected:2,aborted:4,cancelled:8,duplicated:16};function _V(e,t){return CV(e,t,SV.redirected,'Redirected when going from "'+e.fullPath+'" to "'+function(e){if("string"==typeof e)return e;if("path"in e)return e.path;var t={};return EV.forEach((function(n){n in e&&(t[n]=e[n])})),JSON.stringify(t,null,2)}(t)+'" via a navigation guard.')}function TV(e,t){return CV(e,t,SV.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+t.fullPath+'" with a new navigation.')}function CV(e,t,n,r){var i=new Error(r);return i._isRouter=!0,i.from=e,i.to=t,i.type=n,i}var EV=["params","query","hash"];function QV(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function IV(e,t){return QV(e)&&e._isRouter&&(null==t||e.type===t)}function AV(e){return function(t,n,r){var i=!1,o=0,s=null;PV(e,(function(e,t,n,a){if("function"==typeof e&&void 0===e.cid){i=!0,o++;var l,c=LV((function(t){var i;((i=t).__esModule||RV&&"Module"===i[Symbol.toStringTag])&&(t=t.default),e.resolved="function"==typeof t?t:YF.extend(t),n.components[a]=t,--o<=0&&r()})),u=LV((function(e){var t="Failed to resolve async component "+a+": "+e;s||(s=QV(e)?e:new Error(t),r(s))}));try{l=e(c,u)}catch(l6){u(l6)}if(l)if("function"==typeof l.then)l.then(c,u);else{var h=l.component;h&&"function"==typeof h.then&&h.then(c,u)}}})),i||r()}}function PV(e,t){return $V(e.map((function(e){return Object.keys(e.components).map((function(n){return t(e.components[n],e.instances[n],e,n)}))})))}function $V(e){return Array.prototype.concat.apply([],e)}var RV="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function LV(e){var t=!1;return function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];if(!t)return t=!0,e.apply(this,n)}}var DV=function(e,t){this.router=e,this.base=function(e){if(!e)if(KF){var t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else e="/";"/"!==e.charAt(0)&&(e="/"+e);return e.replace(/\/$/,"")}(t),this.current=yF,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function NV(e,t,n,r){var i=PV(e,(function(e,r,i,o){var s=function(e,t){"function"!=typeof e&&(e=YF.extend(e));return e.options[t]}(e,t);if(s)return Array.isArray(s)?s.map((function(e){return n(e,r,i,o)})):n(s,r,i,o)}));return $V(r?i.reverse():i)}function MV(e,t){if(t)return function(){return e.apply(t,arguments)}}DV.prototype.listen=function(e){this.cb=e},DV.prototype.onReady=function(e,t){this.ready?e():(this.readyCbs.push(e),t&&this.readyErrorCbs.push(t))},DV.prototype.onError=function(e){this.errorCbs.push(e)},DV.prototype.transitionTo=function(e,t,n){var r,i=this;try{r=this.router.match(e,this.current)}catch(l6){throw this.errorCbs.forEach((function(t){t(l6)})),l6}var o=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),t&&t(r),i.ensureURL(),i.router.afterHooks.forEach((function(e){e&&e(r,o)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(e){e(r)})))}),(function(e){n&&n(e),e&&!i.ready&&(IV(e,SV.redirected)&&o===yF||(i.ready=!0,i.readyErrorCbs.forEach((function(t){t(e)}))))}))},DV.prototype.confirmTransition=function(e,t,n){var r=this,i=this.current;this.pending=e;var o,s,a=function(e){!IV(e)&&QV(e)&&(r.errorCbs.length?r.errorCbs.forEach((function(t){t(e)})):console.error(e)),n&&n(e)},l=e.matched.length-1,c=i.matched.length-1;if(wF(e,i)&&l===c&&e.matched[l]===i.matched[c])return this.ensureURL(),a(((s=CV(o=i,e,SV.duplicated,'Avoided redundant navigation to current location: "'+o.fullPath+'".')).name="NavigationDuplicated",s));var u=function(e,t){var n,r=Math.max(e.length,t.length);for(n=0;n<r&&e[n]===t[n];n++);return{updated:t.slice(0,n),activated:t.slice(n),deactivated:e.slice(n)}}(this.current.matched,e.matched),h=u.updated,d=u.deactivated,f=u.activated,p=[].concat(function(e){return NV(e,"beforeRouteLeave",MV,!0)}(d),this.router.beforeHooks,function(e){return NV(e,"beforeRouteUpdate",MV)}(h),f.map((function(e){return e.beforeEnter})),AV(f)),m=function(t,n){if(r.pending!==e)return a(TV(i,e));try{t(e,i,(function(t){!1===t?(r.ensureURL(!0),a(function(e,t){return CV(e,t,SV.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+t.fullPath+'" via a navigation guard.')}(i,e))):QV(t)?(r.ensureURL(!0),a(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(a(_V(i,e)),"object"==typeof t&&t.replace?r.replace(t):r.push(t)):n(t)}))}catch(l6){a(l6)}};kV(p,m,(function(){kV(function(e){return NV(e,"beforeRouteEnter",(function(e,t,n,r){return function(e,t,n){return function(r,i,o){return e(r,i,(function(e){"function"==typeof e&&(t.enteredCbs[n]||(t.enteredCbs[n]=[]),t.enteredCbs[n].push(e)),o(e)}))}}(e,n,r)}))}(f).concat(r.router.resolveHooks),m,(function(){if(r.pending!==e)return a(TV(i,e));r.pending=null,t(e),r.router.app&&r.router.app.$nextTick((function(){kF(e)}))}))}))},DV.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)},DV.prototype.setupListeners=function(){},DV.prototype.teardown=function(){this.listeners.forEach((function(e){e()})),this.listeners=[],this.current=yF,this.pending=null};var WV=function(e){function t(t,n){e.call(this,t,n),this._startLocation=jV(this.base)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=bV&&n;r&&this.listeners.push(uV());var i=function(){var n=e.current,i=jV(e.base);e.current===yF&&i===e._startLocation||e.transitionTo(i,(function(e){r&&hV(t,e,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},t.prototype.go=function(e){window.history.go(e)},t.prototype.push=function(e,t,n){var r=this,i=this.current;this.transitionTo(e,(function(e){wV(CF(r.base+e.fullPath)),hV(r.router,e,i,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this.current;this.transitionTo(e,(function(e){xV(CF(r.base+e.fullPath)),hV(r.router,e,i,!1),t&&t(e)}),n)},t.prototype.ensureURL=function(e){if(jV(this.base)!==this.current.fullPath){var t=CF(this.base+this.current.fullPath);e?wV(t):xV(t)}},t.prototype.getCurrentLocation=function(){return jV(this.base)},t}(DV);function jV(e){var t=window.location.pathname,n=t.toLowerCase(),r=e.toLowerCase();return!e||n!==r&&0!==n.indexOf(CF(r+"/"))||(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash}var FV=function(e){function t(t,n,r){e.call(this,t,n),r&&function(e){var t=jV(e);if(!/^\/#/.test(t))return window.location.replace(CF(e+"/#"+t)),!0}(this.base)||VV()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router.options.scrollBehavior,n=bV&&t;n&&this.listeners.push(uV());var r=function(){var t=e.current;VV()&&e.transitionTo(qV(),(function(r){n&&hV(e.router,r,t,!0),bV||BV(r.fullPath)}))},i=bV?"popstate":"hashchange";window.addEventListener(i,r),this.listeners.push((function(){window.removeEventListener(i,r)}))}},t.prototype.push=function(e,t,n){var r=this,i=this.current;this.transitionTo(e,(function(e){UV(e.fullPath),hV(r.router,e,i,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this.current;this.transitionTo(e,(function(e){BV(e.fullPath),hV(r.router,e,i,!1),t&&t(e)}),n)},t.prototype.go=function(e){window.history.go(e)},t.prototype.ensureURL=function(e){var t=this.current.fullPath;qV()!==t&&(e?UV(t):BV(t))},t.prototype.getCurrentLocation=function(){return qV()},t}(DV);function VV(){var e=qV();return"/"===e.charAt(0)||(BV("/"+e),!1)}function qV(){var e=window.location.href,t=e.indexOf("#");return t<0?"":e=e.slice(t+1)}function zV(e){var t=window.location.href,n=t.indexOf("#");return(n>=0?t.slice(0,n):t)+"#"+e}function UV(e){bV?wV(zV(e)):window.location.hash=e}function BV(e){bV?xV(zV(e)):window.location.replace(zV(e))}var YV=function(e){function t(t,n){e.call(this,t,n),this.stack=[],this.index=-1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.push=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index+1).concat(e),r.index++,t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index).concat(e),t&&t(e)}),n)},t.prototype.go=function(e){var t=this,n=this.index+e;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var e=t.current;t.index=n,t.updateRoute(r),t.router.afterHooks.forEach((function(t){t&&t(r,e)}))}),(function(e){IV(e,SV.duplicated)&&(t.index=n)}))}},t.prototype.getCurrentLocation=function(){var e=this.stack[this.stack.length-1];return e?e.fullPath:"/"},t.prototype.ensureURL=function(){},t}(DV),XV=function(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=nV(e.routes||[],this);var t=e.mode||"hash";switch(this.fallback="history"===t&&!bV&&!1!==e.fallback,this.fallback&&(t="hash"),KF||(t="abstract"),this.mode=t,t){case"history":this.history=new WV(this,e.base);break;case"hash":this.history=new FV(this,e.base,this.fallback);break;case"abstract":this.history=new YV(this,e.base)}},GV={currentRoute:{configurable:!0}};function HV(e,t){return e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}XV.prototype.match=function(e,t,n){return this.matcher.match(e,t,n)},GV.currentRoute.get=function(){return this.history&&this.history.current},XV.prototype.init=function(e){var t=this;if(this.apps.push(e),e.$once("hook:destroyed",(function(){var n=t.apps.indexOf(e);n>-1&&t.apps.splice(n,1),t.app===e&&(t.app=t.apps[0]||null),t.app||t.history.teardown()})),!this.app){this.app=e;var n=this.history;if(n instanceof WV||n instanceof FV){var r=function(e){n.setupListeners(),function(e){var r=n.current,i=t.options.scrollBehavior;bV&&i&&"fullPath"in e&&hV(t,e,r,!1)}(e)};n.transitionTo(n.getCurrentLocation(),r,r)}n.listen((function(e){t.apps.forEach((function(t){t._route=e}))}))}},XV.prototype.beforeEach=function(e){return HV(this.beforeHooks,e)},XV.prototype.beforeResolve=function(e){return HV(this.resolveHooks,e)},XV.prototype.afterEach=function(e){return HV(this.afterHooks,e)},XV.prototype.onReady=function(e,t){this.history.onReady(e,t)},XV.prototype.onError=function(e){this.history.onError(e)},XV.prototype.push=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!=typeof Promise)return new Promise((function(t,n){r.history.push(e,t,n)}));this.history.push(e,t,n)},XV.prototype.replace=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!=typeof Promise)return new Promise((function(t,n){r.history.replace(e,t,n)}));this.history.replace(e,t,n)},XV.prototype.go=function(e){this.history.go(e)},XV.prototype.back=function(){this.go(-1)},XV.prototype.forward=function(){this.go(1)},XV.prototype.getMatchedComponents=function(e){var t=e?e.matched?e:this.resolve(e).route:this.currentRoute;return t?[].concat.apply([],t.matched.map((function(e){return Object.keys(e.components).map((function(t){return e.components[t]}))}))):[]},XV.prototype.resolve=function(e,t,n){var r=BF(e,t=t||this.history.current,n,this),i=this.match(r,t),o=i.redirectedFrom||i.fullPath;return{location:r,route:i,href:function(e,t,n){var r="hash"===n?"#"+t:t;return e?CF(e+"/"+r):r}(this.history.base,o,this.mode),normalizedTo:r,resolved:i}},XV.prototype.getRoutes=function(){return this.matcher.getRoutes()},XV.prototype.addRoute=function(e,t){this.matcher.addRoute(e,t),this.history.current!==yF&&this.history.transitionTo(this.history.getCurrentLocation())},XV.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==yF&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(XV.prototype,GV),XV.install=function e(t){if(!e.installed||YF!==t){e.installed=!0,YF=t;var n=function(e){return void 0!==e},r=function(e,t){var r=e.$options._parentVnode;n(r)&&n(r=r.data)&&n(r=r.registerRouteInstance)&&r(e,t)};t.mixin({beforeCreate:function(){n(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,r(this,this)},destroyed:function(){r(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",SF),t.component("RouterLink",GF);var i=t.config.optionMergeStrategies;i.beforeRouteEnter=i.beforeRouteLeave=i.beforeRouteUpdate=i.created}},XV.version="3.5.2",XV.isNavigationFailure=IV,XV.NavigationFailureType=SV,XV.START_LOCATION=yF,KF&&window.Vue&&window.Vue.use(XV);var ZV,KV,JV=XV;
//! moment.js
//! version : 2.29.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
function eq(){return ZV.apply(null,arguments)}function tq(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function nq(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function rq(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function iq(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(rq(e,t))return!1;return!0}function oq(e){return void 0===e}function sq(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function aq(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function lq(e,t){var n,r=[];for(n=0;n<e.length;++n)r.push(t(e[n],n));return r}function cq(e,t){for(var n in t)rq(t,n)&&(e[n]=t[n]);return rq(t,"toString")&&(e.toString=t.toString),rq(t,"valueOf")&&(e.valueOf=t.valueOf),e}function uq(e,t,n,r){return wU(e,t,n,r,!0).utc()}function hq(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function dq(e){if(null==e._isValid){var t=hq(e),n=KV.call(t.parsedDateParts,(function(e){return null!=e})),r=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(r=r&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return r;e._isValid=r}return e._isValid}function fq(e){var t=uq(NaN);return null!=e?cq(hq(t),e):hq(t).userInvalidated=!0,t}KV=Array.prototype.some?Array.prototype.some:function(e){var t,n=Object(this),r=n.length>>>0;for(t=0;t<r;t++)if(t in n&&e.call(this,n[t],t,n))return!0;return!1};var pq=eq.momentProperties=[],mq=!1;function gq(e,t){var n,r,i;if(oq(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),oq(t._i)||(e._i=t._i),oq(t._f)||(e._f=t._f),oq(t._l)||(e._l=t._l),oq(t._strict)||(e._strict=t._strict),oq(t._tzm)||(e._tzm=t._tzm),oq(t._isUTC)||(e._isUTC=t._isUTC),oq(t._offset)||(e._offset=t._offset),oq(t._pf)||(e._pf=hq(t)),oq(t._locale)||(e._locale=t._locale),pq.length>0)for(n=0;n<pq.length;n++)oq(i=t[r=pq[n]])||(e[r]=i);return e}function vq(e){gq(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===mq&&(mq=!0,eq.updateOffset(this),mq=!1)}function yq(e){return e instanceof vq||null!=e&&null!=e._isAMomentObject}function Oq(e){!1===eq.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function bq(e,t){var n=!0;return cq((function(){if(null!=eq.deprecationHandler&&eq.deprecationHandler(null,e),n){var r,i,o,s=[];for(i=0;i<arguments.length;i++){if(r="","object"==typeof arguments[i]){for(o in r+="\n["+i+"] ",arguments[0])rq(arguments[0],o)&&(r+=o+": "+arguments[0][o]+", ");r=r.slice(0,-2)}else r=arguments[i];s.push(r)}Oq(e+"\nArguments: "+Array.prototype.slice.call(s).join("")+"\n"+(new Error).stack),n=!1}return t.apply(this,arguments)}),t)}var wq,xq={};function kq(e,t){null!=eq.deprecationHandler&&eq.deprecationHandler(e,t),xq[e]||(Oq(t),xq[e]=!0)}function Sq(e){return"undefined"!=typeof Function&&e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function _q(e,t){var n,r=cq({},e);for(n in t)rq(t,n)&&(nq(e[n])&&nq(t[n])?(r[n]={},cq(r[n],e[n]),cq(r[n],t[n])):null!=t[n]?r[n]=t[n]:delete r[n]);for(n in e)rq(e,n)&&!rq(t,n)&&nq(e[n])&&(r[n]=cq({},r[n]));return r}function Tq(e){null!=e&&this.set(e)}eq.suppressDeprecationWarnings=!1,eq.deprecationHandler=null,wq=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)rq(e,t)&&n.push(t);return n};function Cq(e,t,n){var r=""+Math.abs(e),i=t-r.length;return(e>=0?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+r}var Eq=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Qq=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Iq={},Aq={};function Pq(e,t,n,r){var i=r;"string"==typeof r&&(i=function(){return this[r]()}),e&&(Aq[e]=i),t&&(Aq[t[0]]=function(){return Cq(i.apply(this,arguments),t[1],t[2])}),n&&(Aq[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function $q(e,t){return e.isValid()?(t=Rq(t,e.localeData()),Iq[t]=Iq[t]||function(e){var t,n,r,i=e.match(Eq);for(t=0,n=i.length;t<n;t++)Aq[i[t]]?i[t]=Aq[i[t]]:i[t]=(r=i[t]).match(/\[[\s\S]/)?r.replace(/^\[|\]$/g,""):r.replace(/\\/g,"");return function(t){var r,o="";for(r=0;r<n;r++)o+=Sq(i[r])?i[r].call(t,e):i[r];return o}}(t),Iq[t](e)):e.localeData().invalidDate()}function Rq(e,t){var n=5;function r(e){return t.longDateFormat(e)||e}for(Qq.lastIndex=0;n>=0&&Qq.test(e);)e=e.replace(Qq,r),Qq.lastIndex=0,n-=1;return e}var Lq={};function Dq(e,t){var n=e.toLowerCase();Lq[n]=Lq[n+"s"]=Lq[t]=e}function Nq(e){return"string"==typeof e?Lq[e]||Lq[e.toLowerCase()]:void 0}function Mq(e){var t,n,r={};for(n in e)rq(e,n)&&(t=Nq(n))&&(r[t]=e[n]);return r}var Wq={};function jq(e,t){Wq[e]=t}function Fq(e){return e%4==0&&e%100!=0||e%400==0}function Vq(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function qq(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=Vq(t)),n}function zq(e,t){return function(n){return null!=n?(Bq(this,e,n),eq.updateOffset(this,t),this):Uq(this,e)}}function Uq(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function Bq(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&Fq(e.year())&&1===e.month()&&29===e.date()?(n=qq(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),yz(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}var Yq,Xq=/\d/,Gq=/\d\d/,Hq=/\d{3}/,Zq=/\d{4}/,Kq=/[+-]?\d{6}/,Jq=/\d\d?/,ez=/\d\d\d\d?/,tz=/\d\d\d\d\d\d?/,nz=/\d{1,3}/,rz=/\d{1,4}/,iz=/[+-]?\d{1,6}/,oz=/\d+/,sz=/[+-]?\d+/,az=/Z|[+-]\d\d:?\d\d/gi,lz=/Z|[+-]\d\d(?::?\d\d)?/gi,cz=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;function uz(e,t,n){Yq[e]=Sq(t)?t:function(e,r){return e&&n?n:t}}function hz(e,t){return rq(Yq,e)?Yq[e](t._strict,t._locale):new RegExp(dz(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,(function(e,t,n,r,i){return t||n||r||i}))))}function dz(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}Yq={};var fz={};function pz(e,t){var n,r=t;for("string"==typeof e&&(e=[e]),sq(t)&&(r=function(e,n){n[t]=qq(e)}),n=0;n<e.length;n++)fz[e[n]]=r}function mz(e,t){pz(e,(function(e,n,r,i){r._w=r._w||{},t(e,r._w,r,i)}))}function gz(e,t,n){null!=t&&rq(fz,e)&&fz[e](t,n._a,n,e)}var vz;function yz(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,r=(t%(n=12)+n)%n;return e+=(t-r)/12,1===r?Fq(e)?29:28:31-r%7%2}vz=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},Pq("M",["MM",2],"Mo",(function(){return this.month()+1})),Pq("MMM",0,0,(function(e){return this.localeData().monthsShort(this,e)})),Pq("MMMM",0,0,(function(e){return this.localeData().months(this,e)})),Dq("month","M"),jq("month",8),uz("M",Jq),uz("MM",Jq,Gq),uz("MMM",(function(e,t){return t.monthsShortRegex(e)})),uz("MMMM",(function(e,t){return t.monthsRegex(e)})),pz(["M","MM"],(function(e,t){t[1]=qq(e)-1})),pz(["MMM","MMMM"],(function(e,t,n,r){var i=n._locale.monthsParse(e,r,n._strict);null!=i?t[1]=i:hq(n).invalidMonth=e}));var Oz="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),bz="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),wz=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,xz=cz,kz=cz;function Sz(e,t,n){var r,i,o,s=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)o=uq([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(o,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(o,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=vz.call(this._shortMonthsParse,s))?i:null:-1!==(i=vz.call(this._longMonthsParse,s))?i:null:"MMM"===t?-1!==(i=vz.call(this._shortMonthsParse,s))||-1!==(i=vz.call(this._longMonthsParse,s))?i:null:-1!==(i=vz.call(this._longMonthsParse,s))||-1!==(i=vz.call(this._shortMonthsParse,s))?i:null}function _z(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=qq(t);else if(!sq(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),yz(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function Tz(e){return null!=e?(_z(this,e),eq.updateOffset(this,!0),this):Uq(this,"Month")}function Cz(){function e(e,t){return t.length-e.length}var t,n,r=[],i=[],o=[];for(t=0;t<12;t++)n=uq([2e3,t]),r.push(this.monthsShort(n,"")),i.push(this.months(n,"")),o.push(this.months(n,"")),o.push(this.monthsShort(n,""));for(r.sort(e),i.sort(e),o.sort(e),t=0;t<12;t++)r[t]=dz(r[t]),i[t]=dz(i[t]);for(t=0;t<24;t++)o[t]=dz(o[t]);this._monthsRegex=new RegExp("^("+o.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+r.join("|")+")","i")}function Ez(e){return Fq(e)?366:365}Pq("Y",0,0,(function(){var e=this.year();return e<=9999?Cq(e,4):"+"+e})),Pq(0,["YY",2],0,(function(){return this.year()%100})),Pq(0,["YYYY",4],0,"year"),Pq(0,["YYYYY",5],0,"year"),Pq(0,["YYYYYY",6,!0],0,"year"),Dq("year","y"),jq("year",1),uz("Y",sz),uz("YY",Jq,Gq),uz("YYYY",rz,Zq),uz("YYYYY",iz,Kq),uz("YYYYYY",iz,Kq),pz(["YYYYY","YYYYYY"],0),pz("YYYY",(function(e,t){t[0]=2===e.length?eq.parseTwoDigitYear(e):qq(e)})),pz("YY",(function(e,t){t[0]=eq.parseTwoDigitYear(e)})),pz("Y",(function(e,t){t[0]=parseInt(e,10)})),eq.parseTwoDigitYear=function(e){return qq(e)+(qq(e)>68?1900:2e3)};var Qz=zq("FullYear",!0);function Iz(e,t,n,r,i,o,s){var a;return e<100&&e>=0?(a=new Date(e+400,t,n,r,i,o,s),isFinite(a.getFullYear())&&a.setFullYear(e)):a=new Date(e,t,n,r,i,o,s),a}function Az(e){var t,n;return e<100&&e>=0?((n=Array.prototype.slice.call(arguments))[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Pz(e,t,n){var r=7+t-n;return-((7+Az(e,0,r).getUTCDay()-t)%7)+r-1}function $z(e,t,n,r,i){var o,s,a=1+7*(t-1)+(7+n-r)%7+Pz(e,r,i);return a<=0?s=Ez(o=e-1)+a:a>Ez(e)?(o=e+1,s=a-Ez(e)):(o=e,s=a),{year:o,dayOfYear:s}}function Rz(e,t,n){var r,i,o=Pz(e.year(),t,n),s=Math.floor((e.dayOfYear()-o-1)/7)+1;return s<1?r=s+Lz(i=e.year()-1,t,n):s>Lz(e.year(),t,n)?(r=s-Lz(e.year(),t,n),i=e.year()+1):(i=e.year(),r=s),{week:r,year:i}}function Lz(e,t,n){var r=Pz(e,t,n),i=Pz(e+1,t,n);return(Ez(e)-r+i)/7}Pq("w",["ww",2],"wo","week"),Pq("W",["WW",2],"Wo","isoWeek"),Dq("week","w"),Dq("isoWeek","W"),jq("week",5),jq("isoWeek",5),uz("w",Jq),uz("ww",Jq,Gq),uz("W",Jq),uz("WW",Jq,Gq),mz(["w","ww","W","WW"],(function(e,t,n,r){t[r.substr(0,1)]=qq(e)}));function Dz(e,t){return e.slice(t,7).concat(e.slice(0,t))}Pq("d",0,"do","day"),Pq("dd",0,0,(function(e){return this.localeData().weekdaysMin(this,e)})),Pq("ddd",0,0,(function(e){return this.localeData().weekdaysShort(this,e)})),Pq("dddd",0,0,(function(e){return this.localeData().weekdays(this,e)})),Pq("e",0,0,"weekday"),Pq("E",0,0,"isoWeekday"),Dq("day","d"),Dq("weekday","e"),Dq("isoWeekday","E"),jq("day",11),jq("weekday",11),jq("isoWeekday",11),uz("d",Jq),uz("e",Jq),uz("E",Jq),uz("dd",(function(e,t){return t.weekdaysMinRegex(e)})),uz("ddd",(function(e,t){return t.weekdaysShortRegex(e)})),uz("dddd",(function(e,t){return t.weekdaysRegex(e)})),mz(["dd","ddd","dddd"],(function(e,t,n,r){var i=n._locale.weekdaysParse(e,r,n._strict);null!=i?t.d=i:hq(n).invalidWeekday=e})),mz(["d","e","E"],(function(e,t,n,r){t[r]=qq(e)}));var Nz="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Mz="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Wz="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),jz=cz,Fz=cz,Vz=cz;function qz(e,t,n){var r,i,o,s=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)o=uq([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(o,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(o,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(o,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=vz.call(this._weekdaysParse,s))?i:null:"ddd"===t?-1!==(i=vz.call(this._shortWeekdaysParse,s))?i:null:-1!==(i=vz.call(this._minWeekdaysParse,s))?i:null:"dddd"===t?-1!==(i=vz.call(this._weekdaysParse,s))||-1!==(i=vz.call(this._shortWeekdaysParse,s))||-1!==(i=vz.call(this._minWeekdaysParse,s))?i:null:"ddd"===t?-1!==(i=vz.call(this._shortWeekdaysParse,s))||-1!==(i=vz.call(this._weekdaysParse,s))||-1!==(i=vz.call(this._minWeekdaysParse,s))?i:null:-1!==(i=vz.call(this._minWeekdaysParse,s))||-1!==(i=vz.call(this._weekdaysParse,s))||-1!==(i=vz.call(this._shortWeekdaysParse,s))?i:null}function zz(){function e(e,t){return t.length-e.length}var t,n,r,i,o,s=[],a=[],l=[],c=[];for(t=0;t<7;t++)n=uq([2e3,1]).day(t),r=dz(this.weekdaysMin(n,"")),i=dz(this.weekdaysShort(n,"")),o=dz(this.weekdays(n,"")),s.push(r),a.push(i),l.push(o),c.push(r),c.push(i),c.push(o);s.sort(e),a.sort(e),l.sort(e),c.sort(e),this._weekdaysRegex=new RegExp("^("+c.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Uz(){return this.hours()%12||12}function Bz(e,t){Pq(e,0,0,(function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)}))}function Yz(e,t){return t._meridiemParse}Pq("H",["HH",2],0,"hour"),Pq("h",["hh",2],0,Uz),Pq("k",["kk",2],0,(function(){return this.hours()||24})),Pq("hmm",0,0,(function(){return""+Uz.apply(this)+Cq(this.minutes(),2)})),Pq("hmmss",0,0,(function(){return""+Uz.apply(this)+Cq(this.minutes(),2)+Cq(this.seconds(),2)})),Pq("Hmm",0,0,(function(){return""+this.hours()+Cq(this.minutes(),2)})),Pq("Hmmss",0,0,(function(){return""+this.hours()+Cq(this.minutes(),2)+Cq(this.seconds(),2)})),Bz("a",!0),Bz("A",!1),Dq("hour","h"),jq("hour",13),uz("a",Yz),uz("A",Yz),uz("H",Jq),uz("h",Jq),uz("k",Jq),uz("HH",Jq,Gq),uz("hh",Jq,Gq),uz("kk",Jq,Gq),uz("hmm",ez),uz("hmmss",tz),uz("Hmm",ez),uz("Hmmss",tz),pz(["H","HH"],3),pz(["k","kk"],(function(e,t,n){var r=qq(e);t[3]=24===r?0:r})),pz(["a","A"],(function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e})),pz(["h","hh"],(function(e,t,n){t[3]=qq(e),hq(n).bigHour=!0})),pz("hmm",(function(e,t,n){var r=e.length-2;t[3]=qq(e.substr(0,r)),t[4]=qq(e.substr(r)),hq(n).bigHour=!0})),pz("hmmss",(function(e,t,n){var r=e.length-4,i=e.length-2;t[3]=qq(e.substr(0,r)),t[4]=qq(e.substr(r,2)),t[5]=qq(e.substr(i)),hq(n).bigHour=!0})),pz("Hmm",(function(e,t,n){var r=e.length-2;t[3]=qq(e.substr(0,r)),t[4]=qq(e.substr(r))})),pz("Hmmss",(function(e,t,n){var r=e.length-4,i=e.length-2;t[3]=qq(e.substr(0,r)),t[4]=qq(e.substr(r,2)),t[5]=qq(e.substr(i))}));var Xz=zq("Hours",!0);var Gz,Hz={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:Oz,monthsShort:bz,week:{dow:0,doy:6},weekdays:Nz,weekdaysMin:Wz,weekdaysShort:Mz,meridiemParse:/[ap]\.?m?\.?/i},Zz={},Kz={};function Jz(e,t){var n,r=Math.min(e.length,t.length);for(n=0;n<r;n+=1)if(e[n]!==t[n])return n;return r}function eU(e){return e?e.toLowerCase().replace("_","-"):e}function tU(e){var t=null;if(void 0===Zz[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=Gz._abbr,require("./locale/"+e),nU(t)}catch(l6){Zz[e]=null}return Zz[e]}function nU(e,t){var n;return e&&((n=oq(t)?iU(e):rU(e,t))?Gz=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Gz._abbr}function rU(e,t){if(null!==t){var n,r=Hz;if(t.abbr=e,null!=Zz[e])kq("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=Zz[e]._config;else if(null!=t.parentLocale)if(null!=Zz[t.parentLocale])r=Zz[t.parentLocale]._config;else{if(null==(n=tU(t.parentLocale)))return Kz[t.parentLocale]||(Kz[t.parentLocale]=[]),Kz[t.parentLocale].push({name:e,config:t}),null;r=n._config}return Zz[e]=new Tq(_q(r,t)),Kz[e]&&Kz[e].forEach((function(e){rU(e.name,e.config)})),nU(e),Zz[e]}return delete Zz[e],null}function iU(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Gz;if(!tq(e)){if(t=tU(e))return t;e=[e]}return function(e){for(var t,n,r,i,o=0;o<e.length;){for(t=(i=eU(e[o]).split("-")).length,n=(n=eU(e[o+1]))?n.split("-"):null;t>0;){if(r=tU(i.slice(0,t).join("-")))return r;if(n&&n.length>=t&&Jz(i,n)>=t-1)break;t--}o++}return Gz}(e)}function oU(e){var t,n=e._a;return n&&-2===hq(e).overflow&&(t=n[1]<0||n[1]>11?1:n[2]<1||n[2]>yz(n[0],n[1])?2:n[3]<0||n[3]>24||24===n[3]&&(0!==n[4]||0!==n[5]||0!==n[6])?3:n[4]<0||n[4]>59?4:n[5]<0||n[5]>59?5:n[6]<0||n[6]>999?6:-1,hq(e)._overflowDayOfYear&&(t<0||t>2)&&(t=2),hq(e)._overflowWeeks&&-1===t&&(t=7),hq(e)._overflowWeekday&&-1===t&&(t=8),hq(e).overflow=t),e}var sU=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,aU=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,lU=/Z|[+-]\d\d(?::?\d\d)?/,cU=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],uU=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],hU=/^\/?Date\((-?\d+)/i,dU=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,fU={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function pU(e){var t,n,r,i,o,s,a=e._i,l=sU.exec(a)||aU.exec(a);if(l){for(hq(e).iso=!0,t=0,n=cU.length;t<n;t++)if(cU[t][1].exec(l[1])){i=cU[t][0],r=!1!==cU[t][2];break}if(null==i)return void(e._isValid=!1);if(l[3]){for(t=0,n=uU.length;t<n;t++)if(uU[t][1].exec(l[3])){o=(l[2]||" ")+uU[t][0];break}if(null==o)return void(e._isValid=!1)}if(!r&&null!=o)return void(e._isValid=!1);if(l[4]){if(!lU.exec(l[4]))return void(e._isValid=!1);s="Z"}e._f=i+(o||"")+(s||""),OU(e)}else e._isValid=!1}function mU(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function gU(e){var t,n,r,i,o,s,a,l,c=dU.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(c){if(n=c[4],r=c[3],i=c[2],o=c[5],s=c[6],a=c[7],l=[mU(n),bz.indexOf(r),parseInt(i,10),parseInt(o,10),parseInt(s,10)],a&&l.push(parseInt(a,10)),t=l,!function(e,t,n){return!e||Mz.indexOf(e)===new Date(t[0],t[1],t[2]).getDay()||(hq(n).weekdayMismatch=!0,n._isValid=!1,!1)}(c[1],t,e))return;e._a=t,e._tzm=function(e,t,n){if(e)return fU[e];if(t)return 0;var r=parseInt(n,10),i=r%100;return(r-i)/100*60+i}(c[8],c[9],c[10]),e._d=Az.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),hq(e).rfc2822=!0}else e._isValid=!1}function vU(e,t,n){return null!=e?e:null!=t?t:n}function yU(e){var t,n,r,i,o,s=[];if(!e._d){for(r=function(e){var t=new Date(eq.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}(e),e._w&&null==e._a[2]&&null==e._a[1]&&function(e){var t,n,r,i,o,s,a,l,c;null!=(t=e._w).GG||null!=t.W||null!=t.E?(o=1,s=4,n=vU(t.GG,e._a[0],Rz(xU(),1,4).year),r=vU(t.W,1),((i=vU(t.E,1))<1||i>7)&&(l=!0)):(o=e._locale._week.dow,s=e._locale._week.doy,c=Rz(xU(),o,s),n=vU(t.gg,e._a[0],c.year),r=vU(t.w,c.week),null!=t.d?((i=t.d)<0||i>6)&&(l=!0):null!=t.e?(i=t.e+o,(t.e<0||t.e>6)&&(l=!0)):i=o);r<1||r>Lz(n,o,s)?hq(e)._overflowWeeks=!0:null!=l?hq(e)._overflowWeekday=!0:(a=$z(n,r,i,o,s),e._a[0]=a.year,e._dayOfYear=a.dayOfYear)}(e),null!=e._dayOfYear&&(o=vU(e._a[0],r[0]),(e._dayOfYear>Ez(o)||0===e._dayOfYear)&&(hq(e)._overflowDayOfYear=!0),n=Az(o,0,e._dayOfYear),e._a[1]=n.getUTCMonth(),e._a[2]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=s[t]=r[t];for(;t<7;t++)e._a[t]=s[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[3]&&0===e._a[4]&&0===e._a[5]&&0===e._a[6]&&(e._nextDay=!0,e._a[3]=0),e._d=(e._useUTC?Az:Iz).apply(null,s),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[3]=24),e._w&&void 0!==e._w.d&&e._w.d!==i&&(hq(e).weekdayMismatch=!0)}}function OU(e){if(e._f!==eq.ISO_8601)if(e._f!==eq.RFC_2822){e._a=[],hq(e).empty=!0;var t,n,r,i,o,s,a=""+e._i,l=a.length,c=0;for(r=Rq(e._f,e._locale).match(Eq)||[],t=0;t<r.length;t++)i=r[t],(n=(a.match(hz(i,e))||[])[0])&&((o=a.substr(0,a.indexOf(n))).length>0&&hq(e).unusedInput.push(o),a=a.slice(a.indexOf(n)+n.length),c+=n.length),Aq[i]?(n?hq(e).empty=!1:hq(e).unusedTokens.push(i),gz(i,n,e)):e._strict&&!n&&hq(e).unusedTokens.push(i);hq(e).charsLeftOver=l-c,a.length>0&&hq(e).unusedInput.push(a),e._a[3]<=12&&!0===hq(e).bigHour&&e._a[3]>0&&(hq(e).bigHour=void 0),hq(e).parsedDateParts=e._a.slice(0),hq(e).meridiem=e._meridiem,e._a[3]=function(e,t,n){var r;if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?((r=e.isPM(n))&&t<12&&(t+=12),r||12!==t||(t=0),t):t}(e._locale,e._a[3],e._meridiem),null!==(s=hq(e).era)&&(e._a[0]=e._locale.erasConvertYear(s,e._a[0])),yU(e),oU(e)}else gU(e);else pU(e)}function bU(e){var t=e._i,n=e._f;return e._locale=e._locale||iU(e._l),null===t||void 0===n&&""===t?fq({nullInput:!0}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),yq(t)?new vq(oU(t)):(aq(t)?e._d=t:tq(n)?function(e){var t,n,r,i,o,s,a=!1;if(0===e._f.length)return hq(e).invalidFormat=!0,void(e._d=new Date(NaN));for(i=0;i<e._f.length;i++)o=0,s=!1,t=gq({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],OU(t),dq(t)&&(s=!0),o+=hq(t).charsLeftOver,o+=10*hq(t).unusedTokens.length,hq(t).score=o,a?o<r&&(r=o,n=t):(null==r||o<r||s)&&(r=o,n=t,s&&(a=!0));cq(e,n||t)}(e):n?OU(e):function(e){var t=e._i;oq(t)?e._d=new Date(eq.now()):aq(t)?e._d=new Date(t.valueOf()):"string"==typeof t?function(e){var t=hU.exec(e._i);null===t?(pU(e),!1===e._isValid&&(delete e._isValid,gU(e),!1===e._isValid&&(delete e._isValid,e._strict?e._isValid=!1:eq.createFromInputFallback(e)))):e._d=new Date(+t[1])}(e):tq(t)?(e._a=lq(t.slice(0),(function(e){return parseInt(e,10)})),yU(e)):nq(t)?function(e){if(!e._d){var t=Mq(e._i),n=void 0===t.day?t.date:t.day;e._a=lq([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],(function(e){return e&&parseInt(e,10)})),yU(e)}}(e):sq(t)?e._d=new Date(t):eq.createFromInputFallback(e)}(e),dq(e)||(e._d=null),e))}function wU(e,t,n,r,i){var o,s={};return!0!==t&&!1!==t||(r=t,t=void 0),!0!==n&&!1!==n||(r=n,n=void 0),(nq(e)&&iq(e)||tq(e)&&0===e.length)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=i,s._l=n,s._i=e,s._f=t,s._strict=r,(o=new vq(oU(bU(s))))._nextDay&&(o.add(1,"d"),o._nextDay=void 0),o}function xU(e,t,n,r){return wU(e,t,n,r,!1)}eq.createFromInputFallback=bq("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",(function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))})),eq.ISO_8601=function(){},eq.RFC_2822=function(){};var kU=bq("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){var e=xU.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:fq()})),SU=bq("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){var e=xU.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:fq()}));function _U(e,t){var n,r;if(1===t.length&&tq(t[0])&&(t=t[0]),!t.length)return xU();for(n=t[0],r=1;r<t.length;++r)t[r].isValid()&&!t[r][e](n)||(n=t[r]);return n}var TU=["year","quarter","month","week","day","hour","minute","second","millisecond"];function CU(e){var t=Mq(e),n=t.year||0,r=t.quarter||0,i=t.month||0,o=t.week||t.isoWeek||0,s=t.day||0,a=t.hour||0,l=t.minute||0,c=t.second||0,u=t.millisecond||0;this._isValid=function(e){var t,n,r=!1;for(t in e)if(rq(e,t)&&(-1===vz.call(TU,t)||null!=e[t]&&isNaN(e[t])))return!1;for(n=0;n<TU.length;++n)if(e[TU[n]]){if(r)return!1;parseFloat(e[TU[n]])!==qq(e[TU[n]])&&(r=!0)}return!0}(t),this._milliseconds=+u+1e3*c+6e4*l+1e3*a*60*60,this._days=+s+7*o,this._months=+i+3*r+12*n,this._data={},this._locale=iU(),this._bubble()}function EU(e){return e instanceof CU}function QU(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function IU(e,t){Pq(e,0,0,(function(){var e=this.utcOffset(),n="+";return e<0&&(e=-e,n="-"),n+Cq(~~(e/60),2)+t+Cq(~~e%60,2)}))}IU("Z",":"),IU("ZZ",""),uz("Z",lz),uz("ZZ",lz),pz(["Z","ZZ"],(function(e,t,n){n._useUTC=!0,n._tzm=PU(lz,e)}));var AU=/([\+\-]|\d\d)/gi;function PU(e,t){var n,r,i=(t||"").match(e);return null===i?null:0===(r=60*(n=((i[i.length-1]||[])+"").match(AU)||["-",0,0])[1]+qq(n[2]))?0:"+"===n[0]?r:-r}function $U(e,t){var n,r;return t._isUTC?(n=t.clone(),r=(yq(e)||aq(e)?e.valueOf():xU(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+r),eq.updateOffset(n,!1),n):xU(e).local()}function RU(e){return-Math.round(e._d.getTimezoneOffset())}function LU(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}eq.updateOffset=function(){};var DU=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,NU=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function MU(e,t){var n,r,i,o=e,s=null;return EU(e)?o={ms:e._milliseconds,d:e._days,M:e._months}:sq(e)||!isNaN(+e)?(o={},t?o[t]=+e:o.milliseconds=+e):(s=DU.exec(e))?(n="-"===s[1]?-1:1,o={y:0,d:qq(s[2])*n,h:qq(s[3])*n,m:qq(s[4])*n,s:qq(s[5])*n,ms:qq(QU(1e3*s[6]))*n}):(s=NU.exec(e))?(n="-"===s[1]?-1:1,o={y:WU(s[2],n),M:WU(s[3],n),w:WU(s[4],n),d:WU(s[5],n),h:WU(s[6],n),m:WU(s[7],n),s:WU(s[8],n)}):null==o?o={}:"object"==typeof o&&("from"in o||"to"in o)&&(i=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=$U(t,e),e.isBefore(t)?n=jU(e,t):((n=jU(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(xU(o.from),xU(o.to)),(o={}).ms=i.milliseconds,o.M=i.months),r=new CU(o),EU(e)&&rq(e,"_locale")&&(r._locale=e._locale),EU(e)&&rq(e,"_isValid")&&(r._isValid=e._isValid),r}function WU(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function jU(e,t){var n={};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function FU(e,t){return function(n,r){var i;return null===r||isNaN(+r)||(kq(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=n,n=r,r=i),VU(this,MU(n,r),e),this}}function VU(e,t,n,r){var i=t._milliseconds,o=QU(t._days),s=QU(t._months);e.isValid()&&(r=null==r||r,s&&_z(e,Uq(e,"Month")+s*n),o&&Bq(e,"Date",Uq(e,"Date")+o*n),i&&e._d.setTime(e._d.valueOf()+i*n),r&&eq.updateOffset(e,o||s))}MU.fn=CU.prototype,MU.invalid=function(){return MU(NaN)};var qU=FU(1,"add"),zU=FU(-1,"subtract");function UU(e){return"string"==typeof e||e instanceof String}function BU(e){return yq(e)||aq(e)||UU(e)||sq(e)||function(e){var t=tq(e),n=!1;t&&(n=0===e.filter((function(t){return!sq(t)&&UU(e)})).length);return t&&n}(e)||function(e){var t,n,r=nq(e)&&!iq(e),i=!1,o=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"];for(t=0;t<o.length;t+=1)n=o[t],i=i||rq(e,n);return r&&i}(e)||null==e}function YU(e){var t,n=nq(e)&&!iq(e),r=!1,i=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"];for(t=0;t<i.length;t+=1)r=r||rq(e,i[t]);return n&&r}function XU(e,t){if(e.date()<t.date())return-XU(t,e);var n=12*(t.year()-e.year())+(t.month()-e.month()),r=e.clone().add(n,"months");return-(n+(t-r<0?(t-r)/(r-e.clone().add(n-1,"months")):(t-r)/(e.clone().add(n+1,"months")-r)))||0}function GU(e){var t;return void 0===e?this._locale._abbr:(null!=(t=iU(e))&&(this._locale=t),this)}eq.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",eq.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var HU=bq("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",(function(e){return void 0===e?this.localeData():this.locale(e)}));function ZU(){return this._locale}function KU(e,t){return(e%t+t)%t}function JU(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-126227808e5:new Date(e,t,n).valueOf()}function eB(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-126227808e5:Date.UTC(e,t,n)}function tB(e,t){return t.erasAbbrRegex(e)}function nB(){var e,t,n=[],r=[],i=[],o=[],s=this.eras();for(e=0,t=s.length;e<t;++e)r.push(dz(s[e].name)),n.push(dz(s[e].abbr)),i.push(dz(s[e].narrow)),o.push(dz(s[e].name)),o.push(dz(s[e].abbr)),o.push(dz(s[e].narrow));this._erasRegex=new RegExp("^("+o.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+r.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+n.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+i.join("|")+")","i")}function rB(e,t){Pq(0,[e,e.length],0,t)}function iB(e,t,n,r,i){var o;return null==e?Rz(this,r,i).year:(t>(o=Lz(e,r,i))&&(t=o),oB.call(this,e,t,n,r,i))}function oB(e,t,n,r,i){var o=$z(e,t,n,r,i),s=Az(o.year,0,o.dayOfYear);return this.year(s.getUTCFullYear()),this.month(s.getUTCMonth()),this.date(s.getUTCDate()),this}Pq("N",0,0,"eraAbbr"),Pq("NN",0,0,"eraAbbr"),Pq("NNN",0,0,"eraAbbr"),Pq("NNNN",0,0,"eraName"),Pq("NNNNN",0,0,"eraNarrow"),Pq("y",["y",1],"yo","eraYear"),Pq("y",["yy",2],0,"eraYear"),Pq("y",["yyy",3],0,"eraYear"),Pq("y",["yyyy",4],0,"eraYear"),uz("N",tB),uz("NN",tB),uz("NNN",tB),uz("NNNN",(function(e,t){return t.erasNameRegex(e)})),uz("NNNNN",(function(e,t){return t.erasNarrowRegex(e)})),pz(["N","NN","NNN","NNNN","NNNNN"],(function(e,t,n,r){var i=n._locale.erasParse(e,r,n._strict);i?hq(n).era=i:hq(n).invalidEra=e})),uz("y",oz),uz("yy",oz),uz("yyy",oz),uz("yyyy",oz),uz("yo",(function(e,t){return t._eraYearOrdinalRegex||oz})),pz(["y","yy","yyy","yyyy"],0),pz(["yo"],(function(e,t,n,r){var i;n._locale._eraYearOrdinalRegex&&(i=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[0]=n._locale.eraYearOrdinalParse(e,i):t[0]=parseInt(e,10)})),Pq(0,["gg",2],0,(function(){return this.weekYear()%100})),Pq(0,["GG",2],0,(function(){return this.isoWeekYear()%100})),rB("gggg","weekYear"),rB("ggggg","weekYear"),rB("GGGG","isoWeekYear"),rB("GGGGG","isoWeekYear"),Dq("weekYear","gg"),Dq("isoWeekYear","GG"),jq("weekYear",1),jq("isoWeekYear",1),uz("G",sz),uz("g",sz),uz("GG",Jq,Gq),uz("gg",Jq,Gq),uz("GGGG",rz,Zq),uz("gggg",rz,Zq),uz("GGGGG",iz,Kq),uz("ggggg",iz,Kq),mz(["gggg","ggggg","GGGG","GGGGG"],(function(e,t,n,r){t[r.substr(0,2)]=qq(e)})),mz(["gg","GG"],(function(e,t,n,r){t[r]=eq.parseTwoDigitYear(e)})),Pq("Q",0,"Qo","quarter"),Dq("quarter","Q"),jq("quarter",7),uz("Q",Xq),pz("Q",(function(e,t){t[1]=3*(qq(e)-1)})),Pq("D",["DD",2],"Do","date"),Dq("date","D"),jq("date",9),uz("D",Jq),uz("DD",Jq,Gq),uz("Do",(function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient})),pz(["D","DD"],2),pz("Do",(function(e,t){t[2]=qq(e.match(Jq)[0])}));var sB=zq("Date",!0);Pq("DDD",["DDDD",3],"DDDo","dayOfYear"),Dq("dayOfYear","DDD"),jq("dayOfYear",4),uz("DDD",nz),uz("DDDD",Hq),pz(["DDD","DDDD"],(function(e,t,n){n._dayOfYear=qq(e)})),Pq("m",["mm",2],0,"minute"),Dq("minute","m"),jq("minute",14),uz("m",Jq),uz("mm",Jq,Gq),pz(["m","mm"],4);var aB=zq("Minutes",!1);Pq("s",["ss",2],0,"second"),Dq("second","s"),jq("second",15),uz("s",Jq),uz("ss",Jq,Gq),pz(["s","ss"],5);var lB,cB,uB=zq("Seconds",!1);for(Pq("S",0,0,(function(){return~~(this.millisecond()/100)})),Pq(0,["SS",2],0,(function(){return~~(this.millisecond()/10)})),Pq(0,["SSS",3],0,"millisecond"),Pq(0,["SSSS",4],0,(function(){return 10*this.millisecond()})),Pq(0,["SSSSS",5],0,(function(){return 100*this.millisecond()})),Pq(0,["SSSSSS",6],0,(function(){return 1e3*this.millisecond()})),Pq(0,["SSSSSSS",7],0,(function(){return 1e4*this.millisecond()})),Pq(0,["SSSSSSSS",8],0,(function(){return 1e5*this.millisecond()})),Pq(0,["SSSSSSSSS",9],0,(function(){return 1e6*this.millisecond()})),Dq("millisecond","ms"),jq("millisecond",16),uz("S",nz,Xq),uz("SS",nz,Gq),uz("SSS",nz,Hq),lB="SSSS";lB.length<=9;lB+="S")uz(lB,oz);function hB(e,t){t[6]=qq(1e3*("0."+e))}for(lB="S";lB.length<=9;lB+="S")pz(lB,hB);cB=zq("Milliseconds",!1),Pq("z",0,0,"zoneAbbr"),Pq("zz",0,0,"zoneName");var dB=vq.prototype;function fB(e){return e}dB.add=qU,dB.calendar=function(e,t){1===arguments.length&&(arguments[0]?BU(arguments[0])?(e=arguments[0],t=void 0):YU(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||xU(),r=$U(n,this).startOf("day"),i=eq.calendarFormat(this,r)||"sameElse",o=t&&(Sq(t[i])?t[i].call(this,n):t[i]);return this.format(o||this.localeData().calendar(i,this,xU(n)))},dB.clone=function(){return new vq(this)},dB.diff=function(e,t,n){var r,i,o;if(!this.isValid())return NaN;if(!(r=$U(e,this)).isValid())return NaN;switch(i=6e4*(r.utcOffset()-this.utcOffset()),t=Nq(t)){case"year":o=XU(this,r)/12;break;case"month":o=XU(this,r);break;case"quarter":o=XU(this,r)/3;break;case"second":o=(this-r)/1e3;break;case"minute":o=(this-r)/6e4;break;case"hour":o=(this-r)/36e5;break;case"day":o=(this-r-i)/864e5;break;case"week":o=(this-r-i)/6048e5;break;default:o=this-r}return n?o:Vq(o)},dB.endOf=function(e){var t,n;if(void 0===(e=Nq(e))||"millisecond"===e||!this.isValid())return this;switch(n=this._isUTC?eB:JU,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=36e5-KU(t+(this._isUTC?0:6e4*this.utcOffset()),36e5)-1;break;case"minute":t=this._d.valueOf(),t+=6e4-KU(t,6e4)-1;break;case"second":t=this._d.valueOf(),t+=1e3-KU(t,1e3)-1}return this._d.setTime(t),eq.updateOffset(this,!0),this},dB.format=function(e){e||(e=this.isUtc()?eq.defaultFormatUtc:eq.defaultFormat);var t=$q(this,e);return this.localeData().postformat(t)},dB.from=function(e,t){return this.isValid()&&(yq(e)&&e.isValid()||xU(e).isValid())?MU({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},dB.fromNow=function(e){return this.from(xU(),e)},dB.to=function(e,t){return this.isValid()&&(yq(e)&&e.isValid()||xU(e).isValid())?MU({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},dB.toNow=function(e){return this.to(xU(),e)},dB.get=function(e){return Sq(this[e=Nq(e)])?this[e]():this},dB.invalidAt=function(){return hq(this).overflow},dB.isAfter=function(e,t){var n=yq(e)?e:xU(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=Nq(t)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},dB.isBefore=function(e,t){var n=yq(e)?e:xU(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=Nq(t)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},dB.isBetween=function(e,t,n,r){var i=yq(e)?e:xU(e),o=yq(t)?t:xU(t);return!!(this.isValid()&&i.isValid()&&o.isValid())&&(("("===(r=r||"()")[0]?this.isAfter(i,n):!this.isBefore(i,n))&&(")"===r[1]?this.isBefore(o,n):!this.isAfter(o,n)))},dB.isSame=function(e,t){var n,r=yq(e)?e:xU(e);return!(!this.isValid()||!r.isValid())&&("millisecond"===(t=Nq(t)||"millisecond")?this.valueOf()===r.valueOf():(n=r.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},dB.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},dB.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},dB.isValid=function(){return dq(this)},dB.lang=HU,dB.locale=GU,dB.localeData=ZU,dB.max=SU,dB.min=kU,dB.parsingFlags=function(){return cq({},hq(this))},dB.set=function(e,t){if("object"==typeof e){var n,r=function(e){var t,n=[];for(t in e)rq(e,t)&&n.push({unit:t,priority:Wq[t]});return n.sort((function(e,t){return e.priority-t.priority})),n}(e=Mq(e));for(n=0;n<r.length;n++)this[r[n].unit](e[r[n].unit])}else if(Sq(this[e=Nq(e)]))return this[e](t);return this},dB.startOf=function(e){var t,n;if(void 0===(e=Nq(e))||"millisecond"===e||!this.isValid())return this;switch(n=this._isUTC?eB:JU,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=KU(t+(this._isUTC?0:6e4*this.utcOffset()),36e5);break;case"minute":t=this._d.valueOf(),t-=KU(t,6e4);break;case"second":t=this._d.valueOf(),t-=KU(t,1e3)}return this._d.setTime(t),eq.updateOffset(this,!0),this},dB.subtract=zU,dB.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},dB.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},dB.toDate=function(){return new Date(this.valueOf())},dB.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?$q(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Sq(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",$q(n,"Z")):$q(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},dB.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e,t,n,r="moment",i="";return this.isLocal()||(r=0===this.utcOffset()?"moment.utc":"moment.parseZone",i="Z"),e="["+r+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY","-MM-DD[T]HH:mm:ss.SSS",n=i+'[")]',this.format(e+t+"-MM-DD[T]HH:mm:ss.SSS"+n)},"undefined"!=typeof Symbol&&null!=Symbol.for&&(dB[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),dB.toJSON=function(){return this.isValid()?this.toISOString():null},dB.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},dB.unix=function(){return Math.floor(this.valueOf()/1e3)},dB.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},dB.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},dB.eraName=function(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e){if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until)return r[e].name;if(r[e].until<=n&&n<=r[e].since)return r[e].name}return""},dB.eraNarrow=function(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e){if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until)return r[e].narrow;if(r[e].until<=n&&n<=r[e].since)return r[e].narrow}return""},dB.eraAbbr=function(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e){if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until)return r[e].abbr;if(r[e].until<=n&&n<=r[e].since)return r[e].abbr}return""},dB.eraYear=function(){var e,t,n,r,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e)if(n=i[e].since<=i[e].until?1:-1,r=this.clone().startOf("day").valueOf(),i[e].since<=r&&r<=i[e].until||i[e].until<=r&&r<=i[e].since)return(this.year()-eq(i[e].since).year())*n+i[e].offset;return this.year()},dB.year=Qz,dB.isLeapYear=function(){return Fq(this.year())},dB.weekYear=function(e){return iB.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},dB.isoWeekYear=function(e){return iB.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},dB.quarter=dB.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},dB.month=Tz,dB.daysInMonth=function(){return yz(this.year(),this.month())},dB.week=dB.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},dB.isoWeek=dB.isoWeeks=function(e){var t=Rz(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},dB.weeksInYear=function(){var e=this.localeData()._week;return Lz(this.year(),e.dow,e.doy)},dB.weeksInWeekYear=function(){var e=this.localeData()._week;return Lz(this.weekYear(),e.dow,e.doy)},dB.isoWeeksInYear=function(){return Lz(this.year(),1,4)},dB.isoWeeksInISOWeekYear=function(){return Lz(this.isoWeekYear(),1,4)},dB.date=sB,dB.day=dB.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=function(e,t){return"string"!=typeof e?e:isNaN(e)?"number"==typeof(e=t.weekdaysParse(e))?e:null:parseInt(e,10)}(e,this.localeData()),this.add(e-t,"d")):t},dB.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},dB.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=function(e,t){return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}(e,this.localeData());return this.day(this.day()%7?t:t-7)}return this.day()||7},dB.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},dB.hour=dB.hours=Xz,dB.minute=dB.minutes=aB,dB.second=dB.seconds=uB,dB.millisecond=dB.milliseconds=cB,dB.utcOffset=function(e,t,n){var r,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(null===(e=PU(lz,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(r=RU(this)),this._offset=e,this._isUTC=!0,null!=r&&this.add(r,"m"),i!==e&&(!t||this._changeInProgress?VU(this,MU(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,eq.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?i:RU(this)},dB.utc=function(e){return this.utcOffset(0,e)},dB.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(RU(this),"m")),this},dB.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=PU(az,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},dB.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?xU(e).utcOffset():0,(this.utcOffset()-e)%60==0)},dB.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},dB.isLocal=function(){return!!this.isValid()&&!this._isUTC},dB.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},dB.isUtc=LU,dB.isUTC=LU,dB.zoneAbbr=function(){return this._isUTC?"UTC":""},dB.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},dB.dates=bq("dates accessor is deprecated. Use date instead.",sB),dB.months=bq("months accessor is deprecated. Use month instead",Tz),dB.years=bq("years accessor is deprecated. Use year instead",Qz),dB.zone=bq("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",(function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()})),dB.isDSTShifted=bq("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",(function(){if(!oq(this._isDSTShifted))return this._isDSTShifted;var e,t={};return gq(t,this),(t=bU(t))._a?(e=t._isUTC?uq(t._a):xU(t._a),this._isDSTShifted=this.isValid()&&function(e,t,n){var r,i=Math.min(e.length,t.length),o=Math.abs(e.length-t.length),s=0;for(r=0;r<i;r++)(n&&e[r]!==t[r]||!n&&qq(e[r])!==qq(t[r]))&&s++;return s+o}(t._a,e.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}));var pB=Tq.prototype;function mB(e,t,n,r){var i=iU(),o=uq().set(r,t);return i[n](o,e)}function gB(e,t,n){if(sq(e)&&(t=e,e=void 0),e=e||"",null!=t)return mB(e,t,n,"month");var r,i=[];for(r=0;r<12;r++)i[r]=mB(e,r,n,"month");return i}function vB(e,t,n,r){"boolean"==typeof e?(sq(t)&&(n=t,t=void 0),t=t||""):(n=t=e,e=!1,sq(t)&&(n=t,t=void 0),t=t||"");var i,o=iU(),s=e?o._week.dow:0,a=[];if(null!=n)return mB(t,(n+s)%7,r,"day");for(i=0;i<7;i++)a[i]=mB(t,(i+s)%7,r,"day");return a}pB.calendar=function(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return Sq(r)?r.call(t,n):r},pB.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(Eq).map((function(e){return"MMMM"===e||"MM"===e||"DD"===e||"dddd"===e?e.slice(1):e})).join(""),this._longDateFormat[e])},pB.invalidDate=function(){return this._invalidDate},pB.ordinal=function(e){return this._ordinal.replace("%d",e)},pB.preparse=fB,pB.postformat=fB,pB.relativeTime=function(e,t,n,r){var i=this._relativeTime[n];return Sq(i)?i(e,t,n,r):i.replace(/%d/i,e)},pB.pastFuture=function(e,t){var n=this._relativeTime[e>0?"future":"past"];return Sq(n)?n(t):n.replace(/%s/i,t)},pB.set=function(e){var t,n;for(n in e)rq(e,n)&&(Sq(t=e[n])?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},pB.eras=function(e,t){var n,r,i,o=this._eras||iU("en")._eras;for(n=0,r=o.length;n<r;++n){switch(typeof o[n].since){case"string":i=eq(o[n].since).startOf("day"),o[n].since=i.valueOf()}switch(typeof o[n].until){case"undefined":o[n].until=1/0;break;case"string":i=eq(o[n].until).startOf("day").valueOf(),o[n].until=i.valueOf()}}return o},pB.erasParse=function(e,t,n){var r,i,o,s,a,l=this.eras();for(e=e.toUpperCase(),r=0,i=l.length;r<i;++r)if(o=l[r].name.toUpperCase(),s=l[r].abbr.toUpperCase(),a=l[r].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(s===e)return l[r];break;case"NNNN":if(o===e)return l[r];break;case"NNNNN":if(a===e)return l[r]}else if([o,s,a].indexOf(e)>=0)return l[r]},pB.erasConvertYear=function(e,t){var n=e.since<=e.until?1:-1;return void 0===t?eq(e.since).year():eq(e.since).year()+(t-e.offset)*n},pB.erasAbbrRegex=function(e){return rq(this,"_erasAbbrRegex")||nB.call(this),e?this._erasAbbrRegex:this._erasRegex},pB.erasNameRegex=function(e){return rq(this,"_erasNameRegex")||nB.call(this),e?this._erasNameRegex:this._erasRegex},pB.erasNarrowRegex=function(e){return rq(this,"_erasNarrowRegex")||nB.call(this),e?this._erasNarrowRegex:this._erasRegex},pB.months=function(e,t){return e?tq(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||wz).test(t)?"format":"standalone"][e.month()]:tq(this._months)?this._months:this._months.standalone},pB.monthsShort=function(e,t){return e?tq(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[wz.test(t)?"format":"standalone"][e.month()]:tq(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},pB.monthsParse=function(e,t,n){var r,i,o;if(this._monthsParseExact)return Sz.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(i=uq([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[r]||(o="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[r]=new RegExp(o.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[r].test(e))return r;if(n&&"MMM"===t&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}},pB.monthsRegex=function(e){return this._monthsParseExact?(rq(this,"_monthsRegex")||Cz.call(this),e?this._monthsStrictRegex:this._monthsRegex):(rq(this,"_monthsRegex")||(this._monthsRegex=kz),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},pB.monthsShortRegex=function(e){return this._monthsParseExact?(rq(this,"_monthsRegex")||Cz.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(rq(this,"_monthsShortRegex")||(this._monthsShortRegex=xz),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},pB.week=function(e){return Rz(e,this._week.dow,this._week.doy).week},pB.firstDayOfYear=function(){return this._week.doy},pB.firstDayOfWeek=function(){return this._week.dow},pB.weekdays=function(e,t){var n=tq(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"];return!0===e?Dz(n,this._week.dow):e?n[e.day()]:n},pB.weekdaysMin=function(e){return!0===e?Dz(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin},pB.weekdaysShort=function(e){return!0===e?Dz(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort},pB.weekdaysParse=function(e,t,n){var r,i,o;if(this._weekdaysParseExact)return qz.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(i=uq([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(o="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[r]=new RegExp(o.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[r].test(e))return r;if(n&&"ddd"===t&&this._shortWeekdaysParse[r].test(e))return r;if(n&&"dd"===t&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}},pB.weekdaysRegex=function(e){return this._weekdaysParseExact?(rq(this,"_weekdaysRegex")||zz.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(rq(this,"_weekdaysRegex")||(this._weekdaysRegex=jz),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},pB.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(rq(this,"_weekdaysRegex")||zz.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(rq(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Fz),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},pB.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(rq(this,"_weekdaysRegex")||zz.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(rq(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Vz),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},pB.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},pB.meridiem=function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},nU("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===qq(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),eq.lang=bq("moment.lang is deprecated. Use moment.locale instead.",nU),eq.langData=bq("moment.langData is deprecated. Use moment.localeData instead.",iU);var yB=Math.abs;function OB(e,t,n,r){var i=MU(t,n);return e._milliseconds+=r*i._milliseconds,e._days+=r*i._days,e._months+=r*i._months,e._bubble()}function bB(e){return e<0?Math.floor(e):Math.ceil(e)}function wB(e){return 4800*e/146097}function xB(e){return 146097*e/4800}function kB(e){return function(){return this.as(e)}}var SB=kB("ms"),_B=kB("s"),TB=kB("m"),CB=kB("h"),EB=kB("d"),QB=kB("w"),IB=kB("M"),AB=kB("Q"),PB=kB("y");function $B(e){return function(){return this.isValid()?this._data[e]:NaN}}var RB=$B("milliseconds"),LB=$B("seconds"),DB=$B("minutes"),NB=$B("hours"),MB=$B("days"),WB=$B("months"),jB=$B("years");var FB=Math.round,VB={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function qB(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}var zB=Math.abs;function UB(e){return(e>0)-(e<0)||+e}function BB(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n,r,i,o,s,a,l=zB(this._milliseconds)/1e3,c=zB(this._days),u=zB(this._months),h=this.asSeconds();return h?(e=Vq(l/60),t=Vq(e/60),l%=60,e%=60,n=Vq(u/12),u%=12,r=l?l.toFixed(3).replace(/\.?0+$/,""):"",i=h<0?"-":"",o=UB(this._months)!==UB(h)?"-":"",s=UB(this._days)!==UB(h)?"-":"",a=UB(this._milliseconds)!==UB(h)?"-":"",i+"P"+(n?o+n+"Y":"")+(u?o+u+"M":"")+(c?s+c+"D":"")+(t||e||l?"T":"")+(t?a+t+"H":"")+(e?a+e+"M":"")+(l?a+r+"S":"")):"P0D"}var YB=CU.prototype;YB.isValid=function(){return this._isValid},YB.abs=function(){var e=this._data;return this._milliseconds=yB(this._milliseconds),this._days=yB(this._days),this._months=yB(this._months),e.milliseconds=yB(e.milliseconds),e.seconds=yB(e.seconds),e.minutes=yB(e.minutes),e.hours=yB(e.hours),e.months=yB(e.months),e.years=yB(e.years),this},YB.add=function(e,t){return OB(this,e,t,1)},YB.subtract=function(e,t){return OB(this,e,t,-1)},YB.as=function(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if("month"===(e=Nq(e))||"quarter"===e||"year"===e)switch(t=this._days+r/864e5,n=this._months+wB(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(xB(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return 24*t+r/36e5;case"minute":return 1440*t+r/6e4;case"second":return 86400*t+r/1e3;case"millisecond":return Math.floor(864e5*t)+r;default:throw new Error("Unknown unit "+e)}},YB.asMilliseconds=SB,YB.asSeconds=_B,YB.asMinutes=TB,YB.asHours=CB,YB.asDays=EB,YB.asWeeks=QB,YB.asMonths=IB,YB.asQuarters=AB,YB.asYears=PB,YB.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*qq(this._months/12):NaN},YB._bubble=function(){var e,t,n,r,i,o=this._milliseconds,s=this._days,a=this._months,l=this._data;return o>=0&&s>=0&&a>=0||o<=0&&s<=0&&a<=0||(o+=864e5*bB(xB(a)+s),s=0,a=0),l.milliseconds=o%1e3,e=Vq(o/1e3),l.seconds=e%60,t=Vq(e/60),l.minutes=t%60,n=Vq(t/60),l.hours=n%24,s+=Vq(n/24),a+=i=Vq(wB(s)),s-=bB(xB(i)),r=Vq(a/12),a%=12,l.days=s,l.months=a,l.years=r,this},YB.clone=function(){return MU(this)},YB.get=function(e){return e=Nq(e),this.isValid()?this[e+"s"]():NaN},YB.milliseconds=RB,YB.seconds=LB,YB.minutes=DB,YB.hours=NB,YB.days=MB,YB.weeks=function(){return Vq(this.days()/7)},YB.months=WB,YB.years=jB,YB.humanize=function(e,t){if(!this.isValid())return this.localeData().invalidDate();var n,r,i=!1,o=VB;return"object"==typeof e&&(t=e,e=!1),"boolean"==typeof e&&(i=e),"object"==typeof t&&(o=Object.assign({},VB,t),null!=t.s&&null==t.ss&&(o.ss=t.s-1)),r=function(e,t,n,r){var i=MU(e).abs(),o=FB(i.as("s")),s=FB(i.as("m")),a=FB(i.as("h")),l=FB(i.as("d")),c=FB(i.as("M")),u=FB(i.as("w")),h=FB(i.as("y")),d=o<=n.ss&&["s",o]||o<n.s&&["ss",o]||s<=1&&["m"]||s<n.m&&["mm",s]||a<=1&&["h"]||a<n.h&&["hh",a]||l<=1&&["d"]||l<n.d&&["dd",l];return null!=n.w&&(d=d||u<=1&&["w"]||u<n.w&&["ww",u]),(d=d||c<=1&&["M"]||c<n.M&&["MM",c]||h<=1&&["y"]||["yy",h])[2]=t,d[3]=+e>0,d[4]=r,qB.apply(null,d)}(this,!i,o,n=this.localeData()),i&&(r=n.pastFuture(+this,r)),n.postformat(r)},YB.toISOString=BB,YB.toString=BB,YB.toJSON=BB,YB.locale=GU,YB.localeData=ZU,YB.toIsoString=bq("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",BB),YB.lang=HU,Pq("X",0,0,"unix"),Pq("x",0,0,"valueOf"),uz("x",sz),uz("X",/[+-]?\d+(\.\d{1,3})?/),pz("X",(function(e,t,n){n._d=new Date(1e3*parseFloat(e))})),pz("x",(function(e,t,n){n._d=new Date(qq(e))})),
//! moment.js
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function(e){if(Number(e.version.split(".")[0])>=2)e.mixin({beforeCreate:n});else{var t=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={}),e.init=e.init?[n].concat(e.init):n,t.call(this,e)}}function n(){var e=this.$options;e.store?this.$store="function"==typeof e.store?e.store():e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}}(k4=e)}C4.state.get=function(){return this._vm._data.$$state},C4.state.set=function(e){},T4.prototype.commit=function(e,t,n){var r=this,i=$4(e,t,n),o=i.type,s=i.payload,a={type:o,payload:s},l=this._mutations[o];l&&(this._withCommit((function(){l.forEach((function(e){e(s)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},T4.prototype.dispatch=function(e,t){var n=this,r=$4(e,t),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(s,n.state)}))}catch(l6){}var l=a.length>1?Promise.all(a.map((function(e){return e(o)}))):a[0](o);return new Promise((function(e,t){l.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(s,n.state)}))}catch(l6){}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(s,n.state,e)}))}catch(l6){}t(e)}))}))}},T4.prototype.subscribe=function(e,t){return E4(e,this._subscribers,t)},T4.prototype.subscribeAction=function(e,t){return E4("function"==typeof e?{before:e}:e,this._actionSubscribers,t)},T4.prototype.watch=function(e,t,n){var r=this;return this._watcherVM.$watch((function(){return e(r.state,r.getters)}),t,n)},T4.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._vm._data.$$state=e}))},T4.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"==typeof e&&(e=[e]),this._modules.register(e,t),A4(this,this.state,e,this._modules.get(e),n.preserveState),I4(this,this.state)},T4.prototype.unregisterModule=function(e){var t=this;"string"==typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=P4(t.state,e.slice(0,-1));k4.delete(n,e[e.length-1])})),Q4(this)},T4.prototype.hasModule=function(e){return"string"==typeof e&&(e=[e]),this._modules.isRegistered(e)},T4.prototype.hotUpdate=function(e){this._modules.update(e),Q4(this,!0)},T4.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(T4.prototype,C4);var L4=j4((function(e,t){var n={};return W4(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=F4(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"==typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),D4=j4((function(e,t){var n={};return W4(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];var r=this.$store.commit;if(e){var o=F4(this.$store,"mapMutations",e);if(!o)return;r=o.context.commit}return"function"==typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),N4=j4((function(e,t){var n={};return W4(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||F4(this.$store,"mapGetters",e))return this.$store.getters[i]},n[r].vuex=!0})),n})),M4=j4((function(e,t){var n={};return W4(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var o=F4(this.$store,"mapActions",e);if(!o)return;r=o.context.dispatch}return"function"==typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n}));function W4(e){return function(e){return Array.isArray(e)||b4(e)}(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function j4(e){return function(t,n){return"string"!=typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function F4(e,t,n){return e._modulesNamespaceMap[n]}function V4(e,t,n){var r=n?e.groupCollapsed:e.group;try{r.call(e,t)}catch(l6){e.log(t)}}function q4(e){try{e.groupEnd()}catch(l6){e.log("—— log end ——")}}function z4(){var e=new Date;return" @ "+U4(e.getHours(),2)+":"+U4(e.getMinutes(),2)+":"+U4(e.getSeconds(),2)+"."+U4(e.getMilliseconds(),3)}function U4(e,t){return n="0",r=t-e.toString().length,new Array(r+1).join(n)+e;var n,r}var B4,Y4={Store:T4,install:R4,version:"3.6.2",mapState:L4,mapMutations:D4,mapGetters:N4,mapActions:M4,createNamespacedHelpers:function(e){return{mapState:L4.bind(null,e),mapGetters:N4.bind(null,e),mapMutations:D4.bind(null,e),mapActions:M4.bind(null,e)}},createLogger:function(e){void 0===e&&(e={});var t=e.collapsed;void 0===t&&(t=!0);var n=e.filter;void 0===n&&(n=function(e,t,n){return!0});var r=e.transformer;void 0===r&&(r=function(e){return e});var i=e.mutationTransformer;void 0===i&&(i=function(e){return e});var o=e.actionFilter;void 0===o&&(o=function(e,t){return!0});var s=e.actionTransformer;void 0===s&&(s=function(e){return e});var a=e.logMutations;void 0===a&&(a=!0);var l=e.logActions;void 0===l&&(l=!0);var c=e.logger;return void 0===c&&(c=console),function(e){var u=y4(e.state);void 0!==c&&(a&&e.subscribe((function(e,o){var s=y4(o);if(n(e,u,s)){var a=z4(),l=i(e),h="mutation "+e.type+a;V4(c,h,t),c.log("%c prev state","color: #9E9E9E; font-weight: bold",r(u)),c.log("%c mutation","color: #03A9F4; font-weight: bold",l),c.log("%c next state","color: #4CAF50; font-weight: bold",r(s)),q4(c)}u=s})),l&&e.subscribeAction((function(e,n){if(o(e,n)){var r=z4(),i=s(e),a="action "+e.type+r;V4(c,a,t),c.log("%c action","color: #03A9F4; font-weight: bold",i),q4(c)}})))}}},X4={exports:{}};B4=X4,function(e,t,n){if(e){for(var r,i={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},o={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},s={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},a={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},l=1;l<20;++l)i[111+l]="f"+l;for(l=0;l<=9;++l)i[l+96]=l.toString();m.prototype.bind=function(e,t,n){var r=this;return e=e instanceof Array?e:[e],r._bindMultiple.call(r,e,t,n),r},m.prototype.unbind=function(e,t){return this.bind.call(this,e,(function(){}),t)},m.prototype.trigger=function(e,t){var n=this;return n._directMap[e+":"+t]&&n._directMap[e+":"+t]({},e),n},m.prototype.reset=function(){var e=this;return e._callbacks={},e._directMap={},e},m.prototype.stopCallback=function(e,t){if((" "+t.className+" ").indexOf(" mousetrap ")>-1)return!1;if(p(t,this.target))return!1;if("composedPath"in e&&"function"==typeof e.composedPath){var n=e.composedPath()[0];n!==e.target&&(t=n)}return"INPUT"==t.tagName||"SELECT"==t.tagName||"TEXTAREA"==t.tagName||t.isContentEditable},m.prototype.handleKey=function(){var e=this;return e._handleKey.apply(e,arguments)},m.addKeycodes=function(e){for(var t in e)e.hasOwnProperty(t)&&(i[t]=e[t]);r=null},m.init=function(){var e=m(t);for(var n in e)"_"!==n.charAt(0)&&(m[n]=function(t){return function(){return e[t].apply(e,arguments)}}(n))},m.init(),e.Mousetrap=m,B4.exports&&(B4.exports=m)}function c(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)}function u(e){if("keypress"==e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return i[e.which]?i[e.which]:o[e.which]?o[e.which]:String.fromCharCode(e.which).toLowerCase()}function h(e){return"shift"==e||"ctrl"==e||"alt"==e||"meta"==e}function d(e,t,n){return n||(n=function(){if(!r)for(var e in r={},i)e>95&&e<112||i.hasOwnProperty(e)&&(r[i[e]]=e);return r}()[e]?"keydown":"keypress"),"keypress"==n&&t.length&&(n="keydown"),n}function f(e,t){var n,r,i,o=[];for(n=function(e){return"+"===e?["+"]:(e=e.replace(/\+{2}/g,"+plus")).split("+")}(e),i=0;i<n.length;++i)r=n[i],a[r]&&(r=a[r]),t&&"keypress"!=t&&s[r]&&(r=s[r],o.push("shift")),h(r)&&o.push(r);return{key:r,modifiers:o,action:t=d(r,o,t)}}function p(e,n){return null!==e&&e!==t&&(e===n||p(e.parentNode,n))}function m(e){var n=this;if(e=e||t,!(n instanceof m))return new m(e);n.target=e,n._callbacks={},n._directMap={};var r,i={},o=!1,s=!1,a=!1;function l(e){e=e||{};var t,n=!1;for(t in i)e[t]?n=!0:i[t]=0;n||(a=!1)}function d(e,t,r,o,s,a){var l,c,u,d,f=[],p=r.type;if(!n._callbacks[e])return[];for("keyup"==p&&h(e)&&(t=[e]),l=0;l<n._callbacks[e].length;++l)if(c=n._callbacks[e][l],(o||!c.seq||i[c.seq]==c.level)&&p==c.action&&("keypress"==p&&!r.metaKey&&!r.ctrlKey||(u=t,d=c.modifiers,u.sort().join(",")===d.sort().join(",")))){var m=!o&&c.combo==s,g=o&&c.seq==o&&c.level==a;(m||g)&&n._callbacks[e].splice(l,1),f.push(c)}return f}function p(e,t,r,i){n.stopCallback(t,t.target||t.srcElement,r,i)||!1===e(t,r)&&(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}(t),function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}(t))}function g(e){"number"!=typeof e.which&&(e.which=e.keyCode);var t=u(e);t&&("keyup"!=e.type||o!==t?n.handleKey(t,function(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}(e),e):o=!1)}function v(e,t,n,s){function c(t){return function(){a=t,++i[e],clearTimeout(r),r=setTimeout(l,1e3)}}function h(t){p(n,t,e),"keyup"!==s&&(o=u(t)),setTimeout(l,10)}i[e]=0;for(var d=0;d<t.length;++d){var m=d+1===t.length?h:c(s||f(t[d+1]).action);y(t[d],m,s,e,d)}}function y(e,t,r,i,o){n._directMap[e+":"+r]=t;var s,a=(e=e.replace(/\s+/g," ")).split(" ");a.length>1?v(e,a,t,r):(s=f(e,r),n._callbacks[s.key]=n._callbacks[s.key]||[],d(s.key,s.modifiers,{type:s.action},i,e,o),n._callbacks[s.key][i?"unshift":"push"]({callback:t,modifiers:s.modifiers,action:s.action,seq:i,level:o,combo:e}))}n._handleKey=function(e,t,n){var r,i=d(e,t,n),o={},c=0,u=!1;for(r=0;r<i.length;++r)i[r].seq&&(c=Math.max(c,i[r].level));for(r=0;r<i.length;++r)if(i[r].seq){if(i[r].level!=c)continue;u=!0,o[i[r].seq]=1,p(i[r].callback,n,i[r].combo,i[r].seq)}else u||p(i[r].callback,n,i[r].combo);var f="keypress"==n.type&&s;n.type!=a||h(e)||f||l(o),s=u&&"keydown"==n.type},n._bindMultiple=function(e,t,n){for(var r=0;r<e.length;++r)y(e[r],t,n)},c(e,"keypress",g),c(e,"keydown",g),c(e,"keyup",g)}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null);var G4=X4.exports;!function(e){var t={},n=e.prototype.stopCallback;e.prototype.stopCallback=function(e,r,i,o){return!!this.paused||!t[i]&&!t[o]&&n.call(this,e,r,i)},e.prototype.bindGlobal=function(e,n,r){if(this.bind(e,n,r),e instanceof Array)for(n=0;n<e.length;n++)t[e[n]]=!0;else t[e]=!0},e.init()}(Mousetrap);var H4={exports:{}},Z4=H4.exports=function e(t,n,r){function i(s,a){if(!n[s]){if(!t[s]){if(!a&&Ni)return Ni(s);if(o)return o(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[s]={exports:{}};t[s][0].call(c.exports,(function(e){var n=t[s][1][e];return i(n||e)}),c,c.exports,e,t,n,r)}return n[s].exports}for(var o=Ni,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t,n){(function(e){var n,r,i=e.MutationObserver||e.WebKitMutationObserver;if(i){var o=0,s=new i(u),a=e.document.createTextNode("");s.observe(a,{characterData:!0}),n=function(){a.data=o=++o%2}}else if(e.setImmediate||void 0===e.MessageChannel)n="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){u(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(u,0)};else{var l=new e.MessageChannel;l.port1.onmessage=u,n=function(){l.port2.postMessage(0)}}var c=[];function u(){var e,t;r=!0;for(var n=c.length;n;){for(t=c,c=[],e=-1;++e<n;)t[e]();n=c.length}r=!1}function h(e){1!==c.push(e)||r||n()}t.exports=h}).call(this,void 0!==Ri?Ri:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,n){var r=e(1);function i(){}var o={},s=["REJECTED"],a=["FULFILLED"],l=["PENDING"];function c(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=l,this.queue=[],this.outcome=void 0,e!==i&&f(this,e)}function u(e,t,n){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof n&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function h(e,t,n){r((function(){var r;try{r=t(n)}catch(l6){return o.reject(e,l6)}r===e?o.reject(e,new TypeError("Cannot resolve promise with itself")):o.resolve(e,r)}))}function d(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function f(e,t){var n=!1;function r(t){n||(n=!0,o.reject(e,t))}function i(t){n||(n=!0,o.resolve(e,t))}function s(){t(i,r)}var a=p(s);"error"===a.status&&r(a.value)}function p(e,t){var n={};try{n.value=e(t),n.status="success"}catch(l6){n.status="error",n.value=l6}return n}function m(e){return e instanceof this?e:o.resolve(new this(i),e)}function g(e){var t=new this(i);return o.reject(t,e)}function v(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var s=new Array(n),a=0,l=-1,c=new this(i);++l<n;)u(e[l],l);return c;function u(e,i){function l(e){s[i]=e,++a!==n||r||(r=!0,o.resolve(c,s))}t.resolve(e).then(l,(function(e){r||(r=!0,o.reject(c,e))}))}}function y(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var s=-1,a=new this(i);++s<n;)l(e[s]);return a;function l(e){t.resolve(e).then((function(e){r||(r=!0,o.resolve(a,e))}),(function(e){r||(r=!0,o.reject(a,e))}))}}t.exports=c,c.prototype.catch=function(e){return this.then(null,e)},c.prototype.then=function(e,t){if("function"!=typeof e&&this.state===a||"function"!=typeof t&&this.state===s)return this;var n=new this.constructor(i);return this.state!==l?h(n,this.state===a?e:t,this.outcome):this.queue.push(new u(n,e,t)),n},u.prototype.callFulfilled=function(e){o.resolve(this.promise,e)},u.prototype.otherCallFulfilled=function(e){h(this.promise,this.onFulfilled,e)},u.prototype.callRejected=function(e){o.reject(this.promise,e)},u.prototype.otherCallRejected=function(e){h(this.promise,this.onRejected,e)},o.resolve=function(e,t){var n=p(d,t);if("error"===n.status)return o.reject(e,n.value);var r=n.value;if(r)f(e,r);else{e.state=a,e.outcome=t;for(var i=-1,s=e.queue.length;++i<s;)e.queue[i].callFulfilled(t)}return e},o.reject=function(e,t){e.state=s,e.outcome=t;for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t);return e},c.resolve=m,c.reject=g,c.all=v,c.race=y},{1:1}],3:[function(e,t,n){(function(t){"function"!=typeof t.Promise&&(t.Promise=e(2))}).call(this,void 0!==Ri?Ri:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(e,t,n){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(l6){return}}var s=o();function a(){try{if(!s||!s.open)return!1;var e="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!e||t)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(l6){return!1}}function l(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(l6){if("TypeError"!==l6.name)throw l6;for(var n=new("undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder),r=0;r<e.length;r+=1)n.append(e[r]);return n.getBlob(t.type)}}"undefined"==typeof Promise&&e(3);var c=Promise;function u(e,t){t&&e.then((function(e){t(null,e)}),(function(e){t(e)}))}function h(e,t,n){"function"==typeof t&&e.then(t),"function"==typeof n&&e.catch(n)}function d(e){return"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e)),e}function f(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}var p="local-forage-detect-blob-support",m=void 0,g={},v=Object.prototype.toString,y="readonly",O="readwrite";function b(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),i=0;i<t;i++)r[i]=e.charCodeAt(i);return n}function w(e){return new c((function(t){var n=e.transaction(p,O),r=l([""]);n.objectStore(p).put(r,"key"),n.onabort=function(e){e.preventDefault(),e.stopPropagation(),t(!1)},n.oncomplete=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),n=navigator.userAgent.match(/Edge\//);t(n||!e||parseInt(e[1],10)>=43)}})).catch((function(){return!1}))}function x(e){return"boolean"==typeof m?c.resolve(m):w(e).then((function(e){return m=e}))}function k(e){var t=g[e.name],n={};n.promise=new c((function(e,t){n.resolve=e,n.reject=t})),t.deferredOperations.push(n),t.dbReady?t.dbReady=t.dbReady.then((function(){return n.promise})):t.dbReady=n.promise}function S(e){var t=g[e.name].deferredOperations.pop();if(t)return t.resolve(),t.promise}function _(e,t){var n=g[e.name].deferredOperations.pop();if(n)return n.reject(t),n.promise}function T(e,t){return new c((function(n,r){if(g[e.name]=g[e.name]||D(),e.db){if(!t)return n(e.db);k(e),e.db.close()}var i=[e.name];t&&i.push(e.version);var o=s.open.apply(s,i);t&&(o.onupgradeneeded=function(t){var n=o.result;try{n.createObjectStore(e.storeName),t.oldVersion<=1&&n.createObjectStore(p)}catch(r){if("ConstraintError"!==r.name)throw r;console.warn('The database "'+e.name+'" has been upgraded from version '+t.oldVersion+" to version "+t.newVersion+', but the storage "'+e.storeName+'" already exists.')}}),o.onerror=function(e){e.preventDefault(),r(o.error)},o.onsuccess=function(){var t=o.result;t.onversionchange=function(e){e.target.close()},n(t),S(e)}}))}function C(e){return T(e,!1)}function E(e){return T(e,!0)}function Q(e,t){if(!e.db)return!0;var n=!e.db.objectStoreNames.contains(e.storeName),r=e.version<e.db.version,i=e.version>e.db.version;if(r&&(e.version!==t&&console.warn('The database "'+e.name+"\" can't be downgraded from version "+e.db.version+" to version "+e.version+"."),e.version=e.db.version),i||n){if(n){var o=e.db.version+1;o>e.version&&(e.version=o)}return!0}return!1}function I(e){return new c((function(t,n){var r=new FileReader;r.onerror=n,r.onloadend=function(n){var r=btoa(n.target.result||"");t({__local_forage_encoded_blob:!0,data:r,type:e.type})},r.readAsBinaryString(e)}))}function A(e){return l([b(atob(e.data))],{type:e.type})}function P(e){return e&&e.__local_forage_encoded_blob}function $(e){var t=this,n=t._initReady().then((function(){var e=g[t._dbInfo.name];if(e&&e.dbReady)return e.dbReady}));return h(n,e,e),n}function R(e){k(e);for(var t=g[e.name],n=t.forages,r=0;r<n.length;r++){var i=n[r];i._dbInfo.db&&(i._dbInfo.db.close(),i._dbInfo.db=null)}return e.db=null,C(e).then((function(t){return e.db=t,Q(e)?E(e):t})).then((function(r){e.db=t.db=r;for(var i=0;i<n.length;i++)n[i]._dbInfo.db=r})).catch((function(t){throw _(e,t),t}))}function L(e,t,n,r){void 0===r&&(r=1);try{var i=e.db.transaction(e.storeName,t);n(null,i)}catch(o){if(r>0&&(!e.db||"InvalidStateError"===o.name||"NotFoundError"===o.name))return c.resolve().then((function(){if(!e.db||"NotFoundError"===o.name&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),E(e)})).then((function(){return R(e).then((function(){L(e,t,n,r-1)}))})).catch(n);n(o)}}function D(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function N(e){var t=this,n={db:null};if(e)for(var r in e)n[r]=e[r];var i=g[n.name];i||(i=D(),g[n.name]=i),i.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=$);var o=[];function s(){return c.resolve()}for(var a=0;a<i.forages.length;a++){var l=i.forages[a];l!==t&&o.push(l._initReady().catch(s))}var u=i.forages.slice(0);return c.all(o).then((function(){return n.db=i.db,C(n)})).then((function(e){return n.db=e,Q(n,t._defaultConfig.version)?E(n):e})).then((function(e){n.db=i.db=e,t._dbInfo=n;for(var r=0;r<u.length;r++){var o=u[r];o!==t&&(o._dbInfo.db=n.db,o._dbInfo.version=n.version)}}))}function M(e,t){var n=this;e=d(e);var r=new c((function(t,r){n.ready().then((function(){L(n._dbInfo,y,(function(i,o){if(i)return r(i);try{var s=o.objectStore(n._dbInfo.storeName).get(e);s.onsuccess=function(){var e=s.result;void 0===e&&(e=null),P(e)&&(e=A(e)),t(e)},s.onerror=function(){r(s.error)}}catch(l6){r(l6)}}))})).catch(r)}));return u(r,t),r}function W(e,t){var n=this,r=new c((function(t,r){n.ready().then((function(){L(n._dbInfo,y,(function(i,o){if(i)return r(i);try{var s=o.objectStore(n._dbInfo.storeName).openCursor(),a=1;s.onsuccess=function(){var n=s.result;if(n){var r=n.value;P(r)&&(r=A(r));var i=e(r,n.key,a++);void 0!==i?t(i):n.continue()}else t()},s.onerror=function(){r(s.error)}}catch(l6){r(l6)}}))})).catch(r)}));return u(r,t),r}function j(e,t,n){var r=this;e=d(e);var i=new c((function(n,i){var o;r.ready().then((function(){return o=r._dbInfo,"[object Blob]"===v.call(t)?x(o.db).then((function(e){return e?t:I(t)})):t})).then((function(t){L(r._dbInfo,O,(function(o,s){if(o)return i(o);try{var a=s.objectStore(r._dbInfo.storeName);null===t&&(t=void 0);var l=a.put(t,e);s.oncomplete=function(){void 0===t&&(t=null),n(t)},s.onabort=s.onerror=function(){var e=l.error?l.error:l.transaction.error;i(e)}}catch(l6){i(l6)}}))})).catch(i)}));return u(i,n),i}function F(e,t){var n=this;e=d(e);var r=new c((function(t,r){n.ready().then((function(){L(n._dbInfo,O,(function(i,o){if(i)return r(i);try{var s=o.objectStore(n._dbInfo.storeName).delete(e);o.oncomplete=function(){t()},o.onerror=function(){r(s.error)},o.onabort=function(){var e=s.error?s.error:s.transaction.error;r(e)}}catch(l6){r(l6)}}))})).catch(r)}));return u(r,t),r}function V(e){var t=this,n=new c((function(e,n){t.ready().then((function(){L(t._dbInfo,O,(function(r,i){if(r)return n(r);try{var o=i.objectStore(t._dbInfo.storeName).clear();i.oncomplete=function(){e()},i.onabort=i.onerror=function(){var e=o.error?o.error:o.transaction.error;n(e)}}catch(l6){n(l6)}}))})).catch(n)}));return u(n,e),n}function q(e){var t=this,n=new c((function(e,n){t.ready().then((function(){L(t._dbInfo,y,(function(r,i){if(r)return n(r);try{var o=i.objectStore(t._dbInfo.storeName).count();o.onsuccess=function(){e(o.result)},o.onerror=function(){n(o.error)}}catch(l6){n(l6)}}))})).catch(n)}));return u(n,e),n}function z(e,t){var n=this,r=new c((function(t,r){e<0?t(null):n.ready().then((function(){L(n._dbInfo,y,(function(i,o){if(i)return r(i);try{var s=o.objectStore(n._dbInfo.storeName),a=!1,l=s.openKeyCursor();l.onsuccess=function(){var n=l.result;n?0===e||a?t(n.key):(a=!0,n.advance(e)):t(null)},l.onerror=function(){r(l.error)}}catch(l6){r(l6)}}))})).catch(r)}));return u(r,t),r}function U(e){var t=this,n=new c((function(e,n){t.ready().then((function(){L(t._dbInfo,y,(function(r,i){if(r)return n(r);try{var o=i.objectStore(t._dbInfo.storeName).openKeyCursor(),s=[];o.onsuccess=function(){var t=o.result;t?(s.push(t.key),t.continue()):e(s)},o.onerror=function(){n(o.error)}}catch(l6){n(l6)}}))})).catch(n)}));return u(n,e),n}function B(e,t){t=f.apply(this,arguments);var n=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r,i=this;if(e.name){var o=e.name===n.name&&i._dbInfo.db?c.resolve(i._dbInfo.db):C(e).then((function(t){var n=g[e.name],r=n.forages;n.db=t;for(var i=0;i<r.length;i++)r[i]._dbInfo.db=t;return t}));r=e.storeName?o.then((function(t){if(t.objectStoreNames.contains(e.storeName)){var n=t.version+1;k(e);var r=g[e.name],i=r.forages;t.close();for(var o=0;o<i.length;o++){var a=i[o];a._dbInfo.db=null,a._dbInfo.version=n}return new c((function(t,r){var i=s.open(e.name,n);i.onerror=function(e){i.result.close(),r(e)},i.onupgradeneeded=function(){i.result.deleteObjectStore(e.storeName)},i.onsuccess=function(){var e=i.result;e.close(),t(e)}})).then((function(e){r.db=e;for(var t=0;t<i.length;t++){var n=i[t];n._dbInfo.db=e,S(n._dbInfo)}})).catch((function(t){throw(_(e,t)||c.resolve()).catch((function(){})),t}))}})):o.then((function(t){k(e);var n=g[e.name],r=n.forages;t.close();for(var i=0;i<r.length;i++)r[i]._dbInfo.db=null;return new c((function(t,n){var r=s.deleteDatabase(e.name);r.onerror=function(){var e=r.result;e&&e.close(),n(r.error)},r.onblocked=function(){console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},r.onsuccess=function(){var e=r.result;e&&e.close(),t(e)}})).then((function(e){n.db=e;for(var t=0;t<r.length;t++)S(r[t]._dbInfo)})).catch((function(t){throw(_(e,t)||c.resolve()).catch((function(){})),t}))}))}else r=c.reject("Invalid arguments");return u(r,t),r}var Y={_driver:"asyncStorage",_initStorage:N,_support:a(),iterate:W,getItem:M,setItem:j,removeItem:F,clear:V,length:q,key:z,keys:U,dropInstance:B};function X(){return"function"==typeof openDatabase}var G="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",H="~~local_forage_type~",Z=/^~~local_forage_type~([^~]+)~/,K="__lfsc__:",J=K.length,ee="arbf",te="blob",ne="si08",re="ui08",ie="uic8",oe="si16",se="si32",ae="ur16",le="ui32",ce="fl32",ue="fl64",he=J+ee.length,de=Object.prototype.toString;function fe(e){var t,n,r,i,o,s=.75*e.length,a=e.length,l=0;"="===e[e.length-1]&&(s--,"="===e[e.length-2]&&s--);var c=new ArrayBuffer(s),u=new Uint8Array(c);for(t=0;t<a;t+=4)n=G.indexOf(e[t]),r=G.indexOf(e[t+1]),i=G.indexOf(e[t+2]),o=G.indexOf(e[t+3]),u[l++]=n<<2|r>>4,u[l++]=(15&r)<<4|i>>2,u[l++]=(3&i)<<6|63&o;return c}function pe(e){var t,n=new Uint8Array(e),r="";for(t=0;t<n.length;t+=3)r+=G[n[t]>>2],r+=G[(3&n[t])<<4|n[t+1]>>4],r+=G[(15&n[t+1])<<2|n[t+2]>>6],r+=G[63&n[t+2]];return n.length%3==2?r=r.substring(0,r.length-1)+"=":n.length%3==1&&(r=r.substring(0,r.length-2)+"=="),r}function me(e,t){var n="";if(e&&(n=de.call(e)),e&&("[object ArrayBuffer]"===n||e.buffer&&"[object ArrayBuffer]"===de.call(e.buffer))){var r,i=K;e instanceof ArrayBuffer?(r=e,i+=ee):(r=e.buffer,"[object Int8Array]"===n?i+=ne:"[object Uint8Array]"===n?i+=re:"[object Uint8ClampedArray]"===n?i+=ie:"[object Int16Array]"===n?i+=oe:"[object Uint16Array]"===n?i+=ae:"[object Int32Array]"===n?i+=se:"[object Uint32Array]"===n?i+=le:"[object Float32Array]"===n?i+=ce:"[object Float64Array]"===n?i+=ue:t(new Error("Failed to get type for BinaryArray"))),t(i+pe(r))}else if("[object Blob]"===n){var o=new FileReader;o.onload=function(){var n=H+e.type+"~"+pe(this.result);t(K+te+n)},o.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(l6){console.error("Couldn't convert value into a JSON string: ",e),t(null,l6)}}function ge(e){if(e.substring(0,J)!==K)return JSON.parse(e);var t,n=e.substring(he),r=e.substring(J,he);if(r===te&&Z.test(n)){var i=n.match(Z);t=i[1],n=n.substring(i[0].length)}var o=fe(n);switch(r){case ee:return o;case te:return l([o],{type:t});case ne:return new Int8Array(o);case re:return new Uint8Array(o);case ie:return new Uint8ClampedArray(o);case oe:return new Int16Array(o);case ae:return new Uint16Array(o);case se:return new Int32Array(o);case le:return new Uint32Array(o);case ce:return new Float32Array(o);case ue:return new Float64Array(o);default:throw new Error("Unkown type: "+r)}}var ve={serialize:me,deserialize:ge,stringToBuffer:fe,bufferToString:pe};function ye(e,t,n,r){e.executeSql("CREATE TABLE IF NOT EXISTS "+t.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],n,r)}function Oe(e){var t=this,n={db:null};if(e)for(var r in e)n[r]="string"!=typeof e[r]?e[r].toString():e[r];var i=new c((function(e,r){try{n.db=openDatabase(n.name,String(n.version),n.description,n.size)}catch(l6){return r(l6)}n.db.transaction((function(i){ye(i,n,(function(){t._dbInfo=n,e()}),(function(e,t){r(t)}))}),r)}));return n.serializer=ve,i}function be(e,t,n,r,i,o){e.executeSql(n,r,i,(function(e,s){s.code===s.SYNTAX_ERR?e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],(function(e,a){a.rows.length?o(e,s):ye(e,t,(function(){e.executeSql(n,r,i,o)}),o)}),o):o(e,s)}),o)}function we(e,t){var n=this;e=d(e);var r=new c((function(t,r){n.ready().then((function(){var i=n._dbInfo;i.db.transaction((function(n){be(n,i,"SELECT * FROM "+i.storeName+" WHERE key = ? LIMIT 1",[e],(function(e,n){var r=n.rows.length?n.rows.item(0).value:null;r&&(r=i.serializer.deserialize(r)),t(r)}),(function(e,t){r(t)}))}))})).catch(r)}));return u(r,t),r}function xe(e,t){var n=this,r=new c((function(t,r){n.ready().then((function(){var i=n._dbInfo;i.db.transaction((function(n){be(n,i,"SELECT * FROM "+i.storeName,[],(function(n,r){for(var o=r.rows,s=o.length,a=0;a<s;a++){var l=o.item(a),c=l.value;if(c&&(c=i.serializer.deserialize(c)),void 0!==(c=e(c,l.key,a+1)))return void t(c)}t()}),(function(e,t){r(t)}))}))})).catch(r)}));return u(r,t),r}function ke(e,t,n,r){var i=this;e=d(e);var o=new c((function(o,s){i.ready().then((function(){void 0===t&&(t=null);var a=t,l=i._dbInfo;l.serializer.serialize(t,(function(t,c){c?s(c):l.db.transaction((function(n){be(n,l,"INSERT OR REPLACE INTO "+l.storeName+" (key, value) VALUES (?, ?)",[e,t],(function(){o(a)}),(function(e,t){s(t)}))}),(function(t){if(t.code===t.QUOTA_ERR){if(r>0)return void o(ke.apply(i,[e,a,n,r-1]));s(t)}}))}))})).catch(s)}));return u(o,n),o}function Se(e,t,n){return ke.apply(this,[e,t,n,1])}function _e(e,t){var n=this;e=d(e);var r=new c((function(t,r){n.ready().then((function(){var i=n._dbInfo;i.db.transaction((function(n){be(n,i,"DELETE FROM "+i.storeName+" WHERE key = ?",[e],(function(){t()}),(function(e,t){r(t)}))}))})).catch(r)}));return u(r,t),r}function Te(e){var t=this,n=new c((function(e,n){t.ready().then((function(){var r=t._dbInfo;r.db.transaction((function(t){be(t,r,"DELETE FROM "+r.storeName,[],(function(){e()}),(function(e,t){n(t)}))}))})).catch(n)}));return u(n,e),n}function Ce(e){var t=this,n=new c((function(e,n){t.ready().then((function(){var r=t._dbInfo;r.db.transaction((function(t){be(t,r,"SELECT COUNT(key) as c FROM "+r.storeName,[],(function(t,n){var r=n.rows.item(0).c;e(r)}),(function(e,t){n(t)}))}))})).catch(n)}));return u(n,e),n}function Ee(e,t){var n=this,r=new c((function(t,r){n.ready().then((function(){var i=n._dbInfo;i.db.transaction((function(n){be(n,i,"SELECT key FROM "+i.storeName+" WHERE id = ? LIMIT 1",[e+1],(function(e,n){var r=n.rows.length?n.rows.item(0).key:null;t(r)}),(function(e,t){r(t)}))}))})).catch(r)}));return u(r,t),r}function Qe(e){var t=this,n=new c((function(e,n){t.ready().then((function(){var r=t._dbInfo;r.db.transaction((function(t){be(t,r,"SELECT key FROM "+r.storeName,[],(function(t,n){for(var r=[],i=0;i<n.rows.length;i++)r.push(n.rows.item(i).key);e(r)}),(function(e,t){n(t)}))}))})).catch(n)}));return u(n,e),n}function Ie(e){return new c((function(t,n){e.transaction((function(r){r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],(function(n,r){for(var i=[],o=0;o<r.rows.length;o++)i.push(r.rows.item(o).name);t({db:e,storeNames:i})}),(function(e,t){n(t)}))}),(function(e){n(e)}))}))}function Ae(e,t){t=f.apply(this,arguments);var n=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r,i=this;return u(r=e.name?new c((function(t){var r;r=e.name===n.name?i._dbInfo.db:openDatabase(e.name,"","",0),e.storeName?t({db:r,storeNames:[e.storeName]}):t(Ie(r))})).then((function(e){return new c((function(t,n){e.db.transaction((function(r){function i(e){return new c((function(t,n){r.executeSql("DROP TABLE IF EXISTS "+e,[],(function(){t()}),(function(e,t){n(t)}))}))}for(var o=[],s=0,a=e.storeNames.length;s<a;s++)o.push(i(e.storeNames[s]));c.all(o).then((function(){t()})).catch((function(e){n(e)}))}),(function(e){n(e)}))}))})):c.reject("Invalid arguments"),t),r}var Pe={_driver:"webSQLStorage",_initStorage:Oe,_support:X(),iterate:xe,getItem:we,setItem:Se,removeItem:_e,clear:Te,length:Ce,key:Ee,keys:Qe,dropInstance:Ae};function $e(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(l6){return!1}}function Re(e,t){var n=e.name+"/";return e.storeName!==t.storeName&&(n+=e.storeName+"/"),n}function Le(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch(l6){return!0}}function De(){return!Le()||localStorage.length>0}function Ne(e){var t=this,n={};if(e)for(var r in e)n[r]=e[r];return n.keyPrefix=Re(e,t._defaultConfig),De()?(t._dbInfo=n,n.serializer=ve,c.resolve()):c.reject()}function Me(e){var t=this,n=t.ready().then((function(){for(var e=t._dbInfo.keyPrefix,n=localStorage.length-1;n>=0;n--){var r=localStorage.key(n);0===r.indexOf(e)&&localStorage.removeItem(r)}}));return u(n,e),n}function We(e,t){var n=this;e=d(e);var r=n.ready().then((function(){var t=n._dbInfo,r=localStorage.getItem(t.keyPrefix+e);return r&&(r=t.serializer.deserialize(r)),r}));return u(r,t),r}function je(e,t){var n=this,r=n.ready().then((function(){for(var t=n._dbInfo,r=t.keyPrefix,i=r.length,o=localStorage.length,s=1,a=0;a<o;a++){var l=localStorage.key(a);if(0===l.indexOf(r)){var c=localStorage.getItem(l);if(c&&(c=t.serializer.deserialize(c)),void 0!==(c=e(c,l.substring(i),s++)))return c}}}));return u(r,t),r}function Fe(e,t){var n=this,r=n.ready().then((function(){var t,r=n._dbInfo;try{t=localStorage.key(e)}catch(c6){t=null}return t&&(t=t.substring(r.keyPrefix.length)),t}));return u(r,t),r}function Ve(e){var t=this,n=t.ready().then((function(){for(var e=t._dbInfo,n=localStorage.length,r=[],i=0;i<n;i++){var o=localStorage.key(i);0===o.indexOf(e.keyPrefix)&&r.push(o.substring(e.keyPrefix.length))}return r}));return u(n,e),n}function qe(e){var t=this.keys().then((function(e){return e.length}));return u(t,e),t}function ze(e,t){var n=this;e=d(e);var r=n.ready().then((function(){var t=n._dbInfo;localStorage.removeItem(t.keyPrefix+e)}));return u(r,t),r}function Ue(e,t,n){var r=this;e=d(e);var i=r.ready().then((function(){void 0===t&&(t=null);var n=t;return new c((function(i,o){var s=r._dbInfo;s.serializer.serialize(t,(function(t,r){if(r)o(r);else try{localStorage.setItem(s.keyPrefix+e,t),i(n)}catch(l6){"QuotaExceededError"!==l6.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==l6.name||o(l6),o(l6)}}))}))}));return u(i,n),i}function Be(e,t){if(t=f.apply(this,arguments),!(e="function"!=typeof e&&e||{}).name){var n=this.config();e.name=e.name||n.name,e.storeName=e.storeName||n.storeName}var r,i=this;return u(r=e.name?new c((function(t){e.storeName?t(Re(e,i._defaultConfig)):t(e.name+"/")})).then((function(e){for(var t=localStorage.length-1;t>=0;t--){var n=localStorage.key(t);0===n.indexOf(e)&&localStorage.removeItem(n)}})):c.reject("Invalid arguments"),t),r}var Ye={_driver:"localStorageWrapper",_initStorage:Ne,_support:$e(),iterate:je,getItem:We,setItem:Ue,removeItem:ze,clear:Me,length:qe,key:Fe,keys:Ve,dropInstance:Be},Xe=function(e,t){return e===t||"number"==typeof e&&"number"==typeof t&&isNaN(e)&&isNaN(t)},Ge=function(e,t){for(var n=e.length,r=0;r<n;){if(Xe(e[r],t))return!0;r++}return!1},He=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},Ze={},Ke={},Je={INDEXEDDB:Y,WEBSQL:Pe,LOCALSTORAGE:Ye},et=[Je.INDEXEDDB._driver,Je.WEBSQL._driver,Je.LOCALSTORAGE._driver],tt=["dropInstance"],nt=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(tt),rt={description:"",driver:et.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function it(e,t){e[t]=function(){var n=arguments;return e.ready().then((function(){return e[t].apply(e,n)}))}}function ot(){for(var e=1;e<arguments.length;e++){var t=arguments[e];if(t)for(var n in t)t.hasOwnProperty(n)&&(He(t[n])?arguments[0][n]=t[n].slice():arguments[0][n]=t[n])}return arguments[0]}var st=new(function(){function e(t){for(var n in i(this,e),Je)if(Je.hasOwnProperty(n)){var r=Je[n],o=r._driver;this[n]=o,Ze[o]||this.defineDriver(r)}this._defaultConfig=ot({},rt),this._config=ot({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch((function(){}))}return e.prototype.config=function(e){if("object"===(void 0===e?"undefined":r(e))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var t in e){if("storeName"===t&&(e[t]=e[t].replace(/\W/g,"_")),"version"===t&&"number"!=typeof e[t])return new Error("Database version must be a number.");this._config[t]=e[t]}return!("driver"in e)||!e.driver||this.setDriver(this._config.driver)}return"string"==typeof e?this._config[e]:this._config},e.prototype.defineDriver=function(e,t,n){var r=new c((function(t,n){try{var r=e._driver,i=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!e._driver)return void n(i);for(var o=nt.concat("_initStorage"),s=0,a=o.length;s<a;s++){var l=o[s];if((!Ge(tt,l)||e[l])&&"function"!=typeof e[l])return void n(i)}!function(){for(var t=function(e){return function(){var t=new Error("Method "+e+" is not implemented by the current driver"),n=c.reject(t);return u(n,arguments[arguments.length-1]),n}},n=0,r=tt.length;n<r;n++){var i=tt[n];e[i]||(e[i]=t(i))}}();var h=function(n){Ze[r]&&console.info("Redefining LocalForage driver: "+r),Ze[r]=e,Ke[r]=n,t()};"_support"in e?e._support&&"function"==typeof e._support?e._support().then(h,n):h(!!e._support):h(!0)}catch(l6){n(l6)}}));return h(r,t,n),r},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(e,t,n){var r=Ze[e]?c.resolve(Ze[e]):c.reject(new Error("Driver not found."));return h(r,t,n),r},e.prototype.getSerializer=function(e){var t=c.resolve(ve);return h(t,e),t},e.prototype.ready=function(e){var t=this,n=t._driverSet.then((function(){return null===t._ready&&(t._ready=t._initDriver()),t._ready}));return h(n,e,e),n},e.prototype.setDriver=function(e,t,n){var r=this;He(e)||(e=[e]);var i=this._getSupportedDrivers(e);function o(){r._config.driver=r.driver()}function s(e){return r._extend(e),o(),r._ready=r._initStorage(r._config),r._ready}function a(e){return function(){var t=0;function n(){for(;t<e.length;){var i=e[t];return t++,r._dbInfo=null,r._ready=null,r.getDriver(i).then(s).catch(n)}o();var a=new Error("No available storage method found.");return r._driverSet=c.reject(a),r._driverSet}return n()}}var l=null!==this._driverSet?this._driverSet.catch((function(){return c.resolve()})):c.resolve();return this._driverSet=l.then((function(){var e=i[0];return r._dbInfo=null,r._ready=null,r.getDriver(e).then((function(e){r._driver=e._driver,o(),r._wrapLibraryMethodsWithReady(),r._initDriver=a(i)}))})).catch((function(){o();var e=new Error("No available storage method found.");return r._driverSet=c.reject(e),r._driverSet})),h(this._driverSet,t,n),this._driverSet},e.prototype.supports=function(e){return!!Ke[e]},e.prototype._extend=function(e){ot(this,e)},e.prototype._getSupportedDrivers=function(e){for(var t=[],n=0,r=e.length;n<r;n++){var i=e[n];this.supports(i)&&t.push(i)}return t},e.prototype._wrapLibraryMethodsWithReady=function(){for(var e=0,t=nt.length;e<t;e++)it(this,nt[e])},e.prototype.createInstance=function(t){return new e(t)},e}());t.exports=st},{3:3}]},{},[4])(4);
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/try{self["workbox:window:6.2.4"]&&_()}catch(h6){}function K4(e,t){return new Promise((function(n){var r=new MessageChannel;r.port1.onmessage=function(e){n(e.data)},e.postMessage(t,[r.port2])}))}function J4(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}try{self["workbox:core:6.2.4"]&&_()}catch(h6){}var e6=function(){var e=this;this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))};function t6(e,t){var n=location.href;return new URL(e,n).href===new URL(t,n).href}var n6=function(e,t){this.type=e,Object.assign(this,t)};function r6(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function i6(){}var o6={type:"SKIP_WAITING"};function s6(e,t){if(!t)return e&&e.then?e.then(i6):Promise.resolve()}var a6=function(e){var t,n;function r(t,n){var r,i;return void 0===n&&(n={}),(r=e.call(this)||this).nn={},r.tn=0,r.rn=new e6,r.en=new e6,r.on=new e6,r.un=0,r.an=new Set,r.cn=function(){var e=r.fn,t=e.installing;r.tn>0||!t6(t.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=t,e.removeEventListener("updatefound",r.cn)):(r.hn=t,r.an.add(t),r.rn.resolve(t)),++r.tn,t.addEventListener("statechange",r.ln)},r.ln=function(e){var t=r.fn,n=e.target,i=n.state,o=n===r.vn,s={sw:n,isExternal:o,originalEvent:e};!o&&r.mn&&(s.isUpdate=!0),r.dispatchEvent(new n6(i,s)),"installed"===i?r.wn=self.setTimeout((function(){"installed"===i&&t.waiting===n&&r.dispatchEvent(new n6("waiting",s))}),200):"activating"===i&&(clearTimeout(r.wn),o||r.en.resolve(n))},r.dn=function(e){var t=r.hn,n=t!==navigator.serviceWorker.controller;r.dispatchEvent(new n6("controlling",{isExternal:n,originalEvent:e,sw:t,isUpdate:r.mn})),n||r.on.resolve(t)},r.gn=(i=function(e){var t=e.data,n=e.ports,i=e.source;return r6(r.getSW(),(function(){r.an.has(i)&&r.dispatchEvent(new n6("message",{data:t,originalEvent:e,ports:n,sw:i}))}))},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return Promise.resolve(i.apply(this,e))}catch(n){return Promise.reject(n)}}),r.sn=t,r.nn=n,navigator.serviceWorker.addEventListener("message",r.gn),r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i,o=r.prototype;return o.register=function(e){var t,n,r=(void 0===e?{}:e).immediate,i=void 0!==r&&r;try{var o=this;return t=function(){return o.mn=Boolean(navigator.serviceWorker.controller),o.yn=o.pn(),r6(o.bn(),(function(e){o.fn=e,o.yn&&(o.hn=o.yn,o.en.resolve(o.yn),o.on.resolve(o.yn),o.yn.addEventListener("statechange",o.ln,{once:!0}));var t=o.fn.waiting;return t&&t6(t.scriptURL,o.sn.toString())&&(o.hn=t,Promise.resolve().then((function(){o.dispatchEvent(new n6("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),o.hn&&(o.rn.resolve(o.hn),o.an.add(o.hn)),o.fn.addEventListener("updatefound",o.cn),navigator.serviceWorker.addEventListener("controllerchange",o.dn),o.fn}))},(n=function(){if(!i&&"complete"!==document.readyState)return s6(new Promise((function(e){return window.addEventListener("load",e)})))}())&&n.then?n.then(t):t()}catch(s){return Promise.reject(s)}},o.update=function(){try{return this.fn?s6(this.fn.update()):void 0}catch(h6){return Promise.reject(h6)}},o.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},o.messageSW=function(e){try{return r6(this.getSW(),(function(t){return K4(t,e)}))}catch(h6){return Promise.reject(h6)}},o.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&K4(this.fn.waiting,o6)},o.pn=function(){var e=navigator.serviceWorker.controller;return e&&t6(e.scriptURL,this.sn.toString())?e:void 0},o.bn=function(){try{var e=this;return function(t,n){try{var r=r6(navigator.serviceWorker.register(e.sn,e.nn),(function(t){return e.un=performance.now(),t}))}catch(i){return n(i)}return r&&r.then?r.then(void 0,n):r}(0,(function(e){throw e}))}catch(t){return Promise.reject(t)}},(i=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(r.prototype,i),r}(function(){function e(){this.Pn=new Map}var t=e.prototype;return t.addEventListener=function(e,t){this.Sn(e).add(t)},t.removeEventListener=function(e,t){this.Sn(e).delete(t)},t.dispatchEvent=function(e){e.target=this;for(var t,n=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return J4(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J4(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}(this.Sn(e.type));!(t=n()).done;)(0,t.value)(e)},t.Sn=function(e){return this.Pn.has(e)||this.Pn.set(e,new Set),this.Pn.get(e)},e}());export{CJ as A,y5 as C,PK as D,AK as E,TJ as L,e4 as M,eJ as O,dY as Q,JV as R,vJ as T,_n as V,m2 as W,g2 as X,SJ as Y,_J as _,G4 as a,Z4 as b,g4 as c,Y4 as d,a6 as e,nx as f,ZK as g,eq as h,Yi as i,HK as j,hJ as k,xv as l,Z8 as m,K4 as n,GK as o,$K as p,e2 as q,JK as r,jb as s,O5 as t,t0 as u,a4 as v,fJ as w,cJ as x,QK as y,T0 as z};