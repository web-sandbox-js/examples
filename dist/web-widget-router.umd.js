(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?b(exports):"function"==typeof define&&define.amd?define(["exports"],b):(a="undefined"==typeof globalThis?a||self:globalThis,b(a.WebWidgetRouter={}))})(this,function(a){'use strict';function b(a){return j.get(a)}function c(a){const c=b(a);try{return c(location)}catch(a){return console.error(a),!1}}function d(){const a=[],b=[];k.forEach((d,e)=>{c(e)?a.push(e):b.push(e)}),Promise.all(a.map(a=>a.bootstrap())).then(()=>Promise.all(b.map(a=>a.unmount())).then(()=>{a.filter(a=>c(a)).forEach(a=>a.mount())}))}function e(a){o=a}function f(){d()}function g(a,b){let c;try{c=new PopStateEvent("popstate",{state:a})}catch(b){c=document.createEvent("PopStateEvent"),c.initPopStateEvent("popstate",!1,!1,a)}return c.singleSpa=!0,c.singleSpaTrigger=b,c}function h(a,b){return function(){const c=window.location.href,e=a.apply(this,arguments),f=window.location.href;return o&&c===f||(i()?window.dispatchEvent(g(window.history.state,b)):d()),e}}function i(){return p}const j=new WeakMap,k=new Set,l="undefined"!=typeof window,m={hashchange:[],popstate:[]},n=["hashchange","popstate"];let o;if(l){window.addEventListener("hashchange",f),window.addEventListener("popstate",f);const a=window.addEventListener,b=window.removeEventListener;window.addEventListener=function(b,c){return"function"==typeof c&&0<=n.indexOf(b)&&!m[b].find(a=>a===c)?void m[b].push(c):a.apply(this,arguments)},window.removeEventListener=function(a,c){return"function"==typeof c&&0<=n.indexOf(a)?void(m[a]=m[a].filter(a=>a!==c)):b.apply(this,arguments)},window.history.pushState=h(window.history.pushState,"pushState"),window.history.replaceState=h(window.history.replaceState,"replaceState")}let p=!1;a.register=function(a,b){k.add(a),j.set(a,b),d()},a.start=function(a={}){p=!0,a.urlRerouteOnly&&e(a.urlRerouteOnly),l&&d()},a.unregister=function(a){k.delete(a),j.delete(a)},Object.defineProperty(a,"__esModule",{value:!0})});
//# sourceMappingURL=web-widget-router.umd.js.map
