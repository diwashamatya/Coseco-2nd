import { useState } from "react";
import LanguageContext from "./LanguageContext";
import en from "../i18n/en.json";
import nl from "../i18n/nl.json";

const languages = { en, nl };

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lang) => setLanguage(lang);

  // Function to get nested value from object
  const getNestedValue = (obj, path) => {
    if (!obj) return undefined;
    return path.split(".").reduce((acc, part) => {
      // Handle array indices like "items.0"
      const arrayMatch = part.match(/^(\w+)\[(\d+)\]$/);
      if (arrayMatch) {
        const [, arrayName, index] = arrayMatch;
        return acc && acc[arrayName] && acc[arrayName][parseInt(index)];
      }
      return acc && acc[part];
    }, obj);
  };

  const t = (key) => {
    const translation = languages[language];
    if (!translation) return key;

    // Try to get nested value
    const value = getNestedValue(translation, key);

    // If value is found, return it
    if (value !== undefined && value !== null) {
      return value;
    }

    // Fallback to the key itself if not found
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
