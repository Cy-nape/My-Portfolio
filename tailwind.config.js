/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        leetcode: '#ffa116',
        codeforces: '#318CE7',
        gfg: '#2F8D46',
      }
    },
  },
  plugins: [],
}
