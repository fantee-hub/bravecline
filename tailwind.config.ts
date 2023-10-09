import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ssm: "400px",

      smm: "500px",

      sm: "640px",

      md: "775px",

      lg: "998px",

      xl: "1280px",

      "1.5xl": "1400px",

      "2xl": "1500px",

      "3xl": "1600px",

      "4xl": "1700px",

      "5xl": "1800px",
    },
    fontFamily: {
      copperGothic: ["var(--copper-gothic)", "sans-serif"],
      caveat: ["var(--font-caveat)", "sans-serif"],
      centuryGothic: ["var(--centuryGothic)", "sans-serif"],
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
