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
    <section className="bg-navy py-6" data-ocid="stats.section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, i) => (
            <div
              key={stat.labelKey}
              className="text-center"
              data-ocid={`stats.item.${i + 1}`}
            >
              <div className="text-2xl font-bold text-saffron md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-white/80">
                {t(lang, stat.labelKey)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
