const styles = `
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
`

const styleSheet = document.createElement("style")
styleSheet.textContent = styles
document.head.appendChild(styleSheet)
