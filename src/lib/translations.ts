export type Language = "ar" | "en";

export const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      bio: "بطاقة تعريفية",
      interests: "مجالات الممارسة القانونية",
      contact: "للتواصل",
    },
    hero: {
      badge: "Avocate au Barreau de Tanger",
      name: "الأستاذة فاطمة الزهراء بنوغازي",
      subtitle: "محامية لدى هيئة المحامين",
    },
    about: {
      title: "نبذة تعريفية",
      p1: "الأستاذة فاطمة الزهراء بنوغازي محامية بهيئة المحامين بطنجة، راكمت تجربة مهنية متنوعة في معالجة الملفات القانونية والترافع أمام مختلف المحاكم، التمثيل القانوني للأفراد والشركات، والدفاع عن الحقوق والمصالح القانونية مع اهتمام خاص بالقضايا ذات البعد الحقوقي والاجتماعي والدولي.",
      p2: "تلقت الأستاذة فاطمة الزهراء بنوغازي تكوينها الأكاديمي بجامعة عبد المالك السعدي بطنجة، قبل أن تحصل لاحقًا على منحة تشيفنينغ (Chevening) المقدمة من وزارة الخارجية البريطانية لمتابعة دراستها الجامعية بجامعة ساسكس (Sussex) بالمملكة المتحدة في مجال القانون والتنمية الدولية.",
    },
    academic: {
      title: "المسار الأكاديمي",
      imageAlt: "الصورة الشخصية للأستاذة فاطمة الزهراء بنوغازي",
      items: [
        {
          degree: "ماستر في القانون والتنمية الدولية",
          institution: "جامعة ساسكس، المملكة المتحدة (منحة تشيفنينغ)",
        },
        {
          degree: "ماستر في القانون المدني والأعمال",
          institution: "جامعة عبد المالك السعدي، طنجة",
        },
        {
          degree: "إجازة في القانون الخاص",
          institution: "جامعة عبد المالك السعدي، طنجة",
        },
      ],
    },
    expertise: {
      title: "مجالات الممارسة القانونية",
      cards: [
        {
          title: "القانون المدني",
          desc: "المواكبة في النزاعات المدنية المتعلقة بالعقود، المسؤولية المدنية، التعويضات، الأحوال الشخصية، وحماية الحقوق الخاصة للأفراد.",
        },
        {
          title: "قانون الأعمال والتجارة",
          desc: "المواكبة القانونية للشركات والتجار في العقود التجارية، النزاعات التجارية، تأسيس الشركات، وحماية المصالح القانونية للمقاولات.",
        },
        {
          title: "قانون الشغل",
          desc: "معالجة النزاعات المرتبطة بعلاقات الشغل، عقود العمل، الفصل، التعويضات، واحترام التشريعات الاجتماعية الجاري بها العمل.",
        },
        {
          title: "القانون العقاري",
          desc: "المواكبة في الملفات المتعلقة بالبيع والشراء، النزاعات العقارية، التحفيظ العقاري، الملكية المشتركة، وحماية الحقوق العينية.",
        },
        {
          title: "الملكية الفكرية والصناعية",
          desc: "المواكبة في حماية العلامات التجارية، الأسماء التجارية، براءات الاختراع، وحقوق الملكية الفكرية والصناعية.",
        },
        {
          title: "القانون الدولي الخاص",
          desc: "معالجة الملفات ذات العنصر الأجنبي، بما في ذلك النزاعات العابرة للحدود، العقود الدولية، والأحوال الشخصية المرتبطة بأطراف من جنسيات مختلفة.",
        },
        {
          title: "القانون البنكي والتأمينات",
          desc: "المواكبة في الملفات المرتبطة بالمعاملات البنكية، عقود التأمين، المنازعات المالية، والعلاقات مع المؤسسات البنكية وشركات التأمين.",
        },
        {
          title: "القانون الإداري",
          desc: "المواكبة في القضايا المرتبطة بالإدارة، القرارات الإدارية، الصفقات العمومية، المسؤولية الإدارية، وحماية حقوق الأفراد في مواجهة الإدارة.",
        },
        {
          title: "القانون البحري وقانون البحار",
          desc: "المواكبة في القضايا المرتبطة بالنقل البحري، السفن، الموانئ، العقود والتأمينات البحرية، وكذا الملفات ذات البعد الدولي المرتبطة بالمجال البحري.",
        },
        {
          title: "الوساطة والطرق البديلة لحل النزاعات",
          desc: "المساهمة في البحث عن حلول ودية وقانونية للنزاعات، متى كان ذلك ممكنًا، بما يحفظ مصالح الأطراف ويقلل من تعقيد المساطر.",
        },
      ],
    },
    contact: {
      heroTitle: "للتواصل",
      intro1: "يمكنكم التواصل مع المكتب لطلب موعد للاستشارة القانونية أو لتقديم لمحة موجزة عن موضوعكم، بهدف تقييم طبيعته وتحديد الإطار القانوني المناسب.",
      intro2: "يرجى تعبئة نموذج الاتصال، وسيقوم المكتب بالرد في أقرب وقت ممكن، مع احترام السرية والقواعد المهنية المنظمة لمهنة المحاماة.",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      address: "العنوان",
      addressValue: "مكتب رقم 7، زنقة العراق، إقامة رضوان، طنجة، المغرب",
      mapTitle: "موقع المكتب على خرائط Google",
      mapLink: "فتح الموقع على خرائط Google",
      formTitle: "تواصل معنا",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "محمد أحمد",
      emailLabel: "البريد الإلكتروني",
      subjectLabel: "الموضوع",
      subjectPlaceholder: "استشارة قانونية",
      messageLabel: "رسالتك",
      messagePlaceholder: "تفاصيل بخصوص طلبك...",
      send: "إرسال الرسالة",
    },
    bio: {
      heroTitle: "بطاقة تعريفية",
    },
    footer: {
      tagline1: "محامية لدى هيئة المحامين",
      quickLinks: "روابط سريعة",
      copyright: "2026 Maître Fatima Ezzahra Benoughazi All Rights Reserved",
    },
  },
  en: {
    nav: {
      home: "Home",
      bio: "Profile",
      interests: "Legal Practice Areas",
      contact: "Contact",
    },
    hero: {
      badge: "Attorney at the Tangier Bar",
      name: "Maître Fatima Ezzahra Benoughazi",
      subtitle: "Attorney at the Bar Association",
    },
    about: {
      title: "About",
      p1: "Maître Fatima Ezzahra Benoughazi is a lawyer at the Tangier Bar Association. She has accumulated diverse professional experience handling legal cases and pleading before various courts, providing legal representation for individuals and companies, and defending legal rights and interests, with particular attention to cases with human rights, social, and international dimensions.",
      p2: "Maître Fatima Ezzahra Benoughazi received her academic training at Abdelmalek Essaadi University in Tangier, where she obtained a Bachelor's degree in Private Law and a Master's degree in Civil and Business Law. She was later awarded the Chevening Scholarship, granted by the UK Foreign Office, to pursue her graduate studies at the University of Sussex in the United Kingdom, specializing in Law and International Development.",
    },
    academic: {
      title: "Academic Background",
      imageAlt: "Personal photo of Maître Fatima Ezzahra Benoughazi",
      items: [
        {
          degree: "Master's degree in Law and International Development",
          institution: "University of Sussex, United Kingdom (Chevening Scholar)",
        },
        {
          degree: "Master's degree in Civil and Business Law",
          institution: "Abdelmalek Essaadi University, Tangier",
        },
        {
          degree: "Bachelor's degree in Private Law",
          institution: "Abdelmalek Essaadi University, Tangier",
        },
      ],
    },
    expertise: {
      title: "Legal Practice Areas",
      cards: [
        {
          title: "Civil Law",
          desc: "Legal support in civil disputes relating to contracts, civil liability, compensation, personal status matters, and the protection of individuals' private rights.",
        },
        {
          title: "Business & Commercial Law",
          desc: "Legal support for companies and traders in commercial contracts, business disputes, company formation, and the protection of corporate legal interests.",
        },
        {
          title: "Labor Law",
          desc: "Assistance in matters relating to employment relationships, employment contracts, dismissal, compensation, and compliance with applicable labor and social legislation.",
        },
        {
          title: "Real Estate Law",
          desc: "Legal support in matters relating to sale and purchase transactions, real estate disputes, land registration, co-ownership, and the protection of property rights.",
        },
        {
          title: "Intellectual Property Law",
          desc: "Assistance in matters relating to trademarks, trade names, patents, and intellectual property rights.",
        },
        {
          title: "Private International Law",
          desc: "Handling matters involving a foreign element, including cross-border disputes, international contracts, and personal status matters involving parties of different nationalities.",
        },
        {
          title: "Banking & Insurance Law",
          desc: "Legal support in matters relating to banking transactions, insurance contracts, financial disputes, and relations with banks and insurance companies.",
        },
        {
          title: "Administrative Law",
          desc: "Assistance in matters involving public administration, administrative decisions, public procurement, administrative liability, and the protection of individuals' rights in relation to public authorities.",
        },
        {
          title: "Maritime Law and Law of the Sea",
          desc: "Legal support in matters relating to maritime transport, vessels, ports, maritime contracts and insurance, as well as legal issues with an international dimension connected to maritime affairs.",
        },
        {
          title: "Mediation & Alternative Dispute Resolution",
          desc: "Support in exploring amicable and legally grounded solutions to disputes, where appropriate, in order to preserve the parties' interests and reduce procedural complexity.",
        },
      ],
    },
    contact: {
      heroTitle: "Contact",
      intro1: "You may contact the office to request an appointment for a legal consultation or to provide a brief overview of your matter, in order to assess its nature and identify the appropriate legal framework.",
      intro2: "Please complete the contact form, and the office will respond as soon as possible, while respecting confidentiality and the professional rules governing the legal profession.",
      phone: "Phone",
      email: "Email",
      address: "Address",
      addressValue: "Bureau No. 7, Rue d'Irak, Résidence Radwan, Tangier, Morocco",
      mapTitle: "Office location on Google Maps",
      mapLink: "Open in Google Maps",
      formTitle: "Get in Touch",
      nameLabel: "Full Name",
      namePlaceholder: "John Smith",
      emailLabel: "Email",
      subjectLabel: "Subject",
      subjectPlaceholder: "Legal consultation",
      messageLabel: "Your Message",
      messagePlaceholder: "Details about your request...",
      send: "Send Message",
    },
    bio: {
      heroTitle: "Profile",
    },
    footer: {
      tagline1: "Attorney at the Bar Association",
      quickLinks: "Quick Links",
      copyright: "2026 Maître Fatima Ezzahra Benoughazi All Rights Reserved",
    },
  },
};

export type Translations = (typeof translations)["ar"];
