import type { Config } from 'tailwindcss'

// eslint-disable-next-line @typescript-eslint/no-require-imports
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'))
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )
  addBase({ ':root': newVars })
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        aurora: 'aurora 60s linear infinite',
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: '50% 50%, 50% 50%' },
          to: { backgroundPosition: '350% 50%, 350% 50%' },
        },
      },
      colors: {
        brand: {
          primary: '#0071e3',
          'primary-dark': '#0077ED',
          accent: '#0071e3',
          'accent-hover': '#0077ED',
        },
        text: {
          dark: '#1d1d1f',
          muted: '#6e6e73',
        },
        surface: {
          light: '#f5f5f7',
          white: '#ffffff',
          dark: '#000000',
          'near-black': '#1d1d1f',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-geist-sans)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['96px', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['80px', { lineHeight: '1.06', letterSpacing: '-0.025em' }],
        'display-md': ['64px', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-sm': ['48px', { lineHeight: '1.1', letterSpacing: '-0.018em' }],
        headline: ['32px', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.015em',
        apple: '-0.025em',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [addVariablesForColors],
}

export default config
