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
        // @see https://zenn.dev/hayato94087/articles/9b7f95666806be
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
        secondary: {
          "DEFAULT": "#bc50fc",
          '50': '#fbf5ff',
          '100': '#f6e7ff',
          '200': '#eed4ff',
          '300': '#e1b2ff',
          '400': '#cf80ff',
          '500': '#bc50fc',
          '600': '#aa2df0',
          '700': '#961dd7',
          '800': '#7c1dac',
          '900': '#65198a',
          '950': '#460467',
        },
        stone: {
          '750': '#2E2E2E'
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
