/* eslint-disable github/unescaped-html-literal */
const {join} = require('path')
const {copyFileSync} = require('fs')
const mkdirp = require('mkdirp')

const argIndex = process.argv.indexOf('--out-dir')
const outDir = argIndex > -1 ? process.argv[argIndex + 1] : 'docs'
const iconsDir = join(outDir, 'icons')

mkdirp.sync(iconsDir)

const path = file => {
  copyFileSync(join(__dirname, file), join(iconsDir, file))
  return `/icons/${file}`
}

const link = ({rel = 'icon', type = 'image/png', file}) => `<link rel="${rel}" type="${type}" href="${path(file)}">`

const meta = ({name, file}) => `<link name="${name}" content="${path(file)}">`

module.exports = [
  link({rel: 'icon', type: 'image/png', file: 'favicon.png'}),
  link({rel: 'apple-touch-icon', file: 'touch-icon-iphone.png'}),
  link({rel: 'apple-touch-icon', sizes: '152x152', file: 'touch-icon-ipad.png'}),
  link({rel: 'apple-touch-icon', sizes: '167x167', file: 'touch-icon-ipad-retina.png'}),
  link({rel: 'apple-touch-icon', sizes: '180x180', file: 'touch-icon-iphone-retina.png'}),
  link({rel: 'icon', sizes: '192x192', file: 'android-icon.png'}),
  meta({name: 'msapplication-square310x310logo', file: 'microsoft-icon.png'})
]
