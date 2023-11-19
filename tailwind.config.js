/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Raleway"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        base: "#001236",
        primary: "#523ff4",
        secondary: "#8375ff",
        accent: "#12b3c2",
        tertiary: "#CEDFFF",
      },
    },
  },
  plugins: [],
};
