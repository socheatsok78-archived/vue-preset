module.exports = {
    install (api) {
        api.render('./template')

        api.injectImports(api.entryFile, `import $app from './$app'`)
        api.injectRootOptions(api.entryFile, `$app`)
    }
}
