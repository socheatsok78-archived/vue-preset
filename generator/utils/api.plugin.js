module.exports = {
    install (api) {
        api.render('../template/app')

        api.injectImports(api.entryFile, `import $app from './$app'`)
        api.injectRootOptions(api.entryFile, `$app`)
    }
}
