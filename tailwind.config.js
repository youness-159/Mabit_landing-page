/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        "white-cold": "#fbfdff",
        "white-80": "#ffffff80",
        light1: "#effaf3",
        light2: "#eef4fe",
        light3: "#f1f2f7",
        light4: "#eef1f6",
        light5: "#f2f4f8",
        light6: "#e8eaef",
        light7: "#e7eaef",
        light8: "#e1e5ec",
        light9: "#e1e4ea",
        light10: "#dddddd",
        "green-300": "#92cfd1",
        "green-500": "#4AAFB3",
        "green-600": "#3b8c8f",
        red: "#FE3E66",
        "orange-500": "#b34f4a",
        "purple-500": "#b14ab3",
        "blue-500": "#4a8bb3",
        dark1: "#232323",
        dark2: "#0e1133",
        dark3: "#63636a",
        dark4: "#5e5e5e",
        dark5: "#505056",
        black: "#000000",
        orange: "#F6F6F6",
        "red-transparent1": "#FE3E6633",
        "green-500-transparent1": "#4AAFB34d",
        "green-500-transparent2": "#4AAFB30d",
        "black-transparent2": "#0000000d",
        "red-transparent2": "#FE3E664d",
        "red-transparent3": "#FE3E660d",
      },

      fontSize: {
        xs: "1.2rem",
        sm: "1.4rem",
        base: "1.6rem",
        lg: "1.8rem",
        xl: "2rem",
        "2xl": "2.4rem",
        "3xl": "3rem",
        "4xl": "4.4rem",
        "5xl": "5rem",
        "6xl": "6rem",
      },
      boxShadow: {
        md: "0px 10px 20px 0px",
        xl: "0px 6px 10px 0px",
        "3xl": "0 30px 70px 0 ",
        "2xl": "0px 40px 40px 0px",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
