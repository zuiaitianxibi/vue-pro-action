(function(e){function t(t){for(var r,s,u=t[0],l=t[1],i=t[2],c=0,v=[];c<u.length;c++)s=u[c],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&v.push(o[s][0]),o[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(v.length)v.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function s(e){return u.p+"static/js/"+e+".js?"+{"lang-btn-json":"23f4e484bc0f2c71b0bc","lang-intro-en-json":"9c4d1b195c4c2ee88507","lang-intro-zh-json":"0110abc98a9511a904de","lang-zh-cn-json":"d28dbdac3bd36b4da8ed"}[e]}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var i=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue-pro-action/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var p=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"14cc":function(e){e.exports=JSON.parse('{"user":{"page":"This is Vue Page","name":"liu qiao","nickName":"qiao qiao"}}')},"1c49":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-cn":{"address":"广州","company":"中国<span>电信</span>"},"en-us":{"address":"Guang Zhou","company":"China<span>telecom</span>"}}'),delete e.options._Ctor}},"391e":function(e,t,n){var r={"./btn.json":["ef1d","lang-btn-json"],"./en-us.json":["14cc"],"./intro-en.json":["2585","lang-intro-en-json"],"./intro-zh.json":["4546","lang-intro-zh-json"],"./zh-cn.json":["e45c","lang-zh-cn-json"]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n.t(o,3)}))}o.keys=function(){return Object.keys(r)},o.id="391e",e.exports=o},4805:function(e,t,n){"use strict";var r=n("8ce0"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("caad"),n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/home?lang=en-us"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" | "),n("router-link",{attrs:{to:"/welcome"}},[e._v("Welcome")]),e._v(" | "),n("router-link",{attrs:{to:"/profile"}},[e._v("Profile")]),e._v(" | "),n("router-link",{attrs:{to:"/user?lang=zh-cn"}},[e._v("User")])],1),n("router-view")],1)},a=[],s=(n("034f"),n("2877")),u={},l=Object(s["a"])(u,o,a,!1,null,null,null),i=l.exports,c=n("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}}),r("h3",[e._v(e._s(e.$t("user.page")))])],1)},v=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],d={name:"HelloWorld",props:{msg:String}},m=d,_=(n("4805"),Object(s["a"])(m,f,h,!1,null,"b9167eee",null)),g=_.exports,b={name:"home",components:{HelloWorld:g}},j=b,y=Object(s["a"])(j,p,v,!1,null,null,null),k=y.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"name"},[e._v(e._s(e.$t("user.name")))]),n("div",{staticClass:"nickName"},[e._v(e._s(e.$t("user.nickName")))]),n("div",{staticClass:"address"},[e._v(e._s(e.$t("address")))]),n("div",{staticClass:"company",domProps:{innerHTML:e._s(e.$t("company"))}})])},O=[],P=(n("db8b"),n("aa77")),x={},C=Object(s["a"])(x,w,O,!1,null,null,null);"function"===typeof P["default"]&&Object(P["default"])(C);var E=C.exports;r["a"].use(c["a"]);var $=[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:k,query:{lang:"en-us",b:2}},{path:"/user",name:"user",component:E,query:{lang:"zh-cn",a:1}}],z=new c["a"]({mode:"history",base:"/vue-pro-action/",routes:$}),T=z,L=n("a925"),q=n("14cc");r["a"].config.productionTip=!1,r["a"].use(L["a"]);var M=new L["a"]({locale:"en-us",fallbackLocale:"zh-cn",messages:{"en-us":q}}),N=["en-us"],S=function(e){return M.locale=e,e},H=function(e){return M.locale!==e?N.includes(e)?Promise.resolve(S(e)):n("391e")("./".concat(e,".json")).then((function(t){return M.setLocaleMessage(e,t.default),N.push(e),S(e)})):Promise.resolve(e)};T.beforeEach((function(e,t,n){var r=e.query.lang||"en-us";H(r).then((function(){return n()}))})),new r["a"]({i18n:M,router:T,render:function(e){return e(i)}}).$mount("#app")},"85ec":function(e,t,n){},"8ce0":function(e,t,n){},a553:function(e,t,n){},aa77:function(e,t,n){"use strict";var r=n("1c49"),o=n.n(r);t["default"]=o.a},cf05:function(e,t,n){e.exports=n.p+"static/img/logo.82b9c7a5.png"},db8b:function(e,t,n){"use strict";var r=n("a553"),o=n.n(r);o.a}});