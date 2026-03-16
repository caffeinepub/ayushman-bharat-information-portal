import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, ShieldCheck } from "lucide-react";

const schemes = [
  {
    icon: ShieldCheck,
    color: "text-saffron",
    bg: "bg-saffron/10",
    tag: "PM-JAY",
    tagBg: "bg-saffron text-white",
    title: "Pradhan Mantri Jan Arogya Yojana",
    subtitle: "Financial Protection & Cashless Hospitalization",
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
    color: "text-govt-green",
    bg: "bg-govt-green/10",
    tag: "AB-HWC",
    tagBg: "bg-govt-green text-white",
    title: "Ayushman Bharat Health & Wellness Centres",
    subtitle: "Primary Healthcare Near Your Home",
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
    <section
      className="bg-gradient-to-br from-navy/5 via-govt-green/8 to-saffron/10 py-16 md:py-20"
      data-ocid="scheme.section"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Two Pillars of Ayushman Bharat
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            The Ayushman Bharat scheme has two distinct but complementary
            components working together for universal health coverage.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {schemes.map((scheme, i) => (
            <Card
              key={scheme.tag}
              className="border-2 transition-shadow hover:shadow-xl"
              data-ocid={`scheme.card.${i + 1}`}
            >
              <CardHeader>
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg ${scheme.bg}`}
                  >
                    <scheme.icon className={`h-6 w-6 ${scheme.color}`} />
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${scheme.tagBg}`}
                  >
                    {scheme.tag}
                  </span>
                </div>
                <CardTitle className="text-xl">{scheme.title}</CardTitle>
                <p className={`text-sm font-semibold ${scheme.color}`}>
                  {scheme.subtitle}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {scheme.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span
                        className={`mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${scheme.bg} text-xs font-bold ${scheme.color}`}
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
