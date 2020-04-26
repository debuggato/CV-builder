import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../translations/en.json';
import it from '../translations/it.json';
import es from '../translations/es.json';
import fr from '../translations/fr.json';
import de from '../translations/de.json';

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
