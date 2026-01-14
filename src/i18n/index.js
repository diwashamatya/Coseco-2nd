import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import JSONs
import en from "./en.json";
import nl from "./nl.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    nl: { translation: nl },
  },
  lng: "en", // default language
  fallbackLng: "en",
  keySeparator: false, // Treat dots literally (important!)
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
