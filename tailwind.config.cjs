/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgLogo:
          "http://www.abbracciorestaurante.com.br/assets/frontend/img/structure/abbraccio_logo.svg",
      },
      backgroundSize: {
        bgLogoSize: "18rem 5rem",
      },
    },
  },
  plugins: [],
};
