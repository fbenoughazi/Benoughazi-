"use client";
import { useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { useLanguage } from "@/components/LanguageProvider";

export function ContactForm() {
  const { t, lang } = useLanguage();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/myknlago", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const successTitle = lang === "ar" ? "تم إرسال رسالتك بنجاح!" : "Your message has been sent!";
  const successBody =
    lang === "ar"
      ? "شكراً على تواصلكم معنا. سيقوم فريقنا بالرد عليكم في أقرب وقت ممكن."
      : "Thank you for reaching out. We will get back to you as soon as possible.";
  const sendAnother = lang === "ar" ? "إرسال رسالة أخرى" : "Send another message";
  const sending = lang === "ar" ? "جارِ الإرسال..." : "Sending...";
  const errorMsg =
    lang === "ar" ? "حدث خطأ أثناء الإرسال. يرجى المحاولة مجدداً." : "An error occurred while sending. Please try again.";

  return (
    <div className="relative p-10 rounded-[32px] border border-white/10 bg-[#0A0A0A]/60 backdrop-blur-2xl overflow-hidden shadow-2xl">
      {/* Top gold glowing accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#D4A745]/60 to-transparent"></div>
      {/* Soft radial glow entering from top center */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#D4A745]/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="relative z-10 mb-8 text-center text-white">
        <SectionTitle className="mb-2">{t.contact.formTitle}</SectionTitle>
      </div>

      {status === "success" ? (
        <div className="relative z-10 flex flex-col items-center justify-center py-16 text-center gap-6">
          <div className="w-20 h-20 rounded-full bg-[#D4A745]/20 border border-[#D4A745]/40 flex items-center justify-center">
            <span className="material-symbols-outlined text-[#D4A745] text-4xl">check_circle</span>
          </div>
          <h3 className="text-white text-2xl font-bold">{successTitle}</h3>
          <p className="text-white/60 text-sm leading-relaxed">{successBody}</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-2 border border-[#D4A745]/50 text-[#D4A745] px-8 py-3 rounded-xl text-sm hover:bg-[#D4A745]/10 transition-colors"
          >
            {sendAnother}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 transition-colors focus-within:border-[#D4A745]/40 hover:bg-white/[0.05]">
              <label className="block text-xs font-label text-white/50 mb-1 uppercase tracking-wider">{t.contact.nameLabel}</label>
              <input name="name" required className="w-full bg-transparent border-none p-0 focus:ring-0 text-white text-sm" type="text" placeholder={t.contact.namePlaceholder} />
            </div>
            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 transition-colors focus-within:border-[#D4A745]/40 hover:bg-white/[0.05]">
              <label className="block text-xs font-label text-white/50 mb-1 uppercase tracking-wider">{t.contact.emailLabel}</label>
              <input name="email" required className="w-full bg-transparent border-none p-0 focus:ring-0 text-white text-sm" type="email" placeholder="email@example.com" dir={lang === "ar" ? "rtl" : "ltr"} />
            </div>
          </div>
          <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 transition-colors focus-within:border-[#D4A745]/40 hover:bg-white/[0.05]">
            <label className="block text-xs font-label text-white/50 mb-1 uppercase tracking-wider">{t.contact.subjectLabel}</label>
            <input name="subject" required className="w-full bg-transparent border-none p-0 focus:ring-0 text-white text-sm" type="text" placeholder={t.contact.subjectPlaceholder} />
          </div>
          <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 transition-colors focus-within:border-[#D4A745]/40 hover:bg-white/[0.05]">
            <label className="block text-xs font-label text-white/50 mb-1 uppercase tracking-wider">{t.contact.messageLabel}</label>
            <textarea name="message" required className="w-full bg-transparent border-none p-0 focus:ring-0 text-white text-sm resize-none" rows={4} placeholder={t.contact.messagePlaceholder}></textarea>
          </div>
          {status === "error" && <p className="text-red-400 text-sm text-center">{errorMsg}</p>}
          <button
            className="w-full bg-[#D4A745] hover:bg-[#B8860B] text-black py-4 rounded-2xl font-bold uppercase tracking-wider transition-colors mt-2 disabled:opacity-60"
            type="submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? sending : t.contact.send}
          </button>
        </form>
      )}
    </div>
  );
}
