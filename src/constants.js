export const positions = {
	TOP: "top",
	BOTTOM: "bottom",
	LEFT: "left",
	RIGHT: "right",
	TOP_LEFT: "top-left",
	TOP_RIGHT: "top-right",
	BOTTOM_LEFT: "bottom-left",
	BOTTOM_RIGHT: "bottom-right",
}

export const notificationTypes = {
	SUCCESS: "success",
	ERROR: "error",
	INFO: "info",
	WARNING: "warning",
	NEUTRAL: "neutral",
	DEFAULT: "default",
	SUCCESS_LIGHT: "successLight",
	ERROR_LIGHT: "errorLight",
	INFO_LIGHT: "infoLight",
	WARNING_LIGHT: "warningLight",
	HIGH_CONTRAST: "highContrast",
	POSITIVE: "positive",
	NEGATIVE: "negative",
	ACCENT_BLUE: "accentBlue",
	ACCENT_PINK: "accentPink",
	ACCENT_PURPLE: "accentPurple",
	ACCENT_TEAL: "accentTeal",
}

export const defaultIcons = {
	[notificationTypes.SUCCESS]: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
	[notificationTypes.ERROR]: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`,
	[notificationTypes.INFO]: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
	[notificationTypes.WARNING]: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
}
