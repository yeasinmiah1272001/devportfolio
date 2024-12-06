/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "spin-reverse-slow": "spin-reverse 3s linear infinite",
        "spin-slower": "spin-slower 5s linear infinite",
        "gradient-x": "gradient-x 3s linear infinite",
        "gradient-xy": "gradient-xy 4s linear infinite",
        "gradient-y": "gradient-y 5s linear infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        "gradient-xy": {
          "0%": {
            backgroundPosition: "0% 0%",
          },
          "50%": {
            backgroundPosition: "100% 100%",
          },
          "100%": {
            backgroundPosition: "0% 0%",
          },
        },
        "gradient-y": {
          "0%": {
            backgroundPosition: "50% 0%",
          },
          "50%": {
            backgroundPosition: "50% 100%",
          },
          "100%": {
            backgroundPosition: "50% 0%",
          },
        },
        "spin-reverse": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
        "spin-slower": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      colors: {
        primaryColor: "#0A192F",
        designColor: "#4bfad0",
        lightText: "#ccd6f6",
        darkText: "#8892b0",
        hovarColor: "rgba(100, 255,218,0.1)",
      },
      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"],
      },
    },
  },
  // plugins: [require("daisyui")],
};
