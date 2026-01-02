/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo", "sans-serif"], // تعريف خط Cairo
      },
      colors: {
        primary: "#ff5a1f", // تعريف لون اصلي
        primaryHover: "#ff5a1f", // تعريف لون اصلي عند النقر
        primaryForeground: "#ffffff", // تعريف لون اصلي الخلفية
        secondary: "#1c1c1c", // تعريف لون ثانوي
        secondaryForeground: "#ffffff", // تعريف لون ثانوي الخلفية
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
