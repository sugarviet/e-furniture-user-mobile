/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackPrimary: "#222",
        blackSecondary: "#191915",
        whiteSmoke: "#f9f9f9",
        red: "#bf3535",
        red1: "#ff7272",
        red2: "#fccfc4",
        grey0: "#3e3d3e",
        grey1: "#666",
        grey2: "#73726e",
        grey3: "#aaa",
        grey4: "#cfcfcf",
        grey5: "#ebebe6",
        grey6: "#f8f8f8",
        border: "#c3c2bc",
      },
      fontFamily: {
        urbanistThin: "Urbanist-Thin",
        urbanistLight: "Urbanist-Light",
        urbanistRegular: "Urbanist-Regular",
        urbanistMedium: "Urbanist-Medium",
        urbanistSemiBold: "Urbanist-SemiBold",
        urbanistBold: "Urbanist-Bold",
        urbanistExtraBold: "Urbanist-ExtraBold",
        urbanistBlack: "Urbanist-Black",
      },
    },
  },
  plugins: [],
};
