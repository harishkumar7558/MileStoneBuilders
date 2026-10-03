import animate from "tailwindcss-animate"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  // Hover styles only on devices that can hover — no "stuck" hover states after a tap.
  future: { hoverOnlyWhenSupported: true },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2.5rem" },
      screens: { "2xl": "1360px" },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "Inter", "ui-sans-serif", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        // Brand navy — derived from the logo's horse mark
        ink: {
          50: "#F4F6FA",
          100: "#E6EAF2",
          200: "#CDD4E1",
          300: "#9EA9BF",
          400: "#6E7B96",
          500: "#4B5873",
          600: "#34405A",
          700: "#222D45",
          800: "#141D31",
          900: "#0B1220",
          950: "#060A13",
        },
        // Brand gold — derived from the logo's "M" mark
        brand: {
          50: "#FFF8EB",
          100: "#FEEDC8",
          200: "#FDD98D",
          300: "#FBC152",
          400: "#F7A928",
          500: "#EB9110",
          600: "#C9710A",
          700: "#A0540C",
          800: "#824311",
          900: "#6B3812",
        },
        signal: {
          400: "#6FA8FF",
          500: "#4C8DFF",
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      // Elevation scale — soft (resting card) → lift (hovered card) → float (3D / overlay layers).
      boxShadow: {
        soft: "0 1px 2px rgb(11 18 32 / 0.04), 0 10px 30px -16px rgb(11 18 32 / 0.16)",
        lift: "0 2px 6px rgb(11 18 32 / 0.05), 0 28px 56px -24px rgb(11 18 32 / 0.32)",
        float: "0 40px 80px -28px rgb(6 10 19 / 0.6), 0 16px 32px -16px rgb(6 10 19 / 0.4)",
        glow: "0 0 0 1px rgb(247 169 40 / 0.35), 0 18px 44px -18px rgb(235 145 16 / 0.65)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'grid-pan': {
          from: { transform: 'translate3d(0, 0, 0)' },
          to: { transform: 'translate3d(64px, 64px, 0)' }
        },
        'dash-flow': {
          to: { strokeDashoffset: '-1000' }
        },
        'contour-drift': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(-2%, 1.5%, 0) rotate(2deg)' }
        },
        marquee: {
          from: { transform: 'translate3d(0, 0, 0)' },
          to: { transform: 'translate3d(-100%, 0, 0)' }
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -10px, 0)' }
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.6)', opacity: '0.7' },
          '100%': { transform: 'scale(2.4)', opacity: '0' }
        },
        scan: {
          '0%': { transform: 'translate3d(0, -100%, 0)' },
          '100%': { transform: 'translate3d(0, 100%, 0)' }
        },
        shimmer: {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(100%)' }
        },
        'scroll-cue': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' }
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
        'accordion-up': 'accordion-up 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
        'grid-pan': 'grid-pan 18s linear infinite',
        'dash-flow': 'dash-flow 14s linear infinite',
        'contour-drift': 'contour-drift 24s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.6s cubic-bezier(0.22, 1, 0.36, 1) infinite',
        scan: 'scan 7s linear infinite',
        shimmer: 'shimmer 1.6s ease-in-out infinite',
        'scroll-cue': 'scroll-cue 2s cubic-bezier(0.65, 0, 0.35, 1) infinite',
      },
    }
  },
  plugins: [animate],
}
