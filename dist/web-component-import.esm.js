const evaluate=(a,b,c)=>{if(b)return b.evaluate(a.toString(),c);if(!c&&"string"!=typeof a)return a;c=c||{};const d=Object.keys(c),e=Object.values(c),f=`'use strict';return eval(${JSON.stringify(a)})`;return new Function(...d,f)(...e)};let promise;const queueMicrotask="function"==typeof window.queueMicrotask?window.queueMicrotask.bind(window):a=>(promise||(promise=Promise.resolve())).then(a).catch(a=>setTimeout(()=>{throw a},0));function createHTMLElementClassProxy(a){const b=a?a.global:window,c=b.HTMLElement,d=b.ShadowRoot;return evaluate((a,b)=>{const c=(a,b)=>{const d=Reflect.getOwnPropertyDescriptor(a,b);if(!d){const d=Reflect.getPrototypeOf(a);return d?c(d,b):void 0}return d},d=()=>{if(customElements.get("shadow-root"))return;const b=Symbol("adoptedStyleSheets");customElements.define("shadow-root",class extends a{constructor(){for(const a in super(),this){const b=c(this,a);Reflect.defineProperty(this,a,b)}Object.defineProperties(this,{host:{get(){return this.parentNode}},mode:{get(){return this.getAttribute("mode")}},nodeType:{get(){return 11}},nodeName:{get(){return"#document-fragment"}},adoptedStyleSheets:{set(a){this[b]=a},get(){return this[b]||[]}}})}})},e=(a,{mode:c})=>{d();const e=document.createElement("shadow-root");return e.setAttribute(c,""),Reflect.setPrototypeOf(e,Object.create(b.prototype)),"open"===c&&Object.defineProperties(a,{shadowRoot:{get(){return e}}}),queueMicrotask(()=>{a.appendChild(e)}),e};return class extends a{attachShadow(){return e(this,...arguments)}}},a)(c,d)}function createCustomElementsProxy(a,b){const c=a?a.global:window,d=c.customElements,e=d.get.bind(d),f=d.define.bind(d);return evaluate((a,b,c)=>(...d)=>{d[0]=`${d[0]}.private`;const e=d[0];a(...d),c(e)||b(...d)},a)(b,f,e)}function WebComponentsParser(a,b,c={}){let d;const e=createHTMLElementClassProxy(b),f=createCustomElementsProxy(b,a=>{d=a}),g=b?b.global:window,h=g.HTMLElement,i=g.customElements.define;return g.HTMLElement=e,g.customElements.define=f,evaluate(a,b,c),g.HTMLElement=h,g.customElements.define=i,((a,b,c)=>({async bootstrap(){c=b.createElement(a)},async mount({container:a}){a.appendChild(c);const b=a.getRootNode();b.adoptedStyleSheets=c.shadowRoot.adoptedStyleSheets},async unmount({container:a}){a.removeChild(c)},async unload(){c=null}}))(d,g.document)}class HTMLWebComponentImportElement extends HTMLWebWidgetImportElement{get[HTMLWebWidgetImportElement.PARSER](){return WebComponentsParser}}window.HTMLWebComponentImportElement=HTMLWebComponentImportElement,customElements.define("web-component.import",HTMLWebComponentImportElement);export default HTMLWebComponentImportElement;
//# sourceMappingURL=web-component-import.esm.js.map
