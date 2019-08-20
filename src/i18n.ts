import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './translations/en.json'

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  ...en
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;