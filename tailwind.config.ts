import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      copperGothic: ["var(--copper-gothic)", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-bg": "url('../public/assets/brave-bg.png')",
      },
    },
  },
  plugins: [],
};
export default config;
