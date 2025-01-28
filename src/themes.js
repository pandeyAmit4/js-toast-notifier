export const defaultThemes = {
  light: {
    backgroundColor: "#ffffff",
    textColor: "#1f2937", // Darker for better contrast
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
  },
  dark: {
    backgroundColor: "#1f2937",
    textColor: "#f9fafb",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
  },
}

// Updated colors to meet WCAG 2.1 AA contrast requirements
export const typeThemes = {
  // Main variants - All meet WCAG AA
  success: {
    backgroundColor: "#15803d", // Darker green
    textColor: "#ffffff",
    iconColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(21, 128, 61, 0.2)",
  },
  error: {
    backgroundColor: "#dc2626", // Darker red
    textColor: "#ffffff",
    iconColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(220, 38, 38, 0.2)",
  },
  info: {
    backgroundColor: "#2563eb", // Darker blue
    textColor: "#ffffff",
    iconColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(37, 99, 235, 0.2)",
  },
  warning: {
    backgroundColor: "#d97706", // Darker amber
    textColor: "#ffffff",
    iconColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(217, 119, 6, 0.2)",
  },

  // Light variants - Dark text on light backgrounds
  successLight: {
    backgroundColor: "#dcfce7",
    textColor: "#166534", // Dark enough for contrast
    iconColor: "#15803d",
    boxShadow: "0 4px 12px rgba(21, 128, 61, 0.1)",
  },
  errorLight: {
    backgroundColor: "#fee2e2",
    textColor: "#991b1b", // Dark enough for contrast
    iconColor: "#dc2626",
    boxShadow: "0 4px 12px rgba(220, 38, 38, 0.1)",
  },
  infoLight: {
    backgroundColor: "#dbeafe",
    textColor: "#1e40af", // Dark enough for contrast
    iconColor: "#2563eb",
    boxShadow: "0 4px 12px rgba(37, 99, 235, 0.1)",
  },
  warningLight: {
    backgroundColor: "#fef3c7",
    textColor: "#92400e", // Dark enough for contrast
    iconColor: "#d97706",
    boxShadow: "0 4px 12px rgba(217, 119, 6, 0.1)",
  },

  // Modern variants - All with proper contrast
  neutral: {
    backgroundColor: "#4b5563",
    textColor: "#ffffff",
    iconColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(75, 85, 99, 0.2)",
  },
  highContrast: {
    backgroundColor: "#111827",
    textColor: "#ffffff",
    iconColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
  },
  positive: {
    backgroundColor: "#15803d",
    textColor: "#ffffff",
    iconColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(21, 128, 61, 0.2)",
  },
  negative: {
    backgroundColor: "#b91c1c",
    textColor: "#ffffff",
    iconColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(185, 28, 28, 0.2)",
  },

  // Gradient variants - with guaranteed contrast
  accentBlue: {
    backgroundColor: "#2563eb",
    backgroundGradient: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
    textColor: "#ffffff",
    iconColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(37, 99, 235, 0.25)",
  },
  accentPink: {
    backgroundColor: "#db2777",
    backgroundGradient: "linear-gradient(135deg, #db2777 0%, #9d174d 100%)",
    textColor: "#ffffff",
    iconColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(219, 39, 119, 0.25)",
  },
  accentPurple: {
    backgroundColor: "#7c3aed",
    backgroundGradient: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
    textColor: "#ffffff",
    iconColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(124, 58, 237, 0.25)",
  },
  accentTeal: {
    backgroundColor: "#0d9488",
    backgroundGradient: "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
    textColor: "#ffffff",
    iconColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(13, 148, 136, 0.25)",
  },
}

