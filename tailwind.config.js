/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        void: '#030712',
        aurora: {
          cyan: '#22d3ee',
          violet: '#a78bfa',
          rose: '#fb7185',
          amber: '#fbbf24',
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        orbit: 'orbit 60s linear infinite',
        'orbit-slow': 'orbit 120s linear infinite',
        shimmer: 'shimmer 2.5s ease-in-out infinite',
        float: 'float 8s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        orbit: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
