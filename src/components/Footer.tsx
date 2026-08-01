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
            <a
              href="https://www.linkedin.com/in/fatima-ezzahra-benoughazi-52255a135/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant/20 text-on-surface-variant hover:text-primary hover:border-primary/40 transition-colors"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
              </svg>
            </a>
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
