import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";

export default function StatsBar() {
  const { lang } = useLanguage();

  const stats = [
    { value: "55 Crore+", labelKey: "stats.beneficiaries" },
    { value: "27,000+", labelKey: "stats.hospitals" },
    { value: "1,949+", labelKey: "stats.procedures" },
    { value: "₹5 Lakh", labelKey: "stats.coverage" },
    { value: "5 Crore+", labelKey: "stats.hospitalizations" },
    { value: "₹29,000+ Cr", labelKey: "stats.claims" },
  ];

  return (
    <section
      className="py-8"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.22 0.08 240), oklch(0.26 0.09 240))",
      }}
      data-ocid="stats.section"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, i) => (
            <div
              key={stat.labelKey}
              className="card-hover rounded-xl p-5 text-center"
              style={{
                background: "oklch(0.30 0.08 240)",
                border: "1px solid oklch(0.35 0.08 240)",
              }}
              data-ocid={`stats.item.${i + 1}`}
            >
              <div
                className="text-2xl font-bold md:text-3xl"
                style={{ color: "oklch(0.80 0.18 72)" }}
              >
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-gray-300">
                {t(lang, stat.labelKey)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
