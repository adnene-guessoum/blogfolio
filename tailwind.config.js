/** @type {import('tailwindcss').Config} */
const { spacing } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/banner.png')",
        thumbAWS: "url('/images/thumbnails/thumbnail_aws.png')",
        thumbDash: "url('/images/thumbnails/thumbnail_dash.png')",
        thumbGh: "url('/images/thumbnails/thumbnail_gh_cli.png')",
        thumbAsser: "url('/images/thumbnails/thumbnail_assercar.png')",
        thumbOrly: "url('/images/thumbnails/thumbnail_orly.png')",
        thumbOwl: "url('/images/thumbnails/thumbnail_owl.png')",
        thumbBlog: "url('/images/thumbnails/thumbnail_django.png')"
      },
      colors: {
        'ivory-black': '#1D2731',
        'custom-beige': '#f9fafb'
      },
      flex: {
        slide: 10
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.gray.500'),
              '&:hover': {
                color: theme('colors.gray.700')
              },
              code: { color: theme('colors.gray.400') }
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32]
            },
            code: { color: theme('colors.pink.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false
          },
          dark: {
            css: {
              color: theme('colors.gray.300'),
              a: {
                color: theme('colors.gray.400'),
                '&:hover': {
                  color: theme('colors.gray.600')
                },
                code: { color: theme('colors.gray.400') }
              },
              blockquote: {
                borderLeftColor: theme('colors.gray.700'),
                color: theme('colors.gray.300')
              },
              'h2,h3,h4': {
                color: theme('colors.gray.100'),
                'scroll-margin-top': spacing[32]
              },
              hr: { borderColor: theme('colors.gray.700') },
              ol: {
                li: {
                  '&:before': { color: theme('colors.gray.500') }
                }
              },
              ul: {
                li: {
                  '&:before': { backgroundColor: theme('colors.gray.500') }
                }
              },
              strong: { color: theme('colors.gray.300') },
              thead: {
                color: theme('colors.gray.100')
              },
              tbody: {
                tr: {
                  borderBottomColor: theme('colors.gray.700')
                }
              }
            }
          }
        }
      })
    }
  },
  plugins: [],
  variants: {
    extend: {
      display: ['group-hover']
    }
  }
};
