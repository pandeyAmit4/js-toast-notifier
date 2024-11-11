import { createToastContainer, updateContainerPosition } from "./toast-container"
import { createToast } from "./toast"
import { positions, notificationTypes } from "./constants"
import { calculatePosition } from "./positioning"
import "./styles.js"

class ToastNotifier {
	constructor(options = {}) {
		this.container = createToastContainer()
		this.options = {
			position: positions.TOP_RIGHT,
			timeout: 5000,
			theme: "light",
			showCloseButton: true,
			pauseOnHover: true,
			...options,
		}

		updateContainerPosition(this.container, this.options.position)

		this.handleKeyDown = this.handleKeyDown.bind(this)
		document.addEventListener("keydown", this.handleKeyDown)
	}

	show(message, options = {}) {
		const toastOptions = { ...this.options, ...options }
		const toast = createToast(message, toastOptions)

		const viewport = {
			width: window.innerWidth,
			height: window.innerHeight,
		}

		if (toastOptions.anchor) {
			const coords = calculatePosition(toast, toastOptions.anchor, toastOptions.position, viewport)
			Object.assign(toast.style, {
				position: "absolute",
				top: `${coords.top}px`,
				left: `${coords.left}px`,
				zIndex: "1001",
			})

			if (coords.dropletOffset) {
				toast.style.setProperty("--droplet-left", `${coords.dropletOffset}px`)
			}

			document.body.appendChild(toast)
		} else {
			updateContainerPosition(this.container, toastOptions.position)
			this.container.appendChild(toast)
		}

		toast.addEventListener("keydown", (e) => {
			if (e.key === "Enter" || e.key === " ") {
				this.hide(toast)
			}
		})

		const closeButton = toast.querySelector(".toast-close")
		if (closeButton) {
			closeButton.addEventListener("click", () => this.hide(toast))
		}

		requestAnimationFrame(() => {
			toast.classList.add("toast-show")
		})

		if (toastOptions.timeout) {
			let timeLeft = toastOptions.timeout
			let startTime
			let timeoutId

			const startTimer = () => {
				startTime = Date.now()
				timeoutId = setTimeout(() => this.hide(toast), timeLeft)
				if (toast._updateProgress) {
					toast._updateProgress(false)
				}
			}

			const pauseTimer = () => {
				clearTimeout(timeoutId)
				timeLeft -= Date.now() - startTime
				if (toast._updateProgress) {
					toast._updateProgress(true)
				}
			}

			if (toastOptions.pauseOnHover) {
				toast.addEventListener("mouseenter", () => {
					pauseTimer()
				})

				toast.addEventListener("mouseleave", () => {
					startTimer()
				})
			}

			startTimer()
		}

		return toast
	}

	success(message, options = {}) {
		return this.show(message, { ...options, type: notificationTypes.SUCCESS })
	}

	error(message, options = {}) {
		return this.show(message, { ...options, type: notificationTypes.ERROR })
	}

	info(message, options = {}) {
		return this.show(message, { ...options, type: notificationTypes.INFO })
	}

	warning(message, options = {}) {
		return this.show(message, { ...options, type: notificationTypes.WARNING })
	}

	hide(toast) {
		toast.classList.remove("toast-show")
		toast.addEventListener("transitionend", () => {
			toast.remove()
		})
	}

	handleKeyDown(e) {
		if (e.key === "Escape") {
			const toasts = this.container.querySelectorAll(".toast")
			toasts.forEach((toast) => this.hide(toast))
		}
	}

	destroy() {
		document.removeEventListener("keydown", this.handleKeyDown)
		this.container.remove()
	}
}

export default ToastNotifier
