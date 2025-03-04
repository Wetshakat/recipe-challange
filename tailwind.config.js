/** @type {import('tailwindcss').Config} */
export default {
  content: ["./dist/*.{html,js}"], 
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        youngSerif: ["Young Serif", "serif"], 
      },
    },
  },
  plugins: [],
};
