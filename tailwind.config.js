/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["--font-roboto"],
        gothicA1: ["--font-gothic-a1"],
        openSans: ["--font-open-sans"],
      },
    },
  },
  plugins: [],
};
