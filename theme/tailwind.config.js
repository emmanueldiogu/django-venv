/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    // Templates within theme app (e.g. base.html)
    './templates/**/*.html',
    // Templates in other apps
    '../polls/templates/**/*.html',
    '../website/templates/**/*.html',
    // Ignore files in node_modules
    '!../../**/node_modules',
    // Include JavaScript files that might contain Tailwind CSS classes
    '../../**/*.js',
    // Include Python files that might contain Tailwind CSS classes
    '../../**/*.py'
  ],
  safelist: ["dark"],
  darkMode: "media",
  theme: {
    fontFamily: {
      body: ["Poppins", "sans-serif"],
      sans: ["Nunito", ...defaultTheme.fontFamily.sans],
    },

    screens: {
      xs: "375px",
      // => @media (min-width: 375px) { ... }

      sm: "540px",
      // => @media (min-width: 540px) { ... }

      md: "720px",
      // => @media (min-width: 720px) { ... }

      lg: "960px",
      // => @media (min-width: 960px) { ... }

      xl: "1140px",
      // => @media (min-width: 1140px) { ... }

      "2xl": "1320px",
      // => @media (min-width: 1320px) { ... }
    },

    container: {
      center: true,
      padding: "16px",
    },

    colors: {
      transparent: "transparent",
      primary: '#196b57',
      secondary: '#34ad54',
      "green-light": "#cceeec",
      green: "#007c85",
      "green-dark": "#0c4a26",
      "blue-light": "#b3d6f1",
      blue: "#0074d1",
      "blue-dark": "#091e3e",
      black: "#000000",
      white: "#ffffff",
      "yellow-lighter": "#f6e8c6",
      "yellow-light": "#f8edd0",
      yellow: "#f4d06f",
      "yellow-dark": "#daa512",
      "grey-lightest": "#eff0f3",
      "grey-lighter": "#eceef1",
      "grey-light": "#ccd7e0",
      grey: "#adb6c4",
    },

    border: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
    },

    extend: {

      boxShadow: {
        input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
        pricing: "0px 39px 23px -27px rgba(0, 0, 0, 0.04)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        "testimonial-4": "0px 60px 120px -20px #EBEFFD",
        "testimonial-5": "0px 10px 39px rgba(92, 115, 160, 0.08)",
        "contact-3": "0px 4px 28px rgba(0, 0, 0, 0.08)",
        "contact-6": "0px 2px 4px rgba(0, 0, 0, 0.05)",
        card: "0px 1px 3px rgba(0, 0, 0, 0.12)",
        "card-2": "0px 1px 10px -2px rgba(0, 0, 0, 0.15)",
      },
  
      fontSize: {
        xs: ".875rem",
        tiny: ".875rem",
        sm: "1rem",
        base: "1.125rem",
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "1.875rem",
        "3xl": "2.25rem",
        "4xl": "3rem",
        "5xl": "4rem",
        "6xl": "5rem",
        "7xl": "6rem",
      },

      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        76: "19rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
        140: "35rem",
        144: "36rem",
        148: "37rem",
        152: "38rem",
        156: "39rem",
        160: "40rem",
        164: "41rem",
        168: "42rem",
        172: "43rem",
        176: "44rem",
        180: "45rem",
        184: "46rem",
        188: "47rem",
        190: "48rem",
        194: "49rem",
        200: "50rem",
        204: "51rem",
      },

      inset: {
        50: "50%",
        100: "100%",
      },

      zIndex: {
        "-1": "-1",
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.primary"),
            a: {
              fontWeight: theme("fontWeight.semibold"),
              color: theme("colors.green"),
              textDecoration: "underline",
              transition: "color 300ms",
              "&:hover": {
                color: theme("colors.primary"),
              },
            },
            "p, li": {
              fontWeight: theme("fontWeight.light"),
            },
            "h1, h2, h3, h4, h5, h6": {
              fontWeight: theme("fontWeight.semibold"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.primary"),
            },
            blockquote: {
              borderLeftWidth: "1rem",
              borderColor: theme("colors.green-dark"),
              borderRadius: "3px",
              backgroundColor: theme("colors.green-light"),
              padding: `${theme("spacing.4")} ${theme("spacing.6")}`,
              color: theme("colors.green"),
              fontStyle: "normal",
              p: {
                margin: 0,
                fontWeight: theme("fontWeight.normal"),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.white"),
            a: {
              color: theme("colors.secondary"),
              "&:hover": {
                color: theme("colors.green"),
              },
            },
            "h1, h2, h3, h4, h5, h6": {
              color: theme("colors.white"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.secondary"),
            },
          },
        },
      }),

    },

  },
  plugins: [],
}
