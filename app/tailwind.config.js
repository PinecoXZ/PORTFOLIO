import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0a0b0d',
        foreground: '#e2e8f0',
        lime: {
          DEFAULT: '#a3e635',
          accent: '#a3e635',
          hover: '#bef264',
          glow: 'rgba(163, 230, 53, 0.2)',
        },
        surface: {
          950: '#0a0b0d',
          900: '#111215',
          850: '#16181d',
          800: '#1e2026',
          700: '#2b2e37',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
