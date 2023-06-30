/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#58d651",

          secondary: "#e5a570",

          accent: "#f2fc3f",

          neutral: "#211627",

          "base-100": "#eff1f6",

          info: "#617dd1",

          success: "#1e854b",

          warning: "#f98c1f",

          error: "#eb1418",
        },
        mythemedark: {
          primary: "#375a99",

          secondary: "#5ca2db",

          accent: "#f4c2b2",

          neutral: "#243142",

          "base-100": "#463a4b",

          info: "#28bad7",

          success: "#13a06c",

          warning: "#f9860b",

          error: "#f26663",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
