/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: { preflight: false },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dinBold: ["DINCondensed", "sans-serif"],
        gillSans: ["GillSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
