module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'innertop': 'inset 0px 2px 20px rgba(0, 0, 0, 0.10)'
      },
      colors: {

        "yellow": {
          '350': '#FFE000',
        },

        "lime": {
          '450': '#0BF40B',
        },

        "gray": {
          '450': '#797979',
          '750': '#333333',
        },

        "blue": {
          '350': '#41AFFF',
          'gradient-dark': '#4176FF',
          'gradient-medium': '#4198FF',
          'gradient-light': '#41AFFF',
        },

        "pink": {
          '350': '#F9A8D4',
        }
      },
      fontFamily: {
        "outfit": "Outfit, sans-serif",
      },
    },
  },
  plugins: [],
}
