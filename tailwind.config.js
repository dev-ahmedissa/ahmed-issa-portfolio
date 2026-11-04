/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0a0a',
          800: '#141414',
          700: '#1a1a1a',
          600: '#1f1f1f',
          500: '#222',
          400: '#2a2a2a',
          300: '#333',
        }
      }
    },
  },
  plugins: [],
}
