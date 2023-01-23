/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        home: "#1F2937",
        base2: "#EEEEEE",
        yellow: "#FFC600",
        color1: "#283754",
        color2: "#030303",
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};
