"use client";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { HeroBanner } from "@/components/HeroBanner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageProvider";

const expertiseIcons = [
  "balance",
  "business_center",
  "badge",
  "domain",
  "gavel",
  "public",
  "account_balance_wallet",
  "account_balance",
  "handshake",
];

export default function Interests() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />

      <HeroBanner title={t.expertise.title} />
      {/* Expertise Section */}
      <Section id="expertise" className="py-24 bg-surface min-h-screen relative overflow-hidden">
        {/* Soft Ambient Gold Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/[0.08] rounded-full blur-[140px] pointer-events-none translate-x-1/4 -translate-y-1/4 z-0"></div>

        {/* Bento Grid Layout for Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
          {t.expertise.cards.map((card, i) => (
            <Card key={i} className="expertise-card p-8 flex flex-col gap-4">
              <span className="material-symbols-outlined text-primary text-4xl" data-icon={expertiseIcons[i]}>{expertiseIcons[i]}</span>
              <h3 className="text-xl font-headline font-bold">{card.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{card.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </>
  );
}
