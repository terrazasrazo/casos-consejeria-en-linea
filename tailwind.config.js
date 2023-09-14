/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cc_gold: "#a16f24",
        cc_blue: "#28639d",
      },
    },
  },
  plugins: [],
}