import AskADoubt from "@/components/AskADoubt";
import BenefitsSection from "@/components/BenefitsSection";
import CustomerReviews from "@/components/CustomerReviews";
import DiseasesCovered from "@/components/DiseasesCovered";
import DocumentChecklist from "@/components/DocumentChecklist";
import EligibilityQuiz from "@/components/EligibilityQuiz";
import EmergencyContacts from "@/components/EmergencyContacts";
import HealthTips from "@/components/HealthTips";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import MythVsFact from "@/components/MythVsFact";
import NewsUpdates from "@/components/NewsUpdates";
import SEOHead from "@/components/SEOHead";
import SchemeComponents from "@/components/SchemeComponents";
import StateCoverage from "@/components/StateCoverage";
import StatsBar from "@/components/StatsBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Button } from "@/components/ui/button";
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

const objectives = [
  {
    emoji: "🏥",
    title: "Financial Protection",
    desc: "Provide financial protection against catastrophic health expenditure for India's most vulnerable families.",
    bg: "bg-saffron/10",
    border: "border-saffron/30",
  },
  {
    emoji: "🌍",
    title: "Universal Access",
    desc: "Ensure universal access to quality healthcare for the poorest 40% families across India.",
    bg: "bg-accent/30",
    border: "border-border",
  },
  {
    emoji: "💊",
    title: "1,949+ Procedures",
    desc: "Cover 1,949+ medical procedures including surgeries, diagnostics, and medicines.",
    bg: "bg-govt-green/10",
    border: "border-govt-green/25",
  },
  {
    emoji: "🏦",
    title: "Zero Out-of-Pocket",
    desc: "Eliminate out-of-pocket healthcare costs for BPL and low-income families.",
    bg: "bg-saffron/10",
    border: "border-saffron/30",
  },
  {
    emoji: "🤝",
    title: "Reduce Inequality",
    desc: "Reduce healthcare inequality between urban and rural India through equitable access.",
    bg: "bg-accent/30",
    border: "border-border",
  },
];

const impactStats = [
  {
    value: "₹29,000+ Crore",
    title: "Claims Processed",
    desc: "Total claims processed under PM-JAY, saving families from financial ruin.",
    bg: "bg-saffron",
  },
  {
    value: "5 Crore+",
    title: "Hospitalizations Covered",
    desc: "Free hospital treatments given to millions of underprivileged Indians.",
    bg: "bg-navy",
  },
  {
    value: "Zero Cost",
    title: "Out-of-Pocket Expense",
    desc: "Cashless treatment means families keep their savings intact.",
    bg: "bg-govt-green",
  },
];

