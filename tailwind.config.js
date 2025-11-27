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
        taoist: {
          red: '#8B0000',
          gold: '#DAA520',
          black: '#1C1C1C',
          white: '#F8F8F8',
          grey: '#696969'
        }
      },
      fontFamily: {
        'chinese': ['SimSun', 'STKaiti', 'serif'],
      },
      backgroundImage: {
        'taoist-pattern': "url('/images/taoist-pattern.jpg')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fade-in 1s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}