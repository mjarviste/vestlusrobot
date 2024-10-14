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
        primary: "var(--primary)",
        foreground: "var(--foreground)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
      },
      lineHeight: {
        "12": "3rem",
      },
      fontFamily: {
        ubuntu: ['Ubuntu-Regular', 'sans-serif'],
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      },
    },
  },
  plugins: [],
};
export default config;
