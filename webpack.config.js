module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: {
          loader: '@svgr/webpack',
          options: {
            svgo: false
          }
        }
      }
    ]
  }
}
