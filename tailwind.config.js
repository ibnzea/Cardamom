/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        handwriting: ['"Gloria Hallelujah"', 'cursive'],
        playfair: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        dancing: ['"Dancing Script"', 'cursive'], // ← added here
      },
    },
  },
  plugins: [],
}
