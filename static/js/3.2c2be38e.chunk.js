(this["webpackJsonpalefba-website"]=this["webpackJsonpalefba-website"]||[]).push([[3],{36:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return i}))},38:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return o}))},40:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var r,i,o,a=n(36),c=n.p+"static/media/main-pattern.2e05d587.png",l=n.p+"static/media/papers.379ba068.png",s=n(0),d=n.n(s),u=["title","titleId"];function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function f(e,t){var n=e.title,a=e.titleId,c=b(e,u);return s.createElement("svg",p({width:28,height:29,viewBox:"0 0 28 29",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},c),n?s.createElement("title",{id:a},n):null,s.createElement("mask",{id:"mask0_676:2844",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:0,y:0,width:26,height:29},r||(r=s.createElement("path",{d:"M0 0H25.2V29H0V0Z",fill:"white"}))),i||(i=s.createElement("g",{mask:"url(#mask0_676:2844)"},s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.4515 0.293638C13.764 -0.0978793 12.917 -0.0978793 12.2295 0.293638L1.11051 6.62978C0.423006 7.0213 -0.000488281 7.74525 -0.000488281 8.52872V21.2001C-0.000488281 21.9836 0.423006 22.7076 1.11051 23.0995L11.1185 28.8021C12.1062 29.3647 13.3405 28.661 13.3405 27.5358V16.1307C13.3405 15.3472 13.764 14.6228 14.4515 14.2313L24.459 8.52872C25.4467 7.96614 25.4467 6.55923 24.459 5.99665L14.4515 0.293638Z",fill:"white"}))),o||(o=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.1846 18.6594C18.1846 17.959 18.5603 17.3126 19.1699 16.9623L25.3436 13.42C26.2196 12.9169 27.3151 13.5457 27.3151 14.5514V21.6361C27.3151 22.3365 26.9394 22.983 26.3294 23.3332L20.1561 26.8755C19.2797 27.3782 18.1846 26.7499 18.1846 25.7441V18.6594Z",fill:"#FF6200"})))}var h=s.forwardRef(f),g=(n.p,n(40),n(1)),j=function(){return Object(g.jsxs)("div",{id:"icon-title-group",children:[Object(g.jsx)("p",{id:"title",children:"\u0627\u0644\u0641\u0628\u0627"}),Object(g.jsx)("div",{children:Object(g.jsx)(h,{id:"icon"})})]})},m=n(38),O=function(e){var t=e.color,n=void 0===t?"currentColor":t,r=e.direction,i=void 0===r?"left":r,o=e.distance,c=void 0===o?"md":o,l=e.duration,d=void 0===l?.4:l,u=e.easing,p=void 0===u?"cubic-bezier(0, 0, 0, 1)":u,b=e.hideOutline,f=void 0===b||b,h=e.label,g=e.lines,j=void 0===g?3:g,m=e.onToggle,O=e.render,v=e.rounded,y=void 0!==v&&v,w=e.size,x=void 0===w?32:w,S=e.toggle,E=e.toggled,k=Object(s.useState)(!1),C=Object(a.a)(k,2),P=C[0],L=C[1],M=Math.max(12,Math.min(48,x)),I=Math.round((48-M)/2),T=M/12,A=Math.round(T),R=M/(j*(("lg"===c?.25:"sm"===c?.75:.5)+(3===j?1:1.25))),V=Math.round(R),D=A*j+V*(j-1),F=Math.round((48-D)/2),H=parseFloat((M/(3===j?"lg"===c?4.0425:"sm"===c?5.1625:4.6325:"lg"===c?6.7875:"sm"===c?8.4875:7.6675)-(T-A+(R-V))/(3===j?1:2)/(4/3)).toFixed(2)),U=Math.max(0,d),z={cursor:"pointer",height:"".concat(48,"px"),position:"relative",transition:"".concat(U,"s ").concat(p),userSelect:"none",width:"".concat(48,"px")},Z={background:n,height:"".concat(A,"px"),left:"".concat(I,"px"),position:"absolute"};f&&(z.outline="none"),y&&(Z.borderRadius="9em");var J=S||L,_=void 0!==E?E:P;return O({barHeight:A,barStyles:Z,burgerStyles:z,easing:p,handler:function(){J(!_),"function"===typeof m&&m(!_)},isLeft:"left"===i,isToggled:_,label:h,margin:V,move:H,time:U,topOffset:F,width:M})};function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}var y=function(e){return d.a.createElement(O,v({},e,{lines:2,render:function(e){return d.a.createElement("div",{className:"hamburger-react","aria-label":e.label,onClick:e.handler,onKeyUp:function(t){return"Enter"===t.key&&e.handler()},role:"button",style:e.burgerStyles,tabIndex:0},d.a.createElement("div",{style:Object(m.a)(Object(m.a)({},e.barStyles),{},{width:"".concat(e.width,"px"),top:"".concat(e.topOffset,"px"),transition:"".concat(e.time,"s ").concat(e.easing),transform:"".concat(e.isToggled?"rotate(".concat(45*(e.isLeft?-1:1),"deg) translate(").concat(e.move*(e.isLeft?-1:1),"px, ").concat(e.move,"px)"):"none")})}),d.a.createElement("div",{style:Object(m.a)(Object(m.a)({},e.barStyles),{},{width:"".concat(e.width,"px"),top:"".concat(e.topOffset+e.barHeight+e.margin,"px"),transition:"".concat(e.time,"s ").concat(e.easing),transform:"".concat(e.isToggled?"rotate(".concat(45*(e.isLeft?1:-1),"deg) translate(").concat(e.move*(e.isLeft?-1:1),"px, ").concat(-1*e.move,"px)"):"none")})}))}}))};t.default=function(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1],i=window.innerWidth/20,o={opacity:0},d={opacity:1};return Object(g.jsxs)("div",{id:"main-wrapper",children:[Object(g.jsxs)("div",{id:"hamburger-icon-group",children:[Object(g.jsx)("div",{id:"hamburger-button",children:Object(g.jsx)(y,{toggled:n,color:"white",toggle:r,size:i,onToggle:function(){},direction:"right",duration:.6})}),Object(g.jsx)(j,{})]}),Object(g.jsxs)("div",{id:"menu-screen",style:n?d:o,children:[Object(g.jsx)("a",{href:"https://www.roshan-ai.ir/contact-us/",children:Object(g.jsx)("p",{id:"contact-link",children:"\u062a\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627"})}),Object(g.jsx)("a",{href:"https://www.roshan-ai.ir/join-us/",children:Object(g.jsx)("p",{id:"join-link",children:"\u0647\u0645\u06a9\u0627\u0631\u06cc \u0628\u0627 \u0645\u0627"})})]}),Object(g.jsxs)("div",{id:"main-screen",style:n?o:d,children:[Object(g.jsx)("p",{id:"orange-text",children:"\u0646\u0648\u064a\u0633\u0647 \u062e\u0648\u0627\u0646 \u0627\u0644\u0641\u0628\u0640\u0627"}),Object(g.jsx)("p",{id:"white-text",children:"\u0628\u0640\u0631\u0627\u06cc \u062a\u0628\u062f\u06cc\u0640\u0644 \u062a\u0635\u0648\u06cc\u0640\u0631 \u0628\u0647 \u0646\u0648\u0634\u0640\u062a\u0647"}),Object(g.jsx)("div",{id:"papers",children:Object(g.jsx)("img",{src:l,id:"paper-image",alt:""})}),Object(g.jsx)("img",{src:c,id:"pattern",alt:""})]})]})}}}]);