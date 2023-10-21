/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins'", 'system-ui', 'sans-erif'],
      },
      colors: {
        "primary-2": "#0b1627",
        "primary-800": "#040d28",
        primary: '#040D1B',
        secondary: '#0F1E34'
      }
    }
  },
  plugins: []
};