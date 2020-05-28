/* eslint-disable */

module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    fontFamily: {
      sans:
        '"Roboto Condensed", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: 'Arvo, Georgia, Cambria, "Times New Roman", Times, serif',
    },
  },
  variants: {},
  plugins: [
    require("tailwindcss-animatecss")({
      classes: [
        "animate__animated",
        "animate__fadeIn",
        "animate__fadeInLeft",
        "animate__flipInX",
        "animate__zoomIn",
      ],
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
      variants: ["responsive", "hover", "reduced-motion"],
    }),
  ],
};
