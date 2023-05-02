/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        thumbAWS: "url('/images/thumbnails/thumbnail_aws.png')",
        thumbDash: "url('/images/thumbnails/thumbnail_dash.png')",
        thumbGh: "url('/images/thumbnails/thumbnail_gh_cli.png')",
        thumbAsser: "url('/images/thumbnails/thumbnail_assercar.png')",
        thumbOrly: "url('/images/thumbnails/thumbnail_orly.png')",
        thumbOwl: "url('/images/thumbnails/thumbnail_owl.png')",
        thumbBlog: "url('/images/thumbnails/thumbnail_django.png')"
      },
      flex: {
        slide: 10
      }
    }
  },
  plugins: [],
  variants: {
    extend: {
      display: ['group-hover']
    }
  }
};
