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
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
