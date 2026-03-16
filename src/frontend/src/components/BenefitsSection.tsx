import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";
import {
  Globe,
  Heart,
  Hospital,
  IndianRupee,
  Stethoscope,
  Users,
} from "lucide-react";

export default function BenefitsSection() {
  const { lang } = useLanguage();

  const benefits = [
    {
      icon: IndianRupee,
      titleKey: "benefits.b1.title",
      descKey: "benefits.b1.desc",
    },
    {
      icon: Hospital,
      titleKey: "benefits.b2.title",
      descKey: "benefits.b2.desc",
    },
    { icon: Users, titleKey: "benefits.b3.title", descKey: "benefits.b3.desc" },
    { icon: Heart, titleKey: "benefits.b4.title", descKey: "benefits.b4.desc" },
    {
      icon: Stethoscope,
      titleKey: "benefits.b5.title",
      descKey: "benefits.b5.desc",
    },
    { icon: Globe, titleKey: "benefits.b6.title", descKey: "benefits.b6.desc" },
  ];

  return (
    <section className="bg-gradient-to-br from-saffron/15 via-background to-govt-green/10 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 rounded-2xl overflow-hidden shadow-lg max-w-3xl mx-auto">
          <img
            src="/assets/generated/elderly-couple-hospital.dim_800x500.jpg"
            alt="Elderly Indian couple benefiting from Ayushman Bharat PM-JAY scheme"
            className="w-full object-cover h-64"
          />
        </div>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            {t(lang, "benefits.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t(lang, "benefits.subtitle")}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <Card
              key={benefit.titleKey}
              className="border-2 transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-govt-green/10">
                  <benefit.icon className="h-6 w-6 text-govt-green" />
                </div>
                <CardTitle className="text-xl">
                  {t(lang, benefit.titleKey)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t(lang, benefit.descKey)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
