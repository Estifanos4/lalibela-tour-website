/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C9973A',
          light: '#E8B96A',
          dark: '#A07528',
        },
        secondary: {
          DEFAULT: '#6B3D1E',
          light: '#8B5A2B',
        },
        accent: {
          DEFAULT: '#4A2B0F',
          light: '#5C3D20',
        },
        'cosmic-dark': '#0a0a0f',
        'neon-cyan': '#00f3ff',
        'neon-purple': '#bc13fe',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-sm': '0 4px 15px 0 rgba(0, 0, 0, 0.08)',
      },
      keyframes: {
        subtleZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'subtle-zoom': 'subtleZoom 30s ease-out infinite alternate',
        'fade-in-up': 'fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
}
