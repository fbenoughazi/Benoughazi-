"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const getLinkClass = (path: string) => {
    return pathname === path
      ? "text-primary transition-colors text-sm font-label"
      : "text-on-surface-variant hover:text-primary transition-colors text-sm font-label";
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav min-h-[5rem]">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col justify-center">
        <div className="flex items-center justify-between h-20 w-full">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/">
              <img src="/fatimalogo.png" alt="Maître Fatima Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link className={getLinkClass("/")} href="/">{t.nav.home}</Link>
            <Link className={getLinkClass("/bio")} href="/bio">{t.nav.bio}</Link>
            <Link className={getLinkClass("/interests")} href="/interests">{t.nav.interests}</Link>
            <Link className={getLinkClass("/contact")} href="/contact">{t.nav.contact}</Link>
          </div>

          {/* Language Switcher & Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <LanguageSwitcher />
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="material-symbols-outlined text-3xl">{isOpen ? "close" : "menu"}</span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden flex flex-col gap-6 pt-4 pb-8 border-t border-white/10">
            <Link className={getLinkClass("/")} href="/" onClick={() => setIsOpen(false)}>{t.nav.home}</Link>
            <Link className={getLinkClass("/bio")} href="/bio" onClick={() => setIsOpen(false)}>{t.nav.bio}</Link>
            <Link className={getLinkClass("/interests")} href="/interests" onClick={() => setIsOpen(false)}>{t.nav.interests}</Link>
            <Link className={getLinkClass("/contact")} href="/contact" onClick={() => setIsOpen(false)}>{t.nav.contact}</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
