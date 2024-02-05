/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './scripts/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': "url('../assets/Photos/background_header.jpg')"
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif']
      },
      width: {
        50: '12.5rem',
        171: '42.75rem'
      },
      height: {
        13: '3.25rem',
        18: '4.5rem',
        240: '60rem'
      },
      spacing: {
        1.6: '0.4rem',
        3.25: '0.8125rem',
        5.5: '1.375rem',
        6.5: '1.625rem',
        7.5: '1.875rem',
        15: '3.75rem',
        18: '4.5rem',
        19: '4.75rem',
        20: '5rem',
        25: '6.25rem',
        33: '8.25rem',
        38: '9.5rem',
        50: '12.5rem',
        69: '17.25rem'
      },
      lineHeight: {
        14.5: '3.625rem'
      },
      fontSize: {
        '4.5xl': '2.5rem'
      },

      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        bold: '700'
      },
      boxShadow: {
        'recipe-card': '0px 4px 34px 30px rgba(0, 0, 0, 0.04)'

      },

      borderRadius: {
        '3xl': '1.25rem'
      }
    },
    colors: {
      yellow: '#FFD15B',
      white: '#FFF',
      black: '#000',
      'grey-700': '#1B1B1B',
      'grey-400': '#7A7A7A',
      'grey-200': '#C6C6C6',
      'grey-100': '#EDEDED',
      'hover-search': '#7A7A7A'
    }

  },
  variants: {
    extend: {

    }
  },
  plugins: []
}
