import { getOrCreateContainer } from "./toast-container"
import { createToast } from "./toast";
import { positions, notificationTypes } from "./constants";
import { calculatePosition } from "./positioning";
import "./styles/toast.scss"

class ToastNotifier {
  constructor(options) {
    if (typeof window === 'undefined') {
      return;
    }

    this.options = Object.assign({
      position: positions.TOP_RIGHT,
      timeout: 5000,
      theme: "light",
      showCloseButton: true,
      pauseOnHover: true,
      preferredAnchorPosition: 'top',
      maxConcurrentToasts: 5, // Add max concurrent toasts limit
      icon: null,
      animationClass: null
    }, options || {});

    this.container = getOrCreateContainer(this.options.position, this.options.customContainerClass);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.toastQueue = []; // Add queue for managing multiple toasts
    this.processingQueue = false;
    this.anchoredToasts = new Map();

    document.addEventListener("keydown", this.handleKeyDown);
    this.setupProgressActivation();
  }

  setupProgressActivation() {
    // Simplified activation logic
    const activateToasts = () => {
      document.querySelectorAll('.toast').forEach(toast => {
        if (toast._updateProgress) {
          requestAnimationFrame(() => toast._updateProgress(false));
        }
      });
    };

    // One-time event listeners for activation
    ['mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart'].forEach(event => {
      document.addEventListener(event, activateToasts, { once: true });
    });

    // Initial activation
    requestAnimationFrame(activateToasts);
  }

