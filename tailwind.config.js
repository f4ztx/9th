/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'heading': ['var(--font-roboto-condensed)'],
        'body': ['var(--font-roboto-mono)'],
      },
      colors: {
        'brand': {
          navy: '#001B5E',      // Azul marino profundo del logo
          purple: '#432C7A',    // Púrpura
          magenta: '#80366B',   // Magenta oscuro
          pink: '#BC3F5B',      // Rosa oscuro
          red: '#FF4D4D',       // Rojo/Rosa brillante
        },
        'accent': {
          light: '#FFFFFF',     // Blanco para contraste
          dark: '#001B5E',      // Azul marino para contraste
          muted: '#8895B3',     // Versión suave del azul marino
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #001B5E 0%, #432C7A 25%, #80366B 50%, #BC3F5B 75%, #FF4D4D 100%)',
      },
      keyframes: {
        "slide-in-from-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" }
        },
        "slide-out-to-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" }
        }
      },
      animation: {
        "slide-in-from-right": "slide-in-from-right 0.3s ease-out",
        "slide-out-to-right": "slide-out-to-right 0.3s ease-in"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}