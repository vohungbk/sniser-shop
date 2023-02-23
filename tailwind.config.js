/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#6FDA44",
        "secondary-color": "#2A3538",
        white: "#ffffff",
        gray: "#8D8D8D",
      },
    },
  },
  plugins: [],
};
