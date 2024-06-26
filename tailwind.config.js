/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        default: ["Roboto", "Segoe UI", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#388da8",
        secondary: "#cde2ea",
        heading: "#3d4348",
        default: "#3e5055",
      },
      boxShadow: {
        custom: "0px 0px 30px rgba(0, 0, 0, 0.15)",
      },
      screens: {
        xsm: "420px",
      },
    },
  },
  plugins: [],
};
