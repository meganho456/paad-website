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
          950: '#062E31',    // near-black navy
          900: '#083B3E',    // deep navy (was Apple dark gray)
          800: '#0B4F4A',
          700: '#0E5F58',
          600: '#147A70',
          500: '#3AA893',
          400: '#7FCFC2',
        },
        // logo blue ramp — links, badges, secondary accents
        brand: {
          300: '#8FC6EA',
          400: '#3A8CC9',
          500: '#2B6AA3',
          600: '#21517E',
          700: '#1B4266',
        },
        gold: {
          50:  '#F0FAF8',
          100: '#D9EFEB',
          200: '#B8E3DB',
          300: '#2DD4BF',
          400: '#0F766E',    // primary teal
          500: '#0C5F59',
          600: '#0A4A45',
          700: '#083B3E',
          800: '#062E31',
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
        'gold-gradient': 'linear-gradient(135deg, #0F766E 0%, #0C5F59 100%)',
        'navy-gradient': 'linear-gradient(135deg, #062E31 0%, #083B3E 100%)',
        'hero-pattern':  'linear-gradient(135deg, #083B3E 0%, #0F766E 100%)',
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
        gold:      '0 0 40px rgba(20,184,166,0.35)',
        'gold-lg': '0 0 80px rgba(20,184,166,0.45)',
        glass:     '0 8px 32px rgba(0,0,0,0.5)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}

export default config
