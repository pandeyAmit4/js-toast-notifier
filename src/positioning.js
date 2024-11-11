export function calculatePosition(toast, anchor, position, viewport) {
	const anchorRect = anchor?.getBoundingClientRect()
	const toastRect = toast.getBoundingClientRect()
	const offset = 12
	const dropletSize = 12

	let coords = { top: 0, left: 0 }

	if (anchor) {
		coords = getAnchorPosition(position, anchorRect, toastRect, offset, dropletSize)
		coords = adjustForViewport(coords, toastRect, viewport, position)

		// Set the data-point attribute for droplet positioning
		toast.setAttribute("data-point", getDropletPoint(position))

		// Calculate connector height for bottom-anchored toasts
		if (position === "bottom") {
			const connectorHeight = Math.abs(anchorRect.top - (coords.top + toastRect.height))
			toast.style.setProperty("--droplet-connector-height", `${connectorHeight}px`)
		}
	} else {
		coords = getFixedPosition(position, toastRect, viewport, offset)
	}

	return coords
}

function getAnchorPosition(position, anchorRect, toastRect, offset, dropletSize) {
	const halfDroplet = dropletSize / 2

	const positions = {
		top: {
			top: anchorRect.top - toastRect.height - offset - halfDroplet,
			left: anchorRect.left + (anchorRect.width - toastRect.width) / 2,
		},
		bottom: {
			top: anchorRect.bottom + offset + halfDroplet,
			left: anchorRect.left + (anchorRect.width - toastRect.width) / 2,
		},
		left: {
			top: anchorRect.top + (anchorRect.height - toastRect.height) / 2,
			left: anchorRect.left - toastRect.width - offset - halfDroplet,
		},
		right: {
			top: anchorRect.top + (anchorRect.height - toastRect.height) / 2,
			left: anchorRect.right + offset + halfDroplet,
		},
	}

	return positions[position] || positions.top
}

function adjustForViewport(coords, toastRect, viewport, position) {
	const margin = 20
	const originalCoords = { ...coords }

	// Adjust horizontal position
	if (coords.left < margin) {
		coords.left = margin
	} else if (coords.left + toastRect.width > viewport.width - margin) {
		coords.left = viewport.width - toastRect.width - margin
	}

	// Adjust vertical position
	if (coords.top < margin) {
		coords.top = margin
	} else if (coords.top + toastRect.height > viewport.height - margin) {
		coords.top = viewport.height - toastRect.height - margin
	}

	// Update droplet position if toast position was adjusted
	if (coords.left !== originalCoords.left) {
		const dropletOffset = Math.min(Math.max(originalCoords.left - coords.left + toastRect.width / 2, 20), toastRect.width - 20)
		coords.dropletOffset = dropletOffset
	}

	return coords
}

function getFixedPosition(position, toastRect, viewport, offset) {
	const positions = {
		"top-left": { top: offset, left: offset },
		"top-right": { top: offset, right: offset },
		"bottom-left": { bottom: offset, left: offset },
		"bottom-right": { bottom: offset, right: offset },
	}

	return positions[position] || positions["top-right"]
}

function getDropletPoint(position) {
	const points = {
		top: "bottom",
		bottom: "top",
		left: "right",
		right: "left",
	}

	return points[position] || "bottom"
}
