/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bg-purple-50': '#F8F8FF',
      }
    },
  },
  plugins: [],
}
