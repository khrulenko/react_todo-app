(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(6),c=n.n(o),r=(n(13),n(14),n(15),n(3)),u=n(7),s=n(1),i=l.a.createContext(),m=function(e){var t=e.todo,n=Object(a.useContext)(i).changeTodoStatus,o=Object(a.useContext)(i).removeTodo;return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{key:t.id,className:t.completed?"completed":""},l.a.createElement("div",{className:"view"},l.a.createElement("input",{type:"checkbox",className:"toggle",checked:t.completed,onChange:function(){return n(t.id)}}),l.a.createElement("label",null,t.title),l.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return o(t.id)}})),l.a.createElement("input",{type:"text",className:"edit"})))},f=function(e){var t=e.toDosToShow;return l.a.createElement("ul",{className:"todo-list"},t.map((function(e){return l.a.createElement(m,{todo:e})})))},d=function(e){var t=e.listOfToDos,n=e.setListOfToDos,a=e.notCompletedToDos,o=e.statusToShow,c=e.setStatusToShow;return l.a.createElement("footer",{className:"footer"},l.a.createElement("span",{className:"todo-count"},a.length," ","items left"),l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement("a",{href:"#/",className:"all"===o?"selected":"",onClick:function(){return c("all")},onKeyDown:function(e){e.preventDefault(),c("all")}},"All")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/active",className:"active"===o?"selected":"",onClick:function(){return c("active")},onKeyDown:function(e){e.preventDefault(),c("active")}},"Active")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/completed",className:"completed"===o?"selected":"",onClick:function(){return c("completed")},onKeyDown:function(e){e.preventDefault(),c("completed")}},"Completed"))),a.length!==t.length&&l.a.createElement("button",{type:"button",className:"clear-completed",onClick:function(){return n(a)}},"Clear completed"))};function p(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(n),m=Object(s.a)(c,2),p=m[0],h=m[1],E=Object(a.useState)([]),b=Object(s.a)(E,2),g=b[0],v=b[1],O=Object(a.useState)(""),j=Object(s.a)(O,2),N=j[0],D=j[1],T=Object(a.useState)("all"),w=Object(s.a)(T,2),C=w[0],S=w[1];Object(a.useEffect)((function(){v(n.filter((function(e){return!1===e.completed}))),h(n)}),[n]);var k=function(e){o(n.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{completed:e})}))),"all"!==C&&S(e?"completed":"active")};Object(a.useEffect)((function(){h("all"===C?n:"active"===C?n.filter((function(e){return!1===e.completed})):n.filter((function(e){return!0===e.completed})))}),[C,n]);return l.a.createElement(i.Provider,{value:{changeTodoStatus:function(e){o(n.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t})))},removeTodo:function(e){o(n.filter((function(t){return t.id!==e})))}}},l.a.createElement("section",{className:"todoapp"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos"),l.a.createElement("form",null,l.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:N,onChange:function(e){return D(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),N.trim().length>0&&(o((function(e){return[].concat(Object(u.a)(n),[{title:N,id:+new Date,completed:!1}])})),D("")))}}))),l.a.createElement("section",{className:"main"},(0===g.length&&0!==n.length||g.length===n.length&&0!==n.length)&&l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:0===g.length,onChange:function(){0===g.length?k(!1):k(!0)}}),l.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete")),l.a.createElement(f,{toDosToShow:p})),n.length>0&&l.a.createElement(d,{listOfToDos:n,setListOfToDos:o,notCompletedToDos:g,statusToShow:C,setStatusToShow:S})))}c.a.render(l.a.createElement(p,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.00612e79.chunk.js.map