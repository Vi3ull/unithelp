let plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    'layouts/**/*.{htm,js}',
    'pages/**/*.{htm,js}',
    'pages/**/*.{htm,js}',
    'content/**/*.htm',
    'partials/**/*.{htm,js}',
    'src/**/*.js',
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      'sans': ['Nunito Sans', 'sans-serif']
    },
    container: {
      center:true,
      padding: {
        DEFAULT: '1rem',
        'sm': '2.5rem',
        // 'lg': '4rem',
        // 'xl': '5rem',
        // '2xl': '7.5rem',
      }
    },
    extend: {
      colors: {
        'fore-ground': '#EEEEEE',
        'active': '#F7AB73',
        'accent': '#44CC88',
        'secondary-accent': '#5FD299',
        'light': '#FFFFFF',
        'dark': '#343434',
        'secondary-dark': '#747474', 
        'stone': "#9E9E9E",  
        'zinc': {
          "75": '#F2F2F2'
        },  
        // 'accent-gradient': 'linear-gradient(96.61deg, #44CC88 2.13%, #5FD299 96.62%)',
      },
      transitionProperty: {
        'max-wh': 'max-width, max-height',
      },
      maxWidth: {
        'screen': '100vh',
      }  
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('carousel-inited', '&.carousel--inited');
      addVariant('slide-active', '&.carousel-slide-active');
      addVariant('slide-next', '&.carousel-slide-next');
      addVariant('slide-prev', '&.carousel-slide-prev');
    }),
    require('@tailwindcss/forms'),
  ],
}
