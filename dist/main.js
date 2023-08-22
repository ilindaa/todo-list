(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),a=n(645),d=n.n(a)()(r());d.push([e.id,'* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: Calibri;\n    overflow-wrap: anywhere;\n}\n\n:root {\n    --p1-color: #d1453b;\n    --p2-color: #eb8909;\n    --p3-color: #246fe0;\n    --p4-color: #666;\n    --border-corners: 0.3rem;\n    --gray-color: #eee;\n    --lighter-gray-color: #f5f5f5;\n    --white-color: #fff;\n    --navbar-color: #517cba;\n    --light-navbar-color: #85a5d1;\n    --dark-navbar-color: #24549a;\n}\n\n.navbar {\n    background-color: var(--navbar-color);\n    display: grid;\n    grid-column: 1 / 3;\n    padding: 0rem 1.4rem;\n}\n\n.nav-content {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.logo,\n#content > button {\n    color: var(--white-color);\n    font-weight: bold;\n}\n\n/* Icon and Text Flex Box */\n.logo,\n#content > button,\n.project-name {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.logo,\n.project-name {\n    gap: 0.4rem;\n}\n\n.logo {\n    font-size: 1.3rem;\n}\n\n#content {\n    display: flex;\n    justify-content: flex-end;\n    gap: 0.8rem;\n}\n\n#content > button {\n    background-color: var(--light-navbar-color);\n    padding: 0.2rem 0.5rem;\n}\n\n#content > button:hover {\n    background-color: var(--dark-navbar-color);\n}\n\nbody,\n.container {\n    height: 100%;\n    width: 100%;\n}\n\n.container {\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 0.08fr 1fr;\n}\n\n.left-container,\n.sidebar-project {\n    background-color: #fafafa;\n    width: 19rem;\n}\n\n.right-container {\n    background-color: var(--white-color);\n}\n\nbutton {\n    font-size: 1rem;\n    cursor: pointer;\n    outline: none;\n    border: none;\n    padding: 0.2rem;\n}\n\n/* Rounded corners */\nbutton,\n.sidebar-project,\n.sidebar-task,\ninput,\nselect,\nform {\n    border-radius: var(--border-corners);\n}\n\n.sidebar-project,\n.sidebar-task {\n    height: 2.25rem;\n}\n\n/* Project (sidebar) and individual task buttons */\n.flex-buttons,\n.sidebar-task-right {\n    display: flex;\n}\n\n/* Edit and Trash SVGs\' Buttons */\n.flex-buttons > button,\n.sidebar-task-right > button {\n    height: 1.8rem;\n    width: 1.8rem;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.flex-buttons > button,\n.sidebar-task-right > button {\n    background-color: transparent;\n}\n\n.flex-buttons > button:hover {\n    background-color: var(--lighter-gray-color);\n}\n\n.sidebar-task-right > button:hover {\n    background-color: var(--gray-color);\n}\n\n/* Projects */\n.all-projects {\n    padding: 1.8rem 1rem 1rem 1rem;\n}\n\n.projects-title {\n    padding: 0rem 0.5rem;\n}\n\n.sidebar-project {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: none;\n    padding: 0.5rem;\n    cursor: pointer;\n    gap: 1rem;\n}\n\n.sidebar-project:hover,\n.active {\n    background-color: var(--gray-color);\n}\n\n.all-projects,\n.task-area,\n.task-content {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n/* Tasks */\n.task-area {\n    padding: 2rem 8rem;\n}\n\n.sidebar-task {\n    background-color: var(--white-color);\n    display: flex;\n    justify-content: space-between;\n    align-items: center; \n    border: 1px solid var(--gray-color);\n    padding: 0.5rem;\n}\n\n.sidebar-task-left {\n    display: flex;\n    gap: 1rem;\n}\n\n/* Priority */\n.priority-one {\n    border-left: 1rem solid var(--p1-color);\n}\n\n.priority-two {\n    border-left: 1rem solid var(--p2-color);\n}\n\n.priority-three {\n    border-left: 1rem solid var(--p3-color);\n}\n\n.priority-four {\n    border-left: 1rem solid var(--p4-color);\n}\n\n/* Form CSS */\nform {\n    background-color: var(--white-color);\n    width: 28rem;\n    padding: 1rem;\n}\n\nform > h2 {\n    color: var(--dark-navbar-color);\n    padding-bottom: 0.5rem;\n}\n\nform > button {\n    font-weight: bold;\n    padding: 0.4rem 1.1rem;\n}\n\nform > button:hover {\n    filter: brightness(0.9);\n}\n\nform > button[type="submit"] {\n    background-color: var(--navbar-color);\n    color: var(--white-color);\n}\n\nform > button[type="button"] {\n    background-color: var(--gray-color);\n    color: var(--p4-color);\n}\n\nlabel {\n    font-weight: bold;\n}\n\ninput,\nselect {\n    font-size: 1rem;\n    border: 1px solid var(--gray-color);\n    width: 100%;\n    outline: none;\n    padding: 0.3rem;\n}\n\ninput:focus,\nselect:focus {\n    border: 1px solid black;\n}\n\n/* SVG Icons */\n.logo-svg {\n    height: 1.5rem;\n    width: 1.5rem;\n}\n\n.white-svg-icon {\n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);\n}\n\n.gray-svg-icon {\n    filter: invert(42%) sepia(0%) saturate(1%) hue-rotate(46deg) brightness(93%) contrast(88%);\n}',""]);const c=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(o)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(d[i]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&d[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},d=[],c=0;c<e.length;c++){var i=e[c],l=o.base?i[0]+o.base:i[0],s=a[l]||0,u="".concat(l," ").concat(s);a[l]=s+1;var p=n(u),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}d.push(u)}return d}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var d=0;d<a.length;d++){var c=n(a[d]);t[c].references--}for(var i=o(e,r),l=0;l<a.length;l++){var s=n(a[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=i}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),d=n.n(a),c=n(565),i=n.n(c),l=n(216),s=n.n(l),u=n(589),p=n.n(u),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=i(),f.insert=d().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h={defaultArr:[{name:"Inbox",todoArray:[{title:"Test1",description:"D1",dueDate:"2023-08-06",priority:"p1",project:"Inbox"},{title:"Test2",description:"D2",dueDate:"",priority:"p2",project:"Inbox"},{title:"Test5",description:"D3",dueDate:"2023-08-18",priority:"p3",project:"Inbox"}]}],userArr:[{name:"Pog",todoArray:[{title:"Test3",description:"D4",dueDate:"2023-08-17",priority:"p4",project:"Pog"}]},{name:"Test",todoArray:[{title:"Test4",description:"D5",dueDate:"2023-08-17",priority:"p4",project:"Test"}]}]},y=n.p+"469e7f772cffd2e91e89.svg";function g(){document.getElementById("project-form").hidden=!0,document.getElementById("project-name").value=""}function v(){document.getElementById("project-form").hidden=!1}function b(){document.getElementById("edit-project-form").hidden=!0}function E(e){e.stopPropagation();const t=document.getElementById("edit-project-form"),n=document.getElementById("edit-project-name"),o=this.parentElement.parentElement.dataset.projectIndex,r=h.userArr[o];n.value=r.name,t.onsubmit=function(e){e.preventDefault(),function(e,t){const n=document.getElementById("edit-project-name");e.name=n.value,b(),j(),w(),function(e,t){const n=document.getElementById("project");n.options[t+1].value=e.name,n.options[t+1].id=e.name,n.options[t+1].textContent=e.name}(e,parseInt(t))}(r,o)},t.hidden=!1}const x=n.p+"8421b7fc701a0f1a93be.svg",C=n.p+"bcf8d6ff346603c8a51a.svg",I=n.p+"31fde04228baec633234.svg";function j(){const e=document.querySelector(".projects-content");e.innerHTML="";for(let t=0;t<h.userArr.length;t++){const n=document.createElement("button"),o=document.createElement("div");n.type="button",n.classList.add("sidebar-project"),n.dataset.projectIndex=t,n.onclick=A,n.addEventListener("click",D),o.textContent=h.userArr[t].name,n.appendChild(o);const r=document.createElement("div"),a=document.createElement("button"),d=document.createElement("button");r.classList.add("flex-buttons"),a.type="button",d.type="button";const c=new Image(25,25),i=new Image(25,25);c.classList.add("gray-svg-icon"),i.classList.add("gray-svg-icon"),c.src=x,i.src=C,a.appendChild(c),d.appendChild(i),a.onclick=E,d.onclick=k,n.appendChild(r),r.appendChild(a),r.appendChild(d),e.appendChild(n)}}function k(e){e.stopPropagation();const t=parseInt(this.parentElement.parentElement.dataset.projectIndex);w(),h.userArr.splice(t,1),function(e){document.getElementById("project").remove(e+1)}(t),j(),b()}function w(){const e=document.querySelector(".task-title"),t=document.querySelector(".task-content");e.innerHTML="",t.innerHTML=""}function A(){const e=parseInt(this.dataset.defaultProjectIndex),t=parseInt(this.dataset.projectIndex),n=document.querySelector(".task-title"),o=document.createElement("h2");if(n.innerHTML="",o.classList.add("task-header"),isNaN(e)||(o.textContent=h.defaultArr[e].name,o.dataset.defaultProjectIndex=e),!isNaN(t)){if(null==h.userArr[t])return;o.textContent=h.userArr[t].name,o.dataset.projectIndex=t}n.appendChild(o),P()}function B(){const e=document.querySelector(".task-header"),t=parseInt(e.dataset.defaultProjectIndex),n=parseInt(e.dataset.projectIndex);let o,r;return isNaN(t)||(o=t,r=h.defaultArr),isNaN(n)||(o=n,r=h.userArr),{currentProjectIndex:o,array:r}}function P(){q();const e=document.querySelector(".task-content");e.innerHTML="";let{currentProjectIndex:t,array:n}=B();for(let o=0;o<n[t].todoArray.length;o++){const r=document.createElement("div"),a=document.createElement("div"),d=document.createElement("div"),c=document.createElement("div"),i=document.createElement("div"),l=n[t].todoArray[o];r.classList.add("sidebar-task"),a.classList.add("sidebar-task-left"),d.classList.add("sidebar-task-right"),"p1"===l.priority?r.classList.add("priority-one"):"p2"===l.priority?r.classList.add("priority-two"):"p3"===l.priority?r.classList.add("priority-three"):"p4"===l.priority&&r.classList.add("priority-four"),c.textContent=l.title,""===l.dueDate?i.textContent="No Date":i.textContent=l.dueDate,r.dataset.taskIndex=o;const s=document.createElement("button"),u=document.createElement("button");s.type="button",u.type="button";const p=new Image(25,25),m=new Image(25,25);p.classList.add("gray-svg-icon"),m.classList.add("gray-svg-icon"),p.src=x,m.src=C,s.appendChild(p),u.appendChild(m),s.onclick=M,u.onclick=T,e.appendChild(r),r.appendChild(a),r.appendChild(d),a.appendChild(c),a.appendChild(i),d.appendChild(s),d.appendChild(u)}}function T(){let{currentProjectIndex:e,array:t}=B();const n=parseInt(this.parentElement.parentElement.dataset.taskIndex);t[e].todoArray.splice(n,1),P(),q()}function D(){let e=document.getElementsByClassName("active");e.length>0&&(e[0].className=e[0].className.replace("active","")),this.classList.add("active"),b()}function L(){document.getElementById("task-form").hidden=!0,function(){const e=document.getElementById("name"),t=document.getElementById("description"),n=document.getElementById("date"),o=document.getElementById("priority"),r=document.getElementById("project");e.value="",t.value="",n.valueAsDate=new Date,o.value="",r.value=h.defaultArr[0].name}()}function S(){document.getElementById("task-form").hidden=!1}function N(e){const t=document.getElementById("project"),n=document.createElement("option");n.text=e,n.value=e,n.id=e,t.add(n)}function q(){document.getElementById("edit-task-form").hidden=!0}function M(){const e=document.getElementById("edit-task-form"),t=document.getElementById("edit-name"),n=document.getElementById("edit-description"),o=document.getElementById("edit-date"),r=document.getElementById("edit-priority");let{currentProjectIndex:a,array:d}=B();const c=this.parentElement.parentElement.dataset.taskIndex,i=d[a].todoArray[c];t.value=i.title,n.value=i.description,o.value=i.dueDate,r.value=i.priority,e.onsubmit=function(e){e.preventDefault(),function(e){const t=document.getElementById("edit-name"),n=document.getElementById("edit-description"),o=document.getElementById("edit-date"),r=document.getElementById("edit-priority");e.title=t.value,e.description=n.value,e.dueDate=o.value,e.priority=r.value,q(),P()}(i)},e.hidden=!1}!function(e){const t=document.createElement("button");t.type="button",t.value="plus";const n=new Image(16,16),o=document.createElement("div");o.textContent="Add Task",n.classList.add("white-svg-icon"),n.src=y,t.appendChild(n),t.appendChild(o),t.onclick=S,e.appendChild(t)}(document.getElementById("content")),function(e){const t=document.createElement("button");t.type="button",t.value="plus";const n=new Image(16,16),o=document.createElement("div");o.textContent="Add Project",n.classList.add("white-svg-icon"),n.src=y,t.appendChild(n),t.appendChild(o),t.onclick=v,e.appendChild(t)}(document.getElementById("content")),function(){const e=document.getElementById("content"),t=document.createElement("form"),n=document.createElement("h2"),o=document.createElement("input"),r=document.createElement("input"),a=document.createElement("label"),d=document.createElement("input"),c=document.createElement("select"),i=document.createElement("label"),l=document.createElement("select"),s=document.createElement("button"),u=document.createElement("button");t.hidden=!0,t.onsubmit=function(e){e.preventDefault(),function(){const e=document.getElementById("name"),t=document.getElementById("description"),n=document.getElementById("date"),o=document.getElementById("priority"),r=document.getElementById("project"),a=((e,t,n,o,r)=>({title:e,description:t,dueDate:n,priority:o,project:r}))(e.value,t.value,n.value,o.value,r.value);if(r.value===h.defaultArr[0].name)h.defaultArr[0].todoArray.push(a);else for(let e=0;e<h.userArr.length;e++)r.value===h.userArr[e].name&&h.userArr[e].todoArray.push(a);L(),P()}()},o.required=!0,c.required=!0,o.type="text",r.type="text",d.type="date",s.type="button",u.type="submit",o.placeholder="Task Name",r.placeholder="Description",d.valueAsDate=new Date,a.htmlFor="date",i.htmlFor="project",t.id="task-form",o.id="name",r.id="description",d.id="date",c.id="priority",l.id="project",n.textContent="Add Task",a.textContent="Due Date",i.textContent="Select Project",s.textContent="Cancel",u.textContent="Add",s.value="cancel",s.onclick=L;const p=document.createElement("option"),m=document.createElement("option"),f=document.createElement("option"),y=document.createElement("option"),g=document.createElement("option");p.hidden=!0,p.text="Priority",m.text="Priority 1",f.text="Priority 2",y.text="Priority 3",g.text="Priority 4",p.value="",m.value="p1",f.value="p2",y.value="p3",g.value="p4",c.add(p),c.add(m),c.add(f),c.add(y),c.add(g),e.appendChild(t),t.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(a),t.appendChild(d),t.appendChild(c),t.appendChild(i),t.appendChild(l),t.appendChild(s),t.appendChild(u),N("Inbox"),N("Pog"),N("Test")}(),function(){const e=document.getElementById("content"),t=document.createElement("form"),n=document.createElement("h2"),o=document.createElement("label"),r=document.createElement("input"),a=document.createElement("button"),d=document.createElement("button");t.hidden=!0,t.onsubmit=function(e){e.preventDefault(),function(){const e=document.getElementById("project-name"),t={name:e.value,todoArray:[]};h.userArr.push(t),N(e.value),g(),j()}()},r.required=!0,r.type="text",a.type="button",d.type="submit",o.htmlFor="project-name",t.id="project-form",r.id="project-name",n.textContent="Add Project",o.textContent="Project Name",a.textContent="Cancel",d.textContent="Add",a.value="cancel",a.onclick=g,e.appendChild(t),t.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(a),t.appendChild(d)}(),function(){const e=document.querySelector(".default-content");for(let t=0;t<h.defaultArr.length;t++){const n=document.createElement("button"),o=document.createElement("div");if(n.type="button",n.classList.add("sidebar-project"),n.dataset.defaultProjectIndex=t,n.onclick=A,n.addEventListener("click",D),n.appendChild(o),o.classList.add("project-name"),0===t){const e=new Image(25,25);e.classList.add("gray-svg-icon"),e.src=I,o.appendChild(e)}const r=document.createElement("div");r.textContent=h.defaultArr[t].name,o.appendChild(r),e.appendChild(n)}}(),j(),function(){const e=document.querySelector(".projects-area"),t=document.createElement("form"),n=document.createElement("h2"),o=document.createElement("label"),r=document.createElement("input"),a=document.createElement("button"),d=document.createElement("button");r.type="text",a.type="button",d.type="submit",o.htmlFor="edit-project-name",t.id="edit-project-form",r.id="edit-project-name",d.id="save-project-name",t.hidden=!0,r.required=!0,n.textContent="Edit Project",o.textContent="Project Name",a.textContent="Cancel",d.textContent="Save",a.value="cancel",a.onclick=b,e.appendChild(t),t.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(a),t.appendChild(d)}(),function(){const e=document.querySelector(".task-area"),t=document.createElement("form"),n=document.createElement("h2"),o=document.createElement("input"),r=document.createElement("input"),a=document.createElement("label"),d=document.createElement("input"),c=document.createElement("select"),i=document.createElement("button"),l=document.createElement("button");t.hidden=!0,o.required=!0,c.required=!0,o.type="text",r.type="text",d.type="date",i.type="button",l.type="submit",o.placeholder="Task name",r.placeholder="Description",a.htmlFor="edit-date",t.id="edit-task-form",o.id="edit-name",r.id="edit-description",d.id="edit-date",c.id="edit-priority",n.textContent="Edit Task",a.textContent="Due Date",i.textContent="Cancel",l.textContent="Save",i.value="cancel",i.onclick=q;const s=document.createElement("option"),u=document.createElement("option"),p=document.createElement("option"),m=document.createElement("option"),f=document.createElement("option");s.hidden=!0,s.text="Priority",u.text="Priority 1",p.text="Priority 2",m.text="Priority 3",f.text="Priority 4",s.value="",u.value="p1",p.value="p2",m.value="p3",f.value="p4",c.add(s),c.add(u),c.add(p),c.add(m),c.add(f),e.appendChild(t),t.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(a),t.appendChild(d),t.appendChild(c),t.appendChild(i),t.appendChild(l)}()})()})();