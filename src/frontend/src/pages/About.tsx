import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Target, TrendingUp, Users } from "lucide-react";

const timeline = [
  {
    year: "Feb 2018",
    event: "Union Budget Announcement",
    detail:
      "Finance Minister announced Ayushman Bharat scheme in the Union Budget 2018-19.",
  },
  {
    year: "Sep 2018",
    event: "Official Launch",
    detail:
      "PM-JAY officially launched on 23 September 2018 by Prime Minister Narendra Modi in Ranchi, Jharkhand.",
  },
  {
    year: "2019",
    event: "1 Crore Hospitalizations",
    detail:
      "The scheme achieved the milestone of 1 crore hospitalizations, proving its reach and impact.",
  },
  {
    year: "2021",
    event: "Expanded for Elderly",
    detail:
      "PM-JAY benefits extended to elderly citizens above 70 years in select states.",
  },
  {
    year: "2023",
    event: "4 Crore+ Hospitalizations",
    detail:
      "Crossed 4 crore hospitalizations with 27,000+ hospitals empanelled across India.",
  },
  {
    year: "2024",
    event: "Senior Citizens Coverage",
    detail:
      "Scheme expanded to cover all senior citizens above 70 years under Ayushman Bharat for senior citizens.",
  },
];

const teamMembers = [
  {
    name: "Lakshya",
    role: "Content Creator & SEO Executive",
    emoji: "✍️",
    description:
      "Crafts clear, accurate, and SEO-optimized content that bridges the gap between government healthcare policies and citizens.",
    color: "saffron",
  },
  {
    name: "Yuvince",
    role: "Design Specialist & Marketing Strategist",
    emoji: "🎨",
    description:
      "Leads visual design and digital marketing campaigns to ensure PM-JAY information reaches every corner of India.",
    color: "navy",
  },
  {
    name: "Kritik",
    role: "Analytics Coordinator & Project Manager",
    emoji: "📊",
    description:
      "Tracks portal performance, user behavior, and manages project timelines to continuously improve the citizen experience.",
    color: "govt-green",
  },
];

