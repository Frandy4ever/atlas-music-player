/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        md2: "929px", // Custom breakpoint for 929px width
      },
    },
  },
  plugins: [],
};
