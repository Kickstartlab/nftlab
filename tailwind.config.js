/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      
      blue: {
        "50": "#A09FAF",
        "100": "#3749E9",
      },
      purple: {
        "50": "#E690F3",
        "100": "#F13BFA",
      },
      white: {
        "50": "#F7F7F7",
        "100": "#fff",
      },
      gray: {
        "50": "#565660",
        "100": "#BDBDBD",
      },
    },
    fontFamily: {
      'dmsans': ["'DM Sans', sans-serif"],
      'inter': ["'Inter', sans-serif"]
    }
  },
  plugins: [],
}
