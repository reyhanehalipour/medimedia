/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#F59E0B',
        accent: '#10B981',
        background: '#F3F4F6',
        text: '#111827',
      },
    },
  },
  plugins: [],
};
