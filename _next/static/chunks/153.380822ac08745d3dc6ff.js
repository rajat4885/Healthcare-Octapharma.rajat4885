(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[153],{uTos:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return k}));var r=o("nKUr"),n=o("rePB"),a=o("q1tI"),c=o.n(a),i=o("H2TA"),s=o("tRbT"),l=o("TUZe"),d=o("Xt1q"),p=o("ofer"),h=o("PsDL"),b=o("25Xo"),u=o("ZPUd"),j=o.n(u),m=o("EQI2"),O=o("TSYQ"),f=o.n(O),g=o("4VHF"),v=o.n(g);var w=e=>{const t=e.spacing(1);return{root:{position:"relative",width:"100%"},backdrop:{backgroundColor:v()(e.palette.primary.dark,.95)},headline:{marginBottom:3*t},contentWrapper:{position:"relative",width:"100%",height:"100%",maxWidth:e.dims.maxWidth,padding:0,margin:"auto",border:0,outline:"none",overflow:"hidden"},ctaButton:{marginTop:0},button:{position:"fixed",right:0,top:0,color:"white",zIndex:100,borderRadius:0},videoWrapper:{width:"100vw",maxWidth:e.dims.maxWidth,maxHeight:"810px",height:"calc(100vw * 9 / 16)",margin:"auto",position:"absolute",top:0,bottom:0,left:0,right:0,"@media (min-aspect-ratio: 16 / 9)":{height:"100vh",width:"calc(100vh * 16 / 9)"}}}};function x(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function y(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?x(Object(o),!0).forEach((function(t){Object(n.default)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):x(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}const P=e=>{const{classes:t,className:o,video:n,buttonLabel:a,customButton:i,colorScheme:u,colorMode:O,headline:g,headlineStyle:v}=e,[w,x]=c.a.useState(!1),P=()=>{x(!0)},k=()=>{x(!1)};return Object(r.jsxs)("div",{className:f()(o,t.root),children:[g&&Object(r.jsx)(s.a,{item:!0,children:Object(r.jsx)(p.a,{component:"h5",variant:v,className:t.headline,children:g})}),i?c.a.cloneElement(i,{onClick:P}):Object(r.jsx)(b.a,{label:a,onClick:P,color:u,colorMode:O,className:t.ctaButton}),Object(r.jsx)(d.a,{open:w,BackdropProps:{className:t.backdrop},onClose:k,children:Object(r.jsxs)(m.a,{className:t.contentWrapper,onClick:k,children:[Object(r.jsx)(h.a,{className:t.button,onClick:k,children:Object(r.jsx)(j.a,{})}),n&&n[0]&&Object(r.jsx)("div",{className:t.videoWrapper,children:Object(r.jsx)(l.default,y(y({},n[0]),{},{autoplay:!0}))})]})})]})};P.defaultProps={headlineStyle:"h5",colorMode:"light"};var k=Object(i.a)(w,{index:1})(P)}}]);