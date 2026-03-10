import BenefitsSection from "@/components/BenefitsSection";
import DiseasesCovered from "@/components/DiseasesCovered";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import SEOHead from "@/components/SEOHead";
import SchemeComponents from "@/components/SchemeComponents";
import StatsBar from "@/components/StatsBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ChevronRight,
  FileText,
  HelpCircle,
  Info,
  MapPin,
  Phone,
  Users,
} from "lucide-react";

const quickLinks = [
  {
    icon: Info,
    title: "About PM-JAY",
    description:
      "Learn the history, mission, and scope of the Ayushman Bharat scheme",
    link: "/about",
  },
  {
    icon: FileText,
    title: "How to Apply",
    description: "Step-by-step guide to apply for your Ayushman Card",
    link: "/how-to-apply",
  },
  {
    icon: MapPin,
    title: "Find Hospitals",
    description: "Locate empanelled hospitals near you",
    link: "/hospitals",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Common questions about PM-JAY scheme",
    link: "/faq",
  },
  {
    icon: Phone,
    title: "Contact Support",
    description: "Get help from our support team",
    link: "/contact",
  },
  {
    icon: Users,
    title: "Our Team",
    description: "Meet the team behind this PM-JAY information portal",
    link: "/team",
  },
];

export default function Home() {
  return (
    <>
      <SEOHead
        title="PM-JAY Ayushman Bharat | Free Health Insurance Scheme"
        description="Ayushman Bharat PM-JAY provides free health insurance coverage up to ₹5 lakh per family. Check eligibility, find hospitals, and apply for your Ayushman Card today."
        keywords="PM-JAY, Ayushman Bharat, Ayushman Card, PMJAY Scheme, Modicare, National Health Authority, free health insurance, government healthcare scheme"
      />
      <HeroSection />
      <StatsBar />
      <HowItWorks />
      <BenefitsSection />
      <SchemeComponents />
      <DiseasesCovered />

      {/* Explore Resources */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Explore Our Resources
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Everything you need to know about PM-JAY in one place
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((item, index) => (
              <Link
                key={item.title}
                to={item.link}
                className="group"
                data-ocid={`home.link.${index + 1}`}
              >
                <Card className="h-full transition-all hover:border-saffron/50 hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-saffron/10 transition-colors group-hover:bg-saffron/20">
                      <item.icon className="h-6 w-6 text-saffron" />
                    </div>
                    <CardTitle className="flex items-center justify-between text-xl">
                      {item.title}
                      <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://pmjay.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="home.primary_button"
            >
              <Button
                size="lg"
                className="bg-govt-green text-white hover:bg-govt-green/90"
              >
                Visit Official PM-JAY Portal
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
