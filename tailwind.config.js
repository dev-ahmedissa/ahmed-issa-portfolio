/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          950: "#0a0a0a",
          900: "#111111",
          850: "#161616",
          800: "#1a1a1a",
          700: "#1f1f1f",
          600: "#222222",
          500: "#2a2a2a",
          400: "#3a3a3a",
          300: "#555555",
        },
      },
      fontFamily: {
        mono: ["Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};
