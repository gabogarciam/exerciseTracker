(this["webpackJsonpexercise-traker"]=this["webpackJsonpexercise-traker"]||[]).push([[0],{19:function(e,t,n){e.exports=n(37)},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(17),i=n.n(r),l=(n(24),n(12)),o=n(1),s=(n(25),n(5)),u=n(6),m=n(8),h=n(7),v=[{title:"Home",url:"/",cName:"nav-links"},{title:"Exercise List",url:"/all-exercises",cName:"nav-links"},{title:"Create Exercise",url:"/create-exercise",cName:"nav-links"},{title:"Create User",url:"/create-user",cName:"nav-links"}],p=(n(26),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleClick=function(){e.setState({clicked:!e.state.clicked})},e.state={clicked:!1},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement("nav",{className:"NavbarItems"},c.a.createElement(l.b,{to:"/",className:"navbar-logo"},c.a.createElement("div",{className:"image-logo"}),c.a.createElement("h3",{className:"nav-title"},"ExerciseTracker")),c.a.createElement("div",{className:"menu-icon",onClick:this.handleClick},c.a.createElement("div",{className:"menu-burger ".concat(this.state.clicked?"menu-times":"menu-bars")})),c.a.createElement("ul",{className:this.state.clicked?"nav-menu active":"nav-menu"},v.map((function(t,n){return c.a.createElement("li",{className:"navbar-item",key:n},c.a.createElement(l.b,{className:t.cName,to:t.url,onClick:e.handleClick},t.title))}))))}}]),n}(a.Component)),b=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,"This is a CreateExercise Component!!!")}}]),n}(a.Component),d=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,"This is a Create User Component!!!")}}]),n}(a.Component),E=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,"This is a Edit Exercise Component!!!")}}]),n}(a.Component),f=(n(35),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,"This is a ExerciseList Component!!!")}}]),n}(a.Component)),k=(n(36),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,"Hi there, this is a Exercise Tracker App!!!")}}]),n}(a.Component));var j=function(){return c.a.createElement(l.a,null,c.a.createElement(p,null),c.a.createElement("div",{className:"container"},c.a.createElement(o.a,{path:"/",exact:!0,component:k}),c.a.createElement(o.a,{path:"/all-exercises",component:f}),c.a.createElement(o.a,{path:"/edit/:id",component:E}),c.a.createElement(o.a,{path:"/create-exercise",component:b}),c.a.createElement(o.a,{path:"/create-user",component:d})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.8e53e9d5.chunk.js.map