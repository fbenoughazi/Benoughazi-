import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[92vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-l from-surface via-surface/80 to-transparent"></div>
          <img
            alt="Lady Justice"
            className="w-full h-full object-cover object-[85%_30%] lg:object-[center_30%] opacity-50"
            src="/lawyer%20tanger.png"
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
                الأستاذة بنوغازي فاطمة الزهراء محامية بهيئة المحامين بطنجة، راكمت تجربة مهنية متنوعة في معالجة الملفات القانونية والترافع أمام مختلف المحاكم، التمثيل القانوني للأفراد والشركات، والدفاع عن الحقوق والمصالح القانونية مع اهتمام خاص بالقضايا ذات البعد الحقوقي والاجتماعي والدولي.
              </p>
              <p>
                تلقت الأستاذة بنوغازي فاطمة الزهراء تكوينها الأكاديمي بجامعة عبد المالك السعدي بطنجة، حيث حصلت على الإجازة في القانون الخاص والماستر في القانون المدني والأعمال. كما حصلت لاحقًا على منحة تشيفنينغ (Chevening) المقدمة من وزارة الخارجية البريطانية، لمتابعة دراستها الجامعية بجامعة ساسكس (Sussex) بالمملكة المتحدة، متخصصة في مجال القانون والتنمية الدولية.
              </p>
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

        </div>
        {/* Bento Grid Layout for Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
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
          <ContactForm />
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </>
  );
}
