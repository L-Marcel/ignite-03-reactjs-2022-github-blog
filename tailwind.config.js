/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: true,
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,css,scss}", 
    "!./node_modules",
    "./app/**/*.{html,js,jsx,ts,tsx,css,scss}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "nunito": ["var(--nunito-font)", "sans-serif"]
      },
      colors: {
        blue: "#3294f8",
        "base-title": "#e7edf4",
        "base-subtitle": "#c4d4e3",
        "base-text": "#afc2d4",
        "base-span": "#7b96b2",
        "base-label": "#3a536b",
        "base-border": "#1c2f41",
        "base-post": "#112131",
        "base-profile": "#0b1b2b",
        "base-background": "#071422",
        "base-input": "#040f1a"
      }
    },
  },
  variants: {
    extends: {
      scrollbar: ["dark"]
    }
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};
