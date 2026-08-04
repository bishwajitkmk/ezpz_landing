import React, { createContext, useContext, useMemo, useState } from "react";
import { translations } from "./content";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const value = useMemo(() => {
    const getTranslation = (path) => {
      const keys = path.split(".");
      const fallback = keys.reduce((acc, key) => acc?.[key], translations.en);
      const current = keys.reduce(
        (acc, key) => acc?.[key],
        translations[language],
      );

      return current ?? fallback;
    };

    return {
      language,
      setLanguage,
      toggleLanguage: () =>
        setLanguage((current) => (current === "en" ? "bn" : "en")),
      t: getTranslation,
      content: translations[language],
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};
