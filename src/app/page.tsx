"use client";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[92vh] flex items-center pt-20 overflow-hidden">
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
      <Section id="about" className="py-24 bg-surface-container-low">
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

      {/* Expertise Section (مجالات الخبرة) */}
      <Section id="expertise" className="py-32 bg-surface relative overflow-hidden">
        {/* Soft Ambient Gold Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/[0.08] rounded-full blur-[140px] pointer-events-none translate-x-1/4 -translate-y-1/4 z-0"></div>

        <div className="text-center mb-20 relative z-10">
          <SectionTitle className="lg:text-5xl text-on-surface mb-4">{t.expertise.title}</SectionTitle>
        </div>
        {/* Bento Grid Layout for Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
          {t.expertise.cards.map((card, i) => (
            <Card key={i} className="expertise-card p-8 flex flex-col gap-4">
              <h3 className="text-xl font-headline font-bold">{card.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{card.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="py-32 bg-surface">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <img src="/fatimalogo.png" alt="Maître Fatima" className="h-16 w-auto mb-8" />
              <p className="text-white/80 text-lg leading-relaxed">
                {t.contact.intro1}
                <br />
                {t.contact.intro2}
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 bg-transparent border border-white/5 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:border-[#D4A745]/40 group-hover:bg-white/[0.05]">
                  <span className="material-symbols-outlined text-[#D4A745] text-2xl transition-all duration-500 ease-in-out group-hover:scale-[1.3] group-hover:-translate-y-1" data-icon="call">call</span>
                </div>
                <div>
                  <p className="text-white font-bold text-lg mb-1">{t.contact.phone}</p>
                  <p className="text-white/60 text-sm uppercase tracking-widest transition-colors duration-500 group-hover:text-white/80" dir="ltr">+212 5 31 14 51 75 / +212 6 63 55 93 54</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 bg-transparent border border-white/5 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:border-[#D4A745]/40 group-hover:bg-white/[0.05]">
                  <span className="material-symbols-outlined text-[#D4A745] text-2xl transition-all duration-500 ease-in-out group-hover:scale-[1.3] group-hover:-translate-y-1" data-icon="mail">mail</span>
                </div>
                <div>
                  <p className="text-white font-bold text-lg mb-1">{t.contact.email}</p>
                  <p className="text-white/60 text-sm tracking-wider transition-colors duration-500 group-hover:text-white/80">contact@benoughazilawfirm.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 bg-transparent border border-white/5 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:border-[#D4A745]/40 group-hover:bg-white/[0.05]">
                  <span className="material-symbols-outlined text-[#D4A745] text-2xl transition-all duration-500 ease-in-out group-hover:scale-[1.3] group-hover:-translate-y-1" data-icon="location_on">location_on</span>
                </div>
                <div>
                  <p className="text-white font-bold text-lg mb-1">{t.contact.address}</p>
                  <p className="text-white/60 text-sm transition-colors duration-500 group-hover:text-white/80">{t.contact.addressValue}</p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </>
  );
}
