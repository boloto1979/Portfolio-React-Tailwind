/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#22272e',
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
}

