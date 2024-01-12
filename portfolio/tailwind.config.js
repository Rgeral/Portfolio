/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        Genos: ['"Genos", "sans-serif"'],
      },
      transitionDuration: {
        2000: "2000ms",
      },
      weight: {
        128: "32rem",
      },
      safelist: 'animate-[fade-in-down_1s_ease-in-out]',
      backgroundImage: {
        'hero-pattern': "url('images/yellow-back.png')",
      }
    },

  },

  plugins: [require("tw-elements/dist/plugin.cjs")],
};
