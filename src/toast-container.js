export function getOrCreateContainer(position = "top-right") {
	const containerClass = "droplet-toast-container"

	// Function to detect if the device is mobile (based on viewport width or user-agent)
	const isMobile = () => {
		const mobileViewportWidth = window.innerWidth <= 768 // Check screen width for mobile devices
		const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) // Check user-agent for mobile devices

		return mobileViewportWidth || isMobileDevice // Return true if either check is true
	}

	// If it's a mobile device, override position to top-center or bottom-center
	if (isMobile()) {
		position = position.includes("top") ? "top-center" : "bottom-center"
	}

	// Query for a container with the specific position
	let container = document.querySelector(`.${containerClass}[data-position="${position}"]`)

	if (!container) {
		// If not found, create a new one
		container = document.createElement("div")
		container.className = containerClass
		container.setAttribute("data-position", position)
		document.body.appendChild(container)
	}

	return container
}
