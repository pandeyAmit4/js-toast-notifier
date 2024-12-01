!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).ToastNotifier={})}(this,(function(t){"use strict";function e(t="top-right"){const e="droplet-toast-container";(()=>{const t=window.innerWidth<=768,e=/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);return t||e})()&&(t=t.includes("top")?"top-center":"bottom-center");let o=document.querySelector(`.${e}[data-position="${t}"]`);return o||(o=document.createElement("div"),o.className=e,o.setAttribute("data-position",t),document.body.appendChild(o)),o}const o="top-right",n="success",i="error",r="info",s="warning",l={[n]:'<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',[i]:'<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',[r]:'<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',[s]:'<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>'},a={light:{backgroundColor:"#ffffff",textColor:"#333333"},dark:{backgroundColor:"#1a1a1a",textColor:"#ffffff"}},c={success:{backgroundColor:"#0d6d4d",textColor:"#ffffff",iconColor:"#ffffff"},error:{backgroundColor:"#c41e3a",textColor:"#ffffff",iconColor:"#ffffff"},info:{backgroundColor:"#0055b3",textColor:"#ffffff",iconColor:"#ffffff"},warning:{backgroundColor:"#944e00",textColor:"#ffffff",iconColor:"#ffffff"}};function d(t,e){const o=document.createElement("div"),n=function(t){if(t.type&&c[t.type])return{...c[t.type],...t.theme};const e=a[t.theme]||a.light;return{...e,...t.theme}}(e),i=e.type||"default";o.className=`toast ${e.customClass||""}`,o.setAttribute("role","alert"),o.setAttribute("aria-live","polite"),o.setAttribute("aria-atomic","true"),"default"!==i&&o.setAttribute("aria-label",`${i} notification: ${t}`),Object.assign(o.style,{backgroundColor:n.backgroundColor,color:n.textColor});const r=function(t,e,o){const n=document.createElement("div");if(n.className="toast-content",n.setAttribute("role","presentation"),e.type&&l[e.type]){const t=function(t,e){const o=document.createElement("div");return o.className="toast-icon",o.setAttribute("role","img"),o.setAttribute("aria-label",`${t.type} icon`),o.innerHTML=t.icon||l[t.type],o.style.color=e.iconColor||e.textColor,o}(e,o);n.appendChild(t)}const i=document.createElement("span");return i.textContent=t,n.appendChild(i),n}(t,e,n);if(o.appendChild(r),!1!==e.showCloseButton){const t=function(t){const e=document.createElement("button");return e.className="toast-close",e.setAttribute("aria-label","Close notification"),e.innerHTML='<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',e.style.color=t.textColor,e}(n);o.appendChild(t)}if(e.anchor){o.classList.add("toast-anchored");const t=function(t){const e=document.createElement("div");return e.className="toast-droplet",e.setAttribute("role","presentation"),e.setAttribute("aria-hidden","true"),e.style.backgroundColor=t.backgroundColor,e}(n);o.appendChild(t)}if(!1!==e.showProgress&&e.timeout){const{progressBar:t,updateProgress:n}=function(t){const e=document.createElement("div");e.className="toast-progress",t.progressHeight&&e.style.setProperty("--progress-height",t.progressHeight);t.progressColor&&e.style.setProperty("--progress-color",t.progressColor);t.progressBackground&&e.style.setProperty("--progress-background",t.progressBackground);const o=document.createElement("div");o.className="toast-progress-bar";let n=null,i=null,r=0,s=null;const l=(e=!1)=>{if(e&&null!==n){const e=Date.now()-n;r=Math.max(0,Math.min(1,e/t.timeout)),i=e,n=null,s&&(cancelAnimationFrame(s),s=null),o.style.transition="none",o.style.transform=`scaleX(${r})`}else if(!e){if(null!==i){const e=t.timeout-i;n=Date.now()-i,o.style.transition=`transform ${e}ms linear`,requestAnimationFrame((()=>{o.style.transform="scaleX(1)"}))}else n=Date.now(),o.style.transition=`transform ${t.timeout}ms linear`,requestAnimationFrame((()=>{o.style.transform="scaleX(1)"}));const e=()=>{if(null===n)return;const o=Date.now()-n;r=Math.max(0,Math.min(1,o/t.timeout)),o<t.timeout&&(s=requestAnimationFrame(e))};e()}};return e.appendChild(o),requestAnimationFrame((()=>{l(!1)})),{progressBar:e,updateProgress:l}}(e);o.appendChild(t),o._updateProgress=n}return o.setAttribute("tabindex","0"),o}function u(t,e,o,n){const i=e?.getBoundingClientRect(),r=t.getBoundingClientRect();let s={top:0,left:0};if(e){if(s=function(t,e,o,n,i){const r=i/2,s={top:{top:e.top-o.height-n-r,left:e.left+(e.width-o.width)/2},bottom:{top:e.bottom+n+r,left:e.left+(e.width-o.width)/2},left:{top:e.top+(e.height-o.height)/2,left:e.left-o.width-n-r},right:{top:e.top+(e.height-o.height)/2,left:e.right+n+r}};return s[t]||s.top}(o,i,r,12,12),s=function(t,e,o){const n=20,i={...t};t.left<n?t.left=n:t.left+e.width>o.width-n&&(t.left=o.width-e.width-n);t.top<n?t.top=n:t.top+e.height>o.height-n&&(t.top=o.height-e.height-n);if(t.left!==i.left){const o=Math.min(Math.max(i.left-t.left+e.width/2,20),e.width-20);t.dropletOffset=o}return t}(s,r,n),t.setAttribute("data-point",function(t){return{top:"bottom",bottom:"top",left:"right",right:"left"}[t]||"bottom"}(o)),"bottom"===o){const e=Math.abs(i.top-(s.top+r.height));t.style.setProperty("--droplet-connector-height",`${e}px`)}}else s=function(t,e,o,n){const i={"top-left":{top:n,left:n},"top-right":{top:n,right:n},"bottom-left":{bottom:n,left:n},"bottom-right":{bottom:n,right:n}};return i[t]||i["top-right"]}(o,0,0,12);return s}t.ToastNotifier=class{constructor(t){"undefined"!=typeof window&&(this.options=Object.assign({position:o,timeout:5e3,theme:"light",showCloseButton:!0,pauseOnHover:!0},t||{}),this.container=e(this.options.position),this.handleKeyDown=this.handleKeyDown.bind(this),document.addEventListener("keydown",this.handleKeyDown))}show(t,o){if("undefined"==typeof window)return null;const n=Object.assign({},this.options,o||{}),i=d(t,n),r={width:window.innerWidth||document.documentElement.clientWidth,height:window.innerHeight||document.documentElement.clientHeight};if(n.anchor){const t=u(i,n.anchor,n.position,r);Object.assign(i.style,{position:"absolute",top:t.top+"px",left:t.left+"px",zIndex:"1001"}),t.dropletOffset&&i.style.setProperty("--droplet-left",t.dropletOffset+"px"),document.body.appendChild(i)}else this.container=e(n.position),this.container.appendChild(i);i.addEventListener("keydown",function(t){"Enter"!==t.key&&" "!==t.key||this.hide(i)}.bind(this));const s=i.querySelector(".toast-close");if(s&&s.addEventListener("click",this.hide.bind(this,i)),setTimeout((function(){i.classList.add("toast-show")}),0),n.timeout){var l,a,c=n.timeout,f=function(){l=Date.now(),a=setTimeout(this.hide.bind(this,i),c),i._updateProgress&&i._updateProgress(!1)}.bind(this);n.pauseOnHover&&(i.addEventListener("mouseenter",(function(){clearTimeout(a),c-=Date.now()-l,i._updateProgress&&i._updateProgress(!0)})),i.addEventListener("mouseleave",f)),f()}return i}success(t,e){return this.show(t,Object.assign({},e,{type:n}))}error(t,e){return this.show(t,Object.assign({},e,{type:i}))}info(t,e){return this.show(t,Object.assign({},e,{type:r}))}warning(t,e){return this.show(t,Object.assign({},e,{type:s}))}hide(t){t.classList.remove("toast-show");var e=function(){t.parentNode&&t.parentNode.removeChild(t),t.removeEventListener("transitionend",e)};t.addEventListener("transitionend",e)}handleKeyDown(t){if("Escape"===t.key)for(var e=this.container.querySelectorAll(".toast"),o=0;o<e.length;o++)this.hide(e[o])}destroy(){document.removeEventListener("keydown",this.handleKeyDown),this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container)}}}));