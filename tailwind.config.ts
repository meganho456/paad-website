import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#000000',    // pure black — Apple cinematic
          900: '#1D1D1F',    // Apple dark gray
          800: '#2D2D30',
          700: '#3A3A3C',
          600: '#48484A',
          500: '#636366',
          400: '#8E8E93',
        },
        gold: {
          50:  '#FDF8EC',
          100: '#FAF0CC',
          200: '#F5E099',
          300: '#F0CC7A',
          400: '#D4A843',    // warm gold primary
          500: '#B88D2C',
          600: '#8F6B18',
          700: '#6E5012',
          800: '#52390D',
        },
        cream: {
          50:  '#FFFFFF',
          100: '#F5F5F7',    // Apple off-white
          200: '#E8E8ED',
          300: '#D2D2D7',
        },
      },
      fontFamily: {
        sans:  ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4A843 0%, #B88D2C 100%)',
        'navy-gradient': 'linear-gradient(135deg, #000000 0%, #1D1D1F 100%)',
        'hero-pattern':  'linear-gradient(135deg, #000000 0%, #0D0D0F 100%)',
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter:  '-0.04em',
        tight:    '-0.03em',
        snug:     '-0.02em',
      },
      animation: {
        float:        'float 7s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'spin-slow':  'spin 20s linear infinite',
        shimmer:      'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
      },
      boxShadow: {
        gold:      '0 0 40px rgba(212,168,67,0.3)',
        'gold-lg': '0 0 80px rgba(212,168,67,0.4)',
        glass:     '0 8px 32px rgba(0,0,0,0.5)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}

export default config
