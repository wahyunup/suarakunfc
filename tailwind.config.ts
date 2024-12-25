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
        primary: "#345FCB",
        secondary: "#DF3434",
        placeholder: "#C2C2C2"
      },
      fontSize: {
        heading1: "100px",
        font__placeholder: "12px"
      },
      backgroundColor: {
        input__primary: "#FFFFFF",
      },
      borderRadius: {
        input__radius: "10px",
      },
      borderColor: {
        input__primary: "#E8E8E8",
      },
    },
  },
  plugins: [],
} satisfies Config;
