/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif']
      },
      colors: {
        primary: '#04080b',
        secondary: '#0F1E34'
      }
    },
  },
  plugins: [],
}

