!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],e);else{var n="object"==typeof exports?e(require("vue")):e(t.Vue);for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,(function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=175)}({0:function(e,n){e.exports=t},1:function(t,e,n){"use strict";n.d(e,"g",(function(){return s})),n.d(e,"f",(function(){return f})),n.d(e,"h",(function(){return d})),n.d(e,"d",(function(){return p})),n.d(e,"a",(function(){return v})),n.d(e,"i",(function(){return y})),n.d(e,"c",(function(){return h})),n.d(e,"b",(function(){return g})),n.d(e,"e",(function(){return b}));var r=n(0),o=n.n(r),i=("function"==typeof Symbol&&Symbol.iterator,o.a.prototype.$isServer),a=/([\:\-\_]+(.))/g,c=/^moz([A-Z])/,u=i?0:Number(document.documentMode),l=function(t){return t.replace(a,(function(t,e,n,r){return r?n.toUpperCase():n})).replace(c,"Moz$1")},s=!i&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)},f=!i&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)},d=function(t,e,n){s(t,e,(function r(){n&&n.apply(this,arguments),f(t,e,r)}))};function p(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}function v(t,e){if(t){for(var n=t.className,r=(e||"").split(" "),o=0,i=r.length;o<i;o++){var a=r[o];a&&(t.classList?t.classList.add(a):p(t,a)||(n+=" "+a))}t.classList||(t.className=n)}}function y(t,e){if(t&&e){for(var n=e.split(" "),r=" "+t.className+" ",o=0,i=n.length;o<i;o++){var a=n[o];a&&(t.classList?t.classList.remove(a):p(t,a)&&(r=r.replace(" "+a+" "," ")))}t.classList||(t.className=(r||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))}}var h=u<9?function(t,e){if(!i){if(!t||!e)return null;"float"===(e=l(e))&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(n){return t.style[e]}}}:function(t,e){if(!i){if(!t||!e)return null;"float"===(e=l(e))&&(e="cssFloat");try{var n=document.defaultView.getComputedStyle(t,"");return t.style[e]||n?n[e]:null}catch(n){return t.style[e]}}};var m=function(t,e){if(!i)return h(t,null!==e||void 0!==e?e?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)},g=function(t,e){if(!i){for(var n=t;n;){if([window,document,document.documentElement].includes(n))return window;if(m(n,e))return n;n=n.parentNode}return n}},b=function(t,e){if(i||!t||!e)return!1;var n=t.getBoundingClientRect(),r=void 0;return r=[window,document,document.documentElement,null,void 0].includes(e)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:e.getBoundingClientRect(),n.top<r.bottom&&n.bottom>r.top&&n.right>r.left&&n.left<r.right}},175:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"el-collapse-item",class:{"is-active":t.isActive,"is-disabled":t.disabled}},[n("div",{attrs:{role:"tab","aria-expanded":t.isActive,"aria-controls":"el-collapse-content-"+t.id,"aria-describedby":"el-collapse-content-"+t.id}},[n("div",{staticClass:"el-collapse-item__header",class:{focusing:t.focusing,"is-active":t.isActive},attrs:{role:"button",id:"el-collapse-head-"+t.id,tabindex:t.disabled?void 0:0},on:{click:t.handleHeaderClick,keyup:function(e){return"button"in e||!t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])||!t._k(e.keyCode,"enter",13,e.key,"Enter")?(e.stopPropagation(),t.handleEnterClick(e)):null},focus:t.handleFocus,blur:function(e){t.focusing=!1}}},[t._t("title",[t._v(t._s(t.title))]),n("i",{staticClass:"el-collapse-item__arrow el-icon-arrow-right",class:{"is-active":t.isActive}})],2)]),n("el-collapse-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"el-collapse-item__wrap",attrs:{role:"tabpanel","aria-hidden":!t.isActive,"aria-labelledby":"el-collapse-head-"+t.id,id:"el-collapse-content-"+t.id}},[n("div",{staticClass:"el-collapse-item__content"},[t._t("default")],2)])])],1)};r._withStripped=!0;var o=n(41),i=n(6),a=n(3),c={name:"ElCollapseItem",componentName:"ElCollapseItem",mixins:[i.a],components:{ElCollapseTransition:o.a},data:function(){return{contentWrapStyle:{height:"auto",display:"block"},contentHeight:0,focusing:!1,isClick:!1,id:Object(a.g)()}},inject:["collapse"],props:{title:String,name:{type:[String,Number],default:function(){return this._uid}},disabled:Boolean},computed:{isActive:function(){return this.collapse.activeNames.indexOf(this.name)>-1}},methods:{handleFocus:function(){var t=this;setTimeout((function(){t.isClick?t.isClick=!1:t.focusing=!0}),50)},handleHeaderClick:function(){this.disabled||(this.dispatch("ElCollapse","item-click",this),this.focusing=!1,this.isClick=!0)},handleEnterClick:function(){this.dispatch("ElCollapse","item-click",this)}}},u=n(2),l=Object(u.a)(c,r,[],!1,null,null,null);l.options.__file="packages/collapse/src/collapse-item.vue";var s=l.exports;s.install=function(t){t.component(s.name,s)};e.default=s},2:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,c){var u,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=u):o&&(u=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(l.functional){l._injectStyles=u;var s=l.render;l.render=function(t,e){return u.call(e),s(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:l}}n.d(e,"a",(function(){return r}))},3:function(t,e,n){"use strict";n.d(e,"q",(function(){return u})),n.d(e,"j",(function(){return l})),n.d(e,"s",(function(){return f})),n.d(e,"i",(function(){return d})),n.d(e,"h",(function(){return p})),n.d(e,"g",(function(){return v})),n.d(e,"t",(function(){return y})),n.d(e,"f",(function(){return h})),n.d(e,"b",(function(){return m})),n.d(e,"a",(function(){return g})),n.d(e,"e",(function(){return b})),n.d(e,"o",(function(){return w})),n.d(e,"k",(function(){return _})),n.d(e,"n",(function(){return S})),n.d(e,"c",(function(){return j})),n.d(e,"p",(function(){return E})),n.d(e,"d",(function(){return O})),n.d(e,"m",(function(){return $})),n.d(e,"l",(function(){return k})),n.d(e,"r",(function(){return x}));var r=n(0),o=n.n(r),i=n(5),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c=Object.prototype.hasOwnProperty;function u(){}function l(t,e){return c.call(t,e)}function s(t,e){for(var n in e)t[n]=e[n];return t}function f(t){for(var e={},n=0;n<t.length;n++)t[n]&&s(e,t[n]);return e}var d=function(t,e){for(var n=(e=e||"").split("."),r=t,o=null,i=0,a=n.length;i<a;i++){var c=n[i];if(!r)break;if(i===a-1){o=r[c];break}r=r[c]}return o};function p(t,e,n){for(var r=t,o=(e=(e=e.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),i=0,a=o.length;i<a-1&&(r||n);++i){var c=o[i];if(!(c in r)){if(n)throw new Error("please transfer a valid prop path to form item!");break}r=r[c]}return{o:r,k:o[i],v:r?r[o[i]]:null}}var v=function(){return Math.floor(1e4*Math.random())},y=function(t,e){if(t===e)return!0;if(!(t instanceof Array))return!1;if(!(e instanceof Array))return!1;if(t.length!==e.length)return!1;for(var n=0;n!==t.length;++n)if(t[n]!==e[n])return!1;return!0},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return String(t).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")},m=function(t,e){for(var n=0;n!==t.length;++n)if(e(t[n]))return n;return-1},g=function(t,e){var n=m(t,e);return-1!==n?t[n]:void 0},b=function(t){return Array.isArray(t)?t:t?[t]:[]},w=function(){return!o.a.prototype.$isServer&&!isNaN(Number(document.documentMode))},_=function(){return!o.a.prototype.$isServer&&navigator.userAgent.indexOf("Edge")>-1},S=function(){return!o.a.prototype.$isServer&&!!window.navigator.userAgent.match(/firefox/i)},j=function(t){if("object"!==(void 0===t?"undefined":a(t)))return t;var e=["ms-","webkit-"];return["transform","transition","animation"].forEach((function(n){var r=t[n];n&&r&&e.forEach((function(e){t[e+n]=r}))})),t},E=function(t){var e=/([^-])([A-Z])/g;return t.replace(e,"$1-$2").replace(e,"$1-$2").toLowerCase()},O=function(t){return Object(i.e)(t)?t.charAt(0).toUpperCase()+t.slice(1):t},C=function(t,e){var n=Object(i.d)(t),r=Object(i.d)(e);return n&&r?JSON.stringify(t)===JSON.stringify(e):!n&&!r&&String(t)===String(e)},$=function(t,e){return Array.isArray(t)&&Array.isArray(e)?function(t,e){if(e=e||[],(t=t||[]).length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!C(t[n],e[n]))return!1;return!0}(t,e):C(t,e)},k=function(t){if(null==t)return!0;if("boolean"==typeof t)return!1;if("number"==typeof t)return!t;if(t instanceof Error)return""===t.message;switch(Object.prototype.toString.call(t)){case"[object String]":case"[object Array]":return!t.length;case"[object File]":case"[object Map]":case"[object Set]":return!t.size;case"[object Object]":return!Object.keys(t).length}return!1};function x(t){var e=!1;return function(){for(var n=this,r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];e||(e=!0,window.requestAnimationFrame((function(r){t.apply(n,o),e=!1})))}}},41:function(t,e,n){"use strict";var r=n(1);var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return t.prototype.beforeEnter=function(t){Object(r.a)(t,"collapse-transition"),t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height="0",t.style.paddingTop=0,t.style.paddingBottom=0},t.prototype.enter=function(t){t.dataset.oldOverflow=t.style.overflow,0!==t.scrollHeight?(t.style.height=t.scrollHeight+"px",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.height="",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},t.prototype.afterEnter=function(t){Object(r.i)(t,"collapse-transition"),t.style.height="",t.style.overflow=t.dataset.oldOverflow},t.prototype.beforeLeave=function(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.height=t.scrollHeight+"px",t.style.overflow="hidden"},t.prototype.leave=function(t){0!==t.scrollHeight&&(Object(r.a)(t,"collapse-transition"),t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0)},t.prototype.afterLeave=function(t){Object(r.i)(t,"collapse-transition"),t.style.height="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom},t}();e.a={name:"ElCollapseTransition",functional:!0,render:function(t,e){var n=e.children;return t("transition",{on:new o},n)}}},5:function(t,e,n){"use strict";function r(t){return"[object String]"===Object.prototype.toString.call(t)}function o(t){return"[object Object]"===Object.prototype.toString.call(t)}function i(t){return t&&t.nodeType===Node.ELEMENT_NODE}n.d(e,"e",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return a})),n.d(e,"f",(function(){return c})),n.d(e,"a",(function(){return u}));var a=function(t){return t&&"[object Function]"==={}.toString.call(t)},c=function(t){return void 0===t},u=function(t){return null!=t}},6:function(t,e,n){"use strict";function r(t,e,n){this.$children.forEach((function(o){o.$options.componentName===t?o.$emit.apply(o,[e].concat(n)):r.apply(o,[t,e].concat([n]))}))}e.a={methods:{dispatch:function(t,e,n){for(var r=this.$parent||this.$root,o=r.$options.componentName;r&&(!o||o!==t);)(r=r.$parent)&&(o=r.$options.componentName);r&&r.$emit.apply(r,[e].concat(n))},broadcast:function(t,e,n){r.call(this,t,e,n)}}}}}).default}));