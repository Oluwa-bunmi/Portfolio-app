/** @type {import('tailwindcss').Config} */


const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['"Dancing Script"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
       
        'heroImage': "url('../src/assets/third.jpg')",
      },
    },
  },
  plugins: [],
};
