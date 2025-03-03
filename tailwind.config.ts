import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        neutral: {
          150: "#ededed",
          250: "#dbdbdb",
          450: "#808080",
          550: "#5c5c5c",
          850: "#1f1f1f",
          925: "#131313",
        },
      },
      animation: {
        "hand-wave": "hand-wave 1000ms ease-in-out ",
        "rotate-in": "rotate-in 300ms ease-in-out backwards",
        "rotate-out": "rotate-out 350ms ease-in-out forwards",
        popup: "popup 500ms ease-in-out forwards",
        rotate: "full-rotation 40s linear infinite", // used for the blurred circles of the background
      },

      keyframes: {
        "hand-wave": {
          "0%": { transform: "rotate(0deg)" },
          "15%": { transform: "rotate(-16deg)" },
          "40%": { transform: "rotate(0deg)" },
          "65%": { transform: "rotate(-16deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "rotate-in": {
          "0%": { transform: "rotate(90deg) scale(0)" },
          "60%": { transform: "rotate(10deg) scale(1.15)" },
          "100%": { transform: "rotate(0deg) scale(1)" },
        },
        "rotate-out": {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "25%": { transform: "rotate(-30deg) scale(1.15)" },
          "100%": { transform: "rotate(-90deg) scale(0)" },
        },
        popup: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "65%": { transform: "scale(1.1)", opacity: "1" },
          "75%": { transform: "scale(0.98)" },
          "100%": { transform: "scale(1)" },
        },
        "full-rotation": {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
