import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
import EnUs from './assets/lang/en-us.json'


Vue.config.productionTip = false

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en-us',
  fallbackLocale: 'zh-cn',
  // silentFallbackWarn: true,
  messages: {
    'en-us': EnUs
  }
})

const loadedLanguages = ['en-us']

const setI18nLanguage = (lang) => {
  i18n.locale = lang;
  return lang
}
const loadLanguageAsync =   (lang)  =>{
  // 目标语言和当前不符
  if (i18n.locale !== lang) {
    // 是否已经加载过
    if (!loadedLanguages.includes(lang)) {

      return import(/* webpackChunkName: "lang-[request]" */ `@/assets/lang/${lang}.json`).then(msgs => {
        
        i18n.setLocaleMessage(lang, msgs.default)
        loadedLanguages.push(lang)
        return setI18nLanguage(lang)
      })
    }
    return Promise.resolve(setI18nLanguage(lang))
  }
  // 相符，直接返回
  return Promise.resolve(lang)
}

router.beforeEach((to, from, next) => {
  const lang = to.query.lang || 'en-us';
  loadLanguageAsync(lang).then(() => next());
})

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
