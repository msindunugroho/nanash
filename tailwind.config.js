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
        "50": "#e6e6eb",
        "100": "#ccccd6",
        "200": "#9999ae",
        "300": "#666785",
        "400": "#33345d",
        "500": "#000134",
        "600": "#00012a",
        "700": "#00011f",
        "800": "#000015",
        "900": "#00000a"
      },
      secondary: {
        "50": "#e6ecf3",
        "100": "#ccd8e8",
        "200": "#9ab2d0",
        "300": "#678bb9",
        "400": "#3565a1",
        "500": "#023e8a",
        "600": "#02326e",
        "700": "#012553",
        "800": "#011937",
        "900": "#000c1c"
      },
      tertiary: {
        "50": "#e6f8fb",
        "100": "#ccf0f7",
        "200": "#99e1ef",
        "300": "#66d2e8",
        "400": "#33c3e0",
        "500": "#00b4d8",
        "600": "#0090ad",
        "700": "#006c82",
        "800": "#004856",
        "900": "#00242b"
      },
      accent: {
        "50": "#edfafc",
        "100": "#daf4fa",
        "200": "#b6eaf4",
        "300": "#91dfef",
        "400": "#6dd5e9",
        "500": "#48cae4",
        "600": "#3aa2b6",
        "700": "#2b7989",
        "800": "#1d515b",
        "900": "#0e282e"
      },
      neutral: {
        "50": "#fafefe",
        "100": "#f4fcfe",
        "200": "#eaf9fc",
        "300": "#dff6fb",
        "400": "#d5f3f9",
        "500": "#caf0f8",
        "600": "#a2c0c6",
        "700": "#799095",
        "800": "#516063",
        "900": "#283032"
      },
      dark: {
        "50": "#e6e6eb",
        "100": "#ccccd6",
        "200": "#9999ae",
        "300": "#666785",
        "400": "#33345d",
        "500": "#000134",
        "600": "#00012a",
        "700": "#00011f",
        "800": "#000015",
        "900": "#00000a"
      },
      light: {
        "50": "#ffffff",
        "100": "#feffff",
        "200": "#fdffff",
        "300": "#fcfefe",
        "400": "#fbfefe",
        "500": "#fafefe",
        "600": "#c8cbcb",
        "700": "#969898",
        "800": "#646666",
        "900": "#323333"
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
      neutral: theme("colors.neutral"),
      light: theme("colors.light"),
      dark: theme("colors.dark"),
      transparent: theme("colors.transparent"),
    }),
    backgroundColor: (theme) => ({
      primary: theme("colors.primary"),
      secondary: theme("colors.secondary"),
      tertiary: theme("colors.tertiary"),
      accent: theme("colors.accent"),
      neutral: theme("colors.neutral"),
      light: theme("colors.light"),
      dark: theme("colors.dark"),
      transparent: theme("colors.transparent"),
    }),
    fill: (theme) => ({
      primary: theme("colors.primary"),
      secondary: theme("colors.secondary"),
      tertiary: theme("colors.tertiary"),
      accent: theme("colors.accent"),
      neutral: theme("colors.neutral"),
      light: theme("colors.light"),
      dark: theme("colors.dark"),
      transparent: theme("colors.transparent"),
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
