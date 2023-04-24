/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      customLight: ['"sohne-light"', '"Open Sans"', '"sans - serif"'],
      custom: ['"sohne-regular"', '"Open Sans"', '"sans - serif"'],
      customMed: ['"sohne-medium"', '"Open Sans"', '"sans - serif"'],
      customBold: ['"sohne-bold"', '"Open Sans"', '"sans - serif"'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
