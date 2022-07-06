/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}"],
  important: "html",
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
