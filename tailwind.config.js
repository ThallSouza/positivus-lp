const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      'mont-thin': ['Montserrat Alternates', 'sans-serif'],
      colors: {
  			background: '#F3F2EC',
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()]
}

