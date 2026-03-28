import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spirit: {
          50: "#FBF8F6",
          100: "#F5EFEB",
          600: "#8B3A3A",
          700: "#7A2E2E",
          800: "#5D2020",
          900: "#3D1515",
        },
        accent: {
          gold: "#D4AF37",
          silver: "#C0C0C0",
        },
        steel: "#1F3A5C",
      },
      backgroundImage: {
        "hero-pattern": `linear-gradient(135deg, rgba(91, 32, 32, 0.05) 0%, rgba(31, 58, 92, 0.03) 100%)`,
        "diagonal-lines":
          "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(91, 32, 32, 0.02) 10px, rgba(91, 32, 32, 0.02) 20px)",
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
