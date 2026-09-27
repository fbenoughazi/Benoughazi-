"use client";

import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { useLanguage } from "@/components/LanguageProvider";

export function AcademicBackground() {
  const { t } = useLanguage();

  return (
    <Section id="academic-background" className="py-16 lg:py-24 bg-surface">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div className="space-y-8 text-start">
          <SectionTitle className="text-primary flex flex-wrap items-center gap-4">
            {t.academic.title}
            <span className="h-[2px] w-20 bg-primary/30"></span>
          </SectionTitle>

          <div className="border-s border-primary/30 ps-6 space-y-8">
            {t.academic.items.map((item) => (
              <article key={item.degree} className="relative">
                <span className="absolute top-2 -start-[31px] h-3 w-3 rounded-full bg-primary ring-4 ring-surface"></span>
                <h3 className="text-xl lg:text-2xl font-headline font-bold text-on-surface leading-snug">
                  {item.degree}
                </h3>
                <p className="mt-3 text-base lg:text-lg text-on-surface-variant leading-relaxed">
                  {item.institution}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[460px]">
          <div className="absolute -top-4 -start-4 h-28 w-28 border-s-2 border-t-2 border-primary/30 pointer-events-none"></div>
          <div className="overflow-hidden rounded-xl shadow-2xl aspect-[4/5] bg-surface-container-high">
            <img
              alt={t.academic.imageAlt}
              className="h-full w-full object-cover object-top"
              src="/fatima-benoughazi.jpeg"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