const impactTestimonials = [
  {
    quote:
      "My husband's bypass surgery cost ₹3.2 lakh and we paid nothing. The Ayushman card gave us our life back. Without this scheme, we would have sold our home.",
    name: "Savitri Devi",
    location: "Lucknow, Uttar Pradesh",
    initial: "S",
  },
  {
    quote:
      "My daughter needed brain surgery at AIIMS Bhopal. The PM-JAY card covered everything — hospital stay, medicines, operation theatre fees. Truly a lifesaver.",
    name: "Rajendra Prasad",
    location: "Bhopal, Madhya Pradesh",
    initial: "R",
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

      {/* Eligibility Quick Check Quiz */}
      <EligibilityQuiz />

      {/* Check Eligibility Now — Prominent CTA Banner */}
      <section className="bg-navy py-12">
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
                  className="border-2 border-white bg-transparent text-white hover:bg-card/10"
                >
                  About Ayushman Card
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section — section-mixed is a light background */}
      <section
        className="section-mixed py-16 md:py-20"
        data-ocid="objectives.section"
      >
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block rounded-full border border-saffron/40 bg-saffron/10 px-4 py-1.5 text-sm font-semibold text-saffron">
              Mission & Vision
            </span>
            <h2 className="section-heading mb-4 text-3xl font-bold text-navy md:text-4xl">
              Objectives of PM-JAY
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              PM-JAY aims to bring universal health coverage to India's most
              vulnerable communities through targeted financial protection.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {objectives.map((obj, i) => (
              <div
                key={obj.title}
                className={`rounded-xl border ${obj.border} ${obj.bg} p-5 shadow-sm transition-all hover:shadow-md`}
                data-ocid={`objectives.item.${i + 1}`}
              >
                <div className="mb-3 text-3xl">{obj.emoji}</div>
                <h3 className="mb-2 text-base font-bold text-navy">
                  {obj.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {obj.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Citizen Services — section-blue is a light background */}
      <section
        className="section-blue py-16 md:py-20"
        data-ocid="citizen.section"
      >
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block rounded-full border border-saffron/40 bg-saffron/10 px-4 py-1.5 text-sm font-semibold text-saffron">
              Citizen Services
            </span>
            <h2 className="section-heading mb-4 text-3xl font-bold text-navy md:text-4xl">
              How to Access Your Benefits
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              3 simple steps to access free healthcare under PM-JAY
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: "1",
                icon: "🔍",
                title: "Check Eligibility",
                desc: "Visit pmjay.gov.in or call 14555 to check if your family is in the PM-JAY beneficiary list using your Aadhaar or ration card.",
                link: "/eligibility",
                cta: "Check Now",
              },
              {
                step: "2",
                icon: "🏥",
                title: "Find Empanelled Hospital",
                desc: "Search 27,000+ government and private hospitals empanelled under PM-JAY near your location — all provide cashless treatment.",
                link: "/hospitals",
                cta: "Find Hospitals",
              },
              {
                step: "3",
                icon: "💳",
                title: "Get Cashless Treatment",
                desc: "Walk into any empanelled hospital with your Ayushman card or ID proof. Show the card at the help desk to avail free treatment.",
                link: "/how-to-apply",
                cta: "Learn More",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-white p-6 text-center shadow-sm hover:border-saffron/40 transition-all"
                data-ocid={`citizen.item.${i + 1}`}
              >
                <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-saffron/20 text-2xl">
                  {item.icon}
                </div>
                <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-saffron text-sm font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 text-xl font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mb-4 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
                <Link to={item.link}>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-saffron/50 text-saffron hover:bg-saffron/10"
                    data-ocid={`citizen.item.${i + 1}.button`}
                  >
                    {item.cta} →
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact of the Scheme Section — section-green is a light background */}
      <section
        className="section-green py-16 md:py-20"
        data-ocid="impact.section"
      >
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block rounded-full border border-govt-green/30 bg-govt-green/10 px-4 py-1.5 text-sm font-semibold text-govt-green">
              Real-World Impact
            </span>
            <h2 className="section-heading mb-4 text-3xl font-bold text-navy md:text-4xl">
              Impact of Ayushman Bharat
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              How PM-JAY is transforming healthcare for India's poorest families
            </p>
          </div>

          {/* Stat cards have colored (dark) backgrounds so text-white is fine */}
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {impactStats.map((stat, i) => (
              <div
                key={stat.title}
                className={`rounded-2xl ${stat.bg} p-8 text-white shadow-md text-center`}
                data-ocid={`impact.item.${i + 1}`}
              >
                <div className="mb-2 text-3xl font-bold md:text-4xl">
                  {stat.value}
                </div>
                <div className="mb-2 text-lg font-semibold opacity-90">
                  {stat.title}
                </div>
                <p className="text-sm opacity-80 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {impactTestimonials.map((item, i) => (
              <div
                key={item.name}
                className="rounded-xl border border-border bg-white p-6 shadow-sm"
                data-ocid={`impact.card.${i + 1}`}
              >
                <p className="mb-5 text-base italic text-gray-600 leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-saffron text-sm font-bold text-white">
                    {item.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-navy">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NHA Implementation & Governance — section-mixed is a light background */}
      <section className="section-mixed py-12" data-ocid="governance.section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl border border-border bg-white p-8 shadow-sm">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-navy mb-2">
                Managed by National Health Authority
              </h3>
              <p className="text-gray-600 text-sm max-w-md">
                The National Health Authority (NHA) is the apex body
                implementing PM-JAY. It oversees hospital empanelment,
                beneficiary verification, and claims processing across all 33
                States/UTs.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                { label: "33 States/UTs", icon: "🗺️" },
                { label: "27,000+ Hospitals", icon: "🏥" },
                { label: "₹5 Lakh Cover", icon: "💳" },
                { label: "14555 Helpline", icon: "📞" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-1 rounded-lg border border-border bg-background px-5 py-3 text-center"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm font-semibold text-navy">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare for Every Senior Citizen Section — section-saffron is a light background */}
      <section className="section-saffron py-12">
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
              <p className="text-lg text-gray-700 mb-4">
                Ayushman Bharat PM-JAY ensures that no elderly citizen has to
                worry about healthcare costs. Senior citizens get priority
                access to cashless treatment at 27,000+ empanelled hospitals
                across India.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2 items-center">
                  <span className="text-saffron font-bold">✓</span>
                  <span className="text-gray-700">
                    No age limit for coverage
                  </span>
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-govt-green font-bold">✓</span>
                  <span className="text-gray-700">
                    Free treatment for 1,949+ procedures
                  </span>
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-saffron font-bold">✓</span>
                  <span className="text-gray-700">
                    Dedicated helpline: 14555
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <BenefitsSection />

      {/* Document Checklist */}
      <DocumentChecklist />

      <SchemeComponents />
      <DiseasesCovered />

      {/* Myth vs Fact */}
      <MythVsFact />

      <StateCoverage />
      <WhyChooseUs />
      <HealthTips />
      <CustomerReviews />
      <NewsUpdates />
      <AskADoubt />
      <EmergencyContacts />

      {/* Why This Scheme Matters — section-saffron is a light background */}
      <section
        className="section-saffron py-16 md:py-20"
        data-ocid="conclusion.section"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-3 inline-block rounded-full border border-govt-green/40 bg-govt-green/10 px-4 py-1.5 text-sm font-semibold text-govt-green">
              Policy Significance
            </span>
            <h2 className="section-heading mb-6 text-3xl font-bold text-navy md:text-4xl">
              Why Ayushman Bharat Matters for India
            </h2>
            <p className="mb-10 text-lg text-gray-700 leading-relaxed">
              Ayushman Bharat PM-JAY is more than a health scheme — it is a
              social safety net that protects India's most vulnerable families
              from financial devastation caused by medical emergencies.
            </p>
            <div className="grid gap-6 text-left md:grid-cols-2">
              {[
                {
                  emoji: "💰",
                  title: "Eliminates Medical Poverty",
                  desc: "Before PM-JAY, 63% of healthcare costs were paid out-of-pocket by families. Catastrophic health expenses pushed millions into debt and poverty every year.",
                },
                {
                  emoji: "🌏",
                  title: "World's Largest Health Scheme",
                  desc: "PM-JAY is the world's largest government-funded health insurance scheme, covering 55+ crore beneficiaries — more than the combined populations of USA and Canada.",
                },
                {
                  emoji: "⚖️",
                  title: "Social Equity in Healthcare",
                  desc: "Rural and urban poor now access the same quality treatment as paying patients in private hospitals — reducing the healthcare inequality gap in India.",
                },
                {
                  emoji: "📈",
                  title: "Economic Protection for Families",
                  desc: "₹5 lakh coverage per family per year means a single hospitalization no longer means selling land, livestock, or taking loans for poor Indian families.",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl border border-border bg-white p-5 shadow-sm"
                  data-ocid={`conclusion.item.${i + 1}`}
                >
                  <div className="text-3xl flex-shrink-0">{item.emoji}</div>
                  <div>
                    <h3 className="mb-2 font-bold text-navy text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-saffron/30 bg-white p-6 shadow-sm">
              <p className="text-gray-700 italic text-base leading-relaxed">
                &ldquo;Ayushman Bharat represents India&rsquo;s commitment to
                Universal Health Coverage — ensuring that no citizen has to
                choose between healthcare and food on the table. Managed by the
                National Health Authority (NHA), this scheme is India&rsquo;s
                most significant step toward health equity.&rdquo;
              </p>
              <p className="mt-3 text-sm font-semibold text-saffron">
                — National Health Authority, Government of India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe for Updates — bg-navy is dark, white text is correct */}
      <section className="bg-navy py-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Bell className="mx-auto mb-4 h-10 w-10 text-saffron" />
            <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
              Subscribe for Updates
            </h2>
            <p className="mb-8 text-white/80">
              Get the latest PM-JAY scheme updates, eligibility changes, new
              hospital additions, and health tips delivered to your inbox.
            </p>
            {subscribed ? (
              <div
                className="rounded-xl bg-card/10 px-6 py-4 text-white font-semibold border border-white/20"
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
                  className="h-12 flex-1 border-0 bg-card/10 text-white placeholder:text-white/50"
                  data-ocid="home.subscribe.input"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="bg-saffron text-white hover:bg-saffron/90 font-bold px-8 h-12"
                  data-ocid="home.subscribe.primary_button"
                >
                  Subscribe Now
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Explore Resources — section-mixed is a light background */}
      <section className="section-mixed py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="section-heading mb-4 text-3xl font-bold text-navy md:text-4xl">
              Explore Our Resources
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
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
                <div className="h-full rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:border-saffron/40 hover:shadow-md">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-saffron/10 transition-colors group-hover:bg-saffron/20">
                    <item.icon className="h-6 w-6 text-saffron" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-navy">
                      {item.title}
                    </h3>
                    <ChevronRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
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
                className="border-2 border-navy/30 text-navy bg-transparent hover:bg-navy/5"
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
