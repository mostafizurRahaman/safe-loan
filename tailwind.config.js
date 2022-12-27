/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {},
   },
   daisyui: {
      themes: [
         {
            mytheme: {
               primary: "#001233",
               secondary: "#ff595a",
               accent: "#fff4d8",
               neutral: "#333C4D",
               "base-100": "#FFFFFF",
               info: "#3ABFF8",
               success: "#36D399",
               warning: "#FBBD23",
               error: "#F87272",
            },
         },
      ],
   },
   plugins: [require("daisyui")],
};
