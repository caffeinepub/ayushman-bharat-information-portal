import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle } from "lucide-react";

const keyFacts = [
  "₹5 Lakh coverage per family/year",
  "Cashless treatment at empanelled hospitals",
  "No limit on family size, age, or gender",
  "Pre-existing diseases covered from Day 1",
  "Covers secondary & tertiary care",
];

export default function HeroSection() {
  const { lang } = useLanguage();

  return (
    <div>
      <section
        className="relative flex min-h-[520px] items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.90 0.02 225) 0%, oklch(0.95 0.015 215) 50%, oklch(0.92 0.018 220) 100%)",
        }}
      >
        {/* Background image overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "url(/assets/generated/pmjay-hero-banner.dim_1920x700.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.18,
          }}
        />

        {/* Subtle radial highlight */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 40% 50%, oklch(1 0 0 / 0.5), transparent 80%)",
          }}
        />

        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <div
              className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
              style={{
                border: "1px solid oklch(0.72 0.18 50 / 0.4)",
                background: "oklch(0.72 0.18 50 / 0.1)",
              }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: "oklch(0.72 0.18 50)" }}
              />
              <span className="text-sm font-medium text-saffron">
                {t(lang, "hero.badge")}
              </span>
            </div>

            <h1
              className="font-display mb-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
              style={{ color: "oklch(0.20 0.07 240)" }}
            >
              {t(lang, "hero.title")}
              <span className="gradient-text-saffron mt-1 block">
                {t(lang, "hero.subtitle")}
              </span>
            </h1>

            <p
              className="mb-4 text-lg md:text-xl"
              style={{ color: "oklch(0.30 0.05 240)" }}
            >
              {t(lang, "hero.tagline")}
            </p>
            <p
              className="mb-8 text-base md:text-lg"
              style={{ color: "oklch(0.40 0.04 235)" }}
            >
              {t(lang, "hero.desc")}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/eligibility" data-ocid="hero.primary_button">
                <Button
                  size="lg"
                  className="glow-saffron w-full bg-saffron text-white hover:opacity-90 sm:w-auto font-bold"
                >
                  {t(lang, "hero.cta1")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/hospitals" data-ocid="hero.secondary_button">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                  style={{
                    borderColor: "oklch(0.22 0.07 240 / 0.4)",
                    backgroundColor: "oklch(0.22 0.07 240 / 0.07)",
                    color: "oklch(0.22 0.07 240)",
                  }}
                >
                  {t(lang, "hero.cta2")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Saffron-green tricolor divider */}
      <div style={{ display: "flex", height: "3px" }}>
        <div style={{ flex: 1, backgroundColor: "oklch(0.72 0.18 50)" }} />
        <div style={{ flex: 1, backgroundColor: "oklch(0.92 0.01 220)" }} />
        <div style={{ flex: 1, backgroundColor: "oklch(0.45 0.14 145)" }} />
      </div>

      {/* Key Facts strip */}
      <div
        className="border-b py-5 px-4"
        style={{
          backgroundColor: "oklch(0.96 0.02 55)",
          borderBottomColor: "oklch(0.88 0.02 220)",
        }}
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {keyFacts.map((fact) => (
              <div
                key={fact}
                className="flex items-center gap-2 py-1"
                style={{
                  borderLeft: "3px solid oklch(0.72 0.18 50)",
                  paddingLeft: "0.75rem",
                }}
              >
                <CheckCircle
                  className="h-4 w-4 flex-shrink-0"
                  style={{ color: "oklch(0.45 0.14 145)" }}
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: "oklch(0.28 0.06 240)" }}
                >
                  {fact}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
