import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { HeroBanner } from "@/components/HeroBanner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />

      <HeroBanner title="للتواصل" />
      {/* Contact Section */}
      <Section id="contact" className="py-24 bg-surface min-h-screen">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <img src="/fatimalogo.png" alt="Maître Fatima" className="h-16 w-auto mb-8" />
              <p className="text-white/80 text-lg leading-relaxed">
                نحن هنا للإجابة عن جميع تساؤلاتكم وتقديم الاستشارة والدعم القانوني الذي تستحقونه.
                <br />
                إذا رغبتم في التواصل معنا أو الحصول على استشارة، يُرجى ملء نموذج الاتصال، وسيقوم فريقنا بالرد عليكم في أقرب وقت ممكن.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 bg-transparent border border-white/5 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:border-[#D4A745]/40 group-hover:bg-white/[0.05]">
                  <span className="material-symbols-outlined text-[#D4A745] text-2xl transition-all duration-500 ease-in-out group-hover:scale-[1.3] group-hover:-translate-y-1" data-icon="call">call</span>
                </div>
                <div>
                  <p className="text-white font-bold text-lg mb-1">الهاتف</p>
                  <p className="text-white/60 text-sm uppercase tracking-widest transition-colors duration-500 group-hover:text-white/80" dir="ltr">0531145175 / 0663559354</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 bg-transparent border border-white/5 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:border-[#D4A745]/40 group-hover:bg-white/[0.05]">
                  <span className="material-symbols-outlined text-[#D4A745] text-2xl transition-all duration-500 ease-in-out group-hover:scale-[1.3] group-hover:-translate-y-1" data-icon="mail">mail</span>
                </div>
                <div>
                  <p className="text-white font-bold text-lg mb-1">البريد الإلكتروني</p>
                  <p className="text-white/60 text-sm tracking-wider transition-colors duration-500 group-hover:text-white/80">contact@benoughazilawfirm.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 bg-transparent border border-white/5 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:border-[#D4A745]/40 group-hover:bg-white/[0.05]">
                  <span className="material-symbols-outlined text-[#D4A745] text-2xl transition-all duration-500 ease-in-out group-hover:scale-[1.3] group-hover:-translate-y-1" data-icon="location_on">location_on</span>
                </div>
                <div>
                  <p className="text-white font-bold text-lg mb-1">العنوان</p>
                  <p className="text-white/60 text-sm transition-colors duration-500 group-hover:text-white/80">زنقة العراق، إقامة رضوان، طنجة، المغرب</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative p-10 rounded-[32px] border border-white/10 bg-[#0A0A0A]/60 backdrop-blur-2xl overflow-hidden shadow-2xl">
            {/* Top gold glowing accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#D4A745]/60 to-transparent"></div>
            {/* Soft radial glow entering from top center */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#D4A745]/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10 mb-8 text-center text-white">
              <SectionTitle className="mb-2">تواصل معنا</SectionTitle>
            </div>

            <form action="https://formsubmit.co/fbenoughazi@gmail.com" method="POST" className="relative z-10 space-y-5">
              <input type="hidden" name="_subject" value="رسالة جديدة المرجو الرد - استشارة قانونية" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="grid grid-cols-2 gap-5">
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 transition-colors focus-within:border-[#D4A745]/40 hover:bg-white/[0.05]">
                  <label className="block text-xs font-label text-white/50 mb-1 uppercase tracking-wider">الاسم الكامل</label>
                  <input name="name" required className="w-full bg-transparent border-none p-0 focus:ring-0 text-white text-sm" type="text" placeholder="محمد أحمد" />
                </div>
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 transition-colors focus-within:border-[#D4A745]/40 hover:bg-white/[0.05]">
                  <label className="block text-xs font-label text-white/50 mb-1 uppercase tracking-wider">البريد الإلكتروني</label>
                  <input name="email" required className="w-full bg-transparent border-none p-0 focus:ring-0 text-white text-sm text-right" type="email" placeholder="email@example.com" dir="rtl" />
                </div>
              </div>
              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 transition-colors focus-within:border-[#D4A745]/40 hover:bg-white/[0.05]">
                <label className="block text-xs font-label text-white/50 mb-1 uppercase tracking-wider">الموضوع</label>
                <input name="subject" required className="w-full bg-transparent border-none p-0 focus:ring-0 text-white text-sm" type="text" placeholder="استشارة قانونية" />
              </div>
              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 transition-colors focus-within:border-[#D4A745]/40 hover:bg-white/[0.05]">
                <label className="block text-xs font-label text-white/50 mb-1 uppercase tracking-wider">رسالتك</label>
                <textarea name="message" required className="w-full bg-transparent border-none p-0 focus:ring-0 text-white text-sm resize-none" rows={4} placeholder="تفاصيل بخصوص طلبك..."></textarea>
              </div>
              <button className="w-full bg-[#D4A745] hover:bg-[#B8860B] text-black py-4 rounded-2xl font-bold uppercase tracking-wider transition-colors mt-2" type="submit">
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </>
  );
}
