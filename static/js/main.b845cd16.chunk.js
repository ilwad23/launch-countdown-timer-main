(this["webpackJsonplaunch-countdown-timer-main-react"]=this["webpackJsonplaunch-countdown-timer-main-react"]||[]).push([[0],{14:function(e,t,a){},26:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(16),r=a.n(s),o=(a(26),a(4)),i=a(3),u=(a(14),a(1));var j=function(e){var t=e.unit,a=Object(c.useState)(),n=Object(i.a)(a,2);return n[0],n[1],Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"flipper ".concat("flip")}),Object(u.jsx)("h3",{className:"num",onChange:function(){return console.log("work")},children:t[0]}),Object(u.jsx)("img",{className:"seperator",src:"./images/seperator.svg"})]})};var l=function(e){var t=e.timer,a=Object(c.useState)(),n=Object(i.a)(a,2);return n[0],n[1],Object(u.jsx)("div",{className:"timer",children:t.map((function(e,t){return Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)(j,{unit:e}),Object(u.jsx)("h4",{children:e[1]})]})}))})},b=a(17),m=a.n(b),O=a(19),g=a.n(O),d=a(20),f=a.n(d);var v=function(){return Object(u.jsx)("div",{className:"footer",children:Object(u.jsxs)("div",{className:"icons",children:[Object(u.jsx)(m.a,{className:"icon"}),Object(u.jsx)(g.a,{className:"icon"}),Object(u.jsx)(f.a,{className:"icon"})]})})};var h=function(){var e=Object(c.useState)(["00","00","00","00"]),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)((function(){return localStorage.getItem("startDate")||localStorage.setItem("startDate",Date()),localStorage.getItem("startDate")})),r=Object(i.a)(s,1)[0],j=Object(c.useState)((function(){var e=new Date(r);return e.setDate(e.getDate()+9),localStorage.getItem("goalDate")||localStorage.setItem("goalDate",e),e})),b=Object(i.a)(j,1)[0],m=Object(c.useState)((function(){if(!localStorage.getItem("currentDate"))return new Date(localStorage.getItem("startDate"));var e=new Date(r),t=new Date;return t.setMilliseconds(e.getMilliseconds()),t})),O=Object(i.a)(m,1)[0],g=Object(c.useState)((function(){return(b.getTime()-O.getTime())/1e3-3600})),d=Object(i.a)(g,2),f=d[0],h=d[1];function x(e,t){var a=e&&Math.floor(e/t);return[a,e-=a*t]}return Object(c.useEffect)((function(){f>0&&setInterval((function(){h((function(e){return e-1}))}),1e3)}),[]),Object(c.useEffect)((function(){n(function(e){var t=[[86400,"days"],[3600,"hours"],[60,"minutes"]].reduce((function(t,a){var c=x(e,a[0])[0];return e=x(e,a[0])[1],c<10&&(c="0".concat(c)),[].concat(Object(o.a)(t),[[c,a[1]]])}),[]);e<10&&(e="0".concat(e));return t.push([e,"seconds"]),t}(f)),localStorage.setItem("currentDate",new Date)}),[f]),Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)("h3",{className:"text",children:"WE\u2019RE LAUNCHING SOON"}),Object(u.jsx)("img",{className:"bg",src:"./images/bg-stars.svg"}),Object(u.jsx)(l,{timer:a}),Object(u.jsx)(v,{})]})};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.b845cd16.chunk.js.map