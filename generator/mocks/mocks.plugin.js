module.exports = {
    install (api) {
        api.render('./template')

        api.injectImports(api.entryFile, `import './mocks'`)
    }
}
