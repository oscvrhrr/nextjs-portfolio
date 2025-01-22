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
        'light-accent': {
          100: '#FCFDFC',
          200: '#F8FAF8',
          300: '#EFF1EF',
          400: '#E7E9E6',
          500: '#DFE2DF',
          600: '#D7DAD7',
          700: '#CCCFCC',
          800: '#B9BCB8',
          900: '#1D211C',
          1000: '#323731',
          1100: '#60655F',
          1200: '#1D211C',
        },
        'light-gray': {
          100: '#FCFCFD',
          200: '#F9F9FB',
          300: '#EFF0F3',
          400: '#E7E8EC',
          500: '#E0E1E6',
          600: '#D7DAD7',
          700: '#CCCFCC',
          800: '#B9BBC6',
          900: '#8B8D98',
          1000: '#80828D',
          1100: '#62636C',
          1200: '#1E1F24',
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
