/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1440px',
        contentContainer: '1140px',
        containerSmall: '1024px',
        containerxs: '768px',
      },
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        bodyFont: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#1D4ED8',
          'blue-light': '#3B82F6',
          'blue-dark': '#1E3A8A',
          green: '#16A34A',
          'green-light': '#22C55E',
          'green-dark': '#15803D',
          saffron: '#F97316',
          'saffron-light': '#FB923C',
          'saffron-dark': '#EA580C',
          'blue-soft': '#93C5FD',
          'green-soft': '#4ADE80',
          'saffron-soft': '#FDBA74',
        },
        ink: '#0B1220',
        'ink-800': '#111A2E',
        'ink-700': '#1B2742',
        'ink-600': '#2A3A5C',
        surface: '#F6F8FC',
        'surface-2': '#EEF2F9',
        bodyColor: '#3C565B',
        textLight: '#DADBDD',
        textDark: '#837E7C',
        hoverColor: '#2B3856',
        textGreen: '#16A34A',
        textBlue: '#A0CFEC',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(11,18,32,0.04), 0 8px 24px -8px rgba(11,18,32,0.10)',
        lift: '0 2px 4px rgba(11,18,32,0.05), 0 24px 48px -16px rgba(11,18,32,0.18)',
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 24px 80px -20px rgba(29,78,216,0.45)',
        navbarShadow: '0 10px 30px -10px rgba(2,12,25,0.9)',
      },
      backgroundImage: {
        tricolor: 'linear-gradient(90deg, #1D4ED8 0%, #16A34A 52%, #F97316 100%)',
        'tricolor-soft':
          'linear-gradient(90deg, rgba(29,78,216,.16), rgba(22,163,74,.16), rgba(249,115,22,.16))',
        'tricolor-light': 'linear-gradient(90deg, #93C5FD 0%, #4ADE80 52%, #FDBA74 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(30px,-40px,0) scale(1.06)' },
          '66%': { transform: 'translate3d(-24px,22px,0) scale(0.96)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(-40px,32px,0) scale(1.08)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.55' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-9px)' },
        },
        beam: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        float: 'float 16s ease-in-out infinite',
        'float-slow': 'floatSlow 20s ease-in-out infinite',
        'fade-up': 'fadeUp .8s cubic-bezier(.22,1,.36,1) both',
        'fade-in': 'fadeIn .9s ease-out both',
        marquee: 'marquee 38s linear infinite',
        'spin-slow': 'spinSlow 34s linear infinite',
        'pulse-ring': 'pulseRing 2.2s cubic-bezier(.22,1,.36,1) infinite',
        bob: 'bob 3.4s ease-in-out infinite',
        beam: 'beam 3.2s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.22,1,0.36,1)',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        900: '900ms',
      },
    },
  },
  plugins: [],
}
