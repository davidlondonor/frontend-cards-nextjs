module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        graySpecial: "#506690",
        primary: "#335EEA",
        grayBackground: "#E5E5E5",
        blackText: "#12263f",
        colorText: "#869AB8",
        blackModal: "#161C2D",
      },
      width: {
        wSearchBar: "1040px",
        wCard: "320px",
        inputLogin: "295px",
        modalImage: "860px",
        imagenLogin: "447.26px",
      },
      height: {
        hCard: "439px",
        hModal: "426px",
      },
      borderRadius: {
        card: "10rem",
      },
      maxWidth: {
        lg: "1040px",
        md: "680px",
      },
      minWidth: {
        sm: "340px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
