/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'headFont': ['Gallient','Times New Roman'],
        'dm': ['DM-sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}

