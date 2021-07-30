module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        karla: ['"Karla"'],
        merriweather: ['"Merriweather"'],
      },
      colors: {
        "wa-color": "#25D366",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
