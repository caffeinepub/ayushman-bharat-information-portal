import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Heart,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "₹5 Lakh Annual Coverage",
    description:
      "Each eligible family receives up to ₹5 lakh health cover per year for hospitalization expenses — completely free.",
    color: "saffron",
  },
  {
    icon: Heart,
    title: "Cashless Treatment",
    description:
      "No money needed at the hospital. Show your Ayushman Card at any empanelled hospital and receive treatment without any payment.",
    color: "govt-green",
  },
  {
    icon: ArrowRight,
    title: "Pan-India Portability",
    description:
      "Use your Ayushman Card at any of the 27,000+ empanelled hospitals across all 33+ states and union territories of India.",
    color: "navy",
  },
  {
    icon: Users,
    title: "Entire Family Covered",
    description:
      "No cap on family size or number of members. Your spouse, children, parents, and grandparents are all covered.",
    color: "saffron",
  },
  {
    icon: Stethoscope,
    title: "1,949+ Procedures",
    description:
      "Covers surgeries, medical treatments, diagnostics, medicines, and day-care procedures across all major specialties.",
    color: "govt-green",
  },
  {
    icon: CheckCircle2,
    title: "Zero Premium",
    description:
      "You pay absolutely nothing. The Government of India fully finances the PM-JAY scheme for all eligible beneficiaries.",
    color: "navy",
  },
];

const eligibilityCriteria = {
  rural: [
    "Families with no adult member between age 16–59",
    "Households with disabled members and no able-bodied adult",
    "SC/ST households",
    "Manual scavenger families",
    "Landless households dependent on casual labour",
    "Female-headed households with no adult male member",
  ],
  urban: [
    "Rag pickers and domestic workers",
    "Street vendors and cobblers",
    "Construction workers and plumbers",
    "Electricians, sanitation workers, and sweepers",
    "Home-based workers and artisans",
    "Transport workers (drivers, conductors)",
  ],
  seniors: [
    "All senior citizens aged 70 years and above",
    "No SECC database requirement for seniors 70+",
    "Existing PM-JAY members get additional ₹5 lakh top-up",
    "Non-PM-JAY seniors also get ₹5 lakh coverage",
    "Covers all pre-existing conditions from Day 1",
  ],
};

const steps = [
  {
    num: "01",
    title: "Check Your Eligibility",
    description:
      "Visit pmjay.gov.in or call 14555 to verify if your family is listed as a PM-JAY beneficiary using your Aadhaar or ration card.",
  },
  {
    num: "02",
    title: "Visit a CSC / Empanelled Hospital",
    description:
      "Visit the nearest Common Service Centre (CSC) or any empanelled PM-JAY hospital with your Aadhaar card and valid ID proof.",
  },
  {
    num: "03",
    title: "Get Your Digital Ayushman Card",
    description:
      "Complete biometric verification. Your Ayushman Card (PMJAY Card) is generated instantly and can be downloaded from the ABHA app.",
  },
  {
    num: "04",
    title: "Use at Any Empanelled Hospital",
    description:
      "Present your card at the hospital help desk. The hospital verifies your details, and cashless treatment begins — no paperwork.",
  },
];

const specialties = [
  { emoji: "🎗️", name: "Oncology" },
  { emoji: "❤️", name: "Cardiology" },
  { emoji: "🧠", name: "Neurosurgery" },
  { emoji: "🦴", name: "Orthopaedics" },
  { emoji: "💧", name: "Nephrology" },
  { emoji: "🏥", name: "Burns Management" },
  { emoji: "👶", name: "Neonatology" },
  { emoji: "🚑", name: "Emergency Trauma" },
  { emoji: "👁️", name: "Ophthalmology" },
  { emoji: "🫁", name: "Pulmonology" },
  { emoji: "⚕️", name: "Gastroenterology" },
  { emoji: "🔬", name: "Urology" },
];

