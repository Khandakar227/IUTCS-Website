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
        "primary-2": "#0b1627",
        primary: '#040D1B',
        secondary: '#0F1E34'
      }
    },
  },
  plugins: [],
}

