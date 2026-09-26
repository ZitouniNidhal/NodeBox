/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#f97316',
          'orange-light': '#fb923c',
          'orange-dark': '#ea6006',
          green: '#22c55e',
          'green-light': '#4ade80',
          'green-dark': '#16a34a',
          black: '#0a0a0a',
          card: '#111111',
          border: '#1e1e1e',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'float-a': 'floatA 7s ease-in-out infinite',
        'float-b': 'floatB 5s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.2s ease-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
    },
  },
  plugins: [],
}
