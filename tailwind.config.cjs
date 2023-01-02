/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "bounce-x-1": "bouncex 1s linear infinite alternate",
        "bounce-x-2": "bouncex 2s linear infinite alternate",
        "bounce-x-3": "bouncex 1.5s linear infinite alternate",
        "bounce-x-4": "bouncex 2.5s linear infinite alternate",
        "bounce-x-5": "bouncex 0.8s linear infinite alternate",
        "bounce-x-6": "bouncex 1.4s linear infinite alternate",
        "bounce-x-7": "bouncex 2.3s linear infinite alternate",
        "bounce-x-8": "bouncex 3s linear infinite alternate",
        "bounce-x-9": "bouncex 0.6s linear infinite alternate",
        "bounce-y-1": "bouncey 2s linear infinite alternate",
        "bounce-y-2": "bouncey 1.2s linear infinite alternate",
        "bounce-y-3": "bouncey 1.8s linear infinite alternate",
        "bounce-y-4": "bouncey 1s linear infinite alternate",
        "bounce-y-5": "bouncey 2.5s linear infinite alternate",
        "bounce-y-6": "bouncey 1.9s linear infinite alternate",
        "bounce-y-7": "bouncey 1.1s linear infinite alternate",
        "bounce-y-8": "bouncey 1s linear infinite alternate",
        "bounce-y-9": "bouncey 3s linear infinite alternate",
      },
      keyframes: {
        bouncex: {
          from: { left: "-8.5%", top: 0 },
          to: { left: "80.5%", top: 0 },
        },
        bouncey: {
          from: { left: 0, top: "-20px" },
          to: { left: 0, top: "200px" },
        },
      },
    },
  },
  plugins: [],
};
