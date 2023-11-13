/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        libre: ["Libre Baskerville"],
        outfit: ["'Outfit', sans-serif"],
        azeret: ["'Azeret Mono', sans-serif"],
        clash: ["'Clash Display', sans-serif"],
      },
      height: {
        50: "50px",
        150: "150px",
        200: "200px",
        300: "300px",
        500: "500px",
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
        xxxs: "8px",
        xxxl: "2.50rem",
      },
      lineHeight: {
        xxxl: "2.5rem",
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
        "carousel-right": "carousel-right ease-in linear",
        "carousel-left": "carousel-left ease-in linear",
        gradient: "gradient 5s ease infinite",
        swipe: "swipe ease 4s infinite",
        word: "word 7s infinite",
        "word-delay-1": "word 7s infinite -1.4s",
        "word-delay-2": "word 7s infinite -2.8s",
        "word-delay-3": "word 7s infinite -4.2s",
        "word-delay-4": "word 7s infinite -5.6s",
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
            transform: "translateX(-100px)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0px)",
            opacity: "1",
          },
        },
        "carousel-right": {
          from: {
            transform: "translateX(100px)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0px)",
            opacity: "1",
          },
        },
        word: {
          "0%": {
            transform: "translateY(100%)",
          },
          "15%": {
            transform: "translateY(-10%)",
            animationTimingFunction: "ease-out",
          },
          "20%": {
            transform: "translateY(0)",
          },
          "40%, 100%": {
            transform: "translateY(-110%)",
          },
        },
        gradient: {
          "0%": {
            "background-position": "200% left center",
          },
          "100%": {
            "background-position": "200% right center",
          },
        },
        swipe: {
          "0%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(50px)",
          },
          "100%": {
            transform: "translateX(0)",
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
