/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  theme: {
    extend: {
      
      // that is animation class
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
  },
  images:{
    domains:[
      'res.cloudinary.com'
    ]
  }
}

module.exports = nextConfig
