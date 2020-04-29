import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@public/locales/en/translation.json';
import it from '@public/locales/it/translation.json';
import es from '@public/locales/es/translation.json';
import fr from '@public/locales/fr/translation.json';
import de from '@public/locales/de/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      it,
      es,
      fr,
      de
    },
    fallbackLng: 'en',
    debug: process.env.NODE_ENV !== 'production',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
  });

export default i18n;
