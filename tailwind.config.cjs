/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        clrGrey: "hsl(212, 33%, 89%)",
        clrBlack: "#222",
        darkBlue: "hsl(218, 14%, 22%)",
        white: "hsl(0, 0%, 100%)",
        light: "rgb(242,242,242)",
        /* new colors */
        darkBlue2: "rgb(58,57,93)",
        blue: "rgb(104, 73, 230)",
        blue200: "#b4a4f3",
        lightBlue: "rgba(104, 73, 230, 0.3)",
        offWhite: "rgb(248, 246, 247)",
        darkGray: "rgb(127, 125, 152)",
        lightGray: "rgb(184, 184, 193)",
        veryLightGray: "rgb(206, 199, 209)",
        veryLightGray2: "#f0efff",
        hover: "rgba(0,0,0,0.5)",
        hover2: "rgba(0,0,0,0.6)",
        /* dark theme */
        dark: "rgb(15,23,42)",
        mediumGrey: "rgb(100,116,139)",
        darkGrey: "rgb(42,52,70)",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      gridTemplateColumns: {
        autoFit: "repeat(auto-fit, minmax(20rem, 1fr))",
      },
      gridAutoRows: {
        autoRow: "minmax(5rem, auto)",
      },
      boxShadow: {
        calm: "0 0 5px #fff",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
      },
    },
  },
  plugins: [],
};
