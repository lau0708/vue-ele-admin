
import Vue from "vue"
import VueI18n from 'vue-i18n'

import zh from "./i18n/zh"
import en from "./i18n/en"
import locale from "element-ui/lib/locale/index";

Vue.use(VueI18n)


const i18n = new VueI18n({
  locale: 'zh', // 语言标识
  messages:{
    zh, en
  },
  silentTranslationWarn: true
})

locale.i18n( (key,value)=> i18n.t(key,value)) //兼容elementUI的国际化


export default i18n;
