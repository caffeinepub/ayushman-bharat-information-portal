import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";
import {
  Building,
  ExternalLink,
  Globe,
  Mail,
  Phone,
  Smartphone,
  Video,
} from "lucide-react";

export default function EmergencyContacts() {
  const { lang } = useLanguage();

  const contacts = [
    {
      icon: Phone,
      titleEn: "PM-JAY Helpline",
      titleHi: "पीएम-जेएवाई हेल्पलाइन",
      detail: "14555 | 1800-111-565",
      subEn: "Toll Free, 24×7",
      subHi: "टोल फ्री, 24×7",
      link: "tel:14555",
      color: "text-govt-green",
      bg: "bg-govt-green/10",
    },
    {
      icon: Mail,
      titleEn: "NHA Grievance Email",
      titleHi: "एनएचए शिकायत ईमेल",
      detail: "pmjay@nha.gov.in",
      subEn: "For complaints & queries",
      subHi: "शिकायत और प्रश्नों के लिए",
      link: "mailto:pmjay@nha.gov.in",
      color: "text-saffron",
      bg: "bg-saffron/10",
    },
    {
      icon: Globe,
      titleEn: "Official PM-JAY Portal",
      titleHi: "आधिकारिक पीएम-जेएवाई पोर्टल",
      detail: "pmjay.gov.in",
      subEn: "Check eligibility & hospitals",
      subHi: "पात्रता और अस्पताल जांचें",
      link: "https://pmjay.gov.in",
      color: "text-navy",
      bg: "bg-navy/10",
    },
    {
      icon: Globe,
      titleEn: "ABHA Registration",
      titleHi: "एबीएचए पंजीकरण",
      detail: "abha.abdm.gov.in",
      subEn: "Create your Health ID free",
      subHi: "मुफ्त स्वास्थ्य आईडी बनाएं",
      link: "https://abha.abdm.gov.in",
      color: "text-govt-green",
      bg: "bg-govt-green/10",
    },
    {
      icon: Smartphone,
      titleEn: "ABHA App Download",
      titleHi: "एबीएचए एप डाउनलोड",
      detail: "Play Store & App Store",
      subEn: "Free ABHA Health Records App",
      subHi: "मुफ्त एबीएचए हेल्थ रिकॉर्ड्स एप",
      link: "https://play.google.com/store/apps/details?id=in.gov.abdm.abha",
      color: "text-saffron",
      bg: "bg-saffron/10",
    },
    {
      icon: Video,
      titleEn: "NHA YouTube Channel",
      titleHi: "एनएचए यूट्यूब चैनल",
      detail: "Official NHA Videos",
      subEn: "Explainer videos & tutorials",
      subHi: "व्याख्यात्मक वीडियो और ट्यूटोरियल",
      link: "https://www.youtube.com/@NHAIndia",
      color: "text-navy",
      bg: "bg-navy/10",
    },
    {
      icon: Building,
      titleEn: "State Health Agency",
      titleHi: "राज्य स्वास्थ्य एजेंसी",
      detail: "nha.gov.in/state-sha",
      subEn: "Find your state office",
      subHi: "अपना राज्य कार्यालय खोजें",
      link: "https://nha.gov.in",
      color: "text-govt-green",
      bg: "bg-govt-green/10",
    },
    {
      icon: ExternalLink,
      titleEn: "National Health Authority",
      titleHi: "राष्ट्रीय स्वास्थ्य प्राधिकरण",
      detail: "nha.gov.in",
      subEn: "Official NHA website",
      subHi: "आधिकारिक एनएचए वेबसाइट",
      link: "https://nha.gov.in",
      color: "text-saffron",
      bg: "bg-saffron/10",
    },
  ];

  return (
    <section
      className="bg-gradient-to-br from-navy/5 via-background to-govt-green/5 py-16 md:py-20"
      data-ocid="emergency.section"
    >
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            {t(lang, "emergency.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t(lang, "emergency.subtitle")}
          </p>
        </div>

        <div className="mb-8 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-center">
          <p className="font-semibold text-destructive">
            ⚠️ {t(lang, "emergency.free")}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((contact, i) => (
            <a
              key={contact.titleEn}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 rounded-xl border border-border/50 bg-card p-5 shadow-sm transition-all hover:shadow-md hover:border-saffron/40"
              data-ocid={`emergency.item.${i + 1}`}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${contact.bg}`}
              >
                <contact.icon className={`h-5 w-5 ${contact.color}`} />
              </div>
              <div>
                <p className="font-bold text-foreground">
                  {lang === "hi" ? contact.titleHi : contact.titleEn}
                </p>
                <p className="text-sm font-medium text-foreground/80">
                  {contact.detail}
                </p>
                <p className="text-xs text-muted-foreground">
                  {lang === "hi" ? contact.subHi : contact.subEn}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
