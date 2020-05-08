const packages = require('./utils/packages')

const ApiPlugin = require('./utils/api.plugin')
const i18nPlugin = require('./utils/i18n.plugin')
const MockPlugin = require('./utils/mocks.plugin')

module.exports = (api, options, rootOptions) => {
  // Install additional dependencies
  api.extendPackage(packages)

  // Generate assets in "src"
  api.render('./template/vue')

  // Inject application to root
  ApiPlugin.install(api)

  // Inject i18n to root
  i18nPlugin.install(api)

  // Inject mocks to root
  MockPlugin.install(api)
}
