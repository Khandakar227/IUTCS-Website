/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "noto-sans": ["Noto Sans Bengali", "sans-serif"],
      },
      colors: {
        primary: '#04080b',
        secondary: '#0F1E34'
      }
    },
  },
  plugins: [],
}

