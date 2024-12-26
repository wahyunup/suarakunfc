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
        disabled: "#7B849B",
        placeholder: "#C2C2C2",
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
        button__radius: "10px",
      },
      borderColor: {
        input__primary: "#E8E8E8",
      },
      boxShadow: {
        button__shadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      width: {
        width__l:"348px",
        width__m:"242px",  
        width__s:"149px",  
        width__xs:"89px",  
      },
      height: {
        height__l:"44px",
        height__m:"38px",
        height__s:"44px",
        height__xs:"58px",
      },

    },
  },
  plugins: [],
} satisfies Config;
