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
      preferredAnchorPosition: 'top' // Add default preferred position
    }, options || {});
    this.container = getOrCreateContainer(this.options.position, this.options.customContainerClass)
    this.handleKeyDown = this.handleKeyDown.bind(this);
    document.addEventListener("keydown", this.handleKeyDown);

    // Add global mousemove handler to activate frozen progress bars
    document.addEventListener('mousemove', () => {
      const toasts = this.container.querySelectorAll('.toast');
      toasts.forEach(toast => {
        if (toast._updateProgress && !toast.matches(':hover')) {
          requestAnimationFrame(() => {
            toast._updateProgress(false);
          });
        }
      });
    }, { once: true }); // Only need to trigger once to unfreeze

    // Add one-time click handler to activate frozen toasts
    document.addEventListener('click', () => {
      const toasts = document.querySelectorAll('.toast');
      toasts.forEach(toast => {
        if (toast._updateProgress) {
          toast._updateProgress(false);
        }
      });
    }, { once: true });

    // Activate all toasts immediately and listen for future ones
    const activateAllToasts = () => {
      document.querySelectorAll('.toast').forEach(toast => {
        if (toast._updateProgress) {
          requestAnimationFrame(() => {
            toast._updateProgress(false);
          });
        }
      });
    };

    // Run immediately
    activateAllToasts();

    // Also run on any user interaction
    ['mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart'].forEach(event => {
      document.addEventListener(event, activateAllToasts, { once: true });
    });

    // Remove scroll-causing focus trick and replace with a simpler activation
    document.body.click();
    window.focus();

    // Alternative activation without scroll side effect
    requestAnimationFrame(() => {
      document.dispatchEvent(new Event('mousemove'));
    });

    // Create a hidden input element that won't affect layout or cause scroll
    const dummyInput = document.createElement('input');
    Object.assign(dummyInput.style, {
      position: 'fixed',
      top: '0',
      opacity: '0',
      height: '0',
      pointerEvents: 'none',
      zIndex: '-1'
    });
    document.body.appendChild(dummyInput);
    dummyInput.focus();
    dummyInput.remove();

    this.anchoredToasts = new Map(); // Track anchored toasts
  }

  show(message, options) {
    if (typeof window === 'undefined') {
      return null;
    }

    const toastOptions = Object.assign({}, this.options, options || {});
    const toast = createToast(message, toastOptions);

    const viewport = {
      width: window.innerWidth || document.documentElement.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight
    };

    if (toastOptions.anchor) {
      // First append to get proper dimensions
      document.body.appendChild(toast);
      
      // Update position function
      const updatePosition = () => {
        const coords = calculatePosition(toast, toastOptions.anchor, toastOptions.position, viewport, toastOptions.preferredAnchorPosition);
        Object.assign(toast.style, {
          position: "fixed",
          top: `${coords.top}px`,
          left: `${coords.left}px`,
          margin: '0',
          zIndex: "1001",
          overflow: 'visible' // Set overflow to auto for anchored toasts
        });

        // Update droplet and connector
        const droplet = toast.querySelector('.toast-droplet');
        if (droplet) {
          droplet.setAttribute('data-point', coords.dropletPoint);
          if (coords.dropletOffset) {
            toast.style.setProperty('--droplet-left', `calc(50% + ${coords.dropletOffset}px)`);
          }
          // Set the connector height
          toast.style.setProperty('--connector-height', `${coords.connectorHeight}px`);
        }
      };

      // Initial position
      updatePosition();

      // Track this anchored toast
      this.anchoredToasts.set(toast, {
        anchor: toastOptions.anchor,
        position: toastOptions.position,
        updatePosition
      });

      // Add scroll listener if not already added
      if (!this._scrollListener) {
        this._scrollListener = () => {
          this.anchoredToasts.forEach(({updatePosition}) => updatePosition());
        };
        window.addEventListener('scroll', this._scrollListener, { passive: true });
      }
    } else {
      this.container = getOrCreateContainer(toastOptions.position)
      this.container.appendChild(toast);
    }

    // Dispatch toastOpened event when the toast is added to the DOM
    const openedEvent = new CustomEvent('toastOpened', {
      detail: { toast, message, options: toastOptions }
    });
    document.dispatchEvent(openedEvent);

    toast.addEventListener("keydown", function(e) {
      if (e.key === "Enter" || e.key === " ") {
        this.hide(toast);
      }
    }.bind(this));

    const closeButton = toast.querySelector(".toast-close");
    if (closeButton) {
      closeButton.addEventListener("click", this.hide.bind(this, toast));
    }

    // Add toast to DOM first
    if (toastOptions.anchor) {
      document.body.appendChild(toast);
    } else {
      this.container = getOrCreateContainer(toastOptions.position);
      this.container.appendChild(toast);
    }

    // Force a reflow before any animations
    void toast.offsetHeight;

    // Simplified animation sequence
    requestAnimationFrame(() => {
      toast.classList.add("toast-show");
      // Force document active state before starting progress
      window.focus();
      document.hasFocus() || document.body.click();
      
      if (toast._updateProgress && toastOptions.timeout) {
        // Ensure the toast is visible before starting progress
        requestAnimationFrame(() => {
          toast._updateProgress(false);
        });
      }
    });

    if (toastOptions.timeout) {
        let timeLeft = toastOptions.timeout;
        let startTime;
        let timeoutId;

        const startTimer = function () {
          startTime = Date.now();
          timeoutId = setTimeout(this.hide.bind(this, toast), timeLeft);
          if (toast._updateProgress) {
            toast._updateProgress(false);
          }
        }.bind(this);

        const pauseTimer = function () {
          clearTimeout(timeoutId);
          timeLeft -= Date.now() - startTime;
          if (toast._updateProgress) {
            toast._updateProgress(true);
          }
        };

        if (toastOptions.pauseOnHover) {
          // Simple event listeners that worked
          toast.addEventListener("mouseenter", pauseTimer);
          toast.addEventListener("mouseleave", startTimer);
        }

        startTimer();
    }

    // Add these activation triggers right after toast is added to DOM
    const activateProgress = () => {
      if (toast._updateProgress && document.contains(toast)) {
        toast._updateProgress(false);
      }
    };

    // Trigger on any user interaction
    const interactionEvents = ['mousedown', 'keydown', 'touchstart', 'scroll'];
    const cleanup = () => {
      interactionEvents.forEach(event => {
        window.removeEventListener(event, activateProgress);
      });
    };

    interactionEvents.forEach(event => {
      window.addEventListener(event, activateProgress, { once: true });
    });

    // Start initial animation
    requestAnimationFrame(() => {
      toast.classList.add("toast-show");
      activateProgress();
    });

    // Clean up event listeners when toast is removed
    toast.addEventListener('toastClosed', cleanup);

    return toast;
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
    toast.classList.remove("toast-show");
    // Dispatch toastClosed event when the toast is removed
    const closedEvent = new CustomEvent('toastClosed', {
      detail: { toast }
    });
    toast.dispatchEvent(closedEvent);
    document.dispatchEvent(closedEvent);
    // Use standard event listener for better compatibility
    var handleTransitionEnd = function() {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
      toast.removeEventListener("transitionend", handleTransitionEnd);
    };
    toast.addEventListener("transitionend", handleTransitionEnd);

    // Remove from tracked anchored toasts
    this.anchoredToasts.delete(toast);
    
    // Remove scroll listener if no more anchored toasts
    if (this.anchoredToasts.size === 0 && this._scrollListener) {
      window.removeEventListener('scroll', this._scrollListener);
      this._scrollListener = null;
    }
  }

  handleKeyDown(e) {
    if (e.key === "Escape") {
      var toasts = this.container.querySelectorAll(".toast");
      for (var i = 0; i < toasts.length; i++) {
        this.hide(toasts[i]);
      }
    }
  }

  destroy() {
    document.removeEventListener("keydown", this.handleKeyDown);
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }

    // Clean up scroll listener
    if (this._scrollListener) {
      window.removeEventListener('scroll', this._scrollListener);
    }
  }
}

export { ToastNotifier };