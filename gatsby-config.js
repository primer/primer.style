const path = require('path')

module.exports = themeOptions => {
  return {
    plugins: [
      'gatsby-plugin-styled-components',
      'gatsby-plugin-svgr',
      'gatsby-plugin-react-helmet',
      'gatsby-transformer-yaml',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'pages',
          path: path.resolve('./src/pages')
        }
      },
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
          extensions: ['.mdx', '.md'],
          defaultLayouts: {
            default: require.resolve('./src/components/Layout')
          }
        }
      },
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          icon: require.resolve('./src/images/favicon.png')
        }
      }
    ]
  }
}
