/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "0%": { transform: "translateX(calc(-50% - 20px))" },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 15s linear infinite",
      },
    },
  },
  plugins: [],
};
