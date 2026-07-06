"use client";
import React from 'react';
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-surface-container-lowest py-16 border-t border-outline-variant/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-12">

          {/* Brand & Copyright */}
          <div className="space-y-4">
            <img src="/fatimalogo.png" alt="Maître Fatima Logo" className="h-16 w-auto mb-4" />
            <p className="text-on-surface-variant text-sm leading-relaxed">
              {t.footer.tagline1}<br />
              {t.footer.tagline2}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-on-surface font-headline font-bold text-lg mb-4">{t.footer.quickLinks}</h4>
            <div className="flex flex-col gap-3">
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-base font-label w-fit" href="/">{t.nav.home}</Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-base font-label w-fit" href="/bio">{t.nav.bio}</Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-base font-label w-fit" href="/interests">{t.nav.interests}</Link>
              <Link className="text-on-surface-variant hover:text-primary transition-colors text-base font-label w-fit" href="/contact">{t.nav.contact}</Link>
            </div>
          </div>

        </div>

        {/* Copyright at the bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 text-left">
          <p className="text-on-surface-variant text-sm font-label">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
