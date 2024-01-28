/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        reds: "#EE5454",
        white: "#fff",
        pink: "#A729F5",
        almostDark: "#313E51",
        darkGray: "#3B4D66",
        grays: "#626C7F",
        lightGray: "#ABC1E1",
        almostWhite: "#F4F6FA",
        greens: "#26D782",
      },

      backgroundImage: {
        mobileLightBackground:
          "url('/public/pattern-background-mobile-light.svg')",
        mobileDarkBackground:
          "url('/public/pattern-background-mobile-dark.svg')",
        desktopLightBackground:
          "url('/public/pattern-background-desktop-light.svg')",
        desktopDarkBackground:
          "url('/public/pattern-background-desktop-dark.svg')",
        tabletLightBackground:
          "url('/public/pattern-background-tablet-light.svg')",
        tabletDarkBackground:
          "url('/public/pattern-background-tablet-dark.svg')",
      },
    },
  },
  plugins: [],
};
