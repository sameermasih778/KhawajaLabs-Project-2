/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          1: '#0c0c0d', // Deepest background
          2: '#131315', // Card backgrounds
          3: '#17191b', // Elevated surfaces
          4: '#1c1e20', // Borders / subtle panels
          5: '#2a2d31', // Subtle highlights / hover states
        },
        grey: {
          1: '#5f636c',
          2: '#6b707a',
          3: '#777d87',
          4: '#9296a0',
          5: '#adb0b7',
        }
      },
      fontFamily: {
        sans: ['Instrument Sans', 'Inter', 'sans-serif'],
        tight: ['Inter Tight', 'sans-serif'],
        rethink: ['Rethink Sans', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
