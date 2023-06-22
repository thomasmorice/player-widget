import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#0C0C0F",
      white: "#FDFDFF",
      "light-blue": "#85D1FF",
    },
    extend: {
      fontFamily: {
        ion: "Ion",
        inter: "Inter",
      },
    },
  },
  plugins: [],
} satisfies Config;
