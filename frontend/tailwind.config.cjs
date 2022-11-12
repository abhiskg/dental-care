/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#0FCFEC",
          100: "#19D3AE",
        },
        secondary: "#3A4256",
      },
    },
  },
  plugins: [],
};
