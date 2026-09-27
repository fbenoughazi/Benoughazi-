"use client";
import { Section } from "@/components/Section";
import { HeroBanner } from "@/components/HeroBanner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { ContactDetails } from "@/components/ContactDetails";
import { useLanguage } from "@/components/LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />

      <HeroBanner title={t.contact.heroTitle} />
      {/* Contact Section */}
      <Section id="contact" className="py-16 lg:py-24 bg-surface min-h-screen">
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
            <ContactDetails email="fbenoughazi@gmail.com" />
          </div>
          <ContactForm />
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </>
  );
}
