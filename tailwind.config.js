/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
      },
    },
    extend: {
      colors: {
        coffee: {
          50: '#FBF5EE',
          100: '#F5E6D3',
          200: '#E8D0B3',
          300: '#D4A574',
          400: '#C49A6C',
          500: '#A67B4D',
          600: '#8B5E34',
          700: '#6B4423',
          800: '#4A2C17',
          900: '#3D2314',
          950: '#2C1810',
        },
        cream: {
          50: '#FDF8F3',
          100: '#FAF0E6',
          200: '#F5E6D3',
        },
        gold: {
          300: '#E8C79E',
          400: '#D4A574',
          500: '#C49A6C',
          600: '#A67B4D',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Lora', 'serif'],
        decorative: ['"Cormorant Garamond"', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
