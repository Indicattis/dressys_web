import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        'gradient-primary': 'linear-gradient(to top, #F5618B, #f79db6)',
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          
      },
      
      colors: {
        blue: "#5d5761",
        pink: "#F5618B",
        sweetPink: "#f79db6",
        dark: "#131313",
        gray: "#242424",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'hunters': ['hunters', 'sans-serif'],
        'jetbrains': ['jetbrains', 'sans-serif'],
        'norms': ['norms', 'sans-serif'],
        'norms-thin': ['norms-thin', 'sans-serif']
      },
    },
  },
  plugins: [],
};
export default config;
