(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),c=n(645),a=n.n(c)()(r());a.push([e.id,"h1 {\n    color: red;\n}",""]);const i=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(a[d]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);o&&a[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},a=[],i=0;i<e.length;i++){var d=e[i],u=o.base?d[0]+o.base:d[0],l=c[u]||0,s="".concat(u," ").concat(l);c[u]=l+1;var p=n(s),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=i,t.splice(i,0,{identifier:s,updater:f,references:1})}a.push(s)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var c=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=n(c[a]);t[i].references--}for(var d=o(e,r),u=0;u<c.length;u++){var l=n(c[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}c=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),c=n(569),a=n.n(c),i=n(565),d=n.n(i),u=n(216),l=n.n(u),s=n(589),p=n.n(s),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const y=(e,t,n,o,r,c)=>({title:e,description:t,dueDate:n,priority:o,notes:r,checklist:c});function h(){document.getElementById("task-form").hidden=!0,function(){const e=document.getElementById("name"),t=document.getElementById("description"),n=document.getElementById("date"),o=document.getElementById("priority");e.value="",t.value="",n.value="",o.value=""}()}function v(){document.getElementById("task-form").hidden=!1}function E(){document.getElementById("project-form").hidden=!0,document.getElementById("project-name").value=""}function g(){document.getElementById("project-form").hidden=!1}const b=document.createElement("h1");b.textContent="Testing",document.body.appendChild(b);const x={title:"Inbox",todoArray:[]};console.log(x.title,x.todoArray);const C=y("Todo List","This is the description: code todo list","Next Friday","High","This is a note.",!0);console.log(C.title,C.description,C.dueDate,C.priority,C.notes,C.checklist),x.todoArray.push(C),console.log("Inbox's todoArray",x.todoArray);const I=y("Play Pog","I'm kind of addicted","Tomorrow","Low","WAH...",!1);x.todoArray.push(I),console.log("Inbox's todoArray",x.todoArray),function(e){const t=document.createElement("button");t.type="button",t.value="plus",t.textContent="+ Task",t.onclick=v,e.appendChild(t)}(document.getElementById("content")),function(e){const t=document.createElement("button");t.type="button",t.value="plus",t.textContent="+ Project",t.onclick=g,e.appendChild(t)}(document.getElementById("content")),function(){const e=document.getElementById("content"),t=document.createElement("form"),n=document.createElement("input"),o=document.createElement("input"),r=document.createElement("input"),c=document.createElement("select"),a=document.createElement("button"),i=document.createElement("button");n.required=!0,n.type="text",o.type="text",r.type="date",a.type="button",i.type="submit",n.placeholder="Task name",o.placeholder="Description",a.textContent="Cancel",i.textContent="Add task",t.id="task-form",n.id="name",o.id="description",r.id="date",c.id="priority",a.value="cancel",i.value="submit",a.onclick=h;const d=document.createElement("option"),u=document.createElement("option"),l=document.createElement("option"),s=document.createElement("option"),p=document.createElement("option");d.hidden=!0,d.text="Priority",u.text="Priority 1",l.text="Priority 2",s.text="Priority 3",p.text="Priority 4",d.value="",u.value="p1",l.value="p2",s.value="p3",p.value="p4",c.add(d),c.add(u),c.add(l),c.add(s),c.add(p),e.appendChild(t),t.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(c),t.appendChild(a),t.appendChild(i)}(),function(){const e=document.getElementById("content"),t=document.createElement("form"),n=document.createElement("label"),o=document.createElement("input"),r=document.createElement("button"),c=document.createElement("button");o.required=!0,n.for="project-name",t.id="project-form",o.id="project-name",r.type="button",c.type="submit",n.textContent="Project Name",r.textContent="Cancel",c.textContent="Add project",r.onclick=E,e.appendChild(t),t.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(c)}()})()})();