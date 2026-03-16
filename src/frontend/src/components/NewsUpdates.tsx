import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";
import { Bell } from "lucide-react";

const newsItems = [
  {
    date: "Nov 2024",
    titleEn: "PM-JAY Expanded for Senior Citizens 70+",
    titleHi: "वरिष्ठ नागरिकों (70+) के लिए पीएम-जेएवाई विस्तारित",
    descEn:
      "All Indian citizens aged 70 years and above are now eligible for PM-JAY, regardless of income. Separate ₹5 lakh cover for every senior citizen.",
    descHi:
      "70 वर्ष और उससे अधिक आयु के सभी भारतीय नागरिक अब आय की परवाह किए बिना पीएम-जेएवाई के पात्र हैं। प्रत्येक वरिष्ठ नागरिक के लिए अलग ₹5 लाख का कवर।",
    link: "https://pmjay.gov.in",
  },
  {
    date: "Sep 2024",
    titleEn: "6 Crore ABHA IDs Created Across India",
    titleHi: "पूरे भारत में 6 करोड़ एबीएचए आईडी बनीं",
    descEn:
      "The Ayushman Bharat Health Account (ABHA) program reaches 6 crore registrations, enabling digital health record access for millions.",
    descHi: "आयुष्मान भारत हेल्थ अकाउंट (एबीएचए) कार्यक्रम 6 करोड़ पंजीकरण तक पहुंचा।",
    link: "https://abha.abdm.gov.in",
  },
  {
    date: "Jul 2024",
    titleEn: "1.5 Lakh Ayushman Arogya Mandirs Operational",
    titleHi: "1.5 लाख आयुष्मान आरोग्य मंदिर संचालित",
    descEn:
      "India's network of health and wellness centres reaches 1.5 lakh, providing primary healthcare services at no cost in rural and urban areas.",
    descHi:
      "भारत के स्वास्थ्य और वेलनेस केंद्रों का नेटवर्क 1.5 लाख तक पहुंचा, ग्रामीण और शहरी क्षेत्रों में मुफ्त मूल स्वास्थ्य सेवाएं प्रदान करता।",
    link: "https://pmjay.gov.in",
  },
  {
    date: "Mar 2024",
    titleEn: "₹1 Lakh Crore in Claims Processed by NHA",
    titleHi: "एनएचए द्वारा ₹1 लाख करोड़ के दावे प्रसंस्कृत",
    descEn:
      "National Health Authority crosses landmark of ₹1 lakh crore in total claim value processed since scheme launch in 2018.",
    descHi:
      "राष्ट्रीय स्वास्थ्य प्राधिकरण ने 2018 में योजना शुरू होने से अब तक कुल ₹1 लाख करोड़ की दावा राशि का निशान पार किया।",
    link: "https://pmjay.gov.in",
  },
  {
    date: "Jan 2024",
    titleEn: "New Procedures Added to PM-JAY Package List",
    titleHi: "पीएम-जेएवाई पैकेज सूची में नई प्रक्रियाएं जोड़ी गईं",
    descEn:
      "NHA adds new medical procedures to the covered list, expanding access to specialty treatments including robotic surgery and newer cancer therapies.",
    descHi:
      "एनएचए ने कवर सूची में नई चिकित्सा प्रक्रियाएं जोड़ीं, रोबोटिक सर्जरी और नई कैंसर थेरेपी सहित विशेषज्ञ उपचारों तक पहुंच बढ़ाई।",
    link: "https://pmjay.gov.in",
  },
];

export default function NewsUpdates() {
  const { lang } = useLanguage();

  return (
    <section
      className="bg-gradient-to-br from-saffron/5 via-background to-saffron/10 py-16 md:py-20"
      data-ocid="news.section"
    >
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            {t(lang, "news.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t(lang, "news.subtitle")}
          </p>
        </div>
        <div className="space-y-4 max-w-4xl mx-auto">
          {newsItems.map((item, i) => (
            <div
              key={item.titleEn}
              className="flex gap-4 rounded-xl border border-saffron/20 bg-card p-5 shadow-sm hover:shadow-md hover:border-saffron/40 transition-all"
              data-ocid={`news.item.${i + 1}`}
            >
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-saffron/10">
                  <Bell className="h-5 w-5 text-saffron" />
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-navy/10 px-2.5 py-0.5 text-xs font-semibold text-navy">
                    {item.date}
                  </span>
                  <span className="rounded-full bg-saffron/10 px-2.5 py-0.5 text-xs font-semibold text-saffron">
                    {t(lang, "news.official")}
                  </span>
                </div>
                <h3 className="mb-1 font-bold text-foreground">
                  {lang === "hi" ? item.titleHi : item.titleEn}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {lang === "hi" ? item.descHi : item.descEn}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-xs font-medium text-saffron hover:underline"
                  data-ocid="news.link"
                >
                  {t(lang, "news.readMore")} ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
