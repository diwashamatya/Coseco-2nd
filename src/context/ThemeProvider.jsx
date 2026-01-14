import { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";

// Define multiple themes
// const themes = {
//   light: {
//     primary: "#2563eb",
//     secondary: "#9333ea",
//     background: "#ffffff",
//     surface: "#f3f4f6",
//     textPrimary: "#111827",
//     textSecondary: "#374151",
//     border: "#e5e7eb",

//     // --- New Button Styles ---
//     buttonBg: "#2563eb",
//     buttonText: "#ffffff",
//     buttonHover: "#1d4ed8",
//     buttonActive: "#1e40af",
//     buttonBorder: "transparent",

//     // --- New Card & Border Styles ---
//     cardBg: "#ffffff",
//     cardBorder: "#e5e7eb",
//     cardShadow:
//       "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
//     cardHoverShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
//     inputFocus: "#3b82f6",

//     glassBackground: "rgba(255, 255, 255, 0.85)",
//     glassBorder: "rgba(229, 231, 235, 0.2)",
//     glassShadow: "0 8px 32px rgba(31, 38, 135, 0.1)",
//   },
//   dark: {
//     primary: "#3b82f6",
//     secondary: "#8b5cf6",
//     background: "#0f172a",
//     surface: "#1e293b",
//     textPrimary: "#f8fafc",
//     textSecondary: "#cbd5f5",
//     border: "#334155",

//     // --- New Button Styles ---
//     buttonBg: "#3b82f6",
//     buttonText: "#ffffff",
//     buttonHover: "#60a5fa",
//     buttonActive: "#2563eb",
//     buttonBorder: "transparent",

//     // --- New Card & Border Styles ---
//     cardBg: "#1e293b",
//     cardBorder: "#334155",
//     cardShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.5)",
//     cardHoverShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.4)",
//     inputFocus: "#60a5fa",
    
//     glassBackground: "rgba(30, 41, 59, 0.85)",
//     glassBorder: "rgba(51, 65, 85, 0.2)",
//     glassShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
//   },
// };



const themes = {
  light: {
    primary: "#2563eb",
    secondary: "#9333ea",
    background: "#ffffff",
    surface: "#f3f4f6",
    textPrimary: "#111827",
    textSecondary: "#4b5563", // Improved contrast
    border: "#e5e7eb",

    // --- Button Styles ---
    buttonBg: "#2563eb",
    buttonText: "#ffffff",
    buttonHover: "#1d4ed8",
    buttonActive: "#1e40af",
    buttonBorder: "transparent",

    /* 🔥 Decorative / Ghost Elements */
    ghostNumber: "rgba(37, 99, 235, 0.08)", // subtle blue
    divider: "rgba(229, 231, 235, 0.7)",

    // --- Card & Border Styles ---
    cardBg: "#ffffff",
    cardBorder: "#e5e7eb",
    cardShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    cardHoverShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    inputFocus: "#3b82f6",

    // --- Typography Enhancements ---
    textAccent: "#1e40af", // For gradient accents
    textSubtle: "#6b7280", // For less important text

    glassBackground: "rgba(255, 255, 255, 0.85)",
    glassBorder: "rgba(229, 231, 235, 0.2)",
    glassShadow: "0 8px 32px rgba(31, 38, 135, 0.1)",
  },
  dark: {
    primary: "#3b82f6",
    secondary: "#8b5cf6",
    background: "#0f172a",
    surface: "#1e293b",
    textPrimary: "#f8fafc",
    textSecondary: "#e2e8f0", // Brighter for better readability
    border: "#334155",

    // --- Button Styles ---
    buttonBg: "#3b82f6",
    buttonText: "#ffffff",
    buttonHover: "#60a5fa",
    buttonActive: "#2563eb",
    buttonBorder: "transparent",

    /* 🔥 Decorative / Ghost Elements */
    ghostNumber: "rgba(148, 163, 184, 0.12)", // soft slate
    divider: "rgba(51, 65, 85, 0.7)",

    // --- Card & Border Styles ---
    cardBg: "rgba(30, 41, 59, 0.8)",
    cardBorder: "rgba(51, 65, 85, 0.3)",
    cardShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
    cardHoverShadow: "0 12px 40px rgba(0, 0, 0, 0.6)",
    inputFocus: "#60a5fa",

    // --- Typography Enhancements ---
    textAccent: "#93c5fd", // For gradient accents
    textSubtle: "#94a3b8", // For less important text

    glassBackground: "rgba(30, 41, 59, 0.85)",
    glassBorder: "rgba(51, 65, 85, 0.2)",
    glassShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
  },
};
const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("light");
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    const newThemeName = themeName === "light" ? "dark" : "light";
    setThemeName(newThemeName);
    setTheme(themes[newThemeName]);
  };

  // Update CSS variables dynamically
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ themeName, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
