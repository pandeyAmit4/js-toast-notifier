import { getOrCreateContainer } from "./toast-container"
import { createToast } from "./toast";
import { positions, notificationTypes } from "./constants";
import { calculatePosition } from "./positioning";
import "./styles/toast.css"

// Inject styles when the module is loaded
// injectStyles();

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
    this.container = getOrCreateContainer(this.options.position)
    // updateContainerPosition(this.container, this.options.position);

    this.handleKeyDown = this.handleKeyDown.bind(this);
    document.addEventListener("keydown", this.handleKeyDown);
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
    //   updateContainerPosition(this.container, toastOptions.position);
	  this.container = getOrCreateContainer(toastOptions.position)
      this.container.appendChild(toast);
    }

    toast.addEventListener("keydown", function(e) {
      if (e.key === "Enter" || e.key === " ") {
        this.hide(toast);
      }
    }.bind(this));

    const closeButton = toast.querySelector(".toast-close");
    if (closeButton) {
      closeButton.addEventListener("click", this.hide.bind(this, toast));
    }

    // Use setTimeout for IE11 compatibility instead of requestAnimationFrame
    setTimeout(function() {
      toast.classList.add("toast-show");
    }, 0);

    if (toastOptions.timeout) {
      var timeLeft = toastOptions.timeout;
      var startTime;
      var timeoutId;

      var startTimer = function() {
        startTime = Date.now();
        timeoutId = setTimeout(this.hide.bind(this, toast), timeLeft);
        if (toast._updateProgress) {
          toast._updateProgress(false);
        }
      }.bind(this);

      var pauseTimer = function() {
        clearTimeout(timeoutId);
        timeLeft -= Date.now() - startTime;
        if (toast._updateProgress) {
          toast._updateProgress(true);
        }
      };

      if (toastOptions.pauseOnHover) {
        toast.addEventListener("mouseenter", pauseTimer);
        toast.addEventListener("mouseleave", startTimer);
      }

      startTimer();
    }

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