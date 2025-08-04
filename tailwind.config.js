/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#1a1a1a",
        tertiary: "#2a2a2a",
        accent: "#00ff88",
        "accent-dark": "#00cc6a",
        "accent-light": "#33ffaa",
        "dark-green": "#0d2e1a",
        "dark-green-light": "#1a4d2e",
        "black-100": "#0f0f0f",
        "black-200": "#1f1f1f",
        "black-300": "#2f2f2f",
        "white-100": "#f8f8f8",
        "white-200": "#e8e8e8",
        "glass": "rgba(255, 255, 255, 0.05)",
        "glass-dark": "rgba(0, 0, 0, 0.8)",
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(0, 255, 136, 0.1)",
        "glow": "0 0 20px rgba(0, 255, 136, 0.3)",
        "glow-strong": "0 0 40px rgba(0, 255, 136, 0.5)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg_4.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 255, 136, 0.6)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};