export default function AyushmanCard() {
  return (
    <>
      <SEOHead
        title="Ayushman Card Benefits | Free Health Card | PM-JAY"
        description="Learn about the Ayushman Card benefits under PM-JAY. How to apply for Ayushman card for seniors 70+, eligibility, and ₹5 lakh free health coverage. Apply today."
        keywords="Ayushman Card benefits, PMJAY card, how to apply for Ayushman card for seniors 70+, Ayushman Bharat card, free health card India, PM-JAY card download"
      />

      {/* Hero Banner */}
      <section
        className="relative flex min-h-[420px] items-center overflow-hidden"
        style={{
          backgroundImage:
            "url(/assets/generated/pmjay-hero-banner.dim_1920x700.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, oklch(0.22 0.05 240 / 0.93) 0%, oklch(0.22 0.05 240 / 0.7) 55%, oklch(0.22 0.05 240 / 0.2) 100%)",
          }}
        />
        <div className="container relative mx-auto px-4 py-16 md:py-20">
          <div className="max-w-xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-saffron" />
              <span className="text-sm font-medium text-white">
                PM-JAY Digital Health Card
              </span>
            </div>
            <h1 className="font-display mb-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              Ayushman Card —{" "}
              <span className="text-saffron">
                Your Gateway to Free Healthcare
              </span>
            </h1>
            <p className="mb-8 text-lg text-white/85">
              One card. Zero payment. 27,000+ hospitals. Get your free Ayushman
              Card and unlock ₹5 lakh annual health coverage for your entire
              family.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/eligibility" data-ocid="ayushman.primary_button">
                <Button
                  size="lg"
                  className="bg-saffron text-white hover:bg-saffron/90"
                >
                  Check Eligibility Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a
                href="https://pmjay.gov.in/pdf/PM-JAY_BeneficiaryGuide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="ayushman.secondary_button"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white/10"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Your Guide
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tricolor stripe */}
      <div className="flex h-1.5 w-full">
        <div className="flex-1 bg-saffron" />
        <div className="flex-1 border-y border-border bg-white" />
        <div className="flex-1 bg-govt-green" />
      </div>

      {/* What is Ayushman Card */}
      <section className="bg-gradient-to-br from-saffron/8 to-govt-green/8 py-14 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div>
                <h2 className="font-display mb-4 text-3xl font-bold text-foreground md:text-4xl">
                  What is the Ayushman Card?
                </h2>
                <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                  The Ayushman Card (officially called the PM-JAY Card) is a
                  government-issued health card that gives eligible Indian
                  citizens access to <strong>free cashless healthcare</strong>{" "}
                  at empanelled hospitals across India.
                </p>
                <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                  The card is linked to your Aadhaar and covers your entire
                  family — no size limit, no age limit — under the Pradhan
                  Mantri Jan Arogya Yojana (PM-JAY) scheme.
                </p>
                <ul className="space-y-2">
                  {[
                    "Covers hospitalization, surgery, ICU, and post-care",
                    "No deductibles, no co-payments, no premiums",
                    "Valid at 27,000+ hospitals nationwide",
                    "Aadhaar-linked, biometrically verified",
                  ].map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2 text-foreground/80"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-govt-green" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img
                  src="/assets/generated/elderly-patient-doctor.dim_600x400.jpg"
                  alt="Senior citizen receiving health checkup at a PM-JAY empanelled hospital using Ayushman Card"
                  className="w-full rounded-2xl object-cover shadow-xl"
                />
                <div className="absolute -bottom-4 -left-4 rounded-xl bg-saffron px-4 py-3 shadow-lg">
                  <p className="text-xs font-medium text-white">Coverage</p>
                  <p className="text-xl font-bold text-white">₹5 Lakh / year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-gradient-to-br from-navy/5 via-background to-saffron/5 py-14 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
              Key Benefits of the Ayushman Card
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Everything your family needs — covered, cashless, and completely
              free under PM-JAY.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Card
                key={b.title}
                className="border-2 hover:border-saffron/40 hover:shadow-lg transition-all"
                data-ocid={`ayushman.benefit.${i + 1}`}
              >
                <CardHeader>
                  <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-saffron/10">
                    <b.icon className="h-6 w-6 text-saffron" />
                  </div>
                  <CardTitle className="text-lg">{b.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {b.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-gradient-to-br from-govt-green/8 to-saffron/8 py-14 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-4xl">
              Who is Eligible?
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border-2 border-saffron/30 bg-saffron/5 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span className="rounded-full bg-saffron px-3 py-1 text-xs font-bold text-white">
                    Rural
                  </span>
                  <h3 className="font-bold text-foreground">Rural Families</h3>
                </div>
                <ul className="space-y-2">
                  {eligibilityCriteria.rural.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-0.5 text-saffron">•</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-navy/30 bg-navy/5 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span className="rounded-full bg-navy px-3 py-1 text-xs font-bold text-white">
                    Urban
                  </span>
                  <h3 className="font-bold text-foreground">Urban Workers</h3>
                </div>
                <ul className="space-y-2">
                  {eligibilityCriteria.urban.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-0.5 text-navy">•</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-govt-green/30 bg-govt-green/5 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span className="rounded-full bg-govt-green px-3 py-1 text-xs font-bold text-white">
                    Seniors 70+
                  </span>
                  <h3 className="font-bold text-foreground">Senior Citizens</h3>
                </div>
                <ul className="space-y-2">
                  {eligibilityCriteria.seniors.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-0.5 text-govt-green">•</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Your Card */}
      <section className="bg-gradient-to-br from-navy/5 to-saffron/5 py-14 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-4xl">
              How to Get Your Ayushman Card
            </h2>
            <div className="relative">
              <div className="absolute left-6 top-0 h-full w-0.5 bg-saffron/30 md:left-1/2" />
              <div className="space-y-8">
                {steps.map((step, i) => (
                  <div
                    key={step.num}
                    className={`relative flex gap-6 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    data-ocid={`ayushman.step.${i + 1}`}
                  >
                    <div className="absolute left-6 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-saffron text-white text-sm font-bold shadow md:left-1/2">
                      {step.num}
                    </div>
                    <div
                      className={`ml-14 flex-1 md:ml-0 ${
                        i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"
                      }`}
                    >
                      <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                        <h3 className="mb-2 font-bold text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    <div className="hidden flex-1 md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diseases & Specialties Covered */}
      <section className="bg-gradient-to-br from-saffron/8 via-background to-govt-green/8 py-14 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Diseases & Specialties Covered
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              PM-JAY covers <strong>1,949+ medical procedures</strong> across
              all major specialties — ensuring comprehensive care for your
              entire family.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {specialties.map((s, i) => (
                <div
                  key={s.name}
                  className="flex items-center gap-3 rounded-xl border-2 border-border bg-card p-4 hover:border-saffron/40 hover:shadow transition-all"
                  data-ocid={`ayushman.specialty.${i + 1}`}
                >
                  <span className="text-2xl">{s.emoji}</span>
                  <span className="text-sm font-medium text-foreground">
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Guide CTA */}
      <section className="bg-gradient-to-r from-saffron to-saffron/80 py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to Get Your Free Ayushman Card?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Download the official beneficiary guide or check your eligibility
            right now. Millions of Indian families have already benefited.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/eligibility" data-ocid="ayushman.cta.primary_button">
              <Button
                size="lg"
                className="bg-white text-saffron hover:bg-white/90 font-bold"
              >
                Check Eligibility Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a
              href="https://pmjay.gov.in/pdf/PM-JAY_BeneficiaryGuide.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="ayushman.cta.secondary_button"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white bg-transparent text-white hover:bg-white/10"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Your Guide
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
