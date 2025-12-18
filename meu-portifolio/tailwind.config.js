/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neonPurple: "#A259FF",
        neonPink: "#FF4D8D",
        neonBlue: "#00C2FF",
        neonRed: "#FF0000",
        neonGreen: "#00ff00",
        neonOrange: "#FFA500",
        neonYellow: "#FFFF00",
        darkBg: "#0A0A0A",
        techGray: "#1E1E1E",
      },

      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        audiowide: ["Audiowide", "sans-serif"],
        pressStart: ["Press Start 2P", "cursive"],
      },
    },
  },
  plugins: [],
};
