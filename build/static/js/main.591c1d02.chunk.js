(this["webpackJsonppainikepeli-frontend"]=this["webpackJsonppainikepeli-frontend"]||[]).push([[0],{29:function(e,t,n){e.exports=n(66)},34:function(e,t,n){},63:function(e,t){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(27),i=n.n(c),s=n(5),l=(n(34),n(28)),r=function(e){return e.message?o.a.createElement("div",{className:"notification"},o.a.createElement("p",null,e.message)):null},u=n.n(l)()("/"),m=function(){var e=Object(a.useState)(20),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(10),l=Object(s.a)(i,2),m=l[0],p=l[1],f=Object(a.useState)(null),b=Object(s.a)(f,2),d=b[0],w=b[1];Object(a.useEffect)((function(){u.on("connect",(function(){localStorage.getItem("score")&&u.emit("return",Number(localStorage.getItem("score")))})),u.on("update",(function(e){c(e.score),p(e.nextWin),localStorage.setItem("score",e.score),e.won&&(w("You won ".concat(e.won," points!")),setTimeout((function(){w(null)}),3e3)),0===e.score&&window.confirm("0 pistett\xe4! Haluatko aloittaa alusta?")&&u.emit("restart")}))}),[]);return o.a.createElement("div",{className:"peli"},o.a.createElement("p",{className:"score"},"Pisteet: ",n),o.a.createElement("button",{onClick:function(e){n<=0?window.confirm("0 pistett\xe4! Haluatko aloittaa alusta?")&&u.emit("restart"):u.emit("click")},className:"painike"},"CLICK!"),o.a.createElement("p",{className:"nextwin"},"Seuraavaan voittoon ",m," painallusta"),o.a.createElement(r,{message:d}))};i.a.render(o.a.createElement(m,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.591c1d02.chunk.js.map