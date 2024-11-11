function x(){let o="droplet-toast-container",t=document.getElementById(o);return t||(t=document.createElement("div"),t.id=o,t.setAttribute("data-position","top-right"),document.body.appendChild(t)),t}function f(o,t){o.setAttribute("data-position",t)}var y={TOP:"top",BOTTOM:"bottom",LEFT:"left",RIGHT:"right",TOP_LEFT:"top-left",TOP_RIGHT:"top-right",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right"},p={SUCCESS:"success",ERROR:"error",INFO:"info",WARNING:"warning"},u={[p.SUCCESS]:'<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',[p.ERROR]:'<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',[p.INFO]:'<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',[p.WARNING]:'<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>'};var h={light:{backgroundColor:"#ffffff",textColor:"#333333"},dark:{backgroundColor:"#1a1a1a",textColor:"#ffffff"}},m={success:{backgroundColor:"#0d6d4d",textColor:"#ffffff",iconColor:"#ffffff"},error:{backgroundColor:"#c41e3a",textColor:"#ffffff",iconColor:"#ffffff"},info:{backgroundColor:"#0055b3",textColor:"#ffffff",iconColor:"#ffffff"},warning:{backgroundColor:"#944e00",textColor:"#ffffff",iconColor:"#ffffff"}};function b(o,t){let e=document.createElement("div"),n=k(t),r=t.type||"default";e.className=`toast ${t.customClass||""}`,e.setAttribute("role","alert"),e.setAttribute("aria-live","polite"),e.setAttribute("aria-atomic","true"),r!=="default"&&e.setAttribute("aria-label",`${r} notification: ${o}`),Object.assign(e.style,{backgroundColor:n.backgroundColor,color:n.textColor});let i=T(o,t,n);if(e.appendChild(i),t.showCloseButton!==!1){let s=A(n);e.appendChild(s)}if(t.anchor){e.classList.add("toast-anchored");let s=O(n);e.appendChild(s)}if(t.showProgress!==!1&&t.timeout){let{progressBar:s,updateProgress:a}=P(t);e.appendChild(s),e._updateProgress=a}return e.setAttribute("tabindex","0"),e}function k(o){return o.type&&m[o.type]?{...m[o.type],...o.theme}:{...h[o.theme]||h.light,...o.theme}}function T(o,t,e){let n=document.createElement("div");if(n.className="toast-content",n.setAttribute("role","presentation"),t.type&&u[t.type]){let i=E(t,e);n.appendChild(i)}let r=document.createElement("span");return r.textContent=o,n.appendChild(r),n}function E(o,t){let e=document.createElement("div");return e.className="toast-icon",e.setAttribute("role","img"),e.setAttribute("aria-label",`${o.type} icon`),e.innerHTML=o.icon||u[o.type],e.style.color=t.iconColor||t.textColor,e}function A(o){let t=document.createElement("button");return t.className="toast-close",t.setAttribute("aria-label","Close notification"),t.innerHTML='<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',t.style.color=o.textColor,t}function O(o){let t=document.createElement("div");return t.className="toast-droplet",t.setAttribute("role","presentation"),t.setAttribute("aria-hidden","true"),t.style.backgroundColor=o.backgroundColor,t}function P(o){let t=document.createElement("div");t.className="toast-progress",o.progressHeight&&t.style.setProperty("--progress-height",o.progressHeight),o.progressColor&&t.style.setProperty("--progress-color",o.progressColor),o.progressBackground&&t.style.setProperty("--progress-background",o.progressBackground);let e=document.createElement("div");e.className="toast-progress-bar";let n=null,r=null,i=0,s=null,a=(l=!1)=>{if(l&&n!==null){let d=Date.now()-n;i=Math.max(0,Math.min(1,d/o.timeout)),r=d,n=null,s&&(cancelAnimationFrame(s),s=null),e.style.transition="none",e.style.transform=`scaleX(${i})`}else if(!l){if(r!==null){let c=o.timeout-r;n=Date.now()-r,e.style.transition=`transform ${c}ms linear`,requestAnimationFrame(()=>{e.style.transform="scaleX(1)"})}else n=Date.now(),e.style.transition=`transform ${o.timeout}ms linear`,requestAnimationFrame(()=>{e.style.transform="scaleX(1)"});let d=()=>{if(n===null)return;let c=Date.now()-n;i=Math.max(0,Math.min(1,c/o.timeout)),c<o.timeout&&(s=requestAnimationFrame(d))};d()}};return t.appendChild(e),requestAnimationFrame(()=>{a(!1)}),{progressBar:t,updateProgress:a}}function w(o,t,e,n){let r=t?.getBoundingClientRect(),i=o.getBoundingClientRect(),s=12,a=12,l={top:0,left:0};if(t){if(l=B(e,r,i,s,a),l=L(l,i,n,e),o.setAttribute("data-point",F(e)),e==="bottom"){let d=Math.abs(r.top-(l.top+i.height));o.style.setProperty("--droplet-connector-height",`${d}px`)}}else l=I(e,i,n,s);return l}function B(o,t,e,n,r){let i=r/2,s={top:{top:t.top-e.height-n-i,left:t.left+(t.width-e.width)/2},bottom:{top:t.bottom+n+i,left:t.left+(t.width-e.width)/2},left:{top:t.top+(t.height-e.height)/2,left:t.left-e.width-n-i},right:{top:t.top+(t.height-e.height)/2,left:t.right+n+i}};return s[o]||s.top}function L(o,t,e,n){let i={...o};if(o.left<20?o.left=20:o.left+t.width>e.width-20&&(o.left=e.width-t.width-20),o.top<20?o.top=20:o.top+t.height>e.height-20&&(o.top=e.height-t.height-20),o.left!==i.left){let s=Math.min(Math.max(i.left-o.left+t.width/2,20),t.width-20);o.dropletOffset=s}return o}function I(o,t,e,n){let r={"top-left":{top:n,left:n},"top-right":{top:n,right:n},"bottom-left":{bottom:n,left:n},"bottom-right":{bottom:n,right:n}};return r[o]||r["top-right"]}function F(o){return{top:"bottom",bottom:"top",left:"right",right:"left"}[o]||"bottom"}var N=`
.toast {
  position: fixed;
  min-width: 280px;
  max-width: 400px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(10px);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1rem;
  line-height: 1.5;
  margin: 8px;
  overflow: visible;
}

.toast:focus {
  outline: 3px solid #2563eb;
  outline-offset: 2px;
}

.toast-show {
  opacity: 1;
  transform: translateY(0);
}

.toast-content {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.toast-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.toast-icon svg {
  width: 24px;
  height: 24px;
}

.toast-close {
  background: none;
  border: 2px solid transparent;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  transition: all 0.2s;
  border-radius: 4px;
  margin: -4px;
}

.toast-close:hover {
  opacity: 1;
  background: rgba(0, 0, 0, 0.1);
}

.toast-close:focus {
  outline: none;
  border-color: currentColor;
  opacity: 1;
}

.toast-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: var(--progress-height, 4px);
  background: var(--progress-background, rgba(255, 255, 255, 0.2));
  transform-origin: left;
  overflow: hidden;
}

.toast-progress-bar {
  width: 100%;
  height: 100%;
  background: var(--progress-color, rgba(255, 255, 255, 0.7));
  transform-origin: left;
  transform: scaleX(0);
  will-change: transform;
}

.toast-anchored {
  position: absolute;
  margin: 0;
}

.toast-droplet {
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: inherit;
  transform: rotate(45deg);
  z-index: -1;
  transition: left 0.3s ease;
}

.toast-droplet::after {
  content: '';
  position: absolute;
  width: 2px;
  background-color: inherit;
  top: 100%;
  bottom: -999px;
  left: 50%;
  transform: translateX(-50%);
}

.toast[data-point="top"] .toast-droplet {
  top: -6px;
  left: var(--droplet-left, calc(50% - 6px));
}

.toast[data-point="top"] .toast-droplet::after {
  display: none;
}

.toast[data-point="bottom"] .toast-droplet {
  bottom: -6px;
  left: var(--droplet-left, calc(50% - 6px));
}

.toast[data-point="bottom"] .toast-droplet::after {
  top: auto;
  bottom: 100%;
  height: var(--droplet-connector-height, 0px);
}

.toast[data-point="left"] .toast-droplet {
  left: -6px;
  top: calc(50% - 6px);
}

.toast[data-point="right"] .toast-droplet {
  right: -6px;
  top: calc(50% - 6px);
}

#droplet-toast-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 12px;
}

