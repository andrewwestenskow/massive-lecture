(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(40)},21:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(14),l=n.n(r),u=(n(21),n(4)),o=n(2),s=n(3),i=n.n(s),d=(n(39),function(e){var t=e.id,n=e.phone,r=e.name,l=e.address,u=e.deleteFn,s=Object(a.useState)(!1),d=Object(o.a)(s,2),m=d[0],p=d[1],E=Object(a.useState)(r||""),b=Object(o.a)(E,2),f=b[0],v=b[1],h=Object(a.useState)(l||""),j=Object(o.a)(h,2),O=j[0],N=j[1],g=Object(a.useState)(n||""),C=Object(o.a)(g,2),S=C[0],y=C[1];return c.a.createElement("div",{className:"person"},m?c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{className:"content",onChange:function(e){return v(e.target.value)},type:"text",value:f,placeholder:"Name"}),c.a.createElement("input",{className:"content",onChange:function(e){return N(e.target.value)},type:"text",value:O,placeholder:"Address"}),c.a.createElement("input",{className:"content",onChange:function(e){return y(e.target.value)},type:"tel",value:S,placeholder:"Phone"}),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{onClick:function(){return u()}},"Delete"),c.a.createElement("button",{onClick:function(){return i.a.put("/api/class/".concat(t),{name:f,address:O,phone:S}),void p(!1)}},"Save"))):c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"content"},f),c.a.createElement("h2",{className:"content"},O),c.a.createElement("h2",{className:"content",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}"},S),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{onClick:function(){return p(!0)}},"Edit"))))}),m=function(e){var t=e.addFn,n=Object(a.useState)(""),r=Object(o.a)(n,2),l=r[0],u=r[1],s=Object(a.useState)(""),i=Object(o.a)(s,2),d=i[0],m=i[1],p=Object(a.useState)(""),E=Object(o.a)(p,2),b=E[0],f=E[1];return c.a.createElement("div",{className:"person"},c.a.createElement("input",{className:"content",onChange:function(e){return u(e.target.value)},type:"text",value:l,placeholder:"Name"}),c.a.createElement("input",{className:"content",onChange:function(e){return m(e.target.value)},type:"text",value:d,placeholder:"Address"}),c.a.createElement("input",{className:"content",onChange:function(e){return f(e.target.value)},type:"tel",value:b,placeholder:"Phone"}),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{onClick:function(){return t({name:l,address:d,phone:b}),u(""),m(""),void f("")}},"Add")))};var p=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)(function(){i.a.get("/api/class").then(function(e){return r(e.data)})},[]),c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Sticky List"),c.a.createElement("div",{className:"people"},n.map(function(e){return c.a.createElement(d,{key:e.id,id:e.id,name:e.name,address:e.address,phone:e.phone,deleteFn:function(){return function(e){i.a.delete("/api/class/".concat(e));var t=Object(u.a)(n),a=t.findIndex(function(t){return t.id===e});t.splice(a,1),r(t)}(e.id)}})}),c.a.createElement(m,{addFn:function(e){i.a.post("/api/class",e).then(function(e){r([].concat(Object(u.a)(n),[e.data[0]]))})}})))};l.a.render(c.a.createElement(p,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.78522453.chunk.js.map