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
        primary: {
          'DEFAULT': '#5ed71d',
          '50': '#f2fde8',
          '100': '#e0fbcc',
          '200': '#c2f79f',
          '300': '#9bee68',
          '400': '#77e13a',
          '500': '#5ed71d',
          '600': '#409f11',
          '700': '#337912',
          '800': '#2c6014',
          '900': '#275116',
          '950': '#102d06',
        },
        secondary: "#961DD7",
      },
    },
  },
  plugins: [],
} satisfies Config;
