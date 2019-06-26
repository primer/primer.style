import getConfig from 'next/config'

export const config = getConfig().publicRuntimeConfig || {}
export const assetPrefix = config.assetPrefix || ''
export const assetPath = `${assetPrefix}/static/`
export const getAssetPath = path => `${assetPath}${path}`
