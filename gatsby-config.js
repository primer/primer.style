const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Primer Design System',
    shortName: '',
    description: 'The design system that powers GitHub',
    imageUrl: 'https://user-images.githubusercontent.com/10384315/53922681-2f6d3100-402a-11e9-9719-5d1811c8110a.png',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: '/custom/',
        https: true,
        www: true,
        SymLinksIfOwnerMatch: true,
        host: 'www.mydomain.com', // if 'www' is set to 'false', be sure to also remove it here!
        ErrorDocument: `
          ErrorDocument 401 /error_pages/401.html
          ErrorDocument 404 /error_pages/404.html
          ErrorDocument 500 /error_pages/500.html
        `,
        redirect: [
          'RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]',
          {
            from: 'my-domain.com',
            to: 'mydomain.com',
          },
        ],
        custom: `
          RewriteRule ^react/$ https://primer-components.vercel.app/react [R=200,L]
        `,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: require.resolve('./src/icons/favicon-192.png'),
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        defaultLayouts: {
          default: require.resolve('./src/components/Layout.js'),
        },
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgo: false,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: path.resolve('./src/pages'),
        layout: 'default',
      },
    },
    // note: this must go last
    'gatsby-plugin-meta-redirect',
  ],
}
