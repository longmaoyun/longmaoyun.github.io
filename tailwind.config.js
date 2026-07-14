/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './pages/**/*.html',
    './_wiki/**/*.html',
    './_faq/**/*.html',
    './_posts/**/*.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans SC"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Noto Sans SC"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        // Longmao Cloud brand palette — blue-white scheme with accent tones
        longmao: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        // Glassmorphism-friendly surface colors
        glass: {
          light: 'rgba(255, 255, 255, 0.15)',
          medium: 'rgba(255, 255, 255, 0.25)',
          heavy: 'rgba(255, 255, 255, 0.35)',
          dark: 'rgba(0, 0, 0, 0.10)',
          border: 'rgba(255, 255, 255, 0.18)',
          'border-dark': 'rgba(255, 255, 255, 0.08)',
        },
        // Neutral surface tones
        surface: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-sm': '0 4px 16px 0 rgba(31, 38, 135, 0.25)',
        'glass-lg': '0 12px 48px 0 rgba(31, 38, 135, 0.45)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.15)',
      },
      backdropBlur: {
        'glass': '12px',
        'glass-lg': '20px',
      },
      borderRadius: {
        'glass': '16px',
        'glass-sm': '10px',
        'glass-lg': '24px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.3), 0 0 10px rgba(59, 130, 246, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
};
