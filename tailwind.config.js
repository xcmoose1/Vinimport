/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#F8F5F0',
        'cream-dark': '#F4ECE4',
        'wine': '#7D1424',
        'wine-dark': '#A52A2A',
        'charcoal': '#1C1C1C',
        'charcoal-light': '#3A3A3A',
        'gold': '#C2A77D',
        'gold-light': '#D4B996',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        graawe: {
          "primary": "#7D1424",
          "secondary": "#F8F5F0",
          "accent": "#C2A77D",
          "neutral": "#1C1C1C",
          "base-100": "#F8F5F0",
        },
      },
    ],
  },
}
