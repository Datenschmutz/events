"use strict";(self.webpackChunkdatenschmutz_events=self.webpackChunkdatenschmutz_events||[]).push([[147],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(f,c(c({ref:t},p),{},{components:r})):a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,c[1]=l;for(var i=2;i<o;i++)c[i]=r[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7473:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>u,default:()=>y,frontMatter:()=>d,metadata:()=>m,toc:()=>f});var a=r(7462),n=r(7294),o=r(3905),c=r(5999),l=r(9960);function s(e){let{className:t,name:r,children:a,image:o,URL:c}=e;return n.createElement("div",{className:t},n.createElement("div",{className:"card card--full-height"},n.createElement("div",{className:"card__header"},n.createElement("div",{className:"avatar avatar--vertical"},n.createElement("img",{className:"avatar__photo avatar__photo--xl",src:`../img/cal/${o} `,alt:`${r}`}),n.createElement("div",{className:"avatar__intro"},n.createElement("h3",{className:"avatar__name"},r)))),n.createElement("div",{className:"card__body"},a),n.createElement("div",{className:"card__footer"},n.createElement("div",{className:"button-group button-group--block"},c&&n.createElement("a",{className:"button button--secondary",target:"\\_blank",href:c},"Download (ics)"),c&&n.createElement(l.Z,{className:"button button--secondary",onClick:()=>{navigator.clipboard.writeText(c)}},"Copy URL")))))}function i(e){return n.createElement(s,(0,a.Z)({},e,{className:"col col--6 margin-bottom--lg"}))}function p(){return n.createElement("div",{className:"row"},n.createElement(i,{name:"Apple Events \ud83c\udf4f",image:"apple-logo.svg",URL:"https://event.datenschmutz.dev/remote.php/dav/public-calendars/DM5wzwJCBXERxqZc?export"},n.createElement(c.Z,{id:"apple.card.body"},"Stay up-to-date on all things \ud83c\udf4f Apple with our calendar of events. From product launches to educational sessions, never miss a moment.")))}const d={title:"Calendars",id:"calendars",description:"Your one-stop for all your calendar needs!",slug:"/calendars"},u="Calendars",m={type:"mdx",permalink:"/calendars",source:"@site/src/pages/calendars.mdx",title:"Calendars",description:"Your one-stop for all your calendar needs!",frontMatter:{title:"Calendars",id:"calendars",description:"Your one-stop for all your calendar needs!",slug:"/calendars"}},f=[],v={toc:f};function y(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"calendars"},"Calendars"),(0,o.kt)("p",null,"Take a look at our calendars! Here you can find various event calendars to subscribe (ics) in the calendar app of your choice.\nHow you can integrate these event calendars is explained in our ",(0,o.kt)("a",{parentName:"p",href:"./docs/intro"},"documentation"),"!"),(0,o.kt)(p,{mdxType:"CalendarRow"}))}y.isMDXComponent=!0}}]);