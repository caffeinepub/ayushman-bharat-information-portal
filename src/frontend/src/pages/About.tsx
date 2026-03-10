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

export default function About() {
  return (
    <>
      <SEOHead
        title="About PM-JAY Scheme | Ayushman Bharat Healthcare"
        description="Learn about Ayushman Bharat PM-JAY, India's largest government healthcare scheme providing ₹5 lakh coverage. Managed by National Health Authority (NHA)."
        keywords="PM-JAY, Ayushman Bharat, National Health Authority, Modicare, government healthcare scheme"
      />
      <div className="bg-gradient-to-br from-saffron/10 to-govt-green/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            About Ayushman Bharat PM-JAY
          </h1>
          <p className="text-xl text-muted-foreground">
            India's Largest Government Healthcare Scheme
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-foreground">
              Our Mission
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
              Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY) is the
              world's largest health insurance scheme fully financed by the
              government. It was launched on 23rd September 2018 to achieve the
              vision of Universal Health Coverage (UHC).
            </p>
            <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
              This scheme aims to bridge the information gap between the
              Government of India's healthcare policies and the citizens who
              need them most. By providing comprehensive health coverage, PM-JAY
              ensures that no Indian citizen is deprived of quality healthcare
              due to financial constraints.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-foreground">
              Coverage Details
            </h2>
            <div className="rounded-lg bg-govt-green/10 p-6 md:p-8">
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
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-foreground">
              Who is Eligible?
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
              PM-JAY provides coverage to over 55 crore beneficiaries (more than
              12 crore families) belonging to poor and vulnerable populations
              based on the Socio-Economic Caste Census (SECC) database. The
              scheme is currently active in{" "}
              <strong>33+ states and union territories</strong> across India.
            </p>
            <ul className="list-inside list-disc space-y-2 text-lg text-muted-foreground">
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
            <h2 className="mb-6 text-3xl font-bold text-foreground">
              Key Features
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <Target className="mb-2 h-8 w-8 text-saffron" />
                  <CardTitle>Portability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Beneficiaries can avail cashless treatment at any empanelled
                    hospital across India, ensuring healthcare access anywhere
                    in the country.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="mb-2 h-8 w-8 text-saffron" />
                  <CardTitle>Family Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No cap on family size or age of members. The entire family
                    is covered under the scheme.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Building2 className="mb-2 h-8 w-8 text-saffron" />
                  <CardTitle>Wide Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Over 27,000+ empanelled hospitals across public and private
                    sectors providing quality healthcare.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <TrendingUp className="mb-2 h-8 w-8 text-saffron" />
                  <CardTitle>Paperless Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Completely paperless and cashless process at the point of
                    service delivery with Aadhaar-based authentication.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-foreground">
              National Health Authority (NHA)
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
              The National Health Authority (NHA) is the apex body responsible
              for implementing PM-JAY. NHA has been entrusted with the role of
              designing strategy, building technological infrastructure, and
              implementation of the scheme in coordination with state
              governments.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              NHA ensures transparency, accountability, and efficiency in the
              implementation of the scheme through robust IT systems, regular
              monitoring, and grievance redressal mechanisms.
            </p>
          </section>

          {/* Timeline */}
          <section>
            <h2 className="mb-8 text-3xl font-bold text-foreground">
              Journey & Milestones
            </h2>
            <div className="relative">
              {/* Vertical line */}
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
                    {/* Dot */}
                    <div className="absolute left-5 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2">
                      <div className="h-4 w-4 rounded-full bg-saffron border-2 border-white shadow" />
                    </div>

                    {/* Card */}
                    <div
                      className={`ml-12 flex-1 md:ml-0 ${
                        index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                      }`}
                    >
                      <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
                        <span className="inline-block mb-1 rounded-full bg-saffron/10 px-3 py-0.5 text-xs font-bold text-saffron">
                          {item.year}
                        </span>
                        <h3 className="font-bold text-foreground">
                          {item.event}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.detail}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden flex-1 md:block" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
