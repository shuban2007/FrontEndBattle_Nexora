import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background-raw) / <alpha-value>)",
        foreground: "rgb(var(--foreground-raw) / <alpha-value>)",
        card: "rgb(var(--card-bg-raw) / <alpha-value>)",
        "card-border": "rgb(var(--card-border-raw) / <alpha-value>)",
        arctic: "rgb(var(--arctic-powder) / <alpha-value>)",
        mint: "rgb(var(--mystic-mint) / <alpha-value>)",
        forsythia: "rgb(var(--forsythia) / <alpha-value>)",
        "deep-saffron": "rgb(var(--deep-saffron) / <alpha-value>)",
        nocturnal: "rgb(var(--nocturnal-expedition) / <alpha-value>)",
        oceanic: "rgb(var(--oceanic-noir) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "SFMono-Regular"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
