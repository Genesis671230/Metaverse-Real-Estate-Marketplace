/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "temp-red": "#be2128",
        "temp-blue": "#435ca8",
        "temp-gray": "#868ea6",
        "temp-gray2": "#afafaf",
        "temp-border-gray": "#d1d3de",
      },
      backgroundImage: {
        "nature-light": "url('/nature-light.jpg')",
        "nature-dark": "url('/nature-dark.jpg')",
      },
      fontFamily:{
        unbounded: ["Unbounded", "cursive"],
        anton:['Anton', 'sans-serif'],
        hanken:['Hanken Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
};
