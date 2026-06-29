/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#0a0a0f',
          surface: 'rgba(255,255,255,0.05)',
          green: '#3FFF00',
          cyan: '#00D4FF',
          text: '#e2e8f0',
          muted: '#64748b',
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 10px #3FFF00, 0 0 20px rgba(63,255,0,0.3)',
        'neon-lg': '0 0 20px #3FFF00, 0 0 40px rgba(63,255,0,0.4)',
        'glass': '0 8px 32px rgba(0,0,0,0.3)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #3FFF00, 0 0 10px rgba(63,255,0,0.3)' },
          '100%': { boxShadow: '0 0 20px #3FFF00, 0 0 40px rgba(63,255,0,0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-neon': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        }
      }
    },
  },
  plugins: [],
}
