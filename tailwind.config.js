/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      midnight: "#282828",
      white: "#fff",
      main: "#ff7352",
      black: "#000",
      gray: "#F6F6F6",
      darkSec: "#161616",
      lightgray: "#EEEEEE",
      blue: "#2E3A59",
    },
    extend: {
      footer: "30% 70%",
    },
    container: {
      center: true,
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
