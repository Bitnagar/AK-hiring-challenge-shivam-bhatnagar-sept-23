/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ak-yellow-light": "##FFD37D",
        "ak-yellow-dark": "#F7B348",
        "ak-gray-light": "#999999",
        "ak-gray-dark": "#666666",
        "ak-black-primary": "#000000",
      },
      screens: {
        "sm": "320px",
        "md": "560px",
        "base": "760px",
        "lg": "1000px",
        "xl": "1200px",
        "2xl": "1500px",
      },
    },
  },
  plugins: [],
};
