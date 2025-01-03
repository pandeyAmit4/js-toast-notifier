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
      pauseOnHover: true
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
      const coords = calculatePosition(toast, toastOptions.anchor, toastOptions.position, viewport);
      Object.assign(toast.style, {
        position: "absolute",
        top: coords.top + "px",
        left: coords.left + "px",
        zIndex: "1001"
      });

      if (coords.dropletOffset) {
        toast.style.setProperty("--droplet-left", coords.dropletOffset + "px");
      }

      document.body.appendChild(toast);
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
          // Only update progress if timer is actually running
          if (toast._updateProgress && timeLeft > 0) {
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
          // Prevent click from resuming progress while hovering
          toast.addEventListener("mouseenter", () => {
            pauseTimer();
            toast.addEventListener("click", e => e.stopPropagation(), { capture: true });
          });
          
          toast.addEventListener("mouseleave", () => {
            startTimer();
            toast.removeEventListener("click", e => e.stopPropagation(), { capture: true });
          });
        }

        startTimer();
    }

    // Remove redundant animation and activation code
    requestAnimationFrame(() => {
      toast.classList.add("toast-show");
      if (toast._updateProgress && toastOptions.timeout) {
        toast._updateProgress(false);
      }
    });

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
  }
}

export { ToastNotifier };