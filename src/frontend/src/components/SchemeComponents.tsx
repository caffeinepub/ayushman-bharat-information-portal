import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, ShieldCheck } from "lucide-react";

const schemes = [
  {
    icon: ShieldCheck,
    iconColor: "text-saffron",
    iconBg: "bg-saffron/10",
    tag: "PM-JAY",
    tagColor: "oklch(0.80 0.18 72)",
    title: "Pradhan Mantri Jan Arogya Yojana",
    subtitle: "Financial Protection & Cashless Hospitalization",
    subtitleColor: "text-saffron",
    accentColor: "oklch(0.80 0.18 72)",
    cardBg:
      "linear-gradient(135deg, oklch(0.95 0.02 55), oklch(0.97 0.015 50))",
    cardBorder: "1px solid oklch(0.88 0.02 55)",
    points: [
      "₹5 lakh health cover per family per year",
      "Covers 1,949+ medical procedures & surgeries",
      "Cashless treatment at 27,000+ empanelled hospitals",
      "No premium for beneficiaries — fully government funded",
      "Portable across all states and union territories",
    ],
  },
  {
    icon: Building2,
    iconColor: "text-govt-green",
    iconBg: "bg-govt-green/10",
    tag: "AB-HWC",
    tagColor: "oklch(0.60 0.16 165)",
    title: "Ayushman Bharat Health & Wellness Centres",
    subtitle: "Primary Healthcare Near Your Home",
    subtitleColor: "text-govt-green",
    accentColor: "oklch(0.60 0.16 165)",
    cardBg:
      "linear-gradient(135deg, oklch(0.95 0.02 145), oklch(0.97 0.015 145))",
    cardBorder: "1px solid oklch(0.88 0.02 145)",
    points: [
      "1.5 lakh Health & Wellness Centres across India",
      "Free primary and preventive healthcare services",
      "Maternal, child, and elderly care at community level",
      "Screening for non-communicable diseases (NCDs)",
      "Mental health and palliative care support",
    ],
  },
];

export default function SchemeComponents() {
  return (
    <section className="section-blue py-16 md:py-20" data-ocid="scheme.section">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="section-heading mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Two Pillars of Ayushman Bharat
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/65 mt-4">
            The Ayushman Bharat scheme has two distinct but complementary
            components working together for universal health coverage.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {schemes.map((scheme, i) => (
            <Card
              key={scheme.tag}
              className="card-hover"
              style={{
                background: scheme.cardBg,
                border: scheme.cardBorder,
                borderTop: `2px solid ${scheme.accentColor}`,
              }}
              data-ocid={`scheme.card.${i + 1}`}
            >
              <CardHeader>
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg ${scheme.iconBg}`}
                  >
                    <scheme.icon className={`h-6 w-6 ${scheme.iconColor}`} />
                  </div>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-bold text-white"
                    style={{ backgroundColor: scheme.tagColor }}
                  >
                    {scheme.tag}
                  </span>
                </div>
                <CardTitle className="text-xl text-foreground">
                  {scheme.title}
                </CardTitle>
                <p className={`text-sm font-semibold ${scheme.subtitleColor}`}>
                  {scheme.subtitle}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {scheme.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-foreground/75"
                    >
                      <span
                        className={`mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${scheme.iconBg} text-xs font-bold ${scheme.iconColor}`}
                      >
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
