/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./index.tsx",
    "./public/mentions-legales.html", // page statique : ses classes sont compilées dans la feuille de style du site
  ],
  theme: {
    extend: {
      colors: {
        background: '#111111', // Noir Profond
        surface: '#1A1A1A', // Légèrement plus clair pour contraste subtil
        surfaceHighlight: '#222222',
        accent: '#D4AF37', // Or
        textPrimary: '#FFFCF2', // Blanc Crème
        textSecondary: '#A0A0A0', // Gris neutre chaud
      },
      fontFamily: {
        // SF Pro Display sur Apple, sinon Inter (auto-hébergée via @fontsource-variable/inter)
        sans: ['"SF Pro Display"', '"Inter Variable"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'loading': 'loading 1.6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        loading: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
      },
    },
  },
  plugins: [],
}
