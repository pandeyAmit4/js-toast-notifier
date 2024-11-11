// src/toast-container.js
function createToastContainer() {
  const containerId = "droplet-toast-container";
  let container = document.getElementById(containerId);
  if (!container) {
    container = document.createElement("div");
    container.id = containerId;
    container.setAttribute("data-position", "top-right");
    document.body.appendChild(container);
  }
  return container;
}
function updateContainerPosition(container, position) {
  container.setAttribute("data-position", position);
}

// src/constants.js
var positions = {
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right",
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right"
};
var notificationTypes = {
  SUCCESS: "success",
  ERROR: "error",
  INFO: "info",
  WARNING: "warning"
};
var defaultIcons = {
  [notificationTypes.SUCCESS]: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  [notificationTypes.ERROR]: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`,
  [notificationTypes.INFO]: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
  [notificationTypes.WARNING]: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`
};

// src/themes.js
var defaultThemes = {
  light: {
    backgroundColor: "#ffffff",
    textColor: "#333333"
  },
  dark: {
    backgroundColor: "#1a1a1a",
    textColor: "#ffffff"
  }
};
var typeThemes = {
  success: {
    backgroundColor: "#0d6d4d",
    // Darker green for better contrast
    textColor: "#ffffff",
    iconColor: "#ffffff"
  },
  error: {
    backgroundColor: "#c41e3a",
    // Darker red for better contrast
    textColor: "#ffffff",
    iconColor: "#ffffff"
  },
  info: {
    backgroundColor: "#0055b3",
    // Darker blue for better contrast
    textColor: "#ffffff",
    iconColor: "#ffffff"
  },
  warning: {
    backgroundColor: "#944e00",
    // Darker orange for better contrast
    textColor: "#ffffff",
    iconColor: "#ffffff"
  }
};

