/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg": "url('./src/assets/bg.jpg')",
      },
      backgroundSize: {
        "banner-bg": "cover",
      },
      // colors: {
      //   "background-dark": "#111525",
      //   "background-light": "#161B2E",
      //   "nav-text": "#4F4F4F",
      //   "nav-text-hover": "#000000",
      //   "nav-text-active": "#000000",
      //   "color-pink": "#C95DBD",
      // },
    },
  },
  plugins: [require("daisyui")],
};
