/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2a68ff",
        text: "#2f2b36",
        shadow: "#f7f8f9",
        grey: "#f1f4f8",
      },
    },
  },
  plugins: [],
};
