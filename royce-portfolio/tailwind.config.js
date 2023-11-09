/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        libre: ["Libre Baskerville"],
        outfit: ["'Outfit', sans-serif"],
        azeret: ["'Azeret Mono', sans-serif"],
        clash: ["'Clash Display', sans-serif"], // Removed the extra semicolon here
      },
      height: {
        50: "50px",
        150: "150px",
        300: "300px",
        600: "600px",
        620: "620px",
        700: "700px",
      },
      gridRow: {
        2.5: "span 2.5",
      },
      colors: {
        rosered: "#844444",
      },
      fontSize: {
        xxs: "10px",
      },
      fontWeight: {
        light: "200",
        regular: "400",
        medium: "500",
        bold: "600",
        heavy: "700",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "slide-left": "slide-left 25s linear infinite",
        "carousel-right": " ease-in linear",
        "carousel-left": " ease-in linear",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-100%)" },
        },
        "slide-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "carousel-left": {
          from: {
            transform:
              "translateX(-100px)" /* Start position (off-screen to the left) */,
            opacity: "0",
          },
          to: {
            transform:
              "translateX(0px)" /* End position (off-screen to the left) */,
            opacity: "1",
          },
        },
        "carousel-right": {
          from: {
            transform:
              "translateX(100px)" /* Start position (off-screen to the right) */,
            opacity: "0",
          },
          to: {
            transform:
              "translateX(0px)" /* End position (off-screen to the right) */,
            opacity: "1",
          },
        },
      },
      textShadow: {
        xs: "1px 1px 2px rgba(0, 0, 0, 0.3)",
        sm: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        md: "3px 3px 6px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
