/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  // Add "./src/**/*.{ts,tsx}" if the project contains files with ".ts" or ".tsx" extensions
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    // breakpoints
    screens: {
      sm: "568px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      primary: {
        100: "#000266",
        200: "#000152",
        300: "#000134",
        400: "#000129",
        500: "#000014",
      },
      secondary: {
        100: "#0350B5",
        200: "#0247A1",
        300: "#023E8A",
        400: "#023579",
        500: "#022C64",
      },
      tertiary: {
        100: "#0AD6FF",
        200: "#00CCF5",
        300: "#00B4D8",
        400: "#00AACC",
        500: "#0099B8",
      },
      accent: {
        100: "#71D6EA",
        200: "#5FD0E7",
        300: "#48CAE4",
        400: "#3CC6E2",
        500: "#2AC1DF",
      },
      netural: {
        100: "#EDFAFD",
        200: "#DBF5FA",
        300: "#CAF0F8",
        400: "#B7EBF6",
        500: "#A5E6F3",
      },
      transparent: {
        light: {
          0: "rgba(255, 255, 255, 0)",
          1: "rgba(255, 255, 255, .2)",
          2: "rgba(255, 255, 255, .4)",
          3: "rgba(255, 255, 255, .6)",
          4: "rgba(255, 255, 255, .8)",
          5: "rgba(255, 255, 255, 10)",
        },
        dark: {
          0: "rgba(0, 0, 0, 0)",
          1: "rgba(0, 0, 0, .2)",
          2: "rgba(0, 0, 0, .4)",
          3: "rgba(0, 0, 0, .6)",
          4: "rgba(0, 0, 0, .8)",
          5: "rgba(0, 0, 0, 10)",
        }
      },
      status: {
        success: "#20D231",
        error: "#CA1F1F",
        warning: "#E3B719",
        info: "#2196F3",
      },
    },
    textColor: (theme) => ({
      primary: theme("colors.primary"),
      secondary: theme("colors.secondary"),
      tertiary: theme("colors.tertiary"),
      accent: theme("colors.accent"),
      light: {
        100: "#FFFFFF",
        200: "#EBEBFF",
        300: "#D6D7FF",
        transparent: theme("colors.transparent.light"),
      },
      dark: {
        100: "#000134",
        200: "#000129",
        300: "#000014",
        transparent: theme("colors.transparent.dark"),
      },
    }),
    backgroundColor: (theme) => ({
      primary: theme("colors.primary"),
      secondary: theme("colors.secondary"),
      tertiary: theme("colors.tertiary"),
      accent: theme("colors.accent"),
      transparent: theme("colors.transparent"),
      light: {
        100: "#FFFFFF",
        200: "#EDFAFD",
        300: "#DBF5FA",
      },
      dark: {
        100: "#072E36",
        200: "#051F24",
        300: "#020F12",
      },
    }),
    fill: (theme) => ({
      primary: theme("colors.primary"),
      secondary: theme("colors.secondary"),
      tertiary: theme("colors.tertiary"),
      accent: theme("colors.accent"),
      light: theme("colors.light.bg"),
      dark: theme("colors.dark.bg"),
    }),
    fontFamily: {
      poppins: ["Poppins", "serif"],
      "bruno_ace_sc": ["Bruno Ace SC", "Poppins", "serif"],
    },
    fontSize: {
      "4xs": ".375rem", // 6px
      "3xs": ".5rem", // 8px
      "2xs": ".625rem", // 10px
      xs: ".75rem", // 12px
      sm: ".875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.375rem", // 22px
      "3xl": "1.5rem", // 24px
      "4xl": "1.625rem", // 26px
      "5xl": "1.75rem", // 28px
      "6xl": "1.875rem", // 30px
      "7xl": "2rem", // 32px
      "8xl": "2.125rem", // 34px
      "9xl": "2.25rem", // 36px
      "10xl": "2.375rem", // 38px
      "11xl": "2.5rem", // 40px
      "12xl": "2.625rem", // 42px
      "13xl": "2.75rem", // 44px
      "14xl": "2.875rem", // 46px
      "15xl": "3rem", // 48px
      "16xl": "3.125rem", // 50px
    },
    borderWidth: {
      default: "1px",
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      7: "7px",
      8: "8px",
      9: "9px",
      10: "10px",
    },
    lineHeight: {
      0: "0rem",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      4.5: "1.125rem",
      5: "1.25rem",
      5.5: "1.375rem",
      6: "1.5rem",
      6.5: "1.625rem",
      7: "1.75rem",
      7.5: "1.875rem",
      8: "2rem",
      8.5: "2.125rem",
      9: "2.25rem",
      9.5: "2.375rem",
      10: "2.5rem",
      11.5: "2.625rem",
      12: "2.75rem",
      12.5: "2.875rem",
      13: "3rem",
      13.5: "3.125rem",
      14: "3.125rem",
      14.5: "3.25rem",
      15: "3.375rem",
      15.5: "3.5rem",
      16: "3.625rem",
      16.5: "3.75rem",
      17: "3.875rem",
      17.5: "4rem",
      18: "4.125rem",
      18.5: "4.25rem",
      19: "4.375rem",
      19.5: "4.5rem",
      20: "4.625rem",
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    },
    extend: {},
  },
  plugins: [],
};
