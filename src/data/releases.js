const fetch = require('node-fetch')
const semver = require('semver')

const PRIMER_PACKAGES = ['@primer/css', '@primer/components', '@primer/octicons']

module.exports = async function getReleases(packages = PRIMER_PACKAGES) {
  const releases = []
  for (const name of packages) {
    const [org, repo] = name.replace(/^@/, '').split('/')
    const repoURL = `https://github.com/${org}/${repo}`
    const packageInfo = await fetch(`https://registry.npmjs.org/${name}`).then(res => res.json())
    for (const version of Object.keys(packageInfo.versions)) {
      const parsed = semver.parse(version)
      if (parsed.patch === 0 && parsed.prerelease.length === 0) {
        releases.push({
          type: 'release',
          name,
          title: `${name}@${version}`,
          version,
          url: `${repoURL}/releases/tag/v${version}`,
          date: packageInfo.time[version]
        })
      }
    }
  }
  return releases
}
