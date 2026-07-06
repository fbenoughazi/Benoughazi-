"use client";
import { useLanguage } from "@/components/LanguageProvider";
import { Language } from "@/lib/translations";

const languages: { code: Language; label: string; flag: string; alt: string }[] = [
  { code: "ar", label: "ع", flag: "https://flagcdn.com/w40/ma.png", alt: "العربية" },
  { code: "en", label: "EN", flag: "https://flagcdn.com/w40/gb.png", alt: "English" },
];

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 border border-white/10 rounded-full p-1 bg-white/[0.03]">
      {languages.map(({ code, label, flag, alt }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          title={alt}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-label font-bold transition-all duration-300 ${
            lang === code
              ? "bg-primary/15 text-primary"
              : "text-on-surface-variant opacity-60 hover:opacity-100"
          }`}
        >
          <img src={flag} alt={alt} className="w-5 h-auto rounded-[2px]" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
