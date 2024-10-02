import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sarabun: ['var(--font-sarabun)', 'Arial', 'sans-serif'],
        inter: ['var(--font-inter)', 'Arial', 'sans-serif'],
        arial: ['Arial', 'Helvetica', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "main-color": "var(--main-color)",
        "light-hover": "var(--light-hover)",
        "dark-color": "var(--dark-color)",
        grey: "var(--grey)",
        "light-grey": "var(--light-grey)",
        "border-grey": "var(--border-grey)",
        "grey-dark": "var(--border-grey-dark)",
        "grey-text": "var(--grey-text)",
      },
      transitionDuration: {
        "4000": "4000ms",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
