/* eslint-disable */

module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    fontFamily: {
      sans:
        '"Roboto Condensed", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: 'Arvo, Georgia, Cambria, "Times New Roman", Times, serif',
    },
    extend: {
      boxShadow: {
        table: "5px 6px 0px #010b1b",
      },
    },
  },
  variants: {},
  plugins: [],
};
