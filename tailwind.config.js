/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        primary: "#dc2626", // red-600
        "primary-hover": "#b91c1c", // red-700
        secondary: "#991b1b", // red-800
        "secondary-hover": "#7f1d1d", // red-900
        "primary-text": "#0f172a", // slate-950
        "secondary-text": "#64748b", // slate-600
        "bg-dark": "#0f172a", // slate-950
        "bg-light": "#cbd5e1", // slate-300
      },
      spacing: {
        'music-section': '400px',
        'playlist-width': '427px'
      }
    },
  },
  plugins: [
    
  ],
};
