/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#020420',
        primary: '#00DC82',
        secondary: '#0F172A',
        border: '#335577'
      }
    },
  },
  plugins: [],
}