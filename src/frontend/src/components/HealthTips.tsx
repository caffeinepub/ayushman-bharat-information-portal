import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";

const tips = [
  {
    icon: "🥗",
    titleEn: "Balanced Diet",
    titleHi: "संतुलित आहार",
    descEn:
      "Eat seasonal fruits, vegetables, and pulses daily. Avoid processed food and excess salt to prevent diabetes and high blood pressure.",
    descHi:
      "रोज मौसमी फल, सब्जियां और दालें खाएं। डायेलीटिस और उच्च रक्तचाप से बचने के लिए प्रसंस्कृत खाना और अधिक नमक से बचें।",
    bg: "from-saffron/10 to-saffron/5",
  },
  {
    icon: "🚶",
    titleEn: "Daily Exercise",
    titleHi: "रोजाना व्यायाम",
    descEn:
      "Walk at least 30 minutes a day. Physical activity reduces risk of heart disease, obesity, and diabetes significantly.",
    descHi:
      "रोज कम से कम 30 मिनट चलें। शारीरिक गतिविधि हृदय रोग, मोटापा और डायेलीटिस के जोखिम को कम करती है।",
    bg: "from-govt-green/10 to-govt-green/5",
  },
  {
    icon: "🩺",
    titleEn: "Annual Health Check",
    titleHi: "वार्षिक स्वास्थ्य जांच",
    descEn:
      "Use Ayushman Arogya Mandirs for free annual health screenings including BP, sugar, and cancer screening — all at no cost.",
    descHi:
      "मुफ्त वार्षिक स्वास्थ्य जांच के लिए आयुष्मान आरोग्य मंदिरों का उपयोग करें — बीपी, शुगर और कैंसर स्क्रीनिंग सभी मुफ्त।",
    bg: "from-navy/10 to-navy/5",
  },
  {
    icon: "💧",
    titleEn: "Stay Hydrated",
    titleHi: "हाइड्रेटेड रहें",
    descEn:
      "Drink 6-8 glasses of clean water daily. Proper hydration prevents kidney stones and urinary tract infections.",
    descHi:
      "रोज 6-8 गिलास साफ पानी पिएं। सही हाइड्रेशन गुर्दे की पथरी और मूत्र मार्ग संक्रमण से बचाता है।",
    bg: "from-saffron/10 to-saffron/5",
  },
  {
    icon: "🧠",
    titleEn: "Mental Wellness",
    titleHi: "मानसिक स्वास्थ्य",
    descEn:
      "PM-JAY covers psychiatric treatment. Seek help early if experiencing anxiety, depression, or emotional distress. You are not alone.",
    descHi:
      "पीएम-जेएवाई मनोचिकित्सक उपचार कवर करता है। चिंता, अवसाद या ࢈मोशनल तनाव होने पर शुरुआत में ही मदद लें। आप अकेले नहीं हैं।",
    bg: "from-govt-green/10 to-govt-green/5",
  },
  {
    icon: "🚭",
    titleEn: "Avoid Tobacco",
    titleHi: "तंबाखू से बचें",
    descEn:
      "Quitting tobacco reduces risk of oral cancer, lung disease, and heart attacks. Free de-addiction support at Ayushman Arogya Mandirs.",
    descHi:
      "तंबाखू छोड़ने से मुंह के कैंसर, फेफड़े की बीमारी और दिल के दौरे का जोखिम कम होता है। आयुष्मान आरोग्य मंदिरों में मुफ्त नशामुक्ति सहायता।",
    bg: "from-navy/10 to-navy/5",
  },
];

export default function HealthTips() {
  const { lang } = useLanguage();

  return (
    <section
      className="bg-gradient-to-br from-govt-green/5 via-background to-saffron/5 py-16 md:py-20"
      data-ocid="health-tips.section"
    >
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            {t(lang, "tips.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t(lang, "tips.subtitle")}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip, i) => (
            <div
              key={tip.titleEn}
              className={`rounded-2xl bg-gradient-to-br ${tip.bg} border border-border/40 p-5`}
              data-ocid={`health-tips.item.${i + 1}`}
            >
              <div className="mb-3 text-3xl">{tip.icon}</div>
              <h3 className="mb-2 font-bold text-foreground">
                {lang === "hi" ? tip.titleHi : tip.titleEn}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {lang === "hi" ? tip.descHi : tip.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
