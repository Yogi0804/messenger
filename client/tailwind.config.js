/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Extend the theme with custom settings if needed
      colors: {
        primary: {
          light: "#6c63ff",
          DEFAULT: "#3f3d56",
          dark: "#191923",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      // Extend variants if needed
      textColor: ["responsive", "hover", "focus", "group-hover"],
      backgroundColor: ["responsive", "hover", "focus", "group-hover"],
      borderColor: ["responsive", "hover", "focus", "group-hover"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
