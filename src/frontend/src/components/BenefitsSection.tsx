import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Globe,
  Heart,
  Hospital,
  IndianRupee,
  Stethoscope,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: IndianRupee,
    title: "₹5 Lakh Coverage",
    description:
      "Health cover of up to ₹5 lakh per family per year for secondary and tertiary care hospitalization.",
  },
  {
    icon: Hospital,
    title: "Cashless Treatment",
    description:
      "Get cashless treatment at any empanelled public or private hospital across India.",
  },
  {
    icon: Users,
    title: "Family Coverage",
    description:
      "Coverage for entire family with no cap on family size or age of members.",
  },
  {
    icon: Heart,
    title: "Pre & Post Hospitalization",
    description:
      "Covers pre-hospitalization expenses up to 3 days and post-hospitalization up to 15 days.",
  },
  {
    icon: Stethoscope,
    title: "1,949+ Procedures",
    description:
      "Over 1,949 medical procedures covered including surgeries, specialist consultations, and day care treatments.",
  },
  {
    icon: Globe,
    title: "33+ States & UTs",
    description:
      "Scheme is operational across 33+ states and union territories, ensuring nationwide coverage and portability.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Key Benefits of PM-JAY Scheme
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive healthcare coverage designed to protect Indian
            families from financial hardship.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              className="border-2 transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-govt-green/10">
                  <benefit.icon className="h-6 w-6 text-govt-green" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
