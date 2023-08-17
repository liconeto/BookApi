/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "h-gray-500": "#737994",
        "h-blue-500": "#8CACEE",
        "h-blue-900": "#303446",
      },
    },
  },
  plugins: [],
};
