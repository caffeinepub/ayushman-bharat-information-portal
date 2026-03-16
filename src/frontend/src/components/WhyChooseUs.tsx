import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";
import { BookOpen, CheckCircle, Shield, Smartphone } from "lucide-react";

const featureIcons = [Shield, CheckCircle, BookOpen, Smartphone];
const featureIconBgs = [
  "bg-saffron/10",
  "bg-govt-green/10",
  "bg-blue-100",
  "bg-saffron/10",
];
const featureIconColors = [
  "text-saffron",
  "text-govt-green",
  "text-navy",
  "text-saffron",
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
    <section
      className="py-16 md:py-20"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.93 0.025 225), oklch(0.96 0.015 220))",
      }}
      data-ocid="why.section"
    >
      {/* Realistic hospital image banner */}
      <div className="mb-10 overflow-hidden" style={{ maxHeight: 240 }}>
        <img
          src="/assets/generated/why-trust-portal.dim_1200x300.jpg"
          alt="Indian doctors consulting patients in a modern government hospital"
          className="w-full object-cover"
          style={{
            objectPosition: "center 30%",
            maxHeight: 240,
            display: "block",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span
            className="mb-3 inline-block rounded-full px-4 py-1.5 text-sm font-semibold"
            style={{
              border: "1px solid oklch(0.75 0.18 72)",
              background: "oklch(0.97 0.04 72)",
              color: "oklch(0.42 0.15 40)",
            }}
          >
            {t(lang, "why.commitment")}
          </span>
          <h2
            className="section-heading mb-4 font-display text-3xl font-bold md:text-4xl"
            style={{ color: "oklch(0.22 0.07 240)" }}
          >
            {t(lang, "why.title")}
          </h2>
          <p
            className="mx-auto max-w-2xl text-lg mt-4"
            style={{ color: "oklch(0.40 0.05 230)" }}
          >
            {t(lang, "why.subtitle")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featureTitleKeys.map((titleKey, index) => {
            const Icon = featureIcons[index];
            return (
              <div
                key={titleKey}
                className="card-hover group flex flex-col items-center text-center rounded-xl p-6"
                style={{
                  background: "oklch(1 0 0)",
                  border: "1px solid oklch(0.88 0.02 220)",
                  boxShadow: "0 2px 12px oklch(0.80 0.04 225 / 0.25)",
                }}
                data-ocid={`why.item.${index + 1}`}
              >
                <div
                  className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${featureIconBgs[index]} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className={`h-8 w-8 ${featureIconColors[index]}`} />
                </div>
                <h3
                  className="mb-3 text-lg font-bold"
                  style={{ color: "oklch(0.22 0.07 240)" }}
                >
                  {t(lang, titleKey)}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.42 0.05 230)" }}
                >
                  {t(lang, featureDescKeys[index])}
                </p>
              </div>
            );
          })}
        </div>

        <div
          className="mt-14 flex flex-wrap items-center justify-center gap-6 rounded-2xl px-8 py-6"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.88 0.04 225), oklch(0.91 0.03 220))",
            border: "1px solid oklch(0.82 0.04 220)",
          }}
        >
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
              <div
                className="text-2xl font-bold"
                style={{ color: "oklch(0.42 0.18 72)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm font-medium"
                style={{ color: "oklch(0.35 0.06 240)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
