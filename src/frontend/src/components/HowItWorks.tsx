import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";
import { CheckCircle, CreditCard, Heart } from "lucide-react";

export default function HowItWorks() {
  const { lang } = useLanguage();

  const steps = [
    {
      number: 1,
      icon: CheckCircle,
      titleKey: "hiw.step1.title",
      descKey: "hiw.step1.desc",
      iconColor: "text-saffron",
      iconBg: "bg-saffron/10",
      accent: "oklch(0.80 0.18 72)",
    },
    {
      number: 2,
      icon: CreditCard,
      titleKey: "hiw.step2.title",
      descKey: "hiw.step2.desc",
      iconColor: "text-navy",
      iconBg: "bg-navy/10",
      accent: "oklch(0.22 0.07 240)",
    },
    {
      number: 3,
      icon: Heart,
      titleKey: "hiw.step3.title",
      descKey: "hiw.step3.desc",
      iconColor: "text-govt-green",
      iconBg: "bg-govt-green/10",
      accent: "oklch(0.45 0.14 145)",
    },
  ];

  return (
    <section
      className="section-green py-16 md:py-20"
      data-ocid="how-it-works.section"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="section-heading mb-4 text-3xl font-bold text-navy md:text-4xl">
            {t(lang, "hiw.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 mt-4">
            {t(lang, "hiw.subtitle")}
          </p>
        </div>
        <div className="relative flex flex-col gap-8 md:flex-row md:items-start md:gap-0">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-1 flex-col items-center text-center"
              data-ocid={`how-it-works.item.${index + 1}`}
            >
              {index < steps.length - 1 && (
                <div
                  className="absolute left-[calc(50%+3.5rem)] top-10 hidden h-0.5 w-[calc(100%-7rem)] md:block"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.72 0.18 50 / 0.4), oklch(0.45 0.14 145 / 0.5))",
                  }}
                />
              )}
              <div
                className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-full ${step.iconBg}`}
                style={{
                  border: `2px solid ${step.accent.replace(")", " / 0.4)")}`,
                  boxShadow: `0 0 20px ${step.accent.replace(")", " / 0.15)")}`,
                }}
              >
                <step.icon className={`h-8 w-8 ${step.iconColor}`} />
                <span
                  className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: "oklch(0.72 0.18 50)" }}
                >
                  {step.number}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-navy">
                {t(lang, step.titleKey)}
              </h3>
              <p className="mt-2 max-w-xs text-gray-600">
                {t(lang, step.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
