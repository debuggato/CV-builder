import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../translations/en.json';
import it from '../translations/it.json';
import es from '../translations/es.json';
import fr from '../translations/fr.json';
import de from '../translations/de.json';

// the translations
const resources = {
  ...en,
  ...it,
  ...es,
  ...fr,
  ...de
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  keySeparator: false,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
