(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[73],{eVjt:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));var r=n("nKUr"),o=n("rePB"),i=(n("q1tI"),n("H2TA")),a=n("TSYQ"),s=n.n(a),c=n("tRbT"),m=n("ofer"),p=n("UFMd"),g=n("6MoK"),b=n.n(g),l=n("uW/W"),u=n("7Pku"),d=n("ZuT6");function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){Object(o.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var x=t=>{const e=t.spacing(1);return{root:{},contentContainer:{marginTop:4*e+"px",marginBottom:2*e+"px",[t.breakpoints.up("xs")]:O({marginTop:4*e+"px"},t.mixins.gutters()[t.breakpoints.up("xs")]),[t.breakpoints.up("sm")]:O({marginTop:4*e+"px"},t.mixins.gutters()[t.breakpoints.up("sm")]),[t.breakpoints.up("md")]:O({marginTop:5*e+"px"},t.mixins.gutters()[t.breakpoints.up("md")]),[t.breakpoints.up("lg")]:O({marginTop:6*e+"px",marginBottom:4*e+"px"},t.mixins.gutters()[t.breakpoints.up("lg")]),[t.breakpoints.up("xl")]:O({},t.mixins.gutters()[t.breakpoints.up("xl")])},gridItem:{marginBottom:2*e+"px",[t.breakpoints.up("sm")]:{marginBottom:2*e+"px"},[t.breakpoints.up("md")]:{marginBottom:2*e+"px"},[t.breakpoints.up("lg")]:{marginBottom:3*e+"px"},[t.breakpoints.up("xl")]:{marginBottom:3*e+"px"},width:"100%",flexBasis:"auto"},fullWidthItem:{flexBasis:"auto",width:"100vw",maxWidth:t.dims.maxWidth,marginLeft:t.negativeGutters.xs,marginRight:t.negativeGutters.xs,marginBottom:2*e+"px",[t.breakpoints.up("sm")]:{marginLeft:t.negativeGutters.sm,marginRight:t.negativeGutters.sm,marginBottom:2*e+"px"},[t.breakpoints.up("md")]:{marginLeft:t.negativeGutters.md,marginRight:t.negativeGutters.md,marginBottom:2*e+"px"},[t.breakpoints.up("lg")]:{marginLeft:t.negativeGutters.lg,marginRight:t.negativeGutters.lg,marginBottom:3*e+"px"},[t.breakpoints.up("xl")]:{marginLeft:t.negativeGutters.xl,marginRight:t.negativeGutters.xl,marginBottom:3*e+"px"}},noBottomMargin:{marginBottom:0}}};function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){Object(o.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}const k=t=>{const{classes:e,colorScheme:n,type:o,pageSettings:i,stage:a,components:g,keywordsHeadline:j,relatedTopics:O,animation:x,contentGridSettings:h,hideKeywords:k,hideSubtitle:y,component:w,enforceLoginPage:v}=Object(l.a)(t);if(v&&"articlePage"!==v)return Object(p.b)(f(f({},t),{},{component:v}));const P=a&&a.length>0?a[0].image:null,B=i&&i.length>0?b()(i[0],"keywords"):[],S=i&&i.length>0?i[0].date:null,G=a&&a.length>0?a[0].subtitle:null;return Object(r.jsxs)(r.Fragment,{children:[i&&i.length>0&&Object(p.a)(f(f({},i[0]),{},{image:P})),Object(r.jsxs)("div",{className:e.root,children:[x&&Object(r.jsx)("div",{className:e.animation,children:Object(r.jsx)(d.a,{play:!0,animation:x})}),a&&Object(p.b)(a.map((e=>f(f({},e),{},{colorScheme:n,type:b()(t,"type"),date:S})))),Object(r.jsx)("div",{className:e.contentContainer,children:Object(r.jsxs)(c.a,{container:!0,wrap:"nowrap",direction:"column",className:e.gridContainer,alignItems:h.alignItems,children:[G&&!y&&Object(r.jsx)(c.a,f(f({item:!0},h.breakpoints),{},{className:e.gridItem,children:Object(r.jsx)(m.a,{component:"h5",variant:"h5",children:G})})),g&&g.map(((t,o)=>Object(p.d)(t)?Object(r.jsx)(u.a,{component:c.a,blok:t,blokProps:{colorScheme:n},item:!0,className:s()(e.fullWidthItem,{[e.noBottomMargin]:Object(p.e)(t)||g[o+1]&&Object(p.d)(g[o+1])}),children:Object(p.b)(f({colorScheme:n},t))},`body-component-fullw-${o}`):Object(r.jsx)(u.a,{component:c.a,blok:t,blokProps:{colorScheme:n},item:!0,className:s()(e.gridItem,{[e.noBottomMargin]:Object(p.e)(t)}),xs:12,md:Object(p.c)(t)?12:h.breakpoints.md,children:Object(p.b)(f({colorScheme:n},t))},`body-component-${o}`))),j&&!k&&Object(r.jsx)(c.a,f(f({item:!0,className:e.gridItem},h.breakpoints),{},{children:Object(p.a)({component:"Keywords",colorScheme:n,headline:j,keywords:B})})),Object(r.jsx)(c.a,{item:!0,xs:12,className:e.gridItem,children:O&&Object(p.b)(O)})]})})]})]})};k.defaultProps={contentGridSettings:{alignItems:"center",breakpoints:{xs:12,md:8}}};var y=Object(i.a)(x,{index:1})(k)}}]);