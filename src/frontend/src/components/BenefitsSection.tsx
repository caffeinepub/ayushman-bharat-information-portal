import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";
import {
  Globe,
  Heart,
  Hospital,
  IndianRupee,
  Search,
  Stethoscope,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const coverageRows = [
  {
    service: "IPD (In-Patient) Treatment",
    covered: "Fully covered",
    notCovered: null,
  },
  {
    service: "Pre-hospitalization (3 days)",
    covered: "Covered",
    notCovered: null,
  },
  {
    service: "Post-hospitalization (15 days)",
    covered: "Covered",
    notCovered: null,
  },
  {
    service: "Day-care Procedures",
    covered: "1,949+ procedures",
    notCovered: null,
  },
  {
    service: "Pre-existing Diseases",
    covered: "Covered from Day 1",
    notCovered: null,
  },
  {
    service: "OPD (Out-Patient) Visits",
    covered: null,
    notCovered: "Not included",
  },
  {
    service: "Cosmetic / Plastic Surgery",
    covered: null,
    notCovered: "Not covered",
  },
  {
    service: "Dental Treatment (non-surgical)",
    covered: null,
    notCovered: "Not covered",
  },
  {
    service: "Private Room Upgrades",
    covered: null,
    notCovered: "Extra cost to patient",
  },
];

export default function BenefitsSection() {
  const { lang } = useLanguage();
  const [search, setSearch] = useState("");

  const benefits = [
    {
      icon: IndianRupee,
      titleKey: "benefits.b1.title",
      descKey: "benefits.b1.desc",
      iconBg: "bg-saffron/10",
      iconColor: "text-saffron",
    },
    {
      icon: Hospital,
      titleKey: "benefits.b2.title",
      descKey: "benefits.b2.desc",
      iconBg: "bg-accent/30",
      iconColor: "text-foreground",
    },
    {
      icon: Users,
      titleKey: "benefits.b3.title",
      descKey: "benefits.b3.desc",
      iconBg: "bg-govt-green/10",
      iconColor: "text-govt-green",
    },
    {
      icon: Heart,
      titleKey: "benefits.b4.title",
      descKey: "benefits.b4.desc",
      iconBg: "bg-saffron/10",
      iconColor: "text-saffron",
    },
    {
      icon: Stethoscope,
      titleKey: "benefits.b5.title",
      descKey: "benefits.b5.desc",
      iconBg: "bg-accent/30",
      iconColor: "text-foreground",
    },
    {
      icon: Globe,
      titleKey: "benefits.b6.title",
      descKey: "benefits.b6.desc",
      iconBg: "bg-govt-green/10",
      iconColor: "text-govt-green",
    },
  ];

  const filteredBenefits = search.trim()
    ? benefits.filter((b) => {
        const titleText = t(lang, b.titleKey).toLowerCase();
        const descText = t(lang, b.descKey).toLowerCase();
        const q = search.toLowerCase();
        return titleText.includes(q) || descText.includes(q);
      })
    : benefits;

  return (
    <section className="section-saffron py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div
          className="mb-10 rounded-2xl overflow-hidden shadow-lg max-w-3xl mx-auto"
          style={{ border: "1px solid oklch(0.20 0.05 15)" }}
        >
          <img
            src="/assets/generated/elderly-couple-hospital.dim_800x500.jpg"
            alt="Elderly Indian couple benefiting from Ayushman Bharat PM-JAY scheme"
            className="w-full object-cover h-64"
          />
        </div>

        <div className="mb-8 text-center">
          <h2 className="section-heading mb-4 text-3xl font-bold text-white md:text-4xl">
            {t(lang, "benefits.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 mt-4">
            {t(lang, "benefits.subtitle")}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mx-auto mb-8 max-w-xl">
          <div className="flex items-center gap-3 rounded-xl border-2 border-white/10 bg-card px-4 shadow-sm focus-within:border-saffron/50 transition-colors">
            <Search className="h-5 w-5 flex-shrink-0 text-foreground/40" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search treatments, benefits, diseases..."
              className="border-0 bg-transparent shadow-none focus-visible:ring-0 text-white placeholder:text-foreground/40"
              data-ocid="benefits.search_input"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="text-foreground/40 hover:text-white transition-colors"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Benefits Grid */}
        {filteredBenefits.length === 0 ? (
          <div className="py-10 text-center" data-ocid="benefits.empty_state">
            <p className="text-foreground/50">
              No benefits found for &ldquo;{search}&rdquo;. Try a different
              keyword.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBenefits.map((benefit) => (
              <Card key={benefit.titleKey} className="card-hover glass-card">
                <CardHeader>
                  <div
                    className={`mb-3 flex h-12 w-12 items-center justify-center rounded-lg ${benefit.iconBg}`}
                  >
                    <benefit.icon className={`h-6 w-6 ${benefit.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl text-white">
                    {t(lang, benefit.titleKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{t(lang, benefit.descKey)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Coverage Comparison Table */}
        <div className="mt-14" data-ocid="benefits.table">
          <div className="mb-6 text-center">
            <span className="mb-3 inline-block rounded-full border border-saffron/40 bg-saffron/10 px-4 py-1.5 text-sm font-semibold text-saffron">
              Coverage Guide
            </span>
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              What's Covered vs. Not Covered
            </h3>
          </div>
          <div className="rounded-xl border border-white/10 bg-card overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-card/5">
                    <th className="px-5 py-4 text-left font-bold text-white">
                      Service / Treatment
                    </th>
                    <th className="px-5 py-4 text-center font-bold text-govt-green">
                      ✅ Covered by PM-JAY
                    </th>
                    <th className="px-5 py-4 text-center font-bold text-red-400">
                      ❌ Not Covered
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {coverageRows.map((row, i) => (
                    <tr
                      key={row.service}
                      className={`border-b border-white/5 transition-colors hover:bg-white/3 ${
                        i % 2 === 0 ? "" : "bg-white/[0.02]"
                      }`}
                      data-ocid={`benefits.row.${i + 1}`}
                    >
                      <td className="px-5 py-3.5 font-medium text-white/85">
                        {row.service}
                      </td>
                      <td className="px-5 py-3.5 text-center">
                        {row.covered ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-govt-green/15 px-3 py-1 text-xs font-semibold text-govt-green">
                            ✅ {row.covered}
                          </span>
                        ) : (
                          <span className="text-foreground/25">—</span>
                        )}
                      </td>
                      <td className="px-5 py-3.5 text-center">
                        {row.notCovered ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-400">
                            ❌ {row.notCovered}
                          </span>
                        ) : (
                          <span className="text-foreground/25">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-foreground/45">
            Source: National Health Authority (NHA) • pmjay.gov.in
          </p>
        </div>
      </div>
    </section>
  );
}
