/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'], // Register Fredoka as a usable font class
      },
      animation: {
        'bounce-slow': 'bounce 4s infinite', // Slower bounce effect
      },
    },
  },
  plugins: [],
}
