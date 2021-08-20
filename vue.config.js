module.exports = {
  css: {
    loaderOptions: {
        sass: {
            prependData: '@import "@/scss/styles.scss";'
        }
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  }
}

