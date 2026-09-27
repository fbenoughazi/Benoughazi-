"use client";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { AcademicBackground } from "@/components/AcademicBackground";
import { ContactDetails } from "@/components/ContactDetails";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[640px] h-[92vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Lady Justice"
            className="w-full h-full object-cover object-[35%_30%] lg:object-[center_30%] opacity-70 lg:opacity-50"
            src="/lawyer tanger.png"
          />
          {/* Elegant multi-layer gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-surface via-surface/60 to-transparent lg:via-surface/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface/70 lg:to-surface/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-black/10 lg:bg-black/20"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-start text-start">
          <span className="text-primary tracking-[0.2em] font-label text-sm mb-4 uppercase">{t.hero.badge}</span>
          <h1 className="text-2xl lg:text-4xl font-headline font-extrabold text-on-surface mb-6 leading-tight">
            {t.hero.name}
          </h1>
          <p className="text-2xl lg:text-3xl font-headline text-secondary mb-10 max-w-2xl">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* About Section (نبذة تعريفية) */}
      <Section id="about" className="py-16 lg:py-24 bg-surface-container-low">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
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
          <div className="order-1 lg:order-2 space-y-8 text-start">
            <SectionTitle className="text-primary flex flex-wrap items-center gap-4">
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

      <AcademicBackground />

      {/* Expertise Section (مجالات الخبرة) */}
      <Section id="expertise" className="py-20 lg:py-32 bg-surface relative overflow-hidden">
        {/* Soft Ambient Gold Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/[0.08] rounded-full blur-[140px] pointer-events-none translate-x-1/4 -translate-y-1/4 z-0"></div>

        <div className="text-center mb-12 lg:mb-20 relative z-10">
          <SectionTitle className="lg:text-5xl text-on-surface mb-4">{t.expertise.title}</SectionTitle>
        </div>
        {/* Bento Grid Layout for Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
          {t.expertise.cards.map((card, i) => (
            <Card key={i} className="expertise-card p-6 sm:p-8 flex flex-col gap-4">
              <h3 className="text-xl font-headline font-bold">{card.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{card.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="py-20 lg:py-32 bg-surface">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-12">
            <div>
              <img src="/fatimalogo.png" alt="Maître Fatima" className="h-16 w-auto mb-8" />
              <p className="text-white/80 text-lg leading-relaxed">
                {t.contact.intro1}
                <br />
                {t.contact.intro2}
              </p>
            </div>
            <ContactDetails email="contact@benoughazilawfirm.com" />
          </div>
          <ContactForm />
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </>
  );
}
