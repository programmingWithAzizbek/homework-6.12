/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        col1: "#021431",
        col2: "#f0f6ff",
        col3: "#057aff",
        col3hov: "#0069e0",
        col4: "#394e6a",
        col5: "#c149ad",
        col6: "#33ff57",
        col7: "#3366ff",
        col8: "#463aa1",
        col8hov: "#3b3187",
      },
      colors: {
        col1: "#c7c9d1",
        col2: "#dbe1ff",
        col3: "#394e6a",
        col4: "#f5dbee",
        col5: "#463aa1",
        col6: "#057aff",
        col7: "#dbd4ed",
      },
      width: {
        carouselw: "496px",
        btnw: "52px",
        spanw: "22px",
        btn2w: "244px",
      },
      maxWidth: {
        headermini: "394px",
        cardsmw: "352px",
      },
      height: {
        ulh: "52px",
        carouselh: "448px",
      },
      borderRadius: {
        spanbr: "30.4px",
      },
      padding: {
        spanpx: "7px",
      },
      margin: {
        aboutmt: "6px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
