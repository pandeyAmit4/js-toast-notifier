import { defaultIcons } from "./constants"
import { typeThemes, defaultThemes } from "./themes"

export function createToast(message, options) {
	const toast = document.createElement("div")
	const theme = getTheme(options)
	const type = options.type || "default"

	toast.className = `toast ${options.customClass || ""}`
	toast.setAttribute("role", "status") // Change from "alert" to "status" for non-critical messages
	toast.setAttribute("aria-live", options.type === "error" ? "assertive" : "polite")
	toast.setAttribute("aria-atomic", "true")

	// Add more descriptive labels based on type
	const toastTypeLabel = {
		success: "Success notification",
		error: "Error notification",
		warning: "Warning notification",
		info: "Information notification",
		default: "Notification"
	}

	const typeLabel = toastTypeLabel[options.type || "default"]
	toast.setAttribute("aria-label", `${typeLabel}: ${message}`)

	if (options.showCloseButton !== false) {
		toast.setAttribute("aria-describedby", "toast-close-instruction")
		const closeInstruction = document.createElement("span")
		closeInstruction.id = "toast-close-instruction"
		closeInstruction.className = "sr-only" // visually hidden but available to screen readers
		closeInstruction.textContent = "Press Enter to close this notification"
		toast.appendChild(closeInstruction)
	}

	Object.assign(toast.style, {
		backgroundColor: theme.backgroundColor,
		color: theme.textColor,
		boxShadow: theme.boxShadow || "0 4px 12px rgba(0, 0, 0, 0.15)",
		// Add subtle border for light themes
		border: theme.backgroundColor.includes('#FFF') || 
			   theme.backgroundColor.includes('#EFF') || 
			   theme.backgroundColor.includes('#ECF') || 
			   theme.backgroundColor.includes('#FEF') ? 
			   '1px solid rgba(0,0,0,0.05)' : 'none'
	})

	const content = createContent(message, options, theme)
	toast.appendChild(content)

	if (options.showCloseButton !== false) {
		const closeButton = createCloseButton(theme)
		toast.appendChild(closeButton)
	}

	if (options.anchor) {
		toast.classList.add("toast-anchored")
		const droplet = createDroplet(theme)
		toast.appendChild(droplet)
	}

	if (options.showProgress !== false && options.timeout) {
		const { progressBar, updateProgress } = createProgressBar(options)
		toast.appendChild(progressBar)
		toast._updateProgress = updateProgress
	}

	// Add better RTL support
	if (document.dir === 'rtl') {
		toast.setAttribute('dir', 'rtl')
		toast.style.textAlign = 'right'
	}

	// Add high contrast support
	if (window.matchMedia('(forced-colors: active)').matches) {
		toast.style.forcedColorAdjust = 'none'
		toast.style.backgroundColor = 'Canvas'
		toast.style.color = 'CanvasText'
		toast.style.borderColor = 'CanvasText'
	}

	// Improve focus management
	toast.setAttribute("tabindex", "-1")
	if (options.type === "error") {
		requestAnimationFrame(() => toast.focus())
	}

	toast.setAttribute("tabindex", "0")

	return toast
}

function getTheme(options) {
	if (options.type && typeThemes[options.type]) {
		return {
			...typeThemes[options.type],
			...options.theme,
		}
	}

	const baseTheme = defaultThemes[options.theme] || defaultThemes.light
	return {
		...baseTheme,
		...options.theme,
	}
}

function createContent(message, options, theme) {
	const wrapper = document.createElement("div")
	wrapper.className = "toast-content"
	wrapper.setAttribute("role", "presentation")

	// Only add default icon if no custom icon is provided
	if (!options.icon && options.type && defaultIcons[options.type]) {
		const icon = createIcon(options, theme)
		wrapper.appendChild(icon)
	}

	const messageEl = document.createElement("span")
	messageEl.innerHTML = message
	wrapper.appendChild(messageEl)

	return wrapper
}

function createIcon(options, theme) {
	const icon = document.createElement("div")
	icon.className = "toast-icon"
	icon.setAttribute("role", "img")
	icon.setAttribute("aria-label", `${options.type} icon`)
	icon.innerHTML = options.icon || defaultIcons[options.type]
	icon.style.color = theme.iconColor || theme.textColor
	return icon
}

function createCloseButton(theme) {
	const button = document.createElement("button")
	button.className = "toast-close"
	button.setAttribute("aria-label", "Close this notification")
	button.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
	button.style.color = theme.textColor
	return button
}

function createDroplet(theme) {
	const droplet = document.createElement("div")
	droplet.className = "toast-droplet"
	droplet.setAttribute("role", "presentation")
	droplet.setAttribute("aria-hidden", "true")
	droplet.style.backgroundColor = theme.backgroundColor
	// Set initial data-point attribute
	droplet.setAttribute("data-point", "top") // Default position
	return droplet
}

function createProgressBar(options) {
	const progress = document.createElement("div")
	progress.className = "toast-progress"

	// Set custom styles if provided
	if (options.progressHeight) {
		progress.style.setProperty("--progress-height", options.progressHeight)
	}

	if (options.progressColor) {
		progress.style.setProperty("--progress-color", options.progressColor)
	}

	if (options.progressBackground) {
		progress.style.setProperty("--progress-background", options.progressBackground)
	}

	const bar = document.createElement("div")
	bar.className = "toast-progress-bar"
	progress.appendChild(bar)

	// Initialize progress state
	let startTime = null
	let pausedAt = null
	let currentScale = 0
	let animationFrame = null

	// Function to update progress bar position
	const updateProgress = (isPaused = false) => {
		if (isPaused && startTime !== null) {
			// Pause progress
			const elapsed = Date.now() - startTime
			currentScale = Math.max(0, Math.min(1, elapsed / options.timeout))
			pausedAt = elapsed
			startTime = null

			// Cancel animation frame
			if (animationFrame) {
				cancelAnimationFrame(animationFrame)
				animationFrame = null
			}

			// Set the exact position where we paused
			bar.style.transition = "none"
			bar.style.transform = `scaleX(${currentScale})`
		} else if (!isPaused) {
			// Resume or start progress
			if (pausedAt !== null) {
				// Resuming from paused state
				const remainingTime = options.timeout - pausedAt
				startTime = Date.now() - pausedAt

				// Restore transition and continue from current position
				bar.style.transition = `transform ${remainingTime}ms linear`
				requestAnimationFrame(() => {
					bar.style.transform = "scaleX(1)"
				})
			} else {
				// Starting fresh
				startTime = Date.now()
				bar.style.transition = `transform ${options.timeout}ms linear`

				// Ensure the browser paints the initial state before transitioning
				bar.style.transform = `scaleX(0)`
				progress.offsetWidth // Force reflow
				requestAnimationFrame(() => {
					bar.style.transform = "scaleX(1)"
				})
			}

			// Start progress tracking
			const animate = () => {
				if (startTime === null) return // Stop if paused

				const elapsed = Date.now() - startTime
				currentScale = Math.max(0, Math.min(1, elapsed / options.timeout))

				if (elapsed < options.timeout) {
					animationFrame = requestAnimationFrame(animate)
				}
			}

			animate()
		}
	}

	// Start the progress bar after ensuring it's in the DOM
	setTimeout(() => {
		updateProgress(false)
	}, 0)

	return { progressBar: progress, updateProgress }
}
