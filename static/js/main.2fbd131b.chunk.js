(this["webpackJsonpdgcapital-assesment"]=this["webpackJsonpdgcapital-assesment"]||[]).push([[0],{389:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(35),s=n.n(c),i=n(92),o=n(15),l=(n(231),n(404)),u=n(392),j=n(402),h=n(1),b=function(){return Object(h.jsx)(l.a,{bg:"dark",variant:"dark",expand:"lg",className:"header-nav",children:Object(h.jsxs)(u.a,{children:[Object(h.jsx)(l.a.Brand,{href:"/",children:"DG CAPITAL assesment"}),Object(h.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(h.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(h.jsxs)(j.a,{className:"me-auto",children:[Object(h.jsx)(j.a.Link,{as:i.b,to:"/",children:"Birth Month Chart"}),Object(h.jsx)(j.a.Link,{as:i.b,to:"/view",children:"List of People"})]})})]})})},d=n(30),O=n.n(d),f=n(69),m=n(12),x=n(393),p=n(70),g=n.n(p),v=n(394),y=n(395),N=n(399),w=n(217),k=n(218),D=n(101),C=n(221),S=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1],c=function(){var e=Object(f.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("http://localhost:3001/people");case 2:t=e.sent,n=t.data,r(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=n.map((function(e){return function(e){var t=new Date(e),n=[];return n[0]="January",n[1]="February",n[2]="March",n[3]="April",n[4]="May",n[5]="June",n[6]="July",n[7]="August",n[8]="September",n[9]="October",n[10]="November",n[11]="December",n[t.getMonth()]}(e.birthdate)})),i=[{month:"Jan",amount:s.filter((function(e){return"January"===e})).length},{month:"Feb",amount:s.filter((function(e){return"February"===e})).length},{month:"Mar",amount:s.filter((function(e){return"March"===e})).length},{month:"Apr",amount:s.filter((function(e){return"April"===e})).length},{month:"May",amount:s.filter((function(e){return"May"===e})).length},{month:"Jun",amount:s.filter((function(e){return"June"===e})).length},{month:"July",amount:s.filter((function(e){return"July"===e})).length},{month:"Aug",amount:s.filter((function(e){return"August"===e})).length},{month:"Sep",amount:s.filter((function(e){return"September"===e})).length},{month:"Oct",amount:s.filter((function(e){return"October"===e})).length},{month:"Nov",amount:s.filter((function(e){return"November"===e})).length},{month:"Dec",amount:s.filter((function(e){return"December"===e})).length}];return Object(a.useEffect)((function(){c()}),[]),Object(h.jsxs)(u.a,{style:{marginTop:20},className:"vh-100",children:[Object(h.jsx)(x.a,{className:"justify-content-center",children:Object(h.jsx)("h3",{style:{marginBottom:20,textAlign:"center"},children:"Number of people born in each month of Year"})}),Object(h.jsx)(x.a,{className:"h-100 justify-content-center",children:Object(h.jsx)(v.a,{width:"80%",height:"80%",children:Object(h.jsxs)(y.a,{data:i,margin:{top:5,right:0,bottom:50},children:[Object(h.jsx)(N.a,{strokeDasharray:"3 3"}),Object(h.jsx)(w.a,{dataKey:"month",label:{value:"Pages",position:"insideBottomMiddle",dy:30}}),Object(h.jsx)(k.a,{type:"number",domain:[0,function(e){return 2*e}],allowDecimals:!1,label:{value:"Number",position:"insideLeft",angle:-90,dy:-10}}),Object(h.jsx)(D.a,{}),Object(h.jsx)(C.a,{dataKey:"amount",fill:"#8884d8"})]})})})]})},A=n(400),L=n(219),M=n(401),J=n(406),B=n(403),F=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(m.a)(c,2),i=s[0],o=s[1],l=Object(a.useState)(""),j=Object(m.a)(l,2),b=j[0],d=j[1],p=Object(a.useState)(),v=Object(m.a)(p,2),y=v[0],N=v[1],w=Object(a.useState)([]),k=Object(m.a)(w,2),D=k[0],C=k[1],S=Object(a.useState)(!1),F=Object(m.a)(S,2),E=F[0],_=F[1],G=Object(a.useState)(""),P=Object(m.a)(G,2),T=P[0],I=P[1],Y=Object(a.useState)(),H=Object(m.a)(Y,2),K=H[0],U=H[1],q=function(){_(!1)},z=function(){var e=Object(f.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("http://localhost:3001/people");case 2:t=e.sent,n=t.data,C(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(f.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={fName:n,lName:i,age:y,date:b},e.next=3,g.a.post("http://localhost:3001/create",t).then((function(){console.log("success")}));case 3:r(""),o(""),d(""),N(0),z(),q();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(f.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={updates:{first_name:n,last_name:i,age:y,birthdate:b},id:t},e.next=3,g.a.put("http://localhost:3001/update",a).then((function(){console.log("success")}));case 3:r(""),o(""),d(""),N(0),z(),q();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(f.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.delete("http://localhost:3001/delete/".concat(t)).then((function(e){C(D.filter((function(e){return e.id!==t}))),console.log("Deleted person "+t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){z()}),[]),Object(h.jsxs)(u.a,{style:{marginTop:20},children:[Object(h.jsx)("h3",{style:{marginBottom:20},children:"List of People"}),0!==D.length?Object(h.jsxs)(A.a,{striped:!0,bordered:!0,hover:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"ID"}),Object(h.jsx)("th",{children:"First Name"}),Object(h.jsx)("th",{children:"Last Name"}),Object(h.jsx)("th",{children:"Age"}),Object(h.jsx)("th",{})]})}),Object(h.jsx)("tbody",{children:D.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.id}),Object(h.jsx)("td",{children:e.first_name}),Object(h.jsx)("td",{children:e.last_name}),Object(h.jsx)("td",{children:e.age}),Object(h.jsx)("td",{children:Object(h.jsxs)(x.a,{children:[Object(h.jsx)(L.a,{children:Object(h.jsx)(M.a,{onClick:function(){!function(e,t,n,a,c){I("Edit"),U(e),r(t),o(n),N(a),d(c),_(!0)}(e.id,e.first_name,e.last_name,e.age,e.birthdate)},children:"Edit"})}),Object(h.jsx)(L.a,{children:Object(h.jsx)(M.a,{variant:"danger",onClick:function(){V(e.id)},children:"Delete"})})]})})]},t)}))})]}):null,Object(h.jsx)(M.a,{onClick:function(){I("Add"),_(!0)},children:"Add New Person"}),Object(h.jsxs)(J.a,{show:E,onHide:q,children:[Object(h.jsx)(J.a.Header,{closeButton:!0,children:Object(h.jsxs)(J.a.Title,{children:[T," User"]})}),Object(h.jsx)(J.a.Body,{children:Object(h.jsxs)(B.a,{onSubmit:"Add"===T?Q:function(){return R(K)},children:[Object(h.jsxs)(B.a.Group,{className:"mb-3",children:[Object(h.jsx)(B.a.Label,{children:"First Name:"}),Object(h.jsx)(B.a.Control,{type:"text",placeholder:"Enter First Name",value:n,onChange:function(e){r(e.target.value)}})]}),Object(h.jsxs)(B.a.Group,{className:"mb-3",children:[Object(h.jsx)(B.a.Label,{children:"Last Name:"}),Object(h.jsx)(B.a.Control,{type:"text",placeholder:"Enter Last Name",value:i,onChange:function(e){o(e.target.value)}})]}),Object(h.jsxs)(B.a.Group,{className:"mb-3",children:[Object(h.jsx)(B.a.Label,{children:"Date of Birth"}),Object(h.jsx)(B.a.Control,{type:"date",placeholder:"Enter Birthday",value:b,onChange:function(e){d(e.target.value),function(e){var t=new Date,n=new Date(e),a=t.getFullYear()-n.getFullYear(),r=t.getMonth()-n.getMonth();(r<0||0===r&&t.getDate()<n.getDate())&&a--,N(a)}(e.target.value)}})]}),Object(h.jsx)(B.a.Group,{children:Object(h.jsxs)(M.a,{variant:"primary",type:"submit",children:[T," User"]})})]})}),Object(h.jsx)(J.a.Footer,{children:Object(h.jsx)(M.a,{variant:"secondary",onClick:q,children:"Close"})})]})]})};var E=function(){return Object(h.jsxs)(i.a,{children:[Object(h.jsx)(b,{}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/",element:Object(h.jsx)(S,{}),exact:!0}),Object(h.jsx)(o.a,{path:"/view",element:Object(h.jsx)(F,{})})]})]})};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(E,{})}),document.getElementById("root"))}},[[389,1,2]]]);
//# sourceMappingURL=main.2fbd131b.chunk.js.map