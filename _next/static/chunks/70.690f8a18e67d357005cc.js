(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[70],{"3nrN":function(e,t,o){"use strict";o.r(t);var r=o("sPoE");o.d(t,"default",(function(){return r.a}))},q69P:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return be}));var r,n=o("nKUr"),a=o("q1tI"),i=o("TSYQ"),l=o.n(i),c=o("H2TA"),s=o("tRbT"),d=o("wx14"),p=o("Ff2n"),u=o("rePB"),b=(o("USxY"),o("17x9"),o("iuhU")),h=o("l3Wi"),f=o("g+pH");function m(){if(r)return r;var e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),r="reverse",e.scrollLeft>0?r="default":(e.scrollLeft=1,0===e.scrollLeft&&(r="negative")),document.body.removeChild(e),r}function v(e,t){var o=e.scrollLeft;if("rtl"!==t)return o;switch(m()){case"negative":return e.scrollWidth-e.clientWidth+o;case"reverse":return e.scrollWidth-e.clientWidth-o;default:return o}}function g(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var x={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function j(e){var t=e.onChange,o=Object(p.a)(e,["onChange"]),r=a.useRef(),n=a.useRef(null),i=function(){r.current=n.current.offsetHeight-n.current.clientHeight};return a.useEffect((function(){var e=Object(h.a)((function(){var e=r.current;i(),e!==r.current&&t(r.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[t]),a.useEffect((function(){i(),t(r.current)}),[t]),a.createElement("div",Object(d.a)({style:x,ref:n},o))}var O=o("NqtD"),w=a.forwardRef((function(e,t){var o=e.classes,r=e.className,n=e.color,i=e.orientation,l=Object(p.a)(e,["classes","className","color","orientation"]);return a.createElement("span",Object(d.a)({className:Object(b.default)(o.root,o["color".concat(Object(O.a)(n))],r,"vertical"===i&&o.vertical),ref:t},l))})),y=Object(c.a)((function(e){return{root:{position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},colorPrimary:{backgroundColor:e.palette.primary.main},colorSecondary:{backgroundColor:e.palette.secondary.main},vertical:{height:"100%",width:2,right:0}}}),{name:"PrivateTabIndicator"})(w),k=o("5AJ6"),E=Object(k.a)(a.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),C=Object(k.a)(a.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight"),S=o("VD++"),N=a.createElement(E,{fontSize:"small"}),T=a.createElement(C,{fontSize:"small"}),P=a.forwardRef((function(e,t){var o=e.classes,r=e.className,n=e.direction,i=e.orientation,l=e.disabled,c=Object(p.a)(e,["classes","className","direction","orientation","disabled"]);return a.createElement(S.a,Object(d.a)({component:"div",className:Object(b.default)(o.root,r,l&&o.disabled,"vertical"===i&&o.vertical),ref:t,role:null,tabIndex:null},c),"left"===n?N:T)})),z=Object(c.a)({root:{width:40,flexShrink:0,opacity:.8,"&$disabled":{opacity:0}},vertical:{width:"100%",height:40,"& svg":{transform:"rotate(90deg)"}},disabled:{}},{name:"MuiTabScrollButton"})(P),B=o("Ovef"),I=o("tr08"),W=a.forwardRef((function(e,t){var o=e["aria-label"],r=e["aria-labelledby"],n=e.action,i=e.centered,l=void 0!==i&&i,c=e.children,s=e.classes,x=e.className,O=e.component,w=void 0===O?"div":O,k=e.indicatorColor,E=void 0===k?"secondary":k,C=e.onChange,S=e.orientation,N=void 0===S?"horizontal":S,T=e.ScrollButtonComponent,P=void 0===T?z:T,W=e.scrollButtons,D=void 0===W?"auto":W,A=e.selectionFollowsFocus,L=e.TabIndicatorProps,F=void 0===L?{}:L,M=e.TabScrollButtonProps,R=e.textColor,H=void 0===R?"inherit":R,$=e.value,G=e.variant,q=void 0===G?"standard":G,_=Object(p.a)(e,["aria-label","aria-labelledby","action","centered","children","classes","className","component","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant"]),J=Object(I.a)(),K="scrollable"===q,U="rtl"===J.direction,V="vertical"===N,Y=V?"scrollTop":"scrollLeft",Q=V?"top":"left",X=V?"bottom":"right",Z=V?"clientHeight":"clientWidth",ee=V?"height":"width";var te=a.useState(!1),oe=te[0],re=te[1],ne=a.useState({}),ae=ne[0],ie=ne[1],le=a.useState({start:!1,end:!1}),ce=le[0],se=le[1],de=a.useState({overflow:"hidden",marginBottom:null}),pe=de[0],ue=de[1],be=new Map,he=a.useRef(null),fe=a.useRef(null),me=function(){var e,t,o=he.current;if(o){var r=o.getBoundingClientRect();e={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollLeftNormalized:v(o,J.direction),scrollWidth:o.scrollWidth,top:r.top,bottom:r.bottom,left:r.left,right:r.right}}if(o&&!1!==$){var n=fe.current.children;if(n.length>0){var a=n[be.get($)];0,t=a?a.getBoundingClientRect():null}}return{tabsMeta:e,tabMeta:t}},ve=Object(B.a)((function(){var e,t=me(),o=t.tabsMeta,r=t.tabMeta,n=0;if(r&&o)if(V)n=r.top-o.top+o.scrollTop;else{var a=U?o.scrollLeftNormalized+o.clientWidth-o.scrollWidth:o.scrollLeft;n=r.left-o.left+a}var i=(e={},Object(u.default)(e,Q,n),Object(u.default)(e,ee,r?r[ee]:0),e);if(isNaN(ae[Q])||isNaN(ae[ee]))ie(i);else{var l=Math.abs(ae[Q]-i[Q]),c=Math.abs(ae[ee]-i[ee]);(l>=1||c>=1)&&ie(i)}})),ge=function(e){!function(e,t,o){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},a=r.ease,i=void 0===a?g:a,l=r.duration,c=void 0===l?300:l,s=null,d=t[e],p=!1,u=function(){p=!0},b=function r(a){if(p)n(new Error("Animation cancelled"));else{null===s&&(s=a);var l=Math.min(1,(a-s)/c);t[e]=i(l)*(o-d)+d,l>=1?requestAnimationFrame((function(){n(null)})):requestAnimationFrame(r)}};d===o?n(new Error("Element already at target position")):requestAnimationFrame(b)}(Y,he.current,e)},xe=function(e){var t=he.current[Y];V?t+=e:(t+=e*(U?-1:1),t*=U&&"reverse"===m()?-1:1),ge(t)},je=function(){xe(-he.current[Z])},Oe=function(){xe(he.current[Z])},we=a.useCallback((function(e){ue({overflow:null,marginBottom:-e})}),[]),ye=Object(B.a)((function(){var e=me(),t=e.tabsMeta,o=e.tabMeta;if(o&&t)if(o[Q]<t[Q]){var r=t[Y]+(o[Q]-t[Q]);ge(r)}else if(o[X]>t[X]){var n=t[Y]+(o[X]-t[X]);ge(n)}})),ke=Object(B.a)((function(){if(K&&"off"!==D){var e,t,o=he.current,r=o.scrollTop,n=o.scrollHeight,a=o.clientHeight,i=o.scrollWidth,l=o.clientWidth;if(V)e=r>1,t=r<n-a-1;else{var c=v(he.current,J.direction);e=U?c<i-l-1:c>1,t=U?c>1:c<i-l-1}e===ce.start&&t===ce.end||se({start:e,end:t})}}));a.useEffect((function(){var e=Object(h.a)((function(){ve(),ke()})),t=Object(f.a)(he.current);return t.addEventListener("resize",e),function(){e.clear(),t.removeEventListener("resize",e)}}),[ve,ke]);var Ee=a.useCallback(Object(h.a)((function(){ke()})));a.useEffect((function(){return function(){Ee.clear()}}),[Ee]),a.useEffect((function(){re(!0)}),[]),a.useEffect((function(){ve(),ke()})),a.useEffect((function(){ye()}),[ye,ae]),a.useImperativeHandle(n,(function(){return{updateIndicator:ve,updateScrollButtons:ke}}),[ve,ke]);var Ce=a.createElement(y,Object(d.a)({className:s.indicator,orientation:N,color:E},F,{style:Object(d.a)({},ae,F.style)})),Se=0,Ne=a.Children.map(c,(function(e){if(!a.isValidElement(e))return null;var t=void 0===e.props.value?Se:e.props.value;be.set(t,Se);var o=t===$;return Se+=1,a.cloneElement(e,{fullWidth:"fullWidth"===q,indicator:o&&!oe&&Ce,selected:o,selectionFollowsFocus:A,onChange:C,textColor:H,value:t})})),Te=function(){var e={};e.scrollbarSizeListener=K?a.createElement(j,{className:s.scrollable,onChange:we}):null;var t=ce.start||ce.end,o=K&&("auto"===D&&t||"desktop"===D||"on"===D);return e.scrollButtonStart=o?a.createElement(P,Object(d.a)({orientation:N,direction:U?"right":"left",onClick:je,disabled:!ce.start,className:Object(b.default)(s.scrollButtons,"on"!==D&&s.scrollButtonsDesktop)},M)):null,e.scrollButtonEnd=o?a.createElement(P,Object(d.a)({orientation:N,direction:U?"left":"right",onClick:Oe,disabled:!ce.end,className:Object(b.default)(s.scrollButtons,"on"!==D&&s.scrollButtonsDesktop)},M)):null,e}();return a.createElement(w,Object(d.a)({className:Object(b.default)(s.root,x,V&&s.vertical),ref:t},_),Te.scrollButtonStart,Te.scrollbarSizeListener,a.createElement("div",{className:Object(b.default)(s.scroller,K?s.scrollable:s.fixed),style:pe,ref:he,onScroll:Ee},a.createElement("div",{"aria-label":o,"aria-labelledby":r,className:Object(b.default)(s.flexContainer,V&&s.flexContainerVertical,l&&!K&&s.centered),onKeyDown:function(e){var t=e.target;if("tab"===t.getAttribute("role")){var o=null,r="vertical"!==N?"ArrowLeft":"ArrowUp",n="vertical"!==N?"ArrowRight":"ArrowDown";switch("vertical"!==N&&"rtl"===J.direction&&(r="ArrowRight",n="ArrowLeft"),e.key){case r:o=t.previousElementSibling||fe.current.lastChild;break;case n:o=t.nextElementSibling||fe.current.firstChild;break;case"Home":o=fe.current.firstChild;break;case"End":o=fe.current.lastChild}null!==o&&(o.focus(),e.preventDefault())}},ref:fe,role:"tablist"},Ne),oe&&Ce),Te.scrollButtonEnd)})),D=Object(c.a)((function(e){return{root:{overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},vertical:{flexDirection:"column"},flexContainer:{display:"flex"},flexContainerVertical:{flexDirection:"column"},centered:{justifyContent:"center"},scroller:{position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},fixed:{overflowX:"hidden",width:"100%"},scrollable:{overflowX:"scroll",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},scrollButtons:{},scrollButtonsDesktop:Object(u.default)({},e.breakpoints.down("xs"),{display:"none"}),indicator:{}}}),{name:"MuiTabs"})(W),A=a.forwardRef((function(e,t){var o=e.classes,r=e.className,n=e.disabled,i=void 0!==n&&n,l=e.disableFocusRipple,c=void 0!==l&&l,s=e.fullWidth,u=e.icon,h=e.indicator,f=e.label,m=e.onChange,v=e.onClick,g=e.onFocus,x=e.selected,j=e.selectionFollowsFocus,w=e.textColor,y=void 0===w?"inherit":w,k=e.value,E=e.wrapped,C=void 0!==E&&E,N=Object(p.a)(e,["classes","className","disabled","disableFocusRipple","fullWidth","icon","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"]);return a.createElement(S.a,Object(d.a)({focusRipple:!c,className:Object(b.default)(o.root,o["textColor".concat(Object(O.a)(y))],r,i&&o.disabled,x&&o.selected,f&&u&&o.labelIcon,s&&o.fullWidth,C&&o.wrapped),ref:t,role:"tab","aria-selected":x,disabled:i,onClick:function(e){m&&m(e,k),v&&v(e)},onFocus:function(e){j&&!x&&m&&m(e,k),g&&g(e)},tabIndex:x?0:-1},N),a.createElement("span",{className:o.wrapper},u,f),h)})),L=Object(c.a)((function(e){var t;return{root:Object(d.a)({},e.typography.button,(t={maxWidth:264,minWidth:72,position:"relative",boxSizing:"border-box",minHeight:48,flexShrink:0,padding:"6px 12px"},Object(u.default)(t,e.breakpoints.up("sm"),{padding:"6px 24px"}),Object(u.default)(t,"overflow","hidden"),Object(u.default)(t,"whiteSpace","normal"),Object(u.default)(t,"textAlign","center"),Object(u.default)(t,e.breakpoints.up("sm"),{minWidth:160}),t)),labelIcon:{minHeight:72,paddingTop:9,"& $wrapper > *:first-child":{marginBottom:6}},textColorInherit:{color:"inherit",opacity:.7,"&$selected":{opacity:1},"&$disabled":{opacity:.5}},textColorPrimary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled}},textColorSecondary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.secondary.main},"&$disabled":{color:e.palette.text.disabled}},selected:{},disabled:{},fullWidth:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},wrapped:{fontSize:e.typography.pxToRem(12),lineHeight:1.5},wrapper:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%",flexDirection:"column"}}}),{name:"MuiTab"})(A),F=o("bHLG"),M=o("NHIT");var R=e=>({root:{flexGrow:1,position:"relative"},label:{minWidth:"auto",color:({colorScheme:t})=>Object(M.a)(e,t,"vertical","color"),opacity:1}});const H=Object(c.a)((e=>({indicator:{backgroundColor:({colorScheme:t})=>Object(F.a)(e,t,"middle","backgroundColor"),height:3},scrollButtons:{paddingTop:8,width:24,[e.breakpoints.up("lg")]:{width:24,paddingTop:7},[e.breakpoints.up("xl")]:{width:32},color:({colorScheme:t})=>Object(M.a)(e,t,"vertical","color")},scroller:{}})))(D),$=Object(c.a)({root:{height:63,padding:0},wrapper:{paddingTop:13,paddingRight:8,paddingLeft:8,height:63}})(L),G=({classes:e,colorScheme:t,labels:o,tabIndex:r,onTabIndexChange:a})=>Object(n.jsx)("nav",{className:e.root,children:Object(n.jsx)(H,{value:r,onChange:(e,t)=>{a(t)},variant:"scrollable",scrollButtons:"on",colorScheme:t,children:o.map(((t,o)=>Object(n.jsx)($,{label:t,className:e.label},o)))})});G.defaultProps={labels:[]};var q=Object(c.a)(R,{index:1})(G),_=o("2syv"),J=o("YAnM"),K=o("pQ8y");const U=({show:e,children:t,classes:o})=>Object(n.jsx)(K.a,{in:e,appear:e,timeout:600,classNames:{appearDone:o.tabTransitionAppearDone,enter:o.tabTransitionEnter,enterActive:o.tabTransitionEnterActive,enterDone:o.tabTransitionEnterDone,exit:o.tabTransitionExit,exitActive:o.tabTransitionExitActive,exitDone:o.tabTransitionExitDone},children:Object(n.jsx)("div",{className:o.root,children:t})});U.defaultProps={show:!0,blur:!0};var V=Object(c.a)((e=>({root:{height:"100%",width:"100%",opacity:0,overflow:"hidden",position:"relative",pointerEvents:"none",transition:"opacity 300ms ease-out 0ms"},tabTransitionEnter:({blur:e})=>({opacity:0}),tabTransitionEnterActive:({blur:e})=>({opacity:1}),tabTransitionEnterDone:{opacity:1,pointerEvents:"all"},tabTransitionExit:{opacity:1},tabTransitionExitActive:({blur:e})=>({opacity:0}),tabTransitionExitDone:({blur:e})=>({opacity:0})})),{index:1})(U);function Y(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function Q(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(o),!0).forEach((function(t){Object(u.default)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Y(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}const X=({image:e,imageSizes:t,show:o,classes:r})=>Object(n.jsx)("div",{className:l()(r.root),children:Object(n.jsx)(V,{show:o,children:Object(n.jsx)(J.a,Q(Q({},e),{},{imageSizes:t}))})});X.defaultProps={};var Z=Object(c.a)((e=>({root:{zIndex:1,position:"absolute",height:"100%",width:"100%",top:0,left:0}})),{index:1})(X);o("JgGz");function ee(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function te(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(o),!0).forEach((function(t){Object(u.default)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ee(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}const oe={top:40,left:48},re={top:40,left:40},ne=({image:e,imageSizes:t,show:o,classes:r})=>Object(n.jsx)("div",{className:r.root,children:Object(n.jsx)(V,{show:o,blur:!1,children:Object(n.jsx)(J.a,te(te({},e),{},{imageSizes:t,blurred:!0}))})});ne.defaultProps={};var ae=Object(c.a)((e=>({root:{position:"absolute",zIndex:1,height:"100%",[e.breakpoints.down("md")]:{display:"none"},[e.breakpoints.up("lg")]:{width:`calc(100vw + ${e.negativeGutters.lg} * 2)`,left:-re.left,top:-re.top,height:({imageSizes:e})=>`${e.lg.height}px`},[e.breakpoints.up("xl")]:{width:`calc(100vw + ${e.negativeGutters.xl} * 2)`,maxWidth:`calc(${e.dims.maxWidth}px + ${e.negativeGutters.xl} * 2)`,left:-oe.left,top:-oe.top,height:({imageSizes:e})=>`${e.xl.height}px`}}})),{index:1})(ne),ie=o("ofer"),le=o("3nrN");var ce=Object(c.a)((e=>({root:{position:"relative",width:"33.333%",float:"left",top:0,zIndex:2,pointerEvents:({show:e})=>e?"all":"none",[e.breakpoints.up("xs")]:{marginTop:24,padding:"0 16px 16px 16px","&:nth-child(2)":{left:"0%"},"&:nth-child(3)":{left:"-33.3333%"},"&:nth-child(4)":{left:"-66.6666%"}},[e.breakpoints.up("sm")]:{marginTop:28,padding:"0 24px 24px 24px"},[e.breakpoints.up("md")]:{marginTop:28,padding:"0 24px 24px 24px"},[e.breakpoints.up("lg")]:{float:"none",width:"100%",position:"absolute",top:96,left:"0 !important",padding:"0 24px 24px 24px"},[e.breakpoints.up("xl")]:{top:108,padding:"0 32px 32px 32px"}},headline:{color:({colorScheme:t})=>Object(M.a)(e,t,"vertical","color"),[e.breakpoints.up("lg")]:{marginBottom:"3.2rem"},[e.breakpoints.up("xl")]:{marginBottom:"2.4rem"}},richtext:{color:({colorScheme:t})=>Object(M.a)(e,t,"vertical","color")}})),{index:1})((({headline:e,richtext:t,colorScheme:o,show:r,classes:a})=>Object(n.jsx)("div",{className:a.root,children:Object(n.jsxs)(V,{show:r,blur:!1,children:[Object(n.jsx)(ie.a,{variant:"h3",className:a.headline,children:e}),Object(n.jsx)(le.default,{className:a.richtext,content:t,explicitColorScheme:o})]})})));const se={top:40,bottom:40,left:48},de={top:40,bottom:40,left:40};var pe=e=>{e.spacing(1);return{root:{position:"relative"},backgroundContainer:{position:"relative",overflow:"hidden",height:_.a.xs,[e.breakpoints.up("xs")]:{height:_.a.xs.height},[e.breakpoints.up("sm")]:{height:_.a.sm.height},[e.breakpoints.up("md")]:{height:_.a.md.height},[e.breakpoints.up("lg")]:{height:_.a.lg.height},[e.breakpoints.up("xl")]:{height:_.a.xl.height}},backgroundImage:{position:"absolute",zIndex:1},contentContainer:{zIndex:2,backgroundColor:({colorScheme:t})=>Object(M.a)(e,t,"vertical","background"),[e.breakpoints.up("lg")]:{position:"absolute",top:de.top,backgroundColor:"rgba(0, 0, 0, 0) !important"},[e.breakpoints.up("xl")]:{position:"absolute",top:se.top},width:"100%"},contentGridItem:{top:0,[e.breakpoints.up("lg")]:{left:de.left},[e.breakpoints.up("xl")]:{left:se.left},position:"relative",overflow:"hidden"},content:{zIndex:2,width:"300%",[e.breakpoints.up("sm")]:{},[e.breakpoints.up("md")]:{},[e.breakpoints.up("lg")]:{width:"100%",height:_.a.lg.height-de.top-de.bottom},[e.breakpoints.up("xl")]:{height:_.a.xl.height-se.top-se.bottom,left:0,right:0}},tabsHeaderContainer:{position:"relative",zIndex:2,width:"33.3333%",padding:"0 16px",[e.breakpoints.up("sm")]:{top:4,padding:"0 24px"},[e.breakpoints.up("md")]:{top:4,padding:"0 24px"},[e.breakpoints.up("lg")]:{width:"100%",padding:"0 24px",top:0},[e.breakpoints.up("xl")]:{top:4,padding:"0 32px"}}}};const ue=e=>{const{classes:t,tabs:o,colorScheme:r}=e,{0:i,1:c}=Object(a.useState)(0);return Object(n.jsxs)("div",{className:l()(t.root),children:[Object(n.jsx)("div",{className:l()(t.backgroundContainer),children:o&&o.map((({image:e},t)=>Object(n.jsx)(Z,{show:t===i,image:e&&e[0]?e[0]:null,imageSizes:_.a},t)))}),Object(n.jsx)("div",{className:l()(t.contentContainer),children:Object(n.jsx)(s.a,{container:!0,className:t.contentGrid,justify:"flex-start",children:Object(n.jsxs)(s.a,{item:!0,className:t.contentGridItem,xs:12,lg:6,xl:5,children:[o&&o.map((({image:e},t)=>Object(n.jsx)(ae,{image:e&&e[0]?e[0]:null,imageSizes:_.a,show:t===i},t))),Object(n.jsxs)("div",{className:t.content,children:[Object(n.jsx)("div",{className:t.tabsHeaderContainer,children:Object(n.jsx)(q,{labels:o&&o.map((({label:e})=>e)),tabIndex:i,onTabIndexChange:c,colorScheme:r})}),o&&o.map((({headline:e,richtext:t,_uid:o},a)=>Object(n.jsx)(ce,{headline:e,richtext:t,show:a===i,colorScheme:r},o)))]})]})})})]})};ue.defaultProps={};var be=Object(c.a)(pe,{index:1})(ue)}}]);