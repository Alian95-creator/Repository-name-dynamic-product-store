/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: "#7C3AED",
      secondary: "#06B6D4",
      dark: "#0F172A",
    },
    backgroundImage: {
      "gradient-main": "linear-gradient(135deg, #7C3AED, #06B6D4)",
      "gradient-card": "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0))",
    },
    boxShadow: {
      glow: "0 0 25px rgba(124, 58, 237, 0.5)",
    },
    transitionTimingFunction: {
      smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
}