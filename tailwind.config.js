/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins : ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        "home-banner" : "url('src/assets/images/banner-home-right.svg')",
      }
    },
  },
  plugins: [],
}