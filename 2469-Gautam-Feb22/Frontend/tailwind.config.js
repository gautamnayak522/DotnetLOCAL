module.exports = {
  content: ["./tailwind/**/*.{html,js}",'./node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        clifford: '#e277e6',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
