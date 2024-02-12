/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: '#404040',
        black: '#000',
        white: '#fff',
        red: "#EF4444",
        gray: {
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          500: '#71717A',
          800: '#27272A',
        },
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
};
