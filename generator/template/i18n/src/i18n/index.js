import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {}
const TranslationFileLoader = require.context('./lang', true, /\.js$/)

TranslationFileLoader
  .keys()
  .forEach(key => {
    const payload = TranslationFileLoader(key).default
    const pattern = /\.\/(\w.+)\/(\w.+)\.js$/

    const { 1: locale, 2: path } = pattern.exec(key)

    messages[locale] = messages[locale] || {}
    messages[locale][path] = messages[locale][path] || {}
    messages[locale][path] = payload
  })

const i18n = new VueI18n({
  locale: 'en',
  messages,
  silentTranslationWarn: true
});

export default i18n
