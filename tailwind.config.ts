import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#06080d",
          800: "#0a0e14",
          700: "#0f141c",
          600: "#161c26",
          500: "#202836",
          400: "#2c3645",
        },
        bone: {
          50: "#f6f7f9",
          100: "#e8eaed",
          200: "#c8ccd4",
          300: "#9ca3b1",
        },
        cyan: {
          400: "#00d9ff",
          500: "#1ab3c7",
        },
        magenta: {
          400: "#ff2e93",
          500: "#d61d75",
        },
        phosphor: {
          400: "#ffd60a",
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
