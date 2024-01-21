/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-dark": "#111525",
        "background-light": "#161B2E",
        "nav-text": "#4F4F4F",
        "nav-text-hover": "#000000",
        "nav-text-active": "#000000",
        "color-pink": "#C95DBD",
      },
    },
  },
  plugins: [],
};
