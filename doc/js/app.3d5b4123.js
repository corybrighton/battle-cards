(function(e){function t(t){for(var n,r,u=t[0],l=t[1],s=t[2],c=0,m=[];c<u.length;c++)r=u[c],o[r]&&m.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(t);while(m.length)m.shift()();return i.push.apply(i,s||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var u=a[r];0!==o[u]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={app:0},o={app:0},i=[];function u(e){return l.p+"js/"+({game:"game"}[e]||e)+"."+{game:"6dd8d5c1"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={game:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise(function(t,a){for(var n="css/"+({game:"game"}[e]||e)+"."+{game:"14c0b574"}[e]+".css",o=l.p+n,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],c=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===n||c===o))return t()}var m=document.getElementsByTagName("style");for(u=0;u<m.length;u++){s=m[u],c=s.getAttribute("data-href");if(c===n||c===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.request=n,delete r[e],p.parentNode.removeChild(p),a(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){r[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,a){n=o[e]=[t,a]});t.push(n[2]=i);var s,c=document.getElementsByTagName("head")[0],m=document.createElement("script");m.charset="utf-8",m.timeout=120,l.nc&&m.setAttribute("nonce",l.nc),m.src=u(e),s=function(t){m.onerror=m.onload=null,clearTimeout(p);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+n+": "+r+")");i.type=n,i.request=r,a[1](i)}o[e]=void 0}};var p=setTimeout(function(){s({type:"timeout",target:m})},12e4);m.onerror=m.onload=s,c.appendChild(m)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var m=0;m<s.length;m++)t(s[m]);var p=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],i=(a("034f"),a("2877")),u={},l=Object(i["a"])(u,r,o,!1,null,null,null);l.options.__file="App.vue";var s=l.exports,c=a("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("BATTLE")]),n("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),n("h1",[e._v("CARDS")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.gameConfig.playerName,expression:"gameConfig.playerName"}],attrs:{type:"text",placeholder:"Players Name"},domProps:{value:e.gameConfig.playerName},on:{input:function(t){t.target.composing||e.$set(e.gameConfig,"playerName",t.target.value)}}}),n("select",{directives:[{name:"model",rawName:"v-model",value:e.gameConfig.set,expression:"gameConfig.set"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.gameConfig,"set",t.target.multiple?a:a[0])}}},[n("option",{attrs:{value:"1"}},[e._v("1")]),n("option",{attrs:{value:"2"}},[e._v("2")]),n("option",{attrs:{value:"3"}},[e._v("3")]),n("option",{attrs:{value:"4"}},[e._v("4")])]),n("button",{on:{click:e.playGame}},[e._v("Play Game")])])},p=[],f={name:"home",data(){return{gameConfig:{playerName:"Eye of Mordor",set:1}}},components:{},methods:{playGame(){this.$store.dispatch("playGame",this.gameConfig)}}},g=f,d=(a("cccb"),Object(i["a"])(g,m,p,!1,null,null,null));d.options.__file="Home.vue";var v=d.exports;n["a"].use(c["a"]);var h=new c["a"]({routes:[{path:"/",name:"home",component:v},{path:"/games/:gameId",name:"game",component(){return a.e("game").then(a.bind(null,"7d36"))}}]}),y=a("2f62"),b=a("bc3a"),_=a.n(b);let w=_.a.create({baseURL:"https://battlecardz.herokuapp.com/api/games"});n["a"].use(y["a"]);var C=new y["a"].Store({state:{game:{}},mutations:{setGame(e,t){e.game=t}},actions:{playGame({commit:e},t){w.post("",t).then(t=>{e("setGame",t.data.game),h.push({name:"game",params:{gameId:t.data.game.id}})})},getGame({commit:e},t){w.get(t).then(t=>{e("setGame",t.data.data)})},updateGame({commit:e},t){w.put(""+t.id,t.gamePlay).then(t=>{e("setGame",t.data.game)})},playAgain(){h.push({name:"home"})}}});new n["a"]({router:h,store:C,render:function(e){return e(s)}}).$mount("#app")},"64a9":function(e,t,a){},cccb:function(e,t,a){"use strict";var n=a("d563"),r=a.n(n);r.a},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},d563:function(e,t,a){}});
//# sourceMappingURL=app.3d5b4123.js.map