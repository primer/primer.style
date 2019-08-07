const redirects = require('./redirects')
const getReleases = require('./src/data/releases')

exports.createPages = ({actions: {createRedirect}}) => {
  for (const [fromPath, toPath] of Object.entries(redirects)) {
    console.warn(`[redirect] ${fromPath} → ${toPath}`)
    createRedirect({fromPath, toPath, redirectInBrowser: true})
  }
}

exports.sourceNodes = async ({actions: {createNode}, createContentDigest}) => {
  const releases = await getReleases()

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
        contentDigest: createContentDigest(release)
      }
    }
    createNode(node)
  }
}
