import './utils/debug'

/**
 * @namespace
 * @property {String} baseUrl API base URL
 * @property {String} defaultLocale Default application locale
 */
const $app = {
    baseURL: process.env.VUE_APP_BASE_URL || '/',
    defaultLocale: process.env.VUE_APP_LOCALE || 'en'
}

export default $app
