"use client";

import { useLanguage } from "@/components/LanguageProvider";

const googleMapsUrl = "https://maps.app.goo.gl/Z6E11sYTMiVjdj5z8";

interface ContactDetailsProps {
  email: string;
}

export function ContactDetails({ email }: ContactDetailsProps) {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      <div className="flex items-start gap-4 sm:gap-6 group">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-transparent border border-white/5 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:border-[#D4A745]/40 group-hover:bg-white/[0.05]">
          <span className="material-symbols-outlined text-[#D4A745] text-2xl transition-all duration-500 ease-in-out group-hover:scale-[1.3] group-hover:-translate-y-1" data-icon="call">call</span>
        </div>
        <div className="min-w-0 text-start">
          <p className="text-white font-bold text-lg mb-1">{t.contact.phone}</p>
          <p className="text-white/60 text-xs sm:text-sm uppercase tracking-normal sm:tracking-widest leading-relaxed break-words transition-colors duration-500 group-hover:text-white/80" dir="ltr">
            +212 5 31 14 51 75 / +212 6 63 55 93 54
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4 sm:gap-6 group">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-transparent border border-white/5 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:border-[#D4A745]/40 group-hover:bg-white/[0.05]">
          <span className="material-symbols-outlined text-[#D4A745] text-2xl transition-all duration-500 ease-in-out group-hover:scale-[1.3] group-hover:-translate-y-1" data-icon="mail">mail</span>
        </div>
        <div className="min-w-0 text-start">
          <p className="text-white font-bold text-lg mb-1">{t.contact.email}</p>
          <p className="text-white/60 text-sm tracking-wider break-words transition-colors duration-500 group-hover:text-white/80" dir="ltr">
            {email}
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4 sm:gap-6 group">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-transparent border border-white/5 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:border-[#D4A745]/40 group-hover:bg-white/[0.05]">
          <span className="material-symbols-outlined text-[#D4A745] text-2xl transition-all duration-500 ease-in-out group-hover:scale-[1.3] group-hover:-translate-y-1" data-icon="location_on">location_on</span>
        </div>
        <div className="min-w-0 text-start">
          <p className="text-white font-bold text-lg mb-1">{t.contact.address}</p>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-white/60 text-sm leading-relaxed break-words transition-colors duration-500 group-hover:text-white/80 hover:text-primary"
          >
            {t.contact.addressValue}
          </a>
        </div>
      </div>

      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex max-w-full items-center justify-center rounded-lg border border-primary/30 px-5 py-3 text-sm font-label leading-snug text-primary transition-colors hover:bg-primary hover:text-on-primary"
      >
        {t.contact.mapLink}
      </a>
    </div>
  );
}
