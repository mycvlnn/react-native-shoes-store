import i18n, { LanguageDetectorModule } from 'i18next'
import { initReactI18next } from 'react-i18next'
import { translations } from './translations'
import * as RNLocalize from 'react-native-localize'

const languageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  detect: () => {
    return RNLocalize.getLocales()[0].languageCode || 'en'
  },
  init: () => {},
  cacheUserLanguage: () => {},
}

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    resources: translations,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })
  .catch((err) => {
    console.log(err)
  })

export default i18n
