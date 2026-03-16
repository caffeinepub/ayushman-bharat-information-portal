import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";

const tips = [
  {
    emoji: "🥗",
    titleKey: "tips.t1.title",
    descKey: "tips.t1.desc",
    accent: "oklch(0.80 0.18 72)",
  },
  {
    emoji: "🏃",
    titleKey: "tips.t2.title",
    descKey: "tips.t2.desc",
    accent: "oklch(0.60 0.16 165)",
  },
  {
    emoji: "🩺",
    titleKey: "tips.t3.title",
    descKey: "tips.t3.desc",
    accent: "oklch(0.60 0.16 165)",
  },
  {
    emoji: "💧",
    titleKey: "tips.t4.title",
    descKey: "tips.t4.desc",
    accent: "oklch(0.80 0.18 72)",
  },
  {
    emoji: "🧘",
    titleKey: "tips.t5.title",
    descKey: "tips.t5.desc",
    accent: "oklch(0.60 0.16 165)",
  },
  {
    emoji: "🚭",
    titleKey: "tips.t6.title",
    descKey: "tips.t6.desc",
    accent: "oklch(0.80 0.18 72)",
  },
];

export default function HealthTips() {
  const { lang } = useLanguage();

  return (
    <section className="section-green py-16 md:py-20" data-ocid="tips.section">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="section-heading mb-3 text-3xl font-bold text-foreground md:text-4xl">
            {t(lang, "tips.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/65 mt-4">
            {t(lang, "tips.subtitle")}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip, i) => (
            <div
              key={tip.titleKey}
              className="card-hover rounded-2xl p-5"
              style={{
                background: "oklch(1 0 0)",
                border: "1px solid oklch(0.88 0.01 220)",
                borderLeft: `3px solid ${tip.accent}`,
              }}
              data-ocid={`tips.item.${i + 1}`}
            >
              <div
                className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: `${tip.accent.replace(")", " / 0.1)")}`,
                }}
              >
                <span className="text-2xl">{tip.emoji}</span>
              </div>
              <h3 className="mb-2 font-bold text-foreground">
                {t(lang, tip.titleKey)}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/65">
                {t(lang, tip.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