export default function About() {
  return (
    <>
      <SEOHead
        title="About PM-JAY Scheme | Ayushman Bharat Healthcare"
        description="Learn about Ayushman Bharat PM-JAY, India's largest government healthcare scheme providing ₹5 lakh coverage. Managed by National Health Authority (NHA)."
        keywords="PM-JAY, Ayushman Bharat, National Health Authority, Modicare, government healthcare scheme"
      />
      <div className="section-saffron py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            About Ayushman Bharat PM-JAY
          </h1>
          <p className="text-xl text-gray-300">
            India's Largest Government Healthcare Scheme
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-white">Our Mission</h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-300">
              Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY) is the
              world's largest health insurance scheme fully financed by the
              government. It was launched on 23rd September 2018 to achieve the
              vision of Universal Health Coverage (UHC).
            </p>
            <p className="mb-4 text-lg leading-relaxed text-gray-300">
              This scheme aims to bridge the information gap between the
              Government of India's healthcare policies and the citizens who
              need them most. By providing comprehensive health coverage, PM-JAY
              ensures that no Indian citizen is deprived of quality healthcare
              due to financial constraints.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-white">
              Coverage Details
            </h2>
            <div className="rounded-lg bg-govt-green/10 border border-govt-green/20 p-6 md:p-8">
              <ul className="space-y-3 text-lg">
                {[
                  "Health cover of up to ₹5 lakh per family per year",
                  "Coverage for secondary and tertiary care hospitalization",
                  "Over 1,949 procedures covered including surgeries, medical treatments, and day care procedures",
                  "Pre-hospitalization expenses covered up to 3 days",
                  "Post-hospitalization expenses covered up to 15 days",
                  "Cashless treatment at 27,000+ empanelled hospitals",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-govt-green text-white text-sm">
                      ✓
                    </span>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-white">
              Who is Eligible?
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-300">
              PM-JAY provides coverage to over 55 crore beneficiaries (more than
              12 crore families) belonging to poor and vulnerable populations
              based on the Socio-Economic Caste Census (SECC) database. The
              scheme is currently active in{" "}
              <strong className="text-white">
                33+ states and union territories
              </strong>{" "}
              across India.
            </p>
            <ul className="list-inside list-disc space-y-2 text-lg text-gray-300">
              <li>Families identified as per SECC 2011 deprivation criteria</li>
              <li>Families with no adult member between age 16 to 59</li>
              <li>Female headed households with no adult male member</li>
              <li>
                Households with disabled members and no able-bodied adult member
              </li>
              <li>SC/ST households</li>
              <li>
                Landless households deriving major part of income from manual
                casual labour
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-white">Key Features</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <Target className="mb-2 h-8 w-8 text-saffron" />
                  <CardTitle className="text-white">Portability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Beneficiaries can avail cashless treatment at any empanelled
                    hospital across India, ensuring healthcare access anywhere
                    in the country.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="mb-2 h-8 w-8 text-saffron" />
                  <CardTitle className="text-white">Family Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    No cap on family size or age of members. The entire family
                    is covered under the scheme.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Building2 className="mb-2 h-8 w-8 text-saffron" />
                  <CardTitle className="text-white">Wide Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Over 27,000+ empanelled hospitals across public and private
                    sectors providing quality healthcare.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <TrendingUp className="mb-2 h-8 w-8 text-saffron" />
                  <CardTitle className="text-white">
                    Paperless Process
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Completely paperless and cashless process at the point of
                    service delivery with Aadhaar-based authentication.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-white">
              National Health Authority (NHA)
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-300">
              The National Health Authority (NHA) is the apex body responsible
              for implementing PM-JAY. NHA has been entrusted with the role of
              designing strategy, building technological infrastructure, and
              implementation of the scheme in coordination with state
              governments.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              NHA ensures transparency, accountability, and efficiency in the
              implementation of the scheme through robust IT systems, regular
              monitoring, and grievance redressal mechanisms.
            </p>
          </section>

          {/* NHA Leadership & Governance */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-white">
              NHA Leadership & Governance
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-border bg-card">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <span className="text-2xl">🏙️</span>
                  </div>
                  <CardTitle className="text-lg text-white">
                    Chairperson
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    Cabinet Minister for Health & Family Welfare, Government of
                    India. Provides policy direction and oversight for all
                    Ayushman Bharat initiatives.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-saffron/20 bg-card">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-saffron/10">
                    <span className="text-2xl">👔</span>
                  </div>
                  <CardTitle className="text-lg text-white">
                    CEO / Director General
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    National Health Authority — responsible for day-to-day
                    PM-JAY operations, IT infrastructure, hospital empanelment,
                    and beneficiary management.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-govt-green/20 bg-card">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-govt-green/10">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <CardTitle className="text-lg text-white">
                    Governing Board
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    Representatives from Ministry of Health, Ministry of
                    Finance, NITI Aayog, and State Governments to ensure federal
                    coordination and accountability.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Ayushman Bharat Two Pillars */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-white">
              Ayushman Bharat: Two Pillars
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border-2 border-saffron/30 bg-saffron/5 p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-full bg-saffron text-white text-xs font-bold px-2.5 py-1">
                    Pillar 1
                  </span>
                  <h3 className="font-bold text-white">PM-JAY</h3>
                </div>
                <p className="text-sm font-semibold text-saffron mb-2">
                  Pradhan Mantri Jan Arogya Yojana
                </p>
                <p className="text-sm text-gray-300">
                  Health insurance scheme providing ₹5 lakh annual coverage per
                  family for secondary and tertiary care hospitalization at
                  27,000+ empanelled public and private hospitals across India.
                  Covers 55 crore+ beneficiaries from poor and vulnerable
                  families.
                </p>
              </div>
              <div className="rounded-2xl border-2 border-govt-green/30 bg-govt-green/5 p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-full bg-govt-green text-white text-xs font-bold px-2.5 py-1">
                    Pillar 2
                  </span>
                  <h3 className="font-bold text-white">AB-HWC</h3>
                </div>
                <p className="text-sm font-semibold text-govt-green mb-2">
                  Ayushman Bharat – Health and Wellness Centres
                </p>
                <p className="text-sm text-gray-300">
                  A network of 1.5 lakh Ayushman Arogya Mandirs providing
                  comprehensive primary care services including maternal health,
                  child health, mental health, TB, and non-communicable diseases
                  — free of charge at the community level.
                </p>
              </div>
            </div>
          </section>

          {/* ₹5 Lakh Cover Explained */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-white">
              The ₹5 Lakh Cover — Explained
            </h2>
            <div className="rounded-2xl border-2 border-saffron/40 bg-saffron/5 p-6 md:p-8">
              <p className="mb-6 text-lg text-gray-300">
                Every eligible family gets a health cover of{" "}
                <strong className="text-white">₹5 lakh per year</strong>. This
                cover is comprehensive, cashless, and resets every year on 1st
                April.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    emoji: "🏥",
                    label: "Hospitalization",
                    detail: "Room charges, nursing, boarding, and ICU costs",
                  },
                  {
                    emoji: "💊",
                    label: "Medicines & Consumables",
                    detail:
                      "All medicines, implants, and consumables used during treatment",
                  },
                  {
                    emoji: "🔬",
                    label: "Diagnostics",
                    detail:
                      "Lab tests, imaging (X-ray, MRI, CT scan), and pathology",
                  },
                  {
                    emoji: "⚕️",
                    label: "Surgery & Procedures",
                    detail: "1,949+ covered surgeries and day-care procedures",
                  },
                  {
                    emoji: "📅",
                    label: "Pre-Hospitalization",
                    detail: "Medical expenses up to 3 days before admission",
                  },
                  {
                    emoji: "🩺",
                    label: "Post-Hospitalization",
                    detail:
                      "Follow-up and recovery expenses up to 15 days after discharge",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 rounded-xl bg-card/80 border border-border p-4 shadow-sm"
                  >
                    <span className="text-2xl">{item.emoji}</span>
                    <div>
                      <p className="font-semibold text-white">{item.label}</p>
                      <p className="text-sm text-gray-300">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-saffron/20 border border-saffron/30 px-5 py-4">
                <p className="text-sm font-semibold text-white">
                  🔁 The ₹5 lakh cover resets every year on 1st April — so if
                  your family uses part of the cover, it is fully restored the
                  following year.
                </p>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-12">
            <h2 className="mb-8 text-3xl font-bold text-white">
              Journey & Milestones
            </h2>
            <div className="relative">
              <div className="absolute left-5 top-0 h-full w-0.5 bg-border md:left-1/2" />
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative flex gap-6 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    data-ocid={`about.item.${index + 1}`}
                  >
                    <div className="absolute left-5 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2">
                      <div className="h-4 w-4 rounded-full bg-saffron border-2 border-card shadow" />
                    </div>

                    <div
                      className={`ml-12 flex-1 md:ml-0 ${
                        index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                      }`}
                    >
                      <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
                        <span className="inline-block mb-1 rounded-full bg-saffron/10 px-3 py-0.5 text-xs font-bold text-saffron">
                          {item.year}
                        </span>
                        <h3 className="font-bold text-white">{item.event}</h3>
                        <p className="mt-1 text-sm text-gray-300">
                          {item.detail}
                        </p>
                      </div>
                    </div>

                    <div className="hidden flex-1 md:block" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section>
            <h2 className="mb-4 text-3xl font-bold text-white">
              Meet Our Team
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              A dedicated team works behind this portal to bring accurate,
              accessible, and up-to-date information about PM-JAY to every
              Indian citizen.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {teamMembers.map((member, i) => (
                <Card
                  key={member.name}
                  className={`border-2 ${
                    member.color === "saffron"
                      ? "border-saffron/30 bg-saffron/5"
                      : member.color === "navy"
                        ? "border-border bg-card"
                        : "border-govt-green/30 bg-govt-green/5"
                  }`}
                  data-ocid={`about.team.card.${i + 1}`}
                >
                  <CardHeader className="text-center pb-2">
                    <div
                      className={`mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full text-3xl ${
                        member.color === "saffron"
                          ? "bg-saffron/15"
                          : member.color === "navy"
                            ? "bg-muted"
                            : "bg-govt-green/15"
                      }`}
                    >
                      {member.emoji}
                    </div>
                    <CardTitle className="text-xl text-white">
                      {member.name}
                    </CardTitle>
                    <p
                      className={`text-sm font-semibold ${
                        member.color === "saffron"
                          ? "text-saffron"
                          : member.color === "navy"
                            ? "text-gray-300"
                            : "text-govt-green"
                      }`}
                    >
                      {member.role}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-gray-300">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
