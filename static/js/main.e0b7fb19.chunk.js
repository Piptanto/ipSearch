(this["webpackJsonpip-search-second"]=this["webpackJsonpip-search-second"]||[]).push([[0],{31:function(e,t,n){},33:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),i=n(11),a=n.n(i),l=(n(31),n(14)),r=n.n(l),s=n(23),d=n(5),u=(n(33),n(24)),j=n.n(u),p=n(55),h=n(58),b=n(56),v=n(57),O=n(25),g=n(4),x=n(1);var f=function(){var e,t,n,c,i,a=Object(o.useState)(!1),l=Object(d.a)(a,2),u=l[0],f=l[1],y=Object(o.useState)("not found"),m=Object(d.a)(y,2),w=m[0],S=m[1],F=Object(o.useState)([51.505,-.09]),I=Object(d.a)(F,2),J=I[0],N=I[1];Object(o.useEffect)((function(){return L()}),[]);var L=function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,j.a.get("https://geo.ipify.org/api/v2/country,city?apiKey=at_gwdmoXwJwtJURaGh9Ee7XNxNFjJXZ&ipAddress=");case 3:t=e.sent,console.log(t),S(t.data),N([t.data.location.lat,t.data.location.lng]),f(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(J),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("h1",{children:"What is my IP-address?"}),u?Object(x.jsx)("p",{id:"loading",children:"Loading..."}):Object(x.jsxs)("div",{className:"body",children:[Object(x.jsxs)("div",{className:"ipField",children:[Object(x.jsx)("p",{style:{textDecorationLine:"underline"},children:"My IP:"}),Object(x.jsx)("p",{style:{fontWeight:"bold"},children:null===w||void 0===w?void 0:w.ip}),Object(x.jsx)("p",{children:null===w||void 0===w||null===(e=w.location)||void 0===e?void 0:e.city}),Object(x.jsxs)("p",{children:[null===w||void 0===w||null===(t=w.location)||void 0===t?void 0:t.region,", ",null===w||void 0===w||null===(n=w.location)||void 0===n?void 0:n.country]}),Object(x.jsxs)("p",{children:["lat: ",null===w||void 0===w||null===(c=w.location)||void 0===c?void 0:c.lat]}),Object(x.jsxs)("p",{children:["lng: ",null===w||void 0===w||null===(i=w.location)||void 0===i?void 0:i.lng]})]}),Object(x.jsxs)(p.a,{center:J,zoom:15,scrollWheelZoom:!1,children:[Object(x.jsx)(h.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(x.jsx)(b.a,{position:J,icon:new g.Icon({iconUrl:O.a,iconSize:[25,41],iconAnchor:[12,41]}),children:Object(x.jsxs)(v.a,{children:["You are here ",Object(x.jsx)("br",{})]})})]})]})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),i(e),a(e)}))};a.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(f,{})}),document.getElementById("root")),y()}},[[53,1,2]]]);
//# sourceMappingURL=main.e0b7fb19.chunk.js.map