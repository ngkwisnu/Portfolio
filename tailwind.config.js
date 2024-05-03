/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': 'Poppins',
        'chivo': 'Chivo'
      },
      backgroundImage: {
        'heroImg': "url('../src/img/hero3.png)"
      }
    },
  },
  plugins: [],
}

