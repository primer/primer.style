const redirects = require('./redirects')

exports.createPages = ({actions: {createRedirect}}) => {
  for (const [fromPath, toPath] of Object.entries(redirects)) {
    console.warn(`[redirect] ${fromPath} → ${toPath}`)
    createRedirect({fromPath, toPath, redirectInBrowser: true})
  }
}
