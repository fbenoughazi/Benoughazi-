"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
            <a href="/">
              <img src="/fatimalogo.png" alt="Maître Fatima Logo" className="h-10 w-auto" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a className={getLinkClass("/")} href="/">الرئيسية</a>
            <a className={getLinkClass("/bio")} href="/bio">بطاقة تعريفية</a>
            <a className={getLinkClass("/interests")} href="/interests">مجالات الخبرة</a>
            <a className={getLinkClass("/contact")} href="/contact">للتواصل</a>
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Desktop Action Button */}
            <div className="hidden lg:block">
              <a href="https://calendly.com/saidjabouri02/30min" target="_blank" rel="noopener noreferrer" className="gold-gradient text-on-primary px-6 py-2.5 rounded-md font-label text-sm font-bold shadow-lg">
                احجز استشارتك
              </a>
            </div>
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
            <a className={getLinkClass("/")} href="/">الرئيسية</a>
            <a className={getLinkClass("/bio")} href="/bio">بطاقة تعريفية</a>
            <a className={getLinkClass("/interests")} href="/interests">مجالات الخبرة</a>
            <a className={getLinkClass("/contact")} href="/contact">للتواصل</a>
            <a href="https://calendly.com/saidjabouri02/30min" target="_blank" rel="noopener noreferrer" className="gold-gradient text-on-primary px-6 py-3 rounded-md font-label text-sm font-bold shadow-lg text-center mt-2">
              احجز استشارتك
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
