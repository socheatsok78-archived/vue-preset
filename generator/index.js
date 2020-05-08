const packages = require('./utils/packages')

const VuePlugin = require('./vue/vue.plugin')
const ApiPlugin = require('./app/app.plugin')
const i18nPlugin = require('./i18n/i18n.plugin')
const MockPlugin = require('./mocks/mocks.plugin')

module.exports = (api, options, rootOptions) => {
  // Install additional dependencies
  api.extendPackage(packages)

  // Generate assets in "src"
  VuePlugin.install(api)

  // Inject application to root
  ApiPlugin.install(api)

  // Inject i18n to root
  i18nPlugin.install(api)

  // Inject mocks to root
  MockPlugin.install(api)
}
