import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 glass-nav h-20">
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-full">
          <div className="flex items-center gap-4">
            <img src="/fatimalogo.png" alt="Maître Fatima Logo" className="h-10 w-auto" />
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <a className="text-primary transition-colors text-sm font-label" href="/">الرئيسية</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-label" href="/bio">بطاقة تعريفية</a>
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

      {/* Hero Section */}
      <section className="relative h-[92vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-l from-surface via-surface/80 to-transparent"></div>
          <img
            alt="Panorama of Tangier"
            className="w-full h-full object-cover object-[center_30%] opacity-50 grayscale contrast-125"
            src="/tanger.jpg"
          />
          {/* Elegant multi-layer gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-surface/40 to-surface/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-start text-right">
          <span className="text-primary tracking-[0.2em] font-label text-sm mb-4 uppercase">Avocate au Barreau de Tanger</span>
          <h1 className="text-2xl lg:text-4xl font-headline font-extrabold text-on-surface mb-6 leading-tight">
            الأستاذة فاطمة الزهراء بنوغازي
          </h1>
          <p className="text-2xl lg:text-3xl font-headline text-secondary mb-10 max-w-2xl">
            محامية لدى هيئة المحامين بطنجة <br />
            <span className="text-lg text-on-surface-variant font-body opacity-80">Expertise Juridique Internationale &amp; Conseil Stratégique</span>
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://calendly.com/saidjabouri02/30min" target="_blank" rel="noopener noreferrer" className="gold-gradient text-on-primary px-10 py-4 rounded-md font-label text-base font-bold flex items-center gap-2">
              <span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
              تحديد موعد استشارة
            </a>
            <button className="border border-outline-variant text-on-surface px-10 py-4 rounded-md font-label text-base hover:bg-surface-container transition-colors">
              اكتشف مجالات الخبرة
            </button>
          </div>
        </div>
      </section>

      {/* About Section (نبذة تعريفية) */}
      <Section id="about" className="py-24 bg-surface-container-low">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative group overflow-hidden rounded-xl shadow-2xl aspect-[4/5] max-w-[480px] mx-auto lg:mr-auto lg:ml-0">
              <div className="absolute -top-4 -right-4 w-32 h-32 border-r-2 border-t-2 border-primary/30 z-10 pointer-events-none"></div>
              <img
                alt="Maître Fatima Ezzahra Benoughazi"
                className="w-full h-full object-cover object-top transition-all duration-700 transform hover:scale-105"
                src="/fatima.JPG"
              />
              {/* Deeper bottom black gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <SectionTitle className="text-primary flex items-center gap-4">
              نبذة تعريفية
              <span className="h-[2px] w-20 bg-primary/30"></span>
            </SectionTitle>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg font-body">
              <p>
                الأستاذة فاطمة الزهراء بنوغازي، خريجة جامعة عبد المالك السعدي وحاصلة على منحة
                <span className="text-primary">Chevening</span> المرموقة من جامعة
                <span className="text-primary">Sussex</span> بالمملكة المتحدة.
              </p>
              <p>
                تتمتع بمسار أكاديمي متميز يجمع بين المدارس القانونية المغربية والدولية، مما يمنحها رؤية شاملة وعميقة للقضايا المعقدة. تخصصت في القانون الدولي والتنمية، مع تركيز خاص على حماية المصالح القانونية في سياق معولم.
              </p>
              <p>
                تؤمن الأستاذة بأن المحاماة ليست مجرد ترافع في المحاكم، بل هي مرافقة استراتيجية تهدف إلى استباق النزاعات وتأمين المشاريع الاستثمارية والمدنية لعملائها.
              </p>
            </div>
            <div className="flex gap-8 py-6">
              <div className="text-center">
                <p className="text-3xl font-headline font-bold text-primary">Intl</p>
                <p className="text-xs uppercase text-outline">Expertise</p>
              </div>
              <div className="w-px h-12 bg-outline-variant"></div>
              <div className="text-center">
                <p className="text-3xl font-headline font-bold text-primary">3+</p>
                <p className="text-xs uppercase text-outline">Languages</p>
              </div>
              <div className="w-px h-12 bg-outline-variant"></div>
              <div className="text-center">
                <p className="text-3xl font-headline font-bold text-primary">UK</p>
                <p className="text-xs uppercase text-outline">Educated</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Expertise Section (مجالات الخبرة) */}
      <Section id="expertise" className="py-32 bg-surface relative overflow-hidden">
        {/* Soft Ambient Gold Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/[0.08] rounded-full blur-[140px] pointer-events-none translate-x-1/4 -translate-y-1/4 z-0"></div>

        <div className="text-center mb-20 relative z-10">
          <SectionTitle className="lg:text-5xl text-on-surface mb-4">مجالات الخبرة</SectionTitle>
          <p className="text-secondary opacity-80 max-w-2xl mx-auto">نقدم حلولاً قانونية متكاملة تغطي مختلف جوانب القانون المدني والتجاري والاداري، بلمسة مهنية عالمية.</p>
        </div>
        {/* Bento Grid Layout for Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {/* Card 1 */}
          <Card className="expertise-card p-8 flex flex-col gap-4">
            <span className="material-symbols-outlined text-primary text-4xl" data-icon="balance">balance</span>
            <h3 className="text-xl font-headline font-bold">القانون المدني</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">يشمل معالجة النزاعات المدنية بين الأفراد، مثل العقود، المسؤولية المدنية، التعويضات، والأحوال الشخصية، مع ضمان حماية الحقوق القانونية للأطراف.</p>
          </Card>
          {/* Card 2 */}
          <Card className="expertise-card p-8 flex flex-col gap-4">
            <span className="material-symbols-outlined text-primary text-4xl" data-icon="business_center">business_center</span>
            <h3 className="text-xl font-headline font-bold">قانون التجارة والأعمال</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">يعنى بمواضيع الشركات والتجار في العقود التجارية، النزاعات التجارية، تأسيس الشركات، وحماية المصالح القانونية للمقاولات.</p>
          </Card>
          {/* Card 3 */}
          <Card className="expertise-card p-8 flex flex-col gap-4">
            <span className="material-symbols-outlined text-primary text-4xl" data-icon="badge">badge</span>
            <h3 className="text-xl font-headline font-bold">قانون الشغل</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">يتعلق بعلاقات الشغل بين الأجير والمشغل، نزاعات العمل، عقود الشغل، التعويضات، مع احترام التشريعات الاجتماعية الجاري بها العمل.</p>
          </Card>
          {/* Card 4 */}
          <Card className="expertise-card p-8 flex flex-col gap-4">
            <span className="material-symbols-outlined text-primary text-4xl" data-icon="domain">domain</span>
            <h3 className="text-xl font-headline font-bold">القانون العقاري</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">يشمل القضايا المتعلقة بالعقارات مثل البيع والشراء، النزاعات العقارية، التحفيظ العقاري، وحقوق الملكية.</p>
          </Card>
          {/* Card 5 */}
          <Card className="expertise-card p-8 flex flex-col gap-4">
            <span className="material-symbols-outlined text-primary text-4xl" data-icon="gavel">gavel</span>
            <h3 className="text-xl font-headline font-bold">قانون الملكية الصناعية والتجارية</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">يعنى بحماية العلامات التجارية، براءات الاختراع، الأسماء التجارية، وحقوق الملكية الفكرية للمقاولات والأفراد.</p>
          </Card>
          {/* Card 6 */}
          <Card className="expertise-card p-8 flex flex-col gap-4">
            <span className="material-symbols-outlined text-primary text-4xl" data-icon="public">public</span>
            <h3 className="text-xl font-headline font-bold">القانون الدولي الخاص</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">يتناول القضايا ذات الطابع الدولي التي تشمل أطرافًا من دول مختلفة، مثل النزاعات العابرة للحدود، العقود الدولية، والأحوال الشخصية الدولية.</p>
          </Card>
          {/* Card 7 */}
          <Card className="expertise-card p-8 flex flex-col gap-4">
            <span className="material-symbols-outlined text-primary text-4xl" data-icon="account_balance_wallet">account_balance_wallet</span>
            <h3 className="text-xl font-headline font-bold">القانون الإداري</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">يهتم بتنظيم نشاط الإدارة العامة، ويحدد القواعد التي تحكم عمل الهيئات والمؤسسات الإدارية وعلاقتها بالأفراد. يهدف هذا القانون إلى ضمان حسن سير المرافق العامة، وتحقيق المصلحة العامة، مع حماية حقوق الأفراد من تعسف الإدارة، وذلك من خلال تنظيم القرارات الإدارية، والعقود الإدارية، والمسؤولية الإدارية، والرقابة القضائية على أعمال الإدارة.</p>
          </Card>
          {/* Card 8 */}
          <Card className="expertise-card p-8 flex flex-col gap-4">
            <span className="material-symbols-outlined text-primary text-4xl" data-icon="account_balance">account_balance</span>
            <h3 className="text-xl font-headline font-bold">القانون البنكي والتأمينات</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">يعنى بتنظيم الأنشطة المصرفية وأعمال التأمين، ويحدد القواعد القانونية التي تحكم العلاقة بين البنوك والعملاء، وكذلك بين شركات التأمين والمؤمن لهم.</p>
          </Card>
          {/* Card 9 */}
          <Card className="expertise-card p-8 flex flex-col gap-4">
            <span className="material-symbols-outlined text-primary text-4xl" data-icon="handshake">handshake</span>
            <h3 className="text-xl font-headline font-bold">الوساطة والطرق البديلة لحل النزاعات</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">آليات قانونية بديلة عن المحاكم لحل النزاعات بشكل ودي وسريع، مثل الوساطة والتحكيم، بهدف الوصول إلى حلول فعالة ومرنة.</p>
          </Card>
        </div>
      </Section>

      {/* Methodology Section (منهجية العمل) */}
      <Section id="methodology" className="py-32 bg-[#1A1A1A] text-white relative overflow-hidden" containerClassName="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Soft Organic Diffused Gold Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-gradient-to-t from-[#D4A745]/20 via-[#B8860B]/10 to-transparent blur-[100px] pointer-events-none z-0 translate-y-1/4 rounded-full"></div>
        
        <SectionTitle className="text-center text-white mb-20 relative z-20">منهجية العمل</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-20">
          
          {/* Item 1 */}
          <div className="text-center group flex flex-col items-center">
            <div className="w-[64px] h-[64px] rounded-[14px] bg-white/[0.04] backdrop-blur-[12px] border border-[#D4A745]/15 flex items-center justify-center mb-6 transition-all duration-500 group-hover:border-[#D4A745]/30 group-hover:shadow-[0_0_20px_rgba(212,167,69,0.15)] group-hover:bg-white/[0.06]">
              <span className="material-symbols-outlined text-[#D4A745] text-[32px] transition-transform duration-500 group-hover:scale-110" data-icon="psychology">psychology</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-3 tracking-wide">نهج شمولي</h4>
            <p className="text-[rgba(255,255,255,0.6)] text-sm leading-relaxed max-w-[280px]">الجمع بين العمق الأكاديمي والخبرة الميدانية لتقديم أدق التحليلات.</p>
          </div>
          
          {/* Item 2 */}
          <div className="text-center group flex flex-col items-center">
            <div className="w-[64px] h-[64px] rounded-[14px] bg-white/[0.04] backdrop-blur-[12px] border border-[#D4A745]/15 flex items-center justify-center mb-6 transition-all duration-500 group-hover:border-[#D4A745]/30 group-hover:shadow-[0_0_20px_rgba(212,167,69,0.15)] group-hover:bg-white/[0.06]">
              <span className="material-symbols-outlined text-[#D4A745] text-[32px] transition-transform duration-500 group-hover:scale-110" data-icon="record_voice_over">record_voice_over</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-3 tracking-wide">الاستماع النشط</h4>
            <p className="text-[rgba(255,255,255,0.6)] text-sm leading-relaxed max-w-[280px]">فهم احتياجات العميل بدقة هو الخطوة الأولى نحو نجاح القضية.</p>
          </div>
          
          {/* Item 3 */}
          <div className="text-center group flex flex-col items-center">
            <div className="w-[64px] h-[64px] rounded-[14px] bg-white/[0.04] backdrop-blur-[12px] border border-[#D4A745]/15 flex items-center justify-center mb-6 transition-all duration-500 group-hover:border-[#D4A745]/30 group-hover:shadow-[0_0_20px_rgba(212,167,69,0.15)] group-hover:bg-white/[0.06]">
              <span className="material-symbols-outlined text-[#D4A745] text-[32px] transition-transform duration-500 group-hover:scale-110" data-icon="clinical_notes">clinical_notes</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-3 tracking-wide">التشخيص القانوني</h4>
            <p className="text-[rgba(255,255,255,0.6)] text-sm leading-relaxed max-w-[280px]">دراسة دقيقة للمخاطر والفرص المتاحة لكل ملف قانوني.</p>
          </div>
          
          {/* Item 4 */}
          <div className="text-center group flex flex-col items-center">
            <div className="w-[64px] h-[64px] rounded-[14px] bg-white/[0.04] backdrop-blur-[12px] border border-[#D4A745]/15 flex items-center justify-center mb-6 transition-all duration-500 group-hover:border-[#D4A745]/30 group-hover:shadow-[0_0_20px_rgba(212,167,69,0.15)] group-hover:bg-white/[0.06]">
              <span className="material-symbols-outlined text-[#D4A745] text-[32px] transition-transform duration-500 group-hover:scale-110" data-icon="translate">translate</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-3 tracking-wide">تعدد اللغات</h4>
            <p className="text-[rgba(255,255,255,0.6)] text-sm leading-relaxed max-w-[280px]">التواصل الفعال بالعربية والفرنسية والإنجليزية لخدمة عملاء دوليين.</p>
          </div>

        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="py-32 bg-surface">
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

            <form className="relative z-10 space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 transition-colors focus-within:border-[#D4A745]/40 hover:bg-white/[0.05]">
                  <label className="block text-xs font-label text-white/50 mb-1 uppercase tracking-wider">الاسم الكامل</label>
                  <input className="w-full bg-transparent border-none p-0 focus:ring-0 text-white text-sm" type="text" placeholder="محمد أحمد" />
                </div>
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 transition-colors focus-within:border-[#D4A745]/40 hover:bg-white/[0.05]">
                  <label className="block text-xs font-label text-white/50 mb-1 uppercase tracking-wider">البريد الإلكتروني</label>
                  <input className="w-full bg-transparent border-none p-0 focus:ring-0 text-white text-sm text-left" type="email" placeholder="email@example.com" dir="ltr" />
                </div>
              </div>
              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 transition-colors focus-within:border-[#D4A745]/40 hover:bg-white/[0.05]">
                <label className="block text-xs font-label text-white/50 mb-1 uppercase tracking-wider">الموضوع</label>
                <input className="w-full bg-transparent border-none p-0 focus:ring-0 text-white text-sm" type="text" placeholder="استشارة قانونية" />
              </div>
              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 transition-colors focus-within:border-[#D4A745]/40 hover:bg-white/[0.05]">
                <label className="block text-xs font-label text-white/50 mb-1 uppercase tracking-wider">رسالتك</label>
                <textarea className="w-full bg-transparent border-none p-0 focus:ring-0 text-white text-sm resize-none" rows={4} placeholder="تفاصيل بخصوص طلبك..."></textarea>
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
