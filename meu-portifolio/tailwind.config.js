/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neonPink: "#FF00A8",
        neonGreen: "#00FF9F",
        neonOrange: "#FFA500",
        neonPurple: "#A020F0",
        neonBlue: "#00CFFF",
        neonCyan: "#40E0D0",
        neonYellow: "#FFFF33",
        neonRed: "#FF3131",
        neonMagenta: "#FF00FF",
        neonTeal: "#00FFD1",
        neonLime: "#BFFF00",
        neonGold: "#FFD700",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        audiowide: ["Audiowide", "sans-serif"],
        bricolage: ["Bricolage Grotesque", "sans-serif"],
      },
      keyframes: {
        fall: {
          "0%": { transform: "translateY(0)", opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { transform: "translateY(100vh)", opacity: 0 },
        },
      },
      animation: { fall: "fall linear infinite" },
    },
  },
  plugins: [],
};
