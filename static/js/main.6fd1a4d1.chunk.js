(this["webpackJsonpip-search-second"]=this["webpackJsonpip-search-second"]||[]).push([[0],{32:function(t,e,n){},34:function(t,e,n){},54:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n.n(o),i=n(11),a=n.n(i),l=(n(32),n(15)),r=n.n(l),s=n(24),d=n(5),u=(n(34),n(25)),j=n.n(u),p=n(56),h=n(59),b=n(57),v=n(58),g=n(12),O=n(26),x=n(4),f=n(1);var m=function(){var t,e,n,c,i,a,l,u=Object(o.useState)(!1),m=Object(d.a)(u,2),y=m[0],w=m[1],T=Object(o.useState)("not found"),D=Object(d.a)(T,2),E=D[0],L=D[1],S=Object(o.useState)([51.505,-.09]),I=Object(d.a)(S,2),C=I[0],F=I[1];Object(o.useEffect)((function(){return A()}),[]);var N=g.DateTime.now().toLocaleString(g.DateTime.DATETIME_MED_WITH_WEEKDAY),z=g.DateTime.now().zoneName,A=function(){var t=Object(s.a)(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!0),t.next=3,j.a.get("https://geo.ipify.org/api/v2/country,city?apiKey=at_gwdmoXwJwtJURaGh9Ee7XNxNFjJXZ&ipAddress=");case 3:e=t.sent,console.log(e),L(e.data),F([e.data.location.lat,e.data.location.lng]),w(!1);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return console.log(C),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"What is my IP-address?"}),y?Object(f.jsx)("p",{id:"loading",children:"Loading..."}):Object(f.jsxs)("div",{className:"body",children:[Object(f.jsxs)("div",{className:"ipField",children:[Object(f.jsx)("p",{style:{textDecorationLine:"underline"},children:"My IP:"}),Object(f.jsx)("p",{style:{fontWeight:"bold"},children:null===E||void 0===E?void 0:E.ip}),Object(f.jsx)("p",{children:null===E||void 0===E||null===(t=E.location)||void 0===t?void 0:t.city}),Object(f.jsxs)("p",{children:[null===E||void 0===E||null===(e=E.location)||void 0===e?void 0:e.region,", ",null===E||void 0===E||null===(n=E.location)||void 0===n?void 0:n.country]}),Object(f.jsx)("p",{children:N}),Object(f.jsxs)("p",{children:["Timezone: ",z]}),Object(f.jsx)("img",{src:"https://flagcdn.com/80x60/".concat(null===E||void 0===E||null===(c=E.location)||void 0===c?void 0:c.country.toLowerCase(),".png"),srcset:"https://flagcdn.com/h40/".concat(null===E||void 0===E||null===(i=E.location)||void 0===i||null===(a=i.country)||void 0===a?void 0:a.toLowerCase(),".png 2x,\n        https://flagcdn.com/h60/").concat(null===E||void 0===E||null===(l=E.location)||void 0===l?void 0:l.country.toLowerCase(),".png 3x"),alt:"flag"})]}),Object(f.jsxs)(p.a,{center:C,zoom:15,scrollWheelZoom:!1,children:[Object(f.jsx)(h.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(f.jsx)(b.a,{position:C,icon:new x.Icon({iconUrl:O.a,iconSize:[25,41],iconAnchor:[12,41]}),children:Object(f.jsxs)(v.a,{children:["You are here ",Object(f.jsx)("br",{})]})})]})]})]})},y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),o(t),c(t),i(t),a(t)}))};a.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(m,{})}),document.getElementById("root")),y()}},[[54,1,2]]]);
//# sourceMappingURL=main.6fd1a4d1.chunk.js.map