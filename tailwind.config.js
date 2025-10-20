/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midBrown: "#98683b",
        darkBrown: "#3a2817",
        lightBrown: "#cba370",
        backgroundButton: "#343435",
        text: "#434343",
      },
    },
  },
  plugins: [],
};
