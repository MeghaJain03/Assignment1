/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        teal: {
          700: '#2C7A7B',
          800: '#276661',
          600: '#2C7A7B',
        },
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out',
      },
      spacing: {
        '15%': '15%',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      fontSize: {
        base: "65.4%",
      },
    },
  },
  plugins: [],
}

