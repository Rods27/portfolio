import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx,css}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'night-mode-background': '#0f0f0f',
        'night-mode-text': '#fff',
        'night-mode-yellow': '#F7AB0A',
        'night-mode-background-circles': '#4D4C59',
        'night-mode-card': '#292929',
        'day-mode-background': '#fff',
        'day-mode-text': 'rgb(26,26,26)',
        'day-mode-yellow': '#CA8C05',
        'day-mode-background-circles': '#696977',
        'day-mode-card': '#ECEDF2',
      },
      screens: {
        'height-850': {
          raw: '(max-height: 850px)',
        },
        mobileMd: {
          raw: '(max-width: 650px)',
        },
        mobileSm: {
          raw: '(max-width: 400px)',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
export default config;
