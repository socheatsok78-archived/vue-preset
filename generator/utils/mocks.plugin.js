module.exports = {
    install (api) {
        api.render('../template/mocks')

        api.injectImports(api.entryFile, `import './mocks'`)
    }
}
