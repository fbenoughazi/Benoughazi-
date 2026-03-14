import React from 'react';

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest py-16 border-t border-outline-variant/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Copyright */}
          <div className="space-y-4">
            <img src="/fatimalogo.png" alt="Maître Fatima Logo" className="h-16 w-auto mb-4" />
            <p className="text-on-surface-variant text-sm leading-relaxed">
              محامية لدى هيئة المحامين بطنجة<br />
              Expertise Juridique Internationale &amp; Conseil Stratégique
            </p>
            <p className="text-on-surface-variant text-sm pt-4">© 2024 Maître Fatima Ezzahra Benoughazi. All Rights Reserved.</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-on-surface font-headline font-bold text-lg mb-4">روابط سريعة</h4>
            <div className="flex flex-col gap-3">
              <a className="text-on-surface-variant hover:text-primary transition-colors text-base font-label w-fit" href="/">الرئيسية</a>
              <a className="text-on-surface-variant hover:text-primary transition-colors text-base font-label w-fit" href="/bio">بطاقة تعريفية</a>
              <a className="text-on-surface-variant hover:text-primary transition-colors text-base font-label w-fit" href="/interests">مجالات الخبرة</a>
              <a className="text-on-surface-variant hover:text-primary transition-colors text-base font-label w-fit" href="/contact">للتواصل</a>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-on-surface font-headline font-bold text-lg mb-4">تواصل معنا</h4>
            <div className="flex flex-col gap-4">
              <a className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors font-label w-fit" href="#">
                <span className="material-symbols-outlined text-xl" data-icon="work">work</span>
                <span>LinkedIn</span>
              </a>
              <a className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors font-label w-fit" href="#">
                <span className="material-symbols-outlined text-xl" data-icon="thumb_up">thumb_up</span>
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 lg:flex lg:flex-col lg:justify-start">
            <h4 className="text-on-surface font-headline font-bold text-lg mb-4">خدماتنا</h4>
            <a href="/contact" className="gold-gradient text-on-primary px-8 py-3 rounded-md font-label text-sm font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity w-full text-center">
              <span className="material-symbols-outlined text-lg" data-icon="calendar_today">calendar_today</span>
              تحديد موعد استشارة
            </a>
            <a href="/interests" className="border border-outline-variant text-on-surface px-8 py-3 rounded-md font-label text-sm hover:bg-surface-container transition-colors w-full text-center block mt-3">
              اكتشف مجالات الخبرة
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
