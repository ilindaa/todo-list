(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(81),r=n.n(o),a=n(645),c=n.n(a)()(r());c.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Segoe UI', Roboto;\n    overflow-wrap: anywhere;\n}\n\n:root {\n    --p1-color: #d1453b;\n    --p2-color: #eb8909;\n    --p3-color: #246fe0;\n    --p4-color: #eee;\n    --border-corners: 0.3rem;\n    --gray-color: #eee;\n    --lighter-gray-color: #f5f5f5;\n    --white-color: #fff;\n    --navbar-color: #517cba;\n    --light-navbar-color: #85a5d1;\n    --dark-navbar-color: #24549a;\n    --dark-gray-color: #444;\n    --svg-gray-color: #676767;\n}\n\n.navbar {\n    background-color: var(--navbar-color);\n    display: grid;\n    grid-column: 1 / 3;\n    padding: 0rem 1.4rem;\n}\n\n.nav-content {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.logo, \n#content > button {\n    color: var(--white-color);\n    font-weight: bold;\n}\n\n/* Icon and Text Flex Box */\n.logo,\n#content > button,\n.project-name {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.logo,\n.project-name {\n    gap: 0.4rem;\n}\n\n.logo {\n    font-size: 1.3rem;\n}\n\n#content {\n    display: flex;\n    justify-content: flex-end;\n    gap: 0.8rem;\n}\n\n#content > button {\n    background-color: var(--light-navbar-color);\n    padding: 0.2rem 0.5rem;\n}\n\nbody,\n.container {\n    height: 100%;\n    width: 100%;\n}\n\n.container {\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 0.08fr 1fr;\n}\n\n.left-container,\n.sidebar-project {\n    background-color: #fafafa;\n    width: 19rem;\n}\n\n.right-container {\n    background-color: var(--white-color);\n}\n\nbutton {\n    font-size: 1rem;\n    cursor: pointer;\n    outline: none;\n    border: none;\n    padding: 0.2rem;\n}\n\n/* Rounded corners */\nbutton,\n.sidebar-project,\n.sidebar-task,\ninput,\nselect,\nform {\n    border-radius: var(--border-corners);\n}\n\n.sidebar-project,\n.sidebar-task {\n    height: 2.25rem;\n}\n\n/* Project (sidebar) and individual task buttons */\n.flex-buttons,\n.sidebar-task-right {\n    display: flex;\n}\n\n/* Edit and Trash SVGs' Buttons */\n.flex-buttons > button,\n.sidebar-task-right > button {\n    height: 1.8rem;\n    width: 1.8rem;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.flex-buttons > button,\n.sidebar-task-right > button {\n    background-color: transparent;\n}\n\n.flex-buttons > button:hover {\n    background-color: var(--lighter-gray-color);\n}\n\n.sidebar-task-right > button:hover {\n    background-color: var(--gray-color);\n}\n\n/* Projects */\n.all-projects {\n    padding: 1.8rem 1rem 1rem 1rem;\n}\n\n.projects-title {\n    padding: 0rem 0.5rem;\n}\n\n.sidebar-project {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: none;\n    padding: 0.5rem;\n    cursor: pointer;\n    gap: 1rem;\n}\n\n.sidebar-project:hover,\n.active {\n    background-color: var(--gray-color);\n}\n\n.all-projects,\n.task-area,\n.task-content {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n/* Tasks */\n.task-area {\n    padding: 2rem 8rem;\n}\n\n.sidebar-task {\n    background-color: var(--white-color);\n    display: flex;\n    justify-content: space-between;\n    align-items: center; \n    border: 1px solid var(--gray-color);\n    padding: 0.5rem;\n}\n\n.sidebar-task-left {\n    display: flex;\n    gap: 1rem;\n}\n\n/* Priority */\n.priority-one {\n    border-left: 1rem solid var(--p1-color);\n}\n\n.priority-two {\n    border-left: 1rem solid var(--p2-color);\n}\n\n.priority-three {\n    border-left: 1rem solid var(--p3-color);\n}\n\n.priority-four {\n    border-left: 1rem solid var(--p4-color);\n}\n\n/* Form CSS */\n.form-align {\n    top: 50%;\n    left: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 2;\n}\n\n.form-align,\nform {\n    position: fixed;\n}\n\nform {\n    background-color: var(--white-color);\n    border: 1.5px solid var(--gray-color);\n    width: 28rem;\n    padding: 1rem;\n    z-index: 3;\n}\n\n.form-content-div {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.form-content-div > h2 {\n    color: var(--dark-navbar-color);\n    padding-bottom: 0.5rem;\n}\n\n/* Div for form buttons (add-save and cancel) */\n.form-buttons-div {\n    display: flex;\n    justify-content: flex-end;\n    gap: 0.5rem;\n}\n\n.add-save-button,\n.cancel-button {\n    font-weight: bold;\n    padding: 0.4rem 1.1rem;\n}\n\n.add-save-button:hover,\n.cancel-button:hover, \n#content > button:hover {\n    filter: brightness(0.9);\n}\n\n.add-save-button {\n    background-color: var(--navbar-color);\n    color: var(--white-color);\n}\n\n.cancel-button {\n    background-color: var(--gray-color);\n    color: var(--dark-gray-color);\n}\n\nlabel {\n    font-weight: bold;\n}\n\ninput,\nselect, \ntextarea {\n    font-size: 1rem;\n    border: 1px solid var(--gray-color);\n    width: 100%;\n    max-width: 100%;\n    outline: none;\n    padding: 0.3rem;\n    margin-top: -0.5rem; /* Keeps the fields together with the labels without adding more divs */\n}\n\ntextarea {\n    min-height: 5rem;\n}\n\ninput:focus,\nselect:focus {\n    border: 1px solid black;\n}\n\n/* SVG Icons */\n.logo-svg {\n    height: 1.5rem;\n    width: 1.5rem;\n}\n\n/* Open and close the form and modal overlay */\n.open-form,\n.open-modal-overlay {\n    display: block;\n}\n\n.close-form,\n.close-modal-overlay {\n    display: none;\n}\n\n.modal-overlay {\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4);\n}",""]);const d=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var d=0;d<this.length;d++){var i=this[d][0];null!=i&&(c[i]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&c[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],d=0;d<e.length;d++){var i=e[d],l=o.base?i[0]+o.base:i[0],s=a[l]||0,u="".concat(l," ").concat(s);a[l]=s+1;var m=n(u),p={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=r(p,o);o.byIndex=d,t.splice(d,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var d=n(a[c]);t[d].references--}for(var i=o(e,r),l=0;l<a.length;l++){var s=n(a[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=i}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),c=n.n(a),d=n(565),i=n.n(d),l=n(216),s=n.n(l),u=n(589),m=n.n(u),p=n(426),f={};f.styleTagTransform=m(),f.setAttributes=i(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const v=(e,t,n,o,r)=>({title:e,description:t,dueDate:n,priority:o,project:r}),y={defaultArr:[{name:"Inbox",todoArray:[{title:"Test1",description:"D1",dueDate:"2023-08-06",priority:"p1",project:"Inbox"},{title:"Test2",description:"D2",dueDate:"",priority:"p2",project:"Inbox"},{title:"Test5",description:"D3",dueDate:"2023-08-18",priority:"p3",project:"Inbox"}]}],userArr:[{name:"Pog",todoArray:[{title:"Test3",description:"D4",dueDate:"2023-08-17",priority:"p4",project:"Pog"}]},{name:"Test",todoArray:[{title:"Test4",description:"D5",dueDate:"2023-08-17",priority:"p4",project:"Test"}]}]},b=n.p+"a7b5c299a1c8b7563835.svg";function g(){document.getElementById("project-form").classList.replace("open-form","close-form"),document.getElementById("project-form").reset(),N()}function h(){document.getElementById("project-form").classList.replace("close-form","open-form"),D()}function E(){document.getElementById("edit-project-form").classList.replace("open-form","close-form"),N()}function x(e){e.stopPropagation();const t=document.getElementById("edit-project-form"),n=document.getElementById("edit-project-name"),o=this.parentElement.parentElement.dataset.projectIndex,r=y.userArr[o];n.value=r.name,t.onsubmit=function(e){e.preventDefault(),function(e,t){const n=document.getElementById("edit-project-name");e.name=n.value;const o=document.getElementById("project"),r=document.getElementById("edit-project");E(),k(),S(),$(e,o,parseInt(t)),$(e,r,parseInt(t))}(r,o)},t.classList.replace("close-form","open-form"),D()}const j=n.p+"f4f2f93b2eb065b62ef8.svg",I=n.p+"1c3cc2377c5bde52ed6d.svg",C=n.p+"31fde04228baec633234.svg";function k(){const e=document.querySelector(".projects-content");e.innerHTML="";for(let t=0;t<y.userArr.length;t++){const n=document.createElement("button"),o=document.createElement("div");n.type="button",n.classList.add("sidebar-project"),n.dataset.projectIndex=t,n.onclick=A,n.addEventListener("click",T),o.textContent=y.userArr[t].name,n.appendChild(o);const r=document.createElement("div"),a=document.createElement("button"),c=document.createElement("button");r.classList.add("flex-buttons"),a.type="button",c.type="button";const d=new Image(25,25),i=new Image(25,25);d.src=j,i.src=I,a.appendChild(d),c.appendChild(i),a.onclick=x,c.onclick=L,n.appendChild(r),r.append(a,c),e.appendChild(n)}}function L(e){e.stopPropagation();const t=parseInt(this.parentElement.parentElement.dataset.projectIndex);if(confirm(`Are you sure you want to remove "${y.userArr[t].name}" from the existing projects?\nNote: This action cannot be undone.`)){S(),y.userArr.splice(t,1);const e=document.getElementById("project"),n=document.getElementById("edit-project");z(e,t),z(n,t),k(),E()}}function A(){let e,t;void 0!==this?(e=parseInt(this.dataset.defaultProjectIndex),t=parseInt(this.dataset.projectIndex)):e=0;const n=document.querySelector(".task-title"),o=document.createElement("h2");if(n.innerHTML="",o.classList.add("task-header"),isNaN(e)||(o.textContent=y.defaultArr[e].name,o.dataset.defaultProjectIndex=e),!isNaN(t)){if(null==y.userArr[t])return;o.textContent=y.userArr[t].name,o.dataset.projectIndex=t}n.appendChild(o),B()}function w(){const e=document.querySelector(".task-header"),t=parseInt(e.dataset.defaultProjectIndex),n=parseInt(e.dataset.projectIndex);let o,r;return isNaN(t)||(o=t,r=y.defaultArr),isNaN(n)||(o=n,r=y.userArr),{currentProjectIndex:o,array:r}}function B(){const e=document.querySelector(".task-content");e.innerHTML="";let{currentProjectIndex:t,array:n}=w();for(let o=0;o<n[t].todoArray.length;o++){const r=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div"),d=document.createElement("div"),i=document.createElement("div"),l=n[t].todoArray[o];r.classList.add("sidebar-task"),a.classList.add("sidebar-task-left"),c.classList.add("sidebar-task-right"),"p1"===l.priority?r.classList.add("priority-one"):"p2"===l.priority?r.classList.add("priority-two"):"p3"===l.priority?r.classList.add("priority-three"):"p4"===l.priority&&r.classList.add("priority-four"),d.textContent=l.title,""===l.dueDate?i.textContent="No Date":i.textContent=l.dueDate,r.dataset.taskIndex=o;const s=document.createElement("button"),u=document.createElement("button");s.type="button",u.type="button";const m=new Image(25,25),p=new Image(25,25);m.src=j,p.src=I,s.appendChild(m),u.appendChild(p),s.onclick=O,u.onclick=P,e.appendChild(r),r.append(a,c),a.append(d,i),c.append(s,u)}}function P(){let{currentProjectIndex:e,array:t}=w();const n=parseInt(this.parentElement.parentElement.dataset.taskIndex);confirm(`Are you sure you want to remove "${t[e].todoArray[n].title}" from ${t[e].name}?\nNote: This action cannot be undone.`)&&(t[e].todoArray.splice(n,1),B(),H())}function T(){let e=document.getElementsByClassName("active");e.length>0&&(e[0].className=e[0].className.replace("active","")),void 0!==this?(this.classList.add("active"),E()):document.querySelector('[data-default-project-index="0"]').classList.add("active")}function S(){document.querySelector('[data-default-project-index="0"]').classList.add("active"),A()}function D(){document.querySelector(".modal-overlay").classList.replace("close-modal-overlay","open-modal-overlay")}function N(){document.querySelector(".modal-overlay").classList.replace("open-modal-overlay","close-modal-overlay")}function q(){document.getElementById("task-form").classList.replace("open-form","close-form"),document.getElementById("task-form").reset(),N()}function F(){document.getElementById("task-form").classList.replace("close-form","open-form"),D()}function M(e,t){const n=document.createElement("option");n.text=t,n.value=t,n.id=t,e.add(n)}function z(e,t){e.remove(t+1)}function $(e,t,n){t.options[n+1].value=e.name,t.options[n+1].id=e.name,t.options[n+1].textContent=e.name}function H(){document.getElementById("edit-task-form").classList.replace("open-form","close-form"),N()}function O(){const e=document.getElementById("edit-task-form"),t=document.getElementById("edit-name"),n=document.getElementById("edit-description"),o=document.getElementById("edit-date"),r=document.getElementById("edit-priority"),a=document.getElementById("edit-project");let{currentProjectIndex:c,array:d}=w();const i=this.parentElement.parentElement.dataset.taskIndex,l=d[c].todoArray[i];t.value=l.title,n.value=l.description,o.value=l.dueDate,r.value=l.priority,a.value=l.project,e.onsubmit=function(e){e.preventDefault(),function(e,t,n){const o=document.getElementById("edit-name"),r=document.getElementById("edit-description"),a=document.getElementById("edit-date"),c=document.getElementById("edit-priority"),d=document.getElementById("edit-project"),i=v(o.value,r.value,a.value,c.value,d.value);if(d.value===y.defaultArr[0].name)y.defaultArr[0].todoArray.push(i);else for(let e=0;e<y.userArr.length;e++)d.value===y.userArr[e].name&&y.userArr[e].todoArray.push(i);t[e].todoArray.splice(n,1),H(),B()}(c,d,i)},e.classList.replace("close-form","open-form"),D()}!function(e){const t=document.createElement("button");t.type="button",t.value="plus";const n=new Image(16,16),o=document.createElement("div");o.textContent="Add Task",n.src=b,t.appendChild(n),t.appendChild(o),t.onclick=F,e.appendChild(t)}(document.getElementById("content")),function(e){const t=document.createElement("button");t.type="button",t.value="plus";const n=new Image(16,16),o=document.createElement("div");o.textContent="Add Project",n.src=b,t.append(n,o),t.onclick=h,e.appendChild(t)}(document.getElementById("content")),function(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("form"),o=document.createElement("div"),r=document.createElement("h2"),a=document.createElement("label"),c=document.createElement("input"),d=document.createElement("label"),i=document.createElement("textArea"),l=document.createElement("label"),s=document.createElement("input"),u=document.createElement("label"),m=document.createElement("select"),p=document.createElement("label"),f=document.createElement("select"),b=document.createElement("div"),g=document.createElement("button"),h=document.createElement("button");n.onsubmit=function(e){e.preventDefault(),function(){const e=document.getElementById("name"),t=document.getElementById("description"),n=document.getElementById("date"),o=document.getElementById("priority"),r=document.getElementById("project"),a=v(e.value,t.value,n.value,o.value,r.value);if(r.value===y.defaultArr[0].name)y.defaultArr[0].todoArray.push(a);else for(let e=0;e<y.userArr.length;e++)r.value===y.userArr[e].name&&y.userArr[e].todoArray.push(a);q(),B()}()},c.required=!0,m.required=!0,c.type="text",s.type="date",g.type="button",h.type="submit",s.valueAsDate=new Date,a.htmlFor="name",d.htmlFor="description",l.htmlFor="date",u.htmlFor="priority",p.htmlFor="project",n.id="task-form",c.id="name",i.id="description",s.id="date",m.id="priority",f.id="project",r.textContent="Add Task",a.textContent="Name",d.textContent="Description",l.textContent="Due Date",u.textContent="Priority",p.textContent="Project",g.textContent="Cancel",h.textContent="Add",g.value="cancel",n.classList.add("close-form"),t.classList.add("form-align"),o.classList.add("form-content-div"),b.classList.add("form-buttons-div"),g.classList.add("cancel-button"),h.classList.add("add-save-button"),g.onclick=q;const E=document.createElement("option"),x=document.createElement("option"),j=document.createElement("option"),I=document.createElement("option");E.text="🔴 Priority 1",x.text="🟠 Priority 2",j.text="🔵 Priority 3",I.text="⚪ Priority 4",E.value="p1",x.value="p2",j.value="p3",I.value="p4",m.add(E),m.add(x),m.add(j),m.add(I),e.appendChild(t),t.appendChild(n),n.append(o),o.append(r,a,c,d,i,l,s,u,m,p,f,b),b.append(g,h),document.getElementById("priority").value="p4",M(f,"Inbox"),M(f,"Pog"),M(f,"Test")}(),function(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("form"),o=document.createElement("div"),r=document.createElement("h2"),a=document.createElement("label"),c=document.createElement("input"),d=document.createElement("div"),i=document.createElement("button"),l=document.createElement("button");n.onsubmit=function(e){e.preventDefault(),function(){const e=document.getElementById("project-name"),t={name:e.value,todoArray:[]};y.userArr.push(t);const n=document.getElementById("project"),o=document.getElementById("edit-project");M(n,e.value),M(o,e.value),g(),k()}()},c.required=!0,c.type="text",i.type="button",l.type="submit",a.htmlFor="project-name",n.id="project-form",c.id="project-name",r.textContent="Add Project",a.textContent="Project Name",i.textContent="Cancel",l.textContent="Add",i.value="cancel",n.classList.add("close-form"),t.classList.add("form-align"),o.classList.add("form-content-div"),d.classList.add("form-buttons-div"),i.classList.add("cancel-button"),l.classList.add("add-save-button"),i.onclick=g,e.appendChild(t),t.appendChild(n),n.append(o),o.append(r,a,c,d),d.append(i,l)}(),function(){const e=document.querySelector(".default-content");for(let t=0;t<y.defaultArr.length;t++){const n=document.createElement("button"),o=document.createElement("div");if(n.type="button",n.classList.add("sidebar-project"),n.dataset.defaultProjectIndex=t,n.onclick=A,n.addEventListener("click",T),n.appendChild(o),o.classList.add("project-name"),0===t){const e=new Image(25,25);e.src=C,o.appendChild(e)}const r=document.createElement("div");r.textContent=y.defaultArr[t].name,o.appendChild(r),e.appendChild(n)}}(),k(),function(){const e=document.querySelector(".projects-area"),t=document.createElement("div"),n=document.createElement("form"),o=document.createElement("div"),r=document.createElement("h2"),a=document.createElement("label"),c=document.createElement("input"),d=document.createElement("div"),i=document.createElement("button"),l=document.createElement("button");c.type="text",i.type="button",l.type="submit",a.htmlFor="edit-project-name",n.id="edit-project-form",c.id="edit-project-name",l.id="save-project-name",c.required=!0,r.textContent="Edit Project",a.textContent="Project Name",i.textContent="Cancel",l.textContent="Save",i.value="cancel",n.classList.add("close-form"),t.classList.add("form-align"),o.classList.add("form-content-div"),d.classList.add("form-buttons-div"),i.classList.add("cancel-button"),l.classList.add("add-save-button"),i.onclick=E,e.appendChild(t),t.appendChild(n),n.append(o),o.append(r,a,c,d),d.append(i,l)}(),function(){const e=document.querySelector(".task-area"),t=document.createElement("div"),n=document.createElement("form"),o=document.createElement("div"),r=document.createElement("h2"),a=document.createElement("input"),c=document.createElement("label"),d=document.createElement("label"),i=document.createElement("textArea"),l=document.createElement("label"),s=document.createElement("input"),u=document.createElement("select"),m=document.createElement("label"),p=document.createElement("label"),f=document.createElement("select"),v=document.createElement("div"),y=document.createElement("button"),b=document.createElement("button");a.required=!0,u.required=!0,a.type="text",s.type="date",y.type="button",b.type="submit",c.htmlFor="edit-name",d.htmlFor="edit-description",l.htmlFor="edit-date",m.htmlFor="edit-priority",p.htmlFor="edit-project",n.id="edit-task-form",a.id="edit-name",i.id="edit-description",s.id="edit-date",u.id="edit-priority",f.id="edit-project",r.textContent="Edit Task",c.textContent="Name",d.textContent="Description",l.textContent="Due Date",m.textContent="Priority",p.textContent="Project",y.textContent="Cancel",b.textContent="Save",y.value="cancel",n.classList.add("close-form"),t.classList.add("form-align"),o.classList.add("form-content-div"),v.classList.add("form-buttons-div"),y.classList.add("cancel-button"),b.classList.add("add-save-button"),y.onclick=H;const g=document.createElement("option"),h=document.createElement("option"),E=document.createElement("option"),x=document.createElement("option");g.text="🔴 Priority 1",h.text="🟠 Priority 2",E.text="🔵 Priority 3",x.text="⚪ Priority 4",g.value="p1",h.value="p2",E.value="p3",x.value="p4",u.add(g),u.add(h),u.add(E),u.add(x),e.appendChild(t),t.appendChild(n),n.append(o),o.append(r,c,a,d,i,l,s,m,u,p,f,v),v.append(y,b),M(f,"Inbox"),M(f,"Pog"),M(f,"Test")}(),document.querySelector(".modal-overlay").addEventListener("click",(()=>{document.querySelector(".open-form").classList.replace("open-form","close-form"),N()})),S()})()})();