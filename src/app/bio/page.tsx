"use client";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { HeroBanner } from "@/components/HeroBanner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageProvider";

export default function Bio() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />

      <HeroBanner title={t.bio.heroTitle} />
      {/* Main Bio Content */}
      <Section id="about" className="py-24 bg-surface min-h-screen">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative group overflow-hidden rounded-xl shadow-2xl aspect-[4/5] max-w-[480px] mx-auto lg:mr-auto lg:ml-0">
              <div className="absolute -top-4 -right-4 w-32 h-32 border-r-2 border-t-2 border-primary/30 z-10 pointer-events-none"></div>
              <img
                alt="Maître Fatima Ezzahra Benoughazi"
                className="w-full h-full object-cover object-top transition-all duration-700 transform hover:scale-105"
                src="/fatima.JPG"
              />
              {/* Deeper bottom black gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <SectionTitle className="text-primary flex items-center gap-4">
              {t.about.title}
              <span className="h-[2px] w-20 bg-primary/30"></span>
            </SectionTitle>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg font-body">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </>
  );
}
