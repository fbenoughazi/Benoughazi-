import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/Card";
import { HeroBanner } from "@/components/HeroBanner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Interests() {
  return (
    <>
      <Navbar />

      <HeroBanner title="مجالات الخبرة" />
      {/* Expertise Section */}
      <Section id="expertise" className="py-24 bg-surface min-h-screen relative overflow-hidden">
        {/* Soft Ambient Gold Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/[0.08] rounded-full blur-[140px] pointer-events-none translate-x-1/4 -translate-y-1/4 z-0"></div>

        <div className="text-center mb-20 relative z-10">
          <SectionTitle className="lg:text-5xl text-on-surface mb-4">مجالات الخبرة</SectionTitle>
          <p className="text-secondary opacity-80 max-w-2xl mx-auto">نقدم حلولاً قانونية متكاملة تغطي مختلف جوانب القانون المدني والتجاري والاداري، بلمسة مهنية عالمية.</p>
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

      {/* Footer */}
      <Footer />
    </>
  );
}
