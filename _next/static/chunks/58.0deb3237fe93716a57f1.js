(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[58],{Cqfu:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return E}));var r=a("nKUr"),i=a("rePB"),o=a("q1tI"),l=a.n(o),s=a("lopY"),n=a("H2TA"),c=a("tRbT"),d=a("ofer"),p=a("dg+M"),g=a("UFMd"),u=a("JgGz"),h=a("bHLG"),m=a("4VHF"),b=a.n(m);const j={xs:{height:Math.ceil((u.breakpoints.values.sm-2*u.gutters.xs)/(16/9))},sm:{height:Math.ceil((u.breakpoints.values.md-2*u.gutters.sm)/(16/9))},md:{height:Math.ceil((u.breakpoints.values.lg-2*u.gutters.md)/(16/9))},lg:{height:Math.ceil((u.breakpoints.values.xl-2*u.gutters.lg)/(16/9))},xl:{height:Math.ceil((u.breakpoints.values.xl-2*u.gutters.xl)/(16/9))}},v={xs:{width:u.breakpoints.values.sm-2*u.gutters.xs},sm:{width:u.breakpoints.values.md-2*u.gutters.sm},md:{width:u.breakpoints.values.lg-2*u.gutters.md},lg:{width:Math.ceil((u.breakpoints.values.lg-2*u.gutters.md)*(4/12))},xl:{width:Math.ceil((u.breakpoints.values.xl-2*u.gutters.xl)*(4/12))}},x={xs:{width:Math.ceil(u.breakpoints.values.sm)},sm:{width:Math.ceil(u.breakpoints.values.md)},md:{width:Math.ceil(u.breakpoints.values.lg)},lg:{width:Math.ceil(u.breakpoints.values.xl)},xl:{width:Math.ceil(u.breakpoints.values.xl)}},k={xs:{width:u.breakpoints.values.sm/3},sm:{width:u.breakpoints.values.md/3},md:{width:u.breakpoints.values.lg/3},lg:{width:u.breakpoints.values.xl/3},xl:{width:u.breakpoints.values.xl/3}};var O=e=>{const t=e.spacing(1);return{root:{width:"100%",flexWrap:"wrap",[e.breakpoints.up("lg")]:{flexWrap:({imageLayout:e})=>"top"===e?"wrap":"nowrap"}},imageContainer:{position:"relative",backgroundColor:({colorScheme:t})=>Object(h.a)(e,t,"light","backgroundColor")},enlargeButton:{position:"absolute",bottom:15,right:15,borderRadius:0,width:39,opacity:1,height:39,fontSize:28,padding:0,backgroundColor:({colorScheme:t})=>Object(h.a)(e,t,"dark","backgroundColor"),color:({colorScheme:t})=>Object(h.a)(e,t,"dark","color"),"&:hover":{backgroundColor:({colorScheme:t})=>Object(h.a)(e,t,"middle","backgroundColor")}},enlargeButtonSmall:{bottom:10,right:10,width:28,height:28,fontSize:20},imageDescription:{marginTop:t,marginBottom:3.75*t},image:{"&:hover":{cursor:({enlargeImage:e})=>e?"pointer":"auto"}},richtextImageDescription:{marginTop:2*t,[e.breakpoints.up("lg")]:{marginTop:({imageLayout:e})=>"top"===e?2*t:0,marginLeft:({imageLayout:e})=>"top"===e?0:2*t}},backdrop:{backgroundColor:b()(e.palette.primary.dark,.95)},overlayWrapper:{position:"relative",width:"100%",height:"100%",maxWidth:e.dims.maxWidth,padding:0,margin:"auto",border:0,outline:"none",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},closeButton:{position:"fixed",right:0,top:0,color:"white",zIndex:100,borderRadius:0},overlayImage:{width:"100%",height:"100%"}}},w=a("ZPUd"),f=a.n(w),y=a("ueZX"),C=a.n(y),S=a("PsDL"),M=a("EQI2"),P=a("Xt1q"),I=a("TSYQ"),z=a.n(I),N=a("tr08");function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(Object(a),!0).forEach((function(t){Object(i.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const B=e=>{const{classes:t,imageLayout:a,image:i,imageDescription:o,richText:n,enlargeImage:u}=e,h=i&&i[0]?i[0]:null,m=Object(N.a)(),b=Object(s.a)(m.breakpoints.down("md")),O="top"===a||b,w=!O&&"left-wide"===a,[y,I]=l.a.useState(!1),L=()=>{I(!0)},B=()=>{I(!1)};return Object(r.jsxs)(c.a,{container:!0,className:t.root,children:[Object(r.jsxs)(c.a,{item:!0,xs:12,lg:O?12:w?6:3,children:[Object(r.jsxs)("div",{className:t.imageContainer,onClick:u&&!y&&L,children:[Object(r.jsx)(p.default,D(D({},h),{},{imageSizes:O?j:v,lazyLoading:!0,preserveAspectRatio:!0,portraitAspectRatio:O?16/9:void 0,onClick:u&&L,className:t.image})),u&&Object(r.jsx)(S.a,{"aria-label":"Zoom",className:z()(t.enlargeButton,{[t.enlargeButtonSmall]:!O}),onClick:L,children:Object(r.jsx)(C.a,{fontSize:"inherit"})}),u&&Object(r.jsx)(P.a,{open:y,BackdropProps:{className:t.backdrop},onClose:B,children:Object(r.jsxs)(M.a,{className:t.overlayWrapper,onClick:B,children:[Object(r.jsx)(S.a,{className:t.closeButton,onClick:B,children:Object(r.jsx)(f.a,{})}),Object(r.jsx)("div",{className:t.overlayImage,children:Object(r.jsx)(p.default,D(D({},h),{},{imageSizes:O?x:k,lazyLoading:!0,preserveAspectRatio:!0,objectFit:"contain"}))})]})})]}),o&&Object(r.jsx)(d.a,{variant:"caption",className:t.imageDescription,children:o})]}),n&&n[0]&&Object(r.jsx)(c.a,{item:!0,md:12,lg:O?12:w?6:9,children:Object(r.jsx)("div",{className:t.richtextImageDescription,children:Object(g.b)(n)})})]})};B.defaultProps={image:[{}],imageLayout:"top",colorScheme:{color:"_primary"},enlargeImage:!1};var E=Object(n.a)(O,{index:1})(B)},ueZX:function(e,t,a){"use strict";var r=a("TqRt"),i=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(a("q1tI")),l=(0,r(a("8/g6")).default)(o.createElement(o.Fragment,null,o.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),o.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"})),"ZoomIn");t.default=l}}]);