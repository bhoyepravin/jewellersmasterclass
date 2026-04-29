/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F97316',
          'orange-light': '#FFF7ED',
          'orange-dark': '#EA6C0A',
          purple: '#480A62',
          'purple-light': '#FAF5FF',
          'purple-mid': '#6B1A8A',
          'purple-dark': '#2E063E',
        },
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        orange: '0 0 20px rgba(249, 115, 22, 0.5)',
        'orange-lg': '0 0 40px rgba(249, 115, 22, 0.6)',
        'card': '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.14)',
      },
      backgroundImage: {
        'orange-gradient': 'linear-gradient(135deg, #F97316, #EA6C0A)',
        'purple-gradient': 'linear-gradient(135deg, #480A62, #6B1A8A)',
        'hero-gradient': 'linear-gradient(160deg, #fff 0%, #FFF7ED 100%)',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(249,115,22,0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(249,115,22,0.8), 0 0 60px rgba(249,115,22,0.3)' },
        },
        'pulse-border': {
          '0%, 100%': { borderColor: '#F97316' },
          '50%': { borderColor: '#EA6C0A' },
        },
      },
      animation: {
        glow: 'glow 2.5s ease-in-out infinite',
        'pulse-border': 'pulse-border 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
