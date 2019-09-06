const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Primer Design System',
    shortName: '',
    description: 'The design system that powers GitHub',
    imageUrl: 'https://user-images.githubusercontent.com/10384315/53922681-2f6d3100-402a-11e9-9719-5d1811c8110a.png'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: require.resolve('./src/icons/favicon-192.png')
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        defaultLayouts: {
          default: require.resolve('./src/components/Layout.js')
        }
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgo: false
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: path.resolve('./src/pages'),
        layout: 'default'
      }
    },
    // note: this must go last
    'gatsby-plugin-meta-redirect'
  ]
}
