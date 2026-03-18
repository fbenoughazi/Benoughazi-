import { Section } from "@/components/Section";
import { HeroBanner } from "@/components/HeroBanner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";

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
                  <p className="text-white/60 text-sm tracking-wider transition-colors duration-500 group-hover:text-white/80">fbenoughazi@gmail.com</p>
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
          <ContactForm />
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </>
  );
}
