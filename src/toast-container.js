export function getOrCreateContainer(position = "top-right", customContainerClass = "") {
	const containerClass = "droplet-toast-container"

	// Detect if the device is mobile
	const isMobile = () => {
		const mobileViewportWidth = window.innerWidth <= 768
		const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

		return mobileViewportWidth || isMobileDevice
	}

	// If it's a mobile device, override position to top-center or bottom-center
	if (isMobile()) {
		position = position.includes("top") ? "top-center" : "bottom-center"
	}

	// Search for an existing container
	let container = document.querySelector(`.${containerClass}[data-position="${position}"]`)

	if (!container) {
		// If no container exists, create a new one
		container = document.createElement("div")
		container.className = `${containerClass} ${customContainerClass}`.trim()
		container.setAttribute("data-position", position)
		document.body.appendChild(container)
	} else {
		// Merge the new custom class into the existing container classes
		const existingClasses = container.className.split(" ")
		const newClasses = customContainerClass.split(" ").filter((cls) => cls) // Remove empty strings
		const mergedClasses = Array.from(new Set([...existingClasses, ...newClasses])) // Avoid duplicates
		container.className = mergedClasses.join(" ") // Convert array to a space-separated string
	}

	// Add cleanup for disconnected containers
	if (!container.observer) {
		container.observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.type === 'childList') {
					// Cleanup disconnected toasts
					mutation.removedNodes.forEach((node) => {
						if (node.classList?.contains('toast')) {
							node.remove();
							// Clear any timers/listeners
							node._cleanup?.();
						}
					});
				}
			});
		});
		
		container.observer.observe(container, { childList: true });
	}

	return container
}
