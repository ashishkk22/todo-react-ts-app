/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGreen: "#54e4a4",
        textLight: "#595c6c",
        textComplete: "#d6d8de",
      },
    },
    fontFamily: {
      display: ["Roboto Mono", "monospace"],
    },
  },
};
