"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { translations, Language, Translations } from "@/lib/translations";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "ar",
  setLang: () => {},
  t: translations.ar,
});

export function LanguageProvider({
  initialLang,
  children,
}: {
  initialLang: Language;
  children: React.ReactNode;
}) {
  const [lang, setLangState] = useState<Language>(initialLang);

  // One-time migration: older visits saved the language in localStorage
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "ar") {
      localStorage.removeItem("lang");
      if (saved !== lang) setLang(saved);
      else document.cookie = `lang=${saved}; path=/; max-age=31536000`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep <html> lang/dir in sync
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    // Cookie lets the server render the correct language on the next page load
    document.cookie = `lang=${newLang}; path=/; max-age=31536000`;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
