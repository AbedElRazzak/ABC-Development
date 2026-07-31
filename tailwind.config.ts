import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          "Inter",
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        bg: "var(--bg)",
        "bg-alt": "var(--bg-alt)",
        surface: "var(--surface)",
        text: "var(--text)",
        "text-2": "var(--text-2)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        border: "var(--border)",
      },
      borderRadius: {
        lg2: "28px",
        md2: "20px",
      },
      keyframes: {
        float1: {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(40px,60px)" },
        },
        float2: {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(-50px,40px)" },
        },
        spinWrap: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        counterSpin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        float1: "float1 18s ease-in-out infinite",
        float2: "float2 22s ease-in-out infinite",
        spinWrap: "spinWrap 26s linear infinite",
        counterSpin: "counterSpin 26s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
