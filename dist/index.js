function t(t){void 0===t&&(t="top-right");var e,o,n="droplet-toast-container";e=window.innerWidth<=768,o=/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),(e||o)&&(t=t.includes("top")?"top-center":"bottom-center");var r=document.querySelector("."+n+'[data-position="'+t+'"]');return r||((r=document.createElement("div")).className=n,r.setAttribute("data-position",t),document.body.appendChild(r)),r}var e;require("core-js/modules/es.object.assign.js"),require("core-js/modules/es.string.anchor.js"),require("core-js/modules/es.array.includes.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.string.includes.js");var o="success",n="error",r="info",i="warning",s=((e={})[o]='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',e[n]='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',e[r]='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',e[i]='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',e),a={light:{backgroundColor:"#ffffff",textColor:"#333333"},dark:{backgroundColor:"#1a1a1a",textColor:"#ffffff"}},l={success:{backgroundColor:"#0d6d4d",textColor:"#ffffff",iconColor:"#ffffff"},error:{backgroundColor:"#c41e3a",textColor:"#ffffff",iconColor:"#ffffff"},info:{backgroundColor:"#0055b3",textColor:"#ffffff",iconColor:"#ffffff"},warning:{backgroundColor:"#944e00",textColor:"#ffffff",iconColor:"#ffffff"}};exports.ToastNotifier=/*#__PURE__*/function(){function e(e){"undefined"!=typeof window&&(this.options=Object.assign({position:"top-right",timeout:5e3,theme:"light",showCloseButton:!0,pauseOnHover:!0},e||{}),this.container=t(this.options.position),this.handleKeyDown=this.handleKeyDown.bind(this),document.addEventListener("keydown",this.handleKeyDown))}var d=e.prototype;return d.show=function(e,o){if("undefined"==typeof window)return null;var n=Object.assign({},this.options,o||{}),r=function(t,e){var o=document.createElement("div"),n=function(t){return Object.assign({},t.type&&l[t.type]?l[t.type]:a[t.theme]||a.light,t.theme)}(e),r=e.type||"default";o.className="toast "+(e.customClass||""),o.setAttribute("role","alert"),o.setAttribute("aria-live","polite"),o.setAttribute("aria-atomic","true"),"default"!==r&&o.setAttribute("aria-label",r+" notification: "+t),Object.assign(o.style,{backgroundColor:n.backgroundColor,color:n.textColor});var i=function(t,e,o){var n=document.createElement("div");if(n.className="toast-content",n.setAttribute("role","presentation"),e.type&&s[e.type]){var r=function(t,e){var o=document.createElement("div");return o.className="toast-icon",o.setAttribute("role","img"),o.setAttribute("aria-label",t.type+" icon"),o.innerHTML=t.icon||s[t.type],o.style.color=e.iconColor||e.textColor,o}(e,o);n.appendChild(r)}var i=document.createElement("span");return i.textContent=t,n.appendChild(i),n}(t,e,n);if(o.appendChild(i),!1!==e.showCloseButton){var d=function(t){var e=document.createElement("button");return e.className="toast-close",e.setAttribute("aria-label","Close notification"),e.innerHTML='<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',e.style.color=t.textColor,e}(n);o.appendChild(d)}if(e.anchor){o.classList.add("toast-anchored");var c=function(t){var e=document.createElement("div");return e.className="toast-droplet",e.setAttribute("role","presentation"),e.setAttribute("aria-hidden","true"),e.style.backgroundColor=t.backgroundColor,e}(n);o.appendChild(c)}if(!1!==e.showProgress&&e.timeout){var u=function(t){var e=document.createElement("div");e.className="toast-progress",t.progressHeight&&e.style.setProperty("--progress-height",t.progressHeight),t.progressColor&&e.style.setProperty("--progress-color",t.progressColor),t.progressBackground&&e.style.setProperty("--progress-background",t.progressBackground);var o=document.createElement("div");o.className="toast-progress-bar";var n=null,r=null,i=0,s=null,a=function(e){if(void 0===e&&(e=!1),e&&null!==n){var a=Date.now()-n;i=Math.max(0,Math.min(1,a/t.timeout)),r=a,n=null,s&&(cancelAnimationFrame(s),s=null),o.style.transition="none",o.style.transform="scaleX("+i+")"}else if(!e){if(null!==r){var l=t.timeout-r;n=Date.now()-r,o.style.transition="transform "+l+"ms linear",requestAnimationFrame(function(){o.style.transform="scaleX(1)"})}else n=Date.now(),o.style.transition="transform "+t.timeout+"ms linear",requestAnimationFrame(function(){o.style.transform="scaleX(1)"});var d=function(){if(null!==n){var e=Date.now()-n;i=Math.max(0,Math.min(1,e/t.timeout)),e<t.timeout&&(s=requestAnimationFrame(d))}};d()}};return e.appendChild(o),requestAnimationFrame(function(){a(!1)}),{progressBar:e,updateProgress:a}}(e),f=u.updateProgress;o.appendChild(u.progressBar),o._updateProgress=f}return o.setAttribute("tabindex","0"),o}(e,n),i={width:window.innerWidth||document.documentElement.clientWidth,height:window.innerHeight||document.documentElement.clientHeight};if(n.anchor){var d=function(t,e,o,n){var r=null==e?void 0:e.getBoundingClientRect(),i=t.getBoundingClientRect(),s={top:0,left:0};if(e){if(s=function(t,e,o){var n={top:{top:e.top-o.height-12-6,left:e.left+(e.width-o.width)/2},bottom:{top:e.bottom+12+6,left:e.left+(e.width-o.width)/2},left:{top:e.top+(e.height-o.height)/2,left:e.left-o.width-12-6},right:{top:e.top+(e.height-o.height)/2,left:e.right+12+6}};return n[t]||n.top}(o,r,i),s=function(t,e,o){var n=20,r=Object.assign({},t);if(t.left<n?t.left=n:t.left+e.width>o.width-n&&(t.left=o.width-e.width-n),t.top<n?t.top=n:t.top+e.height>o.height-n&&(t.top=o.height-e.height-n),t.left!==r.left){var i=Math.min(Math.max(r.left-t.left+e.width/2,20),e.width-20);t.dropletOffset=i}return t}(s,i,n),t.setAttribute("data-point",function(t){return{top:"bottom",bottom:"top",left:"right",right:"left"}[t]||"bottom"}(o)),"bottom"===o){var a=Math.abs(r.top-(s.top+i.height));t.style.setProperty("--droplet-connector-height",a+"px")}}else s=function(t,e,o,n){var r={"top-left":{top:n,left:n},"top-right":{top:n,right:n},"bottom-left":{bottom:n,left:n},"bottom-right":{bottom:n,right:n}};return r[t]||r["top-right"]}(o,0,0,12);return s}(r,n.anchor,n.position,i);Object.assign(r.style,{position:"absolute",top:d.top+"px",left:d.left+"px",zIndex:"1001"}),d.dropletOffset&&r.style.setProperty("--droplet-left",d.dropletOffset+"px"),document.body.appendChild(r)}else this.container=t(n.position),this.container.appendChild(r);r.addEventListener("keydown",function(t){"Enter"!==t.key&&" "!==t.key||this.hide(r)}.bind(this));var c=r.querySelector(".toast-close");if(c&&c.addEventListener("click",this.hide.bind(this,r)),setTimeout(function(){r.classList.add("toast-show")},0),n.timeout){var u,f,h=n.timeout,p=function(){u=Date.now(),f=setTimeout(this.hide.bind(this,r),h),r._updateProgress&&r._updateProgress(!1)}.bind(this);n.pauseOnHover&&(r.addEventListener("mouseenter",function(){clearTimeout(f),h-=Date.now()-u,r._updateProgress&&r._updateProgress(!0)}),r.addEventListener("mouseleave",p)),p()}return r},d.success=function(t,e){return this.show(t,Object.assign({},e,{type:o}))},d.error=function(t,e){return this.show(t,Object.assign({},e,{type:n}))},d.info=function(t,e){return this.show(t,Object.assign({},e,{type:r}))},d.warning=function(t,e){return this.show(t,Object.assign({},e,{type:i}))},d.hide=function(t){t.classList.remove("toast-show");var e=function(){t.parentNode&&t.parentNode.removeChild(t),t.removeEventListener("transitionend",e)};t.addEventListener("transitionend",e)},d.handleKeyDown=function(t){if("Escape"===t.key)for(var e=this.container.querySelectorAll(".toast"),o=0;o<e.length;o++)this.hide(e[o])},d.destroy=function(){document.removeEventListener("keydown",this.handleKeyDown),this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container)},e}();
//# sourceMappingURL=index.js.map
