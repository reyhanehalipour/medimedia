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
