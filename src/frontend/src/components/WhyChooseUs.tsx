import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";
import { BookOpen, CheckCircle, Shield, Smartphone } from "lucide-react";

const featureIcons = [Shield, CheckCircle, BookOpen, Smartphone];
const featureBgs = [
  "bg-saffron/15",
  "bg-govt-green/15",
  "bg-saffron/15",
  "bg-govt-green/15",
];
const featureTexts = [
  "text-saffron",
  "text-govt-green",
  "text-saffron",
  "text-govt-green",
];
const featureTitleKeys = [
  "why.f1.title",
  "why.f2.title",
  "why.f3.title",
  "why.f4.title",
];
const featureDescKeys = [
  "why.f1.desc",
  "why.f2.desc",
  "why.f3.desc",
  "why.f4.desc",
];

export default function WhyChooseUs() {
  const { lang } = useLanguage();

  return (
    <section className="section-saffron py-16 md:py-20" data-ocid="why.section">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-govt-green/20 px-4 py-1.5 text-sm font-semibold text-govt-green">
            {t(lang, "why.commitment")}
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            {t(lang, "why.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t(lang, "why.subtitle")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featureTitleKeys.map((titleKey, index) => {
            const Icon = featureIcons[index];
            return (
              <div
                key={titleKey}
                className="group flex flex-col items-center text-center"
                data-ocid={`why.item.${index + 1}`}
              >
                <div
                  className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${featureBgs[index]} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className={`h-8 w-8 ${featureTexts[index]}`} />
                </div>
                <h3 className="mb-3 text-lg font-bold text-foreground">
                  {t(lang, titleKey)}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(lang, featureDescKeys[index])}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 rounded-2xl bg-navy px-8 py-6">
          {[
            {
              label: lang === "en" ? "Citizens Helped" : "नागरिकों की मदद",
              value: "50,000+",
            },
            {
              label: lang === "en" ? "Verified Hospitals" : "सत्यापित अस्पताल",
              value: "27,000+",
            },
            {
              label: lang === "en" ? "Satisfied Users" : "संतुष्ट उपयोगकर्ता",
              value: "98%",
            },
            {
              label: lang === "en" ? "Daily Visitors" : "दैनिक विजिटर",
              value: "10,000+",
            },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-saffron">
                {stat.value}
              </div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
