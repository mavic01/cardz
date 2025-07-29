/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',      // App Router
    './pages/**/*.{js,ts,jsx,tsx}',    // Pages Router
    './components/**/*.{js,ts,jsx,tsx}', // Reusable components
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['var(--font-space-grotesk)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
