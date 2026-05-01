/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0a192f',
          teal: '#64ffda',
          emerald: '#10b981',
          softBlue: '#8892b0',
          lightestNavy: '#112240',
          slate: '#a8b2d1',
          lightestSlate: '#ccd6f6',
          white: '#e6f1ff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Satoshi', 'Geist', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
