import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Apple-inspired neutral palette
        'apple': {
          'black': '#1d1d1f',
          'gray': '#86868b',
          'light-gray': '#f5f5f7',
          'blue': '#0071e3',
          'blue-hover': '#0077ed',
        },

        // Text colors
        'text': {
          'primary': '#1d1d1f',
          'secondary': '#6e6e73',
          'muted': '#86868b',
        },

        // Background colors
        'surface': '#ffffff',
        'surface-secondary': '#f5f5f7',
        'surface-tertiary': '#fbfbfd',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Apple-style large typography
        'hero': ['clamp(2.5rem, 8vw, 5rem)', { lineHeight: '1.05', fontWeight: '600', letterSpacing: '-0.02em' }],
        'display': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.1', fontWeight: '600', letterSpacing: '-0.02em' }],
        'headline': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.15', fontWeight: '600', letterSpacing: '-0.01em' }],
        'title': ['1.25rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body-large': ['1.25rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 20px rgba(0, 113, 227, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 113, 227, 0.5)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'apple': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'apple-lg': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'apple-xl': '0 20px 60px rgba(0, 0, 0, 0.15)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.15), inset 0 4px 20px rgba(255, 255, 255, 0.2)',
        'glass-strong': '0 8px 32px rgba(31, 38, 135, 0.25), inset 0 2px 12px rgba(255, 255, 255, 0.3)',
      },
      backdropBlur: {
        'glass': '20px',
        'glass-strong': '40px',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'apple-bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config
