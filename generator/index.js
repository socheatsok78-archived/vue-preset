module.exports = (api, options, rootOptions) => {
  // Install additional dependencies
  api.extendPackage({
    dependencies: {
      'axios': '^0.19.2',
      'chart.js': '^2.9.3',
      'lodash': '^4.17.15',
      'moment': '^2.25.3',
      'vee-validate': '^3.3.0',
      'vue-chartjs': '^3.5.0',
      'vue-i18n': '^8.17.4'
    },
    devDependencies: {
      'mimic': '^2.0.9'
    }
  })

  // Generate assets in "src"
  api.render('./template')

  // Inject i18n to root
  api.injectImports(api.entryFile, `import i18n from './i18n'`)
  api.injectRootOptions(api.entryFile, `i18n`)

  // Inject mocks to root
  api.injectImports(api.entryFile, `import './mocks'`)
}
