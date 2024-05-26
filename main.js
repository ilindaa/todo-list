(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(81),r=n.n(o),a=n(645),c=n.n(a)()(r());c.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Segoe UI', Roboto;\n    overflow-wrap: anywhere;\n}\n\n:root {\n    --p1-color: #d1453b;\n    --p2-color: #eb8909;\n    --p3-color: #246fe0;\n    --p4-color: #eee;\n    --border-corners: 0.3rem;\n    --gray-color: #eee;\n    --lighter-gray-color: #f5f5f5;\n    --white-color: #fff;\n    --navbar-color: #517cba;\n    --light-navbar-color: #85a5d1;\n    --dark-navbar-color: #24549a;\n    --dark-gray-color: #444;\n    --svg-gray-color: #676767;\n}\n\n.navbar {\n    background-color: var(--navbar-color);\n    display: grid;\n    grid-column: 1 / 3;\n    padding: 0rem 1.4rem;\n}\n\n.nav-content {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.logo, \n#content > button {\n    color: var(--white-color);\n    font-weight: bold;\n}\n\n/* Icon and Text Flex Box */\n.logo,\n#content > button,\n.project-name {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.logo,\n.project-name {\n    gap: 0.4rem;\n}\n\n.logo {\n    font-size: 1.3rem;\n}\n\n#content {\n    display: flex;\n    justify-content: flex-end;\n    gap: 0.8rem;\n}\n\n#content > button {\n    background-color: var(--light-navbar-color);\n    padding: 0.2rem 0.5rem;\n}\n\nbody,\n.container {\n    height: 100%;\n    width: 100%;\n}\n\n.container {\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 0.08fr 1fr;\n}\n\n.left-container,\n.sidebar-project {\n    background-color: #fafafa;\n    width: 19rem;\n}\n\n.right-container {\n    background-color: var(--white-color);\n}\n\nbutton {\n    font-size: 1rem;\n    cursor: pointer;\n    outline: none;\n    border: none;\n    padding: 0.2rem;\n}\n\n/* Rounded corners */\nbutton,\n.sidebar-project,\n.sidebar-task,\ninput,\nselect,\nform {\n    border-radius: var(--border-corners);\n}\n\n.sidebar-project,\n.sidebar-task {\n    height: 2.25rem;\n}\n\n/* Project (sidebar) and individual task buttons */\n.flex-buttons,\n.sidebar-task-right {\n    display: flex;\n}\n\n/* Edit and Trash SVGs' Buttons */\n.flex-buttons > button,\n.sidebar-task-right > button {\n    height: 1.8rem;\n    width: 1.8rem;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.flex-buttons > button,\n.sidebar-task-right > button {\n    background-color: transparent;\n}\n\n.flex-buttons > button:hover {\n    background-color: var(--lighter-gray-color);\n}\n\n.sidebar-task-right > button:hover {\n    background-color: var(--gray-color);\n}\n\n/* Projects */\n.all-projects {\n    padding: 1.8rem 1rem 1rem 1rem;\n}\n\n.projects-title {\n    padding: 0rem 0.5rem;\n}\n\n.sidebar-project {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: none;\n    padding: 0.5rem;\n    cursor: pointer;\n    gap: 1rem;\n}\n\n.sidebar-project:hover,\n.active {\n    background-color: var(--gray-color);\n}\n\n.all-projects,\n.task-area,\n.task-content {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n/* Tasks */\n.task-area {\n    padding: 2rem 8rem;\n}\n\n.sidebar-task {\n    background-color: var(--white-color);\n    display: flex;\n    justify-content: space-between;\n    align-items: center; \n    border: 1px solid var(--gray-color);\n    padding: 0.5rem;\n}\n\n.sidebar-task-left {\n    display: flex;\n    gap: 1rem;\n}\n\n/* Priority */\n.priority-one {\n    border-left: 1rem solid var(--p1-color);\n}\n\n.priority-two {\n    border-left: 1rem solid var(--p2-color);\n}\n\n.priority-three {\n    border-left: 1rem solid var(--p3-color);\n}\n\n.priority-four {\n    border-left: 1rem solid var(--p4-color);\n}\n\n/* Form CSS */\n.form-align {\n    top: 50%;\n    left: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 2;\n}\n\n.form-align,\nform {\n    position: fixed;\n}\n\nform {\n    background-color: var(--white-color);\n    border: 1.5px solid var(--gray-color);\n    width: 28rem;\n    padding: 1rem;\n    z-index: 3;\n}\n\n.form-content-div {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.form-content-div > h2 {\n    color: var(--dark-navbar-color);\n    padding-bottom: 0.5rem;\n}\n\n/* Div for form buttons (add-save and cancel) */\n.form-buttons-div {\n    display: flex;\n    justify-content: flex-end;\n    gap: 0.5rem;\n}\n\n.add-save-button,\n.cancel-button {\n    font-weight: bold;\n    padding: 0.4rem 1.1rem;\n}\n\n.add-save-button:hover,\n.cancel-button:hover, \n#content > button:hover {\n    filter: brightness(0.9);\n}\n\n.add-save-button {\n    background-color: var(--navbar-color);\n    color: var(--white-color);\n}\n\n.cancel-button {\n    background-color: var(--gray-color);\n    color: var(--dark-gray-color);\n}\n\nlabel {\n    font-weight: bold;\n}\n\ninput,\nselect, \ntextarea {\n    font-size: 1rem;\n    border: 1px solid var(--gray-color);\n    width: 100%;\n    max-width: 100%;\n    outline: none;\n    padding: 0.3rem;\n    margin-top: -0.5rem; /* Keeps the fields together with the labels without adding more divs */\n}\n\ntextarea {\n    min-height: 5rem;\n}\n\ninput:focus,\nselect:focus {\n    border: 1px solid black;\n}\n\n/* SVG Icons */\n.logo-svg {\n    height: 1.5rem;\n    width: 1.5rem;\n}\n\n/* Open and close the form and modal overlay */\n.open-form,\n.open-modal-overlay {\n    display: block;\n}\n\n.close-form,\n.close-modal-overlay {\n    display: none;\n}\n\n.modal-overlay {\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4);\n}",""]);const d=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var d=0;d<this.length;d++){var i=this[d][0];null!=i&&(c[i]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&c[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],d=0;d<e.length;d++){var i=e[d],l=o.base?i[0]+o.base:i[0],s=a[l]||0,m="".concat(l," ").concat(s);a[l]=s+1;var u=n(m),p={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var f=r(p,o);o.byIndex=d,t.splice(d,0,{identifier:m,updater:f,references:1})}c.push(m)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var d=n(a[c]);t[d].references--}for(var i=o(e,r),l=0;l<a.length;l++){var s=n(a[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=i}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),c=n.n(a),d=n(565),i=n.n(d),l=n(216),s=n.n(l),m=n(589),u=n.n(m),p=n(426),f={};f.styleTagTransform=u(),f.setAttributes=i(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const g=(e,t,n,o,r)=>({title:e,description:t,dueDate:n,priority:o,project:r}),y=n.p+"a7b5c299a1c8b7563835.svg";function v(){!function(){const e=document.querySelector(".default-content"),t=JSON.parse(localStorage.getItem("todoList"));for(let n=0;n<t.defaultArr.length;n++){const o=document.createElement("button"),r=document.createElement("div");if(o.type="button",o.classList.add("sidebar-project"),o.dataset.defaultProjectIndex=n,o.onclick=w,o.addEventListener("click",N),o.appendChild(r),r.classList.add("project-name"),0===n){const e=new Image(25,25);e.src=k,r.appendChild(e)}const a=document.createElement("div");a.textContent=t.defaultArr[n].name,r.appendChild(a),e.appendChild(o)}}(),L()}function b(e){localStorage.setItem("todoList",JSON.stringify(e))}function h(){document.getElementById("project-form").classList.replace("open-form","close-form"),document.getElementById("project-form").reset(),q()}function E(){document.getElementById("project-form").classList.replace("close-form","open-form"),D()}function x(){document.getElementById("edit-project-form").classList.replace("open-form","close-form"),q()}function I(e){e.stopPropagation();const t=document.getElementById("edit-project-form"),n=document.getElementById("edit-project-name"),o=this.parentElement.parentElement.dataset.projectIndex,r=JSON.parse(localStorage.getItem("todoList")),a=r.userArr[o];n.value=a.name,t.onsubmit=function(e){e.preventDefault(),function(e,t){const n=document.getElementById("edit-project-name");e.name=n.value;const o=document.getElementById("project"),r=document.getElementById("edit-project");x(),L(),T(),z(e,o,parseInt(t)),z(e,r,parseInt(t))}(a,o),b(r)},t.classList.replace("close-form","open-form"),D()}const j=n.p+"f4f2f93b2eb065b62ef8.svg",C=n.p+"1c3cc2377c5bde52ed6d.svg",k=n.p+"31fde04228baec633234.svg";function L(){const e=document.querySelector(".projects-content");e.innerHTML="";const t=JSON.parse(localStorage.getItem("todoList"));for(let n=0;n<t.userArr.length;n++){const o=document.createElement("button"),r=document.createElement("div");o.type="button",o.classList.add("sidebar-project"),o.dataset.projectIndex=n,o.onclick=w,o.addEventListener("click",N),r.textContent=t.userArr[n].name,o.appendChild(r);const a=document.createElement("div"),c=document.createElement("button"),d=document.createElement("button");a.classList.add("flex-buttons"),c.type="button",d.type="button";const i=new Image(25,25),l=new Image(25,25);i.src=j,l.src=C,c.appendChild(i),d.appendChild(l),c.onclick=I,d.onclick=A,o.appendChild(a),a.append(c,d),e.appendChild(o)}}function A(e){e.stopPropagation();const t=parseInt(this.parentElement.parentElement.dataset.projectIndex),n=JSON.parse(localStorage.getItem("todoList"));if(confirm(`Are you sure you want to remove "${n.userArr[t].name}" from the existing projects?\nNote: This action cannot be undone.`)){T(),n.userArr.splice(t,1);const e=document.getElementById("project"),o=document.getElementById("edit-project");M(e,t),M(o,t),L(),x()}}function w(){const e=JSON.parse(localStorage.getItem("todoList"));let t,n;void 0!==this?(t=parseInt(this.dataset.defaultProjectIndex),n=parseInt(this.dataset.projectIndex)):t=0;const o=document.querySelector(".task-title"),r=document.createElement("h2");if(o.innerHTML="",r.classList.add("task-header"),isNaN(t)||(r.textContent=e.defaultArr[t].name,r.dataset.defaultProjectIndex=t),!isNaN(n)){if(null==e.userArr[n])return;r.textContent=e.userArr[n].name,r.dataset.projectIndex=n}o.appendChild(r),B()}function S(){const e=document.querySelector(".task-header"),t=parseInt(e.dataset.defaultProjectIndex),n=parseInt(e.dataset.projectIndex),o=JSON.parse(localStorage.getItem("todoList"));let r,a;return isNaN(t)||(r=t,a=o.defaultArr),isNaN(n)||(r=n,a=o.userArr),{currentProjectIndex:r,array:a}}function B(){const e=document.querySelector(".task-content");e.innerHTML="";let{currentProjectIndex:t,array:n}=S();for(let o=0;o<n[t].todoArray.length;o++){const r=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div"),d=document.createElement("div"),i=document.createElement("div"),l=n[t].todoArray[o];r.classList.add("sidebar-task"),a.classList.add("sidebar-task-left"),c.classList.add("sidebar-task-right"),"p1"===l.priority?r.classList.add("priority-one"):"p2"===l.priority?r.classList.add("priority-two"):"p3"===l.priority?r.classList.add("priority-three"):"p4"===l.priority&&r.classList.add("priority-four"),d.textContent=l.title,""===l.dueDate?i.textContent="No Date":i.textContent=l.dueDate,r.dataset.taskIndex=o;const s=document.createElement("button"),m=document.createElement("button");s.type="button",m.type="button";const u=new Image(25,25),p=new Image(25,25);u.src=j,p.src=C,s.appendChild(u),m.appendChild(p),s.onclick=H,m.onclick=P,e.appendChild(r),r.append(a,c),a.append(d,i),c.append(s,m)}}function P(){let{currentProjectIndex:e,array:t}=S();const n=parseInt(this.parentElement.parentElement.dataset.taskIndex);confirm(`Are you sure you want to remove "${t[e].todoArray[n].title}" from ${t[e].name}?\nNote: This action cannot be undone.`)&&(t[e].todoArray.splice(n,1),B(),$())}function N(){let e=document.getElementsByClassName("active");e.length>0&&(e[0].className=e[0].className.replace("active","")),void 0!==this?(this.classList.add("active"),x()):document.querySelector('[data-default-project-index="0"]').classList.add("active")}function T(){document.querySelector('[data-default-project-index="0"]').classList.add("active"),w()}function D(){document.querySelector(".modal-overlay").classList.replace("close-modal-overlay","open-modal-overlay")}function q(){document.querySelector(".modal-overlay").classList.replace("open-modal-overlay","close-modal-overlay")}function F(){document.getElementById("task-form").classList.replace("open-form","close-form"),document.getElementById("task-form").reset(),q()}function O(){document.getElementById("task-form").classList.replace("close-form","open-form"),D()}function J(e,t){const n=document.createElement("option");n.text=t,n.value=t,n.id=t,e.add(n)}function M(e,t){e.remove(t+1)}function z(e,t,n){t.options[n+1].value=e.name,t.options[n+1].id=e.name,t.options[n+1].textContent=e.name}function $(){document.getElementById("edit-task-form").classList.replace("open-form","close-form"),q()}function H(){const e=document.getElementById("edit-task-form"),t=document.getElementById("edit-name"),n=document.getElementById("edit-description"),o=document.getElementById("edit-date"),r=document.getElementById("edit-priority"),a=document.getElementById("edit-project");let{currentProjectIndex:c,array:d}=S();const i=this.parentElement.parentElement.dataset.taskIndex,l=d[c].todoArray[i];t.value=l.title,n.value=l.description,o.value=l.dueDate,r.value=l.priority,a.value=l.project,e.onsubmit=function(e){e.preventDefault(),function(e,t,n){const o=document.getElementById("edit-name"),r=document.getElementById("edit-description"),a=document.getElementById("edit-date"),c=document.getElementById("edit-priority"),d=document.getElementById("edit-project"),i=g(o.value,r.value,a.value,c.value,d.value),l=JSON.parse(localStorage.getItem("todoList"));if(d.value===l.defaultArr[0].name)l.defaultArr[0].todoArray.push(i);else for(let e=0;e<l.userArr.length;e++)d.value===l.userArr[e].name&&l.userArr[e].todoArray.push(i);t[e].todoArray.splice(n,1),b(l),$(),B()}(c,d,i)},e.classList.replace("close-form","open-form"),D()}!function(e){const t=document.createElement("button");t.type="button",t.value="plus";const n=new Image(16,16),o=document.createElement("div");o.textContent="Add Task",n.src=y,t.appendChild(n),t.appendChild(o),t.onclick=O,e.appendChild(t)}(document.getElementById("content")),function(e){const t=document.createElement("button");t.type="button",t.value="plus";const n=new Image(16,16),o=document.createElement("div");o.textContent="Add Project",n.src=y,t.append(n,o),t.onclick=E,e.appendChild(t)}(document.getElementById("content")),function(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("form"),o=document.createElement("div"),r=document.createElement("h2"),a=document.createElement("label"),c=document.createElement("input"),d=document.createElement("label"),i=document.createElement("textArea"),l=document.createElement("label"),s=document.createElement("input"),m=document.createElement("label"),u=document.createElement("select"),p=document.createElement("label"),f=document.createElement("select"),y=document.createElement("div"),v=document.createElement("button"),h=document.createElement("button");n.onsubmit=function(e){e.preventDefault(),function(){const e=document.getElementById("name"),t=document.getElementById("description"),n=document.getElementById("date"),o=document.getElementById("priority"),r=document.getElementById("project"),a=g(e.value,t.value,n.value,o.value,r.value),c=JSON.parse(localStorage.getItem("todoList"));if(r.value===c.defaultArr[0].name)c.defaultArr[0].todoArray.push(a);else for(let e=0;e<c.userArr.length;e++)r.value===c.userArr[e].name&&c.userArr[e].todoArray.push(a);b(c),F(),B()}()},c.required=!0,u.required=!0,c.type="text",s.type="date",v.type="button",h.type="submit",s.valueAsDate=new Date,a.htmlFor="name",d.htmlFor="description",l.htmlFor="date",m.htmlFor="priority",p.htmlFor="project",n.id="task-form",c.id="name",i.id="description",s.id="date",u.id="priority",f.id="project",r.textContent="Add Task",a.textContent="Name",d.textContent="Description",l.textContent="Due Date",m.textContent="Priority",p.textContent="Project",v.textContent="Cancel",h.textContent="Add",v.value="cancel",n.classList.add("close-form"),t.classList.add("form-align"),o.classList.add("form-content-div"),y.classList.add("form-buttons-div"),v.classList.add("cancel-button"),h.classList.add("add-save-button"),v.onclick=F;const E=document.createElement("option"),x=document.createElement("option"),I=document.createElement("option"),j=document.createElement("option");E.text="🔴 Priority 1",x.text="🟠 Priority 2",I.text="🔵 Priority 3",j.text="⚪ Priority 4",E.value="p1",x.value="p2",I.value="p3",j.value="p4",u.add(E),u.add(x),u.add(I),u.add(j),e.appendChild(t),t.appendChild(n),n.append(o),o.append(r,a,c,d,i,l,s,m,u,p,f,y),y.append(v,h),document.getElementById("priority").value="p4",J(f,"Inbox"),J(f,"Pog"),J(f,"Test")}(),function(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("form"),o=document.createElement("div"),r=document.createElement("h2"),a=document.createElement("label"),c=document.createElement("input"),d=document.createElement("div"),i=document.createElement("button"),l=document.createElement("button");n.onsubmit=function(e){e.preventDefault(),function(){const e=document.getElementById("project-name"),t={name:e.value,todoArray:[]},n=JSON.parse(localStorage.getItem("todoList"));n.userArr.push(t),b(n);const o=document.getElementById("project"),r=document.getElementById("edit-project");J(o,e.value),J(r,e.value),h(),L()}()},c.required=!0,c.type="text",i.type="button",l.type="submit",a.htmlFor="project-name",n.id="project-form",c.id="project-name",r.textContent="Add Project",a.textContent="Project Name",i.textContent="Cancel",l.textContent="Add",i.value="cancel",n.classList.add("close-form"),t.classList.add("form-align"),o.classList.add("form-content-div"),d.classList.add("form-buttons-div"),i.classList.add("cancel-button"),l.classList.add("add-save-button"),i.onclick=h,e.appendChild(t),t.appendChild(n),n.append(o),o.append(r,a,c,d),d.append(i,l)}(),localStorage.getItem("todoList")?(v(),console.log("Existing local storage found!")):(localStorage.setItem("todoList",JSON.stringify([])),b({defaultArr:[{name:"Inbox",todoArray:[{title:"Test1",description:"D1",dueDate:"2023-08-06",priority:"p1",project:"Inbox"},{title:"Test2",description:"D2",dueDate:"",priority:"p2",project:"Inbox"},{title:"Test5",description:"D3",dueDate:"2023-08-18",priority:"p3",project:"Inbox"}]}],userArr:[{name:"Pog",todoArray:[{title:"Test3",description:"D4",dueDate:"2023-08-17",priority:"p4",project:"Pog"}]},{name:"Test",todoArray:[{title:"Test4",description:"D5",dueDate:"2023-08-17",priority:"p4",project:"Test"}]}]}),v(),console.log("Creating a new local storage...")),function(){const e=document.querySelector(".projects-area"),t=document.createElement("div"),n=document.createElement("form"),o=document.createElement("div"),r=document.createElement("h2"),a=document.createElement("label"),c=document.createElement("input"),d=document.createElement("div"),i=document.createElement("button"),l=document.createElement("button");c.type="text",i.type="button",l.type="submit",a.htmlFor="edit-project-name",n.id="edit-project-form",c.id="edit-project-name",l.id="save-project-name",c.required=!0,r.textContent="Edit Project",a.textContent="Project Name",i.textContent="Cancel",l.textContent="Save",i.value="cancel",n.classList.add("close-form"),t.classList.add("form-align"),o.classList.add("form-content-div"),d.classList.add("form-buttons-div"),i.classList.add("cancel-button"),l.classList.add("add-save-button"),i.onclick=x,e.appendChild(t),t.appendChild(n),n.append(o),o.append(r,a,c,d),d.append(i,l)}(),function(){const e=document.querySelector(".task-area"),t=document.createElement("div"),n=document.createElement("form"),o=document.createElement("div"),r=document.createElement("h2"),a=document.createElement("input"),c=document.createElement("label"),d=document.createElement("label"),i=document.createElement("textArea"),l=document.createElement("label"),s=document.createElement("input"),m=document.createElement("select"),u=document.createElement("label"),p=document.createElement("label"),f=document.createElement("select"),g=document.createElement("div"),y=document.createElement("button"),v=document.createElement("button");a.required=!0,m.required=!0,a.type="text",s.type="date",y.type="button",v.type="submit",c.htmlFor="edit-name",d.htmlFor="edit-description",l.htmlFor="edit-date",u.htmlFor="edit-priority",p.htmlFor="edit-project",n.id="edit-task-form",a.id="edit-name",i.id="edit-description",s.id="edit-date",m.id="edit-priority",f.id="edit-project",r.textContent="Edit Task",c.textContent="Name",d.textContent="Description",l.textContent="Due Date",u.textContent="Priority",p.textContent="Project",y.textContent="Cancel",v.textContent="Save",y.value="cancel",n.classList.add("close-form"),t.classList.add("form-align"),o.classList.add("form-content-div"),g.classList.add("form-buttons-div"),y.classList.add("cancel-button"),v.classList.add("add-save-button"),y.onclick=$;const b=document.createElement("option"),h=document.createElement("option"),E=document.createElement("option"),x=document.createElement("option");b.text="🔴 Priority 1",h.text="🟠 Priority 2",E.text="🔵 Priority 3",x.text="⚪ Priority 4",b.value="p1",h.value="p2",E.value="p3",x.value="p4",m.add(b),m.add(h),m.add(E),m.add(x),e.appendChild(t),t.appendChild(n),n.append(o),o.append(r,c,a,d,i,l,s,u,m,p,f,g),g.append(y,v),J(f,"Inbox"),J(f,"Pog"),J(f,"Test")}(),document.querySelector(".modal-overlay").addEventListener("click",(()=>{document.querySelector(".open-form").classList.replace("open-form","close-form"),q()})),T()})()})();