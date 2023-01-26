/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode:'jit',
  theme: {
    extend: {
      colors:{
        blue:'#2cbce9',
        red:'#DC4492',
        pured:'#DC4492',
        purple:'	#8A2BE2',
        pubg:'	rgb(79,22,75)',
        yellow:'#FDCC49',
        grey:'#ededed',
        'deep-blue':'#010026',
        'dark-grey':'#757575',
        'opaque-black':'rgba(0,0,0,0.35)'
      },
        backgroundImage:(theme)=>({
          'gradient-rainblue':'linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)',
          'gradient-blue':'linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)',
          'gradient-j':'linear-gradient(90deg, rgba(30,60,157,1) 4%, rgba(34,88,134,1) 49%, rgba(89,36,138,1) 90%)',
          'gradient-line':' linear-gradient(90deg, rgba(36,215,84,1) 4%, rgba(47,154,210,1) 29%, rgba(126,68,180,1) 68%)',
          'gradient-area':'linear-gradient(90deg, rgba(212,245,221,1) 4%, rgba(210,232,244,1) 29%, rgba(229,210,246,1) 68%)',
        }),
        fontFamily: {
          playfair: ["Playfair Display", "serif"],
          opensans: ["Open Sans", "sans-serif"],
        },
        content: {
          brush: "url('./assets/brush.png')",
          person1: "url('./assets/person-1.png')",
          person2: "url('./assets/person-2.png')",
          person3: "url('./assets/person-3.png')",
        },
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
    plugins: [],
  };
