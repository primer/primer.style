const redirects = require('./redirects')
const getReleases = require('@primer/releases')

exports.createPages = ({actions: {createRedirect}}) => {
  for (const [fromPath, toPath] of Object.entries(redirects)) {
    // console.warn(`[redirect] ${fromPath} → ${toPath}`)
    createRedirect({fromPath, toPath, redirectInBrowser: true})
  }
}

exports.sourceNodes = async ({actions: {createNode}, createContentDigest}) => {
  const {releases} = await getReleases()
  for (const release of releases) {
    const node = {
      ...release,
      id: `PrimerRelease ${release.title}`,
      parent: null,
      children: [],
      internal: {
        type: 'PrimerRelease',
        mediaType: 'application/json',
        content: JSON.stringify(release),
        contentDigest: createContentDigest(release),
      },
    }
    createNode(node)
  }
}

exports.onCreateWebpackConfig = ({stage, loaders, actions, getConfig}) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
      },
    },
  })

  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            // Ignore "@github\/markdown-toolbar-element" module during server-side rendering
            // because it uses DOM APIs that aren't available on the server.
            // Copied from https://www.gatsbyjs.com/docs/debugging-html-builds/#fixing-third-party-modules
            test: /@github\/markdown-toolbar-element/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
