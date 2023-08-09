(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(81),r=n.n(o),a=n(645),c=n.n(a)()(r());c.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: Calibri;\n}\n\nbutton {\n    cursor: pointer;\n}\n\n.default-area,\n.projects-area {\n    background-color: #ddd;\n    width: 10rem;\n    height: auto;\n}\n\n.sidebar-project {\n    display: flex;\n    justify-content: space-between;\n    cursor: pointer;\n}\n\n.sidebar-project:hover {\n    background-color: #ccc;\n}",""]);const d=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var d=0;d<this.length;d++){var u=this[d][0];null!=u&&(c[u]=!0)}for(var i=0;i<e.length;i++){var l=[].concat(e[i]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],d=0;d<e.length;d++){var u=e[d],i=o.base?u[0]+o.base:u[0],l=a[i]||0,p="".concat(i," ").concat(l);a[i]=l+1;var s=n(p),m={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==s)t[s].references++,t[s].updater(m);else{var f=r(m,o);o.byIndex=d,t.splice(d,0,{identifier:p,updater:f,references:1})}c.push(p)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var d=n(a[c]);t[d].references--}for(var u=o(e,r),i=0;i<a.length;i++){var l=n(a[i]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=u}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),c=n.n(a),d=n(565),u=n.n(d),i=n(216),l=n.n(i),p=n(589),s=n.n(p),m=n(426),f={};f.styleTagTransform=s(),f.setAttributes=u(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const v={defaultArr:[{name:"Inbox",todoArray:[]}],userArr:[{name:"Pog",todoArray:[]},{name:"Test",todoArray:[]}]};function y(){document.getElementById("task-form").hidden=!0,function(){const e=document.getElementById("name"),t=document.getElementById("description"),n=document.getElementById("date"),o=document.getElementById("priority"),r=document.getElementById("project");e.value="",t.value="",n.valueAsDate=new Date,o.value="",r.value=v.defaultArr[0].name}()}function h(){document.getElementById("task-form").hidden=!1}function E(){const e=document.getElementById("name"),t=document.getElementById("description"),n=document.getElementById("date"),o=document.getElementById("priority"),r=document.getElementById("project"),a=((e,t,n,o,r)=>({title:e,description:t,dueDate:n,priority:o,project:r}))(e.value,t.value,n.value,o.value,r.value);if(r.value===v.defaultArr[0].name)v.defaultArr[0].todoArray.push(a);else for(let e=0;e<v.userArr.length;e++)r.value===v.userArr[e].name&&v.userArr[e].todoArray.push(a);y(),console.log(v.defaultArr),console.log(v.userArr)}function g(e){const t=document.getElementById("project"),n=document.createElement("option");n.text=e,n.value=e,n.id=e,t.add(n)}function b(){const e=document.querySelector(".projects-area");e.innerHTML="";for(let t=0;t<v.userArr.length;t++){const n=document.createElement("div"),o=document.createElement("div");n.classList.add("sidebar-project"),n.dataset.projectIndex=t,o.textContent=v.userArr[t].name,n.appendChild(o);const r=document.createElement("div"),a=document.createElement("button"),c=document.createElement("button");a.type="button",c.type="button",a.textContent="✍",c.textContent="❌",c.onclick=C,n.appendChild(r),r.appendChild(a),r.appendChild(c),e.appendChild(n)}}function C(){const e=parseInt(this.parentElement.parentElement.dataset.projectIndex);v.userArr.splice(e,1),function(e){document.getElementById("project").remove(e+1)}(e),b(),console.log("Default Arr",v.defaultArr),console.log("User Arr",v.userArr)}function x(){document.getElementById("project-form").hidden=!0,document.getElementById("project-name").value=""}function A(){document.getElementById("project-form").hidden=!1}function I(){const e=document.getElementById("project-name"),t={name:e.value,todoArray:[]};v.userArr.push(t),g(e.value),x(),console.log(v.userArr),b()}!function(e){const t=document.createElement("button");t.type="button",t.value="plus",t.textContent="+ Add Task",t.onclick=h,e.appendChild(t)}(document.getElementById("content")),function(e){const t=document.createElement("button");t.type="button",t.value="plus",t.textContent="+ Add Project",t.onclick=A,e.appendChild(t)}(document.getElementById("content")),function(){const e=document.getElementById("content"),t=document.createElement("form"),n=document.createElement("input"),o=document.createElement("input"),r=document.createElement("label"),a=document.createElement("input"),c=document.createElement("select"),d=document.createElement("select"),u=document.createElement("button"),i=document.createElement("button");t.hidden=!0,n.required=!0,n.type="text",o.type="text",a.type="date",u.type="button",i.type="button",n.placeholder="Task name",o.placeholder="Description",a.valueAsDate=new Date,r.for="date",t.id="task-form",n.id="name",o.id="description",a.id="date",c.id="priority",d.id="project",r.textContent="Due Date",u.textContent="Cancel",i.textContent="Add Task",u.value="cancel",i.value="add",u.onclick=y,i.onclick=E;const l=document.createElement("option"),p=document.createElement("option"),s=document.createElement("option"),m=document.createElement("option"),f=document.createElement("option");l.hidden=!0,l.text="Priority",p.text="Priority 1",s.text="Priority 2",m.text="Priority 3",f.text="Priority 4",l.value="",p.value="p1",s.value="p2",m.value="p3",f.value="p4",c.add(l),c.add(p),c.add(s),c.add(m),c.add(f),e.appendChild(t),t.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(a),t.appendChild(c),t.appendChild(d),t.appendChild(u),t.appendChild(i),g("Inbox"),g("Pog"),g("Test")}(),function(){const e=document.getElementById("content"),t=document.createElement("form"),n=document.createElement("label"),o=document.createElement("input"),r=document.createElement("button"),a=document.createElement("button");t.hidden=!0,o.required=!0,r.type="button",a.type="button",n.for="project-name",t.id="project-form",o.id="project-name",n.textContent="Project Name",r.textContent="Cancel",a.textContent="Add Project",r.value="cancel",a.value="add",r.onclick=x,a.onclick=I,e.appendChild(t),t.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(a)}(),function(){const e=document.querySelector(".default-area");for(let t=0;t<v.defaultArr.length;t++){const n=document.createElement("div"),o=document.createElement("div");n.classList.add("sidebar-project"),n.dataset.defaultIndex=t,o.textContent=v.defaultArr[t].name,n.appendChild(o),e.appendChild(n)}}(),b()})()})();