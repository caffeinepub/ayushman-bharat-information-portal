import ApplicationStep from "@/components/ApplicationStep";
import SEOHead from "@/components/SEOHead";
import { CheckCircle, CreditCard, FileText, MapPin } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Check Your Eligibility",
    description:
      "First, verify if you are eligible for PM-JAY by checking the SECC database or using our eligibility checker. You can also visit the official PM-JAY website or call the helpline.",
    documents: ["Aadhaar Card", "Ration Card", "Mobile Number"],
  },
  {
    number: 2,
    icon: MapPin,
    title: "Visit Nearest Center",
    description:
      "Go to your nearest Common Service Centre (CSC), empanelled hospital, or Ayushman Mitra help desk. Carry all required documents with you.",
    documents: [
      "Aadhaar Card",
      "Ration Card",
      "Proof of Address",
      "Family Details",
    ],
  },
  {
    number: 3,
    icon: CreditCard,
    title: "Get Your Card Issued",
    description:
      "Submit your documents for verification. The Ayushman Mitra will verify your eligibility and generate your Ayushman Card on the spot. The process is completely free.",
    documents: [
      "No fees required",
      "Instant card generation",
      "Digital and physical card",
    ],
  },
  {
    number: 4,
    icon: CheckCircle,
    title: "Start Using Benefits",
    description:
      "Once you have your Ayushman Card, you can avail cashless treatment at any empanelled hospital across India. Show your card at the hospital for admission.",
    documents: [
      "Valid for entire family",
      "Cashless treatment",
      "Up to ₹5 lakh coverage",
    ],
  },
];

const requiredDocuments = [
  {
    doc: "Aadhaar Card",
    purpose: "Identity & biometric verification",
    icon: "🪪",
  },
  {
    doc: "Ration Card",
    purpose: "Proof of family membership",
    icon: "📋",
  },
  {
    doc: "Mobile Number",
    purpose: "OTP verification",
    icon: "📱",
  },
  {
    doc: "Proof of Address",
    purpose: "Residence verification",
    icon: "🏠",
  },
  {
    doc: "SECC / BPL Certificate",
    purpose: "Eligibility proof (if available)",
    icon: "📜",
  },
];

const onlineSteps = [
  {
    step: 1,
    icon: "📱",
    title: "Download ABHA App",
    detail:
      "Download the ABHA Health Records app from Google Play Store or Apple App Store. The app is free.",
    link: "https://play.google.com/store/apps/details?id=in.gov.abdm.abha",
    linkText: "Download on Play Store",
  },
  {
    step: 2,
    icon: "🔐",
    title: "Register with Aadhaar OTP",
    detail:
      "Open the app and select 'Create ABHA'. Choose Aadhaar-based registration and enter the OTP received on your linked mobile number.",
    link: "https://abha.abdm.gov.in",
    linkText: "Register on Website",
  },
  {
    step: 3,
    icon: "🔗",
    title: "Link ABHA with PM-JAY",
    detail:
      "Inside the ABHA app, go to 'Link Health Programs'. Enter your family details to link your ABHA ID with your PM-JAY Ayushman Card record.",
    link: null,
    linkText: null,
  },
  {
    step: 4,
    icon: "⬇️",
    title: "Download Digital Ayushman Card",
    detail:
      "Once linked, download your digital Ayushman Card directly from the app. Use it at any empanelled hospital for cashless treatment.",
    link: "https://pmjay.gov.in",
    linkText: "Official PM-JAY Portal",
  },
];

export default function HowToApply() {
  return (
    <>
      <SEOHead
        title="How to Apply for Ayushman Bharat Card | PM-JAY Application Process"
        description="Step-by-step guide to apply for PM-JAY Ayushman Card. Learn the application process, required documents, and how to get your free health insurance card."
        keywords="PM-JAY application, Ayushman Card application, how to apply PM-JAY, PMJAY registration"
      />
      <div className="bg-gradient-to-br from-saffron/10 to-govt-green/10 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            How to Apply for Ayushman Card
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Follow these simple steps to get your PM-JAY Ayushman Bharat Card
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          {steps.map((step) => (
            <ApplicationStep
              key={step.number}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
              documents={step.documents}
            />
          ))}
        </div>

        {/* Required Documents */}
        <div className="mx-auto mt-12 max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            Required Documents
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {requiredDocuments.map((item, index) => (
              <div
                key={item.doc}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm"
                data-ocid={`docs.item.${index + 1}`}
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-semibold text-foreground">{item.doc}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {item.purpose}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Online Application via ABHA */}
        <div className="mx-auto mt-12 max-w-4xl">
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            Apply Online via ABHA App or Official Portal
          </h2>
          <p className="mb-6 text-muted-foreground">
            You can also get your Ayushman Card digitally through the ABHA app —
            without visiting any centre.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {onlineSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-border bg-gradient-to-br from-navy/5 to-transparent p-5 shadow-sm"
                data-ocid={`apply.item.${item.step}`}
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy/10 text-lg">
                    {item.icon}
                  </span>
                  <span className="rounded-full bg-saffron/10 px-2.5 py-0.5 text-xs font-bold text-saffron">
                    Step {item.step}
                  </span>
                </div>
                <h3 className="mb-1.5 font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.detail}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-govt-green hover:underline"
                    data-ocid={`apply.item.${item.step}.link`}
                  >
                    {item.linkText} →
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://abha.abdm.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-govt-green px-4 py-2.5 text-sm font-semibold text-white hover:bg-govt-green/90 transition-colors"
              data-ocid="apply.abha.primary_button"
            >
              Register ABHA at abha.abdm.gov.in
            </a>
            <a
              href="https://pmjay.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-saffron/50 bg-saffron/10 px-4 py-2.5 text-sm font-semibold text-saffron hover:bg-saffron hover:text-white transition-colors"
              data-ocid="apply.pmjay.secondary_button"
            >
              Visit pmjay.gov.in
            </a>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-lg bg-saffron/10 p-6 md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Important Information
          </h2>
          <ul className="space-y-3 text-lg text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-govt-green text-white text-sm">
                ✓
              </span>
              <span>
                The entire process is completely <strong>FREE</strong>. Do not
                pay anyone for card generation.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-govt-green text-white text-sm">
                ✓
              </span>
              <span>
                Your Ayushman Card covers your entire family with no age limit.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-govt-green text-white text-sm">
                ✓
              </span>
              <span>
                The card is valid across all states in India at any empanelled
                hospital.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-govt-green text-white text-sm">
                ✓
              </span>
              <span>
                For help, call the PM-JAY helpline: <strong>14555</strong> or{" "}
                <strong>1800-111-565</strong>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
