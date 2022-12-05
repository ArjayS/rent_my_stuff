/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff4800",
        blue: {
          450: "#5F99F7",
        },
      },
      // fontFamily: {
      //   sans:[
      //     "Bungee shade"
      //   ]
      // }
    },
  },
  plugins: [],
};
