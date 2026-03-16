type Lang = "en" | "hi";

const translations: Record<string, Record<Lang, string>> = {
  // Navigation
  "nav.home": { en: "Home", hi: "होम" },
  "nav.about": { en: "About PM-JAY", hi: "पीएम-जेएवाई के बारे में" },
  "nav.ayushmanCard": { en: "Ayushman Card", hi: "आयुष्मान कार्ड" },
  "nav.eligibility": { en: "Check Eligibility", hi: "पात्रता जांचें" },
  "nav.howToApply": { en: "How to Apply", hi: "आवेदन कैसे करें" },
  "nav.hospitals": { en: "Find Hospitals", hi: "अस्पताल खोजें" },
  "nav.faq": { en: "FAQ", hi: "सामान्य प्रश्न" },
  "nav.contact": { en: "Contact", hi: "संपर्क" },
  "nav.team": { en: "Team", hi: "टीम" },
  "nav.blog": { en: "Blog", hi: "ब्लॉग" },
  "nav.askDoubt": { en: "Ask a Doubt", hi: "शंका पूछें" },
  "nav.langToggle": { en: "हिंदी", hi: "English" },

  // Hero Section
  "hero.badge": {
    en: "Government of India Initiative",
    hi: "भारत सरकार की पहल",
  },
  "hero.title": { en: "Ayushman Bharat", hi: "आयुष्मान भारत" },
  "hero.subtitle": { en: "PM-JAY Scheme", hi: "पीएम-जेएवाई योजना" },
  "hero.tagline": {
    en: "Free Health Insurance for Every Indian Family",
    hi: "हर भारतीय परिवार के लिए मुफ्त स्वास्थ्य बीमा",
  },
  "hero.desc": {
    en: "Get up to ₹5 Lakh coverage per family per year for secondary and tertiary care hospitalization.",
    hi: "माध्यमिक और तृतीयक देखभाल अस्पताल भर्ती के लिए प्रति वर्ष प्रति परिवार ₹5 लाख तक का कवरेज पाएं।",
  },
  "hero.cta1": { en: "Check Eligibility Now", hi: "अभी पात्रता जांचें" },
  "hero.cta2": { en: "Find Hospitals Near You", hi: "अपने पास अस्पताल खोजें" },
  "hero.trusted": {
    en: "Trusted by 50 Crore+ Beneficiaries",
    hi: "50 करोड़+ लाभार्थियों द्वारा विश्वसनीय",
  },
  "hero.trustedDesc": {
    en: "Senior citizens, families, and individuals across India rely on Ayushman Bharat PM-JAY for free, cashless healthcare.",
    hi: "पूरे भारत में वरिष्ठ नागरिक, परिवार और व्यक्ति मुफ्त, कैशलेस स्वास्थ्य सेवा के लिए आयुष्मान भारत पीएम-जेएवाई पर भरोसा करते हैं।",
  },

  // Stats Bar
  "stats.beneficiaries": { en: "Beneficiaries", hi: "लाभार्थी" },
  "stats.hospitals": { en: "Empanelled Hospitals", hi: "सूचीबद्ध अस्पताल" },
  "stats.procedures": { en: "Procedures Covered", hi: "कवर की गई प्रक्रियाएं" },
  "stats.coverage": { en: "Family Coverage", hi: "परिवार कवरेज" },
  "stats.hospitalizations": { en: "Hospitalizations", hi: "अस्पताल भर्ती" },
  "stats.claims": { en: "Claims Processed", hi: "दावे संसाधित" },

  // How It Works
  "hiw.title": { en: "How PM-JAY Works", hi: "पीएम-जेएवाई कैसे काम करता है" },
  "hiw.subtitle": {
    en: "Getting your Ayushman Bharat benefits is simple. Follow these three easy steps.",
    hi: "अपने आयुष्मान भारत लाभ प्राप्त करना सरल है। इन तीन आसान चरणों का पालन करें।",
  },
  "hiw.step1.title": { en: "Check Eligibility", hi: "पात्रता जांचें" },
  "hiw.step1.desc": {
    en: "Verify if your family is eligible using the SECC database or our online eligibility checker tool.",
    hi: "एसईसीसी डेटाबेस या हमारे ऑनलाइन पात्रता जांच उपकरण का उपयोग करके जांचें कि आपका परिवार पात्र है या नहीं।",
  },
  "hiw.step2.title": { en: "Get Ayushman Card", hi: "आयुष्मान कार्ड प्राप्त करें" },
  "hiw.step2.desc": {
    en: "Visit a Common Service Centre or empanelled hospital with your Aadhaar and Ration Card to get your free card.",
    hi: "अपना मुफ्त कार्ड पाने के लिए अपने आधार और राशन कार्ड के साथ किसी कॉमन सर्विस सेंटर या सूचीबद्ध अस्पताल में जाएं।",
  },
  "hiw.step3.title": { en: "Avail Treatment", hi: "उपचार का लाभ उठाएं" },
  "hiw.step3.desc": {
    en: "Show your Ayushman Card at any empanelled hospital for cashless treatment up to ₹5 lakh per year.",
    hi: "प्रति वर्ष ₹5 लाख तक के कैशलेस उपचार के लिए किसी भी सूचीबद्ध अस्पताल में अपना आयुष्मान कार्ड दिखाएं।",
  },

  // Benefits Section
  "benefits.title": {
    en: "Key Benefits of PM-JAY Scheme",
    hi: "पीएम-जेएवाई योजना के मुख्य लाभ",
  },
  "benefits.subtitle": {
    en: "Comprehensive healthcare coverage designed to protect Indian families from financial hardship.",
    hi: "भारतीय परिवारों को वित्तीय कठिनाई से बचाने के लिए व्यापक स्वास्थ्य कवरेज।",
  },
  "benefits.b1.title": { en: "₹5 Lakh Coverage", hi: "₹5 लाख कवरेज" },
  "benefits.b1.desc": {
    en: "Health cover of up to ₹5 lakh per family per year for secondary and tertiary care hospitalization.",
    hi: "माध्यमिक और तृतीयक देखभाल अस्पताल भर्ती के लिए प्रति वर्ष प्रति परिवार ₹5 लाख तक का स्वास्थ्य कवर।",
  },
  "benefits.b2.title": { en: "Cashless Treatment", hi: "कैशलेस उपचार" },
  "benefits.b2.desc": {
    en: "Get cashless treatment at any empanelled public or private hospital across India.",
    hi: "पूरे भारत में किसी भी सूचीबद्ध सरकारी या निजी अस्पताल में कैशलेस उपचार पाएं।",
  },
  "benefits.b3.title": { en: "Family Coverage", hi: "परिवार कवरेज" },
  "benefits.b3.desc": {
    en: "Coverage for entire family with no cap on family size or age of members.",
    hi: "परिवार के आकार या सदस्यों की आयु पर कोई सीमा नहीं, पूरे परिवार के लिए कवरेज।",
  },
  "benefits.b4.title": {
    en: "Pre & Post Hospitalization",
    hi: "भर्ती से पहले और बाद",
  },
  "benefits.b4.desc": {
    en: "Covers pre-hospitalization expenses up to 3 days and post-hospitalization up to 15 days.",
    hi: "3 दिन तक के पूर्व-अस्पताल भर्ती खर्च और 15 दिन तक के उत्तर-अस्पताल भर्ती को कवर करता है।",
  },
  "benefits.b5.title": { en: "1,949+ Procedures", hi: "1,949+ प्रक्रियाएं" },
  "benefits.b5.desc": {
    en: "Over 1,949 medical procedures covered including surgeries, specialist consultations, and day care treatments.",
    hi: "सर्जरी, विशेषज्ञ परामर्श और डे केयर उपचार सहित 1,949 से अधिक चिकित्सा प्रक्रियाएं कवर।",
  },
  "benefits.b6.title": {
    en: "33+ States & UTs",
    hi: "33+ राज्य और केंद्र शासित प्रदेश",
  },
  "benefits.b6.desc": {
    en: "Scheme is operational across 33+ states and union territories, ensuring nationwide coverage and portability.",
    hi: "योजना 33+ राज्यों और केंद्र शासित प्रदेशों में चालू है, राष्ट्रव्यापी कवरेज और पोर्टेबिलिटी सुनिश्चित करती है।",
  },

  // Why Choose Us
  "why.title": {
    en: "Why Trust This Portal?",
    hi: "इस पोर्टल पर भरोसा क्यों करें?",
  },
  "why.subtitle": {
    en: "We are dedicated to making PM-JAY information accessible, accurate, and understandable for every Indian citizen.",
    hi: "हम हर भारतीय नागरिक के लिए पीएम-जेएवाई की जानकारी को सुलभ, सटीक और समझने योग्य बनाने के लिए समर्पित हैं।",
  },
  "why.commitment": { en: "Our Commitment", hi: "हमारी प्रतिबद्धता" },
  "why.f1.title": {
    en: "Free & Accurate Information",
    hi: "मुफ्त और सटीक जानकारी",
  },
  "why.f1.desc": {
    en: "All information on this portal is completely free of cost. We regularly update our content to ensure accuracy and reliability for every citizen.",
    hi: "इस पोर्टल पर सभी जानकारी पूरी तरह से मुफ्त है। हम हर नागरिक के लिए सटीकता और विश्वसनीयता सुनिश्चित करने के लिए नियमित रूप से अपनी सामग्री अपडेट करते हैं।",
  },
  "why.f2.title": {
    en: "Government-Verified Data",
    hi: "सरकार द्वारा सत्यापित डेटा",
  },
  "why.f2.desc": {
    en: "Our content is sourced directly from official NHA guidelines and the National Health Authority. You can trust every piece of information here.",
    hi: "हमारी सामग्री सीधे आधिकारिक एनएचए दिशानिर्देशों और राष्ट्रीय स्वास्थ्य प्राधिकरण से ली गई है। आप यहां हर जानकारी पर भरोसा कर सकते हैं।",
  },
  "why.f3.title": { en: "Plain & Simple Language", hi: "सरल और सहज भाषा" },
  "why.f3.desc": {
    en: "We explain complex government schemes in simple, easy-to-understand Hindi and English so that every citizen can benefit regardless of education level.",
    hi: "हम जटिल सरकारी योजनाओं को सरल, आसानी से समझ में आने वाली हिंदी और अंग्रेजी में समझाते हैं ताकि हर नागरिक शिक्षा स्तर की परवाह किए बिना लाभ उठा सके।",
  },
  "why.f4.title": { en: "Mobile-Friendly Design", hi: "मोबाइल-अनुकूल डिज़ाइन" },
  "why.f4.desc": {
    en: "Our portal is designed mobile-first. Whether you're on a smartphone or a basic Android device, navigating this website is smooth and fast.",
    hi: "हमारा पोर्टल मोबाइल-फर्स्ट डिज़ाइन किया गया है। चाहे आप स्मार्टफोन या बेसिक एंड्रॉयड डिवाइस पर हों, इस वेबसाइट पर नेविगेट करना आसान और तेज है।",
  },

  // Ask A Doubt
  "doubt.title": { en: "Ask a Doubt", hi: "शंका पूछें" },
  "doubt.subtitle": {
    en: "Have questions about PM-JAY? Submit your query or browse common questions below.",
    hi: "पीएम-जेएवाई के बारे में प्रश्न हैं? अपनी क्वेरी सबमिट करें या नीचे सामान्य प्रश्न देखें।",
  },
  "doubt.name": { en: "Your Name", hi: "आपका नाम" },
  "doubt.namePlaceholder": {
    en: "Enter your full name",
    hi: "अपना पूरा नाम दर्ज करें",
  },
  "doubt.contact": { en: "Phone / Email", hi: "फोन / ईमेल" },
  "doubt.contactPlaceholder": {
    en: "Mobile number or email address",
    hi: "मोबाइल नंबर या ईमेल पता",
  },
  "doubt.question": { en: "Your Question", hi: "आपका प्रश्न" },
  "doubt.questionPlaceholder": {
    en: "Describe your doubt in detail...",
    hi: "अपनी शंका विस्तार से बताएं...",
  },
  "doubt.submit": { en: "Submit Question", hi: "प्रश्न सबमिट करें" },
  "doubt.faqTitle": { en: "Common Questions", hi: "सामान्य प्रश्न" },
  "doubt.successMsg": {
    en: "Your question has been submitted! We'll get back to you within 24 hours.",
    hi: "आपका प्रश्न सबमिट हो गया! हम 24 घंटे के भीतर आपसे संपर्क करेंगे।",
  },

  // Footer
  "footer.about": {
    en: "Bridging the healthcare information gap for all Indian citizens. Making quality healthcare accessible and understandable.",
    hi: "सभी भारतीय नागरिकों के लिए स्वास्थ्य सेवा सूचना अंतर को पाटना। गुणवत्तापूर्ण स्वास्थ्य सेवा को सुलभ और समझने योग्य बनाना।",
  },
  "footer.quickLinks": { en: "Quick Links", hi: "त्वरित लिंक" },
  "footer.officialResources": {
    en: "Official Resources",
    hi: "आधिकारिक संसाधन",
  },
  "footer.team": { en: "Our Team", hi: "हमारी टीम" },
  "footer.toll": {
    en: "Toll-Free: 14555 / 1800-111-565",
    hi: "टोल-फ्री: 14555 / 1800-111-565",
  },
  "footer.copyright": {
    en: "PM-JAY Information Portal. Built with",
    hi: "पीएम-जेएवाई सूचना पोर्टल। बनाया गया",
  },
  "footer.using": { en: "using", hi: "के साथ" },
  "footer.home": { en: "Home", hi: "होम" },
  "footer.about_link": { en: "About PM-JAY", hi: "पीएम-जेएवाई के बारे में" },
  "footer.eligibility": { en: "Check Eligibility", hi: "पात्रता जांचें" },
  "footer.howToApply": { en: "How to Apply", hi: "आवेदन कैसे करें" },
  "footer.hospitals": { en: "Find Hospitals", hi: "अस्पताल खोजें" },
  "footer.blog": { en: "Blog", hi: "ब्लॉग" },
  "footer.pmjayPortal": {
    en: "Official PM-JAY Portal",
    hi: "आधिकारिक पीएम-जेएवाई पोर्टल",
  },
  "footer.nha": {
    en: "National Health Authority",
    hi: "राष्ट्रीय स्वास्थ्य प्राधिकरण",
  },
  "footer.moh": { en: "Ministry of Health", hi: "स्वास्थ्य मंत्रालय" },
  "footer.app": { en: "Ayushman App", hi: "आयुष्मान ऐप" },

  // State Coverage
  "state.title": { en: "State-wise Coverage", hi: "राज्यवार कवरेज" },
  "state.subtitle": {
    en: "PM-JAY is implemented across 33+ states and union territories. See the coverage in your state.",
    hi: "पीएम-जेएवाई 33+ राज्यों और केंद्र शासित प्रदेशों में लागू है। अपने राज्य में कवरेज देखें।",
  },
  "state.beneficiaries": { en: "Beneficiaries", hi: "लाभार्थी" },
  "state.hospitals": { en: "Hospitals", hi: "अस्पताल" },
  "state.active": { en: "Active", hi: "सक्रिय" },
  "state.full": { en: "Full Coverage", hi: "पूर्ण कवरेज" },
  "state.partial": { en: "Partial", hi: "आंशिक" },

  // News Updates
  "news.title": { en: "News & Updates", hi: "समाचार और अपडेट" },
  "news.subtitle": {
    en: "Stay informed with the latest announcements and developments from the National Health Authority.",
    hi: "राष्ट्रीय स्वास्थ्य प्राधिकरण की नवीनतम घोषणाओं और विकासों के बारे में जानकारी रखें।",
  },
  "news.readMore": { en: "Read More", hi: "और पढ़ें" },
  "news.official": { en: "Official", hi: "आधिकारिक" },

  // Health Tips
  "tips.title": { en: "Preventive Health Tips", hi: "निवारक स्वास्थ्य टिप्स" },
  "tips.subtitle": {
    en: "Simple steps to stay healthy and reduce hospitalization risk.",
    hi: "स्वस्थ रहने और अस्पताल भर्ती के जोखिम को कम करने के सरल उपाय।",
  },

  // Emergency Contacts
  "emergency.title": { en: "Helplines & Resources", hi: "हेल्पलाइन और संसाधन" },
  "emergency.subtitle": {
    en: "Important contacts for Ayushman Bharat PM-JAY. All services are FREE.",
    hi: "आयुष्मान भारत पीएम-जेएवाई के लिए महत्वपूर्ण संपर्क। सभी सेवाएं मुफ्त हैं।",
  },
  "emergency.free": {
    en: "All PM-JAY services are FREE. Never pay anyone for Ayushman Card registration.",
    hi: "सभी पीएम-जेएवाई सेवाएं मुफ्त हैं। आयुष्मान कार्ड पंजीकरण के लिए कभी किसी को भुगतान न करें।",
  },

  // Diseases Covered
  "diseases.title": {
    en: "Diseases & Conditions Covered",
    hi: "कवर की गई बीमारियां और स्थितियां",
  },
  "diseases.subtitle": {
    en: "PM-JAY covers a wide range of serious illnesses and medical conditions.",
    hi: "पीएम-जेएवाई गंभीर बीमारियों और चिकित्सा स्थितियों की एक विस्तृत श्रृंखला को कवर करता है।",
  },

  // Customer Reviews
  "reviews.title": {
    en: "Real Stories from Beneficiaries",
    hi: "लाभार्थियों की वास्तविक कहानियां",
  },
  "reviews.subtitle": {
    en: "Thousands of Indian families have benefited from PM-JAY. Here's what they say.",
    hi: "हजारों भारतीय परिवारों ने पीएम-जेएवाई से लाभ उठाया है। वे क्या कहते हैं।",
  },

  // Scheme Components
  "scheme.title": {
    en: "Two Pillars of Ayushman Bharat",
    hi: "आयुष्मान भारत के दो स्तंभ",
  },
  "scheme.subtitle": {
    en: "A comprehensive approach to universal health coverage for every Indian citizen.",
    hi: "हर भारतीय नागरिक के लिए सार्वभौमिक स्वास्थ्य कवरेज के लिए एक व्यापक दृष्टिकोण।",
  },

  // Hospital Locator
  "hospitals.title": {
    en: "Find Empanelled Hospitals",
    hi: "सूचीबद्ध अस्पताल खोजें",
  },
  "hospitals.subtitle": {
    en: "Search for PM-JAY empanelled hospitals near you by specialty.",
    hi: "विशेषता के आधार पर अपने पास पीएम-जeएवाई सूचीबद्ध अस्पताल खोजें।",
  },
  "hospitals.searchPlaceholder": {
    en: "Search by hospital name, city or state...",
    hi: "अस्पताल का नाम, शहर या राज्य से खोजें...",
  },
  "hospitals.allSpecialties": { en: "All Specialties", hi: "सभी विशेषताएं" },

  // FAQ
  "faq.title": { en: "Frequently Asked Questions", hi: "अक्सर पूछे जाने वाले प्रश्न" },
  "faq.subtitle": {
    en: "Find answers to common questions about PM-JAY and Ayushman Bharat.",
    hi: "पीएम-जेएवाई और आयुष्मान भारत के बारे में सामान्य प्रश्नों के उत्तर खोजें।",
  },

  // Contact
  "contact.title": { en: "Contact Us", hi: "हमसे संपर्क करें" },
  "contact.subtitle": {
    en: "Have a question? Reach out to us or visit official government resources.",
    hi: "कोई प्रश्न है? हमसे संपर्क करें या आधिकारिक सरकारी संसाधनों पर जाएं।",
  },
  "contact.name": { en: "Your Name", hi: "आपका नाम" },
  "contact.email": { en: "Email Address", hi: "ईमेल पता" },
  "contact.message": { en: "Message", hi: "संदेश" },
  "contact.send": { en: "Send Message", hi: "संदेश भेजें" },

  // Eligibility Checker
  "eligibility.title": { en: "Check Your Eligibility", hi: "अपनी पात्रता जांचें" },
  "eligibility.subtitle": {
    en: "Answer a few quick questions to find out if you qualify for PM-JAY benefits.",
    hi: "पीएम-जेएवाई लाभों के लिए पात्र हैं या नहीं जानने के लिए कुछ त्वरित प्रश्नों के उत्तर दें।",
  },

  // How to Apply
  "apply.title": {
    en: "How to Apply for Ayushman Bharat",
    hi: "आयुष्मान भारत के लिए आवेदन कैसे करें",
  },
  "apply.subtitle": {
    en: "Step-by-step guide to get your Ayushman Card and start using PM-JAY benefits.",
    hi: "अपना आयुष्मान कार्ड प्राप्त करने और पीएम-जेएवाई लाभ का उपयोग शुरू करने के लिए चरण-दर-चरण मार्गदर्शिका।",
  },

  // About
  "about.title": {
    en: "About Ayushman Bharat PM-JAY",
    hi: "आयुष्मान भारत पीएम-जेएवाई के बारे में",
  },
  "about.subtitle": {
    en: "India's flagship health insurance scheme providing free healthcare to 55 crore+ citizens.",
    hi: "भारत की प्रमुख स्वास्थ्य बीमा योजना जो 55 करोड़+ नागरिकों को मुफ्त स्वास्थ्य सेवा प्रदान करती है।",
  },

  // Ayushman Card page
  "card.title": {
    en: "Ayushman Card – Your Gateway to Free Healthcare",
    hi: "आयुष्मान कार्ड – मुफ्त स्वास्थ्य सेवा का आपका प्रवेश द्वार",
  },
  "card.subtitle": {
    en: "Get your Ayushman Bharat card today and unlock ₹5 lakh of free healthcare per year.",
    hi: "आज ही अपना आयुष्मान भारत कार्ड प्राप्त करें और प्रति वर्ष ₹5 लाख की मुफ्त स्वास्थ्य सेवा का लाभ उठाएं।",
  },

  // Download Guide
  "cta.downloadGuide": {
    en: "Download Your Guide",
    hi: "अपनी गाइड डाउनलोड करें",
  },
  "cta.subscribe": {
    en: "Subscribe for Updates",
    hi: "अपडेट के लिए सब्सक्राइब करें",
  },
  "cta.checkNow": { en: "Check Eligibility Now", hi: "अभी पात्रता जांचें" },
  "cta.learnMore": { en: "Learn More", hi: "और जानें" },
  "cta.applyNow": { en: "Apply Now", hi: "अभी आवेदन करें" },
};

export function t(lang: Lang, key: string): string {
  const entry = translations[key];
  if (!entry) return key;
  return entry[lang] ?? entry.en ?? key;
}

export default translations;
