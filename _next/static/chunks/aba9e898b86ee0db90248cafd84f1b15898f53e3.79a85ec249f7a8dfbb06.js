(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[2],{"/Tr7":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("jIYg");function a(t){Object(r.a)(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"===typeof t||"[object Number]"===e?new Date(t):("string"!==typeof t&&"[object String]"!==e||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}},"/h9T":function(t,e,n){"use strict";function r(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}n.d(e,"a",(function(){return r}))},"4+6U":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n("/h9T"),a=n("jIYg"),i=36e5,o={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},u=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,s=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,c=/^([+-])(\d{2})(?::?(\d{2}))?$/;function d(t,e){Object(a.a)(1,arguments);var n=e||{},i=null==n.additionalDigits?2:Object(r.a)(n.additionalDigits);if(2!==i&&1!==i&&0!==i)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var o,u=l(t);if(u.date){var s=f(u.date,i);o=h(s.restDateString,s.year)}if(isNaN(o)||!o)return new Date(NaN);var c,d=o.getTime(),m=0;if(u.time&&(m=g(u.time),isNaN(m)||null===m))return new Date(NaN);if(!u.timezone){var b=new Date(d+m),v=new Date(0);return v.setFullYear(b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()),v.setHours(b.getUTCHours(),b.getUTCMinutes(),b.getUTCSeconds(),b.getUTCMilliseconds()),v}return c=w(u.timezone),isNaN(c)?new Date(NaN):new Date(d+m+c)}function l(t){var e,n={},r=t.split(o.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?(n.date=null,e=r[0]):(n.date=r[0],e=r[1],o.timeZoneDelimiter.test(n.date)&&(n.date=t.split(o.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var a=o.timezone.exec(e);a?(n.time=e.replace(a[1],""),n.timezone=a[1]):n.time=e}return n}function f(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:null};var a=r[1]&&parseInt(r[1]),i=r[2]&&parseInt(r[2]);return{year:null==i?a:100*i,restDateString:t.slice((r[1]||r[2]).length)}}function h(t,e){if(null===e)return null;var n=t.match(u);if(!n)return null;var r=!!n[4],a=m(n[1]),i=m(n[2])-1,o=m(n[3]),s=m(n[4]),c=m(n[5])-1;if(r)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,s,c)?function(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var a=r.getUTCDay()||7,i=7*(e-1)+n+1-a;return r.setUTCDate(r.getUTCDate()+i),r}(e,s,c):new Date(NaN);var d=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(v[e]||(p(t)?29:28))}(e,i,o)&&function(t,e){return e>=1&&e<=(p(t)?366:365)}(e,a)?(d.setUTCFullYear(e,i,Math.max(a,o)),d):new Date(NaN)}function m(t){return t?parseInt(t):1}function g(t){var e=t.match(s);if(!e)return null;var n=b(e[1]),r=b(e[2]),a=b(e[3]);return function(t,e,n){if(24===t)return 0===e&&0===n;return n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,r,a)?n*i+6e4*r+1e3*a:NaN}function b(t){return t&&parseFloat(t.replace(",","."))||0}function w(t){if("Z"===t)return 0;var e=t.match(c);if(!e)return 0;var n="+"===e[1]?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,a)?n*(r*i+6e4*a):NaN}var v=[31,null,31,30,31,30,31,31,30,31,30,31];function p(t){return t%400===0||t%4===0&&t%100}},"7Pku":function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var r=n("nKUr"),a=n("rePB"),i=n("Ff2n"),o=n("q1tI"),u=n.n(o),s=n("H2TA"),c=n("/MKj"),d=n("ofer"),l=n("UFMd"),f=n("7frF"),h=n.n(f),m=n("TSYQ"),g=n.n(m),b=n("faN1"),w=n("dZ6k");function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){Object(a.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}const y=["cxmContent","landingPageCxmContent","visibilityGuard","landingPageVisibilityGuard"],T=t=>{const{classes:e,component:n,blok:a,blokProps:o,userTargetGroup:s,className:c,dispatch:f}=t,m=Object(i.a)(t,["classes","component","blok","blokProps","userTargetGroup","className","dispatch"]),{editorMode:b}=Object(w.a)();if(!a||!y.includes(a.component))return u.a.createElement(n,p(p({},m),{},{className:c,children:Object(l.b)(p(p({},a),o))}));const{targetGroups:v,components:T}=a,O=!b&&!v.includes(s),C=null===v||void 0===v?void 0:v.map((t=>"health-care-professionals"===t?"HCP":t)).join(", "),j=b&&C;return T.map(((t,a)=>u.a.createElement(n,p(p({},m),{},{key:a.toString(),className:g()(c,{[e.hidden]:O,[e.withTargetGroupLabel]:j})}),[j?Object(r.jsxs)("div",{className:e.targetGroupLabel,children:[Object(r.jsx)(d.a,{variant:"overline",className:e.text,children:C}),Object(r.jsx)(h.a,{})]}):null,...Object(l.b)(p(p({},o),t))])))};T.defaultProps={userTargetGroup:"other",blokProps:{}};var O=Object(c.b)((({editor:t,targetGroup:e})=>({userTargetGroup:e.status})))(Object(s.a)(b.a,{index:1})(T))},"7frF":function(t,e,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("q1tI")),o=(0,r(n("8/g6")).default)(i.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");e.default=o},O3kt:function(t,e,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("q1tI")),o=(0,r(n("8/g6")).default)(i.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");e.default=o},"Se/U":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("/Tr7"),a=n("jIYg");function i(t){Object(a.a)(1,arguments);var e=Object(r.a)(t);return!isNaN(e)}},ZuT6:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("nKUr"),a=n("q1tI"),i=(n("Vvt1"),n("H2TA"));var o=t=>({root:{height:"100%",width:"100%"}});const u=t=>{const{classes:e,animation:i,play:o,loop:u}=t,s=Object(a.useRef)(null),{0:c,1:d}=Object(a.useState)(null);return Object(a.useEffect)((()=>{const{current:t}=s;if(!t||!i)return;(async e=>{const r=await n.e(72).then(n.t.bind(null,"qFE6",7));r.setQuality(3);const a=r.loadAnimation({container:t,renderer:"svg",loop:u,autoplay:!1,path:i,renderSettings:{progressiveLoad:!0}});a.setSubframe(!1),d(a)})()}),[s]),Object(a.useEffect)((()=>{c&&o&&(u?c.playSegments([[0,40],[40,c.totalFrames]],!0):c.goToAndPlay(0,!0))}),[o,c]),Object(r.jsx)("div",{ref:s,className:e.root})};u.defaultProps={loop:!1,play:!1};var s=Object(i.a)(o,{index:1})(u)},faN1:function(t,e,n){"use strict";e.a=t=>{const e=t.spacing(1),{palette:n}=t;return{content:{position:"relative"},hidden:{display:"none"},withTargetGroupLabel:{position:"relative"},targetGroupLabel:{right:10,top:0,position:"absolute",zIndex:1e3,display:"flex",justifyContent:"flex-end",alignItems:"center",padding:"2px 5px 2px 10px",textAlign:"right",backgroundColor:n.primary.main,opacity:.5,color:n.text.primary,width:"auto",overflow:"hidden",transition:"opacity 0.4s ease-in-out","&:hover":{opacity:1}},text:{marginRight:10,marginBottom:0,whiteSpace:"nowrap"},overlay:{position:"absolute",top:0,left:-11*e,bottom:0,width:10*e},extend:{bottom:-4*e+"px",[t.breakpoints.up("sm")]:{bottom:-4*e+"px"},[t.breakpoints.up("md")]:{bottom:-4*e+"px"},[t.breakpoints.up("lg")]:{bottom:-6*e+"px"},[t.breakpoints.up("xl")]:{bottom:-6*e+"px"}},overlayContent:{width:"100%",height:"100%"},marker:{width:1*e,height:"100%",backgroundColor:n.primary.light},textContainer:{paddingRight:1*e,position:"relative",height:"100%"}}}},jIYg:function(t,e,n){"use strict";function r(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}n.d(e,"a",(function(){return r}))},sWYD:function(t,e,n){"use strict";n.d(e,"a",(function(){return V}));var r=n("Se/U"),a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function i(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var o={date:i({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:i({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:i({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},u={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function s(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,s=a.width?String(a.width):t.defaultWidth;r=t.values[s]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function c(t){return function(e,n){var r=String(e),a=n||{},i=a.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],u=r.match(o);if(!u)return null;var s,c=u[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(d,(function(t){return t.test(c)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(d,(function(t){return t.test(c)})),s=t.valueCallback?t.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(c.length)}}}var d,l={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"===typeof a[t]?a[t]:1===e?a[t].one:a[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:o,formatRelative:function(t,e,n,r){return u[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:s({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:s({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:s({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:s({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:s({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(d={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(d.matchPattern);if(!a)return null;var i=a[0],o=n.match(d.parsePattern);if(!o)return null;var u=d.valueCallback?d.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:c({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:c({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:c({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:c({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}},f=n("/h9T"),h=n("/Tr7"),m=n("jIYg");function g(t,e){Object(m.a)(2,arguments);var n=Object(h.a)(t).getTime(),r=Object(f.a)(e);return new Date(n+r)}function b(t,e){Object(m.a)(2,arguments);var n=Object(f.a)(e);return g(t,-n)}function w(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var v={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return w("yy"===e?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):w(n+1,2)},d:function(t,e){return w(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return w(t.getUTCHours()%12||12,e.length)},H:function(t,e){return w(t.getUTCHours(),e.length)},m:function(t,e){return w(t.getUTCMinutes(),e.length)},s:function(t,e){return w(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,r=t.getUTCMilliseconds();return w(Math.floor(r*Math.pow(10,n-3)),e.length)}},p=864e5;function y(t){Object(m.a)(1,arguments);var e=1,n=Object(h.a)(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function T(t){Object(m.a)(1,arguments);var e=Object(h.a)(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=y(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=y(i);return e.getTime()>=a.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function O(t){Object(m.a)(1,arguments);var e=T(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=y(n);return r}var C=6048e5;function j(t,e){Object(m.a)(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,i=null==a?0:Object(f.a)(a),o=null==n.weekStartsOn?i:Object(f.a)(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=Object(h.a)(t),s=u.getUTCDay(),c=(s<o?7:0)+s-o;return u.setUTCDate(u.getUTCDate()-c),u.setUTCHours(0,0,0,0),u}function M(t,e){Object(m.a)(1,arguments);var n=Object(h.a)(t,e),r=n.getUTCFullYear(),a=e||{},i=a.locale,o=i&&i.options&&i.options.firstWeekContainsDate,u=null==o?1:Object(f.a)(o),s=null==a.firstWeekContainsDate?u:Object(f.a)(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,s),c.setUTCHours(0,0,0,0);var d=j(c,e),l=new Date(0);l.setUTCFullYear(r,0,s),l.setUTCHours(0,0,0,0);var g=j(l,e);return n.getTime()>=d.getTime()?r+1:n.getTime()>=g.getTime()?r:r-1}function x(t,e){Object(m.a)(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=null==a?1:Object(f.a)(a),o=null==n.firstWeekContainsDate?i:Object(f.a)(n.firstWeekContainsDate),u=M(t,e),s=new Date(0);s.setUTCFullYear(u,0,o),s.setUTCHours(0,0,0,0);var c=j(s,e);return c}var D=6048e5;var P="midnight",U="noon",k="morning",S="afternoon",N="evening",Y="night";function E(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+w(i,2)}function W(t,e){return t%60===0?(t>0?"-":"+")+w(Math.abs(t)/60,2):q(t,e)}function q(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+w(Math.floor(a/60),2)+n+w(a%60,2)}var z={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return v.y(t,e)},Y:function(t,e,n,r){var a=M(t,r),i=a>0?a:1-a;return"YY"===e?w(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):w(i,e.length)},R:function(t,e){return w(T(t),e.length)},u:function(t,e){return w(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return w(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return w(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return v.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return w(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){Object(m.a)(1,arguments);var n=Object(h.a)(t),r=j(n,e).getTime()-x(n,e).getTime();return Math.round(r/D)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):w(a,e.length)},I:function(t,e,n){var r=function(t){Object(m.a)(1,arguments);var e=Object(h.a)(t),n=y(e).getTime()-O(e).getTime();return Math.round(n/C)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):w(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):v.d(t,e)},D:function(t,e,n){var r=function(t){Object(m.a)(1,arguments);var e=Object(h.a)(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/p)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):w(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return w(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return w(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return w(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?U:0===a?P:a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?N:a>=12?S:a>=4?k:Y,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return v.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):v.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):w(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):w(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):v.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):v.s(t,e)},S:function(t,e){return v.S(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return W(a);case"XXXX":case"XX":return q(a);case"XXXXX":case"XXX":default:return q(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return W(a);case"xxxx":case"xx":return q(a);case"xxxxx":case"xxx":default:return q(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+E(a,":");case"OOOO":default:return"GMT"+q(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+E(a,":");case"zzzz":default:return"GMT"+q(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return w(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return w((r._originalDate||t).getTime(),e.length)}};function F(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function G(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var H={p:G,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return F(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",F(a,e)).replace("{{time}}",G(i,e))}};function L(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var Q=["D","DD"],X=["YY","YYYY"];function I(t){return-1!==Q.indexOf(t)}function A(t){return-1!==X.indexOf(t)}function B(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var R=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,_=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,J=/^'([^]*?)'?$/,Z=/''/g,$=/[a-zA-Z]/;function V(t,e,n){Object(m.a)(2,arguments);var a=String(e),i=n||{},o=i.locale||l,u=o.options&&o.options.firstWeekContainsDate,s=null==u?1:Object(f.a)(u),c=null==i.firstWeekContainsDate?s:Object(f.a)(i.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=o.options&&o.options.weekStartsOn,g=null==d?0:Object(f.a)(d),w=null==i.weekStartsOn?g:Object(f.a)(i.weekStartsOn);if(!(w>=0&&w<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var v=Object(h.a)(t);if(!Object(r.a)(v))throw new RangeError("Invalid time value");var p=L(v),y=b(v,p),T={firstWeekContainsDate:c,weekStartsOn:w,locale:o,_originalDate:v},O=a.match(_).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,H[e])(t,o.formatLong,T):t})).join("").match(R).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return K(n);var a=z[r];if(a)return!i.useAdditionalWeekYearTokens&&A(n)&&B(n,e,t),!i.useAdditionalDayOfYearTokens&&I(n)&&B(n,e,t),a(y,n,o.localize,T);if(r.match($))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return O}function K(t){return t.match(J)[1].replace(Z,"'")}}}]);