// src/toast.js
function createToast(message, options) {
  const toast = document.createElement("div");
  const theme = getTheme(options);
  const type = options.type || "default";
  toast.className = `toast ${options.customClass || ""}`;
  toast.setAttribute("role", "alert");
  toast.setAttribute("aria-live", "polite");
  toast.setAttribute("aria-atomic", "true");
  if (type !== "default") {
    toast.setAttribute("aria-label", `${type} notification: ${message}`);
  }
  Object.assign(toast.style, {
    backgroundColor: theme.backgroundColor,
    color: theme.textColor
  });
  const content = createContent(message, options, theme);
  toast.appendChild(content);
  if (options.showCloseButton !== false) {
    const closeButton = createCloseButton(theme);
    toast.appendChild(closeButton);
  }
  if (options.anchor) {
    toast.classList.add("toast-anchored");
    const droplet = createDroplet(theme);
    toast.appendChild(droplet);
  }
  if (options.showProgress !== false && options.timeout) {
    const { progressBar, updateProgress } = createProgressBar(options);
    toast.appendChild(progressBar);
    toast._updateProgress = updateProgress;
  }
  toast.setAttribute("tabindex", "0");
  return toast;
}
function getTheme(options) {
  if (options.type && typeThemes[options.type]) {
    return {
      ...typeThemes[options.type],
      ...options.theme
    };
  }
  const baseTheme = defaultThemes[options.theme] || defaultThemes.light;
  return {
    ...baseTheme,
    ...options.theme
  };
}
function createContent(message, options, theme) {
  const wrapper = document.createElement("div");
  wrapper.className = "toast-content";
  wrapper.setAttribute("role", "presentation");
  if (options.type && defaultIcons[options.type]) {
    const icon = createIcon(options, theme);
    wrapper.appendChild(icon);
  }
  const messageEl = document.createElement("span");
  messageEl.textContent = message;
  wrapper.appendChild(messageEl);
  return wrapper;
}
function createIcon(options, theme) {
  const icon = document.createElement("div");
  icon.className = "toast-icon";
  icon.setAttribute("role", "img");
  icon.setAttribute("aria-label", `${options.type} icon`);
  icon.innerHTML = options.icon || defaultIcons[options.type];
  icon.style.color = theme.iconColor || theme.textColor;
  return icon;
}
function createCloseButton(theme) {
  const button = document.createElement("button");
  button.className = "toast-close";
  button.setAttribute("aria-label", "Close notification");
  button.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
  button.style.color = theme.textColor;
  return button;
}
function createDroplet(theme) {
  const droplet = document.createElement("div");
  droplet.className = "toast-droplet";
  droplet.setAttribute("role", "presentation");
  droplet.setAttribute("aria-hidden", "true");
  droplet.style.backgroundColor = theme.backgroundColor;
  return droplet;
}
function createProgressBar(options) {
  const progress = document.createElement("div");
  progress.className = "toast-progress";
  if (options.progressHeight) {
    progress.style.setProperty("--progress-height", options.progressHeight);
  }
  if (options.progressColor) {
    progress.style.setProperty("--progress-color", options.progressColor);
  }
  if (options.progressBackground) {
    progress.style.setProperty("--progress-background", options.progressBackground);
  }
  const bar = document.createElement("div");
  bar.className = "toast-progress-bar";
  let startTime = null;
  let pausedAt = null;
  let currentScale = 0;
  let animationFrame = null;
  const updateProgress = (isPaused = false) => {
    if (isPaused && startTime !== null) {
      const elapsed = Date.now() - startTime;
      currentScale = Math.max(0, Math.min(1, elapsed / options.timeout));
      pausedAt = elapsed;
      startTime = null;
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
      bar.style.transition = "none";
      bar.style.transform = `scaleX(${currentScale})`;
    } else if (!isPaused) {
      if (pausedAt !== null) {
        const remainingTime = options.timeout - pausedAt;
        startTime = Date.now() - pausedAt;
        bar.style.transition = `transform ${remainingTime}ms linear`;
        requestAnimationFrame(() => {
          bar.style.transform = "scaleX(1)";
        });
      } else {
        startTime = Date.now();
        bar.style.transition = `transform ${options.timeout}ms linear`;
        requestAnimationFrame(() => {
          bar.style.transform = "scaleX(1)";
        });
      }
      const animate = () => {
        if (startTime === null)
          return;
        const elapsed = Date.now() - startTime;
        currentScale = Math.max(0, Math.min(1, elapsed / options.timeout));
        if (elapsed < options.timeout) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      animate();
    }
  };
  progress.appendChild(bar);
  requestAnimationFrame(() => {
    updateProgress(false);
  });
  return { progressBar: progress, updateProgress };
}

// src/positioning.js
function calculatePosition(toast, anchor, position, viewport) {
  const anchorRect = anchor?.getBoundingClientRect();
  const toastRect = toast.getBoundingClientRect();
  const offset = 12;
  const dropletSize = 12;
  let coords = { top: 0, left: 0 };
  if (anchor) {
    coords = getAnchorPosition(position, anchorRect, toastRect, offset, dropletSize);
    coords = adjustForViewport(coords, toastRect, viewport, position);
    toast.setAttribute("data-point", getDropletPoint(position));
    if (position === "bottom") {
      const connectorHeight = Math.abs(anchorRect.top - (coords.top + toastRect.height));
      toast.style.setProperty("--droplet-connector-height", `${connectorHeight}px`);
    }
  } else {
    coords = getFixedPosition(position, toastRect, viewport, offset);
  }
  return coords;
}
function getAnchorPosition(position, anchorRect, toastRect, offset, dropletSize) {
  const halfDroplet = dropletSize / 2;
  const positions2 = {
    top: {
      top: anchorRect.top - toastRect.height - offset - halfDroplet,
      left: anchorRect.left + (anchorRect.width - toastRect.width) / 2
    },
    bottom: {
      top: anchorRect.bottom + offset + halfDroplet,
      left: anchorRect.left + (anchorRect.width - toastRect.width) / 2
    },
    left: {
      top: anchorRect.top + (anchorRect.height - toastRect.height) / 2,
      left: anchorRect.left - toastRect.width - offset - halfDroplet
    },
    right: {
      top: anchorRect.top + (anchorRect.height - toastRect.height) / 2,
      left: anchorRect.right + offset + halfDroplet
    }
  };
  return positions2[position] || positions2.top;
}
function adjustForViewport(coords, toastRect, viewport, position) {
  const margin = 20;
  const originalCoords = { ...coords };
  if (coords.left < margin) {
    coords.left = margin;
  } else if (coords.left + toastRect.width > viewport.width - margin) {
    coords.left = viewport.width - toastRect.width - margin;
  }
  if (coords.top < margin) {
    coords.top = margin;
  } else if (coords.top + toastRect.height > viewport.height - margin) {
    coords.top = viewport.height - toastRect.height - margin;
  }
  if (coords.left !== originalCoords.left) {
    const dropletOffset = Math.min(Math.max(originalCoords.left - coords.left + toastRect.width / 2, 20), toastRect.width - 20);
    coords.dropletOffset = dropletOffset;
  }
  return coords;
}
function getFixedPosition(position, toastRect, viewport, offset) {
  const positions2 = {
    "top-left": { top: offset, left: offset },
    "top-right": { top: offset, right: offset },
    "bottom-left": { bottom: offset, left: offset },
    "bottom-right": { bottom: offset, right: offset }
  };
  return positions2[position] || positions2["top-right"];
}
function getDropletPoint(position) {
  const points = {
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left"
  };
  return points[position] || "bottom";
}

// src/styles.js
var styles = `
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
`;
var styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// src/index.js
var DropletToast = class {
  constructor(options = {}) {
    this.container = createToastContainer();
    this.options = {
      position: positions.TOP_RIGHT,
      timeout: 5e3,
      theme: "light",
      showCloseButton: true,
      pauseOnHover: true,
      ...options
    };
    updateContainerPosition(this.container, this.options.position);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    document.addEventListener("keydown", this.handleKeyDown);
  }
  show(message, options = {}) {
    const toastOptions = { ...this.options, ...options };
    const toast = createToast(message, toastOptions);
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    if (toastOptions.anchor) {
      const coords = calculatePosition(toast, toastOptions.anchor, toastOptions.position, viewport);
      Object.assign(toast.style, {
        position: "absolute",
        top: `${coords.top}px`,
        left: `${coords.left}px`,
        zIndex: "1001"
      });
      if (coords.dropletOffset) {
        toast.style.setProperty("--droplet-left", `${coords.dropletOffset}px`);
      }
      document.body.appendChild(toast);
    } else {
      updateContainerPosition(this.container, toastOptions.position);
      this.container.appendChild(toast);
    }
    toast.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        this.hide(toast);
      }
    });
    const closeButton = toast.querySelector(".toast-close");
    if (closeButton) {
      closeButton.addEventListener("click", () => this.hide(toast));
    }
    requestAnimationFrame(() => {
      toast.classList.add("toast-show");
    });
    if (toastOptions.timeout) {
      let timeLeft = toastOptions.timeout;
      let startTime;
      let timeoutId;
      const startTimer = () => {
        startTime = Date.now();
        timeoutId = setTimeout(() => this.hide(toast), timeLeft);
        if (toast._updateProgress) {
          toast._updateProgress(false);
        }
      };
      const pauseTimer = () => {
        clearTimeout(timeoutId);
        timeLeft -= Date.now() - startTime;
        if (toast._updateProgress) {
          toast._updateProgress(true);
        }
      };
      if (toastOptions.pauseOnHover) {
        toast.addEventListener("mouseenter", () => {
          pauseTimer();
        });
        toast.addEventListener("mouseleave", () => {
          startTimer();
        });
      }
      startTimer();
    }
    return toast;
  }
  success(message, options = {}) {
    return this.show(message, { ...options, type: notificationTypes.SUCCESS });
  }
  error(message, options = {}) {
    return this.show(message, { ...options, type: notificationTypes.ERROR });
  }
  info(message, options = {}) {
    return this.show(message, { ...options, type: notificationTypes.INFO });
  }
  warning(message, options = {}) {
    return this.show(message, { ...options, type: notificationTypes.WARNING });
  }
  hide(toast) {
    toast.classList.remove("toast-show");
    toast.addEventListener("transitionend", () => {
      toast.remove();
    });
  }
  handleKeyDown(e) {
    if (e.key === "Escape") {
      const toasts = this.container.querySelectorAll(".toast");
      toasts.forEach((toast) => this.hide(toast));
    }
  }
  destroy() {
    document.removeEventListener("keydown", this.handleKeyDown);
    this.container.remove();
  }
};
var src_default = DropletToast;
export {
  src_default as default
};
