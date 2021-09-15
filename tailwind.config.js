const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        fuchsia: {
          ...colors.fuchsia,
          DEFAULT: "#ff00ff",
        },
        blue: {
          ...colors.blue,
          DEFAULT: "#0044ff",
        },
      },
      animation: {
        title1: "title1 8s infinite",
        title2: "title2 8s infinite",
        title3: "title3 8s infinite",
        "pulse-gradient": "gradientpulse 3s infinite",
      },
      keyframes: {
        title1: {
          "0%, 16.667%, 100%": {
            opacity: 1,
          },
          "33.333%, 83.333%": {
            opacity: 0,
          },
        },
        title2: {
          "0%, 16.667%, 66.667%, 100%": {
            opacity: 0,
          },
          "33.333%, 50%": {
            opacity: 1,
          },
        },
        title3: {
          "0%, 50%, 100%": {
            opacity: 0,
          },
          "66.667%, 83.333%": {
            opacity: 1,
          },
        },
        gradientpulse: {
          "0%, 100%": {
            opacity: "30%",
          },
          "50%": {
            opacity: "100%",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
