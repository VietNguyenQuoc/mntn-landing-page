/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        secondary: "#FBD784",
        theme: "#0b1d26",
      },
      fontFamily: {
        serif: "Chronicle Display",
        "sans-regular": "Gilroy-Bold",
        "sans-medium": "Gilroy-Medium",
        sans: "Gilroy-Bold",
      },
      fontSize: {
        titan: "12rem",
      },
      letterSpacing: {
        widest: ".3em",
      },
      backgroundImage: {
        hero: "url('/img/hero.jpeg')",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
