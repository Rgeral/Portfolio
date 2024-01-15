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
      safelist: 'animate-[fade-in-down_1s_ease-in-out]',
      backgroundImage: {
        'hero-pattern': "url('images/yellow-back.png')",
      },
      screens: {
        's-0' : '0px',
        's-760' : '580px',
        's-700' : '990px'

      }
    },

  },

  plugins: [require("tw-elements/dist/plugin.cjs")],
};
