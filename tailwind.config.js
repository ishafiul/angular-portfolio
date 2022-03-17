module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        fgfg: {
          '75%, 100%': { transform: 'scale(2)', opacity: 0 },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        fgfg: '2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        wiggle: 'wiggle 1s ease-in-out',
      }
    },
  },
  plugins: [],
}
