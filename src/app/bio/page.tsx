import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import { HeroBanner } from "@/components/HeroBanner";
import { Footer } from "@/components/Footer";

export default function Bio() {
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 glass-nav h-20">
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-full">
          <div className="flex items-center gap-4">
            <a href="/">
              <img src="/fatimalogo.png" alt="Maître Fatima Logo" className="h-10 w-auto" />
            </a>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-label" href="/">الرئيسية</a>
            <a className="text-primary transition-colors text-sm font-label" href="/bio">بطاقة تعريفية</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-label" href="/interests">مجالات الخبرة</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-label" href="/contact">للتواصل</a>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://calendly.com/saidjabouri02/30min" target="_blank" rel="noopener noreferrer" className="gold-gradient text-on-primary px-6 py-2.5 rounded-md font-label text-sm font-bold shadow-lg">
              احجز استشارتك
            </a>
          </div>
        </div>
      </nav>

      <HeroBanner title="بطاقة تعريفية" />
      {/* Main Bio Content */}
      <Section id="bio" className="py-24 bg-surface min-h-screen">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="order-2 lg:order-1 space-y-12">
            <div>
              <SectionTitle className="text-primary flex items-center gap-4 mb-6">
                نبذة تعريفية
                <span className="h-[2px] w-20 bg-primary/30"></span>
              </SectionTitle>
              
              <h3 className="text-3xl lg:text-4xl font-headline font-bold text-on-surface mb-8">
                الأستاذة فاطمة الزهراء بنوغازي
              </h3>

              <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg font-body">
                <p>
                  الأستاذة بنوغازي فاطمة الزهراء محامية بهيئة المحامين بطنجة، راكمت تجربة مهنية متنوعة في معالجة الملفات القانونية والترافع أمام مختلف المحاكم، التمثيل القانوني للأفراد والشركات، والدفاع عن الحقوق والمصالح القانونية مع اهتمام خاص بالقضايا ذات البعد الحقوقي والاجتماعي والدولي.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
               <Card className="expertise-card p-8 flex flex-col gap-4">
                  <span className="material-symbols-outlined text-primary text-4xl" data-icon="school">school</span>
                  <h4 className="text-xl font-headline font-bold text-on-surface">التكوين الأكاديمي</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    تلقت الأستاذة بنوغازي فاطمة الزهراء تكوينها الأكاديمي بجامعة عبد المالك السعدي بطنجة، حيث حصلت على الإجازة في القانون الخاص والماستر في القانون المدني والأعمال. كما حصلت لاحقًا على منحة تشيفنينغ (Chevening) المقدمة من وزارة الخارجية البريطانية، لمتابعة دراستها الجامعية بجامعة ساسكس (Sussex) بالمملكة المتحدة، متخصصة في مجال القانون والتنمية الدولية.
                  </p>
               </Card>

               <Card className="expertise-card p-8 flex flex-col gap-4">
                  <span className="material-symbols-outlined text-primary text-4xl" data-icon="gavel">gavel</span>
                  <h4 className="text-xl font-headline font-bold text-on-surface">الخبرة العملية</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    راكمت الأستاذة تكوينًا أكاديميًا متنوعًا يجمع بين القانون والتنمية، إلى جانب خبرة عملية وتجربة ميدانية على المستويين الوطني والدولي، مما مكّنها من اعتماد مقاربة شمولية في التعاطي مع القضايا القانونية ذات الأبعاد المتعددة.
                  </p>
               </Card>
            </div>

            <div className="pt-2">
               <Card className="expertise-card p-8 flex flex-col gap-4 bg-surface-container">
                  <span className="material-symbols-outlined text-primary text-4xl" data-icon="psychology">psychology</span>
                  <h4 className="text-xl font-headline font-bold text-on-surface">منهجية العمل</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    ترتكز منهجية العمل على الاستماع الجيد للموكل، والتشخيص القانوني الدقيق للملفات، واعتماد أنسب المساطر القانونية، مع مواكبة مستمرة إلى غاية التوصل إلى الحل القانوني المناسب، مع ضمان تواصل فعّال بثلاث لغات: العربية والفرنسية والإنجليزية.
                  </p>
               </Card>
            </div>
            
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative sticky top-32 group overflow-hidden rounded-xl shadow-2xl">
              <div className="absolute -top-4 -right-4 w-32 h-32 border-r-2 border-t-2 border-primary/30 z-10"></div>
              <img
                alt="Maître Fatima Ezzahra Benoughazi"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-105"
                src="/fatima.JPG"
              />
              {/* Bottom black gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </>
  );
}
