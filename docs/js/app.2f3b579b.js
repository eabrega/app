(function(e){function t(t){for(var o,a,i=t[0],u=t[1],l=t[2],f=0,p=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);s&&s(t);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},c=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"5c0b":function(e,t,n){"use strict";n("9c0c")},9448:function(e,t,n){},"9c0c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("SoundButton",{attrs:{label:"Муууу",fileName:"00225"}}),n("SoundButton",{attrs:{label:"Иии-го-го",fileName:"01426"}}),n("SoundButton",{attrs:{label:"Га-га-га",fileName:"02019"}}),n("SoundButton",{attrs:{label:"Кука-реку",fileName:"02036"}}),n("SoundButton",{attrs:{label:"Мяуу",fileName:"04457"}})],1)},c=[],a=n("d4ec"),i=n("262e"),u=n("2caf"),l=n("9ab4"),s=n("1b40"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"board"},[n("button",{on:{click:e.play}},[e._v(e._s(e.label))])])},p=[],b=n("bee2"),d=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(a["a"])(this,n),t.apply(this,arguments)}return Object(b["a"])(n,[{key:"play",value:function(){var e=new Audio("./media/".concat(this.fileName,".mp3"));e.play(),console.log("Игого")}}]),n}(s["c"]);Object(l["a"])([Object(s["b"])()],d.prototype,"label",void 0),Object(l["a"])([Object(s["b"])()],d.prototype,"fileName",void 0),d=Object(l["a"])([s["a"]],d);var v=d,h=v,g=(n("fb8e"),n("2877")),O=Object(g["a"])(h,f,p,!1,null,"261c0b80",null),j=O.exports,y=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(a["a"])(this,n),t.apply(this,arguments)}return n}(s["c"]);y=Object(l["a"])([Object(s["a"])({components:{SoundButton:j}})],y);var m=y,w=m,S=(n("5c0b"),Object(g["a"])(w,r,c,!1,null,null,null)),_=S.exports,k=n("9483");Object(k["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var N=n("2f62");o["a"].use(N["a"]);var x=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({store:x,render:function(e){return e(_)}}).$mount("#app")},fb8e:function(e,t,n){"use strict";n("9448")}});
//# sourceMappingURL=app.2f3b579b.js.map