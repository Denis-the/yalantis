(this.webpackJsonpyalantis=this.webpackJsonpyalantis||[]).push([[0],{22:function(e,t,n){"use strict";n.d(t,"e",(function(){return O})),n.d(t,"a",(function(){return y})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return v}));var r=n(11),a=n.n(r),c=n(16),s=n(9),u=n(32),i=n.n(u).a.create({baseURL:"https://yalantis-react-school-api.yalantis.com/api/task0/"}),o={requestUsers:function(){return Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("users");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))()}},d="yalantis/employees/SET_USERS",l="yalantis/employees/SET_ACTIVE_USERS_ID",p="yalantis/employees/ADD_ACTIVE_USER",j="yalantis/employees/REMOVE_ACTIVE_USER",b={users:[],activeUsersId:new Set},f=function(e){return{type:d,payload:e}},O=function(e){return{type:l,payload:e}},y=function(e){return{type:p,payload:e}},h=function(e){return{type:j,payload:e}},v=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.requestUsers();case 2:n=e.sent,r=n.data,t(f(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(s.a)(Object(s.a)({},e),{},{users:t.payload});case l:var n=new Set(t.payload);return Object(s.a)(Object(s.a)({},e),{},{activeUsersId:n});case p:var r=new Set(e.activeUsersId);return r.add(t.payload),Object(s.a)(Object(s.a)({},e),{},{activeUsersId:r});case j:var a=new Set(e.activeUsersId);return a.delete(t.payload),Object(s.a)(Object(s.a)({},e),{},{activeUsersId:a});default:return e}}},38:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(14),s=n.n(c),u=(n(38),n(21)),i=n(2),o=n(33),d=n(13),l=n(31),p=n(22),j=Object(d.b)({employees:p.b}),b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.c,f=Object(d.d)(j,b(Object(d.a)(l.a))),O=n(3),y=a.a.lazy((function(){return n.e(3).then(n.bind(null,66))})),h=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(r.Suspense,{fallback:Object(O.jsx)("div",{children:"loading..."}),children:Object(O.jsxs)(i.d,{children:[Object(O.jsx)(i.b,{path:"/employees",render:function(){return Object(O.jsx)(y,{})}}),Object(O.jsx)(i.b,{render:function(){return Object(O.jsx)(i.a,{to:"/employees"})}})]})})})},v=function(){return Object(O.jsx)(o.a,{children:Object(O.jsx)(u.a,{store:f,children:Object(O.jsx)(h,{})})})},S=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,65)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root")),S()}},[[64,1,2]]]);
//# sourceMappingURL=main.f9df479d.chunk.js.map