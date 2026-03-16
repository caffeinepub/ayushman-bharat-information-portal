import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";
import { Bell } from "lucide-react";

const news = [
  {
    title: "Senior Citizens 70+ Now Fully Covered Under PM-JAY",
    date: "January 2025",
    type: "Policy Update",
    icon: "👴",
    accentColor: "oklch(0.80 0.18 72)",
  },
  {
    title: "60 Crore ABHA IDs Created Under Digital Mission",
    date: "December 2024",
    type: "Milestone",
    icon: "📱",
    accentColor: "oklch(0.60 0.16 165)",
  },
  {
    title: "1.5 Lakh Ayushman Arogya Mandirs Operational Nationwide",
    date: "November 2024",
    type: "Expansion",
    icon: "🏥",
    accentColor: "oklch(0.80 0.18 72)",
  },
  {
    title: "800 New Procedures Added to PM-JAY Coverage List",
    date: "October 2024",
    type: "Coverage Update",
    icon: "📋",
    accentColor: "oklch(0.60 0.16 165)",
  },
  {
    title: "PM-JAY Crosses 5 Crore Hospitalization Mark",
    date: "September 2024",
    type: "Achievement",
    icon: "🎯",
    accentColor: "oklch(0.80 0.18 72)",
  },
];

export default function NewsUpdates() {
  const { lang } = useLanguage();

  return (
    <section
      className="py-16 md:py-20"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.94 0.02 225), oklch(0.97 0.012 215))",
      }}
      data-ocid="news.section"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2
            className="section-heading mb-3 text-3xl font-bold md:text-4xl"
            style={{ color: "oklch(0.22 0.07 240)" }}
          >
            {t(lang, "news.title")}
          </h2>
          <p
            className="mx-auto max-w-2xl text-lg mt-4"
            style={{ color: "oklch(0.42 0.05 230)" }}
          >
            {t(lang, "news.subtitle")}
          </p>
        </div>
        <div className="space-y-4 max-w-3xl mx-auto">
          {news.map((item, i) => (
            <div
              key={item.title}
              className="card-hover flex gap-4 rounded-xl p-5"
              style={{
                background: "oklch(1 0 0)",
                border: "1px solid oklch(0.88 0.02 220)",
                borderLeft: `4px solid ${item.accentColor}`,
                boxShadow: "0 2px 10px oklch(0.80 0.04 225 / 0.2)",
              }}
              data-ocid={`news.item.${i + 1}`}
            >
              <div
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
                style={{
                  backgroundColor: `${item.accentColor.replace(")", " / 0.12)")}`,
                }}
              >
                <span className="text-xl">{item.icon}</span>
              </div>
              <div className="flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <span
                    className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
                    style={{ backgroundColor: item.accentColor }}
                  >
                    {item.type}
                  </span>
                  <span
                    className="text-xs font-medium"
                    style={{ color: "oklch(0.45 0.05 230)" }}
                  >
                    {item.date}
                  </span>
                </div>
                <p
                  className="font-semibold"
                  style={{ color: "oklch(0.22 0.07 240)" }}
                >
                  {item.title}
                </p>
              </div>
              <Bell
                className="h-5 w-5 flex-shrink-0 mt-1"
                style={{ color: "oklch(0.80 0.18 72)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