  async processQueue() {
    if (this.processingQueue) return;
    this.processingQueue = true;

    while (this.toastQueue.length > 0) {
      const { message, options } = this.toastQueue.shift();
      await this._showToast(message, options);
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    this.processingQueue = false;
  }

  async _showToast(message, options) {
    // ... existing show logic ...
    const toastOptions = Object.assign({}, this.options, options || {});
    const toast = createToast(message, toastOptions);

    if (toastOptions.icon) {
      // Move custom icon to beginning of content
      toast.querySelector('.toast-content').insertAdjacentHTML(
        'afterbegin',  // Changed from 'afterbegin' to ensure it's first
        `<span class="toast-custom-icon">${toastOptions.icon}</span>`
      );
    }

    if (toastOptions.anchor) {
      this.handleAnchoredToast(toast, toastOptions);
    } else {
      this.container = getOrCreateContainer(toastOptions.position);
      this.container.appendChild(toast);
    }

    // Force reflow to ensure animation plays
    void toast.offsetHeight;

    // Add show class in next frame for animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        toast.classList.add("toast-show");
        if (toast._updateProgress && toastOptions.timeout) {
          toast._updateProgress(false);
        }
      });
    });

    if (toastOptions.animationClass) {
      toast.classList.add(toastOptions.animationClass);
    }

    // Add close button event listener immediately after toast creation
    const closeButton = toast.querySelector('.toast-close');
    if (closeButton) {
      closeButton.addEventListener('click', () => this.hide(toast));
    }

    // Add keyboard event listener
    toast.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        this.hide(toast);
      }
    });

    this.setupToastEvents(toast, toastOptions);
    return toast;
  }

  show(message, options) {
    try {
      if (typeof window === 'undefined') return null;

      // Queue management
      if (this.container?.children.length >= this.options.maxConcurrentToasts) {
        this.toastQueue.push({ message, options });
        this.processQueue();
        return;
      }

      return this._showToast(message, options);
    } catch (error) {
      console.error('Failed to show toast:', error);
      return null;
    }
  }

  handleAnchoredToast(toast, options) {
    // ... existing anchored toast logic ...
    document.body.appendChild(toast);
    
    const updatePosition = () => {
      const viewport = {
        width: window.innerWidth || document.documentElement.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight
      };
      const coords = calculatePosition(toast, options.anchor, options.position, viewport, options.preferredAnchorPosition);
        Object.assign(toast.style, {
          position: "fixed",
          top: `${coords.top}px`,
          left: `${coords.left}px`,
          margin: '0',
          overflow: 'visible' // Set overflow to auto for anchored toasts
        });

        const droplet = toast.querySelector('.toast-droplet');
        if (droplet) {
          droplet.setAttribute('data-point', coords.dropletPoint);
          toast.style.setProperty('--droplet-left', `${coords.dropletOffset}px`);
          toast.style.setProperty('--connector-height', `${coords.connectorHeight}px`);
        }
      };

    updatePosition();
    this.anchoredToasts.set(toast, { updatePosition });
    this.setupScrollAndResizeListeners();
  }

  setupScrollAndResizeListeners() {
    // ... existing listener setup logic ...
      if (!this._scrollListener) {
        this._scrollListener = () => {
          this.anchoredToasts.forEach(({updatePosition}) => updatePosition());
        };
        window.addEventListener('scroll', this._scrollListener, { passive: true });
      }

      if (!this._resizeListener) {
        this._resizeListener = () => {
          this.anchoredToasts.forEach(({updatePosition}) => updatePosition());
        };
        window.addEventListener('resize', this._resizeListener, { passive: true });
      }
  }

  setupToastEvents(toast, options) {
    // ... existing event setup logic ...
    requestAnimationFrame(() => {
      toast.classList.add("toast-show");
      if (toast._updateProgress && options.timeout) {
        requestAnimationFrame(() => toast._updateProgress(false));
      }
    });

    if (options.timeout) {
      this.setupToastTimer(toast, options);
    }
  }

  setupToastTimer(toast, options) {
    // ... existing timer logic ...
    let timeLeft = options.timeout;
        let startTime;
        let timeoutId;

        const startTimer = () => {
          startTime = Date.now();
          timeoutId = setTimeout(() => this.hide(toast), timeLeft);
          if (toast._updateProgress) toast._updateProgress(false);
        };

        const pauseTimer = () => {
          clearTimeout(timeoutId);
          timeLeft -= Date.now() - startTime;
          if (toast._updateProgress) toast._updateProgress(true);
        };

        if (options.pauseOnHover) {
          toast.addEventListener("mouseenter", pauseTimer);
          toast.addEventListener("mouseleave", startTimer);
        }

        startTimer();
  }

  success(message, options) {
    return this.show(message, Object.assign({}, options, { type: notificationTypes.SUCCESS }));
  }

  error(message, options) {
    return this.show(message, Object.assign({}, options, { type: notificationTypes.ERROR }));
  }

  info(message, options) {
    return this.show(message, Object.assign({}, options, { type: notificationTypes.INFO }));
  }

  warning(message, options) {
    return this.show(message, Object.assign({}, options, { type: notificationTypes.WARNING }));
  }

  hide(toast) {
    // ... existing hide logic ...
    toast.classList.remove("toast-show");
    
    const closedEvent = new CustomEvent('toastClosed', { detail: { toast } });
    toast.dispatchEvent(closedEvent);
    document.dispatchEvent(closedEvent);

    toast.addEventListener("transitionend", () => {
      toast.remove();
      this.anchoredToasts.delete(toast);
      this.cleanupListenersIfNeeded();
      this.processQueue(); // Process next toast in queue
    });
  }

  handleKeyDown(e) {
    if (e.key === "Escape") {
      var toasts = this.container.querySelectorAll(".toast");
      for (var i = 0; i < toasts.length; i++) {
        this.hide(toasts[i]);
      }
    }
  }

  cleanupListenersIfNeeded() {
    if (this.anchoredToasts.size === 0) {
      if (this._scrollListener) {
        window.removeEventListener('scroll', this._scrollListener);
        this._scrollListener = null;
      }
      if (this._resizeListener) {
        window.removeEventListener('resize', this._resizeListener);
        this._resizeListener = null;
      }
    }
  }

  destroy() {
    document.removeEventListener("keydown", this.handleKeyDown);
    if (this.container?.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
    this.cleanupListenersIfNeeded();
    this.toastQueue = [];
    this.processingQueue = false;
  }
}

// Export both as default and named export
export { ToastNotifier };
export default ToastNotifier;

// Add this line to expose ToastNotifier globally when used via CDN
if (typeof window !== 'undefined') {
  window.ToastNotifier = ToastNotifier;
}