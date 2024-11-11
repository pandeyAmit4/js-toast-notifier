export function createToastContainer() {
	const containerId = "droplet-toast-container"
	let container = document.getElementById(containerId)

	if (!container) {
		container = document.createElement("div")
		container.id = containerId
		container.setAttribute("data-position", "top-right")
		document.body.appendChild(container)
	}

	return container
}

export function updateContainerPosition(container, position) {
	container.setAttribute("data-position", position)
}
