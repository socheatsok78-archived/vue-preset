module.exports = {
    install (api) {
        api.render('../template/i18n')

        api.injectImports(api.entryFile, `import i18n from './i18n'`)
        api.injectRootOptions(api.entryFile, `i18n`)
    }
}
