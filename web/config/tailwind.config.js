/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1700px',
      },
      fontSize: {
        '9xl': '7.25rem',
        '10xl': '10rem',
      },
    },
  },
  plugins: [],
}
