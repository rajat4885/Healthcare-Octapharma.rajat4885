(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[46],{"56Ss":function(e,a,t){"use strict";var n=t("wx14"),i=t("Ff2n"),r=t("q1tI"),s=(t("17x9"),t("iuhU")),l=t("H2TA"),o=t("MquD"),c=r.forwardRef((function(e,a){var t=e.classes,l=e.className,c=Object(i.a)(e,["classes","className"]),d=r.useContext(o.a);return r.createElement("div",Object(n.a)({className:Object(s.default)(t.root,l,"flex-start"===d.alignItems&&t.alignItemsFlexStart),ref:a},c))}));a.a=Object(l.a)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(c)},IsqK:function(e,a,t){"use strict";var n=t("wx14"),i=t("Ff2n"),r=t("q1tI"),s=(t("17x9"),t("iuhU")),l=t("H2TA"),o=t("ofer"),c=t("MquD"),d=r.forwardRef((function(e,a){var t=e.children,l=e.classes,d=e.className,p=e.disableTypography,m=void 0!==p&&p,b=e.inset,y=void 0!==b&&b,g=e.primary,h=e.primaryTypographyProps,u=e.secondary,j=e.secondaryTypographyProps,f=Object(i.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),x=r.useContext(c.a).dense,v=null!=g?g:t;null==v||v.type===o.a||m||(v=r.createElement(o.a,Object(n.a)({variant:x?"body2":"body1",className:l.primary,component:"span",display:"block"},h),v));var O=u;return null==O||O.type===o.a||m||(O=r.createElement(o.a,Object(n.a)({variant:"body2",className:l.secondary,color:"textSecondary",display:"block"},j),O)),r.createElement("div",Object(n.a)({className:Object(s.default)(l.root,d,x&&l.dense,y&&l.inset,v&&O&&l.multiline),ref:a},f),v,O)}));a.a=Object(l.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(d)},Zb4c:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return O}));var n=t("nKUr"),i=(t("q1tI"),t("H2TA")),r=t("TSYQ"),s=t.n(r),l=t("ofer"),o=t("CqP1"),c=t("JlWd"),d=t("QUGa"),p=t("m2L4"),m=t.n(p),b=t("Jial"),y=t("eD//"),g=t("tVbE"),h=t("IsqK"),u=t("56Ss"),j=(t("UFMd"),t("9sWr")),f=t("06rQ");var x=e=>({root:{width:"100%"},linkEntry:{transition:"background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms","&:hover":{backgroundColor:({disableHover:a})=>a?"inherit":e.palette.colors._primary.shade4,textDecoration:"none","& span":{fontWeight:"initial"}}},headline:{},divider:{borderBottom:"1px solid "+e.palette.primary.light},icon:{marginLeft:e.spacing(1),marginRight:e.spacing(2),color:e.palette.text.primary,"& svg":{width:e.spacing(3),height:e.spacing(3)}},denyPaddingLeft:{paddingLeft:0},listText:{textTransform:"uppercase",paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}});const v=e=>{const{classes:a,headline:t,headlineStyle:i,linkarray:r,disableDivider:p,disableHover:x,trackingEnabled:v,trackingCategory:O,clamp:k}=e,w=Object(f.a)(),T=e=>e.downloadAsset?e.downloadAsset:Object(j.extractLinkUrl)(e.link);return Object(n.jsxs)("div",{className:a.root,children:[t&&Object(n.jsx)(l.a,{component:"h5",variant:i,className:a.headline,children:t}),r&&Object(n.jsx)(y.a,{children:r.map(((e,t)=>Object(n.jsx)(b.a,{disableBold:!0,onClick:a=>{v&&O&&w(Object(f.b)(O,e.title))},href:T(e),isDownloadAsset:""!=e.downloadAsset,target:"url"===e.link.linktype||e.downloadAsset?"_blank":"",children:Object(n.jsxs)(g.a,{component:"div",className:s()(a.denyPaddingLeft,a.linkEntry,{[a.divider]:t!==r.length-1&&!p}),children:[Object(n.jsx)(u.a,{className:a.icon,children:e.downloadAsset?Object(n.jsx)(d.a,{}):"url"==e.link.linktype?Object(n.jsx)(o.a,{}):Object(n.jsx)(c.a,{})}),Object(n.jsx)(h.a,{className:a.listText,primary:Object(n.jsx)(m.a,{clamp:k,useNativeClamp:!0,children:e.title})})]})},t.toString())))})]})};v.defaultProps={disableDivider:!1,disableHover:!1,trackingEnabled:!1,clamp:0,headlineStyle:"h5"};var O=Object(i.a)(x,{index:1})(v)}}]);