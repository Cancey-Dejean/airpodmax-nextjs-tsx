/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: [
          "SF Pro Text",
          "SF Pro Icons",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        display: [
          "SF Pro Display",
          "SF Pro Icons",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        "color-gray": "rgba(22, 22, 23, .8);",
        "color-gray-dark": "rgba(0, 0, 0, .8);",
      },
    },
  },
  plugins: [],
}
