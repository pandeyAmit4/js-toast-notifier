export const defaultThemes = {
	light: {
		backgroundColor: "#ffffff",
		textColor: "#333333",
	},
	dark: {
		backgroundColor: "#1a1a1a",
		textColor: "#ffffff",
	},
}

// Updated colors to meet WCAG 2.1 AA contrast requirements
export const typeThemes = {
	success: {
		backgroundColor: "#0d6d4d", // Darker green for better contrast
		textColor: "#ffffff",
		iconColor: "#ffffff",
	},
	error: {
		backgroundColor: "#c41e3a", // Darker red for better contrast
		textColor: "#ffffff",
		iconColor: "#ffffff",
	},
	info: {
		backgroundColor: "#0055b3", // Darker blue for better contrast
		textColor: "#ffffff",
		iconColor: "#ffffff",
	},
	warning: {
		backgroundColor: "#944e00", // Darker orange for better contrast
		textColor: "#ffffff",
		iconColor: "#ffffff",
	},
}
