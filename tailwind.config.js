/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      blue: "#1260A0",
      orange: "#F37335",
      // ...
    },
  },
  plugins: [require("daisyui")],
};
