module.exports = {
  darkMode: ["class"],
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { orange: "#FF6600", dark: "#0B1220", card: "#141B2D", soft: "#1C2436" }
      }
    },
  },
  plugins: []
};
