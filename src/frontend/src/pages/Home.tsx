import AskADoubt from "@/components/AskADoubt";
import BenefitsSection from "@/components/BenefitsSection";
import CustomerReviews from "@/components/CustomerReviews";
import DiseasesCovered from "@/components/DiseasesCovered";
import EmergencyContacts from "@/components/EmergencyContacts";
import HealthTips from "@/components/HealthTips";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import NewsUpdates from "@/components/NewsUpdates";
import SEOHead from "@/components/SEOHead";
import SchemeComponents from "@/components/SchemeComponents";
import StateCoverage from "@/components/StateCoverage";
import StatsBar from "@/components/StatsBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bell,
  ChevronRight,
  Download,
  FileText,
  HelpCircle,
  Info,
  MapPin,
  MessageCircleQuestion,
  Phone,
  Users,
} from "lucide-react";
import { useState } from "react";

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
  {
    icon: MessageCircleQuestion,
    title: "Ask a Doubt",
    description: "Submit your PM-JAY questions and get answers within 24 hours",
    link: "/ask-a-doubt",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <>
      <SEOHead
        title="PM-JAY Ayushman Bharat | Free Health Insurance Scheme"
        description="Ayushman Bharat PM-JAY provides free health insurance coverage up to ₹5 lakh per family. Check eligibility, find hospitals, and apply for your Ayushman Card today."
        keywords="PM-JAY, Ayushman Bharat, Ayushman Card, PMJAY Scheme, Modicare, National Health Authority, free health insurance, government healthcare scheme"
      />
      <HeroSection />
      <StatsBar />

      {/* Check Eligibility Now — Prominent CTA Banner */}
      <section className="bg-gradient-to-r from-navy via-navy/90 to-navy/80 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div className="max-w-xl">
              <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">
                Are You Eligible for Free Healthcare?
              </h2>
              <p className="text-white/80">
                Over 55 crore Indians qualify for PM-JAY. Check in seconds — no
                registration needed.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/eligibility"
                data-ocid="home.eligibility.primary_button"
              >
                <Button
                  size="lg"
                  className="bg-saffron text-white hover:bg-saffron/90 font-bold px-8"
                >
                  Check Eligibility Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link
                to="/ayushman-card"
                data-ocid="home.ayushman.secondary_button"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white/10"
                >
                  About Ayushman Card
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare for Every Senior Citizen Section */}
      <section className="bg-gradient-to-r from-saffron/10 via-background to-govt-green/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
            <img
              src="/assets/generated/elderly-patient-doctor.dim_600x400.jpg"
              alt="Elderly patient receiving care under Ayushman Bharat scheme"
              className="w-full md:w-80 h-56 object-cover rounded-2xl shadow-lg"
            />
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-3">
                Healthcare for Every Senior Citizen
              </h2>
              <p className="text-lg text-foreground/80 mb-4">
                Ayushman Bharat PM-JAY ensures that no elderly citizen has to
                worry about healthcare costs. Senior citizens get priority
                access to cashless treatment at 27,000+ empanelled hospitals
                across India.
              </p>
              <ul className="space-y-1 text-foreground/70">
                <li className="flex gap-2">
                  <span className="text-saffron font-bold">✓</span> No age limit
                  for coverage
                </li>
                <li className="flex gap-2">
                  <span className="text-govt-green font-bold">✓</span> Free
                  treatment for 1,949+ procedures
                </li>
                <li className="flex gap-2">
                  <span className="text-saffron font-bold">✓</span> Dedicated
                  helpline: 14555
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <BenefitsSection />
      <SchemeComponents />
      <DiseasesCovered />
      <StateCoverage />
      <WhyChooseUs />
      <HealthTips />
      <CustomerReviews />
      <NewsUpdates />
      <AskADoubt />
      <EmergencyContacts />

      {/* Subscribe for Updates */}
      <section className="bg-gradient-to-r from-saffron/80 via-saffron to-saffron/70 py-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Bell className="mx-auto mb-4 h-10 w-10 text-white/90" />
            <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
              Subscribe for Updates
            </h2>
            <p className="mb-8 text-white/85">
              Get the latest PM-JAY scheme updates, eligibility changes, new
              hospital additions, and health tips delivered to your inbox.
            </p>
            {subscribed ? (
              <div
                className="rounded-xl bg-white/20 px-6 py-4 text-white font-semibold"
                data-ocid="home.subscribe.success_state"
              >
                ✅ Thank you! You are subscribed to PM-JAY updates.
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 flex-1 border-0 bg-white text-foreground placeholder:text-muted-foreground"
                  data-ocid="home.subscribe.input"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="bg-navy text-white hover:bg-navy/90 font-bold px-8 h-12"
                  data-ocid="home.subscribe.primary_button"
                >
                  Subscribe for Updates
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Explore Resources */}
      <section className="bg-gradient-to-br from-saffron/10 via-background to-navy/5 py-16 md:py-20">
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

          <div className="mt-10 flex flex-wrap justify-center gap-4">
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
            <a
              href="https://pmjay.gov.in/pdf/PM-JAY_BeneficiaryGuide.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="home.secondary_button"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-govt-green text-govt-green hover:bg-govt-green/10"
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
