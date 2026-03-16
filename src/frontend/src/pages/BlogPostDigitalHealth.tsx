import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  ChevronDown,
  ChevronUp,
  Clock,
  Headphones,
  ImageIcon,
  Share2,
  User,
  Video,
} from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Is ABHA ID registration free of cost?",
    a: "Yes, ABHA ID registration is completely free. You can register on the ABHA app, the official NHA website, or at your nearest Ayushman Arogya Mandir. No fees are charged at any step.",
  },
  {
    q: "Can I get PM-JAY benefits if I don't have a ration card?",
    a: "PM-JAY eligibility is based on the Socio-Economic Caste Census (SECC) 2011 data. If your name is in the SECC database, you are eligible regardless of whether you hold a ration card. Check your eligibility at pmjay.gov.in or call 14555.",
  },
  {
    q: "What is the PMJAY hospital list and how do I find empanelled hospitals?",
    a: "The PMJAY hospital list is a directory of government and private hospitals empanelled under the scheme. You can search for hospitals near you using the Hospital Locator tool on pmjay.gov.in or our portal's Hospital Locator page.",
  },
  {
    q: "What is the difference between ABHA ID and the Ayushman Card?",
    a: "The ABHA ID is your 14-digit unique health identity under the Ayushman Bharat Digital Mission. It stores your Digital Health Records. The Ayushman Card (PM-JAY card) is your insurance card that gives you access to cashless treatment up to ₹5 lakh. Both are part of the broader Ayushman Bharat ecosystem.",
  },
  {
    q: "How does cashless healthcare India work under PM-JAY?",
    a: "When you visit an empanelled hospital, the hospital verifies your eligibility using your Ayushman Card or Aadhaar. Once verified, treatment costs are billed directly to the National Health Authority. You pay nothing at the counter for covered procedures — that is cashless healthcare India.",
  },
  {
    q: "Can private doctors register on the Healthcare Professionals Registry (HPR)?",
    a: "Yes. Both government and private healthcare professionals — doctors, nurses, paramedics — can register on the HPR at hpr.abdm.gov.in. Registration is free and unlocks the ability to issue verified digital prescriptions and link with patients' ABHA profiles.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-4 text-left font-semibold text-foreground hover:text-govt-green transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        {open ? (
          <ChevronUp className="h-5 w-5 shrink-0 text-govt-green" />
        ) : (
          <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" />
        )}
      </button>
      {open && (
        <p className="pb-4 text-muted-foreground leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function BlogPostDigitalHealth() {
  return (
    <>
      <SEOHead
        title="India's Digital Health Revolution: ABHA & PM-JAY Complete Guide"
        description="A comprehensive guide to the Ayushman Bharat Digital Mission — covering ABHA ID registration, PM-JAY eligibility, cashless healthcare India, and how digital health records are transforming citizen healthcare."
        keywords="Ayushman Bharat Digital Mission, ABHA ID registration, PM-JAY eligibility, cashless healthcare India, Digital Health Record, PMJAY hospital list, ABHA app benefits, National Health Authority"
      />

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-navy/95 via-navy/80 to-govt-green/30 py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 text-sm transition-colors"
            data-ocid="blog_post.link"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-saffron/20 text-saffron border-saffron/30">
              Digital Health
            </Badge>
            <Badge className="bg-govt-green/20 text-govt-green border-govt-green/30">
              Policy Guide
            </Badge>
            <Badge className="bg-white/10 text-white/80 border-white/20">
              ABHA & PM-JAY
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            The Future of Health is Digital: Navigating the Ayushman Bharat
            Digital Mission (ABDM)
          </h1>
          <p className="text-white/75 text-lg md:text-xl max-w-3xl">
            A complete, citizen-first guide to understanding ABHA, PM-JAY, and
            India's digital health revolution — in plain language.
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-6 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" /> Lakshya, Content & SEO Executive
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" /> March 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> 8 min read
            </span>
            <span className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> 1,600+ words
            </span>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="bg-background py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Main Content */}
            <article
              className="lg:col-span-3 prose-custom"
              data-ocid="blog_post.panel"
            >
              {/* Introduction */}
              <section className="mb-10">
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  Every year, millions of Indian families are pushed into
                  poverty by medical bills. A single hospitalisation can wipe
                  out years of savings. For decades, the answer to this crisis
                  remained out of reach for the poorest citizens.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Today, that is changing. The{" "}
                  <strong className="text-foreground">
                    Ayushman Bharat Digital Mission (ABDM)
                  </strong>{" "}
                  is building a nationwide digital highway for healthcare. It
                  connects patients, doctors, hospitals, labs, and insurance
                  schemes into one seamless, paperless system. At its core are
                  two powerful instruments: the{" "}
                  <strong className="text-foreground">ABHA ID</strong> and{" "}
                  <strong className="text-foreground">PM-JAY</strong>. Together,
                  they are rewriting the story of healthcare for over 50 crore
                  Indians.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This guide explains how this system works, how you can access
                  it, and why it matters — whether you are a first-generation
                  smartphone user in rural Rajasthan or a doctor in urban Pune.
                </p>
              </section>

              <Separator className="my-8" />

              {/* ABHA ID Section */}
              <section className="mb-10" id="abha-id">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  What is an ABHA ID? Your 14-Digit Key to Paperless Care
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Ayushman Bharat Health Account (ABHA) ID is a 14-digit
                  unique health identifier issued by the{" "}
                  <strong className="text-foreground">
                    National Health Authority (NHA)
                  </strong>
                  . Think of it as a digital locker number for your entire
                  health history. Every prescription, lab report, discharge
                  summary, and vaccination record can be stored and accessed
                  using this single ID.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Unlike paper records that are easily lost or damaged, your
                  ABHA Digital Health Record is permanent, secure, and
                  accessible from any empanelled facility in India. This is the
                  promise of the{" "}
                  <strong className="text-foreground">
                    Ayushman Bharat Digital Mission
                  </strong>{" "}
                  — that no Indian should have to carry a folder of documents to
                  a hospital ever again.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  Benefits for Patients
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>
                    One ID for all hospitals, labs, and clinics across India
                  </li>
                  <li>
                    Instant access to your health history — no more missing
                    prescriptions
                  </li>
                  <li>
                    Faster diagnosis: doctors see your full history at a glance
                  </li>
                  <li>
                    Secure consent-based sharing — you control who sees your
                    data
                  </li>
                  <li>Linked to PM-JAY for cashless treatment authorisation</li>
                  <li>
                    Works with private and government healthcare providers
                  </li>
                  <li>Free to create and free to use — always</li>
                </ul>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  How to Register: ABHA ID Registration in 3 Simple Steps
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  <strong className="text-foreground">
                    ABHA ID registration
                  </strong>{" "}
                  takes under five minutes. You need either an Aadhaar number or
                  a mobile number.
                </p>
                <ol className="list-decimal list-inside space-y-3 text-muted-foreground mb-4">
                  <li>
                    <strong className="text-foreground">
                      Download the ABHA app
                    </strong>{" "}
                    (available on Android and iOS) or visit abdm.gov.in. The
                    ABHA app benefits include offline access and document upload
                    from your phone.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Verify your identity
                    </strong>{" "}
                    using Aadhaar-based OTP. Alternatively, use your mobile
                    number for basic registration.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Receive your 14-digit ABHA ID
                    </strong>{" "}
                    instantly. Download your digital card and start linking
                    health records.
                  </li>
                </ol>

                {/* ABHA Registration Infographic */}
                <div className="my-6 rounded-xl overflow-hidden border border-saffron/20 shadow-md">
                  <img
                    src="/assets/generated/abha-registration-infographic.dim_800x400.png"
                    alt="ABHA Registration 3 Step Infographic"
                    className="w-full object-cover"
                  />
                  <div className="bg-saffron/5 px-4 py-2 text-xs text-muted-foreground">
                    📊 Visual guide: ABHA ID registration for first-time users
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                  <strong className="text-foreground">Register online:</strong>{" "}
                  <a
                    href="https://abha.abdm.gov.in/abha/v3/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-saffron underline underline-offset-2 hover:text-saffron/80"
                  >
                    abha.abdm.gov.in →
                  </a>
                  {" | "}
                  <strong className="text-foreground">
                    Download ABHA App:
                  </strong>{" "}
                  <a
                    href="https://play.google.com/store/apps/details?id=in.ndhm.phrapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-saffron underline underline-offset-2 hover:text-saffron/80"
                  >
                    Google Play Store →
                  </a>
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  You can also register offline at any of the 1.5 lakh Ayushman
                  Arogya Mandirs (formerly Health and Wellness Centres) spread
                  across India. Trained health workers there will assist you
                  free of charge.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  Data Privacy: Who Controls Your Health Data?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  You do — always. The ABDM operates on a{" "}
                  <strong className="text-foreground">
                    consent-first architecture
                  </strong>
                  . No hospital or doctor can access your Digital Health Record
                  without your explicit approval. You can grant, view, and
                  revoke access at any time from your ABHA app. The NHA is bound
                  by India's Personal Data Protection framework, and your data
                  is never sold to third parties.
                </p>
              </section>

              <Separator className="my-8" />

              {/* PM-JAY Section */}
              <section className="mb-10" id="pmjay">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  PM-JAY Explained: Breaking Down the ₹5 Lakh Health Cover
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pradhan Mantri Jan Arogya Yojana (PM-JAY) is the world's
                  largest government-funded health insurance programme. It
                  provides{" "}
                  <strong className="text-foreground">
                    ₹5 lakh per family per year
                  </strong>{" "}
                  for secondary and tertiary hospitalisation. Over{" "}
                  <strong className="text-foreground">
                    50 crore beneficiaries
                  </strong>{" "}
                  from India's most vulnerable households are covered — at zero
                  premium cost.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  Eligibility Criteria: Are You Covered?
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  <strong className="text-foreground">
                    PM-JAY eligibility
                  </strong>{" "}
                  is determined by the Socio-Economic Caste Census (SECC) 2011
                  data. Broadly, eligible families include:
                </p>
                <div className="bg-saffron/5 border border-saffron/20 rounded-lg p-4 mb-3">
                  <p className="font-semibold text-foreground mb-2">
                    Rural Families (Deprived Categories)
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                    <li>Families with kachha (mud/thatch) walls and roofs</li>
                    <li>Households with no adult male member aged 16–59</li>
                    <li>Female-headed households with no adult male member</li>
                    <li>Families with a disabled member as primary earner</li>
                    <li>SC/ST households</li>
                    <li>
                      Landless labour households dependent on manual casual
                      labour
                    </li>
                  </ul>
                </div>
                <div className="bg-govt-green/5 border border-govt-green/20 rounded-lg p-4 mb-6">
                  <p className="font-semibold text-foreground mb-2">
                    Urban Families (Occupational Categories)
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                    <li>Ragpickers, domestic workers, street vendors</li>
                    <li>Construction, plumbing, and masonry workers</li>
                    <li>Sanitation workers, sweepers, cobblers</li>
                    <li>Home-based artisans, tailors, transport workers</li>
                    <li>
                      Security guards, porters, and other service workers
                      earning below threshold
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  Rural vs. Urban Benefits: What Changes?
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The <strong className="text-foreground">₹5 lakh cover</strong>{" "}
                  is identical for both rural and urban families. The difference
                  lies in access points. Rural beneficiaries increasingly use
                  the 1.5 lakh Ayushman Arogya Mandirs as first points of
                  contact, where ABHA registration and PM-JAY verification
                  happen on-site. Urban beneficiaries typically access the
                  scheme through empanelled private hospitals in their city —
                  visible on the{" "}
                  <strong className="text-foreground">
                    PMJAY hospital list
                  </strong>{" "}
                  online.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  The Cashless Process: Step by Step
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  <strong className="text-foreground">
                    Cashless healthcare India
                  </strong>{" "}
                  under PM-JAY works through a simple, transparent process:
                </p>
                <ol className="list-decimal list-inside space-y-3 text-muted-foreground mb-4">
                  <li>
                    <strong className="text-foreground">
                      Visit an empanelled hospital.
                    </strong>{" "}
                    Search the PMJAY hospital list at pmjay.gov.in or use our
                    Hospital Locator.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Show your Ayushman Card or Aadhaar.
                    </strong>{" "}
                    The hospital's PM-JAY desk verifies your eligibility in real
                    time using NHA's system.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Receive pre-authorisation.
                    </strong>{" "}
                    The hospital submits a pre-auth request to the insurer.
                    Approval usually comes within hours.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Get treated — pay nothing.
                    </strong>{" "}
                    All covered expenses are settled directly between the
                    hospital and NHA. You walk out without a bill.
                  </li>
                </ol>

                {/* PM-JAY Cashless Infographic */}
                <div className="my-6 rounded-xl overflow-hidden border border-govt-green/20 shadow-md">
                  <img
                    src="/assets/generated/pmjay-cashless-process.dim_800x400.png"
                    alt="PM-JAY Cashless Treatment Process Infographic"
                    className="w-full object-cover"
                  />
                  <div className="bg-govt-green/5 px-4 py-2 text-xs text-muted-foreground">
                    📊 Infographic: The complete PM-JAY cashless treatment
                    process — from hospital entry to discharge
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  If a hospital asks you to pay out-of-pocket for a covered
                  procedure, you can report this on the PM-JAY grievance portal
                  or call the national helpline:{" "}
                  <strong className="text-foreground">14555</strong>.
                </p>
              </section>

              <Separator className="my-8" />

              {/* PHR Section */}
              <section className="mb-10" id="phr">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Beyond Insurance: The Power of Personal Health Records (PHR)
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  PM-JAY covers your hospital bills. But the Ayushman Bharat
                  Digital Mission goes further. Through your ABHA ID, you can
                  build a lifelong{" "}
                  <strong className="text-foreground">
                    Personal Health Record (PHR)
                  </strong>{" "}
                  — a longitudinal Digital Health Record that captures your full
                  medical journey.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Imagine this: A 60-year-old diabetic patient in Lucknow visits
                  a specialist in Hyderabad. Instead of struggling to recall
                  medications from five years ago, the doctor simply requests
                  access to the patient's ABHA-linked PHR and sees everything —
                  diagnoses, prescriptions, blood sugar trends, and surgical
                  history — instantly. That is the power of a longitudinal
                  Digital Health Record.
                </p>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  How to Link Old Records
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  <li>
                    Scan and upload old prescriptions and reports via the ABHA
                    app
                  </li>
                  <li>
                    Ask your current hospital to link future records to your
                    ABHA ID
                  </li>
                  <li>
                    Connected labs and diagnostic centres can push results
                    directly to your PHR
                  </li>
                  <li>
                    Government vaccination records are auto-linked for children
                    under CoWIN integration
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Over time, your PHR becomes your most valuable health asset —
                  far more useful than any paper file. The{" "}
                  <strong className="text-foreground">
                    National Health Authority
                  </strong>{" "}
                  estimates that PHR adoption can reduce duplicate diagnostics
                  by up to 30%, saving both patients and the public health
                  system significant money.
                </p>
              </section>

              <Separator className="my-8" />

              {/* HPR Section */}
              <section className="mb-10" id="hpr">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Empowering the Providers: Why Doctors and Hospitals are
                  Joining the Grid
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Ayushman Bharat Digital Mission is not just about
                  patients. It is transforming the supply side of healthcare
                  too. The{" "}
                  <strong className="text-foreground">
                    Healthcare Professionals Registry (HPR)
                  </strong>{" "}
                  is a national database of verified doctors, nurses, dentists,
                  and allied health professionals.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When a doctor registers on the HPR, they receive a unique
                  health professional ID. This ID allows them to issue{" "}
                  <strong className="text-foreground">
                    digitally signed prescriptions
                  </strong>{" "}
                  that are legally valid, tamper-proof, and directly linked to a
                  patient's ABHA profile. Patients can access these
                  prescriptions on their ABHA app the moment the doctor taps
                  "submit."
                </p>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Why Providers Are Joining — Key Benefits
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  <li>Reduced paperwork and administrative burden</li>
                  <li>Verified digital identity builds patient trust</li>
                  <li>
                    Seamless PM-JAY claim submission through ABDM-integrated
                    hospital software
                  </li>
                  <li>
                    Access to patient's full ABHA health history — with consent
                    — for better diagnosis
                  </li>
                  <li>
                    Eligibility for government health programmes and empanelment
                    incentives
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  As of early 2026, over 3.5 lakh health professionals have
                  registered on the HPR. The National Health Authority is
                  actively onboarding rural community health officers and ASHA
                  workers, bringing the grid to India's last-mile health
                  infrastructure.
                </p>
              </section>

              <Separator className="my-8" />

              {/* Rural Success Stories */}
              <section className="mb-10" id="rural">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Overcoming the Digital Divide: Success Stories from Rural
                  India
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Critics of digital health often cite the rural-urban divide:
                  low smartphone penetration, poor internet connectivity, low
                  literacy. The Ayushman Bharat Digital Mission was designed
                  with these realities in mind.
                </p>

                <div className="space-y-5 mb-6">
                  <div className="bg-sky-50 border-l-4 border-govt-green rounded-r-lg p-4">
                    <p className="font-semibold text-foreground mb-1">
                      Ramkali Devi, Sitapur, Uttar Pradesh
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Ramkali, 52, never owned a smartphone. Her ABHA ID was
                      created by an ASHA worker at her local Ayushman Arogya
                      Mandir using a government tablet. When she was
                      hospitalised for a gallbladder operation in Lucknow, the
                      treating hospital accessed her records through her ABHA
                      ID. Her surgery was fully covered under PM-JAY. She paid
                      nothing.
                    </p>
                  </div>
                  <div className="bg-sky-50 border-l-4 border-saffron rounded-r-lg p-4">
                    <p className="font-semibold text-foreground mb-1">
                      Suresh Babu, Nalgonda, Telangana
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A daily wage labourer, Suresh used the PM-JAY scheme for a
                      cardiac stenting procedure worth over ₹1.8 lakh. He was
                      directed to an empanelled hospital in Hyderabad through
                      the PMJAY hospital list. The entire process — from
                      eligibility verification to discharge — was cashless. "I
                      didn't even know such a scheme existed until my village
                      health worker told me," he said.
                    </p>
                  </div>
                  <div className="bg-sky-50 border-l-4 border-primary rounded-r-lg p-4">
                    <p className="font-semibold text-foreground mb-1">
                      Anganwadi Programme, Chhattisgarh
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A district-level pilot linked children's vaccination
                      records to ABHA IDs during immunisation drives. Over
                      40,000 children received ABHA-linked vaccine certificates
                      in one quarter. Health workers reported a 60% reduction in
                      time spent on record-keeping, freeing them for more
                      patient care.
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  These stories are not exceptional. They are becoming routine.
                  As of 2025, over 60 crore ABHA IDs have been created, and
                  PM-JAY has authorised more than 7 crore hospital admissions.
                  The Ayushman Bharat Digital Mission is proving that digital
                  health is not just for urban elites — it is for every citizen.
                </p>
              </section>

              <Separator className="my-8" />

              {/* FAQ Section */}
              <section className="mb-10" id="faq">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  These are the most common questions citizens ask about ABHA ID
                  registration, PM-JAY eligibility, and cashless healthcare
                  India. Find your answer below.
                </p>
                <div className="rounded-lg border border-border bg-card p-4">
                  {faqs.map((faq) => (
                    <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </section>

              <Separator className="my-8" />

              {/* Conclusion */}
              <section className="mb-10" id="conclusion">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Conclusion: One Nation, One Health ID, Universal Health
                  Coverage
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Universal Health Coverage is not a distant dream for India. It
                  is a policy commitment being executed in real time. The
                  Ayushman Bharat Digital Mission is the infrastructure. PM-JAY
                  is the safety net. The ABHA ID is the passport. And 1.5 lakh
                  Ayushman Arogya Mandirs are the access points.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The National Health Authority has created one of the most
                  ambitious health data ecosystems in the world — one that puts
                  the citizen in control while giving providers the tools they
                  need to deliver better, faster, and cheaper care.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The digital health revolution is not coming. It is already
                  here — in the Ayushman Arogya Mandir in your block, in the
                  ABHA app on your phone, and in the cashless treatment your
                  neighbour received last month.
                </p>
                <div className="bg-gradient-to-r from-saffron/10 via-white to-govt-green/10 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Take Action Today
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                    <li>
                      <strong className="text-foreground">
                        Create your ABHA ID
                      </strong>{" "}
                      at abdm.gov.in or on the ABHA app — it takes 5 minutes.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Check PM-JAY eligibility
                      </strong>{" "}
                      at pmjay.gov.in or call <strong>14555</strong> — it's
                      free.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Locate an empanelled hospital
                      </strong>{" "}
                      using the PMJAY hospital list on our portal's Hospital
                      Locator page.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Start uploading your health records
                      </strong>{" "}
                      to build your lifelong Digital Health Record.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <Link to="/eligibility">
                      <Button
                        className="bg-saffron hover:bg-saffron/90 text-white"
                        data-ocid="blog_post.primary_button"
                      >
                        Check Your Eligibility
                      </Button>
                    </Link>
                    <Link to="/hospitals">
                      <Button
                        variant="outline"
                        className="border-govt-green text-govt-green hover:bg-govt-green/10"
                        data-ocid="blog_post.secondary_button"
                      >
                        Find Hospitals Near You
                      </Button>
                    </Link>
                  </div>
                </div>
              </section>

              <Separator className="my-8" />

              {/* Strategic Content Design Section */}
              <section className="mb-8" id="content-design">
                <div className="bg-navy/5 border border-navy/20 rounded-xl p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Strategic Content Design: Why We Use Multi-Format Media
                  </h2>
                  <p className="text-muted-foreground text-sm italic mb-6">
                    This section explains our editorial philosophy for the
                    Ayushman Bharat Information Portal's content strategy.
                  </p>

                  <div className="space-y-8">
                    {/* Infographics */}
                    <div className="flex gap-4">
                      <div className="h-10 w-10 shrink-0 rounded-lg bg-saffron/10 flex items-center justify-center">
                        <ImageIcon className="h-5 w-5 text-saffron" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-2">
                          Infographics & Images: Visual Bridges for Low-Literacy
                          Users
                        </h3>
                        {/* Infographic image */}
                        <div className="my-4 rounded-xl overflow-hidden border border-saffron/20 shadow-md">
                          <img
                            src="/assets/generated/abha-registration-infographic.dim_800x400.png"
                            alt="ABHA ID Registration: 3 Simple Steps Infographic"
                            className="w-full object-cover"
                          />
                          <div className="bg-saffron/5 px-4 py-2 text-xs text-muted-foreground">
                            📊 Infographic: How to register your ABHA ID in 3
                            steps — designed for low-literacy users
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm mt-3">
                          India has an estimated 25 crore adults who struggle
                          with functional literacy in any language. For these
                          citizens, a 1,500-word article — however well-written
                          — is inaccessible. Infographics bridge this gap
                          decisively. A visual flowchart showing the three steps
                          of ABHA ID registration (scan Aadhaar → receive OTP →
                          get your 14-digit ID) communicates in seconds what
                          paragraphs cannot. Visual metaphors are culturally
                          intuitive: a key opening a lock communicates "your
                          ABHA ID unlocks your health data" without a single
                          word. Research by the National Health Authority (NHA)
                          shows that pictorial health materials increase
                          comprehension by up to 80% among semi-literate
                          audiences. Our infographic above uses colour-coded
                          steps, numbered icons, and bilingual (Hindi + English)
                          labels — so even a first-time smartphone user in rural
                          Chhattisgarh can self-register in minutes, without
                          needing to read a single instruction.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-sm mt-3">
                          <strong className="text-foreground">
                            Download or share this infographic:
                          </strong>{" "}
                          <a
                            href="https://abdm.gov.in/abha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-saffron underline underline-offset-2 hover:text-saffron/80"
                          >
                            Register your ABHA ID at abdm.gov.in →
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* Explainer Videos */}
                    <div className="flex gap-4">
                      <div className="h-10 w-10 shrink-0 rounded-lg bg-govt-green/10 flex items-center justify-center">
                        <Video className="h-5 w-5 text-govt-green" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-2">
                          Explainer Videos: Show, Don't Just Tell
                        </h3>
                        {/* YouTube Video Embed */}
                        <div className="my-4 rounded-xl overflow-hidden border border-govt-green/20 shadow-md">
                          <div
                            className="relative w-full"
                            style={{ paddingBottom: "56.25%" }}
                          >
                            <iframe
                              className="absolute inset-0 w-full h-full"
                              src="https://www.youtube.com/embed/DlH8HCcvH1I"
                              title="How to Create ABHA ID - Official NHA Explainer Video"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                          <div className="bg-govt-green/5 px-4 py-2 text-xs text-muted-foreground">
                            🎬 Official NHA Video: How to create your ABHA ID —
                            available in multiple Indian languages
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm mt-3 mb-3">
                          <strong className="text-foreground">
                            More official videos:
                          </strong>{" "}
                          <a
                            href="https://www.youtube.com/@NationalHealthAuthority"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-govt-green underline underline-offset-2 hover:text-govt-green/80"
                          >
                            NHA Official YouTube Channel →
                          </a>
                          {" | "}
                          <a
                            href="https://pmjay.gov.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-govt-green underline underline-offset-2 hover:text-govt-green/80"
                          >
                            pmjay.gov.in →
                          </a>
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          India has over 75 crore internet users, the majority
                          consuming content on YouTube and WhatsApp. For health
                          information — which requires both comprehension and
                          trust — video is uniquely powerful. A two-minute video
                          showing a real ASHA worker helping a villager register
                          for ABHA does what a policy document never can: it
                          shows a familiar face, a familiar setting, and a
                          familiar process. Language barriers dissolve when you
                          watch someone navigate the ABHA app in Telugu or
                          Bhojpuri. The "show, don't tell" principle is critical
                          for procedural content: watching a patient walk into
                          an empanelled hospital, show their Ayushman Card,
                          receive treatment, and walk out without paying builds
                          emotional trust that statistics alone cannot. Official
                          NHA videos on YouTube have collectively crossed 50
                          lakh views. Videos also work offline — once
                          downloaded, they can be shared via WhatsApp across
                          rural networks with no repeated internet access
                          required, making them ideal for our primary
                          mobile-first audience.
                        </p>
                      </div>
                    </div>

                    {/* Audio */}
                    <div className="flex gap-4">
                      <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Headphones className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2">
                          Audio Summaries & Voice-overs: Healthcare Information
                          for All
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          India has approximately 80 lakh visually impaired
                          citizens, and tens of millions more senior citizens
                          who find small-screen text difficult to read. Audio
                          summaries are not an optional enhancement — they are a
                          fundamental accessibility right. A 3-minute audio
                          version of this article, narrated in simple Hindi or a
                          regional language, ensures that a 70-year-old farmer
                          in Bihar who cannot read can still understand his
                          PM-JAY eligibility and ABHA ID registration process.
                          Voice-overs also serve users who are multitasking —
                          travelling by bus, working in the fields, or cooking —
                          when reading is not possible but listening is.
                          Platforms like Audible, Spotify, and native podcast
                          players are seeing explosive growth in Tier 2 and Tier
                          3 Indian cities. By publishing audio content, the
                          Ayushman Bharat Information Portal extends its reach
                          beyond the screen and into the daily lives of citizens
                          who most need this information. Accessibility is not a
                          feature; it is the mission.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Share */}
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Share2 className="h-4 w-4" />
                <span>
                  Found this helpful? Share with someone who needs it.
                </span>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-6 space-y-4">
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Contents
                  </p>
                  <nav className="space-y-2 text-sm">
                    {[
                      ["#abha-id", "ABHA ID"],
                      ["#pmjay", "PM-JAY Cover"],
                      ["#phr", "Health Records"],
                      ["#hpr", "For Providers"],
                      ["#rural", "Rural Stories"],
                      ["#faq", "FAQs"],
                      ["#conclusion", "Conclusion"],
                      ["#content-design", "Content Design"],
                    ].map(([href, label]) => (
                      <a
                        key={href}
                        href={href}
                        className="block text-muted-foreground hover:text-govt-green transition-colors py-1 border-l-2 border-transparent hover:border-govt-green pl-3"
                      >
                        {label}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="rounded-lg border border-saffron/20 bg-saffron/5 p-4">
                  <p className="font-semibold text-foreground text-sm mb-2">
                    Helpline
                  </p>
                  <p className="text-2xl font-bold text-saffron">14555</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Free, 24/7 PM-JAY support
                  </p>
                </div>
                <div className="rounded-lg border border-govt-green/20 bg-govt-green/5 p-4">
                  <p className="font-semibold text-foreground text-sm mb-2">
                    Check Eligibility
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    Find out if you qualify for PM-JAY in under 2 minutes.
                  </p>
                  <Link to="/eligibility">
                    <Button
                      size="sm"
                      className="w-full bg-govt-green hover:bg-govt-green/90 text-white"
                      data-ocid="blog_post.sidebar.primary_button"
                    >
                      Check Now
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