#droplet-toast-container .toast {
  pointer-events: auto;
  position: relative;
}

#droplet-toast-container[data-position^="top"] {
  align-items: flex-start;
}

#droplet-toast-container[data-position^="bottom"] {
  align-items: flex-end;
  flex-direction: column-reverse;
}

#droplet-toast-container[data-position$="right"] {
  align-items: flex-end;
}

#droplet-toast-container[data-position$="left"] {
  align-items: flex-start;
}

#droplet-toast-container[data-position="center"] {
  align-items: center;
}

@media (prefers-reduced-motion: reduce) {
  .toast {
    transition: none;
  }
  
  .toast-progress-bar {
    transition: none;
  }
  
  .toast-droplet {
    transition: none;
  }
}
`,C=document.createElement("style");C.textContent=N;document.head.appendChild(C);var g=class{constructor(t={}){this.container=x(),this.options={position:y.TOP_RIGHT,timeout:5e3,theme:"light",showCloseButton:!0,pauseOnHover:!0,...t},f(this.container,this.options.position),this.handleKeyDown=this.handleKeyDown.bind(this),document.addEventListener("keydown",this.handleKeyDown)}show(t,e={}){let n={...this.options,...e},r=b(t,n),i={width:window.innerWidth,height:window.innerHeight};if(n.anchor){let a=w(r,n.anchor,n.position,i);Object.assign(r.style,{position:"absolute",top:`${a.top}px`,left:`${a.left}px`,zIndex:"1001"}),a.dropletOffset&&r.style.setProperty("--droplet-left",`${a.dropletOffset}px`),document.body.appendChild(r)}else f(this.container,n.position),this.container.appendChild(r);r.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&this.hide(r)});let s=r.querySelector(".toast-close");if(s&&s.addEventListener("click",()=>this.hide(r)),requestAnimationFrame(()=>{r.classList.add("toast-show")}),n.timeout){let a=n.timeout,l,d,c=()=>{l=Date.now(),d=setTimeout(()=>this.hide(r),a),r._updateProgress&&r._updateProgress(!1)},v=()=>{clearTimeout(d),a-=Date.now()-l,r._updateProgress&&r._updateProgress(!0)};n.pauseOnHover&&(r.addEventListener("mouseenter",()=>{v()}),r.addEventListener("mouseleave",()=>{c()})),c()}return r}success(t,e={}){return this.show(t,{...e,type:p.SUCCESS})}error(t,e={}){return this.show(t,{...e,type:p.ERROR})}info(t,e={}){return this.show(t,{...e,type:p.INFO})}warning(t,e={}){return this.show(t,{...e,type:p.WARNING})}hide(t){t.classList.remove("toast-show"),t.addEventListener("transitionend",()=>{t.remove()})}handleKeyDown(t){t.key==="Escape"&&this.container.querySelectorAll(".toast").forEach(n=>this.hide(n))}destroy(){document.removeEventListener("keydown",this.handleKeyDown),this.container.remove()}},W=g;export{W as default};
