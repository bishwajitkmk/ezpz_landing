export const translations = {
  en: {
    navbar: {
      brand: "EZPZ",
      features: "Features",
      howItWorks: "How it Works",
      pricing: "Pricing",
      blog: "Blog",
      login: "Log In",
      getStarted: "Get Started",
      signIn: "Sign In",
      mobileMenuLabel: "Toggle navigation menu",
    },
    hero: {
      heading: [
  "Master HSC",
  "Your Personal",
  "AI Tutor",
],
      description:
        "Get step-by-step board solutions, interactive AI explanations, and voice-guided learning for HSC Physics, Chemistry & Math in English & Bengali.",
      ctaPrimary: "Start Studying for Free",
      ctaSecondary: "Watch EZPZ in Action",
      videoTitle: "EZPZ demo video",
      videoClose: "Close video",
      previewTitle: "JARVIS",
      previewSubtitle: "Your personal Physics tutor",
      previewBadge: "AI Physics Tutor",
      subjectLabel: "Subject",
      physics: "Physics",
      physicsPaper: "1st Paper",
      learningPath: "Learning path",
      chapterProgress: "Chapter progress",
      questionLabel: "Your question",
      responseLabel: "is explaining...",
      boardContext: ["HSC 2024", "Dhaka Board", "CQ · Question 3"],
      online: "Online",
      steps: [
        {
          type: "text",
          content:
            "The Carnot cycle is a theoretical ideal cycle consisting of four reversible processes.",
        },
        {
          type: "list",
          content: [
            "Isothermal Expansion",
            "Adiabatic Expansion",
            "Isothermal Compression",
            "Adiabatic Compression",
          ],
        },
        {
          type: "formula",
          content: "η = 1 − T₂ / T₁",
        },
        {
          type: "text",
          content:
            "It is considered the most efficient because it represents the maximum possible efficiency between two temperature reservoirs.",
        },
      ],
    },
    features: {
      headingPrefix: "Everything you need to ace",
      description:
        "Stop searching through messy notes. EZPZ brings all your study materials into one intelligent workspace.",
      cards: [
        {
          title: "Board Solutions",
          description:
            "Access 20+ years of HSC Science Board questions from all boards, solved step-by-step with clear explanations.",
        },
        {
          title: "Interactive AI Tutor",
          description:
            "Ask our AI tutors anything. Our AI tutor understands the context of every question and provides personalized help.",
        },
        {
          title: "Voice-First Learning",
          description:
            "Listen to our AI tutors' explanations in high-quality English and Bengali voices. Study without looking at the screen.",
        },
        {
          title: "MCQ Mastery",
          description:
            "Practice with timed MCQ sessions. Get instant feedback and analysis on your weak areas to improve your score.",
        },
      ],
    },
    demo: {
      badge: "Meet JARVIS",
      heading: "Study smarter with your personal AI tutor for Physics, Chemistry, and Math",
      description:
        "Whether you are learning formulas, lab concepts, or problem-solving steps, JARVIS explains each idea clearly and adapts to your pace.",
      features: [
        {
          title: "Personalized Explanations",
          desc: "JARVIS adapts its tone and depth to your current understanding.",
        },
        {
          title: "Bilingual Support",
          desc: "Switch between English and Bengali mid-conversation.",
        },
        {
          title: "Visual Logic",
          desc: "Uses clear step-by-step reasoning for every subject.",
        },
      ],
      swipeLabel: "Swipe to explore",
      subjects: "Physics • Chemistry • Math",
      prevLabel: "Previous demo",
      nextLabel: "Next demo",
      slides: [
        {
          subject: "Physics",
          badge: "AI Physics Tutor",
          prompt:
            "Explain the Carnot Engine cycle and why it is considered the most efficient engine.",
          steps: [
            "The Carnot cycle is a theoretical ideal cycle that consists of four reversible processes:",
            "1. Isothermal Expansion (T₁)\n2. Adiabatic Expansion\n3. Isothermal Compression (T₂)\n4. Adiabatic Compression",
            "Efficiency (η) is given by:",
            "η = 1 - (T₂ / T₁)",
            "It's the most efficient because it minimizes entropy generation. Would you like me to explain the T-S diagram for this?",
          ],
        },
        {
          subject: "Chemistry",
          badge: "AI Chemistry Coach",
          prompt:
            "Help me understand why increasing temperature speeds up a chemical reaction.",
          steps: [
            "Higher temperature gives particles more kinetic energy, so they collide more often and with more force.",
            "1. More successful collisions\n2. Greater activation energy reach\n3. Faster reaction rate",
            "The reaction rate can be visualized using the energy profile diagram:",
            "Eₐ",
            "That is why many reactions accelerate noticeably when the mixture is warmed.",
          ],
        },
        {
          subject: "Math",
          badge: "AI Math Mentor",
          prompt: "Show me how to solve this quadratic equation step by step.",
          steps: [
            "We can solve it by factoring or by using the quadratic formula.",
            "1. Rearrange the equation\n2. Identify a, b, and c\n3. Substitute into the formula",
            "x = (-b ± √(b² - 4ac)) / 2a",
            "x = 2 or x = -3",
            "Would you like me to explain why both values satisfy the original equation?",
          ],
        },
      ],
      listen: "Listen (English)",
      followUp: "Ask Follow-up",
      students: "Join 500+ students",
      studyingToday: "Studying with JARVIS today",
    },
    pricing: {
      badge: "Simple, Transparent Pricing",
      heading: "Invest in your grades, invest in your future",
      description:
        "Choose the perfect plan for your academic goals. Get access to top solutions, standard mock test systems, and your personal AI tutor, JARVIS.",
      monthlyBilling: "Monthly Billing",
      tkBased: "Tk-based plans",
      billingNote: "bKash payments are manually approved within 2 hours.",
      compareHeading: "Compare Features Side-by-Side",
      compareDescription:
        "Take a closer look at the key highlights and limits of each tier to find what best fits your needs.",
      faqHeading: "Frequently Asked Questions",
      faqDescription:
        "Got questions before you upgrade? We have answers. If you need anything else, feel free to contact us.",
      howItWorks: "How it works first?",
      chooseHeading: "Choose your plan",
      perMonthShort: "/month",
      featureNames: {
        solutions: "Pre-written expert solutions",
        questionBank: "Question Bank access",
        mcq: "MCQ help",
        cq: "CQ help",
        practice: "Practice section",
        practiceIncluded: "Practice section (included)",
        teacherPanel: "Free chat teacher panel",
        imageDrop: "Image drop",
        voice: "Voice mode",
        everythingPro: "Everything in Pro",
      },
      tiers: {
        basic: {
          label: "Basic",
          price: "Free",
          note: "No subscription needed",
          cta: "Get Free Access",
        },
        pro: {
          label: "Pro",
          badge: "Most Popular",
          cta: "Subscribe Pro",
          addonTitle: "Unlock Practice",
          addonAria: "Add the practice section to Pro",
        },
        premium: {
          label: "Premium",
          badge: "All Access",
          cta: "Subscribe Premium",
          includedNote: "Practice included — no extra charge",
        },
      },
      plans: [
        {
          name: "Basic",
          description: "Free access for students who want to explore the platform.",
          cta: "Start Free",
          features: [
            "Free plan access",
            "No AI tutor usage included",
            "No voice interaction",
            "No practice mode",
            "Great for exploring the experience",
          ],
        },
        {
          name: "Trial",
          description: "A 3-day window with full premium access to test the product.",
          cta: "Try 3-Day Premium",
          popular: true,
          features: [
            "Full premium AI access for 3 days",
            "Includes free-chat tutoring",
            "Voice enabled",
            "Practice mode included",
            "Ideal for evaluating the full experience",
          ],
        },
        {
          name: "Pro",
          description: "For students who need board-focused help with MCQ and CQ support.",
          cta: "Choose Pro",
          features: [
            "MCQ + CQ help",
            "Image drop support",
            "API spend cap of Tk 500/month",
            "Board-focused tutoring support",
            "Billed monthly in Tk",
          ],
        },
        {
          name: "Pro + Practice",
          description: "Adds structured practice sessions to the Pro experience.",
          cta: "Add Practice",
          features: [
            "Everything in Pro",
            "Practice mode included",
            "Track performance by session",
            "Better exam-prep flow",
            "Billed monthly in Tk",
          ],
        },
        {
          name: "Premium",
          description: "The complete package for full tutoring, voice, and practice access.",
          cta: "Go Premium",
          features: [
            "Everything in Pro + Practice",
            "Free chat enabled",
            "Voice enabled",
            "Full premium access",
            "API spend cap of Tk 1,600/month",
          ],
        },
      ],
      comparisonCategories: [
        {
          category: "AI Tutor Access",
          features: [
            { name: "Free-chat tutoring", basic: "No", trial: "Yes", pro: "No", proPractice: "No", premium: "Yes" },
            { name: "Voice interaction", basic: "No", trial: "Yes", pro: "No", proPractice: "No", premium: "Yes" },
            { name: "Image drop input", basic: "No", trial: "Yes", pro: "Yes", proPractice: "Yes", premium: "Yes" },
            { name: "MCQ + CQ help", basic: "No", trial: "Yes", pro: "Yes", proPractice: "Yes", premium: "Yes" },
          ],
        },
        {
          category: "Practice & Prep",
          features: [
            { name: "Practice mode", basic: "No", trial: "Yes", pro: "No", proPractice: "Yes", premium: "Yes" },
            { name: "Board-based question support", basic: "No", trial: "Yes", pro: "Yes", proPractice: "Yes", premium: "Yes" },
            { name: "Session-based tracking", basic: "No", trial: "Yes", pro: "No", proPractice: "Yes", premium: "Yes" },
          ],
        },
        {
          category: "Billing & Limits",
          features: [
            { name: "API spend cap", basic: "None", trial: "Included in trial", pro: "Tk 500/month", proPractice: "Tk 500/month", premium: "Tk 1,600/month" },
            { name: "Top-up credits", basic: "No", trial: "No", pro: "Yes", proPractice: "Yes", premium: "Yes" },
            { name: "Payment method", basic: "Free", trial: "Free", pro: "bKash / manual approval", proPractice: "bKash / manual approval", premium: "bKash / manual approval" },
          ],
        },
      ],
      faqs: [
        {
          q: "Can I upgrade, downgrade, or cancel at any time?",
          a: "Yes, absolutely! EZPZ has no long-term contracts. You can easily upgrade, downgrade, or cancel your subscription directly from your account settings with just a few clicks.",
        },
        {
          q: "How does the grade improvement guarantee work?",
          a: "We are so confident in our Elite Academy curriculum that if you complete at least 85% of your customized study plans and practice sessions and don't improve your Physics, Chemistry and Math mock exam or board scores, we will refund 100% of your tuition fees.",
        },
        {
          q: "Is there any localized payment method like bKash or Nagad?",
          a: "Yes! The prices are listed in BDT for local standardization We support bKash, Nagad, Rocket, local cards and other major mobile banking methods via our secure SSLCommerz checkout page.",
        },
        {
          q: "Can I use EZPZ on multiple devices?",
          a: "You can sign in and sync your progress on any of your personal devices (phone, tablet, computer). For security reasons, active sessions are limited to prevent simultaneous multi-device sharing.",
        },
      ],
      basic: "Basic",
      trial: "Trial",
      pro: "Pro",
      proPractice: "Pro + Practice",
      premium: "Premium",
      featuresLimits: "Features & Limits",
      mostPopular: "Most Popular",
      forStudents: "For students",
      perMonth: "/ month",
      testimonialQuote:
        "I used to spend hours searching through YouTube videos and guidebooks whenever I got stuck. With EZPZ, I can ask JARVIS or Aurum or Algebro directly and actually understand where I went wrong. It feels like having a study partner available whenever I need one.",
      testimonialName: "Arif Hossain",
      testimonialRole: "HSC Science Student",
    },
    validation: {
      eyebrow: "Early student validation",
      heading: "Traction & Validation",
      subheading: "Real students, real results — before launch.",
      metricLabel: "Student response",
      signalTitle: "Strong early signal",
      signalNote: "Based on student feedback",
      quotesEyebrow: "From the students",
      quotesSubheading: "What early users are telling us",
      verifiedLabel: "Verified feedback",
      stats: [
        { value: "9.3", total: "10", label: "Average experience rating" },
        { value: "7", total: "7", label: "Would use EzPz for HSC exam prep" },
        {
          value: "7",
          total: "7",
          label: "Would not need a traditional teacher with EzPz",
        },
        { value: "3", label: "Independent institutions represented" },
      ],
      quotes: [
        {
          quote:
            "This app is more helpful than AI like Gemini... something necessary now for students in our board.",
          name: "Faija Absar",
          role: "Bangladeshi HSC student living abroad",
        },
        {
          quote:
            "It was amazing and if I had it before, it would have been very useful for me and other students like me.",
          name: "Rafiduzzaman Saad",
          role: "Tongi Government College",
        },
      ],
      note: "Institutions: SKBZ Bangladesh Islamia School and College · Tongi Government College · Safiuddin Sharkar Academy. Beta validation from live product testing, July 2026 — platform has not yet publicly launched.",
    },
    footer: {
      description:
        "Empowering HSC students with AI-driven learning and expert solutions.",
      platform: "Platform",
      resources: "Resources",
      newsletterHeading: "Newsletter",
      newsletterDescription:
        "Stay updated with the latest study tips and platform features.",
      placeholder: "email@example.com",
      join: "Join",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "© 2026 EZPZ. All rights reserved.",
      madeBy: "Developed by Autolinium",
      links: {
        questionBank: "Question Bank",
        aiTutor: "AI Tutors",
        mcqPractice: "MCQ Practice",
        boardSolutions: "Board Solutions",
        syllabus: "HSC Syllabus",
        studyGuides: "Study Guides",
        blog: "Blog",
        helpCenter: "Help Center",
      },
    },
    blog: {
      back: "Back to home",
      badge: "Blog",
      heading: "Learn smarter with the EZPZ blog",
      description:
        "Practical study tips, product updates, and ideas that make exam preparation simpler and more effective.",
      posts: [
        {
          category: "Insights",
          title: "How AI-powered study tools are changing exam preparation",
          excerpt:
            "Discover why students are switching from passive note-taking to smart, interactive learning experiences.",
        },
        {
          category: "Study Tips",
          title: "3 ways to stay consistent with your revision plan",
          excerpt:
            "Simple habits that make daily practice manageable and help you build momentum.",
        },
        {
          category: "Learning",
          title: "Why visual explanations make complex topics easier",
          excerpt:
            "A closer look at how step-by-step guidance helps students grasp difficult concepts faster.",
        },
      ],
    },
  },
  bn: {
    navbar: {
      brand: "EZPZ",
      features: "বৈশিষ্ট্যসমূহ",
      howItWorks: "কীভাবে কাজ করে",
      pricing: "মূল্য",
      blog: "ব্লগ",
      login: "লগইন",
      getStarted: "শুরু করুন",
      signIn: "সাইন ইন",
      mobileMenuLabel: "নেভিগেশন মেনু ওপেন করুন",
    },
    hero: {
      heading: ["HSC পদার্থবিদ্যা আয়ত্ত করুন", "আপনার ব্যক্তিগত", "AI টিউটরের সাহায্যে"],
      description:
        "HSC ফিজিক্স ধাপে ধাপে বোর্ড সমাধান, ইন্টার‍্যাকটিভ AI ব্যাখ্যা এবং ইংরেজি ও বাংলা উভয় ভাষায় ভয়েস-গাইডেড শেখার সুযোগ পান।",
      ctaPrimary: "ফ্রিতে শেখা শুরু করুন",
      ctaSecondary: "EZPZ-এর কাজ দেখুন",
      videoTitle: "EZPZ ডেমো ভিডিও",
      videoClose: "ভিডিও বন্ধ করুন",
      previewTitle: "JARVIS",
      previewSubtitle: "আপনার ব্যক্তিগত ফিজিক্স টিউটর",
      previewBadge: "AI ফিজিক্স টিউটর",
      subjectLabel: "বিষয়",
      physics: "ফিজিক্স",
      physicsPaper: "১ম পত্র",
      learningPath: "শিখার পথ",
      chapterProgress: "অধ্যায়ের অগ্রগতি",
      questionLabel: "আপনার প্রশ্ন",
      responseLabel: "ব্যাখ্যা করছে...",
      boardContext: ["HSC 2024", "ঢাকা বোর্ড", "CQ · প্রশ্ন ৩"],
      online: "অনলাইন",
      steps: [
        {
          type: "text",
          content:
            "কার্নো চক্র একটি তাত্ত্বিক আদর্শ চক্র যা চারটি প্রত্যাগামী প্রক্রিয়ার সমন্বয়ে গঠিত।",
        },
        {
          type: "list",
          content: [
            "সমোষ্ণ প্রসারণ",
            "রুদ্ধতাপীয় প্রসারণ",
            "সমোষ্ণ সংকোচন",
            "রুদ্ধতাপীয় সংকোচন",
          ],
        },
        {
          type: "formula",
          content: "η = 1 − T₂ / T₁",
        },
        {
          type: "text",
          content:
            "এটিকে সবচেয়ে কার্যকর হিসেবে গণ্য করা হয় কারণ এটি দুটি তাপাধারের মধ্যে সর্বোচ্চ সম্ভব কার্যকারিতা উপস্থাপন করে।",
        },
      ],
    },
    features: {
      headingPrefix: "আপনি যা চান তা একসাথে",
      description:
        "বিক্ষিপ্ত টেস্ট পেপার খুঁজে বেড়াবেন না। EZPZ আপনার সব স্টাডি materyালকে এক স্মার্ট কর্মক্ষেত্রে নিয়ে আসে।",
      cards: [
        {
          title: "বোর্ড সমাধান",
          description:
            "সব বোর্ডের HSC ফিজিক্স, কেমিস্ট্রি আর ম্যাথের ২০+ বছরের প্রশ্ন ধাপে ধাপে সহজ ব্যাখ্যার সাথে অ্যাক্সেস করুন।",
        },
        {
          title: "ইন্টার‍্যাকটিভ AI টিউটর",
          description:
            "AI Tutor-কে জিজ্ঞেস করুন। আমাদের AI টিউটর প্রতিটি প্রশ্নের কনসেপ্ট বুঝে ব্যক্তিগত সহায়তা দেয়।",
        },
        {
          title: "ভয়েস-ফার্স্ট লার্নিং",
          description:
            "উচ্চমানের ইংরেজি এবং বাংলা ভয়েসে AI Tutor-এর ব্যাখ্যা শুনুন। স্ক্রীন না দেখে শেখা চালিয়ে যান।",
        },
        {
          title: "MCQ মাস্টারি",
          description:
            "টাইমড MCQ সেশনের মাধ্যমে অনুশীলন করুন। দুর্বল জায়গাগুলো বুঝে তাৎক্ষণিক ফিডব্যাক পান।",
        },
      ],
    },
    demo: {
      badge: "AI Tutor-এর পরিচয়",
      heading: "পদার্থবিদ্যা, রসায়ন এবং গণিতের জন্য আপনার ব্যক্তিগত AI টিউটরের সাথে স্মার্টলি শিখুন",
      description:
        "আপনি ফর্মুলা, ল্যাব কনসেপ্ট বা সমস্যা-সমাধানের ধাপ শিখুক না কেন, AI Tutor প্রতিটি ধারণা স্পষ্টভাবে ব্যাখ্যা করে আপনার গতি অনুযায়ী সাহায্য করে।",
      features: [
        {
          title: "ব্যক্তিগতকৃত ব্যাখ্যা",
          desc: "JARVIS আপনার বর্তমান বোঝার স্তরের উপর ভিত্তি করে ভঙ্গি ও গভীরতা বদলে দেয়।",
        },
        {
          title: "দুইভাষার সমর্থন",
          desc: "কথোপকথনের মাঝেই ইংরেজি ও বাংলার মধ্যে বদল করুন।",
        },
        {
          title: "ভিজ্যুয়াল লজিক",
          desc: "প্রতিটি বিষয়ে ধাপে ধাপে স্পষ্ট যুক্তি ব্যবহার করে।",
        },
      ],
      swipeLabel: "অনুসন্ধান করতে সোয়াইপ করুন",
      subjects: "পদার্থবিদ্যা • রসায়ন • গণিত",
      prevLabel: "আগের ডেমো",
      nextLabel: "পরের ডেমো",
      slides: [
        {
          subject: "পদার্থবিদ্যা",
          badge: "AI পদার্থবিদ্যা টিউটর",
          prompt: "কার্নো ইঞ্জিন চক্র কীভাবে কাজ করে এবং কেন এটি সবচেয়ে কার্যকর হিসেবে গণ্য করা হয় তা ব্যাখ্যা করুন।",
          steps: [
            "কার্নো চক্র একটি তাত্ত্বিক আদর্শ চক্র যা চারটি প্রত্যাগামী প্রক্রিয়ার সমন্বয়ে গঠিত:",
            "1. সমোষ্ণ প্রসারণ (T₁)\n2. রুদ্ধতাপীয় প্রসারণ\n3. সমোষ্ণ সংকোচন (T₂)\n4. রুদ্ধতাপীয় সংকোচন",
            "কার্যকারিতা (η) হলো:",
            "η = 1 - (T₂ / T₁)",
            "এটি সবচেয়ে কার্যকর কারণ এতে এনট্রপি উৎপাদন ন্যূনতম হয়। চাইলে আমি এই T-S ডায়াগ্রামও বুঝিয়ে দিতে পারি।",
          ],
        },
        {
          subject: "রসায়ন",
          badge: "AI রসায়ন কোচ",
          prompt: "তাপ বাড়লে রাসায়নিক বিক্রিয়া কেন দ্রুত হয় তা বুঝিয়ে দিন।",
          steps: [
            "উচ্চ তাপমাত্রায় কণাগুলো বেশি গতিশক্তি পায়, তাই তারা বেশি ঘন ঘন এবং শক্তিশালী ভাবে সংঘর্ষ করে।",
            "1. বেশি সফল সংঘর্ষ\n2. বেশি অ্যাকটিভেশন এনার্জি অর্জন\n3. দ্রুত বিক্রিয়া হার",
            "বিক্রিয়া হার এনার্জি প্রোফাইল ডায়াগ্রামের মাধ্যমে দেখানো যেতে পারে:",
            "Eₐ",
            "এজন্য অনেক বিক্রিয়ায় তাপ প্রদান করলে উল্লেখযোগ্যভাবে ত্বরান্বিত হয়।",
          ],
        },
        {
          subject: "গণিত",
          badge: "AI গণিত মেন্টর",
          prompt: "এই দ্বিঘাত সমীকরণটি ধাপে ধাপে সমাধান করে দেখান।",
          steps: [
            "আমরা এটি ফ্যাক্টরিং বা দ্বিঘাত সূত্র ব্যবহার করে সমাধান করতে পারি।",
            "1. সমীকরণ পুনর্বিন্যাস করুন\n2. a, b, c শনাক্ত করুন\n3. সূত্রে বসান",
            "x = (-b ± √(b² - 4ac)) / 2a",
            "x = 2 বা x = -3",
            "চাইলে আমি ব্যাখ্যা করতে পারি কেন উভয় মানই মূল সমীকরণকে সিদ্ধ করে।",
          ],
        },
      ],
      listen: "শুনুন (ইংরেজি)",
      followUp: "পরবর্তী প্রশ্ন জিজ্ঞেস করুন",
      students: "৫০০+ শিক্ষার্থীর সাথে যোগ দিন",
      studyingToday: "আজ JARVIS-এর সাথে পড়ছে",
    },
    pricing: {
      badge: "সহজ, স্বচ্ছ মূল্য",
      heading: "আপনার গ্রেডে বিনিয়োগ করুন, আপনার ভবিষ্যতে বিনিয়োগ করুন",
      description:
        "আপনার একাডেমিক লক্ষ্য অনুযায়ী সেরা প্ল্যান বেছে নিন। টপ সলিউশন, স্ট্যান্ডার্ড মক টেস্ট সিস্টেম এবং আপনার ব্যক্তিগত AI টিউটর JARVIS-এর অ্যাক্সেস পান।",
      monthlyBilling: "মাসিক বিলিং",
      tkBased: "Tk-ভিত্তিক প্ল্যান",
      billingNote: "bKash পেমেন্ট ২ ঘণ্টার মধ্যে ম্যানুয়ালি অনুমোদিত হয়।",
      compareHeading: "ফিচারগুলো একসাথে তুলনা করুন",
      compareDescription:
        "প্রতিটি টিয়ার মূল বৈশিষ্ট্য ও সীমাবদ্ধতা বুঝে নিজের জন্য সবচেয়ে উপযুক্ত বেছে নিন।",
      faqHeading: "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
      faqDescription:
        "আপগ্রেডের আগে প্রশ্ন আছে? আমাদের উত্তর আছে। আরও কিছু জানতে চাইলে আমাদের সাথে যোগাযোগ করুন।",
      howItWorks: "প্রথমে কীভাবে কাজ করে?",
      chooseHeading: "আপনার প্ল্যান বেছে নিন",
      perMonthShort: "/মাস",
      featureNames: {
        solutions: "পূর্বলিখিত এক্সপার্ট সলিউশন",
        questionBank: "প্রশ্ন ব্যাংক অ্যাক্সেস",
        mcq: "MCQ সহায়তা",
        cq: "CQ সহায়তা",
        practice: "প্র্যাকটিস সেকশন",
        practiceIncluded: "প্র্যাকটিস সেকশন (অন্তর্ভুক্ত)",
        teacherPanel: "ফ্রি চ্যাট টিচার প্যানেল",
        imageDrop: "ইমেজ ড্রপ",
        voice: "ভয়েস মোড",
        everythingPro: "প্রো-এর সবকিছু",
      },
      tiers: {
        basic: {
          label: "বেসিক",
          price: "ফ্রি",
          note: "কোনো সাবস্ক্রিপশন লাগবে না",
          cta: "ফ্রি অ্যাক্সেস নিন",
        },
        pro: {
          label: "প্রো",
          badge: "সবচেয়ে জনপ্রিয়",
          cta: "প্রো সাবস্ক্রাইব করুন",
          addonTitle: "প্র্যাকটিস আনলক করুন",
          addonAria: "প্রো-এর সাথে প্র্যাকটিস সেকশন যোগ করুন",
        },
        premium: {
          label: "প্রিমিয়াম",
          badge: "সম্পূর্ণ অ্যাক্সেস",
          cta: "প্রিমিয়াম সাবস্ক্রাইব করুন",
          includedNote: "প্র্যাকটিস অন্তর্ভুক্ত — কোনো অতিরিক্ত খরচ নেই",
        },
      },
      plans: [
        {
          name: "বেসিক",
          description: "প্ল্যাটফর্ম অন্বেষণ করতে চাইলে বিনামূল্যে অ্যাক্সেস।",
          cta: "ফ্রি শুরু করুন",
          features: [
            "ফ্রি প্ল্যান অ্যাক্সেস",
            "AI টিউটর ব্যবহার অন্তর্ভুক্ত নয়",
            "ভয়েস ইন্টারঅ্যাকশন নেই",
            "প্র্যাকটিস মোড নেই",
            "অভিজ্ঞতা অন্বেষণের জন্য দুর্দান্ত",
          ],
        },
        {
          name: "ট্রায়াল",
          description: "পণ্যটি পরীক্ষা করতে ৩ দিনের পূর্ণ প্রিমিয়াম অ্যাক্সেস।",
          cta: "৩-দিনের প্রিমিয়াম চেষ্টা করুন",
          popular: true,
          features: [
            "৩ দিন পূর্ণ প্রিমিয়াম AI অ্যাক্সেস",
            "ফ্রি-চ্যাট টিউটরিং অন্তর্ভুক্ত",
            "ভয়েস সক্ষম",
            "প্র্যাকটিস মোড অন্তর্ভুক্ত",
            "সম্পূর্ণ অভিজ্ঞতা মূল্যায়নের জন্য আদর্শ",
          ],
        },
        {
          name: "প্রো",
          description: "MCQ ও CQ সাপোর্টসহ বোর্ড-ফোকাসড সহায়তা দরকার এমন শিক্ষার্থীদের জন্য।",
          cta: "প্রো বেছে নিন",
          features: [
            "MCQ + CQ সহায়তা",
            "ইমেজ ড্রপ সাপোর্ট",
            "API খরচ সীমা Tk 500/মাস",
            "বোর্ড-ফোকাসড টিউটরিং সাপোর্ট",
            "মাসিকভিত্তিক Tk-এ বিলিং",
          ],
        },
        {
          name: "প্রো + প্র্যাকটিস",
          description: "প্রো অভিজ্ঞতায় কাঠামোবদ্ধ অনুশীলন সেশন যোগ করে।",
          cta: "প্র্যাকটিস যোগ করুন",
          features: [
            "প্রো-এর সবকিছু",
            "প্র্যাকটিস মোড অন্তর্ভুক্ত",
            "সেশন অনুযায়ী পারফরম্যান্স ট্র্যাক",
            "ভাল এক্সাম-প্রিপারেশন ফ্লো",
            "মাসিকভিত্তিক Tk-এ বিলিং",
          ],
        },
        {
          name: "প্রিমিয়াম",
          description: "সম্পূর্ণ টিউটরিং, ভয়েস এবং প্র্যাকটিস অ্যাক্সেসের জন্য পূর্ণ প্যাকেজ।",
          cta: "প্রিমিয়াম নিন",
          features: [
            "প্রো + প্র্যাকটিস-এর সবকিছু",
            "ফ্রি-চ্যাট সক্ষম",
            "ভয়েস সক্ষম",
            "সম্পূর্ণ প্রিমিয়াম অ্যাক্সেস",
            "API খরচ সীমা Tk 1,600/মাস",
          ],
        },
      ],
      comparisonCategories: [
        {
          category: "AI টিউটর এক্সেস",
          features: [
            { name: "ফ্রি-চ্যাট টিউটরিং", basic: "না", trial: "হ্যাঁ", pro: "না", proPractice: "না", premium: "হ্যাঁ" },
            { name: "ভয়েস ইন্টারঅ্যাকশন", basic: "না", trial: "হ্যাঁ", pro: "না", proPractice: "না", premium: "হ্যাঁ" },
            { name: "ইমেজ ড্রপ ইনপুট", basic: "না", trial: "হ্যাঁ", pro: "হ্যাঁ", proPractice: "হ্যাঁ", premium: "হ্যাঁ" },
            { name: "MCQ + CQ সহায়তা", basic: "না", trial: "হ্যাঁ", pro: "হ্যাঁ", proPractice: "হ্যাঁ", premium: "হ্যাঁ" },
          ],
        },
        {
          category: "প্র্যাকটিস ও প্রস্তুতি",
          features: [
            { name: "প্র্যাকটিস মোড", basic: "না", trial: "হ্যাঁ", pro: "না", proPractice: "হ্যাঁ", premium: "হ্যাঁ" },
            { name: "বোর্ড-ভিত্তিক প্রশ্ন সাপোর্ট", basic: "না", trial: "হ্যাঁ", pro: "হ্যাঁ", proPractice: "হ্যাঁ", premium: "হ্যাঁ" },
            { name: "সেশন-ভিত্তিক ট্র্যাকিং", basic: "না", trial: "হ্যাঁ", pro: "না", proPractice: "হ্যাঁ", premium: "হ্যাঁ" },
          ],
        },
        {
          category: "বিলিং ও সীমা",
          features: [
            { name: "API খরচ সীমা", basic: "কোনোটা নেই", trial: "ট্রায়ালে অন্তর্ভুক্ত", pro: "Tk 500/মাস", proPractice: "Tk 500/মাস", premium: "Tk 1,600/মাস" },
            { name: "টপ-আপ ক্রেডিট", basic: "না", trial: "না", pro: "হ্যাঁ", proPractice: "হ্যাঁ", premium: "হ্যাঁ" },
            { name: "পেমেন্ট পদ্ধতি", basic: "ফ্রি", trial: "ফ্রি", pro: "bKash / ম্যানুয়াল অনুমোদন", proPractice: "bKash / ম্যানুয়াল অনুমোদন", premium: "bKash / ম্যানুয়াল অনুমোদন" },
          ],
        },
      ],
      faqs: [
        {
          q: "আমি কোনো সময়ে আপগ্রেড, ডাউনগ্রেড বা ক্যান্সেল করতে পারি?",
          a: "হ্যাঁ, অবশ্যই! E TESTPaper-এ কোনো দীর্ঘমেয়াদি কন্ট্র্যাক্ট নেই। আপনি আপনার একাউন্ট সেটিংস থেকে সহজেই আপগ্রেড, ডাউনগ্রেড বা ক্যান্সেল করতে পারেন।",
        },
        {
          q: "গ্রেড উন্নতির গ্যারান্টি কীভাবে কাজ করে?",
          a: "আমরা আমাদের Elite Academy কারিকুলামে এতটাই আত্মবিশ্বাসী যে আপনি যদি আপনার কাস্টমাইজড স্টাডি প্ল্যান ও প্র্যাকটিস সেশনগুলোর কমপক্ষে ৮৫% সম্পূর্ণ করেন এবং আপনার পদার্থবিদ্যার মক এক্সাম বা বোর্ড স্কোরে উন্নতি না করেন, তাহলে আমরা আপনার টিউশন ফি সম্পূর্ণ ফেরত দেব।",
        },
        {
          q: "bKash বা Nagad-এর মতো স্থানীয় পেমেন্ট পদ্ধতি আছে?",
          a: "হ্যাঁ! যদিও মূল্য বিশ্বব্যাপী মানসম্মত করার জন্য USD-এ দেখানো হয়, আমরা SSLCommerz-এর নিরাপদ চেকআউট পেজের মাধ্যমে bKash, Nagad, Rocket, স্থানীয় কার্ড এবং অন্যান্য প্রধান মোবাইল ব্যাংকিং পদ্ধতি সমর্থন করি।",
        },
        {
          q: "আমি একাধিক ডিভাইসে E TESTPaper ব্যবহার করতে পারি?",
          a: "হ্যাঁ, আপনি আপনার ব্যক্তিগত যেকোনো ডিভাইসে (ফোন, ট্যাবলেট, কম্পিউটার) সাইন ইন করে আপনার অগ্রগতি সিঙ্ক করতে পারেন। নিরাপত্তার জন্য একসঙ্গে একাধিক ডিভাইস শেয়ার করতে দেওয়া হয় না।",
        },
      ],
      basic: "বেসিক",
      trial: "ট্রায়াল",
      pro: "প্রো",
      proPractice: "প্রো + প্র্যাকটিস",
      premium: "প্রিমিয়াম",
      featuresLimits: "ফিচার ও সীমা",
      mostPopular: "সবচেয়ে জনপ্রিয়",
      forStudents: "শিক্ষার্থীদের জন্য",
      perMonth: "/ মাস",
      testimonialQuote:
        "আমি আগে আটকে গেলে YouTube ভিডিও এবং গাইডবুক খুঁজে ঘণ্টার পর ঘণ্টা সময় নষ্ট করতাম। E TESTPaper-এর সাথে আমি সরাসরি JARVIS-কে প্রশ্ন করতে পারি এবং সত্যি সত্যি বুঝতে পারি আমি কোথায় ভুল করেছি। এটা যেন আমার হাতে সবসময় একটি পড়াশোনার সঙ্গী আছে।",
      testimonialName: "আরিফ হোসেন",
      testimonialRole: "HSC Science শিক্ষার্থী",
    },
    validation: {
      eyebrow: "শিক্ষার্থীদের প্রাথমিক যাচাই",
      heading: "ট্র্যাকশন ও ভ্যালিডেশন",
      subheading: "সত্যিকারের শিক্ষার্থী, সত্যিকারের ফলাফল — লঞ্চের আগেই।",
      metricLabel: "শিক্ষার্থীদের সাড়া",
      signalTitle: "শক্তিশালী প্রাথমিক ইঙ্গিত",
      signalNote: "শিক্ষার্থীদের মতামতের ভিত্তিতে",
      quotesEyebrow: "শিক্ষার্থীদের কথায়",
      quotesSubheading: "প্রাথমিক ব্যবহারকারীরা যা বলছেন",
      verifiedLabel: "যাচাইকৃত মতামত",
      stats: [
        { value: "৯.৩", total: "১০", label: "গড় অভিজ্ঞতার রেটিং" },
        {
          value: "৭",
          total: "৭",
          label: "HSC পরীক্ষার প্রস্তুতিতে EzPz ব্যবহার করবেন",
        },
        {
          value: "৭",
          total: "৭",
          label: "EzPz থাকলে প্রচলিত শিক্ষকের প্রয়োজন হবে না",
        },
        { value: "৩", label: "স্বতন্ত্র প্রতিষ্ঠান অন্তর্ভুক্ত" },
      ],
      quotes: [
        {
          quote:
            "এই অ্যাপটি Gemini-এর মতো AI-এর চেয়েও বেশি সহায়ক... আমাদের বোর্ডের শিক্ষার্থীদের জন্য এটি এখন খুবই দরকারি।",
          name: "ফাইজা আবসার",
          role: "প্রবাসে অবস্থানরত বাংলাদেশি HSC শিক্ষার্থী",
        },
        {
          quote:
            "এটা দারুণ ছিল, আগে পেলে আমার এবং আমার মতো অন্য শিক্ষার্থীদের অনেক কাজে লাগত।",
          name: "রফিদুজ্জামান সাদ",
          role: "টঙ্গী সরকারি কলেজ",
        },
      ],
      note: "প্রতিষ্ঠান: SKBZ বাংলাদেশ ইসলামিয়া স্কুল অ্যান্ড কলেজ · টঙ্গী সরকারি কলেজ · সাফিউদ্দিন সরকার একাডেমি। জুলাই ২০২৬-এ লাইভ প্রোডাক্ট টেস্টিং থেকে প্রাপ্ত বিটা ভ্যালিডেশন — প্ল্যাটফর্মটি এখনো পাবলিকলি লঞ্চ হয়নি।",
    },
    footer: {
      description:
        "বাংলাদেশের HSC শিক্ষার্থীদের AI-চালিত পদার্থবিদ্যা শিক্ষা এবং বিশেষজ্ঞ সমাধানের মাধ্যমে ক্ষমতায়ন করা।",
      platform: "প্ল্যাটফর্ম",
      resources: "সম্পদ",
      newsletterHeading: "নিউজলেটার",
      newsletterDescription:
        "সর্বশেষ স্টাডি টিপস এবং প্ল্যাটফর্মের বৈশিষ্ট্য নিয়ে আপডেট থাকুন।",
      placeholder: "email@example.com",
      join: "যোগ দিন",
      privacy: "গোপনীয়তা নীতি",
      terms: "সেবা শর্তাবলী",
      rights: "© 2026 E TESTPaper. সর্বস্বত্ব সংরক্ষিত।",
      madeBy: "তৈরি করেছে Autolinium",
      links: {
        questionBank: "প্রশ্ন ব্যাংক",
        aiTutor: "AI টিউটর JARVIS",
        mcqPractice: "MCQ অনুশীলন",
        boardSolutions: "বোর্ড সমাধান",
        syllabus: "HSC সিলেবাস",
        studyGuides: "স্টাডি গাইড",
        blog: "ব্লগ",
        helpCenter: "সাহায্য কেন্দ্র",
      },
    },
    blog: {
      back: "হোমে ফিরুন",
      badge: "ব্লগ",
      heading: "E TESTPaper ব্লগের সাহায্যে স্মার্টলি শিখুন",
      description:
        "প্র্যাকটিক্যাল স্টাডি টিপস, প্রোডাক্ট আপডেট এবং এক্সাম প্রিপারেশনকে সহজ ও কার্যকর করার ধারনা পড়ুন।",
      posts: [
        {
          category: "ইন্সাইটস",
          title: "AI-চালিত স্টাডি টুলস এক্সাম প্রিপারেশনকে কীভাবে বদলে দিচ্ছে",
          excerpt:
            "শিক্ষার্থীরা কেন প্যাসিভ নোট-টেকিং থেকে স্মার্ট, ইন্টারঅ্যাকটিভ লার্নিং অভিজ্ঞতায় স্যুইচ করছে তা আবিষ্কার করুন।",
        },
        {
          category: "স্টাডি টিপস",
          title: "আপনার রিভিশন প্ল্যানের সাথে ধারাবাহিক থাকতে ৩টি উপায়",
          excerpt:
            "দৈনিক অনুশীলনকে পরিচালনাযোগ্য করে তোলার সহজ অভ্যাস যা আপনাকে গতি তৈরি করতে সাহায্য করে।",
        },
        {
          category: "লার্নিং",
          title: "কেন ভিজ্যুয়াল এক্সপ্ল্যানেশন জটিল বিষয়গুলোকে সহজ করে",
          excerpt:
            "ধাপে ধাপে গাইডেন্স কীভাবে শিক্ষার্থীদের জটিল ধারণাগুলো দ্রুত বুঝতে সাহায্য করে সে বিষয়ে একটি ঘনিষ্ঠ দৃষ্টি।",
        },
      ],
    },
  },
};
