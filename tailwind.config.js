const defaultTheme =require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        'comf': ['Comfortaa', 'sans-serif'],
        'lora': ['Lora', 'serif'],
        'nun': ['Nunito', 'sans-serif'],
        'libre': ['Libre Baskerville', 'serif'],
        'monte': ["Montserrat", "sans-serif"],
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
