import { addIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [
    addIconSelectors({
      prefixes: ['carbon'],
      scale: 1.2,
    }),
  ],
};
