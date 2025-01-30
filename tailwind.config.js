/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1DB954", // Custom Green (Spotify-like)
        secondary: "#191414", // Custom Dark Background
        accent: "#F7A40C", // Custom Orange
      },
    },
  },
  plugins: [],
